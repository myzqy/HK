
var Func = {
    init : function(){
        //返回顶部
        Func.returnTop();
        //兼听页面滑动
        Func.windowRoll();
    },
    //返回顶部
    returnTop : function(){
        $("body").on("click",".return-top",function(){
            $("body,html").animate({
                scrollTop : 0
            },500);
        });
    },
    //兼听页面滑动
    windowRoll : function(){
        if(document.all){
            //ie浏览器
            document.documentElement.onscroll = function(){
                Func.Scroll();
            };
        }else{
            //其它浏览器
            document.onscroll = function(){
                Func.Scroll();
            };
            document.onscroll();
        };
    },
//    self.val = "";
//    self.DH = $(window).height();
    //滚动效果
    Scroll : function(){
        var val = $("body").scrollTop() > 0 ? $("body").scrollTop() : $("html").scrollTop(),
            H = $(window).height();
        if(val>=H/2){
            $(".return-top").fadeIn(500);
        }else{
            $(".return-top").fadeOut(500);
        }
    }
}
Func.init();