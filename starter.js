console.log("starter.js is connected")


$('.zone').on("mouseover",function( event ) {   
    // highlight the mouseover target
   $(this).addClass( "green" );

});

$('.zone').on("mouseout",function( event ) {   
    // highlight the mouseover target
    $(this).removeClass( "green" );
});
$('.zone').on("click",function( event ) {   
    // highlight the mouseover target
  
    $(this).off("mouseout");

});

function checkAll (box){
    
}
