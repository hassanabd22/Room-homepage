// selct element

let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');
let Mobslider  = document.querySelector('.mobile');
let desSlider  = document.querySelector('.desktop');
let title   = document.querySelector('h1');
let text  = document.querySelector('.intro p');


// data sorces 

let data = [
    
    {
        title:"Discover innovative ways to decorate",
        text:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        src1:"./images/mobile-image-hero-1.jpg" ,
        src2:"./images/desktop-image-hero-1.jpg" ,
    },
    {
        title:"We are available all across the globe",
        text:"With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        src1:"./images/mobile-image-hero-2.jpg",
        src2:"./images/desktop-image-hero-2.jpg" 
    },
    {
        title:"Manufactured with the best materials",
        text:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        src1:"./images/mobile-image-hero-3.jpg",
        src2:"./images/desktop-image-hero-3.jpg" 
    },
];


function showDate(num) {
    Mobslider.src = data[num].src1;
    desSlider.src = data[num].src2;
    title.innerHTML = data[num].title;
    text.innerHTML = data[num].text;
}

let num = 0;

// event left button
leftBtn.addEventListener('click' , () => {
    num ++;
    if (num > data.length - 1) {
        num =0;
    } 
        
    showDate(num)   
    
    
})

// event right button
rightBtn.addEventListener('click' , () => {
    num --;
    if (num < 0) {
        num = data.length -1 ;
    } 
    showDate(num)  
})

// const navToggle = document.querySelector(".togle img");
// const links = document.querySelector("ul");

// navToggle.addEventListener("click", function (){
//     if (links.classList.contains("show-links")){
//         links.classList.remove("show-links");
//         navToggle.src = './images/icon-close.svg'
//     }
//     else {
//         links.classList.add("show-links");
//         navToggle.src = './images/icon-close.svg'
//     }
//     console.log('yes')
// })