//多级下拉菜单
$(".nav li").mouseenter(function(event) {

	var winW = $(window).width();/*科室窗口的宽度*/
	var liW = $(this).offset().left+238;
	if (winW-liW < 238) {

		$(".nav dl dl").css("left","-238px");
	}else{

		$(".nav dl dl").css("left","238px");
	}
	$(this).find("a:first").addClass('nav_liCur');
	$(this).find("dl:first").slideDown("fast");

});

$(".nav li").mouseleave(function(event) {

	$(this).find("a:first").removeClass('nav_liCur');
	$(this).find("dl:first").slideUp("fast");

});

$(".nav dd").mouseenter(function(event) {

	$(this).find("a:first").addClass('nav_dlCur');
	$(this).find("dl:first").show();
	

});

$(".nav dd").mouseleave(function(event) {

	$(this).find("a:first").removeClass('nav_dlCur');
	$(this).find("dl:first").hide();
});



// 回到顶部
$(window).scroll(function(event) {
	var winH = $(window).height();
	var scrollH = $("body,html").scrollTop();

	if (scrollH > winH) {
		$(".to_top").fadeIn();
	}else {
		$(".to_top").fadeOut();
	}
});

$(".to_top,.kefu_toTop").click(function(event) {
	$("body,html").animate({scrollTop:0},500);
});












