var MovieListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.forEach(model => {
      let movie = new MovieListEntryView({model: model});
      $('.movie-list').append(movie.el);
    });
    return this;
  },

  template: templateURL('src/templates/movieList.html')
});