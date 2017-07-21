angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    console.log(youTube);
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = video => this.currentVideo = video;

    this.searchCallback = searchString => youTube.search(searchString, this.searchResults);

    this.searchResults = videos => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };

    youTube.search('Angular JS', this.searchResults);
  },
  templateUrl: 'src/templates/app.html'
});
