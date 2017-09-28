
$(document).ready(function(){

$('.downarrow').click(function(){

$('#box').slideToggle();

})


});
 var app=angular.module('myapp',[]);
 app.controller('privatecontroller',function($scope,$http){

$http.get('data.json').then(function(res){

$scope.Entity=res.data.info;
$scope.data=$scope.Entity[0];

});

$http.get('message.json').then(function(res){

$scope.mesdata=res.data.mes;
console.log($scope.mesdata);

})
$scope.HeadInfo=function(id){
	 document.getElementById('container').style.display= "block";

$scope.data=$scope.Entity[id];
console.log($scope.data);

}

 });

