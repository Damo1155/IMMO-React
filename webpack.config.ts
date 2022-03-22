import path from "path";
const ESLintPlugin = require("eslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        hot: true,
        port: 8080,
        open: true,
        overlay: true,
        compress: true,
        contentBase: false
    },
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    },
                },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        }),
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ["tsx"]
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "SCSS": path.resolve(__dirname, "./src/SCSS/"),
            "Enums": path.resolve(__dirname, "./src/Enums/"),
            "Pages": path.resolve(__dirname, "./src/Pages/"),
            "Models": path.resolve(__dirname, "./src/Models/"),
            "Services": path.resolve(__dirname, "./src/Services/"),
            "Components": path.resolve(__dirname, "./src/Components/"),
            "TestDependencies": path.resolve(__dirname, "./src/TestDependencies/")
        }
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};

export default config;