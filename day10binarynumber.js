process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var n2 = n.toString(2);
    var ar = n2.split("0");
    var max = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i].length > max) {max = ar[i].length};
    }
    var result = max;
    process.stdout.write("" + result + "\n");
}
