// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 10){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}



// File link kese link kar ne ka  EX:-

// const activePagej = window.location.pathname;
// const navLinks = document.querySelectorAll('.nav-link').forEach(link => {
//   if(link.href.includes(`${activePagej}`)){
//     link.classList.add('active');
//   }
// })





// File link  kese link kese kare Ex:-

// let links = document.querySelectorAll(".nav-link");
// let sec = document.querySelector("section").id;

// for(let link of links){

//     if(link.dataset.active == bodyId){
//         link.classList.add("active");
//     }

// }




// const li=document.querySelectorAll(".nav-link");
// const sec=document.querySelectorAll("section");

// function activeMenu(){
//     let len=sec.length;
//     while(--len && window.scroll + 97 < sec[len].offsetTop){}
//     li.forEach(ltx => ltx.classList.remove("active"));
//     li[len].classList.add("active");
// }
// activeMenu();
// window.addEventListener("scroll", activeMenu);






//jenish New
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    section.forEach(sec =>{
        
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('  header nav a[href*= ' + id + ' ]  ').classList.add('active');
            });
        };
    });
};





//jenish

// const li = document.querySelectorAll(".nav-link");
// const sec = document.querySelectorAll("section");

//     function activeMenu() {
//         let len = se.length;
//         while (--len && window.scrollY + 50 < sec[len].offsetTop){}
//         li.forEach(ltx => ltx.classList.remove("active"));
//         li[len].classList.add("active");
//     }
//     activeMenu();
//     window.addEventListener("scroll", activeMenu);





// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})



// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, 9)
    }
    counter("count1", 0, 398, 3000);
    counter("count2", 0, 477, 3000);
    counter("count3", 0, 565, 3000);
    counter("count4", 0, 793, 3000);
})