$(function () {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: '어느 날, 내 죽음에 네가 들어왔다', size: 50 },
        async: false,
        headers: { Authorization: "KakaoAK 0c334d545c86893c0ce37cc22f4f90f5" }
    })
        .done(function (msg) {

            let origin = msg.documents;
            console.log(origin);
            let data = origin.filter((val) => {
                return val.title.length < 20 && val.thumbnail !== '';
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

            let title = $('.title-info');
            let price = $('.price');
            let isbn = $('.isbn');
            let day= $('.day');
            let pub = $('.pub');

            title.append("<h3>" + newStr() + "</h3>");
            title.append("<p>" + data[0].authors[0] + "</p>");

            price.append("<h3><span>정가: &nbsp;</span>" + data[0].price +" 원</h3>")
            isbn.append(data[0].isbn.substr(11,13));   
            day.append(data[0].datetime.substr(0,10).replace(/[\-]/g, '.'));
            pub.append(data[0].publisher);
        });
});