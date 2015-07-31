requirejs(["dom-access", "populate-songs", "get-more-songs"], function(dom, populate, more){
  //populate.getSongs();
  $.ajax().done(function(data) {
    songWriter(populate.giveSongs(), dom.getDomElement());
  });
  $("#more").click(function(e) {
    //more.getSongs();
    $.ajax().done(function(data) {
      songWriter(more.giveSongs(), dom.getDomElement());
    });
  });
});


function songWriter(dataArr, domObject) {
  for(var i=0; i<dataArr.length; i++) {
    domObject.before("<section><button class='delete'>Delete</button><h1>" + 
      dataArr[i].title + "</h1><ul><li>" + dataArr[i].artist + 
      "</li><li><span></span></li><li>" + dataArr[i].album + 
      "</li><li><span></span></li><li>" + dataArr[i].genre + 
      "</li></ul></section>");
  }
}

$(".content").on("click", ".delete", function(e) {
  $(this).parent().remove();
});