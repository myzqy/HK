/*
 首页js
 */
//引入样式文件
require("../../js/public/main.js");
require("../../css/HKyun/index.less");
//页面准备
window.Ready(function(){
    var Func = {
        init : function(){
            Func.base();
            //APP列表
            Func.APPListHover();
            //APP列表分割
            Func.APPListCutting();
        },
        base : function(){

        },
        //APP列表滑过
        APPListHover : function(){
            $(".APP-list li").hover(function(){
                $(this).addClass("active").siblings().removeClass("active");
                //APP列表分割
                Func.APPListCutting();
            },function(){
                console.log("hover222");
            });
        },
        //APP列表分割
        APPListCutting : function(){
            var num = 0,
                $li = $(".APP-list").find("li");
            $li.removeClass("odd");
            for(var i=0;i<$li.length;i++){
                if(!$li.eq(i).hasClass("active")){
                    if(num%2){
                        $li.eq(i).addClass("odd");
                    }
                    num++;
                }
            }
        }

    };
    Func.init();
});