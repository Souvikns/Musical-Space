const { Command } = require('commander');
const program = new Command();
const fs = require('fs');
const path = require('path');

program.version('0.0.1');

// adding options 
program
    .option('-d, --download <filename>', "download a song")
    .option('-u, --upload <cid>', "upload a song life")


program.parse(process.argv);

const options = program.opts();

if (options.download) {
    console.log(path.resolve(__dirname, options.download));
}

if(options.upload){
    console.log(options.upload);
}