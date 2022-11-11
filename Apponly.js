
    // paginating code
let buttons_div=document.getElementById("buttons");
const createbuttons = (Toatal_images,images_per_page) => {
const button=Math.ceil(Toatal_images/images_per_page);
for(let i=1;i<=button;i++){
    let btn=document.createElement("button");
    btn.id=i;
    btn.innerText=i;
    btn.onclick =() => {
   getpaginatedData(i,12);
    };
    buttons_div.append(btn);
}
};


// get paginated data function
    const getpaginatedData = async(clicked_button,limit) => {

    let response=await fetch(`https://636d5e73b567eed48ac032d6.mockapi.io/user?page=${clicked_button}&limit=${limit}`);
    let data= await response.json();
    console.log(data);
    append(data);
    
    }
    getpaginatedData(1,12);


// get data

    const getData = async() => {
        try{
        let response=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/user');
        let data=await response.json();
         //append(data);
         createbuttons(data.length,12);
        }catch(error){
        console.log(error);
        }
        };
        getData();
    
    

const append = (data) => {
    let box2=document.getElementById("box2");
    box2.innerHTML=null;
    data.forEach(function(el){
    let div=document.createElement("div");
    let img_url=document.createElement("img");
    img_url.src=el.img_url;
    let title=document.createElement("p");
   title.innerText=el.title;
    let price=document.createElement("h5");
    price.innerText=`Price Rs. : ${el.price}`;
   let discount=document.createElement("h5");
   discount.setAttribute("class","dis_div");
   discount.innerText=`${el.discount}% OFF`;
   let actual_price=document.createElement("h4");
   actual_price.innerText=`Offer Price: ${(el.price- (el.price*el.discount)/100)}`;

    let btn=document.createElement("button");
    btn.innerText="Add to Cart";
    btn.addEventListener("click",function(){
        myFun(el);
    });
     div.append(img_url,title,price,discount,actual_price,btn);
    box2.append(div);
    });
}
//code for Add to cart button
        let dataArray=JSON.parse(localStorage.getItem("cart_items"))||[];

         function myFun(el){
         
        dataArray.push(el);
      
        let x=localStorage.setItem("cart_items",JSON.stringify(dataArray));
        console.log(x);
     
    
    }

//filter code with buttons
//btn1
let filterBtn=document.getElementById("consumer");
 filterBtn.onclick = ()=>{
let content=filterBtn.innerText;
   filterData(content);
}
 // btn2

let filterBtn2=document.getElementById("btn2");
 filterBtn2.onclick = ()=>{
let content=filterBtn2.innerText;
   filterData(content);
}

 //btn3

let filterBtn3=document.getElementById("btn3");
 filterBtn3.onclick = ()=>{
let content=filterBtn3.innerText;
   filterData(content);
}

// btn4
let filterBtn4=document.getElementById("btn4");
 filterBtn4.onclick = ()=>{
let content=filterBtn4.innerText;
   filterData(content);
}
// btn5
let filterBtn5=document.getElementById("btn5");
 filterBtn5.onclick = ()=>{
let content=filterBtn5.innerText;
   filterData(content);
}

// btn6
let filterBtn6=document.getElementById("btn6");
 filterBtn6.onclick = ()=>{
let content=filterBtn6.innerText;
   filterData(content);
}
// btn7

let filterBtn7=document.getElementById("btn7");
 filterBtn7.onclick = ()=>{
let content=filterBtn7.innerText;
   filterData(content);
}
// btn8
let filterBtn8=document.getElementById("btn8");
 filterBtn8.onclick = ()=>{
let content=filterBtn8.innerText;
   filterData(content);
}

// filter code
const filterData=async(content)=>{
    let arr=[];
    try{
       let response=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/user');
       let data=await response.json()
       data.forEach((el)=>{
        if(el.category===content){
            arr.push(el);
        }
       })
      // console.log(arr)
       append(arr);
    }catch(error){
         console.log(error);
    }
};


// btn all (ALL)
let btnAll=document.getElementById("all");
 btnAll.onclick = ()=>{
All();
}
const All = async() => {
    try{
        let response=await fetch('https://636d5e73b567eed48ac032d6.mockapi.io/user');
        let data=await response.json();
        append(data);
        }catch(error){
        console.log(error);
        }
};





// price high to low


let htol=document.getElementById("htol");
htol.onclick= () =>{
    Sorting();
};
const  Sorting =async() => {
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



// price low to high 

let ltoh=document.getElementById("ltoh");
ltoh.onclick= () =>{
    Sorting1();
};
const  Sorting1 =async() => {
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



