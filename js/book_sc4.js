$(function(){
    for(let i = 0; i<5; i++){
        $('.subject>button').eq(i).click(function(){
            $(this).addClass('c')
            $(this).siblings().removeClass('c')
            $('.category2>.list').eq(i).show().css('display','flex');
            $('.category2>.list').eq(i).siblings().hide();
        });
    }
});