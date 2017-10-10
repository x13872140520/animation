function checkCookie(type,keys,values){
//检测按钮类型，如果是localstorage类型就进行localstorage判断，如果是cookie类型就进行cookie判断
    alert(234);
    if(type=='1'){
        //进行local判断
        if(localStorage){
            alert(123);
            //进行localstorage是否有值判断，有值读取，无值设置
            var a = localStorage.getItem('username');
            var b = localStorage.getItem('password');
            if(a && b){
                screen.innerHTML = a + '/' + b;
                key = a;
                value = b;
            }else{
                if(keys,value != ''){
                    localStorage.setItem('username',keys);
                    localStorage.setItem('password',values);
                }else{
                    alert('请输入username，password');
                }

            }

        }else if(document.cookie){

            alert('不支持localstorage的方式，请选择cookie的方式');
        }
    }else{
        //进行cookie
        if(document.cookie){
            //进行cookie是否有值判断，有值读取，无值设置
            if(document.cookie.length > 0){
                //显示cookie的信息
            }else{
                //无值就设置cookie信息
                var cname = 'login';
                var cvalue = keys + values;
                var name = document.prompt("please input your expire time(unit is day):","");
                if(typeof(name)=="number"){
                    var d = new Date();
                    cexpires = d.setDate(d.getDate()+name).toUTCString();
                }
                document.cookie=cname+cvalue+cexpires;
            }

        }else{
            alert('您的浏览器不支持cookie！');
        }
    }


}

//给按钮绑定checkCookie事件
var btn =  document.getElementsByClassName('click');
var screen = document.getElementsByClassName('screen');
var key = document.getElementsByClassName('storage_text').value();
var value = document.getElementsByClassName('storage_password').value();

 btn[0].onclick=function(){
     alert(123);

 };
 btn[1].onclick=function(){
     checkCookie('2',key,value);
 };