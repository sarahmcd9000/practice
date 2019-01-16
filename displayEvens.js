function findEvenNumbers(start,end,inc) {
    array1=[]
    array1.push(start)
    
    for (var i = start; i <= end;) {
     i = i + inc;   
     array1.push(i);
    }
 
    var lastID = array1.length - 1
    if (array1[lastID] > end){
        array1.pop();
    }
    
    var x
    for (x = 0; x < array1.length; x++) {
        if ( array1[x] % 2 == 1) {
            array1.splice(x,1);
        }
    }
    return array1
}

function validateItems() {
    var startnum = document.forms["findEvens"]["startnum"].value;
    var endnum = document.forms["findEvens"]["endnum"].value;
    var step = document.forms["findEvens"]["step"].value;
    if (startnum == "" || isNaN(startnum)) {
        alert("Starting number must be filled in with a number.");
        return false;
    }
    if (endnum == "" || isNaN(endnum)) {
       alert("Ending number must be filled in with a number.");
       return false
    }
    if (step == "" || isNaN(step)) {
        alert("Step must be filled in with a number.");
        return false;   
    }
    if (step < 0) {
        alert("Step must be filled in with a positive number.");
        return false;   
    }

    if (endnum <= startnum) {
        alert("Starting number must be less than the ending number.");
        return false;   
    }

   
   document.getElementById("startnumresult").innerText = startnum
   document.getElementById("endnumresult").innerText = endnum
   document.getElementById("stepresult").innerText = step

   //Everything is working until here:
   var myarray =[]
   myarray = findEvenNumbers(Number(startnum),Number(endnum),Number(step))
   document.getElementById("listresult").innerText = myarray

   return false;
}


