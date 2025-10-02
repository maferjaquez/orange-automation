module.exports ={
    default: {
        paths: [
            "src/tests/features"
        ], 
        dryRun: false,
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "src/tests/steps/*.ts",
            "src/support/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        timeout: 1000000
    }
}
