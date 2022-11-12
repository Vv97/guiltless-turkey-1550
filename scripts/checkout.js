//get data which customer is aabout to buy;

const getData=async()=>{
   try{

      let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/checkout');
      let data=await res.json()
   //    console.log(data);
      append(data);
    
   

   }catch(error){
        console.log(error);
   }
}
getData();
let cart_total;
     

const append = (data) =>{
   let container = document.getElementById("checkout_container")
   container.innerHTML=null;

   // document.body.append(container);

   data.forEach((el)=>{
       let div = document.createElement("div");
           div.setAttribute("class", "item");

           let div1 = document.createElement("div");

           let div2 = document.createElement("div");
           
           
           let image=document.createElement("img");
           image.src=el.img_url;
           image.onclick=()=>{
             displayDetails(el);
           }

           let name=document.createElement("h3");
               name.innerText=el.title;
               name.onclick=()=>{
                 displayDetails(el);
               }

           let price_tag= document.createElement("h4");
               price_tag.setAttribute("class", "final_price");
               let discounted_price=+el.price-((+el.discount)*(+el.price))/100;
               price_tag.innerText=`Rs:- ${Math.ceil(discounted_price)}`;
           
           let mrp=document.createElement("h5");
               mrp.innerText=`M.R.P. Rs:- ${el.price}`;
               cart_total+=+el.price;

           let flash_sale=document.createElement("p");
             flash_sale.innerText=`Hurry! only ${el.quantity} items left in stock`;
           

            let price=document.createElement("h3");
            price.innerText=`Price Rs :${el.price}`;
            cost+=+el.price;

            let btn=document.createElement("button");
            btn.innerText="Checkout";
           div.append(img_url,title,price,btn);
           box3_div.append(div);
        });
        
     let totalprice= document.querySelector("#totalprice > span");
     totalprice.innerText=cost;
      totalcount(cart1);
           }

let arr=[];
const placeOrder=async ()=>{

  let res=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/checkout');
  let data=await res.json()
//    console.log(data);
  data.forEach((el)=>{
      console.log(el.id);
  })

  try{}catch(error){
    console.log(error);
  }
  
}