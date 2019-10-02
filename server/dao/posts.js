const nano = require('nano')

const loadDb = () => {
	const host = nano('http://localhost:5984');

	host.db.list().then((body) => {
		body.forEach((db) => {
			console.log(db);
		});
	});

	// await host.db.create('posts');

	// return host.get('posts').then(() => host.db.use('posts'));
	return host.db.use('posts');
};

const getPosts = async () => {
	const db = loadDb();

	return await db.list({include_docs: true}).then((body) => {
		return body.rows.map((doc) => doc.doc);
	});
};

const insertPost = async () => {
	const db = loadDb();

	return await db.insert({postBody: 'This is a test'});
};

const updatePost = async () => {
	const db = loadDb();

	const post = await db.get('7044f5d1c50703e4809753918100045e');

	return await db.insert({
		...post,
		postBody: 'my test 2'
	});
};

module.exports = {
	getPosts,
	insertPost,
	updatePost
};

