var exec = require('child_process').exec
var fs = require('fs')
var path = require('path')
var del = require('del')
var gulp = require('gulp')
var child_process = require('child_process')
var PROJECT_DIR = 'projects'

/**
 * 执行命令
 * @param {string} cmd
 */
function execPromise(cmd) {
  return new Promise((resolve, reject) => {
    console.log('开始打包: ' + cmd)
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error)
      }
      console.log('打包完成: ' + cmd)
      resolve(stdout ? stdout : stderr)
    })
  })
}

/**
 * 获取项目列表
 */
function getProjects() {
  var dirs = fs.readdirSync(PROJECT_DIR)
  return dirs.filter((dir) => {
    var info = fs.statSync(PROJECT_DIR + '/' + dir)
    return info.isDirectory()
  })
}

/**
 * 清理命令
 */
function cleanCommand() {
  return del(['./dist'])
}

/**
 * 编译命令
 * @param {*} done
 */
function compileCommand(done) {
  return Promise.all(
    getProjects().map((project) => {
      const cmd = ['ng', 'build', project, '--prod'].join(' ')
      return execPromise(cmd)
    })
  ).then(() => {
    console.log('所有插件打包完成')
    done()
  })
}

const commands = {
  // 执行清理命令
  clean: cleanCommand,
  compile: compileCommand
}

/**
 * 初始化
 */
function bootstrap(launch) {
  const commandQueue = Object.entries(commands)

  commandQueue.forEach(([key, command]) => {
    gulp.task(key, command)
  })

  launch()
}

bootstrap(() => gulp.task('build', gulp.series('clean', 'compile')))
