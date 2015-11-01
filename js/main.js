jQuery.noConflict(); 
jQuery(document).ready( function(){ 

    
    function setBG(){
        
        if (jQuery(window).width() > 500){
            
            jQuery("#wrapper").attr("data-vide-bg", "webm: vidz/brain.webm");
            
        } else {
            
            jQuery("#wrapper").attr("data-vide-bg", "poster: img/brain.jpg");
            
        }

    }
    
    setBG();
    
    
    
});  