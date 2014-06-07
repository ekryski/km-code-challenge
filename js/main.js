(function(){
  var people = new can.List(peeps);

  Mustache.registerHelper('prettyDate', function(text, options){
    text = typeof text === 'function' ? text() : text;
    var d = new Date(text);
    return d.toLocaleString();
  });

  var Table = can.Control.extend(
    {
      defaults : {
        view: '<table><thead><tr><td>Name</td><td>City</td><td>Province</td><td>Country</td><td>Birthday</td></tr></thead><tbody></tbody></table>',
        row: '{{#each people}}<tr {{data "person"}}><td>{{name}}</td><td>{{city}}</td><td>{{province}}</td><td>{{country}}</td><td>{{prettyDate birthday}}</td></tr>{{/each}}'
      }
    },
    {
      init: function(element, options){
        this.element.append(this.options.view);
        this.element.find('tbody').html(can.mustache(this.options.row)({ people: this.options.model }));
      },

      'thead td click': function(el, ev){
        console.log('MODEL', this.options.model);
        // TODO: sort based on header type
      },

      '.edit click': function(el, ev){
        var person = el.data('person');

        // TODO: show form
      }

    });

  var table = new Table('#table', { model: people });
})();