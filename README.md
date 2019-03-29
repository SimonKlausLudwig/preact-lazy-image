###### A Lazy-Loading Image Library with Oberserver API and Grid Layout

This library use the Observer API to detect when a image need to be loaded. If you want to support older
browser you have to add a Polyfil(https://github.com/w3c/IntersectionObserver/tree/master/polyfill). 

The library use display: grid; to place the images above each other, this assures that the lazy-loaded-image
does change the width or height of the component.

```
<LazyImage data-s="product_image" placeholder={"data:image/gif;base64,R0lGOD..."} src={'/image/test.jpg'}/>
```
