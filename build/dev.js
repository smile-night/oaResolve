require('shelljs/global')
// 添加了shelljs之后，我们就可以在JS里面执行webpack的命令
env.NODE_ENV = 'developement'

var path = require('path')
var webpack = require('webpack')
var ora = require('ora')
var webpackConfig = require('./webpack.dev.config')
var WebpackDevServer = require('webpack-dev-server')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)
// webpack-dev-server
// webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8090/");

// 用webpack做服务器
// var server = new WebpackDevServer(webpackConfig, {
//   hot: true //热启动
// });
// server.listen(8090);
console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for developement...')
spinner.start()

// path.resolve(__dirname, '../dist')解析路径用的，可以打印看一下效果
    var assetsPath = path.join(path.resolve(__dirname, '../dev'), 'static')
    // rm 这一行是删除dist文件夹
    rm('-rf', assetsPath)
    // mkdir是生成dist文件夹的目录
    mkdir('-p', assetsPath)
    // cp是拷贝static文件夹到dist/文件夹
    cp('-R', 'static/*', assetsPath)
    console.log(path.join(__dirname, '../src/js/'));

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
