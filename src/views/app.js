var AppView = Backbone.View.extend({

  el: '#app',

  events: {
    "click .watched": "handleWatched",
    "click .to-watch": "handleToWatch"
  },

  initialize: function() {
    // this.watchedMovies = new Movies(watchedMovies);
    // this.unWatchedMovies = new Movies(unWatchedMovies);
    this.movies = new Movies(movieData)
    this.render();
  },

  handleWatched: function() {
    console.log('watched handled');
    this.movies.toggleDisplay(true);
  },

  handleToWatch: function() {
    console.log('to watched handled');
    this.movies.toggleDisplay(false);
  },

  render: function() {
    this.$el.html(this.template());
    new TitleBarView({el: '.title-bar'});

    //this.movies is undefined because i have 2 collections currently
    //gotta find a way to pass in the right collection
    //also gotta add movies to unwatched collection upon add
    new MovieListView({el: '.list', collection: this.movies});
    new SearchView({el: '.search-box', collection: this.movies});
    new AddMovieView({el: '.add-movie', collection: this.movies});
    return this;
  },

  template: templateURL('src/templates/app.html')

})