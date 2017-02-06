# lURL

A simple JavaScript library to check if a URL is legal against the RFC standards. 

lURL is available through an installation from npm
[lurl](https://npmjs.org/package/lurl)

```
npm install lurl
```

Or it can also be downloaded from source and used in the browser
[lurl](https://github.com/interbred-monkey/lurl/blob/master/source/lurl.js)

## Node usage
```
var lurl = require('lurl');

if (lurl(url)) {
  
  // legal URL

}

else {
  
  // invalid URL

}

```