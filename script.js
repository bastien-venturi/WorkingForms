document.getElementById("firstname").addEventListener("keyup", entername);

function entername() {
    let name = document.getElementById("firstname").value;
    document.getElementById("display-firstname").innerHTML = name;
}

document.getElementById("age").addEventListener("keyup", enterage);

function enterage() {
    let age = document.getElementById("age").value;
    if (age >= 18) {
        document.getElementById("a-hard-truth").style.visibility = "visible";
    } else {
        document.getElementById("a-hard-truth").style.visibility = "hidden";
    }
}

let pwd = document.getElementById("pwd");
let pwdconfirm = document.getElementById("pwd-confirm");

pwd.addEventListener("keyup", enterpwd);
pwdconfirm.addEventListener("keyup", enterpwdconf);

function enterpwd() {
    if (pwd.value.length < 6) {
        pwd.style.backgroundColor = "red";
    } else {
        pwd.style.backgroundColor = "green";
    }  
}

function enterpwdconf() {
    if (pwdconfirm.value !== pwd.value) {
        pwdconfirm.style.backgroundColor = "red";
    }else {
        pwdconfirm.style.backgroundColor = "green";
    }
}

let darkmode = document.getElementById("toggle-darkmode");
darkmode.addEventListener("change", modedark);

function modedark() {
    if (darkmode.value === 'dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}