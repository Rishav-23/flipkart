const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.wrapper i');

let isDrageStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth+ 14; // getting first img width & adding 14 margin value //
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcon = () =>{
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth? 'none' : 'block';
}

arrowIcons.forEach(icon =>{
icon.addEventListener("click",()=>{
carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth:firstImgWidth;
setTimeout(() => showHideIcon(), 60); // calling showHideIcon after 60ms //
});
});

const dragStart = (e) =>{
// Updating global variables value on mouse down event
     isDrageStart = true;
  prevPageX = e.pageX;
   
  prevScrollLeft = carousel.scrollLeft;

}

const dragging = (e) =>{
    // scrolling images/carousel to left according to mouse pointer //
if(!isDrageStart) return;
e.preventDefault();
carousel.classList.add('dragging');
let positionDiff = e.pageX - prevPageX;
carousel.scrollLeft = prevScrollLeft - positionDiff;


}

const dragStop = () =>{
isDrageStart = false;
carousel.classList.remove('dragging');
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop);
