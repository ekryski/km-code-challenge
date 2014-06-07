window.runTests = function(){
  $('#qunit').removeClass('visuallyhidden');

  //slowing funcunit down for dramatic effect
  F.speed = 100;
   
  module('sortable table');
   
  test('sort by name ascending', function() {
    F('thead td:first-child').click();

    F.wait(500, function(){
      var value = F('tbody tr:first-child td:first-child span').text();
      equal(value, 'Aladdin G. Rowe');
    });
  });

  test('sort by name descending', function() {
    F('thead td:first-child').click();

    F.wait(500, function(){
      var value = F('tbody tr:first-child td:first-child span').text();
      equal(value, 'Zia R. Calhoun');
    });
  });

  test('edit row', function() {
    F('tbody tr:first-child .edit').click();
    F('tbody tr:first-child td:nth-child(3) input').visible();
    F('tbody tr:first-child td:nth-child(3) input').type('\b\b\b\b\b\b\b\bColorado');
    F('tbody tr:first-child .save').click();
    
    F.wait(500, function(){
      var value = F('tbody tr:first-child td:nth-child(3) span').text();
      equal(value, 'Colorado');
    });
  });
};