
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
  
  let sub_navbar=document.getElementById("subNav_bar");
  sub_navbar.innerHTML=null;
  

  let container = document.getElementById("superdeal_container")
    container.innerHTML=null;


    let div = document.createElement("div");
    div.setAttribute("id", "details_div");

    let div1 = document.createElement("div");

    let div2 = document.createElement("div");
    
    
    let image=document.createElement("img");
    image.src=el.img_url;

    let name=document.createElement("h3");
        name.innerText=el.title;

    let price_tag= document.createElement("h4");
        price_tag.setAttribute("class", "final_price");
        let discounted_price=+el.price-((+el.discount)*(+el.price))/100;
        price_tag.innerText=`Rs:- ${Math.ceil(discounted_price)}`;
    
    let mrp=document.createElement("h5");
        mrp.innerText=`M.R.P. Rs:- ${el.price}`;
        

    let flash_sale=document.createElement("p");
      flash_sale.innerText=`All offers and coupon`;

     let btn=document.createElement("button");
     btn.innerText="Add to Cart";
     btn.onclick=()=>{
      add_to_cart();
     }

     let back_btn=document.createElement("h6");
     back_btn.innerText="<= Back to Superdeal page";
     back_btn.onclick=()=>{
      backtosuperdeal();
     }

     div1.append(image)
     div2.append(name,price_tag,mrp,flash_sale,btn,back_btn)
    div.append(div1,div2);
    container.append(div);

}

//back to superdeal page from details
const backtosuperdeal=()=>{
  window.location.href="./superdeal.html";
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
  
    alert("Product added to cart")
    window.location.reload();

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



