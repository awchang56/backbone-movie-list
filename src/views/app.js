var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.movies = new Movies(movieData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new TitleBarView({el: '.title-bar'});
    new MovieListView({el: '.list', collection: this.movies});
    return this;
  },

  template: templateURL('src/templates/app.html')

})