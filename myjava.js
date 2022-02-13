var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}

let sect = document.querySelector('.takeMe');
sect.addEventListener('mouseover', function(){
  sect.innerHTML= 'LETS LOOK INSIDE OUR LIST OF PRODUCTS';

});

sect.addEventListener('mouseout', function(){
  sect.innerHTML= 'TAKE ME TO PRODUCT LIST';
});

let sec = document.querySelector('.myText');
sec.addEventListener('click', function(){
  alert('Taking you to product section');

});
let topIcon = document.querySelector('.toTop');
let pageTopLoc;
window.addEventListener('scroll', function(){
  //document.body.scrollTop using window height and css display:none for toTop
  pageTopLoc = window.pageYOffset;
  if (pageTopLoc>10){
    topIcon.style.display = 'block';
  }else{
  topIcon.style.display ='none';
}
});
