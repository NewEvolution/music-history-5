define(function(){
  var songArr = [];
  $.ajax({
    url: "songlist.json"
  }).done(function(data) {
    songArr = data.songs;
  });
  return {
    giveSongs: function() {
      return songArr;
    }
  };
});