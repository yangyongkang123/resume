    var t=null;
	var index=0; // 设置初始图片序号
	var speed=500; // 一幅图片切换时间
	var interval=2000; // 自动轮播图片的切换时间间隔
	var w=$('.lunbo1').width(); // 图片宽度
	var n=$('.imgs1').find('li').size(); // 图片总数(追加辅助图片之前)
	for(var i=0;i<n;i++){
		$('.btns1').append('<li>'); // 循环生成所需的按钮
	}
	var btns1=$('.btns1').find('li'); // 所有圆点
	var first=$('.imgs1').find('li').first(); // 图片列表中的第一幅图
	var last=$('.imgs1').find('li').last(); // 图片列表中的最后一幅图
	$('.imgs1').append(first.clone()); // 在图片列表最后添加上第一幅图
	$('.imgs1').prepend(last.clone()); // 在图片列表最前添加上最后一幅图
	n=$('.imgs1').find('li').size(); // 图片总数(追加辅助图片之后)
	$('.imgs1').width(w*n).css('left',-(index+1)*w+'px'); // 设置.imgs的宽度，并且根据index的设置，显示相应的图片
	setBtns(); // 根据index的设置，设置圆点的默认激活位置
	function move() { // 显示指定的图片
		$('.imgs1').animate({
			left: -(index+1)*w+'px'},
			speed, function() { // 回调函数，越界处理
			if($('.imgs1').css('left')=='-'+w*(n-1)+'px'){
				$('.imgs1').css('left','-'+w+'px');
			}
			if($('.imgs1').css('left')=='0px'){
				$('.imgs1').css('left','-'+w*(n-2)+'px');
			}
		});
		// 越界处理
		if(index==n-2){
			index=0;
		}
		if(index==-1){
			index=n-3;
		}
	}
	function setBtns() {
		btns1.eq(index).addClass('active').siblings().removeClass('active'); // 将index对应的按钮添加激活类，其他按钮去掉激活类
	}
	$('.prev1').click(function() {
		index--;
		move();
		setBtns();
	});
	$('.next1').click(function() {
		index++;
		move();
		setBtns();
	});
	btns1.click(function() {
		index=$(this).index();
		move();
		setBtns();
	});
	$('.lunbo1').hover(function() {
		clearInterval(t);
	},function() {
		t=setInterval("$('.next1').click()",interval);
	});
	$('.lunbo1').mouseout();