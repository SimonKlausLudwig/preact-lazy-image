import {Component} from 'preact';

export default class LazyImage extends Component {

    componentWillMount() {
        this.init(this.props);
    }

    componentDidMount() {
        this.observe();
    }

    componentWillUnmount() {
        this.unobserve();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.src !== this.props.src) {
            this.unobserve();
            this.init(nextProps);
            this.observe();
        }
    }

    init(props) {
        this.setState({url: props.placeholder});
    }

    unobserve() {
        if (this.observer) {
            this.observer.unobserve(this.img);
        }
    }


    observe() {
        let that = this;
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    this.loadRealImage(that.props.src);
                    this.observer.unobserve(entry.target);
                }
            })
        }, {
            rootMargin: this.props.rootMargin || '150px 0px',
            threshold: 0.1
        });
        this.observer.observe(this.img);
    }

    loadRealImage(src) {
        this.loadImage(src, (a) => {
            this.setState({url: src, loaded: true});
        })
    }

    loadImage(src, onLoad) {
        if (this.img.src.endsWith(src)) {
            console.log("image already loaded!");
            onLoad();
            return;
        }
        let img = new Image();
        img.onload = onLoad;
        img.src = src;
    }

    render() {
        return <div style="display: grid;" className={this.props.className}>
            <img style=" grid-row: 1;grid-column: 1;opacity: 1;align-self: end;z-index: 0;" alt="lazy-image-main"
                 ref={img => this.img = img}
                 src={this.state.url}/>
            <img alt="lazy-image-placeholder"
                 style=" grid-row: 1;grid-column: 1;opacity: 1;align-self: end;"
                 src={this.props.backup || this.props.placeholder}/>
        </div>
    };
}
