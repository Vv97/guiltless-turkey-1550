
let api_key='http://localhost:8080/posts';
// let api_key='https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan';


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
                price_tag.innerText=el.price;
            
            let mrp=document.createElement("h5");
                mrp.innerText=el.price;
            let flash_sale=document.createElement("p");
            flash_sale.innerText="Flash Sale";


             

            div.append(image,name,price_tag,mrp,flash_sale);
            container.append(div);

    })

}