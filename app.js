const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');

const routes = require('./routes/route');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', '*');
	res.set('Access-Control-Allow-Methods', '*');
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	next();
});

app.use(compression());

app.use('/api', routes);

app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;

	res.status(status).json({
		message,
		data
	});
});

const connectToDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://mohit_bathla:Mbnbpb@1234@cluster0.uuvux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
			{
				useUnifiedTopology: true,
				useCreateIndex: true,
				useNewUrlParser: true
			}
		);

		console.log('Connected!');
		app.listen(process.env.PORT || 8080);
	} catch (err) {
		console.log(err);
	}
};

connectToDB();
