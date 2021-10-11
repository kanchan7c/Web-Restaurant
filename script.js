$(document).ready(function() {
    
    // toggle menu operations

    $(".menuOpen").click(function(){ // open
        if(window.outerWidth < 900){
        $("nav").show();
        $(".menuOpen").hide();
        }
    });
    $(".menuClose").click(function(){ //close
        if(window.outerWidth < 900){
        $("nav").hide();
        $(".menuOpen").show();
        }
    });

    //Button animation function
    
    $(".button").each(function(index, element){
        const  originalText = $(element).val();
        const newText = originalText + " >";
        $(element)
        .mouseover( () => {
            $(element).val(`${newText}`);
        })
        .mouseleave( () => {
            $(element).val(`${originalText}`);
        })
    })

   
    
}); 