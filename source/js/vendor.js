$(document).ready(function(){
  let currentPosition = 0;
  const slideWidth = $('#slideshow').width();;
  let slides = $('.slide');
  let numberOfSlides = slides.length;
  const marginMax = $("#slideshow").width();;
  const marginMin = 0;

  $('#slideshow').css('overflow', 'hidden');
  $('#slideshow').css({
    'float' : 'left',
    'width' : slideWidth
  });
  $('#slidesContainer').css('width', slideWidth * numberOfSlides);

  $('.main__catalog-pages')
    .prepend('<button class="pages pages--inactive" type="button" title="Предыдущая страница" id="leftControl">')
    .append('<button class="pages" type="button" title="Следующая страница" id="rightControl">');

  $('#rightControl').bind('click', function(){
    $('#slidesContainer').animate({
      'marginLeft' : -marginMax
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
  });
