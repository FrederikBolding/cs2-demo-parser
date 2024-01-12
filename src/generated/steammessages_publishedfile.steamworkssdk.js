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
    
    $root.CPublishedFile_Subscribe_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Subscribe_Request.
         * @exports ICPublishedFile_Subscribe_Request
         * @interface ICPublishedFile_Subscribe_Request
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Subscribe_Request publishedfileid
         * @property {number|null} [listType] CPublishedFile_Subscribe_Request listType
         * @property {number|null} [appid] CPublishedFile_Subscribe_Request appid
         * @property {boolean|null} [notifyClient] CPublishedFile_Subscribe_Request notifyClient
         */
    
        /**
         * Constructs a new CPublishedFile_Subscribe_Request.
         * @exports CPublishedFile_Subscribe_Request
         * @classdesc Represents a CPublishedFile_Subscribe_Request.
         * @implements ICPublishedFile_Subscribe_Request
         * @constructor
         * @param {ICPublishedFile_Subscribe_Request=} [properties] Properties to set
         */
        function CPublishedFile_Subscribe_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Subscribe_Request publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPublishedFile_Subscribe_Request listType.
         * @member {number} listType
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.listType = 0;
    
        /**
         * CPublishedFile_Subscribe_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Subscribe_Request notifyClient.
         * @member {boolean} notifyClient
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.notifyClient = false;
    
        /**
         * Creates a new CPublishedFile_Subscribe_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {ICPublishedFile_Subscribe_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request instance
         */
        CPublishedFile_Subscribe_Request.create = function create(properties) {
            return new CPublishedFile_Subscribe_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Request message. Does not implicitly {@link CPublishedFile_Subscribe_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {ICPublishedFile_Subscribe_Request} message CPublishedFile_Subscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
            if (message.listType != null && Object.hasOwnProperty.call(message, "listType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.listType);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.appid);
            if (message.notifyClient != null && Object.hasOwnProperty.call(message, "notifyClient"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.notifyClient);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Request message, length delimited. Does not implicitly {@link CPublishedFile_Subscribe_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {ICPublishedFile_Subscribe_Request} message CPublishedFile_Subscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Subscribe_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Subscribe_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.publishedfileid = reader.uint64();
                        break;
                    }
                case 2: {
                        message.listType = reader.uint32();
                        break;
                    }
                case 3: {
                        message.appid = reader.int32();
                        break;
                    }
                case 4: {
                        message.notifyClient = reader.bool();
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
         * Decodes a CPublishedFile_Subscribe_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Subscribe_Request message.
         * @function verify
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Subscribe_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.listType != null && message.hasOwnProperty("listType"))
                if (!$util.isInteger(message.listType))
                    return "listType: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.notifyClient != null && message.hasOwnProperty("notifyClient"))
                if (typeof message.notifyClient !== "boolean")
                    return "notifyClient: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Subscribe_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request
         */
        CPublishedFile_Subscribe_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Subscribe_Request)
                return object;
            var message = new $root.CPublishedFile_Subscribe_Request();
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.listType != null)
                message.listType = object.listType >>> 0;
            if (object.appid != null)
                message.appid = object.appid | 0;
            if (object.notifyClient != null)
                message.notifyClient = Boolean(object.notifyClient);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Subscribe_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {CPublishedFile_Subscribe_Request} message CPublishedFile_Subscribe_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Subscribe_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.listType = 0;
                object.appid = 0;
                object.notifyClient = false;
            }
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.listType != null && message.hasOwnProperty("listType"))
                object.listType = message.listType;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.notifyClient != null && message.hasOwnProperty("notifyClient"))
                object.notifyClient = message.notifyClient;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Subscribe_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Subscribe_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Subscribe_Request
         * @function getTypeUrl
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Subscribe_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Subscribe_Request";
        };
    
        return CPublishedFile_Subscribe_Request;
    })();
    
    $root.CPublishedFile_Subscribe_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Subscribe_Response.
         * @exports ICPublishedFile_Subscribe_Response
         * @interface ICPublishedFile_Subscribe_Response
         */
    
        /**
         * Constructs a new CPublishedFile_Subscribe_Response.
         * @exports CPublishedFile_Subscribe_Response
         * @classdesc Represents a CPublishedFile_Subscribe_Response.
         * @implements ICPublishedFile_Subscribe_Response
         * @constructor
         * @param {ICPublishedFile_Subscribe_Response=} [properties] Properties to set
         */
        function CPublishedFile_Subscribe_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_Subscribe_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {ICPublishedFile_Subscribe_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response instance
         */
        CPublishedFile_Subscribe_Response.create = function create(properties) {
            return new CPublishedFile_Subscribe_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Response message. Does not implicitly {@link CPublishedFile_Subscribe_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {ICPublishedFile_Subscribe_Response} message CPublishedFile_Subscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Response message, length delimited. Does not implicitly {@link CPublishedFile_Subscribe_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {ICPublishedFile_Subscribe_Response} message CPublishedFile_Subscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Subscribe_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Subscribe_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Subscribe_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Subscribe_Response message.
         * @function verify
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Subscribe_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Subscribe_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response
         */
        CPublishedFile_Subscribe_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Subscribe_Response)
                return object;
            return new $root.CPublishedFile_Subscribe_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Subscribe_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {CPublishedFile_Subscribe_Response} message CPublishedFile_Subscribe_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Subscribe_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_Subscribe_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Subscribe_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Subscribe_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Subscribe_Response
         * @function getTypeUrl
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Subscribe_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Subscribe_Response";
        };
    
        return CPublishedFile_Subscribe_Response;
    })();
    
    $root.CPublishedFile_Unsubscribe_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Unsubscribe_Request.
         * @exports ICPublishedFile_Unsubscribe_Request
         * @interface ICPublishedFile_Unsubscribe_Request
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Unsubscribe_Request publishedfileid
         * @property {number|null} [listType] CPublishedFile_Unsubscribe_Request listType
         * @property {number|null} [appid] CPublishedFile_Unsubscribe_Request appid
         * @property {boolean|null} [notifyClient] CPublishedFile_Unsubscribe_Request notifyClient
         */
    
        /**
         * Constructs a new CPublishedFile_Unsubscribe_Request.
         * @exports CPublishedFile_Unsubscribe_Request
         * @classdesc Represents a CPublishedFile_Unsubscribe_Request.
         * @implements ICPublishedFile_Unsubscribe_Request
         * @constructor
         * @param {ICPublishedFile_Unsubscribe_Request=} [properties] Properties to set
         */
        function CPublishedFile_Unsubscribe_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Unsubscribe_Request publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPublishedFile_Unsubscribe_Request listType.
         * @member {number} listType
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.listType = 0;
    
        /**
         * CPublishedFile_Unsubscribe_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Unsubscribe_Request notifyClient.
         * @member {boolean} notifyClient
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.notifyClient = false;
    
        /**
         * Creates a new CPublishedFile_Unsubscribe_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {ICPublishedFile_Unsubscribe_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request instance
         */
        CPublishedFile_Unsubscribe_Request.create = function create(properties) {
            return new CPublishedFile_Unsubscribe_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Request message. Does not implicitly {@link CPublishedFile_Unsubscribe_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {ICPublishedFile_Unsubscribe_Request} message CPublishedFile_Unsubscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
            if (message.listType != null && Object.hasOwnProperty.call(message, "listType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.listType);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.appid);
            if (message.notifyClient != null && Object.hasOwnProperty.call(message, "notifyClient"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.notifyClient);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Request message, length delimited. Does not implicitly {@link CPublishedFile_Unsubscribe_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {ICPublishedFile_Unsubscribe_Request} message CPublishedFile_Unsubscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Unsubscribe_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Unsubscribe_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.publishedfileid = reader.uint64();
                        break;
                    }
                case 2: {
                        message.listType = reader.uint32();
                        break;
                    }
                case 3: {
                        message.appid = reader.int32();
                        break;
                    }
                case 4: {
                        message.notifyClient = reader.bool();
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
         * Decodes a CPublishedFile_Unsubscribe_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Unsubscribe_Request message.
         * @function verify
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Unsubscribe_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.listType != null && message.hasOwnProperty("listType"))
                if (!$util.isInteger(message.listType))
                    return "listType: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.notifyClient != null && message.hasOwnProperty("notifyClient"))
                if (typeof message.notifyClient !== "boolean")
                    return "notifyClient: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Unsubscribe_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request
         */
        CPublishedFile_Unsubscribe_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Unsubscribe_Request)
                return object;
            var message = new $root.CPublishedFile_Unsubscribe_Request();
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.listType != null)
                message.listType = object.listType >>> 0;
            if (object.appid != null)
                message.appid = object.appid | 0;
            if (object.notifyClient != null)
                message.notifyClient = Boolean(object.notifyClient);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Unsubscribe_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {CPublishedFile_Unsubscribe_Request} message CPublishedFile_Unsubscribe_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Unsubscribe_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.listType = 0;
                object.appid = 0;
                object.notifyClient = false;
            }
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.listType != null && message.hasOwnProperty("listType"))
                object.listType = message.listType;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.notifyClient != null && message.hasOwnProperty("notifyClient"))
                object.notifyClient = message.notifyClient;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Unsubscribe_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Unsubscribe_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Unsubscribe_Request
         * @function getTypeUrl
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Unsubscribe_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Unsubscribe_Request";
        };
    
        return CPublishedFile_Unsubscribe_Request;
    })();
    
    $root.CPublishedFile_Unsubscribe_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Unsubscribe_Response.
         * @exports ICPublishedFile_Unsubscribe_Response
         * @interface ICPublishedFile_Unsubscribe_Response
         */
    
        /**
         * Constructs a new CPublishedFile_Unsubscribe_Response.
         * @exports CPublishedFile_Unsubscribe_Response
         * @classdesc Represents a CPublishedFile_Unsubscribe_Response.
         * @implements ICPublishedFile_Unsubscribe_Response
         * @constructor
         * @param {ICPublishedFile_Unsubscribe_Response=} [properties] Properties to set
         */
        function CPublishedFile_Unsubscribe_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_Unsubscribe_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {ICPublishedFile_Unsubscribe_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response instance
         */
        CPublishedFile_Unsubscribe_Response.create = function create(properties) {
            return new CPublishedFile_Unsubscribe_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Response message. Does not implicitly {@link CPublishedFile_Unsubscribe_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {ICPublishedFile_Unsubscribe_Response} message CPublishedFile_Unsubscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Response message, length delimited. Does not implicitly {@link CPublishedFile_Unsubscribe_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {ICPublishedFile_Unsubscribe_Response} message CPublishedFile_Unsubscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Unsubscribe_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Unsubscribe_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Unsubscribe_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Unsubscribe_Response message.
         * @function verify
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Unsubscribe_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Unsubscribe_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response
         */
        CPublishedFile_Unsubscribe_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Unsubscribe_Response)
                return object;
            return new $root.CPublishedFile_Unsubscribe_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Unsubscribe_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {CPublishedFile_Unsubscribe_Response} message CPublishedFile_Unsubscribe_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Unsubscribe_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_Unsubscribe_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Unsubscribe_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Unsubscribe_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Unsubscribe_Response
         * @function getTypeUrl
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Unsubscribe_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Unsubscribe_Response";
        };
    
        return CPublishedFile_Unsubscribe_Response;
    })();
    
    $root.CPublishedFile_Publish_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Publish_Request.
         * @exports ICPublishedFile_Publish_Request
         * @interface ICPublishedFile_Publish_Request
         * @property {number|null} [appid] CPublishedFile_Publish_Request appid
         * @property {number|null} [consumerAppid] CPublishedFile_Publish_Request consumerAppid
         * @property {string|null} [cloudfilename] CPublishedFile_Publish_Request cloudfilename
         * @property {string|null} [previewCloudfilename] CPublishedFile_Publish_Request previewCloudfilename
         * @property {string|null} [title] CPublishedFile_Publish_Request title
         * @property {string|null} [fileDescription] CPublishedFile_Publish_Request fileDescription
         * @property {number|null} [fileType] CPublishedFile_Publish_Request fileType
         * @property {string|null} [consumerShortcutName] CPublishedFile_Publish_Request consumerShortcutName
         * @property {string|null} [youtubeUsername] CPublishedFile_Publish_Request youtubeUsername
         * @property {string|null} [youtubeVideoid] CPublishedFile_Publish_Request youtubeVideoid
         * @property {number|null} [visibility] CPublishedFile_Publish_Request visibility
         * @property {string|null} [redirectUri] CPublishedFile_Publish_Request redirectUri
         * @property {Array.<string>|null} [tags] CPublishedFile_Publish_Request tags
         * @property {string|null} [collectionType] CPublishedFile_Publish_Request collectionType
         * @property {string|null} [gameType] CPublishedFile_Publish_Request gameType
         * @property {string|null} [url] CPublishedFile_Publish_Request url
         */
    
        /**
         * Constructs a new CPublishedFile_Publish_Request.
         * @exports CPublishedFile_Publish_Request
         * @classdesc Represents a CPublishedFile_Publish_Request.
         * @implements ICPublishedFile_Publish_Request
         * @constructor
         * @param {ICPublishedFile_Publish_Request=} [properties] Properties to set
         */
        function CPublishedFile_Publish_Request(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Publish_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Publish_Request consumerAppid.
         * @member {number} consumerAppid
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.consumerAppid = 0;
    
        /**
         * CPublishedFile_Publish_Request cloudfilename.
         * @member {string} cloudfilename
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.cloudfilename = "";
    
        /**
         * CPublishedFile_Publish_Request previewCloudfilename.
         * @member {string} previewCloudfilename
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.previewCloudfilename = "";
    
        /**
         * CPublishedFile_Publish_Request title.
         * @member {string} title
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.title = "";
    
        /**
         * CPublishedFile_Publish_Request fileDescription.
         * @member {string} fileDescription
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.fileDescription = "";
    
        /**
         * CPublishedFile_Publish_Request fileType.
         * @member {number} fileType
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.fileType = 0;
    
        /**
         * CPublishedFile_Publish_Request consumerShortcutName.
         * @member {string} consumerShortcutName
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.consumerShortcutName = "";
    
        /**
         * CPublishedFile_Publish_Request youtubeUsername.
         * @member {string} youtubeUsername
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.youtubeUsername = "";
    
        /**
         * CPublishedFile_Publish_Request youtubeVideoid.
         * @member {string} youtubeVideoid
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.youtubeVideoid = "";
    
        /**
         * CPublishedFile_Publish_Request visibility.
         * @member {number} visibility
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.visibility = 0;
    
        /**
         * CPublishedFile_Publish_Request redirectUri.
         * @member {string} redirectUri
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.redirectUri = "";
    
        /**
         * CPublishedFile_Publish_Request tags.
         * @member {Array.<string>} tags
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.tags = $util.emptyArray;
    
        /**
         * CPublishedFile_Publish_Request collectionType.
         * @member {string} collectionType
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.collectionType = "";
    
        /**
         * CPublishedFile_Publish_Request gameType.
         * @member {string} gameType
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.gameType = "";
    
        /**
         * CPublishedFile_Publish_Request url.
         * @member {string} url
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.url = "";
    
        /**
         * Creates a new CPublishedFile_Publish_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {ICPublishedFile_Publish_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request instance
         */
        CPublishedFile_Publish_Request.create = function create(properties) {
            return new CPublishedFile_Publish_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Request message. Does not implicitly {@link CPublishedFile_Publish_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {ICPublishedFile_Publish_Request} message CPublishedFile_Publish_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.consumerAppid != null && Object.hasOwnProperty.call(message, "consumerAppid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.consumerAppid);
            if (message.cloudfilename != null && Object.hasOwnProperty.call(message, "cloudfilename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.cloudfilename);
            if (message.previewCloudfilename != null && Object.hasOwnProperty.call(message, "previewCloudfilename"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.previewCloudfilename);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.fileDescription != null && Object.hasOwnProperty.call(message, "fileDescription"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.fileDescription);
            if (message.fileType != null && Object.hasOwnProperty.call(message, "fileType"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.fileType);
            if (message.consumerShortcutName != null && Object.hasOwnProperty.call(message, "consumerShortcutName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.consumerShortcutName);
            if (message.youtubeUsername != null && Object.hasOwnProperty.call(message, "youtubeUsername"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.youtubeUsername);
            if (message.youtubeVideoid != null && Object.hasOwnProperty.call(message, "youtubeVideoid"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.youtubeVideoid);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.visibility);
            if (message.redirectUri != null && Object.hasOwnProperty.call(message, "redirectUri"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.redirectUri);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.tags[i]);
            if (message.collectionType != null && Object.hasOwnProperty.call(message, "collectionType"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.collectionType);
            if (message.gameType != null && Object.hasOwnProperty.call(message, "gameType"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.gameType);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.url);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Request message, length delimited. Does not implicitly {@link CPublishedFile_Publish_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {ICPublishedFile_Publish_Request} message CPublishedFile_Publish_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Publish_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Publish_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.consumerAppid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.cloudfilename = reader.string();
                        break;
                    }
                case 4: {
                        message.previewCloudfilename = reader.string();
                        break;
                    }
                case 5: {
                        message.title = reader.string();
                        break;
                    }
                case 6: {
                        message.fileDescription = reader.string();
                        break;
                    }
                case 7: {
                        message.fileType = reader.uint32();
                        break;
                    }
                case 8: {
                        message.consumerShortcutName = reader.string();
                        break;
                    }
                case 9: {
                        message.youtubeUsername = reader.string();
                        break;
                    }
                case 10: {
                        message.youtubeVideoid = reader.string();
                        break;
                    }
                case 11: {
                        message.visibility = reader.uint32();
                        break;
                    }
                case 12: {
                        message.redirectUri = reader.string();
                        break;
                    }
                case 13: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 14: {
                        message.collectionType = reader.string();
                        break;
                    }
                case 15: {
                        message.gameType = reader.string();
                        break;
                    }
                case 16: {
                        message.url = reader.string();
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
         * Decodes a CPublishedFile_Publish_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Publish_Request message.
         * @function verify
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Publish_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.consumerAppid != null && message.hasOwnProperty("consumerAppid"))
                if (!$util.isInteger(message.consumerAppid))
                    return "consumerAppid: integer expected";
            if (message.cloudfilename != null && message.hasOwnProperty("cloudfilename"))
                if (!$util.isString(message.cloudfilename))
                    return "cloudfilename: string expected";
            if (message.previewCloudfilename != null && message.hasOwnProperty("previewCloudfilename"))
                if (!$util.isString(message.previewCloudfilename))
                    return "previewCloudfilename: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.fileDescription != null && message.hasOwnProperty("fileDescription"))
                if (!$util.isString(message.fileDescription))
                    return "fileDescription: string expected";
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                if (!$util.isInteger(message.fileType))
                    return "fileType: integer expected";
            if (message.consumerShortcutName != null && message.hasOwnProperty("consumerShortcutName"))
                if (!$util.isString(message.consumerShortcutName))
                    return "consumerShortcutName: string expected";
            if (message.youtubeUsername != null && message.hasOwnProperty("youtubeUsername"))
                if (!$util.isString(message.youtubeUsername))
                    return "youtubeUsername: string expected";
            if (message.youtubeVideoid != null && message.hasOwnProperty("youtubeVideoid"))
                if (!$util.isString(message.youtubeVideoid))
                    return "youtubeVideoid: string expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isInteger(message.visibility))
                    return "visibility: integer expected";
            if (message.redirectUri != null && message.hasOwnProperty("redirectUri"))
                if (!$util.isString(message.redirectUri))
                    return "redirectUri: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.collectionType != null && message.hasOwnProperty("collectionType"))
                if (!$util.isString(message.collectionType))
                    return "collectionType: string expected";
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                if (!$util.isString(message.gameType))
                    return "gameType: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Publish_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request
         */
        CPublishedFile_Publish_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Publish_Request)
                return object;
            var message = new $root.CPublishedFile_Publish_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.consumerAppid != null)
                message.consumerAppid = object.consumerAppid >>> 0;
            if (object.cloudfilename != null)
                message.cloudfilename = String(object.cloudfilename);
            if (object.previewCloudfilename != null)
                message.previewCloudfilename = String(object.previewCloudfilename);
            if (object.title != null)
                message.title = String(object.title);
            if (object.fileDescription != null)
                message.fileDescription = String(object.fileDescription);
            if (object.fileType != null)
                message.fileType = object.fileType >>> 0;
            if (object.consumerShortcutName != null)
                message.consumerShortcutName = String(object.consumerShortcutName);
            if (object.youtubeUsername != null)
                message.youtubeUsername = String(object.youtubeUsername);
            if (object.youtubeVideoid != null)
                message.youtubeVideoid = String(object.youtubeVideoid);
            if (object.visibility != null)
                message.visibility = object.visibility >>> 0;
            if (object.redirectUri != null)
                message.redirectUri = String(object.redirectUri);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CPublishedFile_Publish_Request.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.collectionType != null)
                message.collectionType = String(object.collectionType);
            if (object.gameType != null)
                message.gameType = String(object.gameType);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Publish_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {CPublishedFile_Publish_Request} message CPublishedFile_Publish_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Publish_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.appid = 0;
                object.consumerAppid = 0;
                object.cloudfilename = "";
                object.previewCloudfilename = "";
                object.title = "";
                object.fileDescription = "";
                object.fileType = 0;
                object.consumerShortcutName = "";
                object.youtubeUsername = "";
                object.youtubeVideoid = "";
                object.visibility = 0;
                object.redirectUri = "";
                object.collectionType = "";
                object.gameType = "";
                object.url = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.consumerAppid != null && message.hasOwnProperty("consumerAppid"))
                object.consumerAppid = message.consumerAppid;
            if (message.cloudfilename != null && message.hasOwnProperty("cloudfilename"))
                object.cloudfilename = message.cloudfilename;
            if (message.previewCloudfilename != null && message.hasOwnProperty("previewCloudfilename"))
                object.previewCloudfilename = message.previewCloudfilename;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.fileDescription != null && message.hasOwnProperty("fileDescription"))
                object.fileDescription = message.fileDescription;
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                object.fileType = message.fileType;
            if (message.consumerShortcutName != null && message.hasOwnProperty("consumerShortcutName"))
                object.consumerShortcutName = message.consumerShortcutName;
            if (message.youtubeUsername != null && message.hasOwnProperty("youtubeUsername"))
                object.youtubeUsername = message.youtubeUsername;
            if (message.youtubeVideoid != null && message.hasOwnProperty("youtubeVideoid"))
                object.youtubeVideoid = message.youtubeVideoid;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.redirectUri != null && message.hasOwnProperty("redirectUri"))
                object.redirectUri = message.redirectUri;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.collectionType != null && message.hasOwnProperty("collectionType"))
                object.collectionType = message.collectionType;
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                object.gameType = message.gameType;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Publish_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Publish_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Publish_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Publish_Request
         * @function getTypeUrl
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Publish_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Publish_Request";
        };
    
        return CPublishedFile_Publish_Request;
    })();
    
    $root.CPublishedFile_Publish_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Publish_Response.
         * @exports ICPublishedFile_Publish_Response
         * @interface ICPublishedFile_Publish_Response
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Publish_Response publishedfileid
         * @property {string|null} [redirectUri] CPublishedFile_Publish_Response redirectUri
         */
    
        /**
         * Constructs a new CPublishedFile_Publish_Response.
         * @exports CPublishedFile_Publish_Response
         * @classdesc Represents a CPublishedFile_Publish_Response.
         * @implements ICPublishedFile_Publish_Response
         * @constructor
         * @param {ICPublishedFile_Publish_Response=} [properties] Properties to set
         */
        function CPublishedFile_Publish_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Publish_Response publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Publish_Response
         * @instance
         */
        CPublishedFile_Publish_Response.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPublishedFile_Publish_Response redirectUri.
         * @member {string} redirectUri
         * @memberof CPublishedFile_Publish_Response
         * @instance
         */
        CPublishedFile_Publish_Response.prototype.redirectUri = "";
    
        /**
         * Creates a new CPublishedFile_Publish_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {ICPublishedFile_Publish_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response instance
         */
        CPublishedFile_Publish_Response.create = function create(properties) {
            return new CPublishedFile_Publish_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Response message. Does not implicitly {@link CPublishedFile_Publish_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {ICPublishedFile_Publish_Response} message CPublishedFile_Publish_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
            if (message.redirectUri != null && Object.hasOwnProperty.call(message, "redirectUri"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.redirectUri);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Response message, length delimited. Does not implicitly {@link CPublishedFile_Publish_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {ICPublishedFile_Publish_Response} message CPublishedFile_Publish_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Publish_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Publish_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.publishedfileid = reader.uint64();
                        break;
                    }
                case 2: {
                        message.redirectUri = reader.string();
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
         * Decodes a CPublishedFile_Publish_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Publish_Response message.
         * @function verify
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Publish_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.redirectUri != null && message.hasOwnProperty("redirectUri"))
                if (!$util.isString(message.redirectUri))
                    return "redirectUri: string expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Publish_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response
         */
        CPublishedFile_Publish_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Publish_Response)
                return object;
            var message = new $root.CPublishedFile_Publish_Response();
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.redirectUri != null)
                message.redirectUri = String(object.redirectUri);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Publish_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {CPublishedFile_Publish_Response} message CPublishedFile_Publish_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Publish_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.redirectUri = "";
            }
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.redirectUri != null && message.hasOwnProperty("redirectUri"))
                object.redirectUri = message.redirectUri;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Publish_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Publish_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Publish_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Publish_Response
         * @function getTypeUrl
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Publish_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Publish_Response";
        };
    
        return CPublishedFile_Publish_Response;
    })();
    
    $root.CPublishedFile_GetDetails_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_GetDetails_Request.
         * @exports ICPublishedFile_GetDetails_Request
         * @interface ICPublishedFile_GetDetails_Request
         * @property {Array.<number|Long>|null} [publishedfileids] CPublishedFile_GetDetails_Request publishedfileids
         * @property {boolean|null} [includetags] CPublishedFile_GetDetails_Request includetags
         * @property {boolean|null} [includeadditionalpreviews] CPublishedFile_GetDetails_Request includeadditionalpreviews
         * @property {boolean|null} [includechildren] CPublishedFile_GetDetails_Request includechildren
         * @property {boolean|null} [includekvtags] CPublishedFile_GetDetails_Request includekvtags
         * @property {boolean|null} [includevotes] CPublishedFile_GetDetails_Request includevotes
         * @property {boolean|null} [shortDescription] CPublishedFile_GetDetails_Request shortDescription
         */
    
        /**
         * Constructs a new CPublishedFile_GetDetails_Request.
         * @exports CPublishedFile_GetDetails_Request
         * @classdesc Represents a CPublishedFile_GetDetails_Request.
         * @implements ICPublishedFile_GetDetails_Request
         * @constructor
         * @param {ICPublishedFile_GetDetails_Request=} [properties] Properties to set
         */
        function CPublishedFile_GetDetails_Request(properties) {
            this.publishedfileids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetDetails_Request publishedfileids.
         * @member {Array.<number|Long>} publishedfileids
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.publishedfileids = $util.emptyArray;
    
        /**
         * CPublishedFile_GetDetails_Request includetags.
         * @member {boolean} includetags
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includetags = false;
    
        /**
         * CPublishedFile_GetDetails_Request includeadditionalpreviews.
         * @member {boolean} includeadditionalpreviews
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includeadditionalpreviews = false;
    
        /**
         * CPublishedFile_GetDetails_Request includechildren.
         * @member {boolean} includechildren
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includechildren = false;
    
        /**
         * CPublishedFile_GetDetails_Request includekvtags.
         * @member {boolean} includekvtags
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includekvtags = false;
    
        /**
         * CPublishedFile_GetDetails_Request includevotes.
         * @member {boolean} includevotes
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includevotes = false;
    
        /**
         * CPublishedFile_GetDetails_Request shortDescription.
         * @member {boolean} shortDescription
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.shortDescription = false;
    
        /**
         * Creates a new CPublishedFile_GetDetails_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {ICPublishedFile_GetDetails_Request=} [properties] Properties to set
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request instance
         */
        CPublishedFile_GetDetails_Request.create = function create(properties) {
            return new CPublishedFile_GetDetails_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Request message. Does not implicitly {@link CPublishedFile_GetDetails_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {ICPublishedFile_GetDetails_Request} message CPublishedFile_GetDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileids != null && message.publishedfileids.length)
                for (var i = 0; i < message.publishedfileids.length; ++i)
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.publishedfileids[i]);
            if (message.includetags != null && Object.hasOwnProperty.call(message, "includetags"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.includetags);
            if (message.includeadditionalpreviews != null && Object.hasOwnProperty.call(message, "includeadditionalpreviews"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.includeadditionalpreviews);
            if (message.includechildren != null && Object.hasOwnProperty.call(message, "includechildren"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.includechildren);
            if (message.includekvtags != null && Object.hasOwnProperty.call(message, "includekvtags"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.includekvtags);
            if (message.includevotes != null && Object.hasOwnProperty.call(message, "includevotes"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.includevotes);
            if (message.shortDescription != null && Object.hasOwnProperty.call(message, "shortDescription"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.shortDescription);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Request message, length delimited. Does not implicitly {@link CPublishedFile_GetDetails_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {ICPublishedFile_GetDetails_Request} message CPublishedFile_GetDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetDetails_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetDetails_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.publishedfileids && message.publishedfileids.length))
                            message.publishedfileids = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publishedfileids.push(reader.fixed64());
                        } else
                            message.publishedfileids.push(reader.fixed64());
                        break;
                    }
                case 2: {
                        message.includetags = reader.bool();
                        break;
                    }
                case 3: {
                        message.includeadditionalpreviews = reader.bool();
                        break;
                    }
                case 4: {
                        message.includechildren = reader.bool();
                        break;
                    }
                case 5: {
                        message.includekvtags = reader.bool();
                        break;
                    }
                case 6: {
                        message.includevotes = reader.bool();
                        break;
                    }
                case 8: {
                        message.shortDescription = reader.bool();
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
         * Decodes a CPublishedFile_GetDetails_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetDetails_Request message.
         * @function verify
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetDetails_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileids != null && message.hasOwnProperty("publishedfileids")) {
                if (!Array.isArray(message.publishedfileids))
                    return "publishedfileids: array expected";
                for (var i = 0; i < message.publishedfileids.length; ++i)
                    if (!$util.isInteger(message.publishedfileids[i]) && !(message.publishedfileids[i] && $util.isInteger(message.publishedfileids[i].low) && $util.isInteger(message.publishedfileids[i].high)))
                        return "publishedfileids: integer|Long[] expected";
            }
            if (message.includetags != null && message.hasOwnProperty("includetags"))
                if (typeof message.includetags !== "boolean")
                    return "includetags: boolean expected";
            if (message.includeadditionalpreviews != null && message.hasOwnProperty("includeadditionalpreviews"))
                if (typeof message.includeadditionalpreviews !== "boolean")
                    return "includeadditionalpreviews: boolean expected";
            if (message.includechildren != null && message.hasOwnProperty("includechildren"))
                if (typeof message.includechildren !== "boolean")
                    return "includechildren: boolean expected";
            if (message.includekvtags != null && message.hasOwnProperty("includekvtags"))
                if (typeof message.includekvtags !== "boolean")
                    return "includekvtags: boolean expected";
            if (message.includevotes != null && message.hasOwnProperty("includevotes"))
                if (typeof message.includevotes !== "boolean")
                    return "includevotes: boolean expected";
            if (message.shortDescription != null && message.hasOwnProperty("shortDescription"))
                if (typeof message.shortDescription !== "boolean")
                    return "shortDescription: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetDetails_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request
         */
        CPublishedFile_GetDetails_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetDetails_Request)
                return object;
            var message = new $root.CPublishedFile_GetDetails_Request();
            if (object.publishedfileids) {
                if (!Array.isArray(object.publishedfileids))
                    throw TypeError(".CPublishedFile_GetDetails_Request.publishedfileids: array expected");
                message.publishedfileids = [];
                for (var i = 0; i < object.publishedfileids.length; ++i)
                    if ($util.Long)
                        (message.publishedfileids[i] = $util.Long.fromValue(object.publishedfileids[i])).unsigned = false;
                    else if (typeof object.publishedfileids[i] === "string")
                        message.publishedfileids[i] = parseInt(object.publishedfileids[i], 10);
                    else if (typeof object.publishedfileids[i] === "number")
                        message.publishedfileids[i] = object.publishedfileids[i];
                    else if (typeof object.publishedfileids[i] === "object")
                        message.publishedfileids[i] = new $util.LongBits(object.publishedfileids[i].low >>> 0, object.publishedfileids[i].high >>> 0).toNumber();
            }
            if (object.includetags != null)
                message.includetags = Boolean(object.includetags);
            if (object.includeadditionalpreviews != null)
                message.includeadditionalpreviews = Boolean(object.includeadditionalpreviews);
            if (object.includechildren != null)
                message.includechildren = Boolean(object.includechildren);
            if (object.includekvtags != null)
                message.includekvtags = Boolean(object.includekvtags);
            if (object.includevotes != null)
                message.includevotes = Boolean(object.includevotes);
            if (object.shortDescription != null)
                message.shortDescription = Boolean(object.shortDescription);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetDetails_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {CPublishedFile_GetDetails_Request} message CPublishedFile_GetDetails_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetDetails_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.publishedfileids = [];
            if (options.defaults) {
                object.includetags = false;
                object.includeadditionalpreviews = false;
                object.includechildren = false;
                object.includekvtags = false;
                object.includevotes = false;
                object.shortDescription = false;
            }
            if (message.publishedfileids && message.publishedfileids.length) {
                object.publishedfileids = [];
                for (var j = 0; j < message.publishedfileids.length; ++j)
                    if (typeof message.publishedfileids[j] === "number")
                        object.publishedfileids[j] = options.longs === String ? String(message.publishedfileids[j]) : message.publishedfileids[j];
                    else
                        object.publishedfileids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileids[j]) : options.longs === Number ? new $util.LongBits(message.publishedfileids[j].low >>> 0, message.publishedfileids[j].high >>> 0).toNumber() : message.publishedfileids[j];
            }
            if (message.includetags != null && message.hasOwnProperty("includetags"))
                object.includetags = message.includetags;
            if (message.includeadditionalpreviews != null && message.hasOwnProperty("includeadditionalpreviews"))
                object.includeadditionalpreviews = message.includeadditionalpreviews;
            if (message.includechildren != null && message.hasOwnProperty("includechildren"))
                object.includechildren = message.includechildren;
            if (message.includekvtags != null && message.hasOwnProperty("includekvtags"))
                object.includekvtags = message.includekvtags;
            if (message.includevotes != null && message.hasOwnProperty("includevotes"))
                object.includevotes = message.includevotes;
            if (message.shortDescription != null && message.hasOwnProperty("shortDescription"))
                object.shortDescription = message.shortDescription;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetDetails_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetDetails_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_GetDetails_Request
         * @function getTypeUrl
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_GetDetails_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_GetDetails_Request";
        };
    
        return CPublishedFile_GetDetails_Request;
    })();
    
    $root.PublishedFileDetails = (function() {
    
        /**
         * Properties of a PublishedFileDetails.
         * @exports IPublishedFileDetails
         * @interface IPublishedFileDetails
         * @property {number|null} [result] PublishedFileDetails result
         * @property {number|Long|null} [publishedfileid] PublishedFileDetails publishedfileid
         * @property {number|Long|null} [creator] PublishedFileDetails creator
         * @property {number|null} [creatorAppid] PublishedFileDetails creatorAppid
         * @property {number|null} [consumerAppid] PublishedFileDetails consumerAppid
         * @property {number|null} [consumerShortcutid] PublishedFileDetails consumerShortcutid
         * @property {string|null} [filename] PublishedFileDetails filename
         * @property {number|Long|null} [fileSize] PublishedFileDetails fileSize
         * @property {number|Long|null} [previewFileSize] PublishedFileDetails previewFileSize
         * @property {string|null} [fileUrl] PublishedFileDetails fileUrl
         * @property {string|null} [previewUrl] PublishedFileDetails previewUrl
         * @property {string|null} [youtubevideoid] PublishedFileDetails youtubevideoid
         * @property {string|null} [url] PublishedFileDetails url
         * @property {number|Long|null} [hcontentFile] PublishedFileDetails hcontentFile
         * @property {number|Long|null} [hcontentPreview] PublishedFileDetails hcontentPreview
         * @property {string|null} [title] PublishedFileDetails title
         * @property {string|null} [fileDescription] PublishedFileDetails fileDescription
         * @property {string|null} [shortDescription] PublishedFileDetails shortDescription
         * @property {number|null} [timeCreated] PublishedFileDetails timeCreated
         * @property {number|null} [timeUpdated] PublishedFileDetails timeUpdated
         * @property {number|null} [visibility] PublishedFileDetails visibility
         * @property {number|null} [flags] PublishedFileDetails flags
         * @property {boolean|null} [workshopFile] PublishedFileDetails workshopFile
         * @property {boolean|null} [workshopAccepted] PublishedFileDetails workshopAccepted
         * @property {boolean|null} [showSubscribeAll] PublishedFileDetails showSubscribeAll
         * @property {number|null} [numCommentsDeveloper] PublishedFileDetails numCommentsDeveloper
         * @property {number|null} [numCommentsPublic] PublishedFileDetails numCommentsPublic
         * @property {boolean|null} [banned] PublishedFileDetails banned
         * @property {string|null} [banReason] PublishedFileDetails banReason
         * @property {number|Long|null} [banner] PublishedFileDetails banner
         * @property {boolean|null} [canBeDeleted] PublishedFileDetails canBeDeleted
         * @property {boolean|null} [incompatible] PublishedFileDetails incompatible
         * @property {string|null} [appName] PublishedFileDetails appName
         * @property {number|null} [fileType] PublishedFileDetails fileType
         * @property {boolean|null} [canSubscribe] PublishedFileDetails canSubscribe
         * @property {number|null} [subscriptions] PublishedFileDetails subscriptions
         * @property {number|null} [favorited] PublishedFileDetails favorited
         * @property {number|null} [followers] PublishedFileDetails followers
         * @property {number|null} [lifetimeSubscriptions] PublishedFileDetails lifetimeSubscriptions
         * @property {number|null} [lifetimeFavorited] PublishedFileDetails lifetimeFavorited
         * @property {number|null} [lifetimeFollowers] PublishedFileDetails lifetimeFollowers
         * @property {number|null} [views] PublishedFileDetails views
         * @property {number|null} [imageWidth] PublishedFileDetails imageWidth
         * @property {number|null} [imageHeight] PublishedFileDetails imageHeight
         * @property {string|null} [imageUrl] PublishedFileDetails imageUrl
         * @property {boolean|null} [spoilerTag] PublishedFileDetails spoilerTag
         * @property {number|null} [shortcutid] PublishedFileDetails shortcutid
         * @property {string|null} [shortcutname] PublishedFileDetails shortcutname
         * @property {number|null} [numChildren] PublishedFileDetails numChildren
         * @property {number|null} [numReports] PublishedFileDetails numReports
         * @property {Array.<PublishedFileDetails.IPreview>|null} [previews] PublishedFileDetails previews
         * @property {Array.<PublishedFileDetails.ITag>|null} [tags] PublishedFileDetails tags
         * @property {Array.<PublishedFileDetails.IChild>|null} [children] PublishedFileDetails children
         * @property {Array.<PublishedFileDetails.IKVTag>|null} [kvtags] PublishedFileDetails kvtags
         * @property {PublishedFileDetails.IVoteData|null} [voteData] PublishedFileDetails voteData
         * @property {number|null} [timeSubscribed] PublishedFileDetails timeSubscribed
         */
    
        /**
         * Constructs a new PublishedFileDetails.
         * @exports PublishedFileDetails
         * @classdesc Represents a PublishedFileDetails.
         * @implements IPublishedFileDetails
         * @constructor
         * @param {IPublishedFileDetails=} [properties] Properties to set
         */
        function PublishedFileDetails(properties) {
            this.previews = [];
            this.tags = [];
            this.children = [];
            this.kvtags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PublishedFileDetails result.
         * @member {number} result
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.result = 0;
    
        /**
         * PublishedFileDetails publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * PublishedFileDetails creator.
         * @member {number|Long} creator
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.creator = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails creatorAppid.
         * @member {number} creatorAppid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.creatorAppid = 0;
    
        /**
         * PublishedFileDetails consumerAppid.
         * @member {number} consumerAppid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.consumerAppid = 0;
    
        /**
         * PublishedFileDetails consumerShortcutid.
         * @member {number} consumerShortcutid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.consumerShortcutid = 0;
    
        /**
         * PublishedFileDetails filename.
         * @member {string} filename
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.filename = "";
    
        /**
         * PublishedFileDetails fileSize.
         * @member {number|Long} fileSize
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.fileSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * PublishedFileDetails previewFileSize.
         * @member {number|Long} previewFileSize
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.previewFileSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * PublishedFileDetails fileUrl.
         * @member {string} fileUrl
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.fileUrl = "";
    
        /**
         * PublishedFileDetails previewUrl.
         * @member {string} previewUrl
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.previewUrl = "";
    
        /**
         * PublishedFileDetails youtubevideoid.
         * @member {string} youtubevideoid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.youtubevideoid = "";
    
        /**
         * PublishedFileDetails url.
         * @member {string} url
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.url = "";
    
        /**
         * PublishedFileDetails hcontentFile.
         * @member {number|Long} hcontentFile
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.hcontentFile = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails hcontentPreview.
         * @member {number|Long} hcontentPreview
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.hcontentPreview = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails title.
         * @member {string} title
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.title = "";
    
        /**
         * PublishedFileDetails fileDescription.
         * @member {string} fileDescription
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.fileDescription = "";
    
        /**
         * PublishedFileDetails shortDescription.
         * @member {string} shortDescription
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.shortDescription = "";
    
        /**
         * PublishedFileDetails timeCreated.
         * @member {number} timeCreated
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.timeCreated = 0;
    
        /**
         * PublishedFileDetails timeUpdated.
         * @member {number} timeUpdated
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.timeUpdated = 0;
    
        /**
         * PublishedFileDetails visibility.
         * @member {number} visibility
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.visibility = 0;
    
        /**
         * PublishedFileDetails flags.
         * @member {number} flags
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.flags = 0;
    
        /**
         * PublishedFileDetails workshopFile.
         * @member {boolean} workshopFile
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.workshopFile = false;
    
        /**
         * PublishedFileDetails workshopAccepted.
         * @member {boolean} workshopAccepted
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.workshopAccepted = false;
    
        /**
         * PublishedFileDetails showSubscribeAll.
         * @member {boolean} showSubscribeAll
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.showSubscribeAll = false;
    
        /**
         * PublishedFileDetails numCommentsDeveloper.
         * @member {number} numCommentsDeveloper
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.numCommentsDeveloper = 0;
    
        /**
         * PublishedFileDetails numCommentsPublic.
         * @member {number} numCommentsPublic
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.numCommentsPublic = 0;
    
        /**
         * PublishedFileDetails banned.
         * @member {boolean} banned
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.banned = false;
    
        /**
         * PublishedFileDetails banReason.
         * @member {string} banReason
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.banReason = "";
    
        /**
         * PublishedFileDetails banner.
         * @member {number|Long} banner
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.banner = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails canBeDeleted.
         * @member {boolean} canBeDeleted
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.canBeDeleted = false;
    
        /**
         * PublishedFileDetails incompatible.
         * @member {boolean} incompatible
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.incompatible = false;
    
        /**
         * PublishedFileDetails appName.
         * @member {string} appName
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.appName = "";
    
        /**
         * PublishedFileDetails fileType.
         * @member {number} fileType
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.fileType = 0;
    
        /**
         * PublishedFileDetails canSubscribe.
         * @member {boolean} canSubscribe
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.canSubscribe = false;
    
        /**
         * PublishedFileDetails subscriptions.
         * @member {number} subscriptions
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.subscriptions = 0;
    
        /**
         * PublishedFileDetails favorited.
         * @member {number} favorited
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.favorited = 0;
    
        /**
         * PublishedFileDetails followers.
         * @member {number} followers
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.followers = 0;
    
        /**
         * PublishedFileDetails lifetimeSubscriptions.
         * @member {number} lifetimeSubscriptions
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.lifetimeSubscriptions = 0;
    
        /**
         * PublishedFileDetails lifetimeFavorited.
         * @member {number} lifetimeFavorited
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.lifetimeFavorited = 0;
    
        /**
         * PublishedFileDetails lifetimeFollowers.
         * @member {number} lifetimeFollowers
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.lifetimeFollowers = 0;
    
        /**
         * PublishedFileDetails views.
         * @member {number} views
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.views = 0;
    
        /**
         * PublishedFileDetails imageWidth.
         * @member {number} imageWidth
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.imageWidth = 0;
    
        /**
         * PublishedFileDetails imageHeight.
         * @member {number} imageHeight
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.imageHeight = 0;
    
        /**
         * PublishedFileDetails imageUrl.
         * @member {string} imageUrl
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.imageUrl = "";
    
        /**
         * PublishedFileDetails spoilerTag.
         * @member {boolean} spoilerTag
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.spoilerTag = false;
    
        /**
         * PublishedFileDetails shortcutid.
         * @member {number} shortcutid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.shortcutid = 0;
    
        /**
         * PublishedFileDetails shortcutname.
         * @member {string} shortcutname
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.shortcutname = "";
    
        /**
         * PublishedFileDetails numChildren.
         * @member {number} numChildren
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.numChildren = 0;
    
        /**
         * PublishedFileDetails numReports.
         * @member {number} numReports
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.numReports = 0;
    
        /**
         * PublishedFileDetails previews.
         * @member {Array.<PublishedFileDetails.IPreview>} previews
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.previews = $util.emptyArray;
    
        /**
         * PublishedFileDetails tags.
         * @member {Array.<PublishedFileDetails.ITag>} tags
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.tags = $util.emptyArray;
    
        /**
         * PublishedFileDetails children.
         * @member {Array.<PublishedFileDetails.IChild>} children
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.children = $util.emptyArray;
    
        /**
         * PublishedFileDetails kvtags.
         * @member {Array.<PublishedFileDetails.IKVTag>} kvtags
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.kvtags = $util.emptyArray;
    
        /**
         * PublishedFileDetails voteData.
         * @member {PublishedFileDetails.IVoteData|null|undefined} voteData
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.voteData = null;
    
        /**
         * PublishedFileDetails timeSubscribed.
         * @member {number} timeSubscribed
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.timeSubscribed = 0;
    
        /**
         * Creates a new PublishedFileDetails instance using the specified properties.
         * @function create
         * @memberof PublishedFileDetails
         * @static
         * @param {IPublishedFileDetails=} [properties] Properties to set
         * @returns {PublishedFileDetails} PublishedFileDetails instance
         */
        PublishedFileDetails.create = function create(properties) {
            return new PublishedFileDetails(properties);
        };
    
        /**
         * Encodes the specified PublishedFileDetails message. Does not implicitly {@link PublishedFileDetails.verify|verify} messages.
         * @function encode
         * @memberof PublishedFileDetails
         * @static
         * @param {IPublishedFileDetails} message PublishedFileDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedFileDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.publishedfileid);
            if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.creator);
            if (message.creatorAppid != null && Object.hasOwnProperty.call(message, "creatorAppid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.creatorAppid);
            if (message.consumerAppid != null && Object.hasOwnProperty.call(message, "consumerAppid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.consumerAppid);
            if (message.consumerShortcutid != null && Object.hasOwnProperty.call(message, "consumerShortcutid"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.consumerShortcutid);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filename);
            if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.fileSize);
            if (message.previewFileSize != null && Object.hasOwnProperty.call(message, "previewFileSize"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.previewFileSize);
            if (message.fileUrl != null && Object.hasOwnProperty.call(message, "fileUrl"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.fileUrl);
            if (message.previewUrl != null && Object.hasOwnProperty.call(message, "previewUrl"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.previewUrl);
            if (message.youtubevideoid != null && Object.hasOwnProperty.call(message, "youtubevideoid"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.youtubevideoid);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.url);
            if (message.hcontentFile != null && Object.hasOwnProperty.call(message, "hcontentFile"))
                writer.uint32(/* id 14, wireType 1 =*/113).fixed64(message.hcontentFile);
            if (message.hcontentPreview != null && Object.hasOwnProperty.call(message, "hcontentPreview"))
                writer.uint32(/* id 15, wireType 1 =*/121).fixed64(message.hcontentPreview);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.title);
            if (message.fileDescription != null && Object.hasOwnProperty.call(message, "fileDescription"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.fileDescription);
            if (message.shortDescription != null && Object.hasOwnProperty.call(message, "shortDescription"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.shortDescription);
            if (message.timeCreated != null && Object.hasOwnProperty.call(message, "timeCreated"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.timeCreated);
            if (message.timeUpdated != null && Object.hasOwnProperty.call(message, "timeUpdated"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.timeUpdated);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.visibility);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.flags);
            if (message.workshopFile != null && Object.hasOwnProperty.call(message, "workshopFile"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.workshopFile);
            if (message.workshopAccepted != null && Object.hasOwnProperty.call(message, "workshopAccepted"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.workshopAccepted);
            if (message.showSubscribeAll != null && Object.hasOwnProperty.call(message, "showSubscribeAll"))
                writer.uint32(/* id 25, wireType 0 =*/200).bool(message.showSubscribeAll);
            if (message.numCommentsDeveloper != null && Object.hasOwnProperty.call(message, "numCommentsDeveloper"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.numCommentsDeveloper);
            if (message.numCommentsPublic != null && Object.hasOwnProperty.call(message, "numCommentsPublic"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.numCommentsPublic);
            if (message.banned != null && Object.hasOwnProperty.call(message, "banned"))
                writer.uint32(/* id 28, wireType 0 =*/224).bool(message.banned);
            if (message.banReason != null && Object.hasOwnProperty.call(message, "banReason"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.banReason);
            if (message.banner != null && Object.hasOwnProperty.call(message, "banner"))
                writer.uint32(/* id 30, wireType 1 =*/241).fixed64(message.banner);
            if (message.canBeDeleted != null && Object.hasOwnProperty.call(message, "canBeDeleted"))
                writer.uint32(/* id 31, wireType 0 =*/248).bool(message.canBeDeleted);
            if (message.incompatible != null && Object.hasOwnProperty.call(message, "incompatible"))
                writer.uint32(/* id 32, wireType 0 =*/256).bool(message.incompatible);
            if (message.appName != null && Object.hasOwnProperty.call(message, "appName"))
                writer.uint32(/* id 33, wireType 2 =*/266).string(message.appName);
            if (message.fileType != null && Object.hasOwnProperty.call(message, "fileType"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.fileType);
            if (message.canSubscribe != null && Object.hasOwnProperty.call(message, "canSubscribe"))
                writer.uint32(/* id 35, wireType 0 =*/280).bool(message.canSubscribe);
            if (message.subscriptions != null && Object.hasOwnProperty.call(message, "subscriptions"))
                writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.subscriptions);
            if (message.favorited != null && Object.hasOwnProperty.call(message, "favorited"))
                writer.uint32(/* id 37, wireType 0 =*/296).uint32(message.favorited);
            if (message.followers != null && Object.hasOwnProperty.call(message, "followers"))
                writer.uint32(/* id 38, wireType 0 =*/304).uint32(message.followers);
            if (message.lifetimeSubscriptions != null && Object.hasOwnProperty.call(message, "lifetimeSubscriptions"))
                writer.uint32(/* id 39, wireType 0 =*/312).uint32(message.lifetimeSubscriptions);
            if (message.lifetimeFavorited != null && Object.hasOwnProperty.call(message, "lifetimeFavorited"))
                writer.uint32(/* id 40, wireType 0 =*/320).uint32(message.lifetimeFavorited);
            if (message.lifetimeFollowers != null && Object.hasOwnProperty.call(message, "lifetimeFollowers"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.lifetimeFollowers);
            if (message.views != null && Object.hasOwnProperty.call(message, "views"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.views);
            if (message.imageWidth != null && Object.hasOwnProperty.call(message, "imageWidth"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.imageWidth);
            if (message.imageHeight != null && Object.hasOwnProperty.call(message, "imageHeight"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.imageHeight);
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 45, wireType 2 =*/362).string(message.imageUrl);
            if (message.spoilerTag != null && Object.hasOwnProperty.call(message, "spoilerTag"))
                writer.uint32(/* id 46, wireType 0 =*/368).bool(message.spoilerTag);
            if (message.shortcutid != null && Object.hasOwnProperty.call(message, "shortcutid"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.shortcutid);
            if (message.shortcutname != null && Object.hasOwnProperty.call(message, "shortcutname"))
                writer.uint32(/* id 48, wireType 2 =*/386).string(message.shortcutname);
            if (message.numChildren != null && Object.hasOwnProperty.call(message, "numChildren"))
                writer.uint32(/* id 49, wireType 0 =*/392).uint32(message.numChildren);
            if (message.numReports != null && Object.hasOwnProperty.call(message, "numReports"))
                writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.numReports);
            if (message.previews != null && message.previews.length)
                for (var i = 0; i < message.previews.length; ++i)
                    $root.PublishedFileDetails.Preview.encode(message.previews[i], writer.uint32(/* id 51, wireType 2 =*/410).fork()).ldelim();
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.PublishedFileDetails.Tag.encode(message.tags[i], writer.uint32(/* id 52, wireType 2 =*/418).fork()).ldelim();
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.PublishedFileDetails.Child.encode(message.children[i], writer.uint32(/* id 53, wireType 2 =*/426).fork()).ldelim();
            if (message.kvtags != null && message.kvtags.length)
                for (var i = 0; i < message.kvtags.length; ++i)
                    $root.PublishedFileDetails.KVTag.encode(message.kvtags[i], writer.uint32(/* id 54, wireType 2 =*/434).fork()).ldelim();
            if (message.voteData != null && Object.hasOwnProperty.call(message, "voteData"))
                $root.PublishedFileDetails.VoteData.encode(message.voteData, writer.uint32(/* id 55, wireType 2 =*/442).fork()).ldelim();
            if (message.timeSubscribed != null && Object.hasOwnProperty.call(message, "timeSubscribed"))
                writer.uint32(/* id 56, wireType 0 =*/448).uint32(message.timeSubscribed);
            return writer;
        };
    
        /**
         * Encodes the specified PublishedFileDetails message, length delimited. Does not implicitly {@link PublishedFileDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PublishedFileDetails
         * @static
         * @param {IPublishedFileDetails} message PublishedFileDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedFileDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PublishedFileDetails message from the specified reader or buffer.
         * @function decode
         * @memberof PublishedFileDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PublishedFileDetails} PublishedFileDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedFileDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.result = reader.uint32();
                        break;
                    }
                case 2: {
                        message.publishedfileid = reader.uint64();
                        break;
                    }
                case 3: {
                        message.creator = reader.fixed64();
                        break;
                    }
                case 4: {
                        message.creatorAppid = reader.uint32();
                        break;
                    }
                case 5: {
                        message.consumerAppid = reader.uint32();
                        break;
                    }
                case 6: {
                        message.consumerShortcutid = reader.uint32();
                        break;
                    }
                case 7: {
                        message.filename = reader.string();
                        break;
                    }
                case 8: {
                        message.fileSize = reader.uint64();
                        break;
                    }
                case 9: {
                        message.previewFileSize = reader.uint64();
                        break;
                    }
                case 10: {
                        message.fileUrl = reader.string();
                        break;
                    }
                case 11: {
                        message.previewUrl = reader.string();
                        break;
                    }
                case 12: {
                        message.youtubevideoid = reader.string();
                        break;
                    }
                case 13: {
                        message.url = reader.string();
                        break;
                    }
                case 14: {
                        message.hcontentFile = reader.fixed64();
                        break;
                    }
                case 15: {
                        message.hcontentPreview = reader.fixed64();
                        break;
                    }
                case 16: {
                        message.title = reader.string();
                        break;
                    }
                case 17: {
                        message.fileDescription = reader.string();
                        break;
                    }
                case 18: {
                        message.shortDescription = reader.string();
                        break;
                    }
                case 19: {
                        message.timeCreated = reader.uint32();
                        break;
                    }
                case 20: {
                        message.timeUpdated = reader.uint32();
                        break;
                    }
                case 21: {
                        message.visibility = reader.uint32();
                        break;
                    }
                case 22: {
                        message.flags = reader.uint32();
                        break;
                    }
                case 23: {
                        message.workshopFile = reader.bool();
                        break;
                    }
                case 24: {
                        message.workshopAccepted = reader.bool();
                        break;
                    }
                case 25: {
                        message.showSubscribeAll = reader.bool();
                        break;
                    }
                case 26: {
                        message.numCommentsDeveloper = reader.int32();
                        break;
                    }
                case 27: {
                        message.numCommentsPublic = reader.int32();
                        break;
                    }
                case 28: {
                        message.banned = reader.bool();
                        break;
                    }
                case 29: {
                        message.banReason = reader.string();
                        break;
                    }
                case 30: {
                        message.banner = reader.fixed64();
                        break;
                    }
                case 31: {
                        message.canBeDeleted = reader.bool();
                        break;
                    }
                case 32: {
                        message.incompatible = reader.bool();
                        break;
                    }
                case 33: {
                        message.appName = reader.string();
                        break;
                    }
                case 34: {
                        message.fileType = reader.uint32();
                        break;
                    }
                case 35: {
                        message.canSubscribe = reader.bool();
                        break;
                    }
                case 36: {
                        message.subscriptions = reader.uint32();
                        break;
                    }
                case 37: {
                        message.favorited = reader.uint32();
                        break;
                    }
                case 38: {
                        message.followers = reader.uint32();
                        break;
                    }
                case 39: {
                        message.lifetimeSubscriptions = reader.uint32();
                        break;
                    }
                case 40: {
                        message.lifetimeFavorited = reader.uint32();
                        break;
                    }
                case 41: {
                        message.lifetimeFollowers = reader.uint32();
                        break;
                    }
                case 42: {
                        message.views = reader.uint32();
                        break;
                    }
                case 43: {
                        message.imageWidth = reader.uint32();
                        break;
                    }
                case 44: {
                        message.imageHeight = reader.uint32();
                        break;
                    }
                case 45: {
                        message.imageUrl = reader.string();
                        break;
                    }
                case 46: {
                        message.spoilerTag = reader.bool();
                        break;
                    }
                case 47: {
                        message.shortcutid = reader.uint32();
                        break;
                    }
                case 48: {
                        message.shortcutname = reader.string();
                        break;
                    }
                case 49: {
                        message.numChildren = reader.uint32();
                        break;
                    }
                case 50: {
                        message.numReports = reader.uint32();
                        break;
                    }
                case 51: {
                        if (!(message.previews && message.previews.length))
                            message.previews = [];
                        message.previews.push($root.PublishedFileDetails.Preview.decode(reader, reader.uint32()));
                        break;
                    }
                case 52: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push($root.PublishedFileDetails.Tag.decode(reader, reader.uint32()));
                        break;
                    }
                case 53: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.PublishedFileDetails.Child.decode(reader, reader.uint32()));
                        break;
                    }
                case 54: {
                        if (!(message.kvtags && message.kvtags.length))
                            message.kvtags = [];
                        message.kvtags.push($root.PublishedFileDetails.KVTag.decode(reader, reader.uint32()));
                        break;
                    }
                case 55: {
                        message.voteData = $root.PublishedFileDetails.VoteData.decode(reader, reader.uint32());
                        break;
                    }
                case 56: {
                        message.timeSubscribed = reader.uint32();
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
         * Decodes a PublishedFileDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PublishedFileDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PublishedFileDetails} PublishedFileDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedFileDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PublishedFileDetails message.
         * @function verify
         * @memberof PublishedFileDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PublishedFileDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.creator != null && message.hasOwnProperty("creator"))
                if (!$util.isInteger(message.creator) && !(message.creator && $util.isInteger(message.creator.low) && $util.isInteger(message.creator.high)))
                    return "creator: integer|Long expected";
            if (message.creatorAppid != null && message.hasOwnProperty("creatorAppid"))
                if (!$util.isInteger(message.creatorAppid))
                    return "creatorAppid: integer expected";
            if (message.consumerAppid != null && message.hasOwnProperty("consumerAppid"))
                if (!$util.isInteger(message.consumerAppid))
                    return "consumerAppid: integer expected";
            if (message.consumerShortcutid != null && message.hasOwnProperty("consumerShortcutid"))
                if (!$util.isInteger(message.consumerShortcutid))
                    return "consumerShortcutid: integer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                if (!$util.isInteger(message.fileSize) && !(message.fileSize && $util.isInteger(message.fileSize.low) && $util.isInteger(message.fileSize.high)))
                    return "fileSize: integer|Long expected";
            if (message.previewFileSize != null && message.hasOwnProperty("previewFileSize"))
                if (!$util.isInteger(message.previewFileSize) && !(message.previewFileSize && $util.isInteger(message.previewFileSize.low) && $util.isInteger(message.previewFileSize.high)))
                    return "previewFileSize: integer|Long expected";
            if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                if (!$util.isString(message.fileUrl))
                    return "fileUrl: string expected";
            if (message.previewUrl != null && message.hasOwnProperty("previewUrl"))
                if (!$util.isString(message.previewUrl))
                    return "previewUrl: string expected";
            if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                if (!$util.isString(message.youtubevideoid))
                    return "youtubevideoid: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.hcontentFile != null && message.hasOwnProperty("hcontentFile"))
                if (!$util.isInteger(message.hcontentFile) && !(message.hcontentFile && $util.isInteger(message.hcontentFile.low) && $util.isInteger(message.hcontentFile.high)))
                    return "hcontentFile: integer|Long expected";
            if (message.hcontentPreview != null && message.hasOwnProperty("hcontentPreview"))
                if (!$util.isInteger(message.hcontentPreview) && !(message.hcontentPreview && $util.isInteger(message.hcontentPreview.low) && $util.isInteger(message.hcontentPreview.high)))
                    return "hcontentPreview: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.fileDescription != null && message.hasOwnProperty("fileDescription"))
                if (!$util.isString(message.fileDescription))
                    return "fileDescription: string expected";
            if (message.shortDescription != null && message.hasOwnProperty("shortDescription"))
                if (!$util.isString(message.shortDescription))
                    return "shortDescription: string expected";
            if (message.timeCreated != null && message.hasOwnProperty("timeCreated"))
                if (!$util.isInteger(message.timeCreated))
                    return "timeCreated: integer expected";
            if (message.timeUpdated != null && message.hasOwnProperty("timeUpdated"))
                if (!$util.isInteger(message.timeUpdated))
                    return "timeUpdated: integer expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isInteger(message.visibility))
                    return "visibility: integer expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.workshopFile != null && message.hasOwnProperty("workshopFile"))
                if (typeof message.workshopFile !== "boolean")
                    return "workshopFile: boolean expected";
            if (message.workshopAccepted != null && message.hasOwnProperty("workshopAccepted"))
                if (typeof message.workshopAccepted !== "boolean")
                    return "workshopAccepted: boolean expected";
            if (message.showSubscribeAll != null && message.hasOwnProperty("showSubscribeAll"))
                if (typeof message.showSubscribeAll !== "boolean")
                    return "showSubscribeAll: boolean expected";
            if (message.numCommentsDeveloper != null && message.hasOwnProperty("numCommentsDeveloper"))
                if (!$util.isInteger(message.numCommentsDeveloper))
                    return "numCommentsDeveloper: integer expected";
            if (message.numCommentsPublic != null && message.hasOwnProperty("numCommentsPublic"))
                if (!$util.isInteger(message.numCommentsPublic))
                    return "numCommentsPublic: integer expected";
            if (message.banned != null && message.hasOwnProperty("banned"))
                if (typeof message.banned !== "boolean")
                    return "banned: boolean expected";
            if (message.banReason != null && message.hasOwnProperty("banReason"))
                if (!$util.isString(message.banReason))
                    return "banReason: string expected";
            if (message.banner != null && message.hasOwnProperty("banner"))
                if (!$util.isInteger(message.banner) && !(message.banner && $util.isInteger(message.banner.low) && $util.isInteger(message.banner.high)))
                    return "banner: integer|Long expected";
            if (message.canBeDeleted != null && message.hasOwnProperty("canBeDeleted"))
                if (typeof message.canBeDeleted !== "boolean")
                    return "canBeDeleted: boolean expected";
            if (message.incompatible != null && message.hasOwnProperty("incompatible"))
                if (typeof message.incompatible !== "boolean")
                    return "incompatible: boolean expected";
            if (message.appName != null && message.hasOwnProperty("appName"))
                if (!$util.isString(message.appName))
                    return "appName: string expected";
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                if (!$util.isInteger(message.fileType))
                    return "fileType: integer expected";
            if (message.canSubscribe != null && message.hasOwnProperty("canSubscribe"))
                if (typeof message.canSubscribe !== "boolean")
                    return "canSubscribe: boolean expected";
            if (message.subscriptions != null && message.hasOwnProperty("subscriptions"))
                if (!$util.isInteger(message.subscriptions))
                    return "subscriptions: integer expected";
            if (message.favorited != null && message.hasOwnProperty("favorited"))
                if (!$util.isInteger(message.favorited))
                    return "favorited: integer expected";
            if (message.followers != null && message.hasOwnProperty("followers"))
                if (!$util.isInteger(message.followers))
                    return "followers: integer expected";
            if (message.lifetimeSubscriptions != null && message.hasOwnProperty("lifetimeSubscriptions"))
                if (!$util.isInteger(message.lifetimeSubscriptions))
                    return "lifetimeSubscriptions: integer expected";
            if (message.lifetimeFavorited != null && message.hasOwnProperty("lifetimeFavorited"))
                if (!$util.isInteger(message.lifetimeFavorited))
                    return "lifetimeFavorited: integer expected";
            if (message.lifetimeFollowers != null && message.hasOwnProperty("lifetimeFollowers"))
                if (!$util.isInteger(message.lifetimeFollowers))
                    return "lifetimeFollowers: integer expected";
            if (message.views != null && message.hasOwnProperty("views"))
                if (!$util.isInteger(message.views))
                    return "views: integer expected";
            if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
                if (!$util.isInteger(message.imageWidth))
                    return "imageWidth: integer expected";
            if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
                if (!$util.isInteger(message.imageHeight))
                    return "imageHeight: integer expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            if (message.spoilerTag != null && message.hasOwnProperty("spoilerTag"))
                if (typeof message.spoilerTag !== "boolean")
                    return "spoilerTag: boolean expected";
            if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                if (!$util.isInteger(message.shortcutid))
                    return "shortcutid: integer expected";
            if (message.shortcutname != null && message.hasOwnProperty("shortcutname"))
                if (!$util.isString(message.shortcutname))
                    return "shortcutname: string expected";
            if (message.numChildren != null && message.hasOwnProperty("numChildren"))
                if (!$util.isInteger(message.numChildren))
                    return "numChildren: integer expected";
            if (message.numReports != null && message.hasOwnProperty("numReports"))
                if (!$util.isInteger(message.numReports))
                    return "numReports: integer expected";
            if (message.previews != null && message.hasOwnProperty("previews")) {
                if (!Array.isArray(message.previews))
                    return "previews: array expected";
                for (var i = 0; i < message.previews.length; ++i) {
                    var error = $root.PublishedFileDetails.Preview.verify(message.previews[i]);
                    if (error)
                        return "previews." + error;
                }
            }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.PublishedFileDetails.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.PublishedFileDetails.Child.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            if (message.kvtags != null && message.hasOwnProperty("kvtags")) {
                if (!Array.isArray(message.kvtags))
                    return "kvtags: array expected";
                for (var i = 0; i < message.kvtags.length; ++i) {
                    var error = $root.PublishedFileDetails.KVTag.verify(message.kvtags[i]);
                    if (error)
                        return "kvtags." + error;
                }
            }
            if (message.voteData != null && message.hasOwnProperty("voteData")) {
                var error = $root.PublishedFileDetails.VoteData.verify(message.voteData);
                if (error)
                    return "voteData." + error;
            }
            if (message.timeSubscribed != null && message.hasOwnProperty("timeSubscribed"))
                if (!$util.isInteger(message.timeSubscribed))
                    return "timeSubscribed: integer expected";
            return null;
        };
    
        /**
         * Creates a PublishedFileDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PublishedFileDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PublishedFileDetails} PublishedFileDetails
         */
        PublishedFileDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.PublishedFileDetails)
                return object;
            var message = new $root.PublishedFileDetails();
            if (object.result != null)
                message.result = object.result >>> 0;
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.creator != null)
                if ($util.Long)
                    (message.creator = $util.Long.fromValue(object.creator)).unsigned = false;
                else if (typeof object.creator === "string")
                    message.creator = parseInt(object.creator, 10);
                else if (typeof object.creator === "number")
                    message.creator = object.creator;
                else if (typeof object.creator === "object")
                    message.creator = new $util.LongBits(object.creator.low >>> 0, object.creator.high >>> 0).toNumber();
            if (object.creatorAppid != null)
                message.creatorAppid = object.creatorAppid >>> 0;
            if (object.consumerAppid != null)
                message.consumerAppid = object.consumerAppid >>> 0;
            if (object.consumerShortcutid != null)
                message.consumerShortcutid = object.consumerShortcutid >>> 0;
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.fileSize != null)
                if ($util.Long)
                    (message.fileSize = $util.Long.fromValue(object.fileSize)).unsigned = true;
                else if (typeof object.fileSize === "string")
                    message.fileSize = parseInt(object.fileSize, 10);
                else if (typeof object.fileSize === "number")
                    message.fileSize = object.fileSize;
                else if (typeof object.fileSize === "object")
                    message.fileSize = new $util.LongBits(object.fileSize.low >>> 0, object.fileSize.high >>> 0).toNumber(true);
            if (object.previewFileSize != null)
                if ($util.Long)
                    (message.previewFileSize = $util.Long.fromValue(object.previewFileSize)).unsigned = true;
                else if (typeof object.previewFileSize === "string")
                    message.previewFileSize = parseInt(object.previewFileSize, 10);
                else if (typeof object.previewFileSize === "number")
                    message.previewFileSize = object.previewFileSize;
                else if (typeof object.previewFileSize === "object")
                    message.previewFileSize = new $util.LongBits(object.previewFileSize.low >>> 0, object.previewFileSize.high >>> 0).toNumber(true);
            if (object.fileUrl != null)
                message.fileUrl = String(object.fileUrl);
            if (object.previewUrl != null)
                message.previewUrl = String(object.previewUrl);
            if (object.youtubevideoid != null)
                message.youtubevideoid = String(object.youtubevideoid);
            if (object.url != null)
                message.url = String(object.url);
            if (object.hcontentFile != null)
                if ($util.Long)
                    (message.hcontentFile = $util.Long.fromValue(object.hcontentFile)).unsigned = false;
                else if (typeof object.hcontentFile === "string")
                    message.hcontentFile = parseInt(object.hcontentFile, 10);
                else if (typeof object.hcontentFile === "number")
                    message.hcontentFile = object.hcontentFile;
                else if (typeof object.hcontentFile === "object")
                    message.hcontentFile = new $util.LongBits(object.hcontentFile.low >>> 0, object.hcontentFile.high >>> 0).toNumber();
            if (object.hcontentPreview != null)
                if ($util.Long)
                    (message.hcontentPreview = $util.Long.fromValue(object.hcontentPreview)).unsigned = false;
                else if (typeof object.hcontentPreview === "string")
                    message.hcontentPreview = parseInt(object.hcontentPreview, 10);
                else if (typeof object.hcontentPreview === "number")
                    message.hcontentPreview = object.hcontentPreview;
                else if (typeof object.hcontentPreview === "object")
                    message.hcontentPreview = new $util.LongBits(object.hcontentPreview.low >>> 0, object.hcontentPreview.high >>> 0).toNumber();
            if (object.title != null)
                message.title = String(object.title);
            if (object.fileDescription != null)
                message.fileDescription = String(object.fileDescription);
            if (object.shortDescription != null)
                message.shortDescription = String(object.shortDescription);
            if (object.timeCreated != null)
                message.timeCreated = object.timeCreated >>> 0;
            if (object.timeUpdated != null)
                message.timeUpdated = object.timeUpdated >>> 0;
            if (object.visibility != null)
                message.visibility = object.visibility >>> 0;
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.workshopFile != null)
                message.workshopFile = Boolean(object.workshopFile);
            if (object.workshopAccepted != null)
                message.workshopAccepted = Boolean(object.workshopAccepted);
            if (object.showSubscribeAll != null)
                message.showSubscribeAll = Boolean(object.showSubscribeAll);
            if (object.numCommentsDeveloper != null)
                message.numCommentsDeveloper = object.numCommentsDeveloper | 0;
            if (object.numCommentsPublic != null)
                message.numCommentsPublic = object.numCommentsPublic | 0;
            if (object.banned != null)
                message.banned = Boolean(object.banned);
            if (object.banReason != null)
                message.banReason = String(object.banReason);
            if (object.banner != null)
                if ($util.Long)
                    (message.banner = $util.Long.fromValue(object.banner)).unsigned = false;
                else if (typeof object.banner === "string")
                    message.banner = parseInt(object.banner, 10);
                else if (typeof object.banner === "number")
                    message.banner = object.banner;
                else if (typeof object.banner === "object")
                    message.banner = new $util.LongBits(object.banner.low >>> 0, object.banner.high >>> 0).toNumber();
            if (object.canBeDeleted != null)
                message.canBeDeleted = Boolean(object.canBeDeleted);
            if (object.incompatible != null)
                message.incompatible = Boolean(object.incompatible);
            if (object.appName != null)
                message.appName = String(object.appName);
            if (object.fileType != null)
                message.fileType = object.fileType >>> 0;
            if (object.canSubscribe != null)
                message.canSubscribe = Boolean(object.canSubscribe);
            if (object.subscriptions != null)
                message.subscriptions = object.subscriptions >>> 0;
            if (object.favorited != null)
                message.favorited = object.favorited >>> 0;
            if (object.followers != null)
                message.followers = object.followers >>> 0;
            if (object.lifetimeSubscriptions != null)
                message.lifetimeSubscriptions = object.lifetimeSubscriptions >>> 0;
            if (object.lifetimeFavorited != null)
                message.lifetimeFavorited = object.lifetimeFavorited >>> 0;
            if (object.lifetimeFollowers != null)
                message.lifetimeFollowers = object.lifetimeFollowers >>> 0;
            if (object.views != null)
                message.views = object.views >>> 0;
            if (object.imageWidth != null)
                message.imageWidth = object.imageWidth >>> 0;
            if (object.imageHeight != null)
                message.imageHeight = object.imageHeight >>> 0;
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            if (object.spoilerTag != null)
                message.spoilerTag = Boolean(object.spoilerTag);
            if (object.shortcutid != null)
                message.shortcutid = object.shortcutid >>> 0;
            if (object.shortcutname != null)
                message.shortcutname = String(object.shortcutname);
            if (object.numChildren != null)
                message.numChildren = object.numChildren >>> 0;
            if (object.numReports != null)
                message.numReports = object.numReports >>> 0;
            if (object.previews) {
                if (!Array.isArray(object.previews))
                    throw TypeError(".PublishedFileDetails.previews: array expected");
                message.previews = [];
                for (var i = 0; i < object.previews.length; ++i) {
                    if (typeof object.previews[i] !== "object")
                        throw TypeError(".PublishedFileDetails.previews: object expected");
                    message.previews[i] = $root.PublishedFileDetails.Preview.fromObject(object.previews[i]);
                }
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".PublishedFileDetails.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".PublishedFileDetails.tags: object expected");
                    message.tags[i] = $root.PublishedFileDetails.Tag.fromObject(object.tags[i]);
                }
            }
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".PublishedFileDetails.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".PublishedFileDetails.children: object expected");
                    message.children[i] = $root.PublishedFileDetails.Child.fromObject(object.children[i]);
                }
            }
            if (object.kvtags) {
                if (!Array.isArray(object.kvtags))
                    throw TypeError(".PublishedFileDetails.kvtags: array expected");
                message.kvtags = [];
                for (var i = 0; i < object.kvtags.length; ++i) {
                    if (typeof object.kvtags[i] !== "object")
                        throw TypeError(".PublishedFileDetails.kvtags: object expected");
                    message.kvtags[i] = $root.PublishedFileDetails.KVTag.fromObject(object.kvtags[i]);
                }
            }
            if (object.voteData != null) {
                if (typeof object.voteData !== "object")
                    throw TypeError(".PublishedFileDetails.voteData: object expected");
                message.voteData = $root.PublishedFileDetails.VoteData.fromObject(object.voteData);
            }
            if (object.timeSubscribed != null)
                message.timeSubscribed = object.timeSubscribed >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a PublishedFileDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PublishedFileDetails
         * @static
         * @param {PublishedFileDetails} message PublishedFileDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PublishedFileDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.previews = [];
                object.tags = [];
                object.children = [];
                object.kvtags = [];
            }
            if (options.defaults) {
                object.result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.creator = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.creator = options.longs === String ? "0" : 0;
                object.creatorAppid = 0;
                object.consumerAppid = 0;
                object.consumerShortcutid = 0;
                object.filename = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.fileSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fileSize = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.previewFileSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.previewFileSize = options.longs === String ? "0" : 0;
                object.fileUrl = "";
                object.previewUrl = "";
                object.youtubevideoid = "";
                object.url = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.hcontentFile = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.hcontentFile = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.hcontentPreview = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.hcontentPreview = options.longs === String ? "0" : 0;
                object.title = "";
                object.fileDescription = "";
                object.shortDescription = "";
                object.timeCreated = 0;
                object.timeUpdated = 0;
                object.visibility = 0;
                object.flags = 0;
                object.workshopFile = false;
                object.workshopAccepted = false;
                object.showSubscribeAll = false;
                object.numCommentsDeveloper = 0;
                object.numCommentsPublic = 0;
                object.banned = false;
                object.banReason = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.banner = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banner = options.longs === String ? "0" : 0;
                object.canBeDeleted = false;
                object.incompatible = false;
                object.appName = "";
                object.fileType = 0;
                object.canSubscribe = false;
                object.subscriptions = 0;
                object.favorited = 0;
                object.followers = 0;
                object.lifetimeSubscriptions = 0;
                object.lifetimeFavorited = 0;
                object.lifetimeFollowers = 0;
                object.views = 0;
                object.imageWidth = 0;
                object.imageHeight = 0;
                object.imageUrl = "";
                object.spoilerTag = false;
                object.shortcutid = 0;
                object.shortcutname = "";
                object.numChildren = 0;
                object.numReports = 0;
                object.voteData = null;
                object.timeSubscribed = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.creator != null && message.hasOwnProperty("creator"))
                if (typeof message.creator === "number")
                    object.creator = options.longs === String ? String(message.creator) : message.creator;
                else
                    object.creator = options.longs === String ? $util.Long.prototype.toString.call(message.creator) : options.longs === Number ? new $util.LongBits(message.creator.low >>> 0, message.creator.high >>> 0).toNumber() : message.creator;
            if (message.creatorAppid != null && message.hasOwnProperty("creatorAppid"))
                object.creatorAppid = message.creatorAppid;
            if (message.consumerAppid != null && message.hasOwnProperty("consumerAppid"))
                object.consumerAppid = message.consumerAppid;
            if (message.consumerShortcutid != null && message.hasOwnProperty("consumerShortcutid"))
                object.consumerShortcutid = message.consumerShortcutid;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                if (typeof message.fileSize === "number")
                    object.fileSize = options.longs === String ? String(message.fileSize) : message.fileSize;
                else
                    object.fileSize = options.longs === String ? $util.Long.prototype.toString.call(message.fileSize) : options.longs === Number ? new $util.LongBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0).toNumber(true) : message.fileSize;
            if (message.previewFileSize != null && message.hasOwnProperty("previewFileSize"))
                if (typeof message.previewFileSize === "number")
                    object.previewFileSize = options.longs === String ? String(message.previewFileSize) : message.previewFileSize;
                else
                    object.previewFileSize = options.longs === String ? $util.Long.prototype.toString.call(message.previewFileSize) : options.longs === Number ? new $util.LongBits(message.previewFileSize.low >>> 0, message.previewFileSize.high >>> 0).toNumber(true) : message.previewFileSize;
            if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                object.fileUrl = message.fileUrl;
            if (message.previewUrl != null && message.hasOwnProperty("previewUrl"))
                object.previewUrl = message.previewUrl;
            if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                object.youtubevideoid = message.youtubevideoid;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.hcontentFile != null && message.hasOwnProperty("hcontentFile"))
                if (typeof message.hcontentFile === "number")
                    object.hcontentFile = options.longs === String ? String(message.hcontentFile) : message.hcontentFile;
                else
                    object.hcontentFile = options.longs === String ? $util.Long.prototype.toString.call(message.hcontentFile) : options.longs === Number ? new $util.LongBits(message.hcontentFile.low >>> 0, message.hcontentFile.high >>> 0).toNumber() : message.hcontentFile;
            if (message.hcontentPreview != null && message.hasOwnProperty("hcontentPreview"))
                if (typeof message.hcontentPreview === "number")
                    object.hcontentPreview = options.longs === String ? String(message.hcontentPreview) : message.hcontentPreview;
                else
                    object.hcontentPreview = options.longs === String ? $util.Long.prototype.toString.call(message.hcontentPreview) : options.longs === Number ? new $util.LongBits(message.hcontentPreview.low >>> 0, message.hcontentPreview.high >>> 0).toNumber() : message.hcontentPreview;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.fileDescription != null && message.hasOwnProperty("fileDescription"))
                object.fileDescription = message.fileDescription;
            if (message.shortDescription != null && message.hasOwnProperty("shortDescription"))
                object.shortDescription = message.shortDescription;
            if (message.timeCreated != null && message.hasOwnProperty("timeCreated"))
                object.timeCreated = message.timeCreated;
            if (message.timeUpdated != null && message.hasOwnProperty("timeUpdated"))
                object.timeUpdated = message.timeUpdated;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.workshopFile != null && message.hasOwnProperty("workshopFile"))
                object.workshopFile = message.workshopFile;
            if (message.workshopAccepted != null && message.hasOwnProperty("workshopAccepted"))
                object.workshopAccepted = message.workshopAccepted;
            if (message.showSubscribeAll != null && message.hasOwnProperty("showSubscribeAll"))
                object.showSubscribeAll = message.showSubscribeAll;
            if (message.numCommentsDeveloper != null && message.hasOwnProperty("numCommentsDeveloper"))
                object.numCommentsDeveloper = message.numCommentsDeveloper;
            if (message.numCommentsPublic != null && message.hasOwnProperty("numCommentsPublic"))
                object.numCommentsPublic = message.numCommentsPublic;
            if (message.banned != null && message.hasOwnProperty("banned"))
                object.banned = message.banned;
            if (message.banReason != null && message.hasOwnProperty("banReason"))
                object.banReason = message.banReason;
            if (message.banner != null && message.hasOwnProperty("banner"))
                if (typeof message.banner === "number")
                    object.banner = options.longs === String ? String(message.banner) : message.banner;
                else
                    object.banner = options.longs === String ? $util.Long.prototype.toString.call(message.banner) : options.longs === Number ? new $util.LongBits(message.banner.low >>> 0, message.banner.high >>> 0).toNumber() : message.banner;
            if (message.canBeDeleted != null && message.hasOwnProperty("canBeDeleted"))
                object.canBeDeleted = message.canBeDeleted;
            if (message.incompatible != null && message.hasOwnProperty("incompatible"))
                object.incompatible = message.incompatible;
            if (message.appName != null && message.hasOwnProperty("appName"))
                object.appName = message.appName;
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                object.fileType = message.fileType;
            if (message.canSubscribe != null && message.hasOwnProperty("canSubscribe"))
                object.canSubscribe = message.canSubscribe;
            if (message.subscriptions != null && message.hasOwnProperty("subscriptions"))
                object.subscriptions = message.subscriptions;
            if (message.favorited != null && message.hasOwnProperty("favorited"))
                object.favorited = message.favorited;
            if (message.followers != null && message.hasOwnProperty("followers"))
                object.followers = message.followers;
            if (message.lifetimeSubscriptions != null && message.hasOwnProperty("lifetimeSubscriptions"))
                object.lifetimeSubscriptions = message.lifetimeSubscriptions;
            if (message.lifetimeFavorited != null && message.hasOwnProperty("lifetimeFavorited"))
                object.lifetimeFavorited = message.lifetimeFavorited;
            if (message.lifetimeFollowers != null && message.hasOwnProperty("lifetimeFollowers"))
                object.lifetimeFollowers = message.lifetimeFollowers;
            if (message.views != null && message.hasOwnProperty("views"))
                object.views = message.views;
            if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
                object.imageWidth = message.imageWidth;
            if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
                object.imageHeight = message.imageHeight;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            if (message.spoilerTag != null && message.hasOwnProperty("spoilerTag"))
                object.spoilerTag = message.spoilerTag;
            if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                object.shortcutid = message.shortcutid;
            if (message.shortcutname != null && message.hasOwnProperty("shortcutname"))
                object.shortcutname = message.shortcutname;
            if (message.numChildren != null && message.hasOwnProperty("numChildren"))
                object.numChildren = message.numChildren;
            if (message.numReports != null && message.hasOwnProperty("numReports"))
                object.numReports = message.numReports;
            if (message.previews && message.previews.length) {
                object.previews = [];
                for (var j = 0; j < message.previews.length; ++j)
                    object.previews[j] = $root.PublishedFileDetails.Preview.toObject(message.previews[j], options);
            }
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.PublishedFileDetails.Tag.toObject(message.tags[j], options);
            }
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.PublishedFileDetails.Child.toObject(message.children[j], options);
            }
            if (message.kvtags && message.kvtags.length) {
                object.kvtags = [];
                for (var j = 0; j < message.kvtags.length; ++j)
                    object.kvtags[j] = $root.PublishedFileDetails.KVTag.toObject(message.kvtags[j], options);
            }
            if (message.voteData != null && message.hasOwnProperty("voteData"))
                object.voteData = $root.PublishedFileDetails.VoteData.toObject(message.voteData, options);
            if (message.timeSubscribed != null && message.hasOwnProperty("timeSubscribed"))
                object.timeSubscribed = message.timeSubscribed;
            return object;
        };
    
        /**
         * Converts this PublishedFileDetails to JSON.
         * @function toJSON
         * @memberof PublishedFileDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PublishedFileDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for PublishedFileDetails
         * @function getTypeUrl
         * @memberof PublishedFileDetails
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublishedFileDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PublishedFileDetails";
        };
    
        PublishedFileDetails.Tag = (function() {
    
            /**
             * Properties of a Tag.
             * @memberof PublishedFileDetails
             * @interface ITag
             * @property {string|null} [tag] Tag tag
             * @property {boolean|null} [adminonly] Tag adminonly
             */
    
            /**
             * Constructs a new Tag.
             * @memberof PublishedFileDetails
             * @classdesc Represents a Tag.
             * @implements ITag
             * @constructor
             * @param {PublishedFileDetails.ITag=} [properties] Properties to set
             */
            function Tag(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Tag tag.
             * @member {string} tag
             * @memberof PublishedFileDetails.Tag
             * @instance
             */
            Tag.prototype.tag = "";
    
            /**
             * Tag adminonly.
             * @member {boolean} adminonly
             * @memberof PublishedFileDetails.Tag
             * @instance
             */
            Tag.prototype.adminonly = false;
    
            /**
             * Creates a new Tag instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.ITag=} [properties] Properties to set
             * @returns {PublishedFileDetails.Tag} Tag instance
             */
            Tag.create = function create(properties) {
                return new Tag(properties);
            };
    
            /**
             * Encodes the specified Tag message. Does not implicitly {@link PublishedFileDetails.Tag.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.ITag} message Tag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
                if (message.adminonly != null && Object.hasOwnProperty.call(message, "adminonly"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.adminonly);
                return writer;
            };
    
            /**
             * Encodes the specified Tag message, length delimited. Does not implicitly {@link PublishedFileDetails.Tag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.ITag} message Tag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Tag message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.Tag} Tag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.Tag();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.tag = reader.string();
                            break;
                        }
                    case 2: {
                            message.adminonly = reader.bool();
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
             * Decodes a Tag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.Tag} Tag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Tag message.
             * @function verify
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tag != null && message.hasOwnProperty("tag"))
                    if (!$util.isString(message.tag))
                        return "tag: string expected";
                if (message.adminonly != null && message.hasOwnProperty("adminonly"))
                    if (typeof message.adminonly !== "boolean")
                        return "adminonly: boolean expected";
                return null;
            };
    
            /**
             * Creates a Tag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.Tag} Tag
             */
            Tag.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.Tag)
                    return object;
                var message = new $root.PublishedFileDetails.Tag();
                if (object.tag != null)
                    message.tag = String(object.tag);
                if (object.adminonly != null)
                    message.adminonly = Boolean(object.adminonly);
                return message;
            };
    
            /**
             * Creates a plain object from a Tag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.Tag} message Tag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tag = "";
                    object.adminonly = false;
                }
                if (message.tag != null && message.hasOwnProperty("tag"))
                    object.tag = message.tag;
                if (message.adminonly != null && message.hasOwnProperty("adminonly"))
                    object.adminonly = message.adminonly;
                return object;
            };
    
            /**
             * Converts this Tag to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.Tag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Tag
             * @function getTypeUrl
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Tag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/PublishedFileDetails.Tag";
            };
    
            return Tag;
        })();
    
        PublishedFileDetails.Preview = (function() {
    
            /**
             * Properties of a Preview.
             * @memberof PublishedFileDetails
             * @interface IPreview
             * @property {number|Long|null} [previewid] Preview previewid
             * @property {number|null} [sortorder] Preview sortorder
             * @property {string|null} [url] Preview url
             * @property {number|null} [size] Preview size
             * @property {string|null} [filename] Preview filename
             * @property {string|null} [youtubevideoid] Preview youtubevideoid
             */
    
            /**
             * Constructs a new Preview.
             * @memberof PublishedFileDetails
             * @classdesc Represents a Preview.
             * @implements IPreview
             * @constructor
             * @param {PublishedFileDetails.IPreview=} [properties] Properties to set
             */
            function Preview(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Preview previewid.
             * @member {number|Long} previewid
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.previewid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Preview sortorder.
             * @member {number} sortorder
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.sortorder = 0;
    
            /**
             * Preview url.
             * @member {string} url
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.url = "";
    
            /**
             * Preview size.
             * @member {number} size
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.size = 0;
    
            /**
             * Preview filename.
             * @member {string} filename
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.filename = "";
    
            /**
             * Preview youtubevideoid.
             * @member {string} youtubevideoid
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.youtubevideoid = "";
    
            /**
             * Creates a new Preview instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.IPreview=} [properties] Properties to set
             * @returns {PublishedFileDetails.Preview} Preview instance
             */
            Preview.create = function create(properties) {
                return new Preview(properties);
            };
    
            /**
             * Encodes the specified Preview message. Does not implicitly {@link PublishedFileDetails.Preview.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.IPreview} message Preview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Preview.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.previewid != null && Object.hasOwnProperty.call(message, "previewid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.previewid);
                if (message.sortorder != null && Object.hasOwnProperty.call(message, "sortorder"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sortorder);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
                if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.size);
                if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.filename);
                if (message.youtubevideoid != null && Object.hasOwnProperty.call(message, "youtubevideoid"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.youtubevideoid);
                return writer;
            };
    
            /**
             * Encodes the specified Preview message, length delimited. Does not implicitly {@link PublishedFileDetails.Preview.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.IPreview} message Preview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Preview.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Preview message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.Preview} Preview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Preview.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.Preview();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.previewid = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.sortorder = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.url = reader.string();
                            break;
                        }
                    case 4: {
                            message.size = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.filename = reader.string();
                            break;
                        }
                    case 6: {
                            message.youtubevideoid = reader.string();
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
             * Decodes a Preview message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.Preview} Preview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Preview.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Preview message.
             * @function verify
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Preview.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.previewid != null && message.hasOwnProperty("previewid"))
                    if (!$util.isInteger(message.previewid) && !(message.previewid && $util.isInteger(message.previewid.low) && $util.isInteger(message.previewid.high)))
                        return "previewid: integer|Long expected";
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    if (!$util.isInteger(message.sortorder))
                        return "sortorder: integer expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.size != null && message.hasOwnProperty("size"))
                    if (!$util.isInteger(message.size))
                        return "size: integer expected";
                if (message.filename != null && message.hasOwnProperty("filename"))
                    if (!$util.isString(message.filename))
                        return "filename: string expected";
                if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                    if (!$util.isString(message.youtubevideoid))
                        return "youtubevideoid: string expected";
                return null;
            };
    
            /**
             * Creates a Preview message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.Preview} Preview
             */
            Preview.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.Preview)
                    return object;
                var message = new $root.PublishedFileDetails.Preview();
                if (object.previewid != null)
                    if ($util.Long)
                        (message.previewid = $util.Long.fromValue(object.previewid)).unsigned = true;
                    else if (typeof object.previewid === "string")
                        message.previewid = parseInt(object.previewid, 10);
                    else if (typeof object.previewid === "number")
                        message.previewid = object.previewid;
                    else if (typeof object.previewid === "object")
                        message.previewid = new $util.LongBits(object.previewid.low >>> 0, object.previewid.high >>> 0).toNumber(true);
                if (object.sortorder != null)
                    message.sortorder = object.sortorder >>> 0;
                if (object.url != null)
                    message.url = String(object.url);
                if (object.size != null)
                    message.size = object.size >>> 0;
                if (object.filename != null)
                    message.filename = String(object.filename);
                if (object.youtubevideoid != null)
                    message.youtubevideoid = String(object.youtubevideoid);
                return message;
            };
    
            /**
             * Creates a plain object from a Preview message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.Preview} message Preview
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Preview.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.previewid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.previewid = options.longs === String ? "0" : 0;
                    object.sortorder = 0;
                    object.url = "";
                    object.size = 0;
                    object.filename = "";
                    object.youtubevideoid = "";
                }
                if (message.previewid != null && message.hasOwnProperty("previewid"))
                    if (typeof message.previewid === "number")
                        object.previewid = options.longs === String ? String(message.previewid) : message.previewid;
                    else
                        object.previewid = options.longs === String ? $util.Long.prototype.toString.call(message.previewid) : options.longs === Number ? new $util.LongBits(message.previewid.low >>> 0, message.previewid.high >>> 0).toNumber(true) : message.previewid;
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    object.sortorder = message.sortorder;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.size != null && message.hasOwnProperty("size"))
                    object.size = message.size;
                if (message.filename != null && message.hasOwnProperty("filename"))
                    object.filename = message.filename;
                if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                    object.youtubevideoid = message.youtubevideoid;
                return object;
            };
    
            /**
             * Converts this Preview to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.Preview
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Preview.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Preview
             * @function getTypeUrl
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Preview.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/PublishedFileDetails.Preview";
            };
    
            return Preview;
        })();
    
        PublishedFileDetails.Child = (function() {
    
            /**
             * Properties of a Child.
             * @memberof PublishedFileDetails
             * @interface IChild
             * @property {number|Long|null} [publishedfileid] Child publishedfileid
             * @property {number|null} [sortorder] Child sortorder
             * @property {number|null} [fileType] Child fileType
             */
    
            /**
             * Constructs a new Child.
             * @memberof PublishedFileDetails
             * @classdesc Represents a Child.
             * @implements IChild
             * @constructor
             * @param {PublishedFileDetails.IChild=} [properties] Properties to set
             */
            function Child(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Child publishedfileid.
             * @member {number|Long} publishedfileid
             * @memberof PublishedFileDetails.Child
             * @instance
             */
            Child.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Child sortorder.
             * @member {number} sortorder
             * @memberof PublishedFileDetails.Child
             * @instance
             */
            Child.prototype.sortorder = 0;
    
            /**
             * Child fileType.
             * @member {number} fileType
             * @memberof PublishedFileDetails.Child
             * @instance
             */
            Child.prototype.fileType = 0;
    
            /**
             * Creates a new Child instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.IChild=} [properties] Properties to set
             * @returns {PublishedFileDetails.Child} Child instance
             */
            Child.create = function create(properties) {
                return new Child(properties);
            };
    
            /**
             * Encodes the specified Child message. Does not implicitly {@link PublishedFileDetails.Child.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.IChild} message Child message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Child.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
                if (message.sortorder != null && Object.hasOwnProperty.call(message, "sortorder"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sortorder);
                if (message.fileType != null && Object.hasOwnProperty.call(message, "fileType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fileType);
                return writer;
            };
    
            /**
             * Encodes the specified Child message, length delimited. Does not implicitly {@link PublishedFileDetails.Child.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.IChild} message Child message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Child.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Child message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.Child} Child
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Child.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.Child();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.publishedfileid = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.sortorder = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.fileType = reader.uint32();
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
             * Decodes a Child message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.Child} Child
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Child.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Child message.
             * @function verify
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Child.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                    if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                        return "publishedfileid: integer|Long expected";
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    if (!$util.isInteger(message.sortorder))
                        return "sortorder: integer expected";
                if (message.fileType != null && message.hasOwnProperty("fileType"))
                    if (!$util.isInteger(message.fileType))
                        return "fileType: integer expected";
                return null;
            };
    
            /**
             * Creates a Child message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.Child} Child
             */
            Child.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.Child)
                    return object;
                var message = new $root.PublishedFileDetails.Child();
                if (object.publishedfileid != null)
                    if ($util.Long)
                        (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                    else if (typeof object.publishedfileid === "string")
                        message.publishedfileid = parseInt(object.publishedfileid, 10);
                    else if (typeof object.publishedfileid === "number")
                        message.publishedfileid = object.publishedfileid;
                    else if (typeof object.publishedfileid === "object")
                        message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
                if (object.sortorder != null)
                    message.sortorder = object.sortorder >>> 0;
                if (object.fileType != null)
                    message.fileType = object.fileType >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Child message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.Child} message Child
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Child.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.publishedfileid = options.longs === String ? "0" : 0;
                    object.sortorder = 0;
                    object.fileType = 0;
                }
                if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                    if (typeof message.publishedfileid === "number")
                        object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                    else
                        object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    object.sortorder = message.sortorder;
                if (message.fileType != null && message.hasOwnProperty("fileType"))
                    object.fileType = message.fileType;
                return object;
            };
    
            /**
             * Converts this Child to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.Child
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Child.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Child
             * @function getTypeUrl
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Child.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/PublishedFileDetails.Child";
            };
    
            return Child;
        })();
    
        PublishedFileDetails.KVTag = (function() {
    
            /**
             * Properties of a KVTag.
             * @memberof PublishedFileDetails
             * @interface IKVTag
             * @property {string|null} [key] KVTag key
             * @property {string|null} [value] KVTag value
             */
    
            /**
             * Constructs a new KVTag.
             * @memberof PublishedFileDetails
             * @classdesc Represents a KVTag.
             * @implements IKVTag
             * @constructor
             * @param {PublishedFileDetails.IKVTag=} [properties] Properties to set
             */
            function KVTag(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * KVTag key.
             * @member {string} key
             * @memberof PublishedFileDetails.KVTag
             * @instance
             */
            KVTag.prototype.key = "";
    
            /**
             * KVTag value.
             * @member {string} value
             * @memberof PublishedFileDetails.KVTag
             * @instance
             */
            KVTag.prototype.value = "";
    
            /**
             * Creates a new KVTag instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.IKVTag=} [properties] Properties to set
             * @returns {PublishedFileDetails.KVTag} KVTag instance
             */
            KVTag.create = function create(properties) {
                return new KVTag(properties);
            };
    
            /**
             * Encodes the specified KVTag message. Does not implicitly {@link PublishedFileDetails.KVTag.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.IKVTag} message KVTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KVTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified KVTag message, length delimited. Does not implicitly {@link PublishedFileDetails.KVTag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.IKVTag} message KVTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KVTag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a KVTag message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.KVTag} KVTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KVTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.KVTag();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.key = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.string();
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
             * Decodes a KVTag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.KVTag} KVTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KVTag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a KVTag message.
             * @function verify
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KVTag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a KVTag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.KVTag} KVTag
             */
            KVTag.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.KVTag)
                    return object;
                var message = new $root.PublishedFileDetails.KVTag();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a KVTag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.KVTag} message KVTag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KVTag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    object.value = "";
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this KVTag to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.KVTag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KVTag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for KVTag
             * @function getTypeUrl
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            KVTag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/PublishedFileDetails.KVTag";
            };
    
            return KVTag;
        })();
    
        PublishedFileDetails.VoteData = (function() {
    
            /**
             * Properties of a VoteData.
             * @memberof PublishedFileDetails
             * @interface IVoteData
             * @property {number|null} [score] VoteData score
             * @property {number|null} [votesUp] VoteData votesUp
             * @property {number|null} [votesDown] VoteData votesDown
             */
    
            /**
             * Constructs a new VoteData.
             * @memberof PublishedFileDetails
             * @classdesc Represents a VoteData.
             * @implements IVoteData
             * @constructor
             * @param {PublishedFileDetails.IVoteData=} [properties] Properties to set
             */
            function VoteData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * VoteData score.
             * @member {number} score
             * @memberof PublishedFileDetails.VoteData
             * @instance
             */
            VoteData.prototype.score = 0;
    
            /**
             * VoteData votesUp.
             * @member {number} votesUp
             * @memberof PublishedFileDetails.VoteData
             * @instance
             */
            VoteData.prototype.votesUp = 0;
    
            /**
             * VoteData votesDown.
             * @member {number} votesDown
             * @memberof PublishedFileDetails.VoteData
             * @instance
             */
            VoteData.prototype.votesDown = 0;
    
            /**
             * Creates a new VoteData instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.IVoteData=} [properties] Properties to set
             * @returns {PublishedFileDetails.VoteData} VoteData instance
             */
            VoteData.create = function create(properties) {
                return new VoteData(properties);
            };
    
            /**
             * Encodes the specified VoteData message. Does not implicitly {@link PublishedFileDetails.VoteData.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.IVoteData} message VoteData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VoteData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.score);
                if (message.votesUp != null && Object.hasOwnProperty.call(message, "votesUp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.votesUp);
                if (message.votesDown != null && Object.hasOwnProperty.call(message, "votesDown"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.votesDown);
                return writer;
            };
    
            /**
             * Encodes the specified VoteData message, length delimited. Does not implicitly {@link PublishedFileDetails.VoteData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.IVoteData} message VoteData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VoteData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a VoteData message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.VoteData} VoteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VoteData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.VoteData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.score = reader.float();
                            break;
                        }
                    case 2: {
                            message.votesUp = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.votesDown = reader.uint32();
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
             * Decodes a VoteData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.VoteData} VoteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VoteData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a VoteData message.
             * @function verify
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VoteData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (typeof message.score !== "number")
                        return "score: number expected";
                if (message.votesUp != null && message.hasOwnProperty("votesUp"))
                    if (!$util.isInteger(message.votesUp))
                        return "votesUp: integer expected";
                if (message.votesDown != null && message.hasOwnProperty("votesDown"))
                    if (!$util.isInteger(message.votesDown))
                        return "votesDown: integer expected";
                return null;
            };
    
            /**
             * Creates a VoteData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.VoteData} VoteData
             */
            VoteData.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.VoteData)
                    return object;
                var message = new $root.PublishedFileDetails.VoteData();
                if (object.score != null)
                    message.score = Number(object.score);
                if (object.votesUp != null)
                    message.votesUp = object.votesUp >>> 0;
                if (object.votesDown != null)
                    message.votesDown = object.votesDown >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a VoteData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.VoteData} message VoteData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VoteData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.score = 0;
                    object.votesUp = 0;
                    object.votesDown = 0;
                }
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
                if (message.votesUp != null && message.hasOwnProperty("votesUp"))
                    object.votesUp = message.votesUp;
                if (message.votesDown != null && message.hasOwnProperty("votesDown"))
                    object.votesDown = message.votesDown;
                return object;
            };
    
            /**
             * Converts this VoteData to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.VoteData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VoteData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for VoteData
             * @function getTypeUrl
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VoteData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/PublishedFileDetails.VoteData";
            };
    
            return VoteData;
        })();
    
        return PublishedFileDetails;
    })();
    
    $root.CPublishedFile_GetDetails_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_GetDetails_Response.
         * @exports ICPublishedFile_GetDetails_Response
         * @interface ICPublishedFile_GetDetails_Response
         * @property {Array.<IPublishedFileDetails>|null} [publishedfiledetails] CPublishedFile_GetDetails_Response publishedfiledetails
         */
    
        /**
         * Constructs a new CPublishedFile_GetDetails_Response.
         * @exports CPublishedFile_GetDetails_Response
         * @classdesc Represents a CPublishedFile_GetDetails_Response.
         * @implements ICPublishedFile_GetDetails_Response
         * @constructor
         * @param {ICPublishedFile_GetDetails_Response=} [properties] Properties to set
         */
        function CPublishedFile_GetDetails_Response(properties) {
            this.publishedfiledetails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetDetails_Response publishedfiledetails.
         * @member {Array.<IPublishedFileDetails>} publishedfiledetails
         * @memberof CPublishedFile_GetDetails_Response
         * @instance
         */
        CPublishedFile_GetDetails_Response.prototype.publishedfiledetails = $util.emptyArray;
    
        /**
         * Creates a new CPublishedFile_GetDetails_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {ICPublishedFile_GetDetails_Response=} [properties] Properties to set
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response instance
         */
        CPublishedFile_GetDetails_Response.create = function create(properties) {
            return new CPublishedFile_GetDetails_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Response message. Does not implicitly {@link CPublishedFile_GetDetails_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {ICPublishedFile_GetDetails_Response} message CPublishedFile_GetDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfiledetails != null && message.publishedfiledetails.length)
                for (var i = 0; i < message.publishedfiledetails.length; ++i)
                    $root.PublishedFileDetails.encode(message.publishedfiledetails[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Response message, length delimited. Does not implicitly {@link CPublishedFile_GetDetails_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {ICPublishedFile_GetDetails_Response} message CPublishedFile_GetDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetDetails_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetDetails_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.publishedfiledetails && message.publishedfiledetails.length))
                            message.publishedfiledetails = [];
                        message.publishedfiledetails.push($root.PublishedFileDetails.decode(reader, reader.uint32()));
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
         * Decodes a CPublishedFile_GetDetails_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetDetails_Response message.
         * @function verify
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetDetails_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfiledetails != null && message.hasOwnProperty("publishedfiledetails")) {
                if (!Array.isArray(message.publishedfiledetails))
                    return "publishedfiledetails: array expected";
                for (var i = 0; i < message.publishedfiledetails.length; ++i) {
                    var error = $root.PublishedFileDetails.verify(message.publishedfiledetails[i]);
                    if (error)
                        return "publishedfiledetails." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetDetails_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response
         */
        CPublishedFile_GetDetails_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetDetails_Response)
                return object;
            var message = new $root.CPublishedFile_GetDetails_Response();
            if (object.publishedfiledetails) {
                if (!Array.isArray(object.publishedfiledetails))
                    throw TypeError(".CPublishedFile_GetDetails_Response.publishedfiledetails: array expected");
                message.publishedfiledetails = [];
                for (var i = 0; i < object.publishedfiledetails.length; ++i) {
                    if (typeof object.publishedfiledetails[i] !== "object")
                        throw TypeError(".CPublishedFile_GetDetails_Response.publishedfiledetails: object expected");
                    message.publishedfiledetails[i] = $root.PublishedFileDetails.fromObject(object.publishedfiledetails[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetDetails_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {CPublishedFile_GetDetails_Response} message CPublishedFile_GetDetails_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetDetails_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.publishedfiledetails = [];
            if (message.publishedfiledetails && message.publishedfiledetails.length) {
                object.publishedfiledetails = [];
                for (var j = 0; j < message.publishedfiledetails.length; ++j)
                    object.publishedfiledetails[j] = $root.PublishedFileDetails.toObject(message.publishedfiledetails[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetDetails_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetDetails_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetDetails_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_GetDetails_Response
         * @function getTypeUrl
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_GetDetails_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_GetDetails_Response";
        };
    
        return CPublishedFile_GetDetails_Response;
    })();
    
    $root.CPublishedFile_GetUserFiles_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_GetUserFiles_Request.
         * @exports ICPublishedFile_GetUserFiles_Request
         * @interface ICPublishedFile_GetUserFiles_Request
         * @property {number|null} [appid] CPublishedFile_GetUserFiles_Request appid
         * @property {number|null} [page] CPublishedFile_GetUserFiles_Request page
         * @property {number|null} [numperpage] CPublishedFile_GetUserFiles_Request numperpage
         * @property {string|null} [sortmethod] CPublishedFile_GetUserFiles_Request sortmethod
         * @property {boolean|null} [totalonly] CPublishedFile_GetUserFiles_Request totalonly
         * @property {number|null} [privacy] CPublishedFile_GetUserFiles_Request privacy
         * @property {boolean|null} [idsOnly] CPublishedFile_GetUserFiles_Request idsOnly
         * @property {Array.<string>|null} [requiredtags] CPublishedFile_GetUserFiles_Request requiredtags
         * @property {Array.<string>|null} [excludedtags] CPublishedFile_GetUserFiles_Request excludedtags
         */
    
        /**
         * Constructs a new CPublishedFile_GetUserFiles_Request.
         * @exports CPublishedFile_GetUserFiles_Request
         * @classdesc Represents a CPublishedFile_GetUserFiles_Request.
         * @implements ICPublishedFile_GetUserFiles_Request
         * @constructor
         * @param {ICPublishedFile_GetUserFiles_Request=} [properties] Properties to set
         */
        function CPublishedFile_GetUserFiles_Request(properties) {
            this.requiredtags = [];
            this.excludedtags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetUserFiles_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Request page.
         * @member {number} page
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.page = 1;
    
        /**
         * CPublishedFile_GetUserFiles_Request numperpage.
         * @member {number} numperpage
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.numperpage = 1;
    
        /**
         * CPublishedFile_GetUserFiles_Request sortmethod.
         * @member {string} sortmethod
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.sortmethod = "lastupdated";
    
        /**
         * CPublishedFile_GetUserFiles_Request totalonly.
         * @member {boolean} totalonly
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.totalonly = false;
    
        /**
         * CPublishedFile_GetUserFiles_Request privacy.
         * @member {number} privacy
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.privacy = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Request idsOnly.
         * @member {boolean} idsOnly
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.idsOnly = false;
    
        /**
         * CPublishedFile_GetUserFiles_Request requiredtags.
         * @member {Array.<string>} requiredtags
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.requiredtags = $util.emptyArray;
    
        /**
         * CPublishedFile_GetUserFiles_Request excludedtags.
         * @member {Array.<string>} excludedtags
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.excludedtags = $util.emptyArray;
    
        /**
         * Creates a new CPublishedFile_GetUserFiles_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {ICPublishedFile_GetUserFiles_Request=} [properties] Properties to set
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request instance
         */
        CPublishedFile_GetUserFiles_Request.create = function create(properties) {
            return new CPublishedFile_GetUserFiles_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Request message. Does not implicitly {@link CPublishedFile_GetUserFiles_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {ICPublishedFile_GetUserFiles_Request} message CPublishedFile_GetUserFiles_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
            if (message.numperpage != null && Object.hasOwnProperty.call(message, "numperpage"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.numperpage);
            if (message.sortmethod != null && Object.hasOwnProperty.call(message, "sortmethod"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sortmethod);
            if (message.totalonly != null && Object.hasOwnProperty.call(message, "totalonly"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.totalonly);
            if (message.privacy != null && Object.hasOwnProperty.call(message, "privacy"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.privacy);
            if (message.idsOnly != null && Object.hasOwnProperty.call(message, "idsOnly"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.idsOnly);
            if (message.requiredtags != null && message.requiredtags.length)
                for (var i = 0; i < message.requiredtags.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.requiredtags[i]);
            if (message.excludedtags != null && message.excludedtags.length)
                for (var i = 0; i < message.excludedtags.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.excludedtags[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Request message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {ICPublishedFile_GetUserFiles_Request} message CPublishedFile_GetUserFiles_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetUserFiles_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetUserFiles_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.page = reader.uint32();
                        break;
                    }
                case 4: {
                        message.numperpage = reader.uint32();
                        break;
                    }
                case 6: {
                        message.sortmethod = reader.string();
                        break;
                    }
                case 7: {
                        message.totalonly = reader.bool();
                        break;
                    }
                case 9: {
                        message.privacy = reader.uint32();
                        break;
                    }
                case 10: {
                        message.idsOnly = reader.bool();
                        break;
                    }
                case 11: {
                        if (!(message.requiredtags && message.requiredtags.length))
                            message.requiredtags = [];
                        message.requiredtags.push(reader.string());
                        break;
                    }
                case 12: {
                        if (!(message.excludedtags && message.excludedtags.length))
                            message.excludedtags = [];
                        message.excludedtags.push(reader.string());
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
         * Decodes a CPublishedFile_GetUserFiles_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetUserFiles_Request message.
         * @function verify
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetUserFiles_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.numperpage != null && message.hasOwnProperty("numperpage"))
                if (!$util.isInteger(message.numperpage))
                    return "numperpage: integer expected";
            if (message.sortmethod != null && message.hasOwnProperty("sortmethod"))
                if (!$util.isString(message.sortmethod))
                    return "sortmethod: string expected";
            if (message.totalonly != null && message.hasOwnProperty("totalonly"))
                if (typeof message.totalonly !== "boolean")
                    return "totalonly: boolean expected";
            if (message.privacy != null && message.hasOwnProperty("privacy"))
                if (!$util.isInteger(message.privacy))
                    return "privacy: integer expected";
            if (message.idsOnly != null && message.hasOwnProperty("idsOnly"))
                if (typeof message.idsOnly !== "boolean")
                    return "idsOnly: boolean expected";
            if (message.requiredtags != null && message.hasOwnProperty("requiredtags")) {
                if (!Array.isArray(message.requiredtags))
                    return "requiredtags: array expected";
                for (var i = 0; i < message.requiredtags.length; ++i)
                    if (!$util.isString(message.requiredtags[i]))
                        return "requiredtags: string[] expected";
            }
            if (message.excludedtags != null && message.hasOwnProperty("excludedtags")) {
                if (!Array.isArray(message.excludedtags))
                    return "excludedtags: array expected";
                for (var i = 0; i < message.excludedtags.length; ++i)
                    if (!$util.isString(message.excludedtags[i]))
                        return "excludedtags: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetUserFiles_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request
         */
        CPublishedFile_GetUserFiles_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetUserFiles_Request)
                return object;
            var message = new $root.CPublishedFile_GetUserFiles_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.page != null)
                message.page = object.page >>> 0;
            if (object.numperpage != null)
                message.numperpage = object.numperpage >>> 0;
            if (object.sortmethod != null)
                message.sortmethod = String(object.sortmethod);
            if (object.totalonly != null)
                message.totalonly = Boolean(object.totalonly);
            if (object.privacy != null)
                message.privacy = object.privacy >>> 0;
            if (object.idsOnly != null)
                message.idsOnly = Boolean(object.idsOnly);
            if (object.requiredtags) {
                if (!Array.isArray(object.requiredtags))
                    throw TypeError(".CPublishedFile_GetUserFiles_Request.requiredtags: array expected");
                message.requiredtags = [];
                for (var i = 0; i < object.requiredtags.length; ++i)
                    message.requiredtags[i] = String(object.requiredtags[i]);
            }
            if (object.excludedtags) {
                if (!Array.isArray(object.excludedtags))
                    throw TypeError(".CPublishedFile_GetUserFiles_Request.excludedtags: array expected");
                message.excludedtags = [];
                for (var i = 0; i < object.excludedtags.length; ++i)
                    message.excludedtags[i] = String(object.excludedtags[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetUserFiles_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {CPublishedFile_GetUserFiles_Request} message CPublishedFile_GetUserFiles_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetUserFiles_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.requiredtags = [];
                object.excludedtags = [];
            }
            if (options.defaults) {
                object.appid = 0;
                object.page = 1;
                object.numperpage = 1;
                object.sortmethod = "lastupdated";
                object.totalonly = false;
                object.privacy = 0;
                object.idsOnly = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.numperpage != null && message.hasOwnProperty("numperpage"))
                object.numperpage = message.numperpage;
            if (message.sortmethod != null && message.hasOwnProperty("sortmethod"))
                object.sortmethod = message.sortmethod;
            if (message.totalonly != null && message.hasOwnProperty("totalonly"))
                object.totalonly = message.totalonly;
            if (message.privacy != null && message.hasOwnProperty("privacy"))
                object.privacy = message.privacy;
            if (message.idsOnly != null && message.hasOwnProperty("idsOnly"))
                object.idsOnly = message.idsOnly;
            if (message.requiredtags && message.requiredtags.length) {
                object.requiredtags = [];
                for (var j = 0; j < message.requiredtags.length; ++j)
                    object.requiredtags[j] = message.requiredtags[j];
            }
            if (message.excludedtags && message.excludedtags.length) {
                object.excludedtags = [];
                for (var j = 0; j < message.excludedtags.length; ++j)
                    object.excludedtags[j] = message.excludedtags[j];
            }
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetUserFiles_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetUserFiles_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_GetUserFiles_Request
         * @function getTypeUrl
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_GetUserFiles_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_GetUserFiles_Request";
        };
    
        return CPublishedFile_GetUserFiles_Request;
    })();
    
    $root.CPublishedFile_GetUserFiles_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_GetUserFiles_Response.
         * @exports ICPublishedFile_GetUserFiles_Response
         * @interface ICPublishedFile_GetUserFiles_Response
         * @property {number|null} [total] CPublishedFile_GetUserFiles_Response total
         * @property {number|null} [startindex] CPublishedFile_GetUserFiles_Response startindex
         * @property {Array.<IPublishedFileDetails>|null} [publishedfiledetails] CPublishedFile_GetUserFiles_Response publishedfiledetails
         * @property {Array.<CPublishedFile_GetUserFiles_Response.IApp>|null} [apps] CPublishedFile_GetUserFiles_Response apps
         */
    
        /**
         * Constructs a new CPublishedFile_GetUserFiles_Response.
         * @exports CPublishedFile_GetUserFiles_Response
         * @classdesc Represents a CPublishedFile_GetUserFiles_Response.
         * @implements ICPublishedFile_GetUserFiles_Response
         * @constructor
         * @param {ICPublishedFile_GetUserFiles_Response=} [properties] Properties to set
         */
        function CPublishedFile_GetUserFiles_Response(properties) {
            this.publishedfiledetails = [];
            this.apps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetUserFiles_Response total.
         * @member {number} total
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.total = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Response startindex.
         * @member {number} startindex
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.startindex = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Response publishedfiledetails.
         * @member {Array.<IPublishedFileDetails>} publishedfiledetails
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.publishedfiledetails = $util.emptyArray;
    
        /**
         * CPublishedFile_GetUserFiles_Response apps.
         * @member {Array.<CPublishedFile_GetUserFiles_Response.IApp>} apps
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.apps = $util.emptyArray;
    
        /**
         * Creates a new CPublishedFile_GetUserFiles_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {ICPublishedFile_GetUserFiles_Response=} [properties] Properties to set
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response instance
         */
        CPublishedFile_GetUserFiles_Response.create = function create(properties) {
            return new CPublishedFile_GetUserFiles_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Response message. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {ICPublishedFile_GetUserFiles_Response} message CPublishedFile_GetUserFiles_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.total);
            if (message.startindex != null && Object.hasOwnProperty.call(message, "startindex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.startindex);
            if (message.publishedfiledetails != null && message.publishedfiledetails.length)
                for (var i = 0; i < message.publishedfiledetails.length; ++i)
                    $root.PublishedFileDetails.encode(message.publishedfiledetails[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.apps != null && message.apps.length)
                for (var i = 0; i < message.apps.length; ++i)
                    $root.CPublishedFile_GetUserFiles_Response.App.encode(message.apps[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Response message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {ICPublishedFile_GetUserFiles_Response} message CPublishedFile_GetUserFiles_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetUserFiles_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetUserFiles_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.total = reader.uint32();
                        break;
                    }
                case 2: {
                        message.startindex = reader.uint32();
                        break;
                    }
                case 3: {
                        if (!(message.publishedfiledetails && message.publishedfiledetails.length))
                            message.publishedfiledetails = [];
                        message.publishedfiledetails.push($root.PublishedFileDetails.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.apps && message.apps.length))
                            message.apps = [];
                        message.apps.push($root.CPublishedFile_GetUserFiles_Response.App.decode(reader, reader.uint32()));
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
         * Decodes a CPublishedFile_GetUserFiles_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetUserFiles_Response message.
         * @function verify
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetUserFiles_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.startindex != null && message.hasOwnProperty("startindex"))
                if (!$util.isInteger(message.startindex))
                    return "startindex: integer expected";
            if (message.publishedfiledetails != null && message.hasOwnProperty("publishedfiledetails")) {
                if (!Array.isArray(message.publishedfiledetails))
                    return "publishedfiledetails: array expected";
                for (var i = 0; i < message.publishedfiledetails.length; ++i) {
                    var error = $root.PublishedFileDetails.verify(message.publishedfiledetails[i]);
                    if (error)
                        return "publishedfiledetails." + error;
                }
            }
            if (message.apps != null && message.hasOwnProperty("apps")) {
                if (!Array.isArray(message.apps))
                    return "apps: array expected";
                for (var i = 0; i < message.apps.length; ++i) {
                    var error = $root.CPublishedFile_GetUserFiles_Response.App.verify(message.apps[i]);
                    if (error)
                        return "apps." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetUserFiles_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response
         */
        CPublishedFile_GetUserFiles_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetUserFiles_Response)
                return object;
            var message = new $root.CPublishedFile_GetUserFiles_Response();
            if (object.total != null)
                message.total = object.total >>> 0;
            if (object.startindex != null)
                message.startindex = object.startindex >>> 0;
            if (object.publishedfiledetails) {
                if (!Array.isArray(object.publishedfiledetails))
                    throw TypeError(".CPublishedFile_GetUserFiles_Response.publishedfiledetails: array expected");
                message.publishedfiledetails = [];
                for (var i = 0; i < object.publishedfiledetails.length; ++i) {
                    if (typeof object.publishedfiledetails[i] !== "object")
                        throw TypeError(".CPublishedFile_GetUserFiles_Response.publishedfiledetails: object expected");
                    message.publishedfiledetails[i] = $root.PublishedFileDetails.fromObject(object.publishedfiledetails[i]);
                }
            }
            if (object.apps) {
                if (!Array.isArray(object.apps))
                    throw TypeError(".CPublishedFile_GetUserFiles_Response.apps: array expected");
                message.apps = [];
                for (var i = 0; i < object.apps.length; ++i) {
                    if (typeof object.apps[i] !== "object")
                        throw TypeError(".CPublishedFile_GetUserFiles_Response.apps: object expected");
                    message.apps[i] = $root.CPublishedFile_GetUserFiles_Response.App.fromObject(object.apps[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetUserFiles_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {CPublishedFile_GetUserFiles_Response} message CPublishedFile_GetUserFiles_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetUserFiles_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.publishedfiledetails = [];
                object.apps = [];
            }
            if (options.defaults) {
                object.total = 0;
                object.startindex = 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.startindex != null && message.hasOwnProperty("startindex"))
                object.startindex = message.startindex;
            if (message.publishedfiledetails && message.publishedfiledetails.length) {
                object.publishedfiledetails = [];
                for (var j = 0; j < message.publishedfiledetails.length; ++j)
                    object.publishedfiledetails[j] = $root.PublishedFileDetails.toObject(message.publishedfiledetails[j], options);
            }
            if (message.apps && message.apps.length) {
                object.apps = [];
                for (var j = 0; j < message.apps.length; ++j)
                    object.apps[j] = $root.CPublishedFile_GetUserFiles_Response.App.toObject(message.apps[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetUserFiles_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetUserFiles_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_GetUserFiles_Response
         * @function getTypeUrl
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_GetUserFiles_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_GetUserFiles_Response";
        };
    
        CPublishedFile_GetUserFiles_Response.App = (function() {
    
            /**
             * Properties of an App.
             * @memberof CPublishedFile_GetUserFiles_Response
             * @interface IApp
             * @property {number|null} [appid] App appid
             * @property {string|null} [name] App name
             * @property {number|null} [shortcutid] App shortcutid
             * @property {boolean|null} ["private"] App private
             */
    
            /**
             * Constructs a new App.
             * @memberof CPublishedFile_GetUserFiles_Response
             * @classdesc Represents an App.
             * @implements IApp
             * @constructor
             * @param {CPublishedFile_GetUserFiles_Response.IApp=} [properties] Properties to set
             */
            function App(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * App appid.
             * @member {number} appid
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype.appid = 0;
    
            /**
             * App name.
             * @member {string} name
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype.name = "";
    
            /**
             * App shortcutid.
             * @member {number} shortcutid
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype.shortcutid = 0;
    
            /**
             * App private.
             * @member {boolean} private
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype["private"] = false;
    
            /**
             * Creates a new App instance using the specified properties.
             * @function create
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.IApp=} [properties] Properties to set
             * @returns {CPublishedFile_GetUserFiles_Response.App} App instance
             */
            App.create = function create(properties) {
                return new App(properties);
            };
    
            /**
             * Encodes the specified App message. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.App.verify|verify} messages.
             * @function encode
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.IApp} message App message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            App.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.shortcutid != null && Object.hasOwnProperty.call(message, "shortcutid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.shortcutid);
                if (message["private"] != null && Object.hasOwnProperty.call(message, "private"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message["private"]);
                return writer;
            };
    
            /**
             * Encodes the specified App message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.App.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.IApp} message App message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            App.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an App message from the specified reader or buffer.
             * @function decode
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPublishedFile_GetUserFiles_Response.App} App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            App.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetUserFiles_Response.App();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.appid = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.shortcutid = reader.uint32();
                            break;
                        }
                    case 4: {
                            message["private"] = reader.bool();
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
             * Decodes an App message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPublishedFile_GetUserFiles_Response.App} App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            App.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an App message.
             * @function verify
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            App.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.appid != null && message.hasOwnProperty("appid"))
                    if (!$util.isInteger(message.appid))
                        return "appid: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                    if (!$util.isInteger(message.shortcutid))
                        return "shortcutid: integer expected";
                if (message["private"] != null && message.hasOwnProperty("private"))
                    if (typeof message["private"] !== "boolean")
                        return "private: boolean expected";
                return null;
            };
    
            /**
             * Creates an App message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPublishedFile_GetUserFiles_Response.App} App
             */
            App.fromObject = function fromObject(object) {
                if (object instanceof $root.CPublishedFile_GetUserFiles_Response.App)
                    return object;
                var message = new $root.CPublishedFile_GetUserFiles_Response.App();
                if (object.appid != null)
                    message.appid = object.appid >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.shortcutid != null)
                    message.shortcutid = object.shortcutid >>> 0;
                if (object["private"] != null)
                    message["private"] = Boolean(object["private"]);
                return message;
            };
    
            /**
             * Creates a plain object from an App message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.App} message App
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            App.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.appid = 0;
                    object.name = "";
                    object.shortcutid = 0;
                    object["private"] = false;
                }
                if (message.appid != null && message.hasOwnProperty("appid"))
                    object.appid = message.appid;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                    object.shortcutid = message.shortcutid;
                if (message["private"] != null && message.hasOwnProperty("private"))
                    object["private"] = message["private"];
                return object;
            };
    
            /**
             * Converts this App to JSON.
             * @function toJSON
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            App.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for App
             * @function getTypeUrl
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            App.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CPublishedFile_GetUserFiles_Response.App";
            };
    
            return App;
        })();
    
        return CPublishedFile_GetUserFiles_Response;
    })();
    
    $root.CPublishedFile_Update_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Update_Request.
         * @exports ICPublishedFile_Update_Request
         * @interface ICPublishedFile_Update_Request
         * @property {number|null} [appid] CPublishedFile_Update_Request appid
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Update_Request publishedfileid
         * @property {string|null} [title] CPublishedFile_Update_Request title
         * @property {string|null} [fileDescription] CPublishedFile_Update_Request fileDescription
         * @property {number|null} [visibility] CPublishedFile_Update_Request visibility
         * @property {Array.<string>|null} [tags] CPublishedFile_Update_Request tags
         * @property {string|null} [filename] CPublishedFile_Update_Request filename
         * @property {string|null} [previewFilename] CPublishedFile_Update_Request previewFilename
         */
    
        /**
         * Constructs a new CPublishedFile_Update_Request.
         * @exports CPublishedFile_Update_Request
         * @classdesc Represents a CPublishedFile_Update_Request.
         * @implements ICPublishedFile_Update_Request
         * @constructor
         * @param {ICPublishedFile_Update_Request=} [properties] Properties to set
         */
        function CPublishedFile_Update_Request(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Update_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Update_Request publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CPublishedFile_Update_Request title.
         * @member {string} title
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.title = "";
    
        /**
         * CPublishedFile_Update_Request fileDescription.
         * @member {string} fileDescription
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.fileDescription = "";
    
        /**
         * CPublishedFile_Update_Request visibility.
         * @member {number} visibility
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.visibility = 0;
    
        /**
         * CPublishedFile_Update_Request tags.
         * @member {Array.<string>} tags
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.tags = $util.emptyArray;
    
        /**
         * CPublishedFile_Update_Request filename.
         * @member {string} filename
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.filename = "";
    
        /**
         * CPublishedFile_Update_Request previewFilename.
         * @member {string} previewFilename
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.previewFilename = "";
    
        /**
         * Creates a new CPublishedFile_Update_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {ICPublishedFile_Update_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request instance
         */
        CPublishedFile_Update_Request.create = function create(properties) {
            return new CPublishedFile_Update_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Request message. Does not implicitly {@link CPublishedFile_Update_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {ICPublishedFile_Update_Request} message CPublishedFile_Update_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.publishedfileid);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.fileDescription != null && Object.hasOwnProperty.call(message, "fileDescription"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileDescription);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.visibility);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.tags[i]);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filename);
            if (message.previewFilename != null && Object.hasOwnProperty.call(message, "previewFilename"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.previewFilename);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Request message, length delimited. Does not implicitly {@link CPublishedFile_Update_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {ICPublishedFile_Update_Request} message CPublishedFile_Update_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Update_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Update_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.publishedfileid = reader.fixed64();
                        break;
                    }
                case 3: {
                        message.title = reader.string();
                        break;
                    }
                case 4: {
                        message.fileDescription = reader.string();
                        break;
                    }
                case 5: {
                        message.visibility = reader.uint32();
                        break;
                    }
                case 6: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 7: {
                        message.filename = reader.string();
                        break;
                    }
                case 8: {
                        message.previewFilename = reader.string();
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
         * Decodes a CPublishedFile_Update_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Update_Request message.
         * @function verify
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Update_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.fileDescription != null && message.hasOwnProperty("fileDescription"))
                if (!$util.isString(message.fileDescription))
                    return "fileDescription: string expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isInteger(message.visibility))
                    return "visibility: integer expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.previewFilename != null && message.hasOwnProperty("previewFilename"))
                if (!$util.isString(message.previewFilename))
                    return "previewFilename: string expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Update_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request
         */
        CPublishedFile_Update_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Update_Request)
                return object;
            var message = new $root.CPublishedFile_Update_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = false;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber();
            if (object.title != null)
                message.title = String(object.title);
            if (object.fileDescription != null)
                message.fileDescription = String(object.fileDescription);
            if (object.visibility != null)
                message.visibility = object.visibility >>> 0;
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CPublishedFile_Update_Request.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.previewFilename != null)
                message.previewFilename = String(object.previewFilename);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Update_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {CPublishedFile_Update_Request} message CPublishedFile_Update_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Update_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.title = "";
                object.fileDescription = "";
                object.visibility = 0;
                object.filename = "";
                object.previewFilename = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber() : message.publishedfileid;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.fileDescription != null && message.hasOwnProperty("fileDescription"))
                object.fileDescription = message.fileDescription;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.previewFilename != null && message.hasOwnProperty("previewFilename"))
                object.previewFilename = message.previewFilename;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Update_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Update_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Update_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Update_Request
         * @function getTypeUrl
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Update_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Update_Request";
        };
    
        return CPublishedFile_Update_Request;
    })();
    
    $root.CPublishedFile_Update_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Update_Response.
         * @exports ICPublishedFile_Update_Response
         * @interface ICPublishedFile_Update_Response
         */
    
        /**
         * Constructs a new CPublishedFile_Update_Response.
         * @exports CPublishedFile_Update_Response
         * @classdesc Represents a CPublishedFile_Update_Response.
         * @implements ICPublishedFile_Update_Response
         * @constructor
         * @param {ICPublishedFile_Update_Response=} [properties] Properties to set
         */
        function CPublishedFile_Update_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_Update_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {ICPublishedFile_Update_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response instance
         */
        CPublishedFile_Update_Response.create = function create(properties) {
            return new CPublishedFile_Update_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Response message. Does not implicitly {@link CPublishedFile_Update_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {ICPublishedFile_Update_Response} message CPublishedFile_Update_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Response message, length delimited. Does not implicitly {@link CPublishedFile_Update_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {ICPublishedFile_Update_Response} message CPublishedFile_Update_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Update_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Update_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Update_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Update_Response message.
         * @function verify
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Update_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Update_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response
         */
        CPublishedFile_Update_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Update_Response)
                return object;
            return new $root.CPublishedFile_Update_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Update_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {CPublishedFile_Update_Response} message CPublishedFile_Update_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Update_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_Update_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Update_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Update_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_Update_Response
         * @function getTypeUrl
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_Update_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_Update_Response";
        };
    
        return CPublishedFile_Update_Response;
    })();
    
    $root.CPublishedFile_RefreshVotingQueue_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_RefreshVotingQueue_Request.
         * @exports ICPublishedFile_RefreshVotingQueue_Request
         * @interface ICPublishedFile_RefreshVotingQueue_Request
         * @property {number|null} [appid] CPublishedFile_RefreshVotingQueue_Request appid
         * @property {number|null} [matchingFileType] CPublishedFile_RefreshVotingQueue_Request matchingFileType
         * @property {Array.<string>|null} [tags] CPublishedFile_RefreshVotingQueue_Request tags
         * @property {boolean|null} [matchAllTags] CPublishedFile_RefreshVotingQueue_Request matchAllTags
         * @property {Array.<string>|null} [excludedTags] CPublishedFile_RefreshVotingQueue_Request excludedTags
         * @property {number|null} [desiredQueueSize] CPublishedFile_RefreshVotingQueue_Request desiredQueueSize
         */
    
        /**
         * Constructs a new CPublishedFile_RefreshVotingQueue_Request.
         * @exports CPublishedFile_RefreshVotingQueue_Request
         * @classdesc Represents a CPublishedFile_RefreshVotingQueue_Request.
         * @implements ICPublishedFile_RefreshVotingQueue_Request
         * @constructor
         * @param {ICPublishedFile_RefreshVotingQueue_Request=} [properties] Properties to set
         */
        function CPublishedFile_RefreshVotingQueue_Request(properties) {
            this.tags = [];
            this.excludedTags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request matchingFileType.
         * @member {number} matchingFileType
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.matchingFileType = 0;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request tags.
         * @member {Array.<string>} tags
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.tags = $util.emptyArray;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request matchAllTags.
         * @member {boolean} matchAllTags
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.matchAllTags = true;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request excludedTags.
         * @member {Array.<string>} excludedTags
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.excludedTags = $util.emptyArray;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request desiredQueueSize.
         * @member {number} desiredQueueSize
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.desiredQueueSize = 0;
    
        /**
         * Creates a new CPublishedFile_RefreshVotingQueue_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Request=} [properties] Properties to set
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request instance
         */
        CPublishedFile_RefreshVotingQueue_Request.create = function create(properties) {
            return new CPublishedFile_RefreshVotingQueue_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Request message. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Request} message CPublishedFile_RefreshVotingQueue_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.matchingFileType != null && Object.hasOwnProperty.call(message, "matchingFileType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.matchingFileType);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.matchAllTags != null && Object.hasOwnProperty.call(message, "matchAllTags"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.matchAllTags);
            if (message.excludedTags != null && message.excludedTags.length)
                for (var i = 0; i < message.excludedTags.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.excludedTags[i]);
            if (message.desiredQueueSize != null && Object.hasOwnProperty.call(message, "desiredQueueSize"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.desiredQueueSize);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Request message, length delimited. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Request} message CPublishedFile_RefreshVotingQueue_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_RefreshVotingQueue_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_RefreshVotingQueue_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.matchingFileType = reader.uint32();
                        break;
                    }
                case 3: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 4: {
                        message.matchAllTags = reader.bool();
                        break;
                    }
                case 5: {
                        if (!(message.excludedTags && message.excludedTags.length))
                            message.excludedTags = [];
                        message.excludedTags.push(reader.string());
                        break;
                    }
                case 6: {
                        message.desiredQueueSize = reader.uint32();
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
         * Decodes a CPublishedFile_RefreshVotingQueue_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_RefreshVotingQueue_Request message.
         * @function verify
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_RefreshVotingQueue_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.matchingFileType != null && message.hasOwnProperty("matchingFileType"))
                if (!$util.isInteger(message.matchingFileType))
                    return "matchingFileType: integer expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.matchAllTags != null && message.hasOwnProperty("matchAllTags"))
                if (typeof message.matchAllTags !== "boolean")
                    return "matchAllTags: boolean expected";
            if (message.excludedTags != null && message.hasOwnProperty("excludedTags")) {
                if (!Array.isArray(message.excludedTags))
                    return "excludedTags: array expected";
                for (var i = 0; i < message.excludedTags.length; ++i)
                    if (!$util.isString(message.excludedTags[i]))
                        return "excludedTags: string[] expected";
            }
            if (message.desiredQueueSize != null && message.hasOwnProperty("desiredQueueSize"))
                if (!$util.isInteger(message.desiredQueueSize))
                    return "desiredQueueSize: integer expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_RefreshVotingQueue_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request
         */
        CPublishedFile_RefreshVotingQueue_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_RefreshVotingQueue_Request)
                return object;
            var message = new $root.CPublishedFile_RefreshVotingQueue_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.matchingFileType != null)
                message.matchingFileType = object.matchingFileType >>> 0;
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CPublishedFile_RefreshVotingQueue_Request.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.matchAllTags != null)
                message.matchAllTags = Boolean(object.matchAllTags);
            if (object.excludedTags) {
                if (!Array.isArray(object.excludedTags))
                    throw TypeError(".CPublishedFile_RefreshVotingQueue_Request.excludedTags: array expected");
                message.excludedTags = [];
                for (var i = 0; i < object.excludedTags.length; ++i)
                    message.excludedTags[i] = String(object.excludedTags[i]);
            }
            if (object.desiredQueueSize != null)
                message.desiredQueueSize = object.desiredQueueSize >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_RefreshVotingQueue_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {CPublishedFile_RefreshVotingQueue_Request} message CPublishedFile_RefreshVotingQueue_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_RefreshVotingQueue_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tags = [];
                object.excludedTags = [];
            }
            if (options.defaults) {
                object.appid = 0;
                object.matchingFileType = 0;
                object.matchAllTags = true;
                object.desiredQueueSize = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.matchingFileType != null && message.hasOwnProperty("matchingFileType"))
                object.matchingFileType = message.matchingFileType;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.matchAllTags != null && message.hasOwnProperty("matchAllTags"))
                object.matchAllTags = message.matchAllTags;
            if (message.excludedTags && message.excludedTags.length) {
                object.excludedTags = [];
                for (var j = 0; j < message.excludedTags.length; ++j)
                    object.excludedTags[j] = message.excludedTags[j];
            }
            if (message.desiredQueueSize != null && message.hasOwnProperty("desiredQueueSize"))
                object.desiredQueueSize = message.desiredQueueSize;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_RefreshVotingQueue_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_RefreshVotingQueue_Request
         * @function getTypeUrl
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_RefreshVotingQueue_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_RefreshVotingQueue_Request";
        };
    
        return CPublishedFile_RefreshVotingQueue_Request;
    })();
    
    $root.CPublishedFile_RefreshVotingQueue_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_RefreshVotingQueue_Response.
         * @exports ICPublishedFile_RefreshVotingQueue_Response
         * @interface ICPublishedFile_RefreshVotingQueue_Response
         */
    
        /**
         * Constructs a new CPublishedFile_RefreshVotingQueue_Response.
         * @exports CPublishedFile_RefreshVotingQueue_Response
         * @classdesc Represents a CPublishedFile_RefreshVotingQueue_Response.
         * @implements ICPublishedFile_RefreshVotingQueue_Response
         * @constructor
         * @param {ICPublishedFile_RefreshVotingQueue_Response=} [properties] Properties to set
         */
        function CPublishedFile_RefreshVotingQueue_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_RefreshVotingQueue_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Response=} [properties] Properties to set
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response instance
         */
        CPublishedFile_RefreshVotingQueue_Response.create = function create(properties) {
            return new CPublishedFile_RefreshVotingQueue_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Response message. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Response} message CPublishedFile_RefreshVotingQueue_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Response message, length delimited. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Response} message CPublishedFile_RefreshVotingQueue_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_RefreshVotingQueue_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_RefreshVotingQueue_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_RefreshVotingQueue_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_RefreshVotingQueue_Response message.
         * @function verify
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_RefreshVotingQueue_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_RefreshVotingQueue_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response
         */
        CPublishedFile_RefreshVotingQueue_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_RefreshVotingQueue_Response)
                return object;
            return new $root.CPublishedFile_RefreshVotingQueue_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_RefreshVotingQueue_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {CPublishedFile_RefreshVotingQueue_Response} message CPublishedFile_RefreshVotingQueue_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_RefreshVotingQueue_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_RefreshVotingQueue_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_RefreshVotingQueue_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPublishedFile_RefreshVotingQueue_Response
         * @function getTypeUrl
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPublishedFile_RefreshVotingQueue_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPublishedFile_RefreshVotingQueue_Response";
        };
    
        return CPublishedFile_RefreshVotingQueue_Response;
    })();
    
    $root.PublishedFile = (function() {
    
        /**
         * Constructs a new PublishedFile service.
         * @exports PublishedFile
         * @classdesc Represents a PublishedFile
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PublishedFile(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (PublishedFile.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PublishedFile;
    
        /**
         * Creates new PublishedFile service using the specified rpc implementation.
         * @function create
         * @memberof PublishedFile
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PublishedFile} RPC service. Useful where requests and/or responses are streamed.
         */
        PublishedFile.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link PublishedFile#subscribe}.
         * @memberof PublishedFile
         * @typedef SubscribeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Subscribe_Response} [response] CPublishedFile_Subscribe_Response
         */
    
        /**
         * Calls Subscribe.
         * @function subscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Subscribe_Request} request CPublishedFile_Subscribe_Request message or plain object
         * @param {PublishedFile.SubscribeCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Subscribe_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.subscribe = function subscribe(request, callback) {
            return this.rpcCall(subscribe, $root.CPublishedFile_Subscribe_Request, $root.CPublishedFile_Subscribe_Response, request, callback);
        }, "name", { value: "Subscribe" });
    
        /**
         * Calls Subscribe.
         * @function subscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Subscribe_Request} request CPublishedFile_Subscribe_Request message or plain object
         * @returns {Promise<CPublishedFile_Subscribe_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#unsubscribe}.
         * @memberof PublishedFile
         * @typedef UnsubscribeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Unsubscribe_Response} [response] CPublishedFile_Unsubscribe_Response
         */
    
        /**
         * Calls Unsubscribe.
         * @function unsubscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Unsubscribe_Request} request CPublishedFile_Unsubscribe_Request message or plain object
         * @param {PublishedFile.UnsubscribeCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Unsubscribe_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.unsubscribe = function unsubscribe(request, callback) {
            return this.rpcCall(unsubscribe, $root.CPublishedFile_Unsubscribe_Request, $root.CPublishedFile_Unsubscribe_Response, request, callback);
        }, "name", { value: "Unsubscribe" });
    
        /**
         * Calls Unsubscribe.
         * @function unsubscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Unsubscribe_Request} request CPublishedFile_Unsubscribe_Request message or plain object
         * @returns {Promise<CPublishedFile_Unsubscribe_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#publish}.
         * @memberof PublishedFile
         * @typedef PublishCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Publish_Response} [response] CPublishedFile_Publish_Response
         */
    
        /**
         * Calls Publish.
         * @function publish
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Publish_Request} request CPublishedFile_Publish_Request message or plain object
         * @param {PublishedFile.PublishCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Publish_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.publish = function publish(request, callback) {
            return this.rpcCall(publish, $root.CPublishedFile_Publish_Request, $root.CPublishedFile_Publish_Response, request, callback);
        }, "name", { value: "Publish" });
    
        /**
         * Calls Publish.
         * @function publish
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Publish_Request} request CPublishedFile_Publish_Request message or plain object
         * @returns {Promise<CPublishedFile_Publish_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#getDetails}.
         * @memberof PublishedFile
         * @typedef GetDetailsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_GetDetails_Response} [response] CPublishedFile_GetDetails_Response
         */
    
        /**
         * Calls GetDetails.
         * @function getDetails
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetDetails_Request} request CPublishedFile_GetDetails_Request message or plain object
         * @param {PublishedFile.GetDetailsCallback} callback Node-style callback called with the error, if any, and CPublishedFile_GetDetails_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.getDetails = function getDetails(request, callback) {
            return this.rpcCall(getDetails, $root.CPublishedFile_GetDetails_Request, $root.CPublishedFile_GetDetails_Response, request, callback);
        }, "name", { value: "GetDetails" });
    
        /**
         * Calls GetDetails.
         * @function getDetails
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetDetails_Request} request CPublishedFile_GetDetails_Request message or plain object
         * @returns {Promise<CPublishedFile_GetDetails_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#getUserFiles}.
         * @memberof PublishedFile
         * @typedef GetUserFilesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_GetUserFiles_Response} [response] CPublishedFile_GetUserFiles_Response
         */
    
        /**
         * Calls GetUserFiles.
         * @function getUserFiles
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetUserFiles_Request} request CPublishedFile_GetUserFiles_Request message or plain object
         * @param {PublishedFile.GetUserFilesCallback} callback Node-style callback called with the error, if any, and CPublishedFile_GetUserFiles_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.getUserFiles = function getUserFiles(request, callback) {
            return this.rpcCall(getUserFiles, $root.CPublishedFile_GetUserFiles_Request, $root.CPublishedFile_GetUserFiles_Response, request, callback);
        }, "name", { value: "GetUserFiles" });
    
        /**
         * Calls GetUserFiles.
         * @function getUserFiles
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetUserFiles_Request} request CPublishedFile_GetUserFiles_Request message or plain object
         * @returns {Promise<CPublishedFile_GetUserFiles_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#update}.
         * @memberof PublishedFile
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Update_Response} [response] CPublishedFile_Update_Response
         */
    
        /**
         * Calls Update.
         * @function update
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Update_Request} request CPublishedFile_Update_Request message or plain object
         * @param {PublishedFile.UpdateCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Update_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.CPublishedFile_Update_Request, $root.CPublishedFile_Update_Response, request, callback);
        }, "name", { value: "Update" });
    
        /**
         * Calls Update.
         * @function update
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Update_Request} request CPublishedFile_Update_Request message or plain object
         * @returns {Promise<CPublishedFile_Update_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#refreshVotingQueue}.
         * @memberof PublishedFile
         * @typedef RefreshVotingQueueCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_RefreshVotingQueue_Response} [response] CPublishedFile_RefreshVotingQueue_Response
         */
    
        /**
         * Calls RefreshVotingQueue.
         * @function refreshVotingQueue
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_RefreshVotingQueue_Request} request CPublishedFile_RefreshVotingQueue_Request message or plain object
         * @param {PublishedFile.RefreshVotingQueueCallback} callback Node-style callback called with the error, if any, and CPublishedFile_RefreshVotingQueue_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.refreshVotingQueue = function refreshVotingQueue(request, callback) {
            return this.rpcCall(refreshVotingQueue, $root.CPublishedFile_RefreshVotingQueue_Request, $root.CPublishedFile_RefreshVotingQueue_Response, request, callback);
        }, "name", { value: "RefreshVotingQueue" });
    
        /**
         * Calls RefreshVotingQueue.
         * @function refreshVotingQueue
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_RefreshVotingQueue_Request} request CPublishedFile_RefreshVotingQueue_Request message or plain object
         * @returns {Promise<CPublishedFile_RefreshVotingQueue_Response>} Promise
         * @variation 2
         */
    
        return PublishedFile;
    })();
    
    /**
     * EProtoExecutionSite enum.
     * @exports EProtoExecutionSite
     * @enum {number}
     * @property {number} k_EProtoExecutionSiteUnknown=0 k_EProtoExecutionSiteUnknown value
     * @property {number} k_EProtoExecutionSiteSteamClient=3 k_EProtoExecutionSiteSteamClient value
     */
    $root.EProtoExecutionSite = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EProtoExecutionSiteUnknown"] = 0;
        values[valuesById[3] = "k_EProtoExecutionSiteSteamClient"] = 3;
        return values;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.file && message.file.length))
                                    message.file = [];
                                message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
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
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorSet
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
                 * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.publicDependency = [];
                    this.weakDependency = [];
                    this.messageType = [];
                    this.enumType = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @member {Array.<number>} publicDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @member {Array.<number>} weakDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} messageType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.messageType != null && message.messageType.length)
                        for (var i = 0; i < message.messageType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message["package"] = reader.string();
                                break;
                            }
                        case 3: {
                                if (!(message.dependency && message.dependency.length))
                                    message.dependency = [];
                                message.dependency.push(reader.string());
                                break;
                            }
                        case 10: {
                                if (!(message.publicDependency && message.publicDependency.length))
                                    message.publicDependency = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.publicDependency.push(reader.int32());
                                } else
                                    message.publicDependency.push(reader.int32());
                                break;
                            }
                        case 11: {
                                if (!(message.weakDependency && message.weakDependency.length))
                                    message.weakDependency = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.weakDependency.push(reader.int32());
                                } else
                                    message.weakDependency.push(reader.int32());
                                break;
                            }
                        case 4: {
                                if (!(message.messageType && message.messageType.length))
                                    message.messageType = [];
                                message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.enumType && message.enumType.length))
                                    message.enumType = [];
                                message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.service && message.service.length))
                                    message.service = [];
                                message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 12: {
                                message.syntax = reader.string();
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
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType != null && message.hasOwnProperty("messageType")) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (var i = 0; i < message.messageType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (var i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (var i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (var i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.sourceCodeInfo != null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.messageType && message.messageType.length) {
                        object.messageType = [];
                        for (var j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                    if (message.publicDependency && message.publicDependency.length) {
                        object.publicDependency = [];
                        for (var j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency && message.weakDependency.length) {
                        object.weakDependency = [];
                        for (var j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nestedType = [];
                    this.enumType = [];
                    this.extensionRange = [];
                    this.oneofDecl = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nestedType != null && message.nestedType.length)
                        for (var i = 0; i < message.nestedType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange != null && message.extensionRange.length)
                        for (var i = 0; i < message.extensionRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneofDecl != null && message.oneofDecl.length)
                        for (var i = 0; i < message.oneofDecl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.field && message.field.length))
                                    message.field = [];
                                message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                if (!(message.nestedType && message.nestedType.length))
                                    message.nestedType = [];
                                message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                if (!(message.enumType && message.enumType.length))
                                    message.enumType = [];
                                message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.extensionRange && message.extensionRange.length))
                                    message.extensionRange = [];
                                message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                if (!(message.oneofDecl && message.oneofDecl.length))
                                    message.oneofDecl = [];
                                message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                if (!(message.reservedRange && message.reservedRange.length))
                                    message.reservedRange = [];
                                message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 10: {
                                if (!(message.reservedName && message.reservedName.length))
                                    message.reservedName = [];
                                message.reservedName.push(reader.string());
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
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (var i = 0; i < message.nestedType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (var i = 0; i < message.extensionRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (var i = 0; i < message.oneofDecl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (var i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (var i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (var i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.extension = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nestedType && message.nestedType.length) {
                        object.nestedType = [];
                        for (var j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange && message.extensionRange.length) {
                        object.extensionRange = [];
                        for (var j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneofDecl && message.oneofDecl.length) {
                        object.oneofDecl = [];
                        for (var j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                    }
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto";
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
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
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ExtensionRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
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
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ReservedRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ReservedRange";
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [typeName] FieldDescriptorProto typeName
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
                 * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
                 * @property {string|null} [jsonName] FieldDescriptorProto jsonName
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @member {string} typeName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @member {string} defaultValue
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @member {number} oneofIndex
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @member {string} jsonName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.number = reader.int32();
                                break;
                            }
                        case 4: {
                                message.label = reader.int32();
                                break;
                            }
                        case 5: {
                                message.type = reader.int32();
                                break;
                            }
                        case 6: {
                                message.typeName = reader.string();
                                break;
                            }
                        case 2: {
                                message.extendee = reader.string();
                                break;
                            }
                        case 7: {
                                message.defaultValue = reader.string();
                                break;
                            }
                        case 9: {
                                message.oneofIndex = reader.int32();
                                break;
                            }
                        case 10: {
                                message.jsonName = reader.string();
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
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
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    default:
                        if (typeof object.label === "number") {
                            message.label = object.label;
                            break;
                        }
                        break;
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName != null)
                        message.typeName = String(object.typeName);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue != null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex != null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName != null)
                        message.jsonName = String(object.jsonName);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.defaultValue = "";
                        object.options = null;
                        object.oneofIndex = 0;
                        object.jsonName = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
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
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for OneofDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OneofDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.OneofDescriptorProto";
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
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
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.number = reader.int32();
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
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
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.method && message.method.length))
                                    message.method = [];
                                message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
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
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [inputType] MethodDescriptorProto inputType
                 * @property {string|null} [outputType] MethodDescriptorProto outputType
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
                 * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @member {string} inputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @member {string} outputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @member {boolean} clientStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @member {boolean} serverStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.inputType = reader.string();
                                break;
                            }
                        case 3: {
                                message.outputType = reader.string();
                                break;
                            }
                        case 4: {
                                message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.clientStreaming = reader.bool();
                                break;
                            }
                        case 6: {
                                message.serverStreaming = reader.bool();
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
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.inputType != null)
                        message.inputType = String(object.inputType);
                    if (object.outputType != null)
                        message.outputType = String(object.outputType);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.clientStreaming != null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming != null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [javaPackage] FileOptions javaPackage
                 * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
                 * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
                 * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
                 * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
                 * @property {string|null} [goPackage] FileOptions goPackage
                 * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
                 * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
                 * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
                 * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
                 * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @member {string} javaPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @member {string} javaOuterClassname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @member {boolean} javaMultipleFiles
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @member {boolean} javaGenerateEqualsAndHash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @member {boolean} javaStringCheckUtf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @member {string} goPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @member {boolean} ccGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @member {boolean} javaGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @member {boolean} pyGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @member {boolean} ccEnableArenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccEnableArenas = false;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @member {string} objcClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @member {string} csharpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.javaPackage = reader.string();
                                break;
                            }
                        case 8: {
                                message.javaOuterClassname = reader.string();
                                break;
                            }
                        case 10: {
                                message.javaMultipleFiles = reader.bool();
                                break;
                            }
                        case 20: {
                                message.javaGenerateEqualsAndHash = reader.bool();
                                break;
                            }
                        case 27: {
                                message.javaStringCheckUtf8 = reader.bool();
                                break;
                            }
                        case 9: {
                                message.optimizeFor = reader.int32();
                                break;
                            }
                        case 11: {
                                message.goPackage = reader.string();
                                break;
                            }
                        case 16: {
                                message.ccGenericServices = reader.bool();
                                break;
                            }
                        case 17: {
                                message.javaGenericServices = reader.bool();
                                break;
                            }
                        case 18: {
                                message.pyGenericServices = reader.bool();
                                break;
                            }
                        case 23: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 31: {
                                message.ccEnableArenas = reader.bool();
                                break;
                            }
                        case 36: {
                                message.objcClassPrefix = reader.string();
                                break;
                            }
                        case 37: {
                                message.csharpNamespace = reader.string();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage != null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname != null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles != null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash != null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 != null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    default:
                        if (typeof object.optimizeFor === "number") {
                            message.optimizeFor = object.optimizeFor;
                            break;
                        }
                        break;
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage != null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices != null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices != null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices != null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas != null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix != null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace != null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.javaMultipleFiles = false;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.deprecated = false;
                        object.javaStringCheckUtf8 = false;
                        object.ccEnableArenas = false;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] === undefined ? message.optimizeFor : $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileOptions";
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
                 * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [mapEntry] MessageOptions mapEntry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @member {boolean} messageSetWireFormat
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @member {boolean} noStandardDescriptorAccessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @member {boolean} mapEntry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.messageSetWireFormat = reader.bool();
                                break;
                            }
                        case 2: {
                                message.noStandardDescriptorAccessor = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 7: {
                                message.mapEntry = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat != null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor != null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry != null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                    }
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MessageOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MessageOptions";
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 * @property {string|null} [".description"] FieldOptions .description
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * FieldOptions .description.
                 * @member {string} .description
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".description"] = "";
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".description"] != null && Object.hasOwnProperty.call(message, ".description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ctype = reader.int32();
                                break;
                            }
                        case 2: {
                                message.packed = reader.bool();
                                break;
                            }
                        case 6: {
                                message.jstype = reader.int32();
                                break;
                            }
                        case 5: {
                                message.lazy = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 10: {
                                message.weak = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 50000: {
                                message[".description"] = reader.string();
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
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        if (!$util.isString(message[".description"]))
                            return ".description: string expected";
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    default:
                        if (typeof object.ctype === "number") {
                            message.ctype = object.ctype;
                            break;
                        }
                        break;
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    default:
                        if (typeof object.jstype === "number") {
                            message.jstype = object.jstype;
                            break;
                        }
                        break;
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".description"] != null)
                        message[".description"] = String(object[".description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                        object[".description"] = "";
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        object[".description"] = message[".description"];
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldOptions";
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {number}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for OneofOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OneofOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.OneofOptions";
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
                 * @property {string|null} [".enumDescription"] EnumOptions .enumDescription
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @member {boolean} allowAlias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * EnumOptions .enumDescription.
                 * @member {string} .enumDescription
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype[".enumDescription"] = "";
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".enumDescription"] != null && Object.hasOwnProperty.call(message, ".enumDescription"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enumDescription"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.allowAlias = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 50000: {
                                message[".enumDescription"] = reader.string();
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
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".enumDescription"] != null && message.hasOwnProperty(".enumDescription"))
                        if (!$util.isString(message[".enumDescription"]))
                            return ".enumDescription: string expected";
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias != null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".enumDescription"] != null)
                        message[".enumDescription"] = String(object[".enumDescription"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                        object[".enumDescription"] = "";
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".enumDescription"] != null && message.hasOwnProperty(".enumDescription"))
                        object[".enumDescription"] = message[".enumDescription"];
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumOptions";
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
                 * @property {string|null} [".enumValueDescription"] EnumValueOptions .enumValueDescription
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * EnumValueOptions .enumValueDescription.
                 * @member {string} .enumValueDescription
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype[".enumValueDescription"] = "";
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".enumValueDescription"] != null && Object.hasOwnProperty.call(message, ".enumValueDescription"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enumValueDescription"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 50000: {
                                message[".enumValueDescription"] = reader.string();
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
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".enumValueDescription"] != null && message.hasOwnProperty(".enumValueDescription"))
                        if (!$util.isString(message[".enumValueDescription"]))
                            return ".enumValueDescription: string expected";
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".enumValueDescription"] != null)
                        message[".enumValueDescription"] = String(object[".enumValueDescription"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".enumValueDescription"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".enumValueDescription"] != null && message.hasOwnProperty(".enumValueDescription"))
                        object[".enumValueDescription"] = message[".enumValueDescription"];
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
                 * @property {string|null} [".serviceDescription"] ServiceOptions .serviceDescription
                 * @property {EProtoExecutionSite|null} [".serviceExecutionSite"] ServiceOptions .serviceExecutionSite
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * ServiceOptions .serviceDescription.
                 * @member {string} .serviceDescription
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".serviceDescription"] = "";
    
                /**
                 * ServiceOptions .serviceExecutionSite.
                 * @member {EProtoExecutionSite} .serviceExecutionSite
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".serviceExecutionSite"] = 0;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".serviceDescription"] != null && Object.hasOwnProperty.call(message, ".serviceDescription"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".serviceDescription"]);
                    if (message[".serviceExecutionSite"] != null && Object.hasOwnProperty.call(message, ".serviceExecutionSite"))
                        writer.uint32(/* id 50008, wireType 0 =*/400064).int32(message[".serviceExecutionSite"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 50000: {
                                message[".serviceDescription"] = reader.string();
                                break;
                            }
                        case 50008: {
                                message[".serviceExecutionSite"] = reader.int32();
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
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".serviceDescription"] != null && message.hasOwnProperty(".serviceDescription"))
                        if (!$util.isString(message[".serviceDescription"]))
                            return ".serviceDescription: string expected";
                    if (message[".serviceExecutionSite"] != null && message.hasOwnProperty(".serviceExecutionSite"))
                        switch (message[".serviceExecutionSite"]) {
                        default:
                            return ".serviceExecutionSite: enum value expected";
                        case 0:
                        case 3:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".serviceDescription"] != null)
                        message[".serviceDescription"] = String(object[".serviceDescription"]);
                    switch (object[".serviceExecutionSite"]) {
                    default:
                        if (typeof object[".serviceExecutionSite"] === "number") {
                            message[".serviceExecutionSite"] = object[".serviceExecutionSite"];
                            break;
                        }
                        break;
                    case "k_EProtoExecutionSiteUnknown":
                    case 0:
                        message[".serviceExecutionSite"] = 0;
                        break;
                    case "k_EProtoExecutionSiteSteamClient":
                    case 3:
                        message[".serviceExecutionSite"] = 3;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".serviceDescription"] = "";
                        object[".serviceExecutionSite"] = options.enums === String ? "k_EProtoExecutionSiteUnknown" : 0;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".serviceDescription"] != null && message.hasOwnProperty(".serviceDescription"))
                        object[".serviceDescription"] = message[".serviceDescription"];
                    if (message[".serviceExecutionSite"] != null && message.hasOwnProperty(".serviceExecutionSite"))
                        object[".serviceExecutionSite"] = options.enums === String ? $root.EProtoExecutionSite[message[".serviceExecutionSite"]] === undefined ? message[".serviceExecutionSite"] : $root.EProtoExecutionSite[message[".serviceExecutionSite"]] : message[".serviceExecutionSite"];
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceOptions";
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
                 * @property {string|null} [".methodDescription"] MethodOptions .methodDescription
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MethodOptions .methodDescription.
                 * @member {string} .methodDescription
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".methodDescription"] = "";
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".methodDescription"] != null && Object.hasOwnProperty.call(message, ".methodDescription"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".methodDescription"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                    message.uninterpretedOption = [];
                                message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 50000: {
                                message[".methodDescription"] = reader.string();
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
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".methodDescription"] != null && message.hasOwnProperty(".methodDescription"))
                        if (!$util.isString(message[".methodDescription"]))
                            return ".methodDescription: string expected";
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".methodDescription"] != null)
                        message[".methodDescription"] = String(object[".methodDescription"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".methodDescription"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".methodDescription"] != null && message.hasOwnProperty(".methodDescription"))
                        object[".methodDescription"] = message[".methodDescription"];
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodOptions";
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifierValue] UninterpretedOption identifierValue
                 * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
                 * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
                 * @property {number|null} [doubleValue] UninterpretedOption doubleValue
                 * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
                 * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @member {string} identifierValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @member {number|Long} positiveIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @member {number|Long} negativeIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @member {number} doubleValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @member {Uint8Array} stringValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @member {string} aggregateValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                if (!(message.name && message.name.length))
                                    message.name = [];
                                message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.identifierValue = reader.string();
                                break;
                            }
                        case 4: {
                                message.positiveIntValue = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.negativeIntValue = reader.int64();
                                break;
                            }
                        case 6: {
                                message.doubleValue = reader.double();
                                break;
                            }
                        case 7: {
                                message.stringValue = reader.bytes();
                                break;
                            }
                        case 8: {
                                message.aggregateValue = reader.string();
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
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue != null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue != null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                    if (object.negativeIntValue != null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue != null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length >= 0)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue != null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        if (options.bytes === String)
                            object.stringValue = "";
                        else {
                            object.stringValue = [];
                            if (options.bytes !== Array)
                                object.stringValue = $util.newBuffer(object.stringValue);
                        }
                        object.aggregateValue = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for UninterpretedOption
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} namePart NamePart namePart
                     * @property {boolean} isExtension NamePart isExtension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @member {string} namePart
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @member {boolean} isExtension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.namePart = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.isExtension = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("namePart"))
                            throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                        if (!message.hasOwnProperty("isExtension"))
                            throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart != null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension != null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart != null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for NamePart
                     * @function getTypeUrl
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
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
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for SourceCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leadingComments] Location leadingComments
                     * @property {string|null} [trailingComments] Location trailingComments
                     * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leadingDetachedComments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @member {string} leadingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @member {string} trailingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @member {Array.<string>} leadingDetachedComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.span && message.span.length))
                                        message.span = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.span.push(reader.int32());
                                    } else
                                        message.span.push(reader.int32());
                                    break;
                                }
                            case 3: {
                                    message.leadingComments = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.trailingComments = reader.string();
                                    break;
                                }
                            case 6: {
                                    if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                        message.leadingDetachedComments = [];
                                    message.leadingDetachedComments.push(reader.string());
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
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments != null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments != null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                            object.leadingDetachedComments = [];
                            for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Location
                     * @function getTypeUrl
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.annotation && message.annotation.length))
                                    message.annotation = [];
                                message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
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
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for GeneratedCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GeneratedCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo";
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @member {string} sourceFile
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    message.sourceFile = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.begin = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.end = reader.int32();
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
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Annotation
                     * @function getTypeUrl
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
