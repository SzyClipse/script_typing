"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    console.log("First entry from given API is:");
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logging(id, title, completed);
});
var logging = function (id, title, completed) {
    console.log("\n      ID        = ".concat(id, "\n      Title     = ").concat(title, "\n      Completed = ").concat(completed, "\n   "));
};
