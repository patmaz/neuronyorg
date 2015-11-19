jQuery.noConflict(); 
jQuery(document).ready( function(){ 

    jQuery(this).scrollTop(0);
    
    var mobileDetection = false;
    if (navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
    ){
        
        mobileDetection = true;
        
    } else {
        
        mobileDetection = false;
        
    };
    
    function setBG(){
        
        if (jQuery(window).width() >= 768 && mobileDetection == false){
            
            jQuery("#wrapper1").attr("data-vide-bg", "webm: vidz/brain.webm, mp4: vidz/brain.mp4, poster: img/brain.jpg");
            
        } else {
            
            jQuery("#wrapper1").attr("data-vide-bg", "poster: img/brain.jpg");
            
            
        };

    };
    
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
    var backgroundSmall = "url(img/logo2down.svg)";
    var backgroundSmallVertical = "url(img/logo2v.svg)"
    function logoBG(){
        
        var windowWidth = jQuery(window).width();
        var windowHeight = jQuery(window).height();
        var windowRatio = windowWidth / windowHeight;
        
        if (windowWidth <= 768){
            
            jQuery("#wrapper1").css({"background-image": backgroundSmall, "background-size": "100%", "background-position": "center center"});
            
        } else if(windowWidth > 768 && windowRatio <= 1.2) {
            
            jQuery("#wrapper1").css({"background-image": backgroundSmallVertical, "background-size": "contain", "background-position": "center top"});
        
        } else {
            
            jQuery("#wrapper1").css({"background-image": backgroundBig, "background-size": "cover", "background-position": "center top"});
        
        };
        
    };
    
    logoBG();
    jQuery(window).resize(logoBG);
    
    jQuery("#wrap2link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper2'), 800, {offset:20});
        
    });
    
    jQuery("#wrap3link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper3'), 800, {offset:20});
        
    });
    
    jQuery("#wrap4link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper4'), 800, {offset:20});
        
    });
    
    jQuery("#wrap5link").click(function( event ){
        
        event.preventDefault();
        jQuery(window).scrollTo(jQuery('#wrapper5'), 800, {offset:20});
        
    });
    
    jQuery(".navbar-nav li a").click(function(event) {
        jQuery(".navbar-collapse").collapse('hide');
    });
    
    // test
    if (navigator.userAgent.match(/Firefox/i) && jQuery(window).width() > 768){
        
        function test(){
            jQuery("#type").position({

                my: "left bottom",
                at: "left bottom",
                of: "#firstDiv"

            });
        };
    
        test();
        jQuery(window).resize(test);
    
        jQuery(

            setInterval(function(){

            jQuery('#type').t(

                'neurony.org to miejsce agregujące zasoby związane z rehabilitacją neuropsychologiczną.<br><ins>2</ins><br>Książki, programy i inne materiały wpomagające rehabilitację. Oferujemy także diagnostykę i rehabilitację z dojazdem do Pacjenta, na terenie Warszawy.<br><ins>3</ins>',{speed:60,speed_vary:true,fin:function(){
                    
                    jQuery(this).empty();
                    
                    jQuery('#type').t(

                        '<span style="margin-left:40%; font-size: 2vh;">afazja</span><br><span style="margin-left:10%; font-size: 2vh;">amnezja</span><br><span style="margin-left:30%; font-size: 2vh;">zaburzenia uwagi</span><br><span style="margin-left:32%; font-size: 2vh;">zespół zaniedbywania</span><br><span style=" margin-left:5%; font-size: 2vh;">agnozja</span><br><span style="margin-left:25%; font-size: 2vh;">dysfunkcje wykonawcze</span><ins>10</ins>',{speed:60,speed_vary:false});
                    
                }});

            }, 3000));
        
    };
    
}); 