/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.CMsgSteamNetworkingIdentityLegacyBinary = (function() {
    
        /**
         * Properties of a CMsgSteamNetworkingIdentityLegacyBinary.
         * @exports ICMsgSteamNetworkingIdentityLegacyBinary
         * @interface ICMsgSteamNetworkingIdentityLegacyBinary
         * @property {number|Long|null} [steamId] CMsgSteamNetworkingIdentityLegacyBinary steamId
         * @property {string|null} [xboxPairwiseId] CMsgSteamNetworkingIdentityLegacyBinary xboxPairwiseId
         * @property {Uint8Array|null} [genericBytes] CMsgSteamNetworkingIdentityLegacyBinary genericBytes
         * @property {string|null} [genericString] CMsgSteamNetworkingIdentityLegacyBinary genericString
         * @property {Uint8Array|null} [ipv6AndPort] CMsgSteamNetworkingIdentityLegacyBinary ipv6AndPort
         */
    
        /**
         * Constructs a new CMsgSteamNetworkingIdentityLegacyBinary.
         * @exports CMsgSteamNetworkingIdentityLegacyBinary
         * @classdesc Represents a CMsgSteamNetworkingIdentityLegacyBinary.
         * @implements ICMsgSteamNetworkingIdentityLegacyBinary
         * @constructor
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary=} [properties] Properties to set
         */
        function CMsgSteamNetworkingIdentityLegacyBinary(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary steamId.
         * @member {number|Long} steamId
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.steamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary xboxPairwiseId.
         * @member {string} xboxPairwiseId
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.xboxPairwiseId = "";
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary genericBytes.
         * @member {Uint8Array} genericBytes
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.genericBytes = $util.newBuffer([]);
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary genericString.
         * @member {string} genericString
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.genericString = "";
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary ipv6AndPort.
         * @member {Uint8Array} ipv6AndPort
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.ipv6AndPort = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamNetworkingIdentityLegacyBinary instance using the specified properties.
         * @function create
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary=} [properties] Properties to set
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.create = function create(properties) {
            return new CMsgSteamNetworkingIdentityLegacyBinary(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary} message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentityLegacyBinary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.genericBytes != null && Object.hasOwnProperty.call(message, "genericBytes"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.genericBytes);
            if (message.genericString != null && Object.hasOwnProperty.call(message, "genericString"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.genericString);
            if (message.ipv6AndPort != null && Object.hasOwnProperty.call(message, "ipv6AndPort"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ipv6AndPort);
            if (message.steamId != null && Object.hasOwnProperty.call(message, "steamId"))
                writer.uint32(/* id 16, wireType 1 =*/129).fixed64(message.steamId);
            if (message.xboxPairwiseId != null && Object.hasOwnProperty.call(message, "xboxPairwiseId"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.xboxPairwiseId);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message, length delimited. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary} message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentityLegacyBinary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentityLegacyBinary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingIdentityLegacyBinary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 16: {
                        message.steamId = reader.fixed64();
                        break;
                    }
                case 17: {
                        message.xboxPairwiseId = reader.string();
                        break;
                    }
                case 2: {
                        message.genericBytes = reader.bytes();
                        break;
                    }
                case 3: {
                        message.genericString = reader.string();
                        break;
                    }
                case 4: {
                        message.ipv6AndPort = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentityLegacyBinary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamNetworkingIdentityLegacyBinary message.
         * @function verify
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamNetworkingIdentityLegacyBinary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamId != null && message.hasOwnProperty("steamId"))
                if (!$util.isInteger(message.steamId) && !(message.steamId && $util.isInteger(message.steamId.low) && $util.isInteger(message.steamId.high)))
                    return "steamId: integer|Long expected";
            if (message.xboxPairwiseId != null && message.hasOwnProperty("xboxPairwiseId"))
                if (!$util.isString(message.xboxPairwiseId))
                    return "xboxPairwiseId: string expected";
            if (message.genericBytes != null && message.hasOwnProperty("genericBytes"))
                if (!(message.genericBytes && typeof message.genericBytes.length === "number" || $util.isString(message.genericBytes)))
                    return "genericBytes: buffer expected";
            if (message.genericString != null && message.hasOwnProperty("genericString"))
                if (!$util.isString(message.genericString))
                    return "genericString: string expected";
            if (message.ipv6AndPort != null && message.hasOwnProperty("ipv6AndPort"))
                if (!(message.ipv6AndPort && typeof message.ipv6AndPort.length === "number" || $util.isString(message.ipv6AndPort)))
                    return "ipv6AndPort: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamNetworkingIdentityLegacyBinary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary
         */
        CMsgSteamNetworkingIdentityLegacyBinary.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamNetworkingIdentityLegacyBinary)
                return object;
            var message = new $root.CMsgSteamNetworkingIdentityLegacyBinary();
            if (object.steamId != null)
                if ($util.Long)
                    (message.steamId = $util.Long.fromValue(object.steamId)).unsigned = false;
                else if (typeof object.steamId === "string")
                    message.steamId = parseInt(object.steamId, 10);
                else if (typeof object.steamId === "number")
                    message.steamId = object.steamId;
                else if (typeof object.steamId === "object")
                    message.steamId = new $util.LongBits(object.steamId.low >>> 0, object.steamId.high >>> 0).toNumber();
            if (object.xboxPairwiseId != null)
                message.xboxPairwiseId = String(object.xboxPairwiseId);
            if (object.genericBytes != null)
                if (typeof object.genericBytes === "string")
                    $util.base64.decode(object.genericBytes, message.genericBytes = $util.newBuffer($util.base64.length(object.genericBytes)), 0);
                else if (object.genericBytes.length >= 0)
                    message.genericBytes = object.genericBytes;
            if (object.genericString != null)
                message.genericString = String(object.genericString);
            if (object.ipv6AndPort != null)
                if (typeof object.ipv6AndPort === "string")
                    $util.base64.decode(object.ipv6AndPort, message.ipv6AndPort = $util.newBuffer($util.base64.length(object.ipv6AndPort)), 0);
                else if (object.ipv6AndPort.length >= 0)
                    message.ipv6AndPort = object.ipv6AndPort;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamNetworkingIdentityLegacyBinary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {CMsgSteamNetworkingIdentityLegacyBinary} message CMsgSteamNetworkingIdentityLegacyBinary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamNetworkingIdentityLegacyBinary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.genericBytes = "";
                else {
                    object.genericBytes = [];
                    if (options.bytes !== Array)
                        object.genericBytes = $util.newBuffer(object.genericBytes);
                }
                object.genericString = "";
                if (options.bytes === String)
                    object.ipv6AndPort = "";
                else {
                    object.ipv6AndPort = [];
                    if (options.bytes !== Array)
                        object.ipv6AndPort = $util.newBuffer(object.ipv6AndPort);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamId = options.longs === String ? "0" : 0;
                object.xboxPairwiseId = "";
            }
            if (message.genericBytes != null && message.hasOwnProperty("genericBytes"))
                object.genericBytes = options.bytes === String ? $util.base64.encode(message.genericBytes, 0, message.genericBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.genericBytes) : message.genericBytes;
            if (message.genericString != null && message.hasOwnProperty("genericString"))
                object.genericString = message.genericString;
            if (message.ipv6AndPort != null && message.hasOwnProperty("ipv6AndPort"))
                object.ipv6AndPort = options.bytes === String ? $util.base64.encode(message.ipv6AndPort, 0, message.ipv6AndPort.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipv6AndPort) : message.ipv6AndPort;
            if (message.steamId != null && message.hasOwnProperty("steamId"))
                if (typeof message.steamId === "number")
                    object.steamId = options.longs === String ? String(message.steamId) : message.steamId;
                else
                    object.steamId = options.longs === String ? $util.Long.prototype.toString.call(message.steamId) : options.longs === Number ? new $util.LongBits(message.steamId.low >>> 0, message.steamId.high >>> 0).toNumber() : message.steamId;
            if (message.xboxPairwiseId != null && message.hasOwnProperty("xboxPairwiseId"))
                object.xboxPairwiseId = message.xboxPairwiseId;
            return object;
        };
    
        /**
         * Converts this CMsgSteamNetworkingIdentityLegacyBinary to JSON.
         * @function toJSON
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamNetworkingIdentityLegacyBinary
         * @function getTypeUrl
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamNetworkingIdentityLegacyBinary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamNetworkingIdentityLegacyBinary";
        };
    
        return CMsgSteamNetworkingIdentityLegacyBinary;
    })();
    
    $root.CMsgSteamDatagramCertificate = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificate.
         * @exports ICMsgSteamDatagramCertificate
         * @interface ICMsgSteamDatagramCertificate
         * @property {CMsgSteamDatagramCertificate.EKeyType|null} [keyType] CMsgSteamDatagramCertificate keyType
         * @property {Uint8Array|null} [keyData] CMsgSteamDatagramCertificate keyData
         * @property {number|Long|null} [legacySteamId] CMsgSteamDatagramCertificate legacySteamId
         * @property {ICMsgSteamNetworkingIdentityLegacyBinary|null} [legacyIdentityBinary] CMsgSteamDatagramCertificate legacyIdentityBinary
         * @property {string|null} [identityString] CMsgSteamDatagramCertificate identityString
         * @property {Array.<number>|null} [gameserverDatacenterIds] CMsgSteamDatagramCertificate gameserverDatacenterIds
         * @property {number|null} [timeCreated] CMsgSteamDatagramCertificate timeCreated
         * @property {number|null} [timeExpiry] CMsgSteamDatagramCertificate timeExpiry
         * @property {Array.<number>|null} [appIds] CMsgSteamDatagramCertificate appIds
         * @property {Array.<string>|null} [ipAddresses] CMsgSteamDatagramCertificate ipAddresses
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificate.
         * @exports CMsgSteamDatagramCertificate
         * @classdesc Represents a CMsgSteamDatagramCertificate.
         * @implements ICMsgSteamDatagramCertificate
         * @constructor
         * @param {ICMsgSteamDatagramCertificate=} [properties] Properties to set
         */
        function CMsgSteamDatagramCertificate(properties) {
            this.gameserverDatacenterIds = [];
            this.appIds = [];
            this.ipAddresses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCertificate keyType.
         * @member {CMsgSteamDatagramCertificate.EKeyType} keyType
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.keyType = 0;
    
        /**
         * CMsgSteamDatagramCertificate keyData.
         * @member {Uint8Array} keyData
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.keyData = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificate legacySteamId.
         * @member {number|Long} legacySteamId
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.legacySteamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramCertificate legacyIdentityBinary.
         * @member {ICMsgSteamNetworkingIdentityLegacyBinary|null|undefined} legacyIdentityBinary
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.legacyIdentityBinary = null;
    
        /**
         * CMsgSteamDatagramCertificate identityString.
         * @member {string} identityString
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.identityString = "";
    
        /**
         * CMsgSteamDatagramCertificate gameserverDatacenterIds.
         * @member {Array.<number>} gameserverDatacenterIds
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.gameserverDatacenterIds = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramCertificate timeCreated.
         * @member {number} timeCreated
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.timeCreated = 0;
    
        /**
         * CMsgSteamDatagramCertificate timeExpiry.
         * @member {number} timeExpiry
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.timeExpiry = 0;
    
        /**
         * CMsgSteamDatagramCertificate appIds.
         * @member {Array.<number>} appIds
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.appIds = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramCertificate ipAddresses.
         * @member {Array.<string>} ipAddresses
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.ipAddresses = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramCertificate instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {ICMsgSteamDatagramCertificate=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate instance
         */
        CMsgSteamDatagramCertificate.create = function create(properties) {
            return new CMsgSteamDatagramCertificate(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificate message. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {ICMsgSteamDatagramCertificate} message CMsgSteamDatagramCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyType != null && Object.hasOwnProperty.call(message, "keyType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.keyType);
            if (message.keyData != null && Object.hasOwnProperty.call(message, "keyData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.keyData);
            if (message.legacySteamId != null && Object.hasOwnProperty.call(message, "legacySteamId"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.legacySteamId);
            if (message.gameserverDatacenterIds != null && message.gameserverDatacenterIds.length)
                for (var i = 0; i < message.gameserverDatacenterIds.length; ++i)
                    writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.gameserverDatacenterIds[i]);
            if (message.timeCreated != null && Object.hasOwnProperty.call(message, "timeCreated"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.timeCreated);
            if (message.timeExpiry != null && Object.hasOwnProperty.call(message, "timeExpiry"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.timeExpiry);
            if (message.appIds != null && message.appIds.length)
                for (var i = 0; i < message.appIds.length; ++i)
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.appIds[i]);
            if (message.legacyIdentityBinary != null && Object.hasOwnProperty.call(message, "legacyIdentityBinary"))
                $root.CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacyIdentityBinary, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.identityString != null && Object.hasOwnProperty.call(message, "identityString"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.identityString);
            if (message.ipAddresses != null && message.ipAddresses.length)
                for (var i = 0; i < message.ipAddresses.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.ipAddresses[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificate message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {ICMsgSteamDatagramCertificate} message CMsgSteamDatagramCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCertificate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.keyType = reader.int32();
                        break;
                    }
                case 2: {
                        message.keyData = reader.bytes();
                        break;
                    }
                case 4: {
                        message.legacySteamId = reader.fixed64();
                        break;
                    }
                case 11: {
                        message.legacyIdentityBinary = $root.CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.identityString = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.gameserverDatacenterIds && message.gameserverDatacenterIds.length))
                            message.gameserverDatacenterIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.gameserverDatacenterIds.push(reader.fixed32());
                        } else
                            message.gameserverDatacenterIds.push(reader.fixed32());
                        break;
                    }
                case 8: {
                        message.timeCreated = reader.fixed32();
                        break;
                    }
                case 9: {
                        message.timeExpiry = reader.fixed32();
                        break;
                    }
                case 10: {
                        if (!(message.appIds && message.appIds.length))
                            message.appIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.appIds.push(reader.uint32());
                        } else
                            message.appIds.push(reader.uint32());
                        break;
                    }
                case 13: {
                        if (!(message.ipAddresses && message.ipAddresses.length))
                            message.ipAddresses = [];
                        message.ipAddresses.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificate message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyType != null && message.hasOwnProperty("keyType"))
                switch (message.keyType) {
                default:
                    return "keyType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.keyData != null && message.hasOwnProperty("keyData"))
                if (!(message.keyData && typeof message.keyData.length === "number" || $util.isString(message.keyData)))
                    return "keyData: buffer expected";
            if (message.legacySteamId != null && message.hasOwnProperty("legacySteamId"))
                if (!$util.isInteger(message.legacySteamId) && !(message.legacySteamId && $util.isInteger(message.legacySteamId.low) && $util.isInteger(message.legacySteamId.high)))
                    return "legacySteamId: integer|Long expected";
            if (message.legacyIdentityBinary != null && message.hasOwnProperty("legacyIdentityBinary")) {
                var error = $root.CMsgSteamNetworkingIdentityLegacyBinary.verify(message.legacyIdentityBinary);
                if (error)
                    return "legacyIdentityBinary." + error;
            }
            if (message.identityString != null && message.hasOwnProperty("identityString"))
                if (!$util.isString(message.identityString))
                    return "identityString: string expected";
            if (message.gameserverDatacenterIds != null && message.hasOwnProperty("gameserverDatacenterIds")) {
                if (!Array.isArray(message.gameserverDatacenterIds))
                    return "gameserverDatacenterIds: array expected";
                for (var i = 0; i < message.gameserverDatacenterIds.length; ++i)
                    if (!$util.isInteger(message.gameserverDatacenterIds[i]))
                        return "gameserverDatacenterIds: integer[] expected";
            }
            if (message.timeCreated != null && message.hasOwnProperty("timeCreated"))
                if (!$util.isInteger(message.timeCreated))
                    return "timeCreated: integer expected";
            if (message.timeExpiry != null && message.hasOwnProperty("timeExpiry"))
                if (!$util.isInteger(message.timeExpiry))
                    return "timeExpiry: integer expected";
            if (message.appIds != null && message.hasOwnProperty("appIds")) {
                if (!Array.isArray(message.appIds))
                    return "appIds: array expected";
                for (var i = 0; i < message.appIds.length; ++i)
                    if (!$util.isInteger(message.appIds[i]))
                        return "appIds: integer[] expected";
            }
            if (message.ipAddresses != null && message.hasOwnProperty("ipAddresses")) {
                if (!Array.isArray(message.ipAddresses))
                    return "ipAddresses: array expected";
                for (var i = 0; i < message.ipAddresses.length; ++i)
                    if (!$util.isString(message.ipAddresses[i]))
                        return "ipAddresses: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate
         */
        CMsgSteamDatagramCertificate.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCertificate)
                return object;
            var message = new $root.CMsgSteamDatagramCertificate();
            switch (object.keyType) {
            default:
                if (typeof object.keyType === "number") {
                    message.keyType = object.keyType;
                    break;
                }
                break;
            case "INVALID":
            case 0:
                message.keyType = 0;
                break;
            case "ED25519":
            case 1:
                message.keyType = 1;
                break;
            }
            if (object.keyData != null)
                if (typeof object.keyData === "string")
                    $util.base64.decode(object.keyData, message.keyData = $util.newBuffer($util.base64.length(object.keyData)), 0);
                else if (object.keyData.length >= 0)
                    message.keyData = object.keyData;
            if (object.legacySteamId != null)
                if ($util.Long)
                    (message.legacySteamId = $util.Long.fromValue(object.legacySteamId)).unsigned = false;
                else if (typeof object.legacySteamId === "string")
                    message.legacySteamId = parseInt(object.legacySteamId, 10);
                else if (typeof object.legacySteamId === "number")
                    message.legacySteamId = object.legacySteamId;
                else if (typeof object.legacySteamId === "object")
                    message.legacySteamId = new $util.LongBits(object.legacySteamId.low >>> 0, object.legacySteamId.high >>> 0).toNumber();
            if (object.legacyIdentityBinary != null) {
                if (typeof object.legacyIdentityBinary !== "object")
                    throw TypeError(".CMsgSteamDatagramCertificate.legacyIdentityBinary: object expected");
                message.legacyIdentityBinary = $root.CMsgSteamNetworkingIdentityLegacyBinary.fromObject(object.legacyIdentityBinary);
            }
            if (object.identityString != null)
                message.identityString = String(object.identityString);
            if (object.gameserverDatacenterIds) {
                if (!Array.isArray(object.gameserverDatacenterIds))
                    throw TypeError(".CMsgSteamDatagramCertificate.gameserverDatacenterIds: array expected");
                message.gameserverDatacenterIds = [];
                for (var i = 0; i < object.gameserverDatacenterIds.length; ++i)
                    message.gameserverDatacenterIds[i] = object.gameserverDatacenterIds[i] >>> 0;
            }
            if (object.timeCreated != null)
                message.timeCreated = object.timeCreated >>> 0;
            if (object.timeExpiry != null)
                message.timeExpiry = object.timeExpiry >>> 0;
            if (object.appIds) {
                if (!Array.isArray(object.appIds))
                    throw TypeError(".CMsgSteamDatagramCertificate.appIds: array expected");
                message.appIds = [];
                for (var i = 0; i < object.appIds.length; ++i)
                    message.appIds[i] = object.appIds[i] >>> 0;
            }
            if (object.ipAddresses) {
                if (!Array.isArray(object.ipAddresses))
                    throw TypeError(".CMsgSteamDatagramCertificate.ipAddresses: array expected");
                message.ipAddresses = [];
                for (var i = 0; i < object.ipAddresses.length; ++i)
                    message.ipAddresses[i] = String(object.ipAddresses[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {CMsgSteamDatagramCertificate} message CMsgSteamDatagramCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.gameserverDatacenterIds = [];
                object.appIds = [];
                object.ipAddresses = [];
            }
            if (options.defaults) {
                object.keyType = options.enums === String ? "INVALID" : 0;
                if (options.bytes === String)
                    object.keyData = "";
                else {
                    object.keyData = [];
                    if (options.bytes !== Array)
                        object.keyData = $util.newBuffer(object.keyData);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacySteamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacySteamId = options.longs === String ? "0" : 0;
                object.timeCreated = 0;
                object.timeExpiry = 0;
                object.legacyIdentityBinary = null;
                object.identityString = "";
            }
            if (message.keyType != null && message.hasOwnProperty("keyType"))
                object.keyType = options.enums === String ? $root.CMsgSteamDatagramCertificate.EKeyType[message.keyType] === undefined ? message.keyType : $root.CMsgSteamDatagramCertificate.EKeyType[message.keyType] : message.keyType;
            if (message.keyData != null && message.hasOwnProperty("keyData"))
                object.keyData = options.bytes === String ? $util.base64.encode(message.keyData, 0, message.keyData.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyData) : message.keyData;
            if (message.legacySteamId != null && message.hasOwnProperty("legacySteamId"))
                if (typeof message.legacySteamId === "number")
                    object.legacySteamId = options.longs === String ? String(message.legacySteamId) : message.legacySteamId;
                else
                    object.legacySteamId = options.longs === String ? $util.Long.prototype.toString.call(message.legacySteamId) : options.longs === Number ? new $util.LongBits(message.legacySteamId.low >>> 0, message.legacySteamId.high >>> 0).toNumber() : message.legacySteamId;
            if (message.gameserverDatacenterIds && message.gameserverDatacenterIds.length) {
                object.gameserverDatacenterIds = [];
                for (var j = 0; j < message.gameserverDatacenterIds.length; ++j)
                    object.gameserverDatacenterIds[j] = message.gameserverDatacenterIds[j];
            }
            if (message.timeCreated != null && message.hasOwnProperty("timeCreated"))
                object.timeCreated = message.timeCreated;
            if (message.timeExpiry != null && message.hasOwnProperty("timeExpiry"))
                object.timeExpiry = message.timeExpiry;
            if (message.appIds && message.appIds.length) {
                object.appIds = [];
                for (var j = 0; j < message.appIds.length; ++j)
                    object.appIds[j] = message.appIds[j];
            }
            if (message.legacyIdentityBinary != null && message.hasOwnProperty("legacyIdentityBinary"))
                object.legacyIdentityBinary = $root.CMsgSteamNetworkingIdentityLegacyBinary.toObject(message.legacyIdentityBinary, options);
            if (message.identityString != null && message.hasOwnProperty("identityString"))
                object.identityString = message.identityString;
            if (message.ipAddresses && message.ipAddresses.length) {
                object.ipAddresses = [];
                for (var j = 0; j < message.ipAddresses.length; ++j)
                    object.ipAddresses[j] = message.ipAddresses[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificate to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramCertificate
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramCertificate";
        };
    
        /**
         * EKeyType enum.
         * @name CMsgSteamDatagramCertificate.EKeyType
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} ED25519=1 ED25519 value
         */
        CMsgSteamDatagramCertificate.EKeyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "ED25519"] = 1;
            return values;
        })();
    
        return CMsgSteamDatagramCertificate;
    })();
    
    $root.CMsgSteamDatagramCertificateSigned = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificateSigned.
         * @exports ICMsgSteamDatagramCertificateSigned
         * @interface ICMsgSteamDatagramCertificateSigned
         * @property {Uint8Array|null} [cert] CMsgSteamDatagramCertificateSigned cert
         * @property {number|Long|null} [caKeyId] CMsgSteamDatagramCertificateSigned caKeyId
         * @property {Uint8Array|null} [caSignature] CMsgSteamDatagramCertificateSigned caSignature
         * @property {Uint8Array|null} [privateKeyData] CMsgSteamDatagramCertificateSigned privateKeyData
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificateSigned.
         * @exports CMsgSteamDatagramCertificateSigned
         * @classdesc Represents a CMsgSteamDatagramCertificateSigned.
         * @implements ICMsgSteamDatagramCertificateSigned
         * @constructor
         * @param {ICMsgSteamDatagramCertificateSigned=} [properties] Properties to set
         */
        function CMsgSteamDatagramCertificateSigned(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCertificateSigned cert.
         * @member {Uint8Array} cert
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.cert = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificateSigned caKeyId.
         * @member {number|Long} caKeyId
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.caKeyId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramCertificateSigned caSignature.
         * @member {Uint8Array} caSignature
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.caSignature = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificateSigned privateKeyData.
         * @member {Uint8Array} privateKeyData
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.privateKeyData = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramCertificateSigned instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {ICMsgSteamDatagramCertificateSigned=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned instance
         */
        CMsgSteamDatagramCertificateSigned.create = function create(properties) {
            return new CMsgSteamDatagramCertificateSigned(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateSigned message. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {ICMsgSteamDatagramCertificateSigned} message CMsgSteamDatagramCertificateSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateSigned.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateKeyData != null && Object.hasOwnProperty.call(message, "privateKeyData"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.privateKeyData);
            if (message.cert != null && Object.hasOwnProperty.call(message, "cert"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.cert);
            if (message.caKeyId != null && Object.hasOwnProperty.call(message, "caKeyId"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.caKeyId);
            if (message.caSignature != null && Object.hasOwnProperty.call(message, "caSignature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.caSignature);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateSigned message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {ICMsgSteamDatagramCertificateSigned} message CMsgSteamDatagramCertificateSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateSigned.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateSigned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCertificateSigned();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4: {
                        message.cert = reader.bytes();
                        break;
                    }
                case 5: {
                        message.caKeyId = reader.fixed64();
                        break;
                    }
                case 6: {
                        message.caSignature = reader.bytes();
                        break;
                    }
                case 1: {
                        message.privateKeyData = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateSigned.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificateSigned message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificateSigned.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cert != null && message.hasOwnProperty("cert"))
                if (!(message.cert && typeof message.cert.length === "number" || $util.isString(message.cert)))
                    return "cert: buffer expected";
            if (message.caKeyId != null && message.hasOwnProperty("caKeyId"))
                if (!$util.isInteger(message.caKeyId) && !(message.caKeyId && $util.isInteger(message.caKeyId.low) && $util.isInteger(message.caKeyId.high)))
                    return "caKeyId: integer|Long expected";
            if (message.caSignature != null && message.hasOwnProperty("caSignature"))
                if (!(message.caSignature && typeof message.caSignature.length === "number" || $util.isString(message.caSignature)))
                    return "caSignature: buffer expected";
            if (message.privateKeyData != null && message.hasOwnProperty("privateKeyData"))
                if (!(message.privateKeyData && typeof message.privateKeyData.length === "number" || $util.isString(message.privateKeyData)))
                    return "privateKeyData: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificateSigned message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned
         */
        CMsgSteamDatagramCertificateSigned.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCertificateSigned)
                return object;
            var message = new $root.CMsgSteamDatagramCertificateSigned();
            if (object.cert != null)
                if (typeof object.cert === "string")
                    $util.base64.decode(object.cert, message.cert = $util.newBuffer($util.base64.length(object.cert)), 0);
                else if (object.cert.length >= 0)
                    message.cert = object.cert;
            if (object.caKeyId != null)
                if ($util.Long)
                    (message.caKeyId = $util.Long.fromValue(object.caKeyId)).unsigned = false;
                else if (typeof object.caKeyId === "string")
                    message.caKeyId = parseInt(object.caKeyId, 10);
                else if (typeof object.caKeyId === "number")
                    message.caKeyId = object.caKeyId;
                else if (typeof object.caKeyId === "object")
                    message.caKeyId = new $util.LongBits(object.caKeyId.low >>> 0, object.caKeyId.high >>> 0).toNumber();
            if (object.caSignature != null)
                if (typeof object.caSignature === "string")
                    $util.base64.decode(object.caSignature, message.caSignature = $util.newBuffer($util.base64.length(object.caSignature)), 0);
                else if (object.caSignature.length >= 0)
                    message.caSignature = object.caSignature;
            if (object.privateKeyData != null)
                if (typeof object.privateKeyData === "string")
                    $util.base64.decode(object.privateKeyData, message.privateKeyData = $util.newBuffer($util.base64.length(object.privateKeyData)), 0);
                else if (object.privateKeyData.length >= 0)
                    message.privateKeyData = object.privateKeyData;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificateSigned message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {CMsgSteamDatagramCertificateSigned} message CMsgSteamDatagramCertificateSigned
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificateSigned.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.privateKeyData = "";
                else {
                    object.privateKeyData = [];
                    if (options.bytes !== Array)
                        object.privateKeyData = $util.newBuffer(object.privateKeyData);
                }
                if (options.bytes === String)
                    object.cert = "";
                else {
                    object.cert = [];
                    if (options.bytes !== Array)
                        object.cert = $util.newBuffer(object.cert);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.caKeyId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.caKeyId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.caSignature = "";
                else {
                    object.caSignature = [];
                    if (options.bytes !== Array)
                        object.caSignature = $util.newBuffer(object.caSignature);
                }
            }
            if (message.privateKeyData != null && message.hasOwnProperty("privateKeyData"))
                object.privateKeyData = options.bytes === String ? $util.base64.encode(message.privateKeyData, 0, message.privateKeyData.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKeyData) : message.privateKeyData;
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = options.bytes === String ? $util.base64.encode(message.cert, 0, message.cert.length) : options.bytes === Array ? Array.prototype.slice.call(message.cert) : message.cert;
            if (message.caKeyId != null && message.hasOwnProperty("caKeyId"))
                if (typeof message.caKeyId === "number")
                    object.caKeyId = options.longs === String ? String(message.caKeyId) : message.caKeyId;
                else
                    object.caKeyId = options.longs === String ? $util.Long.prototype.toString.call(message.caKeyId) : options.longs === Number ? new $util.LongBits(message.caKeyId.low >>> 0, message.caKeyId.high >>> 0).toNumber() : message.caKeyId;
            if (message.caSignature != null && message.hasOwnProperty("caSignature"))
                object.caSignature = options.bytes === String ? $util.base64.encode(message.caSignature, 0, message.caSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.caSignature) : message.caSignature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificateSigned to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificateSigned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramCertificateSigned
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramCertificateSigned.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramCertificateSigned";
        };
    
        return CMsgSteamDatagramCertificateSigned;
    })();
    
    $root.CMsgSteamDatagramCertificateRequest = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificateRequest.
         * @exports ICMsgSteamDatagramCertificateRequest
         * @interface ICMsgSteamDatagramCertificateRequest
         * @property {ICMsgSteamDatagramCertificate|null} [cert] CMsgSteamDatagramCertificateRequest cert
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificateRequest.
         * @exports CMsgSteamDatagramCertificateRequest
         * @classdesc Represents a CMsgSteamDatagramCertificateRequest.
         * @implements ICMsgSteamDatagramCertificateRequest
         * @constructor
         * @param {ICMsgSteamDatagramCertificateRequest=} [properties] Properties to set
         */
        function CMsgSteamDatagramCertificateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCertificateRequest cert.
         * @member {ICMsgSteamDatagramCertificate|null|undefined} cert
         * @memberof CMsgSteamDatagramCertificateRequest
         * @instance
         */
        CMsgSteamDatagramCertificateRequest.prototype.cert = null;
    
        /**
         * Creates a new CMsgSteamDatagramCertificateRequest instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {ICMsgSteamDatagramCertificateRequest=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest instance
         */
        CMsgSteamDatagramCertificateRequest.create = function create(properties) {
            return new CMsgSteamDatagramCertificateRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateRequest message. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {ICMsgSteamDatagramCertificateRequest} message CMsgSteamDatagramCertificateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cert != null && Object.hasOwnProperty.call(message, "cert"))
                $root.CMsgSteamDatagramCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {ICMsgSteamDatagramCertificateRequest} message CMsgSteamDatagramCertificateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCertificateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cert = $root.CMsgSteamDatagramCertificate.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificateRequest message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cert != null && message.hasOwnProperty("cert")) {
                var error = $root.CMsgSteamDatagramCertificate.verify(message.cert);
                if (error)
                    return "cert." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest
         */
        CMsgSteamDatagramCertificateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCertificateRequest)
                return object;
            var message = new $root.CMsgSteamDatagramCertificateRequest();
            if (object.cert != null) {
                if (typeof object.cert !== "object")
                    throw TypeError(".CMsgSteamDatagramCertificateRequest.cert: object expected");
                message.cert = $root.CMsgSteamDatagramCertificate.fromObject(object.cert);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {CMsgSteamDatagramCertificateRequest} message CMsgSteamDatagramCertificateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cert = null;
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = $root.CMsgSteamDatagramCertificate.toObject(message.cert, options);
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificateRequest to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramCertificateRequest
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramCertificateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramCertificateRequest";
        };
    
        return CMsgSteamDatagramCertificateRequest;
    })();

    return $root;
});
