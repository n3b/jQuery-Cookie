/*
 * jQuery Cookie Plugin Tests 1.0
 * https://github.com/blueimp/jQuery-Cookie
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 */

/*jslint browser: true, regexp: false, unparam: true */
/*global $, module, test, strictEqual, deepEqual */

$(function () {
    'use strict';

    var lifecycle = {
        setup: function () {
            var cookies = document.cookie.split('; ');
            $.each(cookies, function (index, cookie) {
                var name = cookie.split('=')[0],
                    str = name + '=; expires=' + new Date(0).toUTCString();
                if (name) {
                    document.cookie = str;
                    document.cookie = str + '; path=' + location.pathname;
                }
            });
        }
    };

    module('Read', lifecycle);
    
    test('Reading simple cookie', function () {
        document.cookie = 'name=value';
        strictEqual($.cookie('name'), 'value');    
    });
    
    test('Reading encoded cookie', function () {
        document.cookie = 'name=encoded%20value';
        strictEqual($.cookie('name'), 'encoded value');    
    });
    
    test('Reading raw cookie', function () {
        document.cookie = 'name=encoded%20value';
        strictEqual($.cookie('name', {raw: true}), 'encoded%20value');    
    });

    test('Reading empty cookie', function () {
        document.cookie = 'name=';
        strictEqual($.cookie('name'), '');    
    });
    
    test('Reading cookie with a boolean as name', function () {
        document.cookie = 'true=value';
        strictEqual($.cookie(true), 'value');    
    });
    
    test('Reading cookie with a number as name', function () {
        document.cookie = '1234567890=value';
        strictEqual($.cookie(1234567890), 'value');    
    });
    
    test('Reading nonexistent cookie', function () {
        strictEqual($.cookie('name'), null);    
    });
    
    test('Retrieving cookies list', function () {
        document.cookie = 'name=value';
        deepEqual($.cookie(), [{name: 'name', value: 'value'}]);    
    });
    
    test('Retrieving cookies list with raw values', function () {
        document.cookie = 'name=encoded%20value';
        deepEqual(
            $.cookie({raw: true}),
            [{name: 'name', value: 'encoded%20value'}]
        );    
    });
    
    module('Create', lifecycle);
    
    test('Creating simple cookie', function () {
        $.cookie('name', 'value');
        strictEqual(document.cookie, 'name=value');
    });

    test('Creating encoded cookie', function () {
        $.cookie('name', 'encoded value');
        strictEqual(document.cookie, 'name=encoded%20value');
    });

    test('Creating raw cookie', function () {
        $.cookie('name', 'encoded value', {raw: true});
        strictEqual(document.cookie, 'name=encoded value');
    });
    
    test('Creating empty cookie', function () {
        $.cookie('name', '');
        strictEqual(document.cookie, 'name=');
    });

    test('Creating cookie with boolean value', function () {
        $.cookie('name', true);
        strictEqual(document.cookie, 'name=true');
    });

    test('Creating cookie with number value', function () {
        $.cookie('name', 1234567890);
        strictEqual(document.cookie, 'name=1234567890');
    });
    
    test('Returning created cookie string', function () {
        strictEqual($.cookie('name', 'value'), 'name=value; path=/');
    });
        
    test('Creating cookie with expiration date', function () {
        var date = new Date();
        date.setDate(date.getDate() + 7);
        strictEqual(
            $.cookie('name', 'value', {expires: date}),
            'name=value; expires=' + date.toUTCString() + '; path=/'
        );
    });
    
    test('Creating cookie with expiration date in number of days', function () {
        var date = new Date(),
            regexp = / \d\d:.+$/;
        date.setDate(date.getDate() + 7);
        strictEqual(
            $.cookie('name', 'value', {expires: 7}).replace(regexp, ''),
            'name=value; expires=' + date.toUTCString().replace(regexp, '')
        );
    });
    
    test('Creating cookie with path setting', function () {
        strictEqual(
            $.cookie('name', 'value', {path: location.pathname}),
            'name=value; path=' + location.pathname
        );
    });
    
    test('Creating cookie with domain setting', function () {
        strictEqual(
            $.cookie('name', 'value', {domain: location.hostname}),
            'name=value; path=/; domain=' + location.hostname
        );
    });
    
    test('Creating cookie with secure setting', function () {
        strictEqual(
            $.cookie('name', 'value', {secure: true}),
            'name=value; path=/; secure'
        );
    });
    
    test('Creating cookie with multiple settings', function () {
        var date = new Date();
        strictEqual(
            $.cookie('name', 'value', {
                expires: date,
                path: location.pathname,
                domain: location.hostname,
                secure: true
            }),
            'name=value; expires=' + date.toUTCString() +
                '; path=' + location.pathname +
                '; domain=' + location.hostname +
                '; secure'
        );
    });
    
    module('Delete', lifecycle);
    
    test('Deleting cookie', function () {
        document.cookie = 'name=value; path=/';
        $.cookie('name', null);
        strictEqual(document.cookie, '');
    });

});