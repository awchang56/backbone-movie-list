var MovieListEntryView = Backbone.View.extend({

  events: {
    "click .toggle-watched": "handleToggle"
  },

  initialize: function() {
    this.render()
  },

  handleToggle: function() {
    this.model.toggleWatched();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  template: templateURL('src/templates/movieListEntry.html')
});