const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');

const entry = require('./entry.js'); 


module.exports = {
    mode: "production", 
    entry: entry, 
    output: {
        path: path.join(__dirname, 'deploy/'), 
        filename: "js/[name].js" 
    },

    watch: true, 
    watchOptions: {
        ignored: /node_modules/, 
        poll: 1000 
    },
    devtool: false, 
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            config: path.resolve(__dirname, 'src/config.js'),
            common: path.resolve(__dirname, 'src/common'),
            images: path.resolve(__dirname, 'src/common/images'),

        },
        modules: ['node_modules', 'src'], 
    },
    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader']
    },
    module: { 
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/(node_modules|bower_components)/',
                query: {
                    presets: ['@babel/preset-env'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']

            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']

            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        removeComments: true,
                        collapseWhitespace: true,
                        attrs: ['img:src']
                    }
                }]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file',
                    query: {
                        useRelativePath: false,
                        publicPath: '/vue_frontend/deploy/',
                        name: 'images/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url',
                    options: {
                        limit: 10000,
                        publicPath: '',
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new VueLoaderPlugin(),
    ],
    optimization: { 
        flagIncludedChunks: true,
        minimize: true,
        namedModules: true,
        namedChunks: true,
        mergeDuplicateChunks: true,
        removeEmptyChunks: true,
        removeAvailableModules: true,
        splitChunks: {
            name: 'common',
            chunks: 'all',
            minChunks: 2
        },
        noEmitOnErrors: true,
        concatenateModules: true
    },
    externals: [{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
};
