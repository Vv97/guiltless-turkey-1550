let data = [
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$35.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$36.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$50.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$70.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$80.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$100.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$35.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$36.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$50.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$70.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$80.29",


    },
    {
        img_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
        name: "Global Xiomi Mi Tv box",
        price: "$100.29",


    }
];


let dataArray = JSON.parse(localStorage.getItem("cart_items") || []);


let box2 = document.getElementById("box2");
box2.innerHTML = null;
data.forEach(function (el) {
    let div = document.createElement("div");
    let img_url = document.createElement("img");
    img_url.src = el.img_url;
    let name = document.createElement("p");
    name.innerText = el.name;
    let price = document.createElement("h5");
    price.innerText = el.price;
    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
        myFun(el);
    });
    div.append(img_url, name, price, btn);
    box2.append(div);
});
function myFun(el) {
    dataArray.push(el);
    let x = localStorage.setItem("cart_items", JSON.stringify(dataArray));
    console.log(x);

}





let consumer_div = document.getElementById("consumer");
consumer_div.onclick = () => {
    consumer();
};
const consumer = () => {
    location.href = "././consumer.html";
}

