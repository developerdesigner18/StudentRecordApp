module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@theme' : './src/theme',
          '@components' : './src/components'
        },
      },
    ],  
  ],
};
