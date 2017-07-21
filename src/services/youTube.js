angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: query,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        key: YOUTUBE_API_KEY,
        videoEmbeddable: true
      }
    }).then((result) => {
      callback(result.data.items);
    });
  };
});
