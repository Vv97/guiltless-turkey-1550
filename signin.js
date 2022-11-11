

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