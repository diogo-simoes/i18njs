# i18n.js #
### Simple client-side i18n tool ###

## Features ##

This util is aimed for anyone looking for internationalization of their text contents without having to rely on the server to deal with the locale changes.
Basically multi-language contents are served instead of resolved contents, and **i18n.js** manages locale change events strictly on client-side.   
Besides element content, two types of html attributes are supported:

1. **Content** - *data-i18n="key"*   
   This can be commonly used to define text content for `<div>`, `<span>` and `<p>` nodes.   
   e.g. `<p data-18n="key.to.my.content"></p>`

2. **Placehold attribute** - *data-i18n-placeholder="key"*   
   This can be used to define text content for `<input>` placeholders.   
   e.g. `<input type="text" data-i18n-placeholder="key.to.my.placeholder">`

3. **Value attribute** - *data-i18n-value="key"*   
   This can be used to define text content for `<input>` values.   
   e.g. `<input type="submit" data-i18n-value="key.to.my.value">`

## Demo ##

You can check out this live demo: [codepen.io/diogo-simoes/pen/JXRORg](http://codepen.io/diogo-simoes/pen/JXRORg)
The same demo is available within this project.

## Intructions ##
1. Store your multi-language labels in json format: `localized-content.json` and serve it together with your html.
2. Write your markup with key references using `data-i18n` attributes.
3. On DOM load, call the i18n constructor followed by the invocation of the traverse resolver:

	```javascript
	var i18n = new I18n();
	i18n.localize();
	```

4. When handling language changes events, notify i18n:

	```javascript
	function langHandler (newlang) {
		i18n.lang(newlang)
	}
	```

Calling `i18n.lang('en')` will not only update i18n's state but also perform another traverse.
Also `i18n.localize()` should be called after any dynamic update that might have changed the DOM.

## JSON contract ##

There is only one rule you must follow when modeling these bundles: leaf nodes must have language keys!   
For instance, if you are passing this structure:
```javascript
{
	"mySite": {
		"title": {
			"en": "My Website",
			"pt": "A minha página"
		},
		"section": {
			"article": {
				"summary": {
					"en": "An abridged description of this article...",
					"pt": "Uma descrição resumida deste artigo..."
				}
			}
		}
	}
}
```
 you can use keys `mySite.title` and `mySite.section.article.summary`, by writing your markup as such:

`<h1 data-i18n="mySite.title"></h1>`

or

`<p data-i18n="mySite.section.article.summary"></p>`

## jQuery ##
This util relies on jQuery to perform some DOM manipulation. I would recommend using an updated version (1.12.x or 2.x), although this will probably run with any older version since it is only taking advantage of `$.getJSON()` and the jQuery selector function `$()`.

-------
© 2016 Diogo Simões - [diogosimoes.com](http://diogosimoes.com)
