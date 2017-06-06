var AddMovieView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    "click .add-movie": "handleAdd"
  },

  handleAdd: function() {
    if ($('.add-movie-field').val()) {
      this.collection.add(
        {
          "title": $('.add-movie-field').val()
        }
      );
      $('.add-movie-field').val('');
    }

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/addMovie.html')
})