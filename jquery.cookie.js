/**
 * jQuery Cookie plugin 1.0
 *
 * Copyright 2010, Sebastian Tschan, AQUANTUM
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 *
 * https://blueimp.net
 * http://www.aquantum.de
 *
 * Based on
 * Cookie plugin
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * http://plugins.jquery.com/files/jquery.cookie.js.txt
 */

/*jslint browser: true */
/*global jQuery */

(function ($) {
    
    var getCookie = function (key, options) {
        options = options || {};
        var result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie),
            decode = options.raw ? String : decodeURIComponent;
        return result ? decode(result[1]) : null;
    },

    setCookie = function (key, value, options) {
        options = options || {};
        if (value === null) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires;
            options.expires = new Date();
            options.expires.setDate(options.expires.getDate() + days);
        }
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '',
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    };
    
    $.cookie = function (key, value, options) {
        if (arguments.length > 1 && (value === null || typeof value !== 'object')) {
            return setCookie(key, value, options);
        }
        return getCookie(key, value);
    };

}(jQuery));