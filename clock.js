function clock()
{
    var date = new Date()
    var hh = date.getHours()
    var mm = date.getMinutes()
    var ss = date.getSeconds()
    var day = date.getDay()
    var dt = date.getDate()
    var mo = date.getMonth()
    var yy = date.getFullYear()
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Aprl"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="June"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else
    {
        mo="Dec"
    }

    switch(day)
    {
        case 0:
            day = "Sunday"
            document.getElementById("a").style.backgroundImage="url(sunday.jpg)"
            break;
        case 1:
            day = "Monday"
            document.getElementById("a").style.backgroundImage="url(moday.jpg)"
            break;
        case 2:
            day = "Tuesday"
            document.getElementById("a").style.backgroundImage="url(tuesday.jpg)"
            break;
        case 3:
            day = "Wednesday"
            document.getElementById("a").style.backgroundImage="url(wednesday.jpg)"
            break;
        case 4:
            day = "Thursday"
            document.getElementById("a").style.backgroundImage="url(thursday.jpg)"
            break;
        case 5:
            day = "Friday"
            document.getElementById("a").style.backgroundImage="url(friday.jpg)"
            break;
        case 6:
            day = "Saturday"
            document.getElementById("a").style.backgroundImage="url(saturday.jpg)"
            break;
    }

    var am_pm = "AM"
    if(hh>=12)
    {
        am_pm = "PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var finalTime = hh+":"+mm+":"+am_pm
    document.getElementById("Time").innerHTML=finalTime
    var finalDate = dt+"/"+mo+"/"+yy
    document.getElementById("Date").innerHTML=finalDate
    document.getElementById("Day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    var timer = setTimeout(function(){clock()},1000)
}
function greet()
{
    var greet = new Date()
    var hh = greet.getHours()
    if(hh>=6 && hh<12)
    {
        window.alert("Good Morning")
    }
    else if(hh>=12 && hh<16)
    {
        window.alert("Good Afternoon")
    }
    else if(hh>=16)
    {
        window.alert("Good Evening")
    }
    else{
        window.alert("Good Night")
    }
}
greet()