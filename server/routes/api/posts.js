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
					success: false
				});
			} else {
				const {Items} = data;

				res.send({
					success: true,
					posts: Items
				});
			}
		});
	}),
	app.post('/api/posts', (req, res, next) => {
		aws.config.update(config.config);

		const {text} = req.body;
		const postId = (Math.random() * 1000).toString();

		const docClient = new aws.DynamoDB.DocumentClient();

		const params = {
			TableName: config.posts_table,
			Item: {
				postId: postId,
				text: text
			}
		};

		docClient.put(params, (err, data) => {
			if(err) {
				res.send({
					success: false
				});
			} else {
				console.log('data', data);
				res.send({
					postId: postId
				});
			}
		});
	})
};

