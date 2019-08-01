module.exports = {
  entry: './lesson-3-ts-interface-class/app.ts',
  output: {
    filename: 'app.js',
    path: __dirname + './dist',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'awesome-typescript-loader' }
    ],
  },
  devServer: {
    port: 3000,
  },
};
