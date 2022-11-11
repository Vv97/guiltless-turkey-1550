let cart= JSON.parse(localStorage.getItem("cart_items"))||[];

//total count code

const totalcount = () => {
  document.querySelector("#Totalitem>span").innerText=cart.length;
}
totalcount(cart)




function display(cart){
  let totalprice = 0;
 
  let box2_div=document.getElementById("box2");
       box2_div.innerHTML = null;

      cart.forEach(function(el,i){ 

   
    let div=document.createElement("div");

    let img_url=document.createElement("img");
    img_url.src=el.img_url;

    let title=document.createElement("p");
   title.innerText=el.title;

    let price=document.createElement("h5");
    price.innerText=`Price Rs:${el.price}`;
    totalprice+=+ el.price; // total price code

   let discount=document.createElement("h5");
   discount.innerText=`Dis% Rs:${el.discount}`;

     let btn=document.createElement("button");
     btn.innerText="Buy Now";
     btn.onclick= ()=>{
     buynow(el,i);
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
 
  
}

let checkArray=JSON.parse(localStorage.getItem("checkout"))||[];
const buynow = (el,i) => {
// window.location.href='././checkout.html';
 cart.splice(i,1);
localStorage.setItem("cart_items",JSON.stringify(cart));
display(cart);
totalcount(cart)
checkArray.push(el);
localStorage.setItem("checkout",JSON.stringify(checkArray));
};


