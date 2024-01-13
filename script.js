        // The data/time we want to countdown to
        var countDownDate = new Date("Dec 02, 2023 11:30:00").getTime();

        // Run myfunc every second
        var countday= setInterval(function() {

        var now = new Date().getTime();
        var timeleft = countDownDate - now;
            
        // counting the days, hours, minutes and seconds left
        var days = Math.floor(timeleft / 1000 / 60 / 60 / 24);
        var hours = Math.floor((timeleft /1000 / 60 / 60 )% 24);
        var minutes = Math.floor((timeleft /1000 / 60 )% 60);
        var seconds = Math.floor((timeleft /1000)% 60);

        // assigning to the specific element
        document.getElementById("btn1").innerHTML = "0"+days + " DAYS"
        document.getElementById("btn2").innerHTML = hours + " HOURS" 
        document.getElementById("btn3").innerHTML = minutes + " MINS " 
        document.getElementById("btn4").innerHTML = seconds + " SECS" 
            
        // countdown is over
        if (timeleft < 0) {
                clearInterval(countday);
                document.getElementById("btn1").innerHTML = "0"+" DAYS"
                document.getElementById("btn2").innerHTML = "0"+" HOURS" 
                document.getElementById("btn3").innerHTML = "0"+" MINS"
                document.getElementById("btn4").innerHTML = "0"+" SECS"
                document.getElementById("end").innerHTML = "TIME UP!!";

        }
        }, 1000);

        