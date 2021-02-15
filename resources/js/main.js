
let previousScroll=-1;
$(window).scroll(() => {
    let currentScroll = $(this).scrollTop();
    if(currentScroll<320)
    $(".header__img").css("transform",`translate(${currentScroll/5}px,${currentScroll/4}px)`)
    // console.log(screen.width);
    previousScroll=currentScroll
})

// game
let soDot = 3;
let x=0,y=90
let huong='right'
function renderSnake(soDot){
    let tmp=''
    for(let i=0; i<soDot; i++){
        tmp+=`<div id=${i} class='dot' style='left:${(soDot-i)*30}px'></div>`
    }
    $(".snake").html(tmp)
}
renderSnake(soDot)
$(".start").click(() => {
    $(".game img").hide()
    if(huong==='right'){
        let move = 30
        let dhieuccgi=setInterval(moveFunction, 500);
        function moveFunction(){
            for(let i=0; i<soDot; i++) {
                $(`#${i}`).css("left", `${(soDot-i)*30+move}px`)    
            }
            move+=30
            x+=30
            if(huong!=='right')
            {
                clearInterval(dhieuccgi);
                
            }
        }
    }
    if(huong==='down'){
        console.log("sa");
        let move = 30
        let dhieuccgi=setInterval(moveFunction, 500);
        function moveFunction(){
            for(let i=0; i<soDot; i++) {
                // $(`#${i}`).css("top", `${(soDot-i)*30+move}px`)
                console.log($(`#${i}`).css(left));
            }
            move+=30
            if(huong!=='down')
                clearInterval(dhieuccgi)          
        }
    }
    
})
$(function() {
    $(window).keypress(function(e) {
        var key = e.which;
        //do stuff with "key" here...
        // console.log(key);
        if (key===115) {
            huong='down'
            
        }
    });
 });