let cart= JSON.parse(localStorage.getItem("cart_items"))||[];
let Delete_array=JSON.parse(localStorage.getItem("deleted_array"))||[];
let box2_div=document.getElementById("box2");

cart.forEach(function(el,i){

//   let cost=cart.reduce(function(acc,el) {
//    return acc + Number(el.price);
//   },0);
 // document.querySelector("h1>span").innerText=cost;
 document.querySelector("h2>span").innerText=cart.length;

  let div=document.createElement("div");
  let img_url=document.createElement("img");
  img_url.src=el.img_url;
  let name=document.createElement("p");
  name.innerText=el.name;
  let price=document.createElement("h5");
  price.innerText=el.price;
  let btn=document.createElement("button");
  btn.innerText="Buy Now";
  let btn1=document.createElement("button");
  btn1.innerText="Remove";
  btn1.addEventListener("click",function(event){
    event.target.parentNode.remove();
   Delete(i);
  })
div.append(img_url,name,price,btn,btn1);
box2.append(div);
});

function Delete(el,i){
    //Delete_array.push(el);
   cart.splice(i,1);
   //localStorage.setItem("deleted_array",JSON.stringify(Delete_array));
   localStorage.setItem("cart_items",JSON.stringify(cart));
}