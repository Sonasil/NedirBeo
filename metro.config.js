const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs'); // bazen gereklidir
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;