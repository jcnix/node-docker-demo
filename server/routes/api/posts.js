const postDao = require('../../dao/posts.js');

module.exports = (app) => {
	app.get('/api/insertTest', async (req, res, next) => {
		const status = await postDao.insertPost();

		return res.status(200)
			.send({});
	});
	
	app.get('/api/updatePost', async (req, res, next) => {
		await postDao.updatePost();

		res.status(200)
			.send('update successful');
	});

	app.get('/api/posts', async (req, res, next) => {
		const posts = await postDao.getPosts();
		console.log(posts);

		res.status(200)
			.send(posts);
	});

};

