$(document).ready(function(){

var menu_link = $('#navbar ul.menu-plx li a'),
	menu_li = $('#navbar ul.menu-plx li'),
	stopka_powrot = $('a.cd-top'),
    formularz = $('#formularz'),
    max_zalacz = 5,
    zalacz = 1,
    modal1 = $('#myModal');
	

$(menu_link).click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-50
    }, 1000);
    $(menu_li).removeClass('active');
    $(this).parent().addClass('active');
    event.preventDefault();

});

$(stopka_powrot).click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    event.preventDefault();
});

$('#tytul-naukowy-inny').prop('disabled', true);
$('#formularz #tytul-naukowy').on('change', function(){
    if(this.value=='inne'){
        $('#tytul-naukowy-inny').prop('disabled', false);
    } else {
        $('#tytul-naukowy-inny').prop('disabled', true).val('');

    }
});

//dodawanie pol na pliki - start
$('.add_more').on('click', function(){
    if(zalacz < max_zalacz){
        ++zalacz;
        $('.pola-zalacznik').append('<div class="zalaczniki"><input id="zalacznik'+zalacz+'" name="zalacznik[]" class="input-file" type="file"><a href="#" class="remove_zal"><img src="img/del.png" /></a></div>'); 
        
    }  if (zalacz == max_zalacz) {
        $('.add_more').hide();
    }
});

$(document).on('click', '.remove_zal', function(e){
    e.preventDefault();
    $(this).parent().remove();
    --zalacz;
    if(zalacz < max_zalacz){
        $('.add_more').show();
    } else {
        $('.add_more').remove();
    }
});
//dodawanie pol na pliki - koniec


formularz.validate({ // start validacji
         ignore: ":hidden",
         rules: {
             imie: {
                 required: true,
                 minlength: 3
             },
             nazwisko: {
                 required: true,
                 minlength: 3
             },
             email: {
                 required: true,
                 email: true
             }
         },
         submitHandler: function (form) {

            var form_data = new FormData(form); //constructs key/value pairs representing fields and values

            $.ajax({ //ajax form submit
                url : 's.php',
                type: 'post',
                data : form_data,
                dataType : "json",
                contentType: false,
                cache: false,
                processData:false,


                beforeSend:function(res){ // Are not working with dataType:'jsonp'
                  modal1.modal('show').find('#loading-image').show(); 
                },
                success:function(res){
                    if(res.type == "error"){
                    modal1.modal('show').find('#loading-image').hide(); 
                    modal1.modal('show').find('.form-komunikat').append(res.text); 
                    modal1.on('hidden.bs.modal', function () {
                        //formularz[0].reset();
                        modal1.find('.form-komunikat').text('');
                        grecaptcha.reset();  
                    });                   
                    }
                   
                    if(res.type == "done"){
                        modal1.modal('show').find('#loading-image').hide(); 
                        modal1.modal('show').find('.form-komunikat').append(res.text);
                        modal1.on('hidden.bs.modal', function () {
                            formularz[0].reset();
                            modal1.find('.form-komunikat').text('');  
                            grecaptcha.reset();
                        });

                    }
                }

                



            });
         }
     });//koniec validacji


  $(window).scroll(function() {
    var wintop = $(window).scrollTop(), 
        docheight = $('body').height(), 
        winheight = $(window).height(),

        offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    console.log("total scroll " + totalScroll);
    $(".KW_progressBar").css("width",totalScroll+"%");


    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
  });

  $('.class-loga').slick({

      centerMode: true,
      arrows: false,
      centerPadding: '40px',
      slidesToShow: 6,
      autoplay: true,
      autoplaySpeed: 1000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 5,
            autoplay: true,
            autoplaySpeed: 1000
          }
        },
        {
          breakpoint: 768,
          settings: "unslick"
        }
        
      ]

  });




});   //koniec document ready



