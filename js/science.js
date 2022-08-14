let selection = "rad"

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function square(form) {
	form.display2.value = eval(form.display.value) * eval(form.display.value)
    form.display.value = eval(form.display.value) * eval(form.display.value)
}

function cube(form) {
    form.display2.value = eval(form.display.value) * eval(form.display.value) * eval(form.display.value)
    form.display.value = eval(form.display.value) * eval(form.display.value) * eval(form.display.value)
}

function sqrt(arg) {
let num = Math.sqrt(arg)
return num;
}

function cbrt(arg) {
    let num = Math.cbrt(arg)
    return num;
    }

// function factorial(form) {
//     arg = form.display.value.length;
//     n = Number(form.display.value.substring(0, arg-1));
//     f=1;
//     for(i=2; i <= n; i++) {
//         f = f*i;
//         form.display.value=f;
//     }
// }
function factorial(n) {
  let answer = 1
  if (n == 0 || n==1 ) {
    return answer;
  } else{
    for (let i = n; i >=1; i--) {
        answer = answer * i;
    }
    return answer;
  }
}
function calc_deg(){
    var element = document.getElementById("deg")
    element.style = "border: solid red"
    var element2 = document.getElementById("rad")
    element2.style = "border none"
    
    selection = "deg" //Set selection to deg
    
  }
  
  function calc_rad(){
    var element2 = document.getElementById("rad")
    element2.style = "border: solid red"
    var element = document.getElementById("deg")
    element.style = "border: none"
    
    selection = "rad" //Set selection to rad
    
  }

function sin(arg) {
if (selection == "rad") {
    let num = Math.sin(arg)
    return num;
} else if (selection == "deg") {
 let num = Math.round(Math.sin(arg * Math.PI / 180) * 10) / 10;
    return num
}
}
function cos(arg) {
    if (selection == "rad") {
        let num = Math.cos(arg)
        return num;
    } else if (selection == "deg") {
    let num = Math.round(Math.cos(arg * Math.PI / 180) * 10) / 10;
    return num
    }
}
function tan(arg) {
    if (selection == "rad") {
        let num = Math.tan(arg)
        return num;
    } else if (selection == "deg") {
    let num = Math.round(Math.tan(arg * Math.PI / 180) * 10) / 10;
    return num
    }
}
function asin(arg) {
    if (selection == "rad") {
        let num = Math.asin(arg)
        return num;
    } else if (selection == "deg") {
    let num = Math.floor(Math.asin(arg )* 180/Math.PI)
    return num
    }
}
function acos(arg) {
    if (selection == "rad") {
        let num = Math.acos(arg)
        return num;
    } else if (selection == "deg") {
    let num = Math.floor(Math.acos(arg )* 180/Math.PI)
    return num
    }
}
function atan(arg) {
    if (selection == "rad") {
        let num = Math.atan(arg)
        return num;
    } else if (selection == "deg") {
    let num = Math.floor(Math.atan(arg )* 180/Math.PI)
    return num
    }
}
function checkNum(Number) {
    for (let i = 0; i < Number.length; i++) {
        let num = Number.charAt(i);
        if (num < "0" || num > "9") {
            if (num != "/" && num != "*" && num != "+" && num != "-" && num != "." && num != "(" && num != ")" && num != "%") {
                alert("invalid entry!")
                return false
            }
        }
    } 
    return true;
}

function π() {
    let num = Math.PI;
    return num;
}

function exp(arg) {
    let num = Math.exp(arg);
    return num;
}

function random() {
    let num = Math.random()
    return num;
}