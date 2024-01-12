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
    
    /**
     * ESteamNetworkingSocketsCipher enum.
     * @exports ESteamNetworkingSocketsCipher
     * @enum {number}
     * @property {number} k_ESteamNetworkingSocketsCipher_INVALID=0 k_ESteamNetworkingSocketsCipher_INVALID value
     * @property {number} k_ESteamNetworkingSocketsCipher_NULL=1 k_ESteamNetworkingSocketsCipher_NULL value
     * @property {number} k_ESteamNetworkingSocketsCipher_AES_256_GCM=2 k_ESteamNetworkingSocketsCipher_AES_256_GCM value
     */
    $root.ESteamNetworkingSocketsCipher = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ESteamNetworkingSocketsCipher_INVALID"] = 0;
        values[valuesById[1] = "k_ESteamNetworkingSocketsCipher_NULL"] = 1;
        values[valuesById[2] = "k_ESteamNetworkingSocketsCipher_AES_256_GCM"] = 2;
        return values;
    })();
    
    $root.CMsgSteamDatagramSessionCryptInfo = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSessionCryptInfo.
         * @exports ICMsgSteamDatagramSessionCryptInfo
         * @interface ICMsgSteamDatagramSessionCryptInfo
         * @property {CMsgSteamDatagramSessionCryptInfo.EKeyType|null} [keyType] CMsgSteamDatagramSessionCryptInfo keyType
         * @property {Uint8Array|null} [keyData] CMsgSteamDatagramSessionCryptInfo keyData
         * @property {number|Long|null} [nonce] CMsgSteamDatagramSessionCryptInfo nonce
         * @property {number|null} [protocolVersion] CMsgSteamDatagramSessionCryptInfo protocolVersion
         * @property {Array.<ESteamNetworkingSocketsCipher>|null} [ciphers] CMsgSteamDatagramSessionCryptInfo ciphers
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSessionCryptInfo.
         * @exports CMsgSteamDatagramSessionCryptInfo
         * @classdesc Represents a CMsgSteamDatagramSessionCryptInfo.
         * @implements ICMsgSteamDatagramSessionCryptInfo
         * @constructor
         * @param {ICMsgSteamDatagramSessionCryptInfo=} [properties] Properties to set
         */
        function CMsgSteamDatagramSessionCryptInfo(properties) {
            this.ciphers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSessionCryptInfo keyType.
         * @member {CMsgSteamDatagramSessionCryptInfo.EKeyType} keyType
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.keyType = 0;
    
        /**
         * CMsgSteamDatagramSessionCryptInfo keyData.
         * @member {Uint8Array} keyData
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.keyData = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSessionCryptInfo nonce.
         * @member {number|Long} nonce
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramSessionCryptInfo protocolVersion.
         * @member {number} protocolVersion
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.protocolVersion = 0;
    
        /**
         * CMsgSteamDatagramSessionCryptInfo ciphers.
         * @member {Array.<ESteamNetworkingSocketsCipher>} ciphers
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.ciphers = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramSessionCryptInfo instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfo=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo instance
         */
        CMsgSteamDatagramSessionCryptInfo.create = function create(properties) {
            return new CMsgSteamDatagramSessionCryptInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfo message. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfo} message CMsgSteamDatagramSessionCryptInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyType != null && Object.hasOwnProperty.call(message, "keyType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.keyType);
            if (message.keyData != null && Object.hasOwnProperty.call(message, "keyData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.keyData);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.nonce);
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.protocolVersion);
            if (message.ciphers != null && message.ciphers.length)
                for (var i = 0; i < message.ciphers.length; ++i)
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ciphers[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfo message, length delimited. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfo} message CMsgSteamDatagramSessionCryptInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSessionCryptInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSessionCryptInfo();
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
                case 3: {
                        message.nonce = reader.fixed64();
                        break;
                    }
                case 4: {
                        message.protocolVersion = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.ciphers && message.ciphers.length))
                            message.ciphers = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.ciphers.push(reader.int32());
                        } else
                            message.ciphers.push(reader.int32());
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
         * Decodes a CMsgSteamDatagramSessionCryptInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSessionCryptInfo message.
         * @function verify
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSessionCryptInfo.verify = function verify(message) {
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
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                    return "nonce: integer|Long expected";
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                if (!$util.isInteger(message.protocolVersion))
                    return "protocolVersion: integer expected";
            if (message.ciphers != null && message.hasOwnProperty("ciphers")) {
                if (!Array.isArray(message.ciphers))
                    return "ciphers: array expected";
                for (var i = 0; i < message.ciphers.length; ++i)
                    switch (message.ciphers[i]) {
                    default:
                        return "ciphers: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSessionCryptInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo
         */
        CMsgSteamDatagramSessionCryptInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSessionCryptInfo)
                return object;
            var message = new $root.CMsgSteamDatagramSessionCryptInfo();
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
            case "CURVE25519":
            case 1:
                message.keyType = 1;
                break;
            }
            if (object.keyData != null)
                if (typeof object.keyData === "string")
                    $util.base64.decode(object.keyData, message.keyData = $util.newBuffer($util.base64.length(object.keyData)), 0);
                else if (object.keyData.length >= 0)
                    message.keyData = object.keyData;
            if (object.nonce != null)
                if ($util.Long)
                    (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = false;
                else if (typeof object.nonce === "string")
                    message.nonce = parseInt(object.nonce, 10);
                else if (typeof object.nonce === "number")
                    message.nonce = object.nonce;
                else if (typeof object.nonce === "object")
                    message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber();
            if (object.protocolVersion != null)
                message.protocolVersion = object.protocolVersion >>> 0;
            if (object.ciphers) {
                if (!Array.isArray(object.ciphers))
                    throw TypeError(".CMsgSteamDatagramSessionCryptInfo.ciphers: array expected");
                message.ciphers = [];
                for (var i = 0; i < object.ciphers.length; ++i)
                    switch (object.ciphers[i]) {
                    default:
                        if (typeof object.ciphers[i] === "number") {
                            message.ciphers[i] = object.ciphers[i];
                            break;
                        }
                    case "k_ESteamNetworkingSocketsCipher_INVALID":
                    case 0:
                        message.ciphers[i] = 0;
                        break;
                    case "k_ESteamNetworkingSocketsCipher_NULL":
                    case 1:
                        message.ciphers[i] = 1;
                        break;
                    case "k_ESteamNetworkingSocketsCipher_AES_256_GCM":
                    case 2:
                        message.ciphers[i] = 2;
                        break;
                    }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSessionCryptInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {CMsgSteamDatagramSessionCryptInfo} message CMsgSteamDatagramSessionCryptInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSessionCryptInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ciphers = [];
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
                    object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nonce = options.longs === String ? "0" : 0;
                object.protocolVersion = 0;
            }
            if (message.keyType != null && message.hasOwnProperty("keyType"))
                object.keyType = options.enums === String ? $root.CMsgSteamDatagramSessionCryptInfo.EKeyType[message.keyType] === undefined ? message.keyType : $root.CMsgSteamDatagramSessionCryptInfo.EKeyType[message.keyType] : message.keyType;
            if (message.keyData != null && message.hasOwnProperty("keyData"))
                object.keyData = options.bytes === String ? $util.base64.encode(message.keyData, 0, message.keyData.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyData) : message.keyData;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (typeof message.nonce === "number")
                    object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                else
                    object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber() : message.nonce;
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                object.protocolVersion = message.protocolVersion;
            if (message.ciphers && message.ciphers.length) {
                object.ciphers = [];
                for (var j = 0; j < message.ciphers.length; ++j)
                    object.ciphers[j] = options.enums === String ? $root.ESteamNetworkingSocketsCipher[message.ciphers[j]] === undefined ? message.ciphers[j] : $root.ESteamNetworkingSocketsCipher[message.ciphers[j]] : message.ciphers[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSessionCryptInfo to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramSessionCryptInfo
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramSessionCryptInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramSessionCryptInfo";
        };
    
        /**
         * EKeyType enum.
         * @name CMsgSteamDatagramSessionCryptInfo.EKeyType
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} CURVE25519=1 CURVE25519 value
         */
        CMsgSteamDatagramSessionCryptInfo.EKeyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "CURVE25519"] = 1;
            return values;
        })();
    
        return CMsgSteamDatagramSessionCryptInfo;
    })();
    
    $root.CMsgSteamDatagramSessionCryptInfoSigned = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSessionCryptInfoSigned.
         * @exports ICMsgSteamDatagramSessionCryptInfoSigned
         * @interface ICMsgSteamDatagramSessionCryptInfoSigned
         * @property {Uint8Array|null} [info] CMsgSteamDatagramSessionCryptInfoSigned info
         * @property {Uint8Array|null} [signature] CMsgSteamDatagramSessionCryptInfoSigned signature
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSessionCryptInfoSigned.
         * @exports CMsgSteamDatagramSessionCryptInfoSigned
         * @classdesc Represents a CMsgSteamDatagramSessionCryptInfoSigned.
         * @implements ICMsgSteamDatagramSessionCryptInfoSigned
         * @constructor
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned=} [properties] Properties to set
         */
        function CMsgSteamDatagramSessionCryptInfoSigned(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSessionCryptInfoSigned info.
         * @member {Uint8Array} info
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfoSigned.prototype.info = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSessionCryptInfoSigned signature.
         * @member {Uint8Array} signature
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfoSigned.prototype.signature = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramSessionCryptInfoSigned instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned instance
         */
        CMsgSteamDatagramSessionCryptInfoSigned.create = function create(properties) {
            return new CMsgSteamDatagramSessionCryptInfoSigned(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfoSigned message. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfoSigned.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned} message CMsgSteamDatagramSessionCryptInfoSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfoSigned.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.info);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfoSigned message, length delimited. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfoSigned.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned} message CMsgSteamDatagramSessionCryptInfoSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfoSigned.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSessionCryptInfoSigned message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfoSigned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSessionCryptInfoSigned();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.info = reader.bytes();
                        break;
                    }
                case 2: {
                        message.signature = reader.bytes();
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
         * Decodes a CMsgSteamDatagramSessionCryptInfoSigned message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfoSigned.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSessionCryptInfoSigned message.
         * @function verify
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSessionCryptInfoSigned.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!(message.info && typeof message.info.length === "number" || $util.isString(message.info)))
                    return "info: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSessionCryptInfoSigned message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned
         */
        CMsgSteamDatagramSessionCryptInfoSigned.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSessionCryptInfoSigned)
                return object;
            var message = new $root.CMsgSteamDatagramSessionCryptInfoSigned();
            if (object.info != null)
                if (typeof object.info === "string")
                    $util.base64.decode(object.info, message.info = $util.newBuffer($util.base64.length(object.info)), 0);
                else if (object.info.length >= 0)
                    message.info = object.info;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSessionCryptInfoSigned message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {CMsgSteamDatagramSessionCryptInfoSigned} message CMsgSteamDatagramSessionCryptInfoSigned
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSessionCryptInfoSigned.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.info = "";
                else {
                    object.info = [];
                    if (options.bytes !== Array)
                        object.info = $util.newBuffer(object.info);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = options.bytes === String ? $util.base64.encode(message.info, 0, message.info.length) : options.bytes === Array ? Array.prototype.slice.call(message.info) : message.info;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSessionCryptInfoSigned to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSessionCryptInfoSigned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramSessionCryptInfoSigned
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramSessionCryptInfoSigned.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramSessionCryptInfoSigned";
        };
    
        return CMsgSteamDatagramSessionCryptInfoSigned;
    })();
    
    $root.CMsgSteamDatagramDiagnostic = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramDiagnostic.
         * @exports ICMsgSteamDatagramDiagnostic
         * @interface ICMsgSteamDatagramDiagnostic
         * @property {number|null} [severity] CMsgSteamDatagramDiagnostic severity
         * @property {string|null} [text] CMsgSteamDatagramDiagnostic text
         */
    
        /**
         * Constructs a new CMsgSteamDatagramDiagnostic.
         * @exports CMsgSteamDatagramDiagnostic
         * @classdesc Represents a CMsgSteamDatagramDiagnostic.
         * @implements ICMsgSteamDatagramDiagnostic
         * @constructor
         * @param {ICMsgSteamDatagramDiagnostic=} [properties] Properties to set
         */
        function CMsgSteamDatagramDiagnostic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramDiagnostic severity.
         * @member {number} severity
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         */
        CMsgSteamDatagramDiagnostic.prototype.severity = 0;
    
        /**
         * CMsgSteamDatagramDiagnostic text.
         * @member {string} text
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         */
        CMsgSteamDatagramDiagnostic.prototype.text = "";
    
        /**
         * Creates a new CMsgSteamDatagramDiagnostic instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic=} [properties] Properties to set
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic instance
         */
        CMsgSteamDatagramDiagnostic.create = function create(properties) {
            return new CMsgSteamDatagramDiagnostic(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDiagnostic message. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDiagnostic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.severity != null && Object.hasOwnProperty.call(message, "severity"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.severity);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDiagnostic message, length delimited. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDiagnostic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDiagnostic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramDiagnostic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.severity = reader.uint32();
                        break;
                    }
                case 2: {
                        message.text = reader.string();
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
         * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDiagnostic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramDiagnostic message.
         * @function verify
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramDiagnostic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.severity != null && message.hasOwnProperty("severity"))
                if (!$util.isInteger(message.severity))
                    return "severity: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramDiagnostic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         */
        CMsgSteamDatagramDiagnostic.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramDiagnostic)
                return object;
            var message = new $root.CMsgSteamDatagramDiagnostic();
            if (object.severity != null)
                message.severity = object.severity >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramDiagnostic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {CMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramDiagnostic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.severity = 0;
                object.text = "";
            }
            if (message.severity != null && message.hasOwnProperty("severity"))
                object.severity = message.severity;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramDiagnostic to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramDiagnostic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramDiagnostic
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramDiagnostic.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramDiagnostic";
        };
    
        return CMsgSteamDatagramDiagnostic;
    })();
    
    $root.CMsgSteamDatagramLinkInstantaneousStats = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramLinkInstantaneousStats.
         * @exports ICMsgSteamDatagramLinkInstantaneousStats
         * @interface ICMsgSteamDatagramLinkInstantaneousStats
         * @property {number|null} [outPacketsPerSecX10] CMsgSteamDatagramLinkInstantaneousStats outPacketsPerSecX10
         * @property {number|null} [outBytesPerSec] CMsgSteamDatagramLinkInstantaneousStats outBytesPerSec
         * @property {number|null} [inPacketsPerSecX10] CMsgSteamDatagramLinkInstantaneousStats inPacketsPerSecX10
         * @property {number|null} [inBytesPerSec] CMsgSteamDatagramLinkInstantaneousStats inBytesPerSec
         * @property {number|null} [pingMs] CMsgSteamDatagramLinkInstantaneousStats pingMs
         * @property {number|null} [packetsDroppedPct] CMsgSteamDatagramLinkInstantaneousStats packetsDroppedPct
         * @property {number|null} [packetsWeirdSequencePct] CMsgSteamDatagramLinkInstantaneousStats packetsWeirdSequencePct
         * @property {number|null} [peakJitterUsec] CMsgSteamDatagramLinkInstantaneousStats peakJitterUsec
         */
    
        /**
         * Constructs a new CMsgSteamDatagramLinkInstantaneousStats.
         * @exports CMsgSteamDatagramLinkInstantaneousStats
         * @classdesc Represents a CMsgSteamDatagramLinkInstantaneousStats.
         * @implements ICMsgSteamDatagramLinkInstantaneousStats
         * @constructor
         * @param {ICMsgSteamDatagramLinkInstantaneousStats=} [properties] Properties to set
         */
        function CMsgSteamDatagramLinkInstantaneousStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats outPacketsPerSecX10.
         * @member {number} outPacketsPerSecX10
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.outPacketsPerSecX10 = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats outBytesPerSec.
         * @member {number} outBytesPerSec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.outBytesPerSec = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats inPacketsPerSecX10.
         * @member {number} inPacketsPerSecX10
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.inPacketsPerSecX10 = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats inBytesPerSec.
         * @member {number} inBytesPerSec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.inBytesPerSec = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats pingMs.
         * @member {number} pingMs
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.pingMs = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats packetsDroppedPct.
         * @member {number} packetsDroppedPct
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.packetsDroppedPct = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats packetsWeirdSequencePct.
         * @member {number} packetsWeirdSequencePct
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.packetsWeirdSequencePct = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats peakJitterUsec.
         * @member {number} peakJitterUsec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.peakJitterUsec = 0;
    
        /**
         * Creates a new CMsgSteamDatagramLinkInstantaneousStats instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats=} [properties] Properties to set
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.create = function create(properties) {
            return new CMsgSteamDatagramLinkInstantaneousStats(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkInstantaneousStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.outPacketsPerSecX10 != null && Object.hasOwnProperty.call(message, "outPacketsPerSecX10"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.outPacketsPerSecX10);
            if (message.outBytesPerSec != null && Object.hasOwnProperty.call(message, "outBytesPerSec"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.outBytesPerSec);
            if (message.inPacketsPerSecX10 != null && Object.hasOwnProperty.call(message, "inPacketsPerSecX10"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.inPacketsPerSecX10);
            if (message.inBytesPerSec != null && Object.hasOwnProperty.call(message, "inBytesPerSec"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.inBytesPerSec);
            if (message.pingMs != null && Object.hasOwnProperty.call(message, "pingMs"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.pingMs);
            if (message.packetsDroppedPct != null && Object.hasOwnProperty.call(message, "packetsDroppedPct"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.packetsDroppedPct);
            if (message.packetsWeirdSequencePct != null && Object.hasOwnProperty.call(message, "packetsWeirdSequencePct"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.packetsWeirdSequencePct);
            if (message.peakJitterUsec != null && Object.hasOwnProperty.call(message, "peakJitterUsec"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.peakJitterUsec);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkInstantaneousStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkInstantaneousStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramLinkInstantaneousStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.outPacketsPerSecX10 = reader.uint32();
                        break;
                    }
                case 2: {
                        message.outBytesPerSec = reader.uint32();
                        break;
                    }
                case 3: {
                        message.inPacketsPerSecX10 = reader.uint32();
                        break;
                    }
                case 4: {
                        message.inBytesPerSec = reader.uint32();
                        break;
                    }
                case 5: {
                        message.pingMs = reader.uint32();
                        break;
                    }
                case 6: {
                        message.packetsDroppedPct = reader.uint32();
                        break;
                    }
                case 7: {
                        message.packetsWeirdSequencePct = reader.uint32();
                        break;
                    }
                case 8: {
                        message.peakJitterUsec = reader.uint32();
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
         * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkInstantaneousStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramLinkInstantaneousStats message.
         * @function verify
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramLinkInstantaneousStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.outPacketsPerSecX10 != null && message.hasOwnProperty("outPacketsPerSecX10"))
                if (!$util.isInteger(message.outPacketsPerSecX10))
                    return "outPacketsPerSecX10: integer expected";
            if (message.outBytesPerSec != null && message.hasOwnProperty("outBytesPerSec"))
                if (!$util.isInteger(message.outBytesPerSec))
                    return "outBytesPerSec: integer expected";
            if (message.inPacketsPerSecX10 != null && message.hasOwnProperty("inPacketsPerSecX10"))
                if (!$util.isInteger(message.inPacketsPerSecX10))
                    return "inPacketsPerSecX10: integer expected";
            if (message.inBytesPerSec != null && message.hasOwnProperty("inBytesPerSec"))
                if (!$util.isInteger(message.inBytesPerSec))
                    return "inBytesPerSec: integer expected";
            if (message.pingMs != null && message.hasOwnProperty("pingMs"))
                if (!$util.isInteger(message.pingMs))
                    return "pingMs: integer expected";
            if (message.packetsDroppedPct != null && message.hasOwnProperty("packetsDroppedPct"))
                if (!$util.isInteger(message.packetsDroppedPct))
                    return "packetsDroppedPct: integer expected";
            if (message.packetsWeirdSequencePct != null && message.hasOwnProperty("packetsWeirdSequencePct"))
                if (!$util.isInteger(message.packetsWeirdSequencePct))
                    return "packetsWeirdSequencePct: integer expected";
            if (message.peakJitterUsec != null && message.hasOwnProperty("peakJitterUsec"))
                if (!$util.isInteger(message.peakJitterUsec))
                    return "peakJitterUsec: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramLinkInstantaneousStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         */
        CMsgSteamDatagramLinkInstantaneousStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramLinkInstantaneousStats)
                return object;
            var message = new $root.CMsgSteamDatagramLinkInstantaneousStats();
            if (object.outPacketsPerSecX10 != null)
                message.outPacketsPerSecX10 = object.outPacketsPerSecX10 >>> 0;
            if (object.outBytesPerSec != null)
                message.outBytesPerSec = object.outBytesPerSec >>> 0;
            if (object.inPacketsPerSecX10 != null)
                message.inPacketsPerSecX10 = object.inPacketsPerSecX10 >>> 0;
            if (object.inBytesPerSec != null)
                message.inBytesPerSec = object.inBytesPerSec >>> 0;
            if (object.pingMs != null)
                message.pingMs = object.pingMs >>> 0;
            if (object.packetsDroppedPct != null)
                message.packetsDroppedPct = object.packetsDroppedPct >>> 0;
            if (object.packetsWeirdSequencePct != null)
                message.packetsWeirdSequencePct = object.packetsWeirdSequencePct >>> 0;
            if (object.peakJitterUsec != null)
                message.peakJitterUsec = object.peakJitterUsec >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramLinkInstantaneousStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {CMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramLinkInstantaneousStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.outPacketsPerSecX10 = 0;
                object.outBytesPerSec = 0;
                object.inPacketsPerSecX10 = 0;
                object.inBytesPerSec = 0;
                object.pingMs = 0;
                object.packetsDroppedPct = 0;
                object.packetsWeirdSequencePct = 0;
                object.peakJitterUsec = 0;
            }
            if (message.outPacketsPerSecX10 != null && message.hasOwnProperty("outPacketsPerSecX10"))
                object.outPacketsPerSecX10 = message.outPacketsPerSecX10;
            if (message.outBytesPerSec != null && message.hasOwnProperty("outBytesPerSec"))
                object.outBytesPerSec = message.outBytesPerSec;
            if (message.inPacketsPerSecX10 != null && message.hasOwnProperty("inPacketsPerSecX10"))
                object.inPacketsPerSecX10 = message.inPacketsPerSecX10;
            if (message.inBytesPerSec != null && message.hasOwnProperty("inBytesPerSec"))
                object.inBytesPerSec = message.inBytesPerSec;
            if (message.pingMs != null && message.hasOwnProperty("pingMs"))
                object.pingMs = message.pingMs;
            if (message.packetsDroppedPct != null && message.hasOwnProperty("packetsDroppedPct"))
                object.packetsDroppedPct = message.packetsDroppedPct;
            if (message.packetsWeirdSequencePct != null && message.hasOwnProperty("packetsWeirdSequencePct"))
                object.packetsWeirdSequencePct = message.packetsWeirdSequencePct;
            if (message.peakJitterUsec != null && message.hasOwnProperty("peakJitterUsec"))
                object.peakJitterUsec = message.peakJitterUsec;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramLinkInstantaneousStats to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramLinkInstantaneousStats
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramLinkInstantaneousStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramLinkInstantaneousStats";
        };
    
        return CMsgSteamDatagramLinkInstantaneousStats;
    })();
    
    $root.CMsgSteamDatagramLinkLifetimeStats = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramLinkLifetimeStats.
         * @exports ICMsgSteamDatagramLinkLifetimeStats
         * @interface ICMsgSteamDatagramLinkLifetimeStats
         * @property {number|null} [connectedSeconds] CMsgSteamDatagramLinkLifetimeStats connectedSeconds
         * @property {number|Long|null} [packetsSent] CMsgSteamDatagramLinkLifetimeStats packetsSent
         * @property {number|Long|null} [kbSent] CMsgSteamDatagramLinkLifetimeStats kbSent
         * @property {number|Long|null} [packetsRecv] CMsgSteamDatagramLinkLifetimeStats packetsRecv
         * @property {number|Long|null} [kbRecv] CMsgSteamDatagramLinkLifetimeStats kbRecv
         * @property {number|Long|null} [packetsRecvSequenced] CMsgSteamDatagramLinkLifetimeStats packetsRecvSequenced
         * @property {number|Long|null} [packetsRecvDropped] CMsgSteamDatagramLinkLifetimeStats packetsRecvDropped
         * @property {number|Long|null} [packetsRecvOutOfOrder] CMsgSteamDatagramLinkLifetimeStats packetsRecvOutOfOrder
         * @property {number|Long|null} [packetsRecvOutOfOrderCorrected] CMsgSteamDatagramLinkLifetimeStats packetsRecvOutOfOrderCorrected
         * @property {number|Long|null} [packetsRecvDuplicate] CMsgSteamDatagramLinkLifetimeStats packetsRecvDuplicate
         * @property {number|Long|null} [packetsRecvLurch] CMsgSteamDatagramLinkLifetimeStats packetsRecvLurch
         * @property {Array.<number|Long>|null} [multipathPacketsRecvSequenced] CMsgSteamDatagramLinkLifetimeStats multipathPacketsRecvSequenced
         * @property {Array.<number|Long>|null} [multipathPacketsRecvLater] CMsgSteamDatagramLinkLifetimeStats multipathPacketsRecvLater
         * @property {number|null} [multipathSendEnabled] CMsgSteamDatagramLinkLifetimeStats multipathSendEnabled
         * @property {number|null} [qualityHistogram_100] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_100
         * @property {number|null} [qualityHistogram_99] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_99
         * @property {number|null} [qualityHistogram_97] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_97
         * @property {number|null} [qualityHistogram_95] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_95
         * @property {number|null} [qualityHistogram_90] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_90
         * @property {number|null} [qualityHistogram_75] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_75
         * @property {number|null} [qualityHistogram_50] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_50
         * @property {number|null} [qualityHistogram_1] CMsgSteamDatagramLinkLifetimeStats qualityHistogram_1
         * @property {number|null} [qualityHistogramDead] CMsgSteamDatagramLinkLifetimeStats qualityHistogramDead
         * @property {number|null} [qualityNtile_2nd] CMsgSteamDatagramLinkLifetimeStats qualityNtile_2nd
         * @property {number|null} [qualityNtile_5th] CMsgSteamDatagramLinkLifetimeStats qualityNtile_5th
         * @property {number|null} [qualityNtile_25th] CMsgSteamDatagramLinkLifetimeStats qualityNtile_25th
         * @property {number|null} [qualityNtile_50th] CMsgSteamDatagramLinkLifetimeStats qualityNtile_50th
         * @property {number|null} [pingHistogram_25] CMsgSteamDatagramLinkLifetimeStats pingHistogram_25
         * @property {number|null} [pingHistogram_50] CMsgSteamDatagramLinkLifetimeStats pingHistogram_50
         * @property {number|null} [pingHistogram_75] CMsgSteamDatagramLinkLifetimeStats pingHistogram_75
         * @property {number|null} [pingHistogram_100] CMsgSteamDatagramLinkLifetimeStats pingHistogram_100
         * @property {number|null} [pingHistogram_125] CMsgSteamDatagramLinkLifetimeStats pingHistogram_125
         * @property {number|null} [pingHistogram_150] CMsgSteamDatagramLinkLifetimeStats pingHistogram_150
         * @property {number|null} [pingHistogram_200] CMsgSteamDatagramLinkLifetimeStats pingHistogram_200
         * @property {number|null} [pingHistogram_300] CMsgSteamDatagramLinkLifetimeStats pingHistogram_300
         * @property {number|null} [pingHistogramMax] CMsgSteamDatagramLinkLifetimeStats pingHistogramMax
         * @property {number|null} [pingNtile_5th] CMsgSteamDatagramLinkLifetimeStats pingNtile_5th
         * @property {number|null} [pingNtile_50th] CMsgSteamDatagramLinkLifetimeStats pingNtile_50th
         * @property {number|null} [pingNtile_75th] CMsgSteamDatagramLinkLifetimeStats pingNtile_75th
         * @property {number|null} [pingNtile_95th] CMsgSteamDatagramLinkLifetimeStats pingNtile_95th
         * @property {number|null} [pingNtile_98th] CMsgSteamDatagramLinkLifetimeStats pingNtile_98th
         * @property {number|null} [jitterHistogramNegligible] CMsgSteamDatagramLinkLifetimeStats jitterHistogramNegligible
         * @property {number|null} [jitterHistogram_1] CMsgSteamDatagramLinkLifetimeStats jitterHistogram_1
         * @property {number|null} [jitterHistogram_2] CMsgSteamDatagramLinkLifetimeStats jitterHistogram_2
         * @property {number|null} [jitterHistogram_5] CMsgSteamDatagramLinkLifetimeStats jitterHistogram_5
         * @property {number|null} [jitterHistogram_10] CMsgSteamDatagramLinkLifetimeStats jitterHistogram_10
         * @property {number|null} [jitterHistogram_20] CMsgSteamDatagramLinkLifetimeStats jitterHistogram_20
         * @property {number|null} [txspeedMax] CMsgSteamDatagramLinkLifetimeStats txspeedMax
         * @property {number|null} [txspeedHistogram_16] CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_16
         * @property {number|null} [txspeedHistogram_32] CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_32
         * @property {number|null} [txspeedHistogram_64] CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_64
         * @property {number|null} [txspeedHistogram_128] CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_128
         * @property {number|null} [txspeedHistogram_256] CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_256
         * @property {number|null} [txspeedHistogram_512] CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_512
         * @property {number|null} [txspeedHistogram_1024] CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_1024
         * @property {number|null} [txspeedHistogramMax] CMsgSteamDatagramLinkLifetimeStats txspeedHistogramMax
         * @property {number|null} [txspeedNtile_5th] CMsgSteamDatagramLinkLifetimeStats txspeedNtile_5th
         * @property {number|null} [txspeedNtile_50th] CMsgSteamDatagramLinkLifetimeStats txspeedNtile_50th
         * @property {number|null} [txspeedNtile_75th] CMsgSteamDatagramLinkLifetimeStats txspeedNtile_75th
         * @property {number|null} [txspeedNtile_95th] CMsgSteamDatagramLinkLifetimeStats txspeedNtile_95th
         * @property {number|null} [txspeedNtile_98th] CMsgSteamDatagramLinkLifetimeStats txspeedNtile_98th
         * @property {number|null} [rxspeedMax] CMsgSteamDatagramLinkLifetimeStats rxspeedMax
         * @property {number|null} [rxspeedHistogram_16] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_16
         * @property {number|null} [rxspeedHistogram_32] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_32
         * @property {number|null} [rxspeedHistogram_64] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_64
         * @property {number|null} [rxspeedHistogram_128] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_128
         * @property {number|null} [rxspeedHistogram_256] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_256
         * @property {number|null} [rxspeedHistogram_512] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_512
         * @property {number|null} [rxspeedHistogram_1024] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_1024
         * @property {number|null} [rxspeedHistogramMax] CMsgSteamDatagramLinkLifetimeStats rxspeedHistogramMax
         * @property {number|null} [rxspeedNtile_5th] CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_5th
         * @property {number|null} [rxspeedNtile_50th] CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_50th
         * @property {number|null} [rxspeedNtile_75th] CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_75th
         * @property {number|null} [rxspeedNtile_95th] CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_95th
         * @property {number|null} [rxspeedNtile_98th] CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_98th
         */
    
        /**
         * Constructs a new CMsgSteamDatagramLinkLifetimeStats.
         * @exports CMsgSteamDatagramLinkLifetimeStats
         * @classdesc Represents a CMsgSteamDatagramLinkLifetimeStats.
         * @implements ICMsgSteamDatagramLinkLifetimeStats
         * @constructor
         * @param {ICMsgSteamDatagramLinkLifetimeStats=} [properties] Properties to set
         */
        function CMsgSteamDatagramLinkLifetimeStats(properties) {
            this.multipathPacketsRecvSequenced = [];
            this.multipathPacketsRecvLater = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats connectedSeconds.
         * @member {number} connectedSeconds
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.connectedSeconds = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsSent.
         * @member {number|Long} packetsSent
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsSent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats kbSent.
         * @member {number|Long} kbSent
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.kbSent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsRecv.
         * @member {number|Long} packetsRecv
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsRecv = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats kbRecv.
         * @member {number|Long} kbRecv
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.kbRecv = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsRecvSequenced.
         * @member {number|Long} packetsRecvSequenced
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsRecvSequenced = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsRecvDropped.
         * @member {number|Long} packetsRecvDropped
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsRecvDropped = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsRecvOutOfOrder.
         * @member {number|Long} packetsRecvOutOfOrder
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsRecvOutOfOrder = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsRecvOutOfOrderCorrected.
         * @member {number|Long} packetsRecvOutOfOrderCorrected
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsRecvOutOfOrderCorrected = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsRecvDuplicate.
         * @member {number|Long} packetsRecvDuplicate
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsRecvDuplicate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packetsRecvLurch.
         * @member {number|Long} packetsRecvLurch
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packetsRecvLurch = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats multipathPacketsRecvSequenced.
         * @member {Array.<number|Long>} multipathPacketsRecvSequenced
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.multipathPacketsRecvSequenced = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats multipathPacketsRecvLater.
         * @member {Array.<number|Long>} multipathPacketsRecvLater
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.multipathPacketsRecvLater = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats multipathSendEnabled.
         * @member {number} multipathSendEnabled
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.multipathSendEnabled = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_100.
         * @member {number} qualityHistogram_100
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_100 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_99.
         * @member {number} qualityHistogram_99
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_99 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_97.
         * @member {number} qualityHistogram_97
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_97 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_95.
         * @member {number} qualityHistogram_95
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_95 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_90.
         * @member {number} qualityHistogram_90
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_90 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_75.
         * @member {number} qualityHistogram_75
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_75 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_50.
         * @member {number} qualityHistogram_50
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_50 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogram_1.
         * @member {number} qualityHistogram_1
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogram_1 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityHistogramDead.
         * @member {number} qualityHistogramDead
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityHistogramDead = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityNtile_2nd.
         * @member {number} qualityNtile_2nd
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityNtile_2nd = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityNtile_5th.
         * @member {number} qualityNtile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityNtile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityNtile_25th.
         * @member {number} qualityNtile_25th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityNtile_25th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats qualityNtile_50th.
         * @member {number} qualityNtile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.qualityNtile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_25.
         * @member {number} pingHistogram_25
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_25 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_50.
         * @member {number} pingHistogram_50
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_50 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_75.
         * @member {number} pingHistogram_75
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_75 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_100.
         * @member {number} pingHistogram_100
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_100 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_125.
         * @member {number} pingHistogram_125
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_125 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_150.
         * @member {number} pingHistogram_150
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_150 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_200.
         * @member {number} pingHistogram_200
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_200 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogram_300.
         * @member {number} pingHistogram_300
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogram_300 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingHistogramMax.
         * @member {number} pingHistogramMax
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingHistogramMax = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingNtile_5th.
         * @member {number} pingNtile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingNtile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingNtile_50th.
         * @member {number} pingNtile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingNtile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingNtile_75th.
         * @member {number} pingNtile_75th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingNtile_75th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingNtile_95th.
         * @member {number} pingNtile_95th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingNtile_95th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats pingNtile_98th.
         * @member {number} pingNtile_98th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.pingNtile_98th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitterHistogramNegligible.
         * @member {number} jitterHistogramNegligible
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitterHistogramNegligible = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitterHistogram_1.
         * @member {number} jitterHistogram_1
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitterHistogram_1 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitterHistogram_2.
         * @member {number} jitterHistogram_2
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitterHistogram_2 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitterHistogram_5.
         * @member {number} jitterHistogram_5
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitterHistogram_5 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitterHistogram_10.
         * @member {number} jitterHistogram_10
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitterHistogram_10 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitterHistogram_20.
         * @member {number} jitterHistogram_20
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitterHistogram_20 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedMax.
         * @member {number} txspeedMax
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedMax = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_16.
         * @member {number} txspeedHistogram_16
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogram_16 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_32.
         * @member {number} txspeedHistogram_32
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogram_32 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_64.
         * @member {number} txspeedHistogram_64
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogram_64 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_128.
         * @member {number} txspeedHistogram_128
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogram_128 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_256.
         * @member {number} txspeedHistogram_256
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogram_256 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_512.
         * @member {number} txspeedHistogram_512
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogram_512 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_1024.
         * @member {number} txspeedHistogram_1024
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogram_1024 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedHistogramMax.
         * @member {number} txspeedHistogramMax
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedHistogramMax = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedNtile_5th.
         * @member {number} txspeedNtile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedNtile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedNtile_50th.
         * @member {number} txspeedNtile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedNtile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedNtile_75th.
         * @member {number} txspeedNtile_75th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedNtile_75th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedNtile_95th.
         * @member {number} txspeedNtile_95th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedNtile_95th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeedNtile_98th.
         * @member {number} txspeedNtile_98th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeedNtile_98th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedMax.
         * @member {number} rxspeedMax
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedMax = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_16.
         * @member {number} rxspeedHistogram_16
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogram_16 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_32.
         * @member {number} rxspeedHistogram_32
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogram_32 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_64.
         * @member {number} rxspeedHistogram_64
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogram_64 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_128.
         * @member {number} rxspeedHistogram_128
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogram_128 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_256.
         * @member {number} rxspeedHistogram_256
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogram_256 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_512.
         * @member {number} rxspeedHistogram_512
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogram_512 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_1024.
         * @member {number} rxspeedHistogram_1024
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogram_1024 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedHistogramMax.
         * @member {number} rxspeedHistogramMax
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedHistogramMax = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_5th.
         * @member {number} rxspeedNtile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedNtile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_50th.
         * @member {number} rxspeedNtile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedNtile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_75th.
         * @member {number} rxspeedNtile_75th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedNtile_75th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_95th.
         * @member {number} rxspeedNtile_95th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedNtile_95th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_98th.
         * @member {number} rxspeedNtile_98th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeedNtile_98th = 0;
    
        /**
         * Creates a new CMsgSteamDatagramLinkLifetimeStats instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats=} [properties] Properties to set
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats instance
         */
        CMsgSteamDatagramLinkLifetimeStats.create = function create(properties) {
            return new CMsgSteamDatagramLinkLifetimeStats(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkLifetimeStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectedSeconds != null && Object.hasOwnProperty.call(message, "connectedSeconds"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.connectedSeconds);
            if (message.packetsSent != null && Object.hasOwnProperty.call(message, "packetsSent"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.packetsSent);
            if (message.kbSent != null && Object.hasOwnProperty.call(message, "kbSent"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.kbSent);
            if (message.packetsRecv != null && Object.hasOwnProperty.call(message, "packetsRecv"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.packetsRecv);
            if (message.kbRecv != null && Object.hasOwnProperty.call(message, "kbRecv"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.kbRecv);
            if (message.packetsRecvSequenced != null && Object.hasOwnProperty.call(message, "packetsRecvSequenced"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.packetsRecvSequenced);
            if (message.packetsRecvDropped != null && Object.hasOwnProperty.call(message, "packetsRecvDropped"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.packetsRecvDropped);
            if (message.packetsRecvOutOfOrder != null && Object.hasOwnProperty.call(message, "packetsRecvOutOfOrder"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.packetsRecvOutOfOrder);
            if (message.packetsRecvDuplicate != null && Object.hasOwnProperty.call(message, "packetsRecvDuplicate"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.packetsRecvDuplicate);
            if (message.packetsRecvLurch != null && Object.hasOwnProperty.call(message, "packetsRecvLurch"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.packetsRecvLurch);
            if (message.multipathPacketsRecvSequenced != null && message.multipathPacketsRecvSequenced.length)
                for (var i = 0; i < message.multipathPacketsRecvSequenced.length; ++i)
                    writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.multipathPacketsRecvSequenced[i]);
            if (message.multipathPacketsRecvLater != null && message.multipathPacketsRecvLater.length)
                for (var i = 0; i < message.multipathPacketsRecvLater.length; ++i)
                    writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.multipathPacketsRecvLater[i]);
            if (message.multipathSendEnabled != null && Object.hasOwnProperty.call(message, "multipathSendEnabled"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.multipathSendEnabled);
            if (message.packetsRecvOutOfOrderCorrected != null && Object.hasOwnProperty.call(message, "packetsRecvOutOfOrderCorrected"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.packetsRecvOutOfOrderCorrected);
            if (message.qualityHistogram_100 != null && Object.hasOwnProperty.call(message, "qualityHistogram_100"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.qualityHistogram_100);
            if (message.qualityHistogram_99 != null && Object.hasOwnProperty.call(message, "qualityHistogram_99"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.qualityHistogram_99);
            if (message.qualityHistogram_97 != null && Object.hasOwnProperty.call(message, "qualityHistogram_97"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.qualityHistogram_97);
            if (message.qualityHistogram_95 != null && Object.hasOwnProperty.call(message, "qualityHistogram_95"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.qualityHistogram_95);
            if (message.qualityHistogram_90 != null && Object.hasOwnProperty.call(message, "qualityHistogram_90"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.qualityHistogram_90);
            if (message.qualityHistogram_75 != null && Object.hasOwnProperty.call(message, "qualityHistogram_75"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.qualityHistogram_75);
            if (message.qualityHistogram_50 != null && Object.hasOwnProperty.call(message, "qualityHistogram_50"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.qualityHistogram_50);
            if (message.qualityHistogram_1 != null && Object.hasOwnProperty.call(message, "qualityHistogram_1"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.qualityHistogram_1);
            if (message.qualityHistogramDead != null && Object.hasOwnProperty.call(message, "qualityHistogramDead"))
                writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.qualityHistogramDead);
            if (message.qualityNtile_2nd != null && Object.hasOwnProperty.call(message, "qualityNtile_2nd"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.qualityNtile_2nd);
            if (message.qualityNtile_5th != null && Object.hasOwnProperty.call(message, "qualityNtile_5th"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.qualityNtile_5th);
            if (message.qualityNtile_25th != null && Object.hasOwnProperty.call(message, "qualityNtile_25th"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.qualityNtile_25th);
            if (message.qualityNtile_50th != null && Object.hasOwnProperty.call(message, "qualityNtile_50th"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.qualityNtile_50th);
            if (message.pingHistogram_25 != null && Object.hasOwnProperty.call(message, "pingHistogram_25"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.pingHistogram_25);
            if (message.pingHistogram_50 != null && Object.hasOwnProperty.call(message, "pingHistogram_50"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.pingHistogram_50);
            if (message.pingHistogram_75 != null && Object.hasOwnProperty.call(message, "pingHistogram_75"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.pingHistogram_75);
            if (message.pingHistogram_100 != null && Object.hasOwnProperty.call(message, "pingHistogram_100"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.pingHistogram_100);
            if (message.pingHistogram_125 != null && Object.hasOwnProperty.call(message, "pingHistogram_125"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.pingHistogram_125);
            if (message.pingHistogram_150 != null && Object.hasOwnProperty.call(message, "pingHistogram_150"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.pingHistogram_150);
            if (message.pingHistogram_200 != null && Object.hasOwnProperty.call(message, "pingHistogram_200"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.pingHistogram_200);
            if (message.pingHistogram_300 != null && Object.hasOwnProperty.call(message, "pingHistogram_300"))
                writer.uint32(/* id 48, wireType 0 =*/384).uint32(message.pingHistogram_300);
            if (message.pingHistogramMax != null && Object.hasOwnProperty.call(message, "pingHistogramMax"))
                writer.uint32(/* id 49, wireType 0 =*/392).uint32(message.pingHistogramMax);
            if (message.pingNtile_5th != null && Object.hasOwnProperty.call(message, "pingNtile_5th"))
                writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.pingNtile_5th);
            if (message.pingNtile_50th != null && Object.hasOwnProperty.call(message, "pingNtile_50th"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint32(message.pingNtile_50th);
            if (message.pingNtile_75th != null && Object.hasOwnProperty.call(message, "pingNtile_75th"))
                writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.pingNtile_75th);
            if (message.pingNtile_95th != null && Object.hasOwnProperty.call(message, "pingNtile_95th"))
                writer.uint32(/* id 53, wireType 0 =*/424).uint32(message.pingNtile_95th);
            if (message.pingNtile_98th != null && Object.hasOwnProperty.call(message, "pingNtile_98th"))
                writer.uint32(/* id 54, wireType 0 =*/432).uint32(message.pingNtile_98th);
            if (message.jitterHistogramNegligible != null && Object.hasOwnProperty.call(message, "jitterHistogramNegligible"))
                writer.uint32(/* id 61, wireType 0 =*/488).uint32(message.jitterHistogramNegligible);
            if (message.jitterHistogram_1 != null && Object.hasOwnProperty.call(message, "jitterHistogram_1"))
                writer.uint32(/* id 62, wireType 0 =*/496).uint32(message.jitterHistogram_1);
            if (message.jitterHistogram_2 != null && Object.hasOwnProperty.call(message, "jitterHistogram_2"))
                writer.uint32(/* id 63, wireType 0 =*/504).uint32(message.jitterHistogram_2);
            if (message.jitterHistogram_5 != null && Object.hasOwnProperty.call(message, "jitterHistogram_5"))
                writer.uint32(/* id 64, wireType 0 =*/512).uint32(message.jitterHistogram_5);
            if (message.jitterHistogram_10 != null && Object.hasOwnProperty.call(message, "jitterHistogram_10"))
                writer.uint32(/* id 65, wireType 0 =*/520).uint32(message.jitterHistogram_10);
            if (message.jitterHistogram_20 != null && Object.hasOwnProperty.call(message, "jitterHistogram_20"))
                writer.uint32(/* id 66, wireType 0 =*/528).uint32(message.jitterHistogram_20);
            if (message.txspeedMax != null && Object.hasOwnProperty.call(message, "txspeedMax"))
                writer.uint32(/* id 67, wireType 0 =*/536).uint32(message.txspeedMax);
            if (message.txspeedHistogram_16 != null && Object.hasOwnProperty.call(message, "txspeedHistogram_16"))
                writer.uint32(/* id 68, wireType 0 =*/544).uint32(message.txspeedHistogram_16);
            if (message.txspeedHistogram_32 != null && Object.hasOwnProperty.call(message, "txspeedHistogram_32"))
                writer.uint32(/* id 69, wireType 0 =*/552).uint32(message.txspeedHistogram_32);
            if (message.txspeedHistogram_64 != null && Object.hasOwnProperty.call(message, "txspeedHistogram_64"))
                writer.uint32(/* id 70, wireType 0 =*/560).uint32(message.txspeedHistogram_64);
            if (message.txspeedHistogram_128 != null && Object.hasOwnProperty.call(message, "txspeedHistogram_128"))
                writer.uint32(/* id 71, wireType 0 =*/568).uint32(message.txspeedHistogram_128);
            if (message.txspeedHistogram_256 != null && Object.hasOwnProperty.call(message, "txspeedHistogram_256"))
                writer.uint32(/* id 72, wireType 0 =*/576).uint32(message.txspeedHistogram_256);
            if (message.txspeedHistogram_512 != null && Object.hasOwnProperty.call(message, "txspeedHistogram_512"))
                writer.uint32(/* id 73, wireType 0 =*/584).uint32(message.txspeedHistogram_512);
            if (message.txspeedHistogram_1024 != null && Object.hasOwnProperty.call(message, "txspeedHistogram_1024"))
                writer.uint32(/* id 74, wireType 0 =*/592).uint32(message.txspeedHistogram_1024);
            if (message.txspeedHistogramMax != null && Object.hasOwnProperty.call(message, "txspeedHistogramMax"))
                writer.uint32(/* id 75, wireType 0 =*/600).uint32(message.txspeedHistogramMax);
            if (message.txspeedNtile_5th != null && Object.hasOwnProperty.call(message, "txspeedNtile_5th"))
                writer.uint32(/* id 76, wireType 0 =*/608).uint32(message.txspeedNtile_5th);
            if (message.txspeedNtile_50th != null && Object.hasOwnProperty.call(message, "txspeedNtile_50th"))
                writer.uint32(/* id 77, wireType 0 =*/616).uint32(message.txspeedNtile_50th);
            if (message.txspeedNtile_75th != null && Object.hasOwnProperty.call(message, "txspeedNtile_75th"))
                writer.uint32(/* id 78, wireType 0 =*/624).uint32(message.txspeedNtile_75th);
            if (message.txspeedNtile_95th != null && Object.hasOwnProperty.call(message, "txspeedNtile_95th"))
                writer.uint32(/* id 79, wireType 0 =*/632).uint32(message.txspeedNtile_95th);
            if (message.txspeedNtile_98th != null && Object.hasOwnProperty.call(message, "txspeedNtile_98th"))
                writer.uint32(/* id 80, wireType 0 =*/640).uint32(message.txspeedNtile_98th);
            if (message.rxspeedMax != null && Object.hasOwnProperty.call(message, "rxspeedMax"))
                writer.uint32(/* id 81, wireType 0 =*/648).uint32(message.rxspeedMax);
            if (message.rxspeedHistogram_16 != null && Object.hasOwnProperty.call(message, "rxspeedHistogram_16"))
                writer.uint32(/* id 82, wireType 0 =*/656).uint32(message.rxspeedHistogram_16);
            if (message.rxspeedHistogram_32 != null && Object.hasOwnProperty.call(message, "rxspeedHistogram_32"))
                writer.uint32(/* id 83, wireType 0 =*/664).uint32(message.rxspeedHistogram_32);
            if (message.rxspeedHistogram_64 != null && Object.hasOwnProperty.call(message, "rxspeedHistogram_64"))
                writer.uint32(/* id 84, wireType 0 =*/672).uint32(message.rxspeedHistogram_64);
            if (message.rxspeedHistogram_128 != null && Object.hasOwnProperty.call(message, "rxspeedHistogram_128"))
                writer.uint32(/* id 85, wireType 0 =*/680).uint32(message.rxspeedHistogram_128);
            if (message.rxspeedHistogram_256 != null && Object.hasOwnProperty.call(message, "rxspeedHistogram_256"))
                writer.uint32(/* id 86, wireType 0 =*/688).uint32(message.rxspeedHistogram_256);
            if (message.rxspeedHistogram_512 != null && Object.hasOwnProperty.call(message, "rxspeedHistogram_512"))
                writer.uint32(/* id 87, wireType 0 =*/696).uint32(message.rxspeedHistogram_512);
            if (message.rxspeedHistogram_1024 != null && Object.hasOwnProperty.call(message, "rxspeedHistogram_1024"))
                writer.uint32(/* id 88, wireType 0 =*/704).uint32(message.rxspeedHistogram_1024);
            if (message.rxspeedHistogramMax != null && Object.hasOwnProperty.call(message, "rxspeedHistogramMax"))
                writer.uint32(/* id 89, wireType 0 =*/712).uint32(message.rxspeedHistogramMax);
            if (message.rxspeedNtile_5th != null && Object.hasOwnProperty.call(message, "rxspeedNtile_5th"))
                writer.uint32(/* id 90, wireType 0 =*/720).uint32(message.rxspeedNtile_5th);
            if (message.rxspeedNtile_50th != null && Object.hasOwnProperty.call(message, "rxspeedNtile_50th"))
                writer.uint32(/* id 91, wireType 0 =*/728).uint32(message.rxspeedNtile_50th);
            if (message.rxspeedNtile_75th != null && Object.hasOwnProperty.call(message, "rxspeedNtile_75th"))
                writer.uint32(/* id 92, wireType 0 =*/736).uint32(message.rxspeedNtile_75th);
            if (message.rxspeedNtile_95th != null && Object.hasOwnProperty.call(message, "rxspeedNtile_95th"))
                writer.uint32(/* id 93, wireType 0 =*/744).uint32(message.rxspeedNtile_95th);
            if (message.rxspeedNtile_98th != null && Object.hasOwnProperty.call(message, "rxspeedNtile_98th"))
                writer.uint32(/* id 94, wireType 0 =*/752).uint32(message.rxspeedNtile_98th);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkLifetimeStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkLifetimeStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramLinkLifetimeStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.connectedSeconds = reader.uint32();
                        break;
                    }
                case 3: {
                        message.packetsSent = reader.uint64();
                        break;
                    }
                case 4: {
                        message.kbSent = reader.uint64();
                        break;
                    }
                case 5: {
                        message.packetsRecv = reader.uint64();
                        break;
                    }
                case 6: {
                        message.kbRecv = reader.uint64();
                        break;
                    }
                case 7: {
                        message.packetsRecvSequenced = reader.uint64();
                        break;
                    }
                case 8: {
                        message.packetsRecvDropped = reader.uint64();
                        break;
                    }
                case 9: {
                        message.packetsRecvOutOfOrder = reader.uint64();
                        break;
                    }
                case 15: {
                        message.packetsRecvOutOfOrderCorrected = reader.uint64();
                        break;
                    }
                case 10: {
                        message.packetsRecvDuplicate = reader.uint64();
                        break;
                    }
                case 11: {
                        message.packetsRecvLurch = reader.uint64();
                        break;
                    }
                case 12: {
                        if (!(message.multipathPacketsRecvSequenced && message.multipathPacketsRecvSequenced.length))
                            message.multipathPacketsRecvSequenced = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.multipathPacketsRecvSequenced.push(reader.uint64());
                        } else
                            message.multipathPacketsRecvSequenced.push(reader.uint64());
                        break;
                    }
                case 13: {
                        if (!(message.multipathPacketsRecvLater && message.multipathPacketsRecvLater.length))
                            message.multipathPacketsRecvLater = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.multipathPacketsRecvLater.push(reader.uint64());
                        } else
                            message.multipathPacketsRecvLater.push(reader.uint64());
                        break;
                    }
                case 14: {
                        message.multipathSendEnabled = reader.uint32();
                        break;
                    }
                case 21: {
                        message.qualityHistogram_100 = reader.uint32();
                        break;
                    }
                case 22: {
                        message.qualityHistogram_99 = reader.uint32();
                        break;
                    }
                case 23: {
                        message.qualityHistogram_97 = reader.uint32();
                        break;
                    }
                case 24: {
                        message.qualityHistogram_95 = reader.uint32();
                        break;
                    }
                case 25: {
                        message.qualityHistogram_90 = reader.uint32();
                        break;
                    }
                case 26: {
                        message.qualityHistogram_75 = reader.uint32();
                        break;
                    }
                case 27: {
                        message.qualityHistogram_50 = reader.uint32();
                        break;
                    }
                case 28: {
                        message.qualityHistogram_1 = reader.uint32();
                        break;
                    }
                case 29: {
                        message.qualityHistogramDead = reader.uint32();
                        break;
                    }
                case 30: {
                        message.qualityNtile_2nd = reader.uint32();
                        break;
                    }
                case 31: {
                        message.qualityNtile_5th = reader.uint32();
                        break;
                    }
                case 32: {
                        message.qualityNtile_25th = reader.uint32();
                        break;
                    }
                case 33: {
                        message.qualityNtile_50th = reader.uint32();
                        break;
                    }
                case 41: {
                        message.pingHistogram_25 = reader.uint32();
                        break;
                    }
                case 42: {
                        message.pingHistogram_50 = reader.uint32();
                        break;
                    }
                case 43: {
                        message.pingHistogram_75 = reader.uint32();
                        break;
                    }
                case 44: {
                        message.pingHistogram_100 = reader.uint32();
                        break;
                    }
                case 45: {
                        message.pingHistogram_125 = reader.uint32();
                        break;
                    }
                case 46: {
                        message.pingHistogram_150 = reader.uint32();
                        break;
                    }
                case 47: {
                        message.pingHistogram_200 = reader.uint32();
                        break;
                    }
                case 48: {
                        message.pingHistogram_300 = reader.uint32();
                        break;
                    }
                case 49: {
                        message.pingHistogramMax = reader.uint32();
                        break;
                    }
                case 50: {
                        message.pingNtile_5th = reader.uint32();
                        break;
                    }
                case 51: {
                        message.pingNtile_50th = reader.uint32();
                        break;
                    }
                case 52: {
                        message.pingNtile_75th = reader.uint32();
                        break;
                    }
                case 53: {
                        message.pingNtile_95th = reader.uint32();
                        break;
                    }
                case 54: {
                        message.pingNtile_98th = reader.uint32();
                        break;
                    }
                case 61: {
                        message.jitterHistogramNegligible = reader.uint32();
                        break;
                    }
                case 62: {
                        message.jitterHistogram_1 = reader.uint32();
                        break;
                    }
                case 63: {
                        message.jitterHistogram_2 = reader.uint32();
                        break;
                    }
                case 64: {
                        message.jitterHistogram_5 = reader.uint32();
                        break;
                    }
                case 65: {
                        message.jitterHistogram_10 = reader.uint32();
                        break;
                    }
                case 66: {
                        message.jitterHistogram_20 = reader.uint32();
                        break;
                    }
                case 67: {
                        message.txspeedMax = reader.uint32();
                        break;
                    }
                case 68: {
                        message.txspeedHistogram_16 = reader.uint32();
                        break;
                    }
                case 69: {
                        message.txspeedHistogram_32 = reader.uint32();
                        break;
                    }
                case 70: {
                        message.txspeedHistogram_64 = reader.uint32();
                        break;
                    }
                case 71: {
                        message.txspeedHistogram_128 = reader.uint32();
                        break;
                    }
                case 72: {
                        message.txspeedHistogram_256 = reader.uint32();
                        break;
                    }
                case 73: {
                        message.txspeedHistogram_512 = reader.uint32();
                        break;
                    }
                case 74: {
                        message.txspeedHistogram_1024 = reader.uint32();
                        break;
                    }
                case 75: {
                        message.txspeedHistogramMax = reader.uint32();
                        break;
                    }
                case 76: {
                        message.txspeedNtile_5th = reader.uint32();
                        break;
                    }
                case 77: {
                        message.txspeedNtile_50th = reader.uint32();
                        break;
                    }
                case 78: {
                        message.txspeedNtile_75th = reader.uint32();
                        break;
                    }
                case 79: {
                        message.txspeedNtile_95th = reader.uint32();
                        break;
                    }
                case 80: {
                        message.txspeedNtile_98th = reader.uint32();
                        break;
                    }
                case 81: {
                        message.rxspeedMax = reader.uint32();
                        break;
                    }
                case 82: {
                        message.rxspeedHistogram_16 = reader.uint32();
                        break;
                    }
                case 83: {
                        message.rxspeedHistogram_32 = reader.uint32();
                        break;
                    }
                case 84: {
                        message.rxspeedHistogram_64 = reader.uint32();
                        break;
                    }
                case 85: {
                        message.rxspeedHistogram_128 = reader.uint32();
                        break;
                    }
                case 86: {
                        message.rxspeedHistogram_256 = reader.uint32();
                        break;
                    }
                case 87: {
                        message.rxspeedHistogram_512 = reader.uint32();
                        break;
                    }
                case 88: {
                        message.rxspeedHistogram_1024 = reader.uint32();
                        break;
                    }
                case 89: {
                        message.rxspeedHistogramMax = reader.uint32();
                        break;
                    }
                case 90: {
                        message.rxspeedNtile_5th = reader.uint32();
                        break;
                    }
                case 91: {
                        message.rxspeedNtile_50th = reader.uint32();
                        break;
                    }
                case 92: {
                        message.rxspeedNtile_75th = reader.uint32();
                        break;
                    }
                case 93: {
                        message.rxspeedNtile_95th = reader.uint32();
                        break;
                    }
                case 94: {
                        message.rxspeedNtile_98th = reader.uint32();
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
         * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkLifetimeStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramLinkLifetimeStats message.
         * @function verify
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramLinkLifetimeStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectedSeconds != null && message.hasOwnProperty("connectedSeconds"))
                if (!$util.isInteger(message.connectedSeconds))
                    return "connectedSeconds: integer expected";
            if (message.packetsSent != null && message.hasOwnProperty("packetsSent"))
                if (!$util.isInteger(message.packetsSent) && !(message.packetsSent && $util.isInteger(message.packetsSent.low) && $util.isInteger(message.packetsSent.high)))
                    return "packetsSent: integer|Long expected";
            if (message.kbSent != null && message.hasOwnProperty("kbSent"))
                if (!$util.isInteger(message.kbSent) && !(message.kbSent && $util.isInteger(message.kbSent.low) && $util.isInteger(message.kbSent.high)))
                    return "kbSent: integer|Long expected";
            if (message.packetsRecv != null && message.hasOwnProperty("packetsRecv"))
                if (!$util.isInteger(message.packetsRecv) && !(message.packetsRecv && $util.isInteger(message.packetsRecv.low) && $util.isInteger(message.packetsRecv.high)))
                    return "packetsRecv: integer|Long expected";
            if (message.kbRecv != null && message.hasOwnProperty("kbRecv"))
                if (!$util.isInteger(message.kbRecv) && !(message.kbRecv && $util.isInteger(message.kbRecv.low) && $util.isInteger(message.kbRecv.high)))
                    return "kbRecv: integer|Long expected";
            if (message.packetsRecvSequenced != null && message.hasOwnProperty("packetsRecvSequenced"))
                if (!$util.isInteger(message.packetsRecvSequenced) && !(message.packetsRecvSequenced && $util.isInteger(message.packetsRecvSequenced.low) && $util.isInteger(message.packetsRecvSequenced.high)))
                    return "packetsRecvSequenced: integer|Long expected";
            if (message.packetsRecvDropped != null && message.hasOwnProperty("packetsRecvDropped"))
                if (!$util.isInteger(message.packetsRecvDropped) && !(message.packetsRecvDropped && $util.isInteger(message.packetsRecvDropped.low) && $util.isInteger(message.packetsRecvDropped.high)))
                    return "packetsRecvDropped: integer|Long expected";
            if (message.packetsRecvOutOfOrder != null && message.hasOwnProperty("packetsRecvOutOfOrder"))
                if (!$util.isInteger(message.packetsRecvOutOfOrder) && !(message.packetsRecvOutOfOrder && $util.isInteger(message.packetsRecvOutOfOrder.low) && $util.isInteger(message.packetsRecvOutOfOrder.high)))
                    return "packetsRecvOutOfOrder: integer|Long expected";
            if (message.packetsRecvOutOfOrderCorrected != null && message.hasOwnProperty("packetsRecvOutOfOrderCorrected"))
                if (!$util.isInteger(message.packetsRecvOutOfOrderCorrected) && !(message.packetsRecvOutOfOrderCorrected && $util.isInteger(message.packetsRecvOutOfOrderCorrected.low) && $util.isInteger(message.packetsRecvOutOfOrderCorrected.high)))
                    return "packetsRecvOutOfOrderCorrected: integer|Long expected";
            if (message.packetsRecvDuplicate != null && message.hasOwnProperty("packetsRecvDuplicate"))
                if (!$util.isInteger(message.packetsRecvDuplicate) && !(message.packetsRecvDuplicate && $util.isInteger(message.packetsRecvDuplicate.low) && $util.isInteger(message.packetsRecvDuplicate.high)))
                    return "packetsRecvDuplicate: integer|Long expected";
            if (message.packetsRecvLurch != null && message.hasOwnProperty("packetsRecvLurch"))
                if (!$util.isInteger(message.packetsRecvLurch) && !(message.packetsRecvLurch && $util.isInteger(message.packetsRecvLurch.low) && $util.isInteger(message.packetsRecvLurch.high)))
                    return "packetsRecvLurch: integer|Long expected";
            if (message.multipathPacketsRecvSequenced != null && message.hasOwnProperty("multipathPacketsRecvSequenced")) {
                if (!Array.isArray(message.multipathPacketsRecvSequenced))
                    return "multipathPacketsRecvSequenced: array expected";
                for (var i = 0; i < message.multipathPacketsRecvSequenced.length; ++i)
                    if (!$util.isInteger(message.multipathPacketsRecvSequenced[i]) && !(message.multipathPacketsRecvSequenced[i] && $util.isInteger(message.multipathPacketsRecvSequenced[i].low) && $util.isInteger(message.multipathPacketsRecvSequenced[i].high)))
                        return "multipathPacketsRecvSequenced: integer|Long[] expected";
            }
            if (message.multipathPacketsRecvLater != null && message.hasOwnProperty("multipathPacketsRecvLater")) {
                if (!Array.isArray(message.multipathPacketsRecvLater))
                    return "multipathPacketsRecvLater: array expected";
                for (var i = 0; i < message.multipathPacketsRecvLater.length; ++i)
                    if (!$util.isInteger(message.multipathPacketsRecvLater[i]) && !(message.multipathPacketsRecvLater[i] && $util.isInteger(message.multipathPacketsRecvLater[i].low) && $util.isInteger(message.multipathPacketsRecvLater[i].high)))
                        return "multipathPacketsRecvLater: integer|Long[] expected";
            }
            if (message.multipathSendEnabled != null && message.hasOwnProperty("multipathSendEnabled"))
                if (!$util.isInteger(message.multipathSendEnabled))
                    return "multipathSendEnabled: integer expected";
            if (message.qualityHistogram_100 != null && message.hasOwnProperty("qualityHistogram_100"))
                if (!$util.isInteger(message.qualityHistogram_100))
                    return "qualityHistogram_100: integer expected";
            if (message.qualityHistogram_99 != null && message.hasOwnProperty("qualityHistogram_99"))
                if (!$util.isInteger(message.qualityHistogram_99))
                    return "qualityHistogram_99: integer expected";
            if (message.qualityHistogram_97 != null && message.hasOwnProperty("qualityHistogram_97"))
                if (!$util.isInteger(message.qualityHistogram_97))
                    return "qualityHistogram_97: integer expected";
            if (message.qualityHistogram_95 != null && message.hasOwnProperty("qualityHistogram_95"))
                if (!$util.isInteger(message.qualityHistogram_95))
                    return "qualityHistogram_95: integer expected";
            if (message.qualityHistogram_90 != null && message.hasOwnProperty("qualityHistogram_90"))
                if (!$util.isInteger(message.qualityHistogram_90))
                    return "qualityHistogram_90: integer expected";
            if (message.qualityHistogram_75 != null && message.hasOwnProperty("qualityHistogram_75"))
                if (!$util.isInteger(message.qualityHistogram_75))
                    return "qualityHistogram_75: integer expected";
            if (message.qualityHistogram_50 != null && message.hasOwnProperty("qualityHistogram_50"))
                if (!$util.isInteger(message.qualityHistogram_50))
                    return "qualityHistogram_50: integer expected";
            if (message.qualityHistogram_1 != null && message.hasOwnProperty("qualityHistogram_1"))
                if (!$util.isInteger(message.qualityHistogram_1))
                    return "qualityHistogram_1: integer expected";
            if (message.qualityHistogramDead != null && message.hasOwnProperty("qualityHistogramDead"))
                if (!$util.isInteger(message.qualityHistogramDead))
                    return "qualityHistogramDead: integer expected";
            if (message.qualityNtile_2nd != null && message.hasOwnProperty("qualityNtile_2nd"))
                if (!$util.isInteger(message.qualityNtile_2nd))
                    return "qualityNtile_2nd: integer expected";
            if (message.qualityNtile_5th != null && message.hasOwnProperty("qualityNtile_5th"))
                if (!$util.isInteger(message.qualityNtile_5th))
                    return "qualityNtile_5th: integer expected";
            if (message.qualityNtile_25th != null && message.hasOwnProperty("qualityNtile_25th"))
                if (!$util.isInteger(message.qualityNtile_25th))
                    return "qualityNtile_25th: integer expected";
            if (message.qualityNtile_50th != null && message.hasOwnProperty("qualityNtile_50th"))
                if (!$util.isInteger(message.qualityNtile_50th))
                    return "qualityNtile_50th: integer expected";
            if (message.pingHistogram_25 != null && message.hasOwnProperty("pingHistogram_25"))
                if (!$util.isInteger(message.pingHistogram_25))
                    return "pingHistogram_25: integer expected";
            if (message.pingHistogram_50 != null && message.hasOwnProperty("pingHistogram_50"))
                if (!$util.isInteger(message.pingHistogram_50))
                    return "pingHistogram_50: integer expected";
            if (message.pingHistogram_75 != null && message.hasOwnProperty("pingHistogram_75"))
                if (!$util.isInteger(message.pingHistogram_75))
                    return "pingHistogram_75: integer expected";
            if (message.pingHistogram_100 != null && message.hasOwnProperty("pingHistogram_100"))
                if (!$util.isInteger(message.pingHistogram_100))
                    return "pingHistogram_100: integer expected";
            if (message.pingHistogram_125 != null && message.hasOwnProperty("pingHistogram_125"))
                if (!$util.isInteger(message.pingHistogram_125))
                    return "pingHistogram_125: integer expected";
            if (message.pingHistogram_150 != null && message.hasOwnProperty("pingHistogram_150"))
                if (!$util.isInteger(message.pingHistogram_150))
                    return "pingHistogram_150: integer expected";
            if (message.pingHistogram_200 != null && message.hasOwnProperty("pingHistogram_200"))
                if (!$util.isInteger(message.pingHistogram_200))
                    return "pingHistogram_200: integer expected";
            if (message.pingHistogram_300 != null && message.hasOwnProperty("pingHistogram_300"))
                if (!$util.isInteger(message.pingHistogram_300))
                    return "pingHistogram_300: integer expected";
            if (message.pingHistogramMax != null && message.hasOwnProperty("pingHistogramMax"))
                if (!$util.isInteger(message.pingHistogramMax))
                    return "pingHistogramMax: integer expected";
            if (message.pingNtile_5th != null && message.hasOwnProperty("pingNtile_5th"))
                if (!$util.isInteger(message.pingNtile_5th))
                    return "pingNtile_5th: integer expected";
            if (message.pingNtile_50th != null && message.hasOwnProperty("pingNtile_50th"))
                if (!$util.isInteger(message.pingNtile_50th))
                    return "pingNtile_50th: integer expected";
            if (message.pingNtile_75th != null && message.hasOwnProperty("pingNtile_75th"))
                if (!$util.isInteger(message.pingNtile_75th))
                    return "pingNtile_75th: integer expected";
            if (message.pingNtile_95th != null && message.hasOwnProperty("pingNtile_95th"))
                if (!$util.isInteger(message.pingNtile_95th))
                    return "pingNtile_95th: integer expected";
            if (message.pingNtile_98th != null && message.hasOwnProperty("pingNtile_98th"))
                if (!$util.isInteger(message.pingNtile_98th))
                    return "pingNtile_98th: integer expected";
            if (message.jitterHistogramNegligible != null && message.hasOwnProperty("jitterHistogramNegligible"))
                if (!$util.isInteger(message.jitterHistogramNegligible))
                    return "jitterHistogramNegligible: integer expected";
            if (message.jitterHistogram_1 != null && message.hasOwnProperty("jitterHistogram_1"))
                if (!$util.isInteger(message.jitterHistogram_1))
                    return "jitterHistogram_1: integer expected";
            if (message.jitterHistogram_2 != null && message.hasOwnProperty("jitterHistogram_2"))
                if (!$util.isInteger(message.jitterHistogram_2))
                    return "jitterHistogram_2: integer expected";
            if (message.jitterHistogram_5 != null && message.hasOwnProperty("jitterHistogram_5"))
                if (!$util.isInteger(message.jitterHistogram_5))
                    return "jitterHistogram_5: integer expected";
            if (message.jitterHistogram_10 != null && message.hasOwnProperty("jitterHistogram_10"))
                if (!$util.isInteger(message.jitterHistogram_10))
                    return "jitterHistogram_10: integer expected";
            if (message.jitterHistogram_20 != null && message.hasOwnProperty("jitterHistogram_20"))
                if (!$util.isInteger(message.jitterHistogram_20))
                    return "jitterHistogram_20: integer expected";
            if (message.txspeedMax != null && message.hasOwnProperty("txspeedMax"))
                if (!$util.isInteger(message.txspeedMax))
                    return "txspeedMax: integer expected";
            if (message.txspeedHistogram_16 != null && message.hasOwnProperty("txspeedHistogram_16"))
                if (!$util.isInteger(message.txspeedHistogram_16))
                    return "txspeedHistogram_16: integer expected";
            if (message.txspeedHistogram_32 != null && message.hasOwnProperty("txspeedHistogram_32"))
                if (!$util.isInteger(message.txspeedHistogram_32))
                    return "txspeedHistogram_32: integer expected";
            if (message.txspeedHistogram_64 != null && message.hasOwnProperty("txspeedHistogram_64"))
                if (!$util.isInteger(message.txspeedHistogram_64))
                    return "txspeedHistogram_64: integer expected";
            if (message.txspeedHistogram_128 != null && message.hasOwnProperty("txspeedHistogram_128"))
                if (!$util.isInteger(message.txspeedHistogram_128))
                    return "txspeedHistogram_128: integer expected";
            if (message.txspeedHistogram_256 != null && message.hasOwnProperty("txspeedHistogram_256"))
                if (!$util.isInteger(message.txspeedHistogram_256))
                    return "txspeedHistogram_256: integer expected";
            if (message.txspeedHistogram_512 != null && message.hasOwnProperty("txspeedHistogram_512"))
                if (!$util.isInteger(message.txspeedHistogram_512))
                    return "txspeedHistogram_512: integer expected";
            if (message.txspeedHistogram_1024 != null && message.hasOwnProperty("txspeedHistogram_1024"))
                if (!$util.isInteger(message.txspeedHistogram_1024))
                    return "txspeedHistogram_1024: integer expected";
            if (message.txspeedHistogramMax != null && message.hasOwnProperty("txspeedHistogramMax"))
                if (!$util.isInteger(message.txspeedHistogramMax))
                    return "txspeedHistogramMax: integer expected";
            if (message.txspeedNtile_5th != null && message.hasOwnProperty("txspeedNtile_5th"))
                if (!$util.isInteger(message.txspeedNtile_5th))
                    return "txspeedNtile_5th: integer expected";
            if (message.txspeedNtile_50th != null && message.hasOwnProperty("txspeedNtile_50th"))
                if (!$util.isInteger(message.txspeedNtile_50th))
                    return "txspeedNtile_50th: integer expected";
            if (message.txspeedNtile_75th != null && message.hasOwnProperty("txspeedNtile_75th"))
                if (!$util.isInteger(message.txspeedNtile_75th))
                    return "txspeedNtile_75th: integer expected";
            if (message.txspeedNtile_95th != null && message.hasOwnProperty("txspeedNtile_95th"))
                if (!$util.isInteger(message.txspeedNtile_95th))
                    return "txspeedNtile_95th: integer expected";
            if (message.txspeedNtile_98th != null && message.hasOwnProperty("txspeedNtile_98th"))
                if (!$util.isInteger(message.txspeedNtile_98th))
                    return "txspeedNtile_98th: integer expected";
            if (message.rxspeedMax != null && message.hasOwnProperty("rxspeedMax"))
                if (!$util.isInteger(message.rxspeedMax))
                    return "rxspeedMax: integer expected";
            if (message.rxspeedHistogram_16 != null && message.hasOwnProperty("rxspeedHistogram_16"))
                if (!$util.isInteger(message.rxspeedHistogram_16))
                    return "rxspeedHistogram_16: integer expected";
            if (message.rxspeedHistogram_32 != null && message.hasOwnProperty("rxspeedHistogram_32"))
                if (!$util.isInteger(message.rxspeedHistogram_32))
                    return "rxspeedHistogram_32: integer expected";
            if (message.rxspeedHistogram_64 != null && message.hasOwnProperty("rxspeedHistogram_64"))
                if (!$util.isInteger(message.rxspeedHistogram_64))
                    return "rxspeedHistogram_64: integer expected";
            if (message.rxspeedHistogram_128 != null && message.hasOwnProperty("rxspeedHistogram_128"))
                if (!$util.isInteger(message.rxspeedHistogram_128))
                    return "rxspeedHistogram_128: integer expected";
            if (message.rxspeedHistogram_256 != null && message.hasOwnProperty("rxspeedHistogram_256"))
                if (!$util.isInteger(message.rxspeedHistogram_256))
                    return "rxspeedHistogram_256: integer expected";
            if (message.rxspeedHistogram_512 != null && message.hasOwnProperty("rxspeedHistogram_512"))
                if (!$util.isInteger(message.rxspeedHistogram_512))
                    return "rxspeedHistogram_512: integer expected";
            if (message.rxspeedHistogram_1024 != null && message.hasOwnProperty("rxspeedHistogram_1024"))
                if (!$util.isInteger(message.rxspeedHistogram_1024))
                    return "rxspeedHistogram_1024: integer expected";
            if (message.rxspeedHistogramMax != null && message.hasOwnProperty("rxspeedHistogramMax"))
                if (!$util.isInteger(message.rxspeedHistogramMax))
                    return "rxspeedHistogramMax: integer expected";
            if (message.rxspeedNtile_5th != null && message.hasOwnProperty("rxspeedNtile_5th"))
                if (!$util.isInteger(message.rxspeedNtile_5th))
                    return "rxspeedNtile_5th: integer expected";
            if (message.rxspeedNtile_50th != null && message.hasOwnProperty("rxspeedNtile_50th"))
                if (!$util.isInteger(message.rxspeedNtile_50th))
                    return "rxspeedNtile_50th: integer expected";
            if (message.rxspeedNtile_75th != null && message.hasOwnProperty("rxspeedNtile_75th"))
                if (!$util.isInteger(message.rxspeedNtile_75th))
                    return "rxspeedNtile_75th: integer expected";
            if (message.rxspeedNtile_95th != null && message.hasOwnProperty("rxspeedNtile_95th"))
                if (!$util.isInteger(message.rxspeedNtile_95th))
                    return "rxspeedNtile_95th: integer expected";
            if (message.rxspeedNtile_98th != null && message.hasOwnProperty("rxspeedNtile_98th"))
                if (!$util.isInteger(message.rxspeedNtile_98th))
                    return "rxspeedNtile_98th: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramLinkLifetimeStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         */
        CMsgSteamDatagramLinkLifetimeStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramLinkLifetimeStats)
                return object;
            var message = new $root.CMsgSteamDatagramLinkLifetimeStats();
            if (object.connectedSeconds != null)
                message.connectedSeconds = object.connectedSeconds >>> 0;
            if (object.packetsSent != null)
                if ($util.Long)
                    (message.packetsSent = $util.Long.fromValue(object.packetsSent)).unsigned = true;
                else if (typeof object.packetsSent === "string")
                    message.packetsSent = parseInt(object.packetsSent, 10);
                else if (typeof object.packetsSent === "number")
                    message.packetsSent = object.packetsSent;
                else if (typeof object.packetsSent === "object")
                    message.packetsSent = new $util.LongBits(object.packetsSent.low >>> 0, object.packetsSent.high >>> 0).toNumber(true);
            if (object.kbSent != null)
                if ($util.Long)
                    (message.kbSent = $util.Long.fromValue(object.kbSent)).unsigned = true;
                else if (typeof object.kbSent === "string")
                    message.kbSent = parseInt(object.kbSent, 10);
                else if (typeof object.kbSent === "number")
                    message.kbSent = object.kbSent;
                else if (typeof object.kbSent === "object")
                    message.kbSent = new $util.LongBits(object.kbSent.low >>> 0, object.kbSent.high >>> 0).toNumber(true);
            if (object.packetsRecv != null)
                if ($util.Long)
                    (message.packetsRecv = $util.Long.fromValue(object.packetsRecv)).unsigned = true;
                else if (typeof object.packetsRecv === "string")
                    message.packetsRecv = parseInt(object.packetsRecv, 10);
                else if (typeof object.packetsRecv === "number")
                    message.packetsRecv = object.packetsRecv;
                else if (typeof object.packetsRecv === "object")
                    message.packetsRecv = new $util.LongBits(object.packetsRecv.low >>> 0, object.packetsRecv.high >>> 0).toNumber(true);
            if (object.kbRecv != null)
                if ($util.Long)
                    (message.kbRecv = $util.Long.fromValue(object.kbRecv)).unsigned = true;
                else if (typeof object.kbRecv === "string")
                    message.kbRecv = parseInt(object.kbRecv, 10);
                else if (typeof object.kbRecv === "number")
                    message.kbRecv = object.kbRecv;
                else if (typeof object.kbRecv === "object")
                    message.kbRecv = new $util.LongBits(object.kbRecv.low >>> 0, object.kbRecv.high >>> 0).toNumber(true);
            if (object.packetsRecvSequenced != null)
                if ($util.Long)
                    (message.packetsRecvSequenced = $util.Long.fromValue(object.packetsRecvSequenced)).unsigned = true;
                else if (typeof object.packetsRecvSequenced === "string")
                    message.packetsRecvSequenced = parseInt(object.packetsRecvSequenced, 10);
                else if (typeof object.packetsRecvSequenced === "number")
                    message.packetsRecvSequenced = object.packetsRecvSequenced;
                else if (typeof object.packetsRecvSequenced === "object")
                    message.packetsRecvSequenced = new $util.LongBits(object.packetsRecvSequenced.low >>> 0, object.packetsRecvSequenced.high >>> 0).toNumber(true);
            if (object.packetsRecvDropped != null)
                if ($util.Long)
                    (message.packetsRecvDropped = $util.Long.fromValue(object.packetsRecvDropped)).unsigned = true;
                else if (typeof object.packetsRecvDropped === "string")
                    message.packetsRecvDropped = parseInt(object.packetsRecvDropped, 10);
                else if (typeof object.packetsRecvDropped === "number")
                    message.packetsRecvDropped = object.packetsRecvDropped;
                else if (typeof object.packetsRecvDropped === "object")
                    message.packetsRecvDropped = new $util.LongBits(object.packetsRecvDropped.low >>> 0, object.packetsRecvDropped.high >>> 0).toNumber(true);
            if (object.packetsRecvOutOfOrder != null)
                if ($util.Long)
                    (message.packetsRecvOutOfOrder = $util.Long.fromValue(object.packetsRecvOutOfOrder)).unsigned = true;
                else if (typeof object.packetsRecvOutOfOrder === "string")
                    message.packetsRecvOutOfOrder = parseInt(object.packetsRecvOutOfOrder, 10);
                else if (typeof object.packetsRecvOutOfOrder === "number")
                    message.packetsRecvOutOfOrder = object.packetsRecvOutOfOrder;
                else if (typeof object.packetsRecvOutOfOrder === "object")
                    message.packetsRecvOutOfOrder = new $util.LongBits(object.packetsRecvOutOfOrder.low >>> 0, object.packetsRecvOutOfOrder.high >>> 0).toNumber(true);
            if (object.packetsRecvOutOfOrderCorrected != null)
                if ($util.Long)
                    (message.packetsRecvOutOfOrderCorrected = $util.Long.fromValue(object.packetsRecvOutOfOrderCorrected)).unsigned = true;
                else if (typeof object.packetsRecvOutOfOrderCorrected === "string")
                    message.packetsRecvOutOfOrderCorrected = parseInt(object.packetsRecvOutOfOrderCorrected, 10);
                else if (typeof object.packetsRecvOutOfOrderCorrected === "number")
                    message.packetsRecvOutOfOrderCorrected = object.packetsRecvOutOfOrderCorrected;
                else if (typeof object.packetsRecvOutOfOrderCorrected === "object")
                    message.packetsRecvOutOfOrderCorrected = new $util.LongBits(object.packetsRecvOutOfOrderCorrected.low >>> 0, object.packetsRecvOutOfOrderCorrected.high >>> 0).toNumber(true);
            if (object.packetsRecvDuplicate != null)
                if ($util.Long)
                    (message.packetsRecvDuplicate = $util.Long.fromValue(object.packetsRecvDuplicate)).unsigned = true;
                else if (typeof object.packetsRecvDuplicate === "string")
                    message.packetsRecvDuplicate = parseInt(object.packetsRecvDuplicate, 10);
                else if (typeof object.packetsRecvDuplicate === "number")
                    message.packetsRecvDuplicate = object.packetsRecvDuplicate;
                else if (typeof object.packetsRecvDuplicate === "object")
                    message.packetsRecvDuplicate = new $util.LongBits(object.packetsRecvDuplicate.low >>> 0, object.packetsRecvDuplicate.high >>> 0).toNumber(true);
            if (object.packetsRecvLurch != null)
                if ($util.Long)
                    (message.packetsRecvLurch = $util.Long.fromValue(object.packetsRecvLurch)).unsigned = true;
                else if (typeof object.packetsRecvLurch === "string")
                    message.packetsRecvLurch = parseInt(object.packetsRecvLurch, 10);
                else if (typeof object.packetsRecvLurch === "number")
                    message.packetsRecvLurch = object.packetsRecvLurch;
                else if (typeof object.packetsRecvLurch === "object")
                    message.packetsRecvLurch = new $util.LongBits(object.packetsRecvLurch.low >>> 0, object.packetsRecvLurch.high >>> 0).toNumber(true);
            if (object.multipathPacketsRecvSequenced) {
                if (!Array.isArray(object.multipathPacketsRecvSequenced))
                    throw TypeError(".CMsgSteamDatagramLinkLifetimeStats.multipathPacketsRecvSequenced: array expected");
                message.multipathPacketsRecvSequenced = [];
                for (var i = 0; i < object.multipathPacketsRecvSequenced.length; ++i)
                    if ($util.Long)
                        (message.multipathPacketsRecvSequenced[i] = $util.Long.fromValue(object.multipathPacketsRecvSequenced[i])).unsigned = true;
                    else if (typeof object.multipathPacketsRecvSequenced[i] === "string")
                        message.multipathPacketsRecvSequenced[i] = parseInt(object.multipathPacketsRecvSequenced[i], 10);
                    else if (typeof object.multipathPacketsRecvSequenced[i] === "number")
                        message.multipathPacketsRecvSequenced[i] = object.multipathPacketsRecvSequenced[i];
                    else if (typeof object.multipathPacketsRecvSequenced[i] === "object")
                        message.multipathPacketsRecvSequenced[i] = new $util.LongBits(object.multipathPacketsRecvSequenced[i].low >>> 0, object.multipathPacketsRecvSequenced[i].high >>> 0).toNumber(true);
            }
            if (object.multipathPacketsRecvLater) {
                if (!Array.isArray(object.multipathPacketsRecvLater))
                    throw TypeError(".CMsgSteamDatagramLinkLifetimeStats.multipathPacketsRecvLater: array expected");
                message.multipathPacketsRecvLater = [];
                for (var i = 0; i < object.multipathPacketsRecvLater.length; ++i)
                    if ($util.Long)
                        (message.multipathPacketsRecvLater[i] = $util.Long.fromValue(object.multipathPacketsRecvLater[i])).unsigned = true;
                    else if (typeof object.multipathPacketsRecvLater[i] === "string")
                        message.multipathPacketsRecvLater[i] = parseInt(object.multipathPacketsRecvLater[i], 10);
                    else if (typeof object.multipathPacketsRecvLater[i] === "number")
                        message.multipathPacketsRecvLater[i] = object.multipathPacketsRecvLater[i];
                    else if (typeof object.multipathPacketsRecvLater[i] === "object")
                        message.multipathPacketsRecvLater[i] = new $util.LongBits(object.multipathPacketsRecvLater[i].low >>> 0, object.multipathPacketsRecvLater[i].high >>> 0).toNumber(true);
            }
            if (object.multipathSendEnabled != null)
                message.multipathSendEnabled = object.multipathSendEnabled >>> 0;
            if (object.qualityHistogram_100 != null)
                message.qualityHistogram_100 = object.qualityHistogram_100 >>> 0;
            if (object.qualityHistogram_99 != null)
                message.qualityHistogram_99 = object.qualityHistogram_99 >>> 0;
            if (object.qualityHistogram_97 != null)
                message.qualityHistogram_97 = object.qualityHistogram_97 >>> 0;
            if (object.qualityHistogram_95 != null)
                message.qualityHistogram_95 = object.qualityHistogram_95 >>> 0;
            if (object.qualityHistogram_90 != null)
                message.qualityHistogram_90 = object.qualityHistogram_90 >>> 0;
            if (object.qualityHistogram_75 != null)
                message.qualityHistogram_75 = object.qualityHistogram_75 >>> 0;
            if (object.qualityHistogram_50 != null)
                message.qualityHistogram_50 = object.qualityHistogram_50 >>> 0;
            if (object.qualityHistogram_1 != null)
                message.qualityHistogram_1 = object.qualityHistogram_1 >>> 0;
            if (object.qualityHistogramDead != null)
                message.qualityHistogramDead = object.qualityHistogramDead >>> 0;
            if (object.qualityNtile_2nd != null)
                message.qualityNtile_2nd = object.qualityNtile_2nd >>> 0;
            if (object.qualityNtile_5th != null)
                message.qualityNtile_5th = object.qualityNtile_5th >>> 0;
            if (object.qualityNtile_25th != null)
                message.qualityNtile_25th = object.qualityNtile_25th >>> 0;
            if (object.qualityNtile_50th != null)
                message.qualityNtile_50th = object.qualityNtile_50th >>> 0;
            if (object.pingHistogram_25 != null)
                message.pingHistogram_25 = object.pingHistogram_25 >>> 0;
            if (object.pingHistogram_50 != null)
                message.pingHistogram_50 = object.pingHistogram_50 >>> 0;
            if (object.pingHistogram_75 != null)
                message.pingHistogram_75 = object.pingHistogram_75 >>> 0;
            if (object.pingHistogram_100 != null)
                message.pingHistogram_100 = object.pingHistogram_100 >>> 0;
            if (object.pingHistogram_125 != null)
                message.pingHistogram_125 = object.pingHistogram_125 >>> 0;
            if (object.pingHistogram_150 != null)
                message.pingHistogram_150 = object.pingHistogram_150 >>> 0;
            if (object.pingHistogram_200 != null)
                message.pingHistogram_200 = object.pingHistogram_200 >>> 0;
            if (object.pingHistogram_300 != null)
                message.pingHistogram_300 = object.pingHistogram_300 >>> 0;
            if (object.pingHistogramMax != null)
                message.pingHistogramMax = object.pingHistogramMax >>> 0;
            if (object.pingNtile_5th != null)
                message.pingNtile_5th = object.pingNtile_5th >>> 0;
            if (object.pingNtile_50th != null)
                message.pingNtile_50th = object.pingNtile_50th >>> 0;
            if (object.pingNtile_75th != null)
                message.pingNtile_75th = object.pingNtile_75th >>> 0;
            if (object.pingNtile_95th != null)
                message.pingNtile_95th = object.pingNtile_95th >>> 0;
            if (object.pingNtile_98th != null)
                message.pingNtile_98th = object.pingNtile_98th >>> 0;
            if (object.jitterHistogramNegligible != null)
                message.jitterHistogramNegligible = object.jitterHistogramNegligible >>> 0;
            if (object.jitterHistogram_1 != null)
                message.jitterHistogram_1 = object.jitterHistogram_1 >>> 0;
            if (object.jitterHistogram_2 != null)
                message.jitterHistogram_2 = object.jitterHistogram_2 >>> 0;
            if (object.jitterHistogram_5 != null)
                message.jitterHistogram_5 = object.jitterHistogram_5 >>> 0;
            if (object.jitterHistogram_10 != null)
                message.jitterHistogram_10 = object.jitterHistogram_10 >>> 0;
            if (object.jitterHistogram_20 != null)
                message.jitterHistogram_20 = object.jitterHistogram_20 >>> 0;
            if (object.txspeedMax != null)
                message.txspeedMax = object.txspeedMax >>> 0;
            if (object.txspeedHistogram_16 != null)
                message.txspeedHistogram_16 = object.txspeedHistogram_16 >>> 0;
            if (object.txspeedHistogram_32 != null)
                message.txspeedHistogram_32 = object.txspeedHistogram_32 >>> 0;
            if (object.txspeedHistogram_64 != null)
                message.txspeedHistogram_64 = object.txspeedHistogram_64 >>> 0;
            if (object.txspeedHistogram_128 != null)
                message.txspeedHistogram_128 = object.txspeedHistogram_128 >>> 0;
            if (object.txspeedHistogram_256 != null)
                message.txspeedHistogram_256 = object.txspeedHistogram_256 >>> 0;
            if (object.txspeedHistogram_512 != null)
                message.txspeedHistogram_512 = object.txspeedHistogram_512 >>> 0;
            if (object.txspeedHistogram_1024 != null)
                message.txspeedHistogram_1024 = object.txspeedHistogram_1024 >>> 0;
            if (object.txspeedHistogramMax != null)
                message.txspeedHistogramMax = object.txspeedHistogramMax >>> 0;
            if (object.txspeedNtile_5th != null)
                message.txspeedNtile_5th = object.txspeedNtile_5th >>> 0;
            if (object.txspeedNtile_50th != null)
                message.txspeedNtile_50th = object.txspeedNtile_50th >>> 0;
            if (object.txspeedNtile_75th != null)
                message.txspeedNtile_75th = object.txspeedNtile_75th >>> 0;
            if (object.txspeedNtile_95th != null)
                message.txspeedNtile_95th = object.txspeedNtile_95th >>> 0;
            if (object.txspeedNtile_98th != null)
                message.txspeedNtile_98th = object.txspeedNtile_98th >>> 0;
            if (object.rxspeedMax != null)
                message.rxspeedMax = object.rxspeedMax >>> 0;
            if (object.rxspeedHistogram_16 != null)
                message.rxspeedHistogram_16 = object.rxspeedHistogram_16 >>> 0;
            if (object.rxspeedHistogram_32 != null)
                message.rxspeedHistogram_32 = object.rxspeedHistogram_32 >>> 0;
            if (object.rxspeedHistogram_64 != null)
                message.rxspeedHistogram_64 = object.rxspeedHistogram_64 >>> 0;
            if (object.rxspeedHistogram_128 != null)
                message.rxspeedHistogram_128 = object.rxspeedHistogram_128 >>> 0;
            if (object.rxspeedHistogram_256 != null)
                message.rxspeedHistogram_256 = object.rxspeedHistogram_256 >>> 0;
            if (object.rxspeedHistogram_512 != null)
                message.rxspeedHistogram_512 = object.rxspeedHistogram_512 >>> 0;
            if (object.rxspeedHistogram_1024 != null)
                message.rxspeedHistogram_1024 = object.rxspeedHistogram_1024 >>> 0;
            if (object.rxspeedHistogramMax != null)
                message.rxspeedHistogramMax = object.rxspeedHistogramMax >>> 0;
            if (object.rxspeedNtile_5th != null)
                message.rxspeedNtile_5th = object.rxspeedNtile_5th >>> 0;
            if (object.rxspeedNtile_50th != null)
                message.rxspeedNtile_50th = object.rxspeedNtile_50th >>> 0;
            if (object.rxspeedNtile_75th != null)
                message.rxspeedNtile_75th = object.rxspeedNtile_75th >>> 0;
            if (object.rxspeedNtile_95th != null)
                message.rxspeedNtile_95th = object.rxspeedNtile_95th >>> 0;
            if (object.rxspeedNtile_98th != null)
                message.rxspeedNtile_98th = object.rxspeedNtile_98th >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramLinkLifetimeStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {CMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramLinkLifetimeStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.multipathPacketsRecvSequenced = [];
                object.multipathPacketsRecvLater = [];
            }
            if (options.defaults) {
                object.connectedSeconds = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsSent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsSent = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.kbSent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.kbSent = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsRecv = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsRecv = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.kbRecv = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.kbRecv = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsRecvSequenced = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsRecvSequenced = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsRecvDropped = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsRecvDropped = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsRecvOutOfOrder = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsRecvOutOfOrder = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsRecvDuplicate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsRecvDuplicate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsRecvLurch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsRecvLurch = options.longs === String ? "0" : 0;
                object.multipathSendEnabled = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packetsRecvOutOfOrderCorrected = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packetsRecvOutOfOrderCorrected = options.longs === String ? "0" : 0;
                object.qualityHistogram_100 = 0;
                object.qualityHistogram_99 = 0;
                object.qualityHistogram_97 = 0;
                object.qualityHistogram_95 = 0;
                object.qualityHistogram_90 = 0;
                object.qualityHistogram_75 = 0;
                object.qualityHistogram_50 = 0;
                object.qualityHistogram_1 = 0;
                object.qualityHistogramDead = 0;
                object.qualityNtile_2nd = 0;
                object.qualityNtile_5th = 0;
                object.qualityNtile_25th = 0;
                object.qualityNtile_50th = 0;
                object.pingHistogram_25 = 0;
                object.pingHistogram_50 = 0;
                object.pingHistogram_75 = 0;
                object.pingHistogram_100 = 0;
                object.pingHistogram_125 = 0;
                object.pingHistogram_150 = 0;
                object.pingHistogram_200 = 0;
                object.pingHistogram_300 = 0;
                object.pingHistogramMax = 0;
                object.pingNtile_5th = 0;
                object.pingNtile_50th = 0;
                object.pingNtile_75th = 0;
                object.pingNtile_95th = 0;
                object.pingNtile_98th = 0;
                object.jitterHistogramNegligible = 0;
                object.jitterHistogram_1 = 0;
                object.jitterHistogram_2 = 0;
                object.jitterHistogram_5 = 0;
                object.jitterHistogram_10 = 0;
                object.jitterHistogram_20 = 0;
                object.txspeedMax = 0;
                object.txspeedHistogram_16 = 0;
                object.txspeedHistogram_32 = 0;
                object.txspeedHistogram_64 = 0;
                object.txspeedHistogram_128 = 0;
                object.txspeedHistogram_256 = 0;
                object.txspeedHistogram_512 = 0;
                object.txspeedHistogram_1024 = 0;
                object.txspeedHistogramMax = 0;
                object.txspeedNtile_5th = 0;
                object.txspeedNtile_50th = 0;
                object.txspeedNtile_75th = 0;
                object.txspeedNtile_95th = 0;
                object.txspeedNtile_98th = 0;
                object.rxspeedMax = 0;
                object.rxspeedHistogram_16 = 0;
                object.rxspeedHistogram_32 = 0;
                object.rxspeedHistogram_64 = 0;
                object.rxspeedHistogram_128 = 0;
                object.rxspeedHistogram_256 = 0;
                object.rxspeedHistogram_512 = 0;
                object.rxspeedHistogram_1024 = 0;
                object.rxspeedHistogramMax = 0;
                object.rxspeedNtile_5th = 0;
                object.rxspeedNtile_50th = 0;
                object.rxspeedNtile_75th = 0;
                object.rxspeedNtile_95th = 0;
                object.rxspeedNtile_98th = 0;
            }
            if (message.connectedSeconds != null && message.hasOwnProperty("connectedSeconds"))
                object.connectedSeconds = message.connectedSeconds;
            if (message.packetsSent != null && message.hasOwnProperty("packetsSent"))
                if (typeof message.packetsSent === "number")
                    object.packetsSent = options.longs === String ? String(message.packetsSent) : message.packetsSent;
                else
                    object.packetsSent = options.longs === String ? $util.Long.prototype.toString.call(message.packetsSent) : options.longs === Number ? new $util.LongBits(message.packetsSent.low >>> 0, message.packetsSent.high >>> 0).toNumber(true) : message.packetsSent;
            if (message.kbSent != null && message.hasOwnProperty("kbSent"))
                if (typeof message.kbSent === "number")
                    object.kbSent = options.longs === String ? String(message.kbSent) : message.kbSent;
                else
                    object.kbSent = options.longs === String ? $util.Long.prototype.toString.call(message.kbSent) : options.longs === Number ? new $util.LongBits(message.kbSent.low >>> 0, message.kbSent.high >>> 0).toNumber(true) : message.kbSent;
            if (message.packetsRecv != null && message.hasOwnProperty("packetsRecv"))
                if (typeof message.packetsRecv === "number")
                    object.packetsRecv = options.longs === String ? String(message.packetsRecv) : message.packetsRecv;
                else
                    object.packetsRecv = options.longs === String ? $util.Long.prototype.toString.call(message.packetsRecv) : options.longs === Number ? new $util.LongBits(message.packetsRecv.low >>> 0, message.packetsRecv.high >>> 0).toNumber(true) : message.packetsRecv;
            if (message.kbRecv != null && message.hasOwnProperty("kbRecv"))
                if (typeof message.kbRecv === "number")
                    object.kbRecv = options.longs === String ? String(message.kbRecv) : message.kbRecv;
                else
                    object.kbRecv = options.longs === String ? $util.Long.prototype.toString.call(message.kbRecv) : options.longs === Number ? new $util.LongBits(message.kbRecv.low >>> 0, message.kbRecv.high >>> 0).toNumber(true) : message.kbRecv;
            if (message.packetsRecvSequenced != null && message.hasOwnProperty("packetsRecvSequenced"))
                if (typeof message.packetsRecvSequenced === "number")
                    object.packetsRecvSequenced = options.longs === String ? String(message.packetsRecvSequenced) : message.packetsRecvSequenced;
                else
                    object.packetsRecvSequenced = options.longs === String ? $util.Long.prototype.toString.call(message.packetsRecvSequenced) : options.longs === Number ? new $util.LongBits(message.packetsRecvSequenced.low >>> 0, message.packetsRecvSequenced.high >>> 0).toNumber(true) : message.packetsRecvSequenced;
            if (message.packetsRecvDropped != null && message.hasOwnProperty("packetsRecvDropped"))
                if (typeof message.packetsRecvDropped === "number")
                    object.packetsRecvDropped = options.longs === String ? String(message.packetsRecvDropped) : message.packetsRecvDropped;
                else
                    object.packetsRecvDropped = options.longs === String ? $util.Long.prototype.toString.call(message.packetsRecvDropped) : options.longs === Number ? new $util.LongBits(message.packetsRecvDropped.low >>> 0, message.packetsRecvDropped.high >>> 0).toNumber(true) : message.packetsRecvDropped;
            if (message.packetsRecvOutOfOrder != null && message.hasOwnProperty("packetsRecvOutOfOrder"))
                if (typeof message.packetsRecvOutOfOrder === "number")
                    object.packetsRecvOutOfOrder = options.longs === String ? String(message.packetsRecvOutOfOrder) : message.packetsRecvOutOfOrder;
                else
                    object.packetsRecvOutOfOrder = options.longs === String ? $util.Long.prototype.toString.call(message.packetsRecvOutOfOrder) : options.longs === Number ? new $util.LongBits(message.packetsRecvOutOfOrder.low >>> 0, message.packetsRecvOutOfOrder.high >>> 0).toNumber(true) : message.packetsRecvOutOfOrder;
            if (message.packetsRecvDuplicate != null && message.hasOwnProperty("packetsRecvDuplicate"))
                if (typeof message.packetsRecvDuplicate === "number")
                    object.packetsRecvDuplicate = options.longs === String ? String(message.packetsRecvDuplicate) : message.packetsRecvDuplicate;
                else
                    object.packetsRecvDuplicate = options.longs === String ? $util.Long.prototype.toString.call(message.packetsRecvDuplicate) : options.longs === Number ? new $util.LongBits(message.packetsRecvDuplicate.low >>> 0, message.packetsRecvDuplicate.high >>> 0).toNumber(true) : message.packetsRecvDuplicate;
            if (message.packetsRecvLurch != null && message.hasOwnProperty("packetsRecvLurch"))
                if (typeof message.packetsRecvLurch === "number")
                    object.packetsRecvLurch = options.longs === String ? String(message.packetsRecvLurch) : message.packetsRecvLurch;
                else
                    object.packetsRecvLurch = options.longs === String ? $util.Long.prototype.toString.call(message.packetsRecvLurch) : options.longs === Number ? new $util.LongBits(message.packetsRecvLurch.low >>> 0, message.packetsRecvLurch.high >>> 0).toNumber(true) : message.packetsRecvLurch;
            if (message.multipathPacketsRecvSequenced && message.multipathPacketsRecvSequenced.length) {
                object.multipathPacketsRecvSequenced = [];
                for (var j = 0; j < message.multipathPacketsRecvSequenced.length; ++j)
                    if (typeof message.multipathPacketsRecvSequenced[j] === "number")
                        object.multipathPacketsRecvSequenced[j] = options.longs === String ? String(message.multipathPacketsRecvSequenced[j]) : message.multipathPacketsRecvSequenced[j];
                    else
                        object.multipathPacketsRecvSequenced[j] = options.longs === String ? $util.Long.prototype.toString.call(message.multipathPacketsRecvSequenced[j]) : options.longs === Number ? new $util.LongBits(message.multipathPacketsRecvSequenced[j].low >>> 0, message.multipathPacketsRecvSequenced[j].high >>> 0).toNumber(true) : message.multipathPacketsRecvSequenced[j];
            }
            if (message.multipathPacketsRecvLater && message.multipathPacketsRecvLater.length) {
                object.multipathPacketsRecvLater = [];
                for (var j = 0; j < message.multipathPacketsRecvLater.length; ++j)
                    if (typeof message.multipathPacketsRecvLater[j] === "number")
                        object.multipathPacketsRecvLater[j] = options.longs === String ? String(message.multipathPacketsRecvLater[j]) : message.multipathPacketsRecvLater[j];
                    else
                        object.multipathPacketsRecvLater[j] = options.longs === String ? $util.Long.prototype.toString.call(message.multipathPacketsRecvLater[j]) : options.longs === Number ? new $util.LongBits(message.multipathPacketsRecvLater[j].low >>> 0, message.multipathPacketsRecvLater[j].high >>> 0).toNumber(true) : message.multipathPacketsRecvLater[j];
            }
            if (message.multipathSendEnabled != null && message.hasOwnProperty("multipathSendEnabled"))
                object.multipathSendEnabled = message.multipathSendEnabled;
            if (message.packetsRecvOutOfOrderCorrected != null && message.hasOwnProperty("packetsRecvOutOfOrderCorrected"))
                if (typeof message.packetsRecvOutOfOrderCorrected === "number")
                    object.packetsRecvOutOfOrderCorrected = options.longs === String ? String(message.packetsRecvOutOfOrderCorrected) : message.packetsRecvOutOfOrderCorrected;
                else
                    object.packetsRecvOutOfOrderCorrected = options.longs === String ? $util.Long.prototype.toString.call(message.packetsRecvOutOfOrderCorrected) : options.longs === Number ? new $util.LongBits(message.packetsRecvOutOfOrderCorrected.low >>> 0, message.packetsRecvOutOfOrderCorrected.high >>> 0).toNumber(true) : message.packetsRecvOutOfOrderCorrected;
            if (message.qualityHistogram_100 != null && message.hasOwnProperty("qualityHistogram_100"))
                object.qualityHistogram_100 = message.qualityHistogram_100;
            if (message.qualityHistogram_99 != null && message.hasOwnProperty("qualityHistogram_99"))
                object.qualityHistogram_99 = message.qualityHistogram_99;
            if (message.qualityHistogram_97 != null && message.hasOwnProperty("qualityHistogram_97"))
                object.qualityHistogram_97 = message.qualityHistogram_97;
            if (message.qualityHistogram_95 != null && message.hasOwnProperty("qualityHistogram_95"))
                object.qualityHistogram_95 = message.qualityHistogram_95;
            if (message.qualityHistogram_90 != null && message.hasOwnProperty("qualityHistogram_90"))
                object.qualityHistogram_90 = message.qualityHistogram_90;
            if (message.qualityHistogram_75 != null && message.hasOwnProperty("qualityHistogram_75"))
                object.qualityHistogram_75 = message.qualityHistogram_75;
            if (message.qualityHistogram_50 != null && message.hasOwnProperty("qualityHistogram_50"))
                object.qualityHistogram_50 = message.qualityHistogram_50;
            if (message.qualityHistogram_1 != null && message.hasOwnProperty("qualityHistogram_1"))
                object.qualityHistogram_1 = message.qualityHistogram_1;
            if (message.qualityHistogramDead != null && message.hasOwnProperty("qualityHistogramDead"))
                object.qualityHistogramDead = message.qualityHistogramDead;
            if (message.qualityNtile_2nd != null && message.hasOwnProperty("qualityNtile_2nd"))
                object.qualityNtile_2nd = message.qualityNtile_2nd;
            if (message.qualityNtile_5th != null && message.hasOwnProperty("qualityNtile_5th"))
                object.qualityNtile_5th = message.qualityNtile_5th;
            if (message.qualityNtile_25th != null && message.hasOwnProperty("qualityNtile_25th"))
                object.qualityNtile_25th = message.qualityNtile_25th;
            if (message.qualityNtile_50th != null && message.hasOwnProperty("qualityNtile_50th"))
                object.qualityNtile_50th = message.qualityNtile_50th;
            if (message.pingHistogram_25 != null && message.hasOwnProperty("pingHistogram_25"))
                object.pingHistogram_25 = message.pingHistogram_25;
            if (message.pingHistogram_50 != null && message.hasOwnProperty("pingHistogram_50"))
                object.pingHistogram_50 = message.pingHistogram_50;
            if (message.pingHistogram_75 != null && message.hasOwnProperty("pingHistogram_75"))
                object.pingHistogram_75 = message.pingHistogram_75;
            if (message.pingHistogram_100 != null && message.hasOwnProperty("pingHistogram_100"))
                object.pingHistogram_100 = message.pingHistogram_100;
            if (message.pingHistogram_125 != null && message.hasOwnProperty("pingHistogram_125"))
                object.pingHistogram_125 = message.pingHistogram_125;
            if (message.pingHistogram_150 != null && message.hasOwnProperty("pingHistogram_150"))
                object.pingHistogram_150 = message.pingHistogram_150;
            if (message.pingHistogram_200 != null && message.hasOwnProperty("pingHistogram_200"))
                object.pingHistogram_200 = message.pingHistogram_200;
            if (message.pingHistogram_300 != null && message.hasOwnProperty("pingHistogram_300"))
                object.pingHistogram_300 = message.pingHistogram_300;
            if (message.pingHistogramMax != null && message.hasOwnProperty("pingHistogramMax"))
                object.pingHistogramMax = message.pingHistogramMax;
            if (message.pingNtile_5th != null && message.hasOwnProperty("pingNtile_5th"))
                object.pingNtile_5th = message.pingNtile_5th;
            if (message.pingNtile_50th != null && message.hasOwnProperty("pingNtile_50th"))
                object.pingNtile_50th = message.pingNtile_50th;
            if (message.pingNtile_75th != null && message.hasOwnProperty("pingNtile_75th"))
                object.pingNtile_75th = message.pingNtile_75th;
            if (message.pingNtile_95th != null && message.hasOwnProperty("pingNtile_95th"))
                object.pingNtile_95th = message.pingNtile_95th;
            if (message.pingNtile_98th != null && message.hasOwnProperty("pingNtile_98th"))
                object.pingNtile_98th = message.pingNtile_98th;
            if (message.jitterHistogramNegligible != null && message.hasOwnProperty("jitterHistogramNegligible"))
                object.jitterHistogramNegligible = message.jitterHistogramNegligible;
            if (message.jitterHistogram_1 != null && message.hasOwnProperty("jitterHistogram_1"))
                object.jitterHistogram_1 = message.jitterHistogram_1;
            if (message.jitterHistogram_2 != null && message.hasOwnProperty("jitterHistogram_2"))
                object.jitterHistogram_2 = message.jitterHistogram_2;
            if (message.jitterHistogram_5 != null && message.hasOwnProperty("jitterHistogram_5"))
                object.jitterHistogram_5 = message.jitterHistogram_5;
            if (message.jitterHistogram_10 != null && message.hasOwnProperty("jitterHistogram_10"))
                object.jitterHistogram_10 = message.jitterHistogram_10;
            if (message.jitterHistogram_20 != null && message.hasOwnProperty("jitterHistogram_20"))
                object.jitterHistogram_20 = message.jitterHistogram_20;
            if (message.txspeedMax != null && message.hasOwnProperty("txspeedMax"))
                object.txspeedMax = message.txspeedMax;
            if (message.txspeedHistogram_16 != null && message.hasOwnProperty("txspeedHistogram_16"))
                object.txspeedHistogram_16 = message.txspeedHistogram_16;
            if (message.txspeedHistogram_32 != null && message.hasOwnProperty("txspeedHistogram_32"))
                object.txspeedHistogram_32 = message.txspeedHistogram_32;
            if (message.txspeedHistogram_64 != null && message.hasOwnProperty("txspeedHistogram_64"))
                object.txspeedHistogram_64 = message.txspeedHistogram_64;
            if (message.txspeedHistogram_128 != null && message.hasOwnProperty("txspeedHistogram_128"))
                object.txspeedHistogram_128 = message.txspeedHistogram_128;
            if (message.txspeedHistogram_256 != null && message.hasOwnProperty("txspeedHistogram_256"))
                object.txspeedHistogram_256 = message.txspeedHistogram_256;
            if (message.txspeedHistogram_512 != null && message.hasOwnProperty("txspeedHistogram_512"))
                object.txspeedHistogram_512 = message.txspeedHistogram_512;
            if (message.txspeedHistogram_1024 != null && message.hasOwnProperty("txspeedHistogram_1024"))
                object.txspeedHistogram_1024 = message.txspeedHistogram_1024;
            if (message.txspeedHistogramMax != null && message.hasOwnProperty("txspeedHistogramMax"))
                object.txspeedHistogramMax = message.txspeedHistogramMax;
            if (message.txspeedNtile_5th != null && message.hasOwnProperty("txspeedNtile_5th"))
                object.txspeedNtile_5th = message.txspeedNtile_5th;
            if (message.txspeedNtile_50th != null && message.hasOwnProperty("txspeedNtile_50th"))
                object.txspeedNtile_50th = message.txspeedNtile_50th;
            if (message.txspeedNtile_75th != null && message.hasOwnProperty("txspeedNtile_75th"))
                object.txspeedNtile_75th = message.txspeedNtile_75th;
            if (message.txspeedNtile_95th != null && message.hasOwnProperty("txspeedNtile_95th"))
                object.txspeedNtile_95th = message.txspeedNtile_95th;
            if (message.txspeedNtile_98th != null && message.hasOwnProperty("txspeedNtile_98th"))
                object.txspeedNtile_98th = message.txspeedNtile_98th;
            if (message.rxspeedMax != null && message.hasOwnProperty("rxspeedMax"))
                object.rxspeedMax = message.rxspeedMax;
            if (message.rxspeedHistogram_16 != null && message.hasOwnProperty("rxspeedHistogram_16"))
                object.rxspeedHistogram_16 = message.rxspeedHistogram_16;
            if (message.rxspeedHistogram_32 != null && message.hasOwnProperty("rxspeedHistogram_32"))
                object.rxspeedHistogram_32 = message.rxspeedHistogram_32;
            if (message.rxspeedHistogram_64 != null && message.hasOwnProperty("rxspeedHistogram_64"))
                object.rxspeedHistogram_64 = message.rxspeedHistogram_64;
            if (message.rxspeedHistogram_128 != null && message.hasOwnProperty("rxspeedHistogram_128"))
                object.rxspeedHistogram_128 = message.rxspeedHistogram_128;
            if (message.rxspeedHistogram_256 != null && message.hasOwnProperty("rxspeedHistogram_256"))
                object.rxspeedHistogram_256 = message.rxspeedHistogram_256;
            if (message.rxspeedHistogram_512 != null && message.hasOwnProperty("rxspeedHistogram_512"))
                object.rxspeedHistogram_512 = message.rxspeedHistogram_512;
            if (message.rxspeedHistogram_1024 != null && message.hasOwnProperty("rxspeedHistogram_1024"))
                object.rxspeedHistogram_1024 = message.rxspeedHistogram_1024;
            if (message.rxspeedHistogramMax != null && message.hasOwnProperty("rxspeedHistogramMax"))
                object.rxspeedHistogramMax = message.rxspeedHistogramMax;
            if (message.rxspeedNtile_5th != null && message.hasOwnProperty("rxspeedNtile_5th"))
                object.rxspeedNtile_5th = message.rxspeedNtile_5th;
            if (message.rxspeedNtile_50th != null && message.hasOwnProperty("rxspeedNtile_50th"))
                object.rxspeedNtile_50th = message.rxspeedNtile_50th;
            if (message.rxspeedNtile_75th != null && message.hasOwnProperty("rxspeedNtile_75th"))
                object.rxspeedNtile_75th = message.rxspeedNtile_75th;
            if (message.rxspeedNtile_95th != null && message.hasOwnProperty("rxspeedNtile_95th"))
                object.rxspeedNtile_95th = message.rxspeedNtile_95th;
            if (message.rxspeedNtile_98th != null && message.hasOwnProperty("rxspeedNtile_98th"))
                object.rxspeedNtile_98th = message.rxspeedNtile_98th;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramLinkLifetimeStats to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramLinkLifetimeStats
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramLinkLifetimeStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramLinkLifetimeStats";
        };
    
        return CMsgSteamDatagramLinkLifetimeStats;
    })();
    
    $root.CMsgSteamDatagramConnectionQuality = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramConnectionQuality.
         * @exports ICMsgSteamDatagramConnectionQuality
         * @interface ICMsgSteamDatagramConnectionQuality
         * @property {ICMsgSteamDatagramLinkInstantaneousStats|null} [instantaneous] CMsgSteamDatagramConnectionQuality instantaneous
         * @property {ICMsgSteamDatagramLinkLifetimeStats|null} [lifetime] CMsgSteamDatagramConnectionQuality lifetime
         */
    
        /**
         * Constructs a new CMsgSteamDatagramConnectionQuality.
         * @exports CMsgSteamDatagramConnectionQuality
         * @classdesc Represents a CMsgSteamDatagramConnectionQuality.
         * @implements ICMsgSteamDatagramConnectionQuality
         * @constructor
         * @param {ICMsgSteamDatagramConnectionQuality=} [properties] Properties to set
         */
        function CMsgSteamDatagramConnectionQuality(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramConnectionQuality instantaneous.
         * @member {ICMsgSteamDatagramLinkInstantaneousStats|null|undefined} instantaneous
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         */
        CMsgSteamDatagramConnectionQuality.prototype.instantaneous = null;
    
        /**
         * CMsgSteamDatagramConnectionQuality lifetime.
         * @member {ICMsgSteamDatagramLinkLifetimeStats|null|undefined} lifetime
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         */
        CMsgSteamDatagramConnectionQuality.prototype.lifetime = null;
    
        /**
         * Creates a new CMsgSteamDatagramConnectionQuality instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality=} [properties] Properties to set
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality instance
         */
        CMsgSteamDatagramConnectionQuality.create = function create(properties) {
            return new CMsgSteamDatagramConnectionQuality(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionQuality message. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionQuality.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instantaneous != null && Object.hasOwnProperty.call(message, "instantaneous"))
                $root.CMsgSteamDatagramLinkInstantaneousStats.encode(message.instantaneous, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lifetime != null && Object.hasOwnProperty.call(message, "lifetime"))
                $root.CMsgSteamDatagramLinkLifetimeStats.encode(message.lifetime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionQuality message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionQuality.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionQuality.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramConnectionQuality();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.decode(reader, reader.uint32());
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
         * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionQuality.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramConnectionQuality message.
         * @function verify
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramConnectionQuality.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instantaneous != null && message.hasOwnProperty("instantaneous")) {
                var error = $root.CMsgSteamDatagramLinkInstantaneousStats.verify(message.instantaneous);
                if (error)
                    return "instantaneous." + error;
            }
            if (message.lifetime != null && message.hasOwnProperty("lifetime")) {
                var error = $root.CMsgSteamDatagramLinkLifetimeStats.verify(message.lifetime);
                if (error)
                    return "lifetime." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramConnectionQuality message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         */
        CMsgSteamDatagramConnectionQuality.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramConnectionQuality)
                return object;
            var message = new $root.CMsgSteamDatagramConnectionQuality();
            if (object.instantaneous != null) {
                if (typeof object.instantaneous !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionQuality.instantaneous: object expected");
                message.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.fromObject(object.instantaneous);
            }
            if (object.lifetime != null) {
                if (typeof object.lifetime !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionQuality.lifetime: object expected");
                message.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.fromObject(object.lifetime);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramConnectionQuality message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {CMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramConnectionQuality.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.instantaneous = null;
                object.lifetime = null;
            }
            if (message.instantaneous != null && message.hasOwnProperty("instantaneous"))
                object.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.toObject(message.instantaneous, options);
            if (message.lifetime != null && message.hasOwnProperty("lifetime"))
                object.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.toObject(message.lifetime, options);
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramConnectionQuality to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramConnectionQuality.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramConnectionQuality
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramConnectionQuality.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramConnectionQuality";
        };
    
        return CMsgSteamDatagramConnectionQuality;
    })();
    
    $root.CMsgICECandidate = (function() {
    
        /**
         * Properties of a CMsgICECandidate.
         * @exports ICMsgICECandidate
         * @interface ICMsgICECandidate
         * @property {string|null} [candidate] CMsgICECandidate candidate
         */
    
        /**
         * Constructs a new CMsgICECandidate.
         * @exports CMsgICECandidate
         * @classdesc Represents a CMsgICECandidate.
         * @implements ICMsgICECandidate
         * @constructor
         * @param {ICMsgICECandidate=} [properties] Properties to set
         */
        function CMsgICECandidate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgICECandidate candidate.
         * @member {string} candidate
         * @memberof CMsgICECandidate
         * @instance
         */
        CMsgICECandidate.prototype.candidate = "";
    
        /**
         * Creates a new CMsgICECandidate instance using the specified properties.
         * @function create
         * @memberof CMsgICECandidate
         * @static
         * @param {ICMsgICECandidate=} [properties] Properties to set
         * @returns {CMsgICECandidate} CMsgICECandidate instance
         */
        CMsgICECandidate.create = function create(properties) {
            return new CMsgICECandidate(properties);
        };
    
        /**
         * Encodes the specified CMsgICECandidate message. Does not implicitly {@link CMsgICECandidate.verify|verify} messages.
         * @function encode
         * @memberof CMsgICECandidate
         * @static
         * @param {ICMsgICECandidate} message CMsgICECandidate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgICECandidate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.candidate != null && Object.hasOwnProperty.call(message, "candidate"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.candidate);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgICECandidate message, length delimited. Does not implicitly {@link CMsgICECandidate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgICECandidate
         * @static
         * @param {ICMsgICECandidate} message CMsgICECandidate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgICECandidate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgICECandidate message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgICECandidate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgICECandidate} CMsgICECandidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgICECandidate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgICECandidate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        message.candidate = reader.string();
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
         * Decodes a CMsgICECandidate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgICECandidate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgICECandidate} CMsgICECandidate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgICECandidate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgICECandidate message.
         * @function verify
         * @memberof CMsgICECandidate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgICECandidate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.candidate != null && message.hasOwnProperty("candidate"))
                if (!$util.isString(message.candidate))
                    return "candidate: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgICECandidate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgICECandidate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgICECandidate} CMsgICECandidate
         */
        CMsgICECandidate.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgICECandidate)
                return object;
            var message = new $root.CMsgICECandidate();
            if (object.candidate != null)
                message.candidate = String(object.candidate);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgICECandidate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgICECandidate
         * @static
         * @param {CMsgICECandidate} message CMsgICECandidate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgICECandidate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.candidate = "";
            if (message.candidate != null && message.hasOwnProperty("candidate"))
                object.candidate = message.candidate;
            return object;
        };
    
        /**
         * Converts this CMsgICECandidate to JSON.
         * @function toJSON
         * @memberof CMsgICECandidate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgICECandidate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgICECandidate
         * @function getTypeUrl
         * @memberof CMsgICECandidate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgICECandidate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgICECandidate";
        };
    
        return CMsgICECandidate;
    })();
    
    $root.CMsgICERendezvous = (function() {
    
        /**
         * Properties of a CMsgICERendezvous.
         * @exports ICMsgICERendezvous
         * @interface ICMsgICERendezvous
         * @property {CMsgICERendezvous.IAuth|null} [auth] CMsgICERendezvous auth
         * @property {ICMsgICECandidate|null} [addCandidate] CMsgICERendezvous addCandidate
         */
    
        /**
         * Constructs a new CMsgICERendezvous.
         * @exports CMsgICERendezvous
         * @classdesc Represents a CMsgICERendezvous.
         * @implements ICMsgICERendezvous
         * @constructor
         * @param {ICMsgICERendezvous=} [properties] Properties to set
         */
        function CMsgICERendezvous(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgICERendezvous auth.
         * @member {CMsgICERendezvous.IAuth|null|undefined} auth
         * @memberof CMsgICERendezvous
         * @instance
         */
        CMsgICERendezvous.prototype.auth = null;
    
        /**
         * CMsgICERendezvous addCandidate.
         * @member {ICMsgICECandidate|null|undefined} addCandidate
         * @memberof CMsgICERendezvous
         * @instance
         */
        CMsgICERendezvous.prototype.addCandidate = null;
    
        /**
         * Creates a new CMsgICERendezvous instance using the specified properties.
         * @function create
         * @memberof CMsgICERendezvous
         * @static
         * @param {ICMsgICERendezvous=} [properties] Properties to set
         * @returns {CMsgICERendezvous} CMsgICERendezvous instance
         */
        CMsgICERendezvous.create = function create(properties) {
            return new CMsgICERendezvous(properties);
        };
    
        /**
         * Encodes the specified CMsgICERendezvous message. Does not implicitly {@link CMsgICERendezvous.verify|verify} messages.
         * @function encode
         * @memberof CMsgICERendezvous
         * @static
         * @param {ICMsgICERendezvous} message CMsgICERendezvous message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgICERendezvous.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addCandidate != null && Object.hasOwnProperty.call(message, "addCandidate"))
                $root.CMsgICECandidate.encode(message.addCandidate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.CMsgICERendezvous.Auth.encode(message.auth, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgICERendezvous message, length delimited. Does not implicitly {@link CMsgICERendezvous.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgICERendezvous
         * @static
         * @param {ICMsgICERendezvous} message CMsgICERendezvous message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgICERendezvous.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgICERendezvous message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgICERendezvous
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgICERendezvous} CMsgICERendezvous
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgICERendezvous.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgICERendezvous();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.auth = $root.CMsgICERendezvous.Auth.decode(reader, reader.uint32());
                        break;
                    }
                case 1: {
                        message.addCandidate = $root.CMsgICECandidate.decode(reader, reader.uint32());
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
         * Decodes a CMsgICERendezvous message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgICERendezvous
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgICERendezvous} CMsgICERendezvous
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgICERendezvous.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgICERendezvous message.
         * @function verify
         * @memberof CMsgICERendezvous
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgICERendezvous.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.CMsgICERendezvous.Auth.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            if (message.addCandidate != null && message.hasOwnProperty("addCandidate")) {
                var error = $root.CMsgICECandidate.verify(message.addCandidate);
                if (error)
                    return "addCandidate." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgICERendezvous message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgICERendezvous
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgICERendezvous} CMsgICERendezvous
         */
        CMsgICERendezvous.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgICERendezvous)
                return object;
            var message = new $root.CMsgICERendezvous();
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".CMsgICERendezvous.auth: object expected");
                message.auth = $root.CMsgICERendezvous.Auth.fromObject(object.auth);
            }
            if (object.addCandidate != null) {
                if (typeof object.addCandidate !== "object")
                    throw TypeError(".CMsgICERendezvous.addCandidate: object expected");
                message.addCandidate = $root.CMsgICECandidate.fromObject(object.addCandidate);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgICERendezvous message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgICERendezvous
         * @static
         * @param {CMsgICERendezvous} message CMsgICERendezvous
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgICERendezvous.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.addCandidate = null;
                object.auth = null;
            }
            if (message.addCandidate != null && message.hasOwnProperty("addCandidate"))
                object.addCandidate = $root.CMsgICECandidate.toObject(message.addCandidate, options);
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.CMsgICERendezvous.Auth.toObject(message.auth, options);
            return object;
        };
    
        /**
         * Converts this CMsgICERendezvous to JSON.
         * @function toJSON
         * @memberof CMsgICERendezvous
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgICERendezvous.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgICERendezvous
         * @function getTypeUrl
         * @memberof CMsgICERendezvous
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgICERendezvous.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgICERendezvous";
        };
    
        CMsgICERendezvous.Auth = (function() {
    
            /**
             * Properties of an Auth.
             * @memberof CMsgICERendezvous
             * @interface IAuth
             * @property {string|null} [pwdFrag] Auth pwdFrag
             */
    
            /**
             * Constructs a new Auth.
             * @memberof CMsgICERendezvous
             * @classdesc Represents an Auth.
             * @implements IAuth
             * @constructor
             * @param {CMsgICERendezvous.IAuth=} [properties] Properties to set
             */
            function Auth(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Auth pwdFrag.
             * @member {string} pwdFrag
             * @memberof CMsgICERendezvous.Auth
             * @instance
             */
            Auth.prototype.pwdFrag = "";
    
            /**
             * Creates a new Auth instance using the specified properties.
             * @function create
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {CMsgICERendezvous.IAuth=} [properties] Properties to set
             * @returns {CMsgICERendezvous.Auth} Auth instance
             */
            Auth.create = function create(properties) {
                return new Auth(properties);
            };
    
            /**
             * Encodes the specified Auth message. Does not implicitly {@link CMsgICERendezvous.Auth.verify|verify} messages.
             * @function encode
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {CMsgICERendezvous.IAuth} message Auth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Auth.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pwdFrag != null && Object.hasOwnProperty.call(message, "pwdFrag"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.pwdFrag);
                return writer;
            };
    
            /**
             * Encodes the specified Auth message, length delimited. Does not implicitly {@link CMsgICERendezvous.Auth.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {CMsgICERendezvous.IAuth} message Auth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Auth.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Auth message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgICERendezvous.Auth} Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Auth.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgICERendezvous.Auth();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.pwdFrag = reader.string();
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
             * Decodes an Auth message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgICERendezvous.Auth} Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Auth.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Auth message.
             * @function verify
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Auth.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pwdFrag != null && message.hasOwnProperty("pwdFrag"))
                    if (!$util.isString(message.pwdFrag))
                        return "pwdFrag: string expected";
                return null;
            };
    
            /**
             * Creates an Auth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgICERendezvous.Auth} Auth
             */
            Auth.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgICERendezvous.Auth)
                    return object;
                var message = new $root.CMsgICERendezvous.Auth();
                if (object.pwdFrag != null)
                    message.pwdFrag = String(object.pwdFrag);
                return message;
            };
    
            /**
             * Creates a plain object from an Auth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {CMsgICERendezvous.Auth} message Auth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Auth.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.pwdFrag = "";
                if (message.pwdFrag != null && message.hasOwnProperty("pwdFrag"))
                    object.pwdFrag = message.pwdFrag;
                return object;
            };
    
            /**
             * Converts this Auth to JSON.
             * @function toJSON
             * @memberof CMsgICERendezvous.Auth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Auth.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Auth
             * @function getTypeUrl
             * @memberof CMsgICERendezvous.Auth
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Auth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgICERendezvous.Auth";
            };
    
            return Auth;
        })();
    
        return CMsgICERendezvous;
    })();
    
    $root.CMsgSteamNetworkingP2PRendezvous = (function() {
    
        /**
         * Properties of a CMsgSteamNetworkingP2PRendezvous.
         * @exports ICMsgSteamNetworkingP2PRendezvous
         * @interface ICMsgSteamNetworkingP2PRendezvous
         * @property {string|null} [fromIdentity] CMsgSteamNetworkingP2PRendezvous fromIdentity
         * @property {number|null} [fromConnectionId] CMsgSteamNetworkingP2PRendezvous fromConnectionId
         * @property {string|null} [toIdentity] CMsgSteamNetworkingP2PRendezvous toIdentity
         * @property {number|null} [toConnectionId] CMsgSteamNetworkingP2PRendezvous toConnectionId
         * @property {Uint8Array|null} [sdrRoutes] CMsgSteamNetworkingP2PRendezvous sdrRoutes
         * @property {number|null} [ackPeerRoutesRevision] CMsgSteamNetworkingP2PRendezvous ackPeerRoutesRevision
         * @property {boolean|null} [iceEnabled] CMsgSteamNetworkingP2PRendezvous iceEnabled
         * @property {Uint8Array|null} [hostedServerTicket] CMsgSteamNetworkingP2PRendezvous hostedServerTicket
         * @property {CMsgSteamNetworkingP2PRendezvous.IConnectRequest|null} [connectRequest] CMsgSteamNetworkingP2PRendezvous connectRequest
         * @property {CMsgSteamNetworkingP2PRendezvous.IConnectOK|null} [connectOk] CMsgSteamNetworkingP2PRendezvous connectOk
         * @property {CMsgSteamNetworkingP2PRendezvous.IConnectionClosed|null} [connectionClosed] CMsgSteamNetworkingP2PRendezvous connectionClosed
         * @property {number|null} [ackReliableMsg] CMsgSteamNetworkingP2PRendezvous ackReliableMsg
         * @property {number|null} [firstReliableMsg] CMsgSteamNetworkingP2PRendezvous firstReliableMsg
         * @property {Array.<CMsgSteamNetworkingP2PRendezvous.IReliableMessage>|null} [reliableMessages] CMsgSteamNetworkingP2PRendezvous reliableMessages
         * @property {Array.<CMsgSteamNetworkingP2PRendezvous.IApplicationMessage>|null} [applicationMessages] CMsgSteamNetworkingP2PRendezvous applicationMessages
         */
    
        /**
         * Constructs a new CMsgSteamNetworkingP2PRendezvous.
         * @exports CMsgSteamNetworkingP2PRendezvous
         * @classdesc Represents a CMsgSteamNetworkingP2PRendezvous.
         * @implements ICMsgSteamNetworkingP2PRendezvous
         * @constructor
         * @param {ICMsgSteamNetworkingP2PRendezvous=} [properties] Properties to set
         */
        function CMsgSteamNetworkingP2PRendezvous(properties) {
            this.reliableMessages = [];
            this.applicationMessages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamNetworkingP2PRendezvous fromIdentity.
         * @member {string} fromIdentity
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.fromIdentity = "";
    
        /**
         * CMsgSteamNetworkingP2PRendezvous fromConnectionId.
         * @member {number} fromConnectionId
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.fromConnectionId = 0;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous toIdentity.
         * @member {string} toIdentity
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.toIdentity = "";
    
        /**
         * CMsgSteamNetworkingP2PRendezvous toConnectionId.
         * @member {number} toConnectionId
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.toConnectionId = 0;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous sdrRoutes.
         * @member {Uint8Array} sdrRoutes
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.sdrRoutes = $util.newBuffer([]);
    
        /**
         * CMsgSteamNetworkingP2PRendezvous ackPeerRoutesRevision.
         * @member {number} ackPeerRoutesRevision
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.ackPeerRoutesRevision = 0;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous iceEnabled.
         * @member {boolean} iceEnabled
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.iceEnabled = false;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous hostedServerTicket.
         * @member {Uint8Array} hostedServerTicket
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.hostedServerTicket = $util.newBuffer([]);
    
        /**
         * CMsgSteamNetworkingP2PRendezvous connectRequest.
         * @member {CMsgSteamNetworkingP2PRendezvous.IConnectRequest|null|undefined} connectRequest
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.connectRequest = null;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous connectOk.
         * @member {CMsgSteamNetworkingP2PRendezvous.IConnectOK|null|undefined} connectOk
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.connectOk = null;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous connectionClosed.
         * @member {CMsgSteamNetworkingP2PRendezvous.IConnectionClosed|null|undefined} connectionClosed
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.connectionClosed = null;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous ackReliableMsg.
         * @member {number} ackReliableMsg
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.ackReliableMsg = 0;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous firstReliableMsg.
         * @member {number} firstReliableMsg
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.firstReliableMsg = 0;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous reliableMessages.
         * @member {Array.<CMsgSteamNetworkingP2PRendezvous.IReliableMessage>} reliableMessages
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.reliableMessages = $util.emptyArray;
    
        /**
         * CMsgSteamNetworkingP2PRendezvous applicationMessages.
         * @member {Array.<CMsgSteamNetworkingP2PRendezvous.IApplicationMessage>} applicationMessages
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.applicationMessages = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamNetworkingP2PRendezvous instance using the specified properties.
         * @function create
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {ICMsgSteamNetworkingP2PRendezvous=} [properties] Properties to set
         * @returns {CMsgSteamNetworkingP2PRendezvous} CMsgSteamNetworkingP2PRendezvous instance
         */
        CMsgSteamNetworkingP2PRendezvous.create = function create(properties) {
            return new CMsgSteamNetworkingP2PRendezvous(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingP2PRendezvous message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {ICMsgSteamNetworkingP2PRendezvous} message CMsgSteamNetworkingP2PRendezvous message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingP2PRendezvous.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.toConnectionId != null && Object.hasOwnProperty.call(message, "toConnectionId"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.toConnectionId);
            if (message.sdrRoutes != null && Object.hasOwnProperty.call(message, "sdrRoutes"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.sdrRoutes);
            if (message.ackPeerRoutesRevision != null && Object.hasOwnProperty.call(message, "ackPeerRoutesRevision"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.ackPeerRoutesRevision);
            if (message.connectRequest != null && Object.hasOwnProperty.call(message, "connectRequest"))
                $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest.encode(message.connectRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.connectOk != null && Object.hasOwnProperty.call(message, "connectOk"))
                $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK.encode(message.connectOk, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.connectionClosed != null && Object.hasOwnProperty.call(message, "connectionClosed"))
                $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.encode(message.connectionClosed, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.iceEnabled != null && Object.hasOwnProperty.call(message, "iceEnabled"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.iceEnabled);
            if (message.fromIdentity != null && Object.hasOwnProperty.call(message, "fromIdentity"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.fromIdentity);
            if (message.fromConnectionId != null && Object.hasOwnProperty.call(message, "fromConnectionId"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.fromConnectionId);
            if (message.toIdentity != null && Object.hasOwnProperty.call(message, "toIdentity"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.toIdentity);
            if (message.ackReliableMsg != null && Object.hasOwnProperty.call(message, "ackReliableMsg"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.ackReliableMsg);
            if (message.firstReliableMsg != null && Object.hasOwnProperty.call(message, "firstReliableMsg"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.firstReliableMsg);
            if (message.reliableMessages != null && message.reliableMessages.length)
                for (var i = 0; i < message.reliableMessages.length; ++i)
                    $root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage.encode(message.reliableMessages[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.hostedServerTicket != null && Object.hasOwnProperty.call(message, "hostedServerTicket"))
                writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.hostedServerTicket);
            if (message.applicationMessages != null && message.applicationMessages.length)
                for (var i = 0; i < message.applicationMessages.length; ++i)
                    $root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.encode(message.applicationMessages[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingP2PRendezvous message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {ICMsgSteamNetworkingP2PRendezvous} message CMsgSteamNetworkingP2PRendezvous message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingP2PRendezvous.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamNetworkingP2PRendezvous message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamNetworkingP2PRendezvous} CMsgSteamNetworkingP2PRendezvous
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingP2PRendezvous.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingP2PRendezvous();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 8: {
                        message.fromIdentity = reader.string();
                        break;
                    }
                case 9: {
                        message.fromConnectionId = reader.fixed32();
                        break;
                    }
                case 10: {
                        message.toIdentity = reader.string();
                        break;
                    }
                case 1: {
                        message.toConnectionId = reader.fixed32();
                        break;
                    }
                case 2: {
                        message.sdrRoutes = reader.bytes();
                        break;
                    }
                case 3: {
                        message.ackPeerRoutesRevision = reader.uint32();
                        break;
                    }
                case 7: {
                        message.iceEnabled = reader.bool();
                        break;
                    }
                case 14: {
                        message.hostedServerTicket = reader.bytes();
                        break;
                    }
                case 4: {
                        message.connectRequest = $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.connectOk = $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.connectionClosed = $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.ackReliableMsg = reader.uint32();
                        break;
                    }
                case 12: {
                        message.firstReliableMsg = reader.uint32();
                        break;
                    }
                case 13: {
                        if (!(message.reliableMessages && message.reliableMessages.length))
                            message.reliableMessages = [];
                        message.reliableMessages.push($root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage.decode(reader, reader.uint32()));
                        break;
                    }
                case 15: {
                        if (!(message.applicationMessages && message.applicationMessages.length))
                            message.applicationMessages = [];
                        message.applicationMessages.push($root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.decode(reader, reader.uint32()));
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
         * Decodes a CMsgSteamNetworkingP2PRendezvous message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamNetworkingP2PRendezvous} CMsgSteamNetworkingP2PRendezvous
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingP2PRendezvous.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamNetworkingP2PRendezvous message.
         * @function verify
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamNetworkingP2PRendezvous.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromIdentity != null && message.hasOwnProperty("fromIdentity"))
                if (!$util.isString(message.fromIdentity))
                    return "fromIdentity: string expected";
            if (message.fromConnectionId != null && message.hasOwnProperty("fromConnectionId"))
                if (!$util.isInteger(message.fromConnectionId))
                    return "fromConnectionId: integer expected";
            if (message.toIdentity != null && message.hasOwnProperty("toIdentity"))
                if (!$util.isString(message.toIdentity))
                    return "toIdentity: string expected";
            if (message.toConnectionId != null && message.hasOwnProperty("toConnectionId"))
                if (!$util.isInteger(message.toConnectionId))
                    return "toConnectionId: integer expected";
            if (message.sdrRoutes != null && message.hasOwnProperty("sdrRoutes"))
                if (!(message.sdrRoutes && typeof message.sdrRoutes.length === "number" || $util.isString(message.sdrRoutes)))
                    return "sdrRoutes: buffer expected";
            if (message.ackPeerRoutesRevision != null && message.hasOwnProperty("ackPeerRoutesRevision"))
                if (!$util.isInteger(message.ackPeerRoutesRevision))
                    return "ackPeerRoutesRevision: integer expected";
            if (message.iceEnabled != null && message.hasOwnProperty("iceEnabled"))
                if (typeof message.iceEnabled !== "boolean")
                    return "iceEnabled: boolean expected";
            if (message.hostedServerTicket != null && message.hasOwnProperty("hostedServerTicket"))
                if (!(message.hostedServerTicket && typeof message.hostedServerTicket.length === "number" || $util.isString(message.hostedServerTicket)))
                    return "hostedServerTicket: buffer expected";
            if (message.connectRequest != null && message.hasOwnProperty("connectRequest")) {
                var error = $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest.verify(message.connectRequest);
                if (error)
                    return "connectRequest." + error;
            }
            if (message.connectOk != null && message.hasOwnProperty("connectOk")) {
                var error = $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK.verify(message.connectOk);
                if (error)
                    return "connectOk." + error;
            }
            if (message.connectionClosed != null && message.hasOwnProperty("connectionClosed")) {
                var error = $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.verify(message.connectionClosed);
                if (error)
                    return "connectionClosed." + error;
            }
            if (message.ackReliableMsg != null && message.hasOwnProperty("ackReliableMsg"))
                if (!$util.isInteger(message.ackReliableMsg))
                    return "ackReliableMsg: integer expected";
            if (message.firstReliableMsg != null && message.hasOwnProperty("firstReliableMsg"))
                if (!$util.isInteger(message.firstReliableMsg))
                    return "firstReliableMsg: integer expected";
            if (message.reliableMessages != null && message.hasOwnProperty("reliableMessages")) {
                if (!Array.isArray(message.reliableMessages))
                    return "reliableMessages: array expected";
                for (var i = 0; i < message.reliableMessages.length; ++i) {
                    var error = $root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage.verify(message.reliableMessages[i]);
                    if (error)
                        return "reliableMessages." + error;
                }
            }
            if (message.applicationMessages != null && message.hasOwnProperty("applicationMessages")) {
                if (!Array.isArray(message.applicationMessages))
                    return "applicationMessages: array expected";
                for (var i = 0; i < message.applicationMessages.length; ++i) {
                    var error = $root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.verify(message.applicationMessages[i]);
                    if (error)
                        return "applicationMessages." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamNetworkingP2PRendezvous message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamNetworkingP2PRendezvous} CMsgSteamNetworkingP2PRendezvous
         */
        CMsgSteamNetworkingP2PRendezvous.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamNetworkingP2PRendezvous)
                return object;
            var message = new $root.CMsgSteamNetworkingP2PRendezvous();
            if (object.fromIdentity != null)
                message.fromIdentity = String(object.fromIdentity);
            if (object.fromConnectionId != null)
                message.fromConnectionId = object.fromConnectionId >>> 0;
            if (object.toIdentity != null)
                message.toIdentity = String(object.toIdentity);
            if (object.toConnectionId != null)
                message.toConnectionId = object.toConnectionId >>> 0;
            if (object.sdrRoutes != null)
                if (typeof object.sdrRoutes === "string")
                    $util.base64.decode(object.sdrRoutes, message.sdrRoutes = $util.newBuffer($util.base64.length(object.sdrRoutes)), 0);
                else if (object.sdrRoutes.length >= 0)
                    message.sdrRoutes = object.sdrRoutes;
            if (object.ackPeerRoutesRevision != null)
                message.ackPeerRoutesRevision = object.ackPeerRoutesRevision >>> 0;
            if (object.iceEnabled != null)
                message.iceEnabled = Boolean(object.iceEnabled);
            if (object.hostedServerTicket != null)
                if (typeof object.hostedServerTicket === "string")
                    $util.base64.decode(object.hostedServerTicket, message.hostedServerTicket = $util.newBuffer($util.base64.length(object.hostedServerTicket)), 0);
                else if (object.hostedServerTicket.length >= 0)
                    message.hostedServerTicket = object.hostedServerTicket;
            if (object.connectRequest != null) {
                if (typeof object.connectRequest !== "object")
                    throw TypeError(".CMsgSteamNetworkingP2PRendezvous.connectRequest: object expected");
                message.connectRequest = $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest.fromObject(object.connectRequest);
            }
            if (object.connectOk != null) {
                if (typeof object.connectOk !== "object")
                    throw TypeError(".CMsgSteamNetworkingP2PRendezvous.connectOk: object expected");
                message.connectOk = $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK.fromObject(object.connectOk);
            }
            if (object.connectionClosed != null) {
                if (typeof object.connectionClosed !== "object")
                    throw TypeError(".CMsgSteamNetworkingP2PRendezvous.connectionClosed: object expected");
                message.connectionClosed = $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.fromObject(object.connectionClosed);
            }
            if (object.ackReliableMsg != null)
                message.ackReliableMsg = object.ackReliableMsg >>> 0;
            if (object.firstReliableMsg != null)
                message.firstReliableMsg = object.firstReliableMsg >>> 0;
            if (object.reliableMessages) {
                if (!Array.isArray(object.reliableMessages))
                    throw TypeError(".CMsgSteamNetworkingP2PRendezvous.reliableMessages: array expected");
                message.reliableMessages = [];
                for (var i = 0; i < object.reliableMessages.length; ++i) {
                    if (typeof object.reliableMessages[i] !== "object")
                        throw TypeError(".CMsgSteamNetworkingP2PRendezvous.reliableMessages: object expected");
                    message.reliableMessages[i] = $root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage.fromObject(object.reliableMessages[i]);
                }
            }
            if (object.applicationMessages) {
                if (!Array.isArray(object.applicationMessages))
                    throw TypeError(".CMsgSteamNetworkingP2PRendezvous.applicationMessages: array expected");
                message.applicationMessages = [];
                for (var i = 0; i < object.applicationMessages.length; ++i) {
                    if (typeof object.applicationMessages[i] !== "object")
                        throw TypeError(".CMsgSteamNetworkingP2PRendezvous.applicationMessages: object expected");
                    message.applicationMessages[i] = $root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.fromObject(object.applicationMessages[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamNetworkingP2PRendezvous message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {CMsgSteamNetworkingP2PRendezvous} message CMsgSteamNetworkingP2PRendezvous
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamNetworkingP2PRendezvous.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.reliableMessages = [];
                object.applicationMessages = [];
            }
            if (options.defaults) {
                object.toConnectionId = 0;
                if (options.bytes === String)
                    object.sdrRoutes = "";
                else {
                    object.sdrRoutes = [];
                    if (options.bytes !== Array)
                        object.sdrRoutes = $util.newBuffer(object.sdrRoutes);
                }
                object.ackPeerRoutesRevision = 0;
                object.connectRequest = null;
                object.connectOk = null;
                object.connectionClosed = null;
                object.iceEnabled = false;
                object.fromIdentity = "";
                object.fromConnectionId = 0;
                object.toIdentity = "";
                object.ackReliableMsg = 0;
                object.firstReliableMsg = 0;
                if (options.bytes === String)
                    object.hostedServerTicket = "";
                else {
                    object.hostedServerTicket = [];
                    if (options.bytes !== Array)
                        object.hostedServerTicket = $util.newBuffer(object.hostedServerTicket);
                }
            }
            if (message.toConnectionId != null && message.hasOwnProperty("toConnectionId"))
                object.toConnectionId = message.toConnectionId;
            if (message.sdrRoutes != null && message.hasOwnProperty("sdrRoutes"))
                object.sdrRoutes = options.bytes === String ? $util.base64.encode(message.sdrRoutes, 0, message.sdrRoutes.length) : options.bytes === Array ? Array.prototype.slice.call(message.sdrRoutes) : message.sdrRoutes;
            if (message.ackPeerRoutesRevision != null && message.hasOwnProperty("ackPeerRoutesRevision"))
                object.ackPeerRoutesRevision = message.ackPeerRoutesRevision;
            if (message.connectRequest != null && message.hasOwnProperty("connectRequest"))
                object.connectRequest = $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest.toObject(message.connectRequest, options);
            if (message.connectOk != null && message.hasOwnProperty("connectOk"))
                object.connectOk = $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK.toObject(message.connectOk, options);
            if (message.connectionClosed != null && message.hasOwnProperty("connectionClosed"))
                object.connectionClosed = $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.toObject(message.connectionClosed, options);
            if (message.iceEnabled != null && message.hasOwnProperty("iceEnabled"))
                object.iceEnabled = message.iceEnabled;
            if (message.fromIdentity != null && message.hasOwnProperty("fromIdentity"))
                object.fromIdentity = message.fromIdentity;
            if (message.fromConnectionId != null && message.hasOwnProperty("fromConnectionId"))
                object.fromConnectionId = message.fromConnectionId;
            if (message.toIdentity != null && message.hasOwnProperty("toIdentity"))
                object.toIdentity = message.toIdentity;
            if (message.ackReliableMsg != null && message.hasOwnProperty("ackReliableMsg"))
                object.ackReliableMsg = message.ackReliableMsg;
            if (message.firstReliableMsg != null && message.hasOwnProperty("firstReliableMsg"))
                object.firstReliableMsg = message.firstReliableMsg;
            if (message.reliableMessages && message.reliableMessages.length) {
                object.reliableMessages = [];
                for (var j = 0; j < message.reliableMessages.length; ++j)
                    object.reliableMessages[j] = $root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage.toObject(message.reliableMessages[j], options);
            }
            if (message.hostedServerTicket != null && message.hasOwnProperty("hostedServerTicket"))
                object.hostedServerTicket = options.bytes === String ? $util.base64.encode(message.hostedServerTicket, 0, message.hostedServerTicket.length) : options.bytes === Array ? Array.prototype.slice.call(message.hostedServerTicket) : message.hostedServerTicket;
            if (message.applicationMessages && message.applicationMessages.length) {
                object.applicationMessages = [];
                for (var j = 0; j < message.applicationMessages.length; ++j)
                    object.applicationMessages[j] = $root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.toObject(message.applicationMessages[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamNetworkingP2PRendezvous to JSON.
         * @function toJSON
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamNetworkingP2PRendezvous.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamNetworkingP2PRendezvous
         * @function getTypeUrl
         * @memberof CMsgSteamNetworkingP2PRendezvous
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamNetworkingP2PRendezvous.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamNetworkingP2PRendezvous";
        };
    
        CMsgSteamNetworkingP2PRendezvous.ConnectRequest = (function() {
    
            /**
             * Properties of a ConnectRequest.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @interface IConnectRequest
             * @property {ICMsgSteamDatagramSessionCryptInfoSigned|null} [crypt] ConnectRequest crypt
             * @property {ICMsgSteamDatagramCertificateSigned|null} [cert] ConnectRequest cert
             * @property {number|null} [toVirtualPort] ConnectRequest toVirtualPort
             * @property {number|null} [fromVirtualPort] ConnectRequest fromVirtualPort
             * @property {string|null} [fromFakeip] ConnectRequest fromFakeip
             */
    
            /**
             * Constructs a new ConnectRequest.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @classdesc Represents a ConnectRequest.
             * @implements IConnectRequest
             * @constructor
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectRequest=} [properties] Properties to set
             */
            function ConnectRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ConnectRequest crypt.
             * @member {ICMsgSteamDatagramSessionCryptInfoSigned|null|undefined} crypt
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.crypt = null;
    
            /**
             * ConnectRequest cert.
             * @member {ICMsgSteamDatagramCertificateSigned|null|undefined} cert
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.cert = null;
    
            /**
             * ConnectRequest toVirtualPort.
             * @member {number} toVirtualPort
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.toVirtualPort = 0;
    
            /**
             * ConnectRequest fromVirtualPort.
             * @member {number} fromVirtualPort
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.fromVirtualPort = 0;
    
            /**
             * ConnectRequest fromFakeip.
             * @member {string} fromFakeip
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.fromFakeip = "";
    
            /**
             * Creates a new ConnectRequest instance using the specified properties.
             * @function create
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectRequest=} [properties] Properties to set
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectRequest} ConnectRequest instance
             */
            ConnectRequest.create = function create(properties) {
                return new ConnectRequest(properties);
            };
    
            /**
             * Encodes the specified ConnectRequest message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectRequest.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectRequest} message ConnectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.crypt != null && Object.hasOwnProperty.call(message, "crypt"))
                    $root.CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.cert != null && Object.hasOwnProperty.call(message, "cert"))
                    $root.CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.toVirtualPort != null && Object.hasOwnProperty.call(message, "toVirtualPort"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.toVirtualPort);
                if (message.fromVirtualPort != null && Object.hasOwnProperty.call(message, "fromVirtualPort"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.fromVirtualPort);
                if (message.fromFakeip != null && Object.hasOwnProperty.call(message, "fromFakeip"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.fromFakeip);
                return writer;
            };
    
            /**
             * Encodes the specified ConnectRequest message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectRequest} message ConnectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConnectRequest message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectRequest} ConnectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 6: {
                            message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.cert = $root.CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.toVirtualPort = reader.uint32();
                            break;
                        }
                    case 10: {
                            message.fromVirtualPort = reader.uint32();
                            break;
                        }
                    case 11: {
                            message.fromFakeip = reader.string();
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
             * Decodes a ConnectRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectRequest} ConnectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConnectRequest message.
             * @function verify
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.crypt != null && message.hasOwnProperty("crypt")) {
                    var error = $root.CMsgSteamDatagramSessionCryptInfoSigned.verify(message.crypt);
                    if (error)
                        return "crypt." + error;
                }
                if (message.cert != null && message.hasOwnProperty("cert")) {
                    var error = $root.CMsgSteamDatagramCertificateSigned.verify(message.cert);
                    if (error)
                        return "cert." + error;
                }
                if (message.toVirtualPort != null && message.hasOwnProperty("toVirtualPort"))
                    if (!$util.isInteger(message.toVirtualPort))
                        return "toVirtualPort: integer expected";
                if (message.fromVirtualPort != null && message.hasOwnProperty("fromVirtualPort"))
                    if (!$util.isInteger(message.fromVirtualPort))
                        return "fromVirtualPort: integer expected";
                if (message.fromFakeip != null && message.hasOwnProperty("fromFakeip"))
                    if (!$util.isString(message.fromFakeip))
                        return "fromFakeip: string expected";
                return null;
            };
    
            /**
             * Creates a ConnectRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectRequest} ConnectRequest
             */
            ConnectRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest)
                    return object;
                var message = new $root.CMsgSteamNetworkingP2PRendezvous.ConnectRequest();
                if (object.crypt != null) {
                    if (typeof object.crypt !== "object")
                        throw TypeError(".CMsgSteamNetworkingP2PRendezvous.ConnectRequest.crypt: object expected");
                    message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.fromObject(object.crypt);
                }
                if (object.cert != null) {
                    if (typeof object.cert !== "object")
                        throw TypeError(".CMsgSteamNetworkingP2PRendezvous.ConnectRequest.cert: object expected");
                    message.cert = $root.CMsgSteamDatagramCertificateSigned.fromObject(object.cert);
                }
                if (object.toVirtualPort != null)
                    message.toVirtualPort = object.toVirtualPort >>> 0;
                if (object.fromVirtualPort != null)
                    message.fromVirtualPort = object.fromVirtualPort >>> 0;
                if (object.fromFakeip != null)
                    message.fromFakeip = String(object.fromFakeip);
                return message;
            };
    
            /**
             * Creates a plain object from a ConnectRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.ConnectRequest} message ConnectRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.crypt = null;
                    object.cert = null;
                    object.toVirtualPort = 0;
                    object.fromVirtualPort = 0;
                    object.fromFakeip = "";
                }
                if (message.crypt != null && message.hasOwnProperty("crypt"))
                    object.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.toObject(message.crypt, options);
                if (message.cert != null && message.hasOwnProperty("cert"))
                    object.cert = $root.CMsgSteamDatagramCertificateSigned.toObject(message.cert, options);
                if (message.toVirtualPort != null && message.hasOwnProperty("toVirtualPort"))
                    object.toVirtualPort = message.toVirtualPort;
                if (message.fromVirtualPort != null && message.hasOwnProperty("fromVirtualPort"))
                    object.fromVirtualPort = message.fromVirtualPort;
                if (message.fromFakeip != null && message.hasOwnProperty("fromFakeip"))
                    object.fromFakeip = message.fromFakeip;
                return object;
            };
    
            /**
             * Converts this ConnectRequest to JSON.
             * @function toJSON
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ConnectRequest
             * @function getTypeUrl
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSteamNetworkingP2PRendezvous.ConnectRequest";
            };
    
            return ConnectRequest;
        })();
    
        CMsgSteamNetworkingP2PRendezvous.ConnectOK = (function() {
    
            /**
             * Properties of a ConnectOK.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @interface IConnectOK
             * @property {ICMsgSteamDatagramSessionCryptInfoSigned|null} [crypt] ConnectOK crypt
             * @property {ICMsgSteamDatagramCertificateSigned|null} [cert] ConnectOK cert
             */
    
            /**
             * Constructs a new ConnectOK.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @classdesc Represents a ConnectOK.
             * @implements IConnectOK
             * @constructor
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectOK=} [properties] Properties to set
             */
            function ConnectOK(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ConnectOK crypt.
             * @member {ICMsgSteamDatagramSessionCryptInfoSigned|null|undefined} crypt
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @instance
             */
            ConnectOK.prototype.crypt = null;
    
            /**
             * ConnectOK cert.
             * @member {ICMsgSteamDatagramCertificateSigned|null|undefined} cert
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @instance
             */
            ConnectOK.prototype.cert = null;
    
            /**
             * Creates a new ConnectOK instance using the specified properties.
             * @function create
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectOK=} [properties] Properties to set
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectOK} ConnectOK instance
             */
            ConnectOK.create = function create(properties) {
                return new ConnectOK(properties);
            };
    
            /**
             * Encodes the specified ConnectOK message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectOK.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectOK} message ConnectOK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectOK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.crypt != null && Object.hasOwnProperty.call(message, "crypt"))
                    $root.CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.cert != null && Object.hasOwnProperty.call(message, "cert"))
                    $root.CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ConnectOK message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectOK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectOK} message ConnectOK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectOK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConnectOK message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectOK} ConnectOK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectOK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 5: {
                            message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.cert = $root.CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
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
             * Decodes a ConnectOK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectOK} ConnectOK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectOK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConnectOK message.
             * @function verify
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectOK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.crypt != null && message.hasOwnProperty("crypt")) {
                    var error = $root.CMsgSteamDatagramSessionCryptInfoSigned.verify(message.crypt);
                    if (error)
                        return "crypt." + error;
                }
                if (message.cert != null && message.hasOwnProperty("cert")) {
                    var error = $root.CMsgSteamDatagramCertificateSigned.verify(message.cert);
                    if (error)
                        return "cert." + error;
                }
                return null;
            };
    
            /**
             * Creates a ConnectOK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectOK} ConnectOK
             */
            ConnectOK.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK)
                    return object;
                var message = new $root.CMsgSteamNetworkingP2PRendezvous.ConnectOK();
                if (object.crypt != null) {
                    if (typeof object.crypt !== "object")
                        throw TypeError(".CMsgSteamNetworkingP2PRendezvous.ConnectOK.crypt: object expected");
                    message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.fromObject(object.crypt);
                }
                if (object.cert != null) {
                    if (typeof object.cert !== "object")
                        throw TypeError(".CMsgSteamNetworkingP2PRendezvous.ConnectOK.cert: object expected");
                    message.cert = $root.CMsgSteamDatagramCertificateSigned.fromObject(object.cert);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ConnectOK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.ConnectOK} message ConnectOK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectOK.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.crypt = null;
                    object.cert = null;
                }
                if (message.crypt != null && message.hasOwnProperty("crypt"))
                    object.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.toObject(message.crypt, options);
                if (message.cert != null && message.hasOwnProperty("cert"))
                    object.cert = $root.CMsgSteamDatagramCertificateSigned.toObject(message.cert, options);
                return object;
            };
    
            /**
             * Converts this ConnectOK to JSON.
             * @function toJSON
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectOK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ConnectOK
             * @function getTypeUrl
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectOK
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectOK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSteamNetworkingP2PRendezvous.ConnectOK";
            };
    
            return ConnectOK;
        })();
    
        CMsgSteamNetworkingP2PRendezvous.ConnectionClosed = (function() {
    
            /**
             * Properties of a ConnectionClosed.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @interface IConnectionClosed
             * @property {string|null} [debug] ConnectionClosed debug
             * @property {number|null} [reasonCode] ConnectionClosed reasonCode
             */
    
            /**
             * Constructs a new ConnectionClosed.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @classdesc Represents a ConnectionClosed.
             * @implements IConnectionClosed
             * @constructor
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectionClosed=} [properties] Properties to set
             */
            function ConnectionClosed(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ConnectionClosed debug.
             * @member {string} debug
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @instance
             */
            ConnectionClosed.prototype.debug = "";
    
            /**
             * ConnectionClosed reasonCode.
             * @member {number} reasonCode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @instance
             */
            ConnectionClosed.prototype.reasonCode = 0;
    
            /**
             * Creates a new ConnectionClosed instance using the specified properties.
             * @function create
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectionClosed=} [properties] Properties to set
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectionClosed} ConnectionClosed instance
             */
            ConnectionClosed.create = function create(properties) {
                return new ConnectionClosed(properties);
            };
    
            /**
             * Encodes the specified ConnectionClosed message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectionClosed} message ConnectionClosed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectionClosed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.debug != null && Object.hasOwnProperty.call(message, "debug"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.debug);
                if (message.reasonCode != null && Object.hasOwnProperty.call(message, "reasonCode"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.reasonCode);
                return writer;
            };
    
            /**
             * Encodes the specified ConnectionClosed message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IConnectionClosed} message ConnectionClosed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectionClosed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConnectionClosed message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectionClosed} ConnectionClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectionClosed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 5: {
                            message.debug = reader.string();
                            break;
                        }
                    case 6: {
                            message.reasonCode = reader.uint32();
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
             * Decodes a ConnectionClosed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectionClosed} ConnectionClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectionClosed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConnectionClosed message.
             * @function verify
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectionClosed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.debug != null && message.hasOwnProperty("debug"))
                    if (!$util.isString(message.debug))
                        return "debug: string expected";
                if (message.reasonCode != null && message.hasOwnProperty("reasonCode"))
                    if (!$util.isInteger(message.reasonCode))
                        return "reasonCode: integer expected";
                return null;
            };
    
            /**
             * Creates a ConnectionClosed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamNetworkingP2PRendezvous.ConnectionClosed} ConnectionClosed
             */
            ConnectionClosed.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed)
                    return object;
                var message = new $root.CMsgSteamNetworkingP2PRendezvous.ConnectionClosed();
                if (object.debug != null)
                    message.debug = String(object.debug);
                if (object.reasonCode != null)
                    message.reasonCode = object.reasonCode >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ConnectionClosed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.ConnectionClosed} message ConnectionClosed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectionClosed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.debug = "";
                    object.reasonCode = 0;
                }
                if (message.debug != null && message.hasOwnProperty("debug"))
                    object.debug = message.debug;
                if (message.reasonCode != null && message.hasOwnProperty("reasonCode"))
                    object.reasonCode = message.reasonCode;
                return object;
            };
    
            /**
             * Converts this ConnectionClosed to JSON.
             * @function toJSON
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectionClosed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ConnectionClosed
             * @function getTypeUrl
             * @memberof CMsgSteamNetworkingP2PRendezvous.ConnectionClosed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectionClosed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSteamNetworkingP2PRendezvous.ConnectionClosed";
            };
    
            return ConnectionClosed;
        })();
    
        CMsgSteamNetworkingP2PRendezvous.ReliableMessage = (function() {
    
            /**
             * Properties of a ReliableMessage.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @interface IReliableMessage
             * @property {ICMsgICERendezvous|null} [ice] ReliableMessage ice
             */
    
            /**
             * Constructs a new ReliableMessage.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @classdesc Represents a ReliableMessage.
             * @implements IReliableMessage
             * @constructor
             * @param {CMsgSteamNetworkingP2PRendezvous.IReliableMessage=} [properties] Properties to set
             */
            function ReliableMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReliableMessage ice.
             * @member {ICMsgICERendezvous|null|undefined} ice
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @instance
             */
            ReliableMessage.prototype.ice = null;
    
            /**
             * Creates a new ReliableMessage instance using the specified properties.
             * @function create
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IReliableMessage=} [properties] Properties to set
             * @returns {CMsgSteamNetworkingP2PRendezvous.ReliableMessage} ReliableMessage instance
             */
            ReliableMessage.create = function create(properties) {
                return new ReliableMessage(properties);
            };
    
            /**
             * Encodes the specified ReliableMessage message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ReliableMessage.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IReliableMessage} message ReliableMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReliableMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ice != null && Object.hasOwnProperty.call(message, "ice"))
                    $root.CMsgICERendezvous.encode(message.ice, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ReliableMessage message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ReliableMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IReliableMessage} message ReliableMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReliableMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReliableMessage message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamNetworkingP2PRendezvous.ReliableMessage} ReliableMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReliableMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ice = $root.CMsgICERendezvous.decode(reader, reader.uint32());
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
             * Decodes a ReliableMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamNetworkingP2PRendezvous.ReliableMessage} ReliableMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReliableMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReliableMessage message.
             * @function verify
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReliableMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ice != null && message.hasOwnProperty("ice")) {
                    var error = $root.CMsgICERendezvous.verify(message.ice);
                    if (error)
                        return "ice." + error;
                }
                return null;
            };
    
            /**
             * Creates a ReliableMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamNetworkingP2PRendezvous.ReliableMessage} ReliableMessage
             */
            ReliableMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage)
                    return object;
                var message = new $root.CMsgSteamNetworkingP2PRendezvous.ReliableMessage();
                if (object.ice != null) {
                    if (typeof object.ice !== "object")
                        throw TypeError(".CMsgSteamNetworkingP2PRendezvous.ReliableMessage.ice: object expected");
                    message.ice = $root.CMsgICERendezvous.fromObject(object.ice);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ReliableMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.ReliableMessage} message ReliableMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReliableMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.ice = null;
                if (message.ice != null && message.hasOwnProperty("ice"))
                    object.ice = $root.CMsgICERendezvous.toObject(message.ice, options);
                return object;
            };
    
            /**
             * Converts this ReliableMessage to JSON.
             * @function toJSON
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReliableMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ReliableMessage
             * @function getTypeUrl
             * @memberof CMsgSteamNetworkingP2PRendezvous.ReliableMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReliableMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSteamNetworkingP2PRendezvous.ReliableMessage";
            };
    
            return ReliableMessage;
        })();
    
        CMsgSteamNetworkingP2PRendezvous.ApplicationMessage = (function() {
    
            /**
             * Properties of an ApplicationMessage.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @interface IApplicationMessage
             * @property {Uint8Array|null} [data] ApplicationMessage data
             * @property {number|Long|null} [msgNum] ApplicationMessage msgNum
             * @property {number|null} [flags] ApplicationMessage flags
             * @property {number|null} [laneIdx] ApplicationMessage laneIdx
             */
    
            /**
             * Constructs a new ApplicationMessage.
             * @memberof CMsgSteamNetworkingP2PRendezvous
             * @classdesc Represents an ApplicationMessage.
             * @implements IApplicationMessage
             * @constructor
             * @param {CMsgSteamNetworkingP2PRendezvous.IApplicationMessage=} [properties] Properties to set
             */
            function ApplicationMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ApplicationMessage data.
             * @member {Uint8Array} data
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @instance
             */
            ApplicationMessage.prototype.data = $util.newBuffer([]);
    
            /**
             * ApplicationMessage msgNum.
             * @member {number|Long} msgNum
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @instance
             */
            ApplicationMessage.prototype.msgNum = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ApplicationMessage flags.
             * @member {number} flags
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @instance
             */
            ApplicationMessage.prototype.flags = 0;
    
            /**
             * ApplicationMessage laneIdx.
             * @member {number} laneIdx
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @instance
             */
            ApplicationMessage.prototype.laneIdx = 0;
    
            /**
             * Creates a new ApplicationMessage instance using the specified properties.
             * @function create
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IApplicationMessage=} [properties] Properties to set
             * @returns {CMsgSteamNetworkingP2PRendezvous.ApplicationMessage} ApplicationMessage instance
             */
            ApplicationMessage.create = function create(properties) {
                return new ApplicationMessage(properties);
            };
    
            /**
             * Encodes the specified ApplicationMessage message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IApplicationMessage} message ApplicationMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplicationMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                if (message.msgNum != null && Object.hasOwnProperty.call(message, "msgNum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.msgNum);
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.flags);
                if (message.laneIdx != null && Object.hasOwnProperty.call(message, "laneIdx"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.laneIdx);
                return writer;
            };
    
            /**
             * Encodes the specified ApplicationMessage message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.IApplicationMessage} message ApplicationMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplicationMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ApplicationMessage message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamNetworkingP2PRendezvous.ApplicationMessage} ApplicationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplicationMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.data = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.msgNum = reader.uint64();
                            break;
                        }
                    case 3: {
                            message.flags = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.laneIdx = reader.uint32();
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
             * Decodes an ApplicationMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamNetworkingP2PRendezvous.ApplicationMessage} ApplicationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplicationMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ApplicationMessage message.
             * @function verify
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplicationMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.msgNum != null && message.hasOwnProperty("msgNum"))
                    if (!$util.isInteger(message.msgNum) && !(message.msgNum && $util.isInteger(message.msgNum.low) && $util.isInteger(message.msgNum.high)))
                        return "msgNum: integer|Long expected";
                if (message.flags != null && message.hasOwnProperty("flags"))
                    if (!$util.isInteger(message.flags))
                        return "flags: integer expected";
                if (message.laneIdx != null && message.hasOwnProperty("laneIdx"))
                    if (!$util.isInteger(message.laneIdx))
                        return "laneIdx: integer expected";
                return null;
            };
    
            /**
             * Creates an ApplicationMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamNetworkingP2PRendezvous.ApplicationMessage} ApplicationMessage
             */
            ApplicationMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage)
                    return object;
                var message = new $root.CMsgSteamNetworkingP2PRendezvous.ApplicationMessage();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                if (object.msgNum != null)
                    if ($util.Long)
                        (message.msgNum = $util.Long.fromValue(object.msgNum)).unsigned = true;
                    else if (typeof object.msgNum === "string")
                        message.msgNum = parseInt(object.msgNum, 10);
                    else if (typeof object.msgNum === "number")
                        message.msgNum = object.msgNum;
                    else if (typeof object.msgNum === "object")
                        message.msgNum = new $util.LongBits(object.msgNum.low >>> 0, object.msgNum.high >>> 0).toNumber(true);
                if (object.flags != null)
                    message.flags = object.flags >>> 0;
                if (object.laneIdx != null)
                    message.laneIdx = object.laneIdx >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an ApplicationMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {CMsgSteamNetworkingP2PRendezvous.ApplicationMessage} message ApplicationMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplicationMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.msgNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.msgNum = options.longs === String ? "0" : 0;
                    object.flags = 0;
                    object.laneIdx = 0;
                }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.msgNum != null && message.hasOwnProperty("msgNum"))
                    if (typeof message.msgNum === "number")
                        object.msgNum = options.longs === String ? String(message.msgNum) : message.msgNum;
                    else
                        object.msgNum = options.longs === String ? $util.Long.prototype.toString.call(message.msgNum) : options.longs === Number ? new $util.LongBits(message.msgNum.low >>> 0, message.msgNum.high >>> 0).toNumber(true) : message.msgNum;
                if (message.flags != null && message.hasOwnProperty("flags"))
                    object.flags = message.flags;
                if (message.laneIdx != null && message.hasOwnProperty("laneIdx"))
                    object.laneIdx = message.laneIdx;
                return object;
            };
    
            /**
             * Converts this ApplicationMessage to JSON.
             * @function toJSON
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplicationMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ApplicationMessage
             * @function getTypeUrl
             * @memberof CMsgSteamNetworkingP2PRendezvous.ApplicationMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApplicationMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSteamNetworkingP2PRendezvous.ApplicationMessage";
            };
    
            return ApplicationMessage;
        })();
    
        return CMsgSteamNetworkingP2PRendezvous;
    })();
    
    $root.CMsgSteamNetworkingICESessionSummary = (function() {
    
        /**
         * Properties of a CMsgSteamNetworkingICESessionSummary.
         * @exports ICMsgSteamNetworkingICESessionSummary
         * @interface ICMsgSteamNetworkingICESessionSummary
         * @property {number|null} [failureReasonCode] CMsgSteamNetworkingICESessionSummary failureReasonCode
         * @property {number|null} [localCandidateTypes] CMsgSteamNetworkingICESessionSummary localCandidateTypes
         * @property {number|null} [remoteCandidateTypes] CMsgSteamNetworkingICESessionSummary remoteCandidateTypes
         * @property {number|null} [initialRouteKind] CMsgSteamNetworkingICESessionSummary initialRouteKind
         * @property {number|null} [initialPing] CMsgSteamNetworkingICESessionSummary initialPing
         * @property {number|null} [initialScore] CMsgSteamNetworkingICESessionSummary initialScore
         * @property {number|null} [negotiationMs] CMsgSteamNetworkingICESessionSummary negotiationMs
         * @property {number|null} [bestRouteKind] CMsgSteamNetworkingICESessionSummary bestRouteKind
         * @property {number|null} [bestPing] CMsgSteamNetworkingICESessionSummary bestPing
         * @property {number|null} [bestScore] CMsgSteamNetworkingICESessionSummary bestScore
         * @property {number|null} [bestTime] CMsgSteamNetworkingICESessionSummary bestTime
         * @property {number|null} [selectedSeconds] CMsgSteamNetworkingICESessionSummary selectedSeconds
         * @property {number|null} [userSettings] CMsgSteamNetworkingICESessionSummary userSettings
         * @property {number|null} [iceEnableVar] CMsgSteamNetworkingICESessionSummary iceEnableVar
         * @property {number|null} [localCandidateTypesAllowed] CMsgSteamNetworkingICESessionSummary localCandidateTypesAllowed
         */
    
        /**
         * Constructs a new CMsgSteamNetworkingICESessionSummary.
         * @exports CMsgSteamNetworkingICESessionSummary
         * @classdesc Represents a CMsgSteamNetworkingICESessionSummary.
         * @implements ICMsgSteamNetworkingICESessionSummary
         * @constructor
         * @param {ICMsgSteamNetworkingICESessionSummary=} [properties] Properties to set
         */
        function CMsgSteamNetworkingICESessionSummary(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamNetworkingICESessionSummary failureReasonCode.
         * @member {number} failureReasonCode
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.failureReasonCode = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary localCandidateTypes.
         * @member {number} localCandidateTypes
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.localCandidateTypes = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary remoteCandidateTypes.
         * @member {number} remoteCandidateTypes
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.remoteCandidateTypes = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary initialRouteKind.
         * @member {number} initialRouteKind
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.initialRouteKind = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary initialPing.
         * @member {number} initialPing
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.initialPing = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary initialScore.
         * @member {number} initialScore
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.initialScore = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary negotiationMs.
         * @member {number} negotiationMs
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.negotiationMs = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary bestRouteKind.
         * @member {number} bestRouteKind
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.bestRouteKind = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary bestPing.
         * @member {number} bestPing
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.bestPing = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary bestScore.
         * @member {number} bestScore
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.bestScore = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary bestTime.
         * @member {number} bestTime
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.bestTime = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary selectedSeconds.
         * @member {number} selectedSeconds
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.selectedSeconds = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary userSettings.
         * @member {number} userSettings
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.userSettings = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary iceEnableVar.
         * @member {number} iceEnableVar
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.iceEnableVar = 0;
    
        /**
         * CMsgSteamNetworkingICESessionSummary localCandidateTypesAllowed.
         * @member {number} localCandidateTypesAllowed
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         */
        CMsgSteamNetworkingICESessionSummary.prototype.localCandidateTypesAllowed = 0;
    
        /**
         * Creates a new CMsgSteamNetworkingICESessionSummary instance using the specified properties.
         * @function create
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {ICMsgSteamNetworkingICESessionSummary=} [properties] Properties to set
         * @returns {CMsgSteamNetworkingICESessionSummary} CMsgSteamNetworkingICESessionSummary instance
         */
        CMsgSteamNetworkingICESessionSummary.create = function create(properties) {
            return new CMsgSteamNetworkingICESessionSummary(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingICESessionSummary message. Does not implicitly {@link CMsgSteamNetworkingICESessionSummary.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {ICMsgSteamNetworkingICESessionSummary} message CMsgSteamNetworkingICESessionSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingICESessionSummary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.localCandidateTypes != null && Object.hasOwnProperty.call(message, "localCandidateTypes"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.localCandidateTypes);
            if (message.remoteCandidateTypes != null && Object.hasOwnProperty.call(message, "remoteCandidateTypes"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.remoteCandidateTypes);
            if (message.initialRouteKind != null && Object.hasOwnProperty.call(message, "initialRouteKind"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.initialRouteKind);
            if (message.initialPing != null && Object.hasOwnProperty.call(message, "initialPing"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.initialPing);
            if (message.negotiationMs != null && Object.hasOwnProperty.call(message, "negotiationMs"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.negotiationMs);
            if (message.initialScore != null && Object.hasOwnProperty.call(message, "initialScore"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.initialScore);
            if (message.failureReasonCode != null && Object.hasOwnProperty.call(message, "failureReasonCode"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.failureReasonCode);
            if (message.selectedSeconds != null && Object.hasOwnProperty.call(message, "selectedSeconds"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.selectedSeconds);
            if (message.userSettings != null && Object.hasOwnProperty.call(message, "userSettings"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.userSettings);
            if (message.iceEnableVar != null && Object.hasOwnProperty.call(message, "iceEnableVar"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.iceEnableVar);
            if (message.localCandidateTypesAllowed != null && Object.hasOwnProperty.call(message, "localCandidateTypesAllowed"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.localCandidateTypesAllowed);
            if (message.bestRouteKind != null && Object.hasOwnProperty.call(message, "bestRouteKind"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.bestRouteKind);
            if (message.bestPing != null && Object.hasOwnProperty.call(message, "bestPing"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.bestPing);
            if (message.bestScore != null && Object.hasOwnProperty.call(message, "bestScore"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.bestScore);
            if (message.bestTime != null && Object.hasOwnProperty.call(message, "bestTime"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.bestTime);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingICESessionSummary message, length delimited. Does not implicitly {@link CMsgSteamNetworkingICESessionSummary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {ICMsgSteamNetworkingICESessionSummary} message CMsgSteamNetworkingICESessionSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingICESessionSummary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamNetworkingICESessionSummary message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamNetworkingICESessionSummary} CMsgSteamNetworkingICESessionSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingICESessionSummary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingICESessionSummary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 7: {
                        message.failureReasonCode = reader.uint32();
                        break;
                    }
                case 1: {
                        message.localCandidateTypes = reader.uint32();
                        break;
                    }
                case 2: {
                        message.remoteCandidateTypes = reader.uint32();
                        break;
                    }
                case 3: {
                        message.initialRouteKind = reader.uint32();
                        break;
                    }
                case 4: {
                        message.initialPing = reader.uint32();
                        break;
                    }
                case 6: {
                        message.initialScore = reader.uint32();
                        break;
                    }
                case 5: {
                        message.negotiationMs = reader.uint32();
                        break;
                    }
                case 16: {
                        message.bestRouteKind = reader.uint32();
                        break;
                    }
                case 17: {
                        message.bestPing = reader.uint32();
                        break;
                    }
                case 18: {
                        message.bestScore = reader.uint32();
                        break;
                    }
                case 19: {
                        message.bestTime = reader.uint32();
                        break;
                    }
                case 12: {
                        message.selectedSeconds = reader.uint32();
                        break;
                    }
                case 13: {
                        message.userSettings = reader.uint32();
                        break;
                    }
                case 14: {
                        message.iceEnableVar = reader.uint32();
                        break;
                    }
                case 15: {
                        message.localCandidateTypesAllowed = reader.uint32();
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
         * Decodes a CMsgSteamNetworkingICESessionSummary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamNetworkingICESessionSummary} CMsgSteamNetworkingICESessionSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingICESessionSummary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamNetworkingICESessionSummary message.
         * @function verify
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamNetworkingICESessionSummary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.failureReasonCode != null && message.hasOwnProperty("failureReasonCode"))
                if (!$util.isInteger(message.failureReasonCode))
                    return "failureReasonCode: integer expected";
            if (message.localCandidateTypes != null && message.hasOwnProperty("localCandidateTypes"))
                if (!$util.isInteger(message.localCandidateTypes))
                    return "localCandidateTypes: integer expected";
            if (message.remoteCandidateTypes != null && message.hasOwnProperty("remoteCandidateTypes"))
                if (!$util.isInteger(message.remoteCandidateTypes))
                    return "remoteCandidateTypes: integer expected";
            if (message.initialRouteKind != null && message.hasOwnProperty("initialRouteKind"))
                if (!$util.isInteger(message.initialRouteKind))
                    return "initialRouteKind: integer expected";
            if (message.initialPing != null && message.hasOwnProperty("initialPing"))
                if (!$util.isInteger(message.initialPing))
                    return "initialPing: integer expected";
            if (message.initialScore != null && message.hasOwnProperty("initialScore"))
                if (!$util.isInteger(message.initialScore))
                    return "initialScore: integer expected";
            if (message.negotiationMs != null && message.hasOwnProperty("negotiationMs"))
                if (!$util.isInteger(message.negotiationMs))
                    return "negotiationMs: integer expected";
            if (message.bestRouteKind != null && message.hasOwnProperty("bestRouteKind"))
                if (!$util.isInteger(message.bestRouteKind))
                    return "bestRouteKind: integer expected";
            if (message.bestPing != null && message.hasOwnProperty("bestPing"))
                if (!$util.isInteger(message.bestPing))
                    return "bestPing: integer expected";
            if (message.bestScore != null && message.hasOwnProperty("bestScore"))
                if (!$util.isInteger(message.bestScore))
                    return "bestScore: integer expected";
            if (message.bestTime != null && message.hasOwnProperty("bestTime"))
                if (!$util.isInteger(message.bestTime))
                    return "bestTime: integer expected";
            if (message.selectedSeconds != null && message.hasOwnProperty("selectedSeconds"))
                if (!$util.isInteger(message.selectedSeconds))
                    return "selectedSeconds: integer expected";
            if (message.userSettings != null && message.hasOwnProperty("userSettings"))
                if (!$util.isInteger(message.userSettings))
                    return "userSettings: integer expected";
            if (message.iceEnableVar != null && message.hasOwnProperty("iceEnableVar"))
                if (!$util.isInteger(message.iceEnableVar))
                    return "iceEnableVar: integer expected";
            if (message.localCandidateTypesAllowed != null && message.hasOwnProperty("localCandidateTypesAllowed"))
                if (!$util.isInteger(message.localCandidateTypesAllowed))
                    return "localCandidateTypesAllowed: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamNetworkingICESessionSummary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamNetworkingICESessionSummary} CMsgSteamNetworkingICESessionSummary
         */
        CMsgSteamNetworkingICESessionSummary.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamNetworkingICESessionSummary)
                return object;
            var message = new $root.CMsgSteamNetworkingICESessionSummary();
            if (object.failureReasonCode != null)
                message.failureReasonCode = object.failureReasonCode >>> 0;
            if (object.localCandidateTypes != null)
                message.localCandidateTypes = object.localCandidateTypes >>> 0;
            if (object.remoteCandidateTypes != null)
                message.remoteCandidateTypes = object.remoteCandidateTypes >>> 0;
            if (object.initialRouteKind != null)
                message.initialRouteKind = object.initialRouteKind >>> 0;
            if (object.initialPing != null)
                message.initialPing = object.initialPing >>> 0;
            if (object.initialScore != null)
                message.initialScore = object.initialScore >>> 0;
            if (object.negotiationMs != null)
                message.negotiationMs = object.negotiationMs >>> 0;
            if (object.bestRouteKind != null)
                message.bestRouteKind = object.bestRouteKind >>> 0;
            if (object.bestPing != null)
                message.bestPing = object.bestPing >>> 0;
            if (object.bestScore != null)
                message.bestScore = object.bestScore >>> 0;
            if (object.bestTime != null)
                message.bestTime = object.bestTime >>> 0;
            if (object.selectedSeconds != null)
                message.selectedSeconds = object.selectedSeconds >>> 0;
            if (object.userSettings != null)
                message.userSettings = object.userSettings >>> 0;
            if (object.iceEnableVar != null)
                message.iceEnableVar = object.iceEnableVar >>> 0;
            if (object.localCandidateTypesAllowed != null)
                message.localCandidateTypesAllowed = object.localCandidateTypesAllowed >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamNetworkingICESessionSummary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {CMsgSteamNetworkingICESessionSummary} message CMsgSteamNetworkingICESessionSummary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamNetworkingICESessionSummary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.localCandidateTypes = 0;
                object.remoteCandidateTypes = 0;
                object.initialRouteKind = 0;
                object.initialPing = 0;
                object.negotiationMs = 0;
                object.initialScore = 0;
                object.failureReasonCode = 0;
                object.selectedSeconds = 0;
                object.userSettings = 0;
                object.iceEnableVar = 0;
                object.localCandidateTypesAllowed = 0;
                object.bestRouteKind = 0;
                object.bestPing = 0;
                object.bestScore = 0;
                object.bestTime = 0;
            }
            if (message.localCandidateTypes != null && message.hasOwnProperty("localCandidateTypes"))
                object.localCandidateTypes = message.localCandidateTypes;
            if (message.remoteCandidateTypes != null && message.hasOwnProperty("remoteCandidateTypes"))
                object.remoteCandidateTypes = message.remoteCandidateTypes;
            if (message.initialRouteKind != null && message.hasOwnProperty("initialRouteKind"))
                object.initialRouteKind = message.initialRouteKind;
            if (message.initialPing != null && message.hasOwnProperty("initialPing"))
                object.initialPing = message.initialPing;
            if (message.negotiationMs != null && message.hasOwnProperty("negotiationMs"))
                object.negotiationMs = message.negotiationMs;
            if (message.initialScore != null && message.hasOwnProperty("initialScore"))
                object.initialScore = message.initialScore;
            if (message.failureReasonCode != null && message.hasOwnProperty("failureReasonCode"))
                object.failureReasonCode = message.failureReasonCode;
            if (message.selectedSeconds != null && message.hasOwnProperty("selectedSeconds"))
                object.selectedSeconds = message.selectedSeconds;
            if (message.userSettings != null && message.hasOwnProperty("userSettings"))
                object.userSettings = message.userSettings;
            if (message.iceEnableVar != null && message.hasOwnProperty("iceEnableVar"))
                object.iceEnableVar = message.iceEnableVar;
            if (message.localCandidateTypesAllowed != null && message.hasOwnProperty("localCandidateTypesAllowed"))
                object.localCandidateTypesAllowed = message.localCandidateTypesAllowed;
            if (message.bestRouteKind != null && message.hasOwnProperty("bestRouteKind"))
                object.bestRouteKind = message.bestRouteKind;
            if (message.bestPing != null && message.hasOwnProperty("bestPing"))
                object.bestPing = message.bestPing;
            if (message.bestScore != null && message.hasOwnProperty("bestScore"))
                object.bestScore = message.bestScore;
            if (message.bestTime != null && message.hasOwnProperty("bestTime"))
                object.bestTime = message.bestTime;
            return object;
        };
    
        /**
         * Converts this CMsgSteamNetworkingICESessionSummary to JSON.
         * @function toJSON
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamNetworkingICESessionSummary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamNetworkingICESessionSummary
         * @function getTypeUrl
         * @memberof CMsgSteamNetworkingICESessionSummary
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamNetworkingICESessionSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamNetworkingICESessionSummary";
        };
    
        return CMsgSteamNetworkingICESessionSummary;
    })();
    
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
