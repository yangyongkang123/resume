// JavaScript Document
//点击消息页面
	$(function (){
		var i=$('.hot .spec_fz').index();
		$(this).eq(i).click(function() {
			$('.indxe').css('display', 'none');
			$('.index_sousuo').css('display', 'block');
		});
	});