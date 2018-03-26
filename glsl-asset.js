const { Asset } = require('parcel-bundler');
const glsl = require('glslify')
module.exports = class GLSLAsset extends Asset {

  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }

  generate() {
    return { js: `module.exports = \`${ glsl.compile(this.contents,{
        basedir:process.cwd()
        }) }\`` };
  }

};
