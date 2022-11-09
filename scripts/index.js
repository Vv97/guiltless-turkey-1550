let collpic=document.getElementById("collpic");




let collec = [{url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16654/goods_thumb_220-v3/b14e634a2e36.jpg",
name: "Nimble Tech Store",
price:24.99},
{url:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16548/goods_thumb_220-v1/1efb2c7133bd.jpg",
name: "Ortur Officail Store",
price:319.99},
{url:"https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_thumb_220-v1/b16d56b31f5b.jpg",
name: "Asseo Go Store",
price:169.99},
{url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/4e5c7e4add41.jpg",
name: "Clearance Sale",
price:34.94},
{url: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16513/goods_thumb_220-v1/e198e1605f41.jpg",
name:"Eight Hours Store",
price:8.90}
]

const collpicAppend = (data) =>{
    let collpic=document.getElementById("collpic");
    console.log(data)

    data.forEach(function(el){
        let card= document.createElement("div");
        card.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
      
    
        let price_card=document.createElement("div");
        price_card.innerText="$"+" "+el.price;
        price_card.style.height="40px";
        price_card.style.width="100%";
        price_card.style.alignItems="baseline"
        price_card.style.background="red";
        price_card.style.color="white";
        price_card.style.fontSize="20px";
        price_card.style.textAlign="center";
        price_card.style.display="none";

      /*  price_card.onclick=()=>{
            console.log("23")
            price_card.style.display="block"
            
        }  */

      

        let img=document.createElement("img");
        img.src=el.url;
        img.style.width="90%";

        let name=document.createElement("p");
        name.innerText=el.name;
        name.style.textAlign="center";
        name.style.fontFamily="Verdana, Geneva, Tahoma, sans-serif"

        card.append(img,name,price_card);
       

           card.onmouseover=()=>{
            price_card.style.display="block";
           }
         card.onmouseleave=()=>{
            price_card.style.display="none";
           }  
        collpic.append(card);

    })
    
    }
collpicAppend(collec);

let supercol=[
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16515/goods_thumb_220-v4/50504435afc7.jpg" ,
    name:"xiaomi xiaoVV smart outdoor camera",
    cutprice:"$119",
    price:56.99,
    off:"20% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16498/goods_thumb_220-v3/959e91168592.jpg" ,
    name:"Xiaomi Mijia Sonic Electric Toothbrush T500 Mi Home",
    cutprice:"$40",
    price:28.99,
    off:"26% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16485/goods_thumb_220-v1/9f0b0f0fb93e.jpg" ,
    name:"X12 Plus 7inch 16GB Game Console Games Emulators",
    cutprice:"$65",
    price:51.99,
    off:"50% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16481/goods_thumb_220-v1/7291d320c1e2.jpg" ,
    name:"DOOGEE V20 Global Version Dual 5G IP68",
    cutprice:"$599",
    price:385.99,
    off:"10% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16584/goods_thumb_220-v3/7d7a74f9044c.jpg" ,
    name:"Global Version M11 Ultra Smartphones Android 7.3",
    cutprice:"$240",
    price:117.99,
    off:"32% OFF",
    },

]

let superpicAppend = (data)=>{
    let superpic=document.getElementById("superpic");

    data.forEach(function(el){
        let card= document.createElement("div");
        card.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
        card.style.padding="5px";

        let off=document.createElement("div");
        off.innerText=el.off;
        off.style.color="white";
        off.style.textAlign="center";
       
        off.style.position="absolute";
        off.style.height="50px";
        off.style.width="50px";
        off.style.backgroundColor="red";
        off.style.position="absolute";
        off.style.marginTop="-180px";
        off.style.marginLeft="-50px";
        off.style.borderRadius="50%"

        let img=document.createElement("img");
        img.src=el.url;
        img.style.width="100%";
        img.style.height="52%";

        let name=document.createElement("p");
        name.innerText=el.name;
        name.style.textAlign="center";
        name.style.fontFamily="Verdana, Geneva, Tahoma, sans-serif";

        let cutprice=document.createElement("p");
        cutprice.innerText="RRP"+" "+el.cutprice;
        cutprice.style.textDecoration="line-through";
        cutprice.style.color="gray";
        cutprice.style.marginBottom="-20px"

        let price=document.createElement("p");
        price.innerText="$"+" "+el.price;
        price.style.color="#F30240";
        price.style.fontSize="25px"

        card.append(img,off,name,cutprice,price);
        superpic.append(card);

    })
    
}
superpicAppend(supercol);

// for pagination data

let pro_data= [
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16660/goods_thumb_220-v1/59b11139a0dd.jpg",
     cutprice:"$29.99",
     price:17.68,
    off:"41%OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16653/goods_thumb_220-v4/dda839eb0bb0.jpg",
     cutprice:"$29.99",
     price:9.37,
    off:"31%OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16659/goods_thumb_220-v1/d042dd9ed7e0.jpg",
     cutprice:"$699.34",
     price:500.37,
    off:"21%OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16654/goods_thumb_220-v1/e7c2f2a04654.jpg",
     cutprice:"$12.34",
     price:9.37,
    off:"7%OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16660/goods_thumb_220-v1/4aaf79b9a0f7.jpg",
     cutprice:"$29.34",
     price:17.37,
    off:"34%OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16654/goods_thumb_220-v1/702818208981.jpg",
    cutprice:"$70.34",
    price:63.37,
   off:"21%OFF",
   },
   {url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16652/goods_thumb_220-v1/f6bacc190fa6.jpg",
   cutprice:"$499.34",
   price:349.37,
  off:"30%OFF",
  },
  {url:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16515/goods_thumb_220-v4/50504435afc7.jpg" ,
    name:"xiaomi xiaoVV smart outdoor camera",
    cutprice:"$119",
    price:56.99,
    off:"20% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16498/goods_thumb_220-v3/959e91168592.jpg" ,
    name:"Xiaomi Mijia Sonic Electric Toothbrush T500 Mi Home",
    cutprice:"$40",
    price:28.99,
    off:"26% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16485/goods_thumb_220-v1/9f0b0f0fb93e.jpg" ,
    name:"X12 Plus 7inch 16GB Game Console Games Emulators",
    cutprice:"$65",
    price:51.99,
    off:"50% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16481/goods_thumb_220-v1/7291d320c1e2.jpg" ,
    name:"DOOGEE V20 Global Version Dual 5G IP68",
    cutprice:"$599",
    price:385.99,
    off:"10% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16584/goods_thumb_220-v3/7d7a74f9044c.jpg" ,
    name:"Global Version M11 Ultra Smartphones Android 7.3",
    cutprice:"$240",
    price:117.99,
    off:"32% OFF",
    },
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16654/goods_thumb_220-v3/b14e634a2e36.jpg",
    name: "Nimble Tech Store",
    cutprice:"$40.68",
    price:24.99,
    off:"26% OFF",},
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16548/goods_thumb_220-v1/1efb2c7133bd.jpg",
    name: "Ortur Officail Store",
    cutprice:"$48.89",
    price:319.99,
    off:"16% OFF",},
    {url:"https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_thumb_220-v1/b16d56b31f5b.jpg",
    name: "Asseo Go Store",
    cutprice:"$542.5",
    price:169.99,
    off:"10% OFF"},
    {url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/4e5c7e4add41.jpg",
    name: "Clearance Sale",
    cutprice:"$67.23",
    price:34.94,
    off:"12% OFF"},
    {url: "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16513/goods_thumb_220-v1/e198e1605f41.jpg",
    name:"Eight Hours Store",
    price:8.90,
    off:"32% OFF",}

    
]

let pagination=document.getElementById("pagination");
let proDataPerPage=5;
let page=Math.ceil(pro_data.length/proDataPerPage);
let number=document.getElementById("number");

function displayDOM(data){
    pagination.innerHTML=null;

      data.forEach(function(el){
        let card=document.createElement("div");
        card.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
        card.style.padding="5px";
      let image=document.createElement("img");
      image.src=el.url;
      image.style.width='90%';

      let cutprice=document.createElement("p");
      cutprice.innerText=el.cutprice;

      let price=document.createElement("td");
      price.innerText=el.price;

      card.append(image,cutprice,price);
      pagination.append(card);
  }) 
  }
  displayDOM(pro_data.slice(0,proDataPerPage));

for(let i=1; i<=page; i++){
    let button=document.createElement("button");
    console.log(button.length)
    button.innerText=i;
    button.style.marginLeft='20px'
    button.style.backgroundColor='teal';
    button.style.fontSize='20px'
  

    button.addEventListener("click",function(){
      button.style.backgroundColor='white'
      let pagedArray=pro_data.slice((i-1)*proDataPerPage, i*proDataPerPage);
      displayDOM(pagedArray);
    });  
  
    number.append(button);
  }

  

console.log(pro_data.length)