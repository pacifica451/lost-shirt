(function(){
  const elem = document.querySelector('.products__list');
  let iso = new Isotope( elem, {
itemSelector: '.products__item',
filter: '.popular'
});
 

const controls = document.querySelectorAll('.filter__link');
const activeClass = 'filter__item-active';

controls.forEach(function(control){
control.addEventListener('click', function(e){
    e.preventDefault();

    const filterName = control.getAttribute("data-filter")

    controls.forEach(link=>link.closest('.filter__item').classList.remove(activeClass));
    control.closest('.filter__item').classList.add(activeClass);

    console.log(`.${filterName}`)
    iso.arrange({
      filter: `.${filterName}`
    })
});
});
}())