let arr=[];

const checkout_data=async()=>{
    try{
 
        let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/checkout');
        let data=await res.json()
        console.log(data);
       data.forEach((el)=>{
         arr.push(el);
       })
     
  
     }catch(error){
          console.log(error);
     }
}

console.log("arr:",arr)
checkout_data();





//payment button
let paymentButton=document.getElementById("payButton");
paymentButton.onclick=()=>{
   remove();
   
}





let backBtn=document.querySelector(".backBtn");
backBtn.onclick =(e)=>{
    e.preventDefault();
    let value = confirm("Do you want to cancel payment?")
    console.log(value);

    if(value===true){
        window.location.href="index.html";
    }
}



//fetching all the data  from main page and cart page

const home_page_data=async()=>{
    try{
 
        let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/user');
        let data=await res.json()
       console.log(data);
      
     
  
     }catch(error){
          console.log(error);
     }
}
home_page_data();





const cart_data=async()=>{
    try{
 
        let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/cart');
        let data=await res.json()
        // console.log(data);
      
     
  
     }catch(error){
          console.log(error);
     }
}
cart_data()






//deleting checkout data

const removeProduct =async (el)=>{
    let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/checkout/${el.id}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        }
    });
  
    let deletedData= await res.json();
    // console.log(deletedData);
    
  }





//removing from cart
const removeProductforCart =async (el)=>{
    let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/cart/${el.id}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        }
    });
  
    let deletedData= await res.json();
    // console.log(deletedData);
  
    
  }



  //quantity updating on main page
const  deletefromindexpage =async(el)=>{
    try{ 
        let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/user/${el.id}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        }
    });
  
    let deletedData= await res.json();

    }catch(err){
      console.log(err);
    }


}

  const updatePrice=async (el)=>{
    try{
        let new_Qty = (+el.quantity)-1;
        let data={
            category:el.category,
            discount:el.discount,
            quantity:new_Qty,
            id:el.id,
            price:el.price,
            sub_category:el.sub_category,
            title:el.title
        }

        console.log(data);

        let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/user/${el.id}`,{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    });

    let updatedData=await res.json();
    console.log(updatedData);

    

    }catch(error){
        console.log(error);
    }

}







const remove=()=>{
  for(let i=0; i<arr.length; i++){
   let el=arr[i];
   removeProduct(el);
   
}
alert("Order Successfull Placed")
window.location.href="index.html";
}
