function Christmas(obj){
    new pageA(obj);

}
function house(obj){

    new pageB(obj)
}

$(function(){
    var $pageA =$(".page-a");
    var $pageB =$(".page-b");
    var $pageC =$(".page-c");
    Christmas($pageA);
    house($pageB);
});