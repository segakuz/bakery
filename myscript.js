
$(function(){
	$('a.icon').click(function(){
		$('nav').toggleClass('responsive');
	});
	$('.slide i:first-child').click(function(event) {
		$(this).css({'color': '#d8bba3', 'border': '2px solid #d8bba3', 'cursor': 'default'});
		$('.slide i:last-child').css({'color': '#56534c', 'border': '2px solid #56534c', 'cursor': 'pointer'});
		$('.group1').css('display', 'inline');
		$('.group2').css('display', 'none');
	});
	$('.slide i:last-child').click(function(event) {
		$(this).css({'color': '#d8bba3', 'border': '2px solid #d8bba3', 'cursor': 'default'});
		$('.slide i:first-child').css({'color': '#56534c', 'border': '2px solid #56534c', 'cursor': 'pointer'});
		$('.group1').css('display', 'none');
		$('.group2').css('display', 'inline');
	});
});