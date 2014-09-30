var titles = [
  {name: 'EMT-Advanced'}, 
  {name: 'First Responder'}, 
  {name: 'EMT-Intermediate'}, 
  {name: 'EMT-Paramedic'},
  {name: 'Fire Fighter'},
  {name: 'Captain'},
  {name: 'Chief'}
]

var BaseView = Backbone.View.extend( {
  className: "wrapper",
  render: function() {
    $('body').append(this.el);
  }

});

var base = new BaseView();
base.render();

var SearchView = BaseView.extend( {
  tagName: 'input',

  attributes: {
    'type': 'search',
    'placeholder': 'Search titles and ranks...',
  },

  initialize: function() {

    this.render();
  },

  render: function() {
    this.$el.text(this.name);
    $('.wrapper').append(this.el);
  },

  filterBy: function(val) {
    this.filteredList = this.collection.filter(function(item) {
      return item.match(val);
    }) 
    this.render();
  }

});

var searchView = new SearchView();

var ListView = BaseView.extend( {
  tagName: 'ul',
  className: 'list_holder'
});

var ItemView = BaseView.extend( {
  tagName: 'li',
  className: 'single_item',

  initialize: function(options) {
    this.name = options.name;
  },

  render: function() {
    this.$el.text(this.name);
    $('ul').append(this.el);
  }
});

var listView = new ListView();
listView.render();

_.each(titles, function(rank) {
  var itemView = new ItemView(rank);
  itemView.render();
});