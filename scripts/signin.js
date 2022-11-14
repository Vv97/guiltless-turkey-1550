

/*   let form=document.querySelector("form");
    let LSData=JSON.parse(localStorage.getItem("data-project")) || [];

    form.addEventListener("submit",function(event){
        event.preventDefault()

        let obj={
            email:form.email.value,
            password:form.password.value
        }

        for(let i in obj){
            if(obj[i]==""){
                alert("Fill All Fields");
                return ;
            }

            let state=false;
            for(let i=0; i<=LSData.length-1; i++){
                if(LSData[i].email == obj.email && LSData[i].password == obj.password){
                   // alert(LSData[i].name,"login success")
                    state=true;
                    if(state == true){
                alert(LSData[i].name+" "+"login success");
                break ;
                }     
                } 
            }
           if(state==false){
                alert("No Account Found");
                break ;
            }
                
            
        }
    })   */


let form = document.querySelector("form");
form.addEventListener("submit", sdata)

let arr = JSON.parse(localStorage.getItem("autentication")) || [];
console.log(arr)

function sdata(el) {
    el.preventDefault()

    let email = form.email.value;
    let password = form.password.value;

    let p = 0;
    let c = 0;





    arr.forEach(el => {
        console.log(el.email)

        if (el.email == email && el.password == password) {
            alert("succesful sign in");
            let URL = "index.html";
            window.location.href = URL;
        }


        if (el.password !== password) {
            p++
        }





        if (el.email != email) {
            c++
        }




        count(p, c)
    })


    function count(p, c) {
        if (c == arr.length) {
            alert("wrong username")
        }

        if (p == arr.length) {
            alert("wrong password")
        }
    }



}


const homePage = () => window.location.href = "index.html"


const redirect = document.getElementById("logo");
redirect.onclick = homePage
