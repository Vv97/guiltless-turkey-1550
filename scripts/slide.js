const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");
const slider = document.querySelectorAll(".slide");
const slideicons = document.querySelectorAll(".slide-icon");
const numberofslides = slider.length;
const sliders = document.querySelector(".slider")




var slidenumber = 0;


nextbtn.onclick = () => {
    slidenumber++
    slider.forEach((slide) => {
        slide.classList.remove("active")
    })

    slideicons.forEach((slide) => {
        slide.classList.remove("active")
    })

    if (slidenumber > (numberofslides - 1)) {
        slidenumber = 0;
    }



    slider[slidenumber].classList.add("active")
    slideicons[slidenumber].classList.add("active")
}


prevbtn.onclick = () => {

    slider.forEach((slide) => {
        slide.classList.remove("active")
    })

    slideicons.forEach((slide) => {
        slide.classList.remove("active")
    })

    slidenumber--


    if (slidenumber < 0) {
        slidenumber = numberofslides - 1;
    }

    slider[slidenumber].classList.add("active")
    slideicons[slidenumber].classList.add("active")
}


let playslider;

const repeter = () => {
    playslider = setInterval(() => {

        slider.forEach((slide) => {
            slide.classList.remove("active")
        })

        slideicons.forEach((slide) => {
            slide.classList.remove("active")
        })

        slidenumber++

        if (slidenumber > (numberofslides - 1)) {
            slidenumber = 0;
        }

        slider[slidenumber].classList.add("active")
        slideicons[slidenumber].classList.add("active")
    }, 2000)
}

repeter()


sliders.addEventListener("mouseover", () => {
    clearInterval(playslider)
})


sliders.addEventListener("mouseout", () => {
    repeter()
})







