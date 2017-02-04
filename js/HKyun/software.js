/*
 氦氪云 软件开发 js
 */
//引入样式文件
require("../../js/public/main.js");
require("../../css/HKyun/software.less");
//页面准备
window.Ready(function(){
    var Func = {
        init : function(){
            Func.base();
            //获取图文列表宽度
            Func.photoTextWidth();
        },
        base : function(){

        },
        //获取图文列表宽度
        photoTextWidth : function(){
            var $list = $(".photo-text-list"),
                $width,
                $photoWdith;
            for(var i=0;i<$list.length;i++){
                $width = $list.eq(i).width();
                $photoWdith = $list.eq(i).find(".photo").width();
                $list.eq(i).find("ul").width($width-$photoWdith);
            }
        }
    };
    Func.init();
});