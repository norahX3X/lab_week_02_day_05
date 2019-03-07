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
<<<<<<< HEAD
    if (dives.length == boxes.length)
        $('.message').text("congrats ;)");
=======
    if (dives.length == boxes.length){
        $('.message').text("congrats");
        $('.pyro').css('display','inline');

    }
>>>>>>> 700467134fb332e086a21a4c59750a2dc42e2dee


}

        // Select none
//         $("A[href='#select_none']").click( function() {
//             $("#" + $(this).attr('rel') + " INPUT[type='checkbox']").attr('checked', false);
//             return false;
//         });
//         // Invert selection
//         $("A[href='#invert_selection']").click( function() {
//             $("#" + $(this).attr('rel') + " INPUT[type='checkbox']").each( function() {
//                 $(this).attr('checked', !$(this).attr('checked'));
//             });
//             return false;
//         });
//     });
// </script>

