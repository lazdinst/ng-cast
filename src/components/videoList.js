angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  templateUrl: 'src/templates/videoList.html',
  controller: function() {
    console.log(this);
  }
});
