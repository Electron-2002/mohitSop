const Obj = require('../models/obj');

exports.getText = async (req, res, next) => {
	try {
		const text = await Obj.findOne().sort({ _id: -1 }).limit(1);

		res.status(201).json({
			text: text.text
		});
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
	}
};

exports.addText = async (req, res, next) => {
	try {
		const { text } = req.body;

		await Obj.create({
			text
		});

		res.status(201).json({
			message: 'Success'
		});
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
	}
};

exports.deleteTexts = async (req, res, next) => {
	try {
		await Obj.deleteMany();

		res.status(200).json({
			message: 'Success'
		});
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
	}
};
