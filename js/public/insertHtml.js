function insertHtml(){}
insertHtml.prototype.Default = {
    info : [{
        type : "header",
        html : require("html-loader?attrs=img:data-src!../../template/public/header.html"),
        addHtml : function(html){
            $("body").prepend(html);
        }
    },{
        type : "footer",
        html : require("html-loader?attrs=img:data-src!../../template/public/footer.html"),
        addHtml : function(html){
            $("body").append(html);
        }
    },{
        type : "cooperation",
        html : require("html-loader?attrs=img:data-src!../../template/public/cooperation.html"),
        addHtml : function(html){
            $("#footer").before(html);
        }
    }]
};
//遍历
insertHtml.prototype.createLabel = function(){
    var Default = this.Default;
    for(var i=0;i<Default.info.length;i++){
        //添加html
        Default.info[i].addHtml(Default.info[i].html);
    }
};
//添加html
insertHtml.prototype.addHtml = function(info){
    var label = document.createElement("div");
    label.innerHTML = info.html;
    if(info.beforeId){
        var relative = document.getElementById(info.beforeId);
        document.body.insertBefore(label,relative);
    }else if(info.afterId){
        var relative = document.getElementById(info.afterId);
        document.body.insertBefore(label,first);
    }else{
        document.body.appendChild(label);
    }
    label.setAttribute("id",info.id);
};
var insertHtml = new insertHtml();
insertHtml.createLabel();