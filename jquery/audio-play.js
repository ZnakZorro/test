(function($)
{
    jQuery.sound = {
        play: function() {
            return jQuery('<audio style="display:none" autoplay="autoplay" src="' + arguments[0] + '" /><embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"></audio>').appendTo('body');
        }
    };
})(jQuery);

/*

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>  
        <script src="http://your-site.com/static/js/jquery.sound.js"></script>        
        $.sound.play('/path/to/media/background_music.mp3');
		
*/		