angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
