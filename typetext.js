(function($){
  $.fn.typetext = function(options){
      var selector = $(this).selector;
    var settings = $.extend({
      newline:true,
      newlinechar:'.',
      speed:100
    },options);
    var txt = $(selector).text();
    //txt = $(el);
    var timeOut;
    var txtLen = txt.length;
    var char = 0;
    $(selector).text('');
    (function typeIt() {   
    var humanize = settings.speed;
    timeOut = setTimeout(function() {
        char++;
      var type = txt.substring(char-1, char);

        $(selector).append(type);
     
      if(settings.newline && txt.substring(char-1, char) == settings.newlinechar){
        $(selector).append('<br/>');
      }
      
        typeIt();

        if (char == txtLen) {
            clearTimeout(timeOut);
        }

    }, humanize);
}());
  }
})(jQuery);
