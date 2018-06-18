    var a=null;
	var index2=0; // 设置初始图片序号
	var speed=500; // 一幅图片切换时间
	var interval=1000; // 自动轮播图片的切换时间间隔
	var w=$('.lunbo2').width(); // 图片宽度
	var n=$('.imgs2').find('li').size(); // 图片总数(追加辅助图片之前)
	for(var i=0;i<n;i++){
		$('.btns2').append('<li>'); // 循环生成所需的按钮
	}
	var btns2=$('.btns2').find('li'); // 所有圆点
	var first=$('.imgs2').find('li').first(); // 图片列表中的第一幅图
	var last=$('.imgs2').find('li').last(); // 图片列表中的最后一幅图
	$('.imgs2').append(first.clone()); // 在图片列表最后添加上第一幅图
	$('.imgs2').prepend(last.clone()); // 在图片列表最前添加上最后一幅图
	n=$('.imgs2').find('li').size(); // 图片总数(追加辅助图片之后)
	$('.imgs2').width(w*n).css('left',-(index2+1)*w+'px'); // 设置.imgs的宽度，并且根据index的设置，显示相应的图片
	setBtns(); // 根据index的设置，设置圆点的默认激活位置
	function move2() { // 显示指定的图片
		$('.imgs2').animate({
			left: -(index2+1)*w+'px'},
			speed, function() { // 回调函数，越界处理
			if($('.imgs2').css('left')=='-'+w*(n-1)+'px'){
				$('.imgs2').css('left','-'+w+'px');
			}
			if($('.imgs2').css('left')=='0px'){
				$('.imgs2').css('left','-'+w*(n-2)+'px');
			}
		});
		// 越界处理
		if(index2==n-2){
			index2=0;
		}
		if(index2==-1){
			index2=n-3;
		}
	}
	function setBtns2() {
		btns2.eq(index2).addClass('active').siblings().removeClass('active'); // 将index对应的按钮添加激活类，其他按钮去掉激活类
	}
	$('.prev2').click(function() {
		index2--;
		move2();
		setBtns2();
	});
	$('.next2').click(function() {
		index2++;
		move2();
		setBtns2();
	});
	btns2.click(function() {
		index2=$(this).index2();
		move2();
		setBtns2();
	});
	$('.lunbo2').hover(function() {
		clearInterval(a);
	},function() {
		a=setInterval("$('.next2').click()",interval);
	});
	$('.lunbo2').mouseout();