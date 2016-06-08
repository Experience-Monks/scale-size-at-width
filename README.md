# scale-size-at-width
Get proportionately scaled size relative to base width.

## Syntax
```scaleSizeAtWidth(valueAtBaseWidth, baseWidth [, limits])```

* valueAtBaseWidth: (Number) desired element's size (in pixels) relative to base width
* baseWidth: (Number) base width
* limits - an optional object with ```minScaleWidth``` and ```maxScaleWidth``` properties. If set, the size will scale within allowed range and stay fixed beyond the limits.

## Usage
```javascript

var scaleSizeAtWidth = require('scale-size-at-width');

var size = scaleSizeAtWidth(200, 1280, {
  minScaleWidth: 1024,
  maxScaleWidth: 1920
});

```

In the above example, ```size``` will be:
* 200px at width of 1280px and proportionately scaled between 1024px and 1920px
* 160px at width of 1023px and less
* 300px at width of 1921px and more

## Install
```sh
npm install scale-size-at-width --save
``` 
 
## Test
```sh
npm t
```
NOTE: Test requires [beefy](http://didact.us/beefy/) to be installed globally.

 
## License
MIT, see [LICENSE.md](http://github.com/Jam3/scale-size-at-width/blob/master/LICENSE) for details.
