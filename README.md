typetext.js
========


TypeText is a jQuery plugin to add typing text effect to your text .

Usage :
<pre>
&lt;script src="typetext.js"&gt;&lt;/script&gt;
&lt;script&gt;
    $(function(){
        $('selector').typetext();
    });
&lt;/script&gt;
    
Options and Defaults         
        newline : true      //Enables newline
        newlinechar : '.'   //Character after which newline will start
        speed: 100          //Typing speed in milliseconds
            
Example           
        $('.text').typetext({
                newline:false,
                newlinechar:',',
                speed:50
        })
</pre>
