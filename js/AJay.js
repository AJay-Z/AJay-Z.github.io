var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '上号！上号！🤩';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '专心点，别挂机😡' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});