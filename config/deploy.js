/* jshint node: true */

module.exports = function() {
  return {
    'gcloud': {
      bucket: 'contributor-days-assets',
      key: 'fastboot-release.json'
    },
    'gcloud-storage': {
      projectId: 'contributor-days',
      bucket: 'contributor-days-assets',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,json}',
      metadata: {
        cacheControl: 'public, max-age=31536000'
      }
    }
  };
};
