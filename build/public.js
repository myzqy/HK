/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"index"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// require("../plugin/jquery-1.11.3.min.js");
	//引入样式文件
	__webpack_require__(11); 
	console.log("巴赫旧约");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "/*\n* 重置默认样式\n* */\n/* CSS Document */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nfont,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nabbr,\narticle,\naside,\naudio,\ncanvas,\ndatalist,\ndetails,\nfigure,\nfooter,\nhgroup,\nheader,\nmark,\nmenu,\nmeter,\nnav,\noutput,\nprogress,\nsection,\ntime,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n.article,\naside,\naudio,\ncanvas,\ndatalist,\ndetails,\nfigure,\nfooter,\nhgroup,\nheader,\nmark,\nmenu,\nmeter,\nnav,\noutput,\nprogress,\nsection,\ntime,\nvideo {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul,\nli {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n/* remember to define focus styles! */\n:focus {\n  outline: 0;\n}\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none;\n}\ndel {\n  text-decoration: line-through;\n}\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nlegend {\n  display: none;\n}\nimg {\n  vertical-align: middle;\n}\ninput,\nbutton {\n  overflow: visible;\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n/*定位*/\n.tl {\n  text-align: left;\n}\n.tc {\n  text-align: center;\n}\n.tr {\n  text-align: right;\n}\n.bc {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fl {\n  float: left;\n  display: inline;\n}\n.fr {\n  float: right;\n  display: inline;\n}\n.cb {\n  clear: both;\n}\n.cl {\n  clear: left;\n}\n.cr {\n  clear: right;\n}\n.clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.vm {\n  verticle-align: middle;\n}\n.vt {\n  vertical-align: top;\n}\n.pr {\n  position: relative;\n}\n.pa {\n  position: absolute;\n}\n.zoom {\n  zoom: 1;\n}\n.hide {\n  display: none;\n}\n.show {\n  display: block;\n}\n.inlineblock {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n}\n.cp {\n  cursor: pointer;\n}\n.oh {\n  position: relative;\n  overflow: hidden;\n}\n/*长度高度*/\n.w0 {\n  width: 0;\n}\n.w25rem {\n  winth: 2.5rem;\n}\n.w {\n  width: 100%;\n}\n.h20 {\n  height: 20px;\n}\n.h50 {\n  height: 50px;\n}\n.h80 {\n  height: 80px;\n}\n.h100 {\n  height: 100px;\n}\n.h200 {\n  height: 200px;\n}\n.h {\n  height: 100%;\n}\n.h25rem {\n  height: 2.5rem;\n}\n/*边距*/\n.mauto {\n  margin: 0;\n}\n.m10 {\n  margin: 10px;\n}\n.m20 {\n  margin: 20px;\n}\n.m30 {\n  margin: 30px;\n}\n.mt5 {\n  margin-top: 5px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.mt15 {\n  margin-top: 15px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.mt25 {\n  margin-top: 25px;\n}\n.mt30 {\n  margin-top: 30px;\n}\n.mt50 {\n  margin-top: 50px;\n}\n.mt100 {\n  margin-top: 100px;\n}\n.mb5 {\n  margin-bottom: 5px;\n}\n.mb10 {\n  margin-bottom: 10px;\n}\n.mb15 {\n  margin-bottom: 15px;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.mb30 {\n  margin-bottom: 30px;\n}\n.mb50 {\n  margin-bottom: 50px;\n}\n.mb100 {\n  margin-bottom: 100px;\n}\n.ml5 {\n  margin-left: 5px;\n}\n.ml10 {\n  margin-left: 10px;\n}\n.ml15 {\n  margin-left: 15px;\n}\n.ml20 {\n  margin-left: 20px;\n}\n.ml30 {\n  margin-left: 30px;\n}\n.ml50 {\n  margin-left: 50px;\n}\n.ml100 {\n  margin-left: 100px;\n}\n.mr5 {\n  margin-right: 5px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.mr15 {\n  margin-right: 15px;\n}\n.mr20 {\n  margin-right: 20px;\n}\n.mr30 {\n  margin-right: 30px;\n}\n.mr50 {\n  margin-right: 50px;\n}\n.mr100 {\n  margin-right: 100px;\n}\n.pnone {\n  padding: 0;\n}\n.p10 {\n  padding: 10px;\n}\n.p15 {\n  padding: 15px;\n}\n.p30 {\n  padding: 30px;\n}\n.pt5 {\n  padding-top: 5px;\n}\n.pt10 {\n  padding-top: 10px;\n}\n.pt15 {\n  padding-top: 15px;\n}\n.pt20 {\n  padding-top: 20px;\n}\n.pt30 {\n  padding-top: 30px;\n}\n.pt50 {\n  padding-top: 50px;\n}\n.pt100 {\n  padding-top: 100px;\n}\n.pb5 {\n  padding-bottom: 5px;\n}\n.pb10 {\n  padding-bottom: 10px;\n}\n.pb15 {\n  padding-bottom: 15px;\n}\n.pb20 {\n  padding-bottom: 20px;\n}\n.pb30 {\n  padding-bottom: 30px;\n}\n.pb50 {\n  padding-bottom: 50px;\n}\n.pb100 {\n  padding-bottom: 100px;\n}\n.pl5 {\n  padding-left: 5px;\n}\n.pl10 {\n  padding-left: 10px;\n}\n.pl15 {\n  padding-left: 15px;\n}\n.pl20 {\n  padding-left: 20px;\n}\n.pl30 {\n  padding-left: 30px;\n}\n.pl50 {\n  padding-left: 50px;\n}\n.pl100 {\n  padding-left: 100px;\n}\n.pr5 {\n  padding-right: 5px;\n}\n.pr10 {\n  padding-right: 10px;\n}\n.pr15 {\n  padding-right: 15px;\n}\n.pr20 {\n  padding-right: 20px;\n}\n.pr30 {\n  padding-right: 30px;\n}\n.pr50 {\n  padding-right: 50px;\n}\n.pr100 {\n  padding-right: 100px;\n}\n.radius {\n  -moz-border-radius: 4px 4px 4px 4px;\n  /* Gecko browsers */\n  -webkit-border-radius: 4px;\n  /* Webkit browsers */\n  border-radius: 4px;\n  /* W3C syntax */\n}\n.clearfix {\n  *zoom: 1;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.clearfix:after {\n  clear: both;\n}\n.container {\n  position: relative;\n  min-width: 1215px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.container.onTheLeft {\n  margin: 0;\n}\n.container.noPadding {\n  padding: 0;\n}\n#header {\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  height: 60px;\n}\n#LOGO {\n  position: absolute;\n  top: 0;\n  left: 80px;\n  width: 120px;\n  height: 120px;\n  background-color: #cb181c;\n  line-height: 120px;\n  text-align: center;\n}\n#nav {\n  padding-left: 260px;\n  font-size: 14px;\n}\n#nav > ul > li {\n  display: inline-block;\n  line-height: 60px;\n}\n#nav > ul > li.active .title {\n  color: #cb181c;\n}\n#nav > ul > li.active .title span {\n  position: relative;\n}\n#nav > ul > li.active .title span:after {\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  width: 100%;\n  border-bottom: 1px solid #cb181c;\n  content: \"\";\n}\n#nav > ul > li:hover:not(.active) {\n  background-color: #cb181c;\n}\n#nav > ul > li:hover:not(.active) .title {\n  color: #fff;\n}\n#nav .title {\n  display: block;\n  padding: 0 20px;\n  color: #000;\n}\n#nav .sub-nav {\n  display: none;\n}\n#nav .sub-title {\n  color: #fff;\n}\n#welcome {\n  position: absolute;\n  top: 0;\n  right: 60px;\n  line-height: 60px;\n}\n#welcome a {\n  padding: 0 20px;\n  color: #000;\n}\n#welcome a:hover {\n  text-decoration: underline;\n}\n#welcome #register {\n  color: #cb181c;\n}\n.icon {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  background: #fff;\n  vertical-align: middle;\n}\n.icon.icon-W80 {\n  width: 80px;\n  height: 80px;\n}\n.icon-user {\n  width: 80px;\n  height: 40px;\n  background: url(/HK/images/BG.png) no-repeat;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);