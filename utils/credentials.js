const prod='http://install.gls.federicocrivellaro.com/',
			dev='http://0.0.0.0:8080/';

module.exports = {
	oauth: {
		shopify_api_key: 'db740b5754795ac6c79b9e51ab8fa014', // Your API key
		shopify_shared_secret: 'd82e5bd3a189ecf2c645fff945be3319', // Your Shared Secret
		shopify_scope: 'read_orders,write_orders',
    redirect_uri:'install/finish_auth',
		nonce: '' // you must provide a randomly selected value unique for each authorization request
	},
	path:{
		prod:prod,
		dev:dev
	},
	crashmail:{
		mailEnabled: true,
	  mailTransportName: 'SMTP',
	  mailTransportConfig: {
	      service: 'Gmail',
	      auth: {
	          user: "rhmcrashsender@gmail.com",
	          pass: "federicorhm"
	      }
	  },
	  mailSubject: 'advanced.js crashreporter test',
	  mailFrom: 'crashreporter <crivellarofederico@gmail.com>',
	  mailTo: 'info@robotshatemonkeys.com'
	},
	webhooks:[
		{
			"webhook": {
		    "topic": "app/uninstalled",
		    "address": prod+'install/delete',
		    "format": "json"
		  }
	  }
	]
}
