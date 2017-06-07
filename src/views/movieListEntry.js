var MovieListEntryView = Backbone.View.extend({

  events: {
    "click .toggle-watched": "handleToggle",
    "click .movie-list-entry": "handleMovieDetails"
  },

  initialize: function() {
    this.render()
  },

  handleToggle: function() {
    this.model.toggleWatched();
  },

  handleMovieDetails: function() {
    this.$('.movie-details').toggleClass('hidden');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  template: templateURL('src/templates/movieListEntry.html')
});