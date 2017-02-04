/*
首页js
*/  
//引入样式文件
require("./public/main.js");
require("../css/index.less");
//页面准备
window.Ready(function(){
    var Func = {
        init : function(){
            Func.base();
        },
        base : function(){
            $(".cooperation-info").addClass("bgColor").removeClass("noBottomPadding");
            $(".cooperation-other").hide();
        }
    };
    Func.init();
});