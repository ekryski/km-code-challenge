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
      }
    },
    {
      init: function(element, options){
        this.element.append(this.options.view);
        this.element.find('tbody').html(can.view('tableTemplate', { people: this.options.model }));
      },

      'thead td click': function(el, ev){
        el.siblings('td').removeClass('ascending descending');
        this.options.model.comparator = el.text().toLowerCase();
        this.options.model.sort();

        if (el.hasClass('ascending')) {
          this.options.model.reverse();

          el.toggleClass('descending');
        }
        else if (el.hasClass('descending')) {
          el.toggleClass('descending');
        }

        el.toggleClass('ascending');

        // NOTE (EK): We need to re-render because sort doesn't trigger a change event on the people model.
        this.element.find('tbody').html(can.view('tableTemplate', { people: this.options.model }));
      },

      '.edit click': function(el, ev){
        var person = el.data('person');

        // TODO: show form
      }

    });

  var table = new Table('#table', { model: people });
})();