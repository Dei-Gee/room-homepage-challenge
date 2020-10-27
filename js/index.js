$(document).ready(() => {
    let burger = $('.burger');
    let navLinks = $('.nav-links');
    let navLink = $('.link');
    let prevBtn = $('#prevBtn');
    let nextBtn = $('#nextBtn');
    let imageSlides = [...$('.slides')];
    let infoSlides = [...$('.info-slides')];
    let counterOne = 1;
    let counterTwo = 1;

    // set the first div visible by default
    const defaultSlideConfig = (arr) => {
        arr.forEach((el,i) => {
            if(i == 0)
            {
                $(el).css('display', 'block');
            }
            else
            {
                $(el).css('display', 'none');
            }
        });
    }

    // next button function
    const nextButtonFunction = (arr, count) => {
        
        let prevSlide = null;

        if(count > (arr.length-1))
        {
            prevSlide = arr[arr.length-1];
            count = 0;
            console.log(count);
            $(arr[count]).fadeIn('fast').css('display', 'block');
            prevSlide = $(arr[arr.length-1]).fadeOut('fast').css('display', 'none');
            count+=1;
        }
        else
        {
            prevSlide = arr[count-1];
            $(arr[count]).fadeIn('fast').css('display', 'block');
            $(prevSlide).fadeOut('fast').css('display', 'none');
            count += 1;
        }
        return count;
    }

    defaultSlideConfig(imageSlides);
    defaultSlideConfig(infoSlides);





    burger.click(() => { 
        navLinks.fadeToggle('slow').css('display', 'flex');
    });

    navLink.hover(() => {
            // over
            $(this).css({'backgroundColor': 'black', 'transition': '300ms', 'color': 'white'});
        }, () => {
            // out
            $(this).css({'backgroundColor': 'transparent', 'transition': '300ms', 'color': 'black'});
        }
    );

    nextBtn.click(() => {
        counterOne = nextButtonFunction(imageSlides, counterOne);
        counterTwo = nextButtonFunction(infoSlides, counterTwo);
    });

    

});