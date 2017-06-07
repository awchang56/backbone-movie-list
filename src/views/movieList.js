var MovieListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'reset add', this.render);
    this.listenTo(this.collection, 'toggle', this.renderFiltered);
    // this.listenTo(this.collection, 'add', thisrender)
  },

  renderFiltered: function(data) {
    this.$el.html(this.template());
    for (var i = 0; i < data.length; i ++) {
      var movie = new MovieListEntryView({model: data[i]});
      $('.movie-list').append(movie.el);
    }
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