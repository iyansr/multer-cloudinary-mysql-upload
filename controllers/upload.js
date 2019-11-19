const uploadModel = require('../models/upload');
const upload = require('../config/multer');
const cloudinary = require('../config/cloudinary');

module.exports = {
	uploadUserImage: (req, res) => {
		upload.single('image')(req, res, async err => {
			if (err) {
				res.json({ msg: err });
			} else {
				if (req.file == undefined) {
					res.json({
						msg: 'No File Selected',
					});
				} else {
					try {
						cloudinary.uploader
							.upload(req.file.path, { folder: 'arkamedia' })
							.then(result => {
								const body = {
									...req.body,
									image: result.url,
								};
								uploadModel
									.uploadUserImage(body)
									.then(result => {
										res.json({
											msg: 'Succes',
											data: body,
										});
									})
									.catch(err => {
										res.json(err);
									});
							});
					} catch (err) {
						res.json({
							err: 'Cannot Upload File',
						});
					}
				}
			}
		});
	},
};
