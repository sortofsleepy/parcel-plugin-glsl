module.exports = function (bundler) {

  bundler.addAssetType('glsl', require.resolve('./glsl-asset'));
  bundler.addAssetType('vert', require.resolve('./glsl-asset'));
  bundler.addAssetType('frag', require.resolve('./glsl-asset'));
  bundler.addAssetType('vs', require.resolve('./glsl-asset'));
  bundler.addAssetType('fs', require.resolve('./glsl-asset'));

};
