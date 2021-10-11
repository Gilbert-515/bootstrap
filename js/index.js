window.onload=function(){
  
  let containerA = document.getElementById('circleA');

  let circleA = new ProgressBar.Circle(containerA, {

     color: 'rgb(0, 204, 255);',
     strokeWidth: 7,
     duration: 1400,
     from: {color: '#AAA'},
     to: {color: 'rgb(0, 204, 255)'},

     step: function(state, circle){

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 255);

      circle.setText(value);
     }

  });

  let containerB = document.getElementById('circleB');

  let circleB = new ProgressBar.Circle(containerB, {

     color: 'rgb(0, 204, 255);',
     strokeWidth: 7,
     duration: 1600,
     from: {color: '#AAA'},
     to: {color: 'rgb(0, 204, 255)'},

     step: function(state, circle){

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 3500);

      circle.setText(value);
     }

  });

  let containerC = document.getElementById('circleC');

  let circleC = new ProgressBar.Circle(containerC, {

     color: 'rgb(0, 204, 255);',
     strokeWidth: 7,
     duration: 1800,
     from: {color: '#AAA'},
     to: {color: 'rgb(0, 204, 255)'},

     step: function(state, circle){

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 2600);

      circle.setText(value);
     }

  });

  let containerD = document.getElementById('circleD');

  let circleD = new ProgressBar.Circle(containerD, {

     color: 'rgb(0, 204, 255);',
     strokeWidth: 7,
     duration: 2000,
     from: {color: '#AAA'},
     to: {color: 'rgb(0, 204, 255)'},

     step: function(state, circle){

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 5990);

      circle.setText(value);
     }

  });

 // iniciar o loader quando o usuario chega ao elemento

  let dataAreaOffset = $('#data-area').offset();
  let stop = 0;

  $(window).scroll(function(e){

    let scroll = $(window).scrollTop();
   
    if(scroll > (dataAreaOffset.top - 500) && stop == 0){

      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;

    }

  });

  // Parallax

    $('#data-area').parallax({imageSrc: 'img/fundo_dados.png'});

    $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    

  // filtro do portifólio

  $('.filter-btn').click(function(){

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'all-btn'){

      eachBox('all', boxes);

    }else if( type == 'dev-btn'){

      eachBox('dev', boxes);

    }else if( type == 'deg-btn'){

      eachBox('deg', boxes);

    }else{

      eachBox('seo', boxes);
    }

  });

  function eachBox(type, boxes){

   if(type == 'all'){

      $(boxes).fadeIn();

   }else{

      $(boxes).each(function(){

         if(!$(this).hasClass(type)){

            $(this).fadeOut('slow');

         }else{

            $(this).fadeIn();
         }
      })
   }
  }

  // Scroll para section
  
   let navbtn = $('.nav-item');

   let bannerSection = $('#mainSlider');
   let aboutSection = $('#about-area');
   let serviceSection = $('#services-area');
   let dataSection = $('#data-area');
   let portifSection = $('#portifolio-area');
   let contactSection = $('#contact-area');

   let scroll = '';

   $(navbtn).click(function(){

      let btnID = $(this).attr('id');

      searchSection(btnID);

      $([document.documentElement, document.body]).animate({

        scrollTop: $(scroll).offset().top - 30
      }, 1100);
   });


   function searchSection(id){

    if(id == 'home-menu'){
      scroll = bannerSection;

    }else if(id == 'about-menu'){
      scroll = aboutSection;

    }else if(id == 'services-menu'){
      scroll = serviceSection;

    }else if(id == 'data-menu'){
      scroll = dataSection;

    }else if(id == 'portifolio-menu'){
      scroll = portifSection;

    }else{

      scroll = contactSection;
    }
   }


}
