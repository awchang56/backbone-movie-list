var Movie = Backbone.Model.extend({

  defaults:{
    watched: false
  },

  toggleWatched: function() {
    var watched = this.get('watched');
    watched = !watched;
    this.set('watched', watched);
    console.log(this.get('watched'));
  }

});