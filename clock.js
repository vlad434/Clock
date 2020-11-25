function startClock(){
    
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var perioadaZi = "AM";

    s = (s < 10) ? "0" + s : s;
    m = (m < 10) ? "0" + m : m;
    h = (h < 10) ? "0" + h : h;

    if(h > 12){
        h = h - 12;
        perioadaZi = "PM";
    }

    if(h == 0 ){
        h = 12;
    }

    time = h + ":" + m + ":" + s + perioadaZi;
    document.getElementById("myClock").innerHTML = time;
    document.getElementById("myClock").textContent = time;
    
    setInterval(startClock, 1000);

}

startClock();
