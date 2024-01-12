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
     * ENotificationSetting enum.
     * @exports ENotificationSetting
     * @enum {number}
     * @property {number} k_ENotificationSettingNotifyUseDefault=0 k_ENotificationSettingNotifyUseDefault value
     * @property {number} k_ENotificationSettingAlways=1 k_ENotificationSettingAlways value
     * @property {number} k_ENotificationSettingNever=2 k_ENotificationSettingNever value
     */
    $root.ENotificationSetting = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ENotificationSettingNotifyUseDefault"] = 0;
        values[valuesById[1] = "k_ENotificationSettingAlways"] = 1;
        values[valuesById[2] = "k_ENotificationSettingNever"] = 2;
        return values;
    })();
    
    $root.CPlayer_GetMutualFriendsForIncomingInvites_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetMutualFriendsForIncomingInvites_Request.
         * @exports ICPlayer_GetMutualFriendsForIncomingInvites_Request
         * @interface ICPlayer_GetMutualFriendsForIncomingInvites_Request
         */
    
        /**
         * Constructs a new CPlayer_GetMutualFriendsForIncomingInvites_Request.
         * @exports CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @classdesc Represents a CPlayer_GetMutualFriendsForIncomingInvites_Request.
         * @implements ICPlayer_GetMutualFriendsForIncomingInvites_Request
         * @constructor
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request=} [properties] Properties to set
         */
        function CPlayer_GetMutualFriendsForIncomingInvites_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetMutualFriendsForIncomingInvites_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request=} [properties] Properties to set
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request instance
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.create = function create(properties) {
            return new CPlayer_GetMutualFriendsForIncomingInvites_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Request message. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} message CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Request message, length delimited. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} message CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetMutualFriendsForIncomingInvites_Request();
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
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetMutualFriendsForIncomingInvites_Request message.
         * @function verify
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetMutualFriendsForIncomingInvites_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetMutualFriendsForIncomingInvites_Request)
                return object;
            return new $root.CPlayer_GetMutualFriendsForIncomingInvites_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetMutualFriendsForIncomingInvites_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {CPlayer_GetMutualFriendsForIncomingInvites_Request} message CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetMutualFriendsForIncomingInvites_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetMutualFriendsForIncomingInvites_Request";
        };
    
        return CPlayer_GetMutualFriendsForIncomingInvites_Request;
    })();
    
    $root.CPlayer_IncomingInviteMutualFriendList = (function() {
    
        /**
         * Properties of a CPlayer_IncomingInviteMutualFriendList.
         * @exports ICPlayer_IncomingInviteMutualFriendList
         * @interface ICPlayer_IncomingInviteMutualFriendList
         * @property {number|Long|null} [steamid] CPlayer_IncomingInviteMutualFriendList steamid
         * @property {Array.<number>|null} [mutualFriendAccountIds] CPlayer_IncomingInviteMutualFriendList mutualFriendAccountIds
         */
    
        /**
         * Constructs a new CPlayer_IncomingInviteMutualFriendList.
         * @exports CPlayer_IncomingInviteMutualFriendList
         * @classdesc Represents a CPlayer_IncomingInviteMutualFriendList.
         * @implements ICPlayer_IncomingInviteMutualFriendList
         * @constructor
         * @param {ICPlayer_IncomingInviteMutualFriendList=} [properties] Properties to set
         */
        function CPlayer_IncomingInviteMutualFriendList(properties) {
            this.mutualFriendAccountIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_IncomingInviteMutualFriendList steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @instance
         */
        CPlayer_IncomingInviteMutualFriendList.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CPlayer_IncomingInviteMutualFriendList mutualFriendAccountIds.
         * @member {Array.<number>} mutualFriendAccountIds
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @instance
         */
        CPlayer_IncomingInviteMutualFriendList.prototype.mutualFriendAccountIds = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_IncomingInviteMutualFriendList instance using the specified properties.
         * @function create
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {ICPlayer_IncomingInviteMutualFriendList=} [properties] Properties to set
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList instance
         */
        CPlayer_IncomingInviteMutualFriendList.create = function create(properties) {
            return new CPlayer_IncomingInviteMutualFriendList(properties);
        };
    
        /**
         * Encodes the specified CPlayer_IncomingInviteMutualFriendList message. Does not implicitly {@link CPlayer_IncomingInviteMutualFriendList.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {ICPlayer_IncomingInviteMutualFriendList} message CPlayer_IncomingInviteMutualFriendList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IncomingInviteMutualFriendList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.mutualFriendAccountIds != null && message.mutualFriendAccountIds.length)
                for (var i = 0; i < message.mutualFriendAccountIds.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mutualFriendAccountIds[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_IncomingInviteMutualFriendList message, length delimited. Does not implicitly {@link CPlayer_IncomingInviteMutualFriendList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {ICPlayer_IncomingInviteMutualFriendList} message CPlayer_IncomingInviteMutualFriendList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IncomingInviteMutualFriendList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_IncomingInviteMutualFriendList message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IncomingInviteMutualFriendList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_IncomingInviteMutualFriendList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 2: {
                        if (!(message.mutualFriendAccountIds && message.mutualFriendAccountIds.length))
                            message.mutualFriendAccountIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.mutualFriendAccountIds.push(reader.uint32());
                        } else
                            message.mutualFriendAccountIds.push(reader.uint32());
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
         * Decodes a CPlayer_IncomingInviteMutualFriendList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IncomingInviteMutualFriendList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_IncomingInviteMutualFriendList message.
         * @function verify
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_IncomingInviteMutualFriendList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.mutualFriendAccountIds != null && message.hasOwnProperty("mutualFriendAccountIds")) {
                if (!Array.isArray(message.mutualFriendAccountIds))
                    return "mutualFriendAccountIds: array expected";
                for (var i = 0; i < message.mutualFriendAccountIds.length; ++i)
                    if (!$util.isInteger(message.mutualFriendAccountIds[i]))
                        return "mutualFriendAccountIds: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_IncomingInviteMutualFriendList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList
         */
        CPlayer_IncomingInviteMutualFriendList.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_IncomingInviteMutualFriendList)
                return object;
            var message = new $root.CPlayer_IncomingInviteMutualFriendList();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.mutualFriendAccountIds) {
                if (!Array.isArray(object.mutualFriendAccountIds))
                    throw TypeError(".CPlayer_IncomingInviteMutualFriendList.mutualFriendAccountIds: array expected");
                message.mutualFriendAccountIds = [];
                for (var i = 0; i < object.mutualFriendAccountIds.length; ++i)
                    message.mutualFriendAccountIds[i] = object.mutualFriendAccountIds[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_IncomingInviteMutualFriendList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {CPlayer_IncomingInviteMutualFriendList} message CPlayer_IncomingInviteMutualFriendList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_IncomingInviteMutualFriendList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mutualFriendAccountIds = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.mutualFriendAccountIds && message.mutualFriendAccountIds.length) {
                object.mutualFriendAccountIds = [];
                for (var j = 0; j < message.mutualFriendAccountIds.length; ++j)
                    object.mutualFriendAccountIds[j] = message.mutualFriendAccountIds[j];
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_IncomingInviteMutualFriendList to JSON.
         * @function toJSON
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_IncomingInviteMutualFriendList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_IncomingInviteMutualFriendList
         * @function getTypeUrl
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_IncomingInviteMutualFriendList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_IncomingInviteMutualFriendList";
        };
    
        return CPlayer_IncomingInviteMutualFriendList;
    })();
    
    $root.CPlayer_GetMutualFriendsForIncomingInvites_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetMutualFriendsForIncomingInvites_Response.
         * @exports ICPlayer_GetMutualFriendsForIncomingInvites_Response
         * @interface ICPlayer_GetMutualFriendsForIncomingInvites_Response
         * @property {Array.<ICPlayer_IncomingInviteMutualFriendList>|null} [incomingInviteMutualFriendsLists] CPlayer_GetMutualFriendsForIncomingInvites_Response incomingInviteMutualFriendsLists
         */
    
        /**
         * Constructs a new CPlayer_GetMutualFriendsForIncomingInvites_Response.
         * @exports CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @classdesc Represents a CPlayer_GetMutualFriendsForIncomingInvites_Response.
         * @implements ICPlayer_GetMutualFriendsForIncomingInvites_Response
         * @constructor
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response=} [properties] Properties to set
         */
        function CPlayer_GetMutualFriendsForIncomingInvites_Response(properties) {
            this.incomingInviteMutualFriendsLists = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetMutualFriendsForIncomingInvites_Response incomingInviteMutualFriendsLists.
         * @member {Array.<ICPlayer_IncomingInviteMutualFriendList>} incomingInviteMutualFriendsLists
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @instance
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.prototype.incomingInviteMutualFriendsLists = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetMutualFriendsForIncomingInvites_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response=} [properties] Properties to set
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response instance
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.create = function create(properties) {
            return new CPlayer_GetMutualFriendsForIncomingInvites_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Response message. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response} message CPlayer_GetMutualFriendsForIncomingInvites_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.incomingInviteMutualFriendsLists != null && message.incomingInviteMutualFriendsLists.length)
                for (var i = 0; i < message.incomingInviteMutualFriendsLists.length; ++i)
                    $root.CPlayer_IncomingInviteMutualFriendList.encode(message.incomingInviteMutualFriendsLists[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Response message, length delimited. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response} message CPlayer_GetMutualFriendsForIncomingInvites_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetMutualFriendsForIncomingInvites_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.incomingInviteMutualFriendsLists && message.incomingInviteMutualFriendsLists.length))
                            message.incomingInviteMutualFriendsLists = [];
                        message.incomingInviteMutualFriendsLists.push($root.CPlayer_IncomingInviteMutualFriendList.decode(reader, reader.uint32()));
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
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetMutualFriendsForIncomingInvites_Response message.
         * @function verify
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.incomingInviteMutualFriendsLists != null && message.hasOwnProperty("incomingInviteMutualFriendsLists")) {
                if (!Array.isArray(message.incomingInviteMutualFriendsLists))
                    return "incomingInviteMutualFriendsLists: array expected";
                for (var i = 0; i < message.incomingInviteMutualFriendsLists.length; ++i) {
                    var error = $root.CPlayer_IncomingInviteMutualFriendList.verify(message.incomingInviteMutualFriendsLists[i]);
                    if (error)
                        return "incomingInviteMutualFriendsLists." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetMutualFriendsForIncomingInvites_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetMutualFriendsForIncomingInvites_Response)
                return object;
            var message = new $root.CPlayer_GetMutualFriendsForIncomingInvites_Response();
            if (object.incomingInviteMutualFriendsLists) {
                if (!Array.isArray(object.incomingInviteMutualFriendsLists))
                    throw TypeError(".CPlayer_GetMutualFriendsForIncomingInvites_Response.incomingInviteMutualFriendsLists: array expected");
                message.incomingInviteMutualFriendsLists = [];
                for (var i = 0; i < object.incomingInviteMutualFriendsLists.length; ++i) {
                    if (typeof object.incomingInviteMutualFriendsLists[i] !== "object")
                        throw TypeError(".CPlayer_GetMutualFriendsForIncomingInvites_Response.incomingInviteMutualFriendsLists: object expected");
                    message.incomingInviteMutualFriendsLists[i] = $root.CPlayer_IncomingInviteMutualFriendList.fromObject(object.incomingInviteMutualFriendsLists[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetMutualFriendsForIncomingInvites_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {CPlayer_GetMutualFriendsForIncomingInvites_Response} message CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.incomingInviteMutualFriendsLists = [];
            if (message.incomingInviteMutualFriendsLists && message.incomingInviteMutualFriendsLists.length) {
                object.incomingInviteMutualFriendsLists = [];
                for (var j = 0; j < message.incomingInviteMutualFriendsLists.length; ++j)
                    object.incomingInviteMutualFriendsLists[j] = $root.CPlayer_IncomingInviteMutualFriendList.toObject(message.incomingInviteMutualFriendsLists[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetMutualFriendsForIncomingInvites_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetMutualFriendsForIncomingInvites_Response";
        };
    
        return CPlayer_GetMutualFriendsForIncomingInvites_Response;
    })();
    
    $root.CPlayer_GetFriendsGameplayInfo_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetFriendsGameplayInfo_Request.
         * @exports ICPlayer_GetFriendsGameplayInfo_Request
         * @interface ICPlayer_GetFriendsGameplayInfo_Request
         * @property {number|null} [appid] CPlayer_GetFriendsGameplayInfo_Request appid
         */
    
        /**
         * Constructs a new CPlayer_GetFriendsGameplayInfo_Request.
         * @exports CPlayer_GetFriendsGameplayInfo_Request
         * @classdesc Represents a CPlayer_GetFriendsGameplayInfo_Request.
         * @implements ICPlayer_GetFriendsGameplayInfo_Request
         * @constructor
         * @param {ICPlayer_GetFriendsGameplayInfo_Request=} [properties] Properties to set
         */
        function CPlayer_GetFriendsGameplayInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Request appid.
         * @member {number} appid
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Request.prototype.appid = 0;
    
        /**
         * Creates a new CPlayer_GetFriendsGameplayInfo_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Request=} [properties] Properties to set
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request instance
         */
        CPlayer_GetFriendsGameplayInfo_Request.create = function create(properties) {
            return new CPlayer_GetFriendsGameplayInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Request message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} message CPlayer_GetFriendsGameplayInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Request message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} message CPlayer_GetFriendsGameplayInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetFriendsGameplayInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
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
         * Decodes a CPlayer_GetFriendsGameplayInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetFriendsGameplayInfo_Request message.
         * @function verify
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetFriendsGameplayInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetFriendsGameplayInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request
         */
        CPlayer_GetFriendsGameplayInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Request)
                return object;
            var message = new $root.CPlayer_GetFriendsGameplayInfo_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetFriendsGameplayInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {CPlayer_GetFriendsGameplayInfo_Request} message CPlayer_GetFriendsGameplayInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetFriendsGameplayInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.appid = 0;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetFriendsGameplayInfo_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetFriendsGameplayInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetFriendsGameplayInfo_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetFriendsGameplayInfo_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetFriendsGameplayInfo_Request";
        };
    
        return CPlayer_GetFriendsGameplayInfo_Request;
    })();
    
    $root.CPlayer_GetFriendsGameplayInfo_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetFriendsGameplayInfo_Response.
         * @exports ICPlayer_GetFriendsGameplayInfo_Response
         * @interface ICPlayer_GetFriendsGameplayInfo_Response
         * @property {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo|null} [yourInfo] CPlayer_GetFriendsGameplayInfo_Response yourInfo
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [inGame] CPlayer_GetFriendsGameplayInfo_Response inGame
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [playedRecently] CPlayer_GetFriendsGameplayInfo_Response playedRecently
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [playedEver] CPlayer_GetFriendsGameplayInfo_Response playedEver
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [owns] CPlayer_GetFriendsGameplayInfo_Response owns
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [inWishlist] CPlayer_GetFriendsGameplayInfo_Response inWishlist
         */
    
        /**
         * Constructs a new CPlayer_GetFriendsGameplayInfo_Response.
         * @exports CPlayer_GetFriendsGameplayInfo_Response
         * @classdesc Represents a CPlayer_GetFriendsGameplayInfo_Response.
         * @implements ICPlayer_GetFriendsGameplayInfo_Response
         * @constructor
         * @param {ICPlayer_GetFriendsGameplayInfo_Response=} [properties] Properties to set
         */
        function CPlayer_GetFriendsGameplayInfo_Response(properties) {
            this.inGame = [];
            this.playedRecently = [];
            this.playedEver = [];
            this.owns = [];
            this.inWishlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response yourInfo.
         * @member {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo|null|undefined} yourInfo
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.yourInfo = null;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response inGame.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} inGame
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.inGame = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response playedRecently.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} playedRecently
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.playedRecently = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response playedEver.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} playedEver
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.playedEver = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response owns.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} owns
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.owns = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response inWishlist.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} inWishlist
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.inWishlist = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetFriendsGameplayInfo_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Response=} [properties] Properties to set
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.create = function create(properties) {
            return new CPlayer_GetFriendsGameplayInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Response message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Response} message CPlayer_GetFriendsGameplayInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.yourInfo != null && Object.hasOwnProperty.call(message, "yourInfo"))
                $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.encode(message.yourInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.inGame != null && message.inGame.length)
                for (var i = 0; i < message.inGame.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.inGame[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.playedRecently != null && message.playedRecently.length)
                for (var i = 0; i < message.playedRecently.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.playedRecently[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.playedEver != null && message.playedEver.length)
                for (var i = 0; i < message.playedEver.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.playedEver[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.owns != null && message.owns.length)
                for (var i = 0; i < message.owns.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.owns[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.inWishlist != null && message.inWishlist.length)
                for (var i = 0; i < message.inWishlist.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.inWishlist[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Response message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Response} message CPlayer_GetFriendsGameplayInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetFriendsGameplayInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.yourInfo = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.inGame && message.inGame.length))
                            message.inGame = [];
                        message.inGame.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.playedRecently && message.playedRecently.length))
                            message.playedRecently = [];
                        message.playedRecently.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.playedEver && message.playedEver.length))
                            message.playedEver = [];
                        message.playedEver.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.owns && message.owns.length))
                            message.owns = [];
                        message.owns.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.inWishlist && message.inWishlist.length))
                            message.inWishlist = [];
                        message.inWishlist.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
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
         * Decodes a CPlayer_GetFriendsGameplayInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetFriendsGameplayInfo_Response message.
         * @function verify
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetFriendsGameplayInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.yourInfo != null && message.hasOwnProperty("yourInfo")) {
                var error = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify(message.yourInfo);
                if (error)
                    return "yourInfo." + error;
            }
            if (message.inGame != null && message.hasOwnProperty("inGame")) {
                if (!Array.isArray(message.inGame))
                    return "inGame: array expected";
                for (var i = 0; i < message.inGame.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.inGame[i]);
                    if (error)
                        return "inGame." + error;
                }
            }
            if (message.playedRecently != null && message.hasOwnProperty("playedRecently")) {
                if (!Array.isArray(message.playedRecently))
                    return "playedRecently: array expected";
                for (var i = 0; i < message.playedRecently.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.playedRecently[i]);
                    if (error)
                        return "playedRecently." + error;
                }
            }
            if (message.playedEver != null && message.hasOwnProperty("playedEver")) {
                if (!Array.isArray(message.playedEver))
                    return "playedEver: array expected";
                for (var i = 0; i < message.playedEver.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.playedEver[i]);
                    if (error)
                        return "playedEver." + error;
                }
            }
            if (message.owns != null && message.hasOwnProperty("owns")) {
                if (!Array.isArray(message.owns))
                    return "owns: array expected";
                for (var i = 0; i < message.owns.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.owns[i]);
                    if (error)
                        return "owns." + error;
                }
            }
            if (message.inWishlist != null && message.hasOwnProperty("inWishlist")) {
                if (!Array.isArray(message.inWishlist))
                    return "inWishlist: array expected";
                for (var i = 0; i < message.inWishlist.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.inWishlist[i]);
                    if (error)
                        return "inWishlist." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetFriendsGameplayInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response
         */
        CPlayer_GetFriendsGameplayInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Response)
                return object;
            var message = new $root.CPlayer_GetFriendsGameplayInfo_Response();
            if (object.yourInfo != null) {
                if (typeof object.yourInfo !== "object")
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.yourInfo: object expected");
                message.yourInfo = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.fromObject(object.yourInfo);
            }
            if (object.inGame) {
                if (!Array.isArray(object.inGame))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.inGame: array expected");
                message.inGame = [];
                for (var i = 0; i < object.inGame.length; ++i) {
                    if (typeof object.inGame[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.inGame: object expected");
                    message.inGame[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.inGame[i]);
                }
            }
            if (object.playedRecently) {
                if (!Array.isArray(object.playedRecently))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.playedRecently: array expected");
                message.playedRecently = [];
                for (var i = 0; i < object.playedRecently.length; ++i) {
                    if (typeof object.playedRecently[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.playedRecently: object expected");
                    message.playedRecently[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.playedRecently[i]);
                }
            }
            if (object.playedEver) {
                if (!Array.isArray(object.playedEver))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.playedEver: array expected");
                message.playedEver = [];
                for (var i = 0; i < object.playedEver.length; ++i) {
                    if (typeof object.playedEver[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.playedEver: object expected");
                    message.playedEver[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.playedEver[i]);
                }
            }
            if (object.owns) {
                if (!Array.isArray(object.owns))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.owns: array expected");
                message.owns = [];
                for (var i = 0; i < object.owns.length; ++i) {
                    if (typeof object.owns[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.owns: object expected");
                    message.owns[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.owns[i]);
                }
            }
            if (object.inWishlist) {
                if (!Array.isArray(object.inWishlist))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.inWishlist: array expected");
                message.inWishlist = [];
                for (var i = 0; i < object.inWishlist.length; ++i) {
                    if (typeof object.inWishlist[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.inWishlist: object expected");
                    message.inWishlist[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.inWishlist[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetFriendsGameplayInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {CPlayer_GetFriendsGameplayInfo_Response} message CPlayer_GetFriendsGameplayInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetFriendsGameplayInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.inGame = [];
                object.playedRecently = [];
                object.playedEver = [];
                object.owns = [];
                object.inWishlist = [];
            }
            if (options.defaults)
                object.yourInfo = null;
            if (message.yourInfo != null && message.hasOwnProperty("yourInfo"))
                object.yourInfo = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.toObject(message.yourInfo, options);
            if (message.inGame && message.inGame.length) {
                object.inGame = [];
                for (var j = 0; j < message.inGame.length; ++j)
                    object.inGame[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.inGame[j], options);
            }
            if (message.playedRecently && message.playedRecently.length) {
                object.playedRecently = [];
                for (var j = 0; j < message.playedRecently.length; ++j)
                    object.playedRecently[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.playedRecently[j], options);
            }
            if (message.playedEver && message.playedEver.length) {
                object.playedEver = [];
                for (var j = 0; j < message.playedEver.length; ++j)
                    object.playedEver[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.playedEver[j], options);
            }
            if (message.owns && message.owns.length) {
                object.owns = [];
                for (var j = 0; j < message.owns.length; ++j)
                    object.owns[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.owns[j], options);
            }
            if (message.inWishlist && message.inWishlist.length) {
                object.inWishlist = [];
                for (var j = 0; j < message.inWishlist.length; ++j)
                    object.inWishlist[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.inWishlist[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetFriendsGameplayInfo_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetFriendsGameplayInfo_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetFriendsGameplayInfo_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetFriendsGameplayInfo_Response";
        };
    
        CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo = (function() {
    
            /**
             * Properties of a FriendsGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @interface IFriendsGameplayInfo
             * @property {number|Long|null} [steamid] FriendsGameplayInfo steamid
             * @property {number|null} [minutesPlayed] FriendsGameplayInfo minutesPlayed
             * @property {number|null} [minutesPlayedForever] FriendsGameplayInfo minutesPlayedForever
             */
    
            /**
             * Constructs a new FriendsGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @classdesc Represents a FriendsGameplayInfo.
             * @implements IFriendsGameplayInfo
             * @constructor
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo=} [properties] Properties to set
             */
            function FriendsGameplayInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FriendsGameplayInfo steamid.
             * @member {number|Long} steamid
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             */
            FriendsGameplayInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * FriendsGameplayInfo minutesPlayed.
             * @member {number} minutesPlayed
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             */
            FriendsGameplayInfo.prototype.minutesPlayed = 0;
    
            /**
             * FriendsGameplayInfo minutesPlayedForever.
             * @member {number} minutesPlayedForever
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             */
            FriendsGameplayInfo.prototype.minutesPlayedForever = 0;
    
            /**
             * Creates a new FriendsGameplayInfo instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo=} [properties] Properties to set
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo instance
             */
            FriendsGameplayInfo.create = function create(properties) {
                return new FriendsGameplayInfo(properties);
            };
    
            /**
             * Encodes the specified FriendsGameplayInfo message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo} message FriendsGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendsGameplayInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
                if (message.minutesPlayed != null && Object.hasOwnProperty.call(message, "minutesPlayed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minutesPlayed);
                if (message.minutesPlayedForever != null && Object.hasOwnProperty.call(message, "minutesPlayedForever"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.minutesPlayedForever);
                return writer;
            };
    
            /**
             * Encodes the specified FriendsGameplayInfo message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo} message FriendsGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendsGameplayInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FriendsGameplayInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendsGameplayInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.steamid = reader.fixed64();
                            break;
                        }
                    case 2: {
                            message.minutesPlayed = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.minutesPlayedForever = reader.uint32();
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
             * Decodes a FriendsGameplayInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendsGameplayInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FriendsGameplayInfo message.
             * @function verify
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FriendsGameplayInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                if (message.minutesPlayed != null && message.hasOwnProperty("minutesPlayed"))
                    if (!$util.isInteger(message.minutesPlayed))
                        return "minutesPlayed: integer expected";
                if (message.minutesPlayedForever != null && message.hasOwnProperty("minutesPlayedForever"))
                    if (!$util.isInteger(message.minutesPlayedForever))
                        return "minutesPlayedForever: integer expected";
                return null;
            };
    
            /**
             * Creates a FriendsGameplayInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo
             */
            FriendsGameplayInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo)
                    return object;
                var message = new $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo();
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                if (object.minutesPlayed != null)
                    message.minutesPlayed = object.minutesPlayed >>> 0;
                if (object.minutesPlayedForever != null)
                    message.minutesPlayedForever = object.minutesPlayedForever >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a FriendsGameplayInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} message FriendsGameplayInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FriendsGameplayInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                    object.minutesPlayed = 0;
                    object.minutesPlayedForever = 0;
                }
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                if (message.minutesPlayed != null && message.hasOwnProperty("minutesPlayed"))
                    object.minutesPlayed = message.minutesPlayed;
                if (message.minutesPlayedForever != null && message.hasOwnProperty("minutesPlayedForever"))
                    object.minutesPlayedForever = message.minutesPlayedForever;
                return object;
            };
    
            /**
             * Converts this FriendsGameplayInfo to JSON.
             * @function toJSON
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FriendsGameplayInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for FriendsGameplayInfo
             * @function getTypeUrl
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FriendsGameplayInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo";
            };
    
            return FriendsGameplayInfo;
        })();
    
        CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo = (function() {
    
            /**
             * Properties of an OwnGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @interface IOwnGameplayInfo
             * @property {number|Long|null} [steamid] OwnGameplayInfo steamid
             * @property {number|null} [minutesPlayed] OwnGameplayInfo minutesPlayed
             * @property {number|null} [minutesPlayedForever] OwnGameplayInfo minutesPlayedForever
             * @property {boolean|null} [inWishlist] OwnGameplayInfo inWishlist
             * @property {boolean|null} [owned] OwnGameplayInfo owned
             */
    
            /**
             * Constructs a new OwnGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @classdesc Represents an OwnGameplayInfo.
             * @implements IOwnGameplayInfo
             * @constructor
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo=} [properties] Properties to set
             */
            function OwnGameplayInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OwnGameplayInfo steamid.
             * @member {number|Long} steamid
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * OwnGameplayInfo minutesPlayed.
             * @member {number} minutesPlayed
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.minutesPlayed = 0;
    
            /**
             * OwnGameplayInfo minutesPlayedForever.
             * @member {number} minutesPlayedForever
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.minutesPlayedForever = 0;
    
            /**
             * OwnGameplayInfo inWishlist.
             * @member {boolean} inWishlist
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.inWishlist = false;
    
            /**
             * OwnGameplayInfo owned.
             * @member {boolean} owned
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.owned = false;
    
            /**
             * Creates a new OwnGameplayInfo instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo=} [properties] Properties to set
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo instance
             */
            OwnGameplayInfo.create = function create(properties) {
                return new OwnGameplayInfo(properties);
            };
    
            /**
             * Encodes the specified OwnGameplayInfo message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo} message OwnGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnGameplayInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
                if (message.minutesPlayed != null && Object.hasOwnProperty.call(message, "minutesPlayed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minutesPlayed);
                if (message.minutesPlayedForever != null && Object.hasOwnProperty.call(message, "minutesPlayedForever"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.minutesPlayedForever);
                if (message.inWishlist != null && Object.hasOwnProperty.call(message, "inWishlist"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.inWishlist);
                if (message.owned != null && Object.hasOwnProperty.call(message, "owned"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.owned);
                return writer;
            };
    
            /**
             * Encodes the specified OwnGameplayInfo message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo} message OwnGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnGameplayInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OwnGameplayInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnGameplayInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.steamid = reader.fixed64();
                            break;
                        }
                    case 2: {
                            message.minutesPlayed = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.minutesPlayedForever = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.inWishlist = reader.bool();
                            break;
                        }
                    case 5: {
                            message.owned = reader.bool();
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
             * Decodes an OwnGameplayInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnGameplayInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OwnGameplayInfo message.
             * @function verify
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnGameplayInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                if (message.minutesPlayed != null && message.hasOwnProperty("minutesPlayed"))
                    if (!$util.isInteger(message.minutesPlayed))
                        return "minutesPlayed: integer expected";
                if (message.minutesPlayedForever != null && message.hasOwnProperty("minutesPlayedForever"))
                    if (!$util.isInteger(message.minutesPlayedForever))
                        return "minutesPlayedForever: integer expected";
                if (message.inWishlist != null && message.hasOwnProperty("inWishlist"))
                    if (typeof message.inWishlist !== "boolean")
                        return "inWishlist: boolean expected";
                if (message.owned != null && message.hasOwnProperty("owned"))
                    if (typeof message.owned !== "boolean")
                        return "owned: boolean expected";
                return null;
            };
    
            /**
             * Creates an OwnGameplayInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo
             */
            OwnGameplayInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo)
                    return object;
                var message = new $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo();
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                if (object.minutesPlayed != null)
                    message.minutesPlayed = object.minutesPlayed >>> 0;
                if (object.minutesPlayedForever != null)
                    message.minutesPlayedForever = object.minutesPlayedForever >>> 0;
                if (object.inWishlist != null)
                    message.inWishlist = Boolean(object.inWishlist);
                if (object.owned != null)
                    message.owned = Boolean(object.owned);
                return message;
            };
    
            /**
             * Creates a plain object from an OwnGameplayInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} message OwnGameplayInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnGameplayInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                    object.minutesPlayed = 0;
                    object.minutesPlayedForever = 0;
                    object.inWishlist = false;
                    object.owned = false;
                }
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                if (message.minutesPlayed != null && message.hasOwnProperty("minutesPlayed"))
                    object.minutesPlayed = message.minutesPlayed;
                if (message.minutesPlayedForever != null && message.hasOwnProperty("minutesPlayedForever"))
                    object.minutesPlayedForever = message.minutesPlayedForever;
                if (message.inWishlist != null && message.hasOwnProperty("inWishlist"))
                    object.inWishlist = message.inWishlist;
                if (message.owned != null && message.hasOwnProperty("owned"))
                    object.owned = message.owned;
                return object;
            };
    
            /**
             * Converts this OwnGameplayInfo to JSON.
             * @function toJSON
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnGameplayInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for OwnGameplayInfo
             * @function getTypeUrl
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OwnGameplayInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo";
            };
    
            return OwnGameplayInfo;
        })();
    
        return CPlayer_GetFriendsGameplayInfo_Response;
    })();
    
    $root.CPlayer_GetGameBadgeLevels_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetGameBadgeLevels_Request.
         * @exports ICPlayer_GetGameBadgeLevels_Request
         * @interface ICPlayer_GetGameBadgeLevels_Request
         * @property {number|null} [appid] CPlayer_GetGameBadgeLevels_Request appid
         */
    
        /**
         * Constructs a new CPlayer_GetGameBadgeLevels_Request.
         * @exports CPlayer_GetGameBadgeLevels_Request
         * @classdesc Represents a CPlayer_GetGameBadgeLevels_Request.
         * @implements ICPlayer_GetGameBadgeLevels_Request
         * @constructor
         * @param {ICPlayer_GetGameBadgeLevels_Request=} [properties] Properties to set
         */
        function CPlayer_GetGameBadgeLevels_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetGameBadgeLevels_Request appid.
         * @member {number} appid
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @instance
         */
        CPlayer_GetGameBadgeLevels_Request.prototype.appid = 0;
    
        /**
         * Creates a new CPlayer_GetGameBadgeLevels_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Request=} [properties] Properties to set
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request instance
         */
        CPlayer_GetGameBadgeLevels_Request.create = function create(properties) {
            return new CPlayer_GetGameBadgeLevels_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Request message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Request} message CPlayer_GetGameBadgeLevels_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Request message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Request} message CPlayer_GetGameBadgeLevels_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetGameBadgeLevels_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetGameBadgeLevels_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
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
         * Decodes a CPlayer_GetGameBadgeLevels_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetGameBadgeLevels_Request message.
         * @function verify
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetGameBadgeLevels_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetGameBadgeLevels_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request
         */
        CPlayer_GetGameBadgeLevels_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetGameBadgeLevels_Request)
                return object;
            var message = new $root.CPlayer_GetGameBadgeLevels_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetGameBadgeLevels_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {CPlayer_GetGameBadgeLevels_Request} message CPlayer_GetGameBadgeLevels_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetGameBadgeLevels_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.appid = 0;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetGameBadgeLevels_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetGameBadgeLevels_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetGameBadgeLevels_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetGameBadgeLevels_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetGameBadgeLevels_Request";
        };
    
        return CPlayer_GetGameBadgeLevels_Request;
    })();
    
    $root.CPlayer_GetGameBadgeLevels_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetGameBadgeLevels_Response.
         * @exports ICPlayer_GetGameBadgeLevels_Response
         * @interface ICPlayer_GetGameBadgeLevels_Response
         * @property {number|null} [playerLevel] CPlayer_GetGameBadgeLevels_Response playerLevel
         * @property {Array.<CPlayer_GetGameBadgeLevels_Response.IBadge>|null} [badges] CPlayer_GetGameBadgeLevels_Response badges
         */
    
        /**
         * Constructs a new CPlayer_GetGameBadgeLevels_Response.
         * @exports CPlayer_GetGameBadgeLevels_Response
         * @classdesc Represents a CPlayer_GetGameBadgeLevels_Response.
         * @implements ICPlayer_GetGameBadgeLevels_Response
         * @constructor
         * @param {ICPlayer_GetGameBadgeLevels_Response=} [properties] Properties to set
         */
        function CPlayer_GetGameBadgeLevels_Response(properties) {
            this.badges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetGameBadgeLevels_Response playerLevel.
         * @member {number} playerLevel
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @instance
         */
        CPlayer_GetGameBadgeLevels_Response.prototype.playerLevel = 0;
    
        /**
         * CPlayer_GetGameBadgeLevels_Response badges.
         * @member {Array.<CPlayer_GetGameBadgeLevels_Response.IBadge>} badges
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @instance
         */
        CPlayer_GetGameBadgeLevels_Response.prototype.badges = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetGameBadgeLevels_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Response=} [properties] Properties to set
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response instance
         */
        CPlayer_GetGameBadgeLevels_Response.create = function create(properties) {
            return new CPlayer_GetGameBadgeLevels_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Response message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Response} message CPlayer_GetGameBadgeLevels_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerLevel != null && Object.hasOwnProperty.call(message, "playerLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.playerLevel);
            if (message.badges != null && message.badges.length)
                for (var i = 0; i < message.badges.length; ++i)
                    $root.CPlayer_GetGameBadgeLevels_Response.Badge.encode(message.badges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Response message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Response} message CPlayer_GetGameBadgeLevels_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetGameBadgeLevels_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetGameBadgeLevels_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerLevel = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.badges && message.badges.length))
                            message.badges = [];
                        message.badges.push($root.CPlayer_GetGameBadgeLevels_Response.Badge.decode(reader, reader.uint32()));
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
         * Decodes a CPlayer_GetGameBadgeLevels_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetGameBadgeLevels_Response message.
         * @function verify
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetGameBadgeLevels_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerLevel != null && message.hasOwnProperty("playerLevel"))
                if (!$util.isInteger(message.playerLevel))
                    return "playerLevel: integer expected";
            if (message.badges != null && message.hasOwnProperty("badges")) {
                if (!Array.isArray(message.badges))
                    return "badges: array expected";
                for (var i = 0; i < message.badges.length; ++i) {
                    var error = $root.CPlayer_GetGameBadgeLevels_Response.Badge.verify(message.badges[i]);
                    if (error)
                        return "badges." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetGameBadgeLevels_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response
         */
        CPlayer_GetGameBadgeLevels_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetGameBadgeLevels_Response)
                return object;
            var message = new $root.CPlayer_GetGameBadgeLevels_Response();
            if (object.playerLevel != null)
                message.playerLevel = object.playerLevel >>> 0;
            if (object.badges) {
                if (!Array.isArray(object.badges))
                    throw TypeError(".CPlayer_GetGameBadgeLevels_Response.badges: array expected");
                message.badges = [];
                for (var i = 0; i < object.badges.length; ++i) {
                    if (typeof object.badges[i] !== "object")
                        throw TypeError(".CPlayer_GetGameBadgeLevels_Response.badges: object expected");
                    message.badges[i] = $root.CPlayer_GetGameBadgeLevels_Response.Badge.fromObject(object.badges[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetGameBadgeLevels_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {CPlayer_GetGameBadgeLevels_Response} message CPlayer_GetGameBadgeLevels_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetGameBadgeLevels_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.badges = [];
            if (options.defaults)
                object.playerLevel = 0;
            if (message.playerLevel != null && message.hasOwnProperty("playerLevel"))
                object.playerLevel = message.playerLevel;
            if (message.badges && message.badges.length) {
                object.badges = [];
                for (var j = 0; j < message.badges.length; ++j)
                    object.badges[j] = $root.CPlayer_GetGameBadgeLevels_Response.Badge.toObject(message.badges[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetGameBadgeLevels_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetGameBadgeLevels_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetGameBadgeLevels_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetGameBadgeLevels_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetGameBadgeLevels_Response";
        };
    
        CPlayer_GetGameBadgeLevels_Response.Badge = (function() {
    
            /**
             * Properties of a Badge.
             * @memberof CPlayer_GetGameBadgeLevels_Response
             * @interface IBadge
             * @property {number|null} [level] Badge level
             * @property {number|null} [series] Badge series
             * @property {number|null} [borderColor] Badge borderColor
             */
    
            /**
             * Constructs a new Badge.
             * @memberof CPlayer_GetGameBadgeLevels_Response
             * @classdesc Represents a Badge.
             * @implements IBadge
             * @constructor
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge=} [properties] Properties to set
             */
            function Badge(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Badge level.
             * @member {number} level
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             */
            Badge.prototype.level = 0;
    
            /**
             * Badge series.
             * @member {number} series
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             */
            Badge.prototype.series = 0;
    
            /**
             * Badge borderColor.
             * @member {number} borderColor
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             */
            Badge.prototype.borderColor = 0;
    
            /**
             * Creates a new Badge instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge=} [properties] Properties to set
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge instance
             */
            Badge.create = function create(properties) {
                return new Badge(properties);
            };
    
            /**
             * Encodes the specified Badge message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.Badge.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge} message Badge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Badge.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
                if (message.series != null && Object.hasOwnProperty.call(message, "series"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.series);
                if (message.borderColor != null && Object.hasOwnProperty.call(message, "borderColor"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.borderColor);
                return writer;
            };
    
            /**
             * Encodes the specified Badge message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.Badge.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge} message Badge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Badge.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Badge message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Badge.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetGameBadgeLevels_Response.Badge();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.series = reader.int32();
                            break;
                        }
                    case 3: {
                            message.borderColor = reader.uint32();
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
             * Decodes a Badge message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Badge.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Badge message.
             * @function verify
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Badge.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.series != null && message.hasOwnProperty("series"))
                    if (!$util.isInteger(message.series))
                        return "series: integer expected";
                if (message.borderColor != null && message.hasOwnProperty("borderColor"))
                    if (!$util.isInteger(message.borderColor))
                        return "borderColor: integer expected";
                return null;
            };
    
            /**
             * Creates a Badge message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge
             */
            Badge.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetGameBadgeLevels_Response.Badge)
                    return object;
                var message = new $root.CPlayer_GetGameBadgeLevels_Response.Badge();
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.series != null)
                    message.series = object.series | 0;
                if (object.borderColor != null)
                    message.borderColor = object.borderColor >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Badge message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.Badge} message Badge
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Badge.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.level = 0;
                    object.series = 0;
                    object.borderColor = 0;
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.series != null && message.hasOwnProperty("series"))
                    object.series = message.series;
                if (message.borderColor != null && message.hasOwnProperty("borderColor"))
                    object.borderColor = message.borderColor;
                return object;
            };
    
            /**
             * Converts this Badge to JSON.
             * @function toJSON
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Badge.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Badge
             * @function getTypeUrl
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Badge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CPlayer_GetGameBadgeLevels_Response.Badge";
            };
    
            return Badge;
        })();
    
        return CPlayer_GetGameBadgeLevels_Response;
    })();
    
    $root.CPlayer_GetLastPlayedTimes_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetLastPlayedTimes_Request.
         * @exports ICPlayer_GetLastPlayedTimes_Request
         * @interface ICPlayer_GetLastPlayedTimes_Request
         * @property {number|null} [minLastPlayed] CPlayer_GetLastPlayedTimes_Request minLastPlayed
         */
    
        /**
         * Constructs a new CPlayer_GetLastPlayedTimes_Request.
         * @exports CPlayer_GetLastPlayedTimes_Request
         * @classdesc Represents a CPlayer_GetLastPlayedTimes_Request.
         * @implements ICPlayer_GetLastPlayedTimes_Request
         * @constructor
         * @param {ICPlayer_GetLastPlayedTimes_Request=} [properties] Properties to set
         */
        function CPlayer_GetLastPlayedTimes_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetLastPlayedTimes_Request minLastPlayed.
         * @member {number} minLastPlayed
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @instance
         */
        CPlayer_GetLastPlayedTimes_Request.prototype.minLastPlayed = 0;
    
        /**
         * Creates a new CPlayer_GetLastPlayedTimes_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Request=} [properties] Properties to set
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request instance
         */
        CPlayer_GetLastPlayedTimes_Request.create = function create(properties) {
            return new CPlayer_GetLastPlayedTimes_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Request message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Request} message CPlayer_GetLastPlayedTimes_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minLastPlayed != null && Object.hasOwnProperty.call(message, "minLastPlayed"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.minLastPlayed);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Request message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Request} message CPlayer_GetLastPlayedTimes_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetLastPlayedTimes_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetLastPlayedTimes_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.minLastPlayed = reader.uint32();
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
         * Decodes a CPlayer_GetLastPlayedTimes_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetLastPlayedTimes_Request message.
         * @function verify
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetLastPlayedTimes_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.minLastPlayed != null && message.hasOwnProperty("minLastPlayed"))
                if (!$util.isInteger(message.minLastPlayed))
                    return "minLastPlayed: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetLastPlayedTimes_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request
         */
        CPlayer_GetLastPlayedTimes_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetLastPlayedTimes_Request)
                return object;
            var message = new $root.CPlayer_GetLastPlayedTimes_Request();
            if (object.minLastPlayed != null)
                message.minLastPlayed = object.minLastPlayed >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetLastPlayedTimes_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {CPlayer_GetLastPlayedTimes_Request} message CPlayer_GetLastPlayedTimes_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetLastPlayedTimes_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.minLastPlayed = 0;
            if (message.minLastPlayed != null && message.hasOwnProperty("minLastPlayed"))
                object.minLastPlayed = message.minLastPlayed;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetLastPlayedTimes_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetLastPlayedTimes_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetLastPlayedTimes_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetLastPlayedTimes_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetLastPlayedTimes_Request";
        };
    
        return CPlayer_GetLastPlayedTimes_Request;
    })();
    
    $root.CPlayer_GetLastPlayedTimes_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetLastPlayedTimes_Response.
         * @exports ICPlayer_GetLastPlayedTimes_Response
         * @interface ICPlayer_GetLastPlayedTimes_Response
         * @property {Array.<CPlayer_GetLastPlayedTimes_Response.IGame>|null} [games] CPlayer_GetLastPlayedTimes_Response games
         */
    
        /**
         * Constructs a new CPlayer_GetLastPlayedTimes_Response.
         * @exports CPlayer_GetLastPlayedTimes_Response
         * @classdesc Represents a CPlayer_GetLastPlayedTimes_Response.
         * @implements ICPlayer_GetLastPlayedTimes_Response
         * @constructor
         * @param {ICPlayer_GetLastPlayedTimes_Response=} [properties] Properties to set
         */
        function CPlayer_GetLastPlayedTimes_Response(properties) {
            this.games = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetLastPlayedTimes_Response games.
         * @member {Array.<CPlayer_GetLastPlayedTimes_Response.IGame>} games
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @instance
         */
        CPlayer_GetLastPlayedTimes_Response.prototype.games = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetLastPlayedTimes_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Response=} [properties] Properties to set
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response instance
         */
        CPlayer_GetLastPlayedTimes_Response.create = function create(properties) {
            return new CPlayer_GetLastPlayedTimes_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Response message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Response} message CPlayer_GetLastPlayedTimes_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.games != null && message.games.length)
                for (var i = 0; i < message.games.length; ++i)
                    $root.CPlayer_GetLastPlayedTimes_Response.Game.encode(message.games[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Response message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Response} message CPlayer_GetLastPlayedTimes_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetLastPlayedTimes_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetLastPlayedTimes_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.games && message.games.length))
                            message.games = [];
                        message.games.push($root.CPlayer_GetLastPlayedTimes_Response.Game.decode(reader, reader.uint32()));
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
         * Decodes a CPlayer_GetLastPlayedTimes_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetLastPlayedTimes_Response message.
         * @function verify
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetLastPlayedTimes_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.games != null && message.hasOwnProperty("games")) {
                if (!Array.isArray(message.games))
                    return "games: array expected";
                for (var i = 0; i < message.games.length; ++i) {
                    var error = $root.CPlayer_GetLastPlayedTimes_Response.Game.verify(message.games[i]);
                    if (error)
                        return "games." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetLastPlayedTimes_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response
         */
        CPlayer_GetLastPlayedTimes_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetLastPlayedTimes_Response)
                return object;
            var message = new $root.CPlayer_GetLastPlayedTimes_Response();
            if (object.games) {
                if (!Array.isArray(object.games))
                    throw TypeError(".CPlayer_GetLastPlayedTimes_Response.games: array expected");
                message.games = [];
                for (var i = 0; i < object.games.length; ++i) {
                    if (typeof object.games[i] !== "object")
                        throw TypeError(".CPlayer_GetLastPlayedTimes_Response.games: object expected");
                    message.games[i] = $root.CPlayer_GetLastPlayedTimes_Response.Game.fromObject(object.games[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetLastPlayedTimes_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {CPlayer_GetLastPlayedTimes_Response} message CPlayer_GetLastPlayedTimes_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetLastPlayedTimes_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.games = [];
            if (message.games && message.games.length) {
                object.games = [];
                for (var j = 0; j < message.games.length; ++j)
                    object.games[j] = $root.CPlayer_GetLastPlayedTimes_Response.Game.toObject(message.games[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetLastPlayedTimes_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetLastPlayedTimes_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetLastPlayedTimes_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetLastPlayedTimes_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetLastPlayedTimes_Response";
        };
    
        CPlayer_GetLastPlayedTimes_Response.Game = (function() {
    
            /**
             * Properties of a Game.
             * @memberof CPlayer_GetLastPlayedTimes_Response
             * @interface IGame
             * @property {number|null} [appid] Game appid
             * @property {number|null} [lastPlaytime] Game lastPlaytime
             * @property {number|null} [playtime_2weeks] Game playtime_2weeks
             * @property {number|null} [playtimeForever] Game playtimeForever
             * @property {number|null} [firstPlaytime] Game firstPlaytime
             */
    
            /**
             * Constructs a new Game.
             * @memberof CPlayer_GetLastPlayedTimes_Response
             * @classdesc Represents a Game.
             * @implements IGame
             * @constructor
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame=} [properties] Properties to set
             */
            function Game(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Game appid.
             * @member {number} appid
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.appid = 0;
    
            /**
             * Game lastPlaytime.
             * @member {number} lastPlaytime
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.lastPlaytime = 0;
    
            /**
             * Game playtime_2weeks.
             * @member {number} playtime_2weeks
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.playtime_2weeks = 0;
    
            /**
             * Game playtimeForever.
             * @member {number} playtimeForever
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.playtimeForever = 0;
    
            /**
             * Game firstPlaytime.
             * @member {number} firstPlaytime
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.firstPlaytime = 0;
    
            /**
             * Creates a new Game instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame=} [properties] Properties to set
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game instance
             */
            Game.create = function create(properties) {
                return new Game(properties);
            };
    
            /**
             * Encodes the specified Game message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.Game.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame} message Game message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Game.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.appid);
                if (message.lastPlaytime != null && Object.hasOwnProperty.call(message, "lastPlaytime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.lastPlaytime);
                if (message.playtime_2weeks != null && Object.hasOwnProperty.call(message, "playtime_2weeks"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playtime_2weeks);
                if (message.playtimeForever != null && Object.hasOwnProperty.call(message, "playtimeForever"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playtimeForever);
                if (message.firstPlaytime != null && Object.hasOwnProperty.call(message, "firstPlaytime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.firstPlaytime);
                return writer;
            };
    
            /**
             * Encodes the specified Game message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.Game.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame} message Game message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Game.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Game message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Game.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetLastPlayedTimes_Response.Game();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.appid = reader.int32();
                            break;
                        }
                    case 2: {
                            message.lastPlaytime = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.playtime_2weeks = reader.int32();
                            break;
                        }
                    case 4: {
                            message.playtimeForever = reader.int32();
                            break;
                        }
                    case 5: {
                            message.firstPlaytime = reader.uint32();
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
             * Decodes a Game message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Game.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Game message.
             * @function verify
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Game.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.appid != null && message.hasOwnProperty("appid"))
                    if (!$util.isInteger(message.appid))
                        return "appid: integer expected";
                if (message.lastPlaytime != null && message.hasOwnProperty("lastPlaytime"))
                    if (!$util.isInteger(message.lastPlaytime))
                        return "lastPlaytime: integer expected";
                if (message.playtime_2weeks != null && message.hasOwnProperty("playtime_2weeks"))
                    if (!$util.isInteger(message.playtime_2weeks))
                        return "playtime_2weeks: integer expected";
                if (message.playtimeForever != null && message.hasOwnProperty("playtimeForever"))
                    if (!$util.isInteger(message.playtimeForever))
                        return "playtimeForever: integer expected";
                if (message.firstPlaytime != null && message.hasOwnProperty("firstPlaytime"))
                    if (!$util.isInteger(message.firstPlaytime))
                        return "firstPlaytime: integer expected";
                return null;
            };
    
            /**
             * Creates a Game message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game
             */
            Game.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetLastPlayedTimes_Response.Game)
                    return object;
                var message = new $root.CPlayer_GetLastPlayedTimes_Response.Game();
                if (object.appid != null)
                    message.appid = object.appid | 0;
                if (object.lastPlaytime != null)
                    message.lastPlaytime = object.lastPlaytime >>> 0;
                if (object.playtime_2weeks != null)
                    message.playtime_2weeks = object.playtime_2weeks | 0;
                if (object.playtimeForever != null)
                    message.playtimeForever = object.playtimeForever | 0;
                if (object.firstPlaytime != null)
                    message.firstPlaytime = object.firstPlaytime >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Game message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.Game} message Game
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Game.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.appid = 0;
                    object.lastPlaytime = 0;
                    object.playtime_2weeks = 0;
                    object.playtimeForever = 0;
                    object.firstPlaytime = 0;
                }
                if (message.appid != null && message.hasOwnProperty("appid"))
                    object.appid = message.appid;
                if (message.lastPlaytime != null && message.hasOwnProperty("lastPlaytime"))
                    object.lastPlaytime = message.lastPlaytime;
                if (message.playtime_2weeks != null && message.hasOwnProperty("playtime_2weeks"))
                    object.playtime_2weeks = message.playtime_2weeks;
                if (message.playtimeForever != null && message.hasOwnProperty("playtimeForever"))
                    object.playtimeForever = message.playtimeForever;
                if (message.firstPlaytime != null && message.hasOwnProperty("firstPlaytime"))
                    object.firstPlaytime = message.firstPlaytime;
                return object;
            };
    
            /**
             * Converts this Game to JSON.
             * @function toJSON
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Game.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Game
             * @function getTypeUrl
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Game.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CPlayer_GetLastPlayedTimes_Response.Game";
            };
    
            return Game;
        })();
    
        return CPlayer_GetLastPlayedTimes_Response;
    })();
    
    $root.CPlayer_AcceptSSA_Request = (function() {
    
        /**
         * Properties of a CPlayer_AcceptSSA_Request.
         * @exports ICPlayer_AcceptSSA_Request
         * @interface ICPlayer_AcceptSSA_Request
         */
    
        /**
         * Constructs a new CPlayer_AcceptSSA_Request.
         * @exports CPlayer_AcceptSSA_Request
         * @classdesc Represents a CPlayer_AcceptSSA_Request.
         * @implements ICPlayer_AcceptSSA_Request
         * @constructor
         * @param {ICPlayer_AcceptSSA_Request=} [properties] Properties to set
         */
        function CPlayer_AcceptSSA_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_AcceptSSA_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {ICPlayer_AcceptSSA_Request=} [properties] Properties to set
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request instance
         */
        CPlayer_AcceptSSA_Request.create = function create(properties) {
            return new CPlayer_AcceptSSA_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Request message. Does not implicitly {@link CPlayer_AcceptSSA_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {ICPlayer_AcceptSSA_Request} message CPlayer_AcceptSSA_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Request message, length delimited. Does not implicitly {@link CPlayer_AcceptSSA_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {ICPlayer_AcceptSSA_Request} message CPlayer_AcceptSSA_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AcceptSSA_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AcceptSSA_Request();
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
         * Decodes a CPlayer_AcceptSSA_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AcceptSSA_Request message.
         * @function verify
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AcceptSSA_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AcceptSSA_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request
         */
        CPlayer_AcceptSSA_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AcceptSSA_Request)
                return object;
            return new $root.CPlayer_AcceptSSA_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_AcceptSSA_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {CPlayer_AcceptSSA_Request} message CPlayer_AcceptSSA_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AcceptSSA_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_AcceptSSA_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_AcceptSSA_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AcceptSSA_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_AcceptSSA_Request
         * @function getTypeUrl
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_AcceptSSA_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_AcceptSSA_Request";
        };
    
        return CPlayer_AcceptSSA_Request;
    })();
    
    $root.CPlayer_AcceptSSA_Response = (function() {
    
        /**
         * Properties of a CPlayer_AcceptSSA_Response.
         * @exports ICPlayer_AcceptSSA_Response
         * @interface ICPlayer_AcceptSSA_Response
         */
    
        /**
         * Constructs a new CPlayer_AcceptSSA_Response.
         * @exports CPlayer_AcceptSSA_Response
         * @classdesc Represents a CPlayer_AcceptSSA_Response.
         * @implements ICPlayer_AcceptSSA_Response
         * @constructor
         * @param {ICPlayer_AcceptSSA_Response=} [properties] Properties to set
         */
        function CPlayer_AcceptSSA_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_AcceptSSA_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {ICPlayer_AcceptSSA_Response=} [properties] Properties to set
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response instance
         */
        CPlayer_AcceptSSA_Response.create = function create(properties) {
            return new CPlayer_AcceptSSA_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Response message. Does not implicitly {@link CPlayer_AcceptSSA_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {ICPlayer_AcceptSSA_Response} message CPlayer_AcceptSSA_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Response message, length delimited. Does not implicitly {@link CPlayer_AcceptSSA_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {ICPlayer_AcceptSSA_Response} message CPlayer_AcceptSSA_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AcceptSSA_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AcceptSSA_Response();
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
         * Decodes a CPlayer_AcceptSSA_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AcceptSSA_Response message.
         * @function verify
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AcceptSSA_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AcceptSSA_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response
         */
        CPlayer_AcceptSSA_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AcceptSSA_Response)
                return object;
            return new $root.CPlayer_AcceptSSA_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_AcceptSSA_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {CPlayer_AcceptSSA_Response} message CPlayer_AcceptSSA_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AcceptSSA_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_AcceptSSA_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_AcceptSSA_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AcceptSSA_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_AcceptSSA_Response
         * @function getTypeUrl
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_AcceptSSA_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_AcceptSSA_Response";
        };
    
        return CPlayer_AcceptSSA_Response;
    })();
    
    $root.CPlayer_GetNicknameList_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetNicknameList_Request.
         * @exports ICPlayer_GetNicknameList_Request
         * @interface ICPlayer_GetNicknameList_Request
         */
    
        /**
         * Constructs a new CPlayer_GetNicknameList_Request.
         * @exports CPlayer_GetNicknameList_Request
         * @classdesc Represents a CPlayer_GetNicknameList_Request.
         * @implements ICPlayer_GetNicknameList_Request
         * @constructor
         * @param {ICPlayer_GetNicknameList_Request=} [properties] Properties to set
         */
        function CPlayer_GetNicknameList_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetNicknameList_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {ICPlayer_GetNicknameList_Request=} [properties] Properties to set
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request instance
         */
        CPlayer_GetNicknameList_Request.create = function create(properties) {
            return new CPlayer_GetNicknameList_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Request message. Does not implicitly {@link CPlayer_GetNicknameList_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {ICPlayer_GetNicknameList_Request} message CPlayer_GetNicknameList_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Request message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {ICPlayer_GetNicknameList_Request} message CPlayer_GetNicknameList_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNicknameList_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNicknameList_Request();
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
         * Decodes a CPlayer_GetNicknameList_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNicknameList_Request message.
         * @function verify
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNicknameList_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNicknameList_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request
         */
        CPlayer_GetNicknameList_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNicknameList_Request)
                return object;
            return new $root.CPlayer_GetNicknameList_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNicknameList_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {CPlayer_GetNicknameList_Request} message CPlayer_GetNicknameList_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNicknameList_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetNicknameList_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNicknameList_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNicknameList_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetNicknameList_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetNicknameList_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetNicknameList_Request";
        };
    
        return CPlayer_GetNicknameList_Request;
    })();
    
    $root.CPlayer_GetNicknameList_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetNicknameList_Response.
         * @exports ICPlayer_GetNicknameList_Response
         * @interface ICPlayer_GetNicknameList_Response
         * @property {Array.<CPlayer_GetNicknameList_Response.IPlayerNickname>|null} [nicknames] CPlayer_GetNicknameList_Response nicknames
         */
    
        /**
         * Constructs a new CPlayer_GetNicknameList_Response.
         * @exports CPlayer_GetNicknameList_Response
         * @classdesc Represents a CPlayer_GetNicknameList_Response.
         * @implements ICPlayer_GetNicknameList_Response
         * @constructor
         * @param {ICPlayer_GetNicknameList_Response=} [properties] Properties to set
         */
        function CPlayer_GetNicknameList_Response(properties) {
            this.nicknames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetNicknameList_Response nicknames.
         * @member {Array.<CPlayer_GetNicknameList_Response.IPlayerNickname>} nicknames
         * @memberof CPlayer_GetNicknameList_Response
         * @instance
         */
        CPlayer_GetNicknameList_Response.prototype.nicknames = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetNicknameList_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {ICPlayer_GetNicknameList_Response=} [properties] Properties to set
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response instance
         */
        CPlayer_GetNicknameList_Response.create = function create(properties) {
            return new CPlayer_GetNicknameList_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Response message. Does not implicitly {@link CPlayer_GetNicknameList_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {ICPlayer_GetNicknameList_Response} message CPlayer_GetNicknameList_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nicknames != null && message.nicknames.length)
                for (var i = 0; i < message.nicknames.length; ++i)
                    $root.CPlayer_GetNicknameList_Response.PlayerNickname.encode(message.nicknames[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Response message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {ICPlayer_GetNicknameList_Response} message CPlayer_GetNicknameList_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNicknameList_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNicknameList_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.nicknames && message.nicknames.length))
                            message.nicknames = [];
                        message.nicknames.push($root.CPlayer_GetNicknameList_Response.PlayerNickname.decode(reader, reader.uint32()));
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
         * Decodes a CPlayer_GetNicknameList_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNicknameList_Response message.
         * @function verify
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNicknameList_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nicknames != null && message.hasOwnProperty("nicknames")) {
                if (!Array.isArray(message.nicknames))
                    return "nicknames: array expected";
                for (var i = 0; i < message.nicknames.length; ++i) {
                    var error = $root.CPlayer_GetNicknameList_Response.PlayerNickname.verify(message.nicknames[i]);
                    if (error)
                        return "nicknames." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNicknameList_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response
         */
        CPlayer_GetNicknameList_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNicknameList_Response)
                return object;
            var message = new $root.CPlayer_GetNicknameList_Response();
            if (object.nicknames) {
                if (!Array.isArray(object.nicknames))
                    throw TypeError(".CPlayer_GetNicknameList_Response.nicknames: array expected");
                message.nicknames = [];
                for (var i = 0; i < object.nicknames.length; ++i) {
                    if (typeof object.nicknames[i] !== "object")
                        throw TypeError(".CPlayer_GetNicknameList_Response.nicknames: object expected");
                    message.nicknames[i] = $root.CPlayer_GetNicknameList_Response.PlayerNickname.fromObject(object.nicknames[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNicknameList_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {CPlayer_GetNicknameList_Response} message CPlayer_GetNicknameList_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNicknameList_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nicknames = [];
            if (message.nicknames && message.nicknames.length) {
                object.nicknames = [];
                for (var j = 0; j < message.nicknames.length; ++j)
                    object.nicknames[j] = $root.CPlayer_GetNicknameList_Response.PlayerNickname.toObject(message.nicknames[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetNicknameList_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNicknameList_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNicknameList_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetNicknameList_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetNicknameList_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetNicknameList_Response";
        };
    
        CPlayer_GetNicknameList_Response.PlayerNickname = (function() {
    
            /**
             * Properties of a PlayerNickname.
             * @memberof CPlayer_GetNicknameList_Response
             * @interface IPlayerNickname
             * @property {number|null} [accountid] PlayerNickname accountid
             * @property {string|null} [nickname] PlayerNickname nickname
             */
    
            /**
             * Constructs a new PlayerNickname.
             * @memberof CPlayer_GetNicknameList_Response
             * @classdesc Represents a PlayerNickname.
             * @implements IPlayerNickname
             * @constructor
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname=} [properties] Properties to set
             */
            function PlayerNickname(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerNickname accountid.
             * @member {number} accountid
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @instance
             */
            PlayerNickname.prototype.accountid = 0;
    
            /**
             * PlayerNickname nickname.
             * @member {string} nickname
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @instance
             */
            PlayerNickname.prototype.nickname = "";
    
            /**
             * Creates a new PlayerNickname instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname=} [properties] Properties to set
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname instance
             */
            PlayerNickname.create = function create(properties) {
                return new PlayerNickname(properties);
            };
    
            /**
             * Encodes the specified PlayerNickname message. Does not implicitly {@link CPlayer_GetNicknameList_Response.PlayerNickname.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname} message PlayerNickname message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerNickname.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accountid != null && Object.hasOwnProperty.call(message, "accountid"))
                    writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.accountid);
                if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                return writer;
            };
    
            /**
             * Encodes the specified PlayerNickname message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Response.PlayerNickname.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname} message PlayerNickname message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerNickname.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlayerNickname message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerNickname.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNicknameList_Response.PlayerNickname();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.accountid = reader.fixed32();
                            break;
                        }
                    case 2: {
                            message.nickname = reader.string();
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
             * Decodes a PlayerNickname message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerNickname.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlayerNickname message.
             * @function verify
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerNickname.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    if (!$util.isInteger(message.accountid))
                        return "accountid: integer expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                return null;
            };
    
            /**
             * Creates a PlayerNickname message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname
             */
            PlayerNickname.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetNicknameList_Response.PlayerNickname)
                    return object;
                var message = new $root.CPlayer_GetNicknameList_Response.PlayerNickname();
                if (object.accountid != null)
                    message.accountid = object.accountid >>> 0;
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                return message;
            };
    
            /**
             * Creates a plain object from a PlayerNickname message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.PlayerNickname} message PlayerNickname
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerNickname.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.accountid = 0;
                    object.nickname = "";
                }
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    object.accountid = message.accountid;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                return object;
            };
    
            /**
             * Converts this PlayerNickname to JSON.
             * @function toJSON
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerNickname.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for PlayerNickname
             * @function getTypeUrl
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerNickname.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CPlayer_GetNicknameList_Response.PlayerNickname";
            };
    
            return PlayerNickname;
        })();
    
        return CPlayer_GetNicknameList_Response;
    })();
    
    $root.CPlayer_GetPerFriendPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetPerFriendPreferences_Request.
         * @exports ICPlayer_GetPerFriendPreferences_Request
         * @interface ICPlayer_GetPerFriendPreferences_Request
         */
    
        /**
         * Constructs a new CPlayer_GetPerFriendPreferences_Request.
         * @exports CPlayer_GetPerFriendPreferences_Request
         * @classdesc Represents a CPlayer_GetPerFriendPreferences_Request.
         * @implements ICPlayer_GetPerFriendPreferences_Request
         * @constructor
         * @param {ICPlayer_GetPerFriendPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_GetPerFriendPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetPerFriendPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request instance
         */
        CPlayer_GetPerFriendPreferences_Request.create = function create(properties) {
            return new CPlayer_GetPerFriendPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Request message. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Request} message CPlayer_GetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Request} message CPlayer_GetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetPerFriendPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetPerFriendPreferences_Request();
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
         * Decodes a CPlayer_GetPerFriendPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetPerFriendPreferences_Request message.
         * @function verify
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetPerFriendPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetPerFriendPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request
         */
        CPlayer_GetPerFriendPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetPerFriendPreferences_Request)
                return object;
            return new $root.CPlayer_GetPerFriendPreferences_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetPerFriendPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {CPlayer_GetPerFriendPreferences_Request} message CPlayer_GetPerFriendPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetPerFriendPreferences_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetPerFriendPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetPerFriendPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetPerFriendPreferences_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetPerFriendPreferences_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetPerFriendPreferences_Request";
        };
    
        return CPlayer_GetPerFriendPreferences_Request;
    })();
    
    $root.PerFriendPreferences = (function() {
    
        /**
         * Properties of a PerFriendPreferences.
         * @exports IPerFriendPreferences
         * @interface IPerFriendPreferences
         * @property {number|null} [accountid] PerFriendPreferences accountid
         * @property {string|null} [nickname] PerFriendPreferences nickname
         * @property {ENotificationSetting|null} [notificationsShowingame] PerFriendPreferences notificationsShowingame
         * @property {ENotificationSetting|null} [notificationsShowonline] PerFriendPreferences notificationsShowonline
         * @property {ENotificationSetting|null} [notificationsShowmessages] PerFriendPreferences notificationsShowmessages
         * @property {ENotificationSetting|null} [soundsShowingame] PerFriendPreferences soundsShowingame
         * @property {ENotificationSetting|null} [soundsShowonline] PerFriendPreferences soundsShowonline
         * @property {ENotificationSetting|null} [soundsShowmessages] PerFriendPreferences soundsShowmessages
         * @property {ENotificationSetting|null} [notificationsSendmobile] PerFriendPreferences notificationsSendmobile
         */
    
        /**
         * Constructs a new PerFriendPreferences.
         * @exports PerFriendPreferences
         * @classdesc Represents a PerFriendPreferences.
         * @implements IPerFriendPreferences
         * @constructor
         * @param {IPerFriendPreferences=} [properties] Properties to set
         */
        function PerFriendPreferences(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PerFriendPreferences accountid.
         * @member {number} accountid
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.accountid = 0;
    
        /**
         * PerFriendPreferences nickname.
         * @member {string} nickname
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.nickname = "";
    
        /**
         * PerFriendPreferences notificationsShowingame.
         * @member {ENotificationSetting} notificationsShowingame
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notificationsShowingame = 0;
    
        /**
         * PerFriendPreferences notificationsShowonline.
         * @member {ENotificationSetting} notificationsShowonline
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notificationsShowonline = 0;
    
        /**
         * PerFriendPreferences notificationsShowmessages.
         * @member {ENotificationSetting} notificationsShowmessages
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notificationsShowmessages = 0;
    
        /**
         * PerFriendPreferences soundsShowingame.
         * @member {ENotificationSetting} soundsShowingame
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.soundsShowingame = 0;
    
        /**
         * PerFriendPreferences soundsShowonline.
         * @member {ENotificationSetting} soundsShowonline
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.soundsShowonline = 0;
    
        /**
         * PerFriendPreferences soundsShowmessages.
         * @member {ENotificationSetting} soundsShowmessages
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.soundsShowmessages = 0;
    
        /**
         * PerFriendPreferences notificationsSendmobile.
         * @member {ENotificationSetting} notificationsSendmobile
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notificationsSendmobile = 0;
    
        /**
         * Creates a new PerFriendPreferences instance using the specified properties.
         * @function create
         * @memberof PerFriendPreferences
         * @static
         * @param {IPerFriendPreferences=} [properties] Properties to set
         * @returns {PerFriendPreferences} PerFriendPreferences instance
         */
        PerFriendPreferences.create = function create(properties) {
            return new PerFriendPreferences(properties);
        };
    
        /**
         * Encodes the specified PerFriendPreferences message. Does not implicitly {@link PerFriendPreferences.verify|verify} messages.
         * @function encode
         * @memberof PerFriendPreferences
         * @static
         * @param {IPerFriendPreferences} message PerFriendPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerFriendPreferences.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && Object.hasOwnProperty.call(message, "accountid"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.accountid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.notificationsShowingame != null && Object.hasOwnProperty.call(message, "notificationsShowingame"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.notificationsShowingame);
            if (message.notificationsShowonline != null && Object.hasOwnProperty.call(message, "notificationsShowonline"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.notificationsShowonline);
            if (message.notificationsShowmessages != null && Object.hasOwnProperty.call(message, "notificationsShowmessages"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.notificationsShowmessages);
            if (message.soundsShowingame != null && Object.hasOwnProperty.call(message, "soundsShowingame"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.soundsShowingame);
            if (message.soundsShowonline != null && Object.hasOwnProperty.call(message, "soundsShowonline"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.soundsShowonline);
            if (message.soundsShowmessages != null && Object.hasOwnProperty.call(message, "soundsShowmessages"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.soundsShowmessages);
            if (message.notificationsSendmobile != null && Object.hasOwnProperty.call(message, "notificationsSendmobile"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.notificationsSendmobile);
            return writer;
        };
    
        /**
         * Encodes the specified PerFriendPreferences message, length delimited. Does not implicitly {@link PerFriendPreferences.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PerFriendPreferences
         * @static
         * @param {IPerFriendPreferences} message PerFriendPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerFriendPreferences.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PerFriendPreferences message from the specified reader or buffer.
         * @function decode
         * @memberof PerFriendPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PerFriendPreferences} PerFriendPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerFriendPreferences.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PerFriendPreferences();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.accountid = reader.fixed32();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.notificationsShowingame = reader.int32();
                        break;
                    }
                case 4: {
                        message.notificationsShowonline = reader.int32();
                        break;
                    }
                case 5: {
                        message.notificationsShowmessages = reader.int32();
                        break;
                    }
                case 6: {
                        message.soundsShowingame = reader.int32();
                        break;
                    }
                case 7: {
                        message.soundsShowonline = reader.int32();
                        break;
                    }
                case 8: {
                        message.soundsShowmessages = reader.int32();
                        break;
                    }
                case 9: {
                        message.notificationsSendmobile = reader.int32();
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
         * Decodes a PerFriendPreferences message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PerFriendPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PerFriendPreferences} PerFriendPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerFriendPreferences.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PerFriendPreferences message.
         * @function verify
         * @memberof PerFriendPreferences
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PerFriendPreferences.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.notificationsShowingame != null && message.hasOwnProperty("notificationsShowingame"))
                switch (message.notificationsShowingame) {
                default:
                    return "notificationsShowingame: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.notificationsShowonline != null && message.hasOwnProperty("notificationsShowonline"))
                switch (message.notificationsShowonline) {
                default:
                    return "notificationsShowonline: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.notificationsShowmessages != null && message.hasOwnProperty("notificationsShowmessages"))
                switch (message.notificationsShowmessages) {
                default:
                    return "notificationsShowmessages: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.soundsShowingame != null && message.hasOwnProperty("soundsShowingame"))
                switch (message.soundsShowingame) {
                default:
                    return "soundsShowingame: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.soundsShowonline != null && message.hasOwnProperty("soundsShowonline"))
                switch (message.soundsShowonline) {
                default:
                    return "soundsShowonline: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.soundsShowmessages != null && message.hasOwnProperty("soundsShowmessages"))
                switch (message.soundsShowmessages) {
                default:
                    return "soundsShowmessages: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.notificationsSendmobile != null && message.hasOwnProperty("notificationsSendmobile"))
                switch (message.notificationsSendmobile) {
                default:
                    return "notificationsSendmobile: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a PerFriendPreferences message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PerFriendPreferences
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PerFriendPreferences} PerFriendPreferences
         */
        PerFriendPreferences.fromObject = function fromObject(object) {
            if (object instanceof $root.PerFriendPreferences)
                return object;
            var message = new $root.PerFriendPreferences();
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            switch (object.notificationsShowingame) {
            default:
                if (typeof object.notificationsShowingame === "number") {
                    message.notificationsShowingame = object.notificationsShowingame;
                    break;
                }
                break;
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notificationsShowingame = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notificationsShowingame = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notificationsShowingame = 2;
                break;
            }
            switch (object.notificationsShowonline) {
            default:
                if (typeof object.notificationsShowonline === "number") {
                    message.notificationsShowonline = object.notificationsShowonline;
                    break;
                }
                break;
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notificationsShowonline = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notificationsShowonline = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notificationsShowonline = 2;
                break;
            }
            switch (object.notificationsShowmessages) {
            default:
                if (typeof object.notificationsShowmessages === "number") {
                    message.notificationsShowmessages = object.notificationsShowmessages;
                    break;
                }
                break;
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notificationsShowmessages = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notificationsShowmessages = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notificationsShowmessages = 2;
                break;
            }
            switch (object.soundsShowingame) {
            default:
                if (typeof object.soundsShowingame === "number") {
                    message.soundsShowingame = object.soundsShowingame;
                    break;
                }
                break;
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.soundsShowingame = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.soundsShowingame = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.soundsShowingame = 2;
                break;
            }
            switch (object.soundsShowonline) {
            default:
                if (typeof object.soundsShowonline === "number") {
                    message.soundsShowonline = object.soundsShowonline;
                    break;
                }
                break;
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.soundsShowonline = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.soundsShowonline = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.soundsShowonline = 2;
                break;
            }
            switch (object.soundsShowmessages) {
            default:
                if (typeof object.soundsShowmessages === "number") {
                    message.soundsShowmessages = object.soundsShowmessages;
                    break;
                }
                break;
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.soundsShowmessages = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.soundsShowmessages = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.soundsShowmessages = 2;
                break;
            }
            switch (object.notificationsSendmobile) {
            default:
                if (typeof object.notificationsSendmobile === "number") {
                    message.notificationsSendmobile = object.notificationsSendmobile;
                    break;
                }
                break;
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notificationsSendmobile = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notificationsSendmobile = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notificationsSendmobile = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a PerFriendPreferences message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PerFriendPreferences
         * @static
         * @param {PerFriendPreferences} message PerFriendPreferences
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PerFriendPreferences.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountid = 0;
                object.nickname = "";
                object.notificationsShowingame = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.notificationsShowonline = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.notificationsShowmessages = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.soundsShowingame = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.soundsShowonline = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.soundsShowmessages = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.notificationsSendmobile = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
            }
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.notificationsShowingame != null && message.hasOwnProperty("notificationsShowingame"))
                object.notificationsShowingame = options.enums === String ? $root.ENotificationSetting[message.notificationsShowingame] === undefined ? message.notificationsShowingame : $root.ENotificationSetting[message.notificationsShowingame] : message.notificationsShowingame;
            if (message.notificationsShowonline != null && message.hasOwnProperty("notificationsShowonline"))
                object.notificationsShowonline = options.enums === String ? $root.ENotificationSetting[message.notificationsShowonline] === undefined ? message.notificationsShowonline : $root.ENotificationSetting[message.notificationsShowonline] : message.notificationsShowonline;
            if (message.notificationsShowmessages != null && message.hasOwnProperty("notificationsShowmessages"))
                object.notificationsShowmessages = options.enums === String ? $root.ENotificationSetting[message.notificationsShowmessages] === undefined ? message.notificationsShowmessages : $root.ENotificationSetting[message.notificationsShowmessages] : message.notificationsShowmessages;
            if (message.soundsShowingame != null && message.hasOwnProperty("soundsShowingame"))
                object.soundsShowingame = options.enums === String ? $root.ENotificationSetting[message.soundsShowingame] === undefined ? message.soundsShowingame : $root.ENotificationSetting[message.soundsShowingame] : message.soundsShowingame;
            if (message.soundsShowonline != null && message.hasOwnProperty("soundsShowonline"))
                object.soundsShowonline = options.enums === String ? $root.ENotificationSetting[message.soundsShowonline] === undefined ? message.soundsShowonline : $root.ENotificationSetting[message.soundsShowonline] : message.soundsShowonline;
            if (message.soundsShowmessages != null && message.hasOwnProperty("soundsShowmessages"))
                object.soundsShowmessages = options.enums === String ? $root.ENotificationSetting[message.soundsShowmessages] === undefined ? message.soundsShowmessages : $root.ENotificationSetting[message.soundsShowmessages] : message.soundsShowmessages;
            if (message.notificationsSendmobile != null && message.hasOwnProperty("notificationsSendmobile"))
                object.notificationsSendmobile = options.enums === String ? $root.ENotificationSetting[message.notificationsSendmobile] === undefined ? message.notificationsSendmobile : $root.ENotificationSetting[message.notificationsSendmobile] : message.notificationsSendmobile;
            return object;
        };
    
        /**
         * Converts this PerFriendPreferences to JSON.
         * @function toJSON
         * @memberof PerFriendPreferences
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PerFriendPreferences.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for PerFriendPreferences
         * @function getTypeUrl
         * @memberof PerFriendPreferences
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PerFriendPreferences.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PerFriendPreferences";
        };
    
        return PerFriendPreferences;
    })();
    
    $root.CPlayer_GetPerFriendPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetPerFriendPreferences_Response.
         * @exports ICPlayer_GetPerFriendPreferences_Response
         * @interface ICPlayer_GetPerFriendPreferences_Response
         * @property {Array.<IPerFriendPreferences>|null} [preferences] CPlayer_GetPerFriendPreferences_Response preferences
         */
    
        /**
         * Constructs a new CPlayer_GetPerFriendPreferences_Response.
         * @exports CPlayer_GetPerFriendPreferences_Response
         * @classdesc Represents a CPlayer_GetPerFriendPreferences_Response.
         * @implements ICPlayer_GetPerFriendPreferences_Response
         * @constructor
         * @param {ICPlayer_GetPerFriendPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_GetPerFriendPreferences_Response(properties) {
            this.preferences = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetPerFriendPreferences_Response preferences.
         * @member {Array.<IPerFriendPreferences>} preferences
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @instance
         */
        CPlayer_GetPerFriendPreferences_Response.prototype.preferences = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetPerFriendPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response instance
         */
        CPlayer_GetPerFriendPreferences_Response.create = function create(properties) {
            return new CPlayer_GetPerFriendPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Response message. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Response} message CPlayer_GetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && message.preferences.length)
                for (var i = 0; i < message.preferences.length; ++i)
                    $root.PerFriendPreferences.encode(message.preferences[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Response} message CPlayer_GetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetPerFriendPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetPerFriendPreferences_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.preferences && message.preferences.length))
                            message.preferences = [];
                        message.preferences.push($root.PerFriendPreferences.decode(reader, reader.uint32()));
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
         * Decodes a CPlayer_GetPerFriendPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetPerFriendPreferences_Response message.
         * @function verify
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetPerFriendPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                if (!Array.isArray(message.preferences))
                    return "preferences: array expected";
                for (var i = 0; i < message.preferences.length; ++i) {
                    var error = $root.PerFriendPreferences.verify(message.preferences[i]);
                    if (error)
                        return "preferences." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetPerFriendPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response
         */
        CPlayer_GetPerFriendPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetPerFriendPreferences_Response)
                return object;
            var message = new $root.CPlayer_GetPerFriendPreferences_Response();
            if (object.preferences) {
                if (!Array.isArray(object.preferences))
                    throw TypeError(".CPlayer_GetPerFriendPreferences_Response.preferences: array expected");
                message.preferences = [];
                for (var i = 0; i < object.preferences.length; ++i) {
                    if (typeof object.preferences[i] !== "object")
                        throw TypeError(".CPlayer_GetPerFriendPreferences_Response.preferences: object expected");
                    message.preferences[i] = $root.PerFriendPreferences.fromObject(object.preferences[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetPerFriendPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {CPlayer_GetPerFriendPreferences_Response} message CPlayer_GetPerFriendPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetPerFriendPreferences_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.preferences = [];
            if (message.preferences && message.preferences.length) {
                object.preferences = [];
                for (var j = 0; j < message.preferences.length; ++j)
                    object.preferences[j] = $root.PerFriendPreferences.toObject(message.preferences[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetPerFriendPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetPerFriendPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetPerFriendPreferences_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetPerFriendPreferences_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetPerFriendPreferences_Response";
        };
    
        return CPlayer_GetPerFriendPreferences_Response;
    })();
    
    $root.CPlayer_SetPerFriendPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_SetPerFriendPreferences_Request.
         * @exports ICPlayer_SetPerFriendPreferences_Request
         * @interface ICPlayer_SetPerFriendPreferences_Request
         * @property {IPerFriendPreferences|null} [preferences] CPlayer_SetPerFriendPreferences_Request preferences
         */
    
        /**
         * Constructs a new CPlayer_SetPerFriendPreferences_Request.
         * @exports CPlayer_SetPerFriendPreferences_Request
         * @classdesc Represents a CPlayer_SetPerFriendPreferences_Request.
         * @implements ICPlayer_SetPerFriendPreferences_Request
         * @constructor
         * @param {ICPlayer_SetPerFriendPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_SetPerFriendPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_SetPerFriendPreferences_Request preferences.
         * @member {IPerFriendPreferences|null|undefined} preferences
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @instance
         */
        CPlayer_SetPerFriendPreferences_Request.prototype.preferences = null;
    
        /**
         * Creates a new CPlayer_SetPerFriendPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request instance
         */
        CPlayer_SetPerFriendPreferences_Request.create = function create(properties) {
            return new CPlayer_SetPerFriendPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Request message. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Request} message CPlayer_SetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
                $root.PerFriendPreferences.encode(message.preferences, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Request} message CPlayer_SetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetPerFriendPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetPerFriendPreferences_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.preferences = $root.PerFriendPreferences.decode(reader, reader.uint32());
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
         * Decodes a CPlayer_SetPerFriendPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetPerFriendPreferences_Request message.
         * @function verify
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetPerFriendPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                var error = $root.PerFriendPreferences.verify(message.preferences);
                if (error)
                    return "preferences." + error;
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_SetPerFriendPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request
         */
        CPlayer_SetPerFriendPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetPerFriendPreferences_Request)
                return object;
            var message = new $root.CPlayer_SetPerFriendPreferences_Request();
            if (object.preferences != null) {
                if (typeof object.preferences !== "object")
                    throw TypeError(".CPlayer_SetPerFriendPreferences_Request.preferences: object expected");
                message.preferences = $root.PerFriendPreferences.fromObject(object.preferences);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_SetPerFriendPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {CPlayer_SetPerFriendPreferences_Request} message CPlayer_SetPerFriendPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetPerFriendPreferences_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.preferences = null;
            if (message.preferences != null && message.hasOwnProperty("preferences"))
                object.preferences = $root.PerFriendPreferences.toObject(message.preferences, options);
            return object;
        };
    
        /**
         * Converts this CPlayer_SetPerFriendPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetPerFriendPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_SetPerFriendPreferences_Request
         * @function getTypeUrl
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_SetPerFriendPreferences_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_SetPerFriendPreferences_Request";
        };
    
        return CPlayer_SetPerFriendPreferences_Request;
    })();
    
    $root.CPlayer_SetPerFriendPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_SetPerFriendPreferences_Response.
         * @exports ICPlayer_SetPerFriendPreferences_Response
         * @interface ICPlayer_SetPerFriendPreferences_Response
         */
    
        /**
         * Constructs a new CPlayer_SetPerFriendPreferences_Response.
         * @exports CPlayer_SetPerFriendPreferences_Response
         * @classdesc Represents a CPlayer_SetPerFriendPreferences_Response.
         * @implements ICPlayer_SetPerFriendPreferences_Response
         * @constructor
         * @param {ICPlayer_SetPerFriendPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_SetPerFriendPreferences_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_SetPerFriendPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response instance
         */
        CPlayer_SetPerFriendPreferences_Response.create = function create(properties) {
            return new CPlayer_SetPerFriendPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Response message. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Response} message CPlayer_SetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Response} message CPlayer_SetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetPerFriendPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetPerFriendPreferences_Response();
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
         * Decodes a CPlayer_SetPerFriendPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetPerFriendPreferences_Response message.
         * @function verify
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetPerFriendPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_SetPerFriendPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response
         */
        CPlayer_SetPerFriendPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetPerFriendPreferences_Response)
                return object;
            return new $root.CPlayer_SetPerFriendPreferences_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_SetPerFriendPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {CPlayer_SetPerFriendPreferences_Response} message CPlayer_SetPerFriendPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetPerFriendPreferences_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_SetPerFriendPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetPerFriendPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_SetPerFriendPreferences_Response
         * @function getTypeUrl
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_SetPerFriendPreferences_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_SetPerFriendPreferences_Response";
        };
    
        return CPlayer_SetPerFriendPreferences_Response;
    })();
    
    $root.CPlayer_AddFriend_Request = (function() {
    
        /**
         * Properties of a CPlayer_AddFriend_Request.
         * @exports ICPlayer_AddFriend_Request
         * @interface ICPlayer_AddFriend_Request
         * @property {number|Long|null} [steamid] CPlayer_AddFriend_Request steamid
         */
    
        /**
         * Constructs a new CPlayer_AddFriend_Request.
         * @exports CPlayer_AddFriend_Request
         * @classdesc Represents a CPlayer_AddFriend_Request.
         * @implements ICPlayer_AddFriend_Request
         * @constructor
         * @param {ICPlayer_AddFriend_Request=} [properties] Properties to set
         */
        function CPlayer_AddFriend_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_AddFriend_Request steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_AddFriend_Request
         * @instance
         */
        CPlayer_AddFriend_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CPlayer_AddFriend_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {ICPlayer_AddFriend_Request=} [properties] Properties to set
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request instance
         */
        CPlayer_AddFriend_Request.create = function create(properties) {
            return new CPlayer_AddFriend_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Request message. Does not implicitly {@link CPlayer_AddFriend_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {ICPlayer_AddFriend_Request} message CPlayer_AddFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Request message, length delimited. Does not implicitly {@link CPlayer_AddFriend_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {ICPlayer_AddFriend_Request} message CPlayer_AddFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AddFriend_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AddFriend_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
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
         * Decodes a CPlayer_AddFriend_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AddFriend_Request message.
         * @function verify
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AddFriend_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AddFriend_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request
         */
        CPlayer_AddFriend_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AddFriend_Request)
                return object;
            var message = new $root.CPlayer_AddFriend_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_AddFriend_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {CPlayer_AddFriend_Request} message CPlayer_AddFriend_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AddFriend_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CPlayer_AddFriend_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_AddFriend_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AddFriend_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_AddFriend_Request
         * @function getTypeUrl
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_AddFriend_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_AddFriend_Request";
        };
    
        return CPlayer_AddFriend_Request;
    })();
    
    $root.CPlayer_AddFriend_Response = (function() {
    
        /**
         * Properties of a CPlayer_AddFriend_Response.
         * @exports ICPlayer_AddFriend_Response
         * @interface ICPlayer_AddFriend_Response
         * @property {boolean|null} [inviteSent] CPlayer_AddFriend_Response inviteSent
         * @property {number|null} [friendRelationship] CPlayer_AddFriend_Response friendRelationship
         */
    
        /**
         * Constructs a new CPlayer_AddFriend_Response.
         * @exports CPlayer_AddFriend_Response
         * @classdesc Represents a CPlayer_AddFriend_Response.
         * @implements ICPlayer_AddFriend_Response
         * @constructor
         * @param {ICPlayer_AddFriend_Response=} [properties] Properties to set
         */
        function CPlayer_AddFriend_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_AddFriend_Response inviteSent.
         * @member {boolean} inviteSent
         * @memberof CPlayer_AddFriend_Response
         * @instance
         */
        CPlayer_AddFriend_Response.prototype.inviteSent = false;
    
        /**
         * CPlayer_AddFriend_Response friendRelationship.
         * @member {number} friendRelationship
         * @memberof CPlayer_AddFriend_Response
         * @instance
         */
        CPlayer_AddFriend_Response.prototype.friendRelationship = 0;
    
        /**
         * Creates a new CPlayer_AddFriend_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {ICPlayer_AddFriend_Response=} [properties] Properties to set
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response instance
         */
        CPlayer_AddFriend_Response.create = function create(properties) {
            return new CPlayer_AddFriend_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Response message. Does not implicitly {@link CPlayer_AddFriend_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {ICPlayer_AddFriend_Response} message CPlayer_AddFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inviteSent != null && Object.hasOwnProperty.call(message, "inviteSent"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.inviteSent);
            if (message.friendRelationship != null && Object.hasOwnProperty.call(message, "friendRelationship"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.friendRelationship);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Response message, length delimited. Does not implicitly {@link CPlayer_AddFriend_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {ICPlayer_AddFriend_Response} message CPlayer_AddFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AddFriend_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AddFriend_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.inviteSent = reader.bool();
                        break;
                    }
                case 2: {
                        message.friendRelationship = reader.uint32();
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
         * Decodes a CPlayer_AddFriend_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AddFriend_Response message.
         * @function verify
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AddFriend_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inviteSent != null && message.hasOwnProperty("inviteSent"))
                if (typeof message.inviteSent !== "boolean")
                    return "inviteSent: boolean expected";
            if (message.friendRelationship != null && message.hasOwnProperty("friendRelationship"))
                if (!$util.isInteger(message.friendRelationship))
                    return "friendRelationship: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AddFriend_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response
         */
        CPlayer_AddFriend_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AddFriend_Response)
                return object;
            var message = new $root.CPlayer_AddFriend_Response();
            if (object.inviteSent != null)
                message.inviteSent = Boolean(object.inviteSent);
            if (object.friendRelationship != null)
                message.friendRelationship = object.friendRelationship >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_AddFriend_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {CPlayer_AddFriend_Response} message CPlayer_AddFriend_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AddFriend_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.inviteSent = false;
                object.friendRelationship = 0;
            }
            if (message.inviteSent != null && message.hasOwnProperty("inviteSent"))
                object.inviteSent = message.inviteSent;
            if (message.friendRelationship != null && message.hasOwnProperty("friendRelationship"))
                object.friendRelationship = message.friendRelationship;
            return object;
        };
    
        /**
         * Converts this CPlayer_AddFriend_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_AddFriend_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AddFriend_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_AddFriend_Response
         * @function getTypeUrl
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_AddFriend_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_AddFriend_Response";
        };
    
        return CPlayer_AddFriend_Response;
    })();
    
    $root.CPlayer_RemoveFriend_Request = (function() {
    
        /**
         * Properties of a CPlayer_RemoveFriend_Request.
         * @exports ICPlayer_RemoveFriend_Request
         * @interface ICPlayer_RemoveFriend_Request
         * @property {number|Long|null} [steamid] CPlayer_RemoveFriend_Request steamid
         */
    
        /**
         * Constructs a new CPlayer_RemoveFriend_Request.
         * @exports CPlayer_RemoveFriend_Request
         * @classdesc Represents a CPlayer_RemoveFriend_Request.
         * @implements ICPlayer_RemoveFriend_Request
         * @constructor
         * @param {ICPlayer_RemoveFriend_Request=} [properties] Properties to set
         */
        function CPlayer_RemoveFriend_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_RemoveFriend_Request steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_RemoveFriend_Request
         * @instance
         */
        CPlayer_RemoveFriend_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CPlayer_RemoveFriend_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {ICPlayer_RemoveFriend_Request=} [properties] Properties to set
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request instance
         */
        CPlayer_RemoveFriend_Request.create = function create(properties) {
            return new CPlayer_RemoveFriend_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Request message. Does not implicitly {@link CPlayer_RemoveFriend_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {ICPlayer_RemoveFriend_Request} message CPlayer_RemoveFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Request message, length delimited. Does not implicitly {@link CPlayer_RemoveFriend_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {ICPlayer_RemoveFriend_Request} message CPlayer_RemoveFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_RemoveFriend_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_RemoveFriend_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
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
         * Decodes a CPlayer_RemoveFriend_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_RemoveFriend_Request message.
         * @function verify
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_RemoveFriend_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_RemoveFriend_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request
         */
        CPlayer_RemoveFriend_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_RemoveFriend_Request)
                return object;
            var message = new $root.CPlayer_RemoveFriend_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_RemoveFriend_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {CPlayer_RemoveFriend_Request} message CPlayer_RemoveFriend_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_RemoveFriend_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CPlayer_RemoveFriend_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_RemoveFriend_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_RemoveFriend_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_RemoveFriend_Request
         * @function getTypeUrl
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_RemoveFriend_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_RemoveFriend_Request";
        };
    
        return CPlayer_RemoveFriend_Request;
    })();
    
    $root.CPlayer_RemoveFriend_Response = (function() {
    
        /**
         * Properties of a CPlayer_RemoveFriend_Response.
         * @exports ICPlayer_RemoveFriend_Response
         * @interface ICPlayer_RemoveFriend_Response
         * @property {number|null} [friendRelationship] CPlayer_RemoveFriend_Response friendRelationship
         */
    
        /**
         * Constructs a new CPlayer_RemoveFriend_Response.
         * @exports CPlayer_RemoveFriend_Response
         * @classdesc Represents a CPlayer_RemoveFriend_Response.
         * @implements ICPlayer_RemoveFriend_Response
         * @constructor
         * @param {ICPlayer_RemoveFriend_Response=} [properties] Properties to set
         */
        function CPlayer_RemoveFriend_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_RemoveFriend_Response friendRelationship.
         * @member {number} friendRelationship
         * @memberof CPlayer_RemoveFriend_Response
         * @instance
         */
        CPlayer_RemoveFriend_Response.prototype.friendRelationship = 0;
    
        /**
         * Creates a new CPlayer_RemoveFriend_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {ICPlayer_RemoveFriend_Response=} [properties] Properties to set
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response instance
         */
        CPlayer_RemoveFriend_Response.create = function create(properties) {
            return new CPlayer_RemoveFriend_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Response message. Does not implicitly {@link CPlayer_RemoveFriend_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {ICPlayer_RemoveFriend_Response} message CPlayer_RemoveFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendRelationship != null && Object.hasOwnProperty.call(message, "friendRelationship"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.friendRelationship);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Response message, length delimited. Does not implicitly {@link CPlayer_RemoveFriend_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {ICPlayer_RemoveFriend_Response} message CPlayer_RemoveFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_RemoveFriend_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_RemoveFriend_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendRelationship = reader.uint32();
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
         * Decodes a CPlayer_RemoveFriend_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_RemoveFriend_Response message.
         * @function verify
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_RemoveFriend_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendRelationship != null && message.hasOwnProperty("friendRelationship"))
                if (!$util.isInteger(message.friendRelationship))
                    return "friendRelationship: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_RemoveFriend_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response
         */
        CPlayer_RemoveFriend_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_RemoveFriend_Response)
                return object;
            var message = new $root.CPlayer_RemoveFriend_Response();
            if (object.friendRelationship != null)
                message.friendRelationship = object.friendRelationship >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_RemoveFriend_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {CPlayer_RemoveFriend_Response} message CPlayer_RemoveFriend_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_RemoveFriend_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.friendRelationship = 0;
            if (message.friendRelationship != null && message.hasOwnProperty("friendRelationship"))
                object.friendRelationship = message.friendRelationship;
            return object;
        };
    
        /**
         * Converts this CPlayer_RemoveFriend_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_RemoveFriend_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_RemoveFriend_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_RemoveFriend_Response
         * @function getTypeUrl
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_RemoveFriend_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_RemoveFriend_Response";
        };
    
        return CPlayer_RemoveFriend_Response;
    })();
    
    $root.CPlayer_IgnoreFriend_Request = (function() {
    
        /**
         * Properties of a CPlayer_IgnoreFriend_Request.
         * @exports ICPlayer_IgnoreFriend_Request
         * @interface ICPlayer_IgnoreFriend_Request
         * @property {number|Long|null} [steamid] CPlayer_IgnoreFriend_Request steamid
         * @property {boolean|null} [unignore] CPlayer_IgnoreFriend_Request unignore
         */
    
        /**
         * Constructs a new CPlayer_IgnoreFriend_Request.
         * @exports CPlayer_IgnoreFriend_Request
         * @classdesc Represents a CPlayer_IgnoreFriend_Request.
         * @implements ICPlayer_IgnoreFriend_Request
         * @constructor
         * @param {ICPlayer_IgnoreFriend_Request=} [properties] Properties to set
         */
        function CPlayer_IgnoreFriend_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_IgnoreFriend_Request steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_IgnoreFriend_Request
         * @instance
         */
        CPlayer_IgnoreFriend_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CPlayer_IgnoreFriend_Request unignore.
         * @member {boolean} unignore
         * @memberof CPlayer_IgnoreFriend_Request
         * @instance
         */
        CPlayer_IgnoreFriend_Request.prototype.unignore = false;
    
        /**
         * Creates a new CPlayer_IgnoreFriend_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {ICPlayer_IgnoreFriend_Request=} [properties] Properties to set
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request instance
         */
        CPlayer_IgnoreFriend_Request.create = function create(properties) {
            return new CPlayer_IgnoreFriend_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Request message. Does not implicitly {@link CPlayer_IgnoreFriend_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {ICPlayer_IgnoreFriend_Request} message CPlayer_IgnoreFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.unignore != null && Object.hasOwnProperty.call(message, "unignore"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.unignore);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Request message, length delimited. Does not implicitly {@link CPlayer_IgnoreFriend_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {ICPlayer_IgnoreFriend_Request} message CPlayer_IgnoreFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_IgnoreFriend_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_IgnoreFriend_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 2: {
                        message.unignore = reader.bool();
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
         * Decodes a CPlayer_IgnoreFriend_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_IgnoreFriend_Request message.
         * @function verify
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_IgnoreFriend_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.unignore != null && message.hasOwnProperty("unignore"))
                if (typeof message.unignore !== "boolean")
                    return "unignore: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_IgnoreFriend_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request
         */
        CPlayer_IgnoreFriend_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_IgnoreFriend_Request)
                return object;
            var message = new $root.CPlayer_IgnoreFriend_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.unignore != null)
                message.unignore = Boolean(object.unignore);
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_IgnoreFriend_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {CPlayer_IgnoreFriend_Request} message CPlayer_IgnoreFriend_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_IgnoreFriend_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.unignore = false;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.unignore != null && message.hasOwnProperty("unignore"))
                object.unignore = message.unignore;
            return object;
        };
    
        /**
         * Converts this CPlayer_IgnoreFriend_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_IgnoreFriend_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_IgnoreFriend_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_IgnoreFriend_Request
         * @function getTypeUrl
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_IgnoreFriend_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_IgnoreFriend_Request";
        };
    
        return CPlayer_IgnoreFriend_Request;
    })();
    
    $root.CPlayer_IgnoreFriend_Response = (function() {
    
        /**
         * Properties of a CPlayer_IgnoreFriend_Response.
         * @exports ICPlayer_IgnoreFriend_Response
         * @interface ICPlayer_IgnoreFriend_Response
         * @property {number|null} [friendRelationship] CPlayer_IgnoreFriend_Response friendRelationship
         */
    
        /**
         * Constructs a new CPlayer_IgnoreFriend_Response.
         * @exports CPlayer_IgnoreFriend_Response
         * @classdesc Represents a CPlayer_IgnoreFriend_Response.
         * @implements ICPlayer_IgnoreFriend_Response
         * @constructor
         * @param {ICPlayer_IgnoreFriend_Response=} [properties] Properties to set
         */
        function CPlayer_IgnoreFriend_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_IgnoreFriend_Response friendRelationship.
         * @member {number} friendRelationship
         * @memberof CPlayer_IgnoreFriend_Response
         * @instance
         */
        CPlayer_IgnoreFriend_Response.prototype.friendRelationship = 0;
    
        /**
         * Creates a new CPlayer_IgnoreFriend_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {ICPlayer_IgnoreFriend_Response=} [properties] Properties to set
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response instance
         */
        CPlayer_IgnoreFriend_Response.create = function create(properties) {
            return new CPlayer_IgnoreFriend_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Response message. Does not implicitly {@link CPlayer_IgnoreFriend_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {ICPlayer_IgnoreFriend_Response} message CPlayer_IgnoreFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendRelationship != null && Object.hasOwnProperty.call(message, "friendRelationship"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.friendRelationship);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Response message, length delimited. Does not implicitly {@link CPlayer_IgnoreFriend_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {ICPlayer_IgnoreFriend_Response} message CPlayer_IgnoreFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_IgnoreFriend_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_IgnoreFriend_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendRelationship = reader.uint32();
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
         * Decodes a CPlayer_IgnoreFriend_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_IgnoreFriend_Response message.
         * @function verify
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_IgnoreFriend_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendRelationship != null && message.hasOwnProperty("friendRelationship"))
                if (!$util.isInteger(message.friendRelationship))
                    return "friendRelationship: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_IgnoreFriend_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response
         */
        CPlayer_IgnoreFriend_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_IgnoreFriend_Response)
                return object;
            var message = new $root.CPlayer_IgnoreFriend_Response();
            if (object.friendRelationship != null)
                message.friendRelationship = object.friendRelationship >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_IgnoreFriend_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {CPlayer_IgnoreFriend_Response} message CPlayer_IgnoreFriend_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_IgnoreFriend_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.friendRelationship = 0;
            if (message.friendRelationship != null && message.hasOwnProperty("friendRelationship"))
                object.friendRelationship = message.friendRelationship;
            return object;
        };
    
        /**
         * Converts this CPlayer_IgnoreFriend_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_IgnoreFriend_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_IgnoreFriend_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_IgnoreFriend_Response
         * @function getTypeUrl
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_IgnoreFriend_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_IgnoreFriend_Response";
        };
    
        return CPlayer_IgnoreFriend_Response;
    })();
    
    $root.CPlayer_GetCommunityPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetCommunityPreferences_Request.
         * @exports ICPlayer_GetCommunityPreferences_Request
         * @interface ICPlayer_GetCommunityPreferences_Request
         */
    
        /**
         * Constructs a new CPlayer_GetCommunityPreferences_Request.
         * @exports CPlayer_GetCommunityPreferences_Request
         * @classdesc Represents a CPlayer_GetCommunityPreferences_Request.
         * @implements ICPlayer_GetCommunityPreferences_Request
         * @constructor
         * @param {ICPlayer_GetCommunityPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_GetCommunityPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetCommunityPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request instance
         */
        CPlayer_GetCommunityPreferences_Request.create = function create(properties) {
            return new CPlayer_GetCommunityPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Request message. Does not implicitly {@link CPlayer_GetCommunityPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Request} message CPlayer_GetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_GetCommunityPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Request} message CPlayer_GetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetCommunityPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetCommunityPreferences_Request();
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
         * Decodes a CPlayer_GetCommunityPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetCommunityPreferences_Request message.
         * @function verify
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetCommunityPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetCommunityPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request
         */
        CPlayer_GetCommunityPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetCommunityPreferences_Request)
                return object;
            return new $root.CPlayer_GetCommunityPreferences_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetCommunityPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {CPlayer_GetCommunityPreferences_Request} message CPlayer_GetCommunityPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetCommunityPreferences_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetCommunityPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetCommunityPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetCommunityPreferences_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetCommunityPreferences_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetCommunityPreferences_Request";
        };
    
        return CPlayer_GetCommunityPreferences_Request;
    })();
    
    $root.CPlayer_CommunityPreferences = (function() {
    
        /**
         * Properties of a CPlayer_CommunityPreferences.
         * @exports ICPlayer_CommunityPreferences
         * @interface ICPlayer_CommunityPreferences
         * @property {boolean|null} [hideAdultContentViolence] CPlayer_CommunityPreferences hideAdultContentViolence
         * @property {boolean|null} [hideAdultContentSex] CPlayer_CommunityPreferences hideAdultContentSex
         * @property {boolean|null} [parenthesizeNicknames] CPlayer_CommunityPreferences parenthesizeNicknames
         * @property {number|null} [timestampUpdated] CPlayer_CommunityPreferences timestampUpdated
         */
    
        /**
         * Constructs a new CPlayer_CommunityPreferences.
         * @exports CPlayer_CommunityPreferences
         * @classdesc Represents a CPlayer_CommunityPreferences.
         * @implements ICPlayer_CommunityPreferences
         * @constructor
         * @param {ICPlayer_CommunityPreferences=} [properties] Properties to set
         */
        function CPlayer_CommunityPreferences(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_CommunityPreferences hideAdultContentViolence.
         * @member {boolean} hideAdultContentViolence
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.hideAdultContentViolence = true;
    
        /**
         * CPlayer_CommunityPreferences hideAdultContentSex.
         * @member {boolean} hideAdultContentSex
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.hideAdultContentSex = true;
    
        /**
         * CPlayer_CommunityPreferences parenthesizeNicknames.
         * @member {boolean} parenthesizeNicknames
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.parenthesizeNicknames = false;
    
        /**
         * CPlayer_CommunityPreferences timestampUpdated.
         * @member {number} timestampUpdated
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.timestampUpdated = 0;
    
        /**
         * Creates a new CPlayer_CommunityPreferences instance using the specified properties.
         * @function create
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {ICPlayer_CommunityPreferences=} [properties] Properties to set
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences instance
         */
        CPlayer_CommunityPreferences.create = function create(properties) {
            return new CPlayer_CommunityPreferences(properties);
        };
    
        /**
         * Encodes the specified CPlayer_CommunityPreferences message. Does not implicitly {@link CPlayer_CommunityPreferences.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {ICPlayer_CommunityPreferences} message CPlayer_CommunityPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_CommunityPreferences.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hideAdultContentViolence != null && Object.hasOwnProperty.call(message, "hideAdultContentViolence"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hideAdultContentViolence);
            if (message.hideAdultContentSex != null && Object.hasOwnProperty.call(message, "hideAdultContentSex"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hideAdultContentSex);
            if (message.timestampUpdated != null && Object.hasOwnProperty.call(message, "timestampUpdated"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestampUpdated);
            if (message.parenthesizeNicknames != null && Object.hasOwnProperty.call(message, "parenthesizeNicknames"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.parenthesizeNicknames);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_CommunityPreferences message, length delimited. Does not implicitly {@link CPlayer_CommunityPreferences.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {ICPlayer_CommunityPreferences} message CPlayer_CommunityPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_CommunityPreferences.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_CommunityPreferences message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_CommunityPreferences.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_CommunityPreferences();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hideAdultContentViolence = reader.bool();
                        break;
                    }
                case 2: {
                        message.hideAdultContentSex = reader.bool();
                        break;
                    }
                case 4: {
                        message.parenthesizeNicknames = reader.bool();
                        break;
                    }
                case 3: {
                        message.timestampUpdated = reader.uint32();
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
         * Decodes a CPlayer_CommunityPreferences message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_CommunityPreferences.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_CommunityPreferences message.
         * @function verify
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_CommunityPreferences.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hideAdultContentViolence != null && message.hasOwnProperty("hideAdultContentViolence"))
                if (typeof message.hideAdultContentViolence !== "boolean")
                    return "hideAdultContentViolence: boolean expected";
            if (message.hideAdultContentSex != null && message.hasOwnProperty("hideAdultContentSex"))
                if (typeof message.hideAdultContentSex !== "boolean")
                    return "hideAdultContentSex: boolean expected";
            if (message.parenthesizeNicknames != null && message.hasOwnProperty("parenthesizeNicknames"))
                if (typeof message.parenthesizeNicknames !== "boolean")
                    return "parenthesizeNicknames: boolean expected";
            if (message.timestampUpdated != null && message.hasOwnProperty("timestampUpdated"))
                if (!$util.isInteger(message.timestampUpdated))
                    return "timestampUpdated: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_CommunityPreferences message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences
         */
        CPlayer_CommunityPreferences.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_CommunityPreferences)
                return object;
            var message = new $root.CPlayer_CommunityPreferences();
            if (object.hideAdultContentViolence != null)
                message.hideAdultContentViolence = Boolean(object.hideAdultContentViolence);
            if (object.hideAdultContentSex != null)
                message.hideAdultContentSex = Boolean(object.hideAdultContentSex);
            if (object.parenthesizeNicknames != null)
                message.parenthesizeNicknames = Boolean(object.parenthesizeNicknames);
            if (object.timestampUpdated != null)
                message.timestampUpdated = object.timestampUpdated >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_CommunityPreferences message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {CPlayer_CommunityPreferences} message CPlayer_CommunityPreferences
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_CommunityPreferences.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hideAdultContentViolence = true;
                object.hideAdultContentSex = true;
                object.timestampUpdated = 0;
                object.parenthesizeNicknames = false;
            }
            if (message.hideAdultContentViolence != null && message.hasOwnProperty("hideAdultContentViolence"))
                object.hideAdultContentViolence = message.hideAdultContentViolence;
            if (message.hideAdultContentSex != null && message.hasOwnProperty("hideAdultContentSex"))
                object.hideAdultContentSex = message.hideAdultContentSex;
            if (message.timestampUpdated != null && message.hasOwnProperty("timestampUpdated"))
                object.timestampUpdated = message.timestampUpdated;
            if (message.parenthesizeNicknames != null && message.hasOwnProperty("parenthesizeNicknames"))
                object.parenthesizeNicknames = message.parenthesizeNicknames;
            return object;
        };
    
        /**
         * Converts this CPlayer_CommunityPreferences to JSON.
         * @function toJSON
         * @memberof CPlayer_CommunityPreferences
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_CommunityPreferences.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_CommunityPreferences
         * @function getTypeUrl
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_CommunityPreferences.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_CommunityPreferences";
        };
    
        return CPlayer_CommunityPreferences;
    })();
    
    $root.CPlayer_GetCommunityPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetCommunityPreferences_Response.
         * @exports ICPlayer_GetCommunityPreferences_Response
         * @interface ICPlayer_GetCommunityPreferences_Response
         * @property {ICPlayer_CommunityPreferences|null} [preferences] CPlayer_GetCommunityPreferences_Response preferences
         */
    
        /**
         * Constructs a new CPlayer_GetCommunityPreferences_Response.
         * @exports CPlayer_GetCommunityPreferences_Response
         * @classdesc Represents a CPlayer_GetCommunityPreferences_Response.
         * @implements ICPlayer_GetCommunityPreferences_Response
         * @constructor
         * @param {ICPlayer_GetCommunityPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_GetCommunityPreferences_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetCommunityPreferences_Response preferences.
         * @member {ICPlayer_CommunityPreferences|null|undefined} preferences
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @instance
         */
        CPlayer_GetCommunityPreferences_Response.prototype.preferences = null;
    
        /**
         * Creates a new CPlayer_GetCommunityPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response instance
         */
        CPlayer_GetCommunityPreferences_Response.create = function create(properties) {
            return new CPlayer_GetCommunityPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Response message. Does not implicitly {@link CPlayer_GetCommunityPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Response} message CPlayer_GetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
                $root.CPlayer_CommunityPreferences.encode(message.preferences, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_GetCommunityPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Response} message CPlayer_GetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetCommunityPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetCommunityPreferences_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.preferences = $root.CPlayer_CommunityPreferences.decode(reader, reader.uint32());
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
         * Decodes a CPlayer_GetCommunityPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetCommunityPreferences_Response message.
         * @function verify
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetCommunityPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                var error = $root.CPlayer_CommunityPreferences.verify(message.preferences);
                if (error)
                    return "preferences." + error;
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetCommunityPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response
         */
        CPlayer_GetCommunityPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetCommunityPreferences_Response)
                return object;
            var message = new $root.CPlayer_GetCommunityPreferences_Response();
            if (object.preferences != null) {
                if (typeof object.preferences !== "object")
                    throw TypeError(".CPlayer_GetCommunityPreferences_Response.preferences: object expected");
                message.preferences = $root.CPlayer_CommunityPreferences.fromObject(object.preferences);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetCommunityPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {CPlayer_GetCommunityPreferences_Response} message CPlayer_GetCommunityPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetCommunityPreferences_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.preferences = null;
            if (message.preferences != null && message.hasOwnProperty("preferences"))
                object.preferences = $root.CPlayer_CommunityPreferences.toObject(message.preferences, options);
            return object;
        };
    
        /**
         * Converts this CPlayer_GetCommunityPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetCommunityPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetCommunityPreferences_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetCommunityPreferences_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetCommunityPreferences_Response";
        };
    
        return CPlayer_GetCommunityPreferences_Response;
    })();
    
    $root.CPlayer_SetCommunityPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_SetCommunityPreferences_Request.
         * @exports ICPlayer_SetCommunityPreferences_Request
         * @interface ICPlayer_SetCommunityPreferences_Request
         * @property {ICPlayer_CommunityPreferences|null} [preferences] CPlayer_SetCommunityPreferences_Request preferences
         */
    
        /**
         * Constructs a new CPlayer_SetCommunityPreferences_Request.
         * @exports CPlayer_SetCommunityPreferences_Request
         * @classdesc Represents a CPlayer_SetCommunityPreferences_Request.
         * @implements ICPlayer_SetCommunityPreferences_Request
         * @constructor
         * @param {ICPlayer_SetCommunityPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_SetCommunityPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_SetCommunityPreferences_Request preferences.
         * @member {ICPlayer_CommunityPreferences|null|undefined} preferences
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @instance
         */
        CPlayer_SetCommunityPreferences_Request.prototype.preferences = null;
    
        /**
         * Creates a new CPlayer_SetCommunityPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request instance
         */
        CPlayer_SetCommunityPreferences_Request.create = function create(properties) {
            return new CPlayer_SetCommunityPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Request message. Does not implicitly {@link CPlayer_SetCommunityPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Request} message CPlayer_SetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
                $root.CPlayer_CommunityPreferences.encode(message.preferences, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_SetCommunityPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Request} message CPlayer_SetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetCommunityPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetCommunityPreferences_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.preferences = $root.CPlayer_CommunityPreferences.decode(reader, reader.uint32());
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
         * Decodes a CPlayer_SetCommunityPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetCommunityPreferences_Request message.
         * @function verify
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetCommunityPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                var error = $root.CPlayer_CommunityPreferences.verify(message.preferences);
                if (error)
                    return "preferences." + error;
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_SetCommunityPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request
         */
        CPlayer_SetCommunityPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetCommunityPreferences_Request)
                return object;
            var message = new $root.CPlayer_SetCommunityPreferences_Request();
            if (object.preferences != null) {
                if (typeof object.preferences !== "object")
                    throw TypeError(".CPlayer_SetCommunityPreferences_Request.preferences: object expected");
                message.preferences = $root.CPlayer_CommunityPreferences.fromObject(object.preferences);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_SetCommunityPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {CPlayer_SetCommunityPreferences_Request} message CPlayer_SetCommunityPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetCommunityPreferences_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.preferences = null;
            if (message.preferences != null && message.hasOwnProperty("preferences"))
                object.preferences = $root.CPlayer_CommunityPreferences.toObject(message.preferences, options);
            return object;
        };
    
        /**
         * Converts this CPlayer_SetCommunityPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetCommunityPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_SetCommunityPreferences_Request
         * @function getTypeUrl
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_SetCommunityPreferences_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_SetCommunityPreferences_Request";
        };
    
        return CPlayer_SetCommunityPreferences_Request;
    })();
    
    $root.CPlayer_SetCommunityPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_SetCommunityPreferences_Response.
         * @exports ICPlayer_SetCommunityPreferences_Response
         * @interface ICPlayer_SetCommunityPreferences_Response
         */
    
        /**
         * Constructs a new CPlayer_SetCommunityPreferences_Response.
         * @exports CPlayer_SetCommunityPreferences_Response
         * @classdesc Represents a CPlayer_SetCommunityPreferences_Response.
         * @implements ICPlayer_SetCommunityPreferences_Response
         * @constructor
         * @param {ICPlayer_SetCommunityPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_SetCommunityPreferences_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_SetCommunityPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response instance
         */
        CPlayer_SetCommunityPreferences_Response.create = function create(properties) {
            return new CPlayer_SetCommunityPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Response message. Does not implicitly {@link CPlayer_SetCommunityPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Response} message CPlayer_SetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_SetCommunityPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Response} message CPlayer_SetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetCommunityPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetCommunityPreferences_Response();
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
         * Decodes a CPlayer_SetCommunityPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetCommunityPreferences_Response message.
         * @function verify
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetCommunityPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_SetCommunityPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response
         */
        CPlayer_SetCommunityPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetCommunityPreferences_Response)
                return object;
            return new $root.CPlayer_SetCommunityPreferences_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_SetCommunityPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {CPlayer_SetCommunityPreferences_Response} message CPlayer_SetCommunityPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetCommunityPreferences_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_SetCommunityPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetCommunityPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_SetCommunityPreferences_Response
         * @function getTypeUrl
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_SetCommunityPreferences_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_SetCommunityPreferences_Response";
        };
    
        return CPlayer_SetCommunityPreferences_Response;
    })();
    
    $root.CPlayer_GetNewSteamAnnouncementState_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetNewSteamAnnouncementState_Request.
         * @exports ICPlayer_GetNewSteamAnnouncementState_Request
         * @interface ICPlayer_GetNewSteamAnnouncementState_Request
         * @property {number|null} [language] CPlayer_GetNewSteamAnnouncementState_Request language
         */
    
        /**
         * Constructs a new CPlayer_GetNewSteamAnnouncementState_Request.
         * @exports CPlayer_GetNewSteamAnnouncementState_Request
         * @classdesc Represents a CPlayer_GetNewSteamAnnouncementState_Request.
         * @implements ICPlayer_GetNewSteamAnnouncementState_Request
         * @constructor
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request=} [properties] Properties to set
         */
        function CPlayer_GetNewSteamAnnouncementState_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Request language.
         * @member {number} language
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Request.prototype.language = 0;
    
        /**
         * Creates a new CPlayer_GetNewSteamAnnouncementState_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request=} [properties] Properties to set
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request instance
         */
        CPlayer_GetNewSteamAnnouncementState_Request.create = function create(properties) {
            return new CPlayer_GetNewSteamAnnouncementState_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Request message. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} message CPlayer_GetNewSteamAnnouncementState_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.language);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Request message, length delimited. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} message CPlayer_GetNewSteamAnnouncementState_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNewSteamAnnouncementState_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.language = reader.int32();
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
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNewSteamAnnouncementState_Request message.
         * @function verify
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNewSteamAnnouncementState_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isInteger(message.language))
                    return "language: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNewSteamAnnouncementState_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request
         */
        CPlayer_GetNewSteamAnnouncementState_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNewSteamAnnouncementState_Request)
                return object;
            var message = new $root.CPlayer_GetNewSteamAnnouncementState_Request();
            if (object.language != null)
                message.language = object.language | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNewSteamAnnouncementState_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {CPlayer_GetNewSteamAnnouncementState_Request} message CPlayer_GetNewSteamAnnouncementState_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNewSteamAnnouncementState_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.language = 0;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetNewSteamAnnouncementState_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNewSteamAnnouncementState_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetNewSteamAnnouncementState_Request
         * @function getTypeUrl
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetNewSteamAnnouncementState_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetNewSteamAnnouncementState_Request";
        };
    
        return CPlayer_GetNewSteamAnnouncementState_Request;
    })();
    
    $root.CPlayer_GetNewSteamAnnouncementState_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetNewSteamAnnouncementState_Response.
         * @exports ICPlayer_GetNewSteamAnnouncementState_Response
         * @interface ICPlayer_GetNewSteamAnnouncementState_Response
         * @property {number|null} [state] CPlayer_GetNewSteamAnnouncementState_Response state
         * @property {string|null} [announcementHeadline] CPlayer_GetNewSteamAnnouncementState_Response announcementHeadline
         * @property {string|null} [announcementUrl] CPlayer_GetNewSteamAnnouncementState_Response announcementUrl
         * @property {number|null} [timePosted] CPlayer_GetNewSteamAnnouncementState_Response timePosted
         * @property {number|Long|null} [announcementGid] CPlayer_GetNewSteamAnnouncementState_Response announcementGid
         */
    
        /**
         * Constructs a new CPlayer_GetNewSteamAnnouncementState_Response.
         * @exports CPlayer_GetNewSteamAnnouncementState_Response
         * @classdesc Represents a CPlayer_GetNewSteamAnnouncementState_Response.
         * @implements ICPlayer_GetNewSteamAnnouncementState_Response
         * @constructor
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response=} [properties] Properties to set
         */
        function CPlayer_GetNewSteamAnnouncementState_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response state.
         * @member {number} state
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.state = 0;
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response announcementHeadline.
         * @member {string} announcementHeadline
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.announcementHeadline = "";
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response announcementUrl.
         * @member {string} announcementUrl
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.announcementUrl = "";
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response timePosted.
         * @member {number} timePosted
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.timePosted = 0;
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response announcementGid.
         * @member {number|Long} announcementGid
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.announcementGid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CPlayer_GetNewSteamAnnouncementState_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response=} [properties] Properties to set
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.create = function create(properties) {
            return new CPlayer_GetNewSteamAnnouncementState_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Response message. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response} message CPlayer_GetNewSteamAnnouncementState_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.announcementHeadline != null && Object.hasOwnProperty.call(message, "announcementHeadline"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.announcementHeadline);
            if (message.announcementUrl != null && Object.hasOwnProperty.call(message, "announcementUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.announcementUrl);
            if (message.timePosted != null && Object.hasOwnProperty.call(message, "timePosted"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.timePosted);
            if (message.announcementGid != null && Object.hasOwnProperty.call(message, "announcementGid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.announcementGid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Response message, length delimited. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response} message CPlayer_GetNewSteamAnnouncementState_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNewSteamAnnouncementState_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.state = reader.int32();
                        break;
                    }
                case 2: {
                        message.announcementHeadline = reader.string();
                        break;
                    }
                case 3: {
                        message.announcementUrl = reader.string();
                        break;
                    }
                case 4: {
                        message.timePosted = reader.uint32();
                        break;
                    }
                case 5: {
                        message.announcementGid = reader.uint64();
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
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNewSteamAnnouncementState_Response message.
         * @function verify
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNewSteamAnnouncementState_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.announcementHeadline != null && message.hasOwnProperty("announcementHeadline"))
                if (!$util.isString(message.announcementHeadline))
                    return "announcementHeadline: string expected";
            if (message.announcementUrl != null && message.hasOwnProperty("announcementUrl"))
                if (!$util.isString(message.announcementUrl))
                    return "announcementUrl: string expected";
            if (message.timePosted != null && message.hasOwnProperty("timePosted"))
                if (!$util.isInteger(message.timePosted))
                    return "timePosted: integer expected";
            if (message.announcementGid != null && message.hasOwnProperty("announcementGid"))
                if (!$util.isInteger(message.announcementGid) && !(message.announcementGid && $util.isInteger(message.announcementGid.low) && $util.isInteger(message.announcementGid.high)))
                    return "announcementGid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNewSteamAnnouncementState_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response
         */
        CPlayer_GetNewSteamAnnouncementState_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNewSteamAnnouncementState_Response)
                return object;
            var message = new $root.CPlayer_GetNewSteamAnnouncementState_Response();
            if (object.state != null)
                message.state = object.state | 0;
            if (object.announcementHeadline != null)
                message.announcementHeadline = String(object.announcementHeadline);
            if (object.announcementUrl != null)
                message.announcementUrl = String(object.announcementUrl);
            if (object.timePosted != null)
                message.timePosted = object.timePosted >>> 0;
            if (object.announcementGid != null)
                if ($util.Long)
                    (message.announcementGid = $util.Long.fromValue(object.announcementGid)).unsigned = true;
                else if (typeof object.announcementGid === "string")
                    message.announcementGid = parseInt(object.announcementGid, 10);
                else if (typeof object.announcementGid === "number")
                    message.announcementGid = object.announcementGid;
                else if (typeof object.announcementGid === "object")
                    message.announcementGid = new $util.LongBits(object.announcementGid.low >>> 0, object.announcementGid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNewSteamAnnouncementState_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {CPlayer_GetNewSteamAnnouncementState_Response} message CPlayer_GetNewSteamAnnouncementState_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNewSteamAnnouncementState_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = 0;
                object.announcementHeadline = "";
                object.announcementUrl = "";
                object.timePosted = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.announcementGid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.announcementGid = options.longs === String ? "0" : 0;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.announcementHeadline != null && message.hasOwnProperty("announcementHeadline"))
                object.announcementHeadline = message.announcementHeadline;
            if (message.announcementUrl != null && message.hasOwnProperty("announcementUrl"))
                object.announcementUrl = message.announcementUrl;
            if (message.timePosted != null && message.hasOwnProperty("timePosted"))
                object.timePosted = message.timePosted;
            if (message.announcementGid != null && message.hasOwnProperty("announcementGid"))
                if (typeof message.announcementGid === "number")
                    object.announcementGid = options.longs === String ? String(message.announcementGid) : message.announcementGid;
                else
                    object.announcementGid = options.longs === String ? $util.Long.prototype.toString.call(message.announcementGid) : options.longs === Number ? new $util.LongBits(message.announcementGid.low >>> 0, message.announcementGid.high >>> 0).toNumber(true) : message.announcementGid;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetNewSteamAnnouncementState_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_GetNewSteamAnnouncementState_Response
         * @function getTypeUrl
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_GetNewSteamAnnouncementState_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_GetNewSteamAnnouncementState_Response";
        };
    
        return CPlayer_GetNewSteamAnnouncementState_Response;
    })();
    
    $root.CPlayer_UpdateSteamAnnouncementLastRead_Request = (function() {
    
        /**
         * Properties of a CPlayer_UpdateSteamAnnouncementLastRead_Request.
         * @exports ICPlayer_UpdateSteamAnnouncementLastRead_Request
         * @interface ICPlayer_UpdateSteamAnnouncementLastRead_Request
         * @property {number|Long|null} [announcementGid] CPlayer_UpdateSteamAnnouncementLastRead_Request announcementGid
         * @property {number|null} [timePosted] CPlayer_UpdateSteamAnnouncementLastRead_Request timePosted
         */
    
        /**
         * Constructs a new CPlayer_UpdateSteamAnnouncementLastRead_Request.
         * @exports CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @classdesc Represents a CPlayer_UpdateSteamAnnouncementLastRead_Request.
         * @implements ICPlayer_UpdateSteamAnnouncementLastRead_Request
         * @constructor
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request=} [properties] Properties to set
         */
        function CPlayer_UpdateSteamAnnouncementLastRead_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_UpdateSteamAnnouncementLastRead_Request announcementGid.
         * @member {number|Long} announcementGid
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.prototype.announcementGid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPlayer_UpdateSteamAnnouncementLastRead_Request timePosted.
         * @member {number} timePosted
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.prototype.timePosted = 0;
    
        /**
         * Creates a new CPlayer_UpdateSteamAnnouncementLastRead_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request=} [properties] Properties to set
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.create = function create(properties) {
            return new CPlayer_UpdateSteamAnnouncementLastRead_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Request message. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} message CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.announcementGid != null && Object.hasOwnProperty.call(message, "announcementGid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.announcementGid);
            if (message.timePosted != null && Object.hasOwnProperty.call(message, "timePosted"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timePosted);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Request message, length delimited. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} message CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_UpdateSteamAnnouncementLastRead_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.announcementGid = reader.uint64();
                        break;
                    }
                case 2: {
                        message.timePosted = reader.uint32();
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
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_UpdateSteamAnnouncementLastRead_Request message.
         * @function verify
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.announcementGid != null && message.hasOwnProperty("announcementGid"))
                if (!$util.isInteger(message.announcementGid) && !(message.announcementGid && $util.isInteger(message.announcementGid.low) && $util.isInteger(message.announcementGid.high)))
                    return "announcementGid: integer|Long expected";
            if (message.timePosted != null && message.hasOwnProperty("timePosted"))
                if (!$util.isInteger(message.timePosted))
                    return "timePosted: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_UpdateSteamAnnouncementLastRead_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_UpdateSteamAnnouncementLastRead_Request)
                return object;
            var message = new $root.CPlayer_UpdateSteamAnnouncementLastRead_Request();
            if (object.announcementGid != null)
                if ($util.Long)
                    (message.announcementGid = $util.Long.fromValue(object.announcementGid)).unsigned = true;
                else if (typeof object.announcementGid === "string")
                    message.announcementGid = parseInt(object.announcementGid, 10);
                else if (typeof object.announcementGid === "number")
                    message.announcementGid = object.announcementGid;
                else if (typeof object.announcementGid === "object")
                    message.announcementGid = new $util.LongBits(object.announcementGid.low >>> 0, object.announcementGid.high >>> 0).toNumber(true);
            if (object.timePosted != null)
                message.timePosted = object.timePosted >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_UpdateSteamAnnouncementLastRead_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {CPlayer_UpdateSteamAnnouncementLastRead_Request} message CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.announcementGid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.announcementGid = options.longs === String ? "0" : 0;
                object.timePosted = 0;
            }
            if (message.announcementGid != null && message.hasOwnProperty("announcementGid"))
                if (typeof message.announcementGid === "number")
                    object.announcementGid = options.longs === String ? String(message.announcementGid) : message.announcementGid;
                else
                    object.announcementGid = options.longs === String ? $util.Long.prototype.toString.call(message.announcementGid) : options.longs === Number ? new $util.LongBits(message.announcementGid.low >>> 0, message.announcementGid.high >>> 0).toNumber(true) : message.announcementGid;
            if (message.timePosted != null && message.hasOwnProperty("timePosted"))
                object.timePosted = message.timePosted;
            return object;
        };
    
        /**
         * Converts this CPlayer_UpdateSteamAnnouncementLastRead_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @function getTypeUrl
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_UpdateSteamAnnouncementLastRead_Request";
        };
    
        return CPlayer_UpdateSteamAnnouncementLastRead_Request;
    })();
    
    $root.CPlayer_UpdateSteamAnnouncementLastRead_Response = (function() {
    
        /**
         * Properties of a CPlayer_UpdateSteamAnnouncementLastRead_Response.
         * @exports ICPlayer_UpdateSteamAnnouncementLastRead_Response
         * @interface ICPlayer_UpdateSteamAnnouncementLastRead_Response
         */
    
        /**
         * Constructs a new CPlayer_UpdateSteamAnnouncementLastRead_Response.
         * @exports CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @classdesc Represents a CPlayer_UpdateSteamAnnouncementLastRead_Response.
         * @implements ICPlayer_UpdateSteamAnnouncementLastRead_Response
         * @constructor
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response=} [properties] Properties to set
         */
        function CPlayer_UpdateSteamAnnouncementLastRead_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_UpdateSteamAnnouncementLastRead_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response=} [properties] Properties to set
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.create = function create(properties) {
            return new CPlayer_UpdateSteamAnnouncementLastRead_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Response message. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response} message CPlayer_UpdateSteamAnnouncementLastRead_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Response message, length delimited. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response} message CPlayer_UpdateSteamAnnouncementLastRead_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_UpdateSteamAnnouncementLastRead_Response();
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
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_UpdateSteamAnnouncementLastRead_Response message.
         * @function verify
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_UpdateSteamAnnouncementLastRead_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_UpdateSteamAnnouncementLastRead_Response)
                return object;
            return new $root.CPlayer_UpdateSteamAnnouncementLastRead_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_UpdateSteamAnnouncementLastRead_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {CPlayer_UpdateSteamAnnouncementLastRead_Response} message CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_UpdateSteamAnnouncementLastRead_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @function getTypeUrl
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CPlayer_UpdateSteamAnnouncementLastRead_Response";
        };
    
        return CPlayer_UpdateSteamAnnouncementLastRead_Response;
    })();
    
    $root.Player = (function() {
    
        /**
         * Constructs a new Player service.
         * @exports Player
         * @classdesc Represents a Player
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Player(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Player.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Player;
    
        /**
         * Creates new Player service using the specified rpc implementation.
         * @function create
         * @memberof Player
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Player} RPC service. Useful where requests and/or responses are streamed.
         */
        Player.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Player#getMutualFriendsForIncomingInvites}.
         * @memberof Player
         * @typedef GetMutualFriendsForIncomingInvitesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetMutualFriendsForIncomingInvites_Response} [response] CPlayer_GetMutualFriendsForIncomingInvites_Response
         */
    
        /**
         * Calls GetMutualFriendsForIncomingInvites.
         * @function getMutualFriendsForIncomingInvites
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} request CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object
         * @param {Player.GetMutualFriendsForIncomingInvitesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getMutualFriendsForIncomingInvites = function getMutualFriendsForIncomingInvites(request, callback) {
            return this.rpcCall(getMutualFriendsForIncomingInvites, $root.CPlayer_GetMutualFriendsForIncomingInvites_Request, $root.CPlayer_GetMutualFriendsForIncomingInvites_Response, request, callback);
        }, "name", { value: "GetMutualFriendsForIncomingInvites" });
    
        /**
         * Calls GetMutualFriendsForIncomingInvites.
         * @function getMutualFriendsForIncomingInvites
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} request CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object
         * @returns {Promise<CPlayer_GetMutualFriendsForIncomingInvites_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getFriendsGameplayInfo}.
         * @memberof Player
         * @typedef GetFriendsGameplayInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetFriendsGameplayInfo_Response} [response] CPlayer_GetFriendsGameplayInfo_Response
         */
    
        /**
         * Calls GetFriendsGameplayInfo.
         * @function getFriendsGameplayInfo
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} request CPlayer_GetFriendsGameplayInfo_Request message or plain object
         * @param {Player.GetFriendsGameplayInfoCallback} callback Node-style callback called with the error, if any, and CPlayer_GetFriendsGameplayInfo_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getFriendsGameplayInfo = function getFriendsGameplayInfo(request, callback) {
            return this.rpcCall(getFriendsGameplayInfo, $root.CPlayer_GetFriendsGameplayInfo_Request, $root.CPlayer_GetFriendsGameplayInfo_Response, request, callback);
        }, "name", { value: "GetFriendsGameplayInfo" });
    
        /**
         * Calls GetFriendsGameplayInfo.
         * @function getFriendsGameplayInfo
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} request CPlayer_GetFriendsGameplayInfo_Request message or plain object
         * @returns {Promise<CPlayer_GetFriendsGameplayInfo_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getGameBadgeLevels}.
         * @memberof Player
         * @typedef GetGameBadgeLevelsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetGameBadgeLevels_Response} [response] CPlayer_GetGameBadgeLevels_Response
         */
    
        /**
         * Calls GetGameBadgeLevels.
         * @function getGameBadgeLevels
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetGameBadgeLevels_Request} request CPlayer_GetGameBadgeLevels_Request message or plain object
         * @param {Player.GetGameBadgeLevelsCallback} callback Node-style callback called with the error, if any, and CPlayer_GetGameBadgeLevels_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getGameBadgeLevels = function getGameBadgeLevels(request, callback) {
            return this.rpcCall(getGameBadgeLevels, $root.CPlayer_GetGameBadgeLevels_Request, $root.CPlayer_GetGameBadgeLevels_Response, request, callback);
        }, "name", { value: "GetGameBadgeLevels" });
    
        /**
         * Calls GetGameBadgeLevels.
         * @function getGameBadgeLevels
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetGameBadgeLevels_Request} request CPlayer_GetGameBadgeLevels_Request message or plain object
         * @returns {Promise<CPlayer_GetGameBadgeLevels_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#clientGetLastPlayedTimes}.
         * @memberof Player
         * @typedef ClientGetLastPlayedTimesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetLastPlayedTimes_Response} [response] CPlayer_GetLastPlayedTimes_Response
         */
    
        /**
         * Calls ClientGetLastPlayedTimes.
         * @function clientGetLastPlayedTimes
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetLastPlayedTimes_Request} request CPlayer_GetLastPlayedTimes_Request message or plain object
         * @param {Player.ClientGetLastPlayedTimesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetLastPlayedTimes_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.clientGetLastPlayedTimes = function clientGetLastPlayedTimes(request, callback) {
            return this.rpcCall(clientGetLastPlayedTimes, $root.CPlayer_GetLastPlayedTimes_Request, $root.CPlayer_GetLastPlayedTimes_Response, request, callback);
        }, "name", { value: "ClientGetLastPlayedTimes" });
    
        /**
         * Calls ClientGetLastPlayedTimes.
         * @function clientGetLastPlayedTimes
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetLastPlayedTimes_Request} request CPlayer_GetLastPlayedTimes_Request message or plain object
         * @returns {Promise<CPlayer_GetLastPlayedTimes_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#acceptSSA}.
         * @memberof Player
         * @typedef AcceptSSACallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_AcceptSSA_Response} [response] CPlayer_AcceptSSA_Response
         */
    
        /**
         * Calls AcceptSSA.
         * @function acceptSSA
         * @memberof Player
         * @instance
         * @param {ICPlayer_AcceptSSA_Request} request CPlayer_AcceptSSA_Request message or plain object
         * @param {Player.AcceptSSACallback} callback Node-style callback called with the error, if any, and CPlayer_AcceptSSA_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.acceptSSA = function acceptSSA(request, callback) {
            return this.rpcCall(acceptSSA, $root.CPlayer_AcceptSSA_Request, $root.CPlayer_AcceptSSA_Response, request, callback);
        }, "name", { value: "AcceptSSA" });
    
        /**
         * Calls AcceptSSA.
         * @function acceptSSA
         * @memberof Player
         * @instance
         * @param {ICPlayer_AcceptSSA_Request} request CPlayer_AcceptSSA_Request message or plain object
         * @returns {Promise<CPlayer_AcceptSSA_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getNicknameList}.
         * @memberof Player
         * @typedef GetNicknameListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetNicknameList_Response} [response] CPlayer_GetNicknameList_Response
         */
    
        /**
         * Calls GetNicknameList.
         * @function getNicknameList
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNicknameList_Request} request CPlayer_GetNicknameList_Request message or plain object
         * @param {Player.GetNicknameListCallback} callback Node-style callback called with the error, if any, and CPlayer_GetNicknameList_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getNicknameList = function getNicknameList(request, callback) {
            return this.rpcCall(getNicknameList, $root.CPlayer_GetNicknameList_Request, $root.CPlayer_GetNicknameList_Response, request, callback);
        }, "name", { value: "GetNicknameList" });
    
        /**
         * Calls GetNicknameList.
         * @function getNicknameList
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNicknameList_Request} request CPlayer_GetNicknameList_Request message or plain object
         * @returns {Promise<CPlayer_GetNicknameList_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getPerFriendPreferences}.
         * @memberof Player
         * @typedef GetPerFriendPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetPerFriendPreferences_Response} [response] CPlayer_GetPerFriendPreferences_Response
         */
    
        /**
         * Calls GetPerFriendPreferences.
         * @function getPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetPerFriendPreferences_Request} request CPlayer_GetPerFriendPreferences_Request message or plain object
         * @param {Player.GetPerFriendPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetPerFriendPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getPerFriendPreferences = function getPerFriendPreferences(request, callback) {
            return this.rpcCall(getPerFriendPreferences, $root.CPlayer_GetPerFriendPreferences_Request, $root.CPlayer_GetPerFriendPreferences_Response, request, callback);
        }, "name", { value: "GetPerFriendPreferences" });
    
        /**
         * Calls GetPerFriendPreferences.
         * @function getPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetPerFriendPreferences_Request} request CPlayer_GetPerFriendPreferences_Request message or plain object
         * @returns {Promise<CPlayer_GetPerFriendPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#setPerFriendPreferences}.
         * @memberof Player
         * @typedef SetPerFriendPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_SetPerFriendPreferences_Response} [response] CPlayer_SetPerFriendPreferences_Response
         */
    
        /**
         * Calls SetPerFriendPreferences.
         * @function setPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetPerFriendPreferences_Request} request CPlayer_SetPerFriendPreferences_Request message or plain object
         * @param {Player.SetPerFriendPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_SetPerFriendPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.setPerFriendPreferences = function setPerFriendPreferences(request, callback) {
            return this.rpcCall(setPerFriendPreferences, $root.CPlayer_SetPerFriendPreferences_Request, $root.CPlayer_SetPerFriendPreferences_Response, request, callback);
        }, "name", { value: "SetPerFriendPreferences" });
    
        /**
         * Calls SetPerFriendPreferences.
         * @function setPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetPerFriendPreferences_Request} request CPlayer_SetPerFriendPreferences_Request message or plain object
         * @returns {Promise<CPlayer_SetPerFriendPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#addFriend}.
         * @memberof Player
         * @typedef AddFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_AddFriend_Response} [response] CPlayer_AddFriend_Response
         */
    
        /**
         * Calls AddFriend.
         * @function addFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_AddFriend_Request} request CPlayer_AddFriend_Request message or plain object
         * @param {Player.AddFriendCallback} callback Node-style callback called with the error, if any, and CPlayer_AddFriend_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.addFriend = function addFriend(request, callback) {
            return this.rpcCall(addFriend, $root.CPlayer_AddFriend_Request, $root.CPlayer_AddFriend_Response, request, callback);
        }, "name", { value: "AddFriend" });
    
        /**
         * Calls AddFriend.
         * @function addFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_AddFriend_Request} request CPlayer_AddFriend_Request message or plain object
         * @returns {Promise<CPlayer_AddFriend_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#removeFriend}.
         * @memberof Player
         * @typedef RemoveFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_RemoveFriend_Response} [response] CPlayer_RemoveFriend_Response
         */
    
        /**
         * Calls RemoveFriend.
         * @function removeFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_RemoveFriend_Request} request CPlayer_RemoveFriend_Request message or plain object
         * @param {Player.RemoveFriendCallback} callback Node-style callback called with the error, if any, and CPlayer_RemoveFriend_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.removeFriend = function removeFriend(request, callback) {
            return this.rpcCall(removeFriend, $root.CPlayer_RemoveFriend_Request, $root.CPlayer_RemoveFriend_Response, request, callback);
        }, "name", { value: "RemoveFriend" });
    
        /**
         * Calls RemoveFriend.
         * @function removeFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_RemoveFriend_Request} request CPlayer_RemoveFriend_Request message or plain object
         * @returns {Promise<CPlayer_RemoveFriend_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#ignoreFriend}.
         * @memberof Player
         * @typedef IgnoreFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_IgnoreFriend_Response} [response] CPlayer_IgnoreFriend_Response
         */
    
        /**
         * Calls IgnoreFriend.
         * @function ignoreFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_IgnoreFriend_Request} request CPlayer_IgnoreFriend_Request message or plain object
         * @param {Player.IgnoreFriendCallback} callback Node-style callback called with the error, if any, and CPlayer_IgnoreFriend_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.ignoreFriend = function ignoreFriend(request, callback) {
            return this.rpcCall(ignoreFriend, $root.CPlayer_IgnoreFriend_Request, $root.CPlayer_IgnoreFriend_Response, request, callback);
        }, "name", { value: "IgnoreFriend" });
    
        /**
         * Calls IgnoreFriend.
         * @function ignoreFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_IgnoreFriend_Request} request CPlayer_IgnoreFriend_Request message or plain object
         * @returns {Promise<CPlayer_IgnoreFriend_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getCommunityPreferences}.
         * @memberof Player
         * @typedef GetCommunityPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetCommunityPreferences_Response} [response] CPlayer_GetCommunityPreferences_Response
         */
    
        /**
         * Calls GetCommunityPreferences.
         * @function getCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetCommunityPreferences_Request} request CPlayer_GetCommunityPreferences_Request message or plain object
         * @param {Player.GetCommunityPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetCommunityPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getCommunityPreferences = function getCommunityPreferences(request, callback) {
            return this.rpcCall(getCommunityPreferences, $root.CPlayer_GetCommunityPreferences_Request, $root.CPlayer_GetCommunityPreferences_Response, request, callback);
        }, "name", { value: "GetCommunityPreferences" });
    
        /**
         * Calls GetCommunityPreferences.
         * @function getCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetCommunityPreferences_Request} request CPlayer_GetCommunityPreferences_Request message or plain object
         * @returns {Promise<CPlayer_GetCommunityPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#setCommunityPreferences}.
         * @memberof Player
         * @typedef SetCommunityPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_SetCommunityPreferences_Response} [response] CPlayer_SetCommunityPreferences_Response
         */
    
        /**
         * Calls SetCommunityPreferences.
         * @function setCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetCommunityPreferences_Request} request CPlayer_SetCommunityPreferences_Request message or plain object
         * @param {Player.SetCommunityPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_SetCommunityPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.setCommunityPreferences = function setCommunityPreferences(request, callback) {
            return this.rpcCall(setCommunityPreferences, $root.CPlayer_SetCommunityPreferences_Request, $root.CPlayer_SetCommunityPreferences_Response, request, callback);
        }, "name", { value: "SetCommunityPreferences" });
    
        /**
         * Calls SetCommunityPreferences.
         * @function setCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetCommunityPreferences_Request} request CPlayer_SetCommunityPreferences_Request message or plain object
         * @returns {Promise<CPlayer_SetCommunityPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getNewSteamAnnouncementState}.
         * @memberof Player
         * @typedef GetNewSteamAnnouncementStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetNewSteamAnnouncementState_Response} [response] CPlayer_GetNewSteamAnnouncementState_Response
         */
    
        /**
         * Calls GetNewSteamAnnouncementState.
         * @function getNewSteamAnnouncementState
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} request CPlayer_GetNewSteamAnnouncementState_Request message or plain object
         * @param {Player.GetNewSteamAnnouncementStateCallback} callback Node-style callback called with the error, if any, and CPlayer_GetNewSteamAnnouncementState_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getNewSteamAnnouncementState = function getNewSteamAnnouncementState(request, callback) {
            return this.rpcCall(getNewSteamAnnouncementState, $root.CPlayer_GetNewSteamAnnouncementState_Request, $root.CPlayer_GetNewSteamAnnouncementState_Response, request, callback);
        }, "name", { value: "GetNewSteamAnnouncementState" });
    
        /**
         * Calls GetNewSteamAnnouncementState.
         * @function getNewSteamAnnouncementState
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} request CPlayer_GetNewSteamAnnouncementState_Request message or plain object
         * @returns {Promise<CPlayer_GetNewSteamAnnouncementState_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#updateSteamAnnouncementLastRead}.
         * @memberof Player
         * @typedef UpdateSteamAnnouncementLastReadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_UpdateSteamAnnouncementLastRead_Response} [response] CPlayer_UpdateSteamAnnouncementLastRead_Response
         */
    
        /**
         * Calls UpdateSteamAnnouncementLastRead.
         * @function updateSteamAnnouncementLastRead
         * @memberof Player
         * @instance
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} request CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object
         * @param {Player.UpdateSteamAnnouncementLastReadCallback} callback Node-style callback called with the error, if any, and CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.updateSteamAnnouncementLastRead = function updateSteamAnnouncementLastRead(request, callback) {
            return this.rpcCall(updateSteamAnnouncementLastRead, $root.CPlayer_UpdateSteamAnnouncementLastRead_Request, $root.CPlayer_UpdateSteamAnnouncementLastRead_Response, request, callback);
        }, "name", { value: "UpdateSteamAnnouncementLastRead" });
    
        /**
         * Calls UpdateSteamAnnouncementLastRead.
         * @function updateSteamAnnouncementLastRead
         * @memberof Player
         * @instance
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} request CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object
         * @returns {Promise<CPlayer_UpdateSteamAnnouncementLastRead_Response>} Promise
         * @variation 2
         */
    
        return Player;
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
