(function(){
    const slides = document.querySelectorAll('.fade-slider__item');
    const activeSlide = 'fade-slider__item-visible';
    let index = 0; 

   let timerID = setTimeout(function nextSlide (){
        slides[index].classList.remove(activeSlide);
        index++;
        if(index>slides.length-1){
            index=0;
        };
        slides[index].classList.add(activeSlide);
        
        timerID=setTimeout(nextSlide,5000);
    },5000) 
}())