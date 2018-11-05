window.slider_state = 1;
setInterval(function(){
    window.slider_state++;
    if(window.slider_state === 4){
        window.slider_state = 1;
    }
    $('body').css('background-image','url(assets/slider/'+window.slider_state+'.jpg)');
},4000);

setInterval(function(){
    current = new Date();
    $('.time').html(current.getHours()+":"+current.getMinutes());
},999);

function getWeather(){
    $.get('http://www.mocky.io/v2/5be05d533200008100649608',function(data){
        $('.message').text(data.message)
    });
}

$(window).ready(getWeather)