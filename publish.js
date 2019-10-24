const process = require("process");
const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
if (argv.length === 0) {
    console.log('请输入commit');
}

const rootDir = '';
// git commit
const message = argv[0];
function gitPush(){
    childProcess.spawnSync('git', ['add', '.']);
    childProcess.spawnSync('git', ['commit', '-m', `${message}`]);
    childProcess.spawnSync('git', ['push']);
}
gitPush();
console.log('master pushed');
console.log('gitbook installing');
childProcess.spawnSync('gitbook', ['install']);
console.log('gitbook installed');
console.log('gitbook building');
childProcess.spawnSync('gitbook', ['build']);
console.log('gitbook builded');
childProcess.spawnSync('git', ['checkout', 'gh-pages']);
console.log('切换至 gh-pages分支');
const bookPath = '_book';
const targetPath = `.`;
console.log('正在移动文件');
fs.readdirSync(bookPath, (error, files) => {
    files.forEach(file => {
        const sourcePath = path.join(bookPath, file);
        fs.stat(sourcePath, (error, stat) => {
            if (!error) {
                // console.log(stat);
                if (stat.isDirectory()) {
                    childProcess.execFile('cp', ['-rf', sourcePath, targetPath]);
                } else if (stat.isFile()) {
                    targetPah = path.join(targetPath,file);
                    const sourceReadStream = fs.createReadStream(sourcePath);
                    const targetWriteStream = fs.createWriteStream(targetPath);
                    sourceReadStream.pipe(targetWriteStream);
                }
            }
        });
    });
});
childProcess.spawnSync('rm',['-r',bookPath]);
console.log('文件移动完成');
gitPush();
console.log('gh-pages分支提交完成');
childProcess.spawnSync('git',['checkout','master']);
console.log('finished');
