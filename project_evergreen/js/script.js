$(document).ready(function(){
  $('.center').slick({
      dots: true,
      arrows: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 690,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });

  $( function() {
      $( "#slider-range_1" ).slider({
        range: true,
        min: 0,
        max: 200,
        values: [ 50, 150 ],
        slide: function( event, ui ) {
          $( "#minSquare" ).val( ui.values[ 0 ] );
          $( "#maxSquare" ).val( ui.values[ 1 ] );
        }
      });
      $( "#minSquare" ).val( $( "#slider-range_1" ).slider( "values", 0 ) );
      $( "#maxSquare" ).val( $( "#slider-range_1" ).slider( "values", 1 ) );
  } );

  $( function() {
      $( "#slider-range_2" ).slider({
        range: true,
        min: 5000,
        max: 100000,
        values: [ 10000, 50000 ],
        slide: function( event, ui ) {
          $( "#minCost" ).val( ui.values[ 0 ] );
          $( "#maxCost" ).val( ui.values[ 1 ] );
        }
      });
      $( "#minCost" ).val( $( "#slider-range_2" ).slider( "values", 0 ) );
      $( "#maxCost" ).val( $( "#slider-range_2" ).slider( "values", 1 ) );
  } );
});