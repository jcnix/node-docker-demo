const express = require('express');
const nano = require('nano')('http://localhost:5984');

const posts = require('./server/routes/api/posts.js');

const app = express();

nano.db.get('posts').then((data) => {
	console.log(data);
})

app.get('/', (req, res) => {
	res.send('Hello GET');
});

posts(app);

const server = app.listen(8080, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log(`Server running at http://${host}:${port}/`);
});

