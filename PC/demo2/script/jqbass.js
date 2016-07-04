function clearMeau(self,parent)
{
	self.stop().animate({"height":"0px"},400,function(){
		self.hide();
	});
	parent.find('span').removeClass('three-bt').addClass('three-bm');
}
function showtab(el,myclass,list,parents,nextclass){
	var num = el.index();
	el.addClass(myclass).siblings(list).removeClass(myclass);
	el.parents(parents).find(nextclass).eq(num).show().siblings(nextclass).hide();
}
$(function(){
	$('.jqTip').find('a:first').hover(function(){
		$('.tipbox').fadeIn();
	},function(){
		$('.tipbox').fadeOut();
	})
	/* Nav strat */
	var that = null;
	$('.navHover').find('a').each(function(){
		if($(this).hasClass('activeA'))
		{
			that = $(this).index();
			switch(that)
			{
				case 2:
				$('.tabLine').stop().animate({"left":"120px","width":"120px"},400);
				break;
				case 3:
				$('.tabLine').stop().animate({"left":"240px","width":"120px"},400);
				break;
				case 4:
				$('.tabLine').stop().animate({"left":"360px","width":"120px"},400);
				break;
				default:
				$('.tabLine').stop().animate({"left":"0px","width":"120px"},400);
				break;
			}
		}
	});
	$('.navHover').find('a').hover(function(){
		var num = $(this).index();
		$(this).addClass('activeA').siblings('a').removeClass('activeA');
		switch(num)
		{
			case 2:
			$('.navHover').find('span').removeClass('three-bm').addClass('three-bt');
			$('.meau').show().stop().animate({"height":"135px"},400);
			$('.tabLine').stop().animate({"left":"120px","width":"120px"},400);
			break;
			case 3:
			$('.tabLine').stop().animate({"left":"240px","width":"120px"},400);
			break;
			case 4:
			$('.tabLine').stop().animate({"left":"360px","width":"120px"},400);
			break;
			default:
			$('.tabLine').stop().animate({"left":"0px","width":"120px"},400);
			break;
		}
		if(num != 2)
		{
			clearMeau($('.meau'),$('.navHover'));
		}
	},function(){
		$(this).removeClass('activeA');
		$('.navHover').find('a').eq(that-1).addClass('activeA');
		switch(that)
		{
			case 2:
			$('.tabLine').stop().animate({"left":"120px","width":"120px"},400);
			break;
			case 3:
			$('.tabLine').stop().animate({"left":"240px","width":"120px"},400);
			break;
			case 4:
			$('.tabLine').stop().animate({"left":"360px","width":"120px"},400);
			break;
			default:
			$('.tabLine').stop().animate({"left":"0px","width":"120px"},400);
			break;
		}
	});
	$('.meau').mouseleave(function(){
		clearMeau($(this),$('.navHover'));
    });
    /* Nav end */

	/* banner strat */
	var banner_i = 1;
	var banner_time = 600;
	var banner_max = $('.bannerList>a').length;
	var banner_tab = '';
	
	for(var i=1;i<banner_max+1;i++){
		banner_tab += "<span></span>";	
	}
	$('.bannerTab').append(banner_tab);
	
	$('.bannerTab>span:first').attr('id','bActive');
	$('.bannerList>a:first').css({'opacity':1,'z-index':1}).siblings('a').css({'opacity':0,'z-index':0});
	
	function BannerTab(){
		$('.bannerList>a').eq(banner_i).stop().animate({'opacity':1,'z-index':1}).siblings().stop().animate({'opacity':0,'z-index':0},banner_time);
		$('.bannerTab>span').eq(banner_i).attr('id','bActive').siblings('span').attr('id','');
		banner_i++;
		if(banner_i >= banner_max)
		{
			banner_i = 0;	
		}
	}
	times = setInterval(BannerTab,3000);
	$('.bannerTab>span').hover(function(){
		clearTimeout(times);
		banner_i = $(this).index();
		BannerTab();
	},function(){
		times = setInterval(BannerTab,3000);	
	});
	$('.bannerList>a').hover(function(){
		clearTimeout(times);	
	},function(){
		times = setInterval(BannerTab,3000);	
	});
	/* banner end */

	//向上滚动
	var $this = $(".remindBox");
	var scrollTimer;
	$this.hover(function () {
		clearInterval(scrollTimer);
	}, function () {
		scrollTimer = setInterval(function () {
			scrollInfo($this);
		}, 2000);
	}).trigger("mouseout");
	
	function scrollInfo(obj) {
		var $self = obj.find("nav:first");
		var lineHeight = $self.find("a:first").height(); //获取行高 
		$self.animate({ "margin-top": -lineHeight + "px" }, 600, function () {
			$self.css({ "margin-top": "0px" }).find("a:first").appendTo($self); //appendTo能直接移动元素而不是复制，被appendto的元素位置发生变化
		})
	}

	$('.jqDay').find('a').hover(function(){
		showtab($(this),'dayActive','a','.jqUser','.user-top');
	});

	$('.view-nav').find('a').click(function(){
		showtab($(this),'viewActive','a','.view-box','.view-info');
	});

	$('.subNavList').find('a').click(function(){
		showtab($(this),'subActive','a','.view-box','.tab-blank');
	});

	var $scale = $('.scale-num').html();
	$('.scale').find('span').animate({'width':$scale},1000);
	$('.mb-scale').find('span').animate({'width':$scale},1000);

	/* 全选 */
	$("[name=ck]").is(":checked");
	$(".ckall").click(function(){
		var oSelect = $(this).prop("checked");
		if(oSelect)
		{
			$("[name=ck]").prop("checked",true);	
		}else
		{
			$("[name=ck]").prop("checked",false);	
		}	
	});	
	
	$("[name=ck]").click(function(){
		var oSelect = true;
		$("[name=ck]").each(function()
		{
			if(!this.checked)
			{
				oSelect = false;	
			}	
		});	
		$(".ckall").prop("checked",oSelect);
	});

	/* 验证 */
	$('.lg-form').validationEngine({ 
	  promptPosition: 'bottomLeft', 
	  scroll: false,
	  maxErrorsPerField:'1',
      addPromptClass: 'formError-noArrow formError-text',
      custom_error_messages: {
	    '#pwd': {
	        'minSize': {
	          'message': '* 密码不得少于 6 位，建议使用英文与数字组合'
	        }
	    }
	  }
	}); 
	$.validationEngineLanguage.allRules.ajaxVerify={
	  url: '#',
	  extraData: 'name=eric',
	  alertTextOk: '<strong style="color:#090;">√<strong>',
	  alertText: '<strong>×</strong>',
	  alertTextLoad: ''
	};
	//判断浏览器是否支持 placeholder属性
	/*function isPlaceholder(){
	    var input = document.createElement('input');
	    return 'placeholder' in input;
	}
	if(!isPlaceholder()){
		//把input绑定事件 排除password框
		$('input').not("input[type='password']").each(function(){
			if($(this).val() == '' && $(this).attr("placeholder") != '')
			{
				$(this).val($(this).attr("placeholder"));
				$(this).focus(function(){
		            if($(this).val()==$(this).attr("placeholder"))
		            {
		              $(this).val("");
		            }
		        });
		        $(this).blur(function(){
		        	if($(this).val()=="") 
		            {
		              $(this).val($(this).attr("placeholder"));
		            } 
		        });
			}
		});
		//对password框的特殊处理1.创建一个text框 2获取焦点和失去焦点的时候切换
		var pwdField = $("input[type=password]");
		var pwdVal  = pwdField.attr('placeholder');
		pwdField.after('<input id="pwdPlaceholder" type="text" value='+pwdVal+' autocomplete="off" class="pct92 h35" tabindex="2"/>');
		var pwdPlaceholder = $('#pwdPlaceholder');
		pwdPlaceholder.show();
		pwdField.hide();

		pwdPlaceholder.focus(function(){
			pwdPlaceholder.hide();
			pwdField.show();
			pwdField.focus();
		});
		pwdField.blur(function(){
			if(pwdField.val() == '') {
			   pwdPlaceholder.show();
			   pwdField.hide();
			}
		});
    }*/
});