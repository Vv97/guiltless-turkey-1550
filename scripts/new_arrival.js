import {navbar} from "../component/nav.js";

let showdata = document.querySelector(".headIndex");
showdata.innerHTML = navbar()


let api_key='https://636d5e73b567eed48ac032d6.mockapi.io/user';
//get data
const getData=async()=>{
    try{
       let res=await fetch(api_key);
       let data=await res.json()
    //    console.log(data);
    appendData(data);
    }catch(error){
         console.log(error);
    }
}
getData();

function appendData(data){
console.log('data:', data)

    let container=document.getElementById("latest_collection");
 container.innerHTML=null;
    data.forEach(function(el){
   let div=document.createElement("div");
      


   let img=document.createElement("img");
   img.src=el.img_url;
   img.style.width="400px";
   img.style.height="350px";

   let p=document.createElement("p");
   p.innerText=el.title;

   let price_div=document.createElement("div");
   price_div.setAttribute("id","price_cart")

   let p1=document.createElement("p");
    p1.innerText=`₹ ${el.price}`;
    p1.setAttribute("class","rupees")

    let off=document.createElement("div");
        off.innerText=`${el.discount}% off`;
   
        off.style.color="white";
        off.style.textAlign="center";
        off.style.position="absolute";
        off.style.height="6%";
        off.style.width="3%";
        off.style.backgroundColor="red";
        off.style.position="absolute";
        off.style.marginTop="-17.2%";
        off.style.marginLeft="16%"
        off.style.borderRadius="50%";
        off.style.fontSize="150%"
        off.style.padding="0.5%"
    let btn=document.createElement("button");
    btn.innerText="Add to Cart" 
    btn.setAttribute("class","cart_button");
    btn.onclick=()=>{
      add_to_cart(el);
     
    }

    price_div.append(p1,btn)
    div.append(img,off,p,price_div)
    container.append(div);
            
      
          });

    
   }


   // Adding product to cart



const add_to_cart= async(el)=>{
// console.log('el:', el)

  
  
  try{


    let res= await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/cart',{
      method:"POST",
      body: JSON.stringify(el),
      headers:{
        "content-type":"application/json"
      }
    });
    
    let data=await res.json();
    console.log(data);

    alert('order placed sucessfully');
    window.location.reload();
  


  }catch(error){
     console.log(error);
   }
}



