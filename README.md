# jQuery.inTurn

jQuery.inTurn is a utility plugin that allows to visually chain animation
functions on matched elements.
It can be used with any animation plugin as long as the last parameter is the callback
for complete animation. It does not support animate with complete callback given
as an object property.

## Quick Example

```js
$('.menu li').inTurn('normal', 'fadeIn', 'fast');
```
This will make spawn the list elements one by one, in order.
