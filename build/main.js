webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	// require("../plugin/jquery-1.11.3.min.js");
	//引入样式文件
	__webpack_require__(11); 
	console.log("巴赫旧约");

/***/ },

/***/ 11:
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

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "/*\n* 重置默认样式\n* */\n/* CSS Document */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nfont,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nabbr,\narticle,\naside,\naudio,\ncanvas,\ndatalist,\ndetails,\nfigure,\nfooter,\nhgroup,\nheader,\nmark,\nmenu,\nmeter,\nnav,\noutput,\nprogress,\nsection,\ntime,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n.article,\naside,\naudio,\ncanvas,\ndatalist,\ndetails,\nfigure,\nfooter,\nhgroup,\nheader,\nmark,\nmenu,\nmeter,\nnav,\noutput,\nprogress,\nsection,\ntime,\nvideo {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul,\nli {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n/* remember to define focus styles! */\n:focus {\n  outline: 0;\n}\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none;\n}\ndel {\n  text-decoration: line-through;\n}\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nlegend {\n  display: none;\n}\nimg {\n  vertical-align: middle;\n}\ninput,\nbutton {\n  overflow: visible;\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n/*定位*/\n.tl {\n  text-align: left;\n}\n.tc {\n  text-align: center;\n}\n.tr {\n  text-align: right;\n}\n.bc {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fl {\n  float: left;\n  display: inline;\n}\n.fr {\n  float: right;\n  display: inline;\n}\n.cb {\n  clear: both;\n}\n.cl {\n  clear: left;\n}\n.cr {\n  clear: right;\n}\n.clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.vm {\n  verticle-align: middle;\n}\n.vt {\n  vertical-align: top;\n}\n.pr {\n  position: relative;\n}\n.pa {\n  position: absolute;\n}\n.zoom {\n  zoom: 1;\n}\n.hide {\n  display: none;\n}\n.show {\n  display: block;\n}\n.inlineblock {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n}\n.cp {\n  cursor: pointer;\n}\n.oh {\n  position: relative;\n  overflow: hidden;\n}\n/*长度高度*/\n.w0 {\n  width: 0;\n}\n.w25rem {\n  winth: 2.5rem;\n}\n.w {\n  width: 100%;\n}\n.h20 {\n  height: 20px;\n}\n.h50 {\n  height: 50px;\n}\n.h80 {\n  height: 80px;\n}\n.h100 {\n  height: 100px;\n}\n.h200 {\n  height: 200px;\n}\n.h {\n  height: 100%;\n}\n.h25rem {\n  height: 2.5rem;\n}\n/*边距*/\n.mauto {\n  margin: 0;\n}\n.m10 {\n  margin: 10px;\n}\n.m20 {\n  margin: 20px;\n}\n.m30 {\n  margin: 30px;\n}\n.mt5 {\n  margin-top: 5px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.mt15 {\n  margin-top: 15px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.mt25 {\n  margin-top: 25px;\n}\n.mt30 {\n  margin-top: 30px;\n}\n.mt50 {\n  margin-top: 50px;\n}\n.mt100 {\n  margin-top: 100px;\n}\n.mb5 {\n  margin-bottom: 5px;\n}\n.mb10 {\n  margin-bottom: 10px;\n}\n.mb15 {\n  margin-bottom: 15px;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.mb30 {\n  margin-bottom: 30px;\n}\n.mb50 {\n  margin-bottom: 50px;\n}\n.mb100 {\n  margin-bottom: 100px;\n}\n.ml5 {\n  margin-left: 5px;\n}\n.ml10 {\n  margin-left: 10px;\n}\n.ml15 {\n  margin-left: 15px;\n}\n.ml20 {\n  margin-left: 20px;\n}\n.ml30 {\n  margin-left: 30px;\n}\n.ml50 {\n  margin-left: 50px;\n}\n.ml100 {\n  margin-left: 100px;\n}\n.mr5 {\n  margin-right: 5px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.mr15 {\n  margin-right: 15px;\n}\n.mr20 {\n  margin-right: 20px;\n}\n.mr30 {\n  margin-right: 30px;\n}\n.mr50 {\n  margin-right: 50px;\n}\n.mr100 {\n  margin-right: 100px;\n}\n.pnone {\n  padding: 0;\n}\n.p10 {\n  padding: 10px;\n}\n.p15 {\n  padding: 15px;\n}\n.p30 {\n  padding: 30px;\n}\n.pt5 {\n  padding-top: 5px;\n}\n.pt10 {\n  padding-top: 10px;\n}\n.pt15 {\n  padding-top: 15px;\n}\n.pt20 {\n  padding-top: 20px;\n}\n.pt30 {\n  padding-top: 30px;\n}\n.pt50 {\n  padding-top: 50px;\n}\n.pt100 {\n  padding-top: 100px;\n}\n.pb5 {\n  padding-bottom: 5px;\n}\n.pb10 {\n  padding-bottom: 10px;\n}\n.pb15 {\n  padding-bottom: 15px;\n}\n.pb20 {\n  padding-bottom: 20px;\n}\n.pb30 {\n  padding-bottom: 30px;\n}\n.pb50 {\n  padding-bottom: 50px;\n}\n.pb100 {\n  padding-bottom: 100px;\n}\n.pl5 {\n  padding-left: 5px;\n}\n.pl10 {\n  padding-left: 10px;\n}\n.pl15 {\n  padding-left: 15px;\n}\n.pl20 {\n  padding-left: 20px;\n}\n.pl30 {\n  padding-left: 30px;\n}\n.pl50 {\n  padding-left: 50px;\n}\n.pl100 {\n  padding-left: 100px;\n}\n.pr5 {\n  padding-right: 5px;\n}\n.pr10 {\n  padding-right: 10px;\n}\n.pr15 {\n  padding-right: 15px;\n}\n.pr20 {\n  padding-right: 20px;\n}\n.pr30 {\n  padding-right: 30px;\n}\n.pr50 {\n  padding-right: 50px;\n}\n.pr100 {\n  padding-right: 100px;\n}\n.radius {\n  -moz-border-radius: 4px 4px 4px 4px;\n  /* Gecko browsers */\n  -webkit-border-radius: 4px;\n  /* Webkit browsers */\n  border-radius: 4px;\n  /* W3C syntax */\n}\n.clearfix {\n  *zoom: 1;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.clearfix:after {\n  clear: both;\n}\n.container {\n  position: relative;\n  min-width: 1215px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.container.onTheLeft {\n  margin: 0;\n}\n.container.noPadding {\n  padding: 0;\n}\n#header {\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  height: 60px;\n}\n#LOGO {\n  position: absolute;\n  top: 0;\n  left: 80px;\n  width: 120px;\n  height: 120px;\n  background-color: #cb181c;\n  line-height: 120px;\n  text-align: center;\n}\n#nav {\n  padding-left: 260px;\n  font-size: 14px;\n}\n#nav > ul > li {\n  display: inline-block;\n  line-height: 60px;\n}\n#nav > ul > li.active .title {\n  color: #cb181c;\n}\n#nav > ul > li.active .title span {\n  position: relative;\n}\n#nav > ul > li.active .title span:after {\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  width: 100%;\n  border-bottom: 1px solid #cb181c;\n  content: \"\";\n}\n#nav > ul > li:hover:not(.active) {\n  background-color: #cb181c;\n}\n#nav > ul > li:hover:not(.active) .title {\n  color: #fff;\n}\n#nav .title {\n  display: block;\n  padding: 0 20px;\n  color: #000;\n}\n#nav .sub-nav {\n  display: none;\n}\n#nav .sub-title {\n  color: #fff;\n}\n#welcome {\n  position: absolute;\n  top: 0;\n  right: 60px;\n  line-height: 60px;\n}\n#welcome a {\n  padding: 0 20px;\n  color: #000;\n}\n#welcome a:hover {\n  text-decoration: underline;\n}\n#welcome #register {\n  color: #cb181c;\n}\n.icon {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  background: #fff;\n  vertical-align: middle;\n}\n.icon.icon-W80 {\n  width: 80px;\n  height: 80px;\n}\n.icon-user {\n  width: 80px;\n  height: 40px;\n  background: url(/HK/images/BG.png) no-repeat;\n}\n", ""]);

	// exports


/***/ }

});