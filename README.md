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

```js
$('header').find('h1,p,ul,li').inTurn('normal', 'fadeIn', 'fast');
```
This will spawn the elements from the header, in order.

## Order setup

3 order options are available:

* `normal` will animate elements in order
* `reverse` will animate elements in reverse order
* `random` will animate elements in a random order

## See it in action
Check out the [github page](http://qur2.github.com/jquery-inturn/ "jQuery.inTurn github page") to see the left menu spawn in a elegant way!
