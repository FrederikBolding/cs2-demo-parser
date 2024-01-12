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
    
    $root.CMsgSteamDatagramRelayAuthTicket = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramRelayAuthTicket.
         * @exports ICMsgSteamDatagramRelayAuthTicket
         * @interface ICMsgSteamDatagramRelayAuthTicket
         * @property {number|null} [timeExpiry] CMsgSteamDatagramRelayAuthTicket timeExpiry
         * @property {string|null} [authorizedClientIdentityString] CMsgSteamDatagramRelayAuthTicket authorizedClientIdentityString
         * @property {string|null} [gameserverIdentityString] CMsgSteamDatagramRelayAuthTicket gameserverIdentityString
         * @property {number|null} [authorizedPublicIp] CMsgSteamDatagramRelayAuthTicket authorizedPublicIp
         * @property {Uint8Array|null} [gameserverAddress] CMsgSteamDatagramRelayAuthTicket gameserverAddress
         * @property {number|null} [appId] CMsgSteamDatagramRelayAuthTicket appId
         * @property {number|null} [virtualPort] CMsgSteamDatagramRelayAuthTicket virtualPort
         * @property {Array.<CMsgSteamDatagramRelayAuthTicket.IExtraField>|null} [extraFields] CMsgSteamDatagramRelayAuthTicket extraFields
         * @property {number|Long|null} [legacyAuthorizedSteamId] CMsgSteamDatagramRelayAuthTicket legacyAuthorizedSteamId
         * @property {number|Long|null} [legacyGameserverSteamId] CMsgSteamDatagramRelayAuthTicket legacyGameserverSteamId
         * @property {number|null} [legacyGameserverPopId] CMsgSteamDatagramRelayAuthTicket legacyGameserverPopId
         * @property {Uint8Array|null} [legacyAuthorizedClientIdentityBinary] CMsgSteamDatagramRelayAuthTicket legacyAuthorizedClientIdentityBinary
         * @property {Uint8Array|null} [legacyGameserverIdentityBinary] CMsgSteamDatagramRelayAuthTicket legacyGameserverIdentityBinary
         */
    
        /**
         * Constructs a new CMsgSteamDatagramRelayAuthTicket.
         * @exports CMsgSteamDatagramRelayAuthTicket
         * @classdesc Represents a CMsgSteamDatagramRelayAuthTicket.
         * @implements ICMsgSteamDatagramRelayAuthTicket
         * @constructor
         * @param {ICMsgSteamDatagramRelayAuthTicket=} [properties] Properties to set
         */
        function CMsgSteamDatagramRelayAuthTicket(properties) {
            this.extraFields = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramRelayAuthTicket timeExpiry.
         * @member {number} timeExpiry
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.timeExpiry = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket authorizedClientIdentityString.
         * @member {string} authorizedClientIdentityString
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.authorizedClientIdentityString = "";
    
        /**
         * CMsgSteamDatagramRelayAuthTicket gameserverIdentityString.
         * @member {string} gameserverIdentityString
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.gameserverIdentityString = "";
    
        /**
         * CMsgSteamDatagramRelayAuthTicket authorizedPublicIp.
         * @member {number} authorizedPublicIp
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.authorizedPublicIp = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket gameserverAddress.
         * @member {Uint8Array} gameserverAddress
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.gameserverAddress = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramRelayAuthTicket appId.
         * @member {number} appId
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.appId = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket virtualPort.
         * @member {number} virtualPort
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.virtualPort = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket extraFields.
         * @member {Array.<CMsgSteamDatagramRelayAuthTicket.IExtraField>} extraFields
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.extraFields = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacyAuthorizedSteamId.
         * @member {number|Long} legacyAuthorizedSteamId
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacyAuthorizedSteamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacyGameserverSteamId.
         * @member {number|Long} legacyGameserverSteamId
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacyGameserverSteamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacyGameserverPopId.
         * @member {number} legacyGameserverPopId
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacyGameserverPopId = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacyAuthorizedClientIdentityBinary.
         * @member {Uint8Array} legacyAuthorizedClientIdentityBinary
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacyAuthorizedClientIdentityBinary = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacyGameserverIdentityBinary.
         * @member {Uint8Array} legacyGameserverIdentityBinary
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacyGameserverIdentityBinary = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramRelayAuthTicket instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramRelayAuthTicket=} [properties] Properties to set
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket instance
         */
        CMsgSteamDatagramRelayAuthTicket.create = function create(properties) {
            return new CMsgSteamDatagramRelayAuthTicket(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramRelayAuthTicket message. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramRelayAuthTicket} message CMsgSteamDatagramRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramRelayAuthTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeExpiry != null && Object.hasOwnProperty.call(message, "timeExpiry"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.timeExpiry);
            if (message.legacyAuthorizedSteamId != null && Object.hasOwnProperty.call(message, "legacyAuthorizedSteamId"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.legacyAuthorizedSteamId);
            if (message.authorizedPublicIp != null && Object.hasOwnProperty.call(message, "authorizedPublicIp"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.authorizedPublicIp);
            if (message.legacyGameserverSteamId != null && Object.hasOwnProperty.call(message, "legacyGameserverSteamId"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.legacyGameserverSteamId);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.appId);
            if (message.extraFields != null && message.extraFields.length)
                for (var i = 0; i < message.extraFields.length; ++i)
                    $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.encode(message.extraFields[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.legacyGameserverPopId != null && Object.hasOwnProperty.call(message, "legacyGameserverPopId"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.legacyGameserverPopId);
            if (message.virtualPort != null && Object.hasOwnProperty.call(message, "virtualPort"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.virtualPort);
            if (message.gameserverAddress != null && Object.hasOwnProperty.call(message, "gameserverAddress"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.gameserverAddress);
            if (message.legacyAuthorizedClientIdentityBinary != null && Object.hasOwnProperty.call(message, "legacyAuthorizedClientIdentityBinary"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.legacyAuthorizedClientIdentityBinary);
            if (message.legacyGameserverIdentityBinary != null && Object.hasOwnProperty.call(message, "legacyGameserverIdentityBinary"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.legacyGameserverIdentityBinary);
            if (message.authorizedClientIdentityString != null && Object.hasOwnProperty.call(message, "authorizedClientIdentityString"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.authorizedClientIdentityString);
            if (message.gameserverIdentityString != null && Object.hasOwnProperty.call(message, "gameserverIdentityString"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.gameserverIdentityString);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramRelayAuthTicket message, length delimited. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramRelayAuthTicket} message CMsgSteamDatagramRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramRelayAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramRelayAuthTicket message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramRelayAuthTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramRelayAuthTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.timeExpiry = reader.fixed32();
                        break;
                    }
                case 14: {
                        message.authorizedClientIdentityString = reader.string();
                        break;
                    }
                case 15: {
                        message.gameserverIdentityString = reader.string();
                        break;
                    }
                case 3: {
                        message.authorizedPublicIp = reader.fixed32();
                        break;
                    }
                case 11: {
                        message.gameserverAddress = reader.bytes();
                        break;
                    }
                case 7: {
                        message.appId = reader.uint32();
                        break;
                    }
                case 10: {
                        message.virtualPort = reader.uint32();
                        break;
                    }
                case 8: {
                        if (!(message.extraFields && message.extraFields.length))
                            message.extraFields = [];
                        message.extraFields.push($root.CMsgSteamDatagramRelayAuthTicket.ExtraField.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.legacyAuthorizedSteamId = reader.fixed64();
                        break;
                    }
                case 4: {
                        message.legacyGameserverSteamId = reader.fixed64();
                        break;
                    }
                case 9: {
                        message.legacyGameserverPopId = reader.fixed32();
                        break;
                    }
                case 12: {
                        message.legacyAuthorizedClientIdentityBinary = reader.bytes();
                        break;
                    }
                case 13: {
                        message.legacyGameserverIdentityBinary = reader.bytes();
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
         * Decodes a CMsgSteamDatagramRelayAuthTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramRelayAuthTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramRelayAuthTicket message.
         * @function verify
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramRelayAuthTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeExpiry != null && message.hasOwnProperty("timeExpiry"))
                if (!$util.isInteger(message.timeExpiry))
                    return "timeExpiry: integer expected";
            if (message.authorizedClientIdentityString != null && message.hasOwnProperty("authorizedClientIdentityString"))
                if (!$util.isString(message.authorizedClientIdentityString))
                    return "authorizedClientIdentityString: string expected";
            if (message.gameserverIdentityString != null && message.hasOwnProperty("gameserverIdentityString"))
                if (!$util.isString(message.gameserverIdentityString))
                    return "gameserverIdentityString: string expected";
            if (message.authorizedPublicIp != null && message.hasOwnProperty("authorizedPublicIp"))
                if (!$util.isInteger(message.authorizedPublicIp))
                    return "authorizedPublicIp: integer expected";
            if (message.gameserverAddress != null && message.hasOwnProperty("gameserverAddress"))
                if (!(message.gameserverAddress && typeof message.gameserverAddress.length === "number" || $util.isString(message.gameserverAddress)))
                    return "gameserverAddress: buffer expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId))
                    return "appId: integer expected";
            if (message.virtualPort != null && message.hasOwnProperty("virtualPort"))
                if (!$util.isInteger(message.virtualPort))
                    return "virtualPort: integer expected";
            if (message.extraFields != null && message.hasOwnProperty("extraFields")) {
                if (!Array.isArray(message.extraFields))
                    return "extraFields: array expected";
                for (var i = 0; i < message.extraFields.length; ++i) {
                    var error = $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.verify(message.extraFields[i]);
                    if (error)
                        return "extraFields." + error;
                }
            }
            if (message.legacyAuthorizedSteamId != null && message.hasOwnProperty("legacyAuthorizedSteamId"))
                if (!$util.isInteger(message.legacyAuthorizedSteamId) && !(message.legacyAuthorizedSteamId && $util.isInteger(message.legacyAuthorizedSteamId.low) && $util.isInteger(message.legacyAuthorizedSteamId.high)))
                    return "legacyAuthorizedSteamId: integer|Long expected";
            if (message.legacyGameserverSteamId != null && message.hasOwnProperty("legacyGameserverSteamId"))
                if (!$util.isInteger(message.legacyGameserverSteamId) && !(message.legacyGameserverSteamId && $util.isInteger(message.legacyGameserverSteamId.low) && $util.isInteger(message.legacyGameserverSteamId.high)))
                    return "legacyGameserverSteamId: integer|Long expected";
            if (message.legacyGameserverPopId != null && message.hasOwnProperty("legacyGameserverPopId"))
                if (!$util.isInteger(message.legacyGameserverPopId))
                    return "legacyGameserverPopId: integer expected";
            if (message.legacyAuthorizedClientIdentityBinary != null && message.hasOwnProperty("legacyAuthorizedClientIdentityBinary"))
                if (!(message.legacyAuthorizedClientIdentityBinary && typeof message.legacyAuthorizedClientIdentityBinary.length === "number" || $util.isString(message.legacyAuthorizedClientIdentityBinary)))
                    return "legacyAuthorizedClientIdentityBinary: buffer expected";
            if (message.legacyGameserverIdentityBinary != null && message.hasOwnProperty("legacyGameserverIdentityBinary"))
                if (!(message.legacyGameserverIdentityBinary && typeof message.legacyGameserverIdentityBinary.length === "number" || $util.isString(message.legacyGameserverIdentityBinary)))
                    return "legacyGameserverIdentityBinary: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramRelayAuthTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket
         */
        CMsgSteamDatagramRelayAuthTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramRelayAuthTicket)
                return object;
            var message = new $root.CMsgSteamDatagramRelayAuthTicket();
            if (object.timeExpiry != null)
                message.timeExpiry = object.timeExpiry >>> 0;
            if (object.authorizedClientIdentityString != null)
                message.authorizedClientIdentityString = String(object.authorizedClientIdentityString);
            if (object.gameserverIdentityString != null)
                message.gameserverIdentityString = String(object.gameserverIdentityString);
            if (object.authorizedPublicIp != null)
                message.authorizedPublicIp = object.authorizedPublicIp >>> 0;
            if (object.gameserverAddress != null)
                if (typeof object.gameserverAddress === "string")
                    $util.base64.decode(object.gameserverAddress, message.gameserverAddress = $util.newBuffer($util.base64.length(object.gameserverAddress)), 0);
                else if (object.gameserverAddress.length >= 0)
                    message.gameserverAddress = object.gameserverAddress;
            if (object.appId != null)
                message.appId = object.appId >>> 0;
            if (object.virtualPort != null)
                message.virtualPort = object.virtualPort >>> 0;
            if (object.extraFields) {
                if (!Array.isArray(object.extraFields))
                    throw TypeError(".CMsgSteamDatagramRelayAuthTicket.extraFields: array expected");
                message.extraFields = [];
                for (var i = 0; i < object.extraFields.length; ++i) {
                    if (typeof object.extraFields[i] !== "object")
                        throw TypeError(".CMsgSteamDatagramRelayAuthTicket.extraFields: object expected");
                    message.extraFields[i] = $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.fromObject(object.extraFields[i]);
                }
            }
            if (object.legacyAuthorizedSteamId != null)
                if ($util.Long)
                    (message.legacyAuthorizedSteamId = $util.Long.fromValue(object.legacyAuthorizedSteamId)).unsigned = false;
                else if (typeof object.legacyAuthorizedSteamId === "string")
                    message.legacyAuthorizedSteamId = parseInt(object.legacyAuthorizedSteamId, 10);
                else if (typeof object.legacyAuthorizedSteamId === "number")
                    message.legacyAuthorizedSteamId = object.legacyAuthorizedSteamId;
                else if (typeof object.legacyAuthorizedSteamId === "object")
                    message.legacyAuthorizedSteamId = new $util.LongBits(object.legacyAuthorizedSteamId.low >>> 0, object.legacyAuthorizedSteamId.high >>> 0).toNumber();
            if (object.legacyGameserverSteamId != null)
                if ($util.Long)
                    (message.legacyGameserverSteamId = $util.Long.fromValue(object.legacyGameserverSteamId)).unsigned = false;
                else if (typeof object.legacyGameserverSteamId === "string")
                    message.legacyGameserverSteamId = parseInt(object.legacyGameserverSteamId, 10);
                else if (typeof object.legacyGameserverSteamId === "number")
                    message.legacyGameserverSteamId = object.legacyGameserverSteamId;
                else if (typeof object.legacyGameserverSteamId === "object")
                    message.legacyGameserverSteamId = new $util.LongBits(object.legacyGameserverSteamId.low >>> 0, object.legacyGameserverSteamId.high >>> 0).toNumber();
            if (object.legacyGameserverPopId != null)
                message.legacyGameserverPopId = object.legacyGameserverPopId >>> 0;
            if (object.legacyAuthorizedClientIdentityBinary != null)
                if (typeof object.legacyAuthorizedClientIdentityBinary === "string")
                    $util.base64.decode(object.legacyAuthorizedClientIdentityBinary, message.legacyAuthorizedClientIdentityBinary = $util.newBuffer($util.base64.length(object.legacyAuthorizedClientIdentityBinary)), 0);
                else if (object.legacyAuthorizedClientIdentityBinary.length >= 0)
                    message.legacyAuthorizedClientIdentityBinary = object.legacyAuthorizedClientIdentityBinary;
            if (object.legacyGameserverIdentityBinary != null)
                if (typeof object.legacyGameserverIdentityBinary === "string")
                    $util.base64.decode(object.legacyGameserverIdentityBinary, message.legacyGameserverIdentityBinary = $util.newBuffer($util.base64.length(object.legacyGameserverIdentityBinary)), 0);
                else if (object.legacyGameserverIdentityBinary.length >= 0)
                    message.legacyGameserverIdentityBinary = object.legacyGameserverIdentityBinary;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramRelayAuthTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {CMsgSteamDatagramRelayAuthTicket} message CMsgSteamDatagramRelayAuthTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramRelayAuthTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.extraFields = [];
            if (options.defaults) {
                object.timeExpiry = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacyAuthorizedSteamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacyAuthorizedSteamId = options.longs === String ? "0" : 0;
                object.authorizedPublicIp = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacyGameserverSteamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacyGameserverSteamId = options.longs === String ? "0" : 0;
                object.appId = 0;
                object.legacyGameserverPopId = 0;
                object.virtualPort = 0;
                if (options.bytes === String)
                    object.gameserverAddress = "";
                else {
                    object.gameserverAddress = [];
                    if (options.bytes !== Array)
                        object.gameserverAddress = $util.newBuffer(object.gameserverAddress);
                }
                if (options.bytes === String)
                    object.legacyAuthorizedClientIdentityBinary = "";
                else {
                    object.legacyAuthorizedClientIdentityBinary = [];
                    if (options.bytes !== Array)
                        object.legacyAuthorizedClientIdentityBinary = $util.newBuffer(object.legacyAuthorizedClientIdentityBinary);
                }
                if (options.bytes === String)
                    object.legacyGameserverIdentityBinary = "";
                else {
                    object.legacyGameserverIdentityBinary = [];
                    if (options.bytes !== Array)
                        object.legacyGameserverIdentityBinary = $util.newBuffer(object.legacyGameserverIdentityBinary);
                }
                object.authorizedClientIdentityString = "";
                object.gameserverIdentityString = "";
            }
            if (message.timeExpiry != null && message.hasOwnProperty("timeExpiry"))
                object.timeExpiry = message.timeExpiry;
            if (message.legacyAuthorizedSteamId != null && message.hasOwnProperty("legacyAuthorizedSteamId"))
                if (typeof message.legacyAuthorizedSteamId === "number")
                    object.legacyAuthorizedSteamId = options.longs === String ? String(message.legacyAuthorizedSteamId) : message.legacyAuthorizedSteamId;
                else
                    object.legacyAuthorizedSteamId = options.longs === String ? $util.Long.prototype.toString.call(message.legacyAuthorizedSteamId) : options.longs === Number ? new $util.LongBits(message.legacyAuthorizedSteamId.low >>> 0, message.legacyAuthorizedSteamId.high >>> 0).toNumber() : message.legacyAuthorizedSteamId;
            if (message.authorizedPublicIp != null && message.hasOwnProperty("authorizedPublicIp"))
                object.authorizedPublicIp = message.authorizedPublicIp;
            if (message.legacyGameserverSteamId != null && message.hasOwnProperty("legacyGameserverSteamId"))
                if (typeof message.legacyGameserverSteamId === "number")
                    object.legacyGameserverSteamId = options.longs === String ? String(message.legacyGameserverSteamId) : message.legacyGameserverSteamId;
                else
                    object.legacyGameserverSteamId = options.longs === String ? $util.Long.prototype.toString.call(message.legacyGameserverSteamId) : options.longs === Number ? new $util.LongBits(message.legacyGameserverSteamId.low >>> 0, message.legacyGameserverSteamId.high >>> 0).toNumber() : message.legacyGameserverSteamId;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.extraFields && message.extraFields.length) {
                object.extraFields = [];
                for (var j = 0; j < message.extraFields.length; ++j)
                    object.extraFields[j] = $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.toObject(message.extraFields[j], options);
            }
            if (message.legacyGameserverPopId != null && message.hasOwnProperty("legacyGameserverPopId"))
                object.legacyGameserverPopId = message.legacyGameserverPopId;
            if (message.virtualPort != null && message.hasOwnProperty("virtualPort"))
                object.virtualPort = message.virtualPort;
            if (message.gameserverAddress != null && message.hasOwnProperty("gameserverAddress"))
                object.gameserverAddress = options.bytes === String ? $util.base64.encode(message.gameserverAddress, 0, message.gameserverAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.gameserverAddress) : message.gameserverAddress;
            if (message.legacyAuthorizedClientIdentityBinary != null && message.hasOwnProperty("legacyAuthorizedClientIdentityBinary"))
                object.legacyAuthorizedClientIdentityBinary = options.bytes === String ? $util.base64.encode(message.legacyAuthorizedClientIdentityBinary, 0, message.legacyAuthorizedClientIdentityBinary.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacyAuthorizedClientIdentityBinary) : message.legacyAuthorizedClientIdentityBinary;
            if (message.legacyGameserverIdentityBinary != null && message.hasOwnProperty("legacyGameserverIdentityBinary"))
                object.legacyGameserverIdentityBinary = options.bytes === String ? $util.base64.encode(message.legacyGameserverIdentityBinary, 0, message.legacyGameserverIdentityBinary.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacyGameserverIdentityBinary) : message.legacyGameserverIdentityBinary;
            if (message.authorizedClientIdentityString != null && message.hasOwnProperty("authorizedClientIdentityString"))
                object.authorizedClientIdentityString = message.authorizedClientIdentityString;
            if (message.gameserverIdentityString != null && message.hasOwnProperty("gameserverIdentityString"))
                object.gameserverIdentityString = message.gameserverIdentityString;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramRelayAuthTicket to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramRelayAuthTicket
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramRelayAuthTicket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramRelayAuthTicket";
        };
    
        CMsgSteamDatagramRelayAuthTicket.ExtraField = (function() {
    
            /**
             * Properties of an ExtraField.
             * @memberof CMsgSteamDatagramRelayAuthTicket
             * @interface IExtraField
             * @property {string|null} [name] ExtraField name
             * @property {string|null} [stringValue] ExtraField stringValue
             * @property {number|Long|null} [int64Value] ExtraField int64Value
             * @property {number|Long|null} [fixed64Value] ExtraField fixed64Value
             */
    
            /**
             * Constructs a new ExtraField.
             * @memberof CMsgSteamDatagramRelayAuthTicket
             * @classdesc Represents an ExtraField.
             * @implements IExtraField
             * @constructor
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField=} [properties] Properties to set
             */
            function ExtraField(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExtraField name.
             * @member {string} name
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.name = "";
    
            /**
             * ExtraField stringValue.
             * @member {string} stringValue
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.stringValue = "";
    
            /**
             * ExtraField int64Value.
             * @member {number|Long} int64Value
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.int64Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ExtraField fixed64Value.
             * @member {number|Long} fixed64Value
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.fixed64Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new ExtraField instance using the specified properties.
             * @function create
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField=} [properties] Properties to set
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField instance
             */
            ExtraField.create = function create(properties) {
                return new ExtraField(properties);
            };
    
            /**
             * Encodes the specified ExtraField message. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.ExtraField.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField} message ExtraField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraField.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.stringValue);
                if (message.int64Value != null && Object.hasOwnProperty.call(message, "int64Value"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.int64Value);
                if (message.fixed64Value != null && Object.hasOwnProperty.call(message, "fixed64Value"))
                    writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.fixed64Value);
                return writer;
            };
    
            /**
             * Encodes the specified ExtraField message, length delimited. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.ExtraField.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField} message ExtraField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraField.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ExtraField message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraField.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramRelayAuthTicket.ExtraField();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.stringValue = reader.string();
                            break;
                        }
                    case 3: {
                            message.int64Value = reader.sint64();
                            break;
                        }
                    case 5: {
                            message.fixed64Value = reader.fixed64();
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
             * Decodes an ExtraField message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraField.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ExtraField message.
             * @function verify
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraField.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                if (message.int64Value != null && message.hasOwnProperty("int64Value"))
                    if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                        return "int64Value: integer|Long expected";
                if (message.fixed64Value != null && message.hasOwnProperty("fixed64Value"))
                    if (!$util.isInteger(message.fixed64Value) && !(message.fixed64Value && $util.isInteger(message.fixed64Value.low) && $util.isInteger(message.fixed64Value.high)))
                        return "fixed64Value: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an ExtraField message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField
             */
            ExtraField.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamDatagramRelayAuthTicket.ExtraField)
                    return object;
                var message = new $root.CMsgSteamDatagramRelayAuthTicket.ExtraField();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.int64Value != null)
                    if ($util.Long)
                        (message.int64Value = $util.Long.fromValue(object.int64Value)).unsigned = false;
                    else if (typeof object.int64Value === "string")
                        message.int64Value = parseInt(object.int64Value, 10);
                    else if (typeof object.int64Value === "number")
                        message.int64Value = object.int64Value;
                    else if (typeof object.int64Value === "object")
                        message.int64Value = new $util.LongBits(object.int64Value.low >>> 0, object.int64Value.high >>> 0).toNumber();
                if (object.fixed64Value != null)
                    if ($util.Long)
                        (message.fixed64Value = $util.Long.fromValue(object.fixed64Value)).unsigned = false;
                    else if (typeof object.fixed64Value === "string")
                        message.fixed64Value = parseInt(object.fixed64Value, 10);
                    else if (typeof object.fixed64Value === "number")
                        message.fixed64Value = object.fixed64Value;
                    else if (typeof object.fixed64Value === "object")
                        message.fixed64Value = new $util.LongBits(object.fixed64Value.low >>> 0, object.fixed64Value.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from an ExtraField message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.ExtraField} message ExtraField
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraField.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.stringValue = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.int64Value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.int64Value = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.fixed64Value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.fixed64Value = options.longs === String ? "0" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = message.stringValue;
                if (message.int64Value != null && message.hasOwnProperty("int64Value"))
                    if (typeof message.int64Value === "number")
                        object.int64Value = options.longs === String ? String(message.int64Value) : message.int64Value;
                    else
                        object.int64Value = options.longs === String ? $util.Long.prototype.toString.call(message.int64Value) : options.longs === Number ? new $util.LongBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0).toNumber() : message.int64Value;
                if (message.fixed64Value != null && message.hasOwnProperty("fixed64Value"))
                    if (typeof message.fixed64Value === "number")
                        object.fixed64Value = options.longs === String ? String(message.fixed64Value) : message.fixed64Value;
                    else
                        object.fixed64Value = options.longs === String ? $util.Long.prototype.toString.call(message.fixed64Value) : options.longs === Number ? new $util.LongBits(message.fixed64Value.low >>> 0, message.fixed64Value.high >>> 0).toNumber() : message.fixed64Value;
                return object;
            };
    
            /**
             * Converts this ExtraField to JSON.
             * @function toJSON
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraField.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ExtraField
             * @function getTypeUrl
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExtraField.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSteamDatagramRelayAuthTicket.ExtraField";
            };
    
            return ExtraField;
        })();
    
        return CMsgSteamDatagramRelayAuthTicket;
    })();
    
    $root.CMsgSteamDatagramSignedRelayAuthTicket = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSignedRelayAuthTicket.
         * @exports ICMsgSteamDatagramSignedRelayAuthTicket
         * @interface ICMsgSteamDatagramSignedRelayAuthTicket
         * @property {number|Long|null} [reservedDoNotUse] CMsgSteamDatagramSignedRelayAuthTicket reservedDoNotUse
         * @property {Uint8Array|null} [ticket] CMsgSteamDatagramSignedRelayAuthTicket ticket
         * @property {Uint8Array|null} [signature] CMsgSteamDatagramSignedRelayAuthTicket signature
         * @property {number|Long|null} [keyId] CMsgSteamDatagramSignedRelayAuthTicket keyId
         * @property {Array.<ICMsgSteamDatagramCertificateSigned>|null} [certs] CMsgSteamDatagramSignedRelayAuthTicket certs
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSignedRelayAuthTicket.
         * @exports CMsgSteamDatagramSignedRelayAuthTicket
         * @classdesc Represents a CMsgSteamDatagramSignedRelayAuthTicket.
         * @implements ICMsgSteamDatagramSignedRelayAuthTicket
         * @constructor
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket=} [properties] Properties to set
         */
        function CMsgSteamDatagramSignedRelayAuthTicket(properties) {
            this.certs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket reservedDoNotUse.
         * @member {number|Long} reservedDoNotUse
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.reservedDoNotUse = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket ticket.
         * @member {Uint8Array} ticket
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.ticket = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket signature.
         * @member {Uint8Array} signature
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.signature = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket keyId.
         * @member {number|Long} keyId
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.keyId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket certs.
         * @member {Array.<ICMsgSteamDatagramCertificateSigned>} certs
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.certs = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramSignedRelayAuthTicket instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.create = function create(properties) {
            return new CMsgSteamDatagramSignedRelayAuthTicket(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedRelayAuthTicket message. Does not implicitly {@link CMsgSteamDatagramSignedRelayAuthTicket.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket} message CMsgSteamDatagramSignedRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedRelayAuthTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reservedDoNotUse != null && Object.hasOwnProperty.call(message, "reservedDoNotUse"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.reservedDoNotUse);
            if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.keyId);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ticket);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
            if (message.certs != null && message.certs.length)
                for (var i = 0; i < message.certs.length; ++i)
                    $root.CMsgSteamDatagramCertificateSigned.encode(message.certs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedRelayAuthTicket message, length delimited. Does not implicitly {@link CMsgSteamDatagramSignedRelayAuthTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket} message CMsgSteamDatagramSignedRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedRelayAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSignedRelayAuthTicket message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedRelayAuthTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSignedRelayAuthTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reservedDoNotUse = reader.fixed64();
                        break;
                    }
                case 3: {
                        message.ticket = reader.bytes();
                        break;
                    }
                case 4: {
                        message.signature = reader.bytes();
                        break;
                    }
                case 2: {
                        message.keyId = reader.fixed64();
                        break;
                    }
                case 5: {
                        if (!(message.certs && message.certs.length))
                            message.certs = [];
                        message.certs.push($root.CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32()));
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
         * Decodes a CMsgSteamDatagramSignedRelayAuthTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedRelayAuthTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSignedRelayAuthTicket message.
         * @function verify
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSignedRelayAuthTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reservedDoNotUse != null && message.hasOwnProperty("reservedDoNotUse"))
                if (!$util.isInteger(message.reservedDoNotUse) && !(message.reservedDoNotUse && $util.isInteger(message.reservedDoNotUse.low) && $util.isInteger(message.reservedDoNotUse.high)))
                    return "reservedDoNotUse: integer|Long expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                    return "ticket: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            if (message.keyId != null && message.hasOwnProperty("keyId"))
                if (!$util.isInteger(message.keyId) && !(message.keyId && $util.isInteger(message.keyId.low) && $util.isInteger(message.keyId.high)))
                    return "keyId: integer|Long expected";
            if (message.certs != null && message.hasOwnProperty("certs")) {
                if (!Array.isArray(message.certs))
                    return "certs: array expected";
                for (var i = 0; i < message.certs.length; ++i) {
                    var error = $root.CMsgSteamDatagramCertificateSigned.verify(message.certs[i]);
                    if (error)
                        return "certs." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSignedRelayAuthTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket
         */
        CMsgSteamDatagramSignedRelayAuthTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSignedRelayAuthTicket)
                return object;
            var message = new $root.CMsgSteamDatagramSignedRelayAuthTicket();
            if (object.reservedDoNotUse != null)
                if ($util.Long)
                    (message.reservedDoNotUse = $util.Long.fromValue(object.reservedDoNotUse)).unsigned = false;
                else if (typeof object.reservedDoNotUse === "string")
                    message.reservedDoNotUse = parseInt(object.reservedDoNotUse, 10);
                else if (typeof object.reservedDoNotUse === "number")
                    message.reservedDoNotUse = object.reservedDoNotUse;
                else if (typeof object.reservedDoNotUse === "object")
                    message.reservedDoNotUse = new $util.LongBits(object.reservedDoNotUse.low >>> 0, object.reservedDoNotUse.high >>> 0).toNumber();
            if (object.ticket != null)
                if (typeof object.ticket === "string")
                    $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
                else if (object.ticket.length >= 0)
                    message.ticket = object.ticket;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            if (object.keyId != null)
                if ($util.Long)
                    (message.keyId = $util.Long.fromValue(object.keyId)).unsigned = false;
                else if (typeof object.keyId === "string")
                    message.keyId = parseInt(object.keyId, 10);
                else if (typeof object.keyId === "number")
                    message.keyId = object.keyId;
                else if (typeof object.keyId === "object")
                    message.keyId = new $util.LongBits(object.keyId.low >>> 0, object.keyId.high >>> 0).toNumber();
            if (object.certs) {
                if (!Array.isArray(object.certs))
                    throw TypeError(".CMsgSteamDatagramSignedRelayAuthTicket.certs: array expected");
                message.certs = [];
                for (var i = 0; i < object.certs.length; ++i) {
                    if (typeof object.certs[i] !== "object")
                        throw TypeError(".CMsgSteamDatagramSignedRelayAuthTicket.certs: object expected");
                    message.certs[i] = $root.CMsgSteamDatagramCertificateSigned.fromObject(object.certs[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSignedRelayAuthTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {CMsgSteamDatagramSignedRelayAuthTicket} message CMsgSteamDatagramSignedRelayAuthTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSignedRelayAuthTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.certs = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reservedDoNotUse = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reservedDoNotUse = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.keyId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.keyId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.ticket = "";
                else {
                    object.ticket = [];
                    if (options.bytes !== Array)
                        object.ticket = $util.newBuffer(object.ticket);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.reservedDoNotUse != null && message.hasOwnProperty("reservedDoNotUse"))
                if (typeof message.reservedDoNotUse === "number")
                    object.reservedDoNotUse = options.longs === String ? String(message.reservedDoNotUse) : message.reservedDoNotUse;
                else
                    object.reservedDoNotUse = options.longs === String ? $util.Long.prototype.toString.call(message.reservedDoNotUse) : options.longs === Number ? new $util.LongBits(message.reservedDoNotUse.low >>> 0, message.reservedDoNotUse.high >>> 0).toNumber() : message.reservedDoNotUse;
            if (message.keyId != null && message.hasOwnProperty("keyId"))
                if (typeof message.keyId === "number")
                    object.keyId = options.longs === String ? String(message.keyId) : message.keyId;
                else
                    object.keyId = options.longs === String ? $util.Long.prototype.toString.call(message.keyId) : options.longs === Number ? new $util.LongBits(message.keyId.low >>> 0, message.keyId.high >>> 0).toNumber() : message.keyId;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = options.bytes === String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.ticket) : message.ticket;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            if (message.certs && message.certs.length) {
                object.certs = [];
                for (var j = 0; j < message.certs.length; ++j)
                    object.certs[j] = $root.CMsgSteamDatagramCertificateSigned.toObject(message.certs[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSignedRelayAuthTicket to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramSignedRelayAuthTicket
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramSignedRelayAuthTicket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramSignedRelayAuthTicket";
        };
    
        return CMsgSteamDatagramSignedRelayAuthTicket;
    })();
    
    $root.CMsgSteamDatagramCachedCredentialsForApp = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCachedCredentialsForApp.
         * @exports ICMsgSteamDatagramCachedCredentialsForApp
         * @interface ICMsgSteamDatagramCachedCredentialsForApp
         * @property {Uint8Array|null} [privateKey] CMsgSteamDatagramCachedCredentialsForApp privateKey
         * @property {Uint8Array|null} [cert] CMsgSteamDatagramCachedCredentialsForApp cert
         * @property {Array.<Uint8Array>|null} [relayTickets] CMsgSteamDatagramCachedCredentialsForApp relayTickets
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCachedCredentialsForApp.
         * @exports CMsgSteamDatagramCachedCredentialsForApp
         * @classdesc Represents a CMsgSteamDatagramCachedCredentialsForApp.
         * @implements ICMsgSteamDatagramCachedCredentialsForApp
         * @constructor
         * @param {ICMsgSteamDatagramCachedCredentialsForApp=} [properties] Properties to set
         */
        function CMsgSteamDatagramCachedCredentialsForApp(properties) {
            this.relayTickets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCachedCredentialsForApp privateKey.
         * @member {Uint8Array} privateKey
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.privateKey = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCachedCredentialsForApp cert.
         * @member {Uint8Array} cert
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.cert = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCachedCredentialsForApp relayTickets.
         * @member {Array.<Uint8Array>} relayTickets
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.relayTickets = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramCachedCredentialsForApp instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {ICMsgSteamDatagramCachedCredentialsForApp=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.create = function create(properties) {
            return new CMsgSteamDatagramCachedCredentialsForApp(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCachedCredentialsForApp message. Does not implicitly {@link CMsgSteamDatagramCachedCredentialsForApp.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {ICMsgSteamDatagramCachedCredentialsForApp} message CMsgSteamDatagramCachedCredentialsForApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCachedCredentialsForApp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.privateKey);
            if (message.cert != null && Object.hasOwnProperty.call(message, "cert"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cert);
            if (message.relayTickets != null && message.relayTickets.length)
                for (var i = 0; i < message.relayTickets.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.relayTickets[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCachedCredentialsForApp message, length delimited. Does not implicitly {@link CMsgSteamDatagramCachedCredentialsForApp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {ICMsgSteamDatagramCachedCredentialsForApp} message CMsgSteamDatagramCachedCredentialsForApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCachedCredentialsForApp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCachedCredentialsForApp message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCachedCredentialsForApp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCachedCredentialsForApp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.privateKey = reader.bytes();
                        break;
                    }
                case 2: {
                        message.cert = reader.bytes();
                        break;
                    }
                case 3: {
                        if (!(message.relayTickets && message.relayTickets.length))
                            message.relayTickets = [];
                        message.relayTickets.push(reader.bytes());
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
         * Decodes a CMsgSteamDatagramCachedCredentialsForApp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCachedCredentialsForApp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCachedCredentialsForApp message.
         * @function verify
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCachedCredentialsForApp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            if (message.cert != null && message.hasOwnProperty("cert"))
                if (!(message.cert && typeof message.cert.length === "number" || $util.isString(message.cert)))
                    return "cert: buffer expected";
            if (message.relayTickets != null && message.hasOwnProperty("relayTickets")) {
                if (!Array.isArray(message.relayTickets))
                    return "relayTickets: array expected";
                for (var i = 0; i < message.relayTickets.length; ++i)
                    if (!(message.relayTickets[i] && typeof message.relayTickets[i].length === "number" || $util.isString(message.relayTickets[i])))
                        return "relayTickets: buffer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCachedCredentialsForApp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp
         */
        CMsgSteamDatagramCachedCredentialsForApp.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCachedCredentialsForApp)
                return object;
            var message = new $root.CMsgSteamDatagramCachedCredentialsForApp();
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length >= 0)
                    message.privateKey = object.privateKey;
            if (object.cert != null)
                if (typeof object.cert === "string")
                    $util.base64.decode(object.cert, message.cert = $util.newBuffer($util.base64.length(object.cert)), 0);
                else if (object.cert.length >= 0)
                    message.cert = object.cert;
            if (object.relayTickets) {
                if (!Array.isArray(object.relayTickets))
                    throw TypeError(".CMsgSteamDatagramCachedCredentialsForApp.relayTickets: array expected");
                message.relayTickets = [];
                for (var i = 0; i < object.relayTickets.length; ++i)
                    if (typeof object.relayTickets[i] === "string")
                        $util.base64.decode(object.relayTickets[i], message.relayTickets[i] = $util.newBuffer($util.base64.length(object.relayTickets[i])), 0);
                    else if (object.relayTickets[i].length >= 0)
                        message.relayTickets[i] = object.relayTickets[i];
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCachedCredentialsForApp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {CMsgSteamDatagramCachedCredentialsForApp} message CMsgSteamDatagramCachedCredentialsForApp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCachedCredentialsForApp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.relayTickets = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.privateKey = "";
                else {
                    object.privateKey = [];
                    if (options.bytes !== Array)
                        object.privateKey = $util.newBuffer(object.privateKey);
                }
                if (options.bytes === String)
                    object.cert = "";
                else {
                    object.cert = [];
                    if (options.bytes !== Array)
                        object.cert = $util.newBuffer(object.cert);
                }
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = options.bytes === String ? $util.base64.encode(message.cert, 0, message.cert.length) : options.bytes === Array ? Array.prototype.slice.call(message.cert) : message.cert;
            if (message.relayTickets && message.relayTickets.length) {
                object.relayTickets = [];
                for (var j = 0; j < message.relayTickets.length; ++j)
                    object.relayTickets[j] = options.bytes === String ? $util.base64.encode(message.relayTickets[j], 0, message.relayTickets[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.relayTickets[j]) : message.relayTickets[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCachedCredentialsForApp to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramCachedCredentialsForApp
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramCachedCredentialsForApp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramCachedCredentialsForApp";
        };
    
        return CMsgSteamDatagramCachedCredentialsForApp;
    })();
    
    $root.CMsgSteamDatagramGameCoordinatorServerLogin = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramGameCoordinatorServerLogin.
         * @exports ICMsgSteamDatagramGameCoordinatorServerLogin
         * @interface ICMsgSteamDatagramGameCoordinatorServerLogin
         * @property {number|null} [timeGenerated] CMsgSteamDatagramGameCoordinatorServerLogin timeGenerated
         * @property {number|null} [appid] CMsgSteamDatagramGameCoordinatorServerLogin appid
         * @property {Uint8Array|null} [routing] CMsgSteamDatagramGameCoordinatorServerLogin routing
         * @property {Uint8Array|null} [appdata] CMsgSteamDatagramGameCoordinatorServerLogin appdata
         * @property {Uint8Array|null} [legacyIdentityBinary] CMsgSteamDatagramGameCoordinatorServerLogin legacyIdentityBinary
         * @property {string|null} [identityString] CMsgSteamDatagramGameCoordinatorServerLogin identityString
         * @property {number|Long|null} [dummySteamId] CMsgSteamDatagramGameCoordinatorServerLogin dummySteamId
         */
    
        /**
         * Constructs a new CMsgSteamDatagramGameCoordinatorServerLogin.
         * @exports CMsgSteamDatagramGameCoordinatorServerLogin
         * @classdesc Represents a CMsgSteamDatagramGameCoordinatorServerLogin.
         * @implements ICMsgSteamDatagramGameCoordinatorServerLogin
         * @constructor
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin=} [properties] Properties to set
         */
        function CMsgSteamDatagramGameCoordinatorServerLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin timeGenerated.
         * @member {number} timeGenerated
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.timeGenerated = 0;
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin appid.
         * @member {number} appid
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.appid = 0;
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin routing.
         * @member {Uint8Array} routing
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.routing = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin appdata.
         * @member {Uint8Array} appdata
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.appdata = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin legacyIdentityBinary.
         * @member {Uint8Array} legacyIdentityBinary
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.legacyIdentityBinary = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin identityString.
         * @member {string} identityString
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.identityString = "";
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin dummySteamId.
         * @member {number|Long} dummySteamId
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.dummySteamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgSteamDatagramGameCoordinatorServerLogin instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin=} [properties] Properties to set
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.create = function create(properties) {
            return new CMsgSteamDatagramGameCoordinatorServerLogin(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameCoordinatorServerLogin message. Does not implicitly {@link CMsgSteamDatagramGameCoordinatorServerLogin.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin} message CMsgSteamDatagramGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeGenerated != null && Object.hasOwnProperty.call(message, "timeGenerated"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timeGenerated);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.routing != null && Object.hasOwnProperty.call(message, "routing"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.routing);
            if (message.appdata != null && Object.hasOwnProperty.call(message, "appdata"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.appdata);
            if (message.legacyIdentityBinary != null && Object.hasOwnProperty.call(message, "legacyIdentityBinary"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.legacyIdentityBinary);
            if (message.identityString != null && Object.hasOwnProperty.call(message, "identityString"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.identityString);
            if (message.dummySteamId != null && Object.hasOwnProperty.call(message, "dummySteamId"))
                writer.uint32(/* id 99, wireType 1 =*/793).fixed64(message.dummySteamId);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameCoordinatorServerLogin message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameCoordinatorServerLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin} message CMsgSteamDatagramGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameCoordinatorServerLogin message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramGameCoordinatorServerLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.timeGenerated = reader.uint32();
                        break;
                    }
                case 2: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.routing = reader.bytes();
                        break;
                    }
                case 4: {
                        message.appdata = reader.bytes();
                        break;
                    }
                case 5: {
                        message.legacyIdentityBinary = reader.bytes();
                        break;
                    }
                case 6: {
                        message.identityString = reader.string();
                        break;
                    }
                case 99: {
                        message.dummySteamId = reader.fixed64();
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
         * Decodes a CMsgSteamDatagramGameCoordinatorServerLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramGameCoordinatorServerLogin message.
         * @function verify
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeGenerated != null && message.hasOwnProperty("timeGenerated"))
                if (!$util.isInteger(message.timeGenerated))
                    return "timeGenerated: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.routing != null && message.hasOwnProperty("routing"))
                if (!(message.routing && typeof message.routing.length === "number" || $util.isString(message.routing)))
                    return "routing: buffer expected";
            if (message.appdata != null && message.hasOwnProperty("appdata"))
                if (!(message.appdata && typeof message.appdata.length === "number" || $util.isString(message.appdata)))
                    return "appdata: buffer expected";
            if (message.legacyIdentityBinary != null && message.hasOwnProperty("legacyIdentityBinary"))
                if (!(message.legacyIdentityBinary && typeof message.legacyIdentityBinary.length === "number" || $util.isString(message.legacyIdentityBinary)))
                    return "legacyIdentityBinary: buffer expected";
            if (message.identityString != null && message.hasOwnProperty("identityString"))
                if (!$util.isString(message.identityString))
                    return "identityString: string expected";
            if (message.dummySteamId != null && message.hasOwnProperty("dummySteamId"))
                if (!$util.isInteger(message.dummySteamId) && !(message.dummySteamId && $util.isInteger(message.dummySteamId.low) && $util.isInteger(message.dummySteamId.high)))
                    return "dummySteamId: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramGameCoordinatorServerLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramGameCoordinatorServerLogin)
                return object;
            var message = new $root.CMsgSteamDatagramGameCoordinatorServerLogin();
            if (object.timeGenerated != null)
                message.timeGenerated = object.timeGenerated >>> 0;
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.routing != null)
                if (typeof object.routing === "string")
                    $util.base64.decode(object.routing, message.routing = $util.newBuffer($util.base64.length(object.routing)), 0);
                else if (object.routing.length >= 0)
                    message.routing = object.routing;
            if (object.appdata != null)
                if (typeof object.appdata === "string")
                    $util.base64.decode(object.appdata, message.appdata = $util.newBuffer($util.base64.length(object.appdata)), 0);
                else if (object.appdata.length >= 0)
                    message.appdata = object.appdata;
            if (object.legacyIdentityBinary != null)
                if (typeof object.legacyIdentityBinary === "string")
                    $util.base64.decode(object.legacyIdentityBinary, message.legacyIdentityBinary = $util.newBuffer($util.base64.length(object.legacyIdentityBinary)), 0);
                else if (object.legacyIdentityBinary.length >= 0)
                    message.legacyIdentityBinary = object.legacyIdentityBinary;
            if (object.identityString != null)
                message.identityString = String(object.identityString);
            if (object.dummySteamId != null)
                if ($util.Long)
                    (message.dummySteamId = $util.Long.fromValue(object.dummySteamId)).unsigned = false;
                else if (typeof object.dummySteamId === "string")
                    message.dummySteamId = parseInt(object.dummySteamId, 10);
                else if (typeof object.dummySteamId === "number")
                    message.dummySteamId = object.dummySteamId;
                else if (typeof object.dummySteamId === "object")
                    message.dummySteamId = new $util.LongBits(object.dummySteamId.low >>> 0, object.dummySteamId.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramGameCoordinatorServerLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {CMsgSteamDatagramGameCoordinatorServerLogin} message CMsgSteamDatagramGameCoordinatorServerLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timeGenerated = 0;
                object.appid = 0;
                if (options.bytes === String)
                    object.routing = "";
                else {
                    object.routing = [];
                    if (options.bytes !== Array)
                        object.routing = $util.newBuffer(object.routing);
                }
                if (options.bytes === String)
                    object.appdata = "";
                else {
                    object.appdata = [];
                    if (options.bytes !== Array)
                        object.appdata = $util.newBuffer(object.appdata);
                }
                if (options.bytes === String)
                    object.legacyIdentityBinary = "";
                else {
                    object.legacyIdentityBinary = [];
                    if (options.bytes !== Array)
                        object.legacyIdentityBinary = $util.newBuffer(object.legacyIdentityBinary);
                }
                object.identityString = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dummySteamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dummySteamId = options.longs === String ? "0" : 0;
            }
            if (message.timeGenerated != null && message.hasOwnProperty("timeGenerated"))
                object.timeGenerated = message.timeGenerated;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.routing != null && message.hasOwnProperty("routing"))
                object.routing = options.bytes === String ? $util.base64.encode(message.routing, 0, message.routing.length) : options.bytes === Array ? Array.prototype.slice.call(message.routing) : message.routing;
            if (message.appdata != null && message.hasOwnProperty("appdata"))
                object.appdata = options.bytes === String ? $util.base64.encode(message.appdata, 0, message.appdata.length) : options.bytes === Array ? Array.prototype.slice.call(message.appdata) : message.appdata;
            if (message.legacyIdentityBinary != null && message.hasOwnProperty("legacyIdentityBinary"))
                object.legacyIdentityBinary = options.bytes === String ? $util.base64.encode(message.legacyIdentityBinary, 0, message.legacyIdentityBinary.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacyIdentityBinary) : message.legacyIdentityBinary;
            if (message.identityString != null && message.hasOwnProperty("identityString"))
                object.identityString = message.identityString;
            if (message.dummySteamId != null && message.hasOwnProperty("dummySteamId"))
                if (typeof message.dummySteamId === "number")
                    object.dummySteamId = options.longs === String ? String(message.dummySteamId) : message.dummySteamId;
                else
                    object.dummySteamId = options.longs === String ? $util.Long.prototype.toString.call(message.dummySteamId) : options.longs === Number ? new $util.LongBits(message.dummySteamId.low >>> 0, message.dummySteamId.high >>> 0).toNumber() : message.dummySteamId;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramGameCoordinatorServerLogin to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramGameCoordinatorServerLogin
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramGameCoordinatorServerLogin";
        };
    
        return CMsgSteamDatagramGameCoordinatorServerLogin;
    })();
    
    $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSignedGameCoordinatorServerLogin.
         * @exports ICMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @interface ICMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @property {ICMsgSteamDatagramCertificateSigned|null} [cert] CMsgSteamDatagramSignedGameCoordinatorServerLogin cert
         * @property {Uint8Array|null} [login] CMsgSteamDatagramSignedGameCoordinatorServerLogin login
         * @property {Uint8Array|null} [signature] CMsgSteamDatagramSignedGameCoordinatorServerLogin signature
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSignedGameCoordinatorServerLogin.
         * @exports CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @classdesc Represents a CMsgSteamDatagramSignedGameCoordinatorServerLogin.
         * @implements ICMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @constructor
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin=} [properties] Properties to set
         */
        function CMsgSteamDatagramSignedGameCoordinatorServerLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSignedGameCoordinatorServerLogin cert.
         * @member {ICMsgSteamDatagramCertificateSigned|null|undefined} cert
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.cert = null;
    
        /**
         * CMsgSteamDatagramSignedGameCoordinatorServerLogin login.
         * @member {Uint8Array} login
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.login = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSignedGameCoordinatorServerLogin signature.
         * @member {Uint8Array} signature
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.signature = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramSignedGameCoordinatorServerLogin instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.create = function create(properties) {
            return new CMsgSteamDatagramSignedGameCoordinatorServerLogin(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedGameCoordinatorServerLogin message. Does not implicitly {@link CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin} message CMsgSteamDatagramSignedGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cert != null && Object.hasOwnProperty.call(message, "cert"))
                $root.CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.login);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedGameCoordinatorServerLogin message, length delimited. Does not implicitly {@link CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin} message CMsgSteamDatagramSignedGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cert = $root.CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.login = reader.bytes();
                        break;
                    }
                case 3: {
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
         * Decodes a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSignedGameCoordinatorServerLogin message.
         * @function verify
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cert != null && message.hasOwnProperty("cert")) {
                var error = $root.CMsgSteamDatagramCertificateSigned.verify(message.cert);
                if (error)
                    return "cert." + error;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                if (!(message.login && typeof message.login.length === "number" || $util.isString(message.login)))
                    return "login: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin)
                return object;
            var message = new $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin();
            if (object.cert != null) {
                if (typeof object.cert !== "object")
                    throw TypeError(".CMsgSteamDatagramSignedGameCoordinatorServerLogin.cert: object expected");
                message.cert = $root.CMsgSteamDatagramCertificateSigned.fromObject(object.cert);
            }
            if (object.login != null)
                if (typeof object.login === "string")
                    $util.base64.decode(object.login, message.login = $util.newBuffer($util.base64.length(object.login)), 0);
                else if (object.login.length >= 0)
                    message.login = object.login;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSignedGameCoordinatorServerLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {CMsgSteamDatagramSignedGameCoordinatorServerLogin} message CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cert = null;
                if (options.bytes === String)
                    object.login = "";
                else {
                    object.login = [];
                    if (options.bytes !== Array)
                        object.login = $util.newBuffer(object.login);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = $root.CMsgSteamDatagramCertificateSigned.toObject(message.cert, options);
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = options.bytes === String ? $util.base64.encode(message.login, 0, message.login.length) : options.bytes === Array ? Array.prototype.slice.call(message.login) : message.login;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSignedGameCoordinatorServerLogin to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramSignedGameCoordinatorServerLogin";
        };
    
        return CMsgSteamDatagramSignedGameCoordinatorServerLogin;
    })();
    
    $root.CMsgSteamDatagramHostedServerAddressPlaintext = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramHostedServerAddressPlaintext.
         * @exports ICMsgSteamDatagramHostedServerAddressPlaintext
         * @interface ICMsgSteamDatagramHostedServerAddressPlaintext
         * @property {number|null} [ipv4] CMsgSteamDatagramHostedServerAddressPlaintext ipv4
         * @property {Uint8Array|null} [ipv6] CMsgSteamDatagramHostedServerAddressPlaintext ipv6
         * @property {number|null} [port] CMsgSteamDatagramHostedServerAddressPlaintext port
         * @property {number|Long|null} [routingSecret] CMsgSteamDatagramHostedServerAddressPlaintext routingSecret
         * @property {number|null} [protocolVersion] CMsgSteamDatagramHostedServerAddressPlaintext protocolVersion
         */
    
        /**
         * Constructs a new CMsgSteamDatagramHostedServerAddressPlaintext.
         * @exports CMsgSteamDatagramHostedServerAddressPlaintext
         * @classdesc Represents a CMsgSteamDatagramHostedServerAddressPlaintext.
         * @implements ICMsgSteamDatagramHostedServerAddressPlaintext
         * @constructor
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext=} [properties] Properties to set
         */
        function CMsgSteamDatagramHostedServerAddressPlaintext(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext ipv4.
         * @member {number} ipv4
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.ipv4 = 0;
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext ipv6.
         * @member {Uint8Array} ipv6
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.ipv6 = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext port.
         * @member {number} port
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.port = 0;
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext routingSecret.
         * @member {number|Long} routingSecret
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.routingSecret = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext protocolVersion.
         * @member {number} protocolVersion
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.protocolVersion = 0;
    
        /**
         * Creates a new CMsgSteamDatagramHostedServerAddressPlaintext instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext=} [properties] Properties to set
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.create = function create(properties) {
            return new CMsgSteamDatagramHostedServerAddressPlaintext(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramHostedServerAddressPlaintext message. Does not implicitly {@link CMsgSteamDatagramHostedServerAddressPlaintext.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext} message CMsgSteamDatagramHostedServerAddressPlaintext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipv4 != null && Object.hasOwnProperty.call(message, "ipv4"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.ipv4);
            if (message.ipv6 != null && Object.hasOwnProperty.call(message, "ipv6"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ipv6);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.port);
            if (message.routingSecret != null && Object.hasOwnProperty.call(message, "routingSecret"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.routingSecret);
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.protocolVersion);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramHostedServerAddressPlaintext message, length delimited. Does not implicitly {@link CMsgSteamDatagramHostedServerAddressPlaintext.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext} message CMsgSteamDatagramHostedServerAddressPlaintext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramHostedServerAddressPlaintext message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramHostedServerAddressPlaintext();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ipv4 = reader.fixed32();
                        break;
                    }
                case 2: {
                        message.ipv6 = reader.bytes();
                        break;
                    }
                case 3: {
                        message.port = reader.uint32();
                        break;
                    }
                case 4: {
                        message.routingSecret = reader.fixed64();
                        break;
                    }
                case 5: {
                        message.protocolVersion = reader.uint32();
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
         * Decodes a CMsgSteamDatagramHostedServerAddressPlaintext message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramHostedServerAddressPlaintext message.
         * @function verify
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                if (!$util.isInteger(message.ipv4))
                    return "ipv4: integer expected";
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                if (!(message.ipv6 && typeof message.ipv6.length === "number" || $util.isString(message.ipv6)))
                    return "ipv6: buffer expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.routingSecret != null && message.hasOwnProperty("routingSecret"))
                if (!$util.isInteger(message.routingSecret) && !(message.routingSecret && $util.isInteger(message.routingSecret.low) && $util.isInteger(message.routingSecret.high)))
                    return "routingSecret: integer|Long expected";
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                if (!$util.isInteger(message.protocolVersion))
                    return "protocolVersion: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramHostedServerAddressPlaintext message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramHostedServerAddressPlaintext)
                return object;
            var message = new $root.CMsgSteamDatagramHostedServerAddressPlaintext();
            if (object.ipv4 != null)
                message.ipv4 = object.ipv4 >>> 0;
            if (object.ipv6 != null)
                if (typeof object.ipv6 === "string")
                    $util.base64.decode(object.ipv6, message.ipv6 = $util.newBuffer($util.base64.length(object.ipv6)), 0);
                else if (object.ipv6.length >= 0)
                    message.ipv6 = object.ipv6;
            if (object.port != null)
                message.port = object.port >>> 0;
            if (object.routingSecret != null)
                if ($util.Long)
                    (message.routingSecret = $util.Long.fromValue(object.routingSecret)).unsigned = false;
                else if (typeof object.routingSecret === "string")
                    message.routingSecret = parseInt(object.routingSecret, 10);
                else if (typeof object.routingSecret === "number")
                    message.routingSecret = object.routingSecret;
                else if (typeof object.routingSecret === "object")
                    message.routingSecret = new $util.LongBits(object.routingSecret.low >>> 0, object.routingSecret.high >>> 0).toNumber();
            if (object.protocolVersion != null)
                message.protocolVersion = object.protocolVersion >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramHostedServerAddressPlaintext message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {CMsgSteamDatagramHostedServerAddressPlaintext} message CMsgSteamDatagramHostedServerAddressPlaintext
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ipv4 = 0;
                if (options.bytes === String)
                    object.ipv6 = "";
                else {
                    object.ipv6 = [];
                    if (options.bytes !== Array)
                        object.ipv6 = $util.newBuffer(object.ipv6);
                }
                object.port = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.routingSecret = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.routingSecret = options.longs === String ? "0" : 0;
                object.protocolVersion = 0;
            }
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                object.ipv4 = message.ipv4;
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                object.ipv6 = options.bytes === String ? $util.base64.encode(message.ipv6, 0, message.ipv6.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipv6) : message.ipv6;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.routingSecret != null && message.hasOwnProperty("routingSecret"))
                if (typeof message.routingSecret === "number")
                    object.routingSecret = options.longs === String ? String(message.routingSecret) : message.routingSecret;
                else
                    object.routingSecret = options.longs === String ? $util.Long.prototype.toString.call(message.routingSecret) : options.longs === Number ? new $util.LongBits(message.routingSecret.low >>> 0, message.routingSecret.high >>> 0).toNumber() : message.routingSecret;
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                object.protocolVersion = message.protocolVersion;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramHostedServerAddressPlaintext to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSteamDatagramHostedServerAddressPlaintext
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSteamDatagramHostedServerAddressPlaintext";
        };
    
        return CMsgSteamDatagramHostedServerAddressPlaintext;
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
