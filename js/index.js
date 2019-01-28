//flash
(function () {


	function  getOldNum() {

		var oldNum = $(".flash_btnCur").index(".flash_btn span");

		return oldNum;
	}

	function slider(newNum,oldNum) {
		if (newNum == oldNum) {
			return;
		}

		$(".flash_btn span").eq(newNum).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur');

		$(".flash_img li").eq(newNum).fadeIn(500);
		$(".flash_img li").eq(oldNum).fadeOut(500);
	}

	//按钮切换
	$(".flash_btn span").mouseenter(function(event) {
		var oldNum =getOldNum();
		var newNum =  $(this).index(".flash_btn span");
		slider(newNum,oldNum);
	});

	//上一张切换
	$(".flash_arrow_left").click(function(event) {
		var oldNum =getOldNum();
		var newNum;
		var last = $(".flash_btn span:last").index(".flash_btn span");


		if (oldNum != 0) {
			newNum = oldNum -1;
		}else{
			newNum = last;
		}
		slider(newNum,oldNum);
		return false;
	});


	//下一张切换
	
	$(".flash_arrow_right").click(function(event) {

		var oldNum = getOldNum();
		var newNum;
		var last = $(".flash_btn span:last").index(".flash_btn span");
		if (oldNum != last) {
			newNum = oldNum + 1;
		}else {
			newNum = 0;
		}
		slider(newNum,oldNum);
		return false;
	});

	//自动切换
	var flashAuto = setInterval(function () {$(".flash_arrow_right").click();},3000);

	$(".flash").mouseenter(function () {
		$(".flash_arrow a").fadeIn(200);
		clearInterval(flashAuto);
	});

	$(".flash").mouseleave(function () {
		$(".flash_arrow a").fadeOut(200);
		flashAuto = setInterval(function () {$(".flash_arrow_right").click();},3000);
	});
})();


//ball  切换

$(".ball li").mouseenter(function () {

	var newNum = $(this).index(".ball li");
	var oldNum;

	$(".ball li").each(function(index, el) {

		if ($(el).hasClass("ball_li"+(index)+"_cur")) {

			oldNum = index;
			return false;
		}
	});
	if (newNum != oldNum) {
		$(".ball li").eq(oldNum).removeClass("ball_li"+(oldNum)+"_cur");
		$(this).addClass("ball_li"+(newNum)+"_cur");

		$(".ball li").eq(oldNum).stop();
		$(this).stop();
		
		$(".ball li").eq(oldNum).animate({width: "167px"},500);
		$(this).animate({width: "502px"},500);
	}
});



// 关于我们about
$(".about_left").mouseenter(function(event) {
	$(this).find('p').stop();
	$(this).find('img').stop();
	$(this).find('p').animate({bottom:"0px"},1000);
	$(this).find('img').animate({width: "110%",marginLeft: "-20px",marginTop:"-10px"},1000);
});

$(".about_left").mouseleave(function(event) {
	$(this).find('p').stop();
	$(this).find('img').stop();
	$(this).find('p').animate({bottom:"-241px"},1000);
	$(this).find('img').animate({width: "100%",marginLeft: "0",marginTop:"0"},1000);
});

// about_right 切换
$(".about .btn_btnLeft a").click(function () {
	// $(".about_right li:last").prependTo('.about_right ul');
	
	var num = $(".about_right li:visible").index(".about_right li");
	var first = $(".about_right li:first").index(".about_right li");

	if (num != first) {

		$(".about_right li:visible").hide().prev().show();
	}else{

		$(".about_right li:visible").hide();
		$(".about_right li:last").show();
	} 
	
});

$(".about .btn_btnRight a").click(function () {
	// $(".about_right li:first").appendTo('.about_right ul');
	
	var num = $(".about_right li:visible").index(".about_right li");
	var last = $(".about_right li:last").index(".about_right li");
	if (num != last) {
		$(".about_right li:visible").hide().next().show();
	}else{
		$(".about_right li:visible").hide();
		$(".about_right li:first").show();
	}
	
	
});

//合作伙伴friend

$(".friend .btn_btnLeft a").click(function () {
	
	$(".friend_main_img li:first").animate({marginLeft: "-201px"},300,function () {
		$(this).appendTo('.friend_main_img');
		$(this).css({marginLeft:"0"});
	});

});

$(".friend .btn_btnRight a").click(function(event) {

	$(".friend_main_img li:last").css({marginLeft:"-201px"})
									.prependTo('.friend_main_img');

	$(".friend_main_img li:first").animate({marginLeft:"0px"},300);
});











