var app = angular.module('app', []);

app.controller('IndexCtrl', function($scope){
	//$scope.hi = 'hello';

	$scope.todos = [
	{
		todo: '빨래',
		done: false
	},
	{
		todo: '설거지',
		done: false
	},
	{
		todo: 'js공부',
		done: false
	},
	];

	$scope.newTodo = '';

	$scope.addTodo = function() {
		$scope.todos.push({
			todo: $scope.newTodo,
			done: false
		})
	$scope.newTodo = '';
	}

	$scope.done = function(todo) {
		todo.done = !todo.done;
	}


});





/*
var $input = $('input');
var $p = %('p');

$input.on('keyup', function(evt){
	var val = $input.value;

	$p.text(val);
});
*/