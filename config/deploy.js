/* jshint node: true */

module.exports = function(deployTarget) {
  return {
    'gcloud': {
      bucket: 'contributor-days-assets',
      key: 'fastboot-release.json'
    },
    'gcloud-storage': {
        bucket: 'contributor-days-assets'
    }
  };
};
