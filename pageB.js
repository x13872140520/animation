function pageB(element){
    var $boy = element.find(".christmas-boy");
    var $girl = element.find(".girl");
    var $cat = element.find(".cat");
    var $box = $("#spinner");
    var $figure1 =  $box.children('figure:first');
    var $figure2 =  $box.children('figure:eq(1)');
    var $figure3 =  $box.children('figure:eq(2)');
    var $root = element;
    var animationEnd = "animationend webkitAnimationEnd";

    /**
     * 小男孩动作
     * @return {[type]} [description]
     */
    var boyAction = {
        walk:function(){
            var dfd=$.Deferred();
            $boy.addClass("boy-walk");
            $boy.transition({"left":"8rem"}, 4000, "linear", function() {
                dfd.resolve();
            });
            return dfd;
        },
        stopWalk:function(){
            $boy.removeClass("boy-walk");
            $boy.addClass("boy-stand");
            },
        unwrapp: function() {
            var dfd = $.Deferred();
            $boy.addClass("boy-unwrapp");
            $boy.removeClass("boy-stand");
            $boy.one(animationEnd, function() {
                dfd.resolve();
            })
            return dfd;
        },

    }
    /*猫和女孩进入页面*/
    $('.page-a').one(animationEnd,function(){
        setTimeout(function(){
            $girl.addClass('girl_state');
            $cat.addClass('cat_state');

        },3000);

    });
    /**
     * 小女孩动作
     * @return {[type]} [description]
     */
    var girlAction={
        down:function(){
        var dfd=$.Deferred();
        $girl.addClass("girl_animation");
        $girl.transition({"top":"6rem","left":"2rem"},1000,'linear',function(){
        dfd.resolve();
        });
        setTimeout(function(){
            $cat.removeClass('cat_state');
            $cat.addClass('cat_book');
        },1000);
        return dfd;
        },
        walk:function(){
            var dfd=$.Deferred();
            $girl.removeClass("girl_animation");
            $girl.addClass("girl_walk");
            $girl.transition({"left":"5rem"},4000,'linear',function(){
                dfd.resolve();

            });
            return dfd;
        },
        stop_walk:function(){
            var dfd=$.Deferred();
            $girl.removeClass("girl_walk");
            $girl.addClass("girl_stop_walk");
            dfd.resolve();
            return dfd;
        }
    }
    /**
     * 3D旋转
     *
     */
    var rotate={
        toDisplay:function(){
            var dfd=$.Deferred();
            $box.addClass("toDisplay");

            $box.addClass("toRotate").one(animationEnd,function(){
                dfd.resolve();
            });

            return dfd;
        },
        magnify:function(){
            var dfd=$.Deferred();
            $box.addClass("magnifyAni");
            $box.removeClass("toRotate");
            $figure1.addClass('imgA');
            $figure2.addClass('imgB');
            $figure3.addClass('imgC');

            dfd.resolve();
            return dfd;
        },
        plays:function(){
            var dfd=$.Deferred();
            $figure1.one(animationEnd,function(){
                $figure2.children('video').play();
            });
        }
    }
    $root.one(animationEnd,function(){

        //开始走路
        boyAction.walk()
            .then(function(){
               return boyAction.stopWalk();
        }).then(function(){
            return girlAction.down();
        }).then(function(){
            return girlAction.walk();
        }).then(function(){
            return girlAction.stop_walk();
        }).then(function(){
            return boyAction.unwrapp();})
            .then(function(){
                return rotate.toDisplay();})
            .then(function(){
                return rotate.magnify();
            })
            .then(function(){
                return rotate.plays();
            })


    });


}