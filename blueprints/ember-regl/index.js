/* eslint-env node */
module.exports = {
  description: 'Add regl peer dependency',

  afterInstall(options) {
    return this.addPackageToProject('regl', '< 2.0.0');
  }
};
