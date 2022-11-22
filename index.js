const axios = require('axios');
const fs = require('fs-extra');
{
	(async () => {
		const request = await axios.get('https://api.waifu.pics/sfw/waifu');
		fs.writeFileSync('request.json', JSON.stringify(request.data, null, 2));
		})();
		};