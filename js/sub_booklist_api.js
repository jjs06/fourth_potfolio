$(function () {
    let book_list = ['세상의 마지막 기차역', '죽이고싶은 아이', '오늘 밤, 세계에서 이 사랑이 사라진다 해도', '오늘 밤, 세계에서 이 눈물이 사라진다 해도','달의 아이','스즈메의 문단속', '바다가 들리는 편의점','불편한 편의점', '치유를 파는 찻집', '메리골드 마음 세탁소']
    
    for (i in book_list) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: book_list[i], size: 50 },
            async: false,
            headers: { Authorization: "KakaoAK 0c334d545c86893c0ce37cc22f4f90f5" }
        })
            .done(function (msg) {

                console.log(msg);

                let origin = msg.documents;
                let data = origin.filter((val) => {

                    if(i == 1){
                        return val.datetime.substring(0, 7) == '2021-12' && val.thumbnail !== '';
                    }
                    else{
                        return  val.thumbnail !== '';
                    }

                })


                let str = data[0].title;

                let idx = str.search(/[\.\()]/);  //정규표현식에 포함된 특수문자 찾아 인텍스 반환

                console.log(idx);

                let newStr = function () {
                    if (idx == -1) {
                        return str;
                    }
                    else {
                        return str = str.substring(idx, -1)
                    }

                }  //인덱스부터 마지막까지 제거하고 남은 문자열 반환


                console.log(newStr);

                let book = $('.slider-inner').children('.slider-item');

                console.log(book);

                book.eq(i).children('.cover').append("<img src='" + data[0].thumbnail + "'/>");
                book.eq(i).children('.info').append("<h3>" + newStr() + "</h3>");
                book.eq(i).children('.info').append("<p>" + data[0].authors[0] + "</p>");
            });

    }
});