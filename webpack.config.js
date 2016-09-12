var path = require('path');

module.exports = {
	entry: {
		app: './app/index.jsx'
	},
	output: {
    path: path.resolve(__dirname + '/public'),
    filename: "/javascripts/[name].js"
  },
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel', query: { presets: ['es2015', 'react'] } }

		]
	}
};


// var path = require('path');
//
// module.exports = {
//   entry: {
//     app: "./app/app.jsx"
//   },
//   output: {
//     path: path.resolve(__dirname + '/public'),
//     filename: "/javascripts/[name].js"
//   },
//   module: {
//     loaders: [
//       { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" }
//     ]
//   }
// };
