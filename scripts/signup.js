let form = document.querySelector("form");
form.addEventListener("submit", clicked)


function creobj(e, p) {
    this.email = e;
    this.password = p;
}


const checkpassword = (p, r) => {



    if (p != r) {
        return false;
    }

    return true
}

function getdata() {
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let ress = form.repass.value;
    let code = form.code.value;


    if (name == "" || email == "" || password == "" || ress == "" || code == "") {
        alert("please put all the value in input");
        return false
    }


    let val = password.length < 8 ? false : true;




    console.log(name, email, password, ress)

    let checkpass = checkpassword(password, ress);

    if (!checkpass) {
        alert("password not match")
        return false
    }

    let arr = JSON.parse(localStorage.getItem("autentication")) || [];
    let c = 0;
    arr.forEach(el => {
        if (el.email == email) {
            alert("user already exists")
            c++
        }
    })



    if (c == 1) {
        return false
    }
    let data1 = new creobj(email, password);

    arr.push(data1)

    alert("Register Successful")

    let URL = "signin.html";
    window.location.href = URL;

    localStorage.setItem("autentication", JSON.stringify(arr))
}

function clicked(el) {
    el.preventDefault()
    getdata()
}

const sumbit = document.getElementById("submit");
sumbit.onclick = clicked


const homePage = () => window.location.href = "index.html"


const redirect = document.getElementById("logo");
redirect.onclick = homePage

