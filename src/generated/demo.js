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
     * EDemoCommands enum.
     * @exports EDemoCommands
     * @enum {number}
     * @property {number} DEM_Error=-1 DEM_Error value
     * @property {number} DEM_Stop=0 DEM_Stop value
     * @property {number} DEM_FileHeader=1 DEM_FileHeader value
     * @property {number} DEM_FileInfo=2 DEM_FileInfo value
     * @property {number} DEM_SyncTick=3 DEM_SyncTick value
     * @property {number} DEM_SendTables=4 DEM_SendTables value
     * @property {number} DEM_ClassInfo=5 DEM_ClassInfo value
     * @property {number} DEM_StringTables=6 DEM_StringTables value
     * @property {number} DEM_Packet=7 DEM_Packet value
     * @property {number} DEM_SignonPacket=8 DEM_SignonPacket value
     * @property {number} DEM_ConsoleCmd=9 DEM_ConsoleCmd value
     * @property {number} DEM_CustomData=10 DEM_CustomData value
     * @property {number} DEM_CustomDataCallbacks=11 DEM_CustomDataCallbacks value
     * @property {number} DEM_UserCmd=12 DEM_UserCmd value
     * @property {number} DEM_FullPacket=13 DEM_FullPacket value
     * @property {number} DEM_SaveGame=14 DEM_SaveGame value
     * @property {number} DEM_SpawnGroups=15 DEM_SpawnGroups value
     * @property {number} DEM_AnimationData=16 DEM_AnimationData value
     * @property {number} DEM_Max=17 DEM_Max value
     * @property {number} DEM_IsCompressed=64 DEM_IsCompressed value
     */
    $root.EDemoCommands = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "DEM_Error"] = -1;
        values[valuesById[0] = "DEM_Stop"] = 0;
        values[valuesById[1] = "DEM_FileHeader"] = 1;
        values[valuesById[2] = "DEM_FileInfo"] = 2;
        values[valuesById[3] = "DEM_SyncTick"] = 3;
        values[valuesById[4] = "DEM_SendTables"] = 4;
        values[valuesById[5] = "DEM_ClassInfo"] = 5;
        values[valuesById[6] = "DEM_StringTables"] = 6;
        values[valuesById[7] = "DEM_Packet"] = 7;
        values[valuesById[8] = "DEM_SignonPacket"] = 8;
        values[valuesById[9] = "DEM_ConsoleCmd"] = 9;
        values[valuesById[10] = "DEM_CustomData"] = 10;
        values[valuesById[11] = "DEM_CustomDataCallbacks"] = 11;
        values[valuesById[12] = "DEM_UserCmd"] = 12;
        values[valuesById[13] = "DEM_FullPacket"] = 13;
        values[valuesById[14] = "DEM_SaveGame"] = 14;
        values[valuesById[15] = "DEM_SpawnGroups"] = 15;
        values[valuesById[16] = "DEM_AnimationData"] = 16;
        values[valuesById[17] = "DEM_Max"] = 17;
        values[valuesById[64] = "DEM_IsCompressed"] = 64;
        return values;
    })();
    
    $root.CDemoFileHeader = (function() {
    
        /**
         * Properties of a CDemoFileHeader.
         * @exports ICDemoFileHeader
         * @interface ICDemoFileHeader
         * @property {string} demoFileStamp CDemoFileHeader demoFileStamp
         * @property {number|null} [networkProtocol] CDemoFileHeader networkProtocol
         * @property {string|null} [serverName] CDemoFileHeader serverName
         * @property {string|null} [clientName] CDemoFileHeader clientName
         * @property {string|null} [mapName] CDemoFileHeader mapName
         * @property {string|null} [gameDirectory] CDemoFileHeader gameDirectory
         * @property {number|null} [fullpacketsVersion] CDemoFileHeader fullpacketsVersion
         * @property {boolean|null} [allowClientsideEntities] CDemoFileHeader allowClientsideEntities
         * @property {boolean|null} [allowClientsideParticles] CDemoFileHeader allowClientsideParticles
         * @property {string|null} [addons] CDemoFileHeader addons
         * @property {string|null} [demoVersionName] CDemoFileHeader demoVersionName
         * @property {string|null} [demoVersionGuid] CDemoFileHeader demoVersionGuid
         * @property {number|null} [buildNum] CDemoFileHeader buildNum
         * @property {string|null} [game] CDemoFileHeader game
         */
    
        /**
         * Constructs a new CDemoFileHeader.
         * @exports CDemoFileHeader
         * @classdesc Represents a CDemoFileHeader.
         * @implements ICDemoFileHeader
         * @constructor
         * @param {ICDemoFileHeader=} [properties] Properties to set
         */
        function CDemoFileHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoFileHeader demoFileStamp.
         * @member {string} demoFileStamp
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.demoFileStamp = "";
    
        /**
         * CDemoFileHeader networkProtocol.
         * @member {number} networkProtocol
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.networkProtocol = 0;
    
        /**
         * CDemoFileHeader serverName.
         * @member {string} serverName
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.serverName = "";
    
        /**
         * CDemoFileHeader clientName.
         * @member {string} clientName
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.clientName = "";
    
        /**
         * CDemoFileHeader mapName.
         * @member {string} mapName
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.mapName = "";
    
        /**
         * CDemoFileHeader gameDirectory.
         * @member {string} gameDirectory
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.gameDirectory = "";
    
        /**
         * CDemoFileHeader fullpacketsVersion.
         * @member {number} fullpacketsVersion
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.fullpacketsVersion = 0;
    
        /**
         * CDemoFileHeader allowClientsideEntities.
         * @member {boolean} allowClientsideEntities
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.allowClientsideEntities = false;
    
        /**
         * CDemoFileHeader allowClientsideParticles.
         * @member {boolean} allowClientsideParticles
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.allowClientsideParticles = false;
    
        /**
         * CDemoFileHeader addons.
         * @member {string} addons
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.addons = "";
    
        /**
         * CDemoFileHeader demoVersionName.
         * @member {string} demoVersionName
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.demoVersionName = "";
    
        /**
         * CDemoFileHeader demoVersionGuid.
         * @member {string} demoVersionGuid
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.demoVersionGuid = "";
    
        /**
         * CDemoFileHeader buildNum.
         * @member {number} buildNum
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.buildNum = 0;
    
        /**
         * CDemoFileHeader game.
         * @member {string} game
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.game = "";
    
        /**
         * Creates a new CDemoFileHeader instance using the specified properties.
         * @function create
         * @memberof CDemoFileHeader
         * @static
         * @param {ICDemoFileHeader=} [properties] Properties to set
         * @returns {CDemoFileHeader} CDemoFileHeader instance
         */
        CDemoFileHeader.create = function create(properties) {
            return new CDemoFileHeader(properties);
        };
    
        /**
         * Encodes the specified CDemoFileHeader message. Does not implicitly {@link CDemoFileHeader.verify|verify} messages.
         * @function encode
         * @memberof CDemoFileHeader
         * @static
         * @param {ICDemoFileHeader} message CDemoFileHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.demoFileStamp);
            if (message.networkProtocol != null && Object.hasOwnProperty.call(message, "networkProtocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.networkProtocol);
            if (message.serverName != null && Object.hasOwnProperty.call(message, "serverName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverName);
            if (message.clientName != null && Object.hasOwnProperty.call(message, "clientName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientName);
            if (message.mapName != null && Object.hasOwnProperty.call(message, "mapName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.mapName);
            if (message.gameDirectory != null && Object.hasOwnProperty.call(message, "gameDirectory"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.gameDirectory);
            if (message.fullpacketsVersion != null && Object.hasOwnProperty.call(message, "fullpacketsVersion"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.fullpacketsVersion);
            if (message.allowClientsideEntities != null && Object.hasOwnProperty.call(message, "allowClientsideEntities"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.allowClientsideEntities);
            if (message.allowClientsideParticles != null && Object.hasOwnProperty.call(message, "allowClientsideParticles"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.allowClientsideParticles);
            if (message.addons != null && Object.hasOwnProperty.call(message, "addons"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.addons);
            if (message.demoVersionName != null && Object.hasOwnProperty.call(message, "demoVersionName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.demoVersionName);
            if (message.demoVersionGuid != null && Object.hasOwnProperty.call(message, "demoVersionGuid"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.demoVersionGuid);
            if (message.buildNum != null && Object.hasOwnProperty.call(message, "buildNum"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.buildNum);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.game);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoFileHeader message, length delimited. Does not implicitly {@link CDemoFileHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoFileHeader
         * @static
         * @param {ICDemoFileHeader} message CDemoFileHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoFileHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoFileHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoFileHeader} CDemoFileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoFileHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.demoFileStamp = reader.string();
                        break;
                    }
                case 2: {
                        message.networkProtocol = reader.int32();
                        break;
                    }
                case 3: {
                        message.serverName = reader.string();
                        break;
                    }
                case 4: {
                        message.clientName = reader.string();
                        break;
                    }
                case 5: {
                        message.mapName = reader.string();
                        break;
                    }
                case 6: {
                        message.gameDirectory = reader.string();
                        break;
                    }
                case 7: {
                        message.fullpacketsVersion = reader.int32();
                        break;
                    }
                case 8: {
                        message.allowClientsideEntities = reader.bool();
                        break;
                    }
                case 9: {
                        message.allowClientsideParticles = reader.bool();
                        break;
                    }
                case 10: {
                        message.addons = reader.string();
                        break;
                    }
                case 11: {
                        message.demoVersionName = reader.string();
                        break;
                    }
                case 12: {
                        message.demoVersionGuid = reader.string();
                        break;
                    }
                case 13: {
                        message.buildNum = reader.int32();
                        break;
                    }
                case 14: {
                        message.game = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("demoFileStamp"))
                throw $util.ProtocolError("missing required 'demoFileStamp'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CDemoFileHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoFileHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoFileHeader} CDemoFileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoFileHeader message.
         * @function verify
         * @memberof CDemoFileHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoFileHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.demoFileStamp))
                return "demoFileStamp: string expected";
            if (message.networkProtocol != null && message.hasOwnProperty("networkProtocol"))
                if (!$util.isInteger(message.networkProtocol))
                    return "networkProtocol: integer expected";
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                if (!$util.isString(message.serverName))
                    return "serverName: string expected";
            if (message.clientName != null && message.hasOwnProperty("clientName"))
                if (!$util.isString(message.clientName))
                    return "clientName: string expected";
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                if (!$util.isString(message.mapName))
                    return "mapName: string expected";
            if (message.gameDirectory != null && message.hasOwnProperty("gameDirectory"))
                if (!$util.isString(message.gameDirectory))
                    return "gameDirectory: string expected";
            if (message.fullpacketsVersion != null && message.hasOwnProperty("fullpacketsVersion"))
                if (!$util.isInteger(message.fullpacketsVersion))
                    return "fullpacketsVersion: integer expected";
            if (message.allowClientsideEntities != null && message.hasOwnProperty("allowClientsideEntities"))
                if (typeof message.allowClientsideEntities !== "boolean")
                    return "allowClientsideEntities: boolean expected";
            if (message.allowClientsideParticles != null && message.hasOwnProperty("allowClientsideParticles"))
                if (typeof message.allowClientsideParticles !== "boolean")
                    return "allowClientsideParticles: boolean expected";
            if (message.addons != null && message.hasOwnProperty("addons"))
                if (!$util.isString(message.addons))
                    return "addons: string expected";
            if (message.demoVersionName != null && message.hasOwnProperty("demoVersionName"))
                if (!$util.isString(message.demoVersionName))
                    return "demoVersionName: string expected";
            if (message.demoVersionGuid != null && message.hasOwnProperty("demoVersionGuid"))
                if (!$util.isString(message.demoVersionGuid))
                    return "demoVersionGuid: string expected";
            if (message.buildNum != null && message.hasOwnProperty("buildNum"))
                if (!$util.isInteger(message.buildNum))
                    return "buildNum: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isString(message.game))
                    return "game: string expected";
            return null;
        };
    
        /**
         * Creates a CDemoFileHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoFileHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoFileHeader} CDemoFileHeader
         */
        CDemoFileHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoFileHeader)
                return object;
            var message = new $root.CDemoFileHeader();
            if (object.demoFileStamp != null)
                message.demoFileStamp = String(object.demoFileStamp);
            if (object.networkProtocol != null)
                message.networkProtocol = object.networkProtocol | 0;
            if (object.serverName != null)
                message.serverName = String(object.serverName);
            if (object.clientName != null)
                message.clientName = String(object.clientName);
            if (object.mapName != null)
                message.mapName = String(object.mapName);
            if (object.gameDirectory != null)
                message.gameDirectory = String(object.gameDirectory);
            if (object.fullpacketsVersion != null)
                message.fullpacketsVersion = object.fullpacketsVersion | 0;
            if (object.allowClientsideEntities != null)
                message.allowClientsideEntities = Boolean(object.allowClientsideEntities);
            if (object.allowClientsideParticles != null)
                message.allowClientsideParticles = Boolean(object.allowClientsideParticles);
            if (object.addons != null)
                message.addons = String(object.addons);
            if (object.demoVersionName != null)
                message.demoVersionName = String(object.demoVersionName);
            if (object.demoVersionGuid != null)
                message.demoVersionGuid = String(object.demoVersionGuid);
            if (object.buildNum != null)
                message.buildNum = object.buildNum | 0;
            if (object.game != null)
                message.game = String(object.game);
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoFileHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoFileHeader
         * @static
         * @param {CDemoFileHeader} message CDemoFileHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoFileHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.demoFileStamp = "";
                object.networkProtocol = 0;
                object.serverName = "";
                object.clientName = "";
                object.mapName = "";
                object.gameDirectory = "";
                object.fullpacketsVersion = 0;
                object.allowClientsideEntities = false;
                object.allowClientsideParticles = false;
                object.addons = "";
                object.demoVersionName = "";
                object.demoVersionGuid = "";
                object.buildNum = 0;
                object.game = "";
            }
            if (message.demoFileStamp != null && message.hasOwnProperty("demoFileStamp"))
                object.demoFileStamp = message.demoFileStamp;
            if (message.networkProtocol != null && message.hasOwnProperty("networkProtocol"))
                object.networkProtocol = message.networkProtocol;
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                object.serverName = message.serverName;
            if (message.clientName != null && message.hasOwnProperty("clientName"))
                object.clientName = message.clientName;
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                object.mapName = message.mapName;
            if (message.gameDirectory != null && message.hasOwnProperty("gameDirectory"))
                object.gameDirectory = message.gameDirectory;
            if (message.fullpacketsVersion != null && message.hasOwnProperty("fullpacketsVersion"))
                object.fullpacketsVersion = message.fullpacketsVersion;
            if (message.allowClientsideEntities != null && message.hasOwnProperty("allowClientsideEntities"))
                object.allowClientsideEntities = message.allowClientsideEntities;
            if (message.allowClientsideParticles != null && message.hasOwnProperty("allowClientsideParticles"))
                object.allowClientsideParticles = message.allowClientsideParticles;
            if (message.addons != null && message.hasOwnProperty("addons"))
                object.addons = message.addons;
            if (message.demoVersionName != null && message.hasOwnProperty("demoVersionName"))
                object.demoVersionName = message.demoVersionName;
            if (message.demoVersionGuid != null && message.hasOwnProperty("demoVersionGuid"))
                object.demoVersionGuid = message.demoVersionGuid;
            if (message.buildNum != null && message.hasOwnProperty("buildNum"))
                object.buildNum = message.buildNum;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            return object;
        };
    
        /**
         * Converts this CDemoFileHeader to JSON.
         * @function toJSON
         * @memberof CDemoFileHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoFileHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoFileHeader
         * @function getTypeUrl
         * @memberof CDemoFileHeader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoFileHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoFileHeader";
        };
    
        return CDemoFileHeader;
    })();
    
    $root.CGameInfo = (function() {
    
        /**
         * Properties of a CGameInfo.
         * @exports ICGameInfo
         * @interface ICGameInfo
         * @property {CGameInfo.ICDotaGameInfo|null} [dota] CGameInfo dota
         */
    
        /**
         * Constructs a new CGameInfo.
         * @exports CGameInfo
         * @classdesc Represents a CGameInfo.
         * @implements ICGameInfo
         * @constructor
         * @param {ICGameInfo=} [properties] Properties to set
         */
        function CGameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameInfo dota.
         * @member {CGameInfo.ICDotaGameInfo|null|undefined} dota
         * @memberof CGameInfo
         * @instance
         */
        CGameInfo.prototype.dota = null;
    
        /**
         * Creates a new CGameInfo instance using the specified properties.
         * @function create
         * @memberof CGameInfo
         * @static
         * @param {ICGameInfo=} [properties] Properties to set
         * @returns {CGameInfo} CGameInfo instance
         */
        CGameInfo.create = function create(properties) {
            return new CGameInfo(properties);
        };
    
        /**
         * Encodes the specified CGameInfo message. Does not implicitly {@link CGameInfo.verify|verify} messages.
         * @function encode
         * @memberof CGameInfo
         * @static
         * @param {ICGameInfo} message CGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dota != null && Object.hasOwnProperty.call(message, "dota"))
                $root.CGameInfo.CDotaGameInfo.encode(message.dota, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CGameInfo message, length delimited. Does not implicitly {@link CGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameInfo
         * @static
         * @param {ICGameInfo} message CGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameInfo} CGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4: {
                        message.dota = $root.CGameInfo.CDotaGameInfo.decode(reader, reader.uint32());
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
         * Decodes a CGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameInfo} CGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameInfo message.
         * @function verify
         * @memberof CGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dota != null && message.hasOwnProperty("dota")) {
                var error = $root.CGameInfo.CDotaGameInfo.verify(message.dota);
                if (error)
                    return "dota." + error;
            }
            return null;
        };
    
        /**
         * Creates a CGameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameInfo} CGameInfo
         */
        CGameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameInfo)
                return object;
            var message = new $root.CGameInfo();
            if (object.dota != null) {
                if (typeof object.dota !== "object")
                    throw TypeError(".CGameInfo.dota: object expected");
                message.dota = $root.CGameInfo.CDotaGameInfo.fromObject(object.dota);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CGameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameInfo
         * @static
         * @param {CGameInfo} message CGameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.dota = null;
            if (message.dota != null && message.hasOwnProperty("dota"))
                object.dota = $root.CGameInfo.CDotaGameInfo.toObject(message.dota, options);
            return object;
        };
    
        /**
         * Converts this CGameInfo to JSON.
         * @function toJSON
         * @memberof CGameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CGameInfo
         * @function getTypeUrl
         * @memberof CGameInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CGameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CGameInfo";
        };
    
        CGameInfo.CDotaGameInfo = (function() {
    
            /**
             * Properties of a CDotaGameInfo.
             * @memberof CGameInfo
             * @interface ICDotaGameInfo
             * @property {number|Long|null} [matchId] CDotaGameInfo matchId
             * @property {number|null} [gameMode] CDotaGameInfo gameMode
             * @property {number|null} [gameWinner] CDotaGameInfo gameWinner
             * @property {Array.<CGameInfo.CDotaGameInfo.ICPlayerInfo>|null} [playerInfo] CDotaGameInfo playerInfo
             * @property {number|null} [leagueid] CDotaGameInfo leagueid
             * @property {Array.<CGameInfo.CDotaGameInfo.ICHeroSelectEvent>|null} [picksBans] CDotaGameInfo picksBans
             * @property {number|null} [radiantTeamId] CDotaGameInfo radiantTeamId
             * @property {number|null} [direTeamId] CDotaGameInfo direTeamId
             * @property {string|null} [radiantTeamTag] CDotaGameInfo radiantTeamTag
             * @property {string|null} [direTeamTag] CDotaGameInfo direTeamTag
             * @property {number|null} [endTime] CDotaGameInfo endTime
             */
    
            /**
             * Constructs a new CDotaGameInfo.
             * @memberof CGameInfo
             * @classdesc Represents a CDotaGameInfo.
             * @implements ICDotaGameInfo
             * @constructor
             * @param {CGameInfo.ICDotaGameInfo=} [properties] Properties to set
             */
            function CDotaGameInfo(properties) {
                this.playerInfo = [];
                this.picksBans = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CDotaGameInfo matchId.
             * @member {number|Long} matchId
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.matchId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CDotaGameInfo gameMode.
             * @member {number} gameMode
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.gameMode = 0;
    
            /**
             * CDotaGameInfo gameWinner.
             * @member {number} gameWinner
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.gameWinner = 0;
    
            /**
             * CDotaGameInfo playerInfo.
             * @member {Array.<CGameInfo.CDotaGameInfo.ICPlayerInfo>} playerInfo
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.playerInfo = $util.emptyArray;
    
            /**
             * CDotaGameInfo leagueid.
             * @member {number} leagueid
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.leagueid = 0;
    
            /**
             * CDotaGameInfo picksBans.
             * @member {Array.<CGameInfo.CDotaGameInfo.ICHeroSelectEvent>} picksBans
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.picksBans = $util.emptyArray;
    
            /**
             * CDotaGameInfo radiantTeamId.
             * @member {number} radiantTeamId
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.radiantTeamId = 0;
    
            /**
             * CDotaGameInfo direTeamId.
             * @member {number} direTeamId
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.direTeamId = 0;
    
            /**
             * CDotaGameInfo radiantTeamTag.
             * @member {string} radiantTeamTag
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.radiantTeamTag = "";
    
            /**
             * CDotaGameInfo direTeamTag.
             * @member {string} direTeamTag
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.direTeamTag = "";
    
            /**
             * CDotaGameInfo endTime.
             * @member {number} endTime
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.endTime = 0;
    
            /**
             * Creates a new CDotaGameInfo instance using the specified properties.
             * @function create
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.ICDotaGameInfo=} [properties] Properties to set
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo instance
             */
            CDotaGameInfo.create = function create(properties) {
                return new CDotaGameInfo(properties);
            };
    
            /**
             * Encodes the specified CDotaGameInfo message. Does not implicitly {@link CGameInfo.CDotaGameInfo.verify|verify} messages.
             * @function encode
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.ICDotaGameInfo} message CDotaGameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CDotaGameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.matchId);
                if (message.gameMode != null && Object.hasOwnProperty.call(message, "gameMode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameMode);
                if (message.gameWinner != null && Object.hasOwnProperty.call(message, "gameWinner"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameWinner);
                if (message.playerInfo != null && message.playerInfo.length)
                    for (var i = 0; i < message.playerInfo.length; ++i)
                        $root.CGameInfo.CDotaGameInfo.CPlayerInfo.encode(message.playerInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.leagueid != null && Object.hasOwnProperty.call(message, "leagueid"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.leagueid);
                if (message.picksBans != null && message.picksBans.length)
                    for (var i = 0; i < message.picksBans.length; ++i)
                        $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.encode(message.picksBans[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.radiantTeamId != null && Object.hasOwnProperty.call(message, "radiantTeamId"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.radiantTeamId);
                if (message.direTeamId != null && Object.hasOwnProperty.call(message, "direTeamId"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.direTeamId);
                if (message.radiantTeamTag != null && Object.hasOwnProperty.call(message, "radiantTeamTag"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.radiantTeamTag);
                if (message.direTeamTag != null && Object.hasOwnProperty.call(message, "direTeamTag"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.direTeamTag);
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.endTime);
                return writer;
            };
    
            /**
             * Encodes the specified CDotaGameInfo message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.ICDotaGameInfo} message CDotaGameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CDotaGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CDotaGameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CDotaGameInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo.CDotaGameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.matchId = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.gameMode = reader.int32();
                            break;
                        }
                    case 3: {
                            message.gameWinner = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.playerInfo && message.playerInfo.length))
                                message.playerInfo = [];
                            message.playerInfo.push($root.CGameInfo.CDotaGameInfo.CPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            message.leagueid = reader.uint32();
                            break;
                        }
                    case 6: {
                            if (!(message.picksBans && message.picksBans.length))
                                message.picksBans = [];
                            message.picksBans.push($root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            message.radiantTeamId = reader.uint32();
                            break;
                        }
                    case 8: {
                            message.direTeamId = reader.uint32();
                            break;
                        }
                    case 9: {
                            message.radiantTeamTag = reader.string();
                            break;
                        }
                    case 10: {
                            message.direTeamTag = reader.string();
                            break;
                        }
                    case 11: {
                            message.endTime = reader.uint32();
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
             * Decodes a CDotaGameInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CDotaGameInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CDotaGameInfo message.
             * @function verify
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CDotaGameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.matchId != null && message.hasOwnProperty("matchId"))
                    if (!$util.isInteger(message.matchId) && !(message.matchId && $util.isInteger(message.matchId.low) && $util.isInteger(message.matchId.high)))
                        return "matchId: integer|Long expected";
                if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                    if (!$util.isInteger(message.gameMode))
                        return "gameMode: integer expected";
                if (message.gameWinner != null && message.hasOwnProperty("gameWinner"))
                    if (!$util.isInteger(message.gameWinner))
                        return "gameWinner: integer expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    if (!Array.isArray(message.playerInfo))
                        return "playerInfo: array expected";
                    for (var i = 0; i < message.playerInfo.length; ++i) {
                        var error = $root.CGameInfo.CDotaGameInfo.CPlayerInfo.verify(message.playerInfo[i]);
                        if (error)
                            return "playerInfo." + error;
                    }
                }
                if (message.leagueid != null && message.hasOwnProperty("leagueid"))
                    if (!$util.isInteger(message.leagueid))
                        return "leagueid: integer expected";
                if (message.picksBans != null && message.hasOwnProperty("picksBans")) {
                    if (!Array.isArray(message.picksBans))
                        return "picksBans: array expected";
                    for (var i = 0; i < message.picksBans.length; ++i) {
                        var error = $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify(message.picksBans[i]);
                        if (error)
                            return "picksBans." + error;
                    }
                }
                if (message.radiantTeamId != null && message.hasOwnProperty("radiantTeamId"))
                    if (!$util.isInteger(message.radiantTeamId))
                        return "radiantTeamId: integer expected";
                if (message.direTeamId != null && message.hasOwnProperty("direTeamId"))
                    if (!$util.isInteger(message.direTeamId))
                        return "direTeamId: integer expected";
                if (message.radiantTeamTag != null && message.hasOwnProperty("radiantTeamTag"))
                    if (!$util.isString(message.radiantTeamTag))
                        return "radiantTeamTag: string expected";
                if (message.direTeamTag != null && message.hasOwnProperty("direTeamTag"))
                    if (!$util.isString(message.direTeamTag))
                        return "direTeamTag: string expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime))
                        return "endTime: integer expected";
                return null;
            };
    
            /**
             * Creates a CDotaGameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo
             */
            CDotaGameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CGameInfo.CDotaGameInfo)
                    return object;
                var message = new $root.CGameInfo.CDotaGameInfo();
                if (object.matchId != null)
                    if ($util.Long)
                        (message.matchId = $util.Long.fromValue(object.matchId)).unsigned = true;
                    else if (typeof object.matchId === "string")
                        message.matchId = parseInt(object.matchId, 10);
                    else if (typeof object.matchId === "number")
                        message.matchId = object.matchId;
                    else if (typeof object.matchId === "object")
                        message.matchId = new $util.LongBits(object.matchId.low >>> 0, object.matchId.high >>> 0).toNumber(true);
                if (object.gameMode != null)
                    message.gameMode = object.gameMode | 0;
                if (object.gameWinner != null)
                    message.gameWinner = object.gameWinner | 0;
                if (object.playerInfo) {
                    if (!Array.isArray(object.playerInfo))
                        throw TypeError(".CGameInfo.CDotaGameInfo.playerInfo: array expected");
                    message.playerInfo = [];
                    for (var i = 0; i < object.playerInfo.length; ++i) {
                        if (typeof object.playerInfo[i] !== "object")
                            throw TypeError(".CGameInfo.CDotaGameInfo.playerInfo: object expected");
                        message.playerInfo[i] = $root.CGameInfo.CDotaGameInfo.CPlayerInfo.fromObject(object.playerInfo[i]);
                    }
                }
                if (object.leagueid != null)
                    message.leagueid = object.leagueid >>> 0;
                if (object.picksBans) {
                    if (!Array.isArray(object.picksBans))
                        throw TypeError(".CGameInfo.CDotaGameInfo.picksBans: array expected");
                    message.picksBans = [];
                    for (var i = 0; i < object.picksBans.length; ++i) {
                        if (typeof object.picksBans[i] !== "object")
                            throw TypeError(".CGameInfo.CDotaGameInfo.picksBans: object expected");
                        message.picksBans[i] = $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.fromObject(object.picksBans[i]);
                    }
                }
                if (object.radiantTeamId != null)
                    message.radiantTeamId = object.radiantTeamId >>> 0;
                if (object.direTeamId != null)
                    message.direTeamId = object.direTeamId >>> 0;
                if (object.radiantTeamTag != null)
                    message.radiantTeamTag = String(object.radiantTeamTag);
                if (object.direTeamTag != null)
                    message.direTeamTag = String(object.direTeamTag);
                if (object.endTime != null)
                    message.endTime = object.endTime >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a CDotaGameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.CDotaGameInfo} message CDotaGameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CDotaGameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.playerInfo = [];
                    object.picksBans = [];
                }
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.matchId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.matchId = options.longs === String ? "0" : 0;
                    object.gameMode = 0;
                    object.gameWinner = 0;
                    object.leagueid = 0;
                    object.radiantTeamId = 0;
                    object.direTeamId = 0;
                    object.radiantTeamTag = "";
                    object.direTeamTag = "";
                    object.endTime = 0;
                }
                if (message.matchId != null && message.hasOwnProperty("matchId"))
                    if (typeof message.matchId === "number")
                        object.matchId = options.longs === String ? String(message.matchId) : message.matchId;
                    else
                        object.matchId = options.longs === String ? $util.Long.prototype.toString.call(message.matchId) : options.longs === Number ? new $util.LongBits(message.matchId.low >>> 0, message.matchId.high >>> 0).toNumber(true) : message.matchId;
                if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                    object.gameMode = message.gameMode;
                if (message.gameWinner != null && message.hasOwnProperty("gameWinner"))
                    object.gameWinner = message.gameWinner;
                if (message.playerInfo && message.playerInfo.length) {
                    object.playerInfo = [];
                    for (var j = 0; j < message.playerInfo.length; ++j)
                        object.playerInfo[j] = $root.CGameInfo.CDotaGameInfo.CPlayerInfo.toObject(message.playerInfo[j], options);
                }
                if (message.leagueid != null && message.hasOwnProperty("leagueid"))
                    object.leagueid = message.leagueid;
                if (message.picksBans && message.picksBans.length) {
                    object.picksBans = [];
                    for (var j = 0; j < message.picksBans.length; ++j)
                        object.picksBans[j] = $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.toObject(message.picksBans[j], options);
                }
                if (message.radiantTeamId != null && message.hasOwnProperty("radiantTeamId"))
                    object.radiantTeamId = message.radiantTeamId;
                if (message.direTeamId != null && message.hasOwnProperty("direTeamId"))
                    object.direTeamId = message.direTeamId;
                if (message.radiantTeamTag != null && message.hasOwnProperty("radiantTeamTag"))
                    object.radiantTeamTag = message.radiantTeamTag;
                if (message.direTeamTag != null && message.hasOwnProperty("direTeamTag"))
                    object.direTeamTag = message.direTeamTag;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    object.endTime = message.endTime;
                return object;
            };
    
            /**
             * Converts this CDotaGameInfo to JSON.
             * @function toJSON
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CDotaGameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CDotaGameInfo
             * @function getTypeUrl
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CDotaGameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CGameInfo.CDotaGameInfo";
            };
    
            CDotaGameInfo.CPlayerInfo = (function() {
    
                /**
                 * Properties of a CPlayerInfo.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @interface ICPlayerInfo
                 * @property {string|null} [heroName] CPlayerInfo heroName
                 * @property {string|null} [playerName] CPlayerInfo playerName
                 * @property {boolean|null} [isFakeClient] CPlayerInfo isFakeClient
                 * @property {number|Long|null} [steamid] CPlayerInfo steamid
                 * @property {number|null} [gameTeam] CPlayerInfo gameTeam
                 */
    
                /**
                 * Constructs a new CPlayerInfo.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @classdesc Represents a CPlayerInfo.
                 * @implements ICPlayerInfo
                 * @constructor
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo=} [properties] Properties to set
                 */
                function CPlayerInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CPlayerInfo heroName.
                 * @member {string} heroName
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.heroName = "";
    
                /**
                 * CPlayerInfo playerName.
                 * @member {string} playerName
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.playerName = "";
    
                /**
                 * CPlayerInfo isFakeClient.
                 * @member {boolean} isFakeClient
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.isFakeClient = false;
    
                /**
                 * CPlayerInfo steamid.
                 * @member {number|Long} steamid
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * CPlayerInfo gameTeam.
                 * @member {number} gameTeam
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.gameTeam = 0;
    
                /**
                 * Creates a new CPlayerInfo instance using the specified properties.
                 * @function create
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo=} [properties] Properties to set
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo instance
                 */
                CPlayerInfo.create = function create(properties) {
                    return new CPlayerInfo(properties);
                };
    
                /**
                 * Encodes the specified CPlayerInfo message. Does not implicitly {@link CGameInfo.CDotaGameInfo.CPlayerInfo.verify|verify} messages.
                 * @function encode
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo} message CPlayerInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CPlayerInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.heroName != null && Object.hasOwnProperty.call(message, "heroName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.heroName);
                    if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
                    if (message.isFakeClient != null && Object.hasOwnProperty.call(message, "isFakeClient"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isFakeClient);
                    if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.steamid);
                    if (message.gameTeam != null && Object.hasOwnProperty.call(message, "gameTeam"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gameTeam);
                    return writer;
                };
    
                /**
                 * Encodes the specified CPlayerInfo message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.CPlayerInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo} message CPlayerInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CPlayerInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CPlayerInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo.CDotaGameInfo.CPlayerInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.heroName = reader.string();
                                break;
                            }
                        case 2: {
                                message.playerName = reader.string();
                                break;
                            }
                        case 3: {
                                message.isFakeClient = reader.bool();
                                break;
                            }
                        case 4: {
                                message.steamid = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.gameTeam = reader.int32();
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
                 * Decodes a CPlayerInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CPlayerInfo message.
                 * @function verify
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CPlayerInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.heroName != null && message.hasOwnProperty("heroName"))
                        if (!$util.isString(message.heroName))
                            return "heroName: string expected";
                    if (message.playerName != null && message.hasOwnProperty("playerName"))
                        if (!$util.isString(message.playerName))
                            return "playerName: string expected";
                    if (message.isFakeClient != null && message.hasOwnProperty("isFakeClient"))
                        if (typeof message.isFakeClient !== "boolean")
                            return "isFakeClient: boolean expected";
                    if (message.steamid != null && message.hasOwnProperty("steamid"))
                        if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                            return "steamid: integer|Long expected";
                    if (message.gameTeam != null && message.hasOwnProperty("gameTeam"))
                        if (!$util.isInteger(message.gameTeam))
                            return "gameTeam: integer expected";
                    return null;
                };
    
                /**
                 * Creates a CPlayerInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo
                 */
                CPlayerInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.CGameInfo.CDotaGameInfo.CPlayerInfo)
                        return object;
                    var message = new $root.CGameInfo.CDotaGameInfo.CPlayerInfo();
                    if (object.heroName != null)
                        message.heroName = String(object.heroName);
                    if (object.playerName != null)
                        message.playerName = String(object.playerName);
                    if (object.isFakeClient != null)
                        message.isFakeClient = Boolean(object.isFakeClient);
                    if (object.steamid != null)
                        if ($util.Long)
                            (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                        else if (typeof object.steamid === "string")
                            message.steamid = parseInt(object.steamid, 10);
                        else if (typeof object.steamid === "number")
                            message.steamid = object.steamid;
                        else if (typeof object.steamid === "object")
                            message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
                    if (object.gameTeam != null)
                        message.gameTeam = object.gameTeam | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a CPlayerInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.CPlayerInfo} message CPlayerInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CPlayerInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.heroName = "";
                        object.playerName = "";
                        object.isFakeClient = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.steamid = options.longs === String ? "0" : 0;
                        object.gameTeam = 0;
                    }
                    if (message.heroName != null && message.hasOwnProperty("heroName"))
                        object.heroName = message.heroName;
                    if (message.playerName != null && message.hasOwnProperty("playerName"))
                        object.playerName = message.playerName;
                    if (message.isFakeClient != null && message.hasOwnProperty("isFakeClient"))
                        object.isFakeClient = message.isFakeClient;
                    if (message.steamid != null && message.hasOwnProperty("steamid"))
                        if (typeof message.steamid === "number")
                            object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                        else
                            object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
                    if (message.gameTeam != null && message.hasOwnProperty("gameTeam"))
                        object.gameTeam = message.gameTeam;
                    return object;
                };
    
                /**
                 * Converts this CPlayerInfo to JSON.
                 * @function toJSON
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CPlayerInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CPlayerInfo
                 * @function getTypeUrl
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/CGameInfo.CDotaGameInfo.CPlayerInfo";
                };
    
                return CPlayerInfo;
            })();
    
            CDotaGameInfo.CHeroSelectEvent = (function() {
    
                /**
                 * Properties of a CHeroSelectEvent.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @interface ICHeroSelectEvent
                 * @property {boolean|null} [isPick] CHeroSelectEvent isPick
                 * @property {number|null} [team] CHeroSelectEvent team
                 * @property {number|null} [heroId] CHeroSelectEvent heroId
                 */
    
                /**
                 * Constructs a new CHeroSelectEvent.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @classdesc Represents a CHeroSelectEvent.
                 * @implements ICHeroSelectEvent
                 * @constructor
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent=} [properties] Properties to set
                 */
                function CHeroSelectEvent(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CHeroSelectEvent isPick.
                 * @member {boolean} isPick
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 */
                CHeroSelectEvent.prototype.isPick = false;
    
                /**
                 * CHeroSelectEvent team.
                 * @member {number} team
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 */
                CHeroSelectEvent.prototype.team = 0;
    
                /**
                 * CHeroSelectEvent heroId.
                 * @member {number} heroId
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 */
                CHeroSelectEvent.prototype.heroId = 0;
    
                /**
                 * Creates a new CHeroSelectEvent instance using the specified properties.
                 * @function create
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent=} [properties] Properties to set
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent instance
                 */
                CHeroSelectEvent.create = function create(properties) {
                    return new CHeroSelectEvent(properties);
                };
    
                /**
                 * Encodes the specified CHeroSelectEvent message. Does not implicitly {@link CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify|verify} messages.
                 * @function encode
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent} message CHeroSelectEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CHeroSelectEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isPick != null && Object.hasOwnProperty.call(message, "isPick"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isPick);
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team);
                    if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.heroId);
                    return writer;
                };
    
                /**
                 * Encodes the specified CHeroSelectEvent message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent} message CHeroSelectEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CHeroSelectEvent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CHeroSelectEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CHeroSelectEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.isPick = reader.bool();
                                break;
                            }
                        case 2: {
                                message.team = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.heroId = reader.uint32();
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
                 * Decodes a CHeroSelectEvent message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CHeroSelectEvent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CHeroSelectEvent message.
                 * @function verify
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CHeroSelectEvent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isPick != null && message.hasOwnProperty("isPick"))
                        if (typeof message.isPick !== "boolean")
                            return "isPick: boolean expected";
                    if (message.team != null && message.hasOwnProperty("team"))
                        if (!$util.isInteger(message.team))
                            return "team: integer expected";
                    if (message.heroId != null && message.hasOwnProperty("heroId"))
                        if (!$util.isInteger(message.heroId))
                            return "heroId: integer expected";
                    return null;
                };
    
                /**
                 * Creates a CHeroSelectEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent
                 */
                CHeroSelectEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent)
                        return object;
                    var message = new $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent();
                    if (object.isPick != null)
                        message.isPick = Boolean(object.isPick);
                    if (object.team != null)
                        message.team = object.team >>> 0;
                    if (object.heroId != null)
                        message.heroId = object.heroId >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a CHeroSelectEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.CHeroSelectEvent} message CHeroSelectEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CHeroSelectEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.isPick = false;
                        object.team = 0;
                        object.heroId = 0;
                    }
                    if (message.isPick != null && message.hasOwnProperty("isPick"))
                        object.isPick = message.isPick;
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = message.team;
                    if (message.heroId != null && message.hasOwnProperty("heroId"))
                        object.heroId = message.heroId;
                    return object;
                };
    
                /**
                 * Converts this CHeroSelectEvent to JSON.
                 * @function toJSON
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CHeroSelectEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CHeroSelectEvent
                 * @function getTypeUrl
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CHeroSelectEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/CGameInfo.CDotaGameInfo.CHeroSelectEvent";
                };
    
                return CHeroSelectEvent;
            })();
    
            return CDotaGameInfo;
        })();
    
        return CGameInfo;
    })();
    
    $root.CDemoFileInfo = (function() {
    
        /**
         * Properties of a CDemoFileInfo.
         * @exports ICDemoFileInfo
         * @interface ICDemoFileInfo
         * @property {number|null} [playbackTime] CDemoFileInfo playbackTime
         * @property {number|null} [playbackTicks] CDemoFileInfo playbackTicks
         * @property {number|null} [playbackFrames] CDemoFileInfo playbackFrames
         * @property {ICGameInfo|null} [gameInfo] CDemoFileInfo gameInfo
         */
    
        /**
         * Constructs a new CDemoFileInfo.
         * @exports CDemoFileInfo
         * @classdesc Represents a CDemoFileInfo.
         * @implements ICDemoFileInfo
         * @constructor
         * @param {ICDemoFileInfo=} [properties] Properties to set
         */
        function CDemoFileInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoFileInfo playbackTime.
         * @member {number} playbackTime
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.playbackTime = 0;
    
        /**
         * CDemoFileInfo playbackTicks.
         * @member {number} playbackTicks
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.playbackTicks = 0;
    
        /**
         * CDemoFileInfo playbackFrames.
         * @member {number} playbackFrames
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.playbackFrames = 0;
    
        /**
         * CDemoFileInfo gameInfo.
         * @member {ICGameInfo|null|undefined} gameInfo
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.gameInfo = null;
    
        /**
         * Creates a new CDemoFileInfo instance using the specified properties.
         * @function create
         * @memberof CDemoFileInfo
         * @static
         * @param {ICDemoFileInfo=} [properties] Properties to set
         * @returns {CDemoFileInfo} CDemoFileInfo instance
         */
        CDemoFileInfo.create = function create(properties) {
            return new CDemoFileInfo(properties);
        };
    
        /**
         * Encodes the specified CDemoFileInfo message. Does not implicitly {@link CDemoFileInfo.verify|verify} messages.
         * @function encode
         * @memberof CDemoFileInfo
         * @static
         * @param {ICDemoFileInfo} message CDemoFileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playbackTime != null && Object.hasOwnProperty.call(message, "playbackTime"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.playbackTime);
            if (message.playbackTicks != null && Object.hasOwnProperty.call(message, "playbackTicks"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playbackTicks);
            if (message.playbackFrames != null && Object.hasOwnProperty.call(message, "playbackFrames"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playbackFrames);
            if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                $root.CGameInfo.encode(message.gameInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoFileInfo message, length delimited. Does not implicitly {@link CDemoFileInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoFileInfo
         * @static
         * @param {ICDemoFileInfo} message CDemoFileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoFileInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoFileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoFileInfo} CDemoFileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoFileInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playbackTime = reader.float();
                        break;
                    }
                case 2: {
                        message.playbackTicks = reader.int32();
                        break;
                    }
                case 3: {
                        message.playbackFrames = reader.int32();
                        break;
                    }
                case 4: {
                        message.gameInfo = $root.CGameInfo.decode(reader, reader.uint32());
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
         * Decodes a CDemoFileInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoFileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoFileInfo} CDemoFileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoFileInfo message.
         * @function verify
         * @memberof CDemoFileInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoFileInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playbackTime != null && message.hasOwnProperty("playbackTime"))
                if (typeof message.playbackTime !== "number")
                    return "playbackTime: number expected";
            if (message.playbackTicks != null && message.hasOwnProperty("playbackTicks"))
                if (!$util.isInteger(message.playbackTicks))
                    return "playbackTicks: integer expected";
            if (message.playbackFrames != null && message.hasOwnProperty("playbackFrames"))
                if (!$util.isInteger(message.playbackFrames))
                    return "playbackFrames: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                var error = $root.CGameInfo.verify(message.gameInfo);
                if (error)
                    return "gameInfo." + error;
            }
            return null;
        };
    
        /**
         * Creates a CDemoFileInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoFileInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoFileInfo} CDemoFileInfo
         */
        CDemoFileInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoFileInfo)
                return object;
            var message = new $root.CDemoFileInfo();
            if (object.playbackTime != null)
                message.playbackTime = Number(object.playbackTime);
            if (object.playbackTicks != null)
                message.playbackTicks = object.playbackTicks | 0;
            if (object.playbackFrames != null)
                message.playbackFrames = object.playbackFrames | 0;
            if (object.gameInfo != null) {
                if (typeof object.gameInfo !== "object")
                    throw TypeError(".CDemoFileInfo.gameInfo: object expected");
                message.gameInfo = $root.CGameInfo.fromObject(object.gameInfo);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoFileInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoFileInfo
         * @static
         * @param {CDemoFileInfo} message CDemoFileInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoFileInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playbackTime = 0;
                object.playbackTicks = 0;
                object.playbackFrames = 0;
                object.gameInfo = null;
            }
            if (message.playbackTime != null && message.hasOwnProperty("playbackTime"))
                object.playbackTime = options.json && !isFinite(message.playbackTime) ? String(message.playbackTime) : message.playbackTime;
            if (message.playbackTicks != null && message.hasOwnProperty("playbackTicks"))
                object.playbackTicks = message.playbackTicks;
            if (message.playbackFrames != null && message.hasOwnProperty("playbackFrames"))
                object.playbackFrames = message.playbackFrames;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = $root.CGameInfo.toObject(message.gameInfo, options);
            return object;
        };
    
        /**
         * Converts this CDemoFileInfo to JSON.
         * @function toJSON
         * @memberof CDemoFileInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoFileInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoFileInfo
         * @function getTypeUrl
         * @memberof CDemoFileInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoFileInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoFileInfo";
        };
    
        return CDemoFileInfo;
    })();
    
    $root.CDemoPacket = (function() {
    
        /**
         * Properties of a CDemoPacket.
         * @exports ICDemoPacket
         * @interface ICDemoPacket
         * @property {Uint8Array|null} [data] CDemoPacket data
         */
    
        /**
         * Constructs a new CDemoPacket.
         * @exports CDemoPacket
         * @classdesc Represents a CDemoPacket.
         * @implements ICDemoPacket
         * @constructor
         * @param {ICDemoPacket=} [properties] Properties to set
         */
        function CDemoPacket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoPacket data.
         * @member {Uint8Array} data
         * @memberof CDemoPacket
         * @instance
         */
        CDemoPacket.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoPacket instance using the specified properties.
         * @function create
         * @memberof CDemoPacket
         * @static
         * @param {ICDemoPacket=} [properties] Properties to set
         * @returns {CDemoPacket} CDemoPacket instance
         */
        CDemoPacket.create = function create(properties) {
            return new CDemoPacket(properties);
        };
    
        /**
         * Encodes the specified CDemoPacket message. Does not implicitly {@link CDemoPacket.verify|verify} messages.
         * @function encode
         * @memberof CDemoPacket
         * @static
         * @param {ICDemoPacket} message CDemoPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoPacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoPacket message, length delimited. Does not implicitly {@link CDemoPacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoPacket
         * @static
         * @param {ICDemoPacket} message CDemoPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoPacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoPacket message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoPacket} CDemoPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoPacket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoPacket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        message.data = reader.bytes();
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
         * Decodes a CDemoPacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoPacket} CDemoPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoPacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoPacket message.
         * @function verify
         * @memberof CDemoPacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoPacket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoPacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoPacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoPacket} CDemoPacket
         */
        CDemoPacket.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoPacket)
                return object;
            var message = new $root.CDemoPacket();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoPacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoPacket
         * @static
         * @param {CDemoPacket} message CDemoPacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoPacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoPacket to JSON.
         * @function toJSON
         * @memberof CDemoPacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoPacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoPacket
         * @function getTypeUrl
         * @memberof CDemoPacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoPacket";
        };
    
        return CDemoPacket;
    })();
    
    $root.CDemoFullPacket = (function() {
    
        /**
         * Properties of a CDemoFullPacket.
         * @exports ICDemoFullPacket
         * @interface ICDemoFullPacket
         * @property {ICDemoStringTables|null} [stringTable] CDemoFullPacket stringTable
         * @property {ICDemoPacket|null} [packet] CDemoFullPacket packet
         */
    
        /**
         * Constructs a new CDemoFullPacket.
         * @exports CDemoFullPacket
         * @classdesc Represents a CDemoFullPacket.
         * @implements ICDemoFullPacket
         * @constructor
         * @param {ICDemoFullPacket=} [properties] Properties to set
         */
        function CDemoFullPacket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoFullPacket stringTable.
         * @member {ICDemoStringTables|null|undefined} stringTable
         * @memberof CDemoFullPacket
         * @instance
         */
        CDemoFullPacket.prototype.stringTable = null;
    
        /**
         * CDemoFullPacket packet.
         * @member {ICDemoPacket|null|undefined} packet
         * @memberof CDemoFullPacket
         * @instance
         */
        CDemoFullPacket.prototype.packet = null;
    
        /**
         * Creates a new CDemoFullPacket instance using the specified properties.
         * @function create
         * @memberof CDemoFullPacket
         * @static
         * @param {ICDemoFullPacket=} [properties] Properties to set
         * @returns {CDemoFullPacket} CDemoFullPacket instance
         */
        CDemoFullPacket.create = function create(properties) {
            return new CDemoFullPacket(properties);
        };
    
        /**
         * Encodes the specified CDemoFullPacket message. Does not implicitly {@link CDemoFullPacket.verify|verify} messages.
         * @function encode
         * @memberof CDemoFullPacket
         * @static
         * @param {ICDemoFullPacket} message CDemoFullPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFullPacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stringTable != null && Object.hasOwnProperty.call(message, "stringTable"))
                $root.CDemoStringTables.encode(message.stringTable, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.packet != null && Object.hasOwnProperty.call(message, "packet"))
                $root.CDemoPacket.encode(message.packet, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoFullPacket message, length delimited. Does not implicitly {@link CDemoFullPacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoFullPacket
         * @static
         * @param {ICDemoFullPacket} message CDemoFullPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFullPacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoFullPacket message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoFullPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoFullPacket} CDemoFullPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFullPacket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoFullPacket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.stringTable = $root.CDemoStringTables.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.packet = $root.CDemoPacket.decode(reader, reader.uint32());
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
         * Decodes a CDemoFullPacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoFullPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoFullPacket} CDemoFullPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFullPacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoFullPacket message.
         * @function verify
         * @memberof CDemoFullPacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoFullPacket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stringTable != null && message.hasOwnProperty("stringTable")) {
                var error = $root.CDemoStringTables.verify(message.stringTable);
                if (error)
                    return "stringTable." + error;
            }
            if (message.packet != null && message.hasOwnProperty("packet")) {
                var error = $root.CDemoPacket.verify(message.packet);
                if (error)
                    return "packet." + error;
            }
            return null;
        };
    
        /**
         * Creates a CDemoFullPacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoFullPacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoFullPacket} CDemoFullPacket
         */
        CDemoFullPacket.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoFullPacket)
                return object;
            var message = new $root.CDemoFullPacket();
            if (object.stringTable != null) {
                if (typeof object.stringTable !== "object")
                    throw TypeError(".CDemoFullPacket.stringTable: object expected");
                message.stringTable = $root.CDemoStringTables.fromObject(object.stringTable);
            }
            if (object.packet != null) {
                if (typeof object.packet !== "object")
                    throw TypeError(".CDemoFullPacket.packet: object expected");
                message.packet = $root.CDemoPacket.fromObject(object.packet);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoFullPacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoFullPacket
         * @static
         * @param {CDemoFullPacket} message CDemoFullPacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoFullPacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.stringTable = null;
                object.packet = null;
            }
            if (message.stringTable != null && message.hasOwnProperty("stringTable"))
                object.stringTable = $root.CDemoStringTables.toObject(message.stringTable, options);
            if (message.packet != null && message.hasOwnProperty("packet"))
                object.packet = $root.CDemoPacket.toObject(message.packet, options);
            return object;
        };
    
        /**
         * Converts this CDemoFullPacket to JSON.
         * @function toJSON
         * @memberof CDemoFullPacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoFullPacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoFullPacket
         * @function getTypeUrl
         * @memberof CDemoFullPacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoFullPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoFullPacket";
        };
    
        return CDemoFullPacket;
    })();
    
    $root.CDemoSaveGame = (function() {
    
        /**
         * Properties of a CDemoSaveGame.
         * @exports ICDemoSaveGame
         * @interface ICDemoSaveGame
         * @property {Uint8Array|null} [data] CDemoSaveGame data
         * @property {number|Long|null} [steamId] CDemoSaveGame steamId
         * @property {number|Long|null} [signature] CDemoSaveGame signature
         * @property {number|null} [version] CDemoSaveGame version
         */
    
        /**
         * Constructs a new CDemoSaveGame.
         * @exports CDemoSaveGame
         * @classdesc Represents a CDemoSaveGame.
         * @implements ICDemoSaveGame
         * @constructor
         * @param {ICDemoSaveGame=} [properties] Properties to set
         */
        function CDemoSaveGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoSaveGame data.
         * @member {Uint8Array} data
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.data = $util.newBuffer([]);
    
        /**
         * CDemoSaveGame steamId.
         * @member {number|Long} steamId
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.steamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CDemoSaveGame signature.
         * @member {number|Long} signature
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.signature = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CDemoSaveGame version.
         * @member {number} version
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.version = 0;
    
        /**
         * Creates a new CDemoSaveGame instance using the specified properties.
         * @function create
         * @memberof CDemoSaveGame
         * @static
         * @param {ICDemoSaveGame=} [properties] Properties to set
         * @returns {CDemoSaveGame} CDemoSaveGame instance
         */
        CDemoSaveGame.create = function create(properties) {
            return new CDemoSaveGame(properties);
        };
    
        /**
         * Encodes the specified CDemoSaveGame message. Does not implicitly {@link CDemoSaveGame.verify|verify} messages.
         * @function encode
         * @memberof CDemoSaveGame
         * @static
         * @param {ICDemoSaveGame} message CDemoSaveGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSaveGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.steamId != null && Object.hasOwnProperty.call(message, "steamId"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamId);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.signature);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.version);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSaveGame message, length delimited. Does not implicitly {@link CDemoSaveGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSaveGame
         * @static
         * @param {ICDemoSaveGame} message CDemoSaveGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSaveGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSaveGame message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSaveGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSaveGame} CDemoSaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSaveGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSaveGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                case 2: {
                        message.steamId = reader.fixed64();
                        break;
                    }
                case 3: {
                        message.signature = reader.fixed64();
                        break;
                    }
                case 4: {
                        message.version = reader.int32();
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
         * Decodes a CDemoSaveGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSaveGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSaveGame} CDemoSaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSaveGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSaveGame message.
         * @function verify
         * @memberof CDemoSaveGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSaveGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.steamId != null && message.hasOwnProperty("steamId"))
                if (!$util.isInteger(message.steamId) && !(message.steamId && $util.isInteger(message.steamId.low) && $util.isInteger(message.steamId.high)))
                    return "steamId: integer|Long expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!$util.isInteger(message.signature) && !(message.signature && $util.isInteger(message.signature.low) && $util.isInteger(message.signature.high)))
                    return "signature: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            return null;
        };
    
        /**
         * Creates a CDemoSaveGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSaveGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSaveGame} CDemoSaveGame
         */
        CDemoSaveGame.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSaveGame)
                return object;
            var message = new $root.CDemoSaveGame();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.steamId != null)
                if ($util.Long)
                    (message.steamId = $util.Long.fromValue(object.steamId)).unsigned = false;
                else if (typeof object.steamId === "string")
                    message.steamId = parseInt(object.steamId, 10);
                else if (typeof object.steamId === "number")
                    message.steamId = object.steamId;
                else if (typeof object.steamId === "object")
                    message.steamId = new $util.LongBits(object.steamId.low >>> 0, object.steamId.high >>> 0).toNumber();
            if (object.signature != null)
                if ($util.Long)
                    (message.signature = $util.Long.fromValue(object.signature)).unsigned = false;
                else if (typeof object.signature === "string")
                    message.signature = parseInt(object.signature, 10);
                else if (typeof object.signature === "number")
                    message.signature = object.signature;
                else if (typeof object.signature === "object")
                    message.signature = new $util.LongBits(object.signature.low >>> 0, object.signature.high >>> 0).toNumber();
            if (object.version != null)
                message.version = object.version | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoSaveGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSaveGame
         * @static
         * @param {CDemoSaveGame} message CDemoSaveGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSaveGame.toObject = function toObject(message, options) {
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
                    var long = new $util.Long(0, 0, false);
                    object.steamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.signature = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.signature = options.longs === String ? "0" : 0;
                object.version = 0;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.steamId != null && message.hasOwnProperty("steamId"))
                if (typeof message.steamId === "number")
                    object.steamId = options.longs === String ? String(message.steamId) : message.steamId;
                else
                    object.steamId = options.longs === String ? $util.Long.prototype.toString.call(message.steamId) : options.longs === Number ? new $util.LongBits(message.steamId.low >>> 0, message.steamId.high >>> 0).toNumber() : message.steamId;
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (typeof message.signature === "number")
                    object.signature = options.longs === String ? String(message.signature) : message.signature;
                else
                    object.signature = options.longs === String ? $util.Long.prototype.toString.call(message.signature) : options.longs === Number ? new $util.LongBits(message.signature.low >>> 0, message.signature.high >>> 0).toNumber() : message.signature;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };
    
        /**
         * Converts this CDemoSaveGame to JSON.
         * @function toJSON
         * @memberof CDemoSaveGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSaveGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSaveGame
         * @function getTypeUrl
         * @memberof CDemoSaveGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSaveGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSaveGame";
        };
    
        return CDemoSaveGame;
    })();
    
    $root.CDemoSyncTick = (function() {
    
        /**
         * Properties of a CDemoSyncTick.
         * @exports ICDemoSyncTick
         * @interface ICDemoSyncTick
         */
    
        /**
         * Constructs a new CDemoSyncTick.
         * @exports CDemoSyncTick
         * @classdesc Represents a CDemoSyncTick.
         * @implements ICDemoSyncTick
         * @constructor
         * @param {ICDemoSyncTick=} [properties] Properties to set
         */
        function CDemoSyncTick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CDemoSyncTick instance using the specified properties.
         * @function create
         * @memberof CDemoSyncTick
         * @static
         * @param {ICDemoSyncTick=} [properties] Properties to set
         * @returns {CDemoSyncTick} CDemoSyncTick instance
         */
        CDemoSyncTick.create = function create(properties) {
            return new CDemoSyncTick(properties);
        };
    
        /**
         * Encodes the specified CDemoSyncTick message. Does not implicitly {@link CDemoSyncTick.verify|verify} messages.
         * @function encode
         * @memberof CDemoSyncTick
         * @static
         * @param {ICDemoSyncTick} message CDemoSyncTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSyncTick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSyncTick message, length delimited. Does not implicitly {@link CDemoSyncTick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSyncTick
         * @static
         * @param {ICDemoSyncTick} message CDemoSyncTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSyncTick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSyncTick message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSyncTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSyncTick} CDemoSyncTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSyncTick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSyncTick();
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
         * Decodes a CDemoSyncTick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSyncTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSyncTick} CDemoSyncTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSyncTick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSyncTick message.
         * @function verify
         * @memberof CDemoSyncTick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSyncTick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CDemoSyncTick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSyncTick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSyncTick} CDemoSyncTick
         */
        CDemoSyncTick.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSyncTick)
                return object;
            return new $root.CDemoSyncTick();
        };
    
        /**
         * Creates a plain object from a CDemoSyncTick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSyncTick
         * @static
         * @param {CDemoSyncTick} message CDemoSyncTick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSyncTick.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CDemoSyncTick to JSON.
         * @function toJSON
         * @memberof CDemoSyncTick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSyncTick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSyncTick
         * @function getTypeUrl
         * @memberof CDemoSyncTick
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSyncTick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSyncTick";
        };
    
        return CDemoSyncTick;
    })();
    
    $root.CDemoConsoleCmd = (function() {
    
        /**
         * Properties of a CDemoConsoleCmd.
         * @exports ICDemoConsoleCmd
         * @interface ICDemoConsoleCmd
         * @property {string|null} [cmdstring] CDemoConsoleCmd cmdstring
         */
    
        /**
         * Constructs a new CDemoConsoleCmd.
         * @exports CDemoConsoleCmd
         * @classdesc Represents a CDemoConsoleCmd.
         * @implements ICDemoConsoleCmd
         * @constructor
         * @param {ICDemoConsoleCmd=} [properties] Properties to set
         */
        function CDemoConsoleCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoConsoleCmd cmdstring.
         * @member {string} cmdstring
         * @memberof CDemoConsoleCmd
         * @instance
         */
        CDemoConsoleCmd.prototype.cmdstring = "";
    
        /**
         * Creates a new CDemoConsoleCmd instance using the specified properties.
         * @function create
         * @memberof CDemoConsoleCmd
         * @static
         * @param {ICDemoConsoleCmd=} [properties] Properties to set
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd instance
         */
        CDemoConsoleCmd.create = function create(properties) {
            return new CDemoConsoleCmd(properties);
        };
    
        /**
         * Encodes the specified CDemoConsoleCmd message. Does not implicitly {@link CDemoConsoleCmd.verify|verify} messages.
         * @function encode
         * @memberof CDemoConsoleCmd
         * @static
         * @param {ICDemoConsoleCmd} message CDemoConsoleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoConsoleCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdstring != null && Object.hasOwnProperty.call(message, "cmdstring"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmdstring);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoConsoleCmd message, length delimited. Does not implicitly {@link CDemoConsoleCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoConsoleCmd
         * @static
         * @param {ICDemoConsoleCmd} message CDemoConsoleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoConsoleCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoConsoleCmd message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoConsoleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoConsoleCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoConsoleCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmdstring = reader.string();
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
         * Decodes a CDemoConsoleCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoConsoleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoConsoleCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoConsoleCmd message.
         * @function verify
         * @memberof CDemoConsoleCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoConsoleCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdstring != null && message.hasOwnProperty("cmdstring"))
                if (!$util.isString(message.cmdstring))
                    return "cmdstring: string expected";
            return null;
        };
    
        /**
         * Creates a CDemoConsoleCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoConsoleCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd
         */
        CDemoConsoleCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoConsoleCmd)
                return object;
            var message = new $root.CDemoConsoleCmd();
            if (object.cmdstring != null)
                message.cmdstring = String(object.cmdstring);
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoConsoleCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoConsoleCmd
         * @static
         * @param {CDemoConsoleCmd} message CDemoConsoleCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoConsoleCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cmdstring = "";
            if (message.cmdstring != null && message.hasOwnProperty("cmdstring"))
                object.cmdstring = message.cmdstring;
            return object;
        };
    
        /**
         * Converts this CDemoConsoleCmd to JSON.
         * @function toJSON
         * @memberof CDemoConsoleCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoConsoleCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoConsoleCmd
         * @function getTypeUrl
         * @memberof CDemoConsoleCmd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoConsoleCmd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoConsoleCmd";
        };
    
        return CDemoConsoleCmd;
    })();
    
    $root.CDemoSendTables = (function() {
    
        /**
         * Properties of a CDemoSendTables.
         * @exports ICDemoSendTables
         * @interface ICDemoSendTables
         * @property {Uint8Array|null} [data] CDemoSendTables data
         */
    
        /**
         * Constructs a new CDemoSendTables.
         * @exports CDemoSendTables
         * @classdesc Represents a CDemoSendTables.
         * @implements ICDemoSendTables
         * @constructor
         * @param {ICDemoSendTables=} [properties] Properties to set
         */
        function CDemoSendTables(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoSendTables data.
         * @member {Uint8Array} data
         * @memberof CDemoSendTables
         * @instance
         */
        CDemoSendTables.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoSendTables instance using the specified properties.
         * @function create
         * @memberof CDemoSendTables
         * @static
         * @param {ICDemoSendTables=} [properties] Properties to set
         * @returns {CDemoSendTables} CDemoSendTables instance
         */
        CDemoSendTables.create = function create(properties) {
            return new CDemoSendTables(properties);
        };
    
        /**
         * Encodes the specified CDemoSendTables message. Does not implicitly {@link CDemoSendTables.verify|verify} messages.
         * @function encode
         * @memberof CDemoSendTables
         * @static
         * @param {ICDemoSendTables} message CDemoSendTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSendTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSendTables message, length delimited. Does not implicitly {@link CDemoSendTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSendTables
         * @static
         * @param {ICDemoSendTables} message CDemoSendTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSendTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSendTables message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSendTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSendTables} CDemoSendTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSendTables.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSendTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
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
         * Decodes a CDemoSendTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSendTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSendTables} CDemoSendTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSendTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSendTables message.
         * @function verify
         * @memberof CDemoSendTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSendTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoSendTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSendTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSendTables} CDemoSendTables
         */
        CDemoSendTables.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSendTables)
                return object;
            var message = new $root.CDemoSendTables();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoSendTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSendTables
         * @static
         * @param {CDemoSendTables} message CDemoSendTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSendTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoSendTables to JSON.
         * @function toJSON
         * @memberof CDemoSendTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSendTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSendTables
         * @function getTypeUrl
         * @memberof CDemoSendTables
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSendTables.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSendTables";
        };
    
        return CDemoSendTables;
    })();
    
    $root.CDemoClassInfo = (function() {
    
        /**
         * Properties of a CDemoClassInfo.
         * @exports ICDemoClassInfo
         * @interface ICDemoClassInfo
         * @property {Array.<CDemoClassInfo.Iclass_t>|null} [classes] CDemoClassInfo classes
         */
    
        /**
         * Constructs a new CDemoClassInfo.
         * @exports CDemoClassInfo
         * @classdesc Represents a CDemoClassInfo.
         * @implements ICDemoClassInfo
         * @constructor
         * @param {ICDemoClassInfo=} [properties] Properties to set
         */
        function CDemoClassInfo(properties) {
            this.classes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoClassInfo classes.
         * @member {Array.<CDemoClassInfo.Iclass_t>} classes
         * @memberof CDemoClassInfo
         * @instance
         */
        CDemoClassInfo.prototype.classes = $util.emptyArray;
    
        /**
         * Creates a new CDemoClassInfo instance using the specified properties.
         * @function create
         * @memberof CDemoClassInfo
         * @static
         * @param {ICDemoClassInfo=} [properties] Properties to set
         * @returns {CDemoClassInfo} CDemoClassInfo instance
         */
        CDemoClassInfo.create = function create(properties) {
            return new CDemoClassInfo(properties);
        };
    
        /**
         * Encodes the specified CDemoClassInfo message. Does not implicitly {@link CDemoClassInfo.verify|verify} messages.
         * @function encode
         * @memberof CDemoClassInfo
         * @static
         * @param {ICDemoClassInfo} message CDemoClassInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoClassInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.classes != null && message.classes.length)
                for (var i = 0; i < message.classes.length; ++i)
                    $root.CDemoClassInfo.class_t.encode(message.classes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoClassInfo message, length delimited. Does not implicitly {@link CDemoClassInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoClassInfo
         * @static
         * @param {ICDemoClassInfo} message CDemoClassInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoClassInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoClassInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoClassInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoClassInfo} CDemoClassInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoClassInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoClassInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.classes && message.classes.length))
                            message.classes = [];
                        message.classes.push($root.CDemoClassInfo.class_t.decode(reader, reader.uint32()));
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
         * Decodes a CDemoClassInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoClassInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoClassInfo} CDemoClassInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoClassInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoClassInfo message.
         * @function verify
         * @memberof CDemoClassInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoClassInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.classes != null && message.hasOwnProperty("classes")) {
                if (!Array.isArray(message.classes))
                    return "classes: array expected";
                for (var i = 0; i < message.classes.length; ++i) {
                    var error = $root.CDemoClassInfo.class_t.verify(message.classes[i]);
                    if (error)
                        return "classes." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CDemoClassInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoClassInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoClassInfo} CDemoClassInfo
         */
        CDemoClassInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoClassInfo)
                return object;
            var message = new $root.CDemoClassInfo();
            if (object.classes) {
                if (!Array.isArray(object.classes))
                    throw TypeError(".CDemoClassInfo.classes: array expected");
                message.classes = [];
                for (var i = 0; i < object.classes.length; ++i) {
                    if (typeof object.classes[i] !== "object")
                        throw TypeError(".CDemoClassInfo.classes: object expected");
                    message.classes[i] = $root.CDemoClassInfo.class_t.fromObject(object.classes[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoClassInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoClassInfo
         * @static
         * @param {CDemoClassInfo} message CDemoClassInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoClassInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.classes = [];
            if (message.classes && message.classes.length) {
                object.classes = [];
                for (var j = 0; j < message.classes.length; ++j)
                    object.classes[j] = $root.CDemoClassInfo.class_t.toObject(message.classes[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CDemoClassInfo to JSON.
         * @function toJSON
         * @memberof CDemoClassInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoClassInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoClassInfo
         * @function getTypeUrl
         * @memberof CDemoClassInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoClassInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoClassInfo";
        };
    
        CDemoClassInfo.class_t = (function() {
    
            /**
             * Properties of a class_t.
             * @memberof CDemoClassInfo
             * @interface Iclass_t
             * @property {number|null} [classId] class_t classId
             * @property {string|null} [networkName] class_t networkName
             * @property {string|null} [tableName] class_t tableName
             */
    
            /**
             * Constructs a new class_t.
             * @memberof CDemoClassInfo
             * @classdesc Represents a class_t.
             * @implements Iclass_t
             * @constructor
             * @param {CDemoClassInfo.Iclass_t=} [properties] Properties to set
             */
            function class_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * class_t classId.
             * @member {number} classId
             * @memberof CDemoClassInfo.class_t
             * @instance
             */
            class_t.prototype.classId = 0;
    
            /**
             * class_t networkName.
             * @member {string} networkName
             * @memberof CDemoClassInfo.class_t
             * @instance
             */
            class_t.prototype.networkName = "";
    
            /**
             * class_t tableName.
             * @member {string} tableName
             * @memberof CDemoClassInfo.class_t
             * @instance
             */
            class_t.prototype.tableName = "";
    
            /**
             * Creates a new class_t instance using the specified properties.
             * @function create
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.Iclass_t=} [properties] Properties to set
             * @returns {CDemoClassInfo.class_t} class_t instance
             */
            class_t.create = function create(properties) {
                return new class_t(properties);
            };
    
            /**
             * Encodes the specified class_t message. Does not implicitly {@link CDemoClassInfo.class_t.verify|verify} messages.
             * @function encode
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.Iclass_t} message class_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            class_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.classId != null && Object.hasOwnProperty.call(message, "classId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.classId);
                if (message.networkName != null && Object.hasOwnProperty.call(message, "networkName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.networkName);
                if (message.tableName != null && Object.hasOwnProperty.call(message, "tableName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableName);
                return writer;
            };
    
            /**
             * Encodes the specified class_t message, length delimited. Does not implicitly {@link CDemoClassInfo.class_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.Iclass_t} message class_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            class_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a class_t message from the specified reader or buffer.
             * @function decode
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDemoClassInfo.class_t} class_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            class_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoClassInfo.class_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.classId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.networkName = reader.string();
                            break;
                        }
                    case 3: {
                            message.tableName = reader.string();
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
             * Decodes a class_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDemoClassInfo.class_t} class_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            class_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a class_t message.
             * @function verify
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            class_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.classId != null && message.hasOwnProperty("classId"))
                    if (!$util.isInteger(message.classId))
                        return "classId: integer expected";
                if (message.networkName != null && message.hasOwnProperty("networkName"))
                    if (!$util.isString(message.networkName))
                        return "networkName: string expected";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    if (!$util.isString(message.tableName))
                        return "tableName: string expected";
                return null;
            };
    
            /**
             * Creates a class_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDemoClassInfo.class_t} class_t
             */
            class_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CDemoClassInfo.class_t)
                    return object;
                var message = new $root.CDemoClassInfo.class_t();
                if (object.classId != null)
                    message.classId = object.classId | 0;
                if (object.networkName != null)
                    message.networkName = String(object.networkName);
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                return message;
            };
    
            /**
             * Creates a plain object from a class_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.class_t} message class_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            class_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.classId = 0;
                    object.networkName = "";
                    object.tableName = "";
                }
                if (message.classId != null && message.hasOwnProperty("classId"))
                    object.classId = message.classId;
                if (message.networkName != null && message.hasOwnProperty("networkName"))
                    object.networkName = message.networkName;
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                return object;
            };
    
            /**
             * Converts this class_t to JSON.
             * @function toJSON
             * @memberof CDemoClassInfo.class_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            class_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for class_t
             * @function getTypeUrl
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            class_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CDemoClassInfo.class_t";
            };
    
            return class_t;
        })();
    
        return CDemoClassInfo;
    })();
    
    $root.CDemoCustomData = (function() {
    
        /**
         * Properties of a CDemoCustomData.
         * @exports ICDemoCustomData
         * @interface ICDemoCustomData
         * @property {number|null} [callbackIndex] CDemoCustomData callbackIndex
         * @property {Uint8Array|null} [data] CDemoCustomData data
         */
    
        /**
         * Constructs a new CDemoCustomData.
         * @exports CDemoCustomData
         * @classdesc Represents a CDemoCustomData.
         * @implements ICDemoCustomData
         * @constructor
         * @param {ICDemoCustomData=} [properties] Properties to set
         */
        function CDemoCustomData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoCustomData callbackIndex.
         * @member {number} callbackIndex
         * @memberof CDemoCustomData
         * @instance
         */
        CDemoCustomData.prototype.callbackIndex = 0;
    
        /**
         * CDemoCustomData data.
         * @member {Uint8Array} data
         * @memberof CDemoCustomData
         * @instance
         */
        CDemoCustomData.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoCustomData instance using the specified properties.
         * @function create
         * @memberof CDemoCustomData
         * @static
         * @param {ICDemoCustomData=} [properties] Properties to set
         * @returns {CDemoCustomData} CDemoCustomData instance
         */
        CDemoCustomData.create = function create(properties) {
            return new CDemoCustomData(properties);
        };
    
        /**
         * Encodes the specified CDemoCustomData message. Does not implicitly {@link CDemoCustomData.verify|verify} messages.
         * @function encode
         * @memberof CDemoCustomData
         * @static
         * @param {ICDemoCustomData} message CDemoCustomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callbackIndex != null && Object.hasOwnProperty.call(message, "callbackIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.callbackIndex);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoCustomData message, length delimited. Does not implicitly {@link CDemoCustomData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoCustomData
         * @static
         * @param {ICDemoCustomData} message CDemoCustomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoCustomData message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoCustomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoCustomData} CDemoCustomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoCustomData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.callbackIndex = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
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
         * Decodes a CDemoCustomData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoCustomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoCustomData} CDemoCustomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoCustomData message.
         * @function verify
         * @memberof CDemoCustomData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoCustomData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callbackIndex != null && message.hasOwnProperty("callbackIndex"))
                if (!$util.isInteger(message.callbackIndex))
                    return "callbackIndex: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoCustomData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoCustomData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoCustomData} CDemoCustomData
         */
        CDemoCustomData.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoCustomData)
                return object;
            var message = new $root.CDemoCustomData();
            if (object.callbackIndex != null)
                message.callbackIndex = object.callbackIndex | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoCustomData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoCustomData
         * @static
         * @param {CDemoCustomData} message CDemoCustomData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoCustomData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.callbackIndex = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.callbackIndex != null && message.hasOwnProperty("callbackIndex"))
                object.callbackIndex = message.callbackIndex;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoCustomData to JSON.
         * @function toJSON
         * @memberof CDemoCustomData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoCustomData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoCustomData
         * @function getTypeUrl
         * @memberof CDemoCustomData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoCustomData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoCustomData";
        };
    
        return CDemoCustomData;
    })();
    
    $root.CDemoCustomDataCallbacks = (function() {
    
        /**
         * Properties of a CDemoCustomDataCallbacks.
         * @exports ICDemoCustomDataCallbacks
         * @interface ICDemoCustomDataCallbacks
         * @property {Array.<string>|null} [saveId] CDemoCustomDataCallbacks saveId
         */
    
        /**
         * Constructs a new CDemoCustomDataCallbacks.
         * @exports CDemoCustomDataCallbacks
         * @classdesc Represents a CDemoCustomDataCallbacks.
         * @implements ICDemoCustomDataCallbacks
         * @constructor
         * @param {ICDemoCustomDataCallbacks=} [properties] Properties to set
         */
        function CDemoCustomDataCallbacks(properties) {
            this.saveId = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoCustomDataCallbacks saveId.
         * @member {Array.<string>} saveId
         * @memberof CDemoCustomDataCallbacks
         * @instance
         */
        CDemoCustomDataCallbacks.prototype.saveId = $util.emptyArray;
    
        /**
         * Creates a new CDemoCustomDataCallbacks instance using the specified properties.
         * @function create
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {ICDemoCustomDataCallbacks=} [properties] Properties to set
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks instance
         */
        CDemoCustomDataCallbacks.create = function create(properties) {
            return new CDemoCustomDataCallbacks(properties);
        };
    
        /**
         * Encodes the specified CDemoCustomDataCallbacks message. Does not implicitly {@link CDemoCustomDataCallbacks.verify|verify} messages.
         * @function encode
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {ICDemoCustomDataCallbacks} message CDemoCustomDataCallbacks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomDataCallbacks.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.saveId != null && message.saveId.length)
                for (var i = 0; i < message.saveId.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.saveId[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoCustomDataCallbacks message, length delimited. Does not implicitly {@link CDemoCustomDataCallbacks.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {ICDemoCustomDataCallbacks} message CDemoCustomDataCallbacks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomDataCallbacks.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoCustomDataCallbacks message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomDataCallbacks.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoCustomDataCallbacks();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.saveId && message.saveId.length))
                            message.saveId = [];
                        message.saveId.push(reader.string());
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
         * Decodes a CDemoCustomDataCallbacks message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomDataCallbacks.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoCustomDataCallbacks message.
         * @function verify
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoCustomDataCallbacks.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.saveId != null && message.hasOwnProperty("saveId")) {
                if (!Array.isArray(message.saveId))
                    return "saveId: array expected";
                for (var i = 0; i < message.saveId.length; ++i)
                    if (!$util.isString(message.saveId[i]))
                        return "saveId: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CDemoCustomDataCallbacks message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks
         */
        CDemoCustomDataCallbacks.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoCustomDataCallbacks)
                return object;
            var message = new $root.CDemoCustomDataCallbacks();
            if (object.saveId) {
                if (!Array.isArray(object.saveId))
                    throw TypeError(".CDemoCustomDataCallbacks.saveId: array expected");
                message.saveId = [];
                for (var i = 0; i < object.saveId.length; ++i)
                    message.saveId[i] = String(object.saveId[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoCustomDataCallbacks message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {CDemoCustomDataCallbacks} message CDemoCustomDataCallbacks
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoCustomDataCallbacks.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.saveId = [];
            if (message.saveId && message.saveId.length) {
                object.saveId = [];
                for (var j = 0; j < message.saveId.length; ++j)
                    object.saveId[j] = message.saveId[j];
            }
            return object;
        };
    
        /**
         * Converts this CDemoCustomDataCallbacks to JSON.
         * @function toJSON
         * @memberof CDemoCustomDataCallbacks
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoCustomDataCallbacks.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoCustomDataCallbacks
         * @function getTypeUrl
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoCustomDataCallbacks.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoCustomDataCallbacks";
        };
    
        return CDemoCustomDataCallbacks;
    })();
    
    $root.CDemoAnimationData = (function() {
    
        /**
         * Properties of a CDemoAnimationData.
         * @exports ICDemoAnimationData
         * @interface ICDemoAnimationData
         * @property {number|null} [entityId] CDemoAnimationData entityId
         * @property {number|null} [startTick] CDemoAnimationData startTick
         * @property {number|null} [endTick] CDemoAnimationData endTick
         * @property {Uint8Array|null} [data] CDemoAnimationData data
         * @property {number|Long|null} [dataChecksum] CDemoAnimationData dataChecksum
         */
    
        /**
         * Constructs a new CDemoAnimationData.
         * @exports CDemoAnimationData
         * @classdesc Represents a CDemoAnimationData.
         * @implements ICDemoAnimationData
         * @constructor
         * @param {ICDemoAnimationData=} [properties] Properties to set
         */
        function CDemoAnimationData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoAnimationData entityId.
         * @member {number} entityId
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.entityId = 0;
    
        /**
         * CDemoAnimationData startTick.
         * @member {number} startTick
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.startTick = 0;
    
        /**
         * CDemoAnimationData endTick.
         * @member {number} endTick
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.endTick = 0;
    
        /**
         * CDemoAnimationData data.
         * @member {Uint8Array} data
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.data = $util.newBuffer([]);
    
        /**
         * CDemoAnimationData dataChecksum.
         * @member {number|Long} dataChecksum
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.dataChecksum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CDemoAnimationData instance using the specified properties.
         * @function create
         * @memberof CDemoAnimationData
         * @static
         * @param {ICDemoAnimationData=} [properties] Properties to set
         * @returns {CDemoAnimationData} CDemoAnimationData instance
         */
        CDemoAnimationData.create = function create(properties) {
            return new CDemoAnimationData(properties);
        };
    
        /**
         * Encodes the specified CDemoAnimationData message. Does not implicitly {@link CDemoAnimationData.verify|verify} messages.
         * @function encode
         * @memberof CDemoAnimationData
         * @static
         * @param {ICDemoAnimationData} message CDemoAnimationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoAnimationData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.entityId);
            if (message.startTick != null && Object.hasOwnProperty.call(message, "startTick"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.startTick);
            if (message.endTick != null && Object.hasOwnProperty.call(message, "endTick"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.endTick);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            if (message.dataChecksum != null && Object.hasOwnProperty.call(message, "dataChecksum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.dataChecksum);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoAnimationData message, length delimited. Does not implicitly {@link CDemoAnimationData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoAnimationData
         * @static
         * @param {ICDemoAnimationData} message CDemoAnimationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoAnimationData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoAnimationData message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoAnimationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoAnimationData} CDemoAnimationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoAnimationData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoAnimationData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.entityId = reader.sint32();
                        break;
                    }
                case 2: {
                        message.startTick = reader.int32();
                        break;
                    }
                case 3: {
                        message.endTick = reader.int32();
                        break;
                    }
                case 4: {
                        message.data = reader.bytes();
                        break;
                    }
                case 5: {
                        message.dataChecksum = reader.int64();
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
         * Decodes a CDemoAnimationData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoAnimationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoAnimationData} CDemoAnimationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoAnimationData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoAnimationData message.
         * @function verify
         * @memberof CDemoAnimationData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoAnimationData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entityId != null && message.hasOwnProperty("entityId"))
                if (!$util.isInteger(message.entityId))
                    return "entityId: integer expected";
            if (message.startTick != null && message.hasOwnProperty("startTick"))
                if (!$util.isInteger(message.startTick))
                    return "startTick: integer expected";
            if (message.endTick != null && message.hasOwnProperty("endTick"))
                if (!$util.isInteger(message.endTick))
                    return "endTick: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.dataChecksum != null && message.hasOwnProperty("dataChecksum"))
                if (!$util.isInteger(message.dataChecksum) && !(message.dataChecksum && $util.isInteger(message.dataChecksum.low) && $util.isInteger(message.dataChecksum.high)))
                    return "dataChecksum: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CDemoAnimationData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoAnimationData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoAnimationData} CDemoAnimationData
         */
        CDemoAnimationData.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoAnimationData)
                return object;
            var message = new $root.CDemoAnimationData();
            if (object.entityId != null)
                message.entityId = object.entityId | 0;
            if (object.startTick != null)
                message.startTick = object.startTick | 0;
            if (object.endTick != null)
                message.endTick = object.endTick | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.dataChecksum != null)
                if ($util.Long)
                    (message.dataChecksum = $util.Long.fromValue(object.dataChecksum)).unsigned = false;
                else if (typeof object.dataChecksum === "string")
                    message.dataChecksum = parseInt(object.dataChecksum, 10);
                else if (typeof object.dataChecksum === "number")
                    message.dataChecksum = object.dataChecksum;
                else if (typeof object.dataChecksum === "object")
                    message.dataChecksum = new $util.LongBits(object.dataChecksum.low >>> 0, object.dataChecksum.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoAnimationData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoAnimationData
         * @static
         * @param {CDemoAnimationData} message CDemoAnimationData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoAnimationData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.entityId = 0;
                object.startTick = 0;
                object.endTick = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dataChecksum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dataChecksum = options.longs === String ? "0" : 0;
            }
            if (message.entityId != null && message.hasOwnProperty("entityId"))
                object.entityId = message.entityId;
            if (message.startTick != null && message.hasOwnProperty("startTick"))
                object.startTick = message.startTick;
            if (message.endTick != null && message.hasOwnProperty("endTick"))
                object.endTick = message.endTick;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.dataChecksum != null && message.hasOwnProperty("dataChecksum"))
                if (typeof message.dataChecksum === "number")
                    object.dataChecksum = options.longs === String ? String(message.dataChecksum) : message.dataChecksum;
                else
                    object.dataChecksum = options.longs === String ? $util.Long.prototype.toString.call(message.dataChecksum) : options.longs === Number ? new $util.LongBits(message.dataChecksum.low >>> 0, message.dataChecksum.high >>> 0).toNumber() : message.dataChecksum;
            return object;
        };
    
        /**
         * Converts this CDemoAnimationData to JSON.
         * @function toJSON
         * @memberof CDemoAnimationData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoAnimationData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoAnimationData
         * @function getTypeUrl
         * @memberof CDemoAnimationData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoAnimationData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoAnimationData";
        };
    
        return CDemoAnimationData;
    })();
    
    $root.CDemoStringTables = (function() {
    
        /**
         * Properties of a CDemoStringTables.
         * @exports ICDemoStringTables
         * @interface ICDemoStringTables
         * @property {Array.<CDemoStringTables.Itable_t>|null} [tables] CDemoStringTables tables
         */
    
        /**
         * Constructs a new CDemoStringTables.
         * @exports CDemoStringTables
         * @classdesc Represents a CDemoStringTables.
         * @implements ICDemoStringTables
         * @constructor
         * @param {ICDemoStringTables=} [properties] Properties to set
         */
        function CDemoStringTables(properties) {
            this.tables = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoStringTables tables.
         * @member {Array.<CDemoStringTables.Itable_t>} tables
         * @memberof CDemoStringTables
         * @instance
         */
        CDemoStringTables.prototype.tables = $util.emptyArray;
    
        /**
         * Creates a new CDemoStringTables instance using the specified properties.
         * @function create
         * @memberof CDemoStringTables
         * @static
         * @param {ICDemoStringTables=} [properties] Properties to set
         * @returns {CDemoStringTables} CDemoStringTables instance
         */
        CDemoStringTables.create = function create(properties) {
            return new CDemoStringTables(properties);
        };
    
        /**
         * Encodes the specified CDemoStringTables message. Does not implicitly {@link CDemoStringTables.verify|verify} messages.
         * @function encode
         * @memberof CDemoStringTables
         * @static
         * @param {ICDemoStringTables} message CDemoStringTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStringTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tables != null && message.tables.length)
                for (var i = 0; i < message.tables.length; ++i)
                    $root.CDemoStringTables.table_t.encode(message.tables[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoStringTables message, length delimited. Does not implicitly {@link CDemoStringTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoStringTables
         * @static
         * @param {ICDemoStringTables} message CDemoStringTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStringTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoStringTables message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoStringTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoStringTables} CDemoStringTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStringTables.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStringTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.CDemoStringTables.table_t.decode(reader, reader.uint32()));
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
         * Decodes a CDemoStringTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoStringTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoStringTables} CDemoStringTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStringTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoStringTables message.
         * @function verify
         * @memberof CDemoStringTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoStringTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (var i = 0; i < message.tables.length; ++i) {
                    var error = $root.CDemoStringTables.table_t.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CDemoStringTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoStringTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoStringTables} CDemoStringTables
         */
        CDemoStringTables.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoStringTables)
                return object;
            var message = new $root.CDemoStringTables();
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".CDemoStringTables.tables: array expected");
                message.tables = [];
                for (var i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".CDemoStringTables.tables: object expected");
                    message.tables[i] = $root.CDemoStringTables.table_t.fromObject(object.tables[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoStringTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoStringTables
         * @static
         * @param {CDemoStringTables} message CDemoStringTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoStringTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tables = [];
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (var j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.CDemoStringTables.table_t.toObject(message.tables[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CDemoStringTables to JSON.
         * @function toJSON
         * @memberof CDemoStringTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoStringTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoStringTables
         * @function getTypeUrl
         * @memberof CDemoStringTables
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoStringTables.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoStringTables";
        };
    
        CDemoStringTables.items_t = (function() {
    
            /**
             * Properties of an items_t.
             * @memberof CDemoStringTables
             * @interface Iitems_t
             * @property {string|null} [str] items_t str
             * @property {Uint8Array|null} [data] items_t data
             */
    
            /**
             * Constructs a new items_t.
             * @memberof CDemoStringTables
             * @classdesc Represents an items_t.
             * @implements Iitems_t
             * @constructor
             * @param {CDemoStringTables.Iitems_t=} [properties] Properties to set
             */
            function items_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * items_t str.
             * @member {string} str
             * @memberof CDemoStringTables.items_t
             * @instance
             */
            items_t.prototype.str = "";
    
            /**
             * items_t data.
             * @member {Uint8Array} data
             * @memberof CDemoStringTables.items_t
             * @instance
             */
            items_t.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new items_t instance using the specified properties.
             * @function create
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.Iitems_t=} [properties] Properties to set
             * @returns {CDemoStringTables.items_t} items_t instance
             */
            items_t.create = function create(properties) {
                return new items_t(properties);
            };
    
            /**
             * Encodes the specified items_t message. Does not implicitly {@link CDemoStringTables.items_t.verify|verify} messages.
             * @function encode
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.Iitems_t} message items_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            items_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified items_t message, length delimited. Does not implicitly {@link CDemoStringTables.items_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.Iitems_t} message items_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            items_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an items_t message from the specified reader or buffer.
             * @function decode
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDemoStringTables.items_t} items_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            items_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStringTables.items_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.str = reader.string();
                            break;
                        }
                    case 2: {
                            message.data = reader.bytes();
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
             * Decodes an items_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDemoStringTables.items_t} items_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            items_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an items_t message.
             * @function verify
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            items_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.str != null && message.hasOwnProperty("str"))
                    if (!$util.isString(message.str))
                        return "str: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates an items_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDemoStringTables.items_t} items_t
             */
            items_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CDemoStringTables.items_t)
                    return object;
                var message = new $root.CDemoStringTables.items_t();
                if (object.str != null)
                    message.str = String(object.str);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from an items_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.items_t} message items_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            items_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.str = "";
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.str != null && message.hasOwnProperty("str"))
                    object.str = message.str;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this items_t to JSON.
             * @function toJSON
             * @memberof CDemoStringTables.items_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            items_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for items_t
             * @function getTypeUrl
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            items_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CDemoStringTables.items_t";
            };
    
            return items_t;
        })();
    
        CDemoStringTables.table_t = (function() {
    
            /**
             * Properties of a table_t.
             * @memberof CDemoStringTables
             * @interface Itable_t
             * @property {string|null} [tableName] table_t tableName
             * @property {Array.<CDemoStringTables.Iitems_t>|null} [items] table_t items
             * @property {Array.<CDemoStringTables.Iitems_t>|null} [itemsClientside] table_t itemsClientside
             * @property {number|null} [tableFlags] table_t tableFlags
             */
    
            /**
             * Constructs a new table_t.
             * @memberof CDemoStringTables
             * @classdesc Represents a table_t.
             * @implements Itable_t
             * @constructor
             * @param {CDemoStringTables.Itable_t=} [properties] Properties to set
             */
            function table_t(properties) {
                this.items = [];
                this.itemsClientside = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * table_t tableName.
             * @member {string} tableName
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.tableName = "";
    
            /**
             * table_t items.
             * @member {Array.<CDemoStringTables.Iitems_t>} items
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.items = $util.emptyArray;
    
            /**
             * table_t itemsClientside.
             * @member {Array.<CDemoStringTables.Iitems_t>} itemsClientside
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.itemsClientside = $util.emptyArray;
    
            /**
             * table_t tableFlags.
             * @member {number} tableFlags
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.tableFlags = 0;
    
            /**
             * Creates a new table_t instance using the specified properties.
             * @function create
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.Itable_t=} [properties] Properties to set
             * @returns {CDemoStringTables.table_t} table_t instance
             */
            table_t.create = function create(properties) {
                return new table_t(properties);
            };
    
            /**
             * Encodes the specified table_t message. Does not implicitly {@link CDemoStringTables.table_t.verify|verify} messages.
             * @function encode
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.Itable_t} message table_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            table_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tableName != null && Object.hasOwnProperty.call(message, "tableName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
                if (message.items != null && message.items.length)
                    for (var i = 0; i < message.items.length; ++i)
                        $root.CDemoStringTables.items_t.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.itemsClientside != null && message.itemsClientside.length)
                    for (var i = 0; i < message.itemsClientside.length; ++i)
                        $root.CDemoStringTables.items_t.encode(message.itemsClientside[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.tableFlags != null && Object.hasOwnProperty.call(message, "tableFlags"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tableFlags);
                return writer;
            };
    
            /**
             * Encodes the specified table_t message, length delimited. Does not implicitly {@link CDemoStringTables.table_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.Itable_t} message table_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            table_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a table_t message from the specified reader or buffer.
             * @function decode
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDemoStringTables.table_t} table_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            table_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStringTables.table_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.tableName = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.CDemoStringTables.items_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.itemsClientside && message.itemsClientside.length))
                                message.itemsClientside = [];
                            message.itemsClientside.push($root.CDemoStringTables.items_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            message.tableFlags = reader.int32();
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
             * Decodes a table_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDemoStringTables.table_t} table_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            table_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a table_t message.
             * @function verify
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            table_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    if (!$util.isString(message.tableName))
                        return "tableName: string expected";
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!Array.isArray(message.items))
                        return "items: array expected";
                    for (var i = 0; i < message.items.length; ++i) {
                        var error = $root.CDemoStringTables.items_t.verify(message.items[i]);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.itemsClientside != null && message.hasOwnProperty("itemsClientside")) {
                    if (!Array.isArray(message.itemsClientside))
                        return "itemsClientside: array expected";
                    for (var i = 0; i < message.itemsClientside.length; ++i) {
                        var error = $root.CDemoStringTables.items_t.verify(message.itemsClientside[i]);
                        if (error)
                            return "itemsClientside." + error;
                    }
                }
                if (message.tableFlags != null && message.hasOwnProperty("tableFlags"))
                    if (!$util.isInteger(message.tableFlags))
                        return "tableFlags: integer expected";
                return null;
            };
    
            /**
             * Creates a table_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDemoStringTables.table_t} table_t
             */
            table_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CDemoStringTables.table_t)
                    return object;
                var message = new $root.CDemoStringTables.table_t();
                if (object.tableName != null)
                    message.tableName = String(object.tableName);
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".CDemoStringTables.table_t.items: array expected");
                    message.items = [];
                    for (var i = 0; i < object.items.length; ++i) {
                        if (typeof object.items[i] !== "object")
                            throw TypeError(".CDemoStringTables.table_t.items: object expected");
                        message.items[i] = $root.CDemoStringTables.items_t.fromObject(object.items[i]);
                    }
                }
                if (object.itemsClientside) {
                    if (!Array.isArray(object.itemsClientside))
                        throw TypeError(".CDemoStringTables.table_t.itemsClientside: array expected");
                    message.itemsClientside = [];
                    for (var i = 0; i < object.itemsClientside.length; ++i) {
                        if (typeof object.itemsClientside[i] !== "object")
                            throw TypeError(".CDemoStringTables.table_t.itemsClientside: object expected");
                        message.itemsClientside[i] = $root.CDemoStringTables.items_t.fromObject(object.itemsClientside[i]);
                    }
                }
                if (object.tableFlags != null)
                    message.tableFlags = object.tableFlags | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a table_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.table_t} message table_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            table_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.items = [];
                    object.itemsClientside = [];
                }
                if (options.defaults) {
                    object.tableName = "";
                    object.tableFlags = 0;
                }
                if (message.tableName != null && message.hasOwnProperty("tableName"))
                    object.tableName = message.tableName;
                if (message.items && message.items.length) {
                    object.items = [];
                    for (var j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.CDemoStringTables.items_t.toObject(message.items[j], options);
                }
                if (message.itemsClientside && message.itemsClientside.length) {
                    object.itemsClientside = [];
                    for (var j = 0; j < message.itemsClientside.length; ++j)
                        object.itemsClientside[j] = $root.CDemoStringTables.items_t.toObject(message.itemsClientside[j], options);
                }
                if (message.tableFlags != null && message.hasOwnProperty("tableFlags"))
                    object.tableFlags = message.tableFlags;
                return object;
            };
    
            /**
             * Converts this table_t to JSON.
             * @function toJSON
             * @memberof CDemoStringTables.table_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            table_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for table_t
             * @function getTypeUrl
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            table_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CDemoStringTables.table_t";
            };
    
            return table_t;
        })();
    
        return CDemoStringTables;
    })();
    
    $root.CDemoStop = (function() {
    
        /**
         * Properties of a CDemoStop.
         * @exports ICDemoStop
         * @interface ICDemoStop
         */
    
        /**
         * Constructs a new CDemoStop.
         * @exports CDemoStop
         * @classdesc Represents a CDemoStop.
         * @implements ICDemoStop
         * @constructor
         * @param {ICDemoStop=} [properties] Properties to set
         */
        function CDemoStop(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CDemoStop instance using the specified properties.
         * @function create
         * @memberof CDemoStop
         * @static
         * @param {ICDemoStop=} [properties] Properties to set
         * @returns {CDemoStop} CDemoStop instance
         */
        CDemoStop.create = function create(properties) {
            return new CDemoStop(properties);
        };
    
        /**
         * Encodes the specified CDemoStop message. Does not implicitly {@link CDemoStop.verify|verify} messages.
         * @function encode
         * @memberof CDemoStop
         * @static
         * @param {ICDemoStop} message CDemoStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoStop message, length delimited. Does not implicitly {@link CDemoStop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoStop
         * @static
         * @param {ICDemoStop} message CDemoStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoStop message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoStop} CDemoStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStop.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStop();
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
         * Decodes a CDemoStop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoStop} CDemoStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoStop message.
         * @function verify
         * @memberof CDemoStop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoStop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CDemoStop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoStop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoStop} CDemoStop
         */
        CDemoStop.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoStop)
                return object;
            return new $root.CDemoStop();
        };
    
        /**
         * Creates a plain object from a CDemoStop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoStop
         * @static
         * @param {CDemoStop} message CDemoStop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoStop.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CDemoStop to JSON.
         * @function toJSON
         * @memberof CDemoStop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoStop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoStop
         * @function getTypeUrl
         * @memberof CDemoStop
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoStop";
        };
    
        return CDemoStop;
    })();
    
    $root.CDemoUserCmd = (function() {
    
        /**
         * Properties of a CDemoUserCmd.
         * @exports ICDemoUserCmd
         * @interface ICDemoUserCmd
         * @property {number|null} [cmdNumber] CDemoUserCmd cmdNumber
         * @property {Uint8Array|null} [data] CDemoUserCmd data
         */
    
        /**
         * Constructs a new CDemoUserCmd.
         * @exports CDemoUserCmd
         * @classdesc Represents a CDemoUserCmd.
         * @implements ICDemoUserCmd
         * @constructor
         * @param {ICDemoUserCmd=} [properties] Properties to set
         */
        function CDemoUserCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoUserCmd cmdNumber.
         * @member {number} cmdNumber
         * @memberof CDemoUserCmd
         * @instance
         */
        CDemoUserCmd.prototype.cmdNumber = 0;
    
        /**
         * CDemoUserCmd data.
         * @member {Uint8Array} data
         * @memberof CDemoUserCmd
         * @instance
         */
        CDemoUserCmd.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoUserCmd instance using the specified properties.
         * @function create
         * @memberof CDemoUserCmd
         * @static
         * @param {ICDemoUserCmd=} [properties] Properties to set
         * @returns {CDemoUserCmd} CDemoUserCmd instance
         */
        CDemoUserCmd.create = function create(properties) {
            return new CDemoUserCmd(properties);
        };
    
        /**
         * Encodes the specified CDemoUserCmd message. Does not implicitly {@link CDemoUserCmd.verify|verify} messages.
         * @function encode
         * @memberof CDemoUserCmd
         * @static
         * @param {ICDemoUserCmd} message CDemoUserCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoUserCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdNumber != null && Object.hasOwnProperty.call(message, "cmdNumber"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmdNumber);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoUserCmd message, length delimited. Does not implicitly {@link CDemoUserCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoUserCmd
         * @static
         * @param {ICDemoUserCmd} message CDemoUserCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoUserCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoUserCmd message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoUserCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoUserCmd} CDemoUserCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoUserCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoUserCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmdNumber = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
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
         * Decodes a CDemoUserCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoUserCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoUserCmd} CDemoUserCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoUserCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoUserCmd message.
         * @function verify
         * @memberof CDemoUserCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoUserCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdNumber != null && message.hasOwnProperty("cmdNumber"))
                if (!$util.isInteger(message.cmdNumber))
                    return "cmdNumber: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoUserCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoUserCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoUserCmd} CDemoUserCmd
         */
        CDemoUserCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoUserCmd)
                return object;
            var message = new $root.CDemoUserCmd();
            if (object.cmdNumber != null)
                message.cmdNumber = object.cmdNumber | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoUserCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoUserCmd
         * @static
         * @param {CDemoUserCmd} message CDemoUserCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoUserCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmdNumber = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.cmdNumber != null && message.hasOwnProperty("cmdNumber"))
                object.cmdNumber = message.cmdNumber;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoUserCmd to JSON.
         * @function toJSON
         * @memberof CDemoUserCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoUserCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoUserCmd
         * @function getTypeUrl
         * @memberof CDemoUserCmd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoUserCmd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoUserCmd";
        };
    
        return CDemoUserCmd;
    })();
    
    $root.CDemoSpawnGroups = (function() {
    
        /**
         * Properties of a CDemoSpawnGroups.
         * @exports ICDemoSpawnGroups
         * @interface ICDemoSpawnGroups
         * @property {Array.<Uint8Array>|null} [msgs] CDemoSpawnGroups msgs
         */
    
        /**
         * Constructs a new CDemoSpawnGroups.
         * @exports CDemoSpawnGroups
         * @classdesc Represents a CDemoSpawnGroups.
         * @implements ICDemoSpawnGroups
         * @constructor
         * @param {ICDemoSpawnGroups=} [properties] Properties to set
         */
        function CDemoSpawnGroups(properties) {
            this.msgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoSpawnGroups msgs.
         * @member {Array.<Uint8Array>} msgs
         * @memberof CDemoSpawnGroups
         * @instance
         */
        CDemoSpawnGroups.prototype.msgs = $util.emptyArray;
    
        /**
         * Creates a new CDemoSpawnGroups instance using the specified properties.
         * @function create
         * @memberof CDemoSpawnGroups
         * @static
         * @param {ICDemoSpawnGroups=} [properties] Properties to set
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups instance
         */
        CDemoSpawnGroups.create = function create(properties) {
            return new CDemoSpawnGroups(properties);
        };
    
        /**
         * Encodes the specified CDemoSpawnGroups message. Does not implicitly {@link CDemoSpawnGroups.verify|verify} messages.
         * @function encode
         * @memberof CDemoSpawnGroups
         * @static
         * @param {ICDemoSpawnGroups} message CDemoSpawnGroups message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSpawnGroups.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgs != null && message.msgs.length)
                for (var i = 0; i < message.msgs.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msgs[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSpawnGroups message, length delimited. Does not implicitly {@link CDemoSpawnGroups.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSpawnGroups
         * @static
         * @param {ICDemoSpawnGroups} message CDemoSpawnGroups message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSpawnGroups.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSpawnGroups message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSpawnGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSpawnGroups.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSpawnGroups();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        if (!(message.msgs && message.msgs.length))
                            message.msgs = [];
                        message.msgs.push(reader.bytes());
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
         * Decodes a CDemoSpawnGroups message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSpawnGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSpawnGroups.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSpawnGroups message.
         * @function verify
         * @memberof CDemoSpawnGroups
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSpawnGroups.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgs != null && message.hasOwnProperty("msgs")) {
                if (!Array.isArray(message.msgs))
                    return "msgs: array expected";
                for (var i = 0; i < message.msgs.length; ++i)
                    if (!(message.msgs[i] && typeof message.msgs[i].length === "number" || $util.isString(message.msgs[i])))
                        return "msgs: buffer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CDemoSpawnGroups message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSpawnGroups
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups
         */
        CDemoSpawnGroups.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSpawnGroups)
                return object;
            var message = new $root.CDemoSpawnGroups();
            if (object.msgs) {
                if (!Array.isArray(object.msgs))
                    throw TypeError(".CDemoSpawnGroups.msgs: array expected");
                message.msgs = [];
                for (var i = 0; i < object.msgs.length; ++i)
                    if (typeof object.msgs[i] === "string")
                        $util.base64.decode(object.msgs[i], message.msgs[i] = $util.newBuffer($util.base64.length(object.msgs[i])), 0);
                    else if (object.msgs[i].length >= 0)
                        message.msgs[i] = object.msgs[i];
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoSpawnGroups message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSpawnGroups
         * @static
         * @param {CDemoSpawnGroups} message CDemoSpawnGroups
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSpawnGroups.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msgs = [];
            if (message.msgs && message.msgs.length) {
                object.msgs = [];
                for (var j = 0; j < message.msgs.length; ++j)
                    object.msgs[j] = options.bytes === String ? $util.base64.encode(message.msgs[j], 0, message.msgs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.msgs[j]) : message.msgs[j];
            }
            return object;
        };
    
        /**
         * Converts this CDemoSpawnGroups to JSON.
         * @function toJSON
         * @memberof CDemoSpawnGroups
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSpawnGroups.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSpawnGroups
         * @function getTypeUrl
         * @memberof CDemoSpawnGroups
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSpawnGroups.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSpawnGroups";
        };
    
        return CDemoSpawnGroups;
    })();

    return $root;
});
