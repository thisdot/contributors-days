/* jshint node: true */

module.exports = function(target) {
  return {
    'gcloud': {
      bucket: 'contributor-days',
      key: 'fastboot-release.json'
    },
    'gcloud-storage': {
      projectId: 'this-dot',
      bucket: 'contributor-days',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,json}',
      metadata: {
        cacheControl: 'public, max-age=31536000'
      }
    }
  };
};
