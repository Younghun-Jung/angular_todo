angular.module('todo').controller('TodoCtrl', function($scope, todoStorage) {
    $scope.todos = todoStorage.get();

    $scope.remove = function(idx) {
        todoStorage.remove(idx);
    }

    $scope.addTodo = function(newTodoTitle) {
        todoStorage.add(newTodoTitle);
        // empty todoform
        $scope.newTodoTitle = "";
    }

    $scope.update = function() {
        todoStorage.update();
    }
});
