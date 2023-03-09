const btn = document.querySelector('button');
const ticketsDiv = document.getElementById('tickets-div');
const numBox = document.getElementById('num-box');

btn.addEventListener('click', pickSix)

function pickSix() {

    ticketsDiv.innerHTML = "";
    let numTix = Number(numBox.value); // user input choose # of tickets

    for(let t = 0; t < numTix; t++) {
        let sixPicks = [];
        const pickableNums = []; // holder for lottery numbers 1-69
        for(let n = 1; n <= 69; n++) {
            pickableNums.push(n);
        }
        console.log('pickableNums', pickableNums);

        // 5 numbers for white balls
        for(let t = 0; t < 5; t++) {
            let r = Math.floor(Math.random() * pickableNums.length);
            let num = pickableNums[r];
            num = num < 10 ? "0" + num : "" + num;
            sixPicks.push(num);
            pickableNums.splice(r,1);
        }
        sixPicks.sort(); // sort the 5 number balls

        // add the 6th num -- the Powerball number
        let r = Math.ceil(Math.random() * 26);
        r = r < 10 ? "0" + r : "" + r;
        sixPicks.push(r);

        // append the div to hold the lottery pics
        let ticketDiv = document.createElement('div');
        ticketDiv.className = "ticket-div";
        ticketsDiv.appendChild(ticketDiv);
        ticketDiv.innerHTML = t + 1 + "."; // number each ticket

        // make 6 ping pong balls as divs -- one per number
        for (let p = 0; p < 6; p++) {
            const pingPongBall = document.createElement('div');
            pingPongBall.className = "ping-pong-ball";
            pingPongBall.textContent = sixPicks[p];
            ticketDiv.appendChild(pingPongBall);
        }
    }
}