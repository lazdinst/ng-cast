angular.module('video-player')

.component('search', {
  bindings: {
    searchCallback: '<',
  },
  templateUrl: 'src/templates/search.html'
});
