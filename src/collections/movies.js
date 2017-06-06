var Movies = Backbone.Collection.extend({

  model: Movie,

  addMovie: function(title) {
    var movie = {
      "title": $('.add-movie-field').val()
    }
    this.add(movie);
  },

  toggleDisplay(isWatched) {
    if (isWatched) {
      var filtered = this.filter(movie => {
          return movie.get('watched') === true;
        });
      console.log('watched is true: ', filtered);
    } else {
      var filtered = this.filter(movie => {
        return movie.get('watched') === false;
      });
      console.log('watched is false: ', filtered);
    }
    this.trigger('toggle', filtered);

  },

  search: function(query) {
    var filtered = this.filter(movie => {
      return movie.get('title').toLowerCase().includes(query.toLowerCase());
    });
    if (filtered.length) {
      this.trigger('toggle', filtered);
    } else {
      alert($('.search-field').val() + ' not found!');
    }
  }

})

