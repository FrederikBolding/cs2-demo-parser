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
    
    $root.CInButtonStatePB = (function() {
    
        /**
         * Properties of a CInButtonStatePB.
         * @exports ICInButtonStatePB
         * @interface ICInButtonStatePB
         * @property {number|Long|null} [buttonstate1] CInButtonStatePB buttonstate1
         * @property {number|Long|null} [buttonstate2] CInButtonStatePB buttonstate2
         * @property {number|Long|null} [buttonstate3] CInButtonStatePB buttonstate3
         */
    
        /**
         * Constructs a new CInButtonStatePB.
         * @exports CInButtonStatePB
         * @classdesc Represents a CInButtonStatePB.
         * @implements ICInButtonStatePB
         * @constructor
         * @param {ICInButtonStatePB=} [properties] Properties to set
         */
        function CInButtonStatePB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInButtonStatePB buttonstate1.
         * @member {number|Long} buttonstate1
         * @memberof CInButtonStatePB
         * @instance
         */
        CInButtonStatePB.prototype.buttonstate1 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInButtonStatePB buttonstate2.
         * @member {number|Long} buttonstate2
         * @memberof CInButtonStatePB
         * @instance
         */
        CInButtonStatePB.prototype.buttonstate2 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInButtonStatePB buttonstate3.
         * @member {number|Long} buttonstate3
         * @memberof CInButtonStatePB
         * @instance
         */
        CInButtonStatePB.prototype.buttonstate3 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInButtonStatePB instance using the specified properties.
         * @function create
         * @memberof CInButtonStatePB
         * @static
         * @param {ICInButtonStatePB=} [properties] Properties to set
         * @returns {CInButtonStatePB} CInButtonStatePB instance
         */
        CInButtonStatePB.create = function create(properties) {
            return new CInButtonStatePB(properties);
        };
    
        /**
         * Encodes the specified CInButtonStatePB message. Does not implicitly {@link CInButtonStatePB.verify|verify} messages.
         * @function encode
         * @memberof CInButtonStatePB
         * @static
         * @param {ICInButtonStatePB} message CInButtonStatePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInButtonStatePB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buttonstate1 != null && Object.hasOwnProperty.call(message, "buttonstate1"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.buttonstate1);
            if (message.buttonstate2 != null && Object.hasOwnProperty.call(message, "buttonstate2"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.buttonstate2);
            if (message.buttonstate3 != null && Object.hasOwnProperty.call(message, "buttonstate3"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.buttonstate3);
            return writer;
        };
    
        /**
         * Encodes the specified CInButtonStatePB message, length delimited. Does not implicitly {@link CInButtonStatePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInButtonStatePB
         * @static
         * @param {ICInButtonStatePB} message CInButtonStatePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInButtonStatePB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInButtonStatePB message from the specified reader or buffer.
         * @function decode
         * @memberof CInButtonStatePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInButtonStatePB} CInButtonStatePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInButtonStatePB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInButtonStatePB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.buttonstate1 = reader.uint64();
                        break;
                    }
                case 2: {
                        message.buttonstate2 = reader.uint64();
                        break;
                    }
                case 3: {
                        message.buttonstate3 = reader.uint64();
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
         * Decodes a CInButtonStatePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInButtonStatePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInButtonStatePB} CInButtonStatePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInButtonStatePB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInButtonStatePB message.
         * @function verify
         * @memberof CInButtonStatePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInButtonStatePB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buttonstate1 != null && message.hasOwnProperty("buttonstate1"))
                if (!$util.isInteger(message.buttonstate1) && !(message.buttonstate1 && $util.isInteger(message.buttonstate1.low) && $util.isInteger(message.buttonstate1.high)))
                    return "buttonstate1: integer|Long expected";
            if (message.buttonstate2 != null && message.hasOwnProperty("buttonstate2"))
                if (!$util.isInteger(message.buttonstate2) && !(message.buttonstate2 && $util.isInteger(message.buttonstate2.low) && $util.isInteger(message.buttonstate2.high)))
                    return "buttonstate2: integer|Long expected";
            if (message.buttonstate3 != null && message.hasOwnProperty("buttonstate3"))
                if (!$util.isInteger(message.buttonstate3) && !(message.buttonstate3 && $util.isInteger(message.buttonstate3.low) && $util.isInteger(message.buttonstate3.high)))
                    return "buttonstate3: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInButtonStatePB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInButtonStatePB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInButtonStatePB} CInButtonStatePB
         */
        CInButtonStatePB.fromObject = function fromObject(object) {
            if (object instanceof $root.CInButtonStatePB)
                return object;
            var message = new $root.CInButtonStatePB();
            if (object.buttonstate1 != null)
                if ($util.Long)
                    (message.buttonstate1 = $util.Long.fromValue(object.buttonstate1)).unsigned = true;
                else if (typeof object.buttonstate1 === "string")
                    message.buttonstate1 = parseInt(object.buttonstate1, 10);
                else if (typeof object.buttonstate1 === "number")
                    message.buttonstate1 = object.buttonstate1;
                else if (typeof object.buttonstate1 === "object")
                    message.buttonstate1 = new $util.LongBits(object.buttonstate1.low >>> 0, object.buttonstate1.high >>> 0).toNumber(true);
            if (object.buttonstate2 != null)
                if ($util.Long)
                    (message.buttonstate2 = $util.Long.fromValue(object.buttonstate2)).unsigned = true;
                else if (typeof object.buttonstate2 === "string")
                    message.buttonstate2 = parseInt(object.buttonstate2, 10);
                else if (typeof object.buttonstate2 === "number")
                    message.buttonstate2 = object.buttonstate2;
                else if (typeof object.buttonstate2 === "object")
                    message.buttonstate2 = new $util.LongBits(object.buttonstate2.low >>> 0, object.buttonstate2.high >>> 0).toNumber(true);
            if (object.buttonstate3 != null)
                if ($util.Long)
                    (message.buttonstate3 = $util.Long.fromValue(object.buttonstate3)).unsigned = true;
                else if (typeof object.buttonstate3 === "string")
                    message.buttonstate3 = parseInt(object.buttonstate3, 10);
                else if (typeof object.buttonstate3 === "number")
                    message.buttonstate3 = object.buttonstate3;
                else if (typeof object.buttonstate3 === "object")
                    message.buttonstate3 = new $util.LongBits(object.buttonstate3.low >>> 0, object.buttonstate3.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CInButtonStatePB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInButtonStatePB
         * @static
         * @param {CInButtonStatePB} message CInButtonStatePB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInButtonStatePB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.buttonstate1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.buttonstate1 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.buttonstate2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.buttonstate2 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.buttonstate3 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.buttonstate3 = options.longs === String ? "0" : 0;
            }
            if (message.buttonstate1 != null && message.hasOwnProperty("buttonstate1"))
                if (typeof message.buttonstate1 === "number")
                    object.buttonstate1 = options.longs === String ? String(message.buttonstate1) : message.buttonstate1;
                else
                    object.buttonstate1 = options.longs === String ? $util.Long.prototype.toString.call(message.buttonstate1) : options.longs === Number ? new $util.LongBits(message.buttonstate1.low >>> 0, message.buttonstate1.high >>> 0).toNumber(true) : message.buttonstate1;
            if (message.buttonstate2 != null && message.hasOwnProperty("buttonstate2"))
                if (typeof message.buttonstate2 === "number")
                    object.buttonstate2 = options.longs === String ? String(message.buttonstate2) : message.buttonstate2;
                else
                    object.buttonstate2 = options.longs === String ? $util.Long.prototype.toString.call(message.buttonstate2) : options.longs === Number ? new $util.LongBits(message.buttonstate2.low >>> 0, message.buttonstate2.high >>> 0).toNumber(true) : message.buttonstate2;
            if (message.buttonstate3 != null && message.hasOwnProperty("buttonstate3"))
                if (typeof message.buttonstate3 === "number")
                    object.buttonstate3 = options.longs === String ? String(message.buttonstate3) : message.buttonstate3;
                else
                    object.buttonstate3 = options.longs === String ? $util.Long.prototype.toString.call(message.buttonstate3) : options.longs === Number ? new $util.LongBits(message.buttonstate3.low >>> 0, message.buttonstate3.high >>> 0).toNumber(true) : message.buttonstate3;
            return object;
        };
    
        /**
         * Converts this CInButtonStatePB to JSON.
         * @function toJSON
         * @memberof CInButtonStatePB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInButtonStatePB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CInButtonStatePB
         * @function getTypeUrl
         * @memberof CInButtonStatePB
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CInButtonStatePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CInButtonStatePB";
        };
    
        return CInButtonStatePB;
    })();
    
    $root.CSubtickMoveStep = (function() {
    
        /**
         * Properties of a CSubtickMoveStep.
         * @exports ICSubtickMoveStep
         * @interface ICSubtickMoveStep
         * @property {number|Long|null} [button] CSubtickMoveStep button
         * @property {boolean|null} [pressed] CSubtickMoveStep pressed
         * @property {number|null} [when] CSubtickMoveStep when
         */
    
        /**
         * Constructs a new CSubtickMoveStep.
         * @exports CSubtickMoveStep
         * @classdesc Represents a CSubtickMoveStep.
         * @implements ICSubtickMoveStep
         * @constructor
         * @param {ICSubtickMoveStep=} [properties] Properties to set
         */
        function CSubtickMoveStep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSubtickMoveStep button.
         * @member {number|Long} button
         * @memberof CSubtickMoveStep
         * @instance
         */
        CSubtickMoveStep.prototype.button = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CSubtickMoveStep pressed.
         * @member {boolean} pressed
         * @memberof CSubtickMoveStep
         * @instance
         */
        CSubtickMoveStep.prototype.pressed = false;
    
        /**
         * CSubtickMoveStep when.
         * @member {number} when
         * @memberof CSubtickMoveStep
         * @instance
         */
        CSubtickMoveStep.prototype.when = 0;
    
        /**
         * Creates a new CSubtickMoveStep instance using the specified properties.
         * @function create
         * @memberof CSubtickMoveStep
         * @static
         * @param {ICSubtickMoveStep=} [properties] Properties to set
         * @returns {CSubtickMoveStep} CSubtickMoveStep instance
         */
        CSubtickMoveStep.create = function create(properties) {
            return new CSubtickMoveStep(properties);
        };
    
        /**
         * Encodes the specified CSubtickMoveStep message. Does not implicitly {@link CSubtickMoveStep.verify|verify} messages.
         * @function encode
         * @memberof CSubtickMoveStep
         * @static
         * @param {ICSubtickMoveStep} message CSubtickMoveStep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSubtickMoveStep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.button != null && Object.hasOwnProperty.call(message, "button"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.button);
            if (message.pressed != null && Object.hasOwnProperty.call(message, "pressed"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.pressed);
            if (message.when != null && Object.hasOwnProperty.call(message, "when"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.when);
            return writer;
        };
    
        /**
         * Encodes the specified CSubtickMoveStep message, length delimited. Does not implicitly {@link CSubtickMoveStep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSubtickMoveStep
         * @static
         * @param {ICSubtickMoveStep} message CSubtickMoveStep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSubtickMoveStep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSubtickMoveStep message from the specified reader or buffer.
         * @function decode
         * @memberof CSubtickMoveStep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSubtickMoveStep} CSubtickMoveStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSubtickMoveStep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSubtickMoveStep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.button = reader.uint64();
                        break;
                    }
                case 2: {
                        message.pressed = reader.bool();
                        break;
                    }
                case 3: {
                        message.when = reader.float();
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
         * Decodes a CSubtickMoveStep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSubtickMoveStep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSubtickMoveStep} CSubtickMoveStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSubtickMoveStep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSubtickMoveStep message.
         * @function verify
         * @memberof CSubtickMoveStep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSubtickMoveStep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.button != null && message.hasOwnProperty("button"))
                if (!$util.isInteger(message.button) && !(message.button && $util.isInteger(message.button.low) && $util.isInteger(message.button.high)))
                    return "button: integer|Long expected";
            if (message.pressed != null && message.hasOwnProperty("pressed"))
                if (typeof message.pressed !== "boolean")
                    return "pressed: boolean expected";
            if (message.when != null && message.hasOwnProperty("when"))
                if (typeof message.when !== "number")
                    return "when: number expected";
            return null;
        };
    
        /**
         * Creates a CSubtickMoveStep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSubtickMoveStep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSubtickMoveStep} CSubtickMoveStep
         */
        CSubtickMoveStep.fromObject = function fromObject(object) {
            if (object instanceof $root.CSubtickMoveStep)
                return object;
            var message = new $root.CSubtickMoveStep();
            if (object.button != null)
                if ($util.Long)
                    (message.button = $util.Long.fromValue(object.button)).unsigned = true;
                else if (typeof object.button === "string")
                    message.button = parseInt(object.button, 10);
                else if (typeof object.button === "number")
                    message.button = object.button;
                else if (typeof object.button === "object")
                    message.button = new $util.LongBits(object.button.low >>> 0, object.button.high >>> 0).toNumber(true);
            if (object.pressed != null)
                message.pressed = Boolean(object.pressed);
            if (object.when != null)
                message.when = Number(object.when);
            return message;
        };
    
        /**
         * Creates a plain object from a CSubtickMoveStep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSubtickMoveStep
         * @static
         * @param {CSubtickMoveStep} message CSubtickMoveStep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSubtickMoveStep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.button = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.button = options.longs === String ? "0" : 0;
                object.pressed = false;
                object.when = 0;
            }
            if (message.button != null && message.hasOwnProperty("button"))
                if (typeof message.button === "number")
                    object.button = options.longs === String ? String(message.button) : message.button;
                else
                    object.button = options.longs === String ? $util.Long.prototype.toString.call(message.button) : options.longs === Number ? new $util.LongBits(message.button.low >>> 0, message.button.high >>> 0).toNumber(true) : message.button;
            if (message.pressed != null && message.hasOwnProperty("pressed"))
                object.pressed = message.pressed;
            if (message.when != null && message.hasOwnProperty("when"))
                object.when = options.json && !isFinite(message.when) ? String(message.when) : message.when;
            return object;
        };
    
        /**
         * Converts this CSubtickMoveStep to JSON.
         * @function toJSON
         * @memberof CSubtickMoveStep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSubtickMoveStep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSubtickMoveStep
         * @function getTypeUrl
         * @memberof CSubtickMoveStep
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSubtickMoveStep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSubtickMoveStep";
        };
    
        return CSubtickMoveStep;
    })();
    
    $root.CBaseUserCmdPB = (function() {
    
        /**
         * Properties of a CBaseUserCmdPB.
         * @exports ICBaseUserCmdPB
         * @interface ICBaseUserCmdPB
         * @property {number|null} [commandNumber] CBaseUserCmdPB commandNumber
         * @property {number|null} [tickCount] CBaseUserCmdPB tickCount
         * @property {ICInButtonStatePB|null} [buttonsPb] CBaseUserCmdPB buttonsPb
         * @property {ICMsgQAngle|null} [viewangles] CBaseUserCmdPB viewangles
         * @property {number|null} [forwardmove] CBaseUserCmdPB forwardmove
         * @property {number|null} [leftmove] CBaseUserCmdPB leftmove
         * @property {number|null} [upmove] CBaseUserCmdPB upmove
         * @property {number|null} [impulse] CBaseUserCmdPB impulse
         * @property {number|null} [weaponselect] CBaseUserCmdPB weaponselect
         * @property {number|null} [randomSeed] CBaseUserCmdPB randomSeed
         * @property {number|null} [mousedx] CBaseUserCmdPB mousedx
         * @property {number|null} [mousedy] CBaseUserCmdPB mousedy
         * @property {number|null} [pawnEntityHandle] CBaseUserCmdPB pawnEntityHandle
         * @property {Array.<ICSubtickMoveStep>|null} [subtickMoves] CBaseUserCmdPB subtickMoves
         * @property {Uint8Array|null} [moveCrc] CBaseUserCmdPB moveCrc
         * @property {number|null} [consumedServerAngleChanges] CBaseUserCmdPB consumedServerAngleChanges
         * @property {number|null} [cmdFlags] CBaseUserCmdPB cmdFlags
         */
    
        /**
         * Constructs a new CBaseUserCmdPB.
         * @exports CBaseUserCmdPB
         * @classdesc Represents a CBaseUserCmdPB.
         * @implements ICBaseUserCmdPB
         * @constructor
         * @param {ICBaseUserCmdPB=} [properties] Properties to set
         */
        function CBaseUserCmdPB(properties) {
            this.subtickMoves = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CBaseUserCmdPB commandNumber.
         * @member {number} commandNumber
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.commandNumber = 0;
    
        /**
         * CBaseUserCmdPB tickCount.
         * @member {number} tickCount
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.tickCount = 0;
    
        /**
         * CBaseUserCmdPB buttonsPb.
         * @member {ICInButtonStatePB|null|undefined} buttonsPb
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.buttonsPb = null;
    
        /**
         * CBaseUserCmdPB viewangles.
         * @member {ICMsgQAngle|null|undefined} viewangles
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.viewangles = null;
    
        /**
         * CBaseUserCmdPB forwardmove.
         * @member {number} forwardmove
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.forwardmove = 0;
    
        /**
         * CBaseUserCmdPB leftmove.
         * @member {number} leftmove
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.leftmove = 0;
    
        /**
         * CBaseUserCmdPB upmove.
         * @member {number} upmove
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.upmove = 0;
    
        /**
         * CBaseUserCmdPB impulse.
         * @member {number} impulse
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.impulse = 0;
    
        /**
         * CBaseUserCmdPB weaponselect.
         * @member {number} weaponselect
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.weaponselect = 0;
    
        /**
         * CBaseUserCmdPB randomSeed.
         * @member {number} randomSeed
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.randomSeed = 0;
    
        /**
         * CBaseUserCmdPB mousedx.
         * @member {number} mousedx
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.mousedx = 0;
    
        /**
         * CBaseUserCmdPB mousedy.
         * @member {number} mousedy
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.mousedy = 0;
    
        /**
         * CBaseUserCmdPB pawnEntityHandle.
         * @member {number} pawnEntityHandle
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.pawnEntityHandle = 16777215;
    
        /**
         * CBaseUserCmdPB subtickMoves.
         * @member {Array.<ICSubtickMoveStep>} subtickMoves
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.subtickMoves = $util.emptyArray;
    
        /**
         * CBaseUserCmdPB moveCrc.
         * @member {Uint8Array} moveCrc
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.moveCrc = $util.newBuffer([]);
    
        /**
         * CBaseUserCmdPB consumedServerAngleChanges.
         * @member {number} consumedServerAngleChanges
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.consumedServerAngleChanges = 0;
    
        /**
         * CBaseUserCmdPB cmdFlags.
         * @member {number} cmdFlags
         * @memberof CBaseUserCmdPB
         * @instance
         */
        CBaseUserCmdPB.prototype.cmdFlags = 0;
    
        /**
         * Creates a new CBaseUserCmdPB instance using the specified properties.
         * @function create
         * @memberof CBaseUserCmdPB
         * @static
         * @param {ICBaseUserCmdPB=} [properties] Properties to set
         * @returns {CBaseUserCmdPB} CBaseUserCmdPB instance
         */
        CBaseUserCmdPB.create = function create(properties) {
            return new CBaseUserCmdPB(properties);
        };
    
        /**
         * Encodes the specified CBaseUserCmdPB message. Does not implicitly {@link CBaseUserCmdPB.verify|verify} messages.
         * @function encode
         * @memberof CBaseUserCmdPB
         * @static
         * @param {ICBaseUserCmdPB} message CBaseUserCmdPB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBaseUserCmdPB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commandNumber != null && Object.hasOwnProperty.call(message, "commandNumber"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.commandNumber);
            if (message.tickCount != null && Object.hasOwnProperty.call(message, "tickCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tickCount);
            if (message.buttonsPb != null && Object.hasOwnProperty.call(message, "buttonsPb"))
                $root.CInButtonStatePB.encode(message.buttonsPb, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.viewangles != null && Object.hasOwnProperty.call(message, "viewangles"))
                $root.CMsgQAngle.encode(message.viewangles, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.forwardmove != null && Object.hasOwnProperty.call(message, "forwardmove"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.forwardmove);
            if (message.leftmove != null && Object.hasOwnProperty.call(message, "leftmove"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.leftmove);
            if (message.upmove != null && Object.hasOwnProperty.call(message, "upmove"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.upmove);
            if (message.impulse != null && Object.hasOwnProperty.call(message, "impulse"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.impulse);
            if (message.weaponselect != null && Object.hasOwnProperty.call(message, "weaponselect"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.weaponselect);
            if (message.randomSeed != null && Object.hasOwnProperty.call(message, "randomSeed"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.randomSeed);
            if (message.mousedx != null && Object.hasOwnProperty.call(message, "mousedx"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.mousedx);
            if (message.mousedy != null && Object.hasOwnProperty.call(message, "mousedy"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.mousedy);
            if (message.pawnEntityHandle != null && Object.hasOwnProperty.call(message, "pawnEntityHandle"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.pawnEntityHandle);
            if (message.subtickMoves != null && message.subtickMoves.length)
                for (var i = 0; i < message.subtickMoves.length; ++i)
                    $root.CSubtickMoveStep.encode(message.subtickMoves[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.moveCrc != null && Object.hasOwnProperty.call(message, "moveCrc"))
                writer.uint32(/* id 19, wireType 2 =*/154).bytes(message.moveCrc);
            if (message.consumedServerAngleChanges != null && Object.hasOwnProperty.call(message, "consumedServerAngleChanges"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.consumedServerAngleChanges);
            if (message.cmdFlags != null && Object.hasOwnProperty.call(message, "cmdFlags"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.cmdFlags);
            return writer;
        };
    
        /**
         * Encodes the specified CBaseUserCmdPB message, length delimited. Does not implicitly {@link CBaseUserCmdPB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CBaseUserCmdPB
         * @static
         * @param {ICBaseUserCmdPB} message CBaseUserCmdPB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBaseUserCmdPB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CBaseUserCmdPB message from the specified reader or buffer.
         * @function decode
         * @memberof CBaseUserCmdPB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CBaseUserCmdPB} CBaseUserCmdPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBaseUserCmdPB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CBaseUserCmdPB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.commandNumber = reader.int32();
                        break;
                    }
                case 2: {
                        message.tickCount = reader.int32();
                        break;
                    }
                case 3: {
                        message.buttonsPb = $root.CInButtonStatePB.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.viewangles = $root.CMsgQAngle.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.forwardmove = reader.float();
                        break;
                    }
                case 6: {
                        message.leftmove = reader.float();
                        break;
                    }
                case 7: {
                        message.upmove = reader.float();
                        break;
                    }
                case 8: {
                        message.impulse = reader.int32();
                        break;
                    }
                case 9: {
                        message.weaponselect = reader.int32();
                        break;
                    }
                case 10: {
                        message.randomSeed = reader.int32();
                        break;
                    }
                case 11: {
                        message.mousedx = reader.int32();
                        break;
                    }
                case 12: {
                        message.mousedy = reader.int32();
                        break;
                    }
                case 14: {
                        message.pawnEntityHandle = reader.uint32();
                        break;
                    }
                case 18: {
                        if (!(message.subtickMoves && message.subtickMoves.length))
                            message.subtickMoves = [];
                        message.subtickMoves.push($root.CSubtickMoveStep.decode(reader, reader.uint32()));
                        break;
                    }
                case 19: {
                        message.moveCrc = reader.bytes();
                        break;
                    }
                case 20: {
                        message.consumedServerAngleChanges = reader.uint32();
                        break;
                    }
                case 21: {
                        message.cmdFlags = reader.int32();
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
         * Decodes a CBaseUserCmdPB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CBaseUserCmdPB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CBaseUserCmdPB} CBaseUserCmdPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBaseUserCmdPB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CBaseUserCmdPB message.
         * @function verify
         * @memberof CBaseUserCmdPB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CBaseUserCmdPB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.commandNumber != null && message.hasOwnProperty("commandNumber"))
                if (!$util.isInteger(message.commandNumber))
                    return "commandNumber: integer expected";
            if (message.tickCount != null && message.hasOwnProperty("tickCount"))
                if (!$util.isInteger(message.tickCount))
                    return "tickCount: integer expected";
            if (message.buttonsPb != null && message.hasOwnProperty("buttonsPb")) {
                var error = $root.CInButtonStatePB.verify(message.buttonsPb);
                if (error)
                    return "buttonsPb." + error;
            }
            if (message.viewangles != null && message.hasOwnProperty("viewangles")) {
                var error = $root.CMsgQAngle.verify(message.viewangles);
                if (error)
                    return "viewangles." + error;
            }
            if (message.forwardmove != null && message.hasOwnProperty("forwardmove"))
                if (typeof message.forwardmove !== "number")
                    return "forwardmove: number expected";
            if (message.leftmove != null && message.hasOwnProperty("leftmove"))
                if (typeof message.leftmove !== "number")
                    return "leftmove: number expected";
            if (message.upmove != null && message.hasOwnProperty("upmove"))
                if (typeof message.upmove !== "number")
                    return "upmove: number expected";
            if (message.impulse != null && message.hasOwnProperty("impulse"))
                if (!$util.isInteger(message.impulse))
                    return "impulse: integer expected";
            if (message.weaponselect != null && message.hasOwnProperty("weaponselect"))
                if (!$util.isInteger(message.weaponselect))
                    return "weaponselect: integer expected";
            if (message.randomSeed != null && message.hasOwnProperty("randomSeed"))
                if (!$util.isInteger(message.randomSeed))
                    return "randomSeed: integer expected";
            if (message.mousedx != null && message.hasOwnProperty("mousedx"))
                if (!$util.isInteger(message.mousedx))
                    return "mousedx: integer expected";
            if (message.mousedy != null && message.hasOwnProperty("mousedy"))
                if (!$util.isInteger(message.mousedy))
                    return "mousedy: integer expected";
            if (message.pawnEntityHandle != null && message.hasOwnProperty("pawnEntityHandle"))
                if (!$util.isInteger(message.pawnEntityHandle))
                    return "pawnEntityHandle: integer expected";
            if (message.subtickMoves != null && message.hasOwnProperty("subtickMoves")) {
                if (!Array.isArray(message.subtickMoves))
                    return "subtickMoves: array expected";
                for (var i = 0; i < message.subtickMoves.length; ++i) {
                    var error = $root.CSubtickMoveStep.verify(message.subtickMoves[i]);
                    if (error)
                        return "subtickMoves." + error;
                }
            }
            if (message.moveCrc != null && message.hasOwnProperty("moveCrc"))
                if (!(message.moveCrc && typeof message.moveCrc.length === "number" || $util.isString(message.moveCrc)))
                    return "moveCrc: buffer expected";
            if (message.consumedServerAngleChanges != null && message.hasOwnProperty("consumedServerAngleChanges"))
                if (!$util.isInteger(message.consumedServerAngleChanges))
                    return "consumedServerAngleChanges: integer expected";
            if (message.cmdFlags != null && message.hasOwnProperty("cmdFlags"))
                if (!$util.isInteger(message.cmdFlags))
                    return "cmdFlags: integer expected";
            return null;
        };
    
        /**
         * Creates a CBaseUserCmdPB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CBaseUserCmdPB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CBaseUserCmdPB} CBaseUserCmdPB
         */
        CBaseUserCmdPB.fromObject = function fromObject(object) {
            if (object instanceof $root.CBaseUserCmdPB)
                return object;
            var message = new $root.CBaseUserCmdPB();
            if (object.commandNumber != null)
                message.commandNumber = object.commandNumber | 0;
            if (object.tickCount != null)
                message.tickCount = object.tickCount | 0;
            if (object.buttonsPb != null) {
                if (typeof object.buttonsPb !== "object")
                    throw TypeError(".CBaseUserCmdPB.buttonsPb: object expected");
                message.buttonsPb = $root.CInButtonStatePB.fromObject(object.buttonsPb);
            }
            if (object.viewangles != null) {
                if (typeof object.viewangles !== "object")
                    throw TypeError(".CBaseUserCmdPB.viewangles: object expected");
                message.viewangles = $root.CMsgQAngle.fromObject(object.viewangles);
            }
            if (object.forwardmove != null)
                message.forwardmove = Number(object.forwardmove);
            if (object.leftmove != null)
                message.leftmove = Number(object.leftmove);
            if (object.upmove != null)
                message.upmove = Number(object.upmove);
            if (object.impulse != null)
                message.impulse = object.impulse | 0;
            if (object.weaponselect != null)
                message.weaponselect = object.weaponselect | 0;
            if (object.randomSeed != null)
                message.randomSeed = object.randomSeed | 0;
            if (object.mousedx != null)
                message.mousedx = object.mousedx | 0;
            if (object.mousedy != null)
                message.mousedy = object.mousedy | 0;
            if (object.pawnEntityHandle != null)
                message.pawnEntityHandle = object.pawnEntityHandle >>> 0;
            if (object.subtickMoves) {
                if (!Array.isArray(object.subtickMoves))
                    throw TypeError(".CBaseUserCmdPB.subtickMoves: array expected");
                message.subtickMoves = [];
                for (var i = 0; i < object.subtickMoves.length; ++i) {
                    if (typeof object.subtickMoves[i] !== "object")
                        throw TypeError(".CBaseUserCmdPB.subtickMoves: object expected");
                    message.subtickMoves[i] = $root.CSubtickMoveStep.fromObject(object.subtickMoves[i]);
                }
            }
            if (object.moveCrc != null)
                if (typeof object.moveCrc === "string")
                    $util.base64.decode(object.moveCrc, message.moveCrc = $util.newBuffer($util.base64.length(object.moveCrc)), 0);
                else if (object.moveCrc.length >= 0)
                    message.moveCrc = object.moveCrc;
            if (object.consumedServerAngleChanges != null)
                message.consumedServerAngleChanges = object.consumedServerAngleChanges >>> 0;
            if (object.cmdFlags != null)
                message.cmdFlags = object.cmdFlags | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CBaseUserCmdPB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CBaseUserCmdPB
         * @static
         * @param {CBaseUserCmdPB} message CBaseUserCmdPB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CBaseUserCmdPB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.subtickMoves = [];
            if (options.defaults) {
                object.commandNumber = 0;
                object.tickCount = 0;
                object.buttonsPb = null;
                object.viewangles = null;
                object.forwardmove = 0;
                object.leftmove = 0;
                object.upmove = 0;
                object.impulse = 0;
                object.weaponselect = 0;
                object.randomSeed = 0;
                object.mousedx = 0;
                object.mousedy = 0;
                object.pawnEntityHandle = 16777215;
                if (options.bytes === String)
                    object.moveCrc = "";
                else {
                    object.moveCrc = [];
                    if (options.bytes !== Array)
                        object.moveCrc = $util.newBuffer(object.moveCrc);
                }
                object.consumedServerAngleChanges = 0;
                object.cmdFlags = 0;
            }
            if (message.commandNumber != null && message.hasOwnProperty("commandNumber"))
                object.commandNumber = message.commandNumber;
            if (message.tickCount != null && message.hasOwnProperty("tickCount"))
                object.tickCount = message.tickCount;
            if (message.buttonsPb != null && message.hasOwnProperty("buttonsPb"))
                object.buttonsPb = $root.CInButtonStatePB.toObject(message.buttonsPb, options);
            if (message.viewangles != null && message.hasOwnProperty("viewangles"))
                object.viewangles = $root.CMsgQAngle.toObject(message.viewangles, options);
            if (message.forwardmove != null && message.hasOwnProperty("forwardmove"))
                object.forwardmove = options.json && !isFinite(message.forwardmove) ? String(message.forwardmove) : message.forwardmove;
            if (message.leftmove != null && message.hasOwnProperty("leftmove"))
                object.leftmove = options.json && !isFinite(message.leftmove) ? String(message.leftmove) : message.leftmove;
            if (message.upmove != null && message.hasOwnProperty("upmove"))
                object.upmove = options.json && !isFinite(message.upmove) ? String(message.upmove) : message.upmove;
            if (message.impulse != null && message.hasOwnProperty("impulse"))
                object.impulse = message.impulse;
            if (message.weaponselect != null && message.hasOwnProperty("weaponselect"))
                object.weaponselect = message.weaponselect;
            if (message.randomSeed != null && message.hasOwnProperty("randomSeed"))
                object.randomSeed = message.randomSeed;
            if (message.mousedx != null && message.hasOwnProperty("mousedx"))
                object.mousedx = message.mousedx;
            if (message.mousedy != null && message.hasOwnProperty("mousedy"))
                object.mousedy = message.mousedy;
            if (message.pawnEntityHandle != null && message.hasOwnProperty("pawnEntityHandle"))
                object.pawnEntityHandle = message.pawnEntityHandle;
            if (message.subtickMoves && message.subtickMoves.length) {
                object.subtickMoves = [];
                for (var j = 0; j < message.subtickMoves.length; ++j)
                    object.subtickMoves[j] = $root.CSubtickMoveStep.toObject(message.subtickMoves[j], options);
            }
            if (message.moveCrc != null && message.hasOwnProperty("moveCrc"))
                object.moveCrc = options.bytes === String ? $util.base64.encode(message.moveCrc, 0, message.moveCrc.length) : options.bytes === Array ? Array.prototype.slice.call(message.moveCrc) : message.moveCrc;
            if (message.consumedServerAngleChanges != null && message.hasOwnProperty("consumedServerAngleChanges"))
                object.consumedServerAngleChanges = message.consumedServerAngleChanges;
            if (message.cmdFlags != null && message.hasOwnProperty("cmdFlags"))
                object.cmdFlags = message.cmdFlags;
            return object;
        };
    
        /**
         * Converts this CBaseUserCmdPB to JSON.
         * @function toJSON
         * @memberof CBaseUserCmdPB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CBaseUserCmdPB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CBaseUserCmdPB
         * @function getTypeUrl
         * @memberof CBaseUserCmdPB
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CBaseUserCmdPB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CBaseUserCmdPB";
        };
    
        return CBaseUserCmdPB;
    })();
    
    $root.CUserCmdBasePB = (function() {
    
        /**
         * Properties of a CUserCmdBasePB.
         * @exports ICUserCmdBasePB
         * @interface ICUserCmdBasePB
         * @property {ICBaseUserCmdPB|null} [base] CUserCmdBasePB base
         */
    
        /**
         * Constructs a new CUserCmdBasePB.
         * @exports CUserCmdBasePB
         * @classdesc Represents a CUserCmdBasePB.
         * @implements ICUserCmdBasePB
         * @constructor
         * @param {ICUserCmdBasePB=} [properties] Properties to set
         */
        function CUserCmdBasePB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserCmdBasePB base.
         * @member {ICBaseUserCmdPB|null|undefined} base
         * @memberof CUserCmdBasePB
         * @instance
         */
        CUserCmdBasePB.prototype.base = null;
    
        /**
         * Creates a new CUserCmdBasePB instance using the specified properties.
         * @function create
         * @memberof CUserCmdBasePB
         * @static
         * @param {ICUserCmdBasePB=} [properties] Properties to set
         * @returns {CUserCmdBasePB} CUserCmdBasePB instance
         */
        CUserCmdBasePB.create = function create(properties) {
            return new CUserCmdBasePB(properties);
        };
    
        /**
         * Encodes the specified CUserCmdBasePB message. Does not implicitly {@link CUserCmdBasePB.verify|verify} messages.
         * @function encode
         * @memberof CUserCmdBasePB
         * @static
         * @param {ICUserCmdBasePB} message CUserCmdBasePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserCmdBasePB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.CBaseUserCmdPB.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CUserCmdBasePB message, length delimited. Does not implicitly {@link CUserCmdBasePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserCmdBasePB
         * @static
         * @param {ICUserCmdBasePB} message CUserCmdBasePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserCmdBasePB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserCmdBasePB message from the specified reader or buffer.
         * @function decode
         * @memberof CUserCmdBasePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserCmdBasePB} CUserCmdBasePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserCmdBasePB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserCmdBasePB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.CBaseUserCmdPB.decode(reader, reader.uint32());
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
         * Decodes a CUserCmdBasePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserCmdBasePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserCmdBasePB} CUserCmdBasePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserCmdBasePB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserCmdBasePB message.
         * @function verify
         * @memberof CUserCmdBasePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserCmdBasePB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                var error = $root.CBaseUserCmdPB.verify(message.base);
                if (error)
                    return "base." + error;
            }
            return null;
        };
    
        /**
         * Creates a CUserCmdBasePB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserCmdBasePB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserCmdBasePB} CUserCmdBasePB
         */
        CUserCmdBasePB.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserCmdBasePB)
                return object;
            var message = new $root.CUserCmdBasePB();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".CUserCmdBasePB.base: object expected");
                message.base = $root.CBaseUserCmdPB.fromObject(object.base);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CUserCmdBasePB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserCmdBasePB
         * @static
         * @param {CUserCmdBasePB} message CUserCmdBasePB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserCmdBasePB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.CBaseUserCmdPB.toObject(message.base, options);
            return object;
        };
    
        /**
         * Converts this CUserCmdBasePB to JSON.
         * @function toJSON
         * @memberof CUserCmdBasePB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserCmdBasePB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CUserCmdBasePB
         * @function getTypeUrl
         * @memberof CUserCmdBasePB
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CUserCmdBasePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CUserCmdBasePB";
        };
    
        return CUserCmdBasePB;
    })();
    
    /**
     * SignonState_t enum.
     * @exports SignonState_t
     * @enum {number}
     * @property {number} SIGNONSTATE_NONE=0 SIGNONSTATE_NONE value
     * @property {number} SIGNONSTATE_CHALLENGE=1 SIGNONSTATE_CHALLENGE value
     * @property {number} SIGNONSTATE_CONNECTED=2 SIGNONSTATE_CONNECTED value
     * @property {number} SIGNONSTATE_NEW=3 SIGNONSTATE_NEW value
     * @property {number} SIGNONSTATE_PRESPAWN=4 SIGNONSTATE_PRESPAWN value
     * @property {number} SIGNONSTATE_SPAWN=5 SIGNONSTATE_SPAWN value
     * @property {number} SIGNONSTATE_FULL=6 SIGNONSTATE_FULL value
     * @property {number} SIGNONSTATE_CHANGELEVEL=7 SIGNONSTATE_CHANGELEVEL value
     */
    $root.SignonState_t = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SIGNONSTATE_NONE"] = 0;
        values[valuesById[1] = "SIGNONSTATE_CHALLENGE"] = 1;
        values[valuesById[2] = "SIGNONSTATE_CONNECTED"] = 2;
        values[valuesById[3] = "SIGNONSTATE_NEW"] = 3;
        values[valuesById[4] = "SIGNONSTATE_PRESPAWN"] = 4;
        values[valuesById[5] = "SIGNONSTATE_SPAWN"] = 5;
        values[valuesById[6] = "SIGNONSTATE_FULL"] = 6;
        values[valuesById[7] = "SIGNONSTATE_CHANGELEVEL"] = 7;
        return values;
    })();
    
    /**
     * NET_Messages enum.
     * @exports NET_Messages
     * @enum {number}
     * @property {number} net_NOP=0 net_NOP value
     * @property {number} net_Disconnect=1 net_Disconnect value
     * @property {number} net_SplitScreenUser=3 net_SplitScreenUser value
     * @property {number} net_Tick=4 net_Tick value
     * @property {number} net_StringCmd=5 net_StringCmd value
     * @property {number} net_SetConVar=6 net_SetConVar value
     * @property {number} net_SignonState=7 net_SignonState value
     * @property {number} net_SpawnGroup_Load=8 net_SpawnGroup_Load value
     * @property {number} net_SpawnGroup_ManifestUpdate=9 net_SpawnGroup_ManifestUpdate value
     * @property {number} net_SpawnGroup_SetCreationTick=11 net_SpawnGroup_SetCreationTick value
     * @property {number} net_SpawnGroup_Unload=12 net_SpawnGroup_Unload value
     * @property {number} net_SpawnGroup_LoadCompleted=13 net_SpawnGroup_LoadCompleted value
     * @property {number} net_DebugOverlay=15 net_DebugOverlay value
     */
    $root.NET_Messages = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "net_NOP"] = 0;
        values[valuesById[1] = "net_Disconnect"] = 1;
        values[valuesById[3] = "net_SplitScreenUser"] = 3;
        values[valuesById[4] = "net_Tick"] = 4;
        values[valuesById[5] = "net_StringCmd"] = 5;
        values[valuesById[6] = "net_SetConVar"] = 6;
        values[valuesById[7] = "net_SignonState"] = 7;
        values[valuesById[8] = "net_SpawnGroup_Load"] = 8;
        values[valuesById[9] = "net_SpawnGroup_ManifestUpdate"] = 9;
        values[valuesById[11] = "net_SpawnGroup_SetCreationTick"] = 11;
        values[valuesById[12] = "net_SpawnGroup_Unload"] = 12;
        values[valuesById[13] = "net_SpawnGroup_LoadCompleted"] = 13;
        values[valuesById[15] = "net_DebugOverlay"] = 15;
        return values;
    })();
    
    /**
     * SpawnGroupFlags_t enum.
     * @exports SpawnGroupFlags_t
     * @enum {number}
     * @property {number} SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE=1 SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE value
     * @property {number} SPAWN_GROUP_DONT_SPAWN_ENTITIES=2 SPAWN_GROUP_DONT_SPAWN_ENTITIES value
     * @property {number} SPAWN_GROUP_SYNCHRONOUS_SPAWN=4 SPAWN_GROUP_SYNCHRONOUS_SPAWN value
     * @property {number} SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP=8 SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP value
     * @property {number} SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES=16 SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES value
     * @property {number} SPAWN_GROUP_BLOCK_UNTIL_LOADED=64 SPAWN_GROUP_BLOCK_UNTIL_LOADED value
     * @property {number} SPAWN_GROUP_LOAD_STREAMING_DATA=128 SPAWN_GROUP_LOAD_STREAMING_DATA value
     * @property {number} SPAWN_GROUP_CREATE_NEW_SCENE_WORLD=256 SPAWN_GROUP_CREATE_NEW_SCENE_WORLD value
     */
    $root.SpawnGroupFlags_t = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE"] = 1;
        values[valuesById[2] = "SPAWN_GROUP_DONT_SPAWN_ENTITIES"] = 2;
        values[valuesById[4] = "SPAWN_GROUP_SYNCHRONOUS_SPAWN"] = 4;
        values[valuesById[8] = "SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP"] = 8;
        values[valuesById[16] = "SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES"] = 16;
        values[valuesById[64] = "SPAWN_GROUP_BLOCK_UNTIL_LOADED"] = 64;
        values[valuesById[128] = "SPAWN_GROUP_LOAD_STREAMING_DATA"] = 128;
        values[valuesById[256] = "SPAWN_GROUP_CREATE_NEW_SCENE_WORLD"] = 256;
        return values;
    })();
    
    $root.CMsgVector = (function() {
    
        /**
         * Properties of a CMsgVector.
         * @exports ICMsgVector
         * @interface ICMsgVector
         * @property {number|null} [x] CMsgVector x
         * @property {number|null} [y] CMsgVector y
         * @property {number|null} [z] CMsgVector z
         * @property {number|null} [w] CMsgVector w
         */
    
        /**
         * Constructs a new CMsgVector.
         * @exports CMsgVector
         * @classdesc Represents a CMsgVector.
         * @implements ICMsgVector
         * @constructor
         * @param {ICMsgVector=} [properties] Properties to set
         */
        function CMsgVector(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgVector x.
         * @member {number} x
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.x = 0;
    
        /**
         * CMsgVector y.
         * @member {number} y
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.y = 0;
    
        /**
         * CMsgVector z.
         * @member {number} z
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.z = 0;
    
        /**
         * CMsgVector w.
         * @member {number} w
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.w = 0;
    
        /**
         * Creates a new CMsgVector instance using the specified properties.
         * @function create
         * @memberof CMsgVector
         * @static
         * @param {ICMsgVector=} [properties] Properties to set
         * @returns {CMsgVector} CMsgVector instance
         */
        CMsgVector.create = function create(properties) {
            return new CMsgVector(properties);
        };
    
        /**
         * Encodes the specified CMsgVector message. Does not implicitly {@link CMsgVector.verify|verify} messages.
         * @function encode
         * @memberof CMsgVector
         * @static
         * @param {ICMsgVector} message CMsgVector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.w);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgVector message, length delimited. Does not implicitly {@link CMsgVector.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgVector
         * @static
         * @param {ICMsgVector} message CMsgVector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgVector message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgVector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgVector} CMsgVector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVector();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                case 4: {
                        message.w = reader.float();
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
         * Decodes a CMsgVector message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgVector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgVector} CMsgVector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgVector message.
         * @function verify
         * @memberof CMsgVector
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgVector.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgVector message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgVector
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgVector} CMsgVector
         */
        CMsgVector.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgVector)
                return object;
            var message = new $root.CMsgVector();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.w != null)
                message.w = Number(object.w);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgVector message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgVector
         * @static
         * @param {CMsgVector} message CMsgVector
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgVector.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.w = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            return object;
        };
    
        /**
         * Converts this CMsgVector to JSON.
         * @function toJSON
         * @memberof CMsgVector
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgVector.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgVector
         * @function getTypeUrl
         * @memberof CMsgVector
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgVector.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgVector";
        };
    
        return CMsgVector;
    })();
    
    $root.CMsgVector2D = (function() {
    
        /**
         * Properties of a CMsgVector2D.
         * @exports ICMsgVector2D
         * @interface ICMsgVector2D
         * @property {number|null} [x] CMsgVector2D x
         * @property {number|null} [y] CMsgVector2D y
         */
    
        /**
         * Constructs a new CMsgVector2D.
         * @exports CMsgVector2D
         * @classdesc Represents a CMsgVector2D.
         * @implements ICMsgVector2D
         * @constructor
         * @param {ICMsgVector2D=} [properties] Properties to set
         */
        function CMsgVector2D(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgVector2D x.
         * @member {number} x
         * @memberof CMsgVector2D
         * @instance
         */
        CMsgVector2D.prototype.x = 0;
    
        /**
         * CMsgVector2D y.
         * @member {number} y
         * @memberof CMsgVector2D
         * @instance
         */
        CMsgVector2D.prototype.y = 0;
    
        /**
         * Creates a new CMsgVector2D instance using the specified properties.
         * @function create
         * @memberof CMsgVector2D
         * @static
         * @param {ICMsgVector2D=} [properties] Properties to set
         * @returns {CMsgVector2D} CMsgVector2D instance
         */
        CMsgVector2D.create = function create(properties) {
            return new CMsgVector2D(properties);
        };
    
        /**
         * Encodes the specified CMsgVector2D message. Does not implicitly {@link CMsgVector2D.verify|verify} messages.
         * @function encode
         * @memberof CMsgVector2D
         * @static
         * @param {ICMsgVector2D} message CMsgVector2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector2D.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgVector2D message, length delimited. Does not implicitly {@link CMsgVector2D.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgVector2D
         * @static
         * @param {ICMsgVector2D} message CMsgVector2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector2D.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgVector2D message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgVector2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgVector2D} CMsgVector2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector2D.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVector2D();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
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
         * Decodes a CMsgVector2D message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgVector2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgVector2D} CMsgVector2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector2D.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgVector2D message.
         * @function verify
         * @memberof CMsgVector2D
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgVector2D.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgVector2D message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgVector2D
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgVector2D} CMsgVector2D
         */
        CMsgVector2D.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgVector2D)
                return object;
            var message = new $root.CMsgVector2D();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgVector2D message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgVector2D
         * @static
         * @param {CMsgVector2D} message CMsgVector2D
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgVector2D.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };
    
        /**
         * Converts this CMsgVector2D to JSON.
         * @function toJSON
         * @memberof CMsgVector2D
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgVector2D.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgVector2D
         * @function getTypeUrl
         * @memberof CMsgVector2D
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgVector2D.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgVector2D";
        };
    
        return CMsgVector2D;
    })();
    
    $root.CMsgQAngle = (function() {
    
        /**
         * Properties of a CMsgQAngle.
         * @exports ICMsgQAngle
         * @interface ICMsgQAngle
         * @property {number|null} [x] CMsgQAngle x
         * @property {number|null} [y] CMsgQAngle y
         * @property {number|null} [z] CMsgQAngle z
         */
    
        /**
         * Constructs a new CMsgQAngle.
         * @exports CMsgQAngle
         * @classdesc Represents a CMsgQAngle.
         * @implements ICMsgQAngle
         * @constructor
         * @param {ICMsgQAngle=} [properties] Properties to set
         */
        function CMsgQAngle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgQAngle x.
         * @member {number} x
         * @memberof CMsgQAngle
         * @instance
         */
        CMsgQAngle.prototype.x = 0;
    
        /**
         * CMsgQAngle y.
         * @member {number} y
         * @memberof CMsgQAngle
         * @instance
         */
        CMsgQAngle.prototype.y = 0;
    
        /**
         * CMsgQAngle z.
         * @member {number} z
         * @memberof CMsgQAngle
         * @instance
         */
        CMsgQAngle.prototype.z = 0;
    
        /**
         * Creates a new CMsgQAngle instance using the specified properties.
         * @function create
         * @memberof CMsgQAngle
         * @static
         * @param {ICMsgQAngle=} [properties] Properties to set
         * @returns {CMsgQAngle} CMsgQAngle instance
         */
        CMsgQAngle.create = function create(properties) {
            return new CMsgQAngle(properties);
        };
    
        /**
         * Encodes the specified CMsgQAngle message. Does not implicitly {@link CMsgQAngle.verify|verify} messages.
         * @function encode
         * @memberof CMsgQAngle
         * @static
         * @param {ICMsgQAngle} message CMsgQAngle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQAngle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgQAngle message, length delimited. Does not implicitly {@link CMsgQAngle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgQAngle
         * @static
         * @param {ICMsgQAngle} message CMsgQAngle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQAngle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgQAngle message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgQAngle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgQAngle} CMsgQAngle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQAngle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgQAngle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
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
         * Decodes a CMsgQAngle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgQAngle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgQAngle} CMsgQAngle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQAngle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgQAngle message.
         * @function verify
         * @memberof CMsgQAngle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgQAngle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgQAngle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgQAngle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgQAngle} CMsgQAngle
         */
        CMsgQAngle.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgQAngle)
                return object;
            var message = new $root.CMsgQAngle();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgQAngle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgQAngle
         * @static
         * @param {CMsgQAngle} message CMsgQAngle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgQAngle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this CMsgQAngle to JSON.
         * @function toJSON
         * @memberof CMsgQAngle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgQAngle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgQAngle
         * @function getTypeUrl
         * @memberof CMsgQAngle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgQAngle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgQAngle";
        };
    
        return CMsgQAngle;
    })();
    
    $root.CMsgQuaternion = (function() {
    
        /**
         * Properties of a CMsgQuaternion.
         * @exports ICMsgQuaternion
         * @interface ICMsgQuaternion
         * @property {number|null} [x] CMsgQuaternion x
         * @property {number|null} [y] CMsgQuaternion y
         * @property {number|null} [z] CMsgQuaternion z
         * @property {number|null} [w] CMsgQuaternion w
         */
    
        /**
         * Constructs a new CMsgQuaternion.
         * @exports CMsgQuaternion
         * @classdesc Represents a CMsgQuaternion.
         * @implements ICMsgQuaternion
         * @constructor
         * @param {ICMsgQuaternion=} [properties] Properties to set
         */
        function CMsgQuaternion(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgQuaternion x.
         * @member {number} x
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.x = 0;
    
        /**
         * CMsgQuaternion y.
         * @member {number} y
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.y = 0;
    
        /**
         * CMsgQuaternion z.
         * @member {number} z
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.z = 0;
    
        /**
         * CMsgQuaternion w.
         * @member {number} w
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.w = 0;
    
        /**
         * Creates a new CMsgQuaternion instance using the specified properties.
         * @function create
         * @memberof CMsgQuaternion
         * @static
         * @param {ICMsgQuaternion=} [properties] Properties to set
         * @returns {CMsgQuaternion} CMsgQuaternion instance
         */
        CMsgQuaternion.create = function create(properties) {
            return new CMsgQuaternion(properties);
        };
    
        /**
         * Encodes the specified CMsgQuaternion message. Does not implicitly {@link CMsgQuaternion.verify|verify} messages.
         * @function encode
         * @memberof CMsgQuaternion
         * @static
         * @param {ICMsgQuaternion} message CMsgQuaternion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQuaternion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.w);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgQuaternion message, length delimited. Does not implicitly {@link CMsgQuaternion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgQuaternion
         * @static
         * @param {ICMsgQuaternion} message CMsgQuaternion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQuaternion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgQuaternion message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgQuaternion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgQuaternion} CMsgQuaternion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQuaternion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgQuaternion();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                case 4: {
                        message.w = reader.float();
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
         * Decodes a CMsgQuaternion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgQuaternion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgQuaternion} CMsgQuaternion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQuaternion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgQuaternion message.
         * @function verify
         * @memberof CMsgQuaternion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgQuaternion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgQuaternion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgQuaternion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgQuaternion} CMsgQuaternion
         */
        CMsgQuaternion.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgQuaternion)
                return object;
            var message = new $root.CMsgQuaternion();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.w != null)
                message.w = Number(object.w);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgQuaternion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgQuaternion
         * @static
         * @param {CMsgQuaternion} message CMsgQuaternion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgQuaternion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.w = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            return object;
        };
    
        /**
         * Converts this CMsgQuaternion to JSON.
         * @function toJSON
         * @memberof CMsgQuaternion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgQuaternion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgQuaternion
         * @function getTypeUrl
         * @memberof CMsgQuaternion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgQuaternion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgQuaternion";
        };
    
        return CMsgQuaternion;
    })();
    
    $root.CMsgTransform = (function() {
    
        /**
         * Properties of a CMsgTransform.
         * @exports ICMsgTransform
         * @interface ICMsgTransform
         * @property {ICMsgVector|null} [position] CMsgTransform position
         * @property {number|null} [scale] CMsgTransform scale
         * @property {ICMsgQuaternion|null} [orientation] CMsgTransform orientation
         */
    
        /**
         * Constructs a new CMsgTransform.
         * @exports CMsgTransform
         * @classdesc Represents a CMsgTransform.
         * @implements ICMsgTransform
         * @constructor
         * @param {ICMsgTransform=} [properties] Properties to set
         */
        function CMsgTransform(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgTransform position.
         * @member {ICMsgVector|null|undefined} position
         * @memberof CMsgTransform
         * @instance
         */
        CMsgTransform.prototype.position = null;
    
        /**
         * CMsgTransform scale.
         * @member {number} scale
         * @memberof CMsgTransform
         * @instance
         */
        CMsgTransform.prototype.scale = 0;
    
        /**
         * CMsgTransform orientation.
         * @member {ICMsgQuaternion|null|undefined} orientation
         * @memberof CMsgTransform
         * @instance
         */
        CMsgTransform.prototype.orientation = null;
    
        /**
         * Creates a new CMsgTransform instance using the specified properties.
         * @function create
         * @memberof CMsgTransform
         * @static
         * @param {ICMsgTransform=} [properties] Properties to set
         * @returns {CMsgTransform} CMsgTransform instance
         */
        CMsgTransform.create = function create(properties) {
            return new CMsgTransform(properties);
        };
    
        /**
         * Encodes the specified CMsgTransform message. Does not implicitly {@link CMsgTransform.verify|verify} messages.
         * @function encode
         * @memberof CMsgTransform
         * @static
         * @param {ICMsgTransform} message CMsgTransform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgTransform.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.CMsgVector.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.scale);
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                $root.CMsgQuaternion.encode(message.orientation, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgTransform message, length delimited. Does not implicitly {@link CMsgTransform.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgTransform
         * @static
         * @param {ICMsgTransform} message CMsgTransform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgTransform.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgTransform message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgTransform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgTransform} CMsgTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgTransform.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgTransform();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.position = $root.CMsgVector.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.scale = reader.float();
                        break;
                    }
                case 3: {
                        message.orientation = $root.CMsgQuaternion.decode(reader, reader.uint32());
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
         * Decodes a CMsgTransform message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgTransform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgTransform} CMsgTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgTransform.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgTransform message.
         * @function verify
         * @memberof CMsgTransform
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgTransform.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                var error = $root.CMsgVector.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.scale != null && message.hasOwnProperty("scale"))
                if (typeof message.scale !== "number")
                    return "scale: number expected";
            if (message.orientation != null && message.hasOwnProperty("orientation")) {
                var error = $root.CMsgQuaternion.verify(message.orientation);
                if (error)
                    return "orientation." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgTransform message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgTransform
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgTransform} CMsgTransform
         */
        CMsgTransform.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgTransform)
                return object;
            var message = new $root.CMsgTransform();
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".CMsgTransform.position: object expected");
                message.position = $root.CMsgVector.fromObject(object.position);
            }
            if (object.scale != null)
                message.scale = Number(object.scale);
            if (object.orientation != null) {
                if (typeof object.orientation !== "object")
                    throw TypeError(".CMsgTransform.orientation: object expected");
                message.orientation = $root.CMsgQuaternion.fromObject(object.orientation);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgTransform message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgTransform
         * @static
         * @param {CMsgTransform} message CMsgTransform
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgTransform.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.position = null;
                object.scale = 0;
                object.orientation = null;
            }
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.CMsgVector.toObject(message.position, options);
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = $root.CMsgQuaternion.toObject(message.orientation, options);
            return object;
        };
    
        /**
         * Converts this CMsgTransform to JSON.
         * @function toJSON
         * @memberof CMsgTransform
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgTransform.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgTransform
         * @function getTypeUrl
         * @memberof CMsgTransform
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgTransform.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgTransform";
        };
    
        return CMsgTransform;
    })();
    
    $root.CMsgRGBA = (function() {
    
        /**
         * Properties of a CMsgRGBA.
         * @exports ICMsgRGBA
         * @interface ICMsgRGBA
         * @property {number|null} [r] CMsgRGBA r
         * @property {number|null} [g] CMsgRGBA g
         * @property {number|null} [b] CMsgRGBA b
         * @property {number|null} [a] CMsgRGBA a
         */
    
        /**
         * Constructs a new CMsgRGBA.
         * @exports CMsgRGBA
         * @classdesc Represents a CMsgRGBA.
         * @implements ICMsgRGBA
         * @constructor
         * @param {ICMsgRGBA=} [properties] Properties to set
         */
        function CMsgRGBA(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRGBA r.
         * @member {number} r
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.r = 0;
    
        /**
         * CMsgRGBA g.
         * @member {number} g
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.g = 0;
    
        /**
         * CMsgRGBA b.
         * @member {number} b
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.b = 0;
    
        /**
         * CMsgRGBA a.
         * @member {number} a
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.a = 0;
    
        /**
         * Creates a new CMsgRGBA instance using the specified properties.
         * @function create
         * @memberof CMsgRGBA
         * @static
         * @param {ICMsgRGBA=} [properties] Properties to set
         * @returns {CMsgRGBA} CMsgRGBA instance
         */
        CMsgRGBA.create = function create(properties) {
            return new CMsgRGBA(properties);
        };
    
        /**
         * Encodes the specified CMsgRGBA message. Does not implicitly {@link CMsgRGBA.verify|verify} messages.
         * @function encode
         * @memberof CMsgRGBA
         * @static
         * @param {ICMsgRGBA} message CMsgRGBA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRGBA.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.r != null && Object.hasOwnProperty.call(message, "r"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.r);
            if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.g);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.b);
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.a);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRGBA message, length delimited. Does not implicitly {@link CMsgRGBA.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRGBA
         * @static
         * @param {ICMsgRGBA} message CMsgRGBA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRGBA.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRGBA message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRGBA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRGBA} CMsgRGBA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRGBA.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRGBA();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.r = reader.int32();
                        break;
                    }
                case 2: {
                        message.g = reader.int32();
                        break;
                    }
                case 3: {
                        message.b = reader.int32();
                        break;
                    }
                case 4: {
                        message.a = reader.int32();
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
         * Decodes a CMsgRGBA message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRGBA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRGBA} CMsgRGBA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRGBA.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRGBA message.
         * @function verify
         * @memberof CMsgRGBA
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRGBA.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.r != null && message.hasOwnProperty("r"))
                if (!$util.isInteger(message.r))
                    return "r: integer expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (!$util.isInteger(message.g))
                    return "g: integer expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b))
                    return "b: integer expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isInteger(message.a))
                    return "a: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRGBA message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRGBA
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRGBA} CMsgRGBA
         */
        CMsgRGBA.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRGBA)
                return object;
            var message = new $root.CMsgRGBA();
            if (object.r != null)
                message.r = object.r | 0;
            if (object.g != null)
                message.g = object.g | 0;
            if (object.b != null)
                message.b = object.b | 0;
            if (object.a != null)
                message.a = object.a | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRGBA message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRGBA
         * @static
         * @param {CMsgRGBA} message CMsgRGBA
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRGBA.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.r = 0;
                object.g = 0;
                object.b = 0;
                object.a = 0;
            }
            if (message.r != null && message.hasOwnProperty("r"))
                object.r = message.r;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = message.g;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            return object;
        };
    
        /**
         * Converts this CMsgRGBA to JSON.
         * @function toJSON
         * @memberof CMsgRGBA
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRGBA.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgRGBA
         * @function getTypeUrl
         * @memberof CMsgRGBA
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgRGBA.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgRGBA";
        };
    
        return CMsgRGBA;
    })();
    
    $root.CMsgPlayerInfo = (function() {
    
        /**
         * Properties of a CMsgPlayerInfo.
         * @exports ICMsgPlayerInfo
         * @interface ICMsgPlayerInfo
         * @property {string|null} [name] CMsgPlayerInfo name
         * @property {number|Long|null} [xuid] CMsgPlayerInfo xuid
         * @property {number|null} [userid] CMsgPlayerInfo userid
         * @property {number|Long|null} [steamid] CMsgPlayerInfo steamid
         * @property {boolean|null} [fakeplayer] CMsgPlayerInfo fakeplayer
         * @property {boolean|null} [ishltv] CMsgPlayerInfo ishltv
         */
    
        /**
         * Constructs a new CMsgPlayerInfo.
         * @exports CMsgPlayerInfo
         * @classdesc Represents a CMsgPlayerInfo.
         * @implements ICMsgPlayerInfo
         * @constructor
         * @param {ICMsgPlayerInfo=} [properties] Properties to set
         */
        function CMsgPlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPlayerInfo name.
         * @member {string} name
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.name = "";
    
        /**
         * CMsgPlayerInfo xuid.
         * @member {number|Long} xuid
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.xuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgPlayerInfo userid.
         * @member {number} userid
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.userid = 0;
    
        /**
         * CMsgPlayerInfo steamid.
         * @member {number|Long} steamid
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgPlayerInfo fakeplayer.
         * @member {boolean} fakeplayer
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.fakeplayer = false;
    
        /**
         * CMsgPlayerInfo ishltv.
         * @member {boolean} ishltv
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.ishltv = false;
    
        /**
         * Creates a new CMsgPlayerInfo instance using the specified properties.
         * @function create
         * @memberof CMsgPlayerInfo
         * @static
         * @param {ICMsgPlayerInfo=} [properties] Properties to set
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo instance
         */
        CMsgPlayerInfo.create = function create(properties) {
            return new CMsgPlayerInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgPlayerInfo message. Does not implicitly {@link CMsgPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgPlayerInfo
         * @static
         * @param {ICMsgPlayerInfo} message CMsgPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.xuid != null && Object.hasOwnProperty.call(message, "xuid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.xuid);
            if (message.userid != null && Object.hasOwnProperty.call(message, "userid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userid);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.steamid);
            if (message.fakeplayer != null && Object.hasOwnProperty.call(message, "fakeplayer"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.fakeplayer);
            if (message.ishltv != null && Object.hasOwnProperty.call(message, "ishltv"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ishltv);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPlayerInfo message, length delimited. Does not implicitly {@link CMsgPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPlayerInfo
         * @static
         * @param {ICMsgPlayerInfo} message CMsgPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.xuid = reader.fixed64();
                        break;
                    }
                case 3: {
                        message.userid = reader.int32();
                        break;
                    }
                case 4: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 5: {
                        message.fakeplayer = reader.bool();
                        break;
                    }
                case 6: {
                        message.ishltv = reader.bool();
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
         * Decodes a CMsgPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPlayerInfo message.
         * @function verify
         * @memberof CMsgPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.xuid != null && message.hasOwnProperty("xuid"))
                if (!$util.isInteger(message.xuid) && !(message.xuid && $util.isInteger(message.xuid.low) && $util.isInteger(message.xuid.high)))
                    return "xuid: integer|Long expected";
            if (message.userid != null && message.hasOwnProperty("userid"))
                if (!$util.isInteger(message.userid))
                    return "userid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.fakeplayer != null && message.hasOwnProperty("fakeplayer"))
                if (typeof message.fakeplayer !== "boolean")
                    return "fakeplayer: boolean expected";
            if (message.ishltv != null && message.hasOwnProperty("ishltv"))
                if (typeof message.ishltv !== "boolean")
                    return "ishltv: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo
         */
        CMsgPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPlayerInfo)
                return object;
            var message = new $root.CMsgPlayerInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.xuid != null)
                if ($util.Long)
                    (message.xuid = $util.Long.fromValue(object.xuid)).unsigned = false;
                else if (typeof object.xuid === "string")
                    message.xuid = parseInt(object.xuid, 10);
                else if (typeof object.xuid === "number")
                    message.xuid = object.xuid;
                else if (typeof object.xuid === "object")
                    message.xuid = new $util.LongBits(object.xuid.low >>> 0, object.xuid.high >>> 0).toNumber();
            if (object.userid != null)
                message.userid = object.userid | 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.fakeplayer != null)
                message.fakeplayer = Boolean(object.fakeplayer);
            if (object.ishltv != null)
                message.ishltv = Boolean(object.ishltv);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPlayerInfo
         * @static
         * @param {CMsgPlayerInfo} message CMsgPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.xuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.xuid = options.longs === String ? "0" : 0;
                object.userid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.fakeplayer = false;
                object.ishltv = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.xuid != null && message.hasOwnProperty("xuid"))
                if (typeof message.xuid === "number")
                    object.xuid = options.longs === String ? String(message.xuid) : message.xuid;
                else
                    object.xuid = options.longs === String ? $util.Long.prototype.toString.call(message.xuid) : options.longs === Number ? new $util.LongBits(message.xuid.low >>> 0, message.xuid.high >>> 0).toNumber() : message.xuid;
            if (message.userid != null && message.hasOwnProperty("userid"))
                object.userid = message.userid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.fakeplayer != null && message.hasOwnProperty("fakeplayer"))
                object.fakeplayer = message.fakeplayer;
            if (message.ishltv != null && message.hasOwnProperty("ishltv"))
                object.ishltv = message.ishltv;
            return object;
        };
    
        /**
         * Converts this CMsgPlayerInfo to JSON.
         * @function toJSON
         * @memberof CMsgPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgPlayerInfo
         * @function getTypeUrl
         * @memberof CMsgPlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgPlayerInfo";
        };
    
        return CMsgPlayerInfo;
    })();
    
    $root.CEntityMsg = (function() {
    
        /**
         * Properties of a CEntityMsg.
         * @exports ICEntityMsg
         * @interface ICEntityMsg
         * @property {number|null} [targetEntity] CEntityMsg targetEntity
         */
    
        /**
         * Constructs a new CEntityMsg.
         * @exports CEntityMsg
         * @classdesc Represents a CEntityMsg.
         * @implements ICEntityMsg
         * @constructor
         * @param {ICEntityMsg=} [properties] Properties to set
         */
        function CEntityMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CEntityMsg targetEntity.
         * @member {number} targetEntity
         * @memberof CEntityMsg
         * @instance
         */
        CEntityMsg.prototype.targetEntity = 16777215;
    
        /**
         * Creates a new CEntityMsg instance using the specified properties.
         * @function create
         * @memberof CEntityMsg
         * @static
         * @param {ICEntityMsg=} [properties] Properties to set
         * @returns {CEntityMsg} CEntityMsg instance
         */
        CEntityMsg.create = function create(properties) {
            return new CEntityMsg(properties);
        };
    
        /**
         * Encodes the specified CEntityMsg message. Does not implicitly {@link CEntityMsg.verify|verify} messages.
         * @function encode
         * @memberof CEntityMsg
         * @static
         * @param {ICEntityMsg} message CEntityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEntityMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetEntity != null && Object.hasOwnProperty.call(message, "targetEntity"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.targetEntity);
            return writer;
        };
    
        /**
         * Encodes the specified CEntityMsg message, length delimited. Does not implicitly {@link CEntityMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CEntityMsg
         * @static
         * @param {ICEntityMsg} message CEntityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEntityMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CEntityMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CEntityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CEntityMsg} CEntityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEntityMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CEntityMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.targetEntity = reader.uint32();
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
         * Decodes a CEntityMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CEntityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CEntityMsg} CEntityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEntityMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CEntityMsg message.
         * @function verify
         * @memberof CEntityMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CEntityMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.targetEntity != null && message.hasOwnProperty("targetEntity"))
                if (!$util.isInteger(message.targetEntity))
                    return "targetEntity: integer expected";
            return null;
        };
    
        /**
         * Creates a CEntityMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CEntityMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CEntityMsg} CEntityMsg
         */
        CEntityMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CEntityMsg)
                return object;
            var message = new $root.CEntityMsg();
            if (object.targetEntity != null)
                message.targetEntity = object.targetEntity >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CEntityMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CEntityMsg
         * @static
         * @param {CEntityMsg} message CEntityMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CEntityMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.targetEntity = 16777215;
            if (message.targetEntity != null && message.hasOwnProperty("targetEntity"))
                object.targetEntity = message.targetEntity;
            return object;
        };
    
        /**
         * Converts this CEntityMsg to JSON.
         * @function toJSON
         * @memberof CEntityMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CEntityMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CEntityMsg
         * @function getTypeUrl
         * @memberof CEntityMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CEntityMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CEntityMsg";
        };
    
        return CEntityMsg;
    })();
    
    $root.CMsg_CVars = (function() {
    
        /**
         * Properties of a CMsg_CVars.
         * @exports ICMsg_CVars
         * @interface ICMsg_CVars
         * @property {Array.<CMsg_CVars.ICVar>|null} [cvars] CMsg_CVars cvars
         */
    
        /**
         * Constructs a new CMsg_CVars.
         * @exports CMsg_CVars
         * @classdesc Represents a CMsg_CVars.
         * @implements ICMsg_CVars
         * @constructor
         * @param {ICMsg_CVars=} [properties] Properties to set
         */
        function CMsg_CVars(properties) {
            this.cvars = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsg_CVars cvars.
         * @member {Array.<CMsg_CVars.ICVar>} cvars
         * @memberof CMsg_CVars
         * @instance
         */
        CMsg_CVars.prototype.cvars = $util.emptyArray;
    
        /**
         * Creates a new CMsg_CVars instance using the specified properties.
         * @function create
         * @memberof CMsg_CVars
         * @static
         * @param {ICMsg_CVars=} [properties] Properties to set
         * @returns {CMsg_CVars} CMsg_CVars instance
         */
        CMsg_CVars.create = function create(properties) {
            return new CMsg_CVars(properties);
        };
    
        /**
         * Encodes the specified CMsg_CVars message. Does not implicitly {@link CMsg_CVars.verify|verify} messages.
         * @function encode
         * @memberof CMsg_CVars
         * @static
         * @param {ICMsg_CVars} message CMsg_CVars message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsg_CVars.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cvars != null && message.cvars.length)
                for (var i = 0; i < message.cvars.length; ++i)
                    $root.CMsg_CVars.CVar.encode(message.cvars[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsg_CVars message, length delimited. Does not implicitly {@link CMsg_CVars.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsg_CVars
         * @static
         * @param {ICMsg_CVars} message CMsg_CVars message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsg_CVars.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsg_CVars message from the specified reader or buffer.
         * @function decode
         * @memberof CMsg_CVars
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsg_CVars} CMsg_CVars
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsg_CVars.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsg_CVars();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.cvars && message.cvars.length))
                            message.cvars = [];
                        message.cvars.push($root.CMsg_CVars.CVar.decode(reader, reader.uint32()));
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
         * Decodes a CMsg_CVars message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsg_CVars
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsg_CVars} CMsg_CVars
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsg_CVars.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsg_CVars message.
         * @function verify
         * @memberof CMsg_CVars
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsg_CVars.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cvars != null && message.hasOwnProperty("cvars")) {
                if (!Array.isArray(message.cvars))
                    return "cvars: array expected";
                for (var i = 0; i < message.cvars.length; ++i) {
                    var error = $root.CMsg_CVars.CVar.verify(message.cvars[i]);
                    if (error)
                        return "cvars." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsg_CVars message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsg_CVars
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsg_CVars} CMsg_CVars
         */
        CMsg_CVars.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsg_CVars)
                return object;
            var message = new $root.CMsg_CVars();
            if (object.cvars) {
                if (!Array.isArray(object.cvars))
                    throw TypeError(".CMsg_CVars.cvars: array expected");
                message.cvars = [];
                for (var i = 0; i < object.cvars.length; ++i) {
                    if (typeof object.cvars[i] !== "object")
                        throw TypeError(".CMsg_CVars.cvars: object expected");
                    message.cvars[i] = $root.CMsg_CVars.CVar.fromObject(object.cvars[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsg_CVars message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsg_CVars
         * @static
         * @param {CMsg_CVars} message CMsg_CVars
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsg_CVars.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cvars = [];
            if (message.cvars && message.cvars.length) {
                object.cvars = [];
                for (var j = 0; j < message.cvars.length; ++j)
                    object.cvars[j] = $root.CMsg_CVars.CVar.toObject(message.cvars[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsg_CVars to JSON.
         * @function toJSON
         * @memberof CMsg_CVars
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsg_CVars.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsg_CVars
         * @function getTypeUrl
         * @memberof CMsg_CVars
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsg_CVars.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsg_CVars";
        };
    
        CMsg_CVars.CVar = (function() {
    
            /**
             * Properties of a CVar.
             * @memberof CMsg_CVars
             * @interface ICVar
             * @property {string|null} [name] CVar name
             * @property {string|null} [value] CVar value
             */
    
            /**
             * Constructs a new CVar.
             * @memberof CMsg_CVars
             * @classdesc Represents a CVar.
             * @implements ICVar
             * @constructor
             * @param {CMsg_CVars.ICVar=} [properties] Properties to set
             */
            function CVar(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CVar name.
             * @member {string} name
             * @memberof CMsg_CVars.CVar
             * @instance
             */
            CVar.prototype.name = "";
    
            /**
             * CVar value.
             * @member {string} value
             * @memberof CMsg_CVars.CVar
             * @instance
             */
            CVar.prototype.value = "";
    
            /**
             * Creates a new CVar instance using the specified properties.
             * @function create
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.ICVar=} [properties] Properties to set
             * @returns {CMsg_CVars.CVar} CVar instance
             */
            CVar.create = function create(properties) {
                return new CVar(properties);
            };
    
            /**
             * Encodes the specified CVar message. Does not implicitly {@link CMsg_CVars.CVar.verify|verify} messages.
             * @function encode
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.ICVar} message CVar message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CVar.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified CVar message, length delimited. Does not implicitly {@link CMsg_CVars.CVar.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.ICVar} message CVar message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CVar.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CVar message from the specified reader or buffer.
             * @function decode
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsg_CVars.CVar} CVar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CVar.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsg_CVars.CVar();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
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
             * Decodes a CVar message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsg_CVars.CVar} CVar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CVar.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CVar message.
             * @function verify
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CVar.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a CVar message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsg_CVars.CVar} CVar
             */
            CVar.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsg_CVars.CVar)
                    return object;
                var message = new $root.CMsg_CVars.CVar();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a CVar message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.CVar} message CVar
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CVar.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this CVar to JSON.
             * @function toJSON
             * @memberof CMsg_CVars.CVar
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CVar.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CVar
             * @function getTypeUrl
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CVar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsg_CVars.CVar";
            };
    
            return CVar;
        })();
    
        return CMsg_CVars;
    })();
    
    $root.CNETMsg_NOP = (function() {
    
        /**
         * Properties of a CNETMsg_NOP.
         * @exports ICNETMsg_NOP
         * @interface ICNETMsg_NOP
         */
    
        /**
         * Constructs a new CNETMsg_NOP.
         * @exports CNETMsg_NOP
         * @classdesc Represents a CNETMsg_NOP.
         * @implements ICNETMsg_NOP
         * @constructor
         * @param {ICNETMsg_NOP=} [properties] Properties to set
         */
        function CNETMsg_NOP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CNETMsg_NOP instance using the specified properties.
         * @function create
         * @memberof CNETMsg_NOP
         * @static
         * @param {ICNETMsg_NOP=} [properties] Properties to set
         * @returns {CNETMsg_NOP} CNETMsg_NOP instance
         */
        CNETMsg_NOP.create = function create(properties) {
            return new CNETMsg_NOP(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_NOP message. Does not implicitly {@link CNETMsg_NOP.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_NOP
         * @static
         * @param {ICNETMsg_NOP} message CNETMsg_NOP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_NOP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_NOP message, length delimited. Does not implicitly {@link CNETMsg_NOP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_NOP
         * @static
         * @param {ICNETMsg_NOP} message CNETMsg_NOP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_NOP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_NOP message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_NOP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_NOP} CNETMsg_NOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_NOP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_NOP();
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
         * Decodes a CNETMsg_NOP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_NOP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_NOP} CNETMsg_NOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_NOP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_NOP message.
         * @function verify
         * @memberof CNETMsg_NOP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_NOP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_NOP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_NOP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_NOP} CNETMsg_NOP
         */
        CNETMsg_NOP.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_NOP)
                return object;
            return new $root.CNETMsg_NOP();
        };
    
        /**
         * Creates a plain object from a CNETMsg_NOP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_NOP
         * @static
         * @param {CNETMsg_NOP} message CNETMsg_NOP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_NOP.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CNETMsg_NOP to JSON.
         * @function toJSON
         * @memberof CNETMsg_NOP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_NOP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_NOP
         * @function getTypeUrl
         * @memberof CNETMsg_NOP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_NOP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_NOP";
        };
    
        return CNETMsg_NOP;
    })();
    
    $root.CNETMsg_SplitScreenUser = (function() {
    
        /**
         * Properties of a CNETMsg_SplitScreenUser.
         * @exports ICNETMsg_SplitScreenUser
         * @interface ICNETMsg_SplitScreenUser
         * @property {number|null} [slot] CNETMsg_SplitScreenUser slot
         */
    
        /**
         * Constructs a new CNETMsg_SplitScreenUser.
         * @exports CNETMsg_SplitScreenUser
         * @classdesc Represents a CNETMsg_SplitScreenUser.
         * @implements ICNETMsg_SplitScreenUser
         * @constructor
         * @param {ICNETMsg_SplitScreenUser=} [properties] Properties to set
         */
        function CNETMsg_SplitScreenUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SplitScreenUser slot.
         * @member {number} slot
         * @memberof CNETMsg_SplitScreenUser
         * @instance
         */
        CNETMsg_SplitScreenUser.prototype.slot = 0;
    
        /**
         * Creates a new CNETMsg_SplitScreenUser instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {ICNETMsg_SplitScreenUser=} [properties] Properties to set
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser instance
         */
        CNETMsg_SplitScreenUser.create = function create(properties) {
            return new CNETMsg_SplitScreenUser(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SplitScreenUser message. Does not implicitly {@link CNETMsg_SplitScreenUser.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {ICNETMsg_SplitScreenUser} message CNETMsg_SplitScreenUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SplitScreenUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.slot);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SplitScreenUser message, length delimited. Does not implicitly {@link CNETMsg_SplitScreenUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {ICNETMsg_SplitScreenUser} message CNETMsg_SplitScreenUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SplitScreenUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SplitScreenUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SplitScreenUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.slot = reader.int32();
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
         * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SplitScreenUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SplitScreenUser message.
         * @function verify
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SplitScreenUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SplitScreenUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser
         */
        CNETMsg_SplitScreenUser.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SplitScreenUser)
                return object;
            var message = new $root.CNETMsg_SplitScreenUser();
            if (object.slot != null)
                message.slot = object.slot | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SplitScreenUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {CNETMsg_SplitScreenUser} message CNETMsg_SplitScreenUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SplitScreenUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.slot = 0;
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SplitScreenUser to JSON.
         * @function toJSON
         * @memberof CNETMsg_SplitScreenUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SplitScreenUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SplitScreenUser
         * @function getTypeUrl
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SplitScreenUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SplitScreenUser";
        };
    
        return CNETMsg_SplitScreenUser;
    })();
    
    $root.CNETMsg_Disconnect = (function() {
    
        /**
         * Properties of a CNETMsg_Disconnect.
         * @exports ICNETMsg_Disconnect
         * @interface ICNETMsg_Disconnect
         * @property {ENetworkDisconnectionReason|null} [reason] CNETMsg_Disconnect reason
         */
    
        /**
         * Constructs a new CNETMsg_Disconnect.
         * @exports CNETMsg_Disconnect
         * @classdesc Represents a CNETMsg_Disconnect.
         * @implements ICNETMsg_Disconnect
         * @constructor
         * @param {ICNETMsg_Disconnect=} [properties] Properties to set
         */
        function CNETMsg_Disconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_Disconnect reason.
         * @member {ENetworkDisconnectionReason} reason
         * @memberof CNETMsg_Disconnect
         * @instance
         */
        CNETMsg_Disconnect.prototype.reason = 0;
    
        /**
         * Creates a new CNETMsg_Disconnect instance using the specified properties.
         * @function create
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {ICNETMsg_Disconnect=} [properties] Properties to set
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect instance
         */
        CNETMsg_Disconnect.create = function create(properties) {
            return new CNETMsg_Disconnect(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_Disconnect message. Does not implicitly {@link CNETMsg_Disconnect.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {ICNETMsg_Disconnect} message CNETMsg_Disconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Disconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_Disconnect message, length delimited. Does not implicitly {@link CNETMsg_Disconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {ICNETMsg_Disconnect} message CNETMsg_Disconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Disconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_Disconnect message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Disconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_Disconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.reason = reader.int32();
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
         * Decodes a CNETMsg_Disconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Disconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_Disconnect message.
         * @function verify
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_Disconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 128:
                case 129:
                case 130:
                case 131:
                case 132:
                case 133:
                case 134:
                case 135:
                case 136:
                case 137:
                case 138:
                case 139:
                case 140:
                case 141:
                case 142:
                case 143:
                case 144:
                case 145:
                case 146:
                case 147:
                case 148:
                case 149:
                case 150:
                case 151:
                case 152:
                case 153:
                case 154:
                case 155:
                case 156:
                case 157:
                case 158:
                case 159:
                case 160:
                case 161:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CNETMsg_Disconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect
         */
        CNETMsg_Disconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_Disconnect)
                return object;
            var message = new $root.CNETMsg_Disconnect();
            switch (object.reason) {
            default:
                if (typeof object.reason === "number") {
                    message.reason = object.reason;
                    break;
                }
                break;
            case "NETWORK_DISCONNECT_INVALID":
            case 0:
                message.reason = 0;
                break;
            case "NETWORK_DISCONNECT_SHUTDOWN":
            case 1:
                message.reason = 1;
                break;
            case "NETWORK_DISCONNECT_DISCONNECT_BY_USER":
            case 2:
                message.reason = 2;
                break;
            case "NETWORK_DISCONNECT_DISCONNECT_BY_SERVER":
            case 3:
                message.reason = 3;
                break;
            case "NETWORK_DISCONNECT_LOST":
            case 4:
                message.reason = 4;
                break;
            case "NETWORK_DISCONNECT_OVERFLOW":
            case 5:
                message.reason = 5;
                break;
            case "NETWORK_DISCONNECT_STEAM_BANNED":
            case 6:
                message.reason = 6;
                break;
            case "NETWORK_DISCONNECT_STEAM_INUSE":
            case 7:
                message.reason = 7;
                break;
            case "NETWORK_DISCONNECT_STEAM_TICKET":
            case 8:
                message.reason = 8;
                break;
            case "NETWORK_DISCONNECT_STEAM_LOGON":
            case 9:
                message.reason = 9;
                break;
            case "NETWORK_DISCONNECT_STEAM_AUTHCANCELLED":
            case 10:
                message.reason = 10;
                break;
            case "NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED":
            case 11:
                message.reason = 11;
                break;
            case "NETWORK_DISCONNECT_STEAM_AUTHINVALID":
            case 12:
                message.reason = 12;
                break;
            case "NETWORK_DISCONNECT_STEAM_VACBANSTATE":
            case 13:
                message.reason = 13;
                break;
            case "NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE":
            case 14:
                message.reason = 14;
                break;
            case "NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT":
            case 15:
                message.reason = 15;
                break;
            case "NETWORK_DISCONNECT_STEAM_DROPPED":
            case 16:
                message.reason = 16;
                break;
            case "NETWORK_DISCONNECT_STEAM_OWNERSHIP":
            case 17:
                message.reason = 17;
                break;
            case "NETWORK_DISCONNECT_SERVERINFO_OVERFLOW":
            case 18:
                message.reason = 18;
                break;
            case "NETWORK_DISCONNECT_TICKMSG_OVERFLOW":
            case 19:
                message.reason = 19;
                break;
            case "NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW":
            case 20:
                message.reason = 20;
                break;
            case "NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW":
            case 21:
                message.reason = 21;
                break;
            case "NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW":
            case 22:
                message.reason = 22;
                break;
            case "NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW":
            case 23:
                message.reason = 23;
                break;
            case "NETWORK_DISCONNECT_SNAPSHOTOVERFLOW":
            case 24:
                message.reason = 24;
                break;
            case "NETWORK_DISCONNECT_SNAPSHOTERROR":
            case 25:
                message.reason = 25;
                break;
            case "NETWORK_DISCONNECT_RELIABLEOVERFLOW":
            case 26:
                message.reason = 26;
                break;
            case "NETWORK_DISCONNECT_BADDELTATICK":
            case 27:
                message.reason = 27;
                break;
            case "NETWORK_DISCONNECT_NOMORESPLITS":
            case 28:
                message.reason = 28;
                break;
            case "NETWORK_DISCONNECT_TIMEDOUT":
            case 29:
                message.reason = 29;
                break;
            case "NETWORK_DISCONNECT_DISCONNECTED":
            case 30:
                message.reason = 30;
                break;
            case "NETWORK_DISCONNECT_LEAVINGSPLIT":
            case 31:
                message.reason = 31;
                break;
            case "NETWORK_DISCONNECT_DIFFERENTCLASSTABLES":
            case 32:
                message.reason = 32;
                break;
            case "NETWORK_DISCONNECT_BADRELAYPASSWORD":
            case 33:
                message.reason = 33;
                break;
            case "NETWORK_DISCONNECT_BADSPECTATORPASSWORD":
            case 34:
                message.reason = 34;
                break;
            case "NETWORK_DISCONNECT_HLTVRESTRICTED":
            case 35:
                message.reason = 35;
                break;
            case "NETWORK_DISCONNECT_NOSPECTATORS":
            case 36:
                message.reason = 36;
                break;
            case "NETWORK_DISCONNECT_HLTVUNAVAILABLE":
            case 37:
                message.reason = 37;
                break;
            case "NETWORK_DISCONNECT_HLTVSTOP":
            case 38:
                message.reason = 38;
                break;
            case "NETWORK_DISCONNECT_KICKED":
            case 39:
                message.reason = 39;
                break;
            case "NETWORK_DISCONNECT_BANADDED":
            case 40:
                message.reason = 40;
                break;
            case "NETWORK_DISCONNECT_KICKBANADDED":
            case 41:
                message.reason = 41;
                break;
            case "NETWORK_DISCONNECT_HLTVDIRECT":
            case 42:
                message.reason = 42;
                break;
            case "NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA":
            case 43:
                message.reason = 43;
                break;
            case "NETWORK_DISCONNECT_PURESERVER_MISMATCH":
            case 44:
                message.reason = 44;
                break;
            case "NETWORK_DISCONNECT_USERCMD":
            case 45:
                message.reason = 45;
                break;
            case "NETWORK_DISCONNECT_REJECTED_BY_GAME":
            case 46:
                message.reason = 46;
                break;
            case "NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR":
            case 47:
                message.reason = 47;
                break;
            case "NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR":
            case 48:
                message.reason = 48;
                break;
            case "NETWORK_DISCONNECT_BAD_SERVER_PASSWORD":
            case 49:
                message.reason = 49;
                break;
            case "NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION":
            case 50:
                message.reason = 50;
                break;
            case "NETWORK_DISCONNECT_CONNECTION_FAILURE":
            case 51:
                message.reason = 51;
                break;
            case "NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS":
            case 52:
                message.reason = 52;
                break;
            case "NETWORK_DISCONNECT_RECONNECTION":
            case 53:
                message.reason = 53;
                break;
            case "NETWORK_DISCONNECT_LOOPSHUTDOWN":
            case 54:
                message.reason = 54;
                break;
            case "NETWORK_DISCONNECT_LOOPDEACTIVATE":
            case 55:
                message.reason = 55;
                break;
            case "NETWORK_DISCONNECT_HOST_ENDGAME":
            case 56:
                message.reason = 56;
                break;
            case "NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE":
            case 57:
                message.reason = 57;
                break;
            case "NETWORK_DISCONNECT_CREATE_SERVER_FAILED":
            case 58:
                message.reason = 58;
                break;
            case "NETWORK_DISCONNECT_EXITING":
            case 59:
                message.reason = 59;
                break;
            case "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE":
            case 60:
                message.reason = 60;
                break;
            case "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY":
            case 61:
                message.reason = 61;
                break;
            case "NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL":
            case 62:
                message.reason = 62;
                break;
            case "NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP":
            case 63:
                message.reason = 63;
                break;
            case "NETWORK_DISCONNECT_CLIENT_NO_MAP":
            case 64:
                message.reason = 64;
                break;
            case "NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP":
            case 65:
                message.reason = 65;
                break;
            case "NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM":
            case 66:
                message.reason = 66;
                break;
            case "NETWORK_DISCONNECT_STEAM_DENY_MISC":
            case 67:
                message.reason = 67;
                break;
            case "NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT":
            case 68:
                message.reason = 68;
                break;
            case "NETWORK_DISCONNECT_SERVER_SHUTDOWN":
            case 69:
                message.reason = 69;
                break;
            case "NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE":
            case 71:
                message.reason = 71;
                break;
            case "NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT":
            case 72:
                message.reason = 72;
                break;
            case "NETWORK_DISCONNECT_SERVER_INCOMPATIBLE":
            case 73:
                message.reason = 73;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS":
            case 74:
                message.reason = 74;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY":
            case 75:
                message.reason = 75;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG":
            case 76:
                message.reason = 76;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_OTHER":
            case 77:
                message.reason = 77;
                break;
            case "NETWORK_DISCONNECT_REMOTE_TIMEOUT":
            case 79:
                message.reason = 79;
                break;
            case "NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING":
            case 80:
                message.reason = 80;
                break;
            case "NETWORK_DISCONNECT_REMOTE_OTHER":
            case 81:
                message.reason = 81;
                break;
            case "NETWORK_DISCONNECT_REMOTE_BADCRYPT":
            case 82:
                message.reason = 82;
                break;
            case "NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED":
            case 83:
                message.reason = 83;
                break;
            case "NETWORK_DISCONNECT_UNUSUAL":
            case 84:
                message.reason = 84;
                break;
            case "NETWORK_DISCONNECT_INTERNAL_ERROR":
            case 85:
                message.reason = 85;
                break;
            case "NETWORK_DISCONNECT_REJECT_BADCHALLENGE":
            case 128:
                message.reason = 128;
                break;
            case "NETWORK_DISCONNECT_REJECT_NOLOBBY":
            case 129:
                message.reason = 129;
                break;
            case "NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP":
            case 130:
                message.reason = 130;
                break;
            case "NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER":
            case 131:
                message.reason = 131;
                break;
            case "NETWORK_DISCONNECT_REJECT_HIDDEN_GAME":
            case 132:
                message.reason = 132;
                break;
            case "NETWORK_DISCONNECT_REJECT_LANRESTRICT":
            case 133:
                message.reason = 133;
                break;
            case "NETWORK_DISCONNECT_REJECT_BADPASSWORD":
            case 134:
                message.reason = 134;
                break;
            case "NETWORK_DISCONNECT_REJECT_SERVERFULL":
            case 135:
                message.reason = 135;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION":
            case 136:
                message.reason = 136;
                break;
            case "NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL":
            case 137:
                message.reason = 137;
                break;
            case "NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY":
            case 138:
                message.reason = 138;
                break;
            case "NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY":
            case 139:
                message.reason = 139;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH":
            case 140:
                message.reason = 140;
                break;
            case "NETWORK_DISCONNECT_REJECT_OLDPROTOCOL":
            case 141:
                message.reason = 141;
                break;
            case "NETWORK_DISCONNECT_REJECT_NEWPROTOCOL":
            case 142:
                message.reason = 142;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION":
            case 143:
                message.reason = 143;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN":
            case 144:
                message.reason = 144;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN":
            case 145:
                message.reason = 145;
                break;
            case "NETWORK_DISCONNECT_REJECT_STEAM":
            case 146:
                message.reason = 146;
                break;
            case "NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED":
            case 147:
                message.reason = 147;
                break;
            case "NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID":
            case 148:
                message.reason = 148;
                break;
            case "NETWORK_DISCONNECT_REJECT_BANNED":
            case 149:
                message.reason = 149;
                break;
            case "NETWORK_DISCONNECT_KICKED_TEAMKILLING":
            case 150:
                message.reason = 150;
                break;
            case "NETWORK_DISCONNECT_KICKED_TK_START":
            case 151:
                message.reason = 151;
                break;
            case "NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT":
            case 152:
                message.reason = 152;
                break;
            case "NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT":
            case 153:
                message.reason = 153;
                break;
            case "NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN":
            case 154:
                message.reason = 154;
                break;
            case "NETWORK_DISCONNECT_KICKED_TEAMHURTING":
            case 155:
                message.reason = 155;
                break;
            case "NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING":
            case 156:
                message.reason = 156;
                break;
            case "NETWORK_DISCONNECT_KICKED_VOTEDOFF":
            case 157:
                message.reason = 157;
                break;
            case "NETWORK_DISCONNECT_KICKED_IDLE":
            case 158:
                message.reason = 158;
                break;
            case "NETWORK_DISCONNECT_KICKED_SUICIDE":
            case 159:
                message.reason = 159;
                break;
            case "NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN":
            case 160:
                message.reason = 160;
                break;
            case "NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET":
            case 161:
                message.reason = 161;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_Disconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {CNETMsg_Disconnect} message CNETMsg_Disconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_Disconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = options.enums === String ? "NETWORK_DISCONNECT_INVALID" : 0;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.ENetworkDisconnectionReason[message.reason] === undefined ? message.reason : $root.ENetworkDisconnectionReason[message.reason] : message.reason;
            return object;
        };
    
        /**
         * Converts this CNETMsg_Disconnect to JSON.
         * @function toJSON
         * @memberof CNETMsg_Disconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_Disconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_Disconnect
         * @function getTypeUrl
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_Disconnect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_Disconnect";
        };
    
        return CNETMsg_Disconnect;
    })();
    
    $root.CNETMsg_Tick = (function() {
    
        /**
         * Properties of a CNETMsg_Tick.
         * @exports ICNETMsg_Tick
         * @interface ICNETMsg_Tick
         * @property {number|null} [tick] CNETMsg_Tick tick
         * @property {number|null} [hostFrametime] CNETMsg_Tick hostFrametime
         * @property {number|null} [hostFrametimeStdDeviation] CNETMsg_Tick hostFrametimeStdDeviation
         * @property {number|null} [hostComputationtime] CNETMsg_Tick hostComputationtime
         * @property {number|null} [hostComputationtimeStdDeviation] CNETMsg_Tick hostComputationtimeStdDeviation
         * @property {number|null} [hostFramestarttimeStdDeviation] CNETMsg_Tick hostFramestarttimeStdDeviation
         * @property {number|null} [hostLoss] CNETMsg_Tick hostLoss
         * @property {number|null} [hostUnfilteredFrametime] CNETMsg_Tick hostUnfilteredFrametime
         * @property {number|null} [hltvReplayFlags] CNETMsg_Tick hltvReplayFlags
         */
    
        /**
         * Constructs a new CNETMsg_Tick.
         * @exports CNETMsg_Tick
         * @classdesc Represents a CNETMsg_Tick.
         * @implements ICNETMsg_Tick
         * @constructor
         * @param {ICNETMsg_Tick=} [properties] Properties to set
         */
        function CNETMsg_Tick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_Tick tick.
         * @member {number} tick
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.tick = 0;
    
        /**
         * CNETMsg_Tick hostFrametime.
         * @member {number} hostFrametime
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hostFrametime = 0;
    
        /**
         * CNETMsg_Tick hostFrametimeStdDeviation.
         * @member {number} hostFrametimeStdDeviation
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hostFrametimeStdDeviation = 0;
    
        /**
         * CNETMsg_Tick hostComputationtime.
         * @member {number} hostComputationtime
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hostComputationtime = 0;
    
        /**
         * CNETMsg_Tick hostComputationtimeStdDeviation.
         * @member {number} hostComputationtimeStdDeviation
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hostComputationtimeStdDeviation = 0;
    
        /**
         * CNETMsg_Tick hostFramestarttimeStdDeviation.
         * @member {number} hostFramestarttimeStdDeviation
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hostFramestarttimeStdDeviation = 0;
    
        /**
         * CNETMsg_Tick hostLoss.
         * @member {number} hostLoss
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hostLoss = 0;
    
        /**
         * CNETMsg_Tick hostUnfilteredFrametime.
         * @member {number} hostUnfilteredFrametime
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hostUnfilteredFrametime = 0;
    
        /**
         * CNETMsg_Tick hltvReplayFlags.
         * @member {number} hltvReplayFlags
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hltvReplayFlags = 0;
    
        /**
         * Creates a new CNETMsg_Tick instance using the specified properties.
         * @function create
         * @memberof CNETMsg_Tick
         * @static
         * @param {ICNETMsg_Tick=} [properties] Properties to set
         * @returns {CNETMsg_Tick} CNETMsg_Tick instance
         */
        CNETMsg_Tick.create = function create(properties) {
            return new CNETMsg_Tick(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_Tick message. Does not implicitly {@link CNETMsg_Tick.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_Tick
         * @static
         * @param {ICNETMsg_Tick} message CNETMsg_Tick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Tick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tick != null && Object.hasOwnProperty.call(message, "tick"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tick);
            if (message.hostFrametime != null && Object.hasOwnProperty.call(message, "hostFrametime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.hostFrametime);
            if (message.hostFrametimeStdDeviation != null && Object.hasOwnProperty.call(message, "hostFrametimeStdDeviation"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hostFrametimeStdDeviation);
            if (message.hostComputationtime != null && Object.hasOwnProperty.call(message, "hostComputationtime"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.hostComputationtime);
            if (message.hostComputationtimeStdDeviation != null && Object.hasOwnProperty.call(message, "hostComputationtimeStdDeviation"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.hostComputationtimeStdDeviation);
            if (message.hostFramestarttimeStdDeviation != null && Object.hasOwnProperty.call(message, "hostFramestarttimeStdDeviation"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.hostFramestarttimeStdDeviation);
            if (message.hostLoss != null && Object.hasOwnProperty.call(message, "hostLoss"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.hostLoss);
            if (message.hostUnfilteredFrametime != null && Object.hasOwnProperty.call(message, "hostUnfilteredFrametime"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.hostUnfilteredFrametime);
            if (message.hltvReplayFlags != null && Object.hasOwnProperty.call(message, "hltvReplayFlags"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.hltvReplayFlags);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_Tick message, length delimited. Does not implicitly {@link CNETMsg_Tick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_Tick
         * @static
         * @param {ICNETMsg_Tick} message CNETMsg_Tick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Tick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_Tick message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_Tick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_Tick} CNETMsg_Tick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Tick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_Tick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tick = reader.uint32();
                        break;
                    }
                case 2: {
                        message.hostFrametime = reader.uint32();
                        break;
                    }
                case 3: {
                        message.hostFrametimeStdDeviation = reader.uint32();
                        break;
                    }
                case 4: {
                        message.hostComputationtime = reader.uint32();
                        break;
                    }
                case 5: {
                        message.hostComputationtimeStdDeviation = reader.uint32();
                        break;
                    }
                case 6: {
                        message.hostFramestarttimeStdDeviation = reader.uint32();
                        break;
                    }
                case 7: {
                        message.hostLoss = reader.uint32();
                        break;
                    }
                case 8: {
                        message.hostUnfilteredFrametime = reader.uint32();
                        break;
                    }
                case 9: {
                        message.hltvReplayFlags = reader.uint32();
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
         * Decodes a CNETMsg_Tick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_Tick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_Tick} CNETMsg_Tick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Tick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_Tick message.
         * @function verify
         * @memberof CNETMsg_Tick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_Tick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tick != null && message.hasOwnProperty("tick"))
                if (!$util.isInteger(message.tick))
                    return "tick: integer expected";
            if (message.hostFrametime != null && message.hasOwnProperty("hostFrametime"))
                if (!$util.isInteger(message.hostFrametime))
                    return "hostFrametime: integer expected";
            if (message.hostFrametimeStdDeviation != null && message.hasOwnProperty("hostFrametimeStdDeviation"))
                if (!$util.isInteger(message.hostFrametimeStdDeviation))
                    return "hostFrametimeStdDeviation: integer expected";
            if (message.hostComputationtime != null && message.hasOwnProperty("hostComputationtime"))
                if (!$util.isInteger(message.hostComputationtime))
                    return "hostComputationtime: integer expected";
            if (message.hostComputationtimeStdDeviation != null && message.hasOwnProperty("hostComputationtimeStdDeviation"))
                if (!$util.isInteger(message.hostComputationtimeStdDeviation))
                    return "hostComputationtimeStdDeviation: integer expected";
            if (message.hostFramestarttimeStdDeviation != null && message.hasOwnProperty("hostFramestarttimeStdDeviation"))
                if (!$util.isInteger(message.hostFramestarttimeStdDeviation))
                    return "hostFramestarttimeStdDeviation: integer expected";
            if (message.hostLoss != null && message.hasOwnProperty("hostLoss"))
                if (!$util.isInteger(message.hostLoss))
                    return "hostLoss: integer expected";
            if (message.hostUnfilteredFrametime != null && message.hasOwnProperty("hostUnfilteredFrametime"))
                if (!$util.isInteger(message.hostUnfilteredFrametime))
                    return "hostUnfilteredFrametime: integer expected";
            if (message.hltvReplayFlags != null && message.hasOwnProperty("hltvReplayFlags"))
                if (!$util.isInteger(message.hltvReplayFlags))
                    return "hltvReplayFlags: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_Tick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_Tick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_Tick} CNETMsg_Tick
         */
        CNETMsg_Tick.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_Tick)
                return object;
            var message = new $root.CNETMsg_Tick();
            if (object.tick != null)
                message.tick = object.tick >>> 0;
            if (object.hostFrametime != null)
                message.hostFrametime = object.hostFrametime >>> 0;
            if (object.hostFrametimeStdDeviation != null)
                message.hostFrametimeStdDeviation = object.hostFrametimeStdDeviation >>> 0;
            if (object.hostComputationtime != null)
                message.hostComputationtime = object.hostComputationtime >>> 0;
            if (object.hostComputationtimeStdDeviation != null)
                message.hostComputationtimeStdDeviation = object.hostComputationtimeStdDeviation >>> 0;
            if (object.hostFramestarttimeStdDeviation != null)
                message.hostFramestarttimeStdDeviation = object.hostFramestarttimeStdDeviation >>> 0;
            if (object.hostLoss != null)
                message.hostLoss = object.hostLoss >>> 0;
            if (object.hostUnfilteredFrametime != null)
                message.hostUnfilteredFrametime = object.hostUnfilteredFrametime >>> 0;
            if (object.hltvReplayFlags != null)
                message.hltvReplayFlags = object.hltvReplayFlags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_Tick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_Tick
         * @static
         * @param {CNETMsg_Tick} message CNETMsg_Tick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_Tick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tick = 0;
                object.hostFrametime = 0;
                object.hostFrametimeStdDeviation = 0;
                object.hostComputationtime = 0;
                object.hostComputationtimeStdDeviation = 0;
                object.hostFramestarttimeStdDeviation = 0;
                object.hostLoss = 0;
                object.hostUnfilteredFrametime = 0;
                object.hltvReplayFlags = 0;
            }
            if (message.tick != null && message.hasOwnProperty("tick"))
                object.tick = message.tick;
            if (message.hostFrametime != null && message.hasOwnProperty("hostFrametime"))
                object.hostFrametime = message.hostFrametime;
            if (message.hostFrametimeStdDeviation != null && message.hasOwnProperty("hostFrametimeStdDeviation"))
                object.hostFrametimeStdDeviation = message.hostFrametimeStdDeviation;
            if (message.hostComputationtime != null && message.hasOwnProperty("hostComputationtime"))
                object.hostComputationtime = message.hostComputationtime;
            if (message.hostComputationtimeStdDeviation != null && message.hasOwnProperty("hostComputationtimeStdDeviation"))
                object.hostComputationtimeStdDeviation = message.hostComputationtimeStdDeviation;
            if (message.hostFramestarttimeStdDeviation != null && message.hasOwnProperty("hostFramestarttimeStdDeviation"))
                object.hostFramestarttimeStdDeviation = message.hostFramestarttimeStdDeviation;
            if (message.hostLoss != null && message.hasOwnProperty("hostLoss"))
                object.hostLoss = message.hostLoss;
            if (message.hostUnfilteredFrametime != null && message.hasOwnProperty("hostUnfilteredFrametime"))
                object.hostUnfilteredFrametime = message.hostUnfilteredFrametime;
            if (message.hltvReplayFlags != null && message.hasOwnProperty("hltvReplayFlags"))
                object.hltvReplayFlags = message.hltvReplayFlags;
            return object;
        };
    
        /**
         * Converts this CNETMsg_Tick to JSON.
         * @function toJSON
         * @memberof CNETMsg_Tick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_Tick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_Tick
         * @function getTypeUrl
         * @memberof CNETMsg_Tick
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_Tick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_Tick";
        };
    
        return CNETMsg_Tick;
    })();
    
    $root.CNETMsg_StringCmd = (function() {
    
        /**
         * Properties of a CNETMsg_StringCmd.
         * @exports ICNETMsg_StringCmd
         * @interface ICNETMsg_StringCmd
         * @property {string|null} [command] CNETMsg_StringCmd command
         * @property {number|null} [predictionSync] CNETMsg_StringCmd predictionSync
         */
    
        /**
         * Constructs a new CNETMsg_StringCmd.
         * @exports CNETMsg_StringCmd
         * @classdesc Represents a CNETMsg_StringCmd.
         * @implements ICNETMsg_StringCmd
         * @constructor
         * @param {ICNETMsg_StringCmd=} [properties] Properties to set
         */
        function CNETMsg_StringCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_StringCmd command.
         * @member {string} command
         * @memberof CNETMsg_StringCmd
         * @instance
         */
        CNETMsg_StringCmd.prototype.command = "";
    
        /**
         * CNETMsg_StringCmd predictionSync.
         * @member {number} predictionSync
         * @memberof CNETMsg_StringCmd
         * @instance
         */
        CNETMsg_StringCmd.prototype.predictionSync = 0;
    
        /**
         * Creates a new CNETMsg_StringCmd instance using the specified properties.
         * @function create
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {ICNETMsg_StringCmd=} [properties] Properties to set
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd instance
         */
        CNETMsg_StringCmd.create = function create(properties) {
            return new CNETMsg_StringCmd(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_StringCmd message. Does not implicitly {@link CNETMsg_StringCmd.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {ICNETMsg_StringCmd} message CNETMsg_StringCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_StringCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.predictionSync != null && Object.hasOwnProperty.call(message, "predictionSync"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.predictionSync);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_StringCmd message, length delimited. Does not implicitly {@link CNETMsg_StringCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {ICNETMsg_StringCmd} message CNETMsg_StringCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_StringCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_StringCmd message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_StringCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_StringCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.command = reader.string();
                        break;
                    }
                case 2: {
                        message.predictionSync = reader.uint32();
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
         * Decodes a CNETMsg_StringCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_StringCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_StringCmd message.
         * @function verify
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_StringCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.predictionSync != null && message.hasOwnProperty("predictionSync"))
                if (!$util.isInteger(message.predictionSync))
                    return "predictionSync: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_StringCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd
         */
        CNETMsg_StringCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_StringCmd)
                return object;
            var message = new $root.CNETMsg_StringCmd();
            if (object.command != null)
                message.command = String(object.command);
            if (object.predictionSync != null)
                message.predictionSync = object.predictionSync >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_StringCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {CNETMsg_StringCmd} message CNETMsg_StringCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_StringCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = "";
                object.predictionSync = 0;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.predictionSync != null && message.hasOwnProperty("predictionSync"))
                object.predictionSync = message.predictionSync;
            return object;
        };
    
        /**
         * Converts this CNETMsg_StringCmd to JSON.
         * @function toJSON
         * @memberof CNETMsg_StringCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_StringCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_StringCmd
         * @function getTypeUrl
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_StringCmd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_StringCmd";
        };
    
        return CNETMsg_StringCmd;
    })();
    
    $root.CNETMsg_SetConVar = (function() {
    
        /**
         * Properties of a CNETMsg_SetConVar.
         * @exports ICNETMsg_SetConVar
         * @interface ICNETMsg_SetConVar
         * @property {ICMsg_CVars|null} [convars] CNETMsg_SetConVar convars
         */
    
        /**
         * Constructs a new CNETMsg_SetConVar.
         * @exports CNETMsg_SetConVar
         * @classdesc Represents a CNETMsg_SetConVar.
         * @implements ICNETMsg_SetConVar
         * @constructor
         * @param {ICNETMsg_SetConVar=} [properties] Properties to set
         */
        function CNETMsg_SetConVar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SetConVar convars.
         * @member {ICMsg_CVars|null|undefined} convars
         * @memberof CNETMsg_SetConVar
         * @instance
         */
        CNETMsg_SetConVar.prototype.convars = null;
    
        /**
         * Creates a new CNETMsg_SetConVar instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {ICNETMsg_SetConVar=} [properties] Properties to set
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar instance
         */
        CNETMsg_SetConVar.create = function create(properties) {
            return new CNETMsg_SetConVar(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SetConVar message. Does not implicitly {@link CNETMsg_SetConVar.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {ICNETMsg_SetConVar} message CNETMsg_SetConVar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SetConVar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.convars != null && Object.hasOwnProperty.call(message, "convars"))
                $root.CMsg_CVars.encode(message.convars, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SetConVar message, length delimited. Does not implicitly {@link CNETMsg_SetConVar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {ICNETMsg_SetConVar} message CNETMsg_SetConVar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SetConVar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SetConVar message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SetConVar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SetConVar();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.convars = $root.CMsg_CVars.decode(reader, reader.uint32());
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
         * Decodes a CNETMsg_SetConVar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SetConVar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SetConVar message.
         * @function verify
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SetConVar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.convars != null && message.hasOwnProperty("convars")) {
                var error = $root.CMsg_CVars.verify(message.convars);
                if (error)
                    return "convars." + error;
            }
            return null;
        };
    
        /**
         * Creates a CNETMsg_SetConVar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar
         */
        CNETMsg_SetConVar.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SetConVar)
                return object;
            var message = new $root.CNETMsg_SetConVar();
            if (object.convars != null) {
                if (typeof object.convars !== "object")
                    throw TypeError(".CNETMsg_SetConVar.convars: object expected");
                message.convars = $root.CMsg_CVars.fromObject(object.convars);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SetConVar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {CNETMsg_SetConVar} message CNETMsg_SetConVar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SetConVar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.convars = null;
            if (message.convars != null && message.hasOwnProperty("convars"))
                object.convars = $root.CMsg_CVars.toObject(message.convars, options);
            return object;
        };
    
        /**
         * Converts this CNETMsg_SetConVar to JSON.
         * @function toJSON
         * @memberof CNETMsg_SetConVar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SetConVar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SetConVar
         * @function getTypeUrl
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SetConVar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SetConVar";
        };
    
        return CNETMsg_SetConVar;
    })();
    
    $root.CNETMsg_SignonState = (function() {
    
        /**
         * Properties of a CNETMsg_SignonState.
         * @exports ICNETMsg_SignonState
         * @interface ICNETMsg_SignonState
         * @property {SignonState_t|null} [signonState] CNETMsg_SignonState signonState
         * @property {number|null} [spawnCount] CNETMsg_SignonState spawnCount
         * @property {number|null} [numServerPlayers] CNETMsg_SignonState numServerPlayers
         * @property {Array.<string>|null} [playersNetworkids] CNETMsg_SignonState playersNetworkids
         * @property {string|null} [mapName] CNETMsg_SignonState mapName
         * @property {string|null} [addons] CNETMsg_SignonState addons
         */
    
        /**
         * Constructs a new CNETMsg_SignonState.
         * @exports CNETMsg_SignonState
         * @classdesc Represents a CNETMsg_SignonState.
         * @implements ICNETMsg_SignonState
         * @constructor
         * @param {ICNETMsg_SignonState=} [properties] Properties to set
         */
        function CNETMsg_SignonState(properties) {
            this.playersNetworkids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SignonState signonState.
         * @member {SignonState_t} signonState
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.signonState = 0;
    
        /**
         * CNETMsg_SignonState spawnCount.
         * @member {number} spawnCount
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.spawnCount = 0;
    
        /**
         * CNETMsg_SignonState numServerPlayers.
         * @member {number} numServerPlayers
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.numServerPlayers = 0;
    
        /**
         * CNETMsg_SignonState playersNetworkids.
         * @member {Array.<string>} playersNetworkids
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.playersNetworkids = $util.emptyArray;
    
        /**
         * CNETMsg_SignonState mapName.
         * @member {string} mapName
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.mapName = "";
    
        /**
         * CNETMsg_SignonState addons.
         * @member {string} addons
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.addons = "";
    
        /**
         * Creates a new CNETMsg_SignonState instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SignonState
         * @static
         * @param {ICNETMsg_SignonState=} [properties] Properties to set
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState instance
         */
        CNETMsg_SignonState.create = function create(properties) {
            return new CNETMsg_SignonState(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SignonState message. Does not implicitly {@link CNETMsg_SignonState.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SignonState
         * @static
         * @param {ICNETMsg_SignonState} message CNETMsg_SignonState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SignonState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signonState != null && Object.hasOwnProperty.call(message, "signonState"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.signonState);
            if (message.spawnCount != null && Object.hasOwnProperty.call(message, "spawnCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.spawnCount);
            if (message.numServerPlayers != null && Object.hasOwnProperty.call(message, "numServerPlayers"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.numServerPlayers);
            if (message.playersNetworkids != null && message.playersNetworkids.length)
                for (var i = 0; i < message.playersNetworkids.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.playersNetworkids[i]);
            if (message.mapName != null && Object.hasOwnProperty.call(message, "mapName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.mapName);
            if (message.addons != null && Object.hasOwnProperty.call(message, "addons"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.addons);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SignonState message, length delimited. Does not implicitly {@link CNETMsg_SignonState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SignonState
         * @static
         * @param {ICNETMsg_SignonState} message CNETMsg_SignonState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SignonState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SignonState message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SignonState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SignonState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SignonState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.signonState = reader.int32();
                        break;
                    }
                case 2: {
                        message.spawnCount = reader.uint32();
                        break;
                    }
                case 3: {
                        message.numServerPlayers = reader.uint32();
                        break;
                    }
                case 4: {
                        if (!(message.playersNetworkids && message.playersNetworkids.length))
                            message.playersNetworkids = [];
                        message.playersNetworkids.push(reader.string());
                        break;
                    }
                case 5: {
                        message.mapName = reader.string();
                        break;
                    }
                case 6: {
                        message.addons = reader.string();
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
         * Decodes a CNETMsg_SignonState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SignonState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SignonState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SignonState message.
         * @function verify
         * @memberof CNETMsg_SignonState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SignonState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signonState != null && message.hasOwnProperty("signonState"))
                switch (message.signonState) {
                default:
                    return "signonState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.spawnCount != null && message.hasOwnProperty("spawnCount"))
                if (!$util.isInteger(message.spawnCount))
                    return "spawnCount: integer expected";
            if (message.numServerPlayers != null && message.hasOwnProperty("numServerPlayers"))
                if (!$util.isInteger(message.numServerPlayers))
                    return "numServerPlayers: integer expected";
            if (message.playersNetworkids != null && message.hasOwnProperty("playersNetworkids")) {
                if (!Array.isArray(message.playersNetworkids))
                    return "playersNetworkids: array expected";
                for (var i = 0; i < message.playersNetworkids.length; ++i)
                    if (!$util.isString(message.playersNetworkids[i]))
                        return "playersNetworkids: string[] expected";
            }
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                if (!$util.isString(message.mapName))
                    return "mapName: string expected";
            if (message.addons != null && message.hasOwnProperty("addons"))
                if (!$util.isString(message.addons))
                    return "addons: string expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SignonState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SignonState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState
         */
        CNETMsg_SignonState.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SignonState)
                return object;
            var message = new $root.CNETMsg_SignonState();
            switch (object.signonState) {
            default:
                if (typeof object.signonState === "number") {
                    message.signonState = object.signonState;
                    break;
                }
                break;
            case "SIGNONSTATE_NONE":
            case 0:
                message.signonState = 0;
                break;
            case "SIGNONSTATE_CHALLENGE":
            case 1:
                message.signonState = 1;
                break;
            case "SIGNONSTATE_CONNECTED":
            case 2:
                message.signonState = 2;
                break;
            case "SIGNONSTATE_NEW":
            case 3:
                message.signonState = 3;
                break;
            case "SIGNONSTATE_PRESPAWN":
            case 4:
                message.signonState = 4;
                break;
            case "SIGNONSTATE_SPAWN":
            case 5:
                message.signonState = 5;
                break;
            case "SIGNONSTATE_FULL":
            case 6:
                message.signonState = 6;
                break;
            case "SIGNONSTATE_CHANGELEVEL":
            case 7:
                message.signonState = 7;
                break;
            }
            if (object.spawnCount != null)
                message.spawnCount = object.spawnCount >>> 0;
            if (object.numServerPlayers != null)
                message.numServerPlayers = object.numServerPlayers >>> 0;
            if (object.playersNetworkids) {
                if (!Array.isArray(object.playersNetworkids))
                    throw TypeError(".CNETMsg_SignonState.playersNetworkids: array expected");
                message.playersNetworkids = [];
                for (var i = 0; i < object.playersNetworkids.length; ++i)
                    message.playersNetworkids[i] = String(object.playersNetworkids[i]);
            }
            if (object.mapName != null)
                message.mapName = String(object.mapName);
            if (object.addons != null)
                message.addons = String(object.addons);
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SignonState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SignonState
         * @static
         * @param {CNETMsg_SignonState} message CNETMsg_SignonState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SignonState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.playersNetworkids = [];
            if (options.defaults) {
                object.signonState = options.enums === String ? "SIGNONSTATE_NONE" : 0;
                object.spawnCount = 0;
                object.numServerPlayers = 0;
                object.mapName = "";
                object.addons = "";
            }
            if (message.signonState != null && message.hasOwnProperty("signonState"))
                object.signonState = options.enums === String ? $root.SignonState_t[message.signonState] === undefined ? message.signonState : $root.SignonState_t[message.signonState] : message.signonState;
            if (message.spawnCount != null && message.hasOwnProperty("spawnCount"))
                object.spawnCount = message.spawnCount;
            if (message.numServerPlayers != null && message.hasOwnProperty("numServerPlayers"))
                object.numServerPlayers = message.numServerPlayers;
            if (message.playersNetworkids && message.playersNetworkids.length) {
                object.playersNetworkids = [];
                for (var j = 0; j < message.playersNetworkids.length; ++j)
                    object.playersNetworkids[j] = message.playersNetworkids[j];
            }
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                object.mapName = message.mapName;
            if (message.addons != null && message.hasOwnProperty("addons"))
                object.addons = message.addons;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SignonState to JSON.
         * @function toJSON
         * @memberof CNETMsg_SignonState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SignonState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SignonState
         * @function getTypeUrl
         * @memberof CNETMsg_SignonState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SignonState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SignonState";
        };
    
        return CNETMsg_SignonState;
    })();
    
    $root.CSVCMsg_GameEvent = (function() {
    
        /**
         * Properties of a CSVCMsg_GameEvent.
         * @exports ICSVCMsg_GameEvent
         * @interface ICSVCMsg_GameEvent
         * @property {string|null} [eventName] CSVCMsg_GameEvent eventName
         * @property {number|null} [eventid] CSVCMsg_GameEvent eventid
         * @property {Array.<CSVCMsg_GameEvent.Ikey_t>|null} [keys] CSVCMsg_GameEvent keys
         */
    
        /**
         * Constructs a new CSVCMsg_GameEvent.
         * @exports CSVCMsg_GameEvent
         * @classdesc Represents a CSVCMsg_GameEvent.
         * @implements ICSVCMsg_GameEvent
         * @constructor
         * @param {ICSVCMsg_GameEvent=} [properties] Properties to set
         */
        function CSVCMsg_GameEvent(properties) {
            this.keys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSVCMsg_GameEvent eventName.
         * @member {string} eventName
         * @memberof CSVCMsg_GameEvent
         * @instance
         */
        CSVCMsg_GameEvent.prototype.eventName = "";
    
        /**
         * CSVCMsg_GameEvent eventid.
         * @member {number} eventid
         * @memberof CSVCMsg_GameEvent
         * @instance
         */
        CSVCMsg_GameEvent.prototype.eventid = 0;
    
        /**
         * CSVCMsg_GameEvent keys.
         * @member {Array.<CSVCMsg_GameEvent.Ikey_t>} keys
         * @memberof CSVCMsg_GameEvent
         * @instance
         */
        CSVCMsg_GameEvent.prototype.keys = $util.emptyArray;
    
        /**
         * Creates a new CSVCMsg_GameEvent instance using the specified properties.
         * @function create
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {ICSVCMsg_GameEvent=} [properties] Properties to set
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent instance
         */
        CSVCMsg_GameEvent.create = function create(properties) {
            return new CSVCMsg_GameEvent(properties);
        };
    
        /**
         * Encodes the specified CSVCMsg_GameEvent message. Does not implicitly {@link CSVCMsg_GameEvent.verify|verify} messages.
         * @function encode
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {ICSVCMsg_GameEvent} message CSVCMsg_GameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventName != null && Object.hasOwnProperty.call(message, "eventName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventName);
            if (message.eventid != null && Object.hasOwnProperty.call(message, "eventid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.eventid);
            if (message.keys != null && message.keys.length)
                for (var i = 0; i < message.keys.length; ++i)
                    $root.CSVCMsg_GameEvent.key_t.encode(message.keys[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CSVCMsg_GameEvent message, length delimited. Does not implicitly {@link CSVCMsg_GameEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {ICSVCMsg_GameEvent} message CSVCMsg_GameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.eventName = reader.string();
                        break;
                    }
                case 2: {
                        message.eventid = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push($root.CSVCMsg_GameEvent.key_t.decode(reader, reader.uint32()));
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
         * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSVCMsg_GameEvent message.
         * @function verify
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSVCMsg_GameEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventName != null && message.hasOwnProperty("eventName"))
                if (!$util.isString(message.eventName))
                    return "eventName: string expected";
            if (message.eventid != null && message.hasOwnProperty("eventid"))
                if (!$util.isInteger(message.eventid))
                    return "eventid: integer expected";
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (var i = 0; i < message.keys.length; ++i) {
                    var error = $root.CSVCMsg_GameEvent.key_t.verify(message.keys[i]);
                    if (error)
                        return "keys." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CSVCMsg_GameEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent
         */
        CSVCMsg_GameEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CSVCMsg_GameEvent)
                return object;
            var message = new $root.CSVCMsg_GameEvent();
            if (object.eventName != null)
                message.eventName = String(object.eventName);
            if (object.eventid != null)
                message.eventid = object.eventid | 0;
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".CSVCMsg_GameEvent.keys: array expected");
                message.keys = [];
                for (var i = 0; i < object.keys.length; ++i) {
                    if (typeof object.keys[i] !== "object")
                        throw TypeError(".CSVCMsg_GameEvent.keys: object expected");
                    message.keys[i] = $root.CSVCMsg_GameEvent.key_t.fromObject(object.keys[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CSVCMsg_GameEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {CSVCMsg_GameEvent} message CSVCMsg_GameEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSVCMsg_GameEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.keys = [];
            if (options.defaults) {
                object.eventName = "";
                object.eventid = 0;
            }
            if (message.eventName != null && message.hasOwnProperty("eventName"))
                object.eventName = message.eventName;
            if (message.eventid != null && message.hasOwnProperty("eventid"))
                object.eventid = message.eventid;
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (var j = 0; j < message.keys.length; ++j)
                    object.keys[j] = $root.CSVCMsg_GameEvent.key_t.toObject(message.keys[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CSVCMsg_GameEvent to JSON.
         * @function toJSON
         * @memberof CSVCMsg_GameEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSVCMsg_GameEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSVCMsg_GameEvent
         * @function getTypeUrl
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSVCMsg_GameEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSVCMsg_GameEvent";
        };
    
        CSVCMsg_GameEvent.key_t = (function() {
    
            /**
             * Properties of a key_t.
             * @memberof CSVCMsg_GameEvent
             * @interface Ikey_t
             * @property {number|null} [type] key_t type
             * @property {string|null} [valString] key_t valString
             * @property {number|null} [valFloat] key_t valFloat
             * @property {number|null} [valLong] key_t valLong
             * @property {number|null} [valShort] key_t valShort
             * @property {number|null} [valByte] key_t valByte
             * @property {boolean|null} [valBool] key_t valBool
             * @property {number|Long|null} [valUint64] key_t valUint64
             */
    
            /**
             * Constructs a new key_t.
             * @memberof CSVCMsg_GameEvent
             * @classdesc Represents a key_t.
             * @implements Ikey_t
             * @constructor
             * @param {CSVCMsg_GameEvent.Ikey_t=} [properties] Properties to set
             */
            function key_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * key_t type.
             * @member {number} type
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.type = 0;
    
            /**
             * key_t valString.
             * @member {string} valString
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.valString = "";
    
            /**
             * key_t valFloat.
             * @member {number} valFloat
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.valFloat = 0;
    
            /**
             * key_t valLong.
             * @member {number} valLong
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.valLong = 0;
    
            /**
             * key_t valShort.
             * @member {number} valShort
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.valShort = 0;
    
            /**
             * key_t valByte.
             * @member {number} valByte
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.valByte = 0;
    
            /**
             * key_t valBool.
             * @member {boolean} valBool
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.valBool = false;
    
            /**
             * key_t valUint64.
             * @member {number|Long} valUint64
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.valUint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new key_t instance using the specified properties.
             * @function create
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.Ikey_t=} [properties] Properties to set
             * @returns {CSVCMsg_GameEvent.key_t} key_t instance
             */
            key_t.create = function create(properties) {
                return new key_t(properties);
            };
    
            /**
             * Encodes the specified key_t message. Does not implicitly {@link CSVCMsg_GameEvent.key_t.verify|verify} messages.
             * @function encode
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.Ikey_t} message key_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            key_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.valString != null && Object.hasOwnProperty.call(message, "valString"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.valString);
                if (message.valFloat != null && Object.hasOwnProperty.call(message, "valFloat"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.valFloat);
                if (message.valLong != null && Object.hasOwnProperty.call(message, "valLong"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.valLong);
                if (message.valShort != null && Object.hasOwnProperty.call(message, "valShort"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.valShort);
                if (message.valByte != null && Object.hasOwnProperty.call(message, "valByte"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.valByte);
                if (message.valBool != null && Object.hasOwnProperty.call(message, "valBool"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.valBool);
                if (message.valUint64 != null && Object.hasOwnProperty.call(message, "valUint64"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.valUint64);
                return writer;
            };
    
            /**
             * Encodes the specified key_t message, length delimited. Does not implicitly {@link CSVCMsg_GameEvent.key_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.Ikey_t} message key_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            key_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a key_t message from the specified reader or buffer.
             * @function decode
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CSVCMsg_GameEvent.key_t} key_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            key_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEvent.key_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.int32();
                            break;
                        }
                    case 2: {
                            message.valString = reader.string();
                            break;
                        }
                    case 3: {
                            message.valFloat = reader.float();
                            break;
                        }
                    case 4: {
                            message.valLong = reader.int32();
                            break;
                        }
                    case 5: {
                            message.valShort = reader.int32();
                            break;
                        }
                    case 6: {
                            message.valByte = reader.int32();
                            break;
                        }
                    case 7: {
                            message.valBool = reader.bool();
                            break;
                        }
                    case 8: {
                            message.valUint64 = reader.uint64();
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
             * Decodes a key_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CSVCMsg_GameEvent.key_t} key_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            key_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a key_t message.
             * @function verify
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            key_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                if (message.valString != null && message.hasOwnProperty("valString"))
                    if (!$util.isString(message.valString))
                        return "valString: string expected";
                if (message.valFloat != null && message.hasOwnProperty("valFloat"))
                    if (typeof message.valFloat !== "number")
                        return "valFloat: number expected";
                if (message.valLong != null && message.hasOwnProperty("valLong"))
                    if (!$util.isInteger(message.valLong))
                        return "valLong: integer expected";
                if (message.valShort != null && message.hasOwnProperty("valShort"))
                    if (!$util.isInteger(message.valShort))
                        return "valShort: integer expected";
                if (message.valByte != null && message.hasOwnProperty("valByte"))
                    if (!$util.isInteger(message.valByte))
                        return "valByte: integer expected";
                if (message.valBool != null && message.hasOwnProperty("valBool"))
                    if (typeof message.valBool !== "boolean")
                        return "valBool: boolean expected";
                if (message.valUint64 != null && message.hasOwnProperty("valUint64"))
                    if (!$util.isInteger(message.valUint64) && !(message.valUint64 && $util.isInteger(message.valUint64.low) && $util.isInteger(message.valUint64.high)))
                        return "valUint64: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a key_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CSVCMsg_GameEvent.key_t} key_t
             */
            key_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CSVCMsg_GameEvent.key_t)
                    return object;
                var message = new $root.CSVCMsg_GameEvent.key_t();
                if (object.type != null)
                    message.type = object.type | 0;
                if (object.valString != null)
                    message.valString = String(object.valString);
                if (object.valFloat != null)
                    message.valFloat = Number(object.valFloat);
                if (object.valLong != null)
                    message.valLong = object.valLong | 0;
                if (object.valShort != null)
                    message.valShort = object.valShort | 0;
                if (object.valByte != null)
                    message.valByte = object.valByte | 0;
                if (object.valBool != null)
                    message.valBool = Boolean(object.valBool);
                if (object.valUint64 != null)
                    if ($util.Long)
                        (message.valUint64 = $util.Long.fromValue(object.valUint64)).unsigned = true;
                    else if (typeof object.valUint64 === "string")
                        message.valUint64 = parseInt(object.valUint64, 10);
                    else if (typeof object.valUint64 === "number")
                        message.valUint64 = object.valUint64;
                    else if (typeof object.valUint64 === "object")
                        message.valUint64 = new $util.LongBits(object.valUint64.low >>> 0, object.valUint64.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a key_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.key_t} message key_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            key_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = 0;
                    object.valString = "";
                    object.valFloat = 0;
                    object.valLong = 0;
                    object.valShort = 0;
                    object.valByte = 0;
                    object.valBool = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.valUint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.valUint64 = options.longs === String ? "0" : 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.valString != null && message.hasOwnProperty("valString"))
                    object.valString = message.valString;
                if (message.valFloat != null && message.hasOwnProperty("valFloat"))
                    object.valFloat = options.json && !isFinite(message.valFloat) ? String(message.valFloat) : message.valFloat;
                if (message.valLong != null && message.hasOwnProperty("valLong"))
                    object.valLong = message.valLong;
                if (message.valShort != null && message.hasOwnProperty("valShort"))
                    object.valShort = message.valShort;
                if (message.valByte != null && message.hasOwnProperty("valByte"))
                    object.valByte = message.valByte;
                if (message.valBool != null && message.hasOwnProperty("valBool"))
                    object.valBool = message.valBool;
                if (message.valUint64 != null && message.hasOwnProperty("valUint64"))
                    if (typeof message.valUint64 === "number")
                        object.valUint64 = options.longs === String ? String(message.valUint64) : message.valUint64;
                    else
                        object.valUint64 = options.longs === String ? $util.Long.prototype.toString.call(message.valUint64) : options.longs === Number ? new $util.LongBits(message.valUint64.low >>> 0, message.valUint64.high >>> 0).toNumber(true) : message.valUint64;
                return object;
            };
    
            /**
             * Converts this key_t to JSON.
             * @function toJSON
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            key_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for key_t
             * @function getTypeUrl
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            key_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CSVCMsg_GameEvent.key_t";
            };
    
            return key_t;
        })();
    
        return CSVCMsg_GameEvent;
    })();
    
    $root.CSVCMsgList_GameEvents = (function() {
    
        /**
         * Properties of a CSVCMsgList_GameEvents.
         * @exports ICSVCMsgList_GameEvents
         * @interface ICSVCMsgList_GameEvents
         * @property {Array.<CSVCMsgList_GameEvents.Ievent_t>|null} [events] CSVCMsgList_GameEvents events
         */
    
        /**
         * Constructs a new CSVCMsgList_GameEvents.
         * @exports CSVCMsgList_GameEvents
         * @classdesc Represents a CSVCMsgList_GameEvents.
         * @implements ICSVCMsgList_GameEvents
         * @constructor
         * @param {ICSVCMsgList_GameEvents=} [properties] Properties to set
         */
        function CSVCMsgList_GameEvents(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSVCMsgList_GameEvents events.
         * @member {Array.<CSVCMsgList_GameEvents.Ievent_t>} events
         * @memberof CSVCMsgList_GameEvents
         * @instance
         */
        CSVCMsgList_GameEvents.prototype.events = $util.emptyArray;
    
        /**
         * Creates a new CSVCMsgList_GameEvents instance using the specified properties.
         * @function create
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {ICSVCMsgList_GameEvents=} [properties] Properties to set
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents instance
         */
        CSVCMsgList_GameEvents.create = function create(properties) {
            return new CSVCMsgList_GameEvents(properties);
        };
    
        /**
         * Encodes the specified CSVCMsgList_GameEvents message. Does not implicitly {@link CSVCMsgList_GameEvents.verify|verify} messages.
         * @function encode
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {ICSVCMsgList_GameEvents} message CSVCMsgList_GameEvents message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsgList_GameEvents.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.CSVCMsgList_GameEvents.event_t.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CSVCMsgList_GameEvents message, length delimited. Does not implicitly {@link CSVCMsgList_GameEvents.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {ICSVCMsgList_GameEvents} message CSVCMsgList_GameEvents message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsgList_GameEvents.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSVCMsgList_GameEvents message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsgList_GameEvents.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsgList_GameEvents();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.CSVCMsgList_GameEvents.event_t.decode(reader, reader.uint32()));
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
         * Decodes a CSVCMsgList_GameEvents message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsgList_GameEvents.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSVCMsgList_GameEvents message.
         * @function verify
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSVCMsgList_GameEvents.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.CSVCMsgList_GameEvents.event_t.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CSVCMsgList_GameEvents message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents
         */
        CSVCMsgList_GameEvents.fromObject = function fromObject(object) {
            if (object instanceof $root.CSVCMsgList_GameEvents)
                return object;
            var message = new $root.CSVCMsgList_GameEvents();
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".CSVCMsgList_GameEvents.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".CSVCMsgList_GameEvents.events: object expected");
                    message.events[i] = $root.CSVCMsgList_GameEvents.event_t.fromObject(object.events[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CSVCMsgList_GameEvents message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {CSVCMsgList_GameEvents} message CSVCMsgList_GameEvents
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSVCMsgList_GameEvents.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.CSVCMsgList_GameEvents.event_t.toObject(message.events[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CSVCMsgList_GameEvents to JSON.
         * @function toJSON
         * @memberof CSVCMsgList_GameEvents
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSVCMsgList_GameEvents.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSVCMsgList_GameEvents
         * @function getTypeUrl
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSVCMsgList_GameEvents.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSVCMsgList_GameEvents";
        };
    
        CSVCMsgList_GameEvents.event_t = (function() {
    
            /**
             * Properties of an event_t.
             * @memberof CSVCMsgList_GameEvents
             * @interface Ievent_t
             * @property {number|null} [tick] event_t tick
             * @property {ICSVCMsg_GameEvent|null} [event] event_t event
             */
    
            /**
             * Constructs a new event_t.
             * @memberof CSVCMsgList_GameEvents
             * @classdesc Represents an event_t.
             * @implements Ievent_t
             * @constructor
             * @param {CSVCMsgList_GameEvents.Ievent_t=} [properties] Properties to set
             */
            function event_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * event_t tick.
             * @member {number} tick
             * @memberof CSVCMsgList_GameEvents.event_t
             * @instance
             */
            event_t.prototype.tick = 0;
    
            /**
             * event_t event.
             * @member {ICSVCMsg_GameEvent|null|undefined} event
             * @memberof CSVCMsgList_GameEvents.event_t
             * @instance
             */
            event_t.prototype.event = null;
    
            /**
             * Creates a new event_t instance using the specified properties.
             * @function create
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.Ievent_t=} [properties] Properties to set
             * @returns {CSVCMsgList_GameEvents.event_t} event_t instance
             */
            event_t.create = function create(properties) {
                return new event_t(properties);
            };
    
            /**
             * Encodes the specified event_t message. Does not implicitly {@link CSVCMsgList_GameEvents.event_t.verify|verify} messages.
             * @function encode
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.Ievent_t} message event_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            event_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tick != null && Object.hasOwnProperty.call(message, "tick"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tick);
                if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                    $root.CSVCMsg_GameEvent.encode(message.event, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified event_t message, length delimited. Does not implicitly {@link CSVCMsgList_GameEvents.event_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.Ievent_t} message event_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            event_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an event_t message from the specified reader or buffer.
             * @function decode
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CSVCMsgList_GameEvents.event_t} event_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            event_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsgList_GameEvents.event_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.tick = reader.int32();
                            break;
                        }
                    case 2: {
                            message.event = $root.CSVCMsg_GameEvent.decode(reader, reader.uint32());
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
             * Decodes an event_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CSVCMsgList_GameEvents.event_t} event_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            event_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an event_t message.
             * @function verify
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            event_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tick != null && message.hasOwnProperty("tick"))
                    if (!$util.isInteger(message.tick))
                        return "tick: integer expected";
                if (message.event != null && message.hasOwnProperty("event")) {
                    var error = $root.CSVCMsg_GameEvent.verify(message.event);
                    if (error)
                        return "event." + error;
                }
                return null;
            };
    
            /**
             * Creates an event_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CSVCMsgList_GameEvents.event_t} event_t
             */
            event_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CSVCMsgList_GameEvents.event_t)
                    return object;
                var message = new $root.CSVCMsgList_GameEvents.event_t();
                if (object.tick != null)
                    message.tick = object.tick | 0;
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".CSVCMsgList_GameEvents.event_t.event: object expected");
                    message.event = $root.CSVCMsg_GameEvent.fromObject(object.event);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an event_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.event_t} message event_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            event_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tick = 0;
                    object.event = null;
                }
                if (message.tick != null && message.hasOwnProperty("tick"))
                    object.tick = message.tick;
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.CSVCMsg_GameEvent.toObject(message.event, options);
                return object;
            };
    
            /**
             * Converts this event_t to JSON.
             * @function toJSON
             * @memberof CSVCMsgList_GameEvents.event_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            event_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for event_t
             * @function getTypeUrl
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            event_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CSVCMsgList_GameEvents.event_t";
            };
    
            return event_t;
        })();
    
        return CSVCMsgList_GameEvents;
    })();
    
    $root.CNETMsg_SpawnGroup_Load = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_Load.
         * @exports ICNETMsg_SpawnGroup_Load
         * @interface ICNETMsg_SpawnGroup_Load
         * @property {string|null} [worldname] CNETMsg_SpawnGroup_Load worldname
         * @property {string|null} [entitylumpname] CNETMsg_SpawnGroup_Load entitylumpname
         * @property {string|null} [entityfiltername] CNETMsg_SpawnGroup_Load entityfiltername
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_Load spawngrouphandle
         * @property {number|null} [spawngroupownerhandle] CNETMsg_SpawnGroup_Load spawngroupownerhandle
         * @property {ICMsgVector|null} [worldOffsetPos] CNETMsg_SpawnGroup_Load worldOffsetPos
         * @property {ICMsgQAngle|null} [worldOffsetAngle] CNETMsg_SpawnGroup_Load worldOffsetAngle
         * @property {Uint8Array|null} [spawngroupmanifest] CNETMsg_SpawnGroup_Load spawngroupmanifest
         * @property {number|null} [flags] CNETMsg_SpawnGroup_Load flags
         * @property {number|null} [tickcount] CNETMsg_SpawnGroup_Load tickcount
         * @property {boolean|null} [manifestincomplete] CNETMsg_SpawnGroup_Load manifestincomplete
         * @property {string|null} [localnamefixup] CNETMsg_SpawnGroup_Load localnamefixup
         * @property {string|null} [parentnamefixup] CNETMsg_SpawnGroup_Load parentnamefixup
         * @property {number|null} [manifestloadpriority] CNETMsg_SpawnGroup_Load manifestloadpriority
         * @property {number|null} [worldgroupid] CNETMsg_SpawnGroup_Load worldgroupid
         * @property {number|null} [creationsequence] CNETMsg_SpawnGroup_Load creationsequence
         * @property {string|null} [savegamefilename] CNETMsg_SpawnGroup_Load savegamefilename
         * @property {number|null} [spawngroupparenthandle] CNETMsg_SpawnGroup_Load spawngroupparenthandle
         * @property {boolean|null} [leveltransition] CNETMsg_SpawnGroup_Load leveltransition
         * @property {string|null} [worldgroupname] CNETMsg_SpawnGroup_Load worldgroupname
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_Load.
         * @exports CNETMsg_SpawnGroup_Load
         * @classdesc Represents a CNETMsg_SpawnGroup_Load.
         * @implements ICNETMsg_SpawnGroup_Load
         * @constructor
         * @param {ICNETMsg_SpawnGroup_Load=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_Load(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_Load worldname.
         * @member {string} worldname
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldname = "";
    
        /**
         * CNETMsg_SpawnGroup_Load entitylumpname.
         * @member {string} entitylumpname
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.entitylumpname = "";
    
        /**
         * CNETMsg_SpawnGroup_Load entityfiltername.
         * @member {string} entityfiltername
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.entityfiltername = "";
    
        /**
         * CNETMsg_SpawnGroup_Load spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load spawngroupownerhandle.
         * @member {number} spawngroupownerhandle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngroupownerhandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load worldOffsetPos.
         * @member {ICMsgVector|null|undefined} worldOffsetPos
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldOffsetPos = null;
    
        /**
         * CNETMsg_SpawnGroup_Load worldOffsetAngle.
         * @member {ICMsgQAngle|null|undefined} worldOffsetAngle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldOffsetAngle = null;
    
        /**
         * CNETMsg_SpawnGroup_Load spawngroupmanifest.
         * @member {Uint8Array} spawngroupmanifest
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngroupmanifest = $util.newBuffer([]);
    
        /**
         * CNETMsg_SpawnGroup_Load flags.
         * @member {number} flags
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.flags = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load tickcount.
         * @member {number} tickcount
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.tickcount = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load manifestincomplete.
         * @member {boolean} manifestincomplete
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.manifestincomplete = false;
    
        /**
         * CNETMsg_SpawnGroup_Load localnamefixup.
         * @member {string} localnamefixup
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.localnamefixup = "";
    
        /**
         * CNETMsg_SpawnGroup_Load parentnamefixup.
         * @member {string} parentnamefixup
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.parentnamefixup = "";
    
        /**
         * CNETMsg_SpawnGroup_Load manifestloadpriority.
         * @member {number} manifestloadpriority
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.manifestloadpriority = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load worldgroupid.
         * @member {number} worldgroupid
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldgroupid = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load creationsequence.
         * @member {number} creationsequence
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.creationsequence = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load savegamefilename.
         * @member {string} savegamefilename
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.savegamefilename = "";
    
        /**
         * CNETMsg_SpawnGroup_Load spawngroupparenthandle.
         * @member {number} spawngroupparenthandle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngroupparenthandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load leveltransition.
         * @member {boolean} leveltransition
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.leveltransition = false;
    
        /**
         * CNETMsg_SpawnGroup_Load worldgroupname.
         * @member {string} worldgroupname
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldgroupname = "";
    
        /**
         * Creates a new CNETMsg_SpawnGroup_Load instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {ICNETMsg_SpawnGroup_Load=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load instance
         */
        CNETMsg_SpawnGroup_Load.create = function create(properties) {
            return new CNETMsg_SpawnGroup_Load(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Load message. Does not implicitly {@link CNETMsg_SpawnGroup_Load.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {ICNETMsg_SpawnGroup_Load} message CNETMsg_SpawnGroup_Load message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Load.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.worldname != null && Object.hasOwnProperty.call(message, "worldname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.worldname);
            if (message.entitylumpname != null && Object.hasOwnProperty.call(message, "entitylumpname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.entitylumpname);
            if (message.entityfiltername != null && Object.hasOwnProperty.call(message, "entityfiltername"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.entityfiltername);
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.spawngrouphandle);
            if (message.spawngroupownerhandle != null && Object.hasOwnProperty.call(message, "spawngroupownerhandle"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.spawngroupownerhandle);
            if (message.worldOffsetPos != null && Object.hasOwnProperty.call(message, "worldOffsetPos"))
                $root.CMsgVector.encode(message.worldOffsetPos, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.worldOffsetAngle != null && Object.hasOwnProperty.call(message, "worldOffsetAngle"))
                $root.CMsgQAngle.encode(message.worldOffsetAngle, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.spawngroupmanifest != null && Object.hasOwnProperty.call(message, "spawngroupmanifest"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.spawngroupmanifest);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.flags);
            if (message.tickcount != null && Object.hasOwnProperty.call(message, "tickcount"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.tickcount);
            if (message.manifestincomplete != null && Object.hasOwnProperty.call(message, "manifestincomplete"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.manifestincomplete);
            if (message.localnamefixup != null && Object.hasOwnProperty.call(message, "localnamefixup"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.localnamefixup);
            if (message.parentnamefixup != null && Object.hasOwnProperty.call(message, "parentnamefixup"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.parentnamefixup);
            if (message.manifestloadpriority != null && Object.hasOwnProperty.call(message, "manifestloadpriority"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.manifestloadpriority);
            if (message.worldgroupid != null && Object.hasOwnProperty.call(message, "worldgroupid"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.worldgroupid);
            if (message.creationsequence != null && Object.hasOwnProperty.call(message, "creationsequence"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.creationsequence);
            if (message.savegamefilename != null && Object.hasOwnProperty.call(message, "savegamefilename"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.savegamefilename);
            if (message.spawngroupparenthandle != null && Object.hasOwnProperty.call(message, "spawngroupparenthandle"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.spawngroupparenthandle);
            if (message.leveltransition != null && Object.hasOwnProperty.call(message, "leveltransition"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.leveltransition);
            if (message.worldgroupname != null && Object.hasOwnProperty.call(message, "worldgroupname"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.worldgroupname);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Load message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_Load.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {ICNETMsg_SpawnGroup_Load} message CNETMsg_SpawnGroup_Load message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Load.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_Load message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Load.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_Load();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.worldname = reader.string();
                        break;
                    }
                case 2: {
                        message.entitylumpname = reader.string();
                        break;
                    }
                case 3: {
                        message.entityfiltername = reader.string();
                        break;
                    }
                case 4: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 5: {
                        message.spawngroupownerhandle = reader.uint32();
                        break;
                    }
                case 6: {
                        message.worldOffsetPos = $root.CMsgVector.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.worldOffsetAngle = $root.CMsgQAngle.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.spawngroupmanifest = reader.bytes();
                        break;
                    }
                case 9: {
                        message.flags = reader.uint32();
                        break;
                    }
                case 10: {
                        message.tickcount = reader.int32();
                        break;
                    }
                case 11: {
                        message.manifestincomplete = reader.bool();
                        break;
                    }
                case 12: {
                        message.localnamefixup = reader.string();
                        break;
                    }
                case 13: {
                        message.parentnamefixup = reader.string();
                        break;
                    }
                case 14: {
                        message.manifestloadpriority = reader.int32();
                        break;
                    }
                case 15: {
                        message.worldgroupid = reader.uint32();
                        break;
                    }
                case 16: {
                        message.creationsequence = reader.uint32();
                        break;
                    }
                case 17: {
                        message.savegamefilename = reader.string();
                        break;
                    }
                case 18: {
                        message.spawngroupparenthandle = reader.uint32();
                        break;
                    }
                case 19: {
                        message.leveltransition = reader.bool();
                        break;
                    }
                case 20: {
                        message.worldgroupname = reader.string();
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
         * Decodes a CNETMsg_SpawnGroup_Load message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Load.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_Load message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_Load.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.worldname != null && message.hasOwnProperty("worldname"))
                if (!$util.isString(message.worldname))
                    return "worldname: string expected";
            if (message.entitylumpname != null && message.hasOwnProperty("entitylumpname"))
                if (!$util.isString(message.entitylumpname))
                    return "entitylumpname: string expected";
            if (message.entityfiltername != null && message.hasOwnProperty("entityfiltername"))
                if (!$util.isString(message.entityfiltername))
                    return "entityfiltername: string expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.spawngroupownerhandle != null && message.hasOwnProperty("spawngroupownerhandle"))
                if (!$util.isInteger(message.spawngroupownerhandle))
                    return "spawngroupownerhandle: integer expected";
            if (message.worldOffsetPos != null && message.hasOwnProperty("worldOffsetPos")) {
                var error = $root.CMsgVector.verify(message.worldOffsetPos);
                if (error)
                    return "worldOffsetPos." + error;
            }
            if (message.worldOffsetAngle != null && message.hasOwnProperty("worldOffsetAngle")) {
                var error = $root.CMsgQAngle.verify(message.worldOffsetAngle);
                if (error)
                    return "worldOffsetAngle." + error;
            }
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                if (!(message.spawngroupmanifest && typeof message.spawngroupmanifest.length === "number" || $util.isString(message.spawngroupmanifest)))
                    return "spawngroupmanifest: buffer expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                if (!$util.isInteger(message.tickcount))
                    return "tickcount: integer expected";
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                if (typeof message.manifestincomplete !== "boolean")
                    return "manifestincomplete: boolean expected";
            if (message.localnamefixup != null && message.hasOwnProperty("localnamefixup"))
                if (!$util.isString(message.localnamefixup))
                    return "localnamefixup: string expected";
            if (message.parentnamefixup != null && message.hasOwnProperty("parentnamefixup"))
                if (!$util.isString(message.parentnamefixup))
                    return "parentnamefixup: string expected";
            if (message.manifestloadpriority != null && message.hasOwnProperty("manifestloadpriority"))
                if (!$util.isInteger(message.manifestloadpriority))
                    return "manifestloadpriority: integer expected";
            if (message.worldgroupid != null && message.hasOwnProperty("worldgroupid"))
                if (!$util.isInteger(message.worldgroupid))
                    return "worldgroupid: integer expected";
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                if (!$util.isInteger(message.creationsequence))
                    return "creationsequence: integer expected";
            if (message.savegamefilename != null && message.hasOwnProperty("savegamefilename"))
                if (!$util.isString(message.savegamefilename))
                    return "savegamefilename: string expected";
            if (message.spawngroupparenthandle != null && message.hasOwnProperty("spawngroupparenthandle"))
                if (!$util.isInteger(message.spawngroupparenthandle))
                    return "spawngroupparenthandle: integer expected";
            if (message.leveltransition != null && message.hasOwnProperty("leveltransition"))
                if (typeof message.leveltransition !== "boolean")
                    return "leveltransition: boolean expected";
            if (message.worldgroupname != null && message.hasOwnProperty("worldgroupname"))
                if (!$util.isString(message.worldgroupname))
                    return "worldgroupname: string expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_Load message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load
         */
        CNETMsg_SpawnGroup_Load.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_Load)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_Load();
            if (object.worldname != null)
                message.worldname = String(object.worldname);
            if (object.entitylumpname != null)
                message.entitylumpname = String(object.entitylumpname);
            if (object.entityfiltername != null)
                message.entityfiltername = String(object.entityfiltername);
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.spawngroupownerhandle != null)
                message.spawngroupownerhandle = object.spawngroupownerhandle >>> 0;
            if (object.worldOffsetPos != null) {
                if (typeof object.worldOffsetPos !== "object")
                    throw TypeError(".CNETMsg_SpawnGroup_Load.worldOffsetPos: object expected");
                message.worldOffsetPos = $root.CMsgVector.fromObject(object.worldOffsetPos);
            }
            if (object.worldOffsetAngle != null) {
                if (typeof object.worldOffsetAngle !== "object")
                    throw TypeError(".CNETMsg_SpawnGroup_Load.worldOffsetAngle: object expected");
                message.worldOffsetAngle = $root.CMsgQAngle.fromObject(object.worldOffsetAngle);
            }
            if (object.spawngroupmanifest != null)
                if (typeof object.spawngroupmanifest === "string")
                    $util.base64.decode(object.spawngroupmanifest, message.spawngroupmanifest = $util.newBuffer($util.base64.length(object.spawngroupmanifest)), 0);
                else if (object.spawngroupmanifest.length >= 0)
                    message.spawngroupmanifest = object.spawngroupmanifest;
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.tickcount != null)
                message.tickcount = object.tickcount | 0;
            if (object.manifestincomplete != null)
                message.manifestincomplete = Boolean(object.manifestincomplete);
            if (object.localnamefixup != null)
                message.localnamefixup = String(object.localnamefixup);
            if (object.parentnamefixup != null)
                message.parentnamefixup = String(object.parentnamefixup);
            if (object.manifestloadpriority != null)
                message.manifestloadpriority = object.manifestloadpriority | 0;
            if (object.worldgroupid != null)
                message.worldgroupid = object.worldgroupid >>> 0;
            if (object.creationsequence != null)
                message.creationsequence = object.creationsequence >>> 0;
            if (object.savegamefilename != null)
                message.savegamefilename = String(object.savegamefilename);
            if (object.spawngroupparenthandle != null)
                message.spawngroupparenthandle = object.spawngroupparenthandle >>> 0;
            if (object.leveltransition != null)
                message.leveltransition = Boolean(object.leveltransition);
            if (object.worldgroupname != null)
                message.worldgroupname = String(object.worldgroupname);
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_Load message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {CNETMsg_SpawnGroup_Load} message CNETMsg_SpawnGroup_Load
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_Load.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.worldname = "";
                object.entitylumpname = "";
                object.entityfiltername = "";
                object.spawngrouphandle = 0;
                object.spawngroupownerhandle = 0;
                object.worldOffsetPos = null;
                object.worldOffsetAngle = null;
                if (options.bytes === String)
                    object.spawngroupmanifest = "";
                else {
                    object.spawngroupmanifest = [];
                    if (options.bytes !== Array)
                        object.spawngroupmanifest = $util.newBuffer(object.spawngroupmanifest);
                }
                object.flags = 0;
                object.tickcount = 0;
                object.manifestincomplete = false;
                object.localnamefixup = "";
                object.parentnamefixup = "";
                object.manifestloadpriority = 0;
                object.worldgroupid = 0;
                object.creationsequence = 0;
                object.savegamefilename = "";
                object.spawngroupparenthandle = 0;
                object.leveltransition = false;
                object.worldgroupname = "";
            }
            if (message.worldname != null && message.hasOwnProperty("worldname"))
                object.worldname = message.worldname;
            if (message.entitylumpname != null && message.hasOwnProperty("entitylumpname"))
                object.entitylumpname = message.entitylumpname;
            if (message.entityfiltername != null && message.hasOwnProperty("entityfiltername"))
                object.entityfiltername = message.entityfiltername;
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.spawngroupownerhandle != null && message.hasOwnProperty("spawngroupownerhandle"))
                object.spawngroupownerhandle = message.spawngroupownerhandle;
            if (message.worldOffsetPos != null && message.hasOwnProperty("worldOffsetPos"))
                object.worldOffsetPos = $root.CMsgVector.toObject(message.worldOffsetPos, options);
            if (message.worldOffsetAngle != null && message.hasOwnProperty("worldOffsetAngle"))
                object.worldOffsetAngle = $root.CMsgQAngle.toObject(message.worldOffsetAngle, options);
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                object.spawngroupmanifest = options.bytes === String ? $util.base64.encode(message.spawngroupmanifest, 0, message.spawngroupmanifest.length) : options.bytes === Array ? Array.prototype.slice.call(message.spawngroupmanifest) : message.spawngroupmanifest;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                object.tickcount = message.tickcount;
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                object.manifestincomplete = message.manifestincomplete;
            if (message.localnamefixup != null && message.hasOwnProperty("localnamefixup"))
                object.localnamefixup = message.localnamefixup;
            if (message.parentnamefixup != null && message.hasOwnProperty("parentnamefixup"))
                object.parentnamefixup = message.parentnamefixup;
            if (message.manifestloadpriority != null && message.hasOwnProperty("manifestloadpriority"))
                object.manifestloadpriority = message.manifestloadpriority;
            if (message.worldgroupid != null && message.hasOwnProperty("worldgroupid"))
                object.worldgroupid = message.worldgroupid;
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                object.creationsequence = message.creationsequence;
            if (message.savegamefilename != null && message.hasOwnProperty("savegamefilename"))
                object.savegamefilename = message.savegamefilename;
            if (message.spawngroupparenthandle != null && message.hasOwnProperty("spawngroupparenthandle"))
                object.spawngroupparenthandle = message.spawngroupparenthandle;
            if (message.leveltransition != null && message.hasOwnProperty("leveltransition"))
                object.leveltransition = message.leveltransition;
            if (message.worldgroupname != null && message.hasOwnProperty("worldgroupname"))
                object.worldgroupname = message.worldgroupname;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_Load to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_Load.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_Load
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_Load.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_Load";
        };
    
        return CNETMsg_SpawnGroup_Load;
    })();
    
    $root.CNETMsg_SpawnGroup_ManifestUpdate = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_ManifestUpdate.
         * @exports ICNETMsg_SpawnGroup_ManifestUpdate
         * @interface ICNETMsg_SpawnGroup_ManifestUpdate
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_ManifestUpdate spawngrouphandle
         * @property {Uint8Array|null} [spawngroupmanifest] CNETMsg_SpawnGroup_ManifestUpdate spawngroupmanifest
         * @property {boolean|null} [manifestincomplete] CNETMsg_SpawnGroup_ManifestUpdate manifestincomplete
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_ManifestUpdate.
         * @exports CNETMsg_SpawnGroup_ManifestUpdate
         * @classdesc Represents a CNETMsg_SpawnGroup_ManifestUpdate.
         * @implements ICNETMsg_SpawnGroup_ManifestUpdate
         * @constructor
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_ManifestUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_ManifestUpdate spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_ManifestUpdate spawngroupmanifest.
         * @member {Uint8Array} spawngroupmanifest
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.spawngroupmanifest = $util.newBuffer([]);
    
        /**
         * CNETMsg_SpawnGroup_ManifestUpdate manifestincomplete.
         * @member {boolean} manifestincomplete
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.manifestincomplete = false;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_ManifestUpdate instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.create = function create(properties) {
            return new CNETMsg_SpawnGroup_ManifestUpdate(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_ManifestUpdate message. Does not implicitly {@link CNETMsg_SpawnGroup_ManifestUpdate.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate} message CNETMsg_SpawnGroup_ManifestUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_ManifestUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            if (message.spawngroupmanifest != null && Object.hasOwnProperty.call(message, "spawngroupmanifest"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.spawngroupmanifest);
            if (message.manifestincomplete != null && Object.hasOwnProperty.call(message, "manifestincomplete"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.manifestincomplete);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_ManifestUpdate message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_ManifestUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate} message CNETMsg_SpawnGroup_ManifestUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_ManifestUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_ManifestUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_ManifestUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_ManifestUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 2: {
                        message.spawngroupmanifest = reader.bytes();
                        break;
                    }
                case 3: {
                        message.manifestincomplete = reader.bool();
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
         * Decodes a CNETMsg_SpawnGroup_ManifestUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_ManifestUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_ManifestUpdate message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_ManifestUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                if (!(message.spawngroupmanifest && typeof message.spawngroupmanifest.length === "number" || $util.isString(message.spawngroupmanifest)))
                    return "spawngroupmanifest: buffer expected";
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                if (typeof message.manifestincomplete !== "boolean")
                    return "manifestincomplete: boolean expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_ManifestUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate
         */
        CNETMsg_SpawnGroup_ManifestUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_ManifestUpdate)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_ManifestUpdate();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.spawngroupmanifest != null)
                if (typeof object.spawngroupmanifest === "string")
                    $util.base64.decode(object.spawngroupmanifest, message.spawngroupmanifest = $util.newBuffer($util.base64.length(object.spawngroupmanifest)), 0);
                else if (object.spawngroupmanifest.length >= 0)
                    message.spawngroupmanifest = object.spawngroupmanifest;
            if (object.manifestincomplete != null)
                message.manifestincomplete = Boolean(object.manifestincomplete);
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_ManifestUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {CNETMsg_SpawnGroup_ManifestUpdate} message CNETMsg_SpawnGroup_ManifestUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_ManifestUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.spawngrouphandle = 0;
                if (options.bytes === String)
                    object.spawngroupmanifest = "";
                else {
                    object.spawngroupmanifest = [];
                    if (options.bytes !== Array)
                        object.spawngroupmanifest = $util.newBuffer(object.spawngroupmanifest);
                }
                object.manifestincomplete = false;
            }
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                object.spawngroupmanifest = options.bytes === String ? $util.base64.encode(message.spawngroupmanifest, 0, message.spawngroupmanifest.length) : options.bytes === Array ? Array.prototype.slice.call(message.spawngroupmanifest) : message.spawngroupmanifest;
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                object.manifestincomplete = message.manifestincomplete;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_ManifestUpdate to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_ManifestUpdate
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_ManifestUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_ManifestUpdate";
        };
    
        return CNETMsg_SpawnGroup_ManifestUpdate;
    })();
    
    $root.CNETMsg_SpawnGroup_SetCreationTick = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_SetCreationTick.
         * @exports ICNETMsg_SpawnGroup_SetCreationTick
         * @interface ICNETMsg_SpawnGroup_SetCreationTick
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_SetCreationTick spawngrouphandle
         * @property {number|null} [tickcount] CNETMsg_SpawnGroup_SetCreationTick tickcount
         * @property {number|null} [creationsequence] CNETMsg_SpawnGroup_SetCreationTick creationsequence
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_SetCreationTick.
         * @exports CNETMsg_SpawnGroup_SetCreationTick
         * @classdesc Represents a CNETMsg_SpawnGroup_SetCreationTick.
         * @implements ICNETMsg_SpawnGroup_SetCreationTick
         * @constructor
         * @param {ICNETMsg_SpawnGroup_SetCreationTick=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_SetCreationTick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_SetCreationTick spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_SetCreationTick tickcount.
         * @member {number} tickcount
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.tickcount = 0;
    
        /**
         * CNETMsg_SpawnGroup_SetCreationTick creationsequence.
         * @member {number} creationsequence
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.creationsequence = 0;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_SetCreationTick instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {ICNETMsg_SpawnGroup_SetCreationTick=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.create = function create(properties) {
            return new CNETMsg_SpawnGroup_SetCreationTick(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_SetCreationTick message. Does not implicitly {@link CNETMsg_SpawnGroup_SetCreationTick.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {ICNETMsg_SpawnGroup_SetCreationTick} message CNETMsg_SpawnGroup_SetCreationTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_SetCreationTick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            if (message.tickcount != null && Object.hasOwnProperty.call(message, "tickcount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tickcount);
            if (message.creationsequence != null && Object.hasOwnProperty.call(message, "creationsequence"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.creationsequence);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_SetCreationTick message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_SetCreationTick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {ICNETMsg_SpawnGroup_SetCreationTick} message CNETMsg_SpawnGroup_SetCreationTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_SetCreationTick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_SetCreationTick message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_SetCreationTick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_SetCreationTick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 2: {
                        message.tickcount = reader.int32();
                        break;
                    }
                case 3: {
                        message.creationsequence = reader.uint32();
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
         * Decodes a CNETMsg_SpawnGroup_SetCreationTick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_SetCreationTick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_SetCreationTick message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_SetCreationTick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                if (!$util.isInteger(message.tickcount))
                    return "tickcount: integer expected";
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                if (!$util.isInteger(message.creationsequence))
                    return "creationsequence: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_SetCreationTick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick
         */
        CNETMsg_SpawnGroup_SetCreationTick.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_SetCreationTick)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_SetCreationTick();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.tickcount != null)
                message.tickcount = object.tickcount | 0;
            if (object.creationsequence != null)
                message.creationsequence = object.creationsequence >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_SetCreationTick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {CNETMsg_SpawnGroup_SetCreationTick} message CNETMsg_SpawnGroup_SetCreationTick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_SetCreationTick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.spawngrouphandle = 0;
                object.tickcount = 0;
                object.creationsequence = 0;
            }
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                object.tickcount = message.tickcount;
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                object.creationsequence = message.creationsequence;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_SetCreationTick to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_SetCreationTick
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_SetCreationTick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_SetCreationTick";
        };
    
        return CNETMsg_SpawnGroup_SetCreationTick;
    })();
    
    $root.CNETMsg_SpawnGroup_Unload = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_Unload.
         * @exports ICNETMsg_SpawnGroup_Unload
         * @interface ICNETMsg_SpawnGroup_Unload
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_Unload spawngrouphandle
         * @property {number|null} [flags] CNETMsg_SpawnGroup_Unload flags
         * @property {number|null} [tickcount] CNETMsg_SpawnGroup_Unload tickcount
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_Unload.
         * @exports CNETMsg_SpawnGroup_Unload
         * @classdesc Represents a CNETMsg_SpawnGroup_Unload.
         * @implements ICNETMsg_SpawnGroup_Unload
         * @constructor
         * @param {ICNETMsg_SpawnGroup_Unload=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_Unload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_Unload spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         */
        CNETMsg_SpawnGroup_Unload.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Unload flags.
         * @member {number} flags
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         */
        CNETMsg_SpawnGroup_Unload.prototype.flags = 0;
    
        /**
         * CNETMsg_SpawnGroup_Unload tickcount.
         * @member {number} tickcount
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         */
        CNETMsg_SpawnGroup_Unload.prototype.tickcount = 0;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_Unload instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {ICNETMsg_SpawnGroup_Unload=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload instance
         */
        CNETMsg_SpawnGroup_Unload.create = function create(properties) {
            return new CNETMsg_SpawnGroup_Unload(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Unload message. Does not implicitly {@link CNETMsg_SpawnGroup_Unload.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {ICNETMsg_SpawnGroup_Unload} message CNETMsg_SpawnGroup_Unload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Unload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.flags);
            if (message.tickcount != null && Object.hasOwnProperty.call(message, "tickcount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tickcount);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Unload message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_Unload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {ICNETMsg_SpawnGroup_Unload} message CNETMsg_SpawnGroup_Unload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Unload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_Unload message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Unload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_Unload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 2: {
                        message.flags = reader.uint32();
                        break;
                    }
                case 3: {
                        message.tickcount = reader.int32();
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
         * Decodes a CNETMsg_SpawnGroup_Unload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Unload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_Unload message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_Unload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                if (!$util.isInteger(message.tickcount))
                    return "tickcount: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_Unload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload
         */
        CNETMsg_SpawnGroup_Unload.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_Unload)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_Unload();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.tickcount != null)
                message.tickcount = object.tickcount | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_Unload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {CNETMsg_SpawnGroup_Unload} message CNETMsg_SpawnGroup_Unload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_Unload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.spawngrouphandle = 0;
                object.flags = 0;
                object.tickcount = 0;
            }
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                object.tickcount = message.tickcount;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_Unload to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_Unload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_Unload
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_Unload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_Unload";
        };
    
        return CNETMsg_SpawnGroup_Unload;
    })();
    
    $root.CNETMsg_SpawnGroup_LoadCompleted = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_LoadCompleted.
         * @exports ICNETMsg_SpawnGroup_LoadCompleted
         * @interface ICNETMsg_SpawnGroup_LoadCompleted
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_LoadCompleted spawngrouphandle
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_LoadCompleted.
         * @exports CNETMsg_SpawnGroup_LoadCompleted
         * @classdesc Represents a CNETMsg_SpawnGroup_LoadCompleted.
         * @implements ICNETMsg_SpawnGroup_LoadCompleted
         * @constructor
         * @param {ICNETMsg_SpawnGroup_LoadCompleted=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_LoadCompleted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_LoadCompleted spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @instance
         */
        CNETMsg_SpawnGroup_LoadCompleted.prototype.spawngrouphandle = 0;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_LoadCompleted instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {ICNETMsg_SpawnGroup_LoadCompleted=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted instance
         */
        CNETMsg_SpawnGroup_LoadCompleted.create = function create(properties) {
            return new CNETMsg_SpawnGroup_LoadCompleted(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_LoadCompleted message. Does not implicitly {@link CNETMsg_SpawnGroup_LoadCompleted.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {ICNETMsg_SpawnGroup_LoadCompleted} message CNETMsg_SpawnGroup_LoadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_LoadCompleted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_LoadCompleted message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_LoadCompleted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {ICNETMsg_SpawnGroup_LoadCompleted} message CNETMsg_SpawnGroup_LoadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_LoadCompleted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_LoadCompleted message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_LoadCompleted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_LoadCompleted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
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
         * Decodes a CNETMsg_SpawnGroup_LoadCompleted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_LoadCompleted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_LoadCompleted message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_LoadCompleted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_LoadCompleted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted
         */
        CNETMsg_SpawnGroup_LoadCompleted.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_LoadCompleted)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_LoadCompleted();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_LoadCompleted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {CNETMsg_SpawnGroup_LoadCompleted} message CNETMsg_SpawnGroup_LoadCompleted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_LoadCompleted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.spawngrouphandle = 0;
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_LoadCompleted to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_LoadCompleted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_LoadCompleted
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_LoadCompleted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_LoadCompleted";
        };
    
        return CNETMsg_SpawnGroup_LoadCompleted;
    })();
    
    $root.CSVCMsg_GameSessionConfiguration = (function() {
    
        /**
         * Properties of a CSVCMsg_GameSessionConfiguration.
         * @exports ICSVCMsg_GameSessionConfiguration
         * @interface ICSVCMsg_GameSessionConfiguration
         * @property {boolean|null} [isMultiplayer] CSVCMsg_GameSessionConfiguration isMultiplayer
         * @property {boolean|null} [isLoadsavegame] CSVCMsg_GameSessionConfiguration isLoadsavegame
         * @property {boolean|null} [isBackgroundMap] CSVCMsg_GameSessionConfiguration isBackgroundMap
         * @property {boolean|null} [isHeadless] CSVCMsg_GameSessionConfiguration isHeadless
         * @property {number|null} [minClientLimit] CSVCMsg_GameSessionConfiguration minClientLimit
         * @property {number|null} [maxClientLimit] CSVCMsg_GameSessionConfiguration maxClientLimit
         * @property {number|null} [maxClients] CSVCMsg_GameSessionConfiguration maxClients
         * @property {number|null} [tickInterval] CSVCMsg_GameSessionConfiguration tickInterval
         * @property {string|null} [hostname] CSVCMsg_GameSessionConfiguration hostname
         * @property {string|null} [savegamename] CSVCMsg_GameSessionConfiguration savegamename
         * @property {string|null} [s1Mapname] CSVCMsg_GameSessionConfiguration s1Mapname
         * @property {string|null} [gamemode] CSVCMsg_GameSessionConfiguration gamemode
         * @property {string|null} [serverIpAddress] CSVCMsg_GameSessionConfiguration serverIpAddress
         * @property {Uint8Array|null} [data] CSVCMsg_GameSessionConfiguration data
         * @property {boolean|null} [isLocalonly] CSVCMsg_GameSessionConfiguration isLocalonly
         * @property {boolean|null} [noSteamServer] CSVCMsg_GameSessionConfiguration noSteamServer
         * @property {boolean|null} [isTransition] CSVCMsg_GameSessionConfiguration isTransition
         * @property {string|null} [previouslevel] CSVCMsg_GameSessionConfiguration previouslevel
         * @property {string|null} [landmarkname] CSVCMsg_GameSessionConfiguration landmarkname
         */
    
        /**
         * Constructs a new CSVCMsg_GameSessionConfiguration.
         * @exports CSVCMsg_GameSessionConfiguration
         * @classdesc Represents a CSVCMsg_GameSessionConfiguration.
         * @implements ICSVCMsg_GameSessionConfiguration
         * @constructor
         * @param {ICSVCMsg_GameSessionConfiguration=} [properties] Properties to set
         */
        function CSVCMsg_GameSessionConfiguration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSVCMsg_GameSessionConfiguration isMultiplayer.
         * @member {boolean} isMultiplayer
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.isMultiplayer = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration isLoadsavegame.
         * @member {boolean} isLoadsavegame
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.isLoadsavegame = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration isBackgroundMap.
         * @member {boolean} isBackgroundMap
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.isBackgroundMap = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration isHeadless.
         * @member {boolean} isHeadless
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.isHeadless = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration minClientLimit.
         * @member {number} minClientLimit
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.minClientLimit = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration maxClientLimit.
         * @member {number} maxClientLimit
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.maxClientLimit = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration maxClients.
         * @member {number} maxClients
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.maxClients = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration tickInterval.
         * @member {number} tickInterval
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.tickInterval = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration hostname.
         * @member {string} hostname
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.hostname = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration savegamename.
         * @member {string} savegamename
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.savegamename = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration s1Mapname.
         * @member {string} s1Mapname
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.s1Mapname = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration gamemode.
         * @member {string} gamemode
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.gamemode = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration serverIpAddress.
         * @member {string} serverIpAddress
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.serverIpAddress = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration data.
         * @member {Uint8Array} data
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.data = $util.newBuffer([]);
    
        /**
         * CSVCMsg_GameSessionConfiguration isLocalonly.
         * @member {boolean} isLocalonly
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.isLocalonly = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration noSteamServer.
         * @member {boolean} noSteamServer
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.noSteamServer = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration isTransition.
         * @member {boolean} isTransition
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.isTransition = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration previouslevel.
         * @member {string} previouslevel
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.previouslevel = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration landmarkname.
         * @member {string} landmarkname
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.landmarkname = "";
    
        /**
         * Creates a new CSVCMsg_GameSessionConfiguration instance using the specified properties.
         * @function create
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {ICSVCMsg_GameSessionConfiguration=} [properties] Properties to set
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration instance
         */
        CSVCMsg_GameSessionConfiguration.create = function create(properties) {
            return new CSVCMsg_GameSessionConfiguration(properties);
        };
    
        /**
         * Encodes the specified CSVCMsg_GameSessionConfiguration message. Does not implicitly {@link CSVCMsg_GameSessionConfiguration.verify|verify} messages.
         * @function encode
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {ICSVCMsg_GameSessionConfiguration} message CSVCMsg_GameSessionConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameSessionConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isMultiplayer != null && Object.hasOwnProperty.call(message, "isMultiplayer"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isMultiplayer);
            if (message.isLoadsavegame != null && Object.hasOwnProperty.call(message, "isLoadsavegame"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isLoadsavegame);
            if (message.isBackgroundMap != null && Object.hasOwnProperty.call(message, "isBackgroundMap"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isBackgroundMap);
            if (message.isHeadless != null && Object.hasOwnProperty.call(message, "isHeadless"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isHeadless);
            if (message.minClientLimit != null && Object.hasOwnProperty.call(message, "minClientLimit"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.minClientLimit);
            if (message.maxClientLimit != null && Object.hasOwnProperty.call(message, "maxClientLimit"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.maxClientLimit);
            if (message.maxClients != null && Object.hasOwnProperty.call(message, "maxClients"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.maxClients);
            if (message.tickInterval != null && Object.hasOwnProperty.call(message, "tickInterval"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.tickInterval);
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.hostname);
            if (message.savegamename != null && Object.hasOwnProperty.call(message, "savegamename"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.savegamename);
            if (message.s1Mapname != null && Object.hasOwnProperty.call(message, "s1Mapname"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.s1Mapname);
            if (message.gamemode != null && Object.hasOwnProperty.call(message, "gamemode"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.gamemode);
            if (message.serverIpAddress != null && Object.hasOwnProperty.call(message, "serverIpAddress"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.serverIpAddress);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.data);
            if (message.isLocalonly != null && Object.hasOwnProperty.call(message, "isLocalonly"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.isLocalonly);
            if (message.isTransition != null && Object.hasOwnProperty.call(message, "isTransition"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.isTransition);
            if (message.previouslevel != null && Object.hasOwnProperty.call(message, "previouslevel"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.previouslevel);
            if (message.landmarkname != null && Object.hasOwnProperty.call(message, "landmarkname"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.landmarkname);
            if (message.noSteamServer != null && Object.hasOwnProperty.call(message, "noSteamServer"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.noSteamServer);
            return writer;
        };
    
        /**
         * Encodes the specified CSVCMsg_GameSessionConfiguration message, length delimited. Does not implicitly {@link CSVCMsg_GameSessionConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {ICSVCMsg_GameSessionConfiguration} message CSVCMsg_GameSessionConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameSessionConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSVCMsg_GameSessionConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameSessionConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameSessionConfiguration();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isMultiplayer = reader.bool();
                        break;
                    }
                case 2: {
                        message.isLoadsavegame = reader.bool();
                        break;
                    }
                case 3: {
                        message.isBackgroundMap = reader.bool();
                        break;
                    }
                case 4: {
                        message.isHeadless = reader.bool();
                        break;
                    }
                case 5: {
                        message.minClientLimit = reader.uint32();
                        break;
                    }
                case 6: {
                        message.maxClientLimit = reader.uint32();
                        break;
                    }
                case 7: {
                        message.maxClients = reader.uint32();
                        break;
                    }
                case 8: {
                        message.tickInterval = reader.fixed32();
                        break;
                    }
                case 9: {
                        message.hostname = reader.string();
                        break;
                    }
                case 10: {
                        message.savegamename = reader.string();
                        break;
                    }
                case 11: {
                        message.s1Mapname = reader.string();
                        break;
                    }
                case 12: {
                        message.gamemode = reader.string();
                        break;
                    }
                case 13: {
                        message.serverIpAddress = reader.string();
                        break;
                    }
                case 14: {
                        message.data = reader.bytes();
                        break;
                    }
                case 15: {
                        message.isLocalonly = reader.bool();
                        break;
                    }
                case 19: {
                        message.noSteamServer = reader.bool();
                        break;
                    }
                case 16: {
                        message.isTransition = reader.bool();
                        break;
                    }
                case 17: {
                        message.previouslevel = reader.string();
                        break;
                    }
                case 18: {
                        message.landmarkname = reader.string();
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
         * Decodes a CSVCMsg_GameSessionConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameSessionConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSVCMsg_GameSessionConfiguration message.
         * @function verify
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSVCMsg_GameSessionConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isMultiplayer != null && message.hasOwnProperty("isMultiplayer"))
                if (typeof message.isMultiplayer !== "boolean")
                    return "isMultiplayer: boolean expected";
            if (message.isLoadsavegame != null && message.hasOwnProperty("isLoadsavegame"))
                if (typeof message.isLoadsavegame !== "boolean")
                    return "isLoadsavegame: boolean expected";
            if (message.isBackgroundMap != null && message.hasOwnProperty("isBackgroundMap"))
                if (typeof message.isBackgroundMap !== "boolean")
                    return "isBackgroundMap: boolean expected";
            if (message.isHeadless != null && message.hasOwnProperty("isHeadless"))
                if (typeof message.isHeadless !== "boolean")
                    return "isHeadless: boolean expected";
            if (message.minClientLimit != null && message.hasOwnProperty("minClientLimit"))
                if (!$util.isInteger(message.minClientLimit))
                    return "minClientLimit: integer expected";
            if (message.maxClientLimit != null && message.hasOwnProperty("maxClientLimit"))
                if (!$util.isInteger(message.maxClientLimit))
                    return "maxClientLimit: integer expected";
            if (message.maxClients != null && message.hasOwnProperty("maxClients"))
                if (!$util.isInteger(message.maxClients))
                    return "maxClients: integer expected";
            if (message.tickInterval != null && message.hasOwnProperty("tickInterval"))
                if (!$util.isInteger(message.tickInterval))
                    return "tickInterval: integer expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            if (message.savegamename != null && message.hasOwnProperty("savegamename"))
                if (!$util.isString(message.savegamename))
                    return "savegamename: string expected";
            if (message.s1Mapname != null && message.hasOwnProperty("s1Mapname"))
                if (!$util.isString(message.s1Mapname))
                    return "s1Mapname: string expected";
            if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                if (!$util.isString(message.gamemode))
                    return "gamemode: string expected";
            if (message.serverIpAddress != null && message.hasOwnProperty("serverIpAddress"))
                if (!$util.isString(message.serverIpAddress))
                    return "serverIpAddress: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.isLocalonly != null && message.hasOwnProperty("isLocalonly"))
                if (typeof message.isLocalonly !== "boolean")
                    return "isLocalonly: boolean expected";
            if (message.noSteamServer != null && message.hasOwnProperty("noSteamServer"))
                if (typeof message.noSteamServer !== "boolean")
                    return "noSteamServer: boolean expected";
            if (message.isTransition != null && message.hasOwnProperty("isTransition"))
                if (typeof message.isTransition !== "boolean")
                    return "isTransition: boolean expected";
            if (message.previouslevel != null && message.hasOwnProperty("previouslevel"))
                if (!$util.isString(message.previouslevel))
                    return "previouslevel: string expected";
            if (message.landmarkname != null && message.hasOwnProperty("landmarkname"))
                if (!$util.isString(message.landmarkname))
                    return "landmarkname: string expected";
            return null;
        };
    
        /**
         * Creates a CSVCMsg_GameSessionConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration
         */
        CSVCMsg_GameSessionConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.CSVCMsg_GameSessionConfiguration)
                return object;
            var message = new $root.CSVCMsg_GameSessionConfiguration();
            if (object.isMultiplayer != null)
                message.isMultiplayer = Boolean(object.isMultiplayer);
            if (object.isLoadsavegame != null)
                message.isLoadsavegame = Boolean(object.isLoadsavegame);
            if (object.isBackgroundMap != null)
                message.isBackgroundMap = Boolean(object.isBackgroundMap);
            if (object.isHeadless != null)
                message.isHeadless = Boolean(object.isHeadless);
            if (object.minClientLimit != null)
                message.minClientLimit = object.minClientLimit >>> 0;
            if (object.maxClientLimit != null)
                message.maxClientLimit = object.maxClientLimit >>> 0;
            if (object.maxClients != null)
                message.maxClients = object.maxClients >>> 0;
            if (object.tickInterval != null)
                message.tickInterval = object.tickInterval >>> 0;
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.savegamename != null)
                message.savegamename = String(object.savegamename);
            if (object.s1Mapname != null)
                message.s1Mapname = String(object.s1Mapname);
            if (object.gamemode != null)
                message.gamemode = String(object.gamemode);
            if (object.serverIpAddress != null)
                message.serverIpAddress = String(object.serverIpAddress);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.isLocalonly != null)
                message.isLocalonly = Boolean(object.isLocalonly);
            if (object.noSteamServer != null)
                message.noSteamServer = Boolean(object.noSteamServer);
            if (object.isTransition != null)
                message.isTransition = Boolean(object.isTransition);
            if (object.previouslevel != null)
                message.previouslevel = String(object.previouslevel);
            if (object.landmarkname != null)
                message.landmarkname = String(object.landmarkname);
            return message;
        };
    
        /**
         * Creates a plain object from a CSVCMsg_GameSessionConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {CSVCMsg_GameSessionConfiguration} message CSVCMsg_GameSessionConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSVCMsg_GameSessionConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isMultiplayer = false;
                object.isLoadsavegame = false;
                object.isBackgroundMap = false;
                object.isHeadless = false;
                object.minClientLimit = 0;
                object.maxClientLimit = 0;
                object.maxClients = 0;
                object.tickInterval = 0;
                object.hostname = "";
                object.savegamename = "";
                object.s1Mapname = "";
                object.gamemode = "";
                object.serverIpAddress = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.isLocalonly = false;
                object.isTransition = false;
                object.previouslevel = "";
                object.landmarkname = "";
                object.noSteamServer = false;
            }
            if (message.isMultiplayer != null && message.hasOwnProperty("isMultiplayer"))
                object.isMultiplayer = message.isMultiplayer;
            if (message.isLoadsavegame != null && message.hasOwnProperty("isLoadsavegame"))
                object.isLoadsavegame = message.isLoadsavegame;
            if (message.isBackgroundMap != null && message.hasOwnProperty("isBackgroundMap"))
                object.isBackgroundMap = message.isBackgroundMap;
            if (message.isHeadless != null && message.hasOwnProperty("isHeadless"))
                object.isHeadless = message.isHeadless;
            if (message.minClientLimit != null && message.hasOwnProperty("minClientLimit"))
                object.minClientLimit = message.minClientLimit;
            if (message.maxClientLimit != null && message.hasOwnProperty("maxClientLimit"))
                object.maxClientLimit = message.maxClientLimit;
            if (message.maxClients != null && message.hasOwnProperty("maxClients"))
                object.maxClients = message.maxClients;
            if (message.tickInterval != null && message.hasOwnProperty("tickInterval"))
                object.tickInterval = message.tickInterval;
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.savegamename != null && message.hasOwnProperty("savegamename"))
                object.savegamename = message.savegamename;
            if (message.s1Mapname != null && message.hasOwnProperty("s1Mapname"))
                object.s1Mapname = message.s1Mapname;
            if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                object.gamemode = message.gamemode;
            if (message.serverIpAddress != null && message.hasOwnProperty("serverIpAddress"))
                object.serverIpAddress = message.serverIpAddress;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.isLocalonly != null && message.hasOwnProperty("isLocalonly"))
                object.isLocalonly = message.isLocalonly;
            if (message.isTransition != null && message.hasOwnProperty("isTransition"))
                object.isTransition = message.isTransition;
            if (message.previouslevel != null && message.hasOwnProperty("previouslevel"))
                object.previouslevel = message.previouslevel;
            if (message.landmarkname != null && message.hasOwnProperty("landmarkname"))
                object.landmarkname = message.landmarkname;
            if (message.noSteamServer != null && message.hasOwnProperty("noSteamServer"))
                object.noSteamServer = message.noSteamServer;
            return object;
        };
    
        /**
         * Converts this CSVCMsg_GameSessionConfiguration to JSON.
         * @function toJSON
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSVCMsg_GameSessionConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSVCMsg_GameSessionConfiguration
         * @function getTypeUrl
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSVCMsg_GameSessionConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSVCMsg_GameSessionConfiguration";
        };
    
        return CSVCMsg_GameSessionConfiguration;
    })();
    
    $root.CNETMsg_DebugOverlay = (function() {
    
        /**
         * Properties of a CNETMsg_DebugOverlay.
         * @exports ICNETMsg_DebugOverlay
         * @interface ICNETMsg_DebugOverlay
         * @property {number|null} [etype] CNETMsg_DebugOverlay etype
         * @property {Array.<ICMsgVector>|null} [vectors] CNETMsg_DebugOverlay vectors
         * @property {Array.<ICMsgRGBA>|null} [colors] CNETMsg_DebugOverlay colors
         * @property {Array.<number>|null} [dimensions] CNETMsg_DebugOverlay dimensions
         * @property {Array.<number>|null} [times] CNETMsg_DebugOverlay times
         * @property {Array.<boolean>|null} [bools] CNETMsg_DebugOverlay bools
         * @property {Array.<number|Long>|null} [uint64s] CNETMsg_DebugOverlay uint64s
         * @property {Array.<string>|null} [strings] CNETMsg_DebugOverlay strings
         */
    
        /**
         * Constructs a new CNETMsg_DebugOverlay.
         * @exports CNETMsg_DebugOverlay
         * @classdesc Represents a CNETMsg_DebugOverlay.
         * @implements ICNETMsg_DebugOverlay
         * @constructor
         * @param {ICNETMsg_DebugOverlay=} [properties] Properties to set
         */
        function CNETMsg_DebugOverlay(properties) {
            this.vectors = [];
            this.colors = [];
            this.dimensions = [];
            this.times = [];
            this.bools = [];
            this.uint64s = [];
            this.strings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_DebugOverlay etype.
         * @member {number} etype
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.etype = 0;
    
        /**
         * CNETMsg_DebugOverlay vectors.
         * @member {Array.<ICMsgVector>} vectors
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.vectors = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay colors.
         * @member {Array.<ICMsgRGBA>} colors
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.colors = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay dimensions.
         * @member {Array.<number>} dimensions
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.dimensions = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay times.
         * @member {Array.<number>} times
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.times = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay bools.
         * @member {Array.<boolean>} bools
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.bools = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay uint64s.
         * @member {Array.<number|Long>} uint64s
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.uint64s = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay strings.
         * @member {Array.<string>} strings
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.strings = $util.emptyArray;
    
        /**
         * Creates a new CNETMsg_DebugOverlay instance using the specified properties.
         * @function create
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {ICNETMsg_DebugOverlay=} [properties] Properties to set
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay instance
         */
        CNETMsg_DebugOverlay.create = function create(properties) {
            return new CNETMsg_DebugOverlay(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_DebugOverlay message. Does not implicitly {@link CNETMsg_DebugOverlay.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {ICNETMsg_DebugOverlay} message CNETMsg_DebugOverlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_DebugOverlay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.etype != null && Object.hasOwnProperty.call(message, "etype"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.etype);
            if (message.vectors != null && message.vectors.length)
                for (var i = 0; i < message.vectors.length; ++i)
                    $root.CMsgVector.encode(message.vectors[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.colors != null && message.colors.length)
                for (var i = 0; i < message.colors.length; ++i)
                    $root.CMsgRGBA.encode(message.colors[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.dimensions != null && message.dimensions.length)
                for (var i = 0; i < message.dimensions.length; ++i)
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.dimensions[i]);
            if (message.times != null && message.times.length)
                for (var i = 0; i < message.times.length; ++i)
                    writer.uint32(/* id 5, wireType 5 =*/45).float(message.times[i]);
            if (message.bools != null && message.bools.length)
                for (var i = 0; i < message.bools.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.bools[i]);
            if (message.uint64s != null && message.uint64s.length)
                for (var i = 0; i < message.uint64s.length; ++i)
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.uint64s[i]);
            if (message.strings != null && message.strings.length)
                for (var i = 0; i < message.strings.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.strings[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_DebugOverlay message, length delimited. Does not implicitly {@link CNETMsg_DebugOverlay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {ICNETMsg_DebugOverlay} message CNETMsg_DebugOverlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_DebugOverlay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_DebugOverlay message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_DebugOverlay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_DebugOverlay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.etype = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.vectors && message.vectors.length))
                            message.vectors = [];
                        message.vectors.push($root.CMsgVector.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.colors && message.colors.length))
                            message.colors = [];
                        message.colors.push($root.CMsgRGBA.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.dimensions && message.dimensions.length))
                            message.dimensions = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dimensions.push(reader.float());
                        } else
                            message.dimensions.push(reader.float());
                        break;
                    }
                case 5: {
                        if (!(message.times && message.times.length))
                            message.times = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.times.push(reader.float());
                        } else
                            message.times.push(reader.float());
                        break;
                    }
                case 6: {
                        if (!(message.bools && message.bools.length))
                            message.bools = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bools.push(reader.bool());
                        } else
                            message.bools.push(reader.bool());
                        break;
                    }
                case 7: {
                        if (!(message.uint64s && message.uint64s.length))
                            message.uint64s = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.uint64s.push(reader.uint64());
                        } else
                            message.uint64s.push(reader.uint64());
                        break;
                    }
                case 8: {
                        if (!(message.strings && message.strings.length))
                            message.strings = [];
                        message.strings.push(reader.string());
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
         * Decodes a CNETMsg_DebugOverlay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_DebugOverlay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_DebugOverlay message.
         * @function verify
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_DebugOverlay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.etype != null && message.hasOwnProperty("etype"))
                if (!$util.isInteger(message.etype))
                    return "etype: integer expected";
            if (message.vectors != null && message.hasOwnProperty("vectors")) {
                if (!Array.isArray(message.vectors))
                    return "vectors: array expected";
                for (var i = 0; i < message.vectors.length; ++i) {
                    var error = $root.CMsgVector.verify(message.vectors[i]);
                    if (error)
                        return "vectors." + error;
                }
            }
            if (message.colors != null && message.hasOwnProperty("colors")) {
                if (!Array.isArray(message.colors))
                    return "colors: array expected";
                for (var i = 0; i < message.colors.length; ++i) {
                    var error = $root.CMsgRGBA.verify(message.colors[i]);
                    if (error)
                        return "colors." + error;
                }
            }
            if (message.dimensions != null && message.hasOwnProperty("dimensions")) {
                if (!Array.isArray(message.dimensions))
                    return "dimensions: array expected";
                for (var i = 0; i < message.dimensions.length; ++i)
                    if (typeof message.dimensions[i] !== "number")
                        return "dimensions: number[] expected";
            }
            if (message.times != null && message.hasOwnProperty("times")) {
                if (!Array.isArray(message.times))
                    return "times: array expected";
                for (var i = 0; i < message.times.length; ++i)
                    if (typeof message.times[i] !== "number")
                        return "times: number[] expected";
            }
            if (message.bools != null && message.hasOwnProperty("bools")) {
                if (!Array.isArray(message.bools))
                    return "bools: array expected";
                for (var i = 0; i < message.bools.length; ++i)
                    if (typeof message.bools[i] !== "boolean")
                        return "bools: boolean[] expected";
            }
            if (message.uint64s != null && message.hasOwnProperty("uint64s")) {
                if (!Array.isArray(message.uint64s))
                    return "uint64s: array expected";
                for (var i = 0; i < message.uint64s.length; ++i)
                    if (!$util.isInteger(message.uint64s[i]) && !(message.uint64s[i] && $util.isInteger(message.uint64s[i].low) && $util.isInteger(message.uint64s[i].high)))
                        return "uint64s: integer|Long[] expected";
            }
            if (message.strings != null && message.hasOwnProperty("strings")) {
                if (!Array.isArray(message.strings))
                    return "strings: array expected";
                for (var i = 0; i < message.strings.length; ++i)
                    if (!$util.isString(message.strings[i]))
                        return "strings: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CNETMsg_DebugOverlay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay
         */
        CNETMsg_DebugOverlay.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_DebugOverlay)
                return object;
            var message = new $root.CNETMsg_DebugOverlay();
            if (object.etype != null)
                message.etype = object.etype | 0;
            if (object.vectors) {
                if (!Array.isArray(object.vectors))
                    throw TypeError(".CNETMsg_DebugOverlay.vectors: array expected");
                message.vectors = [];
                for (var i = 0; i < object.vectors.length; ++i) {
                    if (typeof object.vectors[i] !== "object")
                        throw TypeError(".CNETMsg_DebugOverlay.vectors: object expected");
                    message.vectors[i] = $root.CMsgVector.fromObject(object.vectors[i]);
                }
            }
            if (object.colors) {
                if (!Array.isArray(object.colors))
                    throw TypeError(".CNETMsg_DebugOverlay.colors: array expected");
                message.colors = [];
                for (var i = 0; i < object.colors.length; ++i) {
                    if (typeof object.colors[i] !== "object")
                        throw TypeError(".CNETMsg_DebugOverlay.colors: object expected");
                    message.colors[i] = $root.CMsgRGBA.fromObject(object.colors[i]);
                }
            }
            if (object.dimensions) {
                if (!Array.isArray(object.dimensions))
                    throw TypeError(".CNETMsg_DebugOverlay.dimensions: array expected");
                message.dimensions = [];
                for (var i = 0; i < object.dimensions.length; ++i)
                    message.dimensions[i] = Number(object.dimensions[i]);
            }
            if (object.times) {
                if (!Array.isArray(object.times))
                    throw TypeError(".CNETMsg_DebugOverlay.times: array expected");
                message.times = [];
                for (var i = 0; i < object.times.length; ++i)
                    message.times[i] = Number(object.times[i]);
            }
            if (object.bools) {
                if (!Array.isArray(object.bools))
                    throw TypeError(".CNETMsg_DebugOverlay.bools: array expected");
                message.bools = [];
                for (var i = 0; i < object.bools.length; ++i)
                    message.bools[i] = Boolean(object.bools[i]);
            }
            if (object.uint64s) {
                if (!Array.isArray(object.uint64s))
                    throw TypeError(".CNETMsg_DebugOverlay.uint64s: array expected");
                message.uint64s = [];
                for (var i = 0; i < object.uint64s.length; ++i)
                    if ($util.Long)
                        (message.uint64s[i] = $util.Long.fromValue(object.uint64s[i])).unsigned = true;
                    else if (typeof object.uint64s[i] === "string")
                        message.uint64s[i] = parseInt(object.uint64s[i], 10);
                    else if (typeof object.uint64s[i] === "number")
                        message.uint64s[i] = object.uint64s[i];
                    else if (typeof object.uint64s[i] === "object")
                        message.uint64s[i] = new $util.LongBits(object.uint64s[i].low >>> 0, object.uint64s[i].high >>> 0).toNumber(true);
            }
            if (object.strings) {
                if (!Array.isArray(object.strings))
                    throw TypeError(".CNETMsg_DebugOverlay.strings: array expected");
                message.strings = [];
                for (var i = 0; i < object.strings.length; ++i)
                    message.strings[i] = String(object.strings[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_DebugOverlay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {CNETMsg_DebugOverlay} message CNETMsg_DebugOverlay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_DebugOverlay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.vectors = [];
                object.colors = [];
                object.dimensions = [];
                object.times = [];
                object.bools = [];
                object.uint64s = [];
                object.strings = [];
            }
            if (options.defaults)
                object.etype = 0;
            if (message.etype != null && message.hasOwnProperty("etype"))
                object.etype = message.etype;
            if (message.vectors && message.vectors.length) {
                object.vectors = [];
                for (var j = 0; j < message.vectors.length; ++j)
                    object.vectors[j] = $root.CMsgVector.toObject(message.vectors[j], options);
            }
            if (message.colors && message.colors.length) {
                object.colors = [];
                for (var j = 0; j < message.colors.length; ++j)
                    object.colors[j] = $root.CMsgRGBA.toObject(message.colors[j], options);
            }
            if (message.dimensions && message.dimensions.length) {
                object.dimensions = [];
                for (var j = 0; j < message.dimensions.length; ++j)
                    object.dimensions[j] = options.json && !isFinite(message.dimensions[j]) ? String(message.dimensions[j]) : message.dimensions[j];
            }
            if (message.times && message.times.length) {
                object.times = [];
                for (var j = 0; j < message.times.length; ++j)
                    object.times[j] = options.json && !isFinite(message.times[j]) ? String(message.times[j]) : message.times[j];
            }
            if (message.bools && message.bools.length) {
                object.bools = [];
                for (var j = 0; j < message.bools.length; ++j)
                    object.bools[j] = message.bools[j];
            }
            if (message.uint64s && message.uint64s.length) {
                object.uint64s = [];
                for (var j = 0; j < message.uint64s.length; ++j)
                    if (typeof message.uint64s[j] === "number")
                        object.uint64s[j] = options.longs === String ? String(message.uint64s[j]) : message.uint64s[j];
                    else
                        object.uint64s[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uint64s[j]) : options.longs === Number ? new $util.LongBits(message.uint64s[j].low >>> 0, message.uint64s[j].high >>> 0).toNumber(true) : message.uint64s[j];
            }
            if (message.strings && message.strings.length) {
                object.strings = [];
                for (var j = 0; j < message.strings.length; ++j)
                    object.strings[j] = message.strings[j];
            }
            return object;
        };
    
        /**
         * Converts this CNETMsg_DebugOverlay to JSON.
         * @function toJSON
         * @memberof CNETMsg_DebugOverlay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_DebugOverlay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_DebugOverlay
         * @function getTypeUrl
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_DebugOverlay.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_DebugOverlay";
        };
    
        return CNETMsg_DebugOverlay;
    })();
    
    /**
     * ENetworkDisconnectionReason enum.
     * @exports ENetworkDisconnectionReason
     * @enum {number}
     * @property {number} NETWORK_DISCONNECT_INVALID=0 NETWORK_DISCONNECT_INVALID value
     * @property {number} NETWORK_DISCONNECT_SHUTDOWN=1 NETWORK_DISCONNECT_SHUTDOWN value
     * @property {number} NETWORK_DISCONNECT_DISCONNECT_BY_USER=2 NETWORK_DISCONNECT_DISCONNECT_BY_USER value
     * @property {number} NETWORK_DISCONNECT_DISCONNECT_BY_SERVER=3 NETWORK_DISCONNECT_DISCONNECT_BY_SERVER value
     * @property {number} NETWORK_DISCONNECT_LOST=4 NETWORK_DISCONNECT_LOST value
     * @property {number} NETWORK_DISCONNECT_OVERFLOW=5 NETWORK_DISCONNECT_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_STEAM_BANNED=6 NETWORK_DISCONNECT_STEAM_BANNED value
     * @property {number} NETWORK_DISCONNECT_STEAM_INUSE=7 NETWORK_DISCONNECT_STEAM_INUSE value
     * @property {number} NETWORK_DISCONNECT_STEAM_TICKET=8 NETWORK_DISCONNECT_STEAM_TICKET value
     * @property {number} NETWORK_DISCONNECT_STEAM_LOGON=9 NETWORK_DISCONNECT_STEAM_LOGON value
     * @property {number} NETWORK_DISCONNECT_STEAM_AUTHCANCELLED=10 NETWORK_DISCONNECT_STEAM_AUTHCANCELLED value
     * @property {number} NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED=11 NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED value
     * @property {number} NETWORK_DISCONNECT_STEAM_AUTHINVALID=12 NETWORK_DISCONNECT_STEAM_AUTHINVALID value
     * @property {number} NETWORK_DISCONNECT_STEAM_VACBANSTATE=13 NETWORK_DISCONNECT_STEAM_VACBANSTATE value
     * @property {number} NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE=14 NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE value
     * @property {number} NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT=15 NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT value
     * @property {number} NETWORK_DISCONNECT_STEAM_DROPPED=16 NETWORK_DISCONNECT_STEAM_DROPPED value
     * @property {number} NETWORK_DISCONNECT_STEAM_OWNERSHIP=17 NETWORK_DISCONNECT_STEAM_OWNERSHIP value
     * @property {number} NETWORK_DISCONNECT_SERVERINFO_OVERFLOW=18 NETWORK_DISCONNECT_SERVERINFO_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_TICKMSG_OVERFLOW=19 NETWORK_DISCONNECT_TICKMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW=20 NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW=21 NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW=22 NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW=23 NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_SNAPSHOTOVERFLOW=24 NETWORK_DISCONNECT_SNAPSHOTOVERFLOW value
     * @property {number} NETWORK_DISCONNECT_SNAPSHOTERROR=25 NETWORK_DISCONNECT_SNAPSHOTERROR value
     * @property {number} NETWORK_DISCONNECT_RELIABLEOVERFLOW=26 NETWORK_DISCONNECT_RELIABLEOVERFLOW value
     * @property {number} NETWORK_DISCONNECT_BADDELTATICK=27 NETWORK_DISCONNECT_BADDELTATICK value
     * @property {number} NETWORK_DISCONNECT_NOMORESPLITS=28 NETWORK_DISCONNECT_NOMORESPLITS value
     * @property {number} NETWORK_DISCONNECT_TIMEDOUT=29 NETWORK_DISCONNECT_TIMEDOUT value
     * @property {number} NETWORK_DISCONNECT_DISCONNECTED=30 NETWORK_DISCONNECT_DISCONNECTED value
     * @property {number} NETWORK_DISCONNECT_LEAVINGSPLIT=31 NETWORK_DISCONNECT_LEAVINGSPLIT value
     * @property {number} NETWORK_DISCONNECT_DIFFERENTCLASSTABLES=32 NETWORK_DISCONNECT_DIFFERENTCLASSTABLES value
     * @property {number} NETWORK_DISCONNECT_BADRELAYPASSWORD=33 NETWORK_DISCONNECT_BADRELAYPASSWORD value
     * @property {number} NETWORK_DISCONNECT_BADSPECTATORPASSWORD=34 NETWORK_DISCONNECT_BADSPECTATORPASSWORD value
     * @property {number} NETWORK_DISCONNECT_HLTVRESTRICTED=35 NETWORK_DISCONNECT_HLTVRESTRICTED value
     * @property {number} NETWORK_DISCONNECT_NOSPECTATORS=36 NETWORK_DISCONNECT_NOSPECTATORS value
     * @property {number} NETWORK_DISCONNECT_HLTVUNAVAILABLE=37 NETWORK_DISCONNECT_HLTVUNAVAILABLE value
     * @property {number} NETWORK_DISCONNECT_HLTVSTOP=38 NETWORK_DISCONNECT_HLTVSTOP value
     * @property {number} NETWORK_DISCONNECT_KICKED=39 NETWORK_DISCONNECT_KICKED value
     * @property {number} NETWORK_DISCONNECT_BANADDED=40 NETWORK_DISCONNECT_BANADDED value
     * @property {number} NETWORK_DISCONNECT_KICKBANADDED=41 NETWORK_DISCONNECT_KICKBANADDED value
     * @property {number} NETWORK_DISCONNECT_HLTVDIRECT=42 NETWORK_DISCONNECT_HLTVDIRECT value
     * @property {number} NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA=43 NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA value
     * @property {number} NETWORK_DISCONNECT_PURESERVER_MISMATCH=44 NETWORK_DISCONNECT_PURESERVER_MISMATCH value
     * @property {number} NETWORK_DISCONNECT_USERCMD=45 NETWORK_DISCONNECT_USERCMD value
     * @property {number} NETWORK_DISCONNECT_REJECTED_BY_GAME=46 NETWORK_DISCONNECT_REJECTED_BY_GAME value
     * @property {number} NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR=47 NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR value
     * @property {number} NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR=48 NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR value
     * @property {number} NETWORK_DISCONNECT_BAD_SERVER_PASSWORD=49 NETWORK_DISCONNECT_BAD_SERVER_PASSWORD value
     * @property {number} NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION=50 NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION value
     * @property {number} NETWORK_DISCONNECT_CONNECTION_FAILURE=51 NETWORK_DISCONNECT_CONNECTION_FAILURE value
     * @property {number} NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS=52 NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS value
     * @property {number} NETWORK_DISCONNECT_RECONNECTION=53 NETWORK_DISCONNECT_RECONNECTION value
     * @property {number} NETWORK_DISCONNECT_LOOPSHUTDOWN=54 NETWORK_DISCONNECT_LOOPSHUTDOWN value
     * @property {number} NETWORK_DISCONNECT_LOOPDEACTIVATE=55 NETWORK_DISCONNECT_LOOPDEACTIVATE value
     * @property {number} NETWORK_DISCONNECT_HOST_ENDGAME=56 NETWORK_DISCONNECT_HOST_ENDGAME value
     * @property {number} NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE=57 NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE value
     * @property {number} NETWORK_DISCONNECT_CREATE_SERVER_FAILED=58 NETWORK_DISCONNECT_CREATE_SERVER_FAILED value
     * @property {number} NETWORK_DISCONNECT_EXITING=59 NETWORK_DISCONNECT_EXITING value
     * @property {number} NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE=60 NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE value
     * @property {number} NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY=61 NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY value
     * @property {number} NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL=62 NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL value
     * @property {number} NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP=63 NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP value
     * @property {number} NETWORK_DISCONNECT_CLIENT_NO_MAP=64 NETWORK_DISCONNECT_CLIENT_NO_MAP value
     * @property {number} NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP=65 NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP value
     * @property {number} NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM=66 NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM value
     * @property {number} NETWORK_DISCONNECT_STEAM_DENY_MISC=67 NETWORK_DISCONNECT_STEAM_DENY_MISC value
     * @property {number} NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT=68 NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT value
     * @property {number} NETWORK_DISCONNECT_SERVER_SHUTDOWN=69 NETWORK_DISCONNECT_SERVER_SHUTDOWN value
     * @property {number} NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE=71 NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE value
     * @property {number} NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT=72 NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT value
     * @property {number} NETWORK_DISCONNECT_SERVER_INCOMPATIBLE=73 NETWORK_DISCONNECT_SERVER_INCOMPATIBLE value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS=74 NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY=75 NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG=76 NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_OTHER=77 NETWORK_DISCONNECT_LOCALPROBLEM_OTHER value
     * @property {number} NETWORK_DISCONNECT_REMOTE_TIMEOUT=79 NETWORK_DISCONNECT_REMOTE_TIMEOUT value
     * @property {number} NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING=80 NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING value
     * @property {number} NETWORK_DISCONNECT_REMOTE_OTHER=81 NETWORK_DISCONNECT_REMOTE_OTHER value
     * @property {number} NETWORK_DISCONNECT_REMOTE_BADCRYPT=82 NETWORK_DISCONNECT_REMOTE_BADCRYPT value
     * @property {number} NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED=83 NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED value
     * @property {number} NETWORK_DISCONNECT_UNUSUAL=84 NETWORK_DISCONNECT_UNUSUAL value
     * @property {number} NETWORK_DISCONNECT_INTERNAL_ERROR=85 NETWORK_DISCONNECT_INTERNAL_ERROR value
     * @property {number} NETWORK_DISCONNECT_REJECT_BADCHALLENGE=128 NETWORK_DISCONNECT_REJECT_BADCHALLENGE value
     * @property {number} NETWORK_DISCONNECT_REJECT_NOLOBBY=129 NETWORK_DISCONNECT_REJECT_NOLOBBY value
     * @property {number} NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP=130 NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP value
     * @property {number} NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER=131 NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER value
     * @property {number} NETWORK_DISCONNECT_REJECT_HIDDEN_GAME=132 NETWORK_DISCONNECT_REJECT_HIDDEN_GAME value
     * @property {number} NETWORK_DISCONNECT_REJECT_LANRESTRICT=133 NETWORK_DISCONNECT_REJECT_LANRESTRICT value
     * @property {number} NETWORK_DISCONNECT_REJECT_BADPASSWORD=134 NETWORK_DISCONNECT_REJECT_BADPASSWORD value
     * @property {number} NETWORK_DISCONNECT_REJECT_SERVERFULL=135 NETWORK_DISCONNECT_REJECT_SERVERFULL value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION=136 NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION value
     * @property {number} NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL=137 NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL value
     * @property {number} NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY=138 NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY value
     * @property {number} NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY=139 NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH=140 NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH value
     * @property {number} NETWORK_DISCONNECT_REJECT_OLDPROTOCOL=141 NETWORK_DISCONNECT_REJECT_OLDPROTOCOL value
     * @property {number} NETWORK_DISCONNECT_REJECT_NEWPROTOCOL=142 NETWORK_DISCONNECT_REJECT_NEWPROTOCOL value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION=143 NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN=144 NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN=145 NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN value
     * @property {number} NETWORK_DISCONNECT_REJECT_STEAM=146 NETWORK_DISCONNECT_REJECT_STEAM value
     * @property {number} NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED=147 NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED value
     * @property {number} NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID=148 NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID value
     * @property {number} NETWORK_DISCONNECT_REJECT_BANNED=149 NETWORK_DISCONNECT_REJECT_BANNED value
     * @property {number} NETWORK_DISCONNECT_KICKED_TEAMKILLING=150 NETWORK_DISCONNECT_KICKED_TEAMKILLING value
     * @property {number} NETWORK_DISCONNECT_KICKED_TK_START=151 NETWORK_DISCONNECT_KICKED_TK_START value
     * @property {number} NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT=152 NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT value
     * @property {number} NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT=153 NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT value
     * @property {number} NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN=154 NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN value
     * @property {number} NETWORK_DISCONNECT_KICKED_TEAMHURTING=155 NETWORK_DISCONNECT_KICKED_TEAMHURTING value
     * @property {number} NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING=156 NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING value
     * @property {number} NETWORK_DISCONNECT_KICKED_VOTEDOFF=157 NETWORK_DISCONNECT_KICKED_VOTEDOFF value
     * @property {number} NETWORK_DISCONNECT_KICKED_IDLE=158 NETWORK_DISCONNECT_KICKED_IDLE value
     * @property {number} NETWORK_DISCONNECT_KICKED_SUICIDE=159 NETWORK_DISCONNECT_KICKED_SUICIDE value
     * @property {number} NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN=160 NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN value
     * @property {number} NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET=161 NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET value
     */
    $root.ENetworkDisconnectionReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NETWORK_DISCONNECT_INVALID"] = 0;
        values[valuesById[1] = "NETWORK_DISCONNECT_SHUTDOWN"] = 1;
        values[valuesById[2] = "NETWORK_DISCONNECT_DISCONNECT_BY_USER"] = 2;
        values[valuesById[3] = "NETWORK_DISCONNECT_DISCONNECT_BY_SERVER"] = 3;
        values[valuesById[4] = "NETWORK_DISCONNECT_LOST"] = 4;
        values[valuesById[5] = "NETWORK_DISCONNECT_OVERFLOW"] = 5;
        values[valuesById[6] = "NETWORK_DISCONNECT_STEAM_BANNED"] = 6;
        values[valuesById[7] = "NETWORK_DISCONNECT_STEAM_INUSE"] = 7;
        values[valuesById[8] = "NETWORK_DISCONNECT_STEAM_TICKET"] = 8;
        values[valuesById[9] = "NETWORK_DISCONNECT_STEAM_LOGON"] = 9;
        values[valuesById[10] = "NETWORK_DISCONNECT_STEAM_AUTHCANCELLED"] = 10;
        values[valuesById[11] = "NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED"] = 11;
        values[valuesById[12] = "NETWORK_DISCONNECT_STEAM_AUTHINVALID"] = 12;
        values[valuesById[13] = "NETWORK_DISCONNECT_STEAM_VACBANSTATE"] = 13;
        values[valuesById[14] = "NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE"] = 14;
        values[valuesById[15] = "NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT"] = 15;
        values[valuesById[16] = "NETWORK_DISCONNECT_STEAM_DROPPED"] = 16;
        values[valuesById[17] = "NETWORK_DISCONNECT_STEAM_OWNERSHIP"] = 17;
        values[valuesById[18] = "NETWORK_DISCONNECT_SERVERINFO_OVERFLOW"] = 18;
        values[valuesById[19] = "NETWORK_DISCONNECT_TICKMSG_OVERFLOW"] = 19;
        values[valuesById[20] = "NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW"] = 20;
        values[valuesById[21] = "NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW"] = 21;
        values[valuesById[22] = "NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW"] = 22;
        values[valuesById[23] = "NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW"] = 23;
        values[valuesById[24] = "NETWORK_DISCONNECT_SNAPSHOTOVERFLOW"] = 24;
        values[valuesById[25] = "NETWORK_DISCONNECT_SNAPSHOTERROR"] = 25;
        values[valuesById[26] = "NETWORK_DISCONNECT_RELIABLEOVERFLOW"] = 26;
        values[valuesById[27] = "NETWORK_DISCONNECT_BADDELTATICK"] = 27;
        values[valuesById[28] = "NETWORK_DISCONNECT_NOMORESPLITS"] = 28;
        values[valuesById[29] = "NETWORK_DISCONNECT_TIMEDOUT"] = 29;
        values[valuesById[30] = "NETWORK_DISCONNECT_DISCONNECTED"] = 30;
        values[valuesById[31] = "NETWORK_DISCONNECT_LEAVINGSPLIT"] = 31;
        values[valuesById[32] = "NETWORK_DISCONNECT_DIFFERENTCLASSTABLES"] = 32;
        values[valuesById[33] = "NETWORK_DISCONNECT_BADRELAYPASSWORD"] = 33;
        values[valuesById[34] = "NETWORK_DISCONNECT_BADSPECTATORPASSWORD"] = 34;
        values[valuesById[35] = "NETWORK_DISCONNECT_HLTVRESTRICTED"] = 35;
        values[valuesById[36] = "NETWORK_DISCONNECT_NOSPECTATORS"] = 36;
        values[valuesById[37] = "NETWORK_DISCONNECT_HLTVUNAVAILABLE"] = 37;
        values[valuesById[38] = "NETWORK_DISCONNECT_HLTVSTOP"] = 38;
        values[valuesById[39] = "NETWORK_DISCONNECT_KICKED"] = 39;
        values[valuesById[40] = "NETWORK_DISCONNECT_BANADDED"] = 40;
        values[valuesById[41] = "NETWORK_DISCONNECT_KICKBANADDED"] = 41;
        values[valuesById[42] = "NETWORK_DISCONNECT_HLTVDIRECT"] = 42;
        values[valuesById[43] = "NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA"] = 43;
        values[valuesById[44] = "NETWORK_DISCONNECT_PURESERVER_MISMATCH"] = 44;
        values[valuesById[45] = "NETWORK_DISCONNECT_USERCMD"] = 45;
        values[valuesById[46] = "NETWORK_DISCONNECT_REJECTED_BY_GAME"] = 46;
        values[valuesById[47] = "NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR"] = 47;
        values[valuesById[48] = "NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR"] = 48;
        values[valuesById[49] = "NETWORK_DISCONNECT_BAD_SERVER_PASSWORD"] = 49;
        values[valuesById[50] = "NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION"] = 50;
        values[valuesById[51] = "NETWORK_DISCONNECT_CONNECTION_FAILURE"] = 51;
        values[valuesById[52] = "NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS"] = 52;
        values[valuesById[53] = "NETWORK_DISCONNECT_RECONNECTION"] = 53;
        values[valuesById[54] = "NETWORK_DISCONNECT_LOOPSHUTDOWN"] = 54;
        values[valuesById[55] = "NETWORK_DISCONNECT_LOOPDEACTIVATE"] = 55;
        values[valuesById[56] = "NETWORK_DISCONNECT_HOST_ENDGAME"] = 56;
        values[valuesById[57] = "NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE"] = 57;
        values[valuesById[58] = "NETWORK_DISCONNECT_CREATE_SERVER_FAILED"] = 58;
        values[valuesById[59] = "NETWORK_DISCONNECT_EXITING"] = 59;
        values[valuesById[60] = "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE"] = 60;
        values[valuesById[61] = "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY"] = 61;
        values[valuesById[62] = "NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL"] = 62;
        values[valuesById[63] = "NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP"] = 63;
        values[valuesById[64] = "NETWORK_DISCONNECT_CLIENT_NO_MAP"] = 64;
        values[valuesById[65] = "NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP"] = 65;
        values[valuesById[66] = "NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM"] = 66;
        values[valuesById[67] = "NETWORK_DISCONNECT_STEAM_DENY_MISC"] = 67;
        values[valuesById[68] = "NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT"] = 68;
        values[valuesById[69] = "NETWORK_DISCONNECT_SERVER_SHUTDOWN"] = 69;
        values[valuesById[71] = "NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE"] = 71;
        values[valuesById[72] = "NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT"] = 72;
        values[valuesById[73] = "NETWORK_DISCONNECT_SERVER_INCOMPATIBLE"] = 73;
        values[valuesById[74] = "NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS"] = 74;
        values[valuesById[75] = "NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY"] = 75;
        values[valuesById[76] = "NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG"] = 76;
        values[valuesById[77] = "NETWORK_DISCONNECT_LOCALPROBLEM_OTHER"] = 77;
        values[valuesById[79] = "NETWORK_DISCONNECT_REMOTE_TIMEOUT"] = 79;
        values[valuesById[80] = "NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING"] = 80;
        values[valuesById[81] = "NETWORK_DISCONNECT_REMOTE_OTHER"] = 81;
        values[valuesById[82] = "NETWORK_DISCONNECT_REMOTE_BADCRYPT"] = 82;
        values[valuesById[83] = "NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED"] = 83;
        values[valuesById[84] = "NETWORK_DISCONNECT_UNUSUAL"] = 84;
        values[valuesById[85] = "NETWORK_DISCONNECT_INTERNAL_ERROR"] = 85;
        values[valuesById[128] = "NETWORK_DISCONNECT_REJECT_BADCHALLENGE"] = 128;
        values[valuesById[129] = "NETWORK_DISCONNECT_REJECT_NOLOBBY"] = 129;
        values[valuesById[130] = "NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP"] = 130;
        values[valuesById[131] = "NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER"] = 131;
        values[valuesById[132] = "NETWORK_DISCONNECT_REJECT_HIDDEN_GAME"] = 132;
        values[valuesById[133] = "NETWORK_DISCONNECT_REJECT_LANRESTRICT"] = 133;
        values[valuesById[134] = "NETWORK_DISCONNECT_REJECT_BADPASSWORD"] = 134;
        values[valuesById[135] = "NETWORK_DISCONNECT_REJECT_SERVERFULL"] = 135;
        values[valuesById[136] = "NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION"] = 136;
        values[valuesById[137] = "NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL"] = 137;
        values[valuesById[138] = "NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY"] = 138;
        values[valuesById[139] = "NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY"] = 139;
        values[valuesById[140] = "NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH"] = 140;
        values[valuesById[141] = "NETWORK_DISCONNECT_REJECT_OLDPROTOCOL"] = 141;
        values[valuesById[142] = "NETWORK_DISCONNECT_REJECT_NEWPROTOCOL"] = 142;
        values[valuesById[143] = "NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION"] = 143;
        values[valuesById[144] = "NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN"] = 144;
        values[valuesById[145] = "NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN"] = 145;
        values[valuesById[146] = "NETWORK_DISCONNECT_REJECT_STEAM"] = 146;
        values[valuesById[147] = "NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED"] = 147;
        values[valuesById[148] = "NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID"] = 148;
        values[valuesById[149] = "NETWORK_DISCONNECT_REJECT_BANNED"] = 149;
        values[valuesById[150] = "NETWORK_DISCONNECT_KICKED_TEAMKILLING"] = 150;
        values[valuesById[151] = "NETWORK_DISCONNECT_KICKED_TK_START"] = 151;
        values[valuesById[152] = "NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT"] = 152;
        values[valuesById[153] = "NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT"] = 153;
        values[valuesById[154] = "NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN"] = 154;
        values[valuesById[155] = "NETWORK_DISCONNECT_KICKED_TEAMHURTING"] = 155;
        values[valuesById[156] = "NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING"] = 156;
        values[valuesById[157] = "NETWORK_DISCONNECT_KICKED_VOTEDOFF"] = 157;
        values[valuesById[158] = "NETWORK_DISCONNECT_KICKED_IDLE"] = 158;
        values[valuesById[159] = "NETWORK_DISCONNECT_KICKED_SUICIDE"] = 159;
        values[valuesById[160] = "NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN"] = 160;
        values[valuesById[161] = "NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET"] = 161;
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
                 * @property {string|null} [".networkConnectionToken"] EnumValueOptions .networkConnectionToken
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
                 * EnumValueOptions .networkConnectionToken.
                 * @member {string} .networkConnectionToken
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype[".networkConnectionToken"] = "";
    
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
                    if (message[".networkConnectionToken"] != null && Object.hasOwnProperty.call(message, ".networkConnectionToken"))
                        writer.uint32(/* id 50500, wireType 2 =*/404002).string(message[".networkConnectionToken"]);
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
                        case 50500: {
                                message[".networkConnectionToken"] = reader.string();
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
                    if (message[".networkConnectionToken"] != null && message.hasOwnProperty(".networkConnectionToken"))
                        if (!$util.isString(message[".networkConnectionToken"]))
                            return ".networkConnectionToken: string expected";
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
                    if (object[".networkConnectionToken"] != null)
                        message[".networkConnectionToken"] = String(object[".networkConnectionToken"]);
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
                        object[".networkConnectionToken"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".networkConnectionToken"] != null && message.hasOwnProperty(".networkConnectionToken"))
                        object[".networkConnectionToken"] = message[".networkConnectionToken"];
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
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
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
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
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
