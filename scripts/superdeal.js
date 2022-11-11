
// let api_key='http://localhost:8080/posts';
// let api_key='https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan';
let api_key='https://636d5e73b567eed48ac032d6.mockapi.io/user'


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

            let name=document.createElement("h3");
                name.innerText=el.title;

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
            
            


             

            div.append(image,name,price_tag,mrp,flash_sale,off,addTocartbtn);
            container.append(div);

    })

}



//Adding product to cart

const add_to_cart=(el)=>{
  console.log(el);
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