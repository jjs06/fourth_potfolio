$(function () {
            
    let bgcon = ['https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/shelf-pc-icon.616c1629653bb5c0828475de7b017808.png','https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/down-pc-icon.8e86f1e84aeeeb1373d0a9808cea2415.png', 'https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/favorite-pc-icon.0febe8053215436d2977ab0aa0f86bc4.png', 'https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/share-pc-icon.39fc1274fac1ccd7ffd9dd4cb7cf8bfb.png', 'https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/post-pc-icon.3e05732845a386884160090a3c0c1fe5.png'];

    console.log(bgcon);
    console.log('.s-menu>li');

    for(i in bgcon){
        $('.s-menu>li').eq(i).css('background-image', `url(${bgcon[i]})`);
    }
});
