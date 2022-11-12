
import { navbar } from "../component/nav.js";

let showmav = document.querySelector(".headIndex")

showmav.innerHTML = navbar()



let wrapper = document.querySelector(".wrapper");
let select_btn = document.querySelector(".select_btn");
let option = document.querySelector(".option");
let changename = document.querySelector(".sCountry")
let option1 = document.querySelector(".option1");
let wrapper1 = document.querySelector(".wrapper1");
let select_btn1 = document.querySelector(".select_btn1");
let changename_1 = document.querySelector(".changename_1")



const country_list = ["india", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua ; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin"];

let country = [
    {
        country: "Afghanistan",
        currency_code: "AFN"
    },
    {
        country: "Albania",
        currency_code: "ALL"
    },
    {
        country: "Algeria",
        currency_code: "DZD"
    },
    {
        country: "American Samoa",
        currency_code: "USD"
    },
    {
        country: "Andorra",
        currency_code: "EUR"
    },
    {
        country: "Angola",
        currency_code: "AOA"
    },
    {
        country: "Anguilla",
        currency_code: "XCD"
    },
    {
        country: "Antarctica",
        currency_code: "XCD"
    },
    {
        country: "Antigua and Barbuda",
        currency_code: "XCD"
    },
    {
        country: "Argentina",
        currency_code: "ARS"
    },
    {
        country: "Armenia",
        currency_code: "AMD"
    },
    {
        country: "Aruba",
        currency_code: "AWG"
    },
    {
        country: "Australia",
        currency_code: "AUD"
    },
    {
        country: "Austria",
        currency_code: "EUR"
    },
    {
        country: "Azerbaijan",
        currency_code: "AZN"
    },
    {
        country: "Bahamas",
        currency_code: "BSD"
    },
    {
        country: "Bahrain",
        currency_code: "BHD"
    },
    {
        country: "Bangladesh",
        currency_code: "BDT"
    },
    {
        country: "Barbados",
        currency_code: "BBD"
    },
    {
        country: "Belarus",
        currency_code: "BYR"
    },
    {
        country: "Belgium",
        currency_code: "EUR"
    },
    {
        country: "Belize",
        currency_code: "BZD"
    },
    {
        country: "Benin",
        currency_code: "XOF"
    },
    {
        country: "Bermuda",
        currency_code: "BMD"
    },
    {
        country: "Bhutan",
        currency_code: "BTN"
    },
    {
        country: "Bolivia",
        currency_code: "BOB"
    },
    {
        country: "Bosnia and Herzegovina",
        currency_code: "BAM"
    },
    {
        country: "Botswana",
        currency_code: "BWP"
    },
    {
        country: "Bouvet Island",
        currency_code: "NOK"
    },
    {
        country: "Brazil",
        currency_code: "BRL"
    },
    {
        country: "British Indian Ocean Territory",
        currency_code: "USD"
    },
    {
        country: "Brunei",
        currency_code: "BND"
    },
    {
        country: "Bulgaria",
        currency_code: "BGN"
    },
    {
        country: "Burkina Faso",
        currency_code: "XOF"
    },
    {
        country: "Burundi",
        currency_code: "BIF"
    },
    {
        country: "Cambodia",
        currency_code: "KHR"
    },
    {
        country: "Cameroon",
        currency_code: "XAF"
    },
    {
        country: "Canada",
        currency_code: "CAD"
    },
    {
        country: "Cape Verde",
        currency_code: "CVE"
    },
    {
        country: "Cayman Islands",
        currency_code: "KYD"
    },
    {
        country: "Central African Republic",
        currency_code: "XAF"
    },
    {
        country: "Chad",
        currency_code: "XAF"
    },
    {
        country: "Chile",
        currency_code: "CLP"
    },
    {
        country: "China",
        currency_code: "CNY"
    },
    {
        country: "Christmas Island",
        currency_code: "AUD"
    },
    {
        country: "Cocos (Keeling) Islands",
        currency_code: "AUD"
    },
    {
        country: "Colombia",
        currency_code: "COP"
    },
    {
        country: "Comoros",
        currency_code: "KMF"
    },
    {
        country: "Congo",
        currency_code: "XAF"
    },
    {
        country: "Cook Islands",
        currency_code: "NZD"
    },
    {
        country: "Costa Rica",
        currency_code: "CRC"
    },
    {
        country: "Croatia",
        currency_code: "HRK"
    },
    {
        country: "Cuba",
        currency_code: "CUP"
    },
    {
        country: "Cyprus",
        currency_code: "EUR"
    },
    {
        country: "Czech Republic",
        currency_code: "CZK"
    },
    {
        country: "Denmark",
        currency_code: "DKK"
    },
    {
        country: "Djibouti",
        currency_code: "DJF"
    },
    {
        country: "Dominica",
        currency_code: "XCD"
    },
    {
        country: "Dominican Republic",
        currency_code: "DOP"
    },
    {
        country: "East Timor",
        currency_code: "USD"
    },
    {
        country: "Ecuador",
        currency_code: "ECS"
    },
    {
        country: "Egypt",
        currency_code: "EGP"
    },
    {
        country: "El Salvador",
        currency_code: "SVC"
    },
    {
        country: "England",
        currency_code: "GBP"
    },
    {
        country: "Equatorial Guinea",
        currency_code: "XAF"
    },
    {
        country: "Eritrea",
        currency_code: "ERN"
    },
    {
        country: "Estonia",
        currency_code: "EUR"
    },
    {
        country: "Ethiopia",
        currency_code: "ETB"
    },
    {
        country: "Falkland Islands",
        currency_code: "FKP"
    },
    {
        country: "Faroe Islands",
        currency_code: "DKK"
    }
]



function Addcountry() {
    country.forEach(({ country }) => {
        let li = document.createElement("li");
        li.textContent = country;
        //inserting name into span select country
        li.onclick = () => {
            addname(country)
        }
        option.append(li)
    })
}

Addcountry()


function Addname1(countryname, currency_code) {
    let val = countryname + currency_code;
    console.log(val)
    wrapper1.classList.remove("active")
    changename_1.textContent = val;
}




const an = () => {
    country.forEach(({ country, currency_code }) => {
        let li = document.createElement("li");
        li.className = "js_list";

        li.onclick = () => {
            Addname1(country, currency_code)
        }

        let con = document.createElement("span")
        con.textContent = country;


        let curr_code = document.createElement("span")
        curr_code.textContent = currency_code;


        li.append(con, curr_code);
        option1.append(li)

    })
}



an()


const addname = (countryname) => {
    wrapper.classList.remove("active")
    changename.textContent = countryname;
}

select_btn.onclick = () => {
    wrapper.classList.toggle("active")
}


select_btn1.onclick = () => {
    wrapper1.classList.toggle("active")
}


const showcartdata = (res) => {
    let totalprice = 0;

    let showdata = document.querySelector(".showchild");

    res.forEach(({ title, price, img_url }) => {
        let div = document.createElement("div");
        div.className = "cartchild";

        let ptitle = document.createElement("p");
        ptitle.className = "cartTitle"
        ptitle.textContent = title;

        let img = document.createElement("img");
        img.src = img_url;

        let pprice = document.createElement("p");
        totalprice += + price;
        pprice.className = "cartprice"
        pprice.innerText = `price : $${price}`;

        if (res.length > 1) {
            div.style.borderBottom = "1px solid #ccc"
        }


        showdata.append(div);
        div.append(img, ptitle, pprice)
    })


    let showprice = document.querySelector(".cartshowprice");
    showprice.textContent = `Total : ${totalprice} `;


}



const cartcount = async () => {
    try {

        let fetchdata = await fetch("https://636d5e73b567eed48ac032d6.mockapi.io/cart");
        let getdata = await fetchdata.json();
        const showcount = document.querySelector(".badges");
        console.log(getdata.length)
        showcount.textContent = getdata.length

        let showcountdata = document.querySelector(".numberoi");
        showcountdata.textContent = `${getdata.length} Item(s)`

        showcartdata(getdata)
    } catch (err) {
        console.log(err)
    }


}

cartcount()






