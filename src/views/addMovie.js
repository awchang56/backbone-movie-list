var AddMovieView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    "click .add-movie": "handleAdd"
  },

  handleAdd: function() {
    var query = $('.add-movie-field').val();
    if (query) {
      console.log('query: ', query);
      this.collection.searchAPI(query);
      $('.add-movie-field').val('');
    }

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/addMovie.html')
})