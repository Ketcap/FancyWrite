/* global _this */ ;
(function ($, window, document, undefined) {

    var pluginName = 'Fancywrite',
        defaults = {
            delay: 50,
            /*Delay between animations Default 50"*/
            type: "letter",
            /*Default Letter by Letter But can Choose Word by word with "word" */
            anim: "opacity",
            /*Default Opacity Other Types "left" / "top" / "bottom" / "scale" /  */
            speed: 100,
            /*Animation Speed Defaut 100*/
            text: "",
            /*For text for ajax requests and text added in called div */
            clear: 0,
            /*If 1 it will clear inside selected div and write text */
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        // jQuery has an extend method that merges the 
        // contents of two or more objects, storing the 
        // result in the first object. The first object 
        // is generally empty because we don't want to alter 
        // the default options for future instances of the plugin
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        var start = new Date().getTime();
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element 
        // and this.options
        var _this = $(this.element);
        var params = this.options;
        _this.addClass("Fwrite");

        var TextArray = [];
        var size = parseInt(_this.css("font-size"));

        $(".Fwrite > span[char]").css({
            position: "relative",
        })
        if (params.text == "") {
            var text = _this.text();
            var width = _this.width() + "px";
            var height = _this.height() + "px";
            _this.text("");
        } else {

            var text = params.text;
            if (params.clear == 1) {
                _this.text("");
            }
        }
        _this.css({
            width: width,
            height: height,
        }) /*Protect width height of element because delete content*/


        switch (params.type) {
        case "letter":
            /*Split text by letter */
            TextArray = text;
            var eot = TextArray.length;
            /* console.log(TextArray); */
            break;
        case "word":
            /*Split text by word */
            TextArray = text.split(" ");
            var eot = TextArray.length;
            /* console.log(TextArray); */
            break;
        }

        function addElement(i) {
            if (i == eot) {
                return 0;
            }
            if (i == 0) {
                var delay = 0;
            } else {
                var delay = params.delay;
            }
            setTimeout(function () {
                add(i); /* Animation Function goes this line */
                addElement(++i);

            }, delay)
        }
        addElement(0);

        function add(pos) {
            if (params.type == "letter") {
                el = $("<span char='" + pos + "'>" + TextArray[pos] + "</span>");
            } else {
                el = $("<span char='" + pos + "'>" + TextArray[pos] + " </span>");
            }
            switch (params.anim) {
            case "opacity":
                /*Opacity For This Type Animation */
                $(el).css({
                    opacity: 0
                });
                _this.append(el);
                $(el).animate({
                    opacity: 1
                }, params.speed)
                break;
            case "left":
                /*Margin-Left For This Type Animation */
                $(el).css({
                    opacity: 0,
                    marginLeft: "-10px"
                })
                _this.append(el);
                $(el).animate({
                    opacity: 1,
                    marginLeft: "0px",
                }, params.speed)
                break;
            case "top":
                /* Margin-Top For This Type Animation */
                /*console.log(size)*/
                $(el).css({
                    opacity: 0,
                    top: "-" + size / 2 + "px",
                    position: "relative"
                })
                _this.append(el);
                $(el).animate({
                    opacity: 1,
                    top: "0px",
                    position: "relative",
                }, params.speed)
                break;
            case "bottom":
                /* Margin-Bottom For This Type Animation */
                $(el).css({
                    opacity: 0,
                    bottom: "-" + size / 2 + "px",
                    position: "relative"
                })
                _this.append(el);
                $(el).animate({
                    opacity: 1,
                    bottom: "0px",
                    position: "relative",
                }, params.speed)
                break;
            case "scale":
                /*Scale For This Type Animation */
                $(el).css({
                    opacity: "0",
                    fontSize: "0px",
                });
                _this.append(el);
                $(el).animate({
                    opacity: "1",
                    fontSize: size,
                }, params.speed)
                break;
            }

        }


        console.log(new Date().getTime() - start + "ms");
    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);