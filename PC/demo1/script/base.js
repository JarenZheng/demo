// JavaScript Document
$(function(){
	//tab移动
	$('.a_nav>li').hover(function(){
		var number = $(this).index();
		$('.a_nav>li').find('a').removeClass('a_active');
		$(this).find('a').addClass('a_active');
		switch(number)
		{
			case 1:
			$('.a_bghover').stop().animate({"top":"65px"},400);	
			break;
			case 2:
			$('.a_bghover').stop().animate({"top":"130px"},400);
			break;
			case 3:
			$('.a_bghover').stop().animate({"top":"196px"},400);	
			break;	
			default:
			$('.a_bghover').stop().animate({"top":"0"},400);
			break;		
		}
	});
	//nav菜单
	var timer = null;
	$('.p_navBox>li>a').each(function () {
		var number = $(this).parent().index();
		$this = $(this);
		if ($this[0].href == String(window.location)) {
			$this.addClass('p_activebtnTwo').find('.iconnav').addClass("iconnavTwo").removeClass("iconnav").show();
		}
		if (number == 0) {
			$(this).mouseover(function () {
				dothisA($('.p_subnav'), $(this));
			});
			$(this).mouseout(function () {
				dothisB($('.p_subnav'), $(this));
			});
			$('.p_subnav').mouseover(function () {
				doShow($('.p_subnav'), $(this));
			});
			$('.p_subnav').mouseout(function () {
				doHide($('.p_subnav'), $(this));
			});
		} else {
			$(this).mouseover(function () {
				$('.p_navBox>li>a').removeClass('p_activebtn').find('.iconnav').hide();
				$(this).find('.iconnav').show();
			});
			$(this).mouseout(function () {
	
				$(this).find('.iconnav').hide();
	
			});
		}
	});
	function dothisA(getNext, getClass) {
		clearInterval(timer);
		getNext.show();
		getClass.addClass('p_activebtn').find('.iconnav').show();
	}
	function dothisB(getNext, getClass) {
		timer = setTimeout(function () {
			getNext.hide();
			getClass.removeClass('p_activebtn').find('.iconnav').hide();
		}, 200);
	}
	function doShow(getNext, getClass) {
		clearInterval(timer);
		getNext.show();
		getClass.find('.iconnav').show();
	}
	function doHide(getNext, getClass) {
		timer = setTimeout(function () {
			getNext.hide();
			getClass.find('.iconnav').hide();
		}, 200);
	}
	/*$('.p_navBox>li>a').each(function () {
		$this = $(this);
		if ($this[0].href == String(window.location)) {
			$this.addClass('p_activebtn').find('.iconnav').show();
		}
	});*/
	
	//tab切换
	$(".pt_nav").find("dd>a").each(function () {
		var typeid = $(this).parent('dd').index();
		$(this).click(function () {
			$('.pt_nav>dd>a').removeClass('pt_active');
			$(this).addClass('pt_active');
			$(this).parents('.v_content').find('.pt_info').eq(typeid).show().siblings('.pt_info').hide();
		});
	});
	
	//点击渐显渐隐
	$('.t_jqlia').find('tr>td').hide();
	$('.t_lia>li>a').each(function(){
		var number = $(this).parent('li').index();
		var onOff = true;
		$(this).click(function(){
			if(onOff)
			{
				$(this).addClass('t_liactive');	
				$(this).parents('.t_jqli').next().find('tr>td').eq(number).fadeIn();
				onOff = false;	
			}else
			{
				$(this).removeClass('t_liactive');	
				$(this).parents('.t_jqli').next().find('tr>td').eq(number).fadeOut();
				onOff = true;		
			}
		});
	});
	
	//select地区 子女
	var countryList = '澳洲,本地,德国,俄罗斯,法国,韩国,荷兰,加拿大,美国,日本,瑞士,台湾,外地,西班牙,香港,新加坡,新西兰,意大利,英国,中国';
	function slCountry(panel, country) {
		$(panel).each(function () {
			var countries = countryList.split(",");
			var count = countries.length;
			var sel = $(this).attr("select");

			if (sel != "" && sel != undefined) {
				country = sel;
			}
			var str = '';
			for (var i = 0; i < count; i++) {
				str += '<option value="' + countries[i] + '"';
				if (country == countries[i]) str += ' selected';
				str += '>' + countries[i] + '</option>';
			}
			$(this).append(str);
		});
	}
	slCountry('.country', '中国');
	
	//add 档案
	$('.td_btnA').click(function () {
		var html = '';
		html += '<table class="w t_base t_ptlist">';
		html += '<tr><td class="w_15 tr pr5">爱人年龄：</td><td><input type="text" class="t_input br5 plr10 w300"/></td></tr>';
		html += '<tr><td class="w_15 tr pr5">爱人职业：</td>';
		html += '<td><label class="pr20"><input type="radio" name="sex"/>&nbsp;公务员</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;国企/事业单位</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;私企/外企白领</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;私营业主/自由职业</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;学生</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;其他</label></td>';
		html += '</tr></table>';
		$('.t_addA').append(html);
		$('.t_iconA').fadeOut();
	});
	
	var count = 0;
	$('.td_btnB').click(function(){
		count++;
		var html = '';
		html += '<table class="w t_base t_ptlist">';
		html += '<tr><td class="w_15 tr pr5">子女<span class="plr5 block">'+ count +'</span>年龄：</td><td><input type="text" class="t_input br5 plr10 w300"/></td></tr>';
		html += '<tr><td class="w_15 tr pr5">子女<span class="plr5 block">'+ count +'</span>职业：</td>';
		html += '<td><label class="pr20"><input type="radio" name="sex"/>&nbsp;公务员</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;国企/事业单位</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;私企/外企白领</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;私营业主/自由职业</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;学生</label><label class="pr20"><input type="radio" name="sex"/>&nbsp;其他</label></td>';
		html += '</tr></table><br/>';
		$('.t_addB').append(html);
		if(count >= 2)
		{
			$('.t_iconB').fadeOut();	
		}
	});
	
	//判断是否整数
	var on = true;
	$('.tdline').click(function(){
		var num = /^[1-9]\d*|0$/;
		var $value = $('.s_iedit').val();
		if(on)
		{
			$('.s_iedit').fadeIn().val('');	
			$('.s_itxt').fadeOut();
			on = false;	
		}else
		{
			if(!num.test($value)){
				alert('不是整数');
				$('.s_iedit').val('');	
			}else
			{
				$('.s_iedit').fadeOut();
				$('.s_itxt').fadeIn().html($value);	
				on = true;
			}
		}
	});
	
	//弹窗口 倒计时
	var timer = null;
	$('#showWindow').click(function () {
		$('.win_mask').show().css({ height: $(document).height() });
		$('.win_Info').show();
		$('.win_Info').css('left', ($(window).width() - $('.win_Info').outerWidth()) / 2);
		$('.win_Info').css('top', ($(window).height() - $('.win_Info').outerHeight()) / 2 + $(document).scrollTop());
		$('.win_Close').off().click(function () {
			$('.win_Info').hide();
			$('.win_mask').hide();
			clearTimeout(timer);
			$('.win_num').html('');
		});
		function jump(count) {
			timer = setTimeout(function () {
				count--;
				if (count > 0) {
					<!--$('.win_num').attr('innerHTML', count);-->
					jump(count);
					$('.win_num').html("将在 " + count + " 秒后跳转到新页面");
				} else {
					location.href = "fundView.html";
				}
			}, 1000);
		}
		jump(11);

	});
	$(window).scroll(function () {
		$('.win_Info').css('top', ($(window).height() - $('.win_Info').outerHeight()) / 2 + $(document).scrollTop());
	});
	
	//tab
	$('.f_info').hide();
	$('.f_info:first-child').show();
	$(".f_nav").find("li>a").each(function () {
		var typeid = $(this).parent('li').index();
		$(this).click(function () {
			$('.f_nav>li>a').removeClass('f_active');
			$(this).addClass('f_active');
			$(this).parents('.f_jqbox').find('.f_info').eq(typeid).show().siblings('.f_info').hide();
		});
	});	
	
	showNav('.f_navTabA','.f_navA');
	showNav('.f_navTabB','.f_navB');
	showNav('.f_navTabC','.f_navC');
	function showNav(className,parents)
	{
		$(className).find("li>a").each(function () {
			var typeid = $(this).parent('li').index();
			$(this).click(function () {
				$(''+ className +'>li>a').removeClass('f_activeTab');
				$(this).addClass('f_activeTab');
				$(this).parents(parents).find('.higlist').eq(typeid).show().siblings('.higlist').hide();
			});
		}); 
	}
	
	//带箭头提示框 淡入淡出
	$('.jq_tip').find('li').hover(function(){
		$(this).find('.tipbox').fadeIn(300);
	},function(){
		$(this).find('.tipbox').fadeOut(300);
	})
	
	//环循添加不同的class
	var className = ['cfcc954','c58b5e1','c92cf68','cc066a6','cf7774a','cfa6567'];
	$('.f_table').find('tr>td>span').each(function(){
		var index = $(this).closest('tr').index() -1;
		$(this).addClass(className[index]);
	});
});