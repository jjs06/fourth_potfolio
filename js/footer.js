$(function () {
    $('.c-button').click(function () {
        if ($(this).text() == '사업자 정보 펼쳐보기') {
            $(this).text('사업자 정보 닫기');
            $(this).css('background-image', "url('https://d3udu241ivsax2.cloudfront.net/v3/images/common/up-arr.9002cf89931fdc8a17ca1c680eba309d.png')");

            $('.c-info').show();
        } else {
            $(this).text('사업자 정보 펼쳐보기');
            $(this).css('background-image', "url('https://d3udu241ivsax2.cloudfront.net/v3/images/common/down-arr.0b293f1f10f97e5a2a744710ef0d1133.png')");
            $('.c-info').hide();
        }

    });
});