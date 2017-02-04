var Func = {
    init : function(){
        Func.base();
    },
    base : function(){
        window.Ready = function(callback){
            //页面加载
            Func.pageReady(function(){
                callback();
            });
        }
    },
    //添加公共js
    addPublicJs : function(){
        //引入公共html
        require("./insertHtml.js");
        //工具
        require("./tool.js");
    },
    //添加公共html
    addPublicHtml : function(){

    },
    //页面加载
    pageReady : function(callback){
        //等待页面元素生成
        if(document.body){
            //加载文件
            loadFile();
            callback&&callback();
        }else{
            var $time = setInterval(function(){
                if(document.body){
                    //创建标签
                    clearInterval($time);
                    //添加公共js
                    Func.addPublicJs();
                    //添加参数
                    Func.addDomParam();
                    callback&&callback();
                }
            },10);
        }
    },
    //添加参数
    addDomParam : function(){
        $(".odd-li").find("li:odd").addClass("odd");
    }
};
Func.init();
