var begin_entered=false;
var zoomed_image=false;
$(document).ready(function(){
	if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
	}
	$('#text_container').html(direction_text)
	$('#begin_btn').off('click').on('click',function(){
		
			begin_entered=true
			$('#begin_page').hide();
			setTimeout(function(){$('#text_container').hide()
				$('#text_container,#heading_text,#responsive_container,#restart').fadeIn(300);resizeApp();
				$('.hotspot').attr('aria-hidden','false');
			},500);
			
			resizeApp();
			set_tab();
			if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
				$('#main_container').removeAttr('role').attr('aria-hidden','false');;
			}else{
				$('#main_container').attr('role','application');
			}
			$('#linkId').attr('href','#restart');
	})
	$('.hotspot').off('click').on('click',function(e){
			var curr_id=e.target.id.split('_')[1];
			//$('#toggle_'+curr_id).hide();
			$('.hotspot_dummy').hide();
			$('.label_class').hide();
			
			
			//$('.dummy_popup').attr('aria-hidden','false')
			//$('#heading_text').css('visibility','hidden');	\\\\started
			$('#text_container').css('visibility','hidden');
			var idSelected = Number($(e.target).attr('id').split('toggle_')[1]);
			/* $('#heading_text').fadeOut(function() {
					$(this).html(data[0].description[idSelected-1]).fadeIn(500);
					$('#heading_text').attr('aria-label',$('#heading_text').text());
			}); */
			$('#heading_text').hide();
					$('#heading_text').html(data[0].heading[idSelected-1]).show()//.fadeIn(500);
					$('#heading_text').attr('aria-label',$('#heading_text').text());
					
					$('#heading_description').html(data[0].description[idSelected-1]).fadeIn(500);
					$('#heading_description').attr('aria-label',$('#heading_description').text());
		
			switch(idSelected)
			{
				case 1: 
				{
					animation(69, -265, '178%', '178%', 'imgDiv')
					break;
				}
				case 2: 
				{
					animation(-155, -320, '195%', '195%', 'imgDiv')
					break;
				}
				case 3: 
				{
					animation(-405, -330, '205%', '205%', 'imgDiv')
					break;
				}
				case 4: 
				{
					animation(-90,-270, '125%', '125%', 'imgDiv')
					break;
				}
				
		
			}
	zoomed_image=true;
			
														////ended
			$('#label_'+curr_id).show();
			if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
				setTimeout(function(){
					$('.label_class').attr('tabindex','0').focus().css('outline','0px solid');
				},10);
			}
			setTimeout(function(){
				if(!( navigator.userAgent.match(/Android/i) )){
					$('#focus_guard_1').focus();
				}
				else {$('#heading_text').focus();}
			},200);
			setTimeout(function(){
				$('.hotspot').fadeOut();
				$('.reset-btn').fadeIn();
				//$('.hotspot').removeAttr('aria-label')
			},100);
			/* if(!( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))){
				$('#arrow_'+e.target.id.split('_')[1]).show();
			} */
			
	});
	function animation(argTop, argLeft, argWidth, argHeight, obj)
	{
		$('.'+obj).animate({
			   top: argTop,
			   left: argLeft,
			   height: argHeight,
			   width: argWidth
		}, 500,function(){
			//$('#focus_guard_1').focus();
			//$('.reset-btn').fadeIn();
			//set_tabindex();
		});
		
	}
/*  $(document).keyup(function(){
	console.log(document.activeElement);
  //$("input").css("background-color", "pink");
  
});  */
$('.reset-btn').off('click').on('click',function(e){

	if(e.type=="keyup" && e.keyCode !=13){
			return  true;
	}
	zoomCounter = 0;

	$('#heading_text').html(data[0].previewtext).hide();
			
	animation(0, 0, 665, 410, 'imgDiv')


zoomed_image=false;
	setTimeout(function(){
		$('.hotspot').fadeIn();
	 },1000)
	 setTimeout(function(){
		$('#text_container').css('visibility','visible')
		$('#heading_text').attr('aria-label',$('#heading_text').text()).fadeIn();
	 },500)
	 $("#heading_description").hide();
	  $('.reset-btn').fadeOut();
	  //$('.reset-btn').removeClass('tab_index').removeAttr('tabindex');
	  //$('.hotspot').attr('aria-hidden','true');
	  $('.hotspot').removeAttr('aria-hidden');
		setTimeout(function(){
			if(!( navigator.userAgent.match(/Android/i) )){
					$('#focus_guard_1').focus();
			}
		},200);
		
})
	$('#restart').off('click').on('click',function(e){
		begin_entered=false;
		$('#begin_page').fadeIn();
		$('#text_container,#heading_text,#responsive_container,#restart').hide()
		$('.imgDiv').css({"left":"0px","top":"0px","width":"665px","height":"410px"})//.fadeIn();
		zoomed_image=false;
		$('.hotspot').show();
		$('.hotspot').attr('aria-hidden','true');
		$(".popupContainer").hide();
		$(".reset-btn").hide();
		$('#text_container').css('visibility','visible');
		$('#heading_text').html(data[0].previewtext).css('visibility','visible');
		$("#heading_description").hide();
		resizeApp();
		set_tab();
		setTimeout(function(){
			$('#begin_focus').focus();
		},200);
		$('#linkId').attr('href','#begin_btn');
	})
	setTimeout(function(){
			resizeApp();
		},2000);
	
	set_tab();
	
	
	
	
	
	$('.label_content').on('focus',function(){
		$('#text_container').removeAttr('role');
			$('.label_class').removeAttr('tabindex')//.focus();
	})
	$('.hotspot').on('focus',function(){
		if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
			setTimeout(function(){
				$('.hotspot').attr('aria-hidden','false')
			},10);
		}
		
	})
	$('#begin_focus').on('focus',function(){
		$('.tab_index').eq(1).focus();	
	})
	$('#begin_end_focus').on('focus',function(){
		$('.tab_index').eq(1).focus();
	})
	$('.dummy_popup').on('focus',function(){
		$('.label_heading').focus();
		setTimeout(function(){
			$('.dummy_popup').attr('aria-hidden','true')
		},10)
	});
	
	$('#hotspot_focus_guard_1').on('focus',function(){
		setTimeout(function(){
			$('#toggle_1').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})
	
	$('#hotspot_focus_guard_2').on('focus',function(){
		setTimeout(function(){
			$('#toggle_2').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})
	
	$('#hotspot_dummy_3').on('focus',function(){
		setTimeout(function(){
			$('#toggle_3').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})

	$('#hotspot_dummy_4').on('focus',function(){
		setTimeout(function(){
			$('#toggle_4').focus().attr('role','button')
			$('#toggle_4').focus().attr('aria-label','Hotspot')
			$('.hotspot_dummy,.dummy_popup').attr('aria-hidden','true')
		},5)
	})
	/* $('#hotspot_dummy_3').on('focus',function(){
		setTimeout(function(){
			$('#toggle_3').focus().attr('role','button')
			$('#toggle_3').focus().attr('aria-label','Hotspot')
			$('.hotspot_dummy,.dummy_popup').attr('aria-hidden','true')
		},5)
	}) */
	
	 $('#heading_text').on('focus',function(){
		setTimeout(function(){
			$('.hotspot').attr('aria-hidden','false')
		},100)
	}) 
	$("#begin_container,#image_container").mouseenter(function(){
		if(!begin_entered) $("#begin_container").attr("title","Water Flow");
  		else $("#image_container").attr("title","Water Flow");
	});
	
	$("#begin_container,#image_container").mouseleave(function() {
  		$("#begin_container,#image_container").removeAttr('title');
	});
	
	
	$('#focus_guard_1').on('focus',function(){
		setTimeout(function(){
			if(zoomed_image){
				$('.tab_index').eq(2).focus();
				//$('.reset-btn').addClass('tab_index').attr('tabindex','0');
			}
			else{ $('.tab_index').eq(1).focus();}
		},200)
			$('#main_container').removeAttr('role');
	})
	$('#focus_guard_2').on('focus',function(){
		$('.tab_index').eq(0).focus();
	})
	
	$('#text_container').attr('aria-label',$('#text_container').text());
	$('#heading_text').attr('aria-label',$('#heading_text').text())
	
document.body.onkeyup = function(e){
		if(e.keyCode == 32 || e.keyCode == 13){
			e.preventDefault(e);
			if(e.target.id!='label_head_1'||e.target.id!='label_head_2'||e.target.id!='label_head_3'){
				$('#'+e.target.id).trigger('click');
				$('#'+e.target.id).focus();
			}
			
		}
		
	}

});
window.onresize = function() {
    resizeApp();console.log('0')
}

function set_tab(){
	if(begin_entered==false){
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#begin_container').addClass('tab_index');
		$('#begin_btn').addClass('tab_index');
		$('#begin_focus,#begin_end_focus').addClass('tab_index');
	}else{
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#text_container').addClass('tab_index');
		$('#heading_text').addClass('tab_index');
		$('#heading_description').addClass('tab_index');
		$('.hotspot').addClass('tab_index');
		$('.label_heading').addClass('tab_index');
		$('.label_content').addClass('tab_index');
		$('.close_button').addClass('tab_index');
		$('.reset-btn').addClass('tab_index');
		$('#restart').addClass('tab_index');
		$('#focus_guard_1,#focus_guard_2,.dummy_popup,.hotspot_dummy').addClass('tab_index');
	}
	$('.tab_index').each(function(){
    		$('.tab_index').attr('tabindex','0');
	});
}
