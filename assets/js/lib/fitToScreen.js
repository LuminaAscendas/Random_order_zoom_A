
var cont = document.getElementById('responsive_container');
var	cont_1 = document.getElementById('begin_page');
var isWebkit = 'webkitRequestAnimationFrame' in window;
var scale = 1;

function resizeApp(){
	if(!begin_entered){
		var winWidth = $("#begin_page").width();
		var winHeight = $("#begin_page").height();
		var appWidth = cont_1.offsetWidth;
		var appHeight = cont_1.offsetHeight;	
		winWidth = window.innerWidth-100; //retrieve current window width
		winHeight = window.innerHeight;
		if(winWidth-60 < appWidth || winHeight-60 < appHeight)
        {
			if(winWidth >200) scale = (((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight))-0.01//-0.15; //scaling
			
        }
            else {
                
                scale=1;
            }
			
			cont_1.style.msTransformOrigin = '0 0';	
			cont_1.style.msTransform = "scale("+scale+","+scale+")";
			cont_1.style.TransformOrigin = '0 0';	
			cont_1.style.Transform = "scale("+scale+")";
			cont_1.style.webkitTransformOrigin = '0 0';
			cont_1.style.webkitTransform = "scale("+scale+")";
			cont_1.style.MozTransformOrigin = '0 0';	
			cont_1.style.MozTransform = "scale("+scale+")";
			$('body').css('height',(bodyheight)+'px');
			$('body').css('background-size','100% '+(bodyheight)+'px');
			//$('#main_container').css('height',($("#begin_page").height()*scale)+$("#text_container").height());
			$('#main_container').css('width',$("#begin_page").width()*scale);
			
		
}else{
		cont = document.getElementById('responsive_container');
		var winWidth = $("#main_container").width();
		var winHeight = $("#main_container").height();
		var appWidth = cont.offsetWidth;
		var appHeight = cont.offsetHeight;	
		winWidth = window.innerWidth-100; //retrieve current window width
		winHeight = window.innerHeight; //retrieve current window height
	  	if(winWidth-60 < appWidth || winHeight-60 < appHeight)
        {console.log(winWidth,appWidth)
			if(winWidth >200)scale = (((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight))-0.01//-0.15; //scaling
	   
        }
            else {
                
                scale=1;
            }
			
			cont.style.msTransformOrigin = '0 0';	
			cont.style.msTransform = "scale("+scale+","+scale+")";
			cont.style.TransformOrigin = '0 0';	
			cont.style.Transform = "scale("+scale+")";
			cont.style.webkitTransformOrigin = '0 0';
			cont.style.webkitTransform = "scale("+scale+")";
			cont.style.MozTransformOrigin = '0 0';	
			cont.style.MozTransform = "scale("+scale+")";
			var appWidth = cont.offsetWidth * scale;
			var bodyheight = cont.offsetHeight*scale;
			var bodywidth = cont.offsetWidth*scale;
			var winWidth = window.innerWidth;
			$('body').css('height',(bodyheight)+'px');
			$('body').css('background-size','100% '+(bodyheight)+'px');
			//document.getElementById('main_container').style.left = ((winWidth - appWidth )/2)+'px';
			//$('#main_container').css('height',($("#responsive_container").height()*scale)+$("#text_container").height());
			$('#main_container').css('width',$("#responsive_container").width()*scale-0.01);
	
	
	
}
	
	

  
	
	
	
		

			//$('#responsive_container').css('height',$("#main_container").height()*scale);
			


	
		
	console.log(scale)

}


	

resizeApp();

