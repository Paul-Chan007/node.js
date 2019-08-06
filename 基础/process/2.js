
process.stdin.resume();
process.stdin.on('data', function(data) {
    process.stdout.write("用户输入了："+data);
})