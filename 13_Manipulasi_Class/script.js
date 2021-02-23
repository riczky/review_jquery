$(document).ready(function(){
	$('#kelas1').click(function(){
		$('h3, p').addClass('huruf');
		$('h3').addClass('header1');
	});

	$('#kelas2').click(function(){
		$('h3, p').removeClass('huruf');
		$('h3').removeClass('header1');
	});

	$('#kelas3').click(function(){
		$('h3, p').toggleClass('huruf');
		$('h3').toggleClass('header1');
	});
	
	$('#kelas4').click(function(){
		$('#kelas4, #kelas5, #kelas6').addClass('tombol1 tombol2 tombol3');
	});

	$('#kelas5').click(function(){
		$('#kelas4, #kelas5, #kelas6').removeClass('tombol1 tombol2');
	});

	$('#kelas6').click(function(){
		$('#kelas4, #kelas5, #kelas6').toggleClass('tombol2 tombol3');
	});	

	$('ul').mouseover(function(){
		$('li').removeClass('list');
	}).mouseleave(function(){
		$('li').addClass('list');
	});
});