var blink = require('node-blink');

module.exports = blinkReporter;

function blinkReporter(runner) {
    var passes = 0;
    var failures = 0;
    var total = 0;

    runner.on('pass', function(test) {
        passes++;
    });

    runner.on('fail', function(test, err) {
        failures++;
    });

    runner.on('end', function() {
        blink(function(err, blink) {
            if (err) process.exit(failures);
            blink.set((failures > 0) ? 'red': 'green');
            process.exit(failures);
        });
    });
}
