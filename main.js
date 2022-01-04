const countDown = ()=>{ 
    const endDate = new Date("February 20,2022 00:00:00").getTime()
var now = new Date().getTime()  
var timeleft = endDate - now

const seconds = 1000
const minutes = seconds*60
const hours =minutes*60
const days = hours *24

    
var timedays = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var timehours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var timeminutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var timeseconds = Math.floor((timeleft % (1000 * 60)) / 1000)

document.getElementById("days").innerHTML=timedays
document.getElementById("hours").innerHTML=timehours
document.getElementById("minutes").innerHTML=timeminutes
document.getElementById("seconds").innerHTML=timeseconds
}
setInterval(countDown,1000) 