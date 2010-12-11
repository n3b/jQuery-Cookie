jQuery Cookie Plugin
====================

Usage
-----
Read (URL-encoded) cookie:
    var cookie = $.cookie('name');

Read raw (not URL-encoded) cookie:
    var cookie = $.cookie('name', {raw: true});
    
Create session cookie:
    $.cookie('name', 'value');

Create raw (not URL-encoded) session cookie:
    $.cookie('name', 'value', {raw: true});

Create cookie with additional options (see http://en.wikipedia.org/wiki/HTTP_cookie):
    $.cookie('name', 'value', {expires: 7, path: '/', domain: 'sub.example.org', secure: true});

Delete cookie:
    $.cookie('name', null);

License
-------
Released under the MIT license:
http://creativecommons.org/licenses/MIT/

Source Code & Download
----------------------
https://github.com/blueimp/jQuery-Cookie
