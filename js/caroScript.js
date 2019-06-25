$(document).ready(function(){

	$.ajax({
		dataType: "json",
		url: "json/carouselTest.json",
		type:"get",
		catch:false,
		success:function(data){
			var results=data.slide_items;

			// console.log(results);
			for(var i=0;i<results.length;i++){
				$("#img"+i).attr("src",results[i].img);
				$("#caption"+i).html(results[i].description);
			}
		}
	});

});

// Another method fro specific value 
			// results.forEach(function(result){
			// 	// console.log(results[1].description);
			// 	$("#img1").attr("src",results[0].img);
			// 	$("#caption1").html(results[0].description);
			// });

