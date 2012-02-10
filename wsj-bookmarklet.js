javascript:void(
    (function(){
        var current_location=location.href.replace(/^http\:\/\/(.*)$/,"$1");
        var current_location=current_location.split("?")[0];
        location.href="http://www.google.com/search?q=cache:"+escape(current_location);
    })()
)