import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CGameNetworkingUI_GlobalState. */
export interface ICGameNetworkingUI_GlobalState {
}

/** Represents a CGameNetworkingUI_GlobalState. */
export class CGameNetworkingUI_GlobalState implements ICGameNetworkingUI_GlobalState {

    /**
     * Constructs a new CGameNetworkingUI_GlobalState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGameNetworkingUI_GlobalState);

    /**
     * Creates a new CGameNetworkingUI_GlobalState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGameNetworkingUI_GlobalState instance
     */
    public static create(properties?: ICGameNetworkingUI_GlobalState): CGameNetworkingUI_GlobalState;

    /**
     * Encodes the specified CGameNetworkingUI_GlobalState message. Does not implicitly {@link CGameNetworkingUI_GlobalState.verify|verify} messages.
     * @param message CGameNetworkingUI_GlobalState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGameNetworkingUI_GlobalState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGameNetworkingUI_GlobalState message, length delimited. Does not implicitly {@link CGameNetworkingUI_GlobalState.verify|verify} messages.
     * @param message CGameNetworkingUI_GlobalState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGameNetworkingUI_GlobalState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGameNetworkingUI_GlobalState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGameNetworkingUI_GlobalState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameNetworkingUI_GlobalState;

    /**
     * Decodes a CGameNetworkingUI_GlobalState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGameNetworkingUI_GlobalState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameNetworkingUI_GlobalState;

    /**
     * Verifies a CGameNetworkingUI_GlobalState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGameNetworkingUI_GlobalState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGameNetworkingUI_GlobalState
     */
    public static fromObject(object: { [k: string]: any }): CGameNetworkingUI_GlobalState;

    /**
     * Creates a plain object from a CGameNetworkingUI_GlobalState message. Also converts values to other types if specified.
     * @param message CGameNetworkingUI_GlobalState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGameNetworkingUI_GlobalState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGameNetworkingUI_GlobalState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGameNetworkingUI_GlobalState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CGameNetworkingUI_ConnectionState. */
export interface ICGameNetworkingUI_ConnectionState {

    /** CGameNetworkingUI_ConnectionState connectionKey */
    connectionKey?: (string|null);

    /** CGameNetworkingUI_ConnectionState appid */
    appid?: (number|null);

    /** CGameNetworkingUI_ConnectionState connectionIdLocal */
    connectionIdLocal?: (number|null);

    /** CGameNetworkingUI_ConnectionState identityLocal */
    identityLocal?: (string|null);

    /** CGameNetworkingUI_ConnectionState identityRemote */
    identityRemote?: (string|null);

    /** CGameNetworkingUI_ConnectionState connectionState */
    connectionState?: (number|null);

    /** CGameNetworkingUI_ConnectionState startTime */
    startTime?: (number|null);

    /** CGameNetworkingUI_ConnectionState closeTime */
    closeTime?: (number|null);

    /** CGameNetworkingUI_ConnectionState closeReason */
    closeReason?: (number|null);

    /** CGameNetworkingUI_ConnectionState closeMessage */
    closeMessage?: (string|null);

    /** CGameNetworkingUI_ConnectionState statusLocToken */
    statusLocToken?: (string|null);

    /** CGameNetworkingUI_ConnectionState transportKind */
    transportKind?: (number|null);

    /** CGameNetworkingUI_ConnectionState sdrpopidLocal */
    sdrpopidLocal?: (string|null);

    /** CGameNetworkingUI_ConnectionState sdrpopidRemote */
    sdrpopidRemote?: (string|null);

    /** CGameNetworkingUI_ConnectionState addressRemote */
    addressRemote?: (string|null);

    /** CGameNetworkingUI_ConnectionState p2pRouting */
    p2pRouting?: (ICMsgSteamDatagramP2PRoutingSummary|null);

    /** CGameNetworkingUI_ConnectionState pingInterior */
    pingInterior?: (number|null);

    /** CGameNetworkingUI_ConnectionState pingRemoteFront */
    pingRemoteFront?: (number|null);

    /** CGameNetworkingUI_ConnectionState pingDefaultInternetRoute */
    pingDefaultInternetRoute?: (number|null);

    /** CGameNetworkingUI_ConnectionState e2eQualityLocal */
    e2eQualityLocal?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState e2eQualityRemote */
    e2eQualityRemote?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState e2eQualityRemoteInstantaneousTime */
    e2eQualityRemoteInstantaneousTime?: (number|Long|null);

    /** CGameNetworkingUI_ConnectionState e2eQualityRemoteLifetimeTime */
    e2eQualityRemoteLifetimeTime?: (number|Long|null);

    /** CGameNetworkingUI_ConnectionState frontQualityLocal */
    frontQualityLocal?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState frontQualityRemote */
    frontQualityRemote?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState frontQualityRemoteInstantaneousTime */
    frontQualityRemoteInstantaneousTime?: (number|Long|null);

    /** CGameNetworkingUI_ConnectionState frontQualityRemoteLifetimeTime */
    frontQualityRemoteLifetimeTime?: (number|Long|null);
}

/** Represents a CGameNetworkingUI_ConnectionState. */
export class CGameNetworkingUI_ConnectionState implements ICGameNetworkingUI_ConnectionState {

    /**
     * Constructs a new CGameNetworkingUI_ConnectionState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGameNetworkingUI_ConnectionState);

    /** CGameNetworkingUI_ConnectionState connectionKey. */
    public connectionKey: string;

    /** CGameNetworkingUI_ConnectionState appid. */
    public appid: number;

    /** CGameNetworkingUI_ConnectionState connectionIdLocal. */
    public connectionIdLocal: number;

    /** CGameNetworkingUI_ConnectionState identityLocal. */
    public identityLocal: string;

    /** CGameNetworkingUI_ConnectionState identityRemote. */
    public identityRemote: string;

    /** CGameNetworkingUI_ConnectionState connectionState. */
    public connectionState: number;

    /** CGameNetworkingUI_ConnectionState startTime. */
    public startTime: number;

    /** CGameNetworkingUI_ConnectionState closeTime. */
    public closeTime: number;

    /** CGameNetworkingUI_ConnectionState closeReason. */
    public closeReason: number;

    /** CGameNetworkingUI_ConnectionState closeMessage. */
    public closeMessage: string;

    /** CGameNetworkingUI_ConnectionState statusLocToken. */
    public statusLocToken: string;

    /** CGameNetworkingUI_ConnectionState transportKind. */
    public transportKind: number;

    /** CGameNetworkingUI_ConnectionState sdrpopidLocal. */
    public sdrpopidLocal: string;

    /** CGameNetworkingUI_ConnectionState sdrpopidRemote. */
    public sdrpopidRemote: string;

    /** CGameNetworkingUI_ConnectionState addressRemote. */
    public addressRemote: string;

    /** CGameNetworkingUI_ConnectionState p2pRouting. */
    public p2pRouting?: (ICMsgSteamDatagramP2PRoutingSummary|null);

    /** CGameNetworkingUI_ConnectionState pingInterior. */
    public pingInterior: number;

    /** CGameNetworkingUI_ConnectionState pingRemoteFront. */
    public pingRemoteFront: number;

    /** CGameNetworkingUI_ConnectionState pingDefaultInternetRoute. */
    public pingDefaultInternetRoute: number;

    /** CGameNetworkingUI_ConnectionState e2eQualityLocal. */
    public e2eQualityLocal?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState e2eQualityRemote. */
    public e2eQualityRemote?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState e2eQualityRemoteInstantaneousTime. */
    public e2eQualityRemoteInstantaneousTime: (number|Long);

    /** CGameNetworkingUI_ConnectionState e2eQualityRemoteLifetimeTime. */
    public e2eQualityRemoteLifetimeTime: (number|Long);

    /** CGameNetworkingUI_ConnectionState frontQualityLocal. */
    public frontQualityLocal?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState frontQualityRemote. */
    public frontQualityRemote?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CGameNetworkingUI_ConnectionState frontQualityRemoteInstantaneousTime. */
    public frontQualityRemoteInstantaneousTime: (number|Long);

    /** CGameNetworkingUI_ConnectionState frontQualityRemoteLifetimeTime. */
    public frontQualityRemoteLifetimeTime: (number|Long);

    /**
     * Creates a new CGameNetworkingUI_ConnectionState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGameNetworkingUI_ConnectionState instance
     */
    public static create(properties?: ICGameNetworkingUI_ConnectionState): CGameNetworkingUI_ConnectionState;

    /**
     * Encodes the specified CGameNetworkingUI_ConnectionState message. Does not implicitly {@link CGameNetworkingUI_ConnectionState.verify|verify} messages.
     * @param message CGameNetworkingUI_ConnectionState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGameNetworkingUI_ConnectionState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGameNetworkingUI_ConnectionState message, length delimited. Does not implicitly {@link CGameNetworkingUI_ConnectionState.verify|verify} messages.
     * @param message CGameNetworkingUI_ConnectionState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGameNetworkingUI_ConnectionState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGameNetworkingUI_ConnectionState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGameNetworkingUI_ConnectionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameNetworkingUI_ConnectionState;

    /**
     * Decodes a CGameNetworkingUI_ConnectionState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGameNetworkingUI_ConnectionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameNetworkingUI_ConnectionState;

    /**
     * Verifies a CGameNetworkingUI_ConnectionState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGameNetworkingUI_ConnectionState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGameNetworkingUI_ConnectionState
     */
    public static fromObject(object: { [k: string]: any }): CGameNetworkingUI_ConnectionState;

    /**
     * Creates a plain object from a CGameNetworkingUI_ConnectionState message. Also converts values to other types if specified.
     * @param message CGameNetworkingUI_ConnectionState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGameNetworkingUI_ConnectionState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGameNetworkingUI_ConnectionState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGameNetworkingUI_ConnectionState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CGameNetworkingUI_Message. */
export interface ICGameNetworkingUI_Message {

    /** CGameNetworkingUI_Message connectionState */
    connectionState?: (ICGameNetworkingUI_ConnectionState[]|null);
}

/** Represents a CGameNetworkingUI_Message. */
export class CGameNetworkingUI_Message implements ICGameNetworkingUI_Message {

    /**
     * Constructs a new CGameNetworkingUI_Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGameNetworkingUI_Message);

    /** CGameNetworkingUI_Message connectionState. */
    public connectionState: ICGameNetworkingUI_ConnectionState[];

    /**
     * Creates a new CGameNetworkingUI_Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGameNetworkingUI_Message instance
     */
    public static create(properties?: ICGameNetworkingUI_Message): CGameNetworkingUI_Message;

    /**
     * Encodes the specified CGameNetworkingUI_Message message. Does not implicitly {@link CGameNetworkingUI_Message.verify|verify} messages.
     * @param message CGameNetworkingUI_Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGameNetworkingUI_Message, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGameNetworkingUI_Message message, length delimited. Does not implicitly {@link CGameNetworkingUI_Message.verify|verify} messages.
     * @param message CGameNetworkingUI_Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGameNetworkingUI_Message, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGameNetworkingUI_Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGameNetworkingUI_Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameNetworkingUI_Message;

    /**
     * Decodes a CGameNetworkingUI_Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGameNetworkingUI_Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameNetworkingUI_Message;

    /**
     * Verifies a CGameNetworkingUI_Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGameNetworkingUI_Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGameNetworkingUI_Message
     */
    public static fromObject(object: { [k: string]: any }): CGameNetworkingUI_Message;

    /**
     * Creates a plain object from a CGameNetworkingUI_Message message. Also converts values to other types if specified.
     * @param message CGameNetworkingUI_Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGameNetworkingUI_Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGameNetworkingUI_Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGameNetworkingUI_Message
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CGameNetworkingUI_ConnectionSummary. */
export interface ICGameNetworkingUI_ConnectionSummary {

    /** CGameNetworkingUI_ConnectionSummary transportKind */
    transportKind?: (number|null);

    /** CGameNetworkingUI_ConnectionSummary connectionState */
    connectionState?: (number|null);

    /** CGameNetworkingUI_ConnectionSummary sdrpopLocal */
    sdrpopLocal?: (string|null);

    /** CGameNetworkingUI_ConnectionSummary sdrpopRemote */
    sdrpopRemote?: (string|null);

    /** CGameNetworkingUI_ConnectionSummary pingMs */
    pingMs?: (number|null);

    /** CGameNetworkingUI_ConnectionSummary packetLoss */
    packetLoss?: (number|null);

    /** CGameNetworkingUI_ConnectionSummary pingDefaultInternetRoute */
    pingDefaultInternetRoute?: (number|null);

    /** CGameNetworkingUI_ConnectionSummary ipWasShared */
    ipWasShared?: (boolean|null);
}

/** Represents a CGameNetworkingUI_ConnectionSummary. */
export class CGameNetworkingUI_ConnectionSummary implements ICGameNetworkingUI_ConnectionSummary {

    /**
     * Constructs a new CGameNetworkingUI_ConnectionSummary.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGameNetworkingUI_ConnectionSummary);

    /** CGameNetworkingUI_ConnectionSummary transportKind. */
    public transportKind: number;

    /** CGameNetworkingUI_ConnectionSummary connectionState. */
    public connectionState: number;

    /** CGameNetworkingUI_ConnectionSummary sdrpopLocal. */
    public sdrpopLocal: string;

    /** CGameNetworkingUI_ConnectionSummary sdrpopRemote. */
    public sdrpopRemote: string;

    /** CGameNetworkingUI_ConnectionSummary pingMs. */
    public pingMs: number;

    /** CGameNetworkingUI_ConnectionSummary packetLoss. */
    public packetLoss: number;

    /** CGameNetworkingUI_ConnectionSummary pingDefaultInternetRoute. */
    public pingDefaultInternetRoute: number;

    /** CGameNetworkingUI_ConnectionSummary ipWasShared. */
    public ipWasShared: boolean;

    /**
     * Creates a new CGameNetworkingUI_ConnectionSummary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGameNetworkingUI_ConnectionSummary instance
     */
    public static create(properties?: ICGameNetworkingUI_ConnectionSummary): CGameNetworkingUI_ConnectionSummary;

    /**
     * Encodes the specified CGameNetworkingUI_ConnectionSummary message. Does not implicitly {@link CGameNetworkingUI_ConnectionSummary.verify|verify} messages.
     * @param message CGameNetworkingUI_ConnectionSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGameNetworkingUI_ConnectionSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGameNetworkingUI_ConnectionSummary message, length delimited. Does not implicitly {@link CGameNetworkingUI_ConnectionSummary.verify|verify} messages.
     * @param message CGameNetworkingUI_ConnectionSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGameNetworkingUI_ConnectionSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGameNetworkingUI_ConnectionSummary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGameNetworkingUI_ConnectionSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameNetworkingUI_ConnectionSummary;

    /**
     * Decodes a CGameNetworkingUI_ConnectionSummary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGameNetworkingUI_ConnectionSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameNetworkingUI_ConnectionSummary;

    /**
     * Verifies a CGameNetworkingUI_ConnectionSummary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGameNetworkingUI_ConnectionSummary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGameNetworkingUI_ConnectionSummary
     */
    public static fromObject(object: { [k: string]: any }): CGameNetworkingUI_ConnectionSummary;

    /**
     * Creates a plain object from a CGameNetworkingUI_ConnectionSummary message. Also converts values to other types if specified.
     * @param message CGameNetworkingUI_ConnectionSummary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGameNetworkingUI_ConnectionSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGameNetworkingUI_ConnectionSummary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGameNetworkingUI_ConnectionSummary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CGameNetworkingUI_AppSummary. */
export interface ICGameNetworkingUI_AppSummary {

    /** CGameNetworkingUI_AppSummary appid */
    appid?: (number|null);

    /** CGameNetworkingUI_AppSummary ipWasSharedWithFriend */
    ipWasSharedWithFriend?: (boolean|null);

    /** CGameNetworkingUI_AppSummary ipWasSharedWithNonfriend */
    ipWasSharedWithNonfriend?: (boolean|null);

    /** CGameNetworkingUI_AppSummary activeConnections */
    activeConnections?: (number|null);

    /** CGameNetworkingUI_AppSummary mainCxn */
    mainCxn?: (ICGameNetworkingUI_ConnectionSummary|null);
}

/** Represents a CGameNetworkingUI_AppSummary. */
export class CGameNetworkingUI_AppSummary implements ICGameNetworkingUI_AppSummary {

    /**
     * Constructs a new CGameNetworkingUI_AppSummary.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGameNetworkingUI_AppSummary);

    /** CGameNetworkingUI_AppSummary appid. */
    public appid: number;

    /** CGameNetworkingUI_AppSummary ipWasSharedWithFriend. */
    public ipWasSharedWithFriend: boolean;

    /** CGameNetworkingUI_AppSummary ipWasSharedWithNonfriend. */
    public ipWasSharedWithNonfriend: boolean;

    /** CGameNetworkingUI_AppSummary activeConnections. */
    public activeConnections: number;

    /** CGameNetworkingUI_AppSummary mainCxn. */
    public mainCxn?: (ICGameNetworkingUI_ConnectionSummary|null);

    /**
     * Creates a new CGameNetworkingUI_AppSummary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGameNetworkingUI_AppSummary instance
     */
    public static create(properties?: ICGameNetworkingUI_AppSummary): CGameNetworkingUI_AppSummary;

    /**
     * Encodes the specified CGameNetworkingUI_AppSummary message. Does not implicitly {@link CGameNetworkingUI_AppSummary.verify|verify} messages.
     * @param message CGameNetworkingUI_AppSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGameNetworkingUI_AppSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGameNetworkingUI_AppSummary message, length delimited. Does not implicitly {@link CGameNetworkingUI_AppSummary.verify|verify} messages.
     * @param message CGameNetworkingUI_AppSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGameNetworkingUI_AppSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGameNetworkingUI_AppSummary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGameNetworkingUI_AppSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGameNetworkingUI_AppSummary;

    /**
     * Decodes a CGameNetworkingUI_AppSummary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGameNetworkingUI_AppSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGameNetworkingUI_AppSummary;

    /**
     * Verifies a CGameNetworkingUI_AppSummary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGameNetworkingUI_AppSummary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGameNetworkingUI_AppSummary
     */
    public static fromObject(object: { [k: string]: any }): CGameNetworkingUI_AppSummary;

    /**
     * Creates a plain object from a CGameNetworkingUI_AppSummary message. Also converts values to other types if specified.
     * @param message CGameNetworkingUI_AppSummary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGameNetworkingUI_AppSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGameNetworkingUI_AppSummary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGameNetworkingUI_AppSummary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ESteamNetworkingSocketsCipher enum. */
export enum ESteamNetworkingSocketsCipher {
    k_ESteamNetworkingSocketsCipher_INVALID = 0,
    k_ESteamNetworkingSocketsCipher_NULL = 1,
    k_ESteamNetworkingSocketsCipher_AES_256_GCM = 2
}

/** Represents a CMsgSteamDatagramSessionCryptInfo. */
export class CMsgSteamDatagramSessionCryptInfo implements ICMsgSteamDatagramSessionCryptInfo {

    /**
     * Constructs a new CMsgSteamDatagramSessionCryptInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramSessionCryptInfo);

    /** CMsgSteamDatagramSessionCryptInfo keyType. */
    public keyType: CMsgSteamDatagramSessionCryptInfo.EKeyType;

    /** CMsgSteamDatagramSessionCryptInfo keyData. */
    public keyData: Uint8Array;

    /** CMsgSteamDatagramSessionCryptInfo nonce. */
    public nonce: (number|Long);

    /** CMsgSteamDatagramSessionCryptInfo protocolVersion. */
    public protocolVersion: number;

    /** CMsgSteamDatagramSessionCryptInfo ciphers. */
    public ciphers: ESteamNetworkingSocketsCipher[];

    /**
     * Creates a new CMsgSteamDatagramSessionCryptInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramSessionCryptInfo instance
     */
    public static create(properties?: ICMsgSteamDatagramSessionCryptInfo): CMsgSteamDatagramSessionCryptInfo;

    /**
     * Encodes the specified CMsgSteamDatagramSessionCryptInfo message. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfo.verify|verify} messages.
     * @param message CMsgSteamDatagramSessionCryptInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramSessionCryptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramSessionCryptInfo message, length delimited. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfo.verify|verify} messages.
     * @param message CMsgSteamDatagramSessionCryptInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramSessionCryptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramSessionCryptInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramSessionCryptInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramSessionCryptInfo;

    /**
     * Decodes a CMsgSteamDatagramSessionCryptInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramSessionCryptInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramSessionCryptInfo;

    /**
     * Verifies a CMsgSteamDatagramSessionCryptInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramSessionCryptInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramSessionCryptInfo
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramSessionCryptInfo;

    /**
     * Creates a plain object from a CMsgSteamDatagramSessionCryptInfo message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramSessionCryptInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramSessionCryptInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramSessionCryptInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramSessionCryptInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramSessionCryptInfo {

    /** EKeyType enum. */
    enum EKeyType {
        INVALID = 0,
        CURVE25519 = 1
    }
}

/** Represents a CMsgSteamDatagramSessionCryptInfoSigned. */
export class CMsgSteamDatagramSessionCryptInfoSigned implements ICMsgSteamDatagramSessionCryptInfoSigned {

    /**
     * Constructs a new CMsgSteamDatagramSessionCryptInfoSigned.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramSessionCryptInfoSigned);

    /** CMsgSteamDatagramSessionCryptInfoSigned info. */
    public info: Uint8Array;

    /** CMsgSteamDatagramSessionCryptInfoSigned signature. */
    public signature: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramSessionCryptInfoSigned instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramSessionCryptInfoSigned instance
     */
    public static create(properties?: ICMsgSteamDatagramSessionCryptInfoSigned): CMsgSteamDatagramSessionCryptInfoSigned;

    /**
     * Encodes the specified CMsgSteamDatagramSessionCryptInfoSigned message. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfoSigned.verify|verify} messages.
     * @param message CMsgSteamDatagramSessionCryptInfoSigned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramSessionCryptInfoSigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramSessionCryptInfoSigned message, length delimited. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfoSigned.verify|verify} messages.
     * @param message CMsgSteamDatagramSessionCryptInfoSigned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramSessionCryptInfoSigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramSessionCryptInfoSigned message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramSessionCryptInfoSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramSessionCryptInfoSigned;

    /**
     * Decodes a CMsgSteamDatagramSessionCryptInfoSigned message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramSessionCryptInfoSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramSessionCryptInfoSigned;

    /**
     * Verifies a CMsgSteamDatagramSessionCryptInfoSigned message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramSessionCryptInfoSigned message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramSessionCryptInfoSigned
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramSessionCryptInfoSigned;

    /**
     * Creates a plain object from a CMsgSteamDatagramSessionCryptInfoSigned message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramSessionCryptInfoSigned
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramSessionCryptInfoSigned, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramSessionCryptInfoSigned to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramSessionCryptInfoSigned
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramDiagnostic. */
export class CMsgSteamDatagramDiagnostic implements ICMsgSteamDatagramDiagnostic {

    /**
     * Constructs a new CMsgSteamDatagramDiagnostic.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramDiagnostic);

    /** CMsgSteamDatagramDiagnostic severity. */
    public severity: number;

    /** CMsgSteamDatagramDiagnostic text. */
    public text: string;

    /**
     * Creates a new CMsgSteamDatagramDiagnostic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramDiagnostic instance
     */
    public static create(properties?: ICMsgSteamDatagramDiagnostic): CMsgSteamDatagramDiagnostic;

    /**
     * Encodes the specified CMsgSteamDatagramDiagnostic message. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
     * @param message CMsgSteamDatagramDiagnostic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramDiagnostic message, length delimited. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
     * @param message CMsgSteamDatagramDiagnostic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramDiagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramDiagnostic;

    /**
     * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramDiagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramDiagnostic;

    /**
     * Verifies a CMsgSteamDatagramDiagnostic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramDiagnostic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramDiagnostic
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramDiagnostic;

    /**
     * Creates a plain object from a CMsgSteamDatagramDiagnostic message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramDiagnostic
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramDiagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramDiagnostic to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramDiagnostic
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramLinkInstantaneousStats. */
export class CMsgSteamDatagramLinkInstantaneousStats implements ICMsgSteamDatagramLinkInstantaneousStats {

    /**
     * Constructs a new CMsgSteamDatagramLinkInstantaneousStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramLinkInstantaneousStats);

    /** CMsgSteamDatagramLinkInstantaneousStats outPacketsPerSecX10. */
    public outPacketsPerSecX10: number;

    /** CMsgSteamDatagramLinkInstantaneousStats outBytesPerSec. */
    public outBytesPerSec: number;

    /** CMsgSteamDatagramLinkInstantaneousStats inPacketsPerSecX10. */
    public inPacketsPerSecX10: number;

    /** CMsgSteamDatagramLinkInstantaneousStats inBytesPerSec. */
    public inBytesPerSec: number;

    /** CMsgSteamDatagramLinkInstantaneousStats pingMs. */
    public pingMs: number;

    /** CMsgSteamDatagramLinkInstantaneousStats packetsDroppedPct. */
    public packetsDroppedPct: number;

    /** CMsgSteamDatagramLinkInstantaneousStats packetsWeirdSequencePct. */
    public packetsWeirdSequencePct: number;

    /** CMsgSteamDatagramLinkInstantaneousStats peakJitterUsec. */
    public peakJitterUsec: number;

    /**
     * Creates a new CMsgSteamDatagramLinkInstantaneousStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramLinkInstantaneousStats instance
     */
    public static create(properties?: ICMsgSteamDatagramLinkInstantaneousStats): CMsgSteamDatagramLinkInstantaneousStats;

    /**
     * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
     * @param message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramLinkInstantaneousStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
     * @param message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramLinkInstantaneousStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramLinkInstantaneousStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramLinkInstantaneousStats;

    /**
     * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramLinkInstantaneousStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramLinkInstantaneousStats;

    /**
     * Verifies a CMsgSteamDatagramLinkInstantaneousStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramLinkInstantaneousStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramLinkInstantaneousStats
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramLinkInstantaneousStats;

    /**
     * Creates a plain object from a CMsgSteamDatagramLinkInstantaneousStats message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramLinkInstantaneousStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramLinkInstantaneousStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramLinkInstantaneousStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramLinkInstantaneousStats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramLinkLifetimeStats. */
export class CMsgSteamDatagramLinkLifetimeStats implements ICMsgSteamDatagramLinkLifetimeStats {

    /**
     * Constructs a new CMsgSteamDatagramLinkLifetimeStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramLinkLifetimeStats);

    /** CMsgSteamDatagramLinkLifetimeStats connectedSeconds. */
    public connectedSeconds: number;

    /** CMsgSteamDatagramLinkLifetimeStats packetsSent. */
    public packetsSent: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats kbSent. */
    public kbSent: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats packetsRecv. */
    public packetsRecv: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats kbRecv. */
    public kbRecv: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats packetsRecvSequenced. */
    public packetsRecvSequenced: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats packetsRecvDropped. */
    public packetsRecvDropped: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats packetsRecvOutOfOrder. */
    public packetsRecvOutOfOrder: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats packetsRecvOutOfOrderCorrected. */
    public packetsRecvOutOfOrderCorrected: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats packetsRecvDuplicate. */
    public packetsRecvDuplicate: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats packetsRecvLurch. */
    public packetsRecvLurch: (number|Long);

    /** CMsgSteamDatagramLinkLifetimeStats multipathPacketsRecvSequenced. */
    public multipathPacketsRecvSequenced: (number|Long)[];

    /** CMsgSteamDatagramLinkLifetimeStats multipathPacketsRecvLater. */
    public multipathPacketsRecvLater: (number|Long)[];

    /** CMsgSteamDatagramLinkLifetimeStats multipathSendEnabled. */
    public multipathSendEnabled: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_100. */
    public qualityHistogram_100: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_99. */
    public qualityHistogram_99: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_97. */
    public qualityHistogram_97: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_95. */
    public qualityHistogram_95: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_90. */
    public qualityHistogram_90: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_75. */
    public qualityHistogram_75: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_50. */
    public qualityHistogram_50: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogram_1. */
    public qualityHistogram_1: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityHistogramDead. */
    public qualityHistogramDead: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityNtile_2nd. */
    public qualityNtile_2nd: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityNtile_5th. */
    public qualityNtile_5th: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityNtile_25th. */
    public qualityNtile_25th: number;

    /** CMsgSteamDatagramLinkLifetimeStats qualityNtile_50th. */
    public qualityNtile_50th: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_25. */
    public pingHistogram_25: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_50. */
    public pingHistogram_50: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_75. */
    public pingHistogram_75: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_100. */
    public pingHistogram_100: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_125. */
    public pingHistogram_125: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_150. */
    public pingHistogram_150: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_200. */
    public pingHistogram_200: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogram_300. */
    public pingHistogram_300: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingHistogramMax. */
    public pingHistogramMax: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingNtile_5th. */
    public pingNtile_5th: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingNtile_50th. */
    public pingNtile_50th: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingNtile_75th. */
    public pingNtile_75th: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingNtile_95th. */
    public pingNtile_95th: number;

    /** CMsgSteamDatagramLinkLifetimeStats pingNtile_98th. */
    public pingNtile_98th: number;

    /** CMsgSteamDatagramLinkLifetimeStats jitterHistogramNegligible. */
    public jitterHistogramNegligible: number;

    /** CMsgSteamDatagramLinkLifetimeStats jitterHistogram_1. */
    public jitterHistogram_1: number;

    /** CMsgSteamDatagramLinkLifetimeStats jitterHistogram_2. */
    public jitterHistogram_2: number;

    /** CMsgSteamDatagramLinkLifetimeStats jitterHistogram_5. */
    public jitterHistogram_5: number;

    /** CMsgSteamDatagramLinkLifetimeStats jitterHistogram_10. */
    public jitterHistogram_10: number;

    /** CMsgSteamDatagramLinkLifetimeStats jitterHistogram_20. */
    public jitterHistogram_20: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedMax. */
    public txspeedMax: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_16. */
    public txspeedHistogram_16: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_32. */
    public txspeedHistogram_32: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_64. */
    public txspeedHistogram_64: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_128. */
    public txspeedHistogram_128: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_256. */
    public txspeedHistogram_256: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_512. */
    public txspeedHistogram_512: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogram_1024. */
    public txspeedHistogram_1024: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedHistogramMax. */
    public txspeedHistogramMax: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedNtile_5th. */
    public txspeedNtile_5th: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedNtile_50th. */
    public txspeedNtile_50th: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedNtile_75th. */
    public txspeedNtile_75th: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedNtile_95th. */
    public txspeedNtile_95th: number;

    /** CMsgSteamDatagramLinkLifetimeStats txspeedNtile_98th. */
    public txspeedNtile_98th: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedMax. */
    public rxspeedMax: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_16. */
    public rxspeedHistogram_16: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_32. */
    public rxspeedHistogram_32: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_64. */
    public rxspeedHistogram_64: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_128. */
    public rxspeedHistogram_128: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_256. */
    public rxspeedHistogram_256: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_512. */
    public rxspeedHistogram_512: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogram_1024. */
    public rxspeedHistogram_1024: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedHistogramMax. */
    public rxspeedHistogramMax: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_5th. */
    public rxspeedNtile_5th: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_50th. */
    public rxspeedNtile_50th: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_75th. */
    public rxspeedNtile_75th: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_95th. */
    public rxspeedNtile_95th: number;

    /** CMsgSteamDatagramLinkLifetimeStats rxspeedNtile_98th. */
    public rxspeedNtile_98th: number;

    /**
     * Creates a new CMsgSteamDatagramLinkLifetimeStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramLinkLifetimeStats instance
     */
    public static create(properties?: ICMsgSteamDatagramLinkLifetimeStats): CMsgSteamDatagramLinkLifetimeStats;

    /**
     * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
     * @param message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramLinkLifetimeStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
     * @param message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramLinkLifetimeStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramLinkLifetimeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramLinkLifetimeStats;

    /**
     * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramLinkLifetimeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramLinkLifetimeStats;

    /**
     * Verifies a CMsgSteamDatagramLinkLifetimeStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramLinkLifetimeStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramLinkLifetimeStats
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramLinkLifetimeStats;

    /**
     * Creates a plain object from a CMsgSteamDatagramLinkLifetimeStats message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramLinkLifetimeStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramLinkLifetimeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramLinkLifetimeStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramLinkLifetimeStats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramConnectionQuality. */
export class CMsgSteamDatagramConnectionQuality implements ICMsgSteamDatagramConnectionQuality {

    /**
     * Constructs a new CMsgSteamDatagramConnectionQuality.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionQuality);

    /** CMsgSteamDatagramConnectionQuality instantaneous. */
    public instantaneous?: (ICMsgSteamDatagramLinkInstantaneousStats|null);

    /** CMsgSteamDatagramConnectionQuality lifetime. */
    public lifetime?: (ICMsgSteamDatagramLinkLifetimeStats|null);

    /**
     * Creates a new CMsgSteamDatagramConnectionQuality instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionQuality instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionQuality): CMsgSteamDatagramConnectionQuality;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionQuality message. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionQuality message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionQuality;

    /**
     * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionQuality;

    /**
     * Verifies a CMsgSteamDatagramConnectionQuality message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionQuality message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionQuality
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionQuality;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionQuality message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionQuality
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionQuality, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionQuality to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionQuality
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgICECandidate. */
export class CMsgICECandidate implements ICMsgICECandidate {

    /**
     * Constructs a new CMsgICECandidate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgICECandidate);

    /** CMsgICECandidate candidate. */
    public candidate: string;

    /**
     * Creates a new CMsgICECandidate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgICECandidate instance
     */
    public static create(properties?: ICMsgICECandidate): CMsgICECandidate;

    /**
     * Encodes the specified CMsgICECandidate message. Does not implicitly {@link CMsgICECandidate.verify|verify} messages.
     * @param message CMsgICECandidate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgICECandidate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgICECandidate message, length delimited. Does not implicitly {@link CMsgICECandidate.verify|verify} messages.
     * @param message CMsgICECandidate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgICECandidate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgICECandidate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgICECandidate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgICECandidate;

    /**
     * Decodes a CMsgICECandidate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgICECandidate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgICECandidate;

    /**
     * Verifies a CMsgICECandidate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgICECandidate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgICECandidate
     */
    public static fromObject(object: { [k: string]: any }): CMsgICECandidate;

    /**
     * Creates a plain object from a CMsgICECandidate message. Also converts values to other types if specified.
     * @param message CMsgICECandidate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgICECandidate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgICECandidate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgICECandidate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgICERendezvous. */
export class CMsgICERendezvous implements ICMsgICERendezvous {

    /**
     * Constructs a new CMsgICERendezvous.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgICERendezvous);

    /** CMsgICERendezvous auth. */
    public auth?: (CMsgICERendezvous.IAuth|null);

    /** CMsgICERendezvous addCandidate. */
    public addCandidate?: (ICMsgICECandidate|null);

    /**
     * Creates a new CMsgICERendezvous instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgICERendezvous instance
     */
    public static create(properties?: ICMsgICERendezvous): CMsgICERendezvous;

    /**
     * Encodes the specified CMsgICERendezvous message. Does not implicitly {@link CMsgICERendezvous.verify|verify} messages.
     * @param message CMsgICERendezvous message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgICERendezvous, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgICERendezvous message, length delimited. Does not implicitly {@link CMsgICERendezvous.verify|verify} messages.
     * @param message CMsgICERendezvous message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgICERendezvous, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgICERendezvous message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgICERendezvous
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgICERendezvous;

    /**
     * Decodes a CMsgICERendezvous message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgICERendezvous
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgICERendezvous;

    /**
     * Verifies a CMsgICERendezvous message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgICERendezvous message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgICERendezvous
     */
    public static fromObject(object: { [k: string]: any }): CMsgICERendezvous;

    /**
     * Creates a plain object from a CMsgICERendezvous message. Also converts values to other types if specified.
     * @param message CMsgICERendezvous
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgICERendezvous, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgICERendezvous to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgICERendezvous
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgICERendezvous {

    /** Properties of an Auth. */
    interface IAuth {

        /** Auth pwdFrag */
        pwdFrag?: (string|null);
    }

    /** Represents an Auth. */
    class Auth implements IAuth {

        /**
         * Constructs a new Auth.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgICERendezvous.IAuth);

        /** Auth pwdFrag. */
        public pwdFrag: string;

        /**
         * Creates a new Auth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Auth instance
         */
        public static create(properties?: CMsgICERendezvous.IAuth): CMsgICERendezvous.Auth;

        /**
         * Encodes the specified Auth message. Does not implicitly {@link CMsgICERendezvous.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgICERendezvous.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Auth message, length delimited. Does not implicitly {@link CMsgICERendezvous.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgICERendezvous.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Auth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgICERendezvous.Auth;

        /**
         * Decodes an Auth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgICERendezvous.Auth;

        /**
         * Verifies an Auth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Auth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Auth
         */
        public static fromObject(object: { [k: string]: any }): CMsgICERendezvous.Auth;

        /**
         * Creates a plain object from an Auth message. Also converts values to other types if specified.
         * @param message Auth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgICERendezvous.Auth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Auth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Auth
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgSteamNetworkingP2PRendezvous. */
export class CMsgSteamNetworkingP2PRendezvous implements ICMsgSteamNetworkingP2PRendezvous {

    /**
     * Constructs a new CMsgSteamNetworkingP2PRendezvous.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamNetworkingP2PRendezvous);

    /** CMsgSteamNetworkingP2PRendezvous fromIdentity. */
    public fromIdentity: string;

    /** CMsgSteamNetworkingP2PRendezvous fromConnectionId. */
    public fromConnectionId: number;

    /** CMsgSteamNetworkingP2PRendezvous toIdentity. */
    public toIdentity: string;

    /** CMsgSteamNetworkingP2PRendezvous toConnectionId. */
    public toConnectionId: number;

    /** CMsgSteamNetworkingP2PRendezvous sdrRoutes. */
    public sdrRoutes: Uint8Array;

    /** CMsgSteamNetworkingP2PRendezvous ackPeerRoutesRevision. */
    public ackPeerRoutesRevision: number;

    /** CMsgSteamNetworkingP2PRendezvous iceEnabled. */
    public iceEnabled: boolean;

    /** CMsgSteamNetworkingP2PRendezvous hostedServerTicket. */
    public hostedServerTicket: Uint8Array;

    /** CMsgSteamNetworkingP2PRendezvous connectRequest. */
    public connectRequest?: (CMsgSteamNetworkingP2PRendezvous.IConnectRequest|null);

    /** CMsgSteamNetworkingP2PRendezvous connectOk. */
    public connectOk?: (CMsgSteamNetworkingP2PRendezvous.IConnectOK|null);

    /** CMsgSteamNetworkingP2PRendezvous connectionClosed. */
    public connectionClosed?: (CMsgSteamNetworkingP2PRendezvous.IConnectionClosed|null);

    /** CMsgSteamNetworkingP2PRendezvous ackReliableMsg. */
    public ackReliableMsg: number;

    /** CMsgSteamNetworkingP2PRendezvous firstReliableMsg. */
    public firstReliableMsg: number;

    /** CMsgSteamNetworkingP2PRendezvous reliableMessages. */
    public reliableMessages: CMsgSteamNetworkingP2PRendezvous.IReliableMessage[];

    /** CMsgSteamNetworkingP2PRendezvous applicationMessages. */
    public applicationMessages: CMsgSteamNetworkingP2PRendezvous.IApplicationMessage[];

    /**
     * Creates a new CMsgSteamNetworkingP2PRendezvous instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamNetworkingP2PRendezvous instance
     */
    public static create(properties?: ICMsgSteamNetworkingP2PRendezvous): CMsgSteamNetworkingP2PRendezvous;

    /**
     * Encodes the specified CMsgSteamNetworkingP2PRendezvous message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.verify|verify} messages.
     * @param message CMsgSteamNetworkingP2PRendezvous message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamNetworkingP2PRendezvous, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamNetworkingP2PRendezvous message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.verify|verify} messages.
     * @param message CMsgSteamNetworkingP2PRendezvous message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamNetworkingP2PRendezvous, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamNetworkingP2PRendezvous message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamNetworkingP2PRendezvous
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingP2PRendezvous;

    /**
     * Decodes a CMsgSteamNetworkingP2PRendezvous message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamNetworkingP2PRendezvous
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingP2PRendezvous;

    /**
     * Verifies a CMsgSteamNetworkingP2PRendezvous message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamNetworkingP2PRendezvous message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamNetworkingP2PRendezvous
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingP2PRendezvous;

    /**
     * Creates a plain object from a CMsgSteamNetworkingP2PRendezvous message. Also converts values to other types if specified.
     * @param message CMsgSteamNetworkingP2PRendezvous
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamNetworkingP2PRendezvous, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamNetworkingP2PRendezvous to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamNetworkingP2PRendezvous
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamNetworkingP2PRendezvous {

    /** Properties of a ConnectRequest. */
    interface IConnectRequest {

        /** ConnectRequest crypt */
        crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

        /** ConnectRequest cert */
        cert?: (ICMsgSteamDatagramCertificateSigned|null);

        /** ConnectRequest toVirtualPort */
        toVirtualPort?: (number|null);

        /** ConnectRequest fromVirtualPort */
        fromVirtualPort?: (number|null);

        /** ConnectRequest fromFakeip */
        fromFakeip?: (string|null);
    }

    /** Represents a ConnectRequest. */
    class ConnectRequest implements IConnectRequest {

        /**
         * Constructs a new ConnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamNetworkingP2PRendezvous.IConnectRequest);

        /** ConnectRequest crypt. */
        public crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

        /** ConnectRequest cert. */
        public cert?: (ICMsgSteamDatagramCertificateSigned|null);

        /** ConnectRequest toVirtualPort. */
        public toVirtualPort: number;

        /** ConnectRequest fromVirtualPort. */
        public fromVirtualPort: number;

        /** ConnectRequest fromFakeip. */
        public fromFakeip: string;

        /**
         * Creates a new ConnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectRequest instance
         */
        public static create(properties?: CMsgSteamNetworkingP2PRendezvous.IConnectRequest): CMsgSteamNetworkingP2PRendezvous.ConnectRequest;

        /**
         * Encodes the specified ConnectRequest message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectRequest.verify|verify} messages.
         * @param message ConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamNetworkingP2PRendezvous.IConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectRequest message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectRequest.verify|verify} messages.
         * @param message ConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamNetworkingP2PRendezvous.IConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingP2PRendezvous.ConnectRequest;

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingP2PRendezvous.ConnectRequest;

        /**
         * Verifies a ConnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectRequest
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingP2PRendezvous.ConnectRequest;

        /**
         * Creates a plain object from a ConnectRequest message. Also converts values to other types if specified.
         * @param message ConnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamNetworkingP2PRendezvous.ConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectOK. */
    interface IConnectOK {

        /** ConnectOK crypt */
        crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

        /** ConnectOK cert */
        cert?: (ICMsgSteamDatagramCertificateSigned|null);
    }

    /** Represents a ConnectOK. */
    class ConnectOK implements IConnectOK {

        /**
         * Constructs a new ConnectOK.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamNetworkingP2PRendezvous.IConnectOK);

        /** ConnectOK crypt. */
        public crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

        /** ConnectOK cert. */
        public cert?: (ICMsgSteamDatagramCertificateSigned|null);

        /**
         * Creates a new ConnectOK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectOK instance
         */
        public static create(properties?: CMsgSteamNetworkingP2PRendezvous.IConnectOK): CMsgSteamNetworkingP2PRendezvous.ConnectOK;

        /**
         * Encodes the specified ConnectOK message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectOK.verify|verify} messages.
         * @param message ConnectOK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamNetworkingP2PRendezvous.IConnectOK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectOK message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectOK.verify|verify} messages.
         * @param message ConnectOK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamNetworkingP2PRendezvous.IConnectOK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectOK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectOK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingP2PRendezvous.ConnectOK;

        /**
         * Decodes a ConnectOK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectOK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingP2PRendezvous.ConnectOK;

        /**
         * Verifies a ConnectOK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectOK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectOK
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingP2PRendezvous.ConnectOK;

        /**
         * Creates a plain object from a ConnectOK message. Also converts values to other types if specified.
         * @param message ConnectOK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamNetworkingP2PRendezvous.ConnectOK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectOK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectOK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectionClosed. */
    interface IConnectionClosed {

        /** ConnectionClosed debug */
        debug?: (string|null);

        /** ConnectionClosed reasonCode */
        reasonCode?: (number|null);
    }

    /** Represents a ConnectionClosed. */
    class ConnectionClosed implements IConnectionClosed {

        /**
         * Constructs a new ConnectionClosed.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamNetworkingP2PRendezvous.IConnectionClosed);

        /** ConnectionClosed debug. */
        public debug: string;

        /** ConnectionClosed reasonCode. */
        public reasonCode: number;

        /**
         * Creates a new ConnectionClosed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectionClosed instance
         */
        public static create(properties?: CMsgSteamNetworkingP2PRendezvous.IConnectionClosed): CMsgSteamNetworkingP2PRendezvous.ConnectionClosed;

        /**
         * Encodes the specified ConnectionClosed message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.verify|verify} messages.
         * @param message ConnectionClosed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamNetworkingP2PRendezvous.IConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectionClosed message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ConnectionClosed.verify|verify} messages.
         * @param message ConnectionClosed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamNetworkingP2PRendezvous.IConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectionClosed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingP2PRendezvous.ConnectionClosed;

        /**
         * Decodes a ConnectionClosed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingP2PRendezvous.ConnectionClosed;

        /**
         * Verifies a ConnectionClosed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectionClosed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectionClosed
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingP2PRendezvous.ConnectionClosed;

        /**
         * Creates a plain object from a ConnectionClosed message. Also converts values to other types if specified.
         * @param message ConnectionClosed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamNetworkingP2PRendezvous.ConnectionClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectionClosed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectionClosed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReliableMessage. */
    interface IReliableMessage {

        /** ReliableMessage ice */
        ice?: (ICMsgICERendezvous|null);
    }

    /** Represents a ReliableMessage. */
    class ReliableMessage implements IReliableMessage {

        /**
         * Constructs a new ReliableMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamNetworkingP2PRendezvous.IReliableMessage);

        /** ReliableMessage ice. */
        public ice?: (ICMsgICERendezvous|null);

        /**
         * Creates a new ReliableMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReliableMessage instance
         */
        public static create(properties?: CMsgSteamNetworkingP2PRendezvous.IReliableMessage): CMsgSteamNetworkingP2PRendezvous.ReliableMessage;

        /**
         * Encodes the specified ReliableMessage message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ReliableMessage.verify|verify} messages.
         * @param message ReliableMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamNetworkingP2PRendezvous.IReliableMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReliableMessage message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ReliableMessage.verify|verify} messages.
         * @param message ReliableMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamNetworkingP2PRendezvous.IReliableMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReliableMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReliableMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingP2PRendezvous.ReliableMessage;

        /**
         * Decodes a ReliableMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReliableMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingP2PRendezvous.ReliableMessage;

        /**
         * Verifies a ReliableMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReliableMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReliableMessage
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingP2PRendezvous.ReliableMessage;

        /**
         * Creates a plain object from a ReliableMessage message. Also converts values to other types if specified.
         * @param message ReliableMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamNetworkingP2PRendezvous.ReliableMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReliableMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReliableMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ApplicationMessage. */
    interface IApplicationMessage {

        /** ApplicationMessage data */
        data?: (Uint8Array|null);

        /** ApplicationMessage msgNum */
        msgNum?: (number|Long|null);

        /** ApplicationMessage flags */
        flags?: (number|null);

        /** ApplicationMessage laneIdx */
        laneIdx?: (number|null);
    }

    /** Represents an ApplicationMessage. */
    class ApplicationMessage implements IApplicationMessage {

        /**
         * Constructs a new ApplicationMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamNetworkingP2PRendezvous.IApplicationMessage);

        /** ApplicationMessage data. */
        public data: Uint8Array;

        /** ApplicationMessage msgNum. */
        public msgNum: (number|Long);

        /** ApplicationMessage flags. */
        public flags: number;

        /** ApplicationMessage laneIdx. */
        public laneIdx: number;

        /**
         * Creates a new ApplicationMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplicationMessage instance
         */
        public static create(properties?: CMsgSteamNetworkingP2PRendezvous.IApplicationMessage): CMsgSteamNetworkingP2PRendezvous.ApplicationMessage;

        /**
         * Encodes the specified ApplicationMessage message. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.verify|verify} messages.
         * @param message ApplicationMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamNetworkingP2PRendezvous.IApplicationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplicationMessage message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PRendezvous.ApplicationMessage.verify|verify} messages.
         * @param message ApplicationMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamNetworkingP2PRendezvous.IApplicationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplicationMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplicationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingP2PRendezvous.ApplicationMessage;

        /**
         * Decodes an ApplicationMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplicationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingP2PRendezvous.ApplicationMessage;

        /**
         * Verifies an ApplicationMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplicationMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplicationMessage
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingP2PRendezvous.ApplicationMessage;

        /**
         * Creates a plain object from an ApplicationMessage message. Also converts values to other types if specified.
         * @param message ApplicationMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamNetworkingP2PRendezvous.ApplicationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplicationMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ApplicationMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgSteamNetworkingICESessionSummary. */
export class CMsgSteamNetworkingICESessionSummary implements ICMsgSteamNetworkingICESessionSummary {

    /**
     * Constructs a new CMsgSteamNetworkingICESessionSummary.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamNetworkingICESessionSummary);

    /** CMsgSteamNetworkingICESessionSummary failureReasonCode. */
    public failureReasonCode: number;

    /** CMsgSteamNetworkingICESessionSummary localCandidateTypes. */
    public localCandidateTypes: number;

    /** CMsgSteamNetworkingICESessionSummary remoteCandidateTypes. */
    public remoteCandidateTypes: number;

    /** CMsgSteamNetworkingICESessionSummary initialRouteKind. */
    public initialRouteKind: number;

    /** CMsgSteamNetworkingICESessionSummary initialPing. */
    public initialPing: number;

    /** CMsgSteamNetworkingICESessionSummary initialScore. */
    public initialScore: number;

    /** CMsgSteamNetworkingICESessionSummary negotiationMs. */
    public negotiationMs: number;

    /** CMsgSteamNetworkingICESessionSummary bestRouteKind. */
    public bestRouteKind: number;

    /** CMsgSteamNetworkingICESessionSummary bestPing. */
    public bestPing: number;

    /** CMsgSteamNetworkingICESessionSummary bestScore. */
    public bestScore: number;

    /** CMsgSteamNetworkingICESessionSummary bestTime. */
    public bestTime: number;

    /** CMsgSteamNetworkingICESessionSummary selectedSeconds. */
    public selectedSeconds: number;

    /** CMsgSteamNetworkingICESessionSummary userSettings. */
    public userSettings: number;

    /** CMsgSteamNetworkingICESessionSummary iceEnableVar. */
    public iceEnableVar: number;

    /** CMsgSteamNetworkingICESessionSummary localCandidateTypesAllowed. */
    public localCandidateTypesAllowed: number;

    /**
     * Creates a new CMsgSteamNetworkingICESessionSummary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamNetworkingICESessionSummary instance
     */
    public static create(properties?: ICMsgSteamNetworkingICESessionSummary): CMsgSteamNetworkingICESessionSummary;

    /**
     * Encodes the specified CMsgSteamNetworkingICESessionSummary message. Does not implicitly {@link CMsgSteamNetworkingICESessionSummary.verify|verify} messages.
     * @param message CMsgSteamNetworkingICESessionSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamNetworkingICESessionSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamNetworkingICESessionSummary message, length delimited. Does not implicitly {@link CMsgSteamNetworkingICESessionSummary.verify|verify} messages.
     * @param message CMsgSteamNetworkingICESessionSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamNetworkingICESessionSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamNetworkingICESessionSummary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamNetworkingICESessionSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingICESessionSummary;

    /**
     * Decodes a CMsgSteamNetworkingICESessionSummary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamNetworkingICESessionSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingICESessionSummary;

    /**
     * Verifies a CMsgSteamNetworkingICESessionSummary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamNetworkingICESessionSummary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamNetworkingICESessionSummary
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingICESessionSummary;

    /**
     * Creates a plain object from a CMsgSteamNetworkingICESessionSummary message. Also converts values to other types if specified.
     * @param message CMsgSteamNetworkingICESessionSummary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamNetworkingICESessionSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamNetworkingICESessionSummary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamNetworkingICESessionSummary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamNetworkingIdentityLegacyBinary. */
export class CMsgSteamNetworkingIdentityLegacyBinary implements ICMsgSteamNetworkingIdentityLegacyBinary {

    /**
     * Constructs a new CMsgSteamNetworkingIdentityLegacyBinary.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamNetworkingIdentityLegacyBinary);

    /** CMsgSteamNetworkingIdentityLegacyBinary steamId. */
    public steamId: (number|Long);

    /** CMsgSteamNetworkingIdentityLegacyBinary xboxPairwiseId. */
    public xboxPairwiseId: string;

    /** CMsgSteamNetworkingIdentityLegacyBinary genericBytes. */
    public genericBytes: Uint8Array;

    /** CMsgSteamNetworkingIdentityLegacyBinary genericString. */
    public genericString: string;

    /** CMsgSteamNetworkingIdentityLegacyBinary ipv6AndPort. */
    public ipv6AndPort: Uint8Array;

    /**
     * Creates a new CMsgSteamNetworkingIdentityLegacyBinary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamNetworkingIdentityLegacyBinary instance
     */
    public static create(properties?: ICMsgSteamNetworkingIdentityLegacyBinary): CMsgSteamNetworkingIdentityLegacyBinary;

    /**
     * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
     * @param message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamNetworkingIdentityLegacyBinary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message, length delimited. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
     * @param message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamNetworkingIdentityLegacyBinary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamNetworkingIdentityLegacyBinary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingIdentityLegacyBinary;

    /**
     * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamNetworkingIdentityLegacyBinary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingIdentityLegacyBinary;

    /**
     * Verifies a CMsgSteamNetworkingIdentityLegacyBinary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamNetworkingIdentityLegacyBinary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamNetworkingIdentityLegacyBinary
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingIdentityLegacyBinary;

    /**
     * Creates a plain object from a CMsgSteamNetworkingIdentityLegacyBinary message. Also converts values to other types if specified.
     * @param message CMsgSteamNetworkingIdentityLegacyBinary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamNetworkingIdentityLegacyBinary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamNetworkingIdentityLegacyBinary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamNetworkingIdentityLegacyBinary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramCertificate. */
export class CMsgSteamDatagramCertificate implements ICMsgSteamDatagramCertificate {

    /**
     * Constructs a new CMsgSteamDatagramCertificate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramCertificate);

    /** CMsgSteamDatagramCertificate keyType. */
    public keyType: CMsgSteamDatagramCertificate.EKeyType;

    /** CMsgSteamDatagramCertificate keyData. */
    public keyData: Uint8Array;

    /** CMsgSteamDatagramCertificate legacySteamId. */
    public legacySteamId: (number|Long);

    /** CMsgSteamDatagramCertificate legacyIdentityBinary. */
    public legacyIdentityBinary?: (ICMsgSteamNetworkingIdentityLegacyBinary|null);

    /** CMsgSteamDatagramCertificate identityString. */
    public identityString: string;

    /** CMsgSteamDatagramCertificate gameserverDatacenterIds. */
    public gameserverDatacenterIds: number[];

    /** CMsgSteamDatagramCertificate timeCreated. */
    public timeCreated: number;

    /** CMsgSteamDatagramCertificate timeExpiry. */
    public timeExpiry: number;

    /** CMsgSteamDatagramCertificate appIds. */
    public appIds: number[];

    /** CMsgSteamDatagramCertificate ipAddresses. */
    public ipAddresses: string[];

    /**
     * Creates a new CMsgSteamDatagramCertificate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramCertificate instance
     */
    public static create(properties?: ICMsgSteamDatagramCertificate): CMsgSteamDatagramCertificate;

    /**
     * Encodes the specified CMsgSteamDatagramCertificate message. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
     * @param message CMsgSteamDatagramCertificate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramCertificate message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
     * @param message CMsgSteamDatagramCertificate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramCertificate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramCertificate;

    /**
     * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramCertificate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramCertificate;

    /**
     * Verifies a CMsgSteamDatagramCertificate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramCertificate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramCertificate
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramCertificate;

    /**
     * Creates a plain object from a CMsgSteamDatagramCertificate message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramCertificate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramCertificate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramCertificate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramCertificate {

    /** EKeyType enum. */
    enum EKeyType {
        INVALID = 0,
        ED25519 = 1
    }
}

/** Represents a CMsgSteamDatagramCertificateSigned. */
export class CMsgSteamDatagramCertificateSigned implements ICMsgSteamDatagramCertificateSigned {

    /**
     * Constructs a new CMsgSteamDatagramCertificateSigned.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramCertificateSigned);

    /** CMsgSteamDatagramCertificateSigned cert. */
    public cert: Uint8Array;

    /** CMsgSteamDatagramCertificateSigned caKeyId. */
    public caKeyId: (number|Long);

    /** CMsgSteamDatagramCertificateSigned caSignature. */
    public caSignature: Uint8Array;

    /** CMsgSteamDatagramCertificateSigned privateKeyData. */
    public privateKeyData: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramCertificateSigned instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramCertificateSigned instance
     */
    public static create(properties?: ICMsgSteamDatagramCertificateSigned): CMsgSteamDatagramCertificateSigned;

    /**
     * Encodes the specified CMsgSteamDatagramCertificateSigned message. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
     * @param message CMsgSteamDatagramCertificateSigned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramCertificateSigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramCertificateSigned message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
     * @param message CMsgSteamDatagramCertificateSigned message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramCertificateSigned, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramCertificateSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramCertificateSigned;

    /**
     * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramCertificateSigned
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramCertificateSigned;

    /**
     * Verifies a CMsgSteamDatagramCertificateSigned message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramCertificateSigned message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramCertificateSigned
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramCertificateSigned;

    /**
     * Creates a plain object from a CMsgSteamDatagramCertificateSigned message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramCertificateSigned
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramCertificateSigned, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramCertificateSigned to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramCertificateSigned
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramCertificateRequest. */
export class CMsgSteamDatagramCertificateRequest implements ICMsgSteamDatagramCertificateRequest {

    /**
     * Constructs a new CMsgSteamDatagramCertificateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramCertificateRequest);

    /** CMsgSteamDatagramCertificateRequest cert. */
    public cert?: (ICMsgSteamDatagramCertificate|null);

    /**
     * Creates a new CMsgSteamDatagramCertificateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramCertificateRequest instance
     */
    public static create(properties?: ICMsgSteamDatagramCertificateRequest): CMsgSteamDatagramCertificateRequest;

    /**
     * Encodes the specified CMsgSteamDatagramCertificateRequest message. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramCertificateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramCertificateRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramCertificateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramCertificateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramCertificateRequest;

    /**
     * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramCertificateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramCertificateRequest;

    /**
     * Verifies a CMsgSteamDatagramCertificateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramCertificateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramCertificateRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramCertificateRequest;

    /**
     * Creates a plain object from a CMsgSteamDatagramCertificateRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramCertificateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramCertificateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramCertificateRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ESteamDatagramMsgID enum. */
export enum ESteamDatagramMsgID {
    k_ESteamDatagramMsg_Invalid = 0,
    k_ESteamDatagramMsg_RouterPingRequest = 1,
    k_ESteamDatagramMsg_RouterPingReply = 2,
    k_ESteamDatagramMsg_GameserverPingRequest = 3,
    k_ESteamDatagramMsg_GameserverSessionRequest = 5,
    k_ESteamDatagramMsg_GameserverSessionEstablished = 6,
    k_ESteamDatagramMsg_NoSession = 7,
    k_ESteamDatagramMsg_Diagnostic = 8,
    k_ESteamDatagramMsg_DataClientToRouter = 9,
    k_ESteamDatagramMsg_DataRouterToServer = 10,
    k_ESteamDatagramMsg_DataServerToRouter = 11,
    k_ESteamDatagramMsg_DataRouterToClient = 12,
    k_ESteamDatagramMsg_Stats = 13,
    k_ESteamDatagramMsg_ClientPingSampleRequest = 14,
    k_ESteamDatagramMsg_ClientPingSampleReply = 15,
    k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary = 16,
    k_ESteamDatagramMsg_RelayHealth = 17,
    k_ESteamDatagramMsg_ConnectRequest = 18,
    k_ESteamDatagramMsg_ConnectOK = 19,
    k_ESteamDatagramMsg_ConnectionClosed = 20,
    k_ESteamDatagramMsg_NoConnection = 21,
    k_ESteamDatagramMsg_TicketDecryptRequest = 22,
    k_ESteamDatagramMsg_TicketDecryptReply = 23,
    k_ESteamDatagramMsg_P2PSessionRequest = 24,
    k_ESteamDatagramMsg_P2PSessionEstablished = 25,
    k_ESteamDatagramMsg_P2PStatsClient = 26,
    k_ESteamDatagramMsg_P2PStatsRelay = 27,
    k_ESteamDatagramMsg_P2PBadRoute = 28,
    k_ESteamDatagramMsg_GameserverPingReply = 29,
    k_ESteamDatagramMsg_LegacyGameserverRegistration = 30,
    k_ESteamDatagramMsg_SetSecondaryAddressRequest = 31,
    k_ESteamDatagramMsg_SetSecondaryAddressResult = 32,
    k_ESteamDatagramMsg_RelayToRelayPingRequest = 33,
    k_ESteamDatagramMsg_RelayToRelayPingReply = 34
}

/** Represents a CMsgSteamNetworkingIPAddress. */
export class CMsgSteamNetworkingIPAddress implements ICMsgSteamNetworkingIPAddress {

    /**
     * Constructs a new CMsgSteamNetworkingIPAddress.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamNetworkingIPAddress);

    /** CMsgSteamNetworkingIPAddress v4. */
    public v4: number;

    /** CMsgSteamNetworkingIPAddress v6. */
    public v6: Uint8Array;

    /**
     * Creates a new CMsgSteamNetworkingIPAddress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamNetworkingIPAddress instance
     */
    public static create(properties?: ICMsgSteamNetworkingIPAddress): CMsgSteamNetworkingIPAddress;

    /**
     * Encodes the specified CMsgSteamNetworkingIPAddress message. Does not implicitly {@link CMsgSteamNetworkingIPAddress.verify|verify} messages.
     * @param message CMsgSteamNetworkingIPAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamNetworkingIPAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamNetworkingIPAddress message, length delimited. Does not implicitly {@link CMsgSteamNetworkingIPAddress.verify|verify} messages.
     * @param message CMsgSteamNetworkingIPAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamNetworkingIPAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamNetworkingIPAddress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamNetworkingIPAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingIPAddress;

    /**
     * Decodes a CMsgSteamNetworkingIPAddress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamNetworkingIPAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingIPAddress;

    /**
     * Verifies a CMsgSteamNetworkingIPAddress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamNetworkingIPAddress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamNetworkingIPAddress
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingIPAddress;

    /**
     * Creates a plain object from a CMsgSteamNetworkingIPAddress message. Also converts values to other types if specified.
     * @param message CMsgSteamNetworkingIPAddress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamNetworkingIPAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamNetworkingIPAddress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamNetworkingIPAddress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramSignedMessageGeneric. */
export class CMsgSteamDatagramSignedMessageGeneric implements ICMsgSteamDatagramSignedMessageGeneric {

    /**
     * Constructs a new CMsgSteamDatagramSignedMessageGeneric.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramSignedMessageGeneric);

    /** CMsgSteamDatagramSignedMessageGeneric cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamDatagramSignedMessageGeneric signedData. */
    public signedData: Uint8Array;

    /** CMsgSteamDatagramSignedMessageGeneric signature. */
    public signature: Uint8Array;

    /** CMsgSteamDatagramSignedMessageGeneric dummyPad. */
    public dummyPad: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramSignedMessageGeneric instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramSignedMessageGeneric instance
     */
    public static create(properties?: ICMsgSteamDatagramSignedMessageGeneric): CMsgSteamDatagramSignedMessageGeneric;

    /**
     * Encodes the specified CMsgSteamDatagramSignedMessageGeneric message. Does not implicitly {@link CMsgSteamDatagramSignedMessageGeneric.verify|verify} messages.
     * @param message CMsgSteamDatagramSignedMessageGeneric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramSignedMessageGeneric, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramSignedMessageGeneric message, length delimited. Does not implicitly {@link CMsgSteamDatagramSignedMessageGeneric.verify|verify} messages.
     * @param message CMsgSteamDatagramSignedMessageGeneric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramSignedMessageGeneric, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramSignedMessageGeneric message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramSignedMessageGeneric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramSignedMessageGeneric;

    /**
     * Decodes a CMsgSteamDatagramSignedMessageGeneric message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramSignedMessageGeneric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramSignedMessageGeneric;

    /**
     * Verifies a CMsgSteamDatagramSignedMessageGeneric message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramSignedMessageGeneric message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramSignedMessageGeneric
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramSignedMessageGeneric;

    /**
     * Creates a plain object from a CMsgSteamDatagramSignedMessageGeneric message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramSignedMessageGeneric
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramSignedMessageGeneric, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramSignedMessageGeneric to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramSignedMessageGeneric
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramRouterPingReply. */
export class CMsgSteamDatagramRouterPingReply implements ICMsgSteamDatagramRouterPingReply {

    /**
     * Constructs a new CMsgSteamDatagramRouterPingReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramRouterPingReply);

    /** CMsgSteamDatagramRouterPingReply clientTimestamp. */
    public clientTimestamp: number;

    /** CMsgSteamDatagramRouterPingReply latencyDatacenterIds. */
    public latencyDatacenterIds: number[];

    /** CMsgSteamDatagramRouterPingReply latencyPingMs. */
    public latencyPingMs: number[];

    /** CMsgSteamDatagramRouterPingReply latencyDatacenterIdsP2p. */
    public latencyDatacenterIdsP2p: number[];

    /** CMsgSteamDatagramRouterPingReply latencyPingMsP2p. */
    public latencyPingMsP2p: number[];

    /** CMsgSteamDatagramRouterPingReply yourPublicIp. */
    public yourPublicIp: number;

    /** CMsgSteamDatagramRouterPingReply yourPublicPort. */
    public yourPublicPort: number;

    /** CMsgSteamDatagramRouterPingReply serverTime. */
    public serverTime: number;

    /** CMsgSteamDatagramRouterPingReply challenge. */
    public challenge: (number|Long);

    /** CMsgSteamDatagramRouterPingReply secondsUntilShutdown. */
    public secondsUntilShutdown: number;

    /** CMsgSteamDatagramRouterPingReply clientCookie. */
    public clientCookie: number;

    /** CMsgSteamDatagramRouterPingReply scoringPenaltyRelayCluster. */
    public scoringPenaltyRelayCluster: number;

    /** CMsgSteamDatagramRouterPingReply flags. */
    public flags: number;

    /** CMsgSteamDatagramRouterPingReply routeExceptions. */
    public routeExceptions: CMsgSteamDatagramRouterPingReply.IRouteException[];

    /** CMsgSteamDatagramRouterPingReply altAddresses. */
    public altAddresses: CMsgSteamDatagramRouterPingReply.IAltAddress[];

    /** CMsgSteamDatagramRouterPingReply dummyPad. */
    public dummyPad: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramRouterPingReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramRouterPingReply instance
     */
    public static create(properties?: ICMsgSteamDatagramRouterPingReply): CMsgSteamDatagramRouterPingReply;

    /**
     * Encodes the specified CMsgSteamDatagramRouterPingReply message. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.verify|verify} messages.
     * @param message CMsgSteamDatagramRouterPingReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramRouterPingReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramRouterPingReply message, length delimited. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.verify|verify} messages.
     * @param message CMsgSteamDatagramRouterPingReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramRouterPingReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramRouterPingReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramRouterPingReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramRouterPingReply;

    /**
     * Decodes a CMsgSteamDatagramRouterPingReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramRouterPingReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramRouterPingReply;

    /**
     * Verifies a CMsgSteamDatagramRouterPingReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramRouterPingReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramRouterPingReply
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramRouterPingReply;

    /**
     * Creates a plain object from a CMsgSteamDatagramRouterPingReply message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramRouterPingReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramRouterPingReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramRouterPingReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramRouterPingReply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramRouterPingReply {

    /** Properties of a RouteException. */
    interface IRouteException {

        /** RouteException dataCenterId */
        dataCenterId?: (number|null);

        /** RouteException flags */
        flags?: (number|null);

        /** RouteException penalty */
        penalty?: (number|null);
    }

    /** Represents a RouteException. */
    class RouteException implements IRouteException {

        /**
         * Constructs a new RouteException.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramRouterPingReply.IRouteException);

        /** RouteException dataCenterId. */
        public dataCenterId: number;

        /** RouteException flags. */
        public flags: number;

        /** RouteException penalty. */
        public penalty: number;

        /**
         * Creates a new RouteException instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteException instance
         */
        public static create(properties?: CMsgSteamDatagramRouterPingReply.IRouteException): CMsgSteamDatagramRouterPingReply.RouteException;

        /**
         * Encodes the specified RouteException message. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.RouteException.verify|verify} messages.
         * @param message RouteException message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramRouterPingReply.IRouteException, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteException message, length delimited. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.RouteException.verify|verify} messages.
         * @param message RouteException message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramRouterPingReply.IRouteException, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteException message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramRouterPingReply.RouteException;

        /**
         * Decodes a RouteException message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramRouterPingReply.RouteException;

        /**
         * Verifies a RouteException message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteException message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteException
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramRouterPingReply.RouteException;

        /**
         * Creates a plain object from a RouteException message. Also converts values to other types if specified.
         * @param message RouteException
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramRouterPingReply.RouteException, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteException to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteException
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AltAddress. */
    interface IAltAddress {

        /** AltAddress ipv4 */
        ipv4?: (number|null);

        /** AltAddress port */
        port?: (number|null);

        /** AltAddress penalty */
        penalty?: (number|null);

        /** AltAddress protocol */
        protocol?: (CMsgSteamDatagramRouterPingReply.AltAddress.Protocol|null);

        /** AltAddress id */
        id?: (string|null);
    }

    /** Represents an AltAddress. */
    class AltAddress implements IAltAddress {

        /**
         * Constructs a new AltAddress.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramRouterPingReply.IAltAddress);

        /** AltAddress ipv4. */
        public ipv4: number;

        /** AltAddress port. */
        public port: number;

        /** AltAddress penalty. */
        public penalty: number;

        /** AltAddress protocol. */
        public protocol: CMsgSteamDatagramRouterPingReply.AltAddress.Protocol;

        /** AltAddress id. */
        public id: string;

        /**
         * Creates a new AltAddress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AltAddress instance
         */
        public static create(properties?: CMsgSteamDatagramRouterPingReply.IAltAddress): CMsgSteamDatagramRouterPingReply.AltAddress;

        /**
         * Encodes the specified AltAddress message. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.AltAddress.verify|verify} messages.
         * @param message AltAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramRouterPingReply.IAltAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AltAddress message, length delimited. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.AltAddress.verify|verify} messages.
         * @param message AltAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramRouterPingReply.IAltAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AltAddress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AltAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramRouterPingReply.AltAddress;

        /**
         * Decodes an AltAddress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AltAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramRouterPingReply.AltAddress;

        /**
         * Verifies an AltAddress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AltAddress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AltAddress
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramRouterPingReply.AltAddress;

        /**
         * Creates a plain object from an AltAddress message. Also converts values to other types if specified.
         * @param message AltAddress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramRouterPingReply.AltAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AltAddress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AltAddress
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AltAddress {

        /** Protocol enum. */
        enum Protocol {
            DefaultProtocol = 0,
            NetworkNext = 1
        }
    }

    /** Flags enum. */
    enum Flags {
        FLAG_MAYBE_MORE_DATA_CENTERS = 1,
        FLAG_MAYBE_MORE_ALT_ADDRESSES = 2
    }
}

/** Represents a CMsgSteamDatagramGameserverPingRequestBody. */
export class CMsgSteamDatagramGameserverPingRequestBody implements ICMsgSteamDatagramGameserverPingRequestBody {

    /**
     * Constructs a new CMsgSteamDatagramGameserverPingRequestBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramGameserverPingRequestBody);

    /** CMsgSteamDatagramGameserverPingRequestBody relayPopid. */
    public relayPopid: number;

    /** CMsgSteamDatagramGameserverPingRequestBody yourPublicIp. */
    public yourPublicIp?: (ICMsgSteamNetworkingIPAddress|null);

    /** CMsgSteamDatagramGameserverPingRequestBody yourPublicPort. */
    public yourPublicPort: number;

    /** CMsgSteamDatagramGameserverPingRequestBody relayUnixTime. */
    public relayUnixTime: (number|Long);

    /** CMsgSteamDatagramGameserverPingRequestBody routingSecret. */
    public routingSecret: (number|Long);

    /** CMsgSteamDatagramGameserverPingRequestBody myIps. */
    public myIps: ICMsgSteamNetworkingIPAddress[];

    /** CMsgSteamDatagramGameserverPingRequestBody echo. */
    public echo: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramGameserverPingRequestBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramGameserverPingRequestBody instance
     */
    public static create(properties?: ICMsgSteamDatagramGameserverPingRequestBody): CMsgSteamDatagramGameserverPingRequestBody;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverPingRequestBody message. Does not implicitly {@link CMsgSteamDatagramGameserverPingRequestBody.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverPingRequestBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramGameserverPingRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverPingRequestBody message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverPingRequestBody.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverPingRequestBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramGameserverPingRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramGameserverPingRequestBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramGameserverPingRequestBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramGameserverPingRequestBody;

    /**
     * Decodes a CMsgSteamDatagramGameserverPingRequestBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramGameserverPingRequestBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramGameserverPingRequestBody;

    /**
     * Verifies a CMsgSteamDatagramGameserverPingRequestBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramGameserverPingRequestBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramGameserverPingRequestBody
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramGameserverPingRequestBody;

    /**
     * Creates a plain object from a CMsgSteamDatagramGameserverPingRequestBody message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramGameserverPingRequestBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramGameserverPingRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramGameserverPingRequestBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramGameserverPingRequestBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramGameserverPingRequestEnvelope. */
export class CMsgSteamDatagramGameserverPingRequestEnvelope implements ICMsgSteamDatagramGameserverPingRequestEnvelope {

    /**
     * Constructs a new CMsgSteamDatagramGameserverPingRequestEnvelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramGameserverPingRequestEnvelope);

    /** CMsgSteamDatagramGameserverPingRequestEnvelope cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamDatagramGameserverPingRequestEnvelope signedData. */
    public signedData: Uint8Array;

    /** CMsgSteamDatagramGameserverPingRequestEnvelope signature. */
    public signature: Uint8Array;

    /** CMsgSteamDatagramGameserverPingRequestEnvelope legacyYourPublicIp. */
    public legacyYourPublicIp: number;

    /** CMsgSteamDatagramGameserverPingRequestEnvelope legacyYourPublicPort. */
    public legacyYourPublicPort: number;

    /** CMsgSteamDatagramGameserverPingRequestEnvelope legacyRelayUnixTime. */
    public legacyRelayUnixTime: number;

    /** CMsgSteamDatagramGameserverPingRequestEnvelope legacyChallenge. */
    public legacyChallenge: (number|Long);

    /** CMsgSteamDatagramGameserverPingRequestEnvelope legacyRouterTimestamp. */
    public legacyRouterTimestamp: number;

    /** CMsgSteamDatagramGameserverPingRequestEnvelope dummyPad. */
    public dummyPad: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramGameserverPingRequestEnvelope instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramGameserverPingRequestEnvelope instance
     */
    public static create(properties?: ICMsgSteamDatagramGameserverPingRequestEnvelope): CMsgSteamDatagramGameserverPingRequestEnvelope;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverPingRequestEnvelope message. Does not implicitly {@link CMsgSteamDatagramGameserverPingRequestEnvelope.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverPingRequestEnvelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramGameserverPingRequestEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverPingRequestEnvelope message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverPingRequestEnvelope.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverPingRequestEnvelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramGameserverPingRequestEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramGameserverPingRequestEnvelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramGameserverPingRequestEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramGameserverPingRequestEnvelope;

    /**
     * Decodes a CMsgSteamDatagramGameserverPingRequestEnvelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramGameserverPingRequestEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramGameserverPingRequestEnvelope;

    /**
     * Verifies a CMsgSteamDatagramGameserverPingRequestEnvelope message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramGameserverPingRequestEnvelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramGameserverPingRequestEnvelope
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramGameserverPingRequestEnvelope;

    /**
     * Creates a plain object from a CMsgSteamDatagramGameserverPingRequestEnvelope message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramGameserverPingRequestEnvelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramGameserverPingRequestEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramGameserverPingRequestEnvelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramGameserverPingRequestEnvelope
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramGameserverPingReplyData. */
export class CMsgSteamDatagramGameserverPingReplyData implements ICMsgSteamDatagramGameserverPingReplyData {

    /**
     * Constructs a new CMsgSteamDatagramGameserverPingReplyData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramGameserverPingReplyData);

    /** CMsgSteamDatagramGameserverPingReplyData echoRelayUnixTime. */
    public echoRelayUnixTime: number;

    /** CMsgSteamDatagramGameserverPingReplyData echo. */
    public echo: Uint8Array;

    /** CMsgSteamDatagramGameserverPingReplyData legacyChallenge. */
    public legacyChallenge: (number|Long);

    /** CMsgSteamDatagramGameserverPingReplyData legacyRouterTimestamp. */
    public legacyRouterTimestamp: number;

    /** CMsgSteamDatagramGameserverPingReplyData dataCenterId. */
    public dataCenterId: number;

    /** CMsgSteamDatagramGameserverPingReplyData appid. */
    public appid: number;

    /** CMsgSteamDatagramGameserverPingReplyData protocolVersion. */
    public protocolVersion: number;

    /** CMsgSteamDatagramGameserverPingReplyData build. */
    public build: string;

    /** CMsgSteamDatagramGameserverPingReplyData networkConfigVersion. */
    public networkConfigVersion: (number|Long);

    /** CMsgSteamDatagramGameserverPingReplyData myUnixTime. */
    public myUnixTime: number;

    /** CMsgSteamDatagramGameserverPingReplyData routingBlob. */
    public routingBlob: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramGameserverPingReplyData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramGameserverPingReplyData instance
     */
    public static create(properties?: ICMsgSteamDatagramGameserverPingReplyData): CMsgSteamDatagramGameserverPingReplyData;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverPingReplyData message. Does not implicitly {@link CMsgSteamDatagramGameserverPingReplyData.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverPingReplyData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramGameserverPingReplyData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverPingReplyData message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverPingReplyData.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverPingReplyData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramGameserverPingReplyData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramGameserverPingReplyData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramGameserverPingReplyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramGameserverPingReplyData;

    /**
     * Decodes a CMsgSteamDatagramGameserverPingReplyData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramGameserverPingReplyData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramGameserverPingReplyData;

    /**
     * Verifies a CMsgSteamDatagramGameserverPingReplyData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramGameserverPingReplyData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramGameserverPingReplyData
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramGameserverPingReplyData;

    /**
     * Creates a plain object from a CMsgSteamDatagramGameserverPingReplyData message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramGameserverPingReplyData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramGameserverPingReplyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramGameserverPingReplyData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramGameserverPingReplyData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramNoSessionRelayToClient. */
export class CMsgSteamDatagramNoSessionRelayToClient implements ICMsgSteamDatagramNoSessionRelayToClient {

    /**
     * Constructs a new CMsgSteamDatagramNoSessionRelayToClient.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramNoSessionRelayToClient);

    /** CMsgSteamDatagramNoSessionRelayToClient connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramNoSessionRelayToClient yourPublicIp. */
    public yourPublicIp: number;

    /** CMsgSteamDatagramNoSessionRelayToClient yourPublicPort. */
    public yourPublicPort: number;

    /** CMsgSteamDatagramNoSessionRelayToClient serverTime. */
    public serverTime: number;

    /** CMsgSteamDatagramNoSessionRelayToClient challenge. */
    public challenge: (number|Long);

    /** CMsgSteamDatagramNoSessionRelayToClient secondsUntilShutdown. */
    public secondsUntilShutdown: number;

    /**
     * Creates a new CMsgSteamDatagramNoSessionRelayToClient instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramNoSessionRelayToClient instance
     */
    public static create(properties?: ICMsgSteamDatagramNoSessionRelayToClient): CMsgSteamDatagramNoSessionRelayToClient;

    /**
     * Encodes the specified CMsgSteamDatagramNoSessionRelayToClient message. Does not implicitly {@link CMsgSteamDatagramNoSessionRelayToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramNoSessionRelayToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramNoSessionRelayToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramNoSessionRelayToClient message, length delimited. Does not implicitly {@link CMsgSteamDatagramNoSessionRelayToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramNoSessionRelayToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramNoSessionRelayToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramNoSessionRelayToClient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramNoSessionRelayToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramNoSessionRelayToClient;

    /**
     * Decodes a CMsgSteamDatagramNoSessionRelayToClient message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramNoSessionRelayToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramNoSessionRelayToClient;

    /**
     * Verifies a CMsgSteamDatagramNoSessionRelayToClient message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramNoSessionRelayToClient message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramNoSessionRelayToClient
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramNoSessionRelayToClient;

    /**
     * Creates a plain object from a CMsgSteamDatagramNoSessionRelayToClient message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramNoSessionRelayToClient
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramNoSessionRelayToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramNoSessionRelayToClient to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramNoSessionRelayToClient
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramNoSessionRelayToPeer. */
export class CMsgSteamDatagramNoSessionRelayToPeer implements ICMsgSteamDatagramNoSessionRelayToPeer {

    /**
     * Constructs a new CMsgSteamDatagramNoSessionRelayToPeer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramNoSessionRelayToPeer);

    /** CMsgSteamDatagramNoSessionRelayToPeer legacyRelaySessionId. */
    public legacyRelaySessionId: number;

    /** CMsgSteamDatagramNoSessionRelayToPeer fromRelaySessionId. */
    public fromRelaySessionId: number;

    /** CMsgSteamDatagramNoSessionRelayToPeer fromConnectionId. */
    public fromConnectionId: number;

    /** CMsgSteamDatagramNoSessionRelayToPeer kludgePad. */
    public kludgePad: (number|Long);

    /**
     * Creates a new CMsgSteamDatagramNoSessionRelayToPeer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramNoSessionRelayToPeer instance
     */
    public static create(properties?: ICMsgSteamDatagramNoSessionRelayToPeer): CMsgSteamDatagramNoSessionRelayToPeer;

    /**
     * Encodes the specified CMsgSteamDatagramNoSessionRelayToPeer message. Does not implicitly {@link CMsgSteamDatagramNoSessionRelayToPeer.verify|verify} messages.
     * @param message CMsgSteamDatagramNoSessionRelayToPeer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramNoSessionRelayToPeer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramNoSessionRelayToPeer message, length delimited. Does not implicitly {@link CMsgSteamDatagramNoSessionRelayToPeer.verify|verify} messages.
     * @param message CMsgSteamDatagramNoSessionRelayToPeer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramNoSessionRelayToPeer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramNoSessionRelayToPeer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramNoSessionRelayToPeer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramNoSessionRelayToPeer;

    /**
     * Decodes a CMsgSteamDatagramNoSessionRelayToPeer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramNoSessionRelayToPeer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramNoSessionRelayToPeer;

    /**
     * Verifies a CMsgSteamDatagramNoSessionRelayToPeer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramNoSessionRelayToPeer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramNoSessionRelayToPeer
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramNoSessionRelayToPeer;

    /**
     * Creates a plain object from a CMsgSteamDatagramNoSessionRelayToPeer message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramNoSessionRelayToPeer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramNoSessionRelayToPeer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramNoSessionRelayToPeer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramNoSessionRelayToPeer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramClientPingSampleRequest. */
export class CMsgSteamDatagramClientPingSampleRequest implements ICMsgSteamDatagramClientPingSampleRequest {

    /**
     * Constructs a new CMsgSteamDatagramClientPingSampleRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramClientPingSampleRequest);

    /** CMsgSteamDatagramClientPingSampleRequest connectionId. */
    public connectionId: number;

    /**
     * Creates a new CMsgSteamDatagramClientPingSampleRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramClientPingSampleRequest instance
     */
    public static create(properties?: ICMsgSteamDatagramClientPingSampleRequest): CMsgSteamDatagramClientPingSampleRequest;

    /**
     * Encodes the specified CMsgSteamDatagramClientPingSampleRequest message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramClientPingSampleRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramClientPingSampleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramClientPingSampleRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramClientPingSampleRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramClientPingSampleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramClientPingSampleRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramClientPingSampleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramClientPingSampleRequest;

    /**
     * Decodes a CMsgSteamDatagramClientPingSampleRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramClientPingSampleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramClientPingSampleRequest;

    /**
     * Verifies a CMsgSteamDatagramClientPingSampleRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramClientPingSampleRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramClientPingSampleRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramClientPingSampleRequest;

    /**
     * Creates a plain object from a CMsgSteamDatagramClientPingSampleRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramClientPingSampleRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramClientPingSampleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramClientPingSampleRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramClientPingSampleRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramClientPingSampleReply. */
export class CMsgSteamDatagramClientPingSampleReply implements ICMsgSteamDatagramClientPingSampleReply {

    /**
     * Constructs a new CMsgSteamDatagramClientPingSampleReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramClientPingSampleReply);

    /** CMsgSteamDatagramClientPingSampleReply connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramClientPingSampleReply relayOverrideActive. */
    public relayOverrideActive: boolean;

    /** CMsgSteamDatagramClientPingSampleReply pops. */
    public pops: CMsgSteamDatagramClientPingSampleReply.IPOP[];

    /** CMsgSteamDatagramClientPingSampleReply legacyDataCenters. */
    public legacyDataCenters: CMsgSteamDatagramClientPingSampleReply.ILegacyDataCenter[];

    /**
     * Creates a new CMsgSteamDatagramClientPingSampleReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramClientPingSampleReply instance
     */
    public static create(properties?: ICMsgSteamDatagramClientPingSampleReply): CMsgSteamDatagramClientPingSampleReply;

    /**
     * Encodes the specified CMsgSteamDatagramClientPingSampleReply message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.verify|verify} messages.
     * @param message CMsgSteamDatagramClientPingSampleReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramClientPingSampleReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramClientPingSampleReply message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.verify|verify} messages.
     * @param message CMsgSteamDatagramClientPingSampleReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramClientPingSampleReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramClientPingSampleReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramClientPingSampleReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramClientPingSampleReply;

    /**
     * Decodes a CMsgSteamDatagramClientPingSampleReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramClientPingSampleReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramClientPingSampleReply;

    /**
     * Verifies a CMsgSteamDatagramClientPingSampleReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramClientPingSampleReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramClientPingSampleReply
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramClientPingSampleReply;

    /**
     * Creates a plain object from a CMsgSteamDatagramClientPingSampleReply message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramClientPingSampleReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramClientPingSampleReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramClientPingSampleReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramClientPingSampleReply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramClientPingSampleReply {

    /** Properties of a POP. */
    interface IPOP {

        /** POP popId */
        popId?: (number|null);

        /** POP defaultFrontPingMs */
        defaultFrontPingMs?: (number|null);

        /** POP clusterPenalty */
        clusterPenalty?: (number|null);

        /** POP altAddresses */
        altAddresses?: (CMsgSteamDatagramClientPingSampleReply.POP.IAltAddress[]|null);

        /** POP defaultE2ePingMs */
        defaultE2ePingMs?: (number|null);

        /** POP defaultE2eScore */
        defaultE2eScore?: (number|null);

        /** POP p2pViaPeerRelayPopId */
        p2pViaPeerRelayPopId?: (number|null);

        /** POP bestDcPingMs */
        bestDcPingMs?: (number|null);

        /** POP bestDcScore */
        bestDcScore?: (number|null);

        /** POP bestDcViaRelayPopId */
        bestDcViaRelayPopId?: (number|null);

        /** POP defaultDcPingMs */
        defaultDcPingMs?: (number|null);

        /** POP defaultDcScore */
        defaultDcScore?: (number|null);

        /** POP defaultDcViaRelayPopId */
        defaultDcViaRelayPopId?: (number|null);

        /** POP testDcPingMs */
        testDcPingMs?: (number|null);

        /** POP testDcScore */
        testDcScore?: (number|null);

        /** POP testDcViaRelayPopId */
        testDcViaRelayPopId?: (number|null);
    }

    /** Represents a POP. */
    class POP implements IPOP {

        /**
         * Constructs a new POP.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramClientPingSampleReply.IPOP);

        /** POP popId. */
        public popId: number;

        /** POP defaultFrontPingMs. */
        public defaultFrontPingMs: number;

        /** POP clusterPenalty. */
        public clusterPenalty: number;

        /** POP altAddresses. */
        public altAddresses: CMsgSteamDatagramClientPingSampleReply.POP.IAltAddress[];

        /** POP defaultE2ePingMs. */
        public defaultE2ePingMs: number;

        /** POP defaultE2eScore. */
        public defaultE2eScore: number;

        /** POP p2pViaPeerRelayPopId. */
        public p2pViaPeerRelayPopId: number;

        /** POP bestDcPingMs. */
        public bestDcPingMs: number;

        /** POP bestDcScore. */
        public bestDcScore: number;

        /** POP bestDcViaRelayPopId. */
        public bestDcViaRelayPopId: number;

        /** POP defaultDcPingMs. */
        public defaultDcPingMs: number;

        /** POP defaultDcScore. */
        public defaultDcScore: number;

        /** POP defaultDcViaRelayPopId. */
        public defaultDcViaRelayPopId: number;

        /** POP testDcPingMs. */
        public testDcPingMs: number;

        /** POP testDcScore. */
        public testDcScore: number;

        /** POP testDcViaRelayPopId. */
        public testDcViaRelayPopId: number;

        /**
         * Creates a new POP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns POP instance
         */
        public static create(properties?: CMsgSteamDatagramClientPingSampleReply.IPOP): CMsgSteamDatagramClientPingSampleReply.POP;

        /**
         * Encodes the specified POP message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.POP.verify|verify} messages.
         * @param message POP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramClientPingSampleReply.IPOP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified POP message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.POP.verify|verify} messages.
         * @param message POP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramClientPingSampleReply.IPOP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a POP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns POP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramClientPingSampleReply.POP;

        /**
         * Decodes a POP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns POP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramClientPingSampleReply.POP;

        /**
         * Verifies a POP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a POP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns POP
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramClientPingSampleReply.POP;

        /**
         * Creates a plain object from a POP message. Also converts values to other types if specified.
         * @param message POP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramClientPingSampleReply.POP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this POP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for POP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace POP {

        /** Properties of an AltAddress. */
        interface IAltAddress {

            /** AltAddress id */
            id?: (string|null);

            /** AltAddress frontPingMs */
            frontPingMs?: (number|null);

            /** AltAddress penalty */
            penalty?: (number|null);
        }

        /** Represents an AltAddress. */
        class AltAddress implements IAltAddress {

            /**
             * Constructs a new AltAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: CMsgSteamDatagramClientPingSampleReply.POP.IAltAddress);

            /** AltAddress id. */
            public id: string;

            /** AltAddress frontPingMs. */
            public frontPingMs: number;

            /** AltAddress penalty. */
            public penalty: number;

            /**
             * Creates a new AltAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AltAddress instance
             */
            public static create(properties?: CMsgSteamDatagramClientPingSampleReply.POP.IAltAddress): CMsgSteamDatagramClientPingSampleReply.POP.AltAddress;

            /**
             * Encodes the specified AltAddress message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.POP.AltAddress.verify|verify} messages.
             * @param message AltAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CMsgSteamDatagramClientPingSampleReply.POP.IAltAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AltAddress message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.POP.AltAddress.verify|verify} messages.
             * @param message AltAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CMsgSteamDatagramClientPingSampleReply.POP.IAltAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AltAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AltAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramClientPingSampleReply.POP.AltAddress;

            /**
             * Decodes an AltAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AltAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramClientPingSampleReply.POP.AltAddress;

            /**
             * Verifies an AltAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AltAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AltAddress
             */
            public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramClientPingSampleReply.POP.AltAddress;

            /**
             * Creates a plain object from an AltAddress message. Also converts values to other types if specified.
             * @param message AltAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CMsgSteamDatagramClientPingSampleReply.POP.AltAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AltAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AltAddress
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a LegacyDataCenter. */
    interface ILegacyDataCenter {

        /** LegacyDataCenter dataCenterId */
        dataCenterId?: (number|null);

        /** LegacyDataCenter bestDcViaRelayPopId */
        bestDcViaRelayPopId?: (number|null);

        /** LegacyDataCenter bestDcPingMs */
        bestDcPingMs?: (number|null);
    }

    /** Represents a LegacyDataCenter. */
    class LegacyDataCenter implements ILegacyDataCenter {

        /**
         * Constructs a new LegacyDataCenter.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramClientPingSampleReply.ILegacyDataCenter);

        /** LegacyDataCenter dataCenterId. */
        public dataCenterId: number;

        /** LegacyDataCenter bestDcViaRelayPopId. */
        public bestDcViaRelayPopId: number;

        /** LegacyDataCenter bestDcPingMs. */
        public bestDcPingMs: number;

        /**
         * Creates a new LegacyDataCenter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LegacyDataCenter instance
         */
        public static create(properties?: CMsgSteamDatagramClientPingSampleReply.ILegacyDataCenter): CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter;

        /**
         * Encodes the specified LegacyDataCenter message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter.verify|verify} messages.
         * @param message LegacyDataCenter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramClientPingSampleReply.ILegacyDataCenter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LegacyDataCenter message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter.verify|verify} messages.
         * @param message LegacyDataCenter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramClientPingSampleReply.ILegacyDataCenter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LegacyDataCenter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LegacyDataCenter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter;

        /**
         * Decodes a LegacyDataCenter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LegacyDataCenter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter;

        /**
         * Verifies a LegacyDataCenter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LegacyDataCenter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LegacyDataCenter
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter;

        /**
         * Creates a plain object from a LegacyDataCenter message. Also converts values to other types if specified.
         * @param message LegacyDataCenter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LegacyDataCenter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LegacyDataCenter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgSteamDatagramClientSwitchedPrimary. */
export class CMsgSteamDatagramClientSwitchedPrimary implements ICMsgSteamDatagramClientSwitchedPrimary {

    /**
     * Constructs a new CMsgSteamDatagramClientSwitchedPrimary.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramClientSwitchedPrimary);

    /** CMsgSteamDatagramClientSwitchedPrimary connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramClientSwitchedPrimary fromIp. */
    public fromIp: number;

    /** CMsgSteamDatagramClientSwitchedPrimary fromPort. */
    public fromPort: number;

    /** CMsgSteamDatagramClientSwitchedPrimary fromRouterCluster. */
    public fromRouterCluster: number;

    /** CMsgSteamDatagramClientSwitchedPrimary fromActiveTime. */
    public fromActiveTime: number;

    /** CMsgSteamDatagramClientSwitchedPrimary fromActivePacketsRecv. */
    public fromActivePacketsRecv: number;

    /** CMsgSteamDatagramClientSwitchedPrimary fromDroppedReason. */
    public fromDroppedReason: string;

    /** CMsgSteamDatagramClientSwitchedPrimary gapMs. */
    public gapMs: number;

    /** CMsgSteamDatagramClientSwitchedPrimary fromQualityNow. */
    public fromQualityNow?: (CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null);

    /** CMsgSteamDatagramClientSwitchedPrimary toQualityNow. */
    public toQualityNow?: (CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null);

    /** CMsgSteamDatagramClientSwitchedPrimary fromQualityThen. */
    public fromQualityThen?: (CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null);

    /** CMsgSteamDatagramClientSwitchedPrimary toQualityThen. */
    public toQualityThen?: (CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null);

    /**
     * Creates a new CMsgSteamDatagramClientSwitchedPrimary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramClientSwitchedPrimary instance
     */
    public static create(properties?: ICMsgSteamDatagramClientSwitchedPrimary): CMsgSteamDatagramClientSwitchedPrimary;

    /**
     * Encodes the specified CMsgSteamDatagramClientSwitchedPrimary message. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.verify|verify} messages.
     * @param message CMsgSteamDatagramClientSwitchedPrimary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramClientSwitchedPrimary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramClientSwitchedPrimary message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.verify|verify} messages.
     * @param message CMsgSteamDatagramClientSwitchedPrimary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramClientSwitchedPrimary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramClientSwitchedPrimary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramClientSwitchedPrimary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramClientSwitchedPrimary;

    /**
     * Decodes a CMsgSteamDatagramClientSwitchedPrimary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramClientSwitchedPrimary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramClientSwitchedPrimary;

    /**
     * Verifies a CMsgSteamDatagramClientSwitchedPrimary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramClientSwitchedPrimary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramClientSwitchedPrimary
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramClientSwitchedPrimary;

    /**
     * Creates a plain object from a CMsgSteamDatagramClientSwitchedPrimary message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramClientSwitchedPrimary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramClientSwitchedPrimary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramClientSwitchedPrimary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramClientSwitchedPrimary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramClientSwitchedPrimary {

    /** Properties of a RouterQuality. */
    interface IRouterQuality {

        /** RouterQuality score */
        score?: (number|null);

        /** RouterQuality frontPing */
        frontPing?: (number|null);

        /** RouterQuality backPing */
        backPing?: (number|null);

        /** RouterQuality secondsUntilDown */
        secondsUntilDown?: (number|null);
    }

    /** Represents a RouterQuality. */
    class RouterQuality implements IRouterQuality {

        /**
         * Constructs a new RouterQuality.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality);

        /** RouterQuality score. */
        public score: number;

        /** RouterQuality frontPing. */
        public frontPing: number;

        /** RouterQuality backPing. */
        public backPing: number;

        /** RouterQuality secondsUntilDown. */
        public secondsUntilDown: number;

        /**
         * Creates a new RouterQuality instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouterQuality instance
         */
        public static create(properties?: CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality): CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;

        /**
         * Encodes the specified RouterQuality message. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify|verify} messages.
         * @param message RouterQuality message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouterQuality message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify|verify} messages.
         * @param message RouterQuality message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouterQuality message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouterQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;

        /**
         * Decodes a RouterQuality message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouterQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;

        /**
         * Verifies a RouterQuality message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouterQuality message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouterQuality
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;

        /**
         * Creates a plain object from a RouterQuality message. Also converts values to other types if specified.
         * @param message RouterQuality
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramClientSwitchedPrimary.RouterQuality, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouterQuality to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouterQuality
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgSteamDatagramConnectRequest. */
export class CMsgSteamDatagramConnectRequest implements ICMsgSteamDatagramConnectRequest {

    /**
     * Constructs a new CMsgSteamDatagramConnectRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectRequest);

    /** CMsgSteamDatagramConnectRequest connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramConnectRequest myTimestamp. */
    public myTimestamp: (number|Long);

    /** CMsgSteamDatagramConnectRequest pingEstMs. */
    public pingEstMs: number;

    /** CMsgSteamDatagramConnectRequest virtualPort. */
    public virtualPort: number;

    /** CMsgSteamDatagramConnectRequest gameserverRelaySessionId. */
    public gameserverRelaySessionId: number;

    /** CMsgSteamDatagramConnectRequest crypt. */
    public crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

    /** CMsgSteamDatagramConnectRequest cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamDatagramConnectRequest routingSecret. */
    public routingSecret: (number|Long);

    /** CMsgSteamDatagramConnectRequest legacyClientSteamId. */
    public legacyClientSteamId: (number|Long);

    /**
     * Creates a new CMsgSteamDatagramConnectRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectRequest instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectRequest): CMsgSteamDatagramConnectRequest;

    /**
     * Encodes the specified CMsgSteamDatagramConnectRequest message. Does not implicitly {@link CMsgSteamDatagramConnectRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectRequest;

    /**
     * Decodes a CMsgSteamDatagramConnectRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectRequest;

    /**
     * Verifies a CMsgSteamDatagramConnectRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectRequest;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramConnectOK. */
export class CMsgSteamDatagramConnectOK implements ICMsgSteamDatagramConnectOK {

    /**
     * Constructs a new CMsgSteamDatagramConnectOK.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectOK);

    /** CMsgSteamDatagramConnectOK clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramConnectOK serverConnectionId. */
    public serverConnectionId: number;

    /** CMsgSteamDatagramConnectOK yourTimestamp. */
    public yourTimestamp: (number|Long);

    /** CMsgSteamDatagramConnectOK delayTimeUsec. */
    public delayTimeUsec: number;

    /** CMsgSteamDatagramConnectOK gameserverRelaySessionId. */
    public gameserverRelaySessionId: number;

    /** CMsgSteamDatagramConnectOK crypt. */
    public crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

    /** CMsgSteamDatagramConnectOK cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /**
     * Creates a new CMsgSteamDatagramConnectOK instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectOK instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectOK): CMsgSteamDatagramConnectOK;

    /**
     * Encodes the specified CMsgSteamDatagramConnectOK message. Does not implicitly {@link CMsgSteamDatagramConnectOK.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectOK message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectOK, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectOK message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectOK.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectOK message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectOK, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectOK message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectOK
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectOK;

    /**
     * Decodes a CMsgSteamDatagramConnectOK message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectOK
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectOK;

    /**
     * Verifies a CMsgSteamDatagramConnectOK message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectOK message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectOK
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectOK;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectOK message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectOK
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectOK, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectOK to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectOK
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamNetworkingP2PSDRRoutingSummary. */
export class CMsgSteamNetworkingP2PSDRRoutingSummary implements ICMsgSteamNetworkingP2PSDRRoutingSummary {

    /**
     * Constructs a new CMsgSteamNetworkingP2PSDRRoutingSummary.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamNetworkingP2PSDRRoutingSummary);

    /** CMsgSteamNetworkingP2PSDRRoutingSummary initialPing. */
    public initialPing: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary initialPingFrontLocal. */
    public initialPingFrontLocal: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary initialPingFrontRemote. */
    public initialPingFrontRemote: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary initialScore. */
    public initialScore: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary initialPopLocal. */
    public initialPopLocal: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary initialPopRemote. */
    public initialPopRemote: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary bestPing. */
    public bestPing: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary bestPingFrontLocal. */
    public bestPingFrontLocal: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary bestPingFrontRemote. */
    public bestPingFrontRemote: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary bestScore. */
    public bestScore: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary bestPopLocal. */
    public bestPopLocal: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary bestPopRemote. */
    public bestPopRemote: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary bestTime. */
    public bestTime: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary negotiationMs. */
    public negotiationMs: number;

    /** CMsgSteamNetworkingP2PSDRRoutingSummary selectedSeconds. */
    public selectedSeconds: number;

    /**
     * Creates a new CMsgSteamNetworkingP2PSDRRoutingSummary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamNetworkingP2PSDRRoutingSummary instance
     */
    public static create(properties?: ICMsgSteamNetworkingP2PSDRRoutingSummary): CMsgSteamNetworkingP2PSDRRoutingSummary;

    /**
     * Encodes the specified CMsgSteamNetworkingP2PSDRRoutingSummary message. Does not implicitly {@link CMsgSteamNetworkingP2PSDRRoutingSummary.verify|verify} messages.
     * @param message CMsgSteamNetworkingP2PSDRRoutingSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamNetworkingP2PSDRRoutingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamNetworkingP2PSDRRoutingSummary message, length delimited. Does not implicitly {@link CMsgSteamNetworkingP2PSDRRoutingSummary.verify|verify} messages.
     * @param message CMsgSteamNetworkingP2PSDRRoutingSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamNetworkingP2PSDRRoutingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamNetworkingP2PSDRRoutingSummary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamNetworkingP2PSDRRoutingSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamNetworkingP2PSDRRoutingSummary;

    /**
     * Decodes a CMsgSteamNetworkingP2PSDRRoutingSummary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamNetworkingP2PSDRRoutingSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamNetworkingP2PSDRRoutingSummary;

    /**
     * Verifies a CMsgSteamNetworkingP2PSDRRoutingSummary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamNetworkingP2PSDRRoutingSummary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamNetworkingP2PSDRRoutingSummary
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamNetworkingP2PSDRRoutingSummary;

    /**
     * Creates a plain object from a CMsgSteamNetworkingP2PSDRRoutingSummary message. Also converts values to other types if specified.
     * @param message CMsgSteamNetworkingP2PSDRRoutingSummary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamNetworkingP2PSDRRoutingSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamNetworkingP2PSDRRoutingSummary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamNetworkingP2PSDRRoutingSummary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramP2PRoutingSummary. */
export class CMsgSteamDatagramP2PRoutingSummary implements ICMsgSteamDatagramP2PRoutingSummary {

    /**
     * Constructs a new CMsgSteamDatagramP2PRoutingSummary.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramP2PRoutingSummary);

    /** CMsgSteamDatagramP2PRoutingSummary ice. */
    public ice?: (ICMsgSteamNetworkingICESessionSummary|null);

    /** CMsgSteamDatagramP2PRoutingSummary sdr. */
    public sdr?: (ICMsgSteamNetworkingP2PSDRRoutingSummary|null);

    /**
     * Creates a new CMsgSteamDatagramP2PRoutingSummary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramP2PRoutingSummary instance
     */
    public static create(properties?: ICMsgSteamDatagramP2PRoutingSummary): CMsgSteamDatagramP2PRoutingSummary;

    /**
     * Encodes the specified CMsgSteamDatagramP2PRoutingSummary message. Does not implicitly {@link CMsgSteamDatagramP2PRoutingSummary.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PRoutingSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramP2PRoutingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramP2PRoutingSummary message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PRoutingSummary.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PRoutingSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramP2PRoutingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramP2PRoutingSummary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramP2PRoutingSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PRoutingSummary;

    /**
     * Decodes a CMsgSteamDatagramP2PRoutingSummary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramP2PRoutingSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PRoutingSummary;

    /**
     * Verifies a CMsgSteamDatagramP2PRoutingSummary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramP2PRoutingSummary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramP2PRoutingSummary
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PRoutingSummary;

    /**
     * Creates a plain object from a CMsgSteamDatagramP2PRoutingSummary message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramP2PRoutingSummary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramP2PRoutingSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramP2PRoutingSummary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramP2PRoutingSummary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramConnectionClosed. */
export class CMsgSteamDatagramConnectionClosed implements ICMsgSteamDatagramConnectionClosed {

    /**
     * Constructs a new CMsgSteamDatagramConnectionClosed.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionClosed);

    /** CMsgSteamDatagramConnectionClosed toConnectionId. */
    public toConnectionId: number;

    /** CMsgSteamDatagramConnectionClosed fromConnectionId. */
    public fromConnectionId: number;

    /** CMsgSteamDatagramConnectionClosed fromIdentityString. */
    public fromIdentityString: string;

    /** CMsgSteamDatagramConnectionClosed legacyFromIdentityBinary. */
    public legacyFromIdentityBinary?: (ICMsgSteamNetworkingIdentityLegacyBinary|null);

    /** CMsgSteamDatagramConnectionClosed legacyFromSteamId. */
    public legacyFromSteamId: (number|Long);

    /** CMsgSteamDatagramConnectionClosed legacyGameserverRelaySessionId. */
    public legacyGameserverRelaySessionId: number;

    /** CMsgSteamDatagramConnectionClosed toRelaySessionId. */
    public toRelaySessionId: number;

    /** CMsgSteamDatagramConnectionClosed fromRelaySessionId. */
    public fromRelaySessionId: number;

    /** CMsgSteamDatagramConnectionClosed forwardTargetRelayRoutingToken. */
    public forwardTargetRelayRoutingToken: Uint8Array;

    /** CMsgSteamDatagramConnectionClosed forwardTargetRevision. */
    public forwardTargetRevision: number;

    /** CMsgSteamDatagramConnectionClosed relayMode. */
    public relayMode: CMsgSteamDatagramConnectionClosed.ERelayMode;

    /** CMsgSteamDatagramConnectionClosed debug. */
    public debug: string;

    /** CMsgSteamDatagramConnectionClosed reasonCode. */
    public reasonCode: number;

    /** CMsgSteamDatagramConnectionClosed routingSecret. */
    public routingSecret: (number|Long);

    /** CMsgSteamDatagramConnectionClosed notPrimarySession. */
    public notPrimarySession: boolean;

    /** CMsgSteamDatagramConnectionClosed notPrimaryTransport. */
    public notPrimaryTransport: boolean;

    /** CMsgSteamDatagramConnectionClosed relayOverrideActive. */
    public relayOverrideActive: boolean;

    /** CMsgSteamDatagramConnectionClosed qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionClosed qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionClosed p2pRoutingSummary. */
    public p2pRoutingSummary?: (ICMsgSteamDatagramP2PRoutingSummary|null);

    /**
     * Creates a new CMsgSteamDatagramConnectionClosed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionClosed instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionClosed): CMsgSteamDatagramConnectionClosed;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionClosed message. Does not implicitly {@link CMsgSteamDatagramConnectionClosed.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionClosed message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionClosed.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionClosed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionClosed;

    /**
     * Decodes a CMsgSteamDatagramConnectionClosed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionClosed;

    /**
     * Verifies a CMsgSteamDatagramConnectionClosed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionClosed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionClosed
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionClosed;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionClosed message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionClosed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionClosed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionClosed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramConnectionClosed {

    /** ERelayMode enum. */
    enum ERelayMode {
        None = 0,
        EndToEnd = 1,
        ClosedByPeer = 2
    }
}

/** Represents a CMsgSteamDatagramNoConnection. */
export class CMsgSteamDatagramNoConnection implements ICMsgSteamDatagramNoConnection {

    /**
     * Constructs a new CMsgSteamDatagramNoConnection.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramNoConnection);

    /** CMsgSteamDatagramNoConnection toConnectionId. */
    public toConnectionId: number;

    /** CMsgSteamDatagramNoConnection fromConnectionId. */
    public fromConnectionId: number;

    /** CMsgSteamDatagramNoConnection legacyGameserverRelaySessionId. */
    public legacyGameserverRelaySessionId: number;

    /** CMsgSteamDatagramNoConnection toRelaySessionId. */
    public toRelaySessionId: number;

    /** CMsgSteamDatagramNoConnection fromRelaySessionId. */
    public fromRelaySessionId: number;

    /** CMsgSteamDatagramNoConnection fromIdentityString. */
    public fromIdentityString: string;

    /** CMsgSteamDatagramNoConnection legacyFromSteamId. */
    public legacyFromSteamId: (number|Long);

    /** CMsgSteamDatagramNoConnection endToEnd. */
    public endToEnd: boolean;

    /** CMsgSteamDatagramNoConnection notPrimarySession. */
    public notPrimarySession: boolean;

    /** CMsgSteamDatagramNoConnection notPrimaryTransport. */
    public notPrimaryTransport: boolean;

    /** CMsgSteamDatagramNoConnection relayOverrideActive. */
    public relayOverrideActive: boolean;

    /** CMsgSteamDatagramNoConnection qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramNoConnection qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramNoConnection p2pRoutingSummary. */
    public p2pRoutingSummary?: (ICMsgSteamDatagramP2PRoutingSummary|null);

    /** CMsgSteamDatagramNoConnection routingSecret. */
    public routingSecret: (number|Long);

    /** CMsgSteamDatagramNoConnection dummyPad. */
    public dummyPad: number;

    /**
     * Creates a new CMsgSteamDatagramNoConnection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramNoConnection instance
     */
    public static create(properties?: ICMsgSteamDatagramNoConnection): CMsgSteamDatagramNoConnection;

    /**
     * Encodes the specified CMsgSteamDatagramNoConnection message. Does not implicitly {@link CMsgSteamDatagramNoConnection.verify|verify} messages.
     * @param message CMsgSteamDatagramNoConnection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramNoConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramNoConnection message, length delimited. Does not implicitly {@link CMsgSteamDatagramNoConnection.verify|verify} messages.
     * @param message CMsgSteamDatagramNoConnection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramNoConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramNoConnection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramNoConnection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramNoConnection;

    /**
     * Decodes a CMsgSteamDatagramNoConnection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramNoConnection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramNoConnection;

    /**
     * Verifies a CMsgSteamDatagramNoConnection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramNoConnection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramNoConnection
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramNoConnection;

    /**
     * Creates a plain object from a CMsgSteamDatagramNoConnection message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramNoConnection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramNoConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramNoConnection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramNoConnection
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramGameserverSessionRequest. */
export class CMsgSteamDatagramGameserverSessionRequest implements ICMsgSteamDatagramGameserverSessionRequest {

    /**
     * Constructs a new CMsgSteamDatagramGameserverSessionRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramGameserverSessionRequest);

    /** CMsgSteamDatagramGameserverSessionRequest ticket. */
    public ticket: Uint8Array;

    /** CMsgSteamDatagramGameserverSessionRequest challengeTime. */
    public challengeTime: number;

    /** CMsgSteamDatagramGameserverSessionRequest challenge. */
    public challenge: (number|Long);

    /** CMsgSteamDatagramGameserverSessionRequest clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramGameserverSessionRequest serverConnectionId. */
    public serverConnectionId: number;

    /** CMsgSteamDatagramGameserverSessionRequest networkConfigVersion. */
    public networkConfigVersion: (number|Long);

    /** CMsgSteamDatagramGameserverSessionRequest protocolVersion. */
    public protocolVersion: number;

    /** CMsgSteamDatagramGameserverSessionRequest platform. */
    public platform: string;

    /** CMsgSteamDatagramGameserverSessionRequest build. */
    public build: string;

    /** CMsgSteamDatagramGameserverSessionRequest devGameserverIdentity. */
    public devGameserverIdentity: string;

    /** CMsgSteamDatagramGameserverSessionRequest devClientCert. */
    public devClientCert?: (ICMsgSteamDatagramCertificateSigned|null);

    /**
     * Creates a new CMsgSteamDatagramGameserverSessionRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramGameserverSessionRequest instance
     */
    public static create(properties?: ICMsgSteamDatagramGameserverSessionRequest): CMsgSteamDatagramGameserverSessionRequest;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverSessionRequest message. Does not implicitly {@link CMsgSteamDatagramGameserverSessionRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverSessionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramGameserverSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverSessionRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverSessionRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverSessionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramGameserverSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramGameserverSessionRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramGameserverSessionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramGameserverSessionRequest;

    /**
     * Decodes a CMsgSteamDatagramGameserverSessionRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramGameserverSessionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramGameserverSessionRequest;

    /**
     * Verifies a CMsgSteamDatagramGameserverSessionRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramGameserverSessionRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramGameserverSessionRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramGameserverSessionRequest;

    /**
     * Creates a plain object from a CMsgSteamDatagramGameserverSessionRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramGameserverSessionRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramGameserverSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramGameserverSessionRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramGameserverSessionRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramGameserverSessionEstablished. */
export class CMsgSteamDatagramGameserverSessionEstablished implements ICMsgSteamDatagramGameserverSessionEstablished {

    /**
     * Constructs a new CMsgSteamDatagramGameserverSessionEstablished.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramGameserverSessionEstablished);

    /** CMsgSteamDatagramGameserverSessionEstablished connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramGameserverSessionEstablished gameserverIdentityString. */
    public gameserverIdentityString: string;

    /** CMsgSteamDatagramGameserverSessionEstablished secondsUntilShutdown. */
    public secondsUntilShutdown: number;

    /** CMsgSteamDatagramGameserverSessionEstablished seqNumR2c. */
    public seqNumR2c: number;

    /** CMsgSteamDatagramGameserverSessionEstablished dummyLegacyIdentityBinary. */
    public dummyLegacyIdentityBinary: Uint8Array;

    /** CMsgSteamDatagramGameserverSessionEstablished legacyGameserverSteamid. */
    public legacyGameserverSteamid: (number|Long);

    /**
     * Creates a new CMsgSteamDatagramGameserverSessionEstablished instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramGameserverSessionEstablished instance
     */
    public static create(properties?: ICMsgSteamDatagramGameserverSessionEstablished): CMsgSteamDatagramGameserverSessionEstablished;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverSessionEstablished message. Does not implicitly {@link CMsgSteamDatagramGameserverSessionEstablished.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverSessionEstablished message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramGameserverSessionEstablished, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramGameserverSessionEstablished message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverSessionEstablished.verify|verify} messages.
     * @param message CMsgSteamDatagramGameserverSessionEstablished message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramGameserverSessionEstablished, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramGameserverSessionEstablished message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramGameserverSessionEstablished
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramGameserverSessionEstablished;

    /**
     * Decodes a CMsgSteamDatagramGameserverSessionEstablished message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramGameserverSessionEstablished
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramGameserverSessionEstablished;

    /**
     * Verifies a CMsgSteamDatagramGameserverSessionEstablished message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramGameserverSessionEstablished message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramGameserverSessionEstablished
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramGameserverSessionEstablished;

    /**
     * Creates a plain object from a CMsgSteamDatagramGameserverSessionEstablished message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramGameserverSessionEstablished
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramGameserverSessionEstablished, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramGameserverSessionEstablished to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramGameserverSessionEstablished
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramConnectionStatsClientToRouter. */
export class CMsgSteamDatagramConnectionStatsClientToRouter implements ICMsgSteamDatagramConnectionStatsClientToRouter {

    /**
     * Constructs a new CMsgSteamDatagramConnectionStatsClientToRouter.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionStatsClientToRouter);

    /** CMsgSteamDatagramConnectionStatsClientToRouter qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsClientToRouter qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsClientToRouter ackRelay. */
    public ackRelay: number[];

    /** CMsgSteamDatagramConnectionStatsClientToRouter legacyAckE2e. */
    public legacyAckE2e: number[];

    /** CMsgSteamDatagramConnectionStatsClientToRouter flags. */
    public flags: number;

    /** CMsgSteamDatagramConnectionStatsClientToRouter clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramConnectionStatsClientToRouter seqNumC2r. */
    public seqNumC2r: number;

    /** CMsgSteamDatagramConnectionStatsClientToRouter seqNumE2e. */
    public seqNumE2e: number;

    /**
     * Creates a new CMsgSteamDatagramConnectionStatsClientToRouter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionStatsClientToRouter instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionStatsClientToRouter): CMsgSteamDatagramConnectionStatsClientToRouter;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsClientToRouter message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsClientToRouter.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsClientToRouter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionStatsClientToRouter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsClientToRouter message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsClientToRouter.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsClientToRouter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionStatsClientToRouter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsClientToRouter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionStatsClientToRouter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionStatsClientToRouter;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsClientToRouter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionStatsClientToRouter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionStatsClientToRouter;

    /**
     * Verifies a CMsgSteamDatagramConnectionStatsClientToRouter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionStatsClientToRouter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionStatsClientToRouter
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionStatsClientToRouter;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionStatsClientToRouter message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionStatsClientToRouter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionStatsClientToRouter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionStatsClientToRouter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionStatsClientToRouter
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramConnectionStatsClientToRouter {

    /** Flags enum. */
    enum Flags {
        ACK_REQUEST_RELAY = 1,
        ACK_REQUEST_E2E = 2,
        ACK_REQUEST_IMMEDIATE = 4,
        NOT_PRIMARY_SESSION = 8,
        CLIENT_RELAY_OVERRIDE = 32
    }
}

/** Represents a CMsgSteamDatagramConnectionStatsRouterToClient. */
export class CMsgSteamDatagramConnectionStatsRouterToClient implements ICMsgSteamDatagramConnectionStatsRouterToClient {

    /**
     * Constructs a new CMsgSteamDatagramConnectionStatsRouterToClient.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionStatsRouterToClient);

    /** CMsgSteamDatagramConnectionStatsRouterToClient qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsRouterToClient qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsRouterToClient secondsUntilShutdown. */
    public secondsUntilShutdown: number;

    /** CMsgSteamDatagramConnectionStatsRouterToClient migrateRequestIp. */
    public migrateRequestIp: number;

    /** CMsgSteamDatagramConnectionStatsRouterToClient migrateRequestPort. */
    public migrateRequestPort: number;

    /** CMsgSteamDatagramConnectionStatsRouterToClient scoringPenaltyRelayCluster. */
    public scoringPenaltyRelayCluster: number;

    /** CMsgSteamDatagramConnectionStatsRouterToClient ackRelay. */
    public ackRelay: number[];

    /** CMsgSteamDatagramConnectionStatsRouterToClient legacyAckE2e. */
    public legacyAckE2e: number[];

    /** CMsgSteamDatagramConnectionStatsRouterToClient flags. */
    public flags: number;

    /** CMsgSteamDatagramConnectionStatsRouterToClient clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramConnectionStatsRouterToClient seqNumR2c. */
    public seqNumR2c: number;

    /** CMsgSteamDatagramConnectionStatsRouterToClient seqNumE2e. */
    public seqNumE2e: number;

    /**
     * Creates a new CMsgSteamDatagramConnectionStatsRouterToClient instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionStatsRouterToClient instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionStatsRouterToClient): CMsgSteamDatagramConnectionStatsRouterToClient;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToClient message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsRouterToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionStatsRouterToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToClient message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsRouterToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionStatsRouterToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsRouterToClient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionStatsRouterToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionStatsRouterToClient;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsRouterToClient message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionStatsRouterToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionStatsRouterToClient;

    /**
     * Verifies a CMsgSteamDatagramConnectionStatsRouterToClient message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionStatsRouterToClient message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionStatsRouterToClient
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionStatsRouterToClient;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionStatsRouterToClient message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionStatsRouterToClient
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionStatsRouterToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionStatsRouterToClient to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionStatsRouterToClient
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramConnectionStatsRouterToClient {

    /** Flags enum. */
    enum Flags {
        ACK_REQUEST_RELAY = 1,
        ACK_REQUEST_E2E = 2,
        ACK_REQUEST_IMMEDIATE = 4
    }
}

/** Represents a CMsgSteamDatagramConnectionStatsRouterToServer. */
export class CMsgSteamDatagramConnectionStatsRouterToServer implements ICMsgSteamDatagramConnectionStatsRouterToServer {

    /**
     * Constructs a new CMsgSteamDatagramConnectionStatsRouterToServer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionStatsRouterToServer);

    /** CMsgSteamDatagramConnectionStatsRouterToServer qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsRouterToServer qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsRouterToServer ackRelay. */
    public ackRelay: number[];

    /** CMsgSteamDatagramConnectionStatsRouterToServer legacyAckE2e. */
    public legacyAckE2e: number[];

    /** CMsgSteamDatagramConnectionStatsRouterToServer flags. */
    public flags: number;

    /** CMsgSteamDatagramConnectionStatsRouterToServer seqNumR2s. */
    public seqNumR2s: number;

    /** CMsgSteamDatagramConnectionStatsRouterToServer seqNumE2e. */
    public seqNumE2e: number;

    /** CMsgSteamDatagramConnectionStatsRouterToServer clientIdentityString. */
    public clientIdentityString: string;

    /** CMsgSteamDatagramConnectionStatsRouterToServer legacyClientSteamId. */
    public legacyClientSteamId: (number|Long);

    /** CMsgSteamDatagramConnectionStatsRouterToServer relaySessionId. */
    public relaySessionId: number;

    /** CMsgSteamDatagramConnectionStatsRouterToServer clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramConnectionStatsRouterToServer serverConnectionId. */
    public serverConnectionId: number;

    /** CMsgSteamDatagramConnectionStatsRouterToServer routingSecret. */
    public routingSecret: (number|Long);

    /**
     * Creates a new CMsgSteamDatagramConnectionStatsRouterToServer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionStatsRouterToServer instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionStatsRouterToServer): CMsgSteamDatagramConnectionStatsRouterToServer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToServer message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToServer.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsRouterToServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionStatsRouterToServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToServer message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToServer.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsRouterToServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionStatsRouterToServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsRouterToServer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionStatsRouterToServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionStatsRouterToServer;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsRouterToServer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionStatsRouterToServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionStatsRouterToServer;

    /**
     * Verifies a CMsgSteamDatagramConnectionStatsRouterToServer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionStatsRouterToServer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionStatsRouterToServer
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionStatsRouterToServer;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionStatsRouterToServer message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionStatsRouterToServer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionStatsRouterToServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionStatsRouterToServer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionStatsRouterToServer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramConnectionStatsRouterToServer {

    /** Flags enum. */
    enum Flags {
        ACK_REQUEST_RELAY = 1,
        ACK_REQUEST_E2E = 2,
        ACK_REQUEST_IMMEDIATE = 4
    }
}

/** Represents a CMsgSteamDatagramConnectionStatsServerToRouter. */
export class CMsgSteamDatagramConnectionStatsServerToRouter implements ICMsgSteamDatagramConnectionStatsServerToRouter {

    /**
     * Constructs a new CMsgSteamDatagramConnectionStatsServerToRouter.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionStatsServerToRouter);

    /** CMsgSteamDatagramConnectionStatsServerToRouter qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsServerToRouter qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsServerToRouter ackRelay. */
    public ackRelay: number[];

    /** CMsgSteamDatagramConnectionStatsServerToRouter legacyAckE2e. */
    public legacyAckE2e: number[];

    /** CMsgSteamDatagramConnectionStatsServerToRouter flags. */
    public flags: number;

    /** CMsgSteamDatagramConnectionStatsServerToRouter seqNumS2r. */
    public seqNumS2r: number;

    /** CMsgSteamDatagramConnectionStatsServerToRouter seqNumE2e. */
    public seqNumE2e: number;

    /** CMsgSteamDatagramConnectionStatsServerToRouter relaySessionId. */
    public relaySessionId: number;

    /** CMsgSteamDatagramConnectionStatsServerToRouter clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramConnectionStatsServerToRouter serverConnectionId. */
    public serverConnectionId: number;

    /**
     * Creates a new CMsgSteamDatagramConnectionStatsServerToRouter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionStatsServerToRouter instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionStatsServerToRouter): CMsgSteamDatagramConnectionStatsServerToRouter;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsServerToRouter message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsServerToRouter.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsServerToRouter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionStatsServerToRouter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsServerToRouter message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsServerToRouter.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsServerToRouter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionStatsServerToRouter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsServerToRouter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionStatsServerToRouter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionStatsServerToRouter;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsServerToRouter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionStatsServerToRouter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionStatsServerToRouter;

    /**
     * Verifies a CMsgSteamDatagramConnectionStatsServerToRouter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionStatsServerToRouter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionStatsServerToRouter
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionStatsServerToRouter;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionStatsServerToRouter message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionStatsServerToRouter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionStatsServerToRouter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionStatsServerToRouter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionStatsServerToRouter
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramConnectionStatsServerToRouter {

    /** Flags enum. */
    enum Flags {
        ACK_REQUEST_RELAY = 1,
        ACK_REQUEST_E2E = 2,
        ACK_REQUEST_IMMEDIATE = 4
    }
}

/** Represents a CMsgSteamDatagramP2PSessionRequestBody. */
export class CMsgSteamDatagramP2PSessionRequestBody implements ICMsgSteamDatagramP2PSessionRequestBody {

    /**
     * Constructs a new CMsgSteamDatagramP2PSessionRequestBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramP2PSessionRequestBody);

    /** CMsgSteamDatagramP2PSessionRequestBody challengeTime. */
    public challengeTime: number;

    /** CMsgSteamDatagramP2PSessionRequestBody challenge. */
    public challenge: (number|Long);

    /** CMsgSteamDatagramP2PSessionRequestBody clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramP2PSessionRequestBody legacyPeerSteamId. */
    public legacyPeerSteamId: (number|Long);

    /** CMsgSteamDatagramP2PSessionRequestBody peerIdentityString. */
    public peerIdentityString: string;

    /** CMsgSteamDatagramP2PSessionRequestBody peerConnectionId. */
    public peerConnectionId: number;

    /** CMsgSteamDatagramP2PSessionRequestBody encryptedData. */
    public encryptedData: Uint8Array;

    /** CMsgSteamDatagramP2PSessionRequestBody encryptionYourPublicKeyLeadByte. */
    public encryptionYourPublicKeyLeadByte: number;

    /** CMsgSteamDatagramP2PSessionRequestBody encryptionMyEphemeralPublicKey. */
    public encryptionMyEphemeralPublicKey: Uint8Array;

    /** CMsgSteamDatagramP2PSessionRequestBody protocolVersion. */
    public protocolVersion: number;

    /** CMsgSteamDatagramP2PSessionRequestBody networkConfigVersion. */
    public networkConfigVersion: (number|Long);

    /** CMsgSteamDatagramP2PSessionRequestBody platform. */
    public platform: string;

    /** CMsgSteamDatagramP2PSessionRequestBody build. */
    public build: string;

    /**
     * Creates a new CMsgSteamDatagramP2PSessionRequestBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramP2PSessionRequestBody instance
     */
    public static create(properties?: ICMsgSteamDatagramP2PSessionRequestBody): CMsgSteamDatagramP2PSessionRequestBody;

    /**
     * Encodes the specified CMsgSteamDatagramP2PSessionRequestBody message. Does not implicitly {@link CMsgSteamDatagramP2PSessionRequestBody.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PSessionRequestBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramP2PSessionRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramP2PSessionRequestBody message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PSessionRequestBody.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PSessionRequestBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramP2PSessionRequestBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramP2PSessionRequestBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramP2PSessionRequestBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PSessionRequestBody;

    /**
     * Decodes a CMsgSteamDatagramP2PSessionRequestBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramP2PSessionRequestBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PSessionRequestBody;

    /**
     * Verifies a CMsgSteamDatagramP2PSessionRequestBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramP2PSessionRequestBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramP2PSessionRequestBody
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PSessionRequestBody;

    /**
     * Creates a plain object from a CMsgSteamDatagramP2PSessionRequestBody message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramP2PSessionRequestBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramP2PSessionRequestBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramP2PSessionRequestBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramP2PSessionRequestBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramP2PSessionRequestBody {

    /** Properties of an EncryptedData. */
    interface IEncryptedData {

        /** EncryptedData peerIdentityString */
        peerIdentityString?: (string|null);
    }

    /** Represents an EncryptedData. */
    class EncryptedData implements IEncryptedData {

        /**
         * Constructs a new EncryptedData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramP2PSessionRequestBody.IEncryptedData);

        /** EncryptedData peerIdentityString. */
        public peerIdentityString: string;

        /**
         * Creates a new EncryptedData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedData instance
         */
        public static create(properties?: CMsgSteamDatagramP2PSessionRequestBody.IEncryptedData): CMsgSteamDatagramP2PSessionRequestBody.EncryptedData;

        /**
         * Encodes the specified EncryptedData message. Does not implicitly {@link CMsgSteamDatagramP2PSessionRequestBody.EncryptedData.verify|verify} messages.
         * @param message EncryptedData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramP2PSessionRequestBody.IEncryptedData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedData message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PSessionRequestBody.EncryptedData.verify|verify} messages.
         * @param message EncryptedData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramP2PSessionRequestBody.IEncryptedData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PSessionRequestBody.EncryptedData;

        /**
         * Decodes an EncryptedData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PSessionRequestBody.EncryptedData;

        /**
         * Verifies an EncryptedData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedData
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PSessionRequestBody.EncryptedData;

        /**
         * Creates a plain object from an EncryptedData message. Also converts values to other types if specified.
         * @param message EncryptedData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramP2PSessionRequestBody.EncryptedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EncryptedData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgSteamDatagramP2PSessionRequest. */
export class CMsgSteamDatagramP2PSessionRequest implements ICMsgSteamDatagramP2PSessionRequest {

    /**
     * Constructs a new CMsgSteamDatagramP2PSessionRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramP2PSessionRequest);

    /** CMsgSteamDatagramP2PSessionRequest cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamDatagramP2PSessionRequest body. */
    public body: Uint8Array;

    /** CMsgSteamDatagramP2PSessionRequest signature. */
    public signature: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramP2PSessionRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramP2PSessionRequest instance
     */
    public static create(properties?: ICMsgSteamDatagramP2PSessionRequest): CMsgSteamDatagramP2PSessionRequest;

    /**
     * Encodes the specified CMsgSteamDatagramP2PSessionRequest message. Does not implicitly {@link CMsgSteamDatagramP2PSessionRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PSessionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramP2PSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramP2PSessionRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PSessionRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PSessionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramP2PSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramP2PSessionRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramP2PSessionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PSessionRequest;

    /**
     * Decodes a CMsgSteamDatagramP2PSessionRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramP2PSessionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PSessionRequest;

    /**
     * Verifies a CMsgSteamDatagramP2PSessionRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramP2PSessionRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramP2PSessionRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PSessionRequest;

    /**
     * Creates a plain object from a CMsgSteamDatagramP2PSessionRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramP2PSessionRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramP2PSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramP2PSessionRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramP2PSessionRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramP2PSessionEstablished. */
export class CMsgSteamDatagramP2PSessionEstablished implements ICMsgSteamDatagramP2PSessionEstablished {

    /**
     * Constructs a new CMsgSteamDatagramP2PSessionEstablished.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramP2PSessionEstablished);

    /** CMsgSteamDatagramP2PSessionEstablished connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramP2PSessionEstablished secondsUntilShutdown. */
    public secondsUntilShutdown: number;

    /** CMsgSteamDatagramP2PSessionEstablished relayRoutingToken. */
    public relayRoutingToken: Uint8Array;

    /** CMsgSteamDatagramP2PSessionEstablished seqNumR2c. */
    public seqNumR2c: number;

    /**
     * Creates a new CMsgSteamDatagramP2PSessionEstablished instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramP2PSessionEstablished instance
     */
    public static create(properties?: ICMsgSteamDatagramP2PSessionEstablished): CMsgSteamDatagramP2PSessionEstablished;

    /**
     * Encodes the specified CMsgSteamDatagramP2PSessionEstablished message. Does not implicitly {@link CMsgSteamDatagramP2PSessionEstablished.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PSessionEstablished message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramP2PSessionEstablished, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramP2PSessionEstablished message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PSessionEstablished.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PSessionEstablished message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramP2PSessionEstablished, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramP2PSessionEstablished message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramP2PSessionEstablished
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PSessionEstablished;

    /**
     * Decodes a CMsgSteamDatagramP2PSessionEstablished message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramP2PSessionEstablished
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PSessionEstablished;

    /**
     * Verifies a CMsgSteamDatagramP2PSessionEstablished message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramP2PSessionEstablished message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramP2PSessionEstablished
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PSessionEstablished;

    /**
     * Creates a plain object from a CMsgSteamDatagramP2PSessionEstablished message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramP2PSessionEstablished
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramP2PSessionEstablished, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramP2PSessionEstablished to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramP2PSessionEstablished
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramConnectionStatsP2PClientToRouter. */
export class CMsgSteamDatagramConnectionStatsP2PClientToRouter implements ICMsgSteamDatagramConnectionStatsP2PClientToRouter {

    /**
     * Constructs a new CMsgSteamDatagramConnectionStatsP2PClientToRouter.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionStatsP2PClientToRouter);

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter p2pRoutingSummary. */
    public p2pRoutingSummary?: (ICMsgSteamDatagramP2PRoutingSummary|null);

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter ackRelay. */
    public ackRelay: number[];

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter legacyAckE2e. */
    public legacyAckE2e: number[];

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter flags. */
    public flags: number;

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter forwardTargetRelayRoutingToken. */
    public forwardTargetRelayRoutingToken: Uint8Array;

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter forwardTargetRevision. */
    public forwardTargetRevision: number;

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter routes. */
    public routes: Uint8Array;

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter ackPeerRoutesRevision. */
    public ackPeerRoutesRevision: number;

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter seqNumC2r. */
    public seqNumC2r: number;

    /** CMsgSteamDatagramConnectionStatsP2PClientToRouter seqNumE2e. */
    public seqNumE2e: number;

    /**
     * Creates a new CMsgSteamDatagramConnectionStatsP2PClientToRouter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionStatsP2PClientToRouter instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionStatsP2PClientToRouter): CMsgSteamDatagramConnectionStatsP2PClientToRouter;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsP2PClientToRouter message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsP2PClientToRouter.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsP2PClientToRouter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionStatsP2PClientToRouter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsP2PClientToRouter message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsP2PClientToRouter.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsP2PClientToRouter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionStatsP2PClientToRouter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsP2PClientToRouter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionStatsP2PClientToRouter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionStatsP2PClientToRouter;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsP2PClientToRouter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionStatsP2PClientToRouter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionStatsP2PClientToRouter;

    /**
     * Verifies a CMsgSteamDatagramConnectionStatsP2PClientToRouter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionStatsP2PClientToRouter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionStatsP2PClientToRouter
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionStatsP2PClientToRouter;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionStatsP2PClientToRouter message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionStatsP2PClientToRouter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionStatsP2PClientToRouter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionStatsP2PClientToRouter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionStatsP2PClientToRouter
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramConnectionStatsP2PClientToRouter {

    /** Flags enum. */
    enum Flags {
        ACK_REQUEST_RELAY = 1,
        ACK_REQUEST_E2E = 2,
        ACK_REQUEST_IMMEDIATE = 4,
        NOT_PRIMARY_SESSION = 8,
        NOT_PRIMARY_TRANSPORT_E2E = 16,
        CLIENT_RELAY_OVERRIDE = 32
    }
}

/** Represents a CMsgSteamDatagramConnectionStatsP2PRouterToClient. */
export class CMsgSteamDatagramConnectionStatsP2PRouterToClient implements ICMsgSteamDatagramConnectionStatsP2PRouterToClient {

    /**
     * Constructs a new CMsgSteamDatagramConnectionStatsP2PRouterToClient.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramConnectionStatsP2PRouterToClient);

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient qualityRelay. */
    public qualityRelay?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient qualityE2e. */
    public qualityE2e?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient secondsUntilShutdown. */
    public secondsUntilShutdown: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient migrateRequestIp. */
    public migrateRequestIp: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient migrateRequestPort. */
    public migrateRequestPort: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient scoringPenaltyRelayCluster. */
    public scoringPenaltyRelayCluster: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient ackRelay. */
    public ackRelay: number[];

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient legacyAckE2e. */
    public legacyAckE2e: number[];

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient flags. */
    public flags: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient ackForwardTargetRevision. */
    public ackForwardTargetRevision: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient routes. */
    public routes: Uint8Array;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient ackPeerRoutesRevision. */
    public ackPeerRoutesRevision: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient seqNumR2c. */
    public seqNumR2c: number;

    /** CMsgSteamDatagramConnectionStatsP2PRouterToClient seqNumE2e. */
    public seqNumE2e: number;

    /**
     * Creates a new CMsgSteamDatagramConnectionStatsP2PRouterToClient instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramConnectionStatsP2PRouterToClient instance
     */
    public static create(properties?: ICMsgSteamDatagramConnectionStatsP2PRouterToClient): CMsgSteamDatagramConnectionStatsP2PRouterToClient;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsP2PRouterToClient message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsP2PRouterToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsP2PRouterToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramConnectionStatsP2PRouterToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramConnectionStatsP2PRouterToClient message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsP2PRouterToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramConnectionStatsP2PRouterToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramConnectionStatsP2PRouterToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsP2PRouterToClient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramConnectionStatsP2PRouterToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramConnectionStatsP2PRouterToClient;

    /**
     * Decodes a CMsgSteamDatagramConnectionStatsP2PRouterToClient message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramConnectionStatsP2PRouterToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramConnectionStatsP2PRouterToClient;

    /**
     * Verifies a CMsgSteamDatagramConnectionStatsP2PRouterToClient message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramConnectionStatsP2PRouterToClient message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramConnectionStatsP2PRouterToClient
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramConnectionStatsP2PRouterToClient;

    /**
     * Creates a plain object from a CMsgSteamDatagramConnectionStatsP2PRouterToClient message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramConnectionStatsP2PRouterToClient
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramConnectionStatsP2PRouterToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramConnectionStatsP2PRouterToClient to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramConnectionStatsP2PRouterToClient
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramConnectionStatsP2PRouterToClient {

    /** Flags enum. */
    enum Flags {
        ACK_REQUEST_RELAY = 1,
        ACK_REQUEST_E2E = 2,
        ACK_REQUEST_IMMEDIATE = 4,
        NOT_PRIMARY_TRANSPORT_E2E = 16
    }
}

/** Represents a CMsgSteamDatagramP2PBadRouteRouterToClient. */
export class CMsgSteamDatagramP2PBadRouteRouterToClient implements ICMsgSteamDatagramP2PBadRouteRouterToClient {

    /**
     * Constructs a new CMsgSteamDatagramP2PBadRouteRouterToClient.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramP2PBadRouteRouterToClient);

    /** CMsgSteamDatagramP2PBadRouteRouterToClient connectionId. */
    public connectionId: number;

    /** CMsgSteamDatagramP2PBadRouteRouterToClient failedRelayRoutingToken. */
    public failedRelayRoutingToken: Uint8Array;

    /** CMsgSteamDatagramP2PBadRouteRouterToClient ackForwardTargetRevision. */
    public ackForwardTargetRevision: number;

    /** CMsgSteamDatagramP2PBadRouteRouterToClient kludgePad. */
    public kludgePad: (number|Long);

    /**
     * Creates a new CMsgSteamDatagramP2PBadRouteRouterToClient instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramP2PBadRouteRouterToClient instance
     */
    public static create(properties?: ICMsgSteamDatagramP2PBadRouteRouterToClient): CMsgSteamDatagramP2PBadRouteRouterToClient;

    /**
     * Encodes the specified CMsgSteamDatagramP2PBadRouteRouterToClient message. Does not implicitly {@link CMsgSteamDatagramP2PBadRouteRouterToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PBadRouteRouterToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramP2PBadRouteRouterToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramP2PBadRouteRouterToClient message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PBadRouteRouterToClient.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PBadRouteRouterToClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramP2PBadRouteRouterToClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramP2PBadRouteRouterToClient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramP2PBadRouteRouterToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PBadRouteRouterToClient;

    /**
     * Decodes a CMsgSteamDatagramP2PBadRouteRouterToClient message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramP2PBadRouteRouterToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PBadRouteRouterToClient;

    /**
     * Verifies a CMsgSteamDatagramP2PBadRouteRouterToClient message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramP2PBadRouteRouterToClient message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramP2PBadRouteRouterToClient
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PBadRouteRouterToClient;

    /**
     * Creates a plain object from a CMsgSteamDatagramP2PBadRouteRouterToClient message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramP2PBadRouteRouterToClient
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramP2PBadRouteRouterToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramP2PBadRouteRouterToClient to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramP2PBadRouteRouterToClient
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramP2PRoutes. */
export class CMsgSteamDatagramP2PRoutes implements ICMsgSteamDatagramP2PRoutes {

    /**
     * Constructs a new CMsgSteamDatagramP2PRoutes.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramP2PRoutes);

    /** CMsgSteamDatagramP2PRoutes relayClusters. */
    public relayClusters: CMsgSteamDatagramP2PRoutes.IRelayCluster[];

    /** CMsgSteamDatagramP2PRoutes routes. */
    public routes: CMsgSteamDatagramP2PRoutes.IRoute[];

    /** CMsgSteamDatagramP2PRoutes revision. */
    public revision: number;

    /**
     * Creates a new CMsgSteamDatagramP2PRoutes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramP2PRoutes instance
     */
    public static create(properties?: ICMsgSteamDatagramP2PRoutes): CMsgSteamDatagramP2PRoutes;

    /**
     * Encodes the specified CMsgSteamDatagramP2PRoutes message. Does not implicitly {@link CMsgSteamDatagramP2PRoutes.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PRoutes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramP2PRoutes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramP2PRoutes message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PRoutes.verify|verify} messages.
     * @param message CMsgSteamDatagramP2PRoutes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramP2PRoutes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramP2PRoutes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramP2PRoutes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PRoutes;

    /**
     * Decodes a CMsgSteamDatagramP2PRoutes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramP2PRoutes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PRoutes;

    /**
     * Verifies a CMsgSteamDatagramP2PRoutes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramP2PRoutes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramP2PRoutes
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PRoutes;

    /**
     * Creates a plain object from a CMsgSteamDatagramP2PRoutes message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramP2PRoutes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramP2PRoutes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramP2PRoutes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramP2PRoutes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramP2PRoutes {

    /** Properties of a RelayCluster. */
    interface IRelayCluster {

        /** RelayCluster popId */
        popId?: (number|null);

        /** RelayCluster pingMs */
        pingMs?: (number|null);

        /** RelayCluster scorePenalty */
        scorePenalty?: (number|null);

        /** RelayCluster sessionRelayRoutingToken */
        sessionRelayRoutingToken?: (Uint8Array|null);
    }

    /** Represents a RelayCluster. */
    class RelayCluster implements IRelayCluster {

        /**
         * Constructs a new RelayCluster.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramP2PRoutes.IRelayCluster);

        /** RelayCluster popId. */
        public popId: number;

        /** RelayCluster pingMs. */
        public pingMs: number;

        /** RelayCluster scorePenalty. */
        public scorePenalty: number;

        /** RelayCluster sessionRelayRoutingToken. */
        public sessionRelayRoutingToken: Uint8Array;

        /**
         * Creates a new RelayCluster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RelayCluster instance
         */
        public static create(properties?: CMsgSteamDatagramP2PRoutes.IRelayCluster): CMsgSteamDatagramP2PRoutes.RelayCluster;

        /**
         * Encodes the specified RelayCluster message. Does not implicitly {@link CMsgSteamDatagramP2PRoutes.RelayCluster.verify|verify} messages.
         * @param message RelayCluster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramP2PRoutes.IRelayCluster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RelayCluster message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PRoutes.RelayCluster.verify|verify} messages.
         * @param message RelayCluster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramP2PRoutes.IRelayCluster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RelayCluster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RelayCluster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PRoutes.RelayCluster;

        /**
         * Decodes a RelayCluster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RelayCluster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PRoutes.RelayCluster;

        /**
         * Verifies a RelayCluster message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RelayCluster message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RelayCluster
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PRoutes.RelayCluster;

        /**
         * Creates a plain object from a RelayCluster message. Also converts values to other types if specified.
         * @param message RelayCluster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramP2PRoutes.RelayCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RelayCluster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RelayCluster
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Route. */
    interface IRoute {

        /** Route myPopId */
        myPopId?: (number|null);

        /** Route yourPopId */
        yourPopId?: (number|null);

        /** Route legacyScore */
        legacyScore?: (number|null);

        /** Route interiorScore */
        interiorScore?: (number|null);
    }

    /** Represents a Route. */
    class Route implements IRoute {

        /**
         * Constructs a new Route.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramP2PRoutes.IRoute);

        /** Route myPopId. */
        public myPopId: number;

        /** Route yourPopId. */
        public yourPopId: number;

        /** Route legacyScore. */
        public legacyScore: number;

        /** Route interiorScore. */
        public interiorScore: number;

        /**
         * Creates a new Route instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Route instance
         */
        public static create(properties?: CMsgSteamDatagramP2PRoutes.IRoute): CMsgSteamDatagramP2PRoutes.Route;

        /**
         * Encodes the specified Route message. Does not implicitly {@link CMsgSteamDatagramP2PRoutes.Route.verify|verify} messages.
         * @param message Route message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramP2PRoutes.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Route message, length delimited. Does not implicitly {@link CMsgSteamDatagramP2PRoutes.Route.verify|verify} messages.
         * @param message Route message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramP2PRoutes.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Route message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramP2PRoutes.Route;

        /**
         * Decodes a Route message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramP2PRoutes.Route;

        /**
         * Verifies a Route message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Route message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Route
         */
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramP2PRoutes.Route;

        /**
         * Creates a plain object from a Route message. Also converts values to other types if specified.
         * @param message Route
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramP2PRoutes.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Route to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Route
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgSteamDatagramSetSecondaryAddressRequest. */
export class CMsgSteamDatagramSetSecondaryAddressRequest implements ICMsgSteamDatagramSetSecondaryAddressRequest {

    /**
     * Constructs a new CMsgSteamDatagramSetSecondaryAddressRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramSetSecondaryAddressRequest);

    /** CMsgSteamDatagramSetSecondaryAddressRequest clientMainIp. */
    public clientMainIp: number;

    /** CMsgSteamDatagramSetSecondaryAddressRequest clientMainPort. */
    public clientMainPort: number;

    /** CMsgSteamDatagramSetSecondaryAddressRequest clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamDatagramSetSecondaryAddressRequest clientIdentity. */
    public clientIdentity: string;

    /** CMsgSteamDatagramSetSecondaryAddressRequest requestSendDuplication. */
    public requestSendDuplication: boolean;

    /** CMsgSteamDatagramSetSecondaryAddressRequest kludgePad. */
    public kludgePad: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramSetSecondaryAddressRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramSetSecondaryAddressRequest instance
     */
    public static create(properties?: ICMsgSteamDatagramSetSecondaryAddressRequest): CMsgSteamDatagramSetSecondaryAddressRequest;

    /**
     * Encodes the specified CMsgSteamDatagramSetSecondaryAddressRequest message. Does not implicitly {@link CMsgSteamDatagramSetSecondaryAddressRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramSetSecondaryAddressRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramSetSecondaryAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramSetSecondaryAddressRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramSetSecondaryAddressRequest.verify|verify} messages.
     * @param message CMsgSteamDatagramSetSecondaryAddressRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramSetSecondaryAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramSetSecondaryAddressRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramSetSecondaryAddressRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramSetSecondaryAddressRequest;

    /**
     * Decodes a CMsgSteamDatagramSetSecondaryAddressRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramSetSecondaryAddressRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramSetSecondaryAddressRequest;

    /**
     * Verifies a CMsgSteamDatagramSetSecondaryAddressRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramSetSecondaryAddressRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramSetSecondaryAddressRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramSetSecondaryAddressRequest;

    /**
     * Creates a plain object from a CMsgSteamDatagramSetSecondaryAddressRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramSetSecondaryAddressRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramSetSecondaryAddressRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramSetSecondaryAddressRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramSetSecondaryAddressRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamDatagramSetSecondaryAddressResult. */
export class CMsgSteamDatagramSetSecondaryAddressResult implements ICMsgSteamDatagramSetSecondaryAddressResult {

    /**
     * Constructs a new CMsgSteamDatagramSetSecondaryAddressResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramSetSecondaryAddressResult);

    /** CMsgSteamDatagramSetSecondaryAddressResult success. */
    public success: boolean;

    /** CMsgSteamDatagramSetSecondaryAddressResult message. */
    public message: string;

    /**
     * Creates a new CMsgSteamDatagramSetSecondaryAddressResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramSetSecondaryAddressResult instance
     */
    public static create(properties?: ICMsgSteamDatagramSetSecondaryAddressResult): CMsgSteamDatagramSetSecondaryAddressResult;

    /**
     * Encodes the specified CMsgSteamDatagramSetSecondaryAddressResult message. Does not implicitly {@link CMsgSteamDatagramSetSecondaryAddressResult.verify|verify} messages.
     * @param message CMsgSteamDatagramSetSecondaryAddressResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramSetSecondaryAddressResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramSetSecondaryAddressResult message, length delimited. Does not implicitly {@link CMsgSteamDatagramSetSecondaryAddressResult.verify|verify} messages.
     * @param message CMsgSteamDatagramSetSecondaryAddressResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramSetSecondaryAddressResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramSetSecondaryAddressResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramSetSecondaryAddressResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramSetSecondaryAddressResult;

    /**
     * Decodes a CMsgSteamDatagramSetSecondaryAddressResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramSetSecondaryAddressResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramSetSecondaryAddressResult;

    /**
     * Verifies a CMsgSteamDatagramSetSecondaryAddressResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramSetSecondaryAddressResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramSetSecondaryAddressResult
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramSetSecondaryAddressResult;

    /**
     * Creates a plain object from a CMsgSteamDatagramSetSecondaryAddressResult message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramSetSecondaryAddressResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramSetSecondaryAddressResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramSetSecondaryAddressResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramSetSecondaryAddressResult
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
