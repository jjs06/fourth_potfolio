$(function () {
    $.get('./sub_text/book_intro.txt', function (data) {
        $('.intro>p').html(data);
    });

    $.get('./sub_text/book_index.txt', function (data) {
        $('.index').html(data);
    });

    $.get('./sub_text/book_translators.txt', function (data) {
        $('.translators').html(data);
    });

    $.get('./sub_text/book_publisher_review.txt', function (data) {
        $('.publisher-review').html(data);
    });
});