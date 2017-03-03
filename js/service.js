angular.module('todo').factory('todoStorage', function() {
    var TODO_DATA = 'TODO_DATA';

    //Handling Data
    var storage = {
        todos: [],
        _saveToLocalStorage: function(data) {
            // save data on localStorage and convert object to String
            localStorage.setItem(TODO_DATA, JSON.stringify(data));
        },
        _getFromLocalStorage: function() {
            //get data from LocalStorage and return object
            return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
        },
        get: function() {
            // copy data on localstroage to todos array
            angular.copy(storage._getFromLocalStorage(), storage.todos);
            return storage.todos;
        },
        add: function(title) {
            // create new todo
            var newTodo = {
                id: storage.todos.length,
                title: title,
                createdAt: Date.now(),
                completed: false
            };
            // push into todos array
            storage.todos.push(newTodo);
        },
        update: function() {
            storage._saveToLocalStorage(storage.todos);
        },
        remove: function(idx) {
            // remove todo matched with idx
            storage.todos.forEach(function(item, index, array) {
                if(index === idx) {
                    storage.todos.splice(idx, 1);
                    storage._saveToLocalStorage(storage.todos);
                }
            })
        }
    }
    return storage;
})
