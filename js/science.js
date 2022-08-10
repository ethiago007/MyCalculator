function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
};
