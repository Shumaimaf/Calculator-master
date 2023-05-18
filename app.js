function getitem(num) {
    document.getElementById('result').value += num;
}

function clearNum() {
    document.getElementById('result').value = '';
}

function removeNumb() {
    var res = document.getElementById('result').value;
    document.getElementById('result').value = (document.getElementById('result').value.slice(0, res.length - 1))
}
function getsquare() {
    var base = document.getElementById('result').value
    var result2 = Math.sqrt(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2))
}
function getEuler() {
    document.getElementById('result').value += Math.E;
}

function getResults() {
    document.getElementById('result').value = eval(document.getElementById('result').value);

}
function getLog10() {
    var base = document.getElementById('result').value
    var result2 = Math.log10(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));

}
function getsin() {
    var base = document.getElementById('result').value
    var result2 = Math.sin(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));

}
function getcos() {
    var base = document.getElementById('result').value
    var result2 = Math.cos(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));

}
function gettan() {
    var base = document.getElementById('result').value
    var result2 = Math.tan(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));

}
function getexp() {
    var base = document.getElementById('result').value
    var result2 = Math.exp(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));

}
function getLn10() {
    document.getElementById('result').value += Math.LN10;
}
function getPi() {
    document.getElementById('result').value += Math.PI;
}
function getLn2() {
    document.getElementById('result').value += Math.LN2;
}
function getLog() {
    var base = document.getElementById('result').value;
    var result2 = Math.log(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));
}
function getroundoff() {
    var base = document.getElementById('result').value;
    var result2 = Math.floor(base);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2));
}

function getPower2() {
    var base = document.getElementById('result').value
    var result2 = Math.pow(base, 2);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result2))
}
function getPower3() {
    var base = document.getElementById('result').value
    var result3 = Math.pow(base, 3);
    document.getElementById('result').value = (document.getElementById('result').value = (base, result3))
}
function fact() {
    var i, num, f;
    f = 1;
    num = document.getElementById('result').value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    document.getElementById('result').value = f;
} 	