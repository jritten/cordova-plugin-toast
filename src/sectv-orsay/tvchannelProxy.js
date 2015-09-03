module.exports = {
	tune: function (success, fail, args) {
		var element = '';
		var source = {};
		var randomColor = function(){
			var color = '#';

			for(var i = 0; i < 6; i++){
				if(Math.floor(Math.random() * 2) === 0){
				color = color + '0';
				} else {
					color = color + 'f';
				}   
			}

			return color;
		}
		
		if (!document.getElementById('tvwindowshow')) {
			element = document.createElement('div');
			element.id = 'tvwindowshow';
		} else {
			element = document.getElementById('tvwindowshow');
		}
		element.style.backgroundColor = randomColor();

		var channelInfo = {
			major: args[0]['major'],
			minor: args[0]['minor'],
			channelName: '',
			programNumber: args[0]['programNumber'],
			ptc: args[0]['ptc'],
			lcn: '',
			sourceID: args[0]['sourceID'],
			transportStreamID: '',
			originalNetworkID: args[0]['originalNetworkID'],
			serviceName:''
		};

		setTimeout(function () {
			success.onsuccess(channelInfo, args[1]);
		}, 0);
	},
	tuneUp: function (success, fail, args) {
		var element = '';
		var source = {};
		var randomColor = function(){
			var color = '#';

			for(var i = 0; i < 6; i++){
				if(Math.floor(Math.random() * 2) === 0){
				color = color + '0';
				} else {
					color = color + 'f';
				}   
			}

			return color;
		}
		
		if (!document.getElementById('tvwindowshow')) {
			element = document.createElement('div');
			element.id = 'tvwindowshow';
		} else {
			element = document.getElementById('tvwindowshow');
		}
		element.style.backgroundColor = randomColor();

		var channelInfo = {
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		};

		setTimeout(function () {
			success.onsuccess(channelInfo, args[1]);
		}, 0);
	},
	tuneDown: function (success, fail, args) {
		var element = '';
		var source = {};
		var randomColor = function(){
			var color = '#';

			for(var i = 0; i < 6; i++){
				if(Math.floor(Math.random() * 2) === 0){
				color = color + '0';
				} else {
					color = color + 'f';
				}   
			}

			return color;
		}
		
		if (!document.getElementById('tvwindowshow')) {
			element = document.createElement('div');
			element.id = 'tvwindowshow';
		} else {
			element = document.getElementById('tvwindowshow');
		}
		element.style.backgroundColor = randomColor();

		var channelInfo = {
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		};

		setTimeout(function () {
			success.onsuccess(channelInfo, args[1]);
		}, 0);
	},
	findChannel: function (success, fail, args) {
		var channelInfo = [{
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		},{
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		}];

		setTimeout(function () {
			success(channelInfo);
		}, 0);
	},
	getChannelList: function (success, fail, args) {
		var channelInfo = [{
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		},{
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		}];

		setTimeout(function () {
			success(channelInfo);
		}, 0);
	},
	getCurrentChannel: function (success, fail, args) {
		var channelInfo = [{
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		}];

		setTimeout(function () {
			success(channelInfo);
		}, 0);
	},
	getProgramList: function (success, fail, args) {
		var programInfo = {
			title: '',
			startTime: '',
			duration: '',
			detailedDescription: '',
			language: '',
			rating: ''
		};

		setTimeout(function () {
			success(programInfo);
		}, 0);
	},
	getCurrentProgram: function (success, fail, args) {
		var programInfo = {
			title: '',
			startTime: '',
			duration: '',
			detailedDescription: '',
			language: '',
			rating: ''
		};

		setTimeout(function () {
			success(programInfo);
		}, 0);
	},
	watcher : '',
	addChannelChangeListener: function (success, fail, args) {
		var element = '';
		var channelInfo = {
			major: '',
			minor: '',
			channelName: '',
			programNumber: '',
			ptc: '',
			lcn: '',
			sourceID: '',
			transportStreamID: '',
			originalNetworkID: '',
			serviceName:''
		};

		if (!document.getElementById('tvwindowshow')) {
			element = document.createElement('div');
			element.id = 'tvwindowshow';
		} else {
			element = document.getElementById('tvwindowshow');
		}

		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		if (!this.watcher) {
			this.watcher = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					success(channelInfo, args[0]);
				});
			});
			this.watcher.observe(element, { attributes : true });
		}
	},
	removeChannelChangeListener: function (success, fail, args) {
		if (this.watcher) {
			this.watcher.disconnect();
			this.watcher = '';
		}
	}
};

require("cordova/exec/proxy").add("toast.tvchannel", module.exports);