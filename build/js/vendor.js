function slider (category) {
    let currentPosition = 0;
    let slideWidth = 750;
    let slides = $('.choice');
    console.log(slides)
    let numberOfSlides = 2;
    let marginMax = -750;
    let marginMin = 0;

    $(category).css('overflow', 'hidden');
    $('#slidesContainer').css({
      'float' : 'left',
      'width' : slideWidth
    });
    $('#slidesContainer').css('width', slideWidth * numberOfSlides);
    $('.main__catalog-category-pages')
      .prepend('<button class="pages pages--inactive" type="button" title="Предыдущая страница" id="leftControl">')
      .append('<button class="pages" type="button" title="Следующая страница" id="rightControl">');

    $('#rightControl').bind('click', function(){
        $('#slidesContainer').animate({
          'marginLeft' : marginMax
        });
        currentPosition = currentPosition+1;
        $('#leftControl').removeClass('pages--inactive');

        if(currentPosition==numberOfSlides-1){ 
          $('#rightControl').addClass('pages--inactive');
          $('#leftControl').removeClass('pages--inactive');
        } else { 
          $('#rightControl').removeClass('pages--inactive');
          $('#leftControl').addClass('pages--inactive');
        }
    });

    $('#leftControl').bind('click', function(){
        $('#slidesContainer').animate({
          'marginLeft' : marginMin
        });
        currentPosition = currentPosition-1;

        if(currentPosition==0){ 
          $('#leftControl').addClass('pages--inactive');
          $('#rightControl').removeClass('pages--inactive');
        } else { 
          $('#leftControl').removeClass('pages--inactive');
          $('#rightControl').addClass('pages--inactive');
        }
    });
}

$(document).ready(function(){
    slider('.main__catalog-category--horror');
    slider('.main__catalog-category--comedy');
    slider('.main__catalog-category--action');
    slider('.main__catalog-category--documentary');
});

