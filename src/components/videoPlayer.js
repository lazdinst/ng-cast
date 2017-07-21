angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentVideo: '<'
  },
  controller: function() {
    console.log(this);
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
