let action = $("#display").val()
function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
};

function sin(arg) {

    let num = Math.round(Math.sin(arg * Math.PI / 180) * 10) / 10;
    return num
}
function cos(arg) {

    let num = Math.round(Math.cos(arg * Math.PI / 180) * 10) / 10;
    return num
}
function tan(arg) {

    let num = Math.round(Math.tan(arg * Math.PI / 180) * 10) / 10;
    return num
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
