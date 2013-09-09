module.exports = function(tom, options) {
  tom.on('play', function(track) {
    document.title = '▶ ' + document.title;
  }

  function removePlay() {
    document.title = document.title.substring(3, 0);
  }

  tom.on('pause', removePlay);
  tom.on('stop', removePlay);
}
