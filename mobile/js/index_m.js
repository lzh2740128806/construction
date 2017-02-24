
$('#wrap').find(".slide-trigger").find("li").eq(0).addClass("cur");
window.mySwipe = new Swipe(document.getElementById('wrap'), {
    speed: 600,
    auto: 2800,
    continuous: true,
    stopPropagation: false,
    callback: function(index,elem) {
        $('#wrap').find(".slide-trigger").find("li").eq(index).addClass("cur").siblings().removeClass("cur");
    }
});
$('.page').click(function () {
    $('.index').hide();
    var index=$(this).index();
    $('.container').hide().eq(index).show();
});
$('body,html').css('width',$(window).width());
(function (btn,content) {
    content.first().show();
    btn.click(function () {
        $(this).addClass('newsActive').siblings().removeClass('newsActive');
        content.hide().eq($(this).index()).show();
    });
})($('.news-btn li'),$('.hot-news'));
$('.mailgo').click(function () {
    $('body,html').css({'overflow':'hidden'});
    $('.login').css({'right':'0','opacity':1});
});
$('.close').click(function () {
    $('body,html').css({'overflow-y':'auto'});
    $('.login').animate({
        opacity:0
    },300).animate({
        right:'-100%'
    },10)
});
$('.slider-bar').click(function () {
    window.location.href='index_m.html';
});
$('.title h1').click(function () {
    $('body,html').animate({scrollTop:0},1000);
});
$('body').scroll(function () {
    // console.log($(document).scrollTop())
    if ($(window).scrollTop()>500){
        $('.go-top').fadeIn(800);
    } else {
        $('.go-top').fadeOut(800);
    }
    $('.login').css('top',$(window).scrollTop())
});
var regTel=/^1[0-9]{10}$/,//验证手机号
    regMail=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,//验证邮箱
    regCn=/^[\u4E00-\u9FA5]{2,4}$/,//验证中文名字
    regName=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/,//用户名验证
    regPass=/^[a-zA-Z0-9]{6,10}$/;//密码验证
$('input').blur(function () {
    $(this).css('border','1px solid #6892B1');
    if($(this).is('#loginT')){
        if($('#loginT').val()!=''){
            if(!(regMail.test($('#loginT').val()))){
                $('#mailLabel').text('×').css('color','red');
                $(this).css('border','1px solid #BD362F');
                return false;
            }else if(regMail){
                $('#mailLabel').text('√').css('color','#000');
                return true;
            }
        }else {
            $('#mailLabel').text('*').css('color','#000');
        }
    }
    if($(this).is('#loginP')){
        if($('#loginP').val()!=''){
            if(!(regPass.test($('#loginP').val()))){
                $('#passLabelN').text('×').css('color','red');
                $(this).css('border','1px solid #BD362F');
                return false;
            }else if(regPass){
                $('#passLabelN').text('√').css('color','#000');
                return true;
            }
        }else {
            $('#passLabelN').text('*').css('color','#000');
        }
    }
    if($(this).is('#mName')){
        if($('#mName').val()!=''){
            if(!(regCn.test($('#mName').val()))){
                $('#nameC').text('请输入2-4个汉字').css('color','red');
                $(this).css('border','1px solid #BD362F');
                return false;
            }else if(regCn){
                $('#nameC').text('√').css('color','#333');
                return true;
            }
        }else {
            $('#nameC').text('*').css('color','red');
        }
    }
    if($(this).is('#mMail')){
        if($('#mMail').val()!=''){
            if(!(regMail.test($('#mMail').val()))){
                $('#mailC').text('请输入正确邮箱').css('color','red');
                $(this).css('border','1px solid #BD362F');
                return false;
            }else if(regMail){
                $('#mailC').text('√').css('color','#333');
                return true;
            }
        }else {
            $('#mailC').text('');
        }
    }
    if($(this).is('#mNum')){
        if($('#mNum').val()!=''){
            if(!(regTel.test($('#mNum').val()))){
                $('#telC').text('请输入正确手机号').css('color','red');
                $(this).css('border','1px solid #BD362F');
                return false;
            }else if(regTel){
                $('#telC').text('√').css('color','#333');
                return true;
            }
        }else {
            $('#telC').text('*').css('color','red');
        }
    }
    if($(this).is('#mCheck')){
        if($('#mCheck').val()!=''){
            if($('#mCheck').val()!=$('#seccode').text().toLowerCase()){
                $('#codeC').text('*').css('color','red');
                $('#mCheck').css('border','1px solid red');
                return false;
            }else if($('#seccode').text().toLowerCase()==$('#mCheck').val()){
                $('#codeC').text('√').css('color','#333');
                return true;
            }
        }else {
            $('#codeC').text('*').css('color','red');
        }
    }
});
$('#loginS').click(function () {
    if(regMail.test($('#loginT').val()) && regPass.test($('#loginP').val())){
        return true;
    }else {
        if ($('#loginT').val()==''){
            $('#mailLabel').text('×').css('color','red');
        }
        if($('#loginP').val()==''){
            $('#passLabelN').text('×').css('color','red');
        }
        return false;
    }
});
window.onload=function () {
    function rnd(n,m) {
        return parseInt(Math.random()*(n-m)+n)
    };
    var boom=document.querySelector('#boom'),
        arr=['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
        L=20,R=10;
    for(var r=0;r<R;r++){
        for(var l=0;l<L;l++){
            var oSpan=document.createElement('span'),
                w=boom.offsetWidth/L*l,
                h=boom.offsetHeight/R*r;
            boom.appendChild(oSpan);
            oSpan.style.left=w+'px';
            oSpan.style.top=h+'px';
            oSpan.style.backgroundPosition='-'+w+'px '+'-'+h+'px';
        }
    }
    var now=0,bFlag=false;
    boom.onclick=function () {
        if (bFlag==true)return;
        bFlag=false;
        now++;
        var aSpan=boom.children;
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].style.transition='1s all cubic-bezier(1,-1.03,0.3,1.5)';
            var x=aSpan[i].offsetLeft+aSpan[i].offsetWidth/2-boom.offsetWidth/2;
            var y=aSpan[i].offsetTop+aSpan[i].offsetHeight/2-boom.offsetHeight/2;
            aSpan[i].style.transform='translate3d('+x+'px,'+y+'px,30px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
            aSpan[i].style.opacity=0;
        }
        aSpan[0].addEventListener('transitionend',function (){
            bFlag=false;
            for (var i=0; i<aSpan.length; i++) {
                aSpan[i].style.transition='none';//运动
                aSpan[i].style.transform='translate3d(0px,0px,30px) rotateX(0deg) rotateY(0deg)';
                aSpan[i].style.opacity=1;
                aSpan[i].style.backgroundImage='url("images/'+now%arr.length+'.jpg")';
                boom.style.backgroundImage='url("images/'+(now+1)%arr.length+'.jpg")';
            }
        },false);
    }
}
$('#mSub').click(function () {
    if(regCn.test($('#mName').val()) && regTel.test($('#mNum').val()) && $('#mArea').val()!=''){
        return false;
    }else {
        if($('#mName').val()==''){
            $('#nameC').text('请填写姓名').css('color','red');
        }
        if($('#mNum').val()==''){
            $('#telC').text('请填写手机号').css('color','red');
        }
        if($('#mCheck').val()==''){
            $('#mCheck').val('请输入验证码').css('color','red');
        }
        if($('#mArea').val()==''){
            $('#mArea').val('请输入您要留言的内容！').css('color','red');
        }
        return false;
    }
});
$('#mArea').on('keyup blur',function () {
    var area=$(this);
    var max=parseInt(area.attr('maxlength'),10);//转化为10进制
    if (max>0){
        if (area.val().length > max) { //textarea的文本长度大于maxlength
            area.val(area.val().substr(0, max)); //截断textarea的文本重新赋值
        }
        var already=area.val().length,left=max-already;
        $('#readyN').text(already);
        $('#leftN').text(left);
    }
});
$('input,textarea').focus(function () {
    $(this).css('border','1px solid #0f67ff');
    if($(this).is('#mName')){
        $('#nameC').text('请输入2-4个汉字').css('color','#333');
    }
    if($(this).is('#mMail')){
        $('#mailC').text('请输入常用邮箱').css('color','#333');
    }
    if($(this).is('#mNum')){
        $('#telC').text('输入11位手机号').css('color','#333');
    }
    if($(this).is('#mCheck')){
        if($('#mCheck').val()=='请输入验证码'){
            $('#mCheck').val('').css('color','#333');
        }
    }
    if($(this).is('#mArea')){
        if($('#mArea').val()=='请输入您要留言的内容！'){
            $('#mArea').val('').css('color','#333');
        }
    }
});
function rand() {
    var i=0, t='';
    do {
        var tempNum=Math.floor(Math.random()*123);
        if ((48<=tempNum&&tempNum<=57)||(65<=tempNum&&tempNum<=90)||(97<=tempNum&&tempNum<=122)){
            t+= String.fromCharCode(tempNum);
            i++;
        }
    }while (i<4);
    return t;
};
$('#seccode').text(rand());
$('#changeA').click(function () {
    $('#seccode').text(rand());
});