$(function(){
    $('.t>h1').addClass('show_ani');
    $('.t>p').addClass('show_ani3');

    $(window).scroll(function () {
        let wd = $(this).scrollTop();

        let sc1 = $('.sc1').offset().top;
        console.log(sc1);

        if (wd < 300) {
            $('.title').eq(0).children().removeClass('show_ani2');
        }
        if (wd <= sc1) {
            $('.logo').children('img').attr('src','https://d3udu241ivsax2.cloudfront.net/v3/images/brand/full-logo.f9246fa0ca04c7cef80a5d0f5409f0be.png').css({width: '100%', height: '24px'})
        }

        if (wd > sc1) {
            $('.logo').children('img').attr('src','https://d3udu241ivsax2.cloudfront.net/v3/images/brand/simple-logo.41a05d959a43fde14438769b6afa3f19.png').css({width: '24px', height: 'auto'});
        }

        if (wd > sc1 - 300) {
            $('.t>h1').addClass('show_ani');
            $('.t>p').addClass('show_ani3');
        }

        if (wd > sc1 - 600) {
            $('.title').eq(0).children().addClass('show_ani2');
            $('.title').eq(1).children().removeClass('show_ani2');
        }

        let sc2 = $('.sc2').offset().top;

        if (wd < sc2) {
            $('.title').eq(2).children().removeClass('show_ani2');
        }

        if (wd > sc2 - 900) {
            $('.title').eq(1).children().addClass('show_ani2');
            $('.title').eq(0).children().removeClass('show_ani2');

            $('.t>h1').removeClass('show_ani');
            $('.t>p').removeClass('show_ani3');
        }

        let sc3 = $('.sc3').offset().top;
        console.log(sc3)

        if (wd > sc3 - 600) {
            $('.title').eq(1).children().removeClass('show_ani2');
        }

        if (wd > sc3 - 700 && wd < sc3 + 200) {
            $('.title').eq(2).children().addClass('show_ani2');
            $('.title').eq(3).children().removeClass('show_ani2');
        }

        let sc4 = $('.sc4').offset().top;
        console.log(sc4)

        if (wd > sc4 - 700) {
            $('.title').eq(3).children().addClass('show_ani2');
            $('.title').eq(2).children().removeClass('show_ani2');
            $('.title').eq(4).children().removeClass('show_ani2');

            for(i in $('.subimg')){
                $('.subimg').eq(i).removeClass('show_con'+i);
            }
        }

        let sc5 = $('.sc5').offset().top;

        if (wd > sc5 - 700) {
            $('.title').eq(4).children().addClass('show_ani2');
            $('.title').eq(3).children().removeClass('show_ani2');
            $('.title').eq(5).children().removeClass('show_ani2');
            $('.phone').removeClass('show_ani2');
        }


        if(wd>sc5 -400){
            for(i in $('.subimg')){
                $('.subimg').eq(i).addClass('show_con'+i);
            }
        }

        let sc6 = $('.sc6').offset().top;

        if (wd > sc6 - 700) {
            $('.title').eq(5).children().addClass('show_ani2');
            $('.title').eq(4).children().removeClass('show_ani2');
            $('.title').eq(6).children().removeClass('show_ani2');
            $('.title').eq(7).children().removeClass('show_ani2');
            $('.title').eq(8).children().removeClass('show_ani2');
        }

        let sc7 = $('.sc7').offset().top;

        if (wd > sc7 - 500) {
            $('.title').eq(6).children().addClass('show_ani2');
            $('.title').eq(7).children().removeClass('show_ani2');
            $('.phone').addClass('show_ani2');
            $('.title').eq(5).children().removeClass('show_ani2');
            $('.title').eq(9).children().removeClass('show_ani2');

            for(i in $('.subimg')){
                $('.subimg').eq(i).removeClass('show_con'+i);
            }
        }

        let sc8 = $('.sc8').offset().top;

        if (wd > sc8 - 300) {
            $('.title').eq(8).children().addClass('show_ani2');
        }

        let sc9 = $('.sc9').offset().top;

        if (wd > sc9 - 500) {
            $('.title').eq(9).children().addClass('show_ani2');
        }

        if (wd > sc9 - 200) {
            $('.title').eq(6).children().removeClass('show_ani2');
            $('.title').eq(7).children().removeClass('show_ani2');
        }

        if(wd>sc9){
            $('.phone').removeClass('show_ani2');
        }

    });
});