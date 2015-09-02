
$(document).ready(function(){

$.get("http://localhost/foodbankMuckaround/data/foodbanksArray.txt", function(data) {
    $.each(data, function(key, value){
        console.log(key+" : "+value);
		
		console.log("JSON WORKED");
    });
});

});
