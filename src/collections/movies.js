var Movies = Backbone.Collection.extend({

  model: Movie,

  parse: function(response) {
    console.log('response inside parse: ', response);
    return response;
  },

  addMovie: function() {
    var movie = {
      "show_title": $('.add-movie-field').val()
    }
    this.add(movie);
  },

  searchAPI: function(query) {
    console.log('search called on: ', query);
    this.fetch({
      url: 'http://netflixroulette.net/api/api.php?title=' + query,
      remove: false,
      success: function(data) {
        console.log('return success data', data);
      },
      error: function(data) {
        console.log('return error data', data);
      }
    })
  },

  toggleDisplay(isWatched) {
    if (isWatched) {
      var filtered = this.filter(movie => {
          return movie.get('watched') === true;
        });
    } else {
      var filtered = this.filter(movie => {
        return movie.get('watched') === false;
      });
    }
    this.trigger('toggle', filtered);

  },

  search: function(query) {
    var filtered = this.filter(movie => {
      return movie.get('show_title').toLowerCase().includes(query.toLowerCase());
    });
    if (filtered.length) {
      this.trigger('toggle', filtered);
    } else {
      alert($('.search-field').val() + ' not found!');
    }
  }

})

