define(function(){
  return {
    getSongs: function(callback, passthrough) {
      $.ajax({
        url: "newsongs.json"
      }).done(function(data) {
        callback.call(this, data.songs, passthrough);
      });
    }
  };
});