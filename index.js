const togle = document.querySelector(".togle")
const right = document.querySelector(".right")
const nextbtn = document.querySelector(".hide_right")
const prevbtn = document.querySelector(".hide_left")
const slides = document.querySelector(".column")

const numderofslides = slides.length; 
 const slidenumder = 0;

togle.addEventListener("click",()=>{
    if( togle.firstElementChild.classList.contains("zmdi-close") ){

        togle.firstElementChild.classList.replace("zmdi-close","zmdi-menu")
    
        
    }else{
        togle.firstElementChild.classList.replace("zmdi-menu","zmdi-close")
    }
    right.classList.toggle("show_nav")

})


nextbtn.addEventListener("click",( )=>{
    console.log("ok");
slidenumder++;
if(slidenumder> (numderofslides -1)){
    slidenumder=0;
}


slides[slidenumder].classList.add("active")
})






