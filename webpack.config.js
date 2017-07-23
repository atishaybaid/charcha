module.exports ={
    entry:'./app/main.js',
    output: {
        filename: './dist/bundle.js'
  },
watch:true,
  module: {
     loaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['react', 'es2015']
         }
       }
     ]
 },
 resolve: {
   extensions: ['.js', '.es6']
 }

}