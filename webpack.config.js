//path モジュールの読み込み
const path = require('path');
//MiniCssExtractPlugin の読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
module.exports = {
 
  //エントリポイント（デフォルトと同じなので省略可）
  entry: './src/index.js',  
  //出力先（デフォルトと同じなので省略可）
  output: { 
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    //ルートディレクトリの指定。
    contentBase: path.join(__dirname, ''),
    //サーバー起動時にブラウザを自動的に起動。
    open: true,
    // ルートディレクトリのファイルを監視（変更があると自動的にリロードされる）
    watchContentBase: true,
    //バンドルされたファイルを出力する（実際に書き出す）
    writeToDisk: true,
  }, 
  module: {
    rules: [
      {
        // 対象となるファイルの拡張子(scss)
        test: /\.scss$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするためのローダー
          {
            loader: "css-loader",
            options: {
              // ソースマップを有効に
              sourceMap: true,
            },
          },
          // Sass を CSS へ変換するローダー
          {
            loader: "sass-loader",
            options: {
              // dart-sass を優先
              implementation: require('sass'),
              sassOptions: {
                // fibers を使う場合は以下でrequire('fibers')を指定
                fiber: require('fibers'),
              },
              // ソースマップを有効に
              sourceMap: true,
            },
          },
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpe?g|svg|eot|wof|woff|ttf)$/i,
        use: [
          {
            //画像を出力フォルダーにコピーするローダー
            loader: 'file-loader',
            options: {
              // 画像ファイルの名前とパスの設定
              name: './images/[name].[ext]'
            }
          }
        ],
      },
    ],
  },
  //プラグインの設定
  plugins: [
    new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
    }),
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: "style.css",
    }),
  ],
  //source-map タイプのソースマップを出力
  devtool: "source-map",
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/  //正規表現で指定
  },
};