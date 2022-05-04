$(document).ready(function () {
  let currentPosition = 0;
  let slideWidth = 750;
  let slideWidthMob = 266;
  let slides = $('.slide');
  let numberOfSlides = slides.length;
  let marginMax = 750;
  let marginMaxMob = 266;
  const marginMin = 0;
  console.log($(window).width())

  $('#slideshow').css('overflow', 'hidden');
  $('#slideshow').css({
    'float': 'left',
    'width': slideWidth
  });
  $('#slidesContainer').css('width', slideWidth * numberOfSlides);

  $(window).on('resize', function () {
    if ($(window).width() >= 768) {

      $('#slideshow').css('overflow', 'hidden');
      $('#slideshow').css({
        'float': 'left',
        'width': slideWidth
      });
      $('#slidesContainer').css('width', slideWidth * numberOfSlides);

    } 
     if ($(window).width() <= 767) {
      $('#slideshow').css('overflow', 'hidden');
      $('#slideshow').css({
        'float': 'left',
        'width': slideWidthMob
      });
      $('#slidesContainer').css('width', slideWidthMob * numberOfSlides);
    }
  })

  $('.main__catalog-pages')
        .prepend('<button class="pages pages--inactive" type="button" title="Предыдущая страница" id="leftControl">')
        .append('<button class="pages" type="button" title="Следующая страница" id="rightControl">');

      $('#rightControl').bind('click', function () {

        if ($(window).width() >= 768) {
          $('#slidesContainer').animate({
            'marginLeft': -marginMax
          });
        } 
        
        if ($(window).width() <= 767) {
          $('#slidesContainer').animate({
            'marginLeft': -marginMaxMob
          });
        }

        currentPosition = currentPosition + 1;
        $('#leftControl').removeClass('pages--inactive');

        if (currentPosition == numberOfSlides - 1) {
          $('#rightControl').addClass('pages--inactive');
          $('#leftControl').removeClass('pages--inactive');
        } else {
          $('#rightControl').removeClass('pages--inactive');
          $('#leftControl').addClass('pages--inactive');
        }
      });

      $('#leftControl').bind('click', function () {
        $('#slidesContainer').animate({
          'marginLeft': marginMin
        });
        currentPosition = currentPosition - 1;

        if (currentPosition == 0) {
          $('#leftControl').addClass('pages--inactive');
          $('#rightControl').removeClass('pages--inactive');
        } else {
          $('#leftControl').removeClass('pages--inactive');
          $('#rightControl').addClass('pages--inactive');
        }
      });
});