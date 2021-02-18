const {ArgumentParser} = require('argparse');

const parser = new ArgumentParser({
    description: 'Tune-space',
});


parser.add_argument('-v', '--version', {action: 'version', version: '0.0.1'});

console.dir(parser.parse_args());

