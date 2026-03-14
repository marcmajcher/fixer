const QRCode = require('qrcode');
const hplipsum = require('hplipsum');

QRCode.toDataURL(hplipsum())
	.then(console.log)
	.catch(console.error);