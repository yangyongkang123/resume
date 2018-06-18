var speed=665;
var w=$('.box2').width();	
var n=$('.imgs2').find('li').size();
function move(direction){
	$('.imgs').animate({
		left:direction+'='+w+'px'
	}, speed,function(){
		if($('.imgs2').css('left')=='-'+w*(n-1)+'px'){
			$('.imgs2').css('left','-'+w+'px');
		}
		if($('.imgs2').css('left')=='0px'){
			$('.imgs2').css('left','-'+w*(n-2)+'px');
		}
	}
	);
}
$('.prev').click(function (){
	move('+');
});
$('.next').click(function (){
	move('-');
});


		