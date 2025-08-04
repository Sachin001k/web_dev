
const endDate = new Date("30 July, 2025 00:26:00").getTime();
const startDate = new Date().getTime();

function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //1 day = 24hrs*60min*60secs*1000ms;
    const days = Math.floor(distancePending/(24*60*60*1000));//this will show in days block
    const Hours = Math.floor((distancePending%(24*60*60*1000))/(60*60*1000));//taking modulus with 1 day
    //and then divide by 1 hrs to get the actual hrs
    const Minutes = Math.floor((distancePending%(60*60*1000))/(60*1000)); //taking mod with 1 hrs and
    // divide with 1min
    const Seconds = Math.floor((distancePending%(60*1000))/(1000));//we divide to make milisecond to second

    //populate into UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = Hours;
    document.getElementById("minutes").innerHTML = Minutes;
    document.getElementById("seconds").innerHTML = Seconds;

    //adding into progress-bar
    const totalDistance = endDate-startDate;
    const percentageDistance = (distanceCovered/(totalDistance))*100;

    //populate into ui
    document.getElementById("progress-bar").style.width = percentageDistance + '%';

    if(distancePending < 0){
        clearInterval();
        document.getElementById("countDown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = '100%';
    }
}

setInterval(updateTimer, 1000);