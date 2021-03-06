$(document).ready(() => {
    let burger = $('.burger');
    let navLinks = $('.nav-links');
    let navLink = $('.link');
    let prevBtn = $('#prevBtn');
    let nextBtn = $('#nextBtn');
    let imageSlides = [...$('.slides')];
    let infoSlides = [...$('.info-slides')];
    let counterOne = 0;
    let counterTwo = 0;

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

        if(count >= (arr.length-1))
        {
            count+=1;
            prevSlide = arr[arr.length-1];
            count = 0;
            $(arr[count]).fadeIn('fast').css('display', 'block');
            prevSlide = $(arr[arr.length-1]).fadeOut('fast').css('display', 'none');
        }
        else
        {
            count += 1;
            prevSlide = arr[count-1];
            $(arr[count]).fadeIn('fast').css('display', 'block');
            $(prevSlide).fadeOut('fast').css('display', 'none');
        }
        return count;
    }

    // next button function
    const prevButtonFunction = (arr, count) => {
        
        let prevSlide = null;

        if(count <= 0)
        {
            count-=1;
            prevSlide = arr[count+1];
            count = arr.length-1;
            $(arr[count]).fadeIn('fast').css('display', 'block');
            $(prevSlide).fadeOut('fast').css('display', 'none');
        }
        else
        {
            count -= 1;
            prevSlide = arr[count+1];
            $(arr[count]).fadeIn('fast').css('display', 'block');
            $(prevSlide).fadeOut('fast').css('display', 'none');
        }
        return count;
    }

    defaultSlideConfig(imageSlides);
    defaultSlideConfig(infoSlides);

    burger.click(() => { 
        navLinks.fadeToggle('slow').css('display', 'flex');
    });


    nextBtn.click(() => {
        counterOne = nextButtonFunction(imageSlides, counterOne);
        counterTwo = nextButtonFunction(infoSlides, counterTwo);
    });

    prevBtn.click(() => {
        counterOne = prevButtonFunction(imageSlides, counterOne);
        counterTwo = prevButtonFunction(infoSlides, counterTwo);
    });

    

});