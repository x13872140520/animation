function pageA(element){
    //根元素
    this.$root=element;
    //圣诞男孩
    this.$boy=element.find('.chs-boy');

    //窗户
    this.$windowL=element.find('.window-left');
    this.$windowR=element.find('.window-right');
    //窗户背景
    this.$window=element.find('.window-bg');
    //执行动画

    this.run();
}
pageA.prototype.next=function(options){
    var dfd=$.Deferred();
    this.$boy.transition(options.style,options.time,'linear',function(){
        dfd.resolve();
    });
    return dfd;
}
pageA.prototype.stopwalk=function(){
    this.$boy.removeClass('chs-boy-deer');
}
pageA.prototype.openWindow=function(){

    var root=this.$root;
    this.$windowL.addClass('window-animation').addClass('hover');
    this.$windowR.addClass('window-animation').addClass('hover').one("animationend webkitAnimationEnd", function() {
        root.addClass('effect-out').one("animationend webkitAnimationEnd",function(){
           setInterval(function(){
               $('.page-b').addClass('bg');

               } ,3000)
        });

    });

}


pageA.prototype.run=function(){
    var  that=this;
    var next =function(){
        return  this.next.apply(this,arguments);
    }.bind(this);

    next({
        "time":"10000",
        "style":{
            "top":"1.5rem",
            "right":"15rem",
            "transform":"scale(0.8)"
        }
    })
        .then(function(){
                return next({
                    "time":"500",
                    "style":{

                        "transform":"scale(1),rotateY(-180deg)"
                    }
                });
            }

        ).then(function(){
        return   next({
            "time":"7000",
            "style":{
                "top":"7rem",
                "right":"2.5rem",
                "transform":"scale(2),rotateY(-180deg)"
            }
        })
    }).then(function(){
        that.stopwalk();
    }).then(function(){
        that.openWindow();
    });

}
