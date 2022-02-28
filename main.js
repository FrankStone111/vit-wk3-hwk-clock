document.getElementById('body').onload = function(){webClock()};//assign an event

function webClock(){
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var mid = ' AM';//mid-day status am or pm
    
    h = twelveHourFormat(h);
    m = formatTime(m);
    s = formatTime(s);
    
    document.getElementById('clock').innerHTML = h + ':' + m + ':' + s + mid;
    setTimeout(webClock, 1000);
    
    function formatTime(t){
    if(t < 10){
        t = '0' + t;//formats time ex.'0x'
    };
    return t;
    }

    function twelveHourFormat(h){
        if(h > 12){
            h = h - 12;
            mid = ' PM';
        };
        return h;
    }
    //Ver. 1.2.0
};