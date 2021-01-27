
let previousScroll=-1;
$(window).scroll(() => {
    let currentScroll = $(this).scrollTop();
    if(currentScroll<320)
    $(".header__img").css("transform",`translate(${currentScroll/5}px,${currentScroll/4}px)`)
    // console.log(screen.width);
    previousScroll=currentScroll
})