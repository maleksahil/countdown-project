const endDate = "7 march 2025 11:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now)/1000;
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff/3600/24);
    //convert into days
    inputs[1].value = Math.floor(diff/3600)%24
    //convert into hours
    inputs[2].value = Math.floor(diff/60) % 60;
    //convert intop miniutes
    inputs[3].value = Math.floor(diff)%60
    console.log(now)
    console.log(end)
}

//initial call
clock();

/*
1 day = 24 hrs
1 hour = 60 mins
60 min = 3600 secs 
*/

setInterval(
    ()=>{
        clock()
    },
    1000
)