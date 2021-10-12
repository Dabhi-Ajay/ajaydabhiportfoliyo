let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click',() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})


window.onscroll = () =>{
    if(window.scrollY > 10 ){
      header.classList.add('active');
    }
    else{
      header.classList.remove('active')
    }
}

var typed = new Typed('.typeing', {
    strings: ['web designer ', 'graphic desiner','UI/UX designer','photographer'],
    smartBackspace: true,
    loop:true,
    typeSpeed: 200,
    backSpeed: 50,
    cursorChar: '|',
   
  });


window.scrollY


 