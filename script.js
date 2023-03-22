const btn = document.querySelector('button');
const ticketsDiv = document.getElementById('tickets-div');
const numBox = document.getElementById('num-box');
btn.addEventListener('click', pickSix)

function pickSix() {

    ticketsDiv.innerHTML = "";
    let numTix = Number(numBox.value); 

    for(let t = 0; t < numTix; t++) {
        let sixPicks = [];
        const pickableNums = []; 
        for(let n = 1; n <= 69; n++) { // 1-69
            pickableNums.push(n);
        }

        for(let t = 0; t < 5; t++) { // 5 powerballs
            let r = Math.floor(Math.random() * pickableNums.length);
            let num = pickableNums[r];
            num = num < 10 ? "0" + num : "" + num;
            sixPicks.push(num);
            pickableNums.splice(r,1);
        }
        sixPicks.sort();

        let r = Math.ceil(Math.random() * 26); // 6th powerball
        r = r < 10 ? "0" + r : "" + r;
        sixPicks.push(r);

        let ticketDiv = document.createElement('div');
        ticketDiv.className = "ticket-div";
        ticketsDiv.appendChild(ticketDiv);
        ticketDiv.innerHTML = t + 1 + ".";

        for (let p = 0; p < 6; p++) {
            const pingPongBall = document.createElement('div');
            pingPongBall.className = "ping-pong-ball";
            pingPongBall.textContent = sixPicks[p];
            ticketDiv.appendChild(pingPongBall);
        }
    }
}