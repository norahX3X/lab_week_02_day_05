console.log("starter.js is connected")

$('.pyro').css('display','none');
$('.zone').on("mouseover", function (event) {
    // highlight the mouseover target
    $(this).addClass("green");

});

$('.zone').on("mouseout", function (event) {
    // highlight the mouseover target
    $(this).removeClass("green");
});
$('.zone').on("click", function (event) {
    // highlight the mouseover target

    $(this).off("mouseout");
    checkAll(this)

});

function checkAll(box) {
    var dives = $('.green');
    var boxes = $('.zone');
    if (dives.length == boxes.length){
        $('.message').text("congrats");
        $('.pyro').css('display','inline');
        $('.button').css('display','inline');
        
    }
}
$('.button').on("click", function (event) {
    location.reload();
});


