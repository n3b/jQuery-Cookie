jQuery Cookie Plugin
====================

Usage
-----
Read cookie:
    var cookie = $.cookie('name');

Read raw (not URL-decoded) cookie:
    var cookie = $.cookie('name', {raw: true});

Retrieve available cookies as array of objects with name and value attributes:
    var cookies = $.cookie();

Retrieve available cookies with raw (not URL-decoded) values:
    var cookies = $.cookie({raw: true});

Create session cookie:
    $.cookie('name', 'value');

Create raw (not URL-encoded) session cookie:
    $.cookie('name', 'value', {raw: true});

Create cookie with expiration date:
    $.cookie('name', 'value', {expires: new Date(2012, 12, 31)});

Create cookie with expiration date in number of days:
    $.cookie('name', 'value', {expires: 7});

Create cookie with path setting:
    $.cookie('name', 'value', {path: '/'});

Create cookie with domain setting:
    $.cookie('name', 'value', {domain: 'sub.example.org'});

Create cookie with secure setting:
    $.cookie('name', 'value', {secure: true});

Create cookie with multiple settings:
    $.cookie('name', 'value', {expires: 7, path: '/', domain: 'sub.example.org', secure: true});

Delete cookie:
    $.cookie('name', null);

Requirements
------------
jQuery v. 1.4+

License
-------
Released under the MIT license:
http://creativecommons.org/licenses/MIT/

Source Code & Download
----------------------
https://github.com/blueimp/jQuery-Cookie
