$(function () {

    for(let i = 0; i<2; i++){
        $('.sc7>ul>li').eq(i).click(function(){
            $(this).addClass('u')
            $(this).siblings().removeClass('u')
            $('.book_wrap>.book').eq(i).show().css('display','flex');
            $('.book_wrap>.book').eq(i).siblings().hide();
        });
    }


    let btn = $(".order>button");
    let w = $('.slide2>.s').innerWidth();

    btn.click(function () {
        $(this).addClass('c')
        $(this).siblings().removeClass('c')

        let index = $(this).index();
        $(".slide2").animate({marginLeft: -w * index}, 300);
    });
});