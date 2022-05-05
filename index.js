const r = rolly({
  view: document.querySelector('.app'),
  native: true,
  autoUpdate:true,
  noScrollBar: true,
});
r.init();

AOS.init({duration: 1500});
//swiper js testmonial section
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

//open & close nav menu
const menu = document.querySelector("nav .container ul");
const burger = document.querySelector(".burger");
const navItems = document.querySelectorAll("nav ul li");
const navLink = document.querySelectorAll("nav ul li a");

burger.addEventListener("click",()=>{
  menu.classList.toggle("navActive");

  //apply navLinkFade animation to each link and apply different delay times depends on the link's index
  navItems.forEach((link, index) =>{
    if(link.style.animation){
      link.style.animation="";
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.5}s`;
    }
  });
  //animate burger 
  burger.classList.toggle("toggle");

});
  //close menu when click the links
  navLink.forEach(link => link.addEventListener("click",()=>{
    menu.classList.toggle("navActive");
    burger.classList.toggle("toggle");
    //resume navItem animation to none
    navItems.forEach((link, index) =>{
        link.style.animation="";
  })
})
)


//remove active class from other items
const removeActiveClass = () =>{
  navItems.forEach(item=>{
    const a = item.querySelector("a");
    a.classList.remove("active");
  })
};
//add active class to clicked nav item
navItems.forEach(item =>{
  const a = item.querySelector("a");
  a.addEventListener("click", ()=>{
    removeActiveClass(); //remove the active class from other nav item first
    a.classList.add("active");
  })
});

//show and hide faqs
const faqs = document.querySelectorAll("#faqs article");

faqs.forEach(faq =>{
  faq.addEventListener("click", ()=>{
    faq.classList.toggle("expand");

      //toggle icon "+" "-"
    faq.classList.toggle("openFaq");
  })

});