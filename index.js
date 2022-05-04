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
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menu = document.querySelector("nav .container ul");

//open sidebar
menuBtn.addEventListener("click", ()=>{
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
})
//close sidebar
closeBtn.addEventListener("click", ()=>{
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
})

//change active class when clicked on nav item
const navItems = document.querySelectorAll("nav ul li");

//remove active class from other items
const removeActiveClass = () =>{
  navItems.forEach(item=>{
    const a = item.querySelector("a");
    a.classList.remove("active");
  })
}
//add active class to clicked nav item
navItems.forEach(item =>{
  const a = item.querySelector("a");
  a.addEventListener("click", ()=>{
    removeActiveClass(); //remove the active class from other nav item first
    a.classList.add("active");
  })
})

//show and hide faqs
const faqs = document.querySelectorAll(".faqs article");

faqs.forEach(faq =>{
  faq.addEventListener("click", ()=>{
    faq.classList.toggle("expand");
      //toggle icon "+" "-"
    faq.classList.toggle("openFaq");
  })

})