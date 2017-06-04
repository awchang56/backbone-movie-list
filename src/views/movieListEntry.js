var MovieListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render()
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  template: templateURL('src/templates/movieListEntry.html')
});