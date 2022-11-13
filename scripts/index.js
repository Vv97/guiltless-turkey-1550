
/*
// TO IMPORT FOOTER SECTION :-

import footer from "./components/footer.js"

let downto=document.getElementById("downto");
downto.innerHTML=footer();  */

import { navbar } from "../component/nav.js";

let showmav = document.querySelector(".headIndex")

showmav.innerHTML = navbar()



let collpic = document.getElementById("collpic");
let addTo = JSON.parse(localStorage.getItem("addTo")) || [];



/* COLLECTION SECTION  */

let collec = [{
  url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16654/goods_thumb_220-v3/b14e634a2e36.jpg",
  name: "Nimble Tech Store",
  price: 24.99
},
{
  url: "https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16548/goods_thumb_220-v1/1efb2c7133bd.jpg",
  name: "Ortur Officail Store",
  price: 319.99
},
{
  url: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_thumb_220-v1/b16d56b31f5b.jpg",
  name: "Asseo Go Store",
  price: 169.99
},
{
  url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/4e5c7e4add41.jpg",
  name: "Clearance Sale",
  price: 34.94
},
{
  url: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16513/goods_thumb_220-v1/e198e1605f41.jpg",
  name: "Eight Hours Store",
  price: 8.90
}
]

const collpicAppend = (data) => {
  let collpic = document.getElementById("collpic");
  console.log(data)

  data.forEach(function (el) {
    let card = document.createElement("div");
    card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";


    let price_card = document.createElement("div");
    price_card.innerText = "₹" + " " + el.price + "/-";
    price_card.style.height = "40px";
    price_card.style.width = "100%";
    price_card.style.marginTop="30px"
    // price_card.style.alignItems = "baseline"
    price_card.style.background = "red";
    price_card.style.color = "white";
    price_card.style.fontSize = "20px";
    price_card.style.textAlign = "center";
    price_card.style.display = "none";

    let img = document.createElement("img");
    img.src = el.url;
    img.style.width = "90%";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.style.textAlign = "center";
    name.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"

    card.append(img, name, price_card);


    card.onmouseover = () => {
      price_card.style.display = "block";
    }
    card.onmouseleave = () => {
      price_card.style.display = "none";
    }
    collpic.append(card);

  })

}
collpicAppend(collec);

/* SUPERDEALS */
let supercol = [
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16515/goods_thumb_220-v4/50504435afc7.jpg",
    name: "xiaomi xiaoVV smart outdoor camera",
    cutprice: "119",
    price: 56.99,
    off: "20% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16498/goods_thumb_220-v3/959e91168592.jpg",
    name: "Xiaomi Mijia Sonic Electric Toothbrush T500 Mi Home",
    cutprice: "40",
    price: 28.99,
    off: "26% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16485/goods_thumb_220-v1/9f0b0f0fb93e.jpg",
    name: "X12 Plus 7inch 16GB Game Console Games Emulators",
    cutprice: "65",
    price: 51.99,
    off: "50% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16481/goods_thumb_220-v1/7291d320c1e2.jpg",
    name: "DOOGEE V20 Global Version Dual 5G IP68",
    cutprice: "599",
    price: 385.99,
    off: "10% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16584/goods_thumb_220-v3/7d7a74f9044c.jpg",
    name: "Global Version M11 Ultra Smartphones Android 7.3",
    cutprice: "240",
    price: 117.99,
    off: "32% OFF",
  },

]

let superpicAppend = (data) => {
  let superpic = document.getElementById("superpic");

  data.forEach(function (el) {
    let card = document.createElement("div");
    card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
    card.style.padding = "5px";

    let off = document.createElement("div");
    off.innerText = el.off;
    off.style.color = "white";
    off.style.textAlign = "center";
    off.style.border="1px solid black";
    off.style.position = "absolute";
    off.style.height = "50px";
    off.style.width = "50px";
    off.style.backgroundColor = "red";
    off.style.position = "absolute";
    off.style.marginTop = "-185px";
    off.style.padding="5px";
    //  off.style.marginRight="30%";
    off.style.marginLeft="-5px"
    off.style.borderRadius = "50%"

    let img = document.createElement("img");
    img.src = el.url;
    img.style.width = "100%";
    img.style.height = "52%";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.style.textAlign = "center";
    name.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";

    let cutprice = document.createElement("p");
    cutprice.innerText = "₹" + " " + el.cutprice + "/-";
    cutprice.style.textDecoration = "line-through";
    cutprice.style.color = "gray";
    cutprice.style.marginTop="20px";
    cutprice.style.marginBottom = "8px"
    cutprice.style.fontSize="20px"

    let price = document.createElement("p");
    price.innerText = "₹" + " " + el.price + "/-";
    price.style.color = "#F30240";
    price.style.fontSize = "25px"

    card.append(img, off, name, cutprice, price);
    superpic.append(card);

  })

}
superpicAppend(supercol);

// for pagination data  (NEW SECTION)

let pro_data = [
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16660/goods_thumb_220-v1/59b11139a0dd.jpg",
    cutprice: "29.99",
    price: 17.68,
    off: "41%OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16653/goods_thumb_220-v4/dda839eb0bb0.jpg",
    cutprice: "29.99",
    price: 9.37,
    off: "31%OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16659/goods_thumb_220-v1/d042dd9ed7e0.jpg",
    cutprice: "699.34",
    price: 500.37,
    off: "21%OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16654/goods_thumb_220-v1/e7c2f2a04654.jpg",
    cutprice: "12.34",
    price: 9.37,
    off: "7%OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16660/goods_thumb_220-v1/4aaf79b9a0f7.jpg",
    cutprice: "29.34",
    price: 17.37,
    off: "34%OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16654/goods_thumb_220-v1/702818208981.jpg",
    cutprice: "70.34",
    price: 63.37,
    off: "21%OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16652/goods_thumb_220-v1/f6bacc190fa6.jpg",
    cutprice: "499.34",
    price: 349.37,
    off: "30%OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16515/goods_thumb_220-v4/50504435afc7.jpg",
    name: "xiaomi xiaoVV smart outdoor camera",
    cutprice: "119",
    price: 56.99,
    off: "20% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16498/goods_thumb_220-v3/959e91168592.jpg",
    name: "Xiaomi Mijia Sonic Electric Toothbrush T500 Mi Home",
    cutprice: "40",
    price: 28.99,
    off: "26% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16485/goods_thumb_220-v1/9f0b0f0fb93e.jpg",
    name: "X12 Plus 7inch 16GB Game Console Games Emulators",
    cutprice: "65",
    price: 51.99,
    off: "50% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16481/goods_thumb_220-v1/7291d320c1e2.jpg",
    name: "DOOGEE V20 Global Version Dual 5G IP68",
    cutprice: "599",
    price: 385.99,
    off: "10% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16584/goods_thumb_220-v3/7d7a74f9044c.jpg",
    name: "Global Version M11 Ultra Smartphones Android 7.3",
    cutprice: "240",
    price: 117.99,
    off: "32% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16654/goods_thumb_220-v3/b14e634a2e36.jpg",
    name: "Nimble Tech Store",
    cutprice: "40.68",
    price: 24.99,
    off: "26% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16548/goods_thumb_220-v1/1efb2c7133bd.jpg",
    name: "Ortur Officail Store",
    cutprice: "48.89",
    price: 319.99,
    off: "16% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_thumb_220-v1/b16d56b31f5b.jpg",
    name: "Asseo Go Store",
    cutprice: "542.5",
    price: 169.99,
    off: "10% OFF"
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/4e5c7e4add41.jpg",
    name: "Clearance Sale",
    cutprice: "101.23",
    price: 434.94,
    off: "12% OFF"
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16513/goods_thumb_220-v1/e198e1605f41.jpg",
    name: "Eight Hours Store",
    cutprice: "100.23",
    price: 400.90,
    off: "32% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16589/goods_thumb_220-v5/fc175520613e.jpg",
    price: 110000,
    name: "Cell Phone Accessories",
    cutprice: "2000.50",
    off: "9% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16424/goods_thumb_220-v4/e6491a442006.jpg",
    price: 10000,
    name: "Cell Phone Accessories",
    cutprice: "300.23",
    off: "70% OFF",
  },
  {
    url: "https://gloimg.gbtcdn.com/soa/gb/item/6878024229519028224/16490/goods_thumb_220-v2/588fd1bac1de.jpg",
    price: 2000,
    name: "Cell Phone Accessories",
    cutprice: "1000.00",
    off: "33% OFF",
  }

];

let pagination = document.getElementById("pagination");
let proDataPerPage = 5;
let page = Math.ceil(pro_data.length / proDataPerPage);
let number = document.getElementById("number");

function displayDOM(data) {
  pagination.innerHTML = null;

  data.forEach(function (el) {
    let card = document.createElement("div");
    card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
    card.style.padding = "5px";

    let image = document.createElement("img");
    image.src = el.url;
    image.style.width = '90%';

    let cutprice = document.createElement("p");
    cutprice.innerText = "₹" + " " + el.cutprice + "/-";
    cutprice.style.textDecoration = "line-through";
    cutprice.style.color = "gray";
    cutprice.style.marginBottom = "15px";
    cutprice.style.marginTop="10px";
    cutprice.style.fontSize="20px";
    cutprice.style.textAlign="center";

    let price = document.createElement("p");
    price.innerText = "₹" + " " + el.price + "/-";
    price.style.color = "#F30240";
    price.style.fontSize = "25px";
    price.style.textAlign="center"

    card.append(image, cutprice, price);
    pagination.append(card);
  })
}
displayDOM(pro_data.slice(0, proDataPerPage));

for (let i = 1; i <= page; i++) {
  let button = document.createElement("button");
  console.log(button.length)
  button.innerText = i;
  button.style.marginLeft = '80px'
  button.style.backgroundColor = 'teal';
  button.style.color = "white";
  button.style.fontSize = '20px'


  button.addEventListener("click", function () {
    /* button.style.backgroundColor='white'  */
    let pagedArray = pro_data.slice((i - 1) * proDataPerPage, i * proDataPerPage);
    displayDOM(pagedArray);
  });

  number.append(button);
}


/*
let api_key = 'http://localhost:8080/posts';

//get data
const getData = async () => {
  try {

    let res = await fetch(api_key);
    let data = await res.json();
    appendnew(data)
    console.log("data", data);

  } catch (error) {
    console.log(error);
  }
}
getData();

function appendnew(data) {
  let recomforyou = document.getElementById("recomforyou");

  data.forEach(function (el) {
    let card = document.createElement("div");
    card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
    card.style.padding = "9px";

    let off = document.createElement("div");
    off.innerText = el.discount + "%  OFF";
    off.style.color = "white";
    off.style.textAlign = "center";
    off.style.border = "1px solid black"
    off.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
    off.style.position = "absolute";
    off.style.height = "50px";
    off.style.width = "50px";
    off.style.backgroundColor = "red";
    off.style.padding = "5px"
    off.style.marginTop = "-10px";
    off.style.marginLeft = "160px";
    off.style.borderRadius = "50%"

    /* off.style.marginTop="-200px";
    off.style.marginLeft="160px";  

    let image = document.createElement("img");
    image.src = el.img_url;
    image.style.width = '90%';

    let name = document.createElement("p");
    name.innerText = el.title;
    name.style.textAlign = "center";
    name.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    name.style.marginTop = "20px";
    name.style.height = "35px";
    name.style.overflow = "hidden";

    let disPrice = document.createElement("p");
    let discountedPrice = el.price - (((+el.discount) / 100) * (+el.price))
    console.log("dis_pr", discountedPrice);
    disPrice.innerText = "₹" + " " + Math.ceil(discountedPrice) + "/-";
    disPrice.style.color = "#F30240";
    disPrice.style.fontSize = "20px";
    disPrice.style.marginTop = "20px";


    let price = document.createElement("p");
    price.innerText = "₹" + " " + el.price + "/-";
    price.style.marginTop = "10px";

    let button = document.createElement("button");
    button.innerText = "ADD TO CART";
    button.style.backgroundColor = "#F30240";
    button.style.border = "0px";
    button.style.color = "white";
    button.style.padding = "5px";
    button.style.marginLeft = "30%";
    button.style.marginTop = "10px";

    button.onclick = () => {
      console.log("add");
      //let addTo=[];
      addTo.push(el);
      localStorage.setItem("addTo", JSON.stringify(addTo));  */
  

  let api_key='https://636d5e73b567eed48ac032d6.mockapi.io/user';

  //get data
  const getData=async()=>{
      try{
  
         let res=await fetch(api_key);
         let data=await res.json();
         appendnew(data)
         console.log("data",data);
  
      }catch(error){
           console.log(error);
      }
  }
  getData();

function appendnew(data){
  let recomforyou=document.getElementById("recomforyou");

  data.forEach(function(el){
    let card=document.createElement("div");
    card.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
    card.style.padding="9px";

    let off=document.createElement("div");
        off.innerText=el.discount+"%  OFF";
        off.style.color="white";
        off.style.textAlign="center";
        off.style.border="1px solid black"
        off.style.boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
        off.style.position="absolute";
        off.style.height="50px";
        off.style.width="50px";
        off.style.backgroundColor="red";
       off.style.padding="5px"
        off.style.marginTop="-10px";
        off.style.marginLeft="160px";
        off.style.borderRadius="50%"

        /* off.style.marginTop="-200px";
        off.style.marginLeft="160px";  */

    let image=document.createElement("img");
    image.src=el.img_url;
    image.style.width='90%';

    let name=document.createElement("p");
    name.innerText=el.title;
    name.style.textAlign="center";
    name.style.fontFamily="Verdana, Geneva, Tahoma, sans-serif";
    name.style.marginTop="20px";
    name.style.height="35px";
    name.style.overflow="hidden";

    let disPrice=document.createElement("p");
    let discountedPrice=el.price-(((+el.discount)/100)*(+el.price))
    console.log("dis_pr",discountedPrice);
    disPrice.innerText="₹"+" "+Math.ceil(discountedPrice)+"/-";
    disPrice.style.color="#F30240";
    disPrice.style.fontSize="20px";
    disPrice.style.marginTop="20px";


    let price=document.createElement("p");
    price.innerText="₹"+" "+el.price+"/-";
    price.style.marginTop="10px";

    let button=document.createElement("button");
    button.innerText="ADD TO CART";
    button.style.backgroundColor="#F30240";
    button.style.border="0px";
    button.style.color="white";
    button.style.padding="5px";           
    button.style.marginLeft="30%";
    button.style.marginTop="10px";

    button.onclick=()=>{
      add_to_cart(el)
    }


    card.append(off, image, name, disPrice, price, button);

    card.onmouseover = () => {
      // console.log("over");
      card.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
    }
    card.onmouseleave = () => {
      card.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
    }
    recomforyou.append(card);
  })

}


//Adding product to cart



const add_to_cart= async(el)=>{

  
  
  try{


    let res= await fetch("https://636d5e73b567eed48ac032d6.mockapi.io/cart",{
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
