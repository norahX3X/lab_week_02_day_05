console.log("starter.js is connected")


$('.zone').on("mouseover",function( event ) {   
    // highlight the mouseover target
    //event.target.addClass('.green');
    event.target.style.backgroundColor = "orange";
});

$('.zone').on("mouseout",function( event ) {   
    // highlight the mouseover target
    event.target.style.backgroundColor = "white";
});
$('.zone').on("click",function( event ) {   
    // highlight the mouseover target
    event.target.style.backgroundColor = "orange";
    //event.target.removeEventListener("mouseout",handleMouseDown);
    event.target.off("mouseout",handleMouseDown);

});

 function checkAll (box){
    $(document).ready( function() {
        // Select all
        $(".zone").click( function() {
            $(".green" + $(checkAll).attr('rel') + " INPUT[type='checkbox']").attr('checked', true);
            return false;
        });
        
        
        
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
    
// }

// // document.getElementsByClassName("zone").addEventListener("mouseover", function( event ) {   
// //     // highlight the mouseover target
// //     event.target.style.color = "orange";
// // });
