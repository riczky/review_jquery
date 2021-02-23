$(document).ready(function(){
	$('h3').css('border', '5px double #999');

	$('body').css({
		'background':'#fdfdfd', 
		'box-shadow':'0px 0px 10px #999 inset',
		'padding':'20px',
		'font-family':'arial'
	});

	$('p').css({
		'color':'#ccc', 
		'font-style':'italic'
	});

	$('#satu').mouseover(function(){
		$(this).css('box-shadow', '0px 2px 10px -3px blue');
	}).mouseleave(function(){
		$(this).css('box-shadow', '0px 0px 0px 0px transparent');
	});

	$('#dua').click(function(){
		$('p').css({
			'color':'blue',
			'font-style':'normal'
		});
	});
});