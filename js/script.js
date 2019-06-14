$(document).ready(function(){
	$("#two,#msgBox,#boxShadow,#three,#redBox,#four,#boxShadow1,#new").hide();
	
	$("#new").show(5000);
	
	$("#new").hover(function(){
		$(this).css("cursor","pointer");
	});
	
	$("#new").click(function(){
		$("#two,#msgBox,#three,#redBox,#four,#boxShadow1,#new").show();
	});
	
	$("#text").hover(function(){
		$(this).css("cursor","pointer");
	});	
	
	$("#text").click(function(){
		$("#boxShadow").show();
	});
	
	$("#boxShadow").hover(function(){
		$(this).css("cursor","pointer");
	});
	
	$("#boxShadow").click(function(){
		$("#two,#msgBox,#boxShadow,#three,#redBox,#four,#boxShadow1").hide();
	});
});