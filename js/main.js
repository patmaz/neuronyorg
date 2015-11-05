jQuery.noConflict(); 
jQuery(document).ready( function(){ 

    
    function setBG(){
        
        if (jQuery(window).width() >= 768){
            
            jQuery("#wrapper1").attr("data-vide-bg", "webm: vidz/brain.webm");
            
        } else {
            
            jQuery("#wrapper1").attr("data-vide-bg", "poster: img/brain.jpg");
            
            
        }

    }
    
    setBG();
    
    jQuery(window).scroll(function(){
        
        if (jQuery(window).width() >= 768 && jQuery(window).scrollTop() > jQuery(window).height()){

            jQuery(".navbar-inverse").addClass("navAppearScroll").position({
               
                my: "left top",
                at: "left top",
                of: window
                
            });
            
        } else {
            
            jQuery(".navbar-inverse").removeClass("navAppearScroll");
            jQuery(".navbar-inverse").css({"position": "", "top": "", "left": ""});
        };
        
    });
    
});  