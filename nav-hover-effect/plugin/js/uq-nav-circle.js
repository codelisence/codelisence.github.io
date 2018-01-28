$(document).ready(function(){
	$(".uq-nav-toggle").click(function(){
		$(this).toggleClass("uq-nav-toggle-active");
		$(".uq-nav-items").slideToggle(300);
	});
});