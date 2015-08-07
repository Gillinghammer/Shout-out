module.exports = {
    entry: "./app.jsx",
    output: {
        path: ".",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        path: __dirname
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};