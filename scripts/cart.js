import { navbar } from "../component/nav.js";

let shownav = document.querySelector(".headIndex")

shownav.innerHTML = navbar()



//getting all the products which are present in cart

let cart_api_key='https://636d5e73b567eed48ac032d6.mockapi.io/cart'

const getData=async()=>{
  try{

     let res=await fetch(cart_api_key);
     let data=await res.json()
     display(data);
  

  }catch(error){
       console.log(error);
  }
}
getData();

//total count code


function display(cart){
  let totalprice = 0;
 
  let box2_div=document.getElementById("box2");
       box2_div.innerHTML = null;

    cart.forEach(function(el){ 


        document.querySelector("#Totalitem>span").innerText=cart.length;

    let div=document.createElement("div");

    let img_url=document.createElement("img");
    img_url.src=el.img_url;

    let title=document.createElement("p");
   title.innerText=el.title;

    let price=document.createElement("h5");
    price.innerText=`Price Rs:${el.price}`;
    totalprice+=+el.price; // total price code

   let discount=document.createElement("h5");
   discount.innerText=`Dis% Rs:${el.discount}`;

     let btn=document.createElement("button");
     btn.innerText="Buy Now";
     btn.onclick= ()=>{
     buynow(el);
     }

     let btn1=document.createElement("button");
     btn1.innerText="Remove";
      btn1.onclick = () => {
        removeProduct(el)
      }

     div.append(img_url,title,price,discount,btn1);
        box2_div.append(div);
   });
  // console.log(totalprice);
  let cost = document.querySelector("#Totalcost>span");
  cost.innerText = totalprice;
}





// Delete function
const removeProduct =async (el)=>{
  
  let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/cart/${el.id}`,{
      method:"DELETE",
      headers:{
          "content-type":"application/json"
      }
  });

  let deletedData= await res.json();
  console.log(deletedData);


  let response= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/cart`);
  let data = await response.json();
  console.log(data);

  
  display(data);
  
}


//proceed to checkout

// const buynow = async(el) => {
 


//  try{
//   let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/checkout`,{
//     method:"POST",
//     body: JSON.stringify(el),
//     headers:{
//         "content-type":"application/json"
//     }
//   });
//    let data=await res.json();
//    console.log(data);

//    window.location.href='././checkout.html';
//  }
//  catch(error){
// console.log(error);
// }
// };

const checkout=document.getElementById("checkout");
checkout.onclick=()=>{
Add_checkout();
}



let arr=[];

const checkout_data=async()=>{
    try{
 
        let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/cart');
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


//Adding cart data to checkout page
const Add_checkout=()=>{
  for(let i=0; i<arr.length; i++){
   let el=arr[i];
   proceed_to_checkout(el);
   
}
// window.location.reload();
}


const proceed_to_checkout= async(el)=> {
  window.location.href='checkout.html';
  try{
    let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/checkout`,{
      method:"POST",
      body: JSON.stringify(el),
      headers:{
          "content-type":"application/json"
      }
    });
     let data=await res.json();
     console.log(data);
  
     window.location.href='checkout.html';
   }
   catch(error){
  console.log(error);
  }

}

