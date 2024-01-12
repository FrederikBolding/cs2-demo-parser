import * as $protobuf from "protobufjs";
import Long = require("long");
/** EDemoCommands enum. */
export enum EDemoCommands {
    DEM_Error = -1,
    DEM_Stop = 0,
    DEM_FileHeader = 1,
    DEM_FileInfo = 2,
    DEM_SyncTick = 3,
    DEM_SendTables = 4,
    DEM_ClassInfo = 5,
    DEM_StringTables = 6,
    DEM_Packet = 7,
    DEM_SignonPacket = 8,
    DEM_ConsoleCmd = 9,
    DEM_CustomData = 10,
    DEM_CustomDataCallbacks = 11,
    DEM_UserCmd = 12,
    DEM_FullPacket = 13,
    DEM_SaveGame = 14,
    DEM_SpawnGroups = 15,
    DEM_AnimationData = 16,
    DEM_Max = 17,
    DEM_IsCompressed = 64
}

/** Represents a CDemoFileHeader. */
export class CDemoFileHeader implements ICDemoFileHeader {

    /**
     * Constructs a new CDemoFileHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoFileHeader);

    /** CDemoFileHeader demoFileStamp. */
    public demoFileStamp: string;

    /** CDemoFileHeader networkProtocol. */
    public networkProtocol: number;

    /** CDemoFileHeader serverName. */
    public serverName: string;

    /** CDemoFileHeader clientName. */
    public clientName: string;

    /** CDemoFileHeader mapName. */
    public mapName: string;

    /** CDemoFileHeader gameDirectory. */
    public gameDirectory: string;

    /** CDemoFileHeader fullpacketsVersion. */
    public fullpacketsVersion: number;

    /** CDemoFileHeader allowClientsideEntities. */
    public allowClientsideEntities: boolean;

    /** CDemoFileHeader allowClientsideParticles. */
    public allowClientsideParticles: boolean;

    /** CDemoFileHeader addons. */
    public addons: string;

    /** CDemoFileHeader demoVersionName. */
    public demoVersionName: string;

    /** CDemoFileHeader demoVersionGuid. */
    public demoVersionGuid: string;

    /** CDemoFileHeader buildNum. */
    public buildNum: number;

    /** CDemoFileHeader game. */
    public game: string;

    /**
     * Creates a new CDemoFileHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoFileHeader instance
     */
    public static create(properties?: ICDemoFileHeader): CDemoFileHeader;

    /**
     * Encodes the specified CDemoFileHeader message. Does not implicitly {@link CDemoFileHeader.verify|verify} messages.
     * @param message CDemoFileHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoFileHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoFileHeader message, length delimited. Does not implicitly {@link CDemoFileHeader.verify|verify} messages.
     * @param message CDemoFileHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoFileHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoFileHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoFileHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoFileHeader;

    /**
     * Decodes a CDemoFileHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoFileHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoFileHeader;

    /**
     * Verifies a CDemoFileHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoFileHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoFileHeader
     */
    public static fromObject(object: { [k: string]: any }): CDemoFileHeader;

    /**
     * Creates a plain object from a CDemoFileHeader message. Also converts values to other types if specified.
     * @param message CDemoFileHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoFileHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoFileHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoFileHeader
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGameInfo. */
export class CGameInfo implements ICGameInfo {

    /**
     * Constructs a new CGameInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGameInfo);

    /** CGameInfo dota. */
    public dota?: (CGameInfo.ICDotaGameInfo|null);

    /**
     * Creates a new CGameInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGameInfo instance
     */
    public static create(properties?: ICGameInfo): CGameInfo;

    /**
     * Encodes the specified CGameInfo message. Does not implicitly {@link CGameInfo.verify|verify} messages.
     * @param message CGameInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGameInfo message, length delimited. Does not implicitly {@link CGameInfo.verify|verify} messages.
     * @param message CGameInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGameInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameInfo;

    /**
     * Decodes a CGameInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameInfo;

    /**
     * Verifies a CGameInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGameInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGameInfo
     */
    public static fromObject(object: { [k: string]: any }): CGameInfo;

    /**
     * Creates a plain object from a CGameInfo message. Also converts values to other types if specified.
     * @param message CGameInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGameInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGameInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CGameInfo {

    /** Properties of a CDotaGameInfo. */
    interface ICDotaGameInfo {

        /** CDotaGameInfo matchId */
        matchId?: (number|Long|null);

        /** CDotaGameInfo gameMode */
        gameMode?: (number|null);

        /** CDotaGameInfo gameWinner */
        gameWinner?: (number|null);

        /** CDotaGameInfo playerInfo */
        playerInfo?: (CGameInfo.CDotaGameInfo.ICPlayerInfo[]|null);

        /** CDotaGameInfo leagueid */
        leagueid?: (number|null);

        /** CDotaGameInfo picksBans */
        picksBans?: (CGameInfo.CDotaGameInfo.ICHeroSelectEvent[]|null);

        /** CDotaGameInfo radiantTeamId */
        radiantTeamId?: (number|null);

        /** CDotaGameInfo direTeamId */
        direTeamId?: (number|null);

        /** CDotaGameInfo radiantTeamTag */
        radiantTeamTag?: (string|null);

        /** CDotaGameInfo direTeamTag */
        direTeamTag?: (string|null);

        /** CDotaGameInfo endTime */
        endTime?: (number|null);
    }

    /** Represents a CDotaGameInfo. */
    class CDotaGameInfo implements ICDotaGameInfo {

        /**
         * Constructs a new CDotaGameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CGameInfo.ICDotaGameInfo);

        /** CDotaGameInfo matchId. */
        public matchId: (number|Long);

        /** CDotaGameInfo gameMode. */
        public gameMode: number;

        /** CDotaGameInfo gameWinner. */
        public gameWinner: number;

        /** CDotaGameInfo playerInfo. */
        public playerInfo: CGameInfo.CDotaGameInfo.ICPlayerInfo[];

        /** CDotaGameInfo leagueid. */
        public leagueid: number;

        /** CDotaGameInfo picksBans. */
        public picksBans: CGameInfo.CDotaGameInfo.ICHeroSelectEvent[];

        /** CDotaGameInfo radiantTeamId. */
        public radiantTeamId: number;

        /** CDotaGameInfo direTeamId. */
        public direTeamId: number;

        /** CDotaGameInfo radiantTeamTag. */
        public radiantTeamTag: string;

        /** CDotaGameInfo direTeamTag. */
        public direTeamTag: string;

        /** CDotaGameInfo endTime. */
        public endTime: number;

        /**
         * Creates a new CDotaGameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CDotaGameInfo instance
         */
        public static create(properties?: CGameInfo.ICDotaGameInfo): CGameInfo.CDotaGameInfo;

        /**
         * Encodes the specified CDotaGameInfo message. Does not implicitly {@link CGameInfo.CDotaGameInfo.verify|verify} messages.
         * @param message CDotaGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CGameInfo.ICDotaGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CDotaGameInfo message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.verify|verify} messages.
         * @param message CDotaGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CGameInfo.ICDotaGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CDotaGameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CDotaGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameInfo.CDotaGameInfo;

        /**
         * Decodes a CDotaGameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CDotaGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameInfo.CDotaGameInfo;

        /**
         * Verifies a CDotaGameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CDotaGameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CDotaGameInfo
         */
        public static fromObject(object: { [k: string]: any }): CGameInfo.CDotaGameInfo;

        /**
         * Creates a plain object from a CDotaGameInfo message. Also converts values to other types if specified.
         * @param message CDotaGameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CGameInfo.CDotaGameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CDotaGameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CDotaGameInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CDotaGameInfo {

        /** Properties of a CPlayerInfo. */
        interface ICPlayerInfo {

            /** CPlayerInfo heroName */
            heroName?: (string|null);

            /** CPlayerInfo playerName */
            playerName?: (string|null);

            /** CPlayerInfo isFakeClient */
            isFakeClient?: (boolean|null);

            /** CPlayerInfo steamid */
            steamid?: (number|Long|null);

            /** CPlayerInfo gameTeam */
            gameTeam?: (number|null);
        }

        /** Represents a CPlayerInfo. */
        class CPlayerInfo implements ICPlayerInfo {

            /**
             * Constructs a new CPlayerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: CGameInfo.CDotaGameInfo.ICPlayerInfo);

            /** CPlayerInfo heroName. */
            public heroName: string;

            /** CPlayerInfo playerName. */
            public playerName: string;

            /** CPlayerInfo isFakeClient. */
            public isFakeClient: boolean;

            /** CPlayerInfo steamid. */
            public steamid: (number|Long);

            /** CPlayerInfo gameTeam. */
            public gameTeam: number;

            /**
             * Creates a new CPlayerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CPlayerInfo instance
             */
            public static create(properties?: CGameInfo.CDotaGameInfo.ICPlayerInfo): CGameInfo.CDotaGameInfo.CPlayerInfo;

            /**
             * Encodes the specified CPlayerInfo message. Does not implicitly {@link CGameInfo.CDotaGameInfo.CPlayerInfo.verify|verify} messages.
             * @param message CPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CGameInfo.CDotaGameInfo.ICPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CPlayerInfo message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.CPlayerInfo.verify|verify} messages.
             * @param message CPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CGameInfo.CDotaGameInfo.ICPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CPlayerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameInfo.CDotaGameInfo.CPlayerInfo;

            /**
             * Decodes a CPlayerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameInfo.CDotaGameInfo.CPlayerInfo;

            /**
             * Verifies a CPlayerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CPlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CPlayerInfo
             */
            public static fromObject(object: { [k: string]: any }): CGameInfo.CDotaGameInfo.CPlayerInfo;

            /**
             * Creates a plain object from a CPlayerInfo message. Also converts values to other types if specified.
             * @param message CPlayerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CGameInfo.CDotaGameInfo.CPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CPlayerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CPlayerInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CHeroSelectEvent. */
        interface ICHeroSelectEvent {

            /** CHeroSelectEvent isPick */
            isPick?: (boolean|null);

            /** CHeroSelectEvent team */
            team?: (number|null);

            /** CHeroSelectEvent heroId */
            heroId?: (number|null);
        }

        /** Represents a CHeroSelectEvent. */
        class CHeroSelectEvent implements ICHeroSelectEvent {

            /**
             * Constructs a new CHeroSelectEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: CGameInfo.CDotaGameInfo.ICHeroSelectEvent);

            /** CHeroSelectEvent isPick. */
            public isPick: boolean;

            /** CHeroSelectEvent team. */
            public team: number;

            /** CHeroSelectEvent heroId. */
            public heroId: number;

            /**
             * Creates a new CHeroSelectEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CHeroSelectEvent instance
             */
            public static create(properties?: CGameInfo.CDotaGameInfo.ICHeroSelectEvent): CGameInfo.CDotaGameInfo.CHeroSelectEvent;

            /**
             * Encodes the specified CHeroSelectEvent message. Does not implicitly {@link CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify|verify} messages.
             * @param message CHeroSelectEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CGameInfo.CDotaGameInfo.ICHeroSelectEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CHeroSelectEvent message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify|verify} messages.
             * @param message CHeroSelectEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CGameInfo.CDotaGameInfo.ICHeroSelectEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CHeroSelectEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CHeroSelectEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameInfo.CDotaGameInfo.CHeroSelectEvent;

            /**
             * Decodes a CHeroSelectEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CHeroSelectEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameInfo.CDotaGameInfo.CHeroSelectEvent;

            /**
             * Verifies a CHeroSelectEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CHeroSelectEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CHeroSelectEvent
             */
            public static fromObject(object: { [k: string]: any }): CGameInfo.CDotaGameInfo.CHeroSelectEvent;

            /**
             * Creates a plain object from a CHeroSelectEvent message. Also converts values to other types if specified.
             * @param message CHeroSelectEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CGameInfo.CDotaGameInfo.CHeroSelectEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CHeroSelectEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CHeroSelectEvent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Represents a CDemoFileInfo. */
export class CDemoFileInfo implements ICDemoFileInfo {

    /**
     * Constructs a new CDemoFileInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoFileInfo);

    /** CDemoFileInfo playbackTime. */
    public playbackTime: number;

    /** CDemoFileInfo playbackTicks. */
    public playbackTicks: number;

    /** CDemoFileInfo playbackFrames. */
    public playbackFrames: number;

    /** CDemoFileInfo gameInfo. */
    public gameInfo?: (ICGameInfo|null);

    /**
     * Creates a new CDemoFileInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoFileInfo instance
     */
    public static create(properties?: ICDemoFileInfo): CDemoFileInfo;

    /**
     * Encodes the specified CDemoFileInfo message. Does not implicitly {@link CDemoFileInfo.verify|verify} messages.
     * @param message CDemoFileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoFileInfo message, length delimited. Does not implicitly {@link CDemoFileInfo.verify|verify} messages.
     * @param message CDemoFileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoFileInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoFileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoFileInfo;

    /**
     * Decodes a CDemoFileInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoFileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoFileInfo;

    /**
     * Verifies a CDemoFileInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoFileInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoFileInfo
     */
    public static fromObject(object: { [k: string]: any }): CDemoFileInfo;

    /**
     * Creates a plain object from a CDemoFileInfo message. Also converts values to other types if specified.
     * @param message CDemoFileInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoFileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoFileInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoFileInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoPacket. */
export class CDemoPacket implements ICDemoPacket {

    /**
     * Constructs a new CDemoPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoPacket);

    /** CDemoPacket data. */
    public data: Uint8Array;

    /**
     * Creates a new CDemoPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoPacket instance
     */
    public static create(properties?: ICDemoPacket): CDemoPacket;

    /**
     * Encodes the specified CDemoPacket message. Does not implicitly {@link CDemoPacket.verify|verify} messages.
     * @param message CDemoPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoPacket message, length delimited. Does not implicitly {@link CDemoPacket.verify|verify} messages.
     * @param message CDemoPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoPacket;

    /**
     * Decodes a CDemoPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoPacket;

    /**
     * Verifies a CDemoPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoPacket
     */
    public static fromObject(object: { [k: string]: any }): CDemoPacket;

    /**
     * Creates a plain object from a CDemoPacket message. Also converts values to other types if specified.
     * @param message CDemoPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoPacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoFullPacket. */
export class CDemoFullPacket implements ICDemoFullPacket {

    /**
     * Constructs a new CDemoFullPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoFullPacket);

    /** CDemoFullPacket stringTable. */
    public stringTable?: (ICDemoStringTables|null);

    /** CDemoFullPacket packet. */
    public packet?: (ICDemoPacket|null);

    /**
     * Creates a new CDemoFullPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoFullPacket instance
     */
    public static create(properties?: ICDemoFullPacket): CDemoFullPacket;

    /**
     * Encodes the specified CDemoFullPacket message. Does not implicitly {@link CDemoFullPacket.verify|verify} messages.
     * @param message CDemoFullPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoFullPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoFullPacket message, length delimited. Does not implicitly {@link CDemoFullPacket.verify|verify} messages.
     * @param message CDemoFullPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoFullPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoFullPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoFullPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoFullPacket;

    /**
     * Decodes a CDemoFullPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoFullPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoFullPacket;

    /**
     * Verifies a CDemoFullPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoFullPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoFullPacket
     */
    public static fromObject(object: { [k: string]: any }): CDemoFullPacket;

    /**
     * Creates a plain object from a CDemoFullPacket message. Also converts values to other types if specified.
     * @param message CDemoFullPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoFullPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoFullPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoFullPacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoSaveGame. */
export class CDemoSaveGame implements ICDemoSaveGame {

    /**
     * Constructs a new CDemoSaveGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoSaveGame);

    /** CDemoSaveGame data. */
    public data: Uint8Array;

    /** CDemoSaveGame steamId. */
    public steamId: (number|Long);

    /** CDemoSaveGame signature. */
    public signature: (number|Long);

    /** CDemoSaveGame version. */
    public version: number;

    /**
     * Creates a new CDemoSaveGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoSaveGame instance
     */
    public static create(properties?: ICDemoSaveGame): CDemoSaveGame;

    /**
     * Encodes the specified CDemoSaveGame message. Does not implicitly {@link CDemoSaveGame.verify|verify} messages.
     * @param message CDemoSaveGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoSaveGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoSaveGame message, length delimited. Does not implicitly {@link CDemoSaveGame.verify|verify} messages.
     * @param message CDemoSaveGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoSaveGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoSaveGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoSaveGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoSaveGame;

    /**
     * Decodes a CDemoSaveGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoSaveGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoSaveGame;

    /**
     * Verifies a CDemoSaveGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoSaveGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoSaveGame
     */
    public static fromObject(object: { [k: string]: any }): CDemoSaveGame;

    /**
     * Creates a plain object from a CDemoSaveGame message. Also converts values to other types if specified.
     * @param message CDemoSaveGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoSaveGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoSaveGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoSaveGame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoSyncTick. */
export class CDemoSyncTick implements ICDemoSyncTick {

    /**
     * Constructs a new CDemoSyncTick.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoSyncTick);

    /**
     * Creates a new CDemoSyncTick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoSyncTick instance
     */
    public static create(properties?: ICDemoSyncTick): CDemoSyncTick;

    /**
     * Encodes the specified CDemoSyncTick message. Does not implicitly {@link CDemoSyncTick.verify|verify} messages.
     * @param message CDemoSyncTick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoSyncTick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoSyncTick message, length delimited. Does not implicitly {@link CDemoSyncTick.verify|verify} messages.
     * @param message CDemoSyncTick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoSyncTick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoSyncTick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoSyncTick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoSyncTick;

    /**
     * Decodes a CDemoSyncTick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoSyncTick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoSyncTick;

    /**
     * Verifies a CDemoSyncTick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoSyncTick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoSyncTick
     */
    public static fromObject(object: { [k: string]: any }): CDemoSyncTick;

    /**
     * Creates a plain object from a CDemoSyncTick message. Also converts values to other types if specified.
     * @param message CDemoSyncTick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoSyncTick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoSyncTick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoSyncTick
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoConsoleCmd. */
export class CDemoConsoleCmd implements ICDemoConsoleCmd {

    /**
     * Constructs a new CDemoConsoleCmd.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoConsoleCmd);

    /** CDemoConsoleCmd cmdstring. */
    public cmdstring: string;

    /**
     * Creates a new CDemoConsoleCmd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoConsoleCmd instance
     */
    public static create(properties?: ICDemoConsoleCmd): CDemoConsoleCmd;

    /**
     * Encodes the specified CDemoConsoleCmd message. Does not implicitly {@link CDemoConsoleCmd.verify|verify} messages.
     * @param message CDemoConsoleCmd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoConsoleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoConsoleCmd message, length delimited. Does not implicitly {@link CDemoConsoleCmd.verify|verify} messages.
     * @param message CDemoConsoleCmd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoConsoleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoConsoleCmd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoConsoleCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoConsoleCmd;

    /**
     * Decodes a CDemoConsoleCmd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoConsoleCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoConsoleCmd;

    /**
     * Verifies a CDemoConsoleCmd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoConsoleCmd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoConsoleCmd
     */
    public static fromObject(object: { [k: string]: any }): CDemoConsoleCmd;

    /**
     * Creates a plain object from a CDemoConsoleCmd message. Also converts values to other types if specified.
     * @param message CDemoConsoleCmd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoConsoleCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoConsoleCmd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoConsoleCmd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoSendTables. */
export class CDemoSendTables implements ICDemoSendTables {

    /**
     * Constructs a new CDemoSendTables.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoSendTables);

    /** CDemoSendTables data. */
    public data: Uint8Array;

    /**
     * Creates a new CDemoSendTables instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoSendTables instance
     */
    public static create(properties?: ICDemoSendTables): CDemoSendTables;

    /**
     * Encodes the specified CDemoSendTables message. Does not implicitly {@link CDemoSendTables.verify|verify} messages.
     * @param message CDemoSendTables message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoSendTables, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoSendTables message, length delimited. Does not implicitly {@link CDemoSendTables.verify|verify} messages.
     * @param message CDemoSendTables message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoSendTables, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoSendTables message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoSendTables
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoSendTables;

    /**
     * Decodes a CDemoSendTables message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoSendTables
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoSendTables;

    /**
     * Verifies a CDemoSendTables message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoSendTables message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoSendTables
     */
    public static fromObject(object: { [k: string]: any }): CDemoSendTables;

    /**
     * Creates a plain object from a CDemoSendTables message. Also converts values to other types if specified.
     * @param message CDemoSendTables
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoSendTables, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoSendTables to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoSendTables
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoClassInfo. */
export class CDemoClassInfo implements ICDemoClassInfo {

    /**
     * Constructs a new CDemoClassInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoClassInfo);

    /** CDemoClassInfo classes. */
    public classes: CDemoClassInfo.Iclass_t[];

    /**
     * Creates a new CDemoClassInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoClassInfo instance
     */
    public static create(properties?: ICDemoClassInfo): CDemoClassInfo;

    /**
     * Encodes the specified CDemoClassInfo message. Does not implicitly {@link CDemoClassInfo.verify|verify} messages.
     * @param message CDemoClassInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoClassInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoClassInfo message, length delimited. Does not implicitly {@link CDemoClassInfo.verify|verify} messages.
     * @param message CDemoClassInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoClassInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoClassInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoClassInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoClassInfo;

    /**
     * Decodes a CDemoClassInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoClassInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoClassInfo;

    /**
     * Verifies a CDemoClassInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoClassInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoClassInfo
     */
    public static fromObject(object: { [k: string]: any }): CDemoClassInfo;

    /**
     * Creates a plain object from a CDemoClassInfo message. Also converts values to other types if specified.
     * @param message CDemoClassInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoClassInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoClassInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoClassInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CDemoClassInfo {

    /** Properties of a class_t. */
    interface Iclass_t {

        /** class_t classId */
        classId?: (number|null);

        /** class_t networkName */
        networkName?: (string|null);

        /** class_t tableName */
        tableName?: (string|null);
    }

    /** Represents a class_t. */
    class class_t implements Iclass_t {

        /**
         * Constructs a new class_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CDemoClassInfo.Iclass_t);

        /** class_t classId. */
        public classId: number;

        /** class_t networkName. */
        public networkName: string;

        /** class_t tableName. */
        public tableName: string;

        /**
         * Creates a new class_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns class_t instance
         */
        public static create(properties?: CDemoClassInfo.Iclass_t): CDemoClassInfo.class_t;

        /**
         * Encodes the specified class_t message. Does not implicitly {@link CDemoClassInfo.class_t.verify|verify} messages.
         * @param message class_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CDemoClassInfo.Iclass_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified class_t message, length delimited. Does not implicitly {@link CDemoClassInfo.class_t.verify|verify} messages.
         * @param message class_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CDemoClassInfo.Iclass_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a class_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns class_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoClassInfo.class_t;

        /**
         * Decodes a class_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns class_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoClassInfo.class_t;

        /**
         * Verifies a class_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a class_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns class_t
         */
        public static fromObject(object: { [k: string]: any }): CDemoClassInfo.class_t;

        /**
         * Creates a plain object from a class_t message. Also converts values to other types if specified.
         * @param message class_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CDemoClassInfo.class_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this class_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for class_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CDemoCustomData. */
export class CDemoCustomData implements ICDemoCustomData {

    /**
     * Constructs a new CDemoCustomData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoCustomData);

    /** CDemoCustomData callbackIndex. */
    public callbackIndex: number;

    /** CDemoCustomData data. */
    public data: Uint8Array;

    /**
     * Creates a new CDemoCustomData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoCustomData instance
     */
    public static create(properties?: ICDemoCustomData): CDemoCustomData;

    /**
     * Encodes the specified CDemoCustomData message. Does not implicitly {@link CDemoCustomData.verify|verify} messages.
     * @param message CDemoCustomData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoCustomData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoCustomData message, length delimited. Does not implicitly {@link CDemoCustomData.verify|verify} messages.
     * @param message CDemoCustomData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoCustomData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoCustomData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoCustomData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoCustomData;

    /**
     * Decodes a CDemoCustomData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoCustomData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoCustomData;

    /**
     * Verifies a CDemoCustomData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoCustomData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoCustomData
     */
    public static fromObject(object: { [k: string]: any }): CDemoCustomData;

    /**
     * Creates a plain object from a CDemoCustomData message. Also converts values to other types if specified.
     * @param message CDemoCustomData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoCustomData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoCustomData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoCustomData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoCustomDataCallbacks. */
export class CDemoCustomDataCallbacks implements ICDemoCustomDataCallbacks {

    /**
     * Constructs a new CDemoCustomDataCallbacks.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoCustomDataCallbacks);

    /** CDemoCustomDataCallbacks saveId. */
    public saveId: string[];

    /**
     * Creates a new CDemoCustomDataCallbacks instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoCustomDataCallbacks instance
     */
    public static create(properties?: ICDemoCustomDataCallbacks): CDemoCustomDataCallbacks;

    /**
     * Encodes the specified CDemoCustomDataCallbacks message. Does not implicitly {@link CDemoCustomDataCallbacks.verify|verify} messages.
     * @param message CDemoCustomDataCallbacks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoCustomDataCallbacks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoCustomDataCallbacks message, length delimited. Does not implicitly {@link CDemoCustomDataCallbacks.verify|verify} messages.
     * @param message CDemoCustomDataCallbacks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoCustomDataCallbacks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoCustomDataCallbacks message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoCustomDataCallbacks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoCustomDataCallbacks;

    /**
     * Decodes a CDemoCustomDataCallbacks message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoCustomDataCallbacks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoCustomDataCallbacks;

    /**
     * Verifies a CDemoCustomDataCallbacks message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoCustomDataCallbacks message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoCustomDataCallbacks
     */
    public static fromObject(object: { [k: string]: any }): CDemoCustomDataCallbacks;

    /**
     * Creates a plain object from a CDemoCustomDataCallbacks message. Also converts values to other types if specified.
     * @param message CDemoCustomDataCallbacks
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoCustomDataCallbacks, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoCustomDataCallbacks to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoCustomDataCallbacks
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoAnimationData. */
export class CDemoAnimationData implements ICDemoAnimationData {

    /**
     * Constructs a new CDemoAnimationData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoAnimationData);

    /** CDemoAnimationData entityId. */
    public entityId: number;

    /** CDemoAnimationData startTick. */
    public startTick: number;

    /** CDemoAnimationData endTick. */
    public endTick: number;

    /** CDemoAnimationData data. */
    public data: Uint8Array;

    /** CDemoAnimationData dataChecksum. */
    public dataChecksum: (number|Long);

    /**
     * Creates a new CDemoAnimationData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoAnimationData instance
     */
    public static create(properties?: ICDemoAnimationData): CDemoAnimationData;

    /**
     * Encodes the specified CDemoAnimationData message. Does not implicitly {@link CDemoAnimationData.verify|verify} messages.
     * @param message CDemoAnimationData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoAnimationData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoAnimationData message, length delimited. Does not implicitly {@link CDemoAnimationData.verify|verify} messages.
     * @param message CDemoAnimationData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoAnimationData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoAnimationData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoAnimationData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoAnimationData;

    /**
     * Decodes a CDemoAnimationData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoAnimationData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoAnimationData;

    /**
     * Verifies a CDemoAnimationData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoAnimationData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoAnimationData
     */
    public static fromObject(object: { [k: string]: any }): CDemoAnimationData;

    /**
     * Creates a plain object from a CDemoAnimationData message. Also converts values to other types if specified.
     * @param message CDemoAnimationData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoAnimationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoAnimationData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoAnimationData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoStringTables. */
export class CDemoStringTables implements ICDemoStringTables {

    /**
     * Constructs a new CDemoStringTables.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoStringTables);

    /** CDemoStringTables tables. */
    public tables: CDemoStringTables.Itable_t[];

    /**
     * Creates a new CDemoStringTables instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoStringTables instance
     */
    public static create(properties?: ICDemoStringTables): CDemoStringTables;

    /**
     * Encodes the specified CDemoStringTables message. Does not implicitly {@link CDemoStringTables.verify|verify} messages.
     * @param message CDemoStringTables message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoStringTables, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoStringTables message, length delimited. Does not implicitly {@link CDemoStringTables.verify|verify} messages.
     * @param message CDemoStringTables message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoStringTables, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoStringTables message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoStringTables
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoStringTables;

    /**
     * Decodes a CDemoStringTables message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoStringTables
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoStringTables;

    /**
     * Verifies a CDemoStringTables message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoStringTables message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoStringTables
     */
    public static fromObject(object: { [k: string]: any }): CDemoStringTables;

    /**
     * Creates a plain object from a CDemoStringTables message. Also converts values to other types if specified.
     * @param message CDemoStringTables
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoStringTables, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoStringTables to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoStringTables
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CDemoStringTables {

    /** Properties of an items_t. */
    interface Iitems_t {

        /** items_t str */
        str?: (string|null);

        /** items_t data */
        data?: (Uint8Array|null);
    }

    /** Represents an items_t. */
    class items_t implements Iitems_t {

        /**
         * Constructs a new items_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CDemoStringTables.Iitems_t);

        /** items_t str. */
        public str: string;

        /** items_t data. */
        public data: Uint8Array;

        /**
         * Creates a new items_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns items_t instance
         */
        public static create(properties?: CDemoStringTables.Iitems_t): CDemoStringTables.items_t;

        /**
         * Encodes the specified items_t message. Does not implicitly {@link CDemoStringTables.items_t.verify|verify} messages.
         * @param message items_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CDemoStringTables.Iitems_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified items_t message, length delimited. Does not implicitly {@link CDemoStringTables.items_t.verify|verify} messages.
         * @param message items_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CDemoStringTables.Iitems_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an items_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns items_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoStringTables.items_t;

        /**
         * Decodes an items_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns items_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoStringTables.items_t;

        /**
         * Verifies an items_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an items_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns items_t
         */
        public static fromObject(object: { [k: string]: any }): CDemoStringTables.items_t;

        /**
         * Creates a plain object from an items_t message. Also converts values to other types if specified.
         * @param message items_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CDemoStringTables.items_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this items_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for items_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a table_t. */
    interface Itable_t {

        /** table_t tableName */
        tableName?: (string|null);

        /** table_t items */
        items?: (CDemoStringTables.Iitems_t[]|null);

        /** table_t itemsClientside */
        itemsClientside?: (CDemoStringTables.Iitems_t[]|null);

        /** table_t tableFlags */
        tableFlags?: (number|null);
    }

    /** Represents a table_t. */
    class table_t implements Itable_t {

        /**
         * Constructs a new table_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CDemoStringTables.Itable_t);

        /** table_t tableName. */
        public tableName: string;

        /** table_t items. */
        public items: CDemoStringTables.Iitems_t[];

        /** table_t itemsClientside. */
        public itemsClientside: CDemoStringTables.Iitems_t[];

        /** table_t tableFlags. */
        public tableFlags: number;

        /**
         * Creates a new table_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns table_t instance
         */
        public static create(properties?: CDemoStringTables.Itable_t): CDemoStringTables.table_t;

        /**
         * Encodes the specified table_t message. Does not implicitly {@link CDemoStringTables.table_t.verify|verify} messages.
         * @param message table_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CDemoStringTables.Itable_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified table_t message, length delimited. Does not implicitly {@link CDemoStringTables.table_t.verify|verify} messages.
         * @param message table_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CDemoStringTables.Itable_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a table_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns table_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoStringTables.table_t;

        /**
         * Decodes a table_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns table_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoStringTables.table_t;

        /**
         * Verifies a table_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a table_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns table_t
         */
        public static fromObject(object: { [k: string]: any }): CDemoStringTables.table_t;

        /**
         * Creates a plain object from a table_t message. Also converts values to other types if specified.
         * @param message table_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CDemoStringTables.table_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this table_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for table_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CDemoStop. */
export class CDemoStop implements ICDemoStop {

    /**
     * Constructs a new CDemoStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoStop);

    /**
     * Creates a new CDemoStop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoStop instance
     */
    public static create(properties?: ICDemoStop): CDemoStop;

    /**
     * Encodes the specified CDemoStop message. Does not implicitly {@link CDemoStop.verify|verify} messages.
     * @param message CDemoStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoStop message, length delimited. Does not implicitly {@link CDemoStop.verify|verify} messages.
     * @param message CDemoStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoStop;

    /**
     * Decodes a CDemoStop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoStop;

    /**
     * Verifies a CDemoStop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoStop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoStop
     */
    public static fromObject(object: { [k: string]: any }): CDemoStop;

    /**
     * Creates a plain object from a CDemoStop message. Also converts values to other types if specified.
     * @param message CDemoStop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoStop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoStop
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoUserCmd. */
export class CDemoUserCmd implements ICDemoUserCmd {

    /**
     * Constructs a new CDemoUserCmd.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoUserCmd);

    /** CDemoUserCmd cmdNumber. */
    public cmdNumber: number;

    /** CDemoUserCmd data. */
    public data: Uint8Array;

    /**
     * Creates a new CDemoUserCmd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoUserCmd instance
     */
    public static create(properties?: ICDemoUserCmd): CDemoUserCmd;

    /**
     * Encodes the specified CDemoUserCmd message. Does not implicitly {@link CDemoUserCmd.verify|verify} messages.
     * @param message CDemoUserCmd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoUserCmd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoUserCmd message, length delimited. Does not implicitly {@link CDemoUserCmd.verify|verify} messages.
     * @param message CDemoUserCmd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoUserCmd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoUserCmd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoUserCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoUserCmd;

    /**
     * Decodes a CDemoUserCmd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoUserCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoUserCmd;

    /**
     * Verifies a CDemoUserCmd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoUserCmd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoUserCmd
     */
    public static fromObject(object: { [k: string]: any }): CDemoUserCmd;

    /**
     * Creates a plain object from a CDemoUserCmd message. Also converts values to other types if specified.
     * @param message CDemoUserCmd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoUserCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoUserCmd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoUserCmd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CDemoSpawnGroups. */
export class CDemoSpawnGroups implements ICDemoSpawnGroups {

    /**
     * Constructs a new CDemoSpawnGroups.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDemoSpawnGroups);

    /** CDemoSpawnGroups msgs. */
    public msgs: Uint8Array[];

    /**
     * Creates a new CDemoSpawnGroups instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CDemoSpawnGroups instance
     */
    public static create(properties?: ICDemoSpawnGroups): CDemoSpawnGroups;

    /**
     * Encodes the specified CDemoSpawnGroups message. Does not implicitly {@link CDemoSpawnGroups.verify|verify} messages.
     * @param message CDemoSpawnGroups message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICDemoSpawnGroups, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CDemoSpawnGroups message, length delimited. Does not implicitly {@link CDemoSpawnGroups.verify|verify} messages.
     * @param message CDemoSpawnGroups message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICDemoSpawnGroups, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CDemoSpawnGroups message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDemoSpawnGroups
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDemoSpawnGroups;

    /**
     * Decodes a CDemoSpawnGroups message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CDemoSpawnGroups
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CDemoSpawnGroups;

    /**
     * Verifies a CDemoSpawnGroups message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CDemoSpawnGroups message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CDemoSpawnGroups
     */
    public static fromObject(object: { [k: string]: any }): CDemoSpawnGroups;

    /**
     * Creates a plain object from a CDemoSpawnGroups message. Also converts values to other types if specified.
     * @param message CDemoSpawnGroups
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CDemoSpawnGroups, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CDemoSpawnGroups to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CDemoSpawnGroups
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
