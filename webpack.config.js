const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    entry: {
      main: './src/webview/pages/main/main.tsx',
      sidebar: './src/webview/pages/sidebar/main.ts',
    },
    output: {
      path: path.resolve(__dirname, 'dist/webview'),
      filename: 'assets/[name]-[contenthash].js',
      assetModuleFilename: 'assets/[name]-[hash][ext]',
      publicPath: 'auto', // Allow runtime publicPath injection
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/webview'),
      },
      fallback: {
        path: require.resolve('path-browserify'),
        process: require.resolve('process/browser'),
      },
    },
    externals: [
      {
        '@mybricks/ai-utils': 'mybricks_ai_utils',
      },
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true, // Speed up build, let VS Code handle type checking
                compilerOptions: {
                  module: 'esnext', // Override for Webpack tree shaking
                },
                allowTsInNodeModules: true,
              },
            },
          ],
          exclude: /node_modules\/(?!@mybricks\/)/,
        },
        // Rule for project and @mybricks LESS files (enable CSS Modules)
        {
          test: /\.less$/,
          include: [
            path.resolve(__dirname, 'src'),
            // Use function to match path to avoid cross-platform issues with RegExp
            (input) =>
              input.includes('node_modules') && input.includes('@mybricks'),
          ],
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: false, // Fix default export issues
                modules: {
                  mode: 'local',
                  auto: undefined, // Enable for ALL files matched by this rule
                  localIdentName: isProduction
                    ? '[hash:base64:5]'
                    : '[name]__[local]--[hash:base64:5]',
                  namedExport: false,
                  exportLocalsConvention: 'asIs',
                },
                importLoaders: 1,
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        // Rule for other node_modules LESS files (disable CSS Modules, global styles)
        {
          test: /\.less$/,
          include: /node_modules/,
          // Use function for robust exclusion
          exclude: (input) => input.includes('@mybricks'),
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: false, // Global styles
                importLoaders: 1,
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        // Rule for CSS files (e.g. from antd)
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        // Assets
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'assets/[name]-[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/webview/pages/main/index.html',
        filename: 'index.html', // output to dist/webview/index.html
        chunks: ['main'],
        minify: isProduction,
      }),
      new HtmlWebpackPlugin({
        template: './src/webview/pages/sidebar/index.html',
        filename: 'sidebar.html', // output to dist/webview/sidebar.html
        chunks: ['sidebar'],
        minify: isProduction,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development',
        ),
      }),
    ],
    performance: {
      hints: false, // Disable size warnings for now
    },
    ignoreWarnings: [
      {
        module: /node_modules\/@mybricks\//,
        message: /export 'default'/,
      },
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  }
}
