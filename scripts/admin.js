
 let girdData=[  {
    id:1,
    title:" 2021 New M6 Smart Watch Men Women Fitness Sports Smart Band Fitpro Version Bluetooth Music Heart Rate Take Pictures Smartwatch",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16419/goods_img_big-v3/ccc7b9b9338e.jpg",
    price: 1000,
    category: "Consumer Electronic",
    sub_category: "smart watch",
    discount: 10,
},
{

    id:2,
    title:" New PW17 1.9 Inch Smart Men  Ladies Bluetooth Calling Exercise Heart Rate Sleep Monitor Fitness Tracker Watch - Black",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16620/goods_thumb_220-v1/031e8f20ddef.jpg",
    price: 49999,
    category: "Consumer Electronic",
    sub_category: "smart watch",
    discount: 20,
},
{

    id:3,
    title:"2022 New Original Xiaomi Necklace Bluetooth Earphone Wireless Earbud Noise Cancelling MI Neckband Headphone Hi-Fi IPX5",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16669/goods_thumb_220-v1/de6d3d71ef09.jpg",
    price: 8000,
    category: "Consumer Electronic",
    sub_category: "wireless headphones",
    discount: 14,
},
{

    id:4,
    title:"FIIL Key Newest Bluetooth 5.3 TWS Wireless Earbuds Support Fiil+ Android App 15EQ Low Latency Gaming Headset",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16595/goods_thumb_220-v1/68f89d30727b.jpg",
    price: 19999,
    category: "Consumer Electronic",
    sub_category: "wireless headphones",
    discount: 11,
},
{

    id:5,
    title:"Smartphone S22 Ultra 5G Cellular 6.8 Inch 6800mAh Android 11 Global Version 16GB 512GB Smart Cell Mobile Hand Phone Telefon",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16487/goods_thumb_220-v1/26ff9a54dea9.jpg",
    price: 49999,
    category: "Cell Phone Accessories",
    sub_category: "cell phone",
    discount: 50,
},
{

    id:6,
    title:"Global Version 2022 New i13 Pro Max 6.7 Inch Smartphones 16GB+512GB 6800mAh 4G/5G Network Unlock Cell Phone Dual SIM Android",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16589/goods_thumb_220-v5/fc175520613e.jpg",
    price: 110000,
    category: "Cell Phone Accessories",
    sub_category: "cell phone",
    discount: 9,
},
{

    id:7,
    title:"TOPK I1006P Power Bank 10000mAh Portable Charger LED External Battery PowerBank PD Two-way Fast Charging PoverBank for Xiaomi mi",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16424/goods_thumb_220-v4/e6491a442006.jpg",
    price: 10000,
    category: "Cell Phone Accessories",
    sub_category:"Power Bank",
    discount: 70,
},
{

    id:8,
    title:"360 All Inclusive Case for Samsung S22 S22 Plus S22 Ultra S21 Plus S21FE Front+Back Cover For Samsung Galaxy S21 S21+ S21U",
    img_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878024229519028224/16490/goods_thumb_220-v2/588fd1bac1de.jpg",
    price: 2000,
    category: "Cell Phone Accessories",
    sub_category:"Case & Cover",
    discount: 33,
} ];

function appendgriddata(data){
   let appendto=document.getElementById("appendto");
    data.forEach(function(el){
       
        let card=document.createElement("div");
        card.style.border="0px solid red";
        card.style.padding="7px";
        card.style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";

        card.onmouseover=()=>{
            card.style.boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
        };
        card.onmouseleave=()=>{
            card.style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";

        }

        let option = document.createElement("div");
        option.style.display="flex";
        option.style.border="0px solid blue"
        option.style.marginTop="-15px"
      
        option.style.gap="0PX"

        let image=document.createElement("img");
        image.src= el.img_url;
        image.style.width="90%";
        image.style.marginLeft="13px"

        let name=document.createElement("p");
        name.innerText=el.category;
        name.style.fontWeight="500";
        name.style.textAlign="center";
        name.style.fontFamily= "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

        let price=document.createElement("h3");
        price.innerText="₹"+" "+el.price+"/-";
        price.style.textAlign="center";
        price.style.color="red";
        price.style.marginTop="-10px"
        price.style.fontFamily= "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

        let edit=document.createElement("button");
        edit.innerText="Edit";
        edit.style.color="white";
        edit.style.backgroundColor="green";
        edit.style.margin="auto";
        edit.style.border="1px solid green";
       edit.style.width="50px"
        edit.style.padding="5px";
        

        let dlt=document.createElement("button");
        dlt.innerText="Delete";
        dlt.style.color="white";
        dlt.style.backgroundColor="red";
        dlt.style.border="1px solid red"
        dlt.style.margin="auto";
        dlt.style.padding="5px"

        option.append(edit,dlt)
        card.append(image,name,price,option);
        appendto.append(card)
    })
}
appendgriddata(girdData)


let proclick=document.getElementById("proclick");

proclick.onmouseover=()=>{
    console.log("pro");

    let click=document.getElementById("click");
    click.style.display="block";
    click.onmouseover=()=>{
        let click=document.getElementById("click");
    click.style.display="block";
    }

}
proclick.onmouseleave=()=>{
    console.log("dgh");

    let click=document.getElementById("click");
    click.style.display="none";
    click.onmouseleave=()=>{
        let click=document.getElementById("click");
    click.style.display="none";
    }

}

