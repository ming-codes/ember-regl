/* eslint-env node */
'use strict';

let Funnel = require('broccoli-funnel');

let mergeTrees = require('broccoli-merge-trees');
let path = require('path');

module.exports = {
  name: 'ember-regl',

  included() {
    this._super(...arguments);

    this.import({
      development: 'vendor/regl/regl.js',
      production: 'vendor/regl/regl.min.js'
    });

    this.import('vendor/regl/shim.js');
  },

  treeForREGL() {
    return new Funnel(path.dirname(require.resolve('regl')), {
      srcDir: '/',
      destDir: '/regl'
    });
  },

  treeForVendor() {
    return mergeTrees([
      this._super(...arguments),

      this.treeForREGL()
    ]);
  }
};
