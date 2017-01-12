// $.extend({
// 	sayHello:function(name){
// 		console.log('hello' + ' '+(name ? name : 'nake') + '!');
// 	}
// })
// $.extend({
// 	log:function(message){
// 		var now = new Date(),
// 			y = now.getFullYear(),
// 			m = now.getMonth()+1,
// 			d = now.getDate(),
// 			h = now.getHours(),
// 			min = now.getMinutes(),
// 			s = now.getSeconds(),
// 			time = y + '/'+ m + '/' + d + '/' + h + '/' +'0'+ min + '/' + s;
// 		console.log(time + '\n' + 'myapp' + message);

// 	}

// });
// $.fn.myplugn = function(options){
//     var defaults = {
//     	'color':'red',
//     	'fontSize':'20px'
//     }
//     var setting  = $.extend({},defaults,options);
//     return this.css({
//     	'color':setting.color,
//     	'fontSize':setting.fontSize
//     })
//     return this.each(function(){
//     	$(this).append(''+ $(this).attr('href'));
//     })
// }
;(function($,window,undefined){
    var Beautifier = function(ele,opt){
        this.$element = ele;
        this.defaults = {
            'color':'red',
            'fontSize':'14px',
            'textDecoration':'none'
        },
        this.options = $.extend({},this.defaults,opt);
    }
    Beautifier.prototype = {
        beautify:function(){
            return this.$element.css({
                'color':this.options.color,
                'fontSize':this.options.fontSize,
                'textDecoration':this.options.textDecoration
            });
        }
    }
    $.fn.myplugn = function(options){
        var beautifier = new Beautifier(this,options);
        return beautifier.beautify();
    }
})(jQuery,window);