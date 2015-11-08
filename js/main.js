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
        
        if (jQuery(window).width() >= 768 && jQuery(window).scrollTop() > jQuery(window).height() - 50){

            jQuery(".navbar-inverse").addClass("navAppearScroll");
            jQuery(".navbar-inverse").css({"position": "fixed", "top": "0", "left": "0"});
            
        } else {
            
            jQuery(".navbar-inverse").removeClass("navAppearScroll");
            jQuery(".navbar-inverse").css({"position": "", "top": "", "left": ""});
        };
        
    });
    
    
    var backgroundBig = "url(img/logobg2.svg)";
    var backgroundSmall = "url(img/logobg2.svg)";
    function logoBG(){
        
        var windowWidth = jQuery(window).width();
        var windowHeight = jQuery(window).height();
        var windowRatio = windowWidth / windowHeight;
        
        if (windowWidth <= 700 || windowRatio <= 1){
            
            jQuery("#wrapper1").css({"background-image": backgroundSmall});
            
        } else {
            
            jQuery("#wrapper1").css({"background-image": backgroundBig});
        
        };
        
    };
    
    logoBG();
    jQuery(window).resize(logoBG);
    
    jQuery("#wrap2link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper2'), 800, {offset:1});
        
    });
    
    jQuery("#wrap3link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper3'), 800, {offset:1});
        
    });
    
    jQuery("#wrap4link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper4'), 800, {offset:1});
        
    });
    
    jQuery("#wrap5link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper5'), 800, {offset:1});
        
    });
    
});  