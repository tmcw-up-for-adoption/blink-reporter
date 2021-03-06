## blink-reporter

![](http://farm9.staticflickr.com/8064/8267975401_9bd2ecd078_h.jpg)

A [mocha](https://github.com/visionmedia/mocha) test reporter that turns a
[blink(1)](http://blink1.thingm.com/) red or green depending on test status.
It uses [node-blink](https://github.com/tmcw/node-blink) to do that.

    npm install -g blink-reporter
    # cd into you project
    mocha -R blink-reporter

It's especially fun if you like fullscreen editing (like I do) and have tests
run continuously. One option for that is `watch`. If you use Linux, you probably
already have `watch`. If you're on a Mac, you can
`brew install watch` with [Homebrew](http://mxcl.github.com/homebrew/)
and run

    watch mocha -R blink-reporter
