$(function () {
    let book_list = [
        ['아직 멀었다는 말', '파르티잔 극장', '엘리너 올리펀트는 완전 괜찮아', '사랑을 사랑하는 것', '아홉번째 파도', '머리부터 천천히', '첫숨'],
        ['이달의 이웃비', '밤의 고아', '두번의 자화상', '너무 한낮의 연애', '저녁이 깊다', '수상한 중고상점', '어느 날, 내 죽음에 네가 들어왔다'],
        ['불편한 편의점', '비가오면 열리는 상점', '마지막 이야기 전달자', '밤은 노래한다', '투자의 신', '부자의 그릇', '지적 대화를 위한 넓고 얕은 지식'],
        ['꿈의정원', '라이언 하트', '하트 크러시', '네가 날 만나러 온다면', '두근두근 로맨스', '그여름 나는', '인터셉트'],
        ['주식 시세의 비밀', '살 때, 팔 때, 벌 때', '1%를 읽는 힘', '워런 버핏 익스프레스', '베어마켓', '피터린치의 투자이야기', '주식시장을 이기는 작은 책'],
        ['거의 모든 일상 표현의 영어', '영어 회화의 결정적 단어들', '직장인 영어 독학 시크릿', '빌 브라이슨 언어의 탄생', '다시, 영어를 보다', '영어독서코칭', '스피킹 매트릭스 : 1분 영어 말하기'],
        ['나는 불안할 때 논어를 읽는다', '아주 세속적인 지혜 ', '도련님', '1984', '노인과바다', '데미안', '어린왕자'],
        ['안부르고 혼자고침', '미니멀리스트의 집 꾸미기', '좋아하는 곳에 살고 있나요', '더 인테리어 북', '미니멀 라이프 시간과 돈 사용법', '하루 10분 꼼수 살림법', '최고의 인테리어는 정리입니다'],
        ['이기적인 다이어트 상담소', '이건 다이어트 책입니다, 하지만', '유쾌한 운동의 뇌과학', '헬스의 정석:근력운동편', '죄수운동법','한 그릇 다이어트 레시피', '누구나 알지만 아무도 모르는 소식의 과학']

    ]
    for (i in book_list) {
        for (j in book_list[i]) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: book_list[i][j], size: 50 },
                async: false,
                headers: { Authorization: "KakaoAK 0c334d545c86893c0ce37cc22f4f90f5" }
            })
                .done(function (msg) {

                    console.log(msg);

                    let origin = msg.documents;
                    let data = origin.filter((val) => {
                        if (i == 3 && j == 1) {
                            return val.publisher == '가하' && val.title.length < 20 && val.thumbnail !== '';
                        }
                        else if (i == 6 && j == 2) {
                            return val.publisher == '문예출판사' && val.title.length < 20 && val.thumbnail !== '';
                        }
                        else if (i == 6 && j == 3) {
                            return val.publisher == '소담출판사' && val.title.length < 20 && val.thumbnail !== '';
                        }
                        else if (i == 6 && j == 4) {
                            return val.publisher == '새움' && val.title.length < 20 && val.thumbnail !== '';
                        }
                        else if (i == 6 && j == 5) {
                            return val.publisher == '문학동네' && val.datetime.substring(0, 4) == '2020' && val.thumbnail !== '';
                        }
                        else if (i == 6 && j == 6) {
                            return val.publisher == '더디퍼런스' && val.title.length < 20 && val.thumbnail !== '';
                        }
                        else if (i == 7 && j == 2) {
                            return val.datetime.substring(0, 4) == '2017' && val.title.length < 20 && val.thumbnail !== '';
                        }
                        else if(i==8 && j==6){
                            return val.thumbnail !== '';
                        }
                        else {
                            return val.title.length < 20 && val.thumbnail !== '';
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

                    let book = $('#list' + i).children('.b');

                    console.log(book);

                    if (i == 3) {
                        book.eq(j).children('.cover').append("<img src='" + data[0].thumbnail + "'/>");
                        book.eq(j).children('.info').append("<h3>[독점] " + newStr() + "</h3>");
                        book.eq(j).children('.info').append("<p>" + data[0].authors[0] + "</p>");
                    }
                    else {
                        book.eq(j).children('.cover').append("<img src='" + data[0].thumbnail + "'/>");
                        book.eq(j).children('.info').append("<h3>" + newStr() + "</h3>");
                        book.eq(j).children('.info').append("<p>" + data[0].authors[0] + "</p>");
                    }


                });
        }
    }
});