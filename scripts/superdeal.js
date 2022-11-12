
// let api_key='http://localhost:8080/posts';
// let api_key='https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan';
let api_key='https://636d5e73b567eed48ac032d6.mockapi.io/user'
let cart_api_key='https://636d5e73b567eed48ac032d6.mockapi.io/cart';





import { navbar } from "../component/nav.js";

let shownav = document.querySelector(".headIndex")

shownav.innerHTML = navbar()

const getData=async()=>{
    try{

       let res=await fetch(api_key);
       let data=await res.json()
       console.log(data);
       append(data);
    

    }catch(error){
         console.log(error);
    }
}
getData();







//append

const append = (data) =>{
    let container = document.getElementById("superdeal_container")
    container.innerHTML=null;

    document.body.append(container);

    data.forEach((el)=>{
        let div = document.createElement("div");
            div.setAttribute("class", "item");
            
            
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

            let flash_sale=document.createElement("p");
            flash_sale.innerText="Flash Sale";

            let off=document.createElement("div");
            off.setAttribute("class", "dis_div");
            off.innerText=el.discount+"%  OFF";


            let addTocartbtn=document.createElement("button");
            addTocartbtn.innerText="Add to Cart";
            addTocartbtn.setAttribute("class","addTocartbtn");
            addTocartbtn.onclick=()=>{
                 add_to_cart(el);
            }


            let buyNowbtn=document.createElement("button");
            buyNowbtn.innerText="Buy Now";
            buyNowbtn.setAttribute("class","buyNowbtn");
            buyNowbtn.onclick=()=>{
                 buynow(el);
            }
            
            


             

            div.append(image,name,price_tag,mrp,flash_sale,off,addTocartbtn,buyNowbtn);
            container.append(div);

    })

}



// dispaly data of a single product when clicking on product div


const displayDetails=(el)=>{
  window.location.dsabled=true;
  let container=document.getElementById("superdeal_container");
  container.innerHTML=null;
  let sort_div=document.getElementById("subNav_bar");
  sort_div.innerHTML=null;


let div1=document.createElement("div");
div1.setAttribute("class","imgdiv");
let image=document.createElement("img");
image.src=el.img_url;

let div2=document.createElement("div");
div2.setAttribute("class","detailsdiv");



let div2_1=document.createElement("div");
div2_1.setAttribute("class","div2_1");
div2_1.innerText=el.title;

let div2_2=document.createElement("div");
div2_2.setAttribute("class","div2_2");



let div2_2_1=document.createElement("div");
let h4=document.createElement("h4");
h4.innerText="Gain more with offers (2)";
let ul=document.createElement("ul");
let p1=document.createElement("p");
p1.innerText="Shop for Rs.50,000 & above and Get Instant Discount Up To Rs.20,000.";
let p2=document.createElement("p");
p2.innerText="Get Cashback upto Rs. 1,000 on Mobikwik Wallet.";

let warrenty=document.createElement("h4");
warrenty.innerText="WARRANTY";
warrenty.style.marginTop="50px";
let warrentytext=document.createElement("p");
warrentytext.innerText="Warranty: 1 Year manufacturer warranty.";


let returnpolicy=document.createElement("h4");
returnpolicy.innerText="Return Policy";
returnpolicy.style.marginTop="50px";
let returnpolicytext1=document.createElement("p");
returnpolicytext1.innerText="Items are eligible for return within 7 Days of Delivery.";
let returnpolicytext2=document.createElement("p");
returnpolicytext2.innerText="All accessories, product & packaging need to be returned in original condition.";


ul.append(p1,p2);
div2_2_1.append(h4,ul,warrenty,warrentytext,returnpolicy,returnpolicytext1,returnpolicytext2);



div2_2_1.setAttribute("class","div2_2_1");

let div2_2_2=document.createElement("div");
div2_2_2.setAttribute("class","div2_2_2");
div2_2_2.style.margin="10px";


let price=document.createElement("h2");
price.innerText="Offer Price: "+el.price;
price.style.color="green";
let limited=document.createElement("p");
limited.innerText="'LIMITED OFFER' GRAB THE DEAL";
limited.style.margin="10px";



div2_2_2.append(price,limited);

let cartbutton=document.createElement("button");
cartbutton.innerText="ADD TO CART";

cartbutton.style.color="white";
cartbutton.style.backgroundColor="#e42529";
cartbutton.style.border="none";
cartbutton.style.padding="4px";
cartbutton.style.borderRadius="20px";
cartbutton.style.width="50%";
cartbutton.style.marginLeft="25%";
cartbutton.style.height="30px";

div2_2.append(div2_2_1,div2_2_2);
div2.append(div2_1,div2_2,cartbutton);
div1.append(image);
container.append(div1,div2);
}










//on scrolling => Sticky subNavbar 


window.onscroll = function() {myFunction()};

var subNav = document.getElementById("subNav");
var sticky = subNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    subNav.classList.add("sticky");
  } else {
    subNav.classList.remove("sticky");
  }
}










//sorting
let selectTag=document.querySelector(".sortByPrice");
selectTag.onchange= () =>{
if(selectTag.value==="highToLow"){
  Sorting_hTol();
}else if(selectTag.value==="lowTohigh"){
  Sorting_lToh();
}
};




const  Sorting_hTol =async() => {
    try{
        let response=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/user');
        let data=await response.json();
        data.sort(function(a,b){
        return b.price-a.price;
        });
        append(data);
      }catch(error){
      console.log(error);
}
};


const  Sorting_lToh =async() => {
  try{
      let response=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/user');
      let data=await response.json();
      data.sort(function(a,b){
      return a.price-b.price;
      });
      append(data);
    }catch(error){
    console.log(error);
}
};






//sorting based on discount


let discount_btn=document.querySelector(".sortByDiscount");
discount_btn.onclick=()=>{
  Sorting_hTol_discount();
}


const  Sorting_hTol_discount =async() => {
  try{
      let response=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/user');
      let data=await response.json();
      data.sort(function(a,b){
      return b.discount-a.discount;
      });
      append(data);
    }catch(error){
    console.log(error);
}
};


//Adding product to cart



const add_to_cart= async(el)=>{

  
  
  try{


    let res= await fetch(cart_api_key,{
      method:"POST",
      body: JSON.stringify(el),
      headers:{
        "content-type":"application/json"
      }
    });
    
    let data=await res.json();
    console.log(data);
  


  }catch(error){
     console.log(error);
  }
}


//for direct buying products without adding into cart


const buynow = async(el) => {
 
  try{
   let res= await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/checkout`,{
     method:"POST",
     body: JSON.stringify(el),
     headers:{
         "content-type":"application/json"
     }
   });
    let updatedData=await res.json();
    console.log(updatedData);

    window.location.href='././checkout.html';
  }
  catch(error){
 console.log(error);
 }
 };



