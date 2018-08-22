const HtmlWebPackPlugin=require("html-webpack-plugin")
var path=require("path");
var webpack=require('webpack');
const htmlPlugin=new HtmlWebPackPlugin(
    {
        template:'./src/index.html',
        filename:"./index.html"
    }
)
module.exports={
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'bundle.js',
        chunkFilename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[htmlPlugin,new webpack.HotModuleReplacementPlugin()]
}