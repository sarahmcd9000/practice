
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
   
function sum2die() {
     var x = rollDice();
     //console.log(x)
     var y = rollDice();
     //console.log(y)
     var sum = x + y;
     //console.log(sum)
     return sum
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function luckySevens(startmoney) {
    var moneypool = startmoney;
    var rollcount = 0;
    var moneyarray = [];
    var rollarray = [];
    while (moneypool > 0) {
        if (sum2die() == 7) {
            moneypool = moneypool+4;
            rollcount = rollcount +1;
            moneyarray.push(moneypool);
            rollarray.push(rollcount);
        } else {
            moneypool = moneypool-1;
            rollcount = rollcount +1;
            moneyarray.push(moneypool);
            rollarray.push(rollcount);
        }
        console.log(moneyarray);
        console.log(rollarray);
    }
    var maxmoney = Math.max(...moneyarray);
    //console.log(maxmoney);
    var indexmaxroll = indexOfMax(moneyarray)
    //console.log(indexmaxroll); 
    var maxroll = rollarray[indexmaxroll];
    //console.log(maxroll)
    return [startmoney, rollcount, maxmoney, maxroll] 
}



function validateItems() {
    var bet = document.forms["placeBet"]["bet"].value;
    if (Number(bet) <= 0 ) {
        alert("Starting bet must be greater than zero");
        return false;
    }

    document.getElementById("results").style.display = "block";
    outarray = []
    outarray = luckySevens(Number(bet))
    document.getElementById("gamemoney").innerText = outarray[0];
    document.getElementById("numrolls").innerText = outarray[1];
    document.getElementById("highest").innerText = outarray[2];
    document.getElementById("highroll").innerText = outarray[3];
    return false;
}