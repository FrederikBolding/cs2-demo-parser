import * as $protobuf from "protobufjs";
import Long = require("long");
/** P2P_Messages enum. */
export enum P2P_Messages {
    p2p_TextMessage = 256,
    p2p_Voice = 257,
    p2p_Ping = 258,
    p2p_VRAvatarPosition = 259,
    p2p_WatchSynchronization = 260
}

/** Represents a CP2P_TextMessage. */
export class CP2P_TextMessage implements ICP2P_TextMessage {

    /**
     * Constructs a new CP2P_TextMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICP2P_TextMessage);

    /** CP2P_TextMessage text. */
    public text: Uint8Array;

    /**
     * Creates a new CP2P_TextMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CP2P_TextMessage instance
     */
    public static create(properties?: ICP2P_TextMessage): CP2P_TextMessage;

    /**
     * Encodes the specified CP2P_TextMessage message. Does not implicitly {@link CP2P_TextMessage.verify|verify} messages.
     * @param message CP2P_TextMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICP2P_TextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CP2P_TextMessage message, length delimited. Does not implicitly {@link CP2P_TextMessage.verify|verify} messages.
     * @param message CP2P_TextMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICP2P_TextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CP2P_TextMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CP2P_TextMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CP2P_TextMessage;

    /**
     * Decodes a CP2P_TextMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CP2P_TextMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CP2P_TextMessage;

    /**
     * Verifies a CP2P_TextMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CP2P_TextMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CP2P_TextMessage
     */
    public static fromObject(object: { [k: string]: any }): CP2P_TextMessage;

    /**
     * Creates a plain object from a CP2P_TextMessage message. Also converts values to other types if specified.
     * @param message CP2P_TextMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CP2P_TextMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CP2P_TextMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CP2P_TextMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSteam_Voice_Encoding. */
export class CSteam_Voice_Encoding implements ICSteam_Voice_Encoding {

    /**
     * Constructs a new CSteam_Voice_Encoding.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSteam_Voice_Encoding);

    /** CSteam_Voice_Encoding voiceData. */
    public voiceData: Uint8Array;

    /**
     * Creates a new CSteam_Voice_Encoding instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSteam_Voice_Encoding instance
     */
    public static create(properties?: ICSteam_Voice_Encoding): CSteam_Voice_Encoding;

    /**
     * Encodes the specified CSteam_Voice_Encoding message. Does not implicitly {@link CSteam_Voice_Encoding.verify|verify} messages.
     * @param message CSteam_Voice_Encoding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSteam_Voice_Encoding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSteam_Voice_Encoding message, length delimited. Does not implicitly {@link CSteam_Voice_Encoding.verify|verify} messages.
     * @param message CSteam_Voice_Encoding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSteam_Voice_Encoding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSteam_Voice_Encoding message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSteam_Voice_Encoding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSteam_Voice_Encoding;

    /**
     * Decodes a CSteam_Voice_Encoding message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSteam_Voice_Encoding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSteam_Voice_Encoding;

    /**
     * Verifies a CSteam_Voice_Encoding message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSteam_Voice_Encoding message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSteam_Voice_Encoding
     */
    public static fromObject(object: { [k: string]: any }): CSteam_Voice_Encoding;

    /**
     * Creates a plain object from a CSteam_Voice_Encoding message. Also converts values to other types if specified.
     * @param message CSteam_Voice_Encoding
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSteam_Voice_Encoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSteam_Voice_Encoding to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSteam_Voice_Encoding
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CP2P_Voice. */
export class CP2P_Voice implements ICP2P_Voice {

    /**
     * Constructs a new CP2P_Voice.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICP2P_Voice);

    /** CP2P_Voice audio. */
    public audio?: (ICMsgVoiceAudio|null);

    /** CP2P_Voice broadcastGroup. */
    public broadcastGroup: number;

    /**
     * Creates a new CP2P_Voice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CP2P_Voice instance
     */
    public static create(properties?: ICP2P_Voice): CP2P_Voice;

    /**
     * Encodes the specified CP2P_Voice message. Does not implicitly {@link CP2P_Voice.verify|verify} messages.
     * @param message CP2P_Voice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICP2P_Voice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CP2P_Voice message, length delimited. Does not implicitly {@link CP2P_Voice.verify|verify} messages.
     * @param message CP2P_Voice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICP2P_Voice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CP2P_Voice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CP2P_Voice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CP2P_Voice;

    /**
     * Decodes a CP2P_Voice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CP2P_Voice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CP2P_Voice;

    /**
     * Verifies a CP2P_Voice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CP2P_Voice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CP2P_Voice
     */
    public static fromObject(object: { [k: string]: any }): CP2P_Voice;

    /**
     * Creates a plain object from a CP2P_Voice message. Also converts values to other types if specified.
     * @param message CP2P_Voice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CP2P_Voice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CP2P_Voice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CP2P_Voice
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CP2P_Voice {

    /** Handler_Flags enum. */
    enum Handler_Flags {
        Played_Audio = 1
    }
}

/** Represents a CP2P_Ping. */
export class CP2P_Ping implements ICP2P_Ping {

    /**
     * Constructs a new CP2P_Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICP2P_Ping);

    /** CP2P_Ping sendTime. */
    public sendTime: (number|Long);

    /** CP2P_Ping isReply. */
    public isReply: boolean;

    /**
     * Creates a new CP2P_Ping instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CP2P_Ping instance
     */
    public static create(properties?: ICP2P_Ping): CP2P_Ping;

    /**
     * Encodes the specified CP2P_Ping message. Does not implicitly {@link CP2P_Ping.verify|verify} messages.
     * @param message CP2P_Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICP2P_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CP2P_Ping message, length delimited. Does not implicitly {@link CP2P_Ping.verify|verify} messages.
     * @param message CP2P_Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICP2P_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CP2P_Ping message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CP2P_Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CP2P_Ping;

    /**
     * Decodes a CP2P_Ping message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CP2P_Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CP2P_Ping;

    /**
     * Verifies a CP2P_Ping message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CP2P_Ping message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CP2P_Ping
     */
    public static fromObject(object: { [k: string]: any }): CP2P_Ping;

    /**
     * Creates a plain object from a CP2P_Ping message. Also converts values to other types if specified.
     * @param message CP2P_Ping
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CP2P_Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CP2P_Ping to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CP2P_Ping
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CP2P_VRAvatarPosition. */
export class CP2P_VRAvatarPosition implements ICP2P_VRAvatarPosition {

    /**
     * Constructs a new CP2P_VRAvatarPosition.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICP2P_VRAvatarPosition);

    /** CP2P_VRAvatarPosition bodyParts. */
    public bodyParts: CP2P_VRAvatarPosition.ICOrientation[];

    /** CP2P_VRAvatarPosition hatId. */
    public hatId: number;

    /** CP2P_VRAvatarPosition sceneId. */
    public sceneId: number;

    /** CP2P_VRAvatarPosition worldScale. */
    public worldScale: number;

    /**
     * Creates a new CP2P_VRAvatarPosition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CP2P_VRAvatarPosition instance
     */
    public static create(properties?: ICP2P_VRAvatarPosition): CP2P_VRAvatarPosition;

    /**
     * Encodes the specified CP2P_VRAvatarPosition message. Does not implicitly {@link CP2P_VRAvatarPosition.verify|verify} messages.
     * @param message CP2P_VRAvatarPosition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICP2P_VRAvatarPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CP2P_VRAvatarPosition message, length delimited. Does not implicitly {@link CP2P_VRAvatarPosition.verify|verify} messages.
     * @param message CP2P_VRAvatarPosition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICP2P_VRAvatarPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CP2P_VRAvatarPosition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CP2P_VRAvatarPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CP2P_VRAvatarPosition;

    /**
     * Decodes a CP2P_VRAvatarPosition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CP2P_VRAvatarPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CP2P_VRAvatarPosition;

    /**
     * Verifies a CP2P_VRAvatarPosition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CP2P_VRAvatarPosition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CP2P_VRAvatarPosition
     */
    public static fromObject(object: { [k: string]: any }): CP2P_VRAvatarPosition;

    /**
     * Creates a plain object from a CP2P_VRAvatarPosition message. Also converts values to other types if specified.
     * @param message CP2P_VRAvatarPosition
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CP2P_VRAvatarPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CP2P_VRAvatarPosition to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CP2P_VRAvatarPosition
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CP2P_VRAvatarPosition {

    /** Properties of a COrientation. */
    interface ICOrientation {

        /** COrientation pos */
        pos?: (ICMsgVector|null);

        /** COrientation ang */
        ang?: (ICMsgQAngle|null);
    }

    /** Represents a COrientation. */
    class COrientation implements ICOrientation {

        /**
         * Constructs a new COrientation.
         * @param [properties] Properties to set
         */
        constructor(properties?: CP2P_VRAvatarPosition.ICOrientation);

        /** COrientation pos. */
        public pos?: (ICMsgVector|null);

        /** COrientation ang. */
        public ang?: (ICMsgQAngle|null);

        /**
         * Creates a new COrientation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns COrientation instance
         */
        public static create(properties?: CP2P_VRAvatarPosition.ICOrientation): CP2P_VRAvatarPosition.COrientation;

        /**
         * Encodes the specified COrientation message. Does not implicitly {@link CP2P_VRAvatarPosition.COrientation.verify|verify} messages.
         * @param message COrientation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CP2P_VRAvatarPosition.ICOrientation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified COrientation message, length delimited. Does not implicitly {@link CP2P_VRAvatarPosition.COrientation.verify|verify} messages.
         * @param message COrientation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CP2P_VRAvatarPosition.ICOrientation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a COrientation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns COrientation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CP2P_VRAvatarPosition.COrientation;

        /**
         * Decodes a COrientation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns COrientation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CP2P_VRAvatarPosition.COrientation;

        /**
         * Verifies a COrientation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a COrientation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns COrientation
         */
        public static fromObject(object: { [k: string]: any }): CP2P_VRAvatarPosition.COrientation;

        /**
         * Creates a plain object from a COrientation message. Also converts values to other types if specified.
         * @param message COrientation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CP2P_VRAvatarPosition.COrientation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this COrientation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for COrientation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CP2P_WatchSynchronization. */
export class CP2P_WatchSynchronization implements ICP2P_WatchSynchronization {

    /**
     * Constructs a new CP2P_WatchSynchronization.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICP2P_WatchSynchronization);

    /** CP2P_WatchSynchronization demoTick. */
    public demoTick: number;

    /** CP2P_WatchSynchronization paused. */
    public paused: boolean;

    /** CP2P_WatchSynchronization tvListenVoiceIndices. */
    public tvListenVoiceIndices: (number|Long);

    /** CP2P_WatchSynchronization dotaSpectatorMode. */
    public dotaSpectatorMode: number;

    /** CP2P_WatchSynchronization dotaSpectatorWatchingBroadcaster. */
    public dotaSpectatorWatchingBroadcaster: boolean;

    /** CP2P_WatchSynchronization dotaSpectatorHeroIndex. */
    public dotaSpectatorHeroIndex: number;

    /** CP2P_WatchSynchronization dotaSpectatorAutospeed. */
    public dotaSpectatorAutospeed: number;

    /** CP2P_WatchSynchronization dotaReplaySpeed. */
    public dotaReplaySpeed: number;

    /**
     * Creates a new CP2P_WatchSynchronization instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CP2P_WatchSynchronization instance
     */
    public static create(properties?: ICP2P_WatchSynchronization): CP2P_WatchSynchronization;

    /**
     * Encodes the specified CP2P_WatchSynchronization message. Does not implicitly {@link CP2P_WatchSynchronization.verify|verify} messages.
     * @param message CP2P_WatchSynchronization message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICP2P_WatchSynchronization, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CP2P_WatchSynchronization message, length delimited. Does not implicitly {@link CP2P_WatchSynchronization.verify|verify} messages.
     * @param message CP2P_WatchSynchronization message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICP2P_WatchSynchronization, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CP2P_WatchSynchronization message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CP2P_WatchSynchronization
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CP2P_WatchSynchronization;

    /**
     * Decodes a CP2P_WatchSynchronization message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CP2P_WatchSynchronization
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CP2P_WatchSynchronization;

    /**
     * Verifies a CP2P_WatchSynchronization message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CP2P_WatchSynchronization message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CP2P_WatchSynchronization
     */
    public static fromObject(object: { [k: string]: any }): CP2P_WatchSynchronization;

    /**
     * Creates a plain object from a CP2P_WatchSynchronization message. Also converts values to other types if specified.
     * @param message CP2P_WatchSynchronization
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CP2P_WatchSynchronization, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CP2P_WatchSynchronization to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CP2P_WatchSynchronization
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** CLC_Messages enum. */
export enum CLC_Messages {
    clc_ClientInfo = 20,
    clc_Move = 21,
    clc_VoiceData = 22,
    clc_BaselineAck = 23,
    clc_ListenEvents = 24,
    clc_RespondCvarValue = 25,
    clc_FileCRCCheck = 26,
    clc_LoadingProgress = 27,
    clc_SplitPlayerConnect = 28,
    clc_ClientMessage = 29,
    clc_SplitPlayerDisconnect = 30,
    clc_ServerStatus = 31,
    clc_ServerPing = 32,
    clc_RequestPause = 33,
    clc_CmdKeyValues = 34,
    clc_RconServerDetails = 35,
    clc_HltvReplay = 36
}

/** SVC_Messages enum. */
export enum SVC_Messages {
    svc_ServerInfo = 40,
    svc_FlattenedSerializer = 41,
    svc_ClassInfo = 42,
    svc_SetPause = 43,
    svc_CreateStringTable = 44,
    svc_UpdateStringTable = 45,
    svc_VoiceInit = 46,
    svc_VoiceData = 47,
    svc_Print = 48,
    svc_Sounds = 49,
    svc_SetView = 50,
    svc_ClearAllStringTables = 51,
    svc_CmdKeyValues = 52,
    svc_BSPDecal = 53,
    svc_SplitScreen = 54,
    svc_PacketEntities = 55,
    svc_Prefetch = 56,
    svc_Menu = 57,
    svc_GetCvarValue = 58,
    svc_StopSound = 59,
    svc_PeerList = 60,
    svc_PacketReliable = 61,
    svc_HLTVStatus = 62,
    svc_ServerSteamID = 63,
    svc_FullFrameSplit = 70,
    svc_RconServerDetails = 71,
    svc_UserMessage = 72,
    svc_HltvReplay = 73,
    svc_Broadcast_Command = 74,
    svc_HltvFixupOperatorStatus = 75
}

/** VoiceDataFormat_t enum. */
export enum VoiceDataFormat_t {
    VOICEDATA_FORMAT_STEAM = 0,
    VOICEDATA_FORMAT_ENGINE = 1,
    VOICEDATA_FORMAT_OPUS = 2
}

/** RequestPause_t enum. */
export enum RequestPause_t {
    RP_PAUSE = 0,
    RP_UNPAUSE = 1,
    RP_TOGGLEPAUSE = 2
}

/** PrefetchType enum. */
export enum PrefetchType {
    PFT_SOUND = 0
}

/** ESplitScreenMessageType enum. */
export enum ESplitScreenMessageType {
    MSG_SPLITSCREEN_ADDUSER = 0,
    MSG_SPLITSCREEN_REMOVEUSER = 1
}

/** EQueryCvarValueStatus enum. */
export enum EQueryCvarValueStatus {
    eQueryCvarValueStatus_ValueIntact = 0,
    eQueryCvarValueStatus_CvarNotFound = 1,
    eQueryCvarValueStatus_NotACvar = 2,
    eQueryCvarValueStatus_CvarProtected = 3
}

/** DIALOG_TYPE enum. */
export enum DIALOG_TYPE {
    DIALOG_MSG = 0,
    DIALOG_MENU = 1,
    DIALOG_TEXT = 2,
    DIALOG_ENTRY = 3,
    DIALOG_ASKCONNECT = 4
}

/** SVC_Messages_LowFrequency enum. */
export enum SVC_Messages_LowFrequency {
    svc_dummy = 600
}

/** Bidirectional_Messages enum. */
export enum Bidirectional_Messages {
    bi_RebroadcastGameEvent = 16,
    bi_RebroadcastSource = 17,
    bi_GameEvent = 18
}

/** Bidirectional_Messages_LowFrequency enum. */
export enum Bidirectional_Messages_LowFrequency {
    bi_RelayInfo = 700,
    bi_RelayPacket = 701
}

/** ReplayEventType_t enum. */
export enum ReplayEventType_t {
    REPLAY_EVENT_CANCEL = 0,
    REPLAY_EVENT_DEATH = 1,
    REPLAY_EVENT_GENERIC = 2,
    REPLAY_EVENT_STUCK_NEED_FULL_UPDATE = 3,
    REPLAY_EVENT_VICTORY = 4
}

/** Represents a CCLCMsg_ClientInfo. */
export class CCLCMsg_ClientInfo implements ICCLCMsg_ClientInfo {

    /**
     * Constructs a new CCLCMsg_ClientInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_ClientInfo);

    /** CCLCMsg_ClientInfo sendTableCrc. */
    public sendTableCrc: number;

    /** CCLCMsg_ClientInfo serverCount. */
    public serverCount: number;

    /** CCLCMsg_ClientInfo isHltv. */
    public isHltv: boolean;

    /** CCLCMsg_ClientInfo friendsId. */
    public friendsId: number;

    /** CCLCMsg_ClientInfo friendsName. */
    public friendsName: string;

    /**
     * Creates a new CCLCMsg_ClientInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_ClientInfo instance
     */
    public static create(properties?: ICCLCMsg_ClientInfo): CCLCMsg_ClientInfo;

    /**
     * Encodes the specified CCLCMsg_ClientInfo message. Does not implicitly {@link CCLCMsg_ClientInfo.verify|verify} messages.
     * @param message CCLCMsg_ClientInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_ClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_ClientInfo message, length delimited. Does not implicitly {@link CCLCMsg_ClientInfo.verify|verify} messages.
     * @param message CCLCMsg_ClientInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_ClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_ClientInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_ClientInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_ClientInfo;

    /**
     * Decodes a CCLCMsg_ClientInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_ClientInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_ClientInfo;

    /**
     * Verifies a CCLCMsg_ClientInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_ClientInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_ClientInfo
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_ClientInfo;

    /**
     * Creates a plain object from a CCLCMsg_ClientInfo message. Also converts values to other types if specified.
     * @param message CCLCMsg_ClientInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_ClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_ClientInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_ClientInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_Move. */
export class CCLCMsg_Move implements ICCLCMsg_Move {

    /**
     * Constructs a new CCLCMsg_Move.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_Move);

    /** CCLCMsg_Move data. */
    public data: Uint8Array;

    /** CCLCMsg_Move commandNumber. */
    public commandNumber: number;

    /** CCLCMsg_Move numCommands. */
    public numCommands: number;

    /**
     * Creates a new CCLCMsg_Move instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_Move instance
     */
    public static create(properties?: ICCLCMsg_Move): CCLCMsg_Move;

    /**
     * Encodes the specified CCLCMsg_Move message. Does not implicitly {@link CCLCMsg_Move.verify|verify} messages.
     * @param message CCLCMsg_Move message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_Move, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_Move message, length delimited. Does not implicitly {@link CCLCMsg_Move.verify|verify} messages.
     * @param message CCLCMsg_Move message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_Move, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_Move message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_Move
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_Move;

    /**
     * Decodes a CCLCMsg_Move message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_Move
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_Move;

    /**
     * Verifies a CCLCMsg_Move message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_Move message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_Move
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_Move;

    /**
     * Creates a plain object from a CCLCMsg_Move message. Also converts values to other types if specified.
     * @param message CCLCMsg_Move
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_Move to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_Move
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgVoiceAudio. */
export class CMsgVoiceAudio implements ICMsgVoiceAudio {

    /**
     * Constructs a new CMsgVoiceAudio.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgVoiceAudio);

    /** CMsgVoiceAudio format. */
    public format: VoiceDataFormat_t;

    /** CMsgVoiceAudio voiceData. */
    public voiceData: Uint8Array;

    /** CMsgVoiceAudio sequenceBytes. */
    public sequenceBytes: number;

    /** CMsgVoiceAudio sectionNumber. */
    public sectionNumber: number;

    /** CMsgVoiceAudio sampleRate. */
    public sampleRate: number;

    /** CMsgVoiceAudio uncompressedSampleOffset. */
    public uncompressedSampleOffset: number;

    /** CMsgVoiceAudio numPackets. */
    public numPackets: number;

    /** CMsgVoiceAudio packetOffsets. */
    public packetOffsets: number[];

    /** CMsgVoiceAudio voiceLevel. */
    public voiceLevel: number;

    /**
     * Creates a new CMsgVoiceAudio instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgVoiceAudio instance
     */
    public static create(properties?: ICMsgVoiceAudio): CMsgVoiceAudio;

    /**
     * Encodes the specified CMsgVoiceAudio message. Does not implicitly {@link CMsgVoiceAudio.verify|verify} messages.
     * @param message CMsgVoiceAudio message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgVoiceAudio, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgVoiceAudio message, length delimited. Does not implicitly {@link CMsgVoiceAudio.verify|verify} messages.
     * @param message CMsgVoiceAudio message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgVoiceAudio, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgVoiceAudio message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgVoiceAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgVoiceAudio;

    /**
     * Decodes a CMsgVoiceAudio message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgVoiceAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgVoiceAudio;

    /**
     * Verifies a CMsgVoiceAudio message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgVoiceAudio message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgVoiceAudio
     */
    public static fromObject(object: { [k: string]: any }): CMsgVoiceAudio;

    /**
     * Creates a plain object from a CMsgVoiceAudio message. Also converts values to other types if specified.
     * @param message CMsgVoiceAudio
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgVoiceAudio, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgVoiceAudio to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgVoiceAudio
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_VoiceData. */
export class CCLCMsg_VoiceData implements ICCLCMsg_VoiceData {

    /**
     * Constructs a new CCLCMsg_VoiceData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_VoiceData);

    /** CCLCMsg_VoiceData audio. */
    public audio?: (ICMsgVoiceAudio|null);

    /** CCLCMsg_VoiceData xuid. */
    public xuid: (number|Long);

    /** CCLCMsg_VoiceData tick. */
    public tick: number;

    /**
     * Creates a new CCLCMsg_VoiceData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_VoiceData instance
     */
    public static create(properties?: ICCLCMsg_VoiceData): CCLCMsg_VoiceData;

    /**
     * Encodes the specified CCLCMsg_VoiceData message. Does not implicitly {@link CCLCMsg_VoiceData.verify|verify} messages.
     * @param message CCLCMsg_VoiceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_VoiceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_VoiceData message, length delimited. Does not implicitly {@link CCLCMsg_VoiceData.verify|verify} messages.
     * @param message CCLCMsg_VoiceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_VoiceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_VoiceData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_VoiceData;

    /**
     * Decodes a CCLCMsg_VoiceData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_VoiceData;

    /**
     * Verifies a CCLCMsg_VoiceData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_VoiceData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_VoiceData
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_VoiceData;

    /**
     * Creates a plain object from a CCLCMsg_VoiceData message. Also converts values to other types if specified.
     * @param message CCLCMsg_VoiceData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_VoiceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_VoiceData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_VoiceData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_BaselineAck. */
export class CCLCMsg_BaselineAck implements ICCLCMsg_BaselineAck {

    /**
     * Constructs a new CCLCMsg_BaselineAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_BaselineAck);

    /** CCLCMsg_BaselineAck baselineTick. */
    public baselineTick: number;

    /** CCLCMsg_BaselineAck baselineNr. */
    public baselineNr: number;

    /**
     * Creates a new CCLCMsg_BaselineAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_BaselineAck instance
     */
    public static create(properties?: ICCLCMsg_BaselineAck): CCLCMsg_BaselineAck;

    /**
     * Encodes the specified CCLCMsg_BaselineAck message. Does not implicitly {@link CCLCMsg_BaselineAck.verify|verify} messages.
     * @param message CCLCMsg_BaselineAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_BaselineAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_BaselineAck message, length delimited. Does not implicitly {@link CCLCMsg_BaselineAck.verify|verify} messages.
     * @param message CCLCMsg_BaselineAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_BaselineAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_BaselineAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_BaselineAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_BaselineAck;

    /**
     * Decodes a CCLCMsg_BaselineAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_BaselineAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_BaselineAck;

    /**
     * Verifies a CCLCMsg_BaselineAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_BaselineAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_BaselineAck
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_BaselineAck;

    /**
     * Creates a plain object from a CCLCMsg_BaselineAck message. Also converts values to other types if specified.
     * @param message CCLCMsg_BaselineAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_BaselineAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_BaselineAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_BaselineAck
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_ListenEvents. */
export class CCLCMsg_ListenEvents implements ICCLCMsg_ListenEvents {

    /**
     * Constructs a new CCLCMsg_ListenEvents.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_ListenEvents);

    /** CCLCMsg_ListenEvents eventMask. */
    public eventMask: number[];

    /**
     * Creates a new CCLCMsg_ListenEvents instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_ListenEvents instance
     */
    public static create(properties?: ICCLCMsg_ListenEvents): CCLCMsg_ListenEvents;

    /**
     * Encodes the specified CCLCMsg_ListenEvents message. Does not implicitly {@link CCLCMsg_ListenEvents.verify|verify} messages.
     * @param message CCLCMsg_ListenEvents message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_ListenEvents, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_ListenEvents message, length delimited. Does not implicitly {@link CCLCMsg_ListenEvents.verify|verify} messages.
     * @param message CCLCMsg_ListenEvents message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_ListenEvents, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_ListenEvents message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_ListenEvents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_ListenEvents;

    /**
     * Decodes a CCLCMsg_ListenEvents message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_ListenEvents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_ListenEvents;

    /**
     * Verifies a CCLCMsg_ListenEvents message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_ListenEvents message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_ListenEvents
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_ListenEvents;

    /**
     * Creates a plain object from a CCLCMsg_ListenEvents message. Also converts values to other types if specified.
     * @param message CCLCMsg_ListenEvents
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_ListenEvents, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_ListenEvents to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_ListenEvents
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_RespondCvarValue. */
export class CCLCMsg_RespondCvarValue implements ICCLCMsg_RespondCvarValue {

    /**
     * Constructs a new CCLCMsg_RespondCvarValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_RespondCvarValue);

    /** CCLCMsg_RespondCvarValue cookie. */
    public cookie: number;

    /** CCLCMsg_RespondCvarValue statusCode. */
    public statusCode: number;

    /** CCLCMsg_RespondCvarValue name. */
    public name: string;

    /** CCLCMsg_RespondCvarValue value. */
    public value: string;

    /**
     * Creates a new CCLCMsg_RespondCvarValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_RespondCvarValue instance
     */
    public static create(properties?: ICCLCMsg_RespondCvarValue): CCLCMsg_RespondCvarValue;

    /**
     * Encodes the specified CCLCMsg_RespondCvarValue message. Does not implicitly {@link CCLCMsg_RespondCvarValue.verify|verify} messages.
     * @param message CCLCMsg_RespondCvarValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_RespondCvarValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_RespondCvarValue message, length delimited. Does not implicitly {@link CCLCMsg_RespondCvarValue.verify|verify} messages.
     * @param message CCLCMsg_RespondCvarValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_RespondCvarValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_RespondCvarValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_RespondCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_RespondCvarValue;

    /**
     * Decodes a CCLCMsg_RespondCvarValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_RespondCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_RespondCvarValue;

    /**
     * Verifies a CCLCMsg_RespondCvarValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_RespondCvarValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_RespondCvarValue
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_RespondCvarValue;

    /**
     * Creates a plain object from a CCLCMsg_RespondCvarValue message. Also converts values to other types if specified.
     * @param message CCLCMsg_RespondCvarValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_RespondCvarValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_RespondCvarValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_RespondCvarValue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_FileCRCCheck. */
export class CCLCMsg_FileCRCCheck implements ICCLCMsg_FileCRCCheck {

    /**
     * Constructs a new CCLCMsg_FileCRCCheck.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_FileCRCCheck);

    /** CCLCMsg_FileCRCCheck codePath. */
    public codePath: number;

    /** CCLCMsg_FileCRCCheck path. */
    public path: string;

    /** CCLCMsg_FileCRCCheck codeFilename. */
    public codeFilename: number;

    /** CCLCMsg_FileCRCCheck filename. */
    public filename: string;

    /** CCLCMsg_FileCRCCheck crc. */
    public crc: number;

    /**
     * Creates a new CCLCMsg_FileCRCCheck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_FileCRCCheck instance
     */
    public static create(properties?: ICCLCMsg_FileCRCCheck): CCLCMsg_FileCRCCheck;

    /**
     * Encodes the specified CCLCMsg_FileCRCCheck message. Does not implicitly {@link CCLCMsg_FileCRCCheck.verify|verify} messages.
     * @param message CCLCMsg_FileCRCCheck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_FileCRCCheck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_FileCRCCheck message, length delimited. Does not implicitly {@link CCLCMsg_FileCRCCheck.verify|verify} messages.
     * @param message CCLCMsg_FileCRCCheck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_FileCRCCheck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_FileCRCCheck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_FileCRCCheck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_FileCRCCheck;

    /**
     * Decodes a CCLCMsg_FileCRCCheck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_FileCRCCheck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_FileCRCCheck;

    /**
     * Verifies a CCLCMsg_FileCRCCheck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_FileCRCCheck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_FileCRCCheck
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_FileCRCCheck;

    /**
     * Creates a plain object from a CCLCMsg_FileCRCCheck message. Also converts values to other types if specified.
     * @param message CCLCMsg_FileCRCCheck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_FileCRCCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_FileCRCCheck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_FileCRCCheck
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_LoadingProgress. */
export class CCLCMsg_LoadingProgress implements ICCLCMsg_LoadingProgress {

    /**
     * Constructs a new CCLCMsg_LoadingProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_LoadingProgress);

    /** CCLCMsg_LoadingProgress progress. */
    public progress: number;

    /**
     * Creates a new CCLCMsg_LoadingProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_LoadingProgress instance
     */
    public static create(properties?: ICCLCMsg_LoadingProgress): CCLCMsg_LoadingProgress;

    /**
     * Encodes the specified CCLCMsg_LoadingProgress message. Does not implicitly {@link CCLCMsg_LoadingProgress.verify|verify} messages.
     * @param message CCLCMsg_LoadingProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_LoadingProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_LoadingProgress message, length delimited. Does not implicitly {@link CCLCMsg_LoadingProgress.verify|verify} messages.
     * @param message CCLCMsg_LoadingProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_LoadingProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_LoadingProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_LoadingProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_LoadingProgress;

    /**
     * Decodes a CCLCMsg_LoadingProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_LoadingProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_LoadingProgress;

    /**
     * Verifies a CCLCMsg_LoadingProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_LoadingProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_LoadingProgress
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_LoadingProgress;

    /**
     * Creates a plain object from a CCLCMsg_LoadingProgress message. Also converts values to other types if specified.
     * @param message CCLCMsg_LoadingProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_LoadingProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_LoadingProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_LoadingProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_SplitPlayerConnect. */
export class CCLCMsg_SplitPlayerConnect implements ICCLCMsg_SplitPlayerConnect {

    /**
     * Constructs a new CCLCMsg_SplitPlayerConnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_SplitPlayerConnect);

    /** CCLCMsg_SplitPlayerConnect playername. */
    public playername: string;

    /**
     * Creates a new CCLCMsg_SplitPlayerConnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_SplitPlayerConnect instance
     */
    public static create(properties?: ICCLCMsg_SplitPlayerConnect): CCLCMsg_SplitPlayerConnect;

    /**
     * Encodes the specified CCLCMsg_SplitPlayerConnect message. Does not implicitly {@link CCLCMsg_SplitPlayerConnect.verify|verify} messages.
     * @param message CCLCMsg_SplitPlayerConnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_SplitPlayerConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_SplitPlayerConnect message, length delimited. Does not implicitly {@link CCLCMsg_SplitPlayerConnect.verify|verify} messages.
     * @param message CCLCMsg_SplitPlayerConnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_SplitPlayerConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_SplitPlayerConnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_SplitPlayerConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_SplitPlayerConnect;

    /**
     * Decodes a CCLCMsg_SplitPlayerConnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_SplitPlayerConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_SplitPlayerConnect;

    /**
     * Verifies a CCLCMsg_SplitPlayerConnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_SplitPlayerConnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_SplitPlayerConnect
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_SplitPlayerConnect;

    /**
     * Creates a plain object from a CCLCMsg_SplitPlayerConnect message. Also converts values to other types if specified.
     * @param message CCLCMsg_SplitPlayerConnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_SplitPlayerConnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_SplitPlayerConnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_SplitPlayerConnect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_ClientMessage. */
export class CCLCMsg_ClientMessage implements ICCLCMsg_ClientMessage {

    /**
     * Constructs a new CCLCMsg_ClientMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_ClientMessage);

    /** CCLCMsg_ClientMessage msgType. */
    public msgType: number;

    /** CCLCMsg_ClientMessage data. */
    public data: Uint8Array;

    /**
     * Creates a new CCLCMsg_ClientMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_ClientMessage instance
     */
    public static create(properties?: ICCLCMsg_ClientMessage): CCLCMsg_ClientMessage;

    /**
     * Encodes the specified CCLCMsg_ClientMessage message. Does not implicitly {@link CCLCMsg_ClientMessage.verify|verify} messages.
     * @param message CCLCMsg_ClientMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_ClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_ClientMessage message, length delimited. Does not implicitly {@link CCLCMsg_ClientMessage.verify|verify} messages.
     * @param message CCLCMsg_ClientMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_ClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_ClientMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_ClientMessage;

    /**
     * Decodes a CCLCMsg_ClientMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_ClientMessage;

    /**
     * Verifies a CCLCMsg_ClientMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_ClientMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_ClientMessage
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_ClientMessage;

    /**
     * Creates a plain object from a CCLCMsg_ClientMessage message. Also converts values to other types if specified.
     * @param message CCLCMsg_ClientMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_ClientMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_ClientMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_SplitPlayerDisconnect. */
export class CCLCMsg_SplitPlayerDisconnect implements ICCLCMsg_SplitPlayerDisconnect {

    /**
     * Constructs a new CCLCMsg_SplitPlayerDisconnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_SplitPlayerDisconnect);

    /** CCLCMsg_SplitPlayerDisconnect slot. */
    public slot: number;

    /**
     * Creates a new CCLCMsg_SplitPlayerDisconnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_SplitPlayerDisconnect instance
     */
    public static create(properties?: ICCLCMsg_SplitPlayerDisconnect): CCLCMsg_SplitPlayerDisconnect;

    /**
     * Encodes the specified CCLCMsg_SplitPlayerDisconnect message. Does not implicitly {@link CCLCMsg_SplitPlayerDisconnect.verify|verify} messages.
     * @param message CCLCMsg_SplitPlayerDisconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_SplitPlayerDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_SplitPlayerDisconnect message, length delimited. Does not implicitly {@link CCLCMsg_SplitPlayerDisconnect.verify|verify} messages.
     * @param message CCLCMsg_SplitPlayerDisconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_SplitPlayerDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_SplitPlayerDisconnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_SplitPlayerDisconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_SplitPlayerDisconnect;

    /**
     * Decodes a CCLCMsg_SplitPlayerDisconnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_SplitPlayerDisconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_SplitPlayerDisconnect;

    /**
     * Verifies a CCLCMsg_SplitPlayerDisconnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_SplitPlayerDisconnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_SplitPlayerDisconnect
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_SplitPlayerDisconnect;

    /**
     * Creates a plain object from a CCLCMsg_SplitPlayerDisconnect message. Also converts values to other types if specified.
     * @param message CCLCMsg_SplitPlayerDisconnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_SplitPlayerDisconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_SplitPlayerDisconnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_SplitPlayerDisconnect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_ServerStatus. */
export class CCLCMsg_ServerStatus implements ICCLCMsg_ServerStatus {

    /**
     * Constructs a new CCLCMsg_ServerStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_ServerStatus);

    /** CCLCMsg_ServerStatus simplified. */
    public simplified: boolean;

    /**
     * Creates a new CCLCMsg_ServerStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_ServerStatus instance
     */
    public static create(properties?: ICCLCMsg_ServerStatus): CCLCMsg_ServerStatus;

    /**
     * Encodes the specified CCLCMsg_ServerStatus message. Does not implicitly {@link CCLCMsg_ServerStatus.verify|verify} messages.
     * @param message CCLCMsg_ServerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_ServerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_ServerStatus message, length delimited. Does not implicitly {@link CCLCMsg_ServerStatus.verify|verify} messages.
     * @param message CCLCMsg_ServerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_ServerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_ServerStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_ServerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_ServerStatus;

    /**
     * Decodes a CCLCMsg_ServerStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_ServerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_ServerStatus;

    /**
     * Verifies a CCLCMsg_ServerStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_ServerStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_ServerStatus
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_ServerStatus;

    /**
     * Creates a plain object from a CCLCMsg_ServerStatus message. Also converts values to other types if specified.
     * @param message CCLCMsg_ServerStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_ServerStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_ServerStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_ServerStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_RequestPause. */
export class CCLCMsg_RequestPause implements ICCLCMsg_RequestPause {

    /**
     * Constructs a new CCLCMsg_RequestPause.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_RequestPause);

    /** CCLCMsg_RequestPause pauseType. */
    public pauseType: RequestPause_t;

    /** CCLCMsg_RequestPause pauseGroup. */
    public pauseGroup: number;

    /**
     * Creates a new CCLCMsg_RequestPause instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_RequestPause instance
     */
    public static create(properties?: ICCLCMsg_RequestPause): CCLCMsg_RequestPause;

    /**
     * Encodes the specified CCLCMsg_RequestPause message. Does not implicitly {@link CCLCMsg_RequestPause.verify|verify} messages.
     * @param message CCLCMsg_RequestPause message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_RequestPause, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_RequestPause message, length delimited. Does not implicitly {@link CCLCMsg_RequestPause.verify|verify} messages.
     * @param message CCLCMsg_RequestPause message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_RequestPause, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_RequestPause message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_RequestPause
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_RequestPause;

    /**
     * Decodes a CCLCMsg_RequestPause message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_RequestPause
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_RequestPause;

    /**
     * Verifies a CCLCMsg_RequestPause message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_RequestPause message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_RequestPause
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_RequestPause;

    /**
     * Creates a plain object from a CCLCMsg_RequestPause message. Also converts values to other types if specified.
     * @param message CCLCMsg_RequestPause
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_RequestPause, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_RequestPause to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_RequestPause
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_CmdKeyValues. */
export class CCLCMsg_CmdKeyValues implements ICCLCMsg_CmdKeyValues {

    /**
     * Constructs a new CCLCMsg_CmdKeyValues.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_CmdKeyValues);

    /** CCLCMsg_CmdKeyValues data. */
    public data: Uint8Array;

    /**
     * Creates a new CCLCMsg_CmdKeyValues instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_CmdKeyValues instance
     */
    public static create(properties?: ICCLCMsg_CmdKeyValues): CCLCMsg_CmdKeyValues;

    /**
     * Encodes the specified CCLCMsg_CmdKeyValues message. Does not implicitly {@link CCLCMsg_CmdKeyValues.verify|verify} messages.
     * @param message CCLCMsg_CmdKeyValues message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_CmdKeyValues, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_CmdKeyValues message, length delimited. Does not implicitly {@link CCLCMsg_CmdKeyValues.verify|verify} messages.
     * @param message CCLCMsg_CmdKeyValues message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_CmdKeyValues, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_CmdKeyValues message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_CmdKeyValues;

    /**
     * Decodes a CCLCMsg_CmdKeyValues message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_CmdKeyValues;

    /**
     * Verifies a CCLCMsg_CmdKeyValues message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_CmdKeyValues message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_CmdKeyValues
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_CmdKeyValues;

    /**
     * Creates a plain object from a CCLCMsg_CmdKeyValues message. Also converts values to other types if specified.
     * @param message CCLCMsg_CmdKeyValues
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_CmdKeyValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_CmdKeyValues to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_CmdKeyValues
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_RconServerDetails. */
export class CCLCMsg_RconServerDetails implements ICCLCMsg_RconServerDetails {

    /**
     * Constructs a new CCLCMsg_RconServerDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_RconServerDetails);

    /** CCLCMsg_RconServerDetails token. */
    public token: Uint8Array;

    /**
     * Creates a new CCLCMsg_RconServerDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_RconServerDetails instance
     */
    public static create(properties?: ICCLCMsg_RconServerDetails): CCLCMsg_RconServerDetails;

    /**
     * Encodes the specified CCLCMsg_RconServerDetails message. Does not implicitly {@link CCLCMsg_RconServerDetails.verify|verify} messages.
     * @param message CCLCMsg_RconServerDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_RconServerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_RconServerDetails message, length delimited. Does not implicitly {@link CCLCMsg_RconServerDetails.verify|verify} messages.
     * @param message CCLCMsg_RconServerDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_RconServerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_RconServerDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_RconServerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_RconServerDetails;

    /**
     * Decodes a CCLCMsg_RconServerDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_RconServerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_RconServerDetails;

    /**
     * Verifies a CCLCMsg_RconServerDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_RconServerDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_RconServerDetails
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_RconServerDetails;

    /**
     * Creates a plain object from a CCLCMsg_RconServerDetails message. Also converts values to other types if specified.
     * @param message CCLCMsg_RconServerDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_RconServerDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_RconServerDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_RconServerDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_ServerInfo. */
export class CSVCMsg_ServerInfo implements ICSVCMsg_ServerInfo {

    /**
     * Constructs a new CSVCMsg_ServerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_ServerInfo);

    /** CSVCMsg_ServerInfo protocol. */
    public protocol: number;

    /** CSVCMsg_ServerInfo serverCount. */
    public serverCount: number;

    /** CSVCMsg_ServerInfo isDedicated. */
    public isDedicated: boolean;

    /** CSVCMsg_ServerInfo isHltv. */
    public isHltv: boolean;

    /** CSVCMsg_ServerInfo cOs. */
    public cOs: number;

    /** CSVCMsg_ServerInfo maxClients. */
    public maxClients: number;

    /** CSVCMsg_ServerInfo maxClasses. */
    public maxClasses: number;

    /** CSVCMsg_ServerInfo playerSlot. */
    public playerSlot: number;

    /** CSVCMsg_ServerInfo tickInterval. */
    public tickInterval: number;

    /** CSVCMsg_ServerInfo gameDir. */
    public gameDir: string;

    /** CSVCMsg_ServerInfo mapName. */
    public mapName: string;

    /** CSVCMsg_ServerInfo skyName. */
    public skyName: string;

    /** CSVCMsg_ServerInfo hostName. */
    public hostName: string;

    /** CSVCMsg_ServerInfo addonName. */
    public addonName: string;

    /** CSVCMsg_ServerInfo gameSessionConfig. */
    public gameSessionConfig?: (ICSVCMsg_GameSessionConfiguration|null);

    /** CSVCMsg_ServerInfo gameSessionManifest. */
    public gameSessionManifest: Uint8Array;

    /**
     * Creates a new CSVCMsg_ServerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_ServerInfo instance
     */
    public static create(properties?: ICSVCMsg_ServerInfo): CSVCMsg_ServerInfo;

    /**
     * Encodes the specified CSVCMsg_ServerInfo message. Does not implicitly {@link CSVCMsg_ServerInfo.verify|verify} messages.
     * @param message CSVCMsg_ServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_ServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_ServerInfo message, length delimited. Does not implicitly {@link CSVCMsg_ServerInfo.verify|verify} messages.
     * @param message CSVCMsg_ServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_ServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_ServerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ServerInfo;

    /**
     * Decodes a CSVCMsg_ServerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_ServerInfo;

    /**
     * Verifies a CSVCMsg_ServerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_ServerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_ServerInfo
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_ServerInfo;

    /**
     * Creates a plain object from a CSVCMsg_ServerInfo message. Also converts values to other types if specified.
     * @param message CSVCMsg_ServerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_ServerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_ServerInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_ClassInfo. */
export class CSVCMsg_ClassInfo implements ICSVCMsg_ClassInfo {

    /**
     * Constructs a new CSVCMsg_ClassInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_ClassInfo);

    /** CSVCMsg_ClassInfo createOnClient. */
    public createOnClient: boolean;

    /** CSVCMsg_ClassInfo classes. */
    public classes: CSVCMsg_ClassInfo.Iclass_t[];

    /**
     * Creates a new CSVCMsg_ClassInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_ClassInfo instance
     */
    public static create(properties?: ICSVCMsg_ClassInfo): CSVCMsg_ClassInfo;

    /**
     * Encodes the specified CSVCMsg_ClassInfo message. Does not implicitly {@link CSVCMsg_ClassInfo.verify|verify} messages.
     * @param message CSVCMsg_ClassInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_ClassInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_ClassInfo message, length delimited. Does not implicitly {@link CSVCMsg_ClassInfo.verify|verify} messages.
     * @param message CSVCMsg_ClassInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_ClassInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_ClassInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_ClassInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ClassInfo;

    /**
     * Decodes a CSVCMsg_ClassInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_ClassInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_ClassInfo;

    /**
     * Verifies a CSVCMsg_ClassInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_ClassInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_ClassInfo
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_ClassInfo;

    /**
     * Creates a plain object from a CSVCMsg_ClassInfo message. Also converts values to other types if specified.
     * @param message CSVCMsg_ClassInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_ClassInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_ClassInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_ClassInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSVCMsg_ClassInfo {

    /** Properties of a class_t. */
    interface Iclass_t {

        /** class_t classId */
        classId?: (number|null);

        /** class_t className */
        className?: (string|null);
    }

    /** Represents a class_t. */
    class class_t implements Iclass_t {

        /**
         * Constructs a new class_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_ClassInfo.Iclass_t);

        /** class_t classId. */
        public classId: number;

        /** class_t className. */
        public className: string;

        /**
         * Creates a new class_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns class_t instance
         */
        public static create(properties?: CSVCMsg_ClassInfo.Iclass_t): CSVCMsg_ClassInfo.class_t;

        /**
         * Encodes the specified class_t message. Does not implicitly {@link CSVCMsg_ClassInfo.class_t.verify|verify} messages.
         * @param message class_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_ClassInfo.Iclass_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified class_t message, length delimited. Does not implicitly {@link CSVCMsg_ClassInfo.class_t.verify|verify} messages.
         * @param message class_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_ClassInfo.Iclass_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a class_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns class_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ClassInfo.class_t;

        /**
         * Decodes a class_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns class_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_ClassInfo.class_t;

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
        public static fromObject(object: { [k: string]: any }): CSVCMsg_ClassInfo.class_t;

        /**
         * Creates a plain object from a class_t message. Also converts values to other types if specified.
         * @param message class_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_ClassInfo.class_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Represents a CSVCMsg_SetPause. */
export class CSVCMsg_SetPause implements ICSVCMsg_SetPause {

    /**
     * Constructs a new CSVCMsg_SetPause.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SetPause);

    /** CSVCMsg_SetPause paused. */
    public paused: boolean;

    /**
     * Creates a new CSVCMsg_SetPause instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_SetPause instance
     */
    public static create(properties?: ICSVCMsg_SetPause): CSVCMsg_SetPause;

    /**
     * Encodes the specified CSVCMsg_SetPause message. Does not implicitly {@link CSVCMsg_SetPause.verify|verify} messages.
     * @param message CSVCMsg_SetPause message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_SetPause, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_SetPause message, length delimited. Does not implicitly {@link CSVCMsg_SetPause.verify|verify} messages.
     * @param message CSVCMsg_SetPause message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_SetPause, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_SetPause message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SetPause
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SetPause;

    /**
     * Decodes a CSVCMsg_SetPause message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_SetPause
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_SetPause;

    /**
     * Verifies a CSVCMsg_SetPause message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_SetPause message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_SetPause
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_SetPause;

    /**
     * Creates a plain object from a CSVCMsg_SetPause message. Also converts values to other types if specified.
     * @param message CSVCMsg_SetPause
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_SetPause, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_SetPause to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_SetPause
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_VoiceInit. */
export class CSVCMsg_VoiceInit implements ICSVCMsg_VoiceInit {

    /**
     * Constructs a new CSVCMsg_VoiceInit.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_VoiceInit);

    /** CSVCMsg_VoiceInit quality. */
    public quality: number;

    /** CSVCMsg_VoiceInit codec. */
    public codec: string;

    /** CSVCMsg_VoiceInit version. */
    public version: number;

    /**
     * Creates a new CSVCMsg_VoiceInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_VoiceInit instance
     */
    public static create(properties?: ICSVCMsg_VoiceInit): CSVCMsg_VoiceInit;

    /**
     * Encodes the specified CSVCMsg_VoiceInit message. Does not implicitly {@link CSVCMsg_VoiceInit.verify|verify} messages.
     * @param message CSVCMsg_VoiceInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_VoiceInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_VoiceInit message, length delimited. Does not implicitly {@link CSVCMsg_VoiceInit.verify|verify} messages.
     * @param message CSVCMsg_VoiceInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_VoiceInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_VoiceInit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_VoiceInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_VoiceInit;

    /**
     * Decodes a CSVCMsg_VoiceInit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_VoiceInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_VoiceInit;

    /**
     * Verifies a CSVCMsg_VoiceInit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_VoiceInit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_VoiceInit
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_VoiceInit;

    /**
     * Creates a plain object from a CSVCMsg_VoiceInit message. Also converts values to other types if specified.
     * @param message CSVCMsg_VoiceInit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_VoiceInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_VoiceInit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_VoiceInit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_Print. */
export class CSVCMsg_Print implements ICSVCMsg_Print {

    /**
     * Constructs a new CSVCMsg_Print.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Print);

    /** CSVCMsg_Print text. */
    public text: string;

    /**
     * Creates a new CSVCMsg_Print instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_Print instance
     */
    public static create(properties?: ICSVCMsg_Print): CSVCMsg_Print;

    /**
     * Encodes the specified CSVCMsg_Print message. Does not implicitly {@link CSVCMsg_Print.verify|verify} messages.
     * @param message CSVCMsg_Print message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_Print, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_Print message, length delimited. Does not implicitly {@link CSVCMsg_Print.verify|verify} messages.
     * @param message CSVCMsg_Print message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_Print, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_Print message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Print
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Print;

    /**
     * Decodes a CSVCMsg_Print message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_Print
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_Print;

    /**
     * Verifies a CSVCMsg_Print message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_Print message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_Print
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_Print;

    /**
     * Creates a plain object from a CSVCMsg_Print message. Also converts values to other types if specified.
     * @param message CSVCMsg_Print
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_Print, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_Print to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_Print
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_Sounds. */
export class CSVCMsg_Sounds implements ICSVCMsg_Sounds {

    /**
     * Constructs a new CSVCMsg_Sounds.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Sounds);

    /** CSVCMsg_Sounds reliableSound. */
    public reliableSound: boolean;

    /** CSVCMsg_Sounds sounds. */
    public sounds: CSVCMsg_Sounds.Isounddata_t[];

    /**
     * Creates a new CSVCMsg_Sounds instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_Sounds instance
     */
    public static create(properties?: ICSVCMsg_Sounds): CSVCMsg_Sounds;

    /**
     * Encodes the specified CSVCMsg_Sounds message. Does not implicitly {@link CSVCMsg_Sounds.verify|verify} messages.
     * @param message CSVCMsg_Sounds message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_Sounds, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_Sounds message, length delimited. Does not implicitly {@link CSVCMsg_Sounds.verify|verify} messages.
     * @param message CSVCMsg_Sounds message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_Sounds, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_Sounds message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Sounds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Sounds;

    /**
     * Decodes a CSVCMsg_Sounds message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_Sounds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_Sounds;

    /**
     * Verifies a CSVCMsg_Sounds message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_Sounds message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_Sounds
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_Sounds;

    /**
     * Creates a plain object from a CSVCMsg_Sounds message. Also converts values to other types if specified.
     * @param message CSVCMsg_Sounds
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_Sounds, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_Sounds to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_Sounds
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSVCMsg_Sounds {

    /** Properties of a sounddata_t. */
    interface Isounddata_t {

        /** sounddata_t originX */
        originX?: (number|null);

        /** sounddata_t originY */
        originY?: (number|null);

        /** sounddata_t originZ */
        originZ?: (number|null);

        /** sounddata_t volume */
        volume?: (number|null);

        /** sounddata_t delayValue */
        delayValue?: (number|null);

        /** sounddata_t sequenceNumber */
        sequenceNumber?: (number|null);

        /** sounddata_t entityIndex */
        entityIndex?: (number|null);

        /** sounddata_t channel */
        channel?: (number|null);

        /** sounddata_t pitch */
        pitch?: (number|null);

        /** sounddata_t flags */
        flags?: (number|null);

        /** sounddata_t soundNum */
        soundNum?: (number|null);

        /** sounddata_t soundNumHandle */
        soundNumHandle?: (number|null);

        /** sounddata_t speakerEntity */
        speakerEntity?: (number|null);

        /** sounddata_t randomSeed */
        randomSeed?: (number|null);

        /** sounddata_t soundLevel */
        soundLevel?: (number|null);

        /** sounddata_t isSentence */
        isSentence?: (boolean|null);

        /** sounddata_t isAmbient */
        isAmbient?: (boolean|null);

        /** sounddata_t guid */
        guid?: (number|null);

        /** sounddata_t soundResourceId */
        soundResourceId?: (number|Long|null);
    }

    /** Represents a sounddata_t. */
    class sounddata_t implements Isounddata_t {

        /**
         * Constructs a new sounddata_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_Sounds.Isounddata_t);

        /** sounddata_t originX. */
        public originX: number;

        /** sounddata_t originY. */
        public originY: number;

        /** sounddata_t originZ. */
        public originZ: number;

        /** sounddata_t volume. */
        public volume: number;

        /** sounddata_t delayValue. */
        public delayValue: number;

        /** sounddata_t sequenceNumber. */
        public sequenceNumber: number;

        /** sounddata_t entityIndex. */
        public entityIndex: number;

        /** sounddata_t channel. */
        public channel: number;

        /** sounddata_t pitch. */
        public pitch: number;

        /** sounddata_t flags. */
        public flags: number;

        /** sounddata_t soundNum. */
        public soundNum: number;

        /** sounddata_t soundNumHandle. */
        public soundNumHandle: number;

        /** sounddata_t speakerEntity. */
        public speakerEntity: number;

        /** sounddata_t randomSeed. */
        public randomSeed: number;

        /** sounddata_t soundLevel. */
        public soundLevel: number;

        /** sounddata_t isSentence. */
        public isSentence: boolean;

        /** sounddata_t isAmbient. */
        public isAmbient: boolean;

        /** sounddata_t guid. */
        public guid: number;

        /** sounddata_t soundResourceId. */
        public soundResourceId: (number|Long);

        /**
         * Creates a new sounddata_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sounddata_t instance
         */
        public static create(properties?: CSVCMsg_Sounds.Isounddata_t): CSVCMsg_Sounds.sounddata_t;

        /**
         * Encodes the specified sounddata_t message. Does not implicitly {@link CSVCMsg_Sounds.sounddata_t.verify|verify} messages.
         * @param message sounddata_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_Sounds.Isounddata_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sounddata_t message, length delimited. Does not implicitly {@link CSVCMsg_Sounds.sounddata_t.verify|verify} messages.
         * @param message sounddata_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_Sounds.Isounddata_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sounddata_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sounddata_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Sounds.sounddata_t;

        /**
         * Decodes a sounddata_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sounddata_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_Sounds.sounddata_t;

        /**
         * Verifies a sounddata_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sounddata_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sounddata_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsg_Sounds.sounddata_t;

        /**
         * Creates a plain object from a sounddata_t message. Also converts values to other types if specified.
         * @param message sounddata_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_Sounds.sounddata_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sounddata_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for sounddata_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CSVCMsg_Prefetch. */
export class CSVCMsg_Prefetch implements ICSVCMsg_Prefetch {

    /**
     * Constructs a new CSVCMsg_Prefetch.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Prefetch);

    /** CSVCMsg_Prefetch soundIndex. */
    public soundIndex: number;

    /** CSVCMsg_Prefetch resourceType. */
    public resourceType: PrefetchType;

    /**
     * Creates a new CSVCMsg_Prefetch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_Prefetch instance
     */
    public static create(properties?: ICSVCMsg_Prefetch): CSVCMsg_Prefetch;

    /**
     * Encodes the specified CSVCMsg_Prefetch message. Does not implicitly {@link CSVCMsg_Prefetch.verify|verify} messages.
     * @param message CSVCMsg_Prefetch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_Prefetch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_Prefetch message, length delimited. Does not implicitly {@link CSVCMsg_Prefetch.verify|verify} messages.
     * @param message CSVCMsg_Prefetch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_Prefetch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_Prefetch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Prefetch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Prefetch;

    /**
     * Decodes a CSVCMsg_Prefetch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_Prefetch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_Prefetch;

    /**
     * Verifies a CSVCMsg_Prefetch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_Prefetch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_Prefetch
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_Prefetch;

    /**
     * Creates a plain object from a CSVCMsg_Prefetch message. Also converts values to other types if specified.
     * @param message CSVCMsg_Prefetch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_Prefetch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_Prefetch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_Prefetch
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_SetView. */
export class CSVCMsg_SetView implements ICSVCMsg_SetView {

    /**
     * Constructs a new CSVCMsg_SetView.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SetView);

    /** CSVCMsg_SetView entityIndex. */
    public entityIndex: number;

    /** CSVCMsg_SetView slot. */
    public slot: number;

    /**
     * Creates a new CSVCMsg_SetView instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_SetView instance
     */
    public static create(properties?: ICSVCMsg_SetView): CSVCMsg_SetView;

    /**
     * Encodes the specified CSVCMsg_SetView message. Does not implicitly {@link CSVCMsg_SetView.verify|verify} messages.
     * @param message CSVCMsg_SetView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_SetView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_SetView message, length delimited. Does not implicitly {@link CSVCMsg_SetView.verify|verify} messages.
     * @param message CSVCMsg_SetView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_SetView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_SetView message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SetView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SetView;

    /**
     * Decodes a CSVCMsg_SetView message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_SetView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_SetView;

    /**
     * Verifies a CSVCMsg_SetView message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_SetView message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_SetView
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_SetView;

    /**
     * Creates a plain object from a CSVCMsg_SetView message. Also converts values to other types if specified.
     * @param message CSVCMsg_SetView
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_SetView, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_SetView to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_SetView
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_FixAngle. */
export class CSVCMsg_FixAngle implements ICSVCMsg_FixAngle {

    /**
     * Constructs a new CSVCMsg_FixAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_FixAngle);

    /** CSVCMsg_FixAngle relative. */
    public relative: boolean;

    /** CSVCMsg_FixAngle angle. */
    public angle?: (ICMsgQAngle|null);

    /**
     * Creates a new CSVCMsg_FixAngle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_FixAngle instance
     */
    public static create(properties?: ICSVCMsg_FixAngle): CSVCMsg_FixAngle;

    /**
     * Encodes the specified CSVCMsg_FixAngle message. Does not implicitly {@link CSVCMsg_FixAngle.verify|verify} messages.
     * @param message CSVCMsg_FixAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_FixAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_FixAngle message, length delimited. Does not implicitly {@link CSVCMsg_FixAngle.verify|verify} messages.
     * @param message CSVCMsg_FixAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_FixAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_FixAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_FixAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_FixAngle;

    /**
     * Decodes a CSVCMsg_FixAngle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_FixAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_FixAngle;

    /**
     * Verifies a CSVCMsg_FixAngle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_FixAngle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_FixAngle
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_FixAngle;

    /**
     * Creates a plain object from a CSVCMsg_FixAngle message. Also converts values to other types if specified.
     * @param message CSVCMsg_FixAngle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_FixAngle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_FixAngle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_FixAngle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_CrosshairAngle. */
export class CSVCMsg_CrosshairAngle implements ICSVCMsg_CrosshairAngle {

    /**
     * Constructs a new CSVCMsg_CrosshairAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_CrosshairAngle);

    /** CSVCMsg_CrosshairAngle angle. */
    public angle?: (ICMsgQAngle|null);

    /**
     * Creates a new CSVCMsg_CrosshairAngle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_CrosshairAngle instance
     */
    public static create(properties?: ICSVCMsg_CrosshairAngle): CSVCMsg_CrosshairAngle;

    /**
     * Encodes the specified CSVCMsg_CrosshairAngle message. Does not implicitly {@link CSVCMsg_CrosshairAngle.verify|verify} messages.
     * @param message CSVCMsg_CrosshairAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_CrosshairAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_CrosshairAngle message, length delimited. Does not implicitly {@link CSVCMsg_CrosshairAngle.verify|verify} messages.
     * @param message CSVCMsg_CrosshairAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_CrosshairAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_CrosshairAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_CrosshairAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_CrosshairAngle;

    /**
     * Decodes a CSVCMsg_CrosshairAngle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_CrosshairAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_CrosshairAngle;

    /**
     * Verifies a CSVCMsg_CrosshairAngle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_CrosshairAngle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_CrosshairAngle
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_CrosshairAngle;

    /**
     * Creates a plain object from a CSVCMsg_CrosshairAngle message. Also converts values to other types if specified.
     * @param message CSVCMsg_CrosshairAngle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_CrosshairAngle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_CrosshairAngle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_CrosshairAngle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_BSPDecal. */
export class CSVCMsg_BSPDecal implements ICSVCMsg_BSPDecal {

    /**
     * Constructs a new CSVCMsg_BSPDecal.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_BSPDecal);

    /** CSVCMsg_BSPDecal pos. */
    public pos?: (ICMsgVector|null);

    /** CSVCMsg_BSPDecal decalTextureIndex. */
    public decalTextureIndex: number;

    /** CSVCMsg_BSPDecal entityIndex. */
    public entityIndex: number;

    /** CSVCMsg_BSPDecal modelIndex. */
    public modelIndex: number;

    /** CSVCMsg_BSPDecal lowPriority. */
    public lowPriority: boolean;

    /**
     * Creates a new CSVCMsg_BSPDecal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_BSPDecal instance
     */
    public static create(properties?: ICSVCMsg_BSPDecal): CSVCMsg_BSPDecal;

    /**
     * Encodes the specified CSVCMsg_BSPDecal message. Does not implicitly {@link CSVCMsg_BSPDecal.verify|verify} messages.
     * @param message CSVCMsg_BSPDecal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_BSPDecal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_BSPDecal message, length delimited. Does not implicitly {@link CSVCMsg_BSPDecal.verify|verify} messages.
     * @param message CSVCMsg_BSPDecal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_BSPDecal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_BSPDecal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_BSPDecal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_BSPDecal;

    /**
     * Decodes a CSVCMsg_BSPDecal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_BSPDecal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_BSPDecal;

    /**
     * Verifies a CSVCMsg_BSPDecal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_BSPDecal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_BSPDecal
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_BSPDecal;

    /**
     * Creates a plain object from a CSVCMsg_BSPDecal message. Also converts values to other types if specified.
     * @param message CSVCMsg_BSPDecal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_BSPDecal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_BSPDecal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_BSPDecal
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_SplitScreen. */
export class CSVCMsg_SplitScreen implements ICSVCMsg_SplitScreen {

    /**
     * Constructs a new CSVCMsg_SplitScreen.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SplitScreen);

    /** CSVCMsg_SplitScreen type. */
    public type: ESplitScreenMessageType;

    /** CSVCMsg_SplitScreen slot. */
    public slot: number;

    /** CSVCMsg_SplitScreen playerIndex. */
    public playerIndex: number;

    /**
     * Creates a new CSVCMsg_SplitScreen instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_SplitScreen instance
     */
    public static create(properties?: ICSVCMsg_SplitScreen): CSVCMsg_SplitScreen;

    /**
     * Encodes the specified CSVCMsg_SplitScreen message. Does not implicitly {@link CSVCMsg_SplitScreen.verify|verify} messages.
     * @param message CSVCMsg_SplitScreen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_SplitScreen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_SplitScreen message, length delimited. Does not implicitly {@link CSVCMsg_SplitScreen.verify|verify} messages.
     * @param message CSVCMsg_SplitScreen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_SplitScreen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_SplitScreen message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SplitScreen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SplitScreen;

    /**
     * Decodes a CSVCMsg_SplitScreen message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_SplitScreen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_SplitScreen;

    /**
     * Verifies a CSVCMsg_SplitScreen message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_SplitScreen message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_SplitScreen
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_SplitScreen;

    /**
     * Creates a plain object from a CSVCMsg_SplitScreen message. Also converts values to other types if specified.
     * @param message CSVCMsg_SplitScreen
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_SplitScreen, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_SplitScreen to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_SplitScreen
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_GetCvarValue. */
export class CSVCMsg_GetCvarValue implements ICSVCMsg_GetCvarValue {

    /**
     * Constructs a new CSVCMsg_GetCvarValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_GetCvarValue);

    /** CSVCMsg_GetCvarValue cookie. */
    public cookie: number;

    /** CSVCMsg_GetCvarValue cvarName. */
    public cvarName: string;

    /**
     * Creates a new CSVCMsg_GetCvarValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_GetCvarValue instance
     */
    public static create(properties?: ICSVCMsg_GetCvarValue): CSVCMsg_GetCvarValue;

    /**
     * Encodes the specified CSVCMsg_GetCvarValue message. Does not implicitly {@link CSVCMsg_GetCvarValue.verify|verify} messages.
     * @param message CSVCMsg_GetCvarValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_GetCvarValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_GetCvarValue message, length delimited. Does not implicitly {@link CSVCMsg_GetCvarValue.verify|verify} messages.
     * @param message CSVCMsg_GetCvarValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_GetCvarValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_GetCvarValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_GetCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GetCvarValue;

    /**
     * Decodes a CSVCMsg_GetCvarValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_GetCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_GetCvarValue;

    /**
     * Verifies a CSVCMsg_GetCvarValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_GetCvarValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_GetCvarValue
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_GetCvarValue;

    /**
     * Creates a plain object from a CSVCMsg_GetCvarValue message. Also converts values to other types if specified.
     * @param message CSVCMsg_GetCvarValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_GetCvarValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_GetCvarValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_GetCvarValue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_Menu. */
export class CSVCMsg_Menu implements ICSVCMsg_Menu {

    /**
     * Constructs a new CSVCMsg_Menu.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Menu);

    /** CSVCMsg_Menu dialogType. */
    public dialogType: number;

    /** CSVCMsg_Menu menuKeyValues. */
    public menuKeyValues: Uint8Array;

    /**
     * Creates a new CSVCMsg_Menu instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_Menu instance
     */
    public static create(properties?: ICSVCMsg_Menu): CSVCMsg_Menu;

    /**
     * Encodes the specified CSVCMsg_Menu message. Does not implicitly {@link CSVCMsg_Menu.verify|verify} messages.
     * @param message CSVCMsg_Menu message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_Menu, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_Menu message, length delimited. Does not implicitly {@link CSVCMsg_Menu.verify|verify} messages.
     * @param message CSVCMsg_Menu message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_Menu, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_Menu message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Menu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Menu;

    /**
     * Decodes a CSVCMsg_Menu message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_Menu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_Menu;

    /**
     * Verifies a CSVCMsg_Menu message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_Menu message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_Menu
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_Menu;

    /**
     * Creates a plain object from a CSVCMsg_Menu message. Also converts values to other types if specified.
     * @param message CSVCMsg_Menu
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_Menu, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_Menu to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_Menu
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_UserMessage. */
export class CSVCMsg_UserMessage implements ICSVCMsg_UserMessage {

    /**
     * Constructs a new CSVCMsg_UserMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_UserMessage);

    /** CSVCMsg_UserMessage msgType. */
    public msgType: number;

    /** CSVCMsg_UserMessage msgData. */
    public msgData: Uint8Array;

    /** CSVCMsg_UserMessage passthrough. */
    public passthrough: number;

    /**
     * Creates a new CSVCMsg_UserMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_UserMessage instance
     */
    public static create(properties?: ICSVCMsg_UserMessage): CSVCMsg_UserMessage;

    /**
     * Encodes the specified CSVCMsg_UserMessage message. Does not implicitly {@link CSVCMsg_UserMessage.verify|verify} messages.
     * @param message CSVCMsg_UserMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_UserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_UserMessage message, length delimited. Does not implicitly {@link CSVCMsg_UserMessage.verify|verify} messages.
     * @param message CSVCMsg_UserMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_UserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_UserMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_UserMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_UserMessage;

    /**
     * Decodes a CSVCMsg_UserMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_UserMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_UserMessage;

    /**
     * Verifies a CSVCMsg_UserMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_UserMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_UserMessage
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_UserMessage;

    /**
     * Creates a plain object from a CSVCMsg_UserMessage message. Also converts values to other types if specified.
     * @param message CSVCMsg_UserMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_UserMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_UserMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_UserMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_SendTable. */
export class CSVCMsg_SendTable implements ICSVCMsg_SendTable {

    /**
     * Constructs a new CSVCMsg_SendTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SendTable);

    /** CSVCMsg_SendTable isEnd. */
    public isEnd: boolean;

    /** CSVCMsg_SendTable netTableName. */
    public netTableName: string;

    /** CSVCMsg_SendTable needsDecoder. */
    public needsDecoder: boolean;

    /** CSVCMsg_SendTable props. */
    public props: CSVCMsg_SendTable.Isendprop_t[];

    /**
     * Creates a new CSVCMsg_SendTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_SendTable instance
     */
    public static create(properties?: ICSVCMsg_SendTable): CSVCMsg_SendTable;

    /**
     * Encodes the specified CSVCMsg_SendTable message. Does not implicitly {@link CSVCMsg_SendTable.verify|verify} messages.
     * @param message CSVCMsg_SendTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_SendTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_SendTable message, length delimited. Does not implicitly {@link CSVCMsg_SendTable.verify|verify} messages.
     * @param message CSVCMsg_SendTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_SendTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_SendTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SendTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SendTable;

    /**
     * Decodes a CSVCMsg_SendTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_SendTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_SendTable;

    /**
     * Verifies a CSVCMsg_SendTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_SendTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_SendTable
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_SendTable;

    /**
     * Creates a plain object from a CSVCMsg_SendTable message. Also converts values to other types if specified.
     * @param message CSVCMsg_SendTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_SendTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_SendTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_SendTable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSVCMsg_SendTable {

    /** Properties of a sendprop_t. */
    interface Isendprop_t {

        /** sendprop_t type */
        type?: (number|null);

        /** sendprop_t varName */
        varName?: (string|null);

        /** sendprop_t flags */
        flags?: (number|null);

        /** sendprop_t priority */
        priority?: (number|null);

        /** sendprop_t dtName */
        dtName?: (string|null);

        /** sendprop_t numElements */
        numElements?: (number|null);

        /** sendprop_t lowValue */
        lowValue?: (number|null);

        /** sendprop_t highValue */
        highValue?: (number|null);

        /** sendprop_t numBits */
        numBits?: (number|null);
    }

    /** Represents a sendprop_t. */
    class sendprop_t implements Isendprop_t {

        /**
         * Constructs a new sendprop_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_SendTable.Isendprop_t);

        /** sendprop_t type. */
        public type: number;

        /** sendprop_t varName. */
        public varName: string;

        /** sendprop_t flags. */
        public flags: number;

        /** sendprop_t priority. */
        public priority: number;

        /** sendprop_t dtName. */
        public dtName: string;

        /** sendprop_t numElements. */
        public numElements: number;

        /** sendprop_t lowValue. */
        public lowValue: number;

        /** sendprop_t highValue. */
        public highValue: number;

        /** sendprop_t numBits. */
        public numBits: number;

        /**
         * Creates a new sendprop_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sendprop_t instance
         */
        public static create(properties?: CSVCMsg_SendTable.Isendprop_t): CSVCMsg_SendTable.sendprop_t;

        /**
         * Encodes the specified sendprop_t message. Does not implicitly {@link CSVCMsg_SendTable.sendprop_t.verify|verify} messages.
         * @param message sendprop_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_SendTable.Isendprop_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sendprop_t message, length delimited. Does not implicitly {@link CSVCMsg_SendTable.sendprop_t.verify|verify} messages.
         * @param message sendprop_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_SendTable.Isendprop_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sendprop_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sendprop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SendTable.sendprop_t;

        /**
         * Decodes a sendprop_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sendprop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_SendTable.sendprop_t;

        /**
         * Verifies a sendprop_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sendprop_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sendprop_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsg_SendTable.sendprop_t;

        /**
         * Creates a plain object from a sendprop_t message. Also converts values to other types if specified.
         * @param message sendprop_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_SendTable.sendprop_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sendprop_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for sendprop_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CSVCMsg_GameEventList. */
export class CSVCMsg_GameEventList implements ICSVCMsg_GameEventList {

    /**
     * Constructs a new CSVCMsg_GameEventList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_GameEventList);

    /** CSVCMsg_GameEventList descriptors. */
    public descriptors: CSVCMsg_GameEventList.Idescriptor_t[];

    /**
     * Creates a new CSVCMsg_GameEventList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_GameEventList instance
     */
    public static create(properties?: ICSVCMsg_GameEventList): CSVCMsg_GameEventList;

    /**
     * Encodes the specified CSVCMsg_GameEventList message. Does not implicitly {@link CSVCMsg_GameEventList.verify|verify} messages.
     * @param message CSVCMsg_GameEventList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_GameEventList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_GameEventList message, length delimited. Does not implicitly {@link CSVCMsg_GameEventList.verify|verify} messages.
     * @param message CSVCMsg_GameEventList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_GameEventList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_GameEventList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_GameEventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEventList;

    /**
     * Decodes a CSVCMsg_GameEventList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_GameEventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_GameEventList;

    /**
     * Verifies a CSVCMsg_GameEventList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_GameEventList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_GameEventList
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_GameEventList;

    /**
     * Creates a plain object from a CSVCMsg_GameEventList message. Also converts values to other types if specified.
     * @param message CSVCMsg_GameEventList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_GameEventList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_GameEventList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_GameEventList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSVCMsg_GameEventList {

    /** Properties of a key_t. */
    interface Ikey_t {

        /** key_t type */
        type?: (number|null);

        /** key_t name */
        name?: (string|null);
    }

    /** Represents a key_t. */
    class key_t implements Ikey_t {

        /**
         * Constructs a new key_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_GameEventList.Ikey_t);

        /** key_t type. */
        public type: number;

        /** key_t name. */
        public name: string;

        /**
         * Creates a new key_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns key_t instance
         */
        public static create(properties?: CSVCMsg_GameEventList.Ikey_t): CSVCMsg_GameEventList.key_t;

        /**
         * Encodes the specified key_t message. Does not implicitly {@link CSVCMsg_GameEventList.key_t.verify|verify} messages.
         * @param message key_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_GameEventList.Ikey_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified key_t message, length delimited. Does not implicitly {@link CSVCMsg_GameEventList.key_t.verify|verify} messages.
         * @param message key_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_GameEventList.Ikey_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a key_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEventList.key_t;

        /**
         * Decodes a key_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_GameEventList.key_t;

        /**
         * Verifies a key_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a key_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns key_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsg_GameEventList.key_t;

        /**
         * Creates a plain object from a key_t message. Also converts values to other types if specified.
         * @param message key_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_GameEventList.key_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this key_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for key_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a descriptor_t. */
    interface Idescriptor_t {

        /** descriptor_t eventid */
        eventid?: (number|null);

        /** descriptor_t name */
        name?: (string|null);

        /** descriptor_t keys */
        keys?: (CSVCMsg_GameEventList.Ikey_t[]|null);
    }

    /** Represents a descriptor_t. */
    class descriptor_t implements Idescriptor_t {

        /**
         * Constructs a new descriptor_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_GameEventList.Idescriptor_t);

        /** descriptor_t eventid. */
        public eventid: number;

        /** descriptor_t name. */
        public name: string;

        /** descriptor_t keys. */
        public keys: CSVCMsg_GameEventList.Ikey_t[];

        /**
         * Creates a new descriptor_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns descriptor_t instance
         */
        public static create(properties?: CSVCMsg_GameEventList.Idescriptor_t): CSVCMsg_GameEventList.descriptor_t;

        /**
         * Encodes the specified descriptor_t message. Does not implicitly {@link CSVCMsg_GameEventList.descriptor_t.verify|verify} messages.
         * @param message descriptor_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_GameEventList.Idescriptor_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified descriptor_t message, length delimited. Does not implicitly {@link CSVCMsg_GameEventList.descriptor_t.verify|verify} messages.
         * @param message descriptor_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_GameEventList.Idescriptor_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a descriptor_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns descriptor_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEventList.descriptor_t;

        /**
         * Decodes a descriptor_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns descriptor_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_GameEventList.descriptor_t;

        /**
         * Verifies a descriptor_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a descriptor_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns descriptor_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsg_GameEventList.descriptor_t;

        /**
         * Creates a plain object from a descriptor_t message. Also converts values to other types if specified.
         * @param message descriptor_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_GameEventList.descriptor_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this descriptor_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for descriptor_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CSVCMsg_PacketEntities. */
export class CSVCMsg_PacketEntities implements ICSVCMsg_PacketEntities {

    /**
     * Constructs a new CSVCMsg_PacketEntities.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_PacketEntities);

    /** CSVCMsg_PacketEntities maxEntries. */
    public maxEntries: number;

    /** CSVCMsg_PacketEntities updatedEntries. */
    public updatedEntries: number;

    /** CSVCMsg_PacketEntities isDelta. */
    public isDelta: boolean;

    /** CSVCMsg_PacketEntities updateBaseline. */
    public updateBaseline: boolean;

    /** CSVCMsg_PacketEntities baseline. */
    public baseline: number;

    /** CSVCMsg_PacketEntities deltaFrom. */
    public deltaFrom: number;

    /** CSVCMsg_PacketEntities entityData. */
    public entityData: Uint8Array;

    /** CSVCMsg_PacketEntities pendingFullFrame. */
    public pendingFullFrame: boolean;

    /** CSVCMsg_PacketEntities activeSpawngroupHandle. */
    public activeSpawngroupHandle: number;

    /** CSVCMsg_PacketEntities maxSpawngroupCreationsequence. */
    public maxSpawngroupCreationsequence: number;

    /** CSVCMsg_PacketEntities lastCmdNumber. */
    public lastCmdNumber: number;

    /** CSVCMsg_PacketEntities serverTick. */
    public serverTick: number;

    /** CSVCMsg_PacketEntities serializedEntities. */
    public serializedEntities: Uint8Array;

    /** CSVCMsg_PacketEntities commandQueueInfo. */
    public commandQueueInfo?: (CSVCMsg_PacketEntities.Icommand_queue_info_t|null);

    /** CSVCMsg_PacketEntities alternateBaselines. */
    public alternateBaselines: CSVCMsg_PacketEntities.Ialternate_baseline_t[];

    /**
     * Creates a new CSVCMsg_PacketEntities instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_PacketEntities instance
     */
    public static create(properties?: ICSVCMsg_PacketEntities): CSVCMsg_PacketEntities;

    /**
     * Encodes the specified CSVCMsg_PacketEntities message. Does not implicitly {@link CSVCMsg_PacketEntities.verify|verify} messages.
     * @param message CSVCMsg_PacketEntities message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_PacketEntities, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_PacketEntities message, length delimited. Does not implicitly {@link CSVCMsg_PacketEntities.verify|verify} messages.
     * @param message CSVCMsg_PacketEntities message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_PacketEntities, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_PacketEntities message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_PacketEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_PacketEntities;

    /**
     * Decodes a CSVCMsg_PacketEntities message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_PacketEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_PacketEntities;

    /**
     * Verifies a CSVCMsg_PacketEntities message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_PacketEntities message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_PacketEntities
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_PacketEntities;

    /**
     * Creates a plain object from a CSVCMsg_PacketEntities message. Also converts values to other types if specified.
     * @param message CSVCMsg_PacketEntities
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_PacketEntities, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_PacketEntities to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_PacketEntities
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSVCMsg_PacketEntities {

    /** Properties of a command_queue_info_t. */
    interface Icommand_queue_info_t {

        /** command_queue_info_t commandsQueued */
        commandsQueued?: (number|null);

        /** command_queue_info_t commandQueueDesiredSize */
        commandQueueDesiredSize?: (number|null);

        /** command_queue_info_t starvedCommandTicks */
        starvedCommandTicks?: (number|null);

        /** command_queue_info_t timeDilationPercent */
        timeDilationPercent?: (number|null);

        /** command_queue_info_t discardedCommandTicks */
        discardedCommandTicks?: (number|null);
    }

    /** Represents a command_queue_info_t. */
    class command_queue_info_t implements Icommand_queue_info_t {

        /**
         * Constructs a new command_queue_info_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_PacketEntities.Icommand_queue_info_t);

        /** command_queue_info_t commandsQueued. */
        public commandsQueued: number;

        /** command_queue_info_t commandQueueDesiredSize. */
        public commandQueueDesiredSize: number;

        /** command_queue_info_t starvedCommandTicks. */
        public starvedCommandTicks: number;

        /** command_queue_info_t timeDilationPercent. */
        public timeDilationPercent: number;

        /** command_queue_info_t discardedCommandTicks. */
        public discardedCommandTicks: number;

        /**
         * Creates a new command_queue_info_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns command_queue_info_t instance
         */
        public static create(properties?: CSVCMsg_PacketEntities.Icommand_queue_info_t): CSVCMsg_PacketEntities.command_queue_info_t;

        /**
         * Encodes the specified command_queue_info_t message. Does not implicitly {@link CSVCMsg_PacketEntities.command_queue_info_t.verify|verify} messages.
         * @param message command_queue_info_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_PacketEntities.Icommand_queue_info_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified command_queue_info_t message, length delimited. Does not implicitly {@link CSVCMsg_PacketEntities.command_queue_info_t.verify|verify} messages.
         * @param message command_queue_info_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_PacketEntities.Icommand_queue_info_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a command_queue_info_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns command_queue_info_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_PacketEntities.command_queue_info_t;

        /**
         * Decodes a command_queue_info_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns command_queue_info_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_PacketEntities.command_queue_info_t;

        /**
         * Verifies a command_queue_info_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a command_queue_info_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns command_queue_info_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsg_PacketEntities.command_queue_info_t;

        /**
         * Creates a plain object from a command_queue_info_t message. Also converts values to other types if specified.
         * @param message command_queue_info_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_PacketEntities.command_queue_info_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this command_queue_info_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for command_queue_info_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an alternate_baseline_t. */
    interface Ialternate_baseline_t {

        /** alternate_baseline_t entityIndex */
        entityIndex?: (number|null);

        /** alternate_baseline_t baselineIndex */
        baselineIndex?: (number|null);
    }

    /** Represents an alternate_baseline_t. */
    class alternate_baseline_t implements Ialternate_baseline_t {

        /**
         * Constructs a new alternate_baseline_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_PacketEntities.Ialternate_baseline_t);

        /** alternate_baseline_t entityIndex. */
        public entityIndex: number;

        /** alternate_baseline_t baselineIndex. */
        public baselineIndex: number;

        /**
         * Creates a new alternate_baseline_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns alternate_baseline_t instance
         */
        public static create(properties?: CSVCMsg_PacketEntities.Ialternate_baseline_t): CSVCMsg_PacketEntities.alternate_baseline_t;

        /**
         * Encodes the specified alternate_baseline_t message. Does not implicitly {@link CSVCMsg_PacketEntities.alternate_baseline_t.verify|verify} messages.
         * @param message alternate_baseline_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_PacketEntities.Ialternate_baseline_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified alternate_baseline_t message, length delimited. Does not implicitly {@link CSVCMsg_PacketEntities.alternate_baseline_t.verify|verify} messages.
         * @param message alternate_baseline_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_PacketEntities.Ialternate_baseline_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an alternate_baseline_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns alternate_baseline_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_PacketEntities.alternate_baseline_t;

        /**
         * Decodes an alternate_baseline_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns alternate_baseline_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_PacketEntities.alternate_baseline_t;

        /**
         * Verifies an alternate_baseline_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an alternate_baseline_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns alternate_baseline_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsg_PacketEntities.alternate_baseline_t;

        /**
         * Creates a plain object from an alternate_baseline_t message. Also converts values to other types if specified.
         * @param message alternate_baseline_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_PacketEntities.alternate_baseline_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this alternate_baseline_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for alternate_baseline_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CSVCMsg_TempEntities. */
export class CSVCMsg_TempEntities implements ICSVCMsg_TempEntities {

    /**
     * Constructs a new CSVCMsg_TempEntities.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_TempEntities);

    /** CSVCMsg_TempEntities reliable. */
    public reliable: boolean;

    /** CSVCMsg_TempEntities numEntries. */
    public numEntries: number;

    /** CSVCMsg_TempEntities entityData. */
    public entityData: Uint8Array;

    /**
     * Creates a new CSVCMsg_TempEntities instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_TempEntities instance
     */
    public static create(properties?: ICSVCMsg_TempEntities): CSVCMsg_TempEntities;

    /**
     * Encodes the specified CSVCMsg_TempEntities message. Does not implicitly {@link CSVCMsg_TempEntities.verify|verify} messages.
     * @param message CSVCMsg_TempEntities message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_TempEntities, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_TempEntities message, length delimited. Does not implicitly {@link CSVCMsg_TempEntities.verify|verify} messages.
     * @param message CSVCMsg_TempEntities message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_TempEntities, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_TempEntities message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_TempEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_TempEntities;

    /**
     * Decodes a CSVCMsg_TempEntities message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_TempEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_TempEntities;

    /**
     * Verifies a CSVCMsg_TempEntities message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_TempEntities message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_TempEntities
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_TempEntities;

    /**
     * Creates a plain object from a CSVCMsg_TempEntities message. Also converts values to other types if specified.
     * @param message CSVCMsg_TempEntities
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_TempEntities, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_TempEntities to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_TempEntities
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_CreateStringTable. */
export class CSVCMsg_CreateStringTable implements ICSVCMsg_CreateStringTable {

    /**
     * Constructs a new CSVCMsg_CreateStringTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_CreateStringTable);

    /** CSVCMsg_CreateStringTable name. */
    public name: string;

    /** CSVCMsg_CreateStringTable numEntries. */
    public numEntries: number;

    /** CSVCMsg_CreateStringTable userDataFixedSize. */
    public userDataFixedSize: boolean;

    /** CSVCMsg_CreateStringTable userDataSize. */
    public userDataSize: number;

    /** CSVCMsg_CreateStringTable userDataSizeBits. */
    public userDataSizeBits: number;

    /** CSVCMsg_CreateStringTable flags. */
    public flags: number;

    /** CSVCMsg_CreateStringTable stringData. */
    public stringData: Uint8Array;

    /** CSVCMsg_CreateStringTable uncompressedSize. */
    public uncompressedSize: number;

    /** CSVCMsg_CreateStringTable dataCompressed. */
    public dataCompressed: boolean;

    /** CSVCMsg_CreateStringTable usingVarintBitcounts. */
    public usingVarintBitcounts: boolean;

    /**
     * Creates a new CSVCMsg_CreateStringTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_CreateStringTable instance
     */
    public static create(properties?: ICSVCMsg_CreateStringTable): CSVCMsg_CreateStringTable;

    /**
     * Encodes the specified CSVCMsg_CreateStringTable message. Does not implicitly {@link CSVCMsg_CreateStringTable.verify|verify} messages.
     * @param message CSVCMsg_CreateStringTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_CreateStringTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_CreateStringTable message, length delimited. Does not implicitly {@link CSVCMsg_CreateStringTable.verify|verify} messages.
     * @param message CSVCMsg_CreateStringTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_CreateStringTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_CreateStringTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_CreateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_CreateStringTable;

    /**
     * Decodes a CSVCMsg_CreateStringTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_CreateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_CreateStringTable;

    /**
     * Verifies a CSVCMsg_CreateStringTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_CreateStringTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_CreateStringTable
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_CreateStringTable;

    /**
     * Creates a plain object from a CSVCMsg_CreateStringTable message. Also converts values to other types if specified.
     * @param message CSVCMsg_CreateStringTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_CreateStringTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_CreateStringTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_CreateStringTable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_UpdateStringTable. */
export class CSVCMsg_UpdateStringTable implements ICSVCMsg_UpdateStringTable {

    /**
     * Constructs a new CSVCMsg_UpdateStringTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_UpdateStringTable);

    /** CSVCMsg_UpdateStringTable tableId. */
    public tableId: number;

    /** CSVCMsg_UpdateStringTable numChangedEntries. */
    public numChangedEntries: number;

    /** CSVCMsg_UpdateStringTable stringData. */
    public stringData: Uint8Array;

    /**
     * Creates a new CSVCMsg_UpdateStringTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_UpdateStringTable instance
     */
    public static create(properties?: ICSVCMsg_UpdateStringTable): CSVCMsg_UpdateStringTable;

    /**
     * Encodes the specified CSVCMsg_UpdateStringTable message. Does not implicitly {@link CSVCMsg_UpdateStringTable.verify|verify} messages.
     * @param message CSVCMsg_UpdateStringTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_UpdateStringTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_UpdateStringTable message, length delimited. Does not implicitly {@link CSVCMsg_UpdateStringTable.verify|verify} messages.
     * @param message CSVCMsg_UpdateStringTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_UpdateStringTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_UpdateStringTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_UpdateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_UpdateStringTable;

    /**
     * Decodes a CSVCMsg_UpdateStringTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_UpdateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_UpdateStringTable;

    /**
     * Verifies a CSVCMsg_UpdateStringTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_UpdateStringTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_UpdateStringTable
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_UpdateStringTable;

    /**
     * Creates a plain object from a CSVCMsg_UpdateStringTable message. Also converts values to other types if specified.
     * @param message CSVCMsg_UpdateStringTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_UpdateStringTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_UpdateStringTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_UpdateStringTable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_VoiceData. */
export class CSVCMsg_VoiceData implements ICSVCMsg_VoiceData {

    /**
     * Constructs a new CSVCMsg_VoiceData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_VoiceData);

    /** CSVCMsg_VoiceData audio. */
    public audio?: (ICMsgVoiceAudio|null);

    /** CSVCMsg_VoiceData client. */
    public client: number;

    /** CSVCMsg_VoiceData proximity. */
    public proximity: boolean;

    /** CSVCMsg_VoiceData xuid. */
    public xuid: (number|Long);

    /** CSVCMsg_VoiceData audibleMask. */
    public audibleMask: number;

    /** CSVCMsg_VoiceData tick. */
    public tick: number;

    /** CSVCMsg_VoiceData passthrough. */
    public passthrough: number;

    /**
     * Creates a new CSVCMsg_VoiceData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_VoiceData instance
     */
    public static create(properties?: ICSVCMsg_VoiceData): CSVCMsg_VoiceData;

    /**
     * Encodes the specified CSVCMsg_VoiceData message. Does not implicitly {@link CSVCMsg_VoiceData.verify|verify} messages.
     * @param message CSVCMsg_VoiceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_VoiceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_VoiceData message, length delimited. Does not implicitly {@link CSVCMsg_VoiceData.verify|verify} messages.
     * @param message CSVCMsg_VoiceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_VoiceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_VoiceData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_VoiceData;

    /**
     * Decodes a CSVCMsg_VoiceData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_VoiceData;

    /**
     * Verifies a CSVCMsg_VoiceData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_VoiceData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_VoiceData
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_VoiceData;

    /**
     * Creates a plain object from a CSVCMsg_VoiceData message. Also converts values to other types if specified.
     * @param message CSVCMsg_VoiceData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_VoiceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_VoiceData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_VoiceData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_PacketReliable. */
export class CSVCMsg_PacketReliable implements ICSVCMsg_PacketReliable {

    /**
     * Constructs a new CSVCMsg_PacketReliable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_PacketReliable);

    /** CSVCMsg_PacketReliable tick. */
    public tick: number;

    /** CSVCMsg_PacketReliable messagessize. */
    public messagessize: number;

    /** CSVCMsg_PacketReliable state. */
    public state: boolean;

    /**
     * Creates a new CSVCMsg_PacketReliable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_PacketReliable instance
     */
    public static create(properties?: ICSVCMsg_PacketReliable): CSVCMsg_PacketReliable;

    /**
     * Encodes the specified CSVCMsg_PacketReliable message. Does not implicitly {@link CSVCMsg_PacketReliable.verify|verify} messages.
     * @param message CSVCMsg_PacketReliable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_PacketReliable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_PacketReliable message, length delimited. Does not implicitly {@link CSVCMsg_PacketReliable.verify|verify} messages.
     * @param message CSVCMsg_PacketReliable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_PacketReliable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_PacketReliable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_PacketReliable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_PacketReliable;

    /**
     * Decodes a CSVCMsg_PacketReliable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_PacketReliable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_PacketReliable;

    /**
     * Verifies a CSVCMsg_PacketReliable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_PacketReliable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_PacketReliable
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_PacketReliable;

    /**
     * Creates a plain object from a CSVCMsg_PacketReliable message. Also converts values to other types if specified.
     * @param message CSVCMsg_PacketReliable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_PacketReliable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_PacketReliable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_PacketReliable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_FullFrameSplit. */
export class CSVCMsg_FullFrameSplit implements ICSVCMsg_FullFrameSplit {

    /**
     * Constructs a new CSVCMsg_FullFrameSplit.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_FullFrameSplit);

    /** CSVCMsg_FullFrameSplit tick. */
    public tick: number;

    /** CSVCMsg_FullFrameSplit section. */
    public section: number;

    /** CSVCMsg_FullFrameSplit total. */
    public total: number;

    /** CSVCMsg_FullFrameSplit data. */
    public data: Uint8Array;

    /**
     * Creates a new CSVCMsg_FullFrameSplit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_FullFrameSplit instance
     */
    public static create(properties?: ICSVCMsg_FullFrameSplit): CSVCMsg_FullFrameSplit;

    /**
     * Encodes the specified CSVCMsg_FullFrameSplit message. Does not implicitly {@link CSVCMsg_FullFrameSplit.verify|verify} messages.
     * @param message CSVCMsg_FullFrameSplit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_FullFrameSplit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_FullFrameSplit message, length delimited. Does not implicitly {@link CSVCMsg_FullFrameSplit.verify|verify} messages.
     * @param message CSVCMsg_FullFrameSplit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_FullFrameSplit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_FullFrameSplit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_FullFrameSplit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_FullFrameSplit;

    /**
     * Decodes a CSVCMsg_FullFrameSplit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_FullFrameSplit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_FullFrameSplit;

    /**
     * Verifies a CSVCMsg_FullFrameSplit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_FullFrameSplit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_FullFrameSplit
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_FullFrameSplit;

    /**
     * Creates a plain object from a CSVCMsg_FullFrameSplit message. Also converts values to other types if specified.
     * @param message CSVCMsg_FullFrameSplit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_FullFrameSplit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_FullFrameSplit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_FullFrameSplit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_HLTVStatus. */
export class CSVCMsg_HLTVStatus implements ICSVCMsg_HLTVStatus {

    /**
     * Constructs a new CSVCMsg_HLTVStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_HLTVStatus);

    /** CSVCMsg_HLTVStatus master. */
    public master: string;

    /** CSVCMsg_HLTVStatus clients. */
    public clients: number;

    /** CSVCMsg_HLTVStatus slots. */
    public slots: number;

    /** CSVCMsg_HLTVStatus proxies. */
    public proxies: number;

    /**
     * Creates a new CSVCMsg_HLTVStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_HLTVStatus instance
     */
    public static create(properties?: ICSVCMsg_HLTVStatus): CSVCMsg_HLTVStatus;

    /**
     * Encodes the specified CSVCMsg_HLTVStatus message. Does not implicitly {@link CSVCMsg_HLTVStatus.verify|verify} messages.
     * @param message CSVCMsg_HLTVStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_HLTVStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_HLTVStatus message, length delimited. Does not implicitly {@link CSVCMsg_HLTVStatus.verify|verify} messages.
     * @param message CSVCMsg_HLTVStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_HLTVStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_HLTVStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_HLTVStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_HLTVStatus;

    /**
     * Decodes a CSVCMsg_HLTVStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_HLTVStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_HLTVStatus;

    /**
     * Verifies a CSVCMsg_HLTVStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_HLTVStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_HLTVStatus
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_HLTVStatus;

    /**
     * Creates a plain object from a CSVCMsg_HLTVStatus message. Also converts values to other types if specified.
     * @param message CSVCMsg_HLTVStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_HLTVStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_HLTVStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_HLTVStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_ServerSteamID. */
export class CSVCMsg_ServerSteamID implements ICSVCMsg_ServerSteamID {

    /**
     * Constructs a new CSVCMsg_ServerSteamID.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_ServerSteamID);

    /** CSVCMsg_ServerSteamID steamId. */
    public steamId: (number|Long);

    /**
     * Creates a new CSVCMsg_ServerSteamID instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_ServerSteamID instance
     */
    public static create(properties?: ICSVCMsg_ServerSteamID): CSVCMsg_ServerSteamID;

    /**
     * Encodes the specified CSVCMsg_ServerSteamID message. Does not implicitly {@link CSVCMsg_ServerSteamID.verify|verify} messages.
     * @param message CSVCMsg_ServerSteamID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_ServerSteamID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_ServerSteamID message, length delimited. Does not implicitly {@link CSVCMsg_ServerSteamID.verify|verify} messages.
     * @param message CSVCMsg_ServerSteamID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_ServerSteamID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_ServerSteamID message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_ServerSteamID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ServerSteamID;

    /**
     * Decodes a CSVCMsg_ServerSteamID message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_ServerSteamID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_ServerSteamID;

    /**
     * Verifies a CSVCMsg_ServerSteamID message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_ServerSteamID message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_ServerSteamID
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_ServerSteamID;

    /**
     * Creates a plain object from a CSVCMsg_ServerSteamID message. Also converts values to other types if specified.
     * @param message CSVCMsg_ServerSteamID
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_ServerSteamID, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_ServerSteamID to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_ServerSteamID
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_CmdKeyValues. */
export class CSVCMsg_CmdKeyValues implements ICSVCMsg_CmdKeyValues {

    /**
     * Constructs a new CSVCMsg_CmdKeyValues.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_CmdKeyValues);

    /** CSVCMsg_CmdKeyValues data. */
    public data: Uint8Array;

    /**
     * Creates a new CSVCMsg_CmdKeyValues instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_CmdKeyValues instance
     */
    public static create(properties?: ICSVCMsg_CmdKeyValues): CSVCMsg_CmdKeyValues;

    /**
     * Encodes the specified CSVCMsg_CmdKeyValues message. Does not implicitly {@link CSVCMsg_CmdKeyValues.verify|verify} messages.
     * @param message CSVCMsg_CmdKeyValues message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_CmdKeyValues, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_CmdKeyValues message, length delimited. Does not implicitly {@link CSVCMsg_CmdKeyValues.verify|verify} messages.
     * @param message CSVCMsg_CmdKeyValues message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_CmdKeyValues, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_CmdKeyValues message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_CmdKeyValues;

    /**
     * Decodes a CSVCMsg_CmdKeyValues message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_CmdKeyValues;

    /**
     * Verifies a CSVCMsg_CmdKeyValues message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_CmdKeyValues message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_CmdKeyValues
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_CmdKeyValues;

    /**
     * Creates a plain object from a CSVCMsg_CmdKeyValues message. Also converts values to other types if specified.
     * @param message CSVCMsg_CmdKeyValues
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_CmdKeyValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_CmdKeyValues to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_CmdKeyValues
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_RconServerDetails. */
export class CSVCMsg_RconServerDetails implements ICSVCMsg_RconServerDetails {

    /**
     * Constructs a new CSVCMsg_RconServerDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_RconServerDetails);

    /** CSVCMsg_RconServerDetails token. */
    public token: Uint8Array;

    /** CSVCMsg_RconServerDetails details. */
    public details: string;

    /**
     * Creates a new CSVCMsg_RconServerDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_RconServerDetails instance
     */
    public static create(properties?: ICSVCMsg_RconServerDetails): CSVCMsg_RconServerDetails;

    /**
     * Encodes the specified CSVCMsg_RconServerDetails message. Does not implicitly {@link CSVCMsg_RconServerDetails.verify|verify} messages.
     * @param message CSVCMsg_RconServerDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_RconServerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_RconServerDetails message, length delimited. Does not implicitly {@link CSVCMsg_RconServerDetails.verify|verify} messages.
     * @param message CSVCMsg_RconServerDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_RconServerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_RconServerDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_RconServerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_RconServerDetails;

    /**
     * Decodes a CSVCMsg_RconServerDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_RconServerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_RconServerDetails;

    /**
     * Verifies a CSVCMsg_RconServerDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_RconServerDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_RconServerDetails
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_RconServerDetails;

    /**
     * Creates a plain object from a CSVCMsg_RconServerDetails message. Also converts values to other types if specified.
     * @param message CSVCMsg_RconServerDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_RconServerDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_RconServerDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_RconServerDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgIPCAddress. */
export class CMsgIPCAddress implements ICMsgIPCAddress {

    /**
     * Constructs a new CMsgIPCAddress.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgIPCAddress);

    /** CMsgIPCAddress computerGuid. */
    public computerGuid: (number|Long);

    /** CMsgIPCAddress processId. */
    public processId: number;

    /**
     * Creates a new CMsgIPCAddress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgIPCAddress instance
     */
    public static create(properties?: ICMsgIPCAddress): CMsgIPCAddress;

    /**
     * Encodes the specified CMsgIPCAddress message. Does not implicitly {@link CMsgIPCAddress.verify|verify} messages.
     * @param message CMsgIPCAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgIPCAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgIPCAddress message, length delimited. Does not implicitly {@link CMsgIPCAddress.verify|verify} messages.
     * @param message CMsgIPCAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgIPCAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgIPCAddress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgIPCAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgIPCAddress;

    /**
     * Decodes a CMsgIPCAddress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgIPCAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgIPCAddress;

    /**
     * Verifies a CMsgIPCAddress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgIPCAddress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgIPCAddress
     */
    public static fromObject(object: { [k: string]: any }): CMsgIPCAddress;

    /**
     * Creates a plain object from a CMsgIPCAddress message. Also converts values to other types if specified.
     * @param message CMsgIPCAddress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgIPCAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgIPCAddress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgIPCAddress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgServerPeer. */
export class CMsgServerPeer implements ICMsgServerPeer {

    /**
     * Constructs a new CMsgServerPeer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgServerPeer);

    /** CMsgServerPeer playerSlot. */
    public playerSlot: number;

    /** CMsgServerPeer steamid. */
    public steamid: (number|Long);

    /** CMsgServerPeer ipc. */
    public ipc?: (ICMsgIPCAddress|null);

    /** CMsgServerPeer theyHearYou. */
    public theyHearYou: boolean;

    /** CMsgServerPeer youHearThem. */
    public youHearThem: boolean;

    /** CMsgServerPeer isListenserverHost. */
    public isListenserverHost: boolean;

    /**
     * Creates a new CMsgServerPeer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgServerPeer instance
     */
    public static create(properties?: ICMsgServerPeer): CMsgServerPeer;

    /**
     * Encodes the specified CMsgServerPeer message. Does not implicitly {@link CMsgServerPeer.verify|verify} messages.
     * @param message CMsgServerPeer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgServerPeer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgServerPeer message, length delimited. Does not implicitly {@link CMsgServerPeer.verify|verify} messages.
     * @param message CMsgServerPeer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgServerPeer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgServerPeer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgServerPeer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgServerPeer;

    /**
     * Decodes a CMsgServerPeer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgServerPeer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgServerPeer;

    /**
     * Verifies a CMsgServerPeer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgServerPeer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgServerPeer
     */
    public static fromObject(object: { [k: string]: any }): CMsgServerPeer;

    /**
     * Creates a plain object from a CMsgServerPeer message. Also converts values to other types if specified.
     * @param message CMsgServerPeer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgServerPeer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgServerPeer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgServerPeer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_PeerList. */
export class CSVCMsg_PeerList implements ICSVCMsg_PeerList {

    /**
     * Constructs a new CSVCMsg_PeerList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_PeerList);

    /** CSVCMsg_PeerList peer. */
    public peer: ICMsgServerPeer[];

    /**
     * Creates a new CSVCMsg_PeerList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_PeerList instance
     */
    public static create(properties?: ICSVCMsg_PeerList): CSVCMsg_PeerList;

    /**
     * Encodes the specified CSVCMsg_PeerList message. Does not implicitly {@link CSVCMsg_PeerList.verify|verify} messages.
     * @param message CSVCMsg_PeerList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_PeerList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_PeerList message, length delimited. Does not implicitly {@link CSVCMsg_PeerList.verify|verify} messages.
     * @param message CSVCMsg_PeerList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_PeerList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_PeerList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_PeerList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_PeerList;

    /**
     * Decodes a CSVCMsg_PeerList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_PeerList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_PeerList;

    /**
     * Verifies a CSVCMsg_PeerList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_PeerList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_PeerList
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_PeerList;

    /**
     * Creates a plain object from a CSVCMsg_PeerList message. Also converts values to other types if specified.
     * @param message CSVCMsg_PeerList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_PeerList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_PeerList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_PeerList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_ClearAllStringTables. */
export class CSVCMsg_ClearAllStringTables implements ICSVCMsg_ClearAllStringTables {

    /**
     * Constructs a new CSVCMsg_ClearAllStringTables.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_ClearAllStringTables);

    /** CSVCMsg_ClearAllStringTables mapname. */
    public mapname: string;

    /** CSVCMsg_ClearAllStringTables createTablesSkipped. */
    public createTablesSkipped: boolean;

    /**
     * Creates a new CSVCMsg_ClearAllStringTables instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_ClearAllStringTables instance
     */
    public static create(properties?: ICSVCMsg_ClearAllStringTables): CSVCMsg_ClearAllStringTables;

    /**
     * Encodes the specified CSVCMsg_ClearAllStringTables message. Does not implicitly {@link CSVCMsg_ClearAllStringTables.verify|verify} messages.
     * @param message CSVCMsg_ClearAllStringTables message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_ClearAllStringTables, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_ClearAllStringTables message, length delimited. Does not implicitly {@link CSVCMsg_ClearAllStringTables.verify|verify} messages.
     * @param message CSVCMsg_ClearAllStringTables message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_ClearAllStringTables, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_ClearAllStringTables message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_ClearAllStringTables
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ClearAllStringTables;

    /**
     * Decodes a CSVCMsg_ClearAllStringTables message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_ClearAllStringTables
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_ClearAllStringTables;

    /**
     * Verifies a CSVCMsg_ClearAllStringTables message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_ClearAllStringTables message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_ClearAllStringTables
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_ClearAllStringTables;

    /**
     * Creates a plain object from a CSVCMsg_ClearAllStringTables message. Also converts values to other types if specified.
     * @param message CSVCMsg_ClearAllStringTables
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_ClearAllStringTables, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_ClearAllStringTables to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_ClearAllStringTables
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoFlattenedSerializerField_t. */
export class ProtoFlattenedSerializerField_t implements IProtoFlattenedSerializerField_t {

    /**
     * Constructs a new ProtoFlattenedSerializerField_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoFlattenedSerializerField_t);

    /** ProtoFlattenedSerializerField_t varTypeSym. */
    public varTypeSym: number;

    /** ProtoFlattenedSerializerField_t varNameSym. */
    public varNameSym: number;

    /** ProtoFlattenedSerializerField_t bitCount. */
    public bitCount: number;

    /** ProtoFlattenedSerializerField_t lowValue. */
    public lowValue: number;

    /** ProtoFlattenedSerializerField_t highValue. */
    public highValue: number;

    /** ProtoFlattenedSerializerField_t encodeFlags. */
    public encodeFlags: number;

    /** ProtoFlattenedSerializerField_t fieldSerializerNameSym. */
    public fieldSerializerNameSym: number;

    /** ProtoFlattenedSerializerField_t fieldSerializerVersion. */
    public fieldSerializerVersion: number;

    /** ProtoFlattenedSerializerField_t sendNodeSym. */
    public sendNodeSym: number;

    /** ProtoFlattenedSerializerField_t varEncoderSym. */
    public varEncoderSym: number;

    /** ProtoFlattenedSerializerField_t polymorphicTypes. */
    public polymorphicTypes: ProtoFlattenedSerializerField_t.Ipolymorphic_field_t[];

    /**
     * Creates a new ProtoFlattenedSerializerField_t instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoFlattenedSerializerField_t instance
     */
    public static create(properties?: IProtoFlattenedSerializerField_t): ProtoFlattenedSerializerField_t;

    /**
     * Encodes the specified ProtoFlattenedSerializerField_t message. Does not implicitly {@link ProtoFlattenedSerializerField_t.verify|verify} messages.
     * @param message ProtoFlattenedSerializerField_t message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoFlattenedSerializerField_t, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoFlattenedSerializerField_t message, length delimited. Does not implicitly {@link ProtoFlattenedSerializerField_t.verify|verify} messages.
     * @param message ProtoFlattenedSerializerField_t message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoFlattenedSerializerField_t, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoFlattenedSerializerField_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoFlattenedSerializerField_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoFlattenedSerializerField_t;

    /**
     * Decodes a ProtoFlattenedSerializerField_t message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoFlattenedSerializerField_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoFlattenedSerializerField_t;

    /**
     * Verifies a ProtoFlattenedSerializerField_t message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoFlattenedSerializerField_t message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoFlattenedSerializerField_t
     */
    public static fromObject(object: { [k: string]: any }): ProtoFlattenedSerializerField_t;

    /**
     * Creates a plain object from a ProtoFlattenedSerializerField_t message. Also converts values to other types if specified.
     * @param message ProtoFlattenedSerializerField_t
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoFlattenedSerializerField_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoFlattenedSerializerField_t to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoFlattenedSerializerField_t
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ProtoFlattenedSerializerField_t {

    /** Properties of a polymorphic_field_t. */
    interface Ipolymorphic_field_t {

        /** polymorphic_field_t polymorphicFieldSerializerNameSym */
        polymorphicFieldSerializerNameSym?: (number|null);

        /** polymorphic_field_t polymorphicFieldSerializerVersion */
        polymorphicFieldSerializerVersion?: (number|null);
    }

    /** Represents a polymorphic_field_t. */
    class polymorphic_field_t implements Ipolymorphic_field_t {

        /**
         * Constructs a new polymorphic_field_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: ProtoFlattenedSerializerField_t.Ipolymorphic_field_t);

        /** polymorphic_field_t polymorphicFieldSerializerNameSym. */
        public polymorphicFieldSerializerNameSym: number;

        /** polymorphic_field_t polymorphicFieldSerializerVersion. */
        public polymorphicFieldSerializerVersion: number;

        /**
         * Creates a new polymorphic_field_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns polymorphic_field_t instance
         */
        public static create(properties?: ProtoFlattenedSerializerField_t.Ipolymorphic_field_t): ProtoFlattenedSerializerField_t.polymorphic_field_t;

        /**
         * Encodes the specified polymorphic_field_t message. Does not implicitly {@link ProtoFlattenedSerializerField_t.polymorphic_field_t.verify|verify} messages.
         * @param message polymorphic_field_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ProtoFlattenedSerializerField_t.Ipolymorphic_field_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified polymorphic_field_t message, length delimited. Does not implicitly {@link ProtoFlattenedSerializerField_t.polymorphic_field_t.verify|verify} messages.
         * @param message polymorphic_field_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ProtoFlattenedSerializerField_t.Ipolymorphic_field_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a polymorphic_field_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns polymorphic_field_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoFlattenedSerializerField_t.polymorphic_field_t;

        /**
         * Decodes a polymorphic_field_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns polymorphic_field_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoFlattenedSerializerField_t.polymorphic_field_t;

        /**
         * Verifies a polymorphic_field_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a polymorphic_field_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns polymorphic_field_t
         */
        public static fromObject(object: { [k: string]: any }): ProtoFlattenedSerializerField_t.polymorphic_field_t;

        /**
         * Creates a plain object from a polymorphic_field_t message. Also converts values to other types if specified.
         * @param message polymorphic_field_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ProtoFlattenedSerializerField_t.polymorphic_field_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this polymorphic_field_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for polymorphic_field_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a ProtoFlattenedSerializer_t. */
export class ProtoFlattenedSerializer_t implements IProtoFlattenedSerializer_t {

    /**
     * Constructs a new ProtoFlattenedSerializer_t.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoFlattenedSerializer_t);

    /** ProtoFlattenedSerializer_t serializerNameSym. */
    public serializerNameSym: number;

    /** ProtoFlattenedSerializer_t serializerVersion. */
    public serializerVersion: number;

    /** ProtoFlattenedSerializer_t fieldsIndex. */
    public fieldsIndex: number[];

    /**
     * Creates a new ProtoFlattenedSerializer_t instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoFlattenedSerializer_t instance
     */
    public static create(properties?: IProtoFlattenedSerializer_t): ProtoFlattenedSerializer_t;

    /**
     * Encodes the specified ProtoFlattenedSerializer_t message. Does not implicitly {@link ProtoFlattenedSerializer_t.verify|verify} messages.
     * @param message ProtoFlattenedSerializer_t message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoFlattenedSerializer_t, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoFlattenedSerializer_t message, length delimited. Does not implicitly {@link ProtoFlattenedSerializer_t.verify|verify} messages.
     * @param message ProtoFlattenedSerializer_t message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoFlattenedSerializer_t, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoFlattenedSerializer_t message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoFlattenedSerializer_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoFlattenedSerializer_t;

    /**
     * Decodes a ProtoFlattenedSerializer_t message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoFlattenedSerializer_t
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoFlattenedSerializer_t;

    /**
     * Verifies a ProtoFlattenedSerializer_t message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoFlattenedSerializer_t message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoFlattenedSerializer_t
     */
    public static fromObject(object: { [k: string]: any }): ProtoFlattenedSerializer_t;

    /**
     * Creates a plain object from a ProtoFlattenedSerializer_t message. Also converts values to other types if specified.
     * @param message ProtoFlattenedSerializer_t
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoFlattenedSerializer_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoFlattenedSerializer_t to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoFlattenedSerializer_t
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_FlattenedSerializer. */
export class CSVCMsg_FlattenedSerializer implements ICSVCMsg_FlattenedSerializer {

    /**
     * Constructs a new CSVCMsg_FlattenedSerializer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_FlattenedSerializer);

    /** CSVCMsg_FlattenedSerializer serializers. */
    public serializers: IProtoFlattenedSerializer_t[];

    /** CSVCMsg_FlattenedSerializer symbols. */
    public symbols: string[];

    /** CSVCMsg_FlattenedSerializer fields. */
    public fields: IProtoFlattenedSerializerField_t[];

    /**
     * Creates a new CSVCMsg_FlattenedSerializer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_FlattenedSerializer instance
     */
    public static create(properties?: ICSVCMsg_FlattenedSerializer): CSVCMsg_FlattenedSerializer;

    /**
     * Encodes the specified CSVCMsg_FlattenedSerializer message. Does not implicitly {@link CSVCMsg_FlattenedSerializer.verify|verify} messages.
     * @param message CSVCMsg_FlattenedSerializer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_FlattenedSerializer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_FlattenedSerializer message, length delimited. Does not implicitly {@link CSVCMsg_FlattenedSerializer.verify|verify} messages.
     * @param message CSVCMsg_FlattenedSerializer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_FlattenedSerializer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_FlattenedSerializer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_FlattenedSerializer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_FlattenedSerializer;

    /**
     * Decodes a CSVCMsg_FlattenedSerializer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_FlattenedSerializer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_FlattenedSerializer;

    /**
     * Verifies a CSVCMsg_FlattenedSerializer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_FlattenedSerializer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_FlattenedSerializer
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_FlattenedSerializer;

    /**
     * Creates a plain object from a CSVCMsg_FlattenedSerializer message. Also converts values to other types if specified.
     * @param message CSVCMsg_FlattenedSerializer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_FlattenedSerializer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_FlattenedSerializer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_FlattenedSerializer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_StopSound. */
export class CSVCMsg_StopSound implements ICSVCMsg_StopSound {

    /**
     * Constructs a new CSVCMsg_StopSound.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_StopSound);

    /** CSVCMsg_StopSound guid. */
    public guid: number;

    /**
     * Creates a new CSVCMsg_StopSound instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_StopSound instance
     */
    public static create(properties?: ICSVCMsg_StopSound): CSVCMsg_StopSound;

    /**
     * Encodes the specified CSVCMsg_StopSound message. Does not implicitly {@link CSVCMsg_StopSound.verify|verify} messages.
     * @param message CSVCMsg_StopSound message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_StopSound, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_StopSound message, length delimited. Does not implicitly {@link CSVCMsg_StopSound.verify|verify} messages.
     * @param message CSVCMsg_StopSound message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_StopSound, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_StopSound message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_StopSound
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_StopSound;

    /**
     * Decodes a CSVCMsg_StopSound message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_StopSound
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_StopSound;

    /**
     * Verifies a CSVCMsg_StopSound message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_StopSound message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_StopSound
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_StopSound;

    /**
     * Creates a plain object from a CSVCMsg_StopSound message. Also converts values to other types if specified.
     * @param message CSVCMsg_StopSound
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_StopSound, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_StopSound to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_StopSound
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CBidirMsg_RebroadcastGameEvent. */
export class CBidirMsg_RebroadcastGameEvent implements ICBidirMsg_RebroadcastGameEvent {

    /**
     * Constructs a new CBidirMsg_RebroadcastGameEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICBidirMsg_RebroadcastGameEvent);

    /** CBidirMsg_RebroadcastGameEvent posttoserver. */
    public posttoserver: boolean;

    /** CBidirMsg_RebroadcastGameEvent buftype. */
    public buftype: number;

    /** CBidirMsg_RebroadcastGameEvent clientbitcount. */
    public clientbitcount: number;

    /** CBidirMsg_RebroadcastGameEvent receivingclients. */
    public receivingclients: (number|Long);

    /**
     * Creates a new CBidirMsg_RebroadcastGameEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CBidirMsg_RebroadcastGameEvent instance
     */
    public static create(properties?: ICBidirMsg_RebroadcastGameEvent): CBidirMsg_RebroadcastGameEvent;

    /**
     * Encodes the specified CBidirMsg_RebroadcastGameEvent message. Does not implicitly {@link CBidirMsg_RebroadcastGameEvent.verify|verify} messages.
     * @param message CBidirMsg_RebroadcastGameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICBidirMsg_RebroadcastGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CBidirMsg_RebroadcastGameEvent message, length delimited. Does not implicitly {@link CBidirMsg_RebroadcastGameEvent.verify|verify} messages.
     * @param message CBidirMsg_RebroadcastGameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICBidirMsg_RebroadcastGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CBidirMsg_RebroadcastGameEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CBidirMsg_RebroadcastGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CBidirMsg_RebroadcastGameEvent;

    /**
     * Decodes a CBidirMsg_RebroadcastGameEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CBidirMsg_RebroadcastGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CBidirMsg_RebroadcastGameEvent;

    /**
     * Verifies a CBidirMsg_RebroadcastGameEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CBidirMsg_RebroadcastGameEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CBidirMsg_RebroadcastGameEvent
     */
    public static fromObject(object: { [k: string]: any }): CBidirMsg_RebroadcastGameEvent;

    /**
     * Creates a plain object from a CBidirMsg_RebroadcastGameEvent message. Also converts values to other types if specified.
     * @param message CBidirMsg_RebroadcastGameEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CBidirMsg_RebroadcastGameEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CBidirMsg_RebroadcastGameEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CBidirMsg_RebroadcastGameEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CBidirMsg_RebroadcastSource. */
export class CBidirMsg_RebroadcastSource implements ICBidirMsg_RebroadcastSource {

    /**
     * Constructs a new CBidirMsg_RebroadcastSource.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICBidirMsg_RebroadcastSource);

    /** CBidirMsg_RebroadcastSource eventsource. */
    public eventsource: number;

    /**
     * Creates a new CBidirMsg_RebroadcastSource instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CBidirMsg_RebroadcastSource instance
     */
    public static create(properties?: ICBidirMsg_RebroadcastSource): CBidirMsg_RebroadcastSource;

    /**
     * Encodes the specified CBidirMsg_RebroadcastSource message. Does not implicitly {@link CBidirMsg_RebroadcastSource.verify|verify} messages.
     * @param message CBidirMsg_RebroadcastSource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICBidirMsg_RebroadcastSource, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CBidirMsg_RebroadcastSource message, length delimited. Does not implicitly {@link CBidirMsg_RebroadcastSource.verify|verify} messages.
     * @param message CBidirMsg_RebroadcastSource message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICBidirMsg_RebroadcastSource, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CBidirMsg_RebroadcastSource message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CBidirMsg_RebroadcastSource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CBidirMsg_RebroadcastSource;

    /**
     * Decodes a CBidirMsg_RebroadcastSource message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CBidirMsg_RebroadcastSource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CBidirMsg_RebroadcastSource;

    /**
     * Verifies a CBidirMsg_RebroadcastSource message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CBidirMsg_RebroadcastSource message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CBidirMsg_RebroadcastSource
     */
    public static fromObject(object: { [k: string]: any }): CBidirMsg_RebroadcastSource;

    /**
     * Creates a plain object from a CBidirMsg_RebroadcastSource message. Also converts values to other types if specified.
     * @param message CBidirMsg_RebroadcastSource
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CBidirMsg_RebroadcastSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CBidirMsg_RebroadcastSource to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CBidirMsg_RebroadcastSource
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgServerNetworkStats. */
export class CMsgServerNetworkStats implements ICMsgServerNetworkStats {

    /**
     * Constructs a new CMsgServerNetworkStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgServerNetworkStats);

    /** CMsgServerNetworkStats dedicated. */
    public dedicated: boolean;

    /** CMsgServerNetworkStats cpuUsage. */
    public cpuUsage: number;

    /** CMsgServerNetworkStats memoryUsedMb. */
    public memoryUsedMb: number;

    /** CMsgServerNetworkStats memoryFreeMb. */
    public memoryFreeMb: number;

    /** CMsgServerNetworkStats uptime. */
    public uptime: number;

    /** CMsgServerNetworkStats spawnCount. */
    public spawnCount: number;

    /** CMsgServerNetworkStats numClients. */
    public numClients: number;

    /** CMsgServerNetworkStats numBots. */
    public numBots: number;

    /** CMsgServerNetworkStats numSpectators. */
    public numSpectators: number;

    /** CMsgServerNetworkStats numTvRelays. */
    public numTvRelays: number;

    /** CMsgServerNetworkStats fps. */
    public fps: number;

    /** CMsgServerNetworkStats ports. */
    public ports: CMsgServerNetworkStats.IPort[];

    /** CMsgServerNetworkStats avgPingMs. */
    public avgPingMs: number;

    /** CMsgServerNetworkStats avgEngineLatencyOut. */
    public avgEngineLatencyOut: number;

    /** CMsgServerNetworkStats avgPacketsOut. */
    public avgPacketsOut: number;

    /** CMsgServerNetworkStats avgPacketsIn. */
    public avgPacketsIn: number;

    /** CMsgServerNetworkStats avgLossOut. */
    public avgLossOut: number;

    /** CMsgServerNetworkStats avgLossIn. */
    public avgLossIn: number;

    /** CMsgServerNetworkStats avgDataOut. */
    public avgDataOut: number;

    /** CMsgServerNetworkStats avgDataIn. */
    public avgDataIn: number;

    /** CMsgServerNetworkStats totalDataIn. */
    public totalDataIn: (number|Long);

    /** CMsgServerNetworkStats totalPacketsIn. */
    public totalPacketsIn: (number|Long);

    /** CMsgServerNetworkStats totalDataOut. */
    public totalDataOut: (number|Long);

    /** CMsgServerNetworkStats totalPacketsOut. */
    public totalPacketsOut: (number|Long);

    /** CMsgServerNetworkStats players. */
    public players: CMsgServerNetworkStats.IPlayer[];

    /**
     * Creates a new CMsgServerNetworkStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgServerNetworkStats instance
     */
    public static create(properties?: ICMsgServerNetworkStats): CMsgServerNetworkStats;

    /**
     * Encodes the specified CMsgServerNetworkStats message. Does not implicitly {@link CMsgServerNetworkStats.verify|verify} messages.
     * @param message CMsgServerNetworkStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgServerNetworkStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgServerNetworkStats message, length delimited. Does not implicitly {@link CMsgServerNetworkStats.verify|verify} messages.
     * @param message CMsgServerNetworkStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgServerNetworkStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgServerNetworkStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgServerNetworkStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgServerNetworkStats;

    /**
     * Decodes a CMsgServerNetworkStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgServerNetworkStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgServerNetworkStats;

    /**
     * Verifies a CMsgServerNetworkStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgServerNetworkStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgServerNetworkStats
     */
    public static fromObject(object: { [k: string]: any }): CMsgServerNetworkStats;

    /**
     * Creates a plain object from a CMsgServerNetworkStats message. Also converts values to other types if specified.
     * @param message CMsgServerNetworkStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgServerNetworkStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgServerNetworkStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgServerNetworkStats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgServerNetworkStats {

    /** Properties of a Port. */
    interface IPort {

        /** Port port */
        port?: (number|null);

        /** Port name */
        name?: (string|null);
    }

    /** Represents a Port. */
    class Port implements IPort {

        /**
         * Constructs a new Port.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgServerNetworkStats.IPort);

        /** Port port. */
        public port: number;

        /** Port name. */
        public name: string;

        /**
         * Creates a new Port instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Port instance
         */
        public static create(properties?: CMsgServerNetworkStats.IPort): CMsgServerNetworkStats.Port;

        /**
         * Encodes the specified Port message. Does not implicitly {@link CMsgServerNetworkStats.Port.verify|verify} messages.
         * @param message Port message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgServerNetworkStats.IPort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Port message, length delimited. Does not implicitly {@link CMsgServerNetworkStats.Port.verify|verify} messages.
         * @param message Port message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgServerNetworkStats.IPort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Port message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Port
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgServerNetworkStats.Port;

        /**
         * Decodes a Port message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Port
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgServerNetworkStats.Port;

        /**
         * Verifies a Port message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Port message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Port
         */
        public static fromObject(object: { [k: string]: any }): CMsgServerNetworkStats.Port;

        /**
         * Creates a plain object from a Port message. Also converts values to other types if specified.
         * @param message Port
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgServerNetworkStats.Port, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Port to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Port
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player steamid */
        steamid?: (number|Long|null);

        /** Player remoteAddr */
        remoteAddr?: (string|null);

        /** Player pingAvgMs */
        pingAvgMs?: (number|null);

        /** Player packetLossPct */
        packetLossPct?: (number|null);

        /** Player isBot */
        isBot?: (boolean|null);

        /** Player lossIn */
        lossIn?: (number|null);

        /** Player lossOut */
        lossOut?: (number|null);

        /** Player engineLatencyMs */
        engineLatencyMs?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgServerNetworkStats.IPlayer);

        /** Player steamid. */
        public steamid: (number|Long);

        /** Player remoteAddr. */
        public remoteAddr: string;

        /** Player pingAvgMs. */
        public pingAvgMs: number;

        /** Player packetLossPct. */
        public packetLossPct: number;

        /** Player isBot. */
        public isBot: boolean;

        /** Player lossIn. */
        public lossIn: number;

        /** Player lossOut. */
        public lossOut: number;

        /** Player engineLatencyMs. */
        public engineLatencyMs: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: CMsgServerNetworkStats.IPlayer): CMsgServerNetworkStats.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link CMsgServerNetworkStats.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgServerNetworkStats.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link CMsgServerNetworkStats.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgServerNetworkStats.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgServerNetworkStats.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgServerNetworkStats.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): CMsgServerNetworkStats.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgServerNetworkStats.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Player
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CSVCMsg_HltvReplay. */
export class CSVCMsg_HltvReplay implements ICSVCMsg_HltvReplay {

    /**
     * Constructs a new CSVCMsg_HltvReplay.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_HltvReplay);

    /** CSVCMsg_HltvReplay delay. */
    public delay: number;

    /** CSVCMsg_HltvReplay primaryTarget. */
    public primaryTarget: number;

    /** CSVCMsg_HltvReplay replayStopAt. */
    public replayStopAt: number;

    /** CSVCMsg_HltvReplay replayStartAt. */
    public replayStartAt: number;

    /** CSVCMsg_HltvReplay replaySlowdownBegin. */
    public replaySlowdownBegin: number;

    /** CSVCMsg_HltvReplay replaySlowdownEnd. */
    public replaySlowdownEnd: number;

    /** CSVCMsg_HltvReplay replaySlowdownRate. */
    public replaySlowdownRate: number;

    /** CSVCMsg_HltvReplay reason. */
    public reason: number;

    /**
     * Creates a new CSVCMsg_HltvReplay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_HltvReplay instance
     */
    public static create(properties?: ICSVCMsg_HltvReplay): CSVCMsg_HltvReplay;

    /**
     * Encodes the specified CSVCMsg_HltvReplay message. Does not implicitly {@link CSVCMsg_HltvReplay.verify|verify} messages.
     * @param message CSVCMsg_HltvReplay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_HltvReplay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_HltvReplay message, length delimited. Does not implicitly {@link CSVCMsg_HltvReplay.verify|verify} messages.
     * @param message CSVCMsg_HltvReplay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_HltvReplay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_HltvReplay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_HltvReplay;

    /**
     * Decodes a CSVCMsg_HltvReplay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_HltvReplay;

    /**
     * Verifies a CSVCMsg_HltvReplay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_HltvReplay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_HltvReplay
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_HltvReplay;

    /**
     * Creates a plain object from a CSVCMsg_HltvReplay message. Also converts values to other types if specified.
     * @param message CSVCMsg_HltvReplay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_HltvReplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_HltvReplay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_HltvReplay
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_HltvReplay. */
export class CCLCMsg_HltvReplay implements ICCLCMsg_HltvReplay {

    /**
     * Constructs a new CCLCMsg_HltvReplay.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_HltvReplay);

    /** CCLCMsg_HltvReplay request. */
    public request: number;

    /** CCLCMsg_HltvReplay slowdownLength. */
    public slowdownLength: number;

    /** CCLCMsg_HltvReplay slowdownRate. */
    public slowdownRate: number;

    /** CCLCMsg_HltvReplay primaryTarget. */
    public primaryTarget: number;

    /** CCLCMsg_HltvReplay eventTime. */
    public eventTime: number;

    /**
     * Creates a new CCLCMsg_HltvReplay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_HltvReplay instance
     */
    public static create(properties?: ICCLCMsg_HltvReplay): CCLCMsg_HltvReplay;

    /**
     * Encodes the specified CCLCMsg_HltvReplay message. Does not implicitly {@link CCLCMsg_HltvReplay.verify|verify} messages.
     * @param message CCLCMsg_HltvReplay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_HltvReplay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_HltvReplay message, length delimited. Does not implicitly {@link CCLCMsg_HltvReplay.verify|verify} messages.
     * @param message CCLCMsg_HltvReplay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_HltvReplay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_HltvReplay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_HltvReplay;

    /**
     * Decodes a CCLCMsg_HltvReplay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_HltvReplay;

    /**
     * Verifies a CCLCMsg_HltvReplay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_HltvReplay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_HltvReplay
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_HltvReplay;

    /**
     * Creates a plain object from a CCLCMsg_HltvReplay message. Also converts values to other types if specified.
     * @param message CCLCMsg_HltvReplay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_HltvReplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_HltvReplay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_HltvReplay
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_Broadcast_Command. */
export class CSVCMsg_Broadcast_Command implements ICSVCMsg_Broadcast_Command {

    /**
     * Constructs a new CSVCMsg_Broadcast_Command.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Broadcast_Command);

    /** CSVCMsg_Broadcast_Command cmd. */
    public cmd: string;

    /**
     * Creates a new CSVCMsg_Broadcast_Command instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_Broadcast_Command instance
     */
    public static create(properties?: ICSVCMsg_Broadcast_Command): CSVCMsg_Broadcast_Command;

    /**
     * Encodes the specified CSVCMsg_Broadcast_Command message. Does not implicitly {@link CSVCMsg_Broadcast_Command.verify|verify} messages.
     * @param message CSVCMsg_Broadcast_Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_Broadcast_Command, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_Broadcast_Command message, length delimited. Does not implicitly {@link CSVCMsg_Broadcast_Command.verify|verify} messages.
     * @param message CSVCMsg_Broadcast_Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_Broadcast_Command, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_Broadcast_Command message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Broadcast_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Broadcast_Command;

    /**
     * Decodes a CSVCMsg_Broadcast_Command message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_Broadcast_Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_Broadcast_Command;

    /**
     * Verifies a CSVCMsg_Broadcast_Command message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_Broadcast_Command message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_Broadcast_Command
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_Broadcast_Command;

    /**
     * Creates a plain object from a CSVCMsg_Broadcast_Command message. Also converts values to other types if specified.
     * @param message CSVCMsg_Broadcast_Command
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_Broadcast_Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_Broadcast_Command to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_Broadcast_Command
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCLCMsg_HltvFixupOperatorTick. */
export class CCLCMsg_HltvFixupOperatorTick implements ICCLCMsg_HltvFixupOperatorTick {

    /**
     * Constructs a new CCLCMsg_HltvFixupOperatorTick.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_HltvFixupOperatorTick);

    /** CCLCMsg_HltvFixupOperatorTick tick. */
    public tick: number;

    /** CCLCMsg_HltvFixupOperatorTick propsData. */
    public propsData: Uint8Array;

    /** CCLCMsg_HltvFixupOperatorTick origin. */
    public origin?: (ICMsgVector|null);

    /** CCLCMsg_HltvFixupOperatorTick eyeAngles. */
    public eyeAngles?: (ICMsgQAngle|null);

    /** CCLCMsg_HltvFixupOperatorTick observerMode. */
    public observerMode: number;

    /** CCLCMsg_HltvFixupOperatorTick cameramanScoreboard. */
    public cameramanScoreboard: boolean;

    /** CCLCMsg_HltvFixupOperatorTick observerTarget. */
    public observerTarget: number;

    /** CCLCMsg_HltvFixupOperatorTick viewOffset. */
    public viewOffset?: (ICMsgVector|null);

    /**
     * Creates a new CCLCMsg_HltvFixupOperatorTick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCLCMsg_HltvFixupOperatorTick instance
     */
    public static create(properties?: ICCLCMsg_HltvFixupOperatorTick): CCLCMsg_HltvFixupOperatorTick;

    /**
     * Encodes the specified CCLCMsg_HltvFixupOperatorTick message. Does not implicitly {@link CCLCMsg_HltvFixupOperatorTick.verify|verify} messages.
     * @param message CCLCMsg_HltvFixupOperatorTick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCLCMsg_HltvFixupOperatorTick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCLCMsg_HltvFixupOperatorTick message, length delimited. Does not implicitly {@link CCLCMsg_HltvFixupOperatorTick.verify|verify} messages.
     * @param message CCLCMsg_HltvFixupOperatorTick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCLCMsg_HltvFixupOperatorTick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCLCMsg_HltvFixupOperatorTick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_HltvFixupOperatorTick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_HltvFixupOperatorTick;

    /**
     * Decodes a CCLCMsg_HltvFixupOperatorTick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCLCMsg_HltvFixupOperatorTick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCLCMsg_HltvFixupOperatorTick;

    /**
     * Verifies a CCLCMsg_HltvFixupOperatorTick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCLCMsg_HltvFixupOperatorTick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCLCMsg_HltvFixupOperatorTick
     */
    public static fromObject(object: { [k: string]: any }): CCLCMsg_HltvFixupOperatorTick;

    /**
     * Creates a plain object from a CCLCMsg_HltvFixupOperatorTick message. Also converts values to other types if specified.
     * @param message CCLCMsg_HltvFixupOperatorTick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCLCMsg_HltvFixupOperatorTick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCLCMsg_HltvFixupOperatorTick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCLCMsg_HltvFixupOperatorTick
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_HltvFixupOperatorStatus. */
export class CSVCMsg_HltvFixupOperatorStatus implements ICSVCMsg_HltvFixupOperatorStatus {

    /**
     * Constructs a new CSVCMsg_HltvFixupOperatorStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_HltvFixupOperatorStatus);

    /** CSVCMsg_HltvFixupOperatorStatus mode. */
    public mode: number;

    /** CSVCMsg_HltvFixupOperatorStatus overrideOperatorName. */
    public overrideOperatorName: string;

    /**
     * Creates a new CSVCMsg_HltvFixupOperatorStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_HltvFixupOperatorStatus instance
     */
    public static create(properties?: ICSVCMsg_HltvFixupOperatorStatus): CSVCMsg_HltvFixupOperatorStatus;

    /**
     * Encodes the specified CSVCMsg_HltvFixupOperatorStatus message. Does not implicitly {@link CSVCMsg_HltvFixupOperatorStatus.verify|verify} messages.
     * @param message CSVCMsg_HltvFixupOperatorStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_HltvFixupOperatorStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_HltvFixupOperatorStatus message, length delimited. Does not implicitly {@link CSVCMsg_HltvFixupOperatorStatus.verify|verify} messages.
     * @param message CSVCMsg_HltvFixupOperatorStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_HltvFixupOperatorStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_HltvFixupOperatorStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_HltvFixupOperatorStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_HltvFixupOperatorStatus;

    /**
     * Decodes a CSVCMsg_HltvFixupOperatorStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_HltvFixupOperatorStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_HltvFixupOperatorStatus;

    /**
     * Verifies a CSVCMsg_HltvFixupOperatorStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_HltvFixupOperatorStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_HltvFixupOperatorStatus
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_HltvFixupOperatorStatus;

    /**
     * Creates a plain object from a CSVCMsg_HltvFixupOperatorStatus message. Also converts values to other types if specified.
     * @param message CSVCMsg_HltvFixupOperatorStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_HltvFixupOperatorStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_HltvFixupOperatorStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_HltvFixupOperatorStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** SignonState_t enum. */
export enum SignonState_t {
    SIGNONSTATE_NONE = 0,
    SIGNONSTATE_CHALLENGE = 1,
    SIGNONSTATE_CONNECTED = 2,
    SIGNONSTATE_NEW = 3,
    SIGNONSTATE_PRESPAWN = 4,
    SIGNONSTATE_SPAWN = 5,
    SIGNONSTATE_FULL = 6,
    SIGNONSTATE_CHANGELEVEL = 7
}

/** NET_Messages enum. */
export enum NET_Messages {
    net_NOP = 0,
    net_Disconnect = 1,
    net_SplitScreenUser = 3,
    net_Tick = 4,
    net_StringCmd = 5,
    net_SetConVar = 6,
    net_SignonState = 7,
    net_SpawnGroup_Load = 8,
    net_SpawnGroup_ManifestUpdate = 9,
    net_SpawnGroup_SetCreationTick = 11,
    net_SpawnGroup_Unload = 12,
    net_SpawnGroup_LoadCompleted = 13,
    net_DebugOverlay = 15
}

/** SpawnGroupFlags_t enum. */
export enum SpawnGroupFlags_t {
    SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE = 1,
    SPAWN_GROUP_DONT_SPAWN_ENTITIES = 2,
    SPAWN_GROUP_SYNCHRONOUS_SPAWN = 4,
    SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP = 8,
    SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES = 16,
    SPAWN_GROUP_BLOCK_UNTIL_LOADED = 64,
    SPAWN_GROUP_LOAD_STREAMING_DATA = 128,
    SPAWN_GROUP_CREATE_NEW_SCENE_WORLD = 256
}

/** Represents a CMsgVector. */
export class CMsgVector implements ICMsgVector {

    /**
     * Constructs a new CMsgVector.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgVector);

    /** CMsgVector x. */
    public x: number;

    /** CMsgVector y. */
    public y: number;

    /** CMsgVector z. */
    public z: number;

    /** CMsgVector w. */
    public w: number;

    /**
     * Creates a new CMsgVector instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgVector instance
     */
    public static create(properties?: ICMsgVector): CMsgVector;

    /**
     * Encodes the specified CMsgVector message. Does not implicitly {@link CMsgVector.verify|verify} messages.
     * @param message CMsgVector message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgVector, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgVector message, length delimited. Does not implicitly {@link CMsgVector.verify|verify} messages.
     * @param message CMsgVector message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgVector, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgVector message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgVector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgVector;

    /**
     * Decodes a CMsgVector message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgVector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgVector;

    /**
     * Verifies a CMsgVector message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgVector message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgVector
     */
    public static fromObject(object: { [k: string]: any }): CMsgVector;

    /**
     * Creates a plain object from a CMsgVector message. Also converts values to other types if specified.
     * @param message CMsgVector
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgVector, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgVector to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgVector
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgVector2D. */
export class CMsgVector2D implements ICMsgVector2D {

    /**
     * Constructs a new CMsgVector2D.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgVector2D);

    /** CMsgVector2D x. */
    public x: number;

    /** CMsgVector2D y. */
    public y: number;

    /**
     * Creates a new CMsgVector2D instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgVector2D instance
     */
    public static create(properties?: ICMsgVector2D): CMsgVector2D;

    /**
     * Encodes the specified CMsgVector2D message. Does not implicitly {@link CMsgVector2D.verify|verify} messages.
     * @param message CMsgVector2D message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgVector2D, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgVector2D message, length delimited. Does not implicitly {@link CMsgVector2D.verify|verify} messages.
     * @param message CMsgVector2D message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgVector2D, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgVector2D message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgVector2D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgVector2D;

    /**
     * Decodes a CMsgVector2D message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgVector2D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgVector2D;

    /**
     * Verifies a CMsgVector2D message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgVector2D message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgVector2D
     */
    public static fromObject(object: { [k: string]: any }): CMsgVector2D;

    /**
     * Creates a plain object from a CMsgVector2D message. Also converts values to other types if specified.
     * @param message CMsgVector2D
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgVector2D, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgVector2D to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgVector2D
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgQAngle. */
export class CMsgQAngle implements ICMsgQAngle {

    /**
     * Constructs a new CMsgQAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgQAngle);

    /** CMsgQAngle x. */
    public x: number;

    /** CMsgQAngle y. */
    public y: number;

    /** CMsgQAngle z. */
    public z: number;

    /**
     * Creates a new CMsgQAngle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgQAngle instance
     */
    public static create(properties?: ICMsgQAngle): CMsgQAngle;

    /**
     * Encodes the specified CMsgQAngle message. Does not implicitly {@link CMsgQAngle.verify|verify} messages.
     * @param message CMsgQAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgQAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgQAngle message, length delimited. Does not implicitly {@link CMsgQAngle.verify|verify} messages.
     * @param message CMsgQAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgQAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgQAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgQAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgQAngle;

    /**
     * Decodes a CMsgQAngle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgQAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgQAngle;

    /**
     * Verifies a CMsgQAngle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgQAngle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgQAngle
     */
    public static fromObject(object: { [k: string]: any }): CMsgQAngle;

    /**
     * Creates a plain object from a CMsgQAngle message. Also converts values to other types if specified.
     * @param message CMsgQAngle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgQAngle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgQAngle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgQAngle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgQuaternion. */
export class CMsgQuaternion implements ICMsgQuaternion {

    /**
     * Constructs a new CMsgQuaternion.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgQuaternion);

    /** CMsgQuaternion x. */
    public x: number;

    /** CMsgQuaternion y. */
    public y: number;

    /** CMsgQuaternion z. */
    public z: number;

    /** CMsgQuaternion w. */
    public w: number;

    /**
     * Creates a new CMsgQuaternion instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgQuaternion instance
     */
    public static create(properties?: ICMsgQuaternion): CMsgQuaternion;

    /**
     * Encodes the specified CMsgQuaternion message. Does not implicitly {@link CMsgQuaternion.verify|verify} messages.
     * @param message CMsgQuaternion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgQuaternion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgQuaternion message, length delimited. Does not implicitly {@link CMsgQuaternion.verify|verify} messages.
     * @param message CMsgQuaternion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgQuaternion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgQuaternion message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgQuaternion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgQuaternion;

    /**
     * Decodes a CMsgQuaternion message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgQuaternion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgQuaternion;

    /**
     * Verifies a CMsgQuaternion message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgQuaternion message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgQuaternion
     */
    public static fromObject(object: { [k: string]: any }): CMsgQuaternion;

    /**
     * Creates a plain object from a CMsgQuaternion message. Also converts values to other types if specified.
     * @param message CMsgQuaternion
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgQuaternion, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgQuaternion to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgQuaternion
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgTransform. */
export class CMsgTransform implements ICMsgTransform {

    /**
     * Constructs a new CMsgTransform.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgTransform);

    /** CMsgTransform position. */
    public position?: (ICMsgVector|null);

    /** CMsgTransform scale. */
    public scale: number;

    /** CMsgTransform orientation. */
    public orientation?: (ICMsgQuaternion|null);

    /**
     * Creates a new CMsgTransform instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgTransform instance
     */
    public static create(properties?: ICMsgTransform): CMsgTransform;

    /**
     * Encodes the specified CMsgTransform message. Does not implicitly {@link CMsgTransform.verify|verify} messages.
     * @param message CMsgTransform message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgTransform, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgTransform message, length delimited. Does not implicitly {@link CMsgTransform.verify|verify} messages.
     * @param message CMsgTransform message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgTransform, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgTransform message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgTransform
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgTransform;

    /**
     * Decodes a CMsgTransform message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgTransform
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgTransform;

    /**
     * Verifies a CMsgTransform message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgTransform message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgTransform
     */
    public static fromObject(object: { [k: string]: any }): CMsgTransform;

    /**
     * Creates a plain object from a CMsgTransform message. Also converts values to other types if specified.
     * @param message CMsgTransform
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgTransform to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgTransform
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgRGBA. */
export class CMsgRGBA implements ICMsgRGBA {

    /**
     * Constructs a new CMsgRGBA.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgRGBA);

    /** CMsgRGBA r. */
    public r: number;

    /** CMsgRGBA g. */
    public g: number;

    /** CMsgRGBA b. */
    public b: number;

    /** CMsgRGBA a. */
    public a: number;

    /**
     * Creates a new CMsgRGBA instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgRGBA instance
     */
    public static create(properties?: ICMsgRGBA): CMsgRGBA;

    /**
     * Encodes the specified CMsgRGBA message. Does not implicitly {@link CMsgRGBA.verify|verify} messages.
     * @param message CMsgRGBA message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgRGBA, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgRGBA message, length delimited. Does not implicitly {@link CMsgRGBA.verify|verify} messages.
     * @param message CMsgRGBA message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgRGBA, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgRGBA message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgRGBA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgRGBA;

    /**
     * Decodes a CMsgRGBA message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgRGBA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgRGBA;

    /**
     * Verifies a CMsgRGBA message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgRGBA message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgRGBA
     */
    public static fromObject(object: { [k: string]: any }): CMsgRGBA;

    /**
     * Creates a plain object from a CMsgRGBA message. Also converts values to other types if specified.
     * @param message CMsgRGBA
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgRGBA, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgRGBA to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgRGBA
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgPlayerInfo. */
export class CMsgPlayerInfo implements ICMsgPlayerInfo {

    /**
     * Constructs a new CMsgPlayerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgPlayerInfo);

    /** CMsgPlayerInfo name. */
    public name: string;

    /** CMsgPlayerInfo xuid. */
    public xuid: (number|Long);

    /** CMsgPlayerInfo userid. */
    public userid: number;

    /** CMsgPlayerInfo steamid. */
    public steamid: (number|Long);

    /** CMsgPlayerInfo fakeplayer. */
    public fakeplayer: boolean;

    /** CMsgPlayerInfo ishltv. */
    public ishltv: boolean;

    /**
     * Creates a new CMsgPlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgPlayerInfo instance
     */
    public static create(properties?: ICMsgPlayerInfo): CMsgPlayerInfo;

    /**
     * Encodes the specified CMsgPlayerInfo message. Does not implicitly {@link CMsgPlayerInfo.verify|verify} messages.
     * @param message CMsgPlayerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgPlayerInfo message, length delimited. Does not implicitly {@link CMsgPlayerInfo.verify|verify} messages.
     * @param message CMsgPlayerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgPlayerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgPlayerInfo;

    /**
     * Decodes a CMsgPlayerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgPlayerInfo;

    /**
     * Verifies a CMsgPlayerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgPlayerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgPlayerInfo
     */
    public static fromObject(object: { [k: string]: any }): CMsgPlayerInfo;

    /**
     * Creates a plain object from a CMsgPlayerInfo message. Also converts values to other types if specified.
     * @param message CMsgPlayerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgPlayerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgPlayerInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CEntityMsg. */
export class CEntityMsg implements ICEntityMsg {

    /**
     * Constructs a new CEntityMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEntityMsg);

    /** CEntityMsg targetEntity. */
    public targetEntity: number;

    /**
     * Creates a new CEntityMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEntityMsg instance
     */
    public static create(properties?: ICEntityMsg): CEntityMsg;

    /**
     * Encodes the specified CEntityMsg message. Does not implicitly {@link CEntityMsg.verify|verify} messages.
     * @param message CEntityMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEntityMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEntityMsg message, length delimited. Does not implicitly {@link CEntityMsg.verify|verify} messages.
     * @param message CEntityMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEntityMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEntityMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEntityMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEntityMsg;

    /**
     * Decodes a CEntityMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEntityMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEntityMsg;

    /**
     * Verifies a CEntityMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEntityMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEntityMsg
     */
    public static fromObject(object: { [k: string]: any }): CEntityMsg;

    /**
     * Creates a plain object from a CEntityMsg message. Also converts values to other types if specified.
     * @param message CEntityMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEntityMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEntityMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEntityMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsg_CVars. */
export class CMsg_CVars implements ICMsg_CVars {

    /**
     * Constructs a new CMsg_CVars.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsg_CVars);

    /** CMsg_CVars cvars. */
    public cvars: CMsg_CVars.ICVar[];

    /**
     * Creates a new CMsg_CVars instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsg_CVars instance
     */
    public static create(properties?: ICMsg_CVars): CMsg_CVars;

    /**
     * Encodes the specified CMsg_CVars message. Does not implicitly {@link CMsg_CVars.verify|verify} messages.
     * @param message CMsg_CVars message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsg_CVars, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsg_CVars message, length delimited. Does not implicitly {@link CMsg_CVars.verify|verify} messages.
     * @param message CMsg_CVars message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsg_CVars, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsg_CVars message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsg_CVars
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsg_CVars;

    /**
     * Decodes a CMsg_CVars message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsg_CVars
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsg_CVars;

    /**
     * Verifies a CMsg_CVars message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsg_CVars message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsg_CVars
     */
    public static fromObject(object: { [k: string]: any }): CMsg_CVars;

    /**
     * Creates a plain object from a CMsg_CVars message. Also converts values to other types if specified.
     * @param message CMsg_CVars
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsg_CVars, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsg_CVars to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsg_CVars
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsg_CVars {

    /** Properties of a CVar. */
    interface ICVar {

        /** CVar name */
        name?: (string|null);

        /** CVar value */
        value?: (string|null);
    }

    /** Represents a CVar. */
    class CVar implements ICVar {

        /**
         * Constructs a new CVar.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsg_CVars.ICVar);

        /** CVar name. */
        public name: string;

        /** CVar value. */
        public value: string;

        /**
         * Creates a new CVar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CVar instance
         */
        public static create(properties?: CMsg_CVars.ICVar): CMsg_CVars.CVar;

        /**
         * Encodes the specified CVar message. Does not implicitly {@link CMsg_CVars.CVar.verify|verify} messages.
         * @param message CVar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsg_CVars.ICVar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CVar message, length delimited. Does not implicitly {@link CMsg_CVars.CVar.verify|verify} messages.
         * @param message CVar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsg_CVars.ICVar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CVar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsg_CVars.CVar;

        /**
         * Decodes a CVar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsg_CVars.CVar;

        /**
         * Verifies a CVar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CVar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CVar
         */
        public static fromObject(object: { [k: string]: any }): CMsg_CVars.CVar;

        /**
         * Creates a plain object from a CVar message. Also converts values to other types if specified.
         * @param message CVar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsg_CVars.CVar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CVar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CVar
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CNETMsg_NOP. */
export class CNETMsg_NOP implements ICNETMsg_NOP {

    /**
     * Constructs a new CNETMsg_NOP.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_NOP);

    /**
     * Creates a new CNETMsg_NOP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_NOP instance
     */
    public static create(properties?: ICNETMsg_NOP): CNETMsg_NOP;

    /**
     * Encodes the specified CNETMsg_NOP message. Does not implicitly {@link CNETMsg_NOP.verify|verify} messages.
     * @param message CNETMsg_NOP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_NOP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_NOP message, length delimited. Does not implicitly {@link CNETMsg_NOP.verify|verify} messages.
     * @param message CNETMsg_NOP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_NOP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_NOP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_NOP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_NOP;

    /**
     * Decodes a CNETMsg_NOP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_NOP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_NOP;

    /**
     * Verifies a CNETMsg_NOP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_NOP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_NOP
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_NOP;

    /**
     * Creates a plain object from a CNETMsg_NOP message. Also converts values to other types if specified.
     * @param message CNETMsg_NOP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_NOP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_NOP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_NOP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_SplitScreenUser. */
export class CNETMsg_SplitScreenUser implements ICNETMsg_SplitScreenUser {

    /**
     * Constructs a new CNETMsg_SplitScreenUser.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SplitScreenUser);

    /** CNETMsg_SplitScreenUser slot. */
    public slot: number;

    /**
     * Creates a new CNETMsg_SplitScreenUser instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SplitScreenUser instance
     */
    public static create(properties?: ICNETMsg_SplitScreenUser): CNETMsg_SplitScreenUser;

    /**
     * Encodes the specified CNETMsg_SplitScreenUser message. Does not implicitly {@link CNETMsg_SplitScreenUser.verify|verify} messages.
     * @param message CNETMsg_SplitScreenUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SplitScreenUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SplitScreenUser message, length delimited. Does not implicitly {@link CNETMsg_SplitScreenUser.verify|verify} messages.
     * @param message CNETMsg_SplitScreenUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SplitScreenUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SplitScreenUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SplitScreenUser;

    /**
     * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SplitScreenUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SplitScreenUser;

    /**
     * Verifies a CNETMsg_SplitScreenUser message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SplitScreenUser message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SplitScreenUser
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SplitScreenUser;

    /**
     * Creates a plain object from a CNETMsg_SplitScreenUser message. Also converts values to other types if specified.
     * @param message CNETMsg_SplitScreenUser
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SplitScreenUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SplitScreenUser to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SplitScreenUser
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_Disconnect. */
export class CNETMsg_Disconnect implements ICNETMsg_Disconnect {

    /**
     * Constructs a new CNETMsg_Disconnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_Disconnect);

    /** CNETMsg_Disconnect reason. */
    public reason: ENetworkDisconnectionReason;

    /**
     * Creates a new CNETMsg_Disconnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_Disconnect instance
     */
    public static create(properties?: ICNETMsg_Disconnect): CNETMsg_Disconnect;

    /**
     * Encodes the specified CNETMsg_Disconnect message. Does not implicitly {@link CNETMsg_Disconnect.verify|verify} messages.
     * @param message CNETMsg_Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_Disconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_Disconnect message, length delimited. Does not implicitly {@link CNETMsg_Disconnect.verify|verify} messages.
     * @param message CNETMsg_Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_Disconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_Disconnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_Disconnect;

    /**
     * Decodes a CNETMsg_Disconnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_Disconnect;

    /**
     * Verifies a CNETMsg_Disconnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_Disconnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_Disconnect
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_Disconnect;

    /**
     * Creates a plain object from a CNETMsg_Disconnect message. Also converts values to other types if specified.
     * @param message CNETMsg_Disconnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_Disconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_Disconnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_Disconnect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_Tick. */
export class CNETMsg_Tick implements ICNETMsg_Tick {

    /**
     * Constructs a new CNETMsg_Tick.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_Tick);

    /** CNETMsg_Tick tick. */
    public tick: number;

    /** CNETMsg_Tick hostFrametime. */
    public hostFrametime: number;

    /** CNETMsg_Tick hostFrametimeStdDeviation. */
    public hostFrametimeStdDeviation: number;

    /** CNETMsg_Tick hostComputationtime. */
    public hostComputationtime: number;

    /** CNETMsg_Tick hostComputationtimeStdDeviation. */
    public hostComputationtimeStdDeviation: number;

    /** CNETMsg_Tick hostFramestarttimeStdDeviation. */
    public hostFramestarttimeStdDeviation: number;

    /** CNETMsg_Tick hostLoss. */
    public hostLoss: number;

    /** CNETMsg_Tick hostUnfilteredFrametime. */
    public hostUnfilteredFrametime: number;

    /** CNETMsg_Tick hltvReplayFlags. */
    public hltvReplayFlags: number;

    /**
     * Creates a new CNETMsg_Tick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_Tick instance
     */
    public static create(properties?: ICNETMsg_Tick): CNETMsg_Tick;

    /**
     * Encodes the specified CNETMsg_Tick message. Does not implicitly {@link CNETMsg_Tick.verify|verify} messages.
     * @param message CNETMsg_Tick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_Tick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_Tick message, length delimited. Does not implicitly {@link CNETMsg_Tick.verify|verify} messages.
     * @param message CNETMsg_Tick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_Tick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_Tick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_Tick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_Tick;

    /**
     * Decodes a CNETMsg_Tick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_Tick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_Tick;

    /**
     * Verifies a CNETMsg_Tick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_Tick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_Tick
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_Tick;

    /**
     * Creates a plain object from a CNETMsg_Tick message. Also converts values to other types if specified.
     * @param message CNETMsg_Tick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_Tick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_Tick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_Tick
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_StringCmd. */
export class CNETMsg_StringCmd implements ICNETMsg_StringCmd {

    /**
     * Constructs a new CNETMsg_StringCmd.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_StringCmd);

    /** CNETMsg_StringCmd command. */
    public command: string;

    /** CNETMsg_StringCmd predictionSync. */
    public predictionSync: number;

    /**
     * Creates a new CNETMsg_StringCmd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_StringCmd instance
     */
    public static create(properties?: ICNETMsg_StringCmd): CNETMsg_StringCmd;

    /**
     * Encodes the specified CNETMsg_StringCmd message. Does not implicitly {@link CNETMsg_StringCmd.verify|verify} messages.
     * @param message CNETMsg_StringCmd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_StringCmd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_StringCmd message, length delimited. Does not implicitly {@link CNETMsg_StringCmd.verify|verify} messages.
     * @param message CNETMsg_StringCmd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_StringCmd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_StringCmd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_StringCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_StringCmd;

    /**
     * Decodes a CNETMsg_StringCmd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_StringCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_StringCmd;

    /**
     * Verifies a CNETMsg_StringCmd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_StringCmd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_StringCmd
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_StringCmd;

    /**
     * Creates a plain object from a CNETMsg_StringCmd message. Also converts values to other types if specified.
     * @param message CNETMsg_StringCmd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_StringCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_StringCmd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_StringCmd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_SetConVar. */
export class CNETMsg_SetConVar implements ICNETMsg_SetConVar {

    /**
     * Constructs a new CNETMsg_SetConVar.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SetConVar);

    /** CNETMsg_SetConVar convars. */
    public convars?: (ICMsg_CVars|null);

    /**
     * Creates a new CNETMsg_SetConVar instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SetConVar instance
     */
    public static create(properties?: ICNETMsg_SetConVar): CNETMsg_SetConVar;

    /**
     * Encodes the specified CNETMsg_SetConVar message. Does not implicitly {@link CNETMsg_SetConVar.verify|verify} messages.
     * @param message CNETMsg_SetConVar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SetConVar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SetConVar message, length delimited. Does not implicitly {@link CNETMsg_SetConVar.verify|verify} messages.
     * @param message CNETMsg_SetConVar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SetConVar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SetConVar message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SetConVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SetConVar;

    /**
     * Decodes a CNETMsg_SetConVar message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SetConVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SetConVar;

    /**
     * Verifies a CNETMsg_SetConVar message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SetConVar message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SetConVar
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SetConVar;

    /**
     * Creates a plain object from a CNETMsg_SetConVar message. Also converts values to other types if specified.
     * @param message CNETMsg_SetConVar
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SetConVar, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SetConVar to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SetConVar
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_SignonState. */
export class CNETMsg_SignonState implements ICNETMsg_SignonState {

    /**
     * Constructs a new CNETMsg_SignonState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SignonState);

    /** CNETMsg_SignonState signonState. */
    public signonState: SignonState_t;

    /** CNETMsg_SignonState spawnCount. */
    public spawnCount: number;

    /** CNETMsg_SignonState numServerPlayers. */
    public numServerPlayers: number;

    /** CNETMsg_SignonState playersNetworkids. */
    public playersNetworkids: string[];

    /** CNETMsg_SignonState mapName. */
    public mapName: string;

    /** CNETMsg_SignonState addons. */
    public addons: string;

    /**
     * Creates a new CNETMsg_SignonState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SignonState instance
     */
    public static create(properties?: ICNETMsg_SignonState): CNETMsg_SignonState;

    /**
     * Encodes the specified CNETMsg_SignonState message. Does not implicitly {@link CNETMsg_SignonState.verify|verify} messages.
     * @param message CNETMsg_SignonState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SignonState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SignonState message, length delimited. Does not implicitly {@link CNETMsg_SignonState.verify|verify} messages.
     * @param message CNETMsg_SignonState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SignonState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SignonState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SignonState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SignonState;

    /**
     * Decodes a CNETMsg_SignonState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SignonState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SignonState;

    /**
     * Verifies a CNETMsg_SignonState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SignonState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SignonState
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SignonState;

    /**
     * Creates a plain object from a CNETMsg_SignonState message. Also converts values to other types if specified.
     * @param message CNETMsg_SignonState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SignonState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SignonState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SignonState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_GameEvent. */
export class CSVCMsg_GameEvent implements ICSVCMsg_GameEvent {

    /**
     * Constructs a new CSVCMsg_GameEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_GameEvent);

    /** CSVCMsg_GameEvent eventName. */
    public eventName: string;

    /** CSVCMsg_GameEvent eventid. */
    public eventid: number;

    /** CSVCMsg_GameEvent keys. */
    public keys: CSVCMsg_GameEvent.Ikey_t[];

    /**
     * Creates a new CSVCMsg_GameEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_GameEvent instance
     */
    public static create(properties?: ICSVCMsg_GameEvent): CSVCMsg_GameEvent;

    /**
     * Encodes the specified CSVCMsg_GameEvent message. Does not implicitly {@link CSVCMsg_GameEvent.verify|verify} messages.
     * @param message CSVCMsg_GameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_GameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_GameEvent message, length delimited. Does not implicitly {@link CSVCMsg_GameEvent.verify|verify} messages.
     * @param message CSVCMsg_GameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_GameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_GameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEvent;

    /**
     * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_GameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_GameEvent;

    /**
     * Verifies a CSVCMsg_GameEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_GameEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_GameEvent
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_GameEvent;

    /**
     * Creates a plain object from a CSVCMsg_GameEvent message. Also converts values to other types if specified.
     * @param message CSVCMsg_GameEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_GameEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_GameEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_GameEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSVCMsg_GameEvent {

    /** Properties of a key_t. */
    interface Ikey_t {

        /** key_t type */
        type?: (number|null);

        /** key_t valString */
        valString?: (string|null);

        /** key_t valFloat */
        valFloat?: (number|null);

        /** key_t valLong */
        valLong?: (number|null);

        /** key_t valShort */
        valShort?: (number|null);

        /** key_t valByte */
        valByte?: (number|null);

        /** key_t valBool */
        valBool?: (boolean|null);

        /** key_t valUint64 */
        valUint64?: (number|Long|null);
    }

    /** Represents a key_t. */
    class key_t implements Ikey_t {

        /**
         * Constructs a new key_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_GameEvent.Ikey_t);

        /** key_t type. */
        public type: number;

        /** key_t valString. */
        public valString: string;

        /** key_t valFloat. */
        public valFloat: number;

        /** key_t valLong. */
        public valLong: number;

        /** key_t valShort. */
        public valShort: number;

        /** key_t valByte. */
        public valByte: number;

        /** key_t valBool. */
        public valBool: boolean;

        /** key_t valUint64. */
        public valUint64: (number|Long);

        /**
         * Creates a new key_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns key_t instance
         */
        public static create(properties?: CSVCMsg_GameEvent.Ikey_t): CSVCMsg_GameEvent.key_t;

        /**
         * Encodes the specified key_t message. Does not implicitly {@link CSVCMsg_GameEvent.key_t.verify|verify} messages.
         * @param message key_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsg_GameEvent.Ikey_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified key_t message, length delimited. Does not implicitly {@link CSVCMsg_GameEvent.key_t.verify|verify} messages.
         * @param message key_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsg_GameEvent.Ikey_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a key_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEvent.key_t;

        /**
         * Decodes a key_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_GameEvent.key_t;

        /**
         * Verifies a key_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a key_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns key_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsg_GameEvent.key_t;

        /**
         * Creates a plain object from a key_t message. Also converts values to other types if specified.
         * @param message key_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsg_GameEvent.key_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this key_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for key_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CSVCMsgList_GameEvents. */
export class CSVCMsgList_GameEvents implements ICSVCMsgList_GameEvents {

    /**
     * Constructs a new CSVCMsgList_GameEvents.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsgList_GameEvents);

    /** CSVCMsgList_GameEvents events. */
    public events: CSVCMsgList_GameEvents.Ievent_t[];

    /**
     * Creates a new CSVCMsgList_GameEvents instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsgList_GameEvents instance
     */
    public static create(properties?: ICSVCMsgList_GameEvents): CSVCMsgList_GameEvents;

    /**
     * Encodes the specified CSVCMsgList_GameEvents message. Does not implicitly {@link CSVCMsgList_GameEvents.verify|verify} messages.
     * @param message CSVCMsgList_GameEvents message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsgList_GameEvents, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsgList_GameEvents message, length delimited. Does not implicitly {@link CSVCMsgList_GameEvents.verify|verify} messages.
     * @param message CSVCMsgList_GameEvents message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsgList_GameEvents, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsgList_GameEvents message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsgList_GameEvents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsgList_GameEvents;

    /**
     * Decodes a CSVCMsgList_GameEvents message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsgList_GameEvents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsgList_GameEvents;

    /**
     * Verifies a CSVCMsgList_GameEvents message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsgList_GameEvents message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsgList_GameEvents
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsgList_GameEvents;

    /**
     * Creates a plain object from a CSVCMsgList_GameEvents message. Also converts values to other types if specified.
     * @param message CSVCMsgList_GameEvents
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsgList_GameEvents, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsgList_GameEvents to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsgList_GameEvents
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSVCMsgList_GameEvents {

    /** Properties of an event_t. */
    interface Ievent_t {

        /** event_t tick */
        tick?: (number|null);

        /** event_t event */
        event?: (ICSVCMsg_GameEvent|null);
    }

    /** Represents an event_t. */
    class event_t implements Ievent_t {

        /**
         * Constructs a new event_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsgList_GameEvents.Ievent_t);

        /** event_t tick. */
        public tick: number;

        /** event_t event. */
        public event?: (ICSVCMsg_GameEvent|null);

        /**
         * Creates a new event_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns event_t instance
         */
        public static create(properties?: CSVCMsgList_GameEvents.Ievent_t): CSVCMsgList_GameEvents.event_t;

        /**
         * Encodes the specified event_t message. Does not implicitly {@link CSVCMsgList_GameEvents.event_t.verify|verify} messages.
         * @param message event_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSVCMsgList_GameEvents.Ievent_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified event_t message, length delimited. Does not implicitly {@link CSVCMsgList_GameEvents.event_t.verify|verify} messages.
         * @param message event_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSVCMsgList_GameEvents.Ievent_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an event_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns event_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsgList_GameEvents.event_t;

        /**
         * Decodes an event_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns event_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsgList_GameEvents.event_t;

        /**
         * Verifies an event_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an event_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns event_t
         */
        public static fromObject(object: { [k: string]: any }): CSVCMsgList_GameEvents.event_t;

        /**
         * Creates a plain object from an event_t message. Also converts values to other types if specified.
         * @param message event_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSVCMsgList_GameEvents.event_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this event_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for event_t
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CNETMsg_SpawnGroup_Load. */
export class CNETMsg_SpawnGroup_Load implements ICNETMsg_SpawnGroup_Load {

    /**
     * Constructs a new CNETMsg_SpawnGroup_Load.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SpawnGroup_Load);

    /** CNETMsg_SpawnGroup_Load worldname. */
    public worldname: string;

    /** CNETMsg_SpawnGroup_Load entitylumpname. */
    public entitylumpname: string;

    /** CNETMsg_SpawnGroup_Load entityfiltername. */
    public entityfiltername: string;

    /** CNETMsg_SpawnGroup_Load spawngrouphandle. */
    public spawngrouphandle: number;

    /** CNETMsg_SpawnGroup_Load spawngroupownerhandle. */
    public spawngroupownerhandle: number;

    /** CNETMsg_SpawnGroup_Load worldOffsetPos. */
    public worldOffsetPos?: (ICMsgVector|null);

    /** CNETMsg_SpawnGroup_Load worldOffsetAngle. */
    public worldOffsetAngle?: (ICMsgQAngle|null);

    /** CNETMsg_SpawnGroup_Load spawngroupmanifest. */
    public spawngroupmanifest: Uint8Array;

    /** CNETMsg_SpawnGroup_Load flags. */
    public flags: number;

    /** CNETMsg_SpawnGroup_Load tickcount. */
    public tickcount: number;

    /** CNETMsg_SpawnGroup_Load manifestincomplete. */
    public manifestincomplete: boolean;

    /** CNETMsg_SpawnGroup_Load localnamefixup. */
    public localnamefixup: string;

    /** CNETMsg_SpawnGroup_Load parentnamefixup. */
    public parentnamefixup: string;

    /** CNETMsg_SpawnGroup_Load manifestloadpriority. */
    public manifestloadpriority: number;

    /** CNETMsg_SpawnGroup_Load worldgroupid. */
    public worldgroupid: number;

    /** CNETMsg_SpawnGroup_Load creationsequence. */
    public creationsequence: number;

    /** CNETMsg_SpawnGroup_Load savegamefilename. */
    public savegamefilename: string;

    /** CNETMsg_SpawnGroup_Load spawngroupparenthandle. */
    public spawngroupparenthandle: number;

    /** CNETMsg_SpawnGroup_Load leveltransition. */
    public leveltransition: boolean;

    /** CNETMsg_SpawnGroup_Load worldgroupname. */
    public worldgroupname: string;

    /**
     * Creates a new CNETMsg_SpawnGroup_Load instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SpawnGroup_Load instance
     */
    public static create(properties?: ICNETMsg_SpawnGroup_Load): CNETMsg_SpawnGroup_Load;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_Load message. Does not implicitly {@link CNETMsg_SpawnGroup_Load.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_Load message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SpawnGroup_Load, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_Load message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_Load.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_Load message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SpawnGroup_Load, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SpawnGroup_Load message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SpawnGroup_Load
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SpawnGroup_Load;

    /**
     * Decodes a CNETMsg_SpawnGroup_Load message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SpawnGroup_Load
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SpawnGroup_Load;

    /**
     * Verifies a CNETMsg_SpawnGroup_Load message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SpawnGroup_Load message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SpawnGroup_Load
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SpawnGroup_Load;

    /**
     * Creates a plain object from a CNETMsg_SpawnGroup_Load message. Also converts values to other types if specified.
     * @param message CNETMsg_SpawnGroup_Load
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SpawnGroup_Load, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SpawnGroup_Load to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SpawnGroup_Load
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_SpawnGroup_ManifestUpdate. */
export class CNETMsg_SpawnGroup_ManifestUpdate implements ICNETMsg_SpawnGroup_ManifestUpdate {

    /**
     * Constructs a new CNETMsg_SpawnGroup_ManifestUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SpawnGroup_ManifestUpdate);

    /** CNETMsg_SpawnGroup_ManifestUpdate spawngrouphandle. */
    public spawngrouphandle: number;

    /** CNETMsg_SpawnGroup_ManifestUpdate spawngroupmanifest. */
    public spawngroupmanifest: Uint8Array;

    /** CNETMsg_SpawnGroup_ManifestUpdate manifestincomplete. */
    public manifestincomplete: boolean;

    /**
     * Creates a new CNETMsg_SpawnGroup_ManifestUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SpawnGroup_ManifestUpdate instance
     */
    public static create(properties?: ICNETMsg_SpawnGroup_ManifestUpdate): CNETMsg_SpawnGroup_ManifestUpdate;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_ManifestUpdate message. Does not implicitly {@link CNETMsg_SpawnGroup_ManifestUpdate.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_ManifestUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SpawnGroup_ManifestUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_ManifestUpdate message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_ManifestUpdate.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_ManifestUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SpawnGroup_ManifestUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SpawnGroup_ManifestUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SpawnGroup_ManifestUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SpawnGroup_ManifestUpdate;

    /**
     * Decodes a CNETMsg_SpawnGroup_ManifestUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SpawnGroup_ManifestUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SpawnGroup_ManifestUpdate;

    /**
     * Verifies a CNETMsg_SpawnGroup_ManifestUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SpawnGroup_ManifestUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SpawnGroup_ManifestUpdate
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SpawnGroup_ManifestUpdate;

    /**
     * Creates a plain object from a CNETMsg_SpawnGroup_ManifestUpdate message. Also converts values to other types if specified.
     * @param message CNETMsg_SpawnGroup_ManifestUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SpawnGroup_ManifestUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SpawnGroup_ManifestUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SpawnGroup_ManifestUpdate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_SpawnGroup_SetCreationTick. */
export class CNETMsg_SpawnGroup_SetCreationTick implements ICNETMsg_SpawnGroup_SetCreationTick {

    /**
     * Constructs a new CNETMsg_SpawnGroup_SetCreationTick.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SpawnGroup_SetCreationTick);

    /** CNETMsg_SpawnGroup_SetCreationTick spawngrouphandle. */
    public spawngrouphandle: number;

    /** CNETMsg_SpawnGroup_SetCreationTick tickcount. */
    public tickcount: number;

    /** CNETMsg_SpawnGroup_SetCreationTick creationsequence. */
    public creationsequence: number;

    /**
     * Creates a new CNETMsg_SpawnGroup_SetCreationTick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SpawnGroup_SetCreationTick instance
     */
    public static create(properties?: ICNETMsg_SpawnGroup_SetCreationTick): CNETMsg_SpawnGroup_SetCreationTick;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_SetCreationTick message. Does not implicitly {@link CNETMsg_SpawnGroup_SetCreationTick.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_SetCreationTick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SpawnGroup_SetCreationTick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_SetCreationTick message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_SetCreationTick.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_SetCreationTick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SpawnGroup_SetCreationTick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SpawnGroup_SetCreationTick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SpawnGroup_SetCreationTick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SpawnGroup_SetCreationTick;

    /**
     * Decodes a CNETMsg_SpawnGroup_SetCreationTick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SpawnGroup_SetCreationTick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SpawnGroup_SetCreationTick;

    /**
     * Verifies a CNETMsg_SpawnGroup_SetCreationTick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SpawnGroup_SetCreationTick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SpawnGroup_SetCreationTick
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SpawnGroup_SetCreationTick;

    /**
     * Creates a plain object from a CNETMsg_SpawnGroup_SetCreationTick message. Also converts values to other types if specified.
     * @param message CNETMsg_SpawnGroup_SetCreationTick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SpawnGroup_SetCreationTick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SpawnGroup_SetCreationTick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SpawnGroup_SetCreationTick
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_SpawnGroup_Unload. */
export class CNETMsg_SpawnGroup_Unload implements ICNETMsg_SpawnGroup_Unload {

    /**
     * Constructs a new CNETMsg_SpawnGroup_Unload.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SpawnGroup_Unload);

    /** CNETMsg_SpawnGroup_Unload spawngrouphandle. */
    public spawngrouphandle: number;

    /** CNETMsg_SpawnGroup_Unload flags. */
    public flags: number;

    /** CNETMsg_SpawnGroup_Unload tickcount. */
    public tickcount: number;

    /**
     * Creates a new CNETMsg_SpawnGroup_Unload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SpawnGroup_Unload instance
     */
    public static create(properties?: ICNETMsg_SpawnGroup_Unload): CNETMsg_SpawnGroup_Unload;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_Unload message. Does not implicitly {@link CNETMsg_SpawnGroup_Unload.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_Unload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SpawnGroup_Unload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_Unload message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_Unload.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_Unload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SpawnGroup_Unload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SpawnGroup_Unload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SpawnGroup_Unload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SpawnGroup_Unload;

    /**
     * Decodes a CNETMsg_SpawnGroup_Unload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SpawnGroup_Unload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SpawnGroup_Unload;

    /**
     * Verifies a CNETMsg_SpawnGroup_Unload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SpawnGroup_Unload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SpawnGroup_Unload
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SpawnGroup_Unload;

    /**
     * Creates a plain object from a CNETMsg_SpawnGroup_Unload message. Also converts values to other types if specified.
     * @param message CNETMsg_SpawnGroup_Unload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SpawnGroup_Unload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SpawnGroup_Unload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SpawnGroup_Unload
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_SpawnGroup_LoadCompleted. */
export class CNETMsg_SpawnGroup_LoadCompleted implements ICNETMsg_SpawnGroup_LoadCompleted {

    /**
     * Constructs a new CNETMsg_SpawnGroup_LoadCompleted.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SpawnGroup_LoadCompleted);

    /** CNETMsg_SpawnGroup_LoadCompleted spawngrouphandle. */
    public spawngrouphandle: number;

    /**
     * Creates a new CNETMsg_SpawnGroup_LoadCompleted instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_SpawnGroup_LoadCompleted instance
     */
    public static create(properties?: ICNETMsg_SpawnGroup_LoadCompleted): CNETMsg_SpawnGroup_LoadCompleted;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_LoadCompleted message. Does not implicitly {@link CNETMsg_SpawnGroup_LoadCompleted.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_LoadCompleted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_SpawnGroup_LoadCompleted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_SpawnGroup_LoadCompleted message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_LoadCompleted.verify|verify} messages.
     * @param message CNETMsg_SpawnGroup_LoadCompleted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_SpawnGroup_LoadCompleted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_SpawnGroup_LoadCompleted message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SpawnGroup_LoadCompleted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SpawnGroup_LoadCompleted;

    /**
     * Decodes a CNETMsg_SpawnGroup_LoadCompleted message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_SpawnGroup_LoadCompleted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_SpawnGroup_LoadCompleted;

    /**
     * Verifies a CNETMsg_SpawnGroup_LoadCompleted message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_SpawnGroup_LoadCompleted message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_SpawnGroup_LoadCompleted
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_SpawnGroup_LoadCompleted;

    /**
     * Creates a plain object from a CNETMsg_SpawnGroup_LoadCompleted message. Also converts values to other types if specified.
     * @param message CNETMsg_SpawnGroup_LoadCompleted
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_SpawnGroup_LoadCompleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_SpawnGroup_LoadCompleted to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_SpawnGroup_LoadCompleted
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSVCMsg_GameSessionConfiguration. */
export class CSVCMsg_GameSessionConfiguration implements ICSVCMsg_GameSessionConfiguration {

    /**
     * Constructs a new CSVCMsg_GameSessionConfiguration.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_GameSessionConfiguration);

    /** CSVCMsg_GameSessionConfiguration isMultiplayer. */
    public isMultiplayer: boolean;

    /** CSVCMsg_GameSessionConfiguration isLoadsavegame. */
    public isLoadsavegame: boolean;

    /** CSVCMsg_GameSessionConfiguration isBackgroundMap. */
    public isBackgroundMap: boolean;

    /** CSVCMsg_GameSessionConfiguration isHeadless. */
    public isHeadless: boolean;

    /** CSVCMsg_GameSessionConfiguration minClientLimit. */
    public minClientLimit: number;

    /** CSVCMsg_GameSessionConfiguration maxClientLimit. */
    public maxClientLimit: number;

    /** CSVCMsg_GameSessionConfiguration maxClients. */
    public maxClients: number;

    /** CSVCMsg_GameSessionConfiguration tickInterval. */
    public tickInterval: number;

    /** CSVCMsg_GameSessionConfiguration hostname. */
    public hostname: string;

    /** CSVCMsg_GameSessionConfiguration savegamename. */
    public savegamename: string;

    /** CSVCMsg_GameSessionConfiguration s1Mapname. */
    public s1Mapname: string;

    /** CSVCMsg_GameSessionConfiguration gamemode. */
    public gamemode: string;

    /** CSVCMsg_GameSessionConfiguration serverIpAddress. */
    public serverIpAddress: string;

    /** CSVCMsg_GameSessionConfiguration data. */
    public data: Uint8Array;

    /** CSVCMsg_GameSessionConfiguration isLocalonly. */
    public isLocalonly: boolean;

    /** CSVCMsg_GameSessionConfiguration noSteamServer. */
    public noSteamServer: boolean;

    /** CSVCMsg_GameSessionConfiguration isTransition. */
    public isTransition: boolean;

    /** CSVCMsg_GameSessionConfiguration previouslevel. */
    public previouslevel: string;

    /** CSVCMsg_GameSessionConfiguration landmarkname. */
    public landmarkname: string;

    /**
     * Creates a new CSVCMsg_GameSessionConfiguration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSVCMsg_GameSessionConfiguration instance
     */
    public static create(properties?: ICSVCMsg_GameSessionConfiguration): CSVCMsg_GameSessionConfiguration;

    /**
     * Encodes the specified CSVCMsg_GameSessionConfiguration message. Does not implicitly {@link CSVCMsg_GameSessionConfiguration.verify|verify} messages.
     * @param message CSVCMsg_GameSessionConfiguration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSVCMsg_GameSessionConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSVCMsg_GameSessionConfiguration message, length delimited. Does not implicitly {@link CSVCMsg_GameSessionConfiguration.verify|verify} messages.
     * @param message CSVCMsg_GameSessionConfiguration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSVCMsg_GameSessionConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSVCMsg_GameSessionConfiguration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_GameSessionConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameSessionConfiguration;

    /**
     * Decodes a CSVCMsg_GameSessionConfiguration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSVCMsg_GameSessionConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSVCMsg_GameSessionConfiguration;

    /**
     * Verifies a CSVCMsg_GameSessionConfiguration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSVCMsg_GameSessionConfiguration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSVCMsg_GameSessionConfiguration
     */
    public static fromObject(object: { [k: string]: any }): CSVCMsg_GameSessionConfiguration;

    /**
     * Creates a plain object from a CSVCMsg_GameSessionConfiguration message. Also converts values to other types if specified.
     * @param message CSVCMsg_GameSessionConfiguration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSVCMsg_GameSessionConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSVCMsg_GameSessionConfiguration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSVCMsg_GameSessionConfiguration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CNETMsg_DebugOverlay. */
export class CNETMsg_DebugOverlay implements ICNETMsg_DebugOverlay {

    /**
     * Constructs a new CNETMsg_DebugOverlay.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_DebugOverlay);

    /** CNETMsg_DebugOverlay etype. */
    public etype: number;

    /** CNETMsg_DebugOverlay vectors. */
    public vectors: ICMsgVector[];

    /** CNETMsg_DebugOverlay colors. */
    public colors: ICMsgRGBA[];

    /** CNETMsg_DebugOverlay dimensions. */
    public dimensions: number[];

    /** CNETMsg_DebugOverlay times. */
    public times: number[];

    /** CNETMsg_DebugOverlay bools. */
    public bools: boolean[];

    /** CNETMsg_DebugOverlay uint64s. */
    public uint64s: (number|Long)[];

    /** CNETMsg_DebugOverlay strings. */
    public strings: string[];

    /**
     * Creates a new CNETMsg_DebugOverlay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CNETMsg_DebugOverlay instance
     */
    public static create(properties?: ICNETMsg_DebugOverlay): CNETMsg_DebugOverlay;

    /**
     * Encodes the specified CNETMsg_DebugOverlay message. Does not implicitly {@link CNETMsg_DebugOverlay.verify|verify} messages.
     * @param message CNETMsg_DebugOverlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICNETMsg_DebugOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CNETMsg_DebugOverlay message, length delimited. Does not implicitly {@link CNETMsg_DebugOverlay.verify|verify} messages.
     * @param message CNETMsg_DebugOverlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICNETMsg_DebugOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CNETMsg_DebugOverlay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_DebugOverlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_DebugOverlay;

    /**
     * Decodes a CNETMsg_DebugOverlay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CNETMsg_DebugOverlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CNETMsg_DebugOverlay;

    /**
     * Verifies a CNETMsg_DebugOverlay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CNETMsg_DebugOverlay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CNETMsg_DebugOverlay
     */
    public static fromObject(object: { [k: string]: any }): CNETMsg_DebugOverlay;

    /**
     * Creates a plain object from a CNETMsg_DebugOverlay message. Also converts values to other types if specified.
     * @param message CNETMsg_DebugOverlay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CNETMsg_DebugOverlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CNETMsg_DebugOverlay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CNETMsg_DebugOverlay
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ENetworkDisconnectionReason enum. */
export enum ENetworkDisconnectionReason {
    NETWORK_DISCONNECT_INVALID = 0,
    NETWORK_DISCONNECT_SHUTDOWN = 1,
    NETWORK_DISCONNECT_DISCONNECT_BY_USER = 2,
    NETWORK_DISCONNECT_DISCONNECT_BY_SERVER = 3,
    NETWORK_DISCONNECT_LOST = 4,
    NETWORK_DISCONNECT_OVERFLOW = 5,
    NETWORK_DISCONNECT_STEAM_BANNED = 6,
    NETWORK_DISCONNECT_STEAM_INUSE = 7,
    NETWORK_DISCONNECT_STEAM_TICKET = 8,
    NETWORK_DISCONNECT_STEAM_LOGON = 9,
    NETWORK_DISCONNECT_STEAM_AUTHCANCELLED = 10,
    NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED = 11,
    NETWORK_DISCONNECT_STEAM_AUTHINVALID = 12,
    NETWORK_DISCONNECT_STEAM_VACBANSTATE = 13,
    NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE = 14,
    NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT = 15,
    NETWORK_DISCONNECT_STEAM_DROPPED = 16,
    NETWORK_DISCONNECT_STEAM_OWNERSHIP = 17,
    NETWORK_DISCONNECT_SERVERINFO_OVERFLOW = 18,
    NETWORK_DISCONNECT_TICKMSG_OVERFLOW = 19,
    NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW = 20,
    NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW = 21,
    NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW = 22,
    NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW = 23,
    NETWORK_DISCONNECT_SNAPSHOTOVERFLOW = 24,
    NETWORK_DISCONNECT_SNAPSHOTERROR = 25,
    NETWORK_DISCONNECT_RELIABLEOVERFLOW = 26,
    NETWORK_DISCONNECT_BADDELTATICK = 27,
    NETWORK_DISCONNECT_NOMORESPLITS = 28,
    NETWORK_DISCONNECT_TIMEDOUT = 29,
    NETWORK_DISCONNECT_DISCONNECTED = 30,
    NETWORK_DISCONNECT_LEAVINGSPLIT = 31,
    NETWORK_DISCONNECT_DIFFERENTCLASSTABLES = 32,
    NETWORK_DISCONNECT_BADRELAYPASSWORD = 33,
    NETWORK_DISCONNECT_BADSPECTATORPASSWORD = 34,
    NETWORK_DISCONNECT_HLTVRESTRICTED = 35,
    NETWORK_DISCONNECT_NOSPECTATORS = 36,
    NETWORK_DISCONNECT_HLTVUNAVAILABLE = 37,
    NETWORK_DISCONNECT_HLTVSTOP = 38,
    NETWORK_DISCONNECT_KICKED = 39,
    NETWORK_DISCONNECT_BANADDED = 40,
    NETWORK_DISCONNECT_KICKBANADDED = 41,
    NETWORK_DISCONNECT_HLTVDIRECT = 42,
    NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA = 43,
    NETWORK_DISCONNECT_PURESERVER_MISMATCH = 44,
    NETWORK_DISCONNECT_USERCMD = 45,
    NETWORK_DISCONNECT_REJECTED_BY_GAME = 46,
    NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR = 47,
    NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR = 48,
    NETWORK_DISCONNECT_BAD_SERVER_PASSWORD = 49,
    NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION = 50,
    NETWORK_DISCONNECT_CONNECTION_FAILURE = 51,
    NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS = 52,
    NETWORK_DISCONNECT_RECONNECTION = 53,
    NETWORK_DISCONNECT_LOOPSHUTDOWN = 54,
    NETWORK_DISCONNECT_LOOPDEACTIVATE = 55,
    NETWORK_DISCONNECT_HOST_ENDGAME = 56,
    NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE = 57,
    NETWORK_DISCONNECT_CREATE_SERVER_FAILED = 58,
    NETWORK_DISCONNECT_EXITING = 59,
    NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE = 60,
    NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY = 61,
    NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL = 62,
    NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP = 63,
    NETWORK_DISCONNECT_CLIENT_NO_MAP = 64,
    NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP = 65,
    NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM = 66,
    NETWORK_DISCONNECT_STEAM_DENY_MISC = 67,
    NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT = 68,
    NETWORK_DISCONNECT_SERVER_SHUTDOWN = 69,
    NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE = 71,
    NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT = 72,
    NETWORK_DISCONNECT_SERVER_INCOMPATIBLE = 73,
    NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS = 74,
    NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY = 75,
    NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG = 76,
    NETWORK_DISCONNECT_LOCALPROBLEM_OTHER = 77,
    NETWORK_DISCONNECT_REMOTE_TIMEOUT = 79,
    NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING = 80,
    NETWORK_DISCONNECT_REMOTE_OTHER = 81,
    NETWORK_DISCONNECT_REMOTE_BADCRYPT = 82,
    NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED = 83,
    NETWORK_DISCONNECT_UNUSUAL = 84,
    NETWORK_DISCONNECT_INTERNAL_ERROR = 85,
    NETWORK_DISCONNECT_REJECT_BADCHALLENGE = 128,
    NETWORK_DISCONNECT_REJECT_NOLOBBY = 129,
    NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP = 130,
    NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER = 131,
    NETWORK_DISCONNECT_REJECT_HIDDEN_GAME = 132,
    NETWORK_DISCONNECT_REJECT_LANRESTRICT = 133,
    NETWORK_DISCONNECT_REJECT_BADPASSWORD = 134,
    NETWORK_DISCONNECT_REJECT_SERVERFULL = 135,
    NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION = 136,
    NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL = 137,
    NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY = 138,
    NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY = 139,
    NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH = 140,
    NETWORK_DISCONNECT_REJECT_OLDPROTOCOL = 141,
    NETWORK_DISCONNECT_REJECT_NEWPROTOCOL = 142,
    NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION = 143,
    NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN = 144,
    NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN = 145,
    NETWORK_DISCONNECT_REJECT_STEAM = 146,
    NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED = 147,
    NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID = 148,
    NETWORK_DISCONNECT_REJECT_BANNED = 149,
    NETWORK_DISCONNECT_KICKED_TEAMKILLING = 150,
    NETWORK_DISCONNECT_KICKED_TK_START = 151,
    NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT = 152,
    NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT = 153,
    NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN = 154,
    NETWORK_DISCONNECT_KICKED_TEAMHURTING = 155,
    NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING = 156,
    NETWORK_DISCONNECT_KICKED_VOTEDOFF = 157,
    NETWORK_DISCONNECT_KICKED_IDLE = 158,
    NETWORK_DISCONNECT_KICKED_SUICIDE = 159,
    NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN = 160,
    NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET = 161
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .networkConnectionToken */
            ".networkConnectionToken"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** EnumValueOptions .networkConnectionToken. */
            public networkConnectionToken: string;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
