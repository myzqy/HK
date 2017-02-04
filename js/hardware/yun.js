/*
 氦氪云 运营中心 js
 */
//引入样式文件
require("../../js/public/main.js");
require("../../css/hardware/yun.less");
//页面准备
window.Ready(function(){
    var Func = {
        init : function(){
            Func.base();
        },
        base : function(){
            $(".cooperation-info,.cooperation-other").remove();
        }
    };
    Func.init();
});