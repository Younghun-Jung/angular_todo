angular.module('todo').directive('todoTitle', function() {
    return {
        templateUrl: './template/todoheader.tpl.html'
    }
})

angular.module('todo').directive('todoForm', function() {
    return {
        templateUrl: './template/todoform.tpl.html'
    }
})

angular.module('todo').directive('todoItem', function() {
    return {
        templateUrl: './template/todoitem.tpl.html'
    }
})

angular.module('todo').directive('todoFilter', function() {
    return {
        templateUrl: './template/todofilter.tpl.html'
    }
})
