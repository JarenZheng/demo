$(function(){
	/* 帮助中心 点击自身隐藏自身，点击其它只显示点击的对象，其它隐藏 */
	$('.view-tab').find('.view-info:first').show().attr('on',true);
	$('.view-tab').find('.iconfont:first').html('&#xe625;');
	$('.view-tab').find('.view-list').each(function(){
		var num = $(this).parent('div').index();
		$(this).on('click',function(){
			if($(this).next().attr('on') == 'true')
			{
				$('.view-tab').find('.iconfont').html('&#xe61f;');
				$(this).next().hide();
				$(this).next().attr('on',false)
			}else{
				$('.view-info').hide().attr('on',false);
				$('.view-tab').find('.iconfont').html('&#xe61f;');
				$(this).next().show();
				$(this).find('.iconfont').html('&#xe625;');
				$(this).next().attr('on',true);
			}
		});
	});
	$(window).scroll(function(){
		/* 显示隐藏 */
		var top = $(this).scrollTop();
        if (top > 200) {
            $(".goTop").css("display", "block");

        } else {
            $(".goTop").css("display", "none");
        }

        var top1 = $(this).scrollTop();
        var $clear = $('.jq-clear');
        var $fixed = $('.jq-fixed').height();
        if (top1 > $clear.height()) {
            $clear.hide();
            $('.fixed-top').css({ 'padding-top': $clear.height() + $fixed + 'px' });
            $('.jq-fixed').addClass('navbar-fixed-top');
        } else {
            $clear.show();
            $('.fixed-top').css({ 'padding-top': '0px' });
            $('.jq-fixed').removeClass('navbar-fixed-top');
        }
	});
	/* 返回顶部 */
    $(".goTop").click(function () {
        var sc = $(window).scrollTop();
        $('body,html').animate({ scrollTop: 0 }, 200);
    });
	
	$('.view-info-p').each(function(){
		var $html = $(this).find('p').html();
		if($html == ''){
			$(this).remove();	
		}
	});
	
	/* 活动hover替换 */
	$('.btn-img').find('img').hover(function(){
		$('.btn-img').find('.btn-imgB').show();	
		$('.btn-img').find('.btn-imgA').hide();
	},function(){
		$('.btn-img').find('.btn-imgB').hide();
		$('.btn-img').find('.btn-imgA').show();	
	});	
	$('.btn-imgA').find('img').hover(function(){
		$('.btn-imgA').find('.btn-imgB').show();	
		$('.btn-imgA').find('.btn-imgA').hide();
	},function(){
		$('.btn-imgA').find('.btn-imgB').hide();
		$('.btn-imgA').find('.btn-imgA').show();	
	});	
})