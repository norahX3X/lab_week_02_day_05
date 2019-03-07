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
    
}

// document.getElementsByClassName("zone").addEventListener("mouseover", function( event ) {   
//     // highlight the mouseover target
//     event.target.style.color = "orange";
// });
