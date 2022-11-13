//get data which customer is aabout to buy;

const getData=async()=>{
   try{

      let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/checkout');
      let data=await res.json()
      console.log(data);
      append(data);
    
   

   }catch(error){
        console.log(error);
   }
}
getData();
let count=0;
let total_mrp=0;
let cart_total=0;    

const append = (data) =>{
   let container = document.getElementById("checkout_container")
   container.innerHTML=null;

   // document.body.append(container);

   data.forEach((el)=>{
    count++;
    arr.push(el);
       let div = document.createElement("div");
           div.setAttribute("class", "item");

           let div1 = document.createElement("div");

           let div2 = document.createElement("div");
           
           
           let image=document.createElement("img");
           image.src=el.img_url;

           let name=document.createElement("h3");
               name.innerText=el.title;

           let price_tag= document.createElement("h1");
               price_tag.setAttribute("class", "final_price");
               let discounted_price=+el.price-((+el.discount)*(+el.price))/100;
               price_tag.innerText=`Rs:- ${Math.ceil(discounted_price)}`;
               cart_total+=discounted_price;
           
           let mrp=document.createElement("h5");
               mrp.innerText=`M.R.P. Rs:- ${el.price}`;
               total_mrp+=+el.price;

           let qty=document.createElement("p");
             qty.innerText=`Hurry! only ${el.quantity} items left in stock`;
           

            let discount=document.createElement("h4");
            discount.innerText=`Discount :${el.discount}%`;
            

            div1.append(image)
            div2.append(name,price_tag,mrp,qty,discount)
           div.append(div1,div2);
           container.append(div);
        });
        
     let show_total=document.getElementById("total_mrp");
      show_total.textContent=total_mrp;

      let saved_amount=document.getElementById("saved_amount");
      saved_amount.innerText=total_mrp-cart_total;

      let amount_tobe_paid=document.getElementById("amountTobepaid");
      amount_tobe_paid.innerText=cart_total;

      let totalNoitem=document.getElementById("count");
      totalNoitem.innerText=count;

      console.log(arr);
  }

   
  


  //placing order

let place_order=document.getElementById("order_place");
place_order.onclick=()=>{
  placeOrder();
}


const placeOrder=async ()=>{
  try{
  let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/checkout');
  let data=await res.json()
//    console.log(data);
  data.forEach((el)=>{
      console.log(el.id);
  })

  }catch(error){
    console.log(error);
  }
  
}