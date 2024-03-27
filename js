let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navbar.classList.remove('active');
    loginform.classList.remove('active');

}



searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginform.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginform.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
   
});
