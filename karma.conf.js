const path = require("path");

module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],
        customContextFile: "custom.context.html",
        files: [
            { pattern: "./src/**/*.js", type: "module" },
            { pattern: "./test/**/*.js", type: "module" }
        ],
        browsers: ["ChromeHeadless"],
        singleRun: true,
        logLevel: config.LOG_DISABLE
    });
};
