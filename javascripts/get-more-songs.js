define(function(){
  var songArr = [];
  $.ajax({
    url: "newsongs.json"
  }).done(function(data) {
    songArr = data.songs;
  });
  return {
    giveSongs: function() {
      return songArr;
    }
  };
});