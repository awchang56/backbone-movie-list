var SearchView = Backbone.View.extend({

  events: {
    "click .search": "handleSearch"
  },

  initialize: function() {
    this.render();
  },

  handleSearch: function(e) {
    //iterate over the collection
    e.preventDefault();
    this.collection.search($('.search-field').val());
    $('.search-field').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')
})