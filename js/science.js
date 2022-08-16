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
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (let i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
function calc_deg() {
    var element = document.getElementById("deg")
    element.style = "border: solid red"
    var element2 = document.getElementById("rad")
    element2.style = "border none"

    selection = "deg" //Set selection to deg

}

function calc_rad() {
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
        let num = Math.floor(Math.asin(arg) * 180 / Math.PI)
        return num
    }
}
function acos(arg) {
    if (selection == "rad") {
        let num = Math.acos(arg)
        return num;
    } else if (selection == "deg") {
        let num = Math.floor(Math.acos(arg) * 180 / Math.PI)
        return num
    }
}
function atan(arg) {
    if (selection == "rad") {
        let num = Math.atan(arg)
        return num;
    } else if (selection == "deg") {
        let num = Math.floor(Math.atan(arg) * 180 / Math.PI)
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
function gram(number1) {

    $(".num2").innerHTML = number1 / 1000

}
function massConverter(valNum) {
    let selection = $("select#inputGroupSelect01").val()
    if (selection === "empty") {
        $(".ifempty").show();
    }

    else if (selection === "Gram") {
        $(".gram-gram").hide()
        $(".kilo-gram").show()
        $(".ifempty").hide();
        document.getElementById("num2").innerHTML = valNum / 1000;
    } else {
        document.getElementById("num2").innerHTML = valNum * 1000;
        $(".kilo-gram").hide();
        $(".gram-gram").show();
        $(".ifempty").hide();
    }
}

function lengthConverter(valNum) {
    let selection1 = $("select#inputGroupSelect02").val()
    let selection2 = $("select#inputGroupSelect022").val()
    if (selection1 === "empty" && selection2 === "empty") {
        $(".ifempty").show();
    }

    else if (selection1 === "centimeter" && selection2 === "meter") {
        $(".meter-meter").show()
        $(".kilo-metre").hide()
        $(".mile-mile").hide()
        $(".centi-meter").hide()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum / 100;
    } else if (selection1 === "centimeter" && selection2 === "kilometre") {
        $(".kilo-metre").show()
        $(".mile-mile").hide()
        $(".centi-meter").hide()
        $(".meter-meter").hide()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum / 100000;
    }
    else if (selection1 === "centimeter" && selection2 === "mile") {
        $(".mile-mile").show()
        $(".kilo-metre").hide()
        $(".centi-meter").hide()
        $(".meter-meter").hide()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum / 160900;
    }
    else if (selection1 === "meter" && selection2 === "centimeter") {
        $(".centi-meter").show()
        $(".kilo-metre").hide()
        $(".mile-mile").hide()
        $(".meter-meter").hide()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum * 100;
    } else if (selection1 === "meter" && selection2 === "kilometre") {
        $(".centi-meter").hide()
        $(".kilo-metre").show()
        $(".mile-mile").hide()
        $(".meter-meter").hide()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum / 1000;
    } else if (selection1 === "meter" && selection2 === "mile") {
        $(".centi-meter").hide()
        $(".kilo-metre").hide()
        $(".mile-mile").show()
        $(".meter-meter").hide()
        document.getElementById("num3").innerHTML = valNum / 1609;
    } else if (selection1 === "kilometre" && selection2 === "centimeter") {
        $(".centi-meter").show()
        $(".kilo-metre").hide()
        $(".mile-mile").hide()
        $(".meter-meter").hide()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum * 100000;
    } else if (selection1 === "kilometre" && selection2 === "meter") {
        $(".centi-meter").hide()
        $(".kilo-metre").hide()
        $(".mile-mile").hide()
        $(".meter-meter").show()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum * 1000;
    } else if (selection1 === "kilometre" && selection2 === "mile") {
        $(".centi-meter").hide()
        $(".kilo-metre").hide()
        $(".mile-mile").show()
        $(".meter-meter").hide()
        $(".sameunit").hide();
        $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum * 1.609;
    } else if (selection1 === "mile" && selection2 === "centimeter") {
        $(".centi-meter").show()
        $(".kilo-metre").hide()
        $(".mile-mile").hide()
        $(".meter-meter").hide()
         $(".sameunit").hide();
          $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum * 160900;
    } else if (selection1 === "mile" && selection2 === "meter") {
        $(".centi-meter").hide()
        $(".kilo-metre").hide()
        $(".mile-mile").hide()
        $(".meter-meter").show()
         $(".sameunit").hide();
          $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum * 1609;
    } else if (selection1 === "mile" && selection2 === "kilometre") {
        $(".centi-meter").hide()
        $(".kilo-metre").show()
        $(".mile-mile").hide()
        $(".meter-meter").hide()
         $(".sameunit").hide();
          $(".ifempty").hide();
        document.getElementById("num3").innerHTML = valNum * 1.609;
    }
    else {
       $(".sameunit").show();
       $(".ifempty").hide();
       $(".centi-meter").hide()
        $(".kilo-metre").hide()
        $(".mile-mile").hide()
        $(".meter-meter").hide()
       
    }
}

function speedConverter(valNum) {
    let selection = $("select#inputGroupSelect01s").val()
    if (selection === "empty") {
        $(".ifempty").show();
    }

    else if (selection === "kph") {
        $(".kph1").hide()
        $(".mps1").show()
        $(".ifempty").hide();
        document.getElementById("num4").innerHTML = (valNum / 3.6).toFixed(5);
    } else {
        document.getElementById("num4").innerHTML = (valNum *3.6).toFixed(2);
        $(".kph1").hide();
        $(".mps1").show();
        $(".ifempty").hide();
    }
}