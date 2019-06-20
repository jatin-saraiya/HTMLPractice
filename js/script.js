$(document).ready(function(){

	$.ajax({
  		dataType: "json",
  		url: "json/test.json",
  		type:"get",
  		catch:false,
  		success: function(data){
  			$(data.items).each(function(index,value){
  					// console.log(value.description);
  					$("#header").html(value.description);
  					$(".tvars").html('<b>5.TVARS</b><br>'+value.thing+'<br><b style="font-size:15px"><sup>'+value.sign+'</sup></sup><sub><span class="no">'+value.price+'</span></sub><sup class="no1">'+value.no+'</sup></b></p>');					// $("#boxShadow1").html(value.price);
  			});
  		}
	});
	

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

