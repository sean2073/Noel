    (function(window){
        $.fn.stopAtTop= function () {
            var $this = this,
                $window = $(window),
                thisPos = $this.offset().top,
                setPosition,
                under,
                over;
        
            under = function(){
                if ($window.scrollTop() < thisPos) {
                    $this.css({
                        position: 'absolute',
                        top: ""
                    });
                    setPosition = over;
                }
            };
            
            over = function(){
                if (!($window.scrollTop() < thisPos)){
                    $this.css({
                        position: 'fixed',
                        top: 0
                    });
                    setPosition = under;
                }
            };
            
            setPosition = over;
            
            $window.resize(function()
            {
                bumperPos = pos.offset().top;
                thisHeight = $this.outerHeight();
                setPosition();
            });
            
            $window.scroll(function(){setPosition();});
            setPosition();
        };
        })(window);
        
        $('#pic1').stopAtTop();
        $('#pic2').stopAtTop();
        $('#pic3').stopAtTop();
        $('#form').stopAtTop();
