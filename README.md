# jQuery Cookie Plugin

## Usage
Read cookie:
```js
var cookie = $.cookie('name');
```

Read raw (not URL-decoded) cookie:
```js
var cookie = $.cookie('name', {raw: true});
```

Retrieve available cookies as array of objects with name and value attributes:
```js
var cookies = $.cookie();
```

Retrieve available cookies with raw (not URL-decoded) values:
```js
var cookies = $.cookie({raw: true});
```

Create session cookie:
```js
$.cookie('name', 'value');
```

Create raw (not URL-encoded) session cookie:
```js
$.cookie('name', 'value', {raw: true});
```

Create cookie with expiration date:
```js
$.cookie('name', 'value', {expires: new Date(2012, 12, 31)});
```

Create cookie with expiration date in number of days:
```js
$.cookie('name', 'value', {expires: 7});
```

Create cookie with path setting:
```js
$.cookie('name', 'value', {path: '/'});
```

Create cookie with domain setting:
```js
$.cookie('name', 'value', {domain: 'sub.example.org'});
```

Create cookie with secure setting:
```js
$.cookie('name', 'value', {secure: true});
```

Create cookie with multiple settings:
```js
$.cookie('name', 'value', {expires: 7, path: '/', domain: 'sub.example.org', secure: true});
```

Delete cookie:
```js
$.cookie('name', null);
```

## Requirements
[jQuery](http://jquery.com/) v. 1.4+

## License
Released under the [MIT license](http://creativecommons.org/licenses/MIT/).

## Source Code & Download
* Browse and checkout the [source code](https://github.com/blueimp/jQuery-Cookie).
* [Download](https://github.com/blueimp/jQuery-Cookie/archives/master) the project to add the plugin to your website.
