/*!
 * jQuery inTurn plugin
 * https://github.com/qur2/inturn
 *
 * Copyright 2012, Aurélien Scoubeau
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
;(function($){
    /**
     * jQuery plugin that animates each element of a set in turn.
     * It's a wrapper around jQuery animation functions that will animate
     * the elements one after each other.
     * For instance, to spawn menu elements, one could use:
     * $('.menu li').inTurn('random', 'fadeIn', 'fast');
     */
    $.fn.inTurn = function(order, fx) {
        var args = Array.prototype.slice.call(arguments, 2);
        var complete = $.noop;
        if ($.isFunction(args[args.length-1])) {
            complete = args.pop();
        }
        var self = this,
            queue = [];
        // compute order
        for (var i=0, max=this.length; i<max; i++)
            queue.push(i);
        if ('random' == order)
            queue = $.shuffle(queue);
        else if ('reverse' == order)
            queue = queue.reverse();
        // wrap complete callback
        if (!$.isFunction(fx))
            fx = $.fn[fx];
        recursiveComplete = function() {
            complete.call(this);
            if (queue.length) {
                var el = $(self[queue.shift()]);
                fx.apply(el, args);
            }
        };
        args.push(recursiveComplete);
        fx.apply($(self[queue.shift()]), args);
        return self;
    };

    /**
     * Shuffles the elements of the given array.
     * @see http://jsfromhell.com/array/shuffle
     */
    $.shuffle = function(v) {
        for (var j, x, i=v.length; i; j=parseInt(Math.random()*i), x=v[--i], v[i]=v[j], v[j]=x);
        return v;
    };
})(jQuery);
