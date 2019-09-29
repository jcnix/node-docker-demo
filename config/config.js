const credentials = require('./credentials.js');

const getConfig = () => {
	const isDev = process.env.NODE_ENV !== 'production';

	return isDev ? {
		region: 'local',
		endpoint: 'http://localhost:8000'
	} : credentials;
};

module.exports = {
	posts_table: 'posts',
	config: getConfig()
};
