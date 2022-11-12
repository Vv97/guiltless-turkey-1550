let cart1= JSON.parse(localStorage.getItem("checkout"))||[];

 console.log(cart1);




     const totalcount=()=> {
        let count=document.querySelector("#count > span");
        count.innerText=cart1.length;
     }
     totalcount(cart1);
     const appenddata = () => {
        let cost=0;
        let box3_div=document.getElementById("box3");
        box3_div.innerHTML=null;
        cart1.forEach(function(el,i){
            let div=document.createElement("div");
            let img_url=document.createElement("img");
            img_url.src=el.img_url;
            let title=document.createElement("h4");
            title.innerText=el.title;
           

            let price=document.createElement("h3");
            price.innerText=`Price ₹ :${el.price}`;
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

appenddata(cart1)
