let curValue = 0;
curValue>-1

function decr(){
    curValue-=1;
    document.getElementById('number').innerHTML = curValue;
    return curValue==0;
}

function resets(){
    curValue=0;
    document.getElementById('number').innerHTML = curValue;
    return curValue;
}

function incr(){
    curValue+=1;
    document.getElementById('number').innerHTML = curValue;
    return curValue;
}