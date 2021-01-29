$(document).ready(function(){

    //what I want to do is when I click on the right button (the next button), the image will change to the next image.
    //when I click on the previous button, the image before that appears


    //when i click on the next button this is what happens
    $('.next').on('click', function(){ 

        let currentImg = $('.active'); //I am defining current image
        let nextImg = currentImg.next(); // I am defining next image
        let firstImg = $('.first');

        if(nextImg.length > 0){// this means if there is a next image
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } else { //if there is no more next image, then I want the button to take me to the first image. 
            currentImg.removeClass('active').css('z-index', -10);
            firstImg.addClass('active').css('z-index', 10);
          }
    });

    //when I click on the previous button this is what happens
    // $('.previous').on('click', function(){
    //     let currentImg = $('.active');
    //     let previousImg = currentImg.prev();

    //     if(previousImg.length){ // this means if there is a previous image
    //     currentImg.removeClass('.active').css('z-index', -10);
    //     previousImg.addClass('.active').css('z-index', 10);
    //     }
    // });

    //above code doesn't work because "removeClass" & "addClass" doesn't need a '.' period in the classes 
    
    $('.previous').on('click', function(){ 

        let currentImg = $('.active'); //I am defining current image
        let previousImg = currentImg.prev(); // I am defining next image

        if(previousImg.length > 0){// this means if there is a next image
            currentImg.removeClass('active').css('z-index', -10);
            previousImg.addClass('active').css('z-index', 10);
        }
    });

   
});