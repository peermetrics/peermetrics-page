/**
 * MIT License
 *
 * Copyright (c) 2019 Andrei Onel <andrei@peermetrics.io>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function (exports) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var dist = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	var domain;// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers(){}EventHandlers.prototype=Object.create(null);function EventEmitter(){EventEmitter.init.call(this);}// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter=EventEmitter,EventEmitter.usingDomains=!1,EventEmitter.prototype.domain=void 0,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.init=function(){this.domain=null,EventEmitter.usingDomains&&domain.active&&!(this instanceof domain.Domain)&&(this.domain=domain.active),this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new EventHandlers,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0;},EventEmitter.prototype.setMaxListeners=function(a){if("number"!=typeof a||0>a||isNaN(a))throw new TypeError("\"n\" argument must be a positive number");return this._maxListeners=a,this};function $getMaxListeners(a){return void 0===a._maxListeners?EventEmitter.defaultMaxListeners:a._maxListeners}EventEmitter.prototype.getMaxListeners=function(){return $getMaxListeners(this)};// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(a,b,c){if(b)a.call(c);else for(var d=a.length,e=arrayClone(a,d),f=0;f<d;++f)e[f].call(c);}function emitOne(a,b,c,d){if(b)a.call(c,d);else for(var e=a.length,f=arrayClone(a,e),g=0;g<e;++g)f[g].call(c,d);}function emitTwo(a,b,c,d,e){if(b)a.call(c,d,e);else for(var f=a.length,g=arrayClone(a,f),h=0;h<f;++h)g[h].call(c,d,e);}function emitThree(a,b,c,d,e,f){if(b)a.call(c,d,e,f);else for(var g=a.length,h=arrayClone(a,g),j=0;j<g;++j)h[j].call(c,d,e,f);}function emitMany(a,b,c,d){if(b)a.apply(c,d);else for(var e=a.length,f=arrayClone(a,e),g=0;g<e;++g)f[g].apply(c,d);}EventEmitter.prototype.emit=function(a){var b,c,d,e,f,g,h,j="error"===a;if(g=this._events,g)j=j&&null==g.error;else if(!j)return !1;// If there is no 'error' event listener then throw.
	if(h=this.domain,j){if(b=arguments[1],h)b||(b=new Error("Uncaught, unspecified \"error\" event")),b.domainEmitter=this,b.domain=h,b.domainThrown=!1,h.emit("error",b);else if(b instanceof Error)throw b;// Unhandled 'error' event
	else {// At least give some kind of context to the user
	var k=new Error("Uncaught, unspecified \"error\" event. ("+b+")");throw k.context=b,k}return !1}if(c=g[a],!c)return !1;var l="function"==typeof c;switch(d=arguments.length,d){// fast cases
	case 1:emitNone(c,l,this);break;case 2:emitOne(c,l,this,arguments[1]);break;case 3:emitTwo(c,l,this,arguments[1],arguments[2]);break;case 4:emitThree(c,l,this,arguments[1],arguments[2],arguments[3]);break;// slower
	default:for(e=Array(d-1),f=1;f<d;f++)e[f-1]=arguments[f];emitMany(c,l,this,e);}return !0};function _addListener(a,b,c,d){var e,f,g;if("function"!=typeof c)throw new TypeError("\"listener\" argument must be a function");if(f=a._events,f?(f.newListener&&(a.emit("newListener",b,c.listener?c.listener:c),f=a._events),g=f[b]):(f=a._events=new EventHandlers,a._eventsCount=0),!g)g=f[b]=c,++a._eventsCount;else// Check for listener leak
	if("function"==typeof g?g=f[b]=d?[c,g]:[g,c]:d?g.unshift(c):g.push(c),!g.warned&&(e=$getMaxListeners(a),e&&0<e&&g.length>e)){g.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+g.length+" "+b+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=a,h.type=b,h.count=g.length,emitWarning(h);}return a}function emitWarning(a){"function"==typeof console.warn?console.warn(a):console.log(a);}EventEmitter.prototype.addListener=function(a,b){return _addListener(this,a,b,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function(a,b){return _addListener(this,a,b,!0)};function _onceWrap(a,b,c){function d(){a.removeListener(b,d),e||(e=!0,c.apply(a,arguments));}var e=!1;return d.listener=c,d}EventEmitter.prototype.once=function(a,b){if("function"!=typeof b)throw new TypeError("\"listener\" argument must be a function");return this.on(a,_onceWrap(this,a,b)),this},EventEmitter.prototype.prependOnceListener=function(a,b){if("function"!=typeof b)throw new TypeError("\"listener\" argument must be a function");return this.prependListener(a,_onceWrap(this,a,b)),this},EventEmitter.prototype.removeListener=function(a,b){var c,d,e,f,g;if("function"!=typeof b)throw new TypeError("\"listener\" argument must be a function");if(d=this._events,!d)return this;if(c=d[a],!c)return this;if(c===b||c.listener&&c.listener===b)0==--this._eventsCount?this._events=new EventHandlers:(delete d[a],d.removeListener&&this.emit("removeListener",a,c.listener||b));else if("function"!=typeof c){for(e=-1,f=c.length;0<f--;)if(c[f]===b||c[f].listener&&c[f].listener===b){g=c[f].listener,e=f;break}if(0>e)return this;if(1===c.length){if(c[0]=void 0,0==--this._eventsCount)return this._events=new EventHandlers,this;delete d[a];}else spliceOne(c,e);d.removeListener&&this.emit("removeListener",a,g||b);}return this},EventEmitter.prototype.removeAllListeners=function(a){var b,c;if(c=this._events,!c)return this;// not listening for removeListener, no need to emit
	if(!c.removeListener)return 0===arguments.length?(this._events=new EventHandlers,this._eventsCount=0):c[a]&&(0==--this._eventsCount?this._events=new EventHandlers:delete c[a]),this;// emit removeListener for all listeners on all events
	if(0===arguments.length){for(var d,e=Object.keys(c),f=0;f<e.length;++f)d=e[f],"removeListener"!==d&&this.removeAllListeners(d);return this.removeAllListeners("removeListener"),this._events=new EventHandlers,this._eventsCount=0,this}if(b=c[a],"function"==typeof b)this.removeListener(a,b);else if(b)// LIFO order
	do this.removeListener(a,b[b.length-1]);while(b[0]);return this},EventEmitter.prototype.listeners=function(a){var b,c,d=this._events;return d?(b=d[a],c=b?"function"==typeof b?[b.listener||b]:unwrapListeners(b):[]):c=[],c},EventEmitter.listenerCount=function(a,b){return "function"==typeof a.listenerCount?a.listenerCount(b):listenerCount.call(a,b)},EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(a){var b=this._events;if(b){var c=b[a];if("function"==typeof c)return 1;if(c)return c.length}return 0}EventEmitter.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]};// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(a,b){for(var c=b,d=c+1,e=a.length;d<e;c+=1,d+=1)a[c]=a[d];a.pop();}function arrayClone(a,b){for(var c=Array(b);b--;)c[b]=a[b];return c}function unwrapListeners(a){for(var b=Array(a.length),c=0;c<b.length;++c)b[c]=a[c].listener||a[c];return b}

	// Unique ID creation requires a high quality random # generator. In the browser we therefore
	// require the crypto API and do not support built-in fallback to lower quality random number
	// generators (like Math.random()).
	var getRandomValues,rnds8=new Uint8Array(16);function rng(){// lazy load so that environments that need to polyfill have a chance to do so
	if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}

	var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

	function validate(a){return "string"==typeof a&&REGEX.test(a)}

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */for(var byteToHex=[],i=0;256>i;++i)byteToHex.push((i+256).toString(16).substr(1));function stringify(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0,c=(byteToHex[a[b+0]]+byteToHex[a[b+1]]+byteToHex[a[b+2]]+byteToHex[a[b+3]]+"-"+byteToHex[a[b+4]]+byteToHex[a[b+5]]+"-"+byteToHex[a[b+6]]+byteToHex[a[b+7]]+"-"+byteToHex[a[b+8]]+byteToHex[a[b+9]]+"-"+byteToHex[a[b+10]]+byteToHex[a[b+11]]+byteToHex[a[b+12]]+byteToHex[a[b+13]]+byteToHex[a[b+14]]+byteToHex[a[b+15]]).toLowerCase();// Note: Be careful editing this code!  It's been tuned for performance
	// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
	// Consistency check for valid UUID.  If this throws, it's likely due to one
	// of the following:
	// - One or more input array values don't map to a hex octet (leading to
	// "undefined" in the uuid)
	// - Invalid input values for the RFC `version` or `variant` fields
	if(!validate(c))throw TypeError("Stringified UUID is invalid");return c}

	function v4(a,b,c){a=a||{};var d=a.random||(a.rng||rng)();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	// Copy bytes to buffer, if provided
	if(d[6]=64|15&d[6],d[8]=128|63&d[8],b){c=c||0;for(var e=0;16>e;++e)b[c+e]=d[e];return b}return stringify(d)}

	/**
	 * A set of methods used to parse the rtc stats
	 */
	function addAdditionalData(currentStats, previousStats) {
	    // we need the previousStats stats to compute thse values
	    if (!previousStats)
	        return currentStats;
	    // audio
	    // inbound
	    currentStats.audio.inbound.map((report) => {
	        let prev = previousStats.audio.inbound.find(r => r.id === report.id);
	        report.bitrate = computeBitrate(report, prev, 'bytesReceived');
	        report.packetRate = computeBitrate(report, prev, 'packetsReceived');
	    });
	    // outbound
	    currentStats.audio.outbound.map((report) => {
	        let prev = previousStats.audio.outbound.find(r => r.id === report.id);
	        report.bitrate = computeBitrate(report, prev, 'bytesSent');
	        report.packetRate = computeBitrate(report, prev, 'packetsSent');
	    });
	    // video
	    // inbound
	    currentStats.video.inbound.map((report) => {
	        let prev = previousStats.video.inbound.find(r => r.id === report.id);
	        report.bitrate = computeBitrate(report, prev, 'bytesReceived');
	        report.packetRate = computeBitrate(report, prev, 'packetsReceived');
	    });
	    // outbound
	    currentStats.video.outbound.map((report) => {
	        let prev = previousStats.video.outbound.find(r => r.id === report.id);
	        report.bitrate = computeBitrate(report, prev, 'bytesSent');
	        report.packetRate = computeBitrate(report, prev, 'packetsSent');
	    });
	    return currentStats;
	}
	function getCandidatePairInfo(candidatePair, stats) {
	    if (!candidatePair || !stats)
	        return {};
	    const connection = { ...candidatePair };
	    if (connection.localCandidateId) {
	        const localCandidate = stats.get(connection.localCandidateId);
	        connection.local = { ...localCandidate };
	    }
	    if (connection.remoteCandidateId) {
	        const remoteCandidate = stats.get(connection.remoteCandidateId);
	        connection.remote = { ...remoteCandidate };
	    }
	    return connection;
	}
	// Takes two stats reports and determines the rate based on two counter readings
	// and the time between them (which is in units of milliseconds).
	function computeRate(newReport, oldReport, statName) {
	    const newVal = newReport[statName];
	    const oldVal = oldReport ? oldReport[statName] : null;
	    if (newVal === null || oldVal === null) {
	        return null;
	    }
	    return (newVal - oldVal) / (newReport.timestamp - oldReport.timestamp) * 1000;
	}
	// Convert a byte rate to a bit rate.
	function computeBitrate(newReport, oldReport, statName) {
	    return computeRate(newReport, oldReport, statName) * 8;
	}
	function map2obj(stats) {
	    if (!stats.entries) {
	        return stats;
	    }
	    const o = {};
	    stats.forEach(function (v, k) {
	        o[k] = v;
	    });
	    return o;
	}
	// Enumerates the new standard compliant stats using local and remote track ids.
	function parseStats(stats, previousStats, options = {}) {
	    // Create an object structure with all the needed stats and types that we care
	    // about. This allows to map the getStats stats to other stats names.
	    if (!stats)
	        return null;
	    /**
	     * The starting object where we will save the details from the stats report
	     * @type {Object}
	     */
	    let statsObject = {
	        audio: {
	            inbound: [],
	            outbound: []
	        },
	        video: {
	            inbound: [],
	            outbound: []
	        },
	        connection: {
	            inbound: [],
	            outbound: []
	        }
	    };
	    // if we want to collect remote data also
	    if (options.remote) {
	        statsObject.remote = {
	            audio: {
	                inbound: [],
	                outbound: []
	            },
	            video: {
	                inbound: [],
	                outbound: []
	            }
	        };
	    }
	    for (const report of stats.values()) {
	        switch (report.type) {
	            case 'outbound-rtp': {
	                const mediaType = report.mediaType || report.kind;
	                const codecInfo = {};
	                let trackData = {};
	                if (!['audio', 'video'].includes(mediaType))
	                    continue;
	                if (report.codecId) {
	                    const codec = stats.get(report.codecId);
	                    if (codec) {
	                        codecInfo.clockRate = codec.clockRate;
	                        codecInfo.mimeType = codec.mimeType;
	                        codecInfo.payloadType = codec.payloadType;
	                    }
	                }
	                trackData = stats.get(report.mediaSourceId) || stats.get(report.trackId) || {};
	                statsObject[mediaType].outbound.push({ ...report, ...codecInfo, track: { ...trackData } });
	                break;
	            }
	            case 'inbound-rtp': {
	                let mediaType = report.mediaType || report.kind;
	                let trackData = {};
	                const codecInfo = {};
	                // Safari is missing mediaType and kind for 'inbound-rtp'
	                if (!['audio', 'video'].includes(mediaType)) {
	                    if (report.id.includes('Video'))
	                        mediaType = 'video';
	                    else if (report.id.includes('Audio'))
	                        mediaType = 'audio';
	                    else
	                        continue;
	                }
	                if (report.codecId) {
	                    const codec = stats.get(report.codecId);
	                    if (codec) {
	                        codecInfo.clockRate = codec.clockRate;
	                        codecInfo.mimeType = codec.mimeType;
	                        codecInfo.payloadType = codec.payloadType;
	                    }
	                }
	                // if we don't have connection details already saved
	                // and the transportId is present (most likely chrome)
	                // get the details from the candidate-pair
	                if (!statsObject.connection.id && report.transportId) {
	                    const transport = stats.get(report.transportId);
	                    if (transport && transport.selectedCandidatePairId) {
	                        const candidatePair = stats.get(transport.selectedCandidatePairId);
	                        statsObject.connection = getCandidatePairInfo(candidatePair, stats);
	                    }
	                }
	                trackData = stats.get(report.mediaSourceId) || stats.get(report.trackId) || {};
	                statsObject[mediaType].inbound.push({ ...report, ...codecInfo, track: { ...trackData } });
	                break;
	            }
	            case 'peer-connection': {
	                statsObject.connection.dataChannelsClosed = report.dataChannelsClosed;
	                statsObject.connection.dataChannelsOpened = report.dataChannelsOpened;
	                break;
	            }
	            case 'remote-inbound-rtp': {
	                if (!options.remote)
	                    break;
	                let mediaType = report.mediaType || report.kind;
	                const codecInfo = {};
	                // Safari is missing mediaType and kind for 'inbound-rtp'
	                if (!['audio', 'video'].includes(mediaType)) {
	                    if (report.id.includes('Video'))
	                        mediaType = 'video';
	                    else if (report.id.includes('Audio'))
	                        mediaType = 'audio';
	                    else
	                        continue;
	                }
	                if (report.codecId) {
	                    const codec = stats.get(report.codecId);
	                    if (codec) {
	                        codecInfo.clockRate = codec.clockRate;
	                        codecInfo.mimeType = codec.mimeType;
	                        codecInfo.payloadType = codec.payloadType;
	                    }
	                }
	                // if we don't have connection details already saved
	                // and the transportId is present (most likely chrome)
	                // get the details from the candidate-pair
	                if (!statsObject.connection.id && report.transportId) {
	                    const transport = stats.get(report.transportId);
	                    if (transport && transport.selectedCandidatePairId) {
	                        const candidatePair = stats.get(transport.selectedCandidatePairId);
	                        statsObject.connection = getCandidatePairInfo(candidatePair, stats);
	                    }
	                }
	                statsObject.remote[mediaType].inbound.push({ ...report, ...codecInfo });
	                break;
	            }
	            case 'remote-outbound-rtp': {
	                if (!options.remote)
	                    break;
	                const mediaType = report.mediaType || report.kind;
	                const codecInfo = {};
	                if (!['audio', 'video'].includes(mediaType))
	                    continue;
	                if (report.codecId) {
	                    const codec = stats.get(report.codecId);
	                    if (codec) {
	                        codecInfo.clockRate = codec.clockRate;
	                        codecInfo.mimeType = codec.mimeType;
	                        codecInfo.payloadType = codec.payloadType;
	                    }
	                }
	                statsObject.remote[mediaType].outbound.push({ ...report, ...codecInfo });
	                break;
	            }
	        }
	    }
	    // if we didn't find a candidate-pair while going through inbound-rtp
	    // look for it again
	    if (!statsObject.connection.id) {
	        for (const report of stats.values()) {
	            // select the current active candidate-pair report
	            if (report.type === 'candidate-pair' && report.nominated && report.state === 'succeeded') {
	                statsObject.connection = getCandidatePairInfo(report, stats);
	            }
	        }
	    }
	    statsObject = addAdditionalData(statsObject, previousStats);
	    return statsObject;
	}

	// used to keep track of events listeners. useful when we want to remove them
	let eventListeners = {};
	class WebRTCStats extends EventEmitter {
	    constructor(constructorOptions) {
	        super();
	        this.monitoringSetInterval = 0;
	        this.connectionMonitoringSetInterval = 0;
	        this.connectionMonitoringInterval = 1000;
	        this.remote = true;
	        this.peersToMonitor = {};
	        /**
	         * Used to keep track of all the events
	         */
	        this.timeline = [];
	        /**
	         * A list of stats to look after
	         */
	        this.statsToMonitor = [
	            'inbound-rtp',
	            'outbound-rtp',
	            'remote-inbound-rtp',
	            'remote-outbound-rtp',
	            'peer-connection',
	            'data-channel',
	            'stream',
	            'track',
	            'sender',
	            'receiver',
	            'transport',
	            'candidate-pair',
	            'local-candidate',
	            'remote-candidate'
	        ];
	        // only works in the browser
	        if (typeof window === 'undefined') {
	            throw new Error('WebRTCStats only works in browser');
	        }
	        const options = { ...constructorOptions };
	        this.isEdge = !!window.RTCIceGatherer;
	        this.getStatsInterval = options.getStatsInterval || 1000;
	        this.rawStats = !!options.rawStats;
	        this.statsObject = !!options.statsObject;
	        this.filteredStats = !!options.filteredStats;
	        // getUserMedia options
	        this.shouldWrapGetUserMedia = !!options.wrapGetUserMedia;
	        if (typeof options.remote === 'boolean') {
	            this.remote = options.remote;
	        }
	        // If we want to enable debug
	        this.debug = !!options.debug;
	        this.logLevel = options.logLevel || "none";
	        // add event listeners for getUserMedia
	        if (this.shouldWrapGetUserMedia) {
	            this.wrapGetUserMedia();
	        }
	    }
	    async addPeer(peerId, pc) {
	        console.warn('The addPeer() method has been deprecated, please use addConnection()');
	        return this.addConnection({
	            peerId,
	            pc
	        });
	    }
	    /**
	     * Start tracking a RTCPeerConnection
	     * @param {Object} options The options object
	     */
	    async addConnection(options) {
	        const { pc, peerId } = options;
	        let { connectionId, remote } = options;
	        remote = typeof remote === 'boolean' ? remote : this.remote;
	        if (!pc || !(pc instanceof RTCPeerConnection)) {
	            throw new Error(`Missing argument 'pc' or is not of instance RTCPeerConnection`);
	        }
	        if (!peerId) {
	            throw new Error('Missing argument peerId');
	        }
	        if (this.isEdge) {
	            throw new Error('Can\'t monitor peers in Edge at this time.');
	        }
	        // if we are already monitoring this peerId, check if the user sent the same connection twice
	        if (this.peersToMonitor[peerId]) {
	            // if the user sent a connectionId
	            if (connectionId && connectionId in this.peersToMonitor[peerId]) {
	                throw new Error(`We are already monitoring connection with id ${connectionId}.`);
	            }
	            else {
	                for (let id in this.peersToMonitor[peerId]) {
	                    const peerConnection = this.peersToMonitor[peerId][id];
	                    if (peerConnection.pc === pc) {
	                        throw new Error(`We are already monitoring peer with id ${peerId}.`);
	                    }
	                    // remove an connection if it's already closed.
	                    if (peerConnection.pc.connectionState === 'closed') {
	                        this.removeConnection({ peerId, pc: peerConnection.pc });
	                    }
	                }
	            }
	        }
	        const config = pc.getConfiguration();
	        // don't log credentials
	        if (config.iceServers) {
	            config.iceServers.forEach(function (server) {
	                delete server.credential;
	            });
	        }
	        // if the user didn't send a connectionId, we should generate one
	        if (!connectionId) {
	            connectionId = v4();
	        }
	        this.emitEvent({
	            event: 'addConnection',
	            tag: 'peer',
	            peerId,
	            connectionId,
	            data: {
	                options: options,
	                peerConfiguration: config
	            }
	        });
	        this.monitorPeer({
	            peerId,
	            connectionId,
	            pc,
	            remote
	        });
	        return {
	            connectionId
	        };
	    }
	    /**
	     * Returns the timeline of events
	     * If a tag is it will filter out events based on it
	     * @param  {String} tag The tag to filter events (optional)
	     * @return {Array}     The timeline array (or sub array if tag is defined)
	     */
	    getTimeline(tag) {
	        // sort the events by timestamp
	        this.timeline = this.timeline.sort((event1, event2) => event1.timestamp.getTime() - event2.timestamp.getTime());
	        if (tag) {
	            return this.timeline.filter((event) => event.tag === tag);
	        }
	        return this.timeline;
	    }
	    /**
	     * Used to add to the list of peers to get stats for
	     * @param  {string} peerId
	     * @param  {RTCPeerConnection} pc
	     * @param {MonitorPeerOptions} options
	     */
	    monitorPeer(options) {
	        let { peerId, connectionId, pc, remote } = options;
	        if (!pc) {
	            this.logger.warn('Did not receive pc argument when calling monitorPeer()');
	            return;
	        }
	        const monitorPeerObject = {
	            pc: pc,
	            connectionId,
	            stream: null,
	            stats: {
	                // keep a reference of the current stat
	                parsed: null,
	                raw: null
	            },
	            options: {
	                remote
	            }
	        };
	        if (this.peersToMonitor[peerId]) {
	            // if we are already watching this connectionId
	            if (connectionId in this.peersToMonitor[peerId]) {
	                this.logger.warn(`Already watching connection with ID ${connectionId}`);
	                return;
	            }
	            this.peersToMonitor[peerId][connectionId] = monitorPeerObject;
	        }
	        else {
	            this.peersToMonitor[peerId] = { [connectionId]: monitorPeerObject };
	        }
	        this.addPeerConnectionEventListeners(peerId, connectionId, pc);
	        // start monitoring from the first peer added
	        if (this.numberOfMonitoredPeers === 1) {
	            this.startStatsMonitoring();
	            this.startConnectionStateMonitoring();
	        }
	    }
	    /**
	     * Used to start the setTimeout and request getStats from the peers
	     */
	    startStatsMonitoring() {
	        if (this.monitoringSetInterval)
	            return;
	        this.monitoringSetInterval = window.setInterval(() => {
	            // if we ran out of peers to monitor
	            if (!this.numberOfMonitoredPeers) {
	                this.stopStatsMonitoring();
	            }
	            this.getStats() // get stats from all peer connections
	                .then((statsEvents) => {
	                statsEvents.forEach((statsEventObject) => {
	                    // add it to the timeline and also emit the stats event
	                    this.emitEvent(statsEventObject);
	                });
	            });
	        }, this._getStatsInterval);
	    }
	    stopStatsMonitoring() {
	        if (this.monitoringSetInterval) {
	            window.clearInterval(this.monitoringSetInterval);
	            this.monitoringSetInterval = 0;
	        }
	    }
	    async getStats(id = null) {
	        this.logger.info(id ? `Getting stats from peer ${id}` : `Getting stats from all peers`);
	        let peersToAnalyse = {};
	        // if we want the stats for a specific peer
	        if (id) {
	            if (!this.peersToMonitor[id]) {
	                throw new Error(`Cannot get stats. Peer with id ${id} does not exist`);
	            }
	            peersToAnalyse[id] = this.peersToMonitor[id];
	        }
	        else {
	            // else, get stats for all of them
	            peersToAnalyse = this.peersToMonitor;
	        }
	        let statsEventList = [];
	        for (const id in peersToAnalyse) {
	            for (const connectionId in peersToAnalyse[id]) {
	                const peerObject = peersToAnalyse[id][connectionId];
	                const pc = peerObject.pc;
	                // if this connection is closed, continue
	                if (!pc || this.checkIfConnectionIsClosed(id, connectionId, pc)) {
	                    continue;
	                }
	                try {
	                    const before = this.getTimestamp();
	                    const prom = pc.getStats(null);
	                    if (prom) {
	                        // TODO modify the promise to yield responses over time
	                        const res = await prom;
	                        const after = this.getTimestamp();
	                        // create an object from the RTCStats map
	                        const statsObject = map2obj(res);
	                        const parseStatsOptions = { remote: peerObject.options.remote };
	                        const parsedStats = parseStats(res, peerObject.stats.parsed, parseStatsOptions);
	                        const statsEventObject = {
	                            event: 'stats',
	                            tag: 'stats',
	                            peerId: id,
	                            connectionId: connectionId,
	                            timeTaken: after - before,
	                            data: parsedStats
	                        };
	                        if (this.rawStats === true) {
	                            statsEventObject['rawStats'] = res;
	                        }
	                        if (this.statsObject === true) {
	                            statsEventObject['statsObject'] = statsObject;
	                        }
	                        if (this.filteredStats === true) {
	                            statsEventObject['filteredStats'] = this.filteroutStats(statsObject);
	                        }
	                        statsEventList.push(statsEventObject);
	                        peerObject.stats.parsed = parsedStats;
	                        // peerObject.stats.raw = res
	                    }
	                    else {
	                        this.logger.error(`PeerConnection from peer ${id} did not return any stats data`);
	                    }
	                }
	                catch (e) {
	                    this.logger.error(e);
	                }
	            }
	        }
	        return statsEventList;
	    }
	    startConnectionStateMonitoring() {
	        this.connectionMonitoringSetInterval = window.setInterval(() => {
	            if (!this.numberOfMonitoredPeers) {
	                this.stopConnectionStateMonitoring();
	            }
	            for (const id in this.peersToMonitor) {
	                for (const connectionId in this.peersToMonitor[id]) {
	                    const pc = this.peersToMonitor[id][connectionId].pc;
	                    this.checkIfConnectionIsClosed(id, connectionId, pc);
	                }
	            }
	        }, this.connectionMonitoringInterval);
	    }
	    checkIfConnectionIsClosed(peerId, connectionId, pc) {
	        const isClosed = this.isConnectionClosed(pc);
	        if (isClosed) {
	            this.removeConnection({ peerId, pc });
	            // event name should be deppending on what we detect as closed
	            let event = pc.connectionState === 'closed' ? 'onconnectionstatechange' : 'oniceconnectionstatechange';
	            this.emitEvent({
	                event,
	                peerId,
	                connectionId,
	                tag: 'connection',
	                data: 'closed'
	            });
	        }
	        return isClosed;
	    }
	    isConnectionClosed(pc) {
	        return pc.connectionState === 'closed' || pc.iceConnectionState === 'closed';
	    }
	    stopConnectionStateMonitoring() {
	        if (this.connectionMonitoringSetInterval) {
	            window.clearInterval(this.connectionMonitoringSetInterval);
	            this.connectionMonitoringSetInterval = 0;
	        }
	    }
	    wrapGetUserMedia() {
	        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
	            this.logger.warn(`'navigator.mediaDevices.getUserMedia' is not available in browser. Will not wrap getUserMedia.`);
	            return;
	        }
	        this.logger.info('Wrapping getUsermedia functions.');
	        const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
	        const getUserMediaCallback = this.parseGetUserMedia.bind(this);
	        const gum = function () {
	            // the first call will be with the constraints
	            getUserMediaCallback({ constraints: arguments[0] });
	            return origGetUserMedia.apply(navigator.mediaDevices, arguments)
	                .then((stream) => {
	                getUserMediaCallback({ stream: stream });
	                return stream;
	            }, (err) => {
	                getUserMediaCallback({ error: err });
	                return Promise.reject(err);
	            });
	        };
	        // replace the native method
	        navigator.mediaDevices.getUserMedia = gum.bind(navigator.mediaDevices);
	    }
	    /**
	     * Filter out some stats, mainly codec and certificate
	     * @param  {Object} stats The parsed rtc stats object
	     * @return {Object}       The new object with some keys deleted
	     */
	    filteroutStats(stats = {}) {
	        const fullObject = { ...stats };
	        for (const key in fullObject) {
	            var stat = fullObject[key];
	            if (!this.statsToMonitor.includes(stat.type)) {
	                delete fullObject[key];
	            }
	        }
	        return fullObject;
	    }
	    get peerConnectionListeners() {
	        return {
	            icecandidate: (id, connectionId, pc, e) => {
	                this.logger.debug('[pc-event] icecandidate | peerId: ${peerId}', e);
	                this.emitEvent({
	                    event: 'onicecandidate',
	                    tag: 'connection',
	                    peerId: id,
	                    connectionId,
	                    data: e.candidate
	                });
	            },
	            track: (id, connectionId, pc, e) => {
	                this.logger.debug(`[pc-event] track | peerId: ${id}`, e);
	                const track = e.track;
	                const stream = e.streams[0];
	                // save the remote stream
	                if (id in this.peersToMonitor && connectionId in this.peersToMonitor[id]) {
	                    this.peersToMonitor[id][connectionId].stream = stream;
	                }
	                this.addTrackEventListeners(track);
	                this.emitEvent({
	                    event: 'ontrack',
	                    tag: 'track',
	                    peerId: id,
	                    connectionId,
	                    data: {
	                        stream: stream ? this.getStreamDetails(stream) : null,
	                        track: track ? this.getMediaTrackDetails(track) : null,
	                        title: e.track.kind + ':' + e.track.id + ' ' + e.streams.map(function (stream) {
	                            return 'stream:' + stream.id;
	                        })
	                    }
	                });
	            },
	            signalingstatechange: (id, connectionId, pc) => {
	                this.logger.debug(`[pc-event] signalingstatechange | peerId: ${id}`);
	                this.emitEvent({
	                    event: 'onsignalingstatechange',
	                    tag: 'connection',
	                    peerId: id,
	                    connectionId,
	                    data: {
	                        signalingState: pc.signalingState,
	                        localDescription: pc.localDescription,
	                        remoteDescription: pc.remoteDescription
	                    }
	                });
	            },
	            iceconnectionstatechange: (id, connectionId, pc) => {
	                this.logger.debug(`[pc-event] iceconnectionstatechange | peerId: ${id}`);
	                this.emitEvent({
	                    event: 'oniceconnectionstatechange',
	                    tag: 'connection',
	                    peerId: id,
	                    connectionId,
	                    data: pc.iceConnectionState
	                });
	            },
	            icegatheringstatechange: (id, connectionId, pc) => {
	                this.logger.debug(`[pc-event] icegatheringstatechange | peerId: ${id}`);
	                this.emitEvent({
	                    event: 'onicegatheringstatechange',
	                    tag: 'connection',
	                    peerId: id,
	                    connectionId,
	                    data: pc.iceGatheringState
	                });
	            },
	            icecandidateerror: (id, connectionId, pc, ev) => {
	                this.logger.debug(`[pc-event] icecandidateerror | peerId: ${id}`);
	                this.emitEvent({
	                    event: 'onicecandidateerror',
	                    tag: 'connection',
	                    peerId: id,
	                    connectionId,
	                    error: {
	                        errorCode: ev.errorCode
	                    }
	                });
	            },
	            connectionstatechange: (id, connectionId, pc) => {
	                this.logger.debug(`[pc-event] connectionstatechange | peerId: ${id}`);
	                this.emitEvent({
	                    event: 'onconnectionstatechange',
	                    tag: 'connection',
	                    peerId: id,
	                    connectionId,
	                    data: pc.connectionState
	                });
	            },
	            negotiationneeded: (id, connectionId, pc) => {
	                this.logger.debug(`[pc-event] negotiationneeded | peerId: ${id}`);
	                this.emitEvent({
	                    event: 'onnegotiationneeded',
	                    tag: 'connection',
	                    peerId: id,
	                    connectionId
	                });
	            },
	            datachannel: (id, connectionId, pc, event) => {
	                this.logger.debug(`[pc-event] datachannel | peerId: ${id}`, event);
	                this.emitEvent({
	                    event: 'ondatachannel',
	                    tag: 'datachannel',
	                    peerId: id,
	                    connectionId,
	                    data: event.channel
	                });
	            }
	        };
	    }
	    addPeerConnectionEventListeners(peerId, connectionId, pc) {
	        this.logger.debug(`Adding event listeners for peer ${peerId} and connection ${connectionId}.`);
	        eventListeners[connectionId] = {};
	        Object.keys(this.peerConnectionListeners).forEach(eventName => {
	            eventListeners[connectionId][eventName] = this.peerConnectionListeners[eventName].bind(this, peerId, connectionId, pc);
	            pc.addEventListener(eventName, eventListeners[connectionId][eventName], false);
	        });
	    }
	    /**
	     * Called when we get the stream from getUserMedia. We parse the stream and fire events
	     * @param  {Object} options
	     */
	    parseGetUserMedia(options) {
	        const obj = {
	            event: 'getUserMedia',
	            tag: 'getUserMedia',
	            data: { ...options }
	        };
	        // if we received the stream, get the details for the tracks
	        if (options.stream) {
	            obj.data.details = this.parseStream(options.stream);
	        }
	        this.emitEvent(obj);
	    }
	    parseStream(stream) {
	        const result = {
	            audio: [],
	            video: []
	        };
	        const tracks = stream.getTracks();
	        tracks.forEach((track) => {
	            result[track.kind].push(this.getMediaTrackDetails(track));
	        });
	        return result;
	    }
	    getMediaTrackDetails(track) {
	        return {
	            enabled: track.enabled,
	            id: track.id,
	            // @ts-ignore
	            contentHint: track.contentHint,
	            kind: track.kind,
	            label: track.label,
	            muted: track.muted,
	            readyState: track.readyState,
	            constructorName: track.constructor.name,
	            capabilities: track.getCapabilities ? track.getCapabilities() : {},
	            constraints: track.getConstraints ? track.getConstraints() : {},
	            settings: track.getSettings ? track.getSettings() : {},
	            _track: track
	        };
	    }
	    getStreamDetails(stream) {
	        return {
	            active: stream.active,
	            id: stream.id,
	            _stream: stream
	        };
	    }
	    get getTrackEventObject() {
	        return {
	            'mute': (ev) => {
	                this.emitEvent({
	                    event: 'mute',
	                    tag: 'track',
	                    data: {
	                        event: ev
	                    }
	                });
	            },
	            'unmute': (ev) => {
	                this.emitEvent({
	                    event: 'unmute',
	                    tag: 'track',
	                    data: {
	                        event: ev
	                    }
	                });
	            },
	            'overconstrained': (ev) => {
	                this.emitEvent({
	                    event: 'overconstrained',
	                    tag: 'track',
	                    data: {
	                        event: ev
	                    }
	                });
	            },
	            'ended': (ev) => {
	                this.emitEvent({
	                    event: 'ended',
	                    tag: 'track',
	                    data: {
	                        event: ev
	                    }
	                });
	                // no need to listen for event on this track
	                this.removeTrackEventListeners(ev.target);
	            }
	        };
	    }
	    /**
	     * Add event listeners for the tracks that are added to the stream
	     * @param {MediaStreamTrack} track
	     */
	    addTrackEventListeners(track) {
	        eventListeners[track.id] = {};
	        Object.keys(this.getTrackEventObject).forEach(eventName => {
	            eventListeners[track.id][eventName] = this.getTrackEventObject[eventName].bind(this);
	            track.addEventListener(eventName, eventListeners[track.id][eventName]);
	        });
	        // check once per second if the track has been stopped
	        // calling .stop() does not fire any events
	        eventListeners[track.id]['readyState'] = setInterval(() => {
	            if (track.readyState === 'ended') {
	                let event = new CustomEvent('ended', { detail: { check: 'readyState' } });
	                track.dispatchEvent(event);
	            }
	        }, 1000);
	    }
	    removeTrackEventListeners(track) {
	        if (track.id in eventListeners) {
	            Object.keys(this.getTrackEventObject).forEach(eventName => {
	                track.removeEventListener(eventName, eventListeners[track.id][eventName]);
	            });
	            clearInterval(eventListeners[track.id]['readyState']);
	            delete eventListeners[track.id];
	        }
	    }
	    addToTimeline(event) {
	        this.timeline.push(event);
	        this.emit('timeline', event);
	    }
	    /**
	     * Used to emit a custom event and also add it to the timeline
	     * @param {String} eventName The name of the custome event: track, getUserMedia, stats, etc
	     * @param {Object} options   The object tha will be sent with the event
	     */
	    emitEvent(event) {
	        const ev = {
	            ...event,
	            timestamp: new Date()
	        };
	        // add event to timeline
	        this.addToTimeline(ev);
	        if (ev.tag) {
	            // and emit this event
	            this.emit(ev.tag, ev);
	        }
	    }
	    /**
	     * Sets the PeerConnection stats reporting interval.
	     * @param interval
	     *        Interval in milliseconds
	     */
	    set getStatsInterval(interval) {
	        if (!Number.isInteger(interval)) {
	            throw new Error(`getStatsInterval should be an integer, got: ${interval}`);
	        }
	        this._getStatsInterval = interval;
	        // TODO to be tested
	        // Reset restart the interval with new value
	        if (this.monitoringSetInterval) {
	            this.stopStatsMonitoring();
	            this.startStatsMonitoring();
	        }
	    }
	    get logger() {
	        const canLog = (requestLevel) => {
	            const allLevels = ['none', 'error', 'warn', 'info', 'debug'];
	            return allLevels.slice(0, allLevels.indexOf(this.logLevel) + 1).indexOf(requestLevel) > -1;
	        };
	        return {
	            error(...msg) {
	                if (this.debug && canLog('error'))
	                    console.error(`[webrtc-stats][error] `, ...msg);
	            },
	            warn(...msg) {
	                if (this.debug && canLog('warn'))
	                    console.warn(`[webrtc-stats][warn] `, ...msg);
	            },
	            info(...msg) {
	                if (this.debug && canLog('info'))
	                    console.log(`[webrtc-stats][info] `, ...msg);
	            },
	            debug(...msg) {
	                if (this.debug && canLog('debug'))
	                    console.debug(`[webrtc-stats][debug] `, ...msg);
	            }
	        };
	    }
	    /**
	     * Removes a connection from the list of connections to watch
	     * @param {RemoveConnectionOptions} options The options object for this method
	     */
	    removeConnection(options) {
	        let { peerId, connectionId, pc } = options;
	        if (!peerId && !pc && !connectionId) {
	            throw new Error('Missing arguments. You need to either send a peerId and pc, or a connectionId.');
	        }
	        if ((peerId && !pc) || (pc && !peerId)) {
	            throw new Error('By not sending a connectionId, you need to send a peerId and a pc (RTCPeerConnection instance)');
	        }
	        // if the user sent a connectionId, use that
	        if (connectionId) {
	            for (let pId in this.peersToMonitor) {
	                if (connectionId in this.peersToMonitor[pId]) {
	                    peerId = pId;
	                    pc = this.peersToMonitor[pId][connectionId].pc;
	                    // remove listeners
	                    this.removePeerConnectionEventListeners(peerId, connectionId, pc);
	                    delete this.peersToMonitor[pId][connectionId];
	                }
	            }
	            // else, if the user sent a peerId and pc
	        }
	        else if (peerId && pc) {
	            // check if we have this peerId
	            if (peerId in this.peersToMonitor) {
	                // loop through all connections
	                for (let cId in this.peersToMonitor[peerId]) {
	                    // until we find the one we're searching for
	                    if (this.peersToMonitor[peerId][cId].pc === pc) {
	                        // remove listeners
	                        this.removePeerConnectionEventListeners(peerId, cId, pc);
	                        // delete it
	                        delete this.peersToMonitor[peerId][cId];
	                        connectionId = cId;
	                    }
	                }
	            }
	        }
	        if (Object.values(this.peersToMonitor[peerId]).length === 0) {
	            delete this.peersToMonitor[peerId];
	        }
	        return {
	            connectionId
	        };
	    }
	    /**
	     * Removes all the connection for a peer
	     * @param {string} id The peer id
	     */
	    removePeer(id) {
	        this.logger.info(`Removing PeerConnection with id ${id}.`);
	        if (!this.peersToMonitor[id])
	            return;
	        for (let connectionId in this.peersToMonitor[id]) {
	            let pc = this.peersToMonitor[id][connectionId].pc;
	            this.removePeerConnectionEventListeners(id, connectionId, pc);
	        }
	        // remove from peersToMonitor
	        delete this.peersToMonitor[id];
	    }
	    /**
	     * Used to return the number of monitored peers
	     * @return {number} [description]
	     */
	    get numberOfMonitoredPeers() {
	        return Object.keys(this.peersToMonitor).length;
	    }
	    removePeerConnectionEventListeners(peerId, connectionId, pc) {
	        if (connectionId in eventListeners) {
	            // remove all PeerConnection listeners
	            Object.keys(this.peerConnectionListeners).forEach(eventName => {
	                pc.removeEventListener(eventName, eventListeners[connectionId][eventName], false);
	            });
	            // remove reference for this connection
	            delete eventListeners[connectionId];
	        }
	        // also remove track listeners
	        pc.getSenders().forEach(sender => {
	            if (sender.track) {
	                this.removeTrackEventListeners(sender.track);
	            }
	        });
	        pc.getReceivers().forEach(receiver => {
	            if (receiver.track) {
	                this.removeTrackEventListeners(receiver.track);
	            }
	        });
	    }
	    /**
	     * Used to get a now timestamp
	     * @return {number}
	     */
	    getTimestamp() {
	        return Date.now();
	    }
	    // TODO
	    wrapGetDisplayMedia() {
	        const self = this;
	        // @ts-ignore
	        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
	            // @ts-ignore
	            const origGetDisplayMedia = navigator.mediaDevices.getDisplayMedia.bind(navigator.mediaDevices);
	            const gdm = function () {
	                self.debug('navigator.mediaDevices.getDisplayMedia', null, arguments[0]);
	                return origGetDisplayMedia.apply(navigator.mediaDevices, arguments)
	                    .then(function (stream) {
	                    // self.debug('navigator.mediaDevices.getDisplayMediaOnSuccess', null, dumpStream(stream))
	                    return stream;
	                }, function (err) {
	                    self.debug('navigator.mediaDevices.getDisplayMediaOnFailure', null, err.name);
	                    return Promise.reject(err);
	                });
	            };
	            // @ts-ignore
	            navigator.mediaDevices.getDisplayMedia = gdm.bind(navigator.mediaDevices);
	        }
	    }
	}

	exports.WebRTCStats = WebRTCStats;
	});

	unwrapExports(dist);
	var dist_1 = dist.WebRTCStats;

	var uaParser = createCommonjsModule(function (module, exports) {
	/////////////////////////////////////////////////////////////////////////////////
	/* UAParser.js v1.0.2
	   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
	   MIT License *//*
	   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
	   Supports browser & node.js environment. 
	   Demo   : https://faisalman.github.io/ua-parser-js
	   Source : https://github.com/faisalman/ua-parser-js */
	/////////////////////////////////////////////////////////////////////////////////

	(function (window, undefined$1) {

	    //////////////
	    // Constants
	    /////////////


	    var LIBVERSION  = '1.0.2',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major',
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded',
	        UA_MAX_LENGTH = 255;

	    var AMAZON  = 'Amazon',
	        APPLE   = 'Apple',
	        ASUS    = 'ASUS',
	        BLACKBERRY = 'BlackBerry',
	        BROWSER = 'Browser',
	        CHROME  = 'Chrome',
	        EDGE    = 'Edge',
	        FIREFOX = 'Firefox',
	        GOOGLE  = 'Google',
	        HUAWEI  = 'Huawei',
	        LG      = 'LG',
	        MICROSOFT = 'Microsoft',
	        MOTOROLA  = 'Motorola',
	        OPERA   = 'Opera',
	        SAMSUNG = 'Samsung',
	        SONY    = 'Sony',
	        XIAOMI  = 'Xiaomi',
	        ZEBRA   = 'Zebra',
	        FACEBOOK   = 'Facebook';

	    ///////////
	    // Helper
	    //////////

	    var extend = function (regexes, extensions) {
	            var mergedRegexes = {};
	            for (var i in regexes) {
	                if (extensions[i] && extensions[i].length % 2 === 0) {
	                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
	                } else {
	                    mergedRegexes[i] = regexes[i];
	                }
	            }
	            return mergedRegexes;
	        },
	        enumerize = function (arr) {
	            var enums = {};
	            for (var i=0; i<arr.length; i++) {
	                enums[arr[i].toUpperCase()] = arr[i];
	            }
	            return enums;
	        },
	        has = function (str1, str2) {
	            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
	        },
	        lowerize = function (str) {
	            return str.toLowerCase();
	        },
	        majorize = function (version) {
	            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined$1;
	        },
	        trim = function (str, len) {
	            if (typeof(str) === STR_TYPE) {
	                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
	                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
	            }
	    };

	    ///////////////
	    // Map helper
	    //////////////

	    var rgxMapper = function (ua, arrays) {

	            var i = 0, j, k, p, q, matches, match;

	            // loop through all regexes maps
	            while (i < arrays.length && !matches) {

	                var regex = arrays[i],       // even sequence (0,2,4,..)
	                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
	                j = k = 0;

	                // try matching uastring with regexes
	                while (j < regex.length && !matches) {

	                    matches = regex[j++].exec(ua);

	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length === 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        this[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        this[q[0]] = q[1];
	                                    }
	                                } else if (q.length === 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
	                                    } else {
	                                        // sanitize match using given regex
	                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
	                                    }
	                                } else if (q.length === 4) {
	                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
	                                }
	                            } else {
	                                this[q] = match ? match : undefined$1;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	        },

	        strMapper = function (str, map) {

	            for (var i in map) {
	                // check if current value is array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined$1 : i;
	                        }
	                    }
	                } else if (has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined$1 : i;
	                }
	            }
	            return str;
	    };

	    ///////////////
	    // String map
	    //////////////

	    // Safari < 3.0
	    var oldSafariMap = {
	            '1.0'   : '/8',
	            '1.2'   : '/1',
	            '1.3'   : '/3',
	            '2.0'   : '/412',
	            '2.0.2' : '/416',
	            '2.0.3' : '/417',
	            '2.0.4' : '/419',
	            '?'     : '/'
	        },
	        windowsVersionMap = {
	            'ME'        : '4.90',
	            'NT 3.11'   : 'NT3.51',
	            'NT 4.0'    : 'NT4.0',
	            '2000'      : 'NT 5.0',
	            'XP'        : ['NT 5.1', 'NT 5.2'],
	            'Vista'     : 'NT 6.0',
	            '7'         : 'NT 6.1',
	            '8'         : 'NT 6.2',
	            '8.1'       : 'NT 6.3',
	            '10'        : ['NT 6.4', 'NT 10.0'],
	            'RT'        : 'ARM'
	    };

	    //////////////
	    // Regex map
	    /////////////

	    var regexes = {

	        browser : [[

	            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
	            ], [VERSION, [NAME, 'Chrome']], [
	            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
	            ], [VERSION, [NAME, 'Edge']], [

	            // Presto based
	            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
	            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
	            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
	            ], [NAME, VERSION], [
	            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
	            ], [VERSION, [NAME, OPERA+' Mini']], [
	            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
	            ], [VERSION, [NAME, OPERA]], [

	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
	            // Trident based
	            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
	            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
	            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

	            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
	            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
	                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
	            /(weibo)__([\d\.]+)/i                                               // Weibo
	            ], [NAME, VERSION], [
	            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
	            ], [VERSION, [NAME, 'UC'+BROWSER]], [
	            /\bqbcore\/([\w\.]+)/i                                              // WeChat Desktop for Windows Built-in Browser
	            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
	            /micromessenger\/([\w\.]+)/i                                        // WeChat
	            ], [VERSION, [NAME, 'WeChat']], [
	            /konqueror\/([\w\.]+)/i                                             // Konqueror
	            ], [VERSION, [NAME, 'Konqueror']], [
	            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
	            ], [VERSION, [NAME, 'IE']], [
	            /yabrowser\/([\w\.]+)/i                                             // Yandex
	            ], [VERSION, [NAME, 'Yandex']], [
	            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
	            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
	            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
	            ], [VERSION, [NAME, FIREFOX+' Focus']], [
	            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
	            ], [VERSION, [NAME, OPERA+' Touch']], [
	            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
	            ], [VERSION, [NAME, 'Coc Coc']], [
	            /dolfin\/([\w\.]+)/i                                                // Dolphin
	            ], [VERSION, [NAME, 'Dolphin']], [
	            /coast\/([\w\.]+)/i                                                 // Opera Coast
	            ], [VERSION, [NAME, OPERA+' Coast']], [
	            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
	            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, FIREFOX]], [
	            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
	            ], [[NAME, '360 '+BROWSER]], [
	            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
	            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish Browser
	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [
	            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
	            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
	            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
	            ], [NAME, VERSION], [
	            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
	            /(lbbrowser)/i                                                      // LieBao Browser
	            ], [NAME], [

	            // WebView
	            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
	            ], [[NAME, FACEBOOK], VERSION], [
	            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
	            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
	            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
	            ], [NAME, VERSION], [
	            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
	            ], [VERSION, [NAME, 'GSA']], [

	            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
	            ], [VERSION, [NAME, CHROME+' Headless']], [

	            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
	            ], [[NAME, CHROME+' WebView'], VERSION], [

	            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
	            ], [VERSION, [NAME, 'Android '+BROWSER]], [

	            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION], [

	            /version\/([\w\.]+) .*mobile\/\w+ (safari)/i                        // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [
	            /version\/([\w\.]+) .*(mobile ?safari|safari)/i                     // Safari & Safari Mobile
	            ], [VERSION, NAME], [
	            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
	            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [

	            // Gecko based
	            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
	            ], [VERSION, [NAME, FIREFOX+' Reality']], [
	            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
	            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
	            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
	            /(links) \(([\w\.]+)/i                                              // Links
	            ], [NAME, VERSION]
	        ],

	        cpu : [[

	            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
	            ], [[ARCHITECTURE, 'amd64']], [

	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, lowerize]], [

	            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
	            ], [[ARCHITECTURE, 'ia32']], [

	            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
	            ], [[ARCHITECTURE, 'arm64']], [

	            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
	            ], [[ARCHITECTURE, 'armhf']], [

	            // PocketPC mistakenly identified as PowerPC
	            /windows (ce|mobile); ppc;/i
	            ], [[ARCHITECTURE, 'arm']], [

	            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
	            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [

	            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, lowerize]]
	        ],

	        device : [[

	            //////////////////////////
	            // MOBILES & TABLETS
	            // Ordered by popularity
	            /////////////////////////

	            // Samsung
	            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
	            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
	            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
	            /samsung[- ]([-\w]+)/i,
	            /sec-(sgh\w+)/i
	            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

	            // Apple
	            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
	            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
	            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
	            /applecoremedia\/[\w\.]+ \((ipad)/i,
	            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
	            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [

	            // Huawei
	            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
	            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
	            /(?:huawei|honor)([-\w ]+)[;\)]/i,
	            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
	            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

	            // Xiaomi
	            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
	            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
	            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
	            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
	            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
	            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
	            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
	            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

	            // OPPO
	            /; (\w+) bui.+ oppo/i,
	            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
	            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

	            // Vivo
	            /vivo (\w+)(?: bui|\))/i,
	            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
	            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

	            // Realme
	            /\b(rmx[12]\d{3})(?: bui|;|\))/i
	            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

	            // Motorola
	            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
	            /\bmot(?:orola)?[- ](\w*)/i,
	            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
	            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
	            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
	            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

	            // LG
	            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
	            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
	            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
	            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
	            /\blg-?([\d\w]+) bui/i
	            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

	            // Lenovo
	            /(ideatab[-\w ]+)/i,
	            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

	            // Nokia
	            /(?:maemo|nokia).*(n900|lumia \d+)/i,
	            /nokia[-_ ]?([-\w\.]*)/i
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

	            // Google
	            /(pixel c)\b/i                                                      // Google Pixel C
	            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
	            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
	            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

	            // Sony
	            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
	            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
	            /sony tablet [ps]/i,
	            /\b(?:sony)?sgp\w+(?: bui|\))/i
	            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

	            // OnePlus
	            / (kb2005|in20[12]5|be20[12][59])\b/i,
	            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
	            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

	            // Amazon
	            /(alexa)webm/i,
	            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
	            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
	            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
	            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
	            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

	            // BlackBerry
	            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [
	            /\b((?:bb[a-f]|st[hv])100-\d)/i,
	            /\(bb10; (\w+)/i                                                    // BlackBerry 10
	            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

	            // Asus
	            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
	            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
	            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
	            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

	            // HTC
	            /(nexus 9)/i                                                        // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
	            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

	            // ZTE
	            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
	            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

	            // Acer
	            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

	            // Meizu
	            /droid.+; (m[1-5] note) bui/i,
	            /\bmz-([-\w]{2,})/i
	            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

	            // Sharp
	            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, MOBILE]], [

	            // MIXED
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
	                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
	            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
	            /(asus)-?(\w+)/i,                                                   // Asus
	            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
	            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
	            /(jolla)/i,                                                         // Jolla
	            /(oppo) ?([\w ]+) bui/i                                             // OPPO
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /(archos) (gamepad2?)/i,                                            // Archos
	            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
	            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
	            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
	            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
	            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
	            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(surface duo)/i                                                    // Surface Duo
	            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
	            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
	            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
	            /(u304aa)/i                                                         // AT&T
	            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
	            /\bsie-(\w*)/i                                                      // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
	            /\b(rct\w+) b/i                                                     // RCA Tablets
	            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
	            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
	            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
	            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
	            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
	            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
	            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
	            /\b(tm\d{3}\w+) b/i
	            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
	            /\b(k88) b/i                                                        // ZTE K Series Tablet
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
	            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
	            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
	            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
	            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
	            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
	            /\b([yr]\d{2}) b/i,
	            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
	            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
	            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
	            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
	            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
	            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
	            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
	            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
	            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
	            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
	            /\b(ph-1) /i                                                        // Essential PH-1
	            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
	            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
	            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
	            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
	            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
	            /\btu_(1491) b/i                                                    // Rotor Tablets
	            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
	            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
	            /(sprint) (\w+)/i                                                   // Sprint Phones
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
	            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
	            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
	            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
	            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

	            ///////////////////
	            // CONSOLES
	            ///////////////////

	            /(ouya)/i,                                                          // Ouya
	            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
	            /droid.+; (shield) bui/i                                            // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
	            /(playstation [345portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
	            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
	            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

	            ///////////////////
	            // SMARTTVS
	            ///////////////////

	            /smart-tv.+(samsung)/i                                              // Samsung
	            ], [VENDOR, [TYPE, SMARTTV]], [
	            /hbbtv.+maple;(\d+)/i
	            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
	            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
	            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
	            /(apple) ?tv/i                                                      // Apple TV
	            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
	            /crkey/i                                                            // Google Chromecast
	            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
	            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
	            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
	            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
	            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
	            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
	            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
	            ], [[TYPE, SMARTTV]], [

	            ///////////////////
	            // WEARABLES
	            ///////////////////

	            /((pebble))app/i                                                    // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
	            /droid.+; (glass) \d/i                                              // Google Glass
	            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
	            /droid.+; (wt63?0{2,3})\)/i
	            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
	            /(quest( 2)?)/i                                                     // Oculus Quest
	            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

	            ///////////////////
	            // EMBEDDED
	            ///////////////////

	            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
	            ], [VENDOR, [TYPE, EMBEDDED]], [

	            ////////////////////
	            // MIXED (GENERIC)
	            ///////////////////

	            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
	            ], [MODEL, [TYPE, MOBILE]], [
	            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
	            ], [MODEL, [TYPE, TABLET]], [
	            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
	            ], [[TYPE, TABLET]], [
	            /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i              // Unidentifiable Mobile
	            ], [[TYPE, MOBILE]], [
	            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
	            ], [MODEL, [VENDOR, 'Generic']]
	        ],

	        engine : [[

	            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, EDGE+'HTML']], [

	            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
	            ], [VERSION, [NAME, 'Blink']], [

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
	            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
	            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
	            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows
	            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
	            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
	            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
	            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
	            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

	            // iOS/macOS
	            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
	            /cfnetwork\/.+darwin/i
	            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
	            /(mac os x) ?([\w\. ]*)/i,
	            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	            // Mobile OSes
	            /droid ([\w\.]+)\b.+(android[- ]x86)/i                              // Android-x86
	            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
	            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
	            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
	            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
	            /\((series40);/i                                                    // Series 40
	            ], [NAME, VERSION], [
	            /\(bb(10);/i                                                        // BlackBerry 10
	            ], [VERSION, [NAME, BLACKBERRY]], [
	            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
	            ], [VERSION, [NAME, 'Symbian']], [
	            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
	            ], [VERSION, [NAME, FIREFOX+' OS']], [
	            /web0s;.+rt(tv)/i,
	            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
	            ], [VERSION, [NAME, 'webOS']], [

	            // Google Chromecast
	            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
	            ], [VERSION, [NAME, CHROME+'cast']], [
	            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Console
	            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
	            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

	            // Other
	            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
	            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
	            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
	            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
	                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
	            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
	            /(gnu) ?([\w\.]*)/i,                                                // GNU
	            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
	            /(haiku) (\w+)/i                                                    // Haiku
	            ], [NAME, VERSION], [
	            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [
	            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
	            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
	            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
	            /(unix) ?([\w\.]*)/i                                                // UNIX
	            ], [NAME, VERSION]
	        ]
	    };

	    /////////////////
	    // Constructor
	    ////////////////

	    var UAParser = function (ua, extensions) {

	        if (typeof ua === OBJ_TYPE) {
	            extensions = ua;
	            ua = undefined$1;
	        }

	        if (!(this instanceof UAParser)) {
	            return new UAParser(ua, extensions).getResult();
	        }

	        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

	        this.getBrowser = function () {
	            var _browser = {};
	            _browser[NAME] = undefined$1;
	            _browser[VERSION] = undefined$1;
	            rgxMapper.call(_browser, _ua, _rgxmap.browser);
	            _browser.major = majorize(_browser.version);
	            return _browser;
	        };
	        this.getCPU = function () {
	            var _cpu = {};
	            _cpu[ARCHITECTURE] = undefined$1;
	            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
	            return _cpu;
	        };
	        this.getDevice = function () {
	            var _device = {};
	            _device[VENDOR] = undefined$1;
	            _device[MODEL] = undefined$1;
	            _device[TYPE] = undefined$1;
	            rgxMapper.call(_device, _ua, _rgxmap.device);
	            return _device;
	        };
	        this.getEngine = function () {
	            var _engine = {};
	            _engine[NAME] = undefined$1;
	            _engine[VERSION] = undefined$1;
	            rgxMapper.call(_engine, _ua, _rgxmap.engine);
	            return _engine;
	        };
	        this.getOS = function () {
	            var _os = {};
	            _os[NAME] = undefined$1;
	            _os[VERSION] = undefined$1;
	            rgxMapper.call(_os, _ua, _rgxmap.os);
	            return _os;
	        };
	        this.getResult = function () {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return _ua;
	        };
	        this.setUA = function (ua) {
	            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
	            return this;
	        };
	        this.setUA(_ua);
	        return this;
	    };

	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
	    UAParser.CPU = enumerize([ARCHITECTURE]);
	    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
	    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

	    ///////////
	    // Export
	    //////////

	    // check js environment
	    {
	        // nodejs env
	        if (module.exports) {
	            exports = module.exports = UAParser;
	        }
	        exports.UAParser = UAParser;
	    }

	    // jQuery/Zepto specific (optional)
	    // Note:
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
	    if ($ && !$.ua) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function () {
	            return parser.getUA();
	        };
	        $.ua.set = function (ua) {
	            parser.setUA(ua);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }

	})(typeof window === 'object' ? window : commonjsGlobal);
	});
	uaParser.UAParser;

	/**
	 * We gather the info for the current user here
	 */
	class User {
	    constructor({ userId, userName }) {
	        this.platform = {};
	        this.constraints = {};
	        this.devices = [];
	        if (!userId) {
	            throw new Error('missing argument userId');
	        }
	        this.userId = userId;
	        this.userName = userName;
	    }
	    /**
	     * Used initially to gather info about the user's platform and send them
	     * @return {Object} Details about the user: userId, userName, platform info, etc
	     */
	    async getUserDetails() {
	        let platform = await this.gatherPlatformInfo();
	        return { ...platform };
	    }
	    async gatherPlatformInfo() {
	        // browser data
	        // version, name, OS
	        this.platform = this.getUAdetails();
	        this.constraints = this.getContraints();
	        this.devices = await this.getDevices();
	        this.deviceInfo = await this.getDeviceInfo();
	        return {
	            platform: this.platform,
	            constraints: this.constraints,
	            devices: this.devices
	        };
	    }
	    getUAdetails() {
	        return new uaParser().getResult();
	    }
	    getContraints() {
	        if (!window.navigator || !window.navigator.mediaDevices) {
	            return {};
	        }
	        return window.navigator.mediaDevices.getSupportedConstraints();
	    }
	    async getDeviceInfo() {
	        // @ts-ignore
	        let getBattery = navigator.getBattery;
	        let battery;
	        if (getBattery) {
	            try {
	                battery = await getBattery();
	                battery = {
	                    charging: battery.charging,
	                    chargingTime: battery.chargingTime,
	                    dischargingTime: battery.dischargingTime,
	                    level: battery.level
	                };
	            }
	            catch (e) {
	                battery = {};
	            }
	        }
	        return {
	            battery: battery,
	            cores: navigator.hardwareConcurrency,
	            // @ts-ignore
	            memory: window.performance.memory || {},
	            timing: window.performance.timing || {},
	            navigation: window.performance.navigation || {}
	        };
	    }
	    /**
	     * Get connected audio/video devices connected to this device
	     * @return {Promise}
	     */
	    getDevices() {
	        if (!window.navigator.mediaDevices || !window.navigator.mediaDevices.enumerateDevices) {
	            return Promise.resolve([]);
	        }
	        return window.navigator.mediaDevices.enumerateDevices()
	            .then((devices) => {
	            let deviceArray = [];
	            devices.forEach((device) => {
	                let dev = device.toJSON();
	                if (dev.label) {
	                    deviceArray.push(dev);
	                }
	            });
	            return deviceArray;
	        })
	            .catch(() => {
	            return [];
	        });
	    }
	}

	const DEFAULT_OPTIONS$1 = {
	    pageEvents: {
	        pageVisibility: false,
	        // fullScreen: false
	    },
	    apiRoot: 'https://api.peermetrics.io/v1',
	    debug: false,
	    mockRequests: false,
	    remote: true,
	    getStatsInterval: 5000
	};
	const CONSTRAINTS = {
	    meta: {
	        // how many tags per conference we allow
	        length: 5,
	        keyLength: 64,
	        accepted: ['number', 'string', 'boolean']
	        // how long should a tag be
	        // tagLengs: 50
	    },
	    customEvent: {
	        eventNameLength: 120,
	        bodyLength: 2048
	    },
	    peer: {
	        nameLength: 64,
	        idLength: 64
	    }
	};

	var __assign$1 = (undefined && undefined.__assign) || function () {
	    __assign$1 = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign$1.apply(this, arguments);
	};
	var __spreadArray$2 = (undefined && undefined.__spreadArray) || function (to, from) {
	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
	        to[j] = from[i];
	    return to;
	};
	var mix = function (one, two, mergeArrays) {
	    if (mergeArrays === void 0) { mergeArrays = false; }
	    if (!one || !two || typeof one !== "object" || typeof two !== "object")
	        return one;
	    var clone = __assign$1({}, one);
	    for (var prop in two) {
	        if (two.hasOwnProperty(prop)) {
	            if (two[prop] instanceof Array && one[prop] instanceof Array) {
	                clone[prop] = mergeArrays ? __spreadArray$2(__spreadArray$2([], one[prop]), two[prop]) : two[prop];
	            }
	            else if (typeof two[prop] === "object" && typeof one[prop] === "object") {
	                clone[prop] = mix(one[prop], two[prop], mergeArrays);
	            }
	            else {
	                clone[prop] = two[prop];
	            }
	        }
	    }
	    return clone;
	};

	var global$1 = (typeof global !== "undefined" ? global :
	  typeof self !== "undefined" ? self :
	  typeof window !== "undefined" ? window : {});

	var __spreadArray$1 = (undefined && undefined.__spreadArray) || function (to, from) {
	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
	        to[j] = from[i];
	    return to;
	};
	var config = {
	    // Default options
	    defaults: {},
	    // Error type
	    errorType: null,
	    // Polyfills
	    polyfills: {
	        fetch: null,
	        FormData: null,
	        URLSearchParams: null,
	        performance: null,
	        PerformanceObserver: null,
	        AbortController: null
	    },
	    polyfill: function (p, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.doThrow, doThrow = _c === void 0 ? true : _c, _d = _b.instance, instance = _d === void 0 ? false : _d;
	        var args = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            args[_i - 2] = arguments[_i];
	        }
	        var res = this.polyfills[p] ||
	            (typeof self !== "undefined" ? self[p] : null) ||
	            (typeof global$1 !== "undefined" ? global$1[p] : null);
	        if (doThrow && !res)
	            throw new Error(p + " is not defined");
	        return instance && res ? new (res.bind.apply(res, __spreadArray$1([void 0], args)))() : res;
	    }
	};

	var onMatch = function (entries, name, callback, _performance) {
	    if (!entries.getEntriesByName)
	        return false;
	    var matches = entries.getEntriesByName(name);
	    if (matches && matches.length > 0) {
	        callback(matches.reverse()[0]);
	        if (_performance.clearMeasures)
	            _performance.clearMeasures(name);
	        perfs.callbacks.delete(name);
	        if (perfs.callbacks.size < 1) {
	            perfs.observer.disconnect();
	            if (_performance.clearResourceTimings) {
	                _performance.clearResourceTimings();
	            }
	        }
	        return true;
	    }
	    return false;
	};
	var lazyObserver = function (_performance, _observer) {
	    if (!perfs.observer && _performance && _observer) {
	        perfs.observer = new _observer(function (entries) {
	            perfs.callbacks.forEach(function (callback, name) {
	                onMatch(entries, name, callback, _performance);
	            });
	        });
	        if (_performance.clearResourceTimings)
	            _performance.clearResourceTimings();
	    }
	    return perfs.observer;
	};
	var perfs = {
	    callbacks: new Map(),
	    observer: null,
	    observe: function (name, callback) {
	        if (!name || !callback)
	            return;
	        var _performance = config.polyfill("performance", { doThrow: false });
	        var _observer = config.polyfill("PerformanceObserver", { doThrow: false });
	        if (!lazyObserver(_performance, _observer))
	            return;
	        if (!onMatch(_performance, name, callback, _performance)) {
	            if (perfs.callbacks.size < 1)
	                perfs.observer.observe({ entryTypes: ["resource", "measure"] });
	            perfs.callbacks.set(name, callback);
	        }
	    }
	};

	var middlewareHelper = function (middlewares) { return function (fetchFunction) {
	    return (middlewares.length === 0 ?
	        fetchFunction :
	        middlewares.length === 1 ?
	            middlewares[0](fetchFunction) :
	            middlewares.reduceRight(function (acc, curr, idx) {
	                return (idx === middlewares.length - 2) ? curr(acc(fetchFunction)) : curr(acc);
	            }));
	}; };

	var WretchErrorWrapper = /** @class */ (function () {
	    function WretchErrorWrapper(error) {
	        this.error = error;
	    }
	    return WretchErrorWrapper;
	}());
	var resolver = function (wretcher) {
	    var url = wretcher._url, _catchers = wretcher._catchers, resolvers = wretcher._resolvers, middlewares = wretcher._middlewares, opts = wretcher._options;
	    var catchers = new Map(_catchers);
	    var finalOptions = mix(config.defaults, opts);
	    var fetchController = config.polyfill("AbortController", { doThrow: false, instance: true });
	    if (!finalOptions["signal"] && fetchController) {
	        finalOptions["signal"] = fetchController.signal;
	    }
	    // Request timeout
	    var timeout = {
	        ref: null,
	        clear: function () {
	            if (timeout.ref) {
	                clearTimeout(timeout.ref);
	                timeout.ref = null;
	            }
	        }
	    };
	    // The generated fetch request
	    var fetchRequest = middlewareHelper(middlewares)(config.polyfill("fetch"))(url, finalOptions);
	    // Throws on an http error
	    var throwingPromise = fetchRequest
	        .catch(function (error) {
	        throw new WretchErrorWrapper(error);
	    })
	        .then(function (response) {
	        timeout.clear();
	        if (!response.ok) {
	            return response[config.errorType || "text"]().then(function (msg) {
	                // Enhances the error object
	                var err = new Error(msg);
	                err[config.errorType || "text"] = msg;
	                err["status"] = response.status;
	                err["response"] = response;
	                throw err;
	            });
	        }
	        return response;
	    });
	    // Wraps the Promise in order to dispatch the error to a matching catcher
	    var catchersWrapper = function (promise) {
	        return promise.catch(function (err) {
	            timeout.clear();
	            var error = err instanceof WretchErrorWrapper ? err.error : err;
	            if (err instanceof WretchErrorWrapper && catchers.has("__fromFetch"))
	                return catchers.get("__fromFetch")(error, wretcher);
	            else if (catchers.has(error.status))
	                return catchers.get(error.status)(error, wretcher);
	            else if (catchers.has(error.name))
	                return catchers.get(error.name)(error, wretcher);
	            else
	                throw error;
	        });
	    };
	    var bodyParser = function (funName) { return function (cb) { return funName ?
	        // If a callback is provided, then callback with the body result otherwise return the parsed body itself.
	        catchersWrapper(throwingPromise.then(function (_) { return _ && _[funName](); }).then(function (_) { return cb ? cb(_) : _; })) :
	        // No body parsing method - return the response
	        catchersWrapper(throwingPromise.then(function (_) { return cb ? cb(_) : _; })); }; };
	    var responseChain = {
	        /**
	         * Retrieves the raw result as a promise.
	         */
	        res: bodyParser(null),
	        /**
	         * Retrieves the result as a parsed JSON object.
	         */
	        json: bodyParser("json"),
	        /**
	         * Retrieves the result as a Blob object.
	         */
	        blob: bodyParser("blob"),
	        /**
	         * Retrieves the result as a FormData object.
	         */
	        formData: bodyParser("formData"),
	        /**
	         * Retrieves the result as an ArrayBuffer object.
	         */
	        arrayBuffer: bodyParser("arrayBuffer"),
	        /**
	         * Retrieves the result as a string.
	         */
	        text: bodyParser("text"),
	        /**
	         * Performs a callback on the API performance timings of the request.
	         *
	         * Warning: Still experimental on browsers and node.js
	         */
	        perfs: function (cb) {
	            fetchRequest.then(function (res) { return perfs.observe(res.url, cb); });
	            return responseChain;
	        },
	        /**
	         * Aborts the request after a fixed time.
	         *
	         * @param time Time in milliseconds
	         * @param controller A custom controller
	         */
	        setTimeout: function (time, controller) {
	            if (controller === void 0) { controller = fetchController; }
	            timeout.clear();
	            timeout.ref = setTimeout(function () { return controller.abort(); }, time);
	            return responseChain;
	        },
	        /**
	         * Returns the automatically generated AbortController alongside the current wretch response as a pair.
	         */
	        controller: function () { return [fetchController, responseChain]; },
	        /**
	         * Catches an http response with a specific error code or name and performs a callback.
	         */
	        error: function (errorId, cb) {
	            catchers.set(errorId, cb);
	            return responseChain;
	        },
	        /**
	         * Catches a bad request (http code 400) and performs a callback.
	         */
	        badRequest: function (cb) { return responseChain.error(400, cb); },
	        /**
	         * Catches an unauthorized request (http code 401) and performs a callback.
	         */
	        unauthorized: function (cb) { return responseChain.error(401, cb); },
	        /**
	         * Catches a forbidden request (http code 403) and performs a callback.
	         */
	        forbidden: function (cb) { return responseChain.error(403, cb); },
	        /**
	         * Catches a "not found" request (http code 404) and performs a callback.
	         */
	        notFound: function (cb) { return responseChain.error(404, cb); },
	        /**
	         * Catches a timeout (http code 408) and performs a callback.
	         */
	        timeout: function (cb) { return responseChain.error(408, cb); },
	        /**
	         * Catches an internal server error (http code 500) and performs a callback.
	         */
	        internalError: function (cb) { return responseChain.error(500, cb); },
	        /**
	         * Catches errors thrown when calling the fetch function and performs a callback.
	         */
	        fetchError: function (cb) { return responseChain.error("__fromFetch", cb); },
	        /**
	         * Catches an AbortError and performs a callback.
	         */
	        onAbort: function (cb) { return responseChain.error("AbortError", cb); }
	    };
	    return resolvers.reduce(function (chain, r) { return r(chain, wretcher); }, responseChain);
	};

	var __assign = (undefined && undefined.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
	        to[j] = from[i];
	    return to;
	};
	var JSON_MIME = "application/json";
	var CONTENT_TYPE_HEADER = "Content-Type";
	/**
	 * The Wretcher class used to perform easy fetch requests.
	 *
	 * Immutability : almost every method of this class return a fresh Wretcher object.
	 */
	var Wretcher = /** @class */ (function () {
	    function Wretcher(_url, _options, _catchers, _resolvers, _middlewares, _deferredChain) {
	        if (_catchers === void 0) { _catchers = new Map(); }
	        if (_resolvers === void 0) { _resolvers = []; }
	        if (_middlewares === void 0) { _middlewares = []; }
	        if (_deferredChain === void 0) { _deferredChain = []; }
	        this._url = _url;
	        this._options = _options;
	        this._catchers = _catchers;
	        this._resolvers = _resolvers;
	        this._middlewares = _middlewares;
	        this._deferredChain = _deferredChain;
	    }
	    Wretcher.factory = function (url, options) {
	        if (url === void 0) { url = ""; }
	        if (options === void 0) { options = {}; }
	        return new Wretcher(url, options);
	    };
	    Wretcher.prototype.selfFactory = function (_a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.url, url = _c === void 0 ? this._url : _c, _d = _b.options, options = _d === void 0 ? this._options : _d, _e = _b.catchers, catchers = _e === void 0 ? this._catchers : _e, _f = _b.resolvers, resolvers = _f === void 0 ? this._resolvers : _f, _g = _b.middlewares, middlewares = _g === void 0 ? this._middlewares : _g, _h = _b.deferredChain, deferredChain = _h === void 0 ? this._deferredChain : _h;
	        return new Wretcher(url, __assign({}, options), new Map(catchers), __spreadArray([], resolvers), __spreadArray([], middlewares), __spreadArray([], deferredChain));
	    };
	    /**
	     * Sets the default fetch options used for every subsequent fetch call.
	     * @param options New default options
	     * @param mixin If true, mixes in instead of replacing the existing options
	     */
	    Wretcher.prototype.defaults = function (options, mixin) {
	        if (mixin === void 0) { mixin = false; }
	        config.defaults = mixin ? mix(config.defaults, options) : options;
	        return this;
	    };
	    /**
	     * Sets the method (text, json ...) used to parse the data contained in the response body in case of an HTTP error.
	     *
	     * Persists for every subsequent requests.
	     *
	     * Default is "text".
	     */
	    Wretcher.prototype.errorType = function (method) {
	        config.errorType = method;
	        return this;
	    };
	    /**
	     * Sets the non-global polyfills which will be used for every subsequent calls.
	     *
	     * Needed for libraries like [fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill).
	     *
	     * @param polyfills An object containing the polyfills.
	     */
	    Wretcher.prototype.polyfills = function (polyfills) {
	        config.polyfills = __assign(__assign({}, config.polyfills), polyfills);
	        return this;
	    };
	    /**
	     * Returns a new Wretcher object with the argument url appended and the same options.
	     * @param url String url
	     * @param replace Boolean If true, replaces the current url instead of appending
	     */
	    Wretcher.prototype.url = function (url, replace) {
	        if (replace === void 0) { replace = false; }
	        if (replace)
	            return this.selfFactory({ url: url });
	        var split = this._url.split("?");
	        return this.selfFactory({
	            url: split.length > 1 ?
	                split[0] + url + "?" + split[1] :
	                this._url + url
	        });
	    };
	    /**
	     * Returns a new Wretcher object with the same url and new options.
	     * @param options New options
	     * @param mixin If true, mixes in instead of replacing the existing options
	     */
	    Wretcher.prototype.options = function (options, mixin) {
	        if (mixin === void 0) { mixin = true; }
	        return this.selfFactory({ options: mixin ? mix(this._options, options) : options });
	    };
	    /**
	     * Converts a javascript object to query parameters,
	     * then appends this query string to the current url.
	     *
	     * If given a string, use the string as the query verbatim.
	     *
	     * ```
	     * let w = wretch("http://example.com") // url is http://example.com
	     *
	     * // Chain query calls
	     * w = w.query({ a: 1, b : 2 }) // url is now http://example.com?a=1&b=2
	     * w = w.query("foo-bar-baz-woz") // url is now http://example.com?a=1&b=2&foo-bar-baz-woz
	     *
	     * // Pass true as the second argument to replace existing query parameters
	     * w = w.query("c=3&d=4", true) // url is now http://example.com?c=3&d=4
	     * ```
	     *
	     * @param qp An object which will be converted, or a string which will be used verbatim.
	     */
	    Wretcher.prototype.query = function (qp, replace) {
	        if (replace === void 0) { replace = false; }
	        return this.selfFactory({ url: appendQueryParams(this._url, qp, replace) });
	    };
	    /**
	     * Set request headers.
	     * @param headerValues An object containing header keys and values
	     */
	    Wretcher.prototype.headers = function (headerValues) {
	        return this.selfFactory({ options: mix(this._options, { headers: headerValues || {} }) });
	    };
	    /**
	     * Shortcut to set the "Accept" header.
	     * @param headerValue Header value
	     */
	    Wretcher.prototype.accept = function (headerValue) {
	        return this.headers({ Accept: headerValue });
	    };
	    /**
	     * Shortcut to set the "Content-Type" header.
	     * @param headerValue Header value
	     */
	    Wretcher.prototype.content = function (headerValue) {
	        var _a;
	        return this.headers((_a = {}, _a[CONTENT_TYPE_HEADER] = headerValue, _a));
	    };
	    /**
	     * Shortcut to set the "Authorization" header.
	     * @param headerValue Header value
	     */
	    Wretcher.prototype.auth = function (headerValue) {
	        return this.headers({ Authorization: headerValue });
	    };
	    /**
	     * Adds a default catcher which will be called on every subsequent request error when the error code matches.
	     * @param errorId Error code or name
	     * @param catcher: The catcher method
	     */
	    Wretcher.prototype.catcher = function (errorId, catcher) {
	        var newMap = new Map(this._catchers);
	        newMap.set(errorId, catcher);
	        return this.selfFactory({ catchers: newMap });
	    };
	    /**
	     * Associates a custom signal with the request.
	     * @param controller : An AbortController
	     */
	    Wretcher.prototype.signal = function (controller) {
	        return this.selfFactory({ options: __assign(__assign({}, this._options), { signal: controller.signal }) });
	    };
	    /**
	     * Program a resolver to perform response chain tasks automatically.
	     * @param doResolve : Resolver callback
	     */
	    Wretcher.prototype.resolve = function (doResolve, clear) {
	        if (clear === void 0) { clear = false; }
	        return this.selfFactory({ resolvers: clear ? [doResolve] : __spreadArray(__spreadArray([], this._resolvers), [doResolve]) });
	    };
	    /**
	     * Defer wretcher methods that will be chained and called just before the request is performed.
	     */
	    Wretcher.prototype.defer = function (callback, clear) {
	        if (clear === void 0) { clear = false; }
	        return this.selfFactory({
	            deferredChain: clear ? [callback] : __spreadArray(__spreadArray([], this._deferredChain), [callback])
	        });
	    };
	    /**
	     * Add middlewares to intercept a request before being sent.
	     */
	    Wretcher.prototype.middlewares = function (middlewares, clear) {
	        if (clear === void 0) { clear = false; }
	        return this.selfFactory({
	            middlewares: clear ? middlewares : __spreadArray(__spreadArray([], this._middlewares), middlewares)
	        });
	    };
	    Wretcher.prototype.method = function (method, options, body) {
	        if (options === void 0) { options = {}; }
	        if (body === void 0) { body = null; }
	        var base = this.options(__assign(__assign({}, options), { method: method }));
	        var headers = base._options.headers;
	        base =
	            !body ? base :
	                typeof body === "object" && (!headers ||
	                    Object.entries(headers).every(function (_a) {
	                        var k = _a[0], v = _a[1];
	                        return k.toLowerCase() !== CONTENT_TYPE_HEADER.toLowerCase() ||
	                            v.startsWith(JSON_MIME);
	                    })) ? base.json(body) :
	                    base.body(body);
	        return resolver(base
	            ._deferredChain
	            .reduce(function (acc, curr) { return curr(acc, acc._url, acc._options); }, base));
	    };
	    /**
	     * Performs a get request.
	     */
	    Wretcher.prototype.get = function (options) {
	        return this.method("GET", options);
	    };
	    /**
	     * Performs a delete request.
	     */
	    Wretcher.prototype.delete = function (options) {
	        return this.method("DELETE", options);
	    };
	    /**
	     * Performs a put request.
	     */
	    Wretcher.prototype.put = function (body, options) {
	        return this.method("PUT", options, body);
	    };
	    /**
	     * Performs a post request.
	     */
	    Wretcher.prototype.post = function (body, options) {
	        return this.method("POST", options, body);
	    };
	    /**
	     * Performs a patch request.
	     */
	    Wretcher.prototype.patch = function (body, options) {
	        return this.method("PATCH", options, body);
	    };
	    /**
	     * Performs a head request.
	     */
	    Wretcher.prototype.head = function (options) {
	        return this.method("HEAD", options);
	    };
	    /**
	     * Performs an options request
	     */
	    Wretcher.prototype.opts = function (options) {
	        return this.method("OPTIONS", options);
	    };
	    /**
	     * Replay a request.
	     */
	    Wretcher.prototype.replay = function (options) {
	        return this.method(this._options.method, options);
	    };
	    /**
	     * Sets the request body with any content.
	     * @param contents The body contents
	     */
	    Wretcher.prototype.body = function (contents) {
	        return this.selfFactory({ options: __assign(__assign({}, this._options), { body: contents }) });
	    };
	    /**
	     * Sets the content type header, stringifies an object and sets the request body.
	     * @param jsObject An object which will be serialized into a JSON
	     */
	    Wretcher.prototype.json = function (jsObject) {
	        var _a;
	        var preservedContentType = (_a = Object.entries(this._options.headers || {}).find(function (_a) {
	            var k = _a[0], v = _a[1];
	            return k.toLowerCase() === CONTENT_TYPE_HEADER.toLowerCase() && v.startsWith(JSON_MIME);
	        })) === null || _a === void 0 ? void 0 : _a[1];
	        return this.content(preservedContentType || JSON_MIME).body(JSON.stringify(jsObject));
	    };
	    /**
	     * Converts the javascript object to a FormData and sets the request body.
	     * @param formObject An object which will be converted to a FormData
	     * @param recursive If `true`, will recurse through all nested objects
	     * Can be set as an array of string to exclude specific keys.
	     * See https://github.com/elbywan/wretch/issues/68 for more details.
	     */
	    Wretcher.prototype.formData = function (formObject, recursive) {
	        if (recursive === void 0) { recursive = false; }
	        return this.body(convertFormData(formObject, recursive));
	    };
	    /**
	     * Converts the input to an url encoded string and sets the content-type header and body.
	     * If the input argument is already a string, skips the conversion part.
	     *
	     * @param input An object to convert into an url encoded string or an already encoded string
	     */
	    Wretcher.prototype.formUrl = function (input) {
	        return this
	            .body(typeof input === "string" ? input : convertFormUrl(input))
	            .content("application/x-www-form-urlencoded");
	    };
	    return Wretcher;
	}());
	// Internal helpers
	var appendQueryParams = function (url, qp, replace) {
	    var queryString;
	    if (typeof qp === "string") {
	        queryString = qp;
	    }
	    else {
	        var usp = config.polyfill("URLSearchParams", { instance: true });
	        for (var key in qp) {
	            if (qp[key] instanceof Array) {
	                for (var _i = 0, _a = qp[key]; _i < _a.length; _i++) {
	                    var val = _a[_i];
	                    usp.append(key, val);
	                }
	            }
	            else {
	                usp.append(key, qp[key]);
	            }
	        }
	        queryString = usp.toString();
	    }
	    var split = url.split("?");
	    if (!queryString)
	        return replace ? split[0] : url;
	    if (replace || split.length < 2)
	        return split[0] + "?" + queryString;
	    return url + "&" + queryString;
	};
	function convertFormData(formObject, recursive, formData, ancestors) {
	    if (recursive === void 0) { recursive = false; }
	    if (formData === void 0) { formData = config.polyfill("FormData", { instance: true }); }
	    if (ancestors === void 0) { ancestors = []; }
	    Object.entries(formObject).forEach(function (_a) {
	        var key = _a[0], value = _a[1];
	        var formKey = ancestors.reduce(function (acc, ancestor) { return (acc ? acc + "[" + ancestor + "]" : ancestor); }, null);
	        formKey = formKey ? formKey + "[" + key + "]" : key;
	        if (value instanceof Array) {
	            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
	                var item = value_1[_i];
	                formData.append(formKey + "[]", item);
	            }
	        }
	        else if (recursive &&
	            typeof value === "object" &&
	            (!(recursive instanceof Array) ||
	                !recursive.includes(key))) {
	            if (value !== null) {
	                convertFormData(value, recursive, formData, __spreadArray(__spreadArray([], ancestors), [key]));
	            }
	        }
	        else {
	            formData.append(formKey, value);
	        }
	    });
	    return formData;
	}
	function encodeQueryValue(key, value) {
	    return encodeURIComponent(key) +
	        "=" +
	        encodeURIComponent(typeof value === "object" ?
	            JSON.stringify(value) :
	            "" + value);
	}
	function convertFormUrl(formObject) {
	    return Object.keys(formObject)
	        .map(function (key) {
	        var value = formObject[key];
	        if (value instanceof Array) {
	            return value.map(function (v) { return encodeQueryValue(key, v); }).join("&");
	        }
	        return encodeQueryValue(key, value);
	    })
	        .join("&");
	}

	var factory = Wretcher.factory;
	factory["default"] = Wretcher.factory;

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.usingDomains = false;

	EventEmitter.prototype.domain = undefined;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	EventEmitter.init = function() {
	  this.domain = null;
	  if (EventEmitter.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active ) ;
	  }

	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n))
	    throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn)
	    handler.call(self);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn)
	    handler.call(self, arg1);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn)
	    handler.call(self, arg1, arg2);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn)
	    handler.call(self, arg1, arg2, arg3);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2, arg3);
	  }
	}

	function emitMany(handler, isFn, self, args) {
	  if (isFn)
	    handler.apply(self, args);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].apply(self, args);
	  }
	}

	EventEmitter.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var doError = (type === 'error');

	  events = this._events;
	  if (events)
	    doError = (doError && events.error == null);
	  else if (!doError)
	    return false;

	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er)
	        er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }

	  handler = events[type];

	  if (!handler)
	    return false;

	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++)
	        args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');

	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] :
	                                          [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' +
	                            existing.length + ' ' + type + ' listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }

	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');

	      events = this._events;
	      if (!events)
	        return this;

	      list = events[type];
	      if (!list)
	        return this;

	      if (list === listener || (list.listener && list.listener === listener)) {
	        if (--this._eventsCount === 0)
	          this._events = new EventHandlers();
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length; i-- > 0;) {
	          if (list[i] === listener ||
	              (list[i].listener && list[i].listener === listener)) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (list.length === 1) {
	          list[0] = undefined;
	          if (--this._eventsCount === 0) {
	            this._events = new EventHandlers();
	            return this;
	          } else {
	            delete events[type];
	          }
	        } else {
	          spliceOne(list, position);
	        }

	        if (events.removeListener)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events;

	      events = this._events;
	      if (!events)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (!events.removeListener) {
	        if (arguments.length === 0) {
	          this._events = new EventHandlers();
	          this._eventsCount = 0;
	        } else if (events[type]) {
	          if (--this._eventsCount === 0)
	            this._events = new EventHandlers();
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        for (var i = 0, key; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = new EventHandlers();
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners) {
	        // LIFO order
	        do {
	          this.removeListener(type, listeners[listeners.length - 1]);
	        } while (listeners[0]);
	      }

	      return this;
	    };

	EventEmitter.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;

	  if (!events)
	    ret = [];
	  else {
	    evlistener = events[type];
	    if (!evlistener)
	      ret = [];
	    else if (typeof evlistener === 'function')
	      ret = [evlistener.listener || evlistener];
	    else
	      ret = unwrapListeners(evlistener);
	  }

	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
	    list[i] = list[k];
	  list.pop();
	}

	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--)
	    copy[i] = arr[i];
	  return copy;
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	let debug = false;
	let realPeerConnection = null;
	function enableDebug(newValue) {
	    debug = newValue;
	}
	function log(...options) {
	    debug && console.log(...arguments);
	}
	class PeerMetricsError extends Error {
	}
	function wrapPeerConnection(global) {
	    if (global.RTCPeerConnection) {
	        realPeerConnection = global.RTCPeerConnection;
	        let peerConnectionEventEmitter = new EventEmitter();
	        // this is the ideal way but it causes problems with AdBlocker's wrapper
	        // class RTCPeerConnection extends global.RTCPeerConnection {
	        //   constructor(parameters) {
	        //     super(parameters)
	        //     peerConnectionEventEmitter.emit('newRTCPeerconnection', this)
	        //   }
	        // }
	        // global.RTCPeerConnection = RTCPeerConnection
	        let WrappedRTCPeerConnection = function (configuration, constraints) {
	            let peerconnection = new realPeerConnection(configuration, constraints);
	            peerConnectionEventEmitter.emit('newRTCPeerconnection', peerconnection);
	            return peerconnection;
	        };
	        WrappedRTCPeerConnection.prototype = realPeerConnection.prototype;
	        global.RTCPeerConnection = WrappedRTCPeerConnection;
	        return peerConnectionEventEmitter;
	    }
	    return false;
	}

	let externalApi;
	let token = '';
	let start = 0;
	const DEFAULT_OPTIONS = {
	    batchConnectionEvents: false,
	    connectionTimeoutValue: 500
	};
	const REQUEST_TIMEOUT = 10 * 1000;
	const EXPONENTIAL_BACKOFF = 500;
	const MAX_EXPONENTIAL_BACKOFF = 60 * 1000;
	const UNRECOVERABLE_ERRORS = [
	    'domain_not_allowed',
	    'quota_exceeded',
	    'invalid_api_key',
	    'app_not_recording'
	];
	/**
	 * An object to map endpoint names to URLs
	 * @type {Object}
	 */
	let urlsMap = {
	    'session': '/sessions',
	    'events-getusermedia': '/events/get-user-media',
	    'events-browser': '/events/browser',
	    'connection': '/connection',
	    'batch-connection': '/connection/batch',
	    'stats': '/stats',
	    'track': '/tracks'
	};
	class ApiWrapper {
	    constructor(options) {
	        this.unrecoverable = UNRECOVERABLE_ERRORS;
	        /**
	         * If we should batch connections events
	         * defaults to false and we'll let the server tell us if we should
	         */
	        this.batchConnectionEvents = DEFAULT_OPTIONS.batchConnectionEvents;
	        this.connectionEvents = [];
	        this.connectionTimeout = null;
	        this.apiKey = options.apiKey;
	        this.apiRoot = options.apiRoot;
	        this.user = options.user;
	        // debug options
	        this.mockRequests = options.mockRequests;
	        externalApi = factory()
	            // Set the base url
	            .url(this.apiRoot)
	            .content('text/plain')
	            .accept('application/json')
	            .options({
	            mode: 'cors',
	            cache: 'no-cache',
	            redirect: 'follow'
	        });
	        // .catcher(405, this._handleFailedRequest)
	    }
	    /*
	     * Checks to see if the apiKey is valid
	     * and if the account has enough ...
	     * initialiaze the session
	     * @return {Promise} The fetch promise
	     */
	    async initialize(data) {
	        let toSend = { ...data };
	        // add the user details
	        // used to create the participant object
	        toSend.userId = this.user.userId;
	        toSend.userName = this.user.userName;
	        toSend.apiKey = this.apiKey;
	        return this.makeRequest({
	            // this is the only hard coded path that should not change
	            path: '/initialize',
	            // @ts-ignore
	            data: toSend
	        }).then((response) => {
	            if (response) {
	                if (response.urls) {
	                    // update the urls map with the response from server
	                    urlsMap = { urlsMap, ...response.urls };
	                }
	                if (typeof response.batchConnectionEvents === 'boolean') {
	                    this.batchConnectionEvents = response.batchConnectionEvents;
	                }
	                token = response.token;
	            }
	            return response;
	        });
	    }
	    createSession(data) {
	        return this.makeRequest({
	            path: urlsMap['session'],
	            data: data
	        }).then((response) => {
	            if (response.token) {
	                token = response.token;
	            }
	        });
	    }
	    /**
	     * Used to save initial data about the current user
	     * @return {Promise} The fetch promise
	     */
	    addSessionDetails(data) {
	        return this.makeRequest({
	            path: urlsMap['session'],
	            method: 'put',
	            data: data
	        });
	    }
	    sendPageEvent(data) {
	        return this.makeRequest({
	            path: urlsMap['events-browser'],
	            data: data
	        });
	    }
	    sendCustomEvent(data) {
	        return this.makeRequest({
	            path: urlsMap['events-browser'],
	            data: {
	                eventName: data.eventName || 'custom',
	                data: data
	            }
	        });
	    }
	    sendMediaDeviceChange(devices) {
	        return this.makeRequest({
	            path: urlsMap['events-browser'],
	            data: {
	                eventName: 'mediaDeviceChange',
	                devices: devices
	            }
	        });
	    }
	    saveGetUserMediaEvent(data) {
	        return this.makeRequest({
	            path: urlsMap['events-getusermedia'],
	            data: {
	                eventName: 'getUserMedia',
	                data: data
	            }
	        });
	    }
	    sendConnectionEvent(data) {
	        if (this.batchConnectionEvents === false) {
	            return this._sendConnectionEvent(data);
	        }
	        if (this.connectionTimeout !== null) {
	            clearTimeout(this.connectionTimeout);
	        }
	        this.connectionTimeout = window.setTimeout(() => {
	            this.sendBatchConnectionEvents();
	        }, DEFAULT_OPTIONS.connectionTimeoutValue);
	        this.connectionEvents.push([data, Date.now()]);
	    }
	    sendBatchConnectionEvents() {
	        let events = Array.from(this.connectionEvents);
	        this.connectionEvents = [];
	        clearTimeout(this.connectionTimeout);
	        if (events.length === 1) {
	            this._handleSingleConnectionEvent(events[0]);
	        }
	        else {
	            this._handleBatchConnectionEvents(events);
	        }
	    }
	    _handleSingleConnectionEvent([ev, timestamp]) {
	        let now = Date.now();
	        let { eventName, peerId, data } = ev;
	        return this._sendConnectionEvent({
	            eventName,
	            peerId,
	            timeDelta: now - timestamp,
	            data
	        });
	    }
	    _handleBatchConnectionEvents(events) {
	        let now = Date.now();
	        let data = events.map((ev) => {
	            let [eventData, timestamp] = ev;
	            let { eventName, peerId, data } = eventData;
	            return {
	                eventName,
	                peerId,
	                timeDelta: now - timestamp,
	                data
	            };
	        });
	        return this._sendBatchConnectionEvents(data);
	    }
	    _sendConnectionEvent(data) {
	        return this.makeRequest({
	            path: urlsMap['connection'],
	            data: data
	        });
	    }
	    _sendBatchConnectionEvents(data) {
	        return this.makeRequest({
	            path: urlsMap['batch-connection'],
	            data: data
	        });
	    }
	    sendWebrtcStats(data) {
	        return this.makeRequest({
	            path: urlsMap['stats'],
	            retry: true,
	            data: data
	        });
	    }
	    sendTrackEvent(data) {
	        const method = data.event === 'ontrack' ? 'post' : 'put';
	        return this.makeRequest({
	            path: urlsMap['track'],
	            method: method,
	            retry: true,
	            data: data
	        });
	    }
	    /**
	     * This is a special method because it uses beacons instead of fetch
	     */
	    sendLeaveEvent(event) {
	        let path = urlsMap['events-browser'];
	        let data = JSON.stringify({
	            token: token,
	            eventName: event
	        });
	        if (this.mockRequests) {
	            return log('request', Date.now() - start, urlsMap['events-browser'], data);
	        }
	        externalApi.url(path).options({ keepalive: true }).post(data);
	    }
	    sendBeaconEvent(event) {
	        let url = this._createUrl(urlsMap['events-browser']);
	        let data = JSON.stringify({
	            token: token,
	            eventName: event
	        });
	        if (navigator.sendBeacon) {
	            // send a beacon event
	            navigator.sendBeacon(url, data);
	        }
	    }
	    async makeRequest(options) {
	        // we just need the path, the base url is set at initialization
	        let { path, timestamp, data, retry = false } = options;
	        if (path === '/initialize' && start === 0) {
	            start = Date.now();
	        }
	        log('request', Date.now() - start, path, data);
	        // most of the request require a token
	        // if we have it, add it to the body
	        if (token) {
	            data.token = token;
	        }
	        // if we mock requests, resolve immediately
	        if (this.mockRequests) {
	            return new Promise((resolve) => {
	                let response = {};
	                if (data.eventName === 'addConnection') {
	                    response = {
	                        // @ts-ignore
	                        peer_id: data.peerId
	                    };
	                }
	                // mock a request that takes anywhere between 0 and 1000ms
	                setTimeout(() => resolve(response), Math.floor(Math.random() * 1000));
	            });
	        }
	        // if we have a timestamps than this event happened in the past
	        // add the delta attribute so the backend knows
	        // we might get the timestamp attribute inside data
	        // this happens for events that we manually delay sending
	        timestamp = timestamp || data.timestamp;
	        if (timestamp) {
	            data.delta = Date.now() - timestamp;
	        }
	        else {
	            // if not, than timestamp this request to be used in case of failure
	            timestamp = Date.now();
	        }
	        let toSend;
	        try {
	            toSend = JSON.stringify(data);
	        }
	        catch (e) {
	            throw new Error('Could not stringify request data');
	        }
	        // keep the content type as text plain to avoid CORS preflight requests
	        let request = externalApi.url(path).content('text/plain');
	        let requestToMake;
	        if (options.method === 'put') {
	            requestToMake = request.put(toSend);
	        }
	        else {
	            requestToMake = request.post(toSend);
	        }
	        return requestToMake
	            .setTimeout(REQUEST_TIMEOUT)
	            .json(this._handleResponse)
	            .catch((response) => {
	            // if we should retry the request
	            if (retry) {
	                return this._handleFailedRequest({ response, timestamp, options });
	            }
	            throw response;
	        });
	    }
	    async _handleResponse(response) {
	        if (response) {
	            log(response);
	        }
	        return response;
	    }
	    /**
	     * Used to handle a failed fetch request
	     * @param  {Object} arg
	     */
	    async _handleFailedRequest(arg) {
	        let { response, timestamp, options } = arg;
	        let { backoff = EXPONENTIAL_BACKOFF } = options;
	        let body;
	        try {
	            body = JSON.parse(response.message);
	            // we have a domain restriction, app paused, invalid api key or over quota, no need for retry
	            if (this.unrecoverable.includes(body.error_code)) {
	                return Promise.reject(body);
	            }
	        }
	        catch (e) { }
	        // if we got an error, then the user is offline or a timeout
	        if (response instanceof Error || response.status > 500) {
	            // double the value with each run. starts at 1s
	            backoff *= 2;
	            // don't go over 1 min
	            if (backoff > MAX_EXPONENTIAL_BACKOFF) {
	                throw new Error('request failed after exponential backoff');
	            }
	            return new Promise((resolve, reject) => {
	                setTimeout(() => {
	                    options.timestamp = timestamp;
	                    options.backoff = backoff;
	                    this.makeRequest(options).then(resolve).catch(reject);
	                }, backoff);
	            });
	        }
	        return Promise.reject(body);
	    }
	    _createUrl(path = '/') {
	        return `${this.apiRoot}${path}`;
	    }
	}

	class SdkIntegration extends EventEmitter {
	    constructor() {
	        super(...arguments);
	        this.foundIntegration = false;
	    }
	    addIntegration(options, peerConnectionEventEmitter) {
	        this.addMediaSoupIntegration(options.mediasoup);
	        this.addJanusIntegration(options.janus);
	        this.addLivekitIntegration(options.livekit);
	        this.addTwilioVideoIntegration(options.twilioVideo);
	        this.addVonageIntegration(options.vonage, peerConnectionEventEmitter);
	        this.addAgoraIntegration(options.agora, peerConnectionEventEmitter);
	        return this.foundIntegration;
	    }
	    addMediaSoupIntegration(options) {
	        if (!options)
	            return;
	        let { device, serverId = 'mediasoup-sfu-server', serverName = 'MediaSoup SFU Server' } = options;
	        // check if the user sent the right device instance
	        if (!device || !device.observer) {
	            throw new Error("For integrating with MediaSoup, you need to send an instace of mediasoupClient.Device().");
	        }
	        serverId = this.checkServerId(serverId);
	        serverName = this.checkServerName(serverName);
	        this.webrtcSDK = 'mediasoup';
	        // listen for new transports
	        device.observer.on('newtransport', (transport) => {
	            this.emit('newConnection', {
	                pc: transport.handler._pc,
	                peerId: serverId,
	                peerName: serverName,
	                isSfu: true,
	                remote: true
	            });
	        });
	        this.foundIntegration = true;
	    }
	    addJanusIntegration(options) {
	        if (!options)
	            return;
	        let { plugin, serverId = 'janus-sfu-server', serverName = 'Janus SFU Server' } = options;
	        // check if the user sent the right plugin instance
	        if (!plugin || typeof plugin.webrtcStuff !== 'object') {
	            throw new Error("For integrating with Janus, you need to send an instace of plugin after calling .attach().");
	        }
	        serverId = this.checkServerId(serverId);
	        serverName = this.checkServerName(serverName);
	        // if the pc is already attached. should not happen
	        if (plugin.webrtcStuff.pc) {
	            this.emit('newConnection', {
	                pc: plugin.webrtcStuff.pc,
	                peerId: serverId,
	                peerName: serverName,
	                isSfu: true,
	                remote: true
	            });
	        }
	        else {
	            let boundEmit = this.emit.bind(this);
	            // create a proxy so we can watch when the pc gets created
	            plugin.webrtcStuff = new Proxy(plugin.webrtcStuff, {
	                set: function (obj, prop, value) {
	                    if (prop === 'pc') {
	                        boundEmit('newConnection', {
	                            pc: value,
	                            peerId: serverId,
	                            peerName: serverName,
	                            isSfu: true,
	                            remote: true
	                        });
	                    }
	                    obj[prop] = value;
	                    return true;
	                }
	            });
	        }
	        this.webrtcSDK = 'janus';
	        this.foundIntegration = true;
	    }
	    addLivekitIntegration(options) {
	        if (!options)
	            return;
	        let { room, serverId = 'livekit-sfu-server', serverName = 'LiveKit SFU Server' } = options;
	        // check if the user sent the right room instance
	        if (!room || typeof room.engine !== 'object') {
	            throw new Error("For integrating with LiveKit, you need to send an instace of the room as soon as creating it.");
	        }
	        serverId = this.checkServerId(serverId);
	        serverName = this.checkServerName(serverName);
	        // listen for the transportCreated event
	        room.engine.on('transportsCreated', (publiser, subscriber) => {
	            this.emit('newConnection', {
	                pc: publiser.pc,
	                peerId: serverId,
	                peerName: serverName,
	                isSfu: true,
	                remote: true
	            });
	            this.emit('newConnection', {
	                pc: subscriber.pc,
	                peerId: serverId,
	                peerName: serverName,
	                isSfu: true,
	                remote: true
	            });
	        });
	        this.webrtcSDK = 'livekit';
	        this.foundIntegration = true;
	    }
	    addTwilioVideoIntegration(options) {
	        if (!options)
	            return;
	        let { room } = options;
	        // check if the user sent the right room instance
	        if (!room || typeof room._signaling !== 'object') {
	            throw new Error("For integrating with Twilio Video SDK, you need to send an instace of the room as soon as you create it.");
	        }
	        room._signaling._peerConnectionManager._peerConnections.forEach(pcs => {
	            this.emit('newConnection', {
	                pc: pcs._peerConnection._peerConnection,
	                peerId: 'twilio-sfu-server',
	                peerName: 'Twilio SFU Server',
	                isSfu: true,
	                remote: true
	            });
	        });
	        this.webrtcSDK = 'twilioVideo';
	        this.foundIntegration = true;
	    }
	    addVonageIntegration(vonage, peerConnectionEventEmitter) {
	        if (!vonage)
	            return;
	        if (!peerConnectionEventEmitter) {
	            throw new Error("Could not integrate with Vonage. Please make sure you set PeerMetricsOptions.wrapPeerConnection before loading the PeerMetrics script.");
	        }
	        peerConnectionEventEmitter.on('newRTCPeerconnection', (pc) => {
	            this.emit('newConnection', {
	                pc: pc,
	                peerId: 'vonage-sfu-server',
	                peerName: 'Vonage SFU server',
	                isSfu: true,
	                remote: true
	            });
	        });
	        this.webrtcSDK = 'vonage';
	        this.foundIntegration = true;
	    }
	    addAgoraIntegration(agora, peerConnectionEventEmitter) {
	        if (!agora)
	            return;
	        if (!peerConnectionEventEmitter) {
	            throw new Error("Could not integrate with agora. Please make sure you set PeerMetricsOptions.wrapPeerConnection before loading the PeerMetrics script.");
	        }
	        peerConnectionEventEmitter.on('newRTCPeerconnection', (pc) => {
	            this.emit('newConnection', {
	                pc: pc,
	                peerId: 'agora-sfu-server',
	                peerName: 'Agora SFU server',
	                isSfu: true,
	                remote: true
	            });
	        });
	        this.webrtcSDK = 'agora';
	        this.foundIntegration = true;
	    }
	    /**
	     * Checks if the serverId is valid
	     * @param  {string} serverId [description]
	     * @return {string}          [description]
	     */
	    checkServerId(serverId) {
	        if (typeof serverId !== 'string') {
	            throw new Error("The serverId must be a string");
	        }
	        else if (serverId.length > CONSTRAINTS.peer.idLength) {
	            throw new Error(`The serverId must be no longer than ${CONSTRAINTS.peer.idLength} characters.`);
	        }
	        return serverId;
	    }
	    /**
	     * Used to check if the serverName argument is valid
	     * @param serverName the string to check
	     * @returns the string
	     */
	    checkServerName(serverName) {
	        if (serverName) {
	            if (typeof serverName !== 'string') {
	                throw new Error('serverName should be a string');
	            }
	            // if the name is too long, just snip it
	            if (serverName.length > CONSTRAINTS.peer.nameLength) {
	                serverName = serverName.slice(CONSTRAINTS.peer.nameLength);
	            }
	        }
	        return serverName;
	    }
	}

	/**
	 * Used to keep track of peers
	 * @type {Object}
	 */
	let peersToMonitor = {};
	/**
	 * Used to keep track of connection IDs: the ones from WebrtcStats and the ones from the DB
	 */
	let monitoredConnections = {};
	let eventQueue = [];
	let peerConnectionEventEmitter = null;
	// if the user has provided an options object
	if (window && typeof window.PeerMetricsOptions === 'object') {
	    if (window.PeerMetricsOptions.wrapPeerConnection === true) {
	        peerConnectionEventEmitter = wrapPeerConnection(window);
	        if (!peerConnectionEventEmitter) {
	            console.warn('Could not wrap window.RTCPeerConnection');
	        }
	    }
	}
	class PeerMetrics {
	    /**
	     * Used to initialize the SDK
	     * @param  {Object} options
	     */
	    constructor(options) {
	        this._initialized = false;
	        this.webrtcSDK = '';
	        // check if options are valid
	        if (typeof options !== 'object') {
	            throw new Error('Invalid argument. Expected object, got something else.');
	        }
	        options = { ...DEFAULT_OPTIONS$1, ...options };
	        // check if browser
	        if (typeof window === 'undefined' || typeof navigator === 'undefined') {
	            throw new Error('The SDK is meant to be used in a browser.');
	        }
	        // check if webrtc compatible
	        let pc = window.RTCPeerConnection;
	        let gum = navigator.mediaDevices.getUserMedia;
	        if (!pc || !gum) {
	            throw new Error('This device doesn\'t seem to support RTCPeerConnection or getUserMedia');
	        }
	        // check if fetch is available
	        if (typeof window.fetch === 'undefined') {
	            throw new Error('This device doesn\'t seem to support the fetch API.');
	        }
	        // validate options
	        if (!options.apiKey) {
	            throw new Error('Missing argument apiKey');
	        }
	        if (!options.conferenceId) {
	            throw new Error('Missing argument conferenceId');
	        }
	        if ('appVersion' in options) {
	            if (typeof options.appVersion !== 'string') {
	                throw new Error('appVersion must be a string');
	            }
	            if (options.appVersion.length > 16) {
	                throw new Error('appVersion must have a max length of 16');
	            }
	        }
	        // if meta tags were added
	        if ('meta' in options) {
	            if (!options.meta || typeof options.meta !== 'object') {
	                throw new Error('The meta attribute should be of type object');
	            }
	            const keys = Object.keys(options.meta);
	            if (keys.length > CONSTRAINTS.meta.length) {
	                throw new Error(`Argument meta should only have a maximum of ${CONSTRAINTS.meta.length} attributes`);
	            }
	            for (const key of keys) {
	                if (key.length > CONSTRAINTS.meta.keyLength) {
	                    console.error(`Meta keys should not be larger than ${CONSTRAINTS.meta.keyLength}`);
	                    delete options.meta[key];
	                    continue;
	                }
	                // make sure each value is an accepted format
	                const value = options.meta[key];
	                if (!CONSTRAINTS.meta.accepted.includes(typeof value)) {
	                    console.error(`Meta values should be one of the following: ${CONSTRAINTS.meta.accepted.join(', ')}`);
	                    delete options.meta[key];
	                }
	            }
	        }
	        // create the user model
	        // userId
	        // userName
	        // conferenceId
	        // conference name
	        this.user = new User(options);
	        /**
	         * Let the user specify a different apiRoot
	         * useful in dev, might be removed for prod
	         * @type {String}
	         */
	        var apiRoot = options.apiRoot || DEFAULT_OPTIONS$1.apiRoot;
	        // create the api wrapper, used to talk with the api server
	        this.apiWrapper = new ApiWrapper({
	            apiRoot: apiRoot,
	            apiKey: options.apiKey,
	            mockRequests: options.mockRequests,
	            user: this.user
	        });
	        /**
	         * the initial options the user used to instantiate the sdk
	         * @type {[type]}
	         */
	        this._options = options;
	        this.pageEvents = options.pageEvents;
	        enableDebug(!!options.debug);
	    }
	    /**
	     * Used to initialize the sdk
	     * @return {Promise}
	     */
	    async initialize() {
	        let response;
	        // if we are already initialized
	        if (this._initialized)
	            return;
	        try {
	            // initialize the session
	            // check if the apiKey is valid
	            // check quota, etc
	            // create the conference
	            response = await this.apiWrapper.initialize({
	                conferenceId: this._options.conferenceId,
	                conferenceName: this._options.conferenceName
	            });
	        }
	        catch (responseError) {
	            const error = new PeerMetricsError(responseError.message);
	            // if the api key is not valid
	            // or the quota is exceded
	            if (responseError.error_code) {
	                error.code = responseError.error_code;
	            }
	            throw error;
	        }
	        // if the apiKey is ok
	        // what's the interval desired
	        // gather platform info about the user's device. OS, browser, etc
	        // we need to do them after gUM is called to get the correct labels for devices
	        // when we get all of them send them over
	        let sessionData = await this.user.getUserDetails();
	        // add app version and meta if present
	        sessionData.appVersion = this._options.appVersion;
	        sessionData.meta = this._options.meta;
	        sessionData.webrtcSdk = this.webrtcSDK;
	        try {
	            // save this initial details about this user
	            await this.apiWrapper.createSession(sessionData);
	        }
	        catch (e) {
	            console.error(e);
	            throw new Error('Could not start session.');
	        }
	        this._initialized = true;
	        // add global event listeners
	        this.addPageEventListeners(this.pageEvents);
	        this.addMediaDeviceChangeListener();
	        this._initializeStatsModule(response.getStatsInterval);
	    }
	    /**
	     * Wrapp native RTCPeerConnection class
	     * @return {boolean} if the wrapping was successful
	     */
	    static wrapPeerConnection() {
	        if (!window) {
	            throw new Error('Could not find gloal window. This method should be called in a browser context.');
	        }
	        peerConnectionEventEmitter = wrapPeerConnection(window);
	        if (!peerConnectionEventEmitter) {
	            log('Could not wrap window.RTCPeerConnection');
	            return false;
	        }
	        return true;
	    }
	    async addPeer(options) {
	        console.warn('The addPeer() method has been deprecated, please use addConnection() instead');
	        return this.addConnection(options);
	    }
	    /**
	     * Used to start monitoring for a peer
	     * @param {Object} options Options for this peer
	     */
	    async addConnection(options) {
	        if (!this._initialized) {
	            throw new Error('SDK not initialized. Please call initialize() first.');
	        }
	        if (!this.webrtcStats) {
	            throw new Error('The stats module is not instantiated yet.');
	        }
	        // if the user is using an sdk integration, warn him that a call to addConnection is not needed
	        // if (this.webrtcSDK) {
	        //   console.warn('You\'ve enabled an integration with an WebRTC sdk, a call to addConnection() is not needed anymore.')
	        // }
	        if (typeof options !== 'object') {
	            throw new Error('Argument for addConnection() should be an object.');
	        }
	        let { pc, peerId, peerName, isSfu } = options;
	        // make the peerId a string
	        peerId = String(peerId);
	        if (!pc) {
	            throw new Error('Missing argument pc: RTCPeerConnection.');
	        }
	        if (!peerId) {
	            throw new Error('Missing argument peerId.');
	        }
	        // validate the peerName if it exists
	        if (peerName) {
	            if (typeof peerName !== 'string') {
	                throw new Error('peerName should be a string');
	            }
	            // if the name is too long, just snip it
	            if (peerName.length > CONSTRAINTS.peer.nameLength) {
	                peerName = peerName.slice(CONSTRAINTS.peer.nameLength);
	            }
	        }
	        if (peerId === this.user.userId) {
	            throw new Error('peerId can\'t be the same as the id used to initialize PeerMetrics.');
	        }
	        log('addConnection', options);
	        let connectionId;
	        try {
	            // add the peer to webrtcStats now, so we don't miss any events
	            let statsResponse = await this.webrtcStats.addConnection({ peerId, pc });
	            connectionId = statsResponse.connectionId;
	            // make the request to add the peer to DB
	            let response = await this.apiWrapper.sendConnectionEvent({
	                eventName: 'addConnection',
	                peerId: peerId,
	                peerName: peerName,
	                connectionState: pc.connectionState,
	                isSfu: !!isSfu
	            });
	            if (!response) {
	                throw new Error('There was a problem while adding this connection');
	            }
	            // we'll receive a new peer id, use peersToMonitor to make the connection between them
	            peersToMonitor[peerId] = {
	                id: response.peer_id,
	                connections: []
	            };
	            monitoredConnections[connectionId] = response.connection_id;
	            peersToMonitor[peerId].connections.push(response.connection_id);
	            // all the events that we captured while waiting for 'addConnection' are here
	            // send them to the server
	            eventQueue.map((event) => {
	                this._handleTimelineEvent(event);
	            });
	            // clear the queue
	            eventQueue.length = 0;
	            return {
	                connectionId: monitoredConnections[connectionId]
	            };
	        }
	        catch (e) {
	            log(e);
	            this.webrtcStats.removeConnection({ connectionId });
	            throw e;
	        }
	    }
	    /**
	     * Stop listening for events for a specific connection
	     */
	    async removeConnection(options) {
	        let { peerId, connectionId, pc } = options;
	        if (!peerId && !pc && !connectionId) {
	            throw new Error('Missing arguments. You need to either send a peerId and pc, or a connectionId.');
	        }
	        if ((peerId && !pc) || (pc && !peerId)) {
	            throw new Error('By not sending a connectionId, you need to send a peerId and a pc (RTCPeerConnection instance)');
	        }
	        // if we've received a connectionId, we need to find the internal one
	        // we're using with WebrtcStats
	        if (connectionId) {
	            const internalConnectionId = Object.keys(monitoredConnections).find((key) => monitoredConnections[key] === connectionId);
	            if (!internalConnectionId) {
	                throw new Error(`Could not find a connection with this id ${connectionId}`);
	            }
	            // rewrite options with the new connectionId
	            options = { connectionId: internalConnectionId };
	        }
	        let { connectionId: internalId } = this.webrtcStats.removeConnection(options);
	        if (peerId) {
	            connectionId = Object.keys(monitoredConnections).find((key) => monitoredConnections[key] === internalId);
	        }
	        else if (connectionId) {
	            peerId = Object.values(peersToMonitor).find((peer) => peer.connections.includes(connectionId)).id;
	        }
	        // we need both connectionId and peerId for this request
	        await this.apiWrapper.sendConnectionEvent({
	            eventName: 'removeConnection',
	            connectionId,
	            peerId: peerId
	        });
	        // cleanup
	        delete monitoredConnections[connectionId];
	    }
	    /**
	     * Stop listening for all connections for a specific peer
	     * @param {string} peerId The peer ID to stop listening to
	     */
	    async removePeer(peerId) {
	        if (typeof peerId !== 'string') {
	            throw new Error('Argument for removePeer() should be a string.');
	        }
	        if (!peersToMonitor[peerId]) {
	            throw new Error(`Could not find peer with id ${peerId}`);
	        }
	        this.webrtcStats.removePeer(peerId);
	        await this.apiWrapper.sendConnectionEvent({
	            eventName: 'removePeer',
	            peerId: peerId
	        });
	        delete peersToMonitor[peerId];
	    }
	    /**
	     * Method used to add an integration with different WebRTC SDKs
	     * @param options Options object
	     */
	    async addSdkIntegration(options) {
	        let sdkIntegration = new SdkIntegration();
	        sdkIntegration.on('newConnection', (options) => {
	            this.addConnection(options);
	        });
	        sdkIntegration.addIntegration(options, peerConnectionEventEmitter);
	        this.webrtcSDK = sdkIntegration.webrtcSDK;
	        // if the user is integrating with any sdk
	        if (sdkIntegration.foundIntegration) {
	            // and PM is already initialized
	            if (this._initialized) {
	                // update the session to signal as such
	                this.apiWrapper.addSessionDetails({
	                    webrtcSdk: this.webrtcSDK
	                });
	            }
	        }
	        else {
	            throw new Error("We could not find any integration details in the options object that was passed in.");
	        }
	    }
	    /**
	     * Add a custom event for this user
	     * @param {Object} options The details for this event
	     */
	    async addEvent(options) {
	        if (typeof options !== 'object') {
	            throw new Error('Parameter for addEvent() should be an object.');
	        }
	        if (options.eventName && options.eventName.length > CONSTRAINTS.customEvent.eventNameLength) {
	            throw new Error(`eventName should be shorter than ${CONSTRAINTS.customEvent.eventNameLength}.`);
	        }
	        try {
	            let json = JSON.stringify(options);
	            if (json.length > CONSTRAINTS.customEvent.bodyLength) {
	                throw new Error('Custom event body size limit reached.');
	            }
	        }
	        catch (e) {
	            throw new Error('Custom event is not serializable.');
	        }
	        await this.apiWrapper.sendCustomEvent(options);
	    }
	    /**
	     * Called when the current user has muted the mic
	     */
	    async mute() {
	        return this.apiWrapper.sendCustomEvent({ eventName: 'mute' });
	    }
	    /**
	     * Called when the current user has unmuted the mic
	     */
	    async unmute() {
	        return this.apiWrapper.sendCustomEvent({ eventName: 'unmute' });
	    }
	    addPageEventListeners(options) {
	        window.addEventListener('beforeunload', () => {
	            this.apiWrapper.sendLeaveEvent('beforeunload');
	        });
	        window.addEventListener('unload', () => {
	            this.apiWrapper.sendBeaconEvent('unload');
	        });
	        // tab focus/unfocus
	        if (options.pageVisibility && window.document) {
	            this.addPageVisibilityListeners(window.document);
	        }
	        // track full screen
	        // if (options.fullScreen) {
	        //  this.addFullScreenEventListeners()
	        // }
	    }
	    addPageVisibilityListeners(document) {
	        // Set the name of the hidden property and the change event for visibility
	        let hidden, visibilityChange;
	        if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
	            hidden = 'hidden';
	            visibilityChange = 'visibilitychange';
	        }
	        else if (typeof document.msHidden !== 'undefined') {
	            hidden = 'msHidden';
	            visibilityChange = 'msvisibilitychange';
	        }
	        else if (typeof document.webkitHidden !== 'undefined') {
	            hidden = 'webkitHidden';
	            visibilityChange = 'webkitvisibilitychange';
	        }
	        if (hidden === undefined) {
	            log('Page visibility is not supported');
	            return;
	        }
	        // TODO: inspire some functionality from
	        // https://github.com/addyosmani/visibly.js/blob/master/visibly.js
	        document.addEventListener(visibilityChange, (ev) => {
	            this.apiWrapper.sendPageEvent({
	                eventName: 'tabFocus',
	                focus: document[hidden]
	            });
	        }, false);
	    }
	    /**
	     * Add event listeners for fullScreen events
	     * from: https://gist.github.com/samccone/1653975
	     */
	    addFullScreenEventListeners() {
	        // TODO: add full screen events
	        if (document.body.requestFullscreen) {
	            window.addEventListener('fullscreenchange', (ev) => {
	                log(ev);
	                // this.apiWrapper.sendPageEvent({
	                //   eventName: 'fullScreen',
	                //   fullScreen: true
	                // })
	            });
	        }
	    }
	    addMediaDeviceChangeListener() {
	        navigator.mediaDevices.addEventListener('devicechange', () => {
	            // first get the new devices
	            return this.user.getDevices()
	                .then((devices) => {
	                this.user.devices = devices;
	                // and then send the event to the server
	                this.apiWrapper.sendMediaDeviceChange(devices);
	            });
	        });
	    }
	    _initializeStatsModule(getStatsInterval = DEFAULT_OPTIONS$1.getStatsInterval) {
	        // initialize the webrtc stats module
	        this.webrtcStats = new dist_1({
	            getStatsInterval: getStatsInterval,
	            rawStats: false,
	            statsObject: true,
	            filteredStats: false,
	            remote: this._options.remote,
	            wrapGetUserMedia: true,
	            logLevel: 'none'
	        });
	        this._addWebrtcStatsEventListeners();
	    }
	    /**
	     * Adds event listener for the stats library
	     */
	    _addWebrtcStatsEventListeners() {
	        this.webrtcStats
	            // just listen on the timeline and handle them differently
	            .on('timeline', this._handleTimelineEvent.bind(this));
	    }
	    _handleTimelineEvent(ev) {
	        if (ev.peerId) {
	            if (peersToMonitor[ev.peerId]) {
	                // update with the new peer
	                ev.peerId = peersToMonitor[ev.peerId].id;
	            }
	            else {
	                // add this special flag to signal that we've manually delayed sending this request
	                ev.delayed = true;
	                eventQueue.push(ev);
	                return;
	            }
	        }
	        // if we have a connectionId from the server, 
	        // swap it with the old value. same as peersToMonitor
	        if (ev.connectionId) {
	            if (ev.connectionId in monitoredConnections) {
	                ev.connectionId = monitoredConnections[ev.connectionId];
	            }
	            else {
	                ev.delayed = true;
	                eventQueue.push(ev);
	                return;
	            }
	        }
	        switch (ev.tag) {
	            case 'getUserMedia':
	                this._handleGumEvent(ev);
	                break;
	            case 'stats':
	                this._handleStatsEvent(ev);
	                break;
	            case 'track':
	                this._handleTrackEvent(ev);
	                break;
	            default:
	                this._handleConnectionEvent(ev);
	                break;
	        }
	    }
	    // Handle different types of events
	    // TODO: move this somewhere else
	    _handleGumEvent(ev) {
	        /**
	         * The data for this event
	         * Can have one of 3 arguments
	         *   constraints: the gUM constraints
	         *   stream: after we get the stream
	         *   error: well, the error
	         * @type {Object}
	         */
	        let data = ev.data;
	        /**
	         * The object that we'll save in the DB
	         * after we parse data
	         * @type {Object}
	         */
	        let dataToSend = {};
	        if (data.constraints) {
	            dataToSend.constraints = data.constraints;
	        }
	        // after we get the stream, make sure we captured all the devices
	        // only do this after we get the stream
	        if (data.stream) {
	            this.user.getDevices()
	                .then((devices) => {
	                // if we get more devices then before
	                if (devices.length !== this.user.devices.length) {
	                    // TODO: maybe save this as a change event?
	                    this.user.devices = devices;
	                    this.apiWrapper.addSessionDetails({
	                        devices: this.user.devices
	                    });
	                }
	            });
	            dataToSend = { ...data.details };
	        }
	        if (data.error) {
	            dataToSend.error = {
	                name: data.error.name,
	                message: data.error.message
	            };
	        }
	        this.apiWrapper.saveGetUserMediaEvent(dataToSend);
	    }
	    _handleStatsEvent(ev) {
	        let { data, peerId, connectionId, timeTaken } = ev;
	        this.apiWrapper.sendWebrtcStats({ data, peerId, connectionId, timeTaken });
	    }
	    _handleTrackEvent(ev) {
	        let { data, peerId, connectionId, event } = ev;
	        let dataToSend = {
	            event,
	            peerId,
	            connectionId,
	            trackId: null,
	            data: {}
	        };
	        if (event === 'ontrack') {
	            dataToSend.data = data.track;
	            delete dataToSend.data._track;
	        }
	        if (data.track) {
	            dataToSend.trackId = data.track.id;
	        }
	        else if (data.event) {
	            if (data.event.target) {
	                dataToSend.trackId = data.event.target.id;
	            }
	            if (data.event.detail && data.event.detail.check) {
	                dataToSend.data.check = data.event.detail.check;
	            }
	        }
	        else {
	            log('Received track event without track');
	        }
	        this.apiWrapper.sendTrackEvent(dataToSend);
	    }
	    async _handleConnectionEvent(ev) {
	        let { event, peerId, connectionId, data, delayed } = ev;
	        let eventData = data;
	        switch (event) {
	            case 'addConnection':
	                // we don't need the actual RTCPeerConnection object
	                delete eventData.options.pc;
	                // rename the event name
	                event = 'peerDetails';
	                break;
	            case 'onicecandidate':
	                if (data) {
	                    eventData = {
	                        address: data.address,
	                        candidate: data.candidate,
	                        component: data.component,
	                        foundation: data.foundation,
	                        port: data.port,
	                        priority: data.priority,
	                        protocol: data.protocol,
	                        relatedAddress: data.relatedAddress,
	                        relatedPort: data.relatedPort,
	                        sdpMLineIndex: data.sdpMLineIndex,
	                        sdpMid: data.sdpMid,
	                        tcpType: data.tcpType,
	                        type: data.type,
	                        usernameFragment: data.usernameFragment
	                    };
	                }
	                break;
	            case 'onicecandidateerror':
	                eventData = ev.error;
	                break;
	            case 'ondatachannel':
	                eventData = null;
	                break;
	            default:
	                log(ev);
	                break;
	        }
	        try {
	            const timestamp = delayed ? ev.timestamp : null;
	            await this.apiWrapper.sendConnectionEvent({
	                eventName: event,
	                peerId,
	                connectionId,
	                timestamp,
	                data: eventData
	            });
	        }
	        catch (e) {
	            log(e);
	        }
	    }
	}

	exports.PeerMetrics = PeerMetrics;

	Object.defineProperty(exports, '__esModule', { value: true });

}(this.window = this.window || {}));
