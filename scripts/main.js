$(document).ready(function() {
});


function Report($scope){
	$(".topbar").children(":eq(2)").addClass("active");
	$scope.showReport1 = false;
	$scope.showReport = function (num) {
		$("#report-modal"+num).modal();
	};
	$scope.showImage = function (num) {
		$("#metro6-image").attr("src", "images/metro6/photo"+num+".jpg");
		$("#image-modal").modal();
	};
}

function Home($scope){
	$(".topbar").children(":eq(0)").addClass("active");
}

function Work($scope){
	$(".topbar").children(":eq(3)").addClass("active");
	$('#myCarousel').carousel({interval:false});
}
function See($scope){
	$(".topbar").children(":eq(1)").addClass("active");
}
function Achieve($scope){
	$(".topbar").children(":eq(4)").addClass("active");
}
function smartScroll(){

}
