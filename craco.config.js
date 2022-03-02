const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  },
  babel: {
    plugins: [
      [
        '@emotion/babel-plugin-jsx-pragmatic',
        {
          export: 'jsx',
          import: '__to_avoid_prepending_/** @jsxImportSource @emotion/react */',
          module: '@emotion/react',
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: '__to_avoid_prepending_/** @jsxImportSource @emotion/react */',
        },
      ],
    ],
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
