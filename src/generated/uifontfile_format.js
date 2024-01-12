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
    
    $root.CUIFontFilePB = (function() {
    
        /**
         * Properties of a CUIFontFilePB.
         * @exports ICUIFontFilePB
         * @interface ICUIFontFilePB
         * @property {string|null} [fontFileName] CUIFontFilePB fontFileName
         * @property {Uint8Array|null} [opentypeFontData] CUIFontFilePB opentypeFontData
         */
    
        /**
         * Constructs a new CUIFontFilePB.
         * @exports CUIFontFilePB
         * @classdesc Represents a CUIFontFilePB.
         * @implements ICUIFontFilePB
         * @constructor
         * @param {ICUIFontFilePB=} [properties] Properties to set
         */
        function CUIFontFilePB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUIFontFilePB fontFileName.
         * @member {string} fontFileName
         * @memberof CUIFontFilePB
         * @instance
         */
        CUIFontFilePB.prototype.fontFileName = "";
    
        /**
         * CUIFontFilePB opentypeFontData.
         * @member {Uint8Array} opentypeFontData
         * @memberof CUIFontFilePB
         * @instance
         */
        CUIFontFilePB.prototype.opentypeFontData = $util.newBuffer([]);
    
        /**
         * Creates a new CUIFontFilePB instance using the specified properties.
         * @function create
         * @memberof CUIFontFilePB
         * @static
         * @param {ICUIFontFilePB=} [properties] Properties to set
         * @returns {CUIFontFilePB} CUIFontFilePB instance
         */
        CUIFontFilePB.create = function create(properties) {
            return new CUIFontFilePB(properties);
        };
    
        /**
         * Encodes the specified CUIFontFilePB message. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
         * @function encode
         * @memberof CUIFontFilePB
         * @static
         * @param {ICUIFontFilePB} message CUIFontFilePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fontFileName != null && Object.hasOwnProperty.call(message, "fontFileName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fontFileName);
            if (message.opentypeFontData != null && Object.hasOwnProperty.call(message, "opentypeFontData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.opentypeFontData);
            return writer;
        };
    
        /**
         * Encodes the specified CUIFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUIFontFilePB
         * @static
         * @param {ICUIFontFilePB} message CUIFontFilePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUIFontFilePB message from the specified reader or buffer.
         * @function decode
         * @memberof CUIFontFilePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUIFontFilePB} CUIFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUIFontFilePB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fontFileName = reader.string();
                        break;
                    }
                case 2: {
                        message.opentypeFontData = reader.bytes();
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
         * Decodes a CUIFontFilePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUIFontFilePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUIFontFilePB} CUIFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUIFontFilePB message.
         * @function verify
         * @memberof CUIFontFilePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUIFontFilePB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fontFileName != null && message.hasOwnProperty("fontFileName"))
                if (!$util.isString(message.fontFileName))
                    return "fontFileName: string expected";
            if (message.opentypeFontData != null && message.hasOwnProperty("opentypeFontData"))
                if (!(message.opentypeFontData && typeof message.opentypeFontData.length === "number" || $util.isString(message.opentypeFontData)))
                    return "opentypeFontData: buffer expected";
            return null;
        };
    
        /**
         * Creates a CUIFontFilePB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUIFontFilePB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUIFontFilePB} CUIFontFilePB
         */
        CUIFontFilePB.fromObject = function fromObject(object) {
            if (object instanceof $root.CUIFontFilePB)
                return object;
            var message = new $root.CUIFontFilePB();
            if (object.fontFileName != null)
                message.fontFileName = String(object.fontFileName);
            if (object.opentypeFontData != null)
                if (typeof object.opentypeFontData === "string")
                    $util.base64.decode(object.opentypeFontData, message.opentypeFontData = $util.newBuffer($util.base64.length(object.opentypeFontData)), 0);
                else if (object.opentypeFontData.length >= 0)
                    message.opentypeFontData = object.opentypeFontData;
            return message;
        };
    
        /**
         * Creates a plain object from a CUIFontFilePB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUIFontFilePB
         * @static
         * @param {CUIFontFilePB} message CUIFontFilePB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUIFontFilePB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fontFileName = "";
                if (options.bytes === String)
                    object.opentypeFontData = "";
                else {
                    object.opentypeFontData = [];
                    if (options.bytes !== Array)
                        object.opentypeFontData = $util.newBuffer(object.opentypeFontData);
                }
            }
            if (message.fontFileName != null && message.hasOwnProperty("fontFileName"))
                object.fontFileName = message.fontFileName;
            if (message.opentypeFontData != null && message.hasOwnProperty("opentypeFontData"))
                object.opentypeFontData = options.bytes === String ? $util.base64.encode(message.opentypeFontData, 0, message.opentypeFontData.length) : options.bytes === Array ? Array.prototype.slice.call(message.opentypeFontData) : message.opentypeFontData;
            return object;
        };
    
        /**
         * Converts this CUIFontFilePB to JSON.
         * @function toJSON
         * @memberof CUIFontFilePB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUIFontFilePB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CUIFontFilePB
         * @function getTypeUrl
         * @memberof CUIFontFilePB
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CUIFontFilePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CUIFontFilePB";
        };
    
        return CUIFontFilePB;
    })();
    
    $root.CUIFontFilePackagePB = (function() {
    
        /**
         * Properties of a CUIFontFilePackagePB.
         * @exports ICUIFontFilePackagePB
         * @interface ICUIFontFilePackagePB
         * @property {number} packageVersion CUIFontFilePackagePB packageVersion
         * @property {Array.<CUIFontFilePackagePB.ICUIEncryptedFontFilePB>|null} [encryptedFontFiles] CUIFontFilePackagePB encryptedFontFiles
         */
    
        /**
         * Constructs a new CUIFontFilePackagePB.
         * @exports CUIFontFilePackagePB
         * @classdesc Represents a CUIFontFilePackagePB.
         * @implements ICUIFontFilePackagePB
         * @constructor
         * @param {ICUIFontFilePackagePB=} [properties] Properties to set
         */
        function CUIFontFilePackagePB(properties) {
            this.encryptedFontFiles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUIFontFilePackagePB packageVersion.
         * @member {number} packageVersion
         * @memberof CUIFontFilePackagePB
         * @instance
         */
        CUIFontFilePackagePB.prototype.packageVersion = 0;
    
        /**
         * CUIFontFilePackagePB encryptedFontFiles.
         * @member {Array.<CUIFontFilePackagePB.ICUIEncryptedFontFilePB>} encryptedFontFiles
         * @memberof CUIFontFilePackagePB
         * @instance
         */
        CUIFontFilePackagePB.prototype.encryptedFontFiles = $util.emptyArray;
    
        /**
         * Creates a new CUIFontFilePackagePB instance using the specified properties.
         * @function create
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {ICUIFontFilePackagePB=} [properties] Properties to set
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB instance
         */
        CUIFontFilePackagePB.create = function create(properties) {
            return new CUIFontFilePackagePB(properties);
        };
    
        /**
         * Encodes the specified CUIFontFilePackagePB message. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
         * @function encode
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {ICUIFontFilePackagePB} message CUIFontFilePackagePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePackagePB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.packageVersion);
            if (message.encryptedFontFiles != null && message.encryptedFontFiles.length)
                for (var i = 0; i < message.encryptedFontFiles.length; ++i)
                    $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.encode(message.encryptedFontFiles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CUIFontFilePackagePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {ICUIFontFilePackagePB} message CUIFontFilePackagePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePackagePB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUIFontFilePackagePB message from the specified reader or buffer.
         * @function decode
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePackagePB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUIFontFilePackagePB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.packageVersion = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.encryptedFontFiles && message.encryptedFontFiles.length))
                            message.encryptedFontFiles = [];
                        message.encryptedFontFiles.push($root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("packageVersion"))
                throw $util.ProtocolError("missing required 'packageVersion'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CUIFontFilePackagePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePackagePB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUIFontFilePackagePB message.
         * @function verify
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUIFontFilePackagePB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.packageVersion))
                return "packageVersion: integer expected";
            if (message.encryptedFontFiles != null && message.hasOwnProperty("encryptedFontFiles")) {
                if (!Array.isArray(message.encryptedFontFiles))
                    return "encryptedFontFiles: array expected";
                for (var i = 0; i < message.encryptedFontFiles.length; ++i) {
                    var error = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify(message.encryptedFontFiles[i]);
                    if (error)
                        return "encryptedFontFiles." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CUIFontFilePackagePB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB
         */
        CUIFontFilePackagePB.fromObject = function fromObject(object) {
            if (object instanceof $root.CUIFontFilePackagePB)
                return object;
            var message = new $root.CUIFontFilePackagePB();
            if (object.packageVersion != null)
                message.packageVersion = object.packageVersion >>> 0;
            if (object.encryptedFontFiles) {
                if (!Array.isArray(object.encryptedFontFiles))
                    throw TypeError(".CUIFontFilePackagePB.encryptedFontFiles: array expected");
                message.encryptedFontFiles = [];
                for (var i = 0; i < object.encryptedFontFiles.length; ++i) {
                    if (typeof object.encryptedFontFiles[i] !== "object")
                        throw TypeError(".CUIFontFilePackagePB.encryptedFontFiles: object expected");
                    message.encryptedFontFiles[i] = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.fromObject(object.encryptedFontFiles[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CUIFontFilePackagePB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {CUIFontFilePackagePB} message CUIFontFilePackagePB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUIFontFilePackagePB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.encryptedFontFiles = [];
            if (options.defaults)
                object.packageVersion = 0;
            if (message.packageVersion != null && message.hasOwnProperty("packageVersion"))
                object.packageVersion = message.packageVersion;
            if (message.encryptedFontFiles && message.encryptedFontFiles.length) {
                object.encryptedFontFiles = [];
                for (var j = 0; j < message.encryptedFontFiles.length; ++j)
                    object.encryptedFontFiles[j] = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.toObject(message.encryptedFontFiles[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CUIFontFilePackagePB to JSON.
         * @function toJSON
         * @memberof CUIFontFilePackagePB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUIFontFilePackagePB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CUIFontFilePackagePB
         * @function getTypeUrl
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CUIFontFilePackagePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CUIFontFilePackagePB";
        };
    
        CUIFontFilePackagePB.CUIEncryptedFontFilePB = (function() {
    
            /**
             * Properties of a CUIEncryptedFontFilePB.
             * @memberof CUIFontFilePackagePB
             * @interface ICUIEncryptedFontFilePB
             * @property {Uint8Array|null} [encryptedContents] CUIEncryptedFontFilePB encryptedContents
             */
    
            /**
             * Constructs a new CUIEncryptedFontFilePB.
             * @memberof CUIFontFilePackagePB
             * @classdesc Represents a CUIEncryptedFontFilePB.
             * @implements ICUIEncryptedFontFilePB
             * @constructor
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB=} [properties] Properties to set
             */
            function CUIEncryptedFontFilePB(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CUIEncryptedFontFilePB encryptedContents.
             * @member {Uint8Array} encryptedContents
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @instance
             */
            CUIEncryptedFontFilePB.prototype.encryptedContents = $util.newBuffer([]);
    
            /**
             * Creates a new CUIEncryptedFontFilePB instance using the specified properties.
             * @function create
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB=} [properties] Properties to set
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB instance
             */
            CUIEncryptedFontFilePB.create = function create(properties) {
                return new CUIEncryptedFontFilePB(properties);
            };
    
            /**
             * Encodes the specified CUIEncryptedFontFilePB message. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
             * @function encode
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB} message CUIEncryptedFontFilePB message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CUIEncryptedFontFilePB.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.encryptedContents != null && Object.hasOwnProperty.call(message, "encryptedContents"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encryptedContents);
                return writer;
            };
    
            /**
             * Encodes the specified CUIEncryptedFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB} message CUIEncryptedFontFilePB message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CUIEncryptedFontFilePB.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer.
             * @function decode
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CUIEncryptedFontFilePB.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.encryptedContents = reader.bytes();
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
             * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CUIEncryptedFontFilePB.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CUIEncryptedFontFilePB message.
             * @function verify
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CUIEncryptedFontFilePB.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.encryptedContents != null && message.hasOwnProperty("encryptedContents"))
                    if (!(message.encryptedContents && typeof message.encryptedContents.length === "number" || $util.isString(message.encryptedContents)))
                        return "encryptedContents: buffer expected";
                return null;
            };
    
            /**
             * Creates a CUIEncryptedFontFilePB message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB
             */
            CUIEncryptedFontFilePB.fromObject = function fromObject(object) {
                if (object instanceof $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB)
                    return object;
                var message = new $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB();
                if (object.encryptedContents != null)
                    if (typeof object.encryptedContents === "string")
                        $util.base64.decode(object.encryptedContents, message.encryptedContents = $util.newBuffer($util.base64.length(object.encryptedContents)), 0);
                    else if (object.encryptedContents.length >= 0)
                        message.encryptedContents = object.encryptedContents;
                return message;
            };
    
            /**
             * Creates a plain object from a CUIEncryptedFontFilePB message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.CUIEncryptedFontFilePB} message CUIEncryptedFontFilePB
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CUIEncryptedFontFilePB.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.encryptedContents = "";
                    else {
                        object.encryptedContents = [];
                        if (options.bytes !== Array)
                            object.encryptedContents = $util.newBuffer(object.encryptedContents);
                    }
                if (message.encryptedContents != null && message.hasOwnProperty("encryptedContents"))
                    object.encryptedContents = options.bytes === String ? $util.base64.encode(message.encryptedContents, 0, message.encryptedContents.length) : options.bytes === Array ? Array.prototype.slice.call(message.encryptedContents) : message.encryptedContents;
                return object;
            };
    
            /**
             * Converts this CUIEncryptedFontFilePB to JSON.
             * @function toJSON
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CUIEncryptedFontFilePB.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CUIEncryptedFontFilePB
             * @function getTypeUrl
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CUIEncryptedFontFilePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CUIFontFilePackagePB.CUIEncryptedFontFilePB";
            };
    
            return CUIEncryptedFontFilePB;
        })();
    
        return CUIFontFilePackagePB;
    })();

    return $root;
});
