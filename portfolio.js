$(document).ready(function() {
	console.log("hi");
	$('img').click(function(){
		console.log("hi");
		$('img').toggle('bounce',{times:3},'slow');
	});
});