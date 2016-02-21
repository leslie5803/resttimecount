;(function(){
	"use strict";
	window.Rest = function(elem,options){
		var btn = document.querySelector('#'+elem) || document.querySelector('.' + elem);
		var c;
		var flag = false;
		var count = function(){
			options.callback();
			c = setInterval(function(){
				btn.disabled = !flag;
				options.time--;
				btn.innerHTML = options.time + '秒后重新发送';
				if(!options.time){
					clearInterval(c);
					btn.innerHTML = '发送验证码';
					btn.disabled = flag;
					options.time = options.time;
				}
			},1000);

			return c;
		}

		if(!btn.classList.contains('press')){
			if(window.addEventListener){
				btn.addEventListener('click',count,false);
			}else{
				btn.attachEvent('onclick',count);
			}
		}
	}
})();