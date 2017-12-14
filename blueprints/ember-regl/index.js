/* eslint-env node */
module.exports = {
  description: ''

  afterInstall(options) {
    return this.addPackageToProject('regl', '< 2.0.0');
  }
};
