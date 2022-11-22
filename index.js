const axios = require('axios');
const fs = require('fs-extra');
let d = new Date();
document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()</h1>"
//{
	//(async () => {
		//const request = await axios.get('https://api.waifu.pics/sfw/waifu');
		//fs.writeFileSync('request.json', JSON.stringify(request.data, null, 2));
		//})();
		//};
