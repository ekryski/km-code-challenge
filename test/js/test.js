//slowing funcunit down for dramatic effect
F.speed = 100;
 
module('sortable table');
 
test('sort by date ascending', function() {
  var newTodo = F('#new-todo');
  newTodo.type('FuncUnit [enter]');
  newTodo.type('is [enter]');
  newTodo.type('awesome! [enter]');
 
  F('.todo label:contains("FuncUnit")').visible('basic assert');
  F('.todo label:contains("is")').visible('basic assert');
  F('.todo label:contains("awesome")').visible('basic assert');
 
  F('thead td.toggle:not(:checked)').click();
  F('.toggle:not(:checked)').click();
  F('.toggle:not(:checked)').click();
 
  F('#clear-completed').click();
  F('.todo.completed').missing('verifying completion');
});