
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

const totalcount = () => {
  document.querySelector("#Totalitem>span").innerText=cart.length;
}
totalcount(cart);

let box2_div=document.getElementById("box2");
box2_div.innerHTML = null;
function display(cart){
  let totalprice = 0;

      cart.forEach(function(el,i){ 

    let div=document.createElement("div");

    let img_url=document.createElement("img");
    img_url.src=el.img_url;

    let title=document.createElement("p");
   title.innerText=el.title;

    let price=document.createElement("h5");
    price.setAttribute("id","Price");
    price.innerText=`Price : ₹ ${el.price}`;
    totalprice+=+el.price; // total price code

   let discount=document.createElement("h5");
   discount.innerText=`Dis : ${el.discount}%`;

     let btn=document.createElement("button");
     btn.innerText="Buy Now";
     btn.onclick= ()=>{
     buynow(el);
     }

     let btn1=document.createElement("button");
     btn1.innerText="Remove";
      btn1.onclick = () => {
        Delete(el,i)
      }

     div.append(img_url,title,price,discount,btn,btn1);
        box2_div.append(div);
   });
  // console.log(totalprice);
  let cost = document.querySelector("#Totalcost>span");
  cost.innerText = totalprice;
}

display(cart);
// Delete function
function Delete(el,i){
    cart.splice(i,1);
    localStorage.setItem("cart_items",JSON.stringify(cart));
    display(cart)
    totalcount(cart)
 
  
  display(data);
  
}

let checkArray=JSON.parse(localStorage.getItem("checkout"))||[];
const buynow = (el,i) => {
 window.location.href='././checkout.html';
 cart.splice(i,1);
localStorage.setItem("cart_items",JSON.stringify(cart));
display(cart);
totalcount(cart)
checkArray.push(el);
localStorage.setItem("checkout",JSON.stringify(checkArray));
};
    //Delete_array.push(el);
   cart.splice(i,1);
   //localStorage.setItem("deleted_array",JSON.stringify(Delete_array));
   localStorage.setItem("cart_items",JSON.stringify(cart));
}




















