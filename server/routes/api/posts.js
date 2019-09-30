const aws = require('aws-sdk');
const config = require('../../../config/config.js');


module.exports = (app) => {
	app.get('/api/posts', (req, res, next) => {
		aws.config.update(config.config);

		const docClient = new aws.DynamoDB.DocumentClient();

		const params = {
			TableName: config.posts_table
		};

		docClient.scan(params, (err, data) => {
			if(err) {
				res.send({
					success: false,
					err: err
				});
			} else {
				const {Items} = data;

				res.send({
					success: true,
					posts: Items
				});
			}
		});
	});
};

