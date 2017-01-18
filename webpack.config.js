module.exports = {
    entry: "./js/main.js",
    output: {
        path: __dirname,
        filename: "script.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    }
},

    {
        "tags": {
            "allowUnknownTags": true,
            "dictionaries": ["jsdoc", "closure"]
        },
        "source": {
            "include": [ /* array of paths to files to generate documentation for */ ],
            "exclude": [ /* array of paths to exclude */ ],
            "includePattern": ".+\\.js(doc)?$",
            "excludePattern": "(^|\\/|\\\\)_"
        },
        "plugins": [],
        "templates": {
            "cleverLinks": false,
            "monospaceLinks": false
        }
    };
