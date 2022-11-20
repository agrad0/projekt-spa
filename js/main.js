// $(document).ready(function() {
//     (console.log(`działa`));
//     $("#sm-container1").toggleClass(".sm-container-shown"[true, 10000]);
//     (console.log(`zadziałało hehe`));
// })


// $("#team-img-1").mouseenter(function() {
//     $(`#footer-expanding1`).animate({bottom: `10%`}, 500, function(){
//         $(`#footer-expanding1`).addClass(`box-shadow`);
//     })
//     $('#sm-container1').show().css({"height":'0%'}).animate({"height":'100%'},300);
// });

// $("#team-img-1").mouseleave(function() {
//     $("#footer-expanding1").animate({bottom: `-15%`}, 300)
//     $('#sm-container1').show().css({"height":'100%'}).animate({"height":'0%'},300, function (){
//     $('#sm-container1').hide();
//     $(`#footer-expanding1`).removeClass(`box-shadow`);
//     });
// });

$(".img-item2").mouseenter(function() {
    $(this).children(':nth-child(2)').animate({bottom: `0%`}, 500, function(){
        $(this).addClass(`box-shadow`);
    })
    $(this).find(`.sm-container`).show().css({"height":'0%'}).animate({"height":'100%'},300);
});

$(".img-item2").mouseleave(function() {
    $(this).children(':nth-child(2)').animate({bottom: `-15%`}, 500)
    $(this).find(`.sm-container`).show().css({"height":'100%'}).animate({"height":'0%'},300, function (){
        $(this).hide();
        $(this).parent().removeClass(`box-shadow`);
    });
});

$(`.img-item2`).mouseenter(function(event) {
    event.stopPropagation();
});

$(`.hamburger-container`).click(function() {
    $(".nav-item").css("display", "block");
    $(this).css("display", "none");
    $("#li-first").before(`<li class="li-shown"></li>`);
    $(`.li-shown`).click(function() {
        $(".nav-item").css("display", "none");
        $(`.li-shown`).remove();
        $(`.hamburger-container`).css("display", "block");
    }
    
    )
})