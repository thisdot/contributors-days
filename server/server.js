"use strict";

const GCloudStorageDownloader = require('fastboot-gcloud-storage-downloader');
const GCloudStorageNotifier   = require('fastboot-gcloud-storage-notifier');
const FastBootAppServer       = require('fastboot-app-server');
const RedisCache              = require('fastboot-redis-cache');
const nconf                   = require('nconf');

nconf.file({ file: 'config.json' });

const GCS_BUCKET = nconf.get('bucket');
const GCS_KEY    = nconf.get('key');
const FASTBOOT_REDIS_HOST = nconf.get('redis_host');
const FASTBOOT_REDIS_PORT = nconf.get('redis_port');
const FASTBOOT_REDIS_PASSWORD = nconf.get('redis_password');

let downloader = new GCloudStorageDownloader({
  bucket: GCS_BUCKET,
  key: GCS_KEY
});

let notifier  = new GCloudStorageNotifier({
  bucket: GCS_BUCKET,
  key: GCS_KEY
});

let cache = new RedisCache({
  host: FASTBOOT_REDIS_HOST,
  port: FASTBOOT_REDIS_PORT,
  password: FASTBOOT_REDIS_PASSWORD,
  cacheKey(path) {
    return `contributor-days-${path}`;
  }
});

let server = new FastBootAppServer({
  downloader,
  notifier,
  cache
});

server.start();