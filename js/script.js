// event pd saat link di klk
$('.page-scroll').on('click', function(e){

	// mengambil href
	var tujuan = $(this).attr('href');
	
	// tangkap element ybs
	var elemenTujuan = $(tujuan);

	// animasi scroll saat klik nav
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeOutExpo');



	e.preventDefault();

});


// parallax
// about
$(window).on('load', function(){
	$('.pLeft').addClass('pMuncul');
	$('.pRight').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

// JUMBOTRON
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
	});

// PORTFOLIO Landing Element
	if (wScroll > $('.portfolio').offset().top -200) {
		$('.portfolio .img-thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .img-thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));

		});
	}

});