import * as $protobuf from "protobufjs";
import Long = require("long");
/** EGCBaseMsg enum. */
export enum EGCBaseMsg {
    k_EMsgGCSystemMessage = 4001,
    k_EMsgGCReplicateConVars = 4002,
    k_EMsgGCConVarUpdated = 4003,
    k_EMsgGCInQueue = 4008,
    k_EMsgGCInviteToParty = 4501,
    k_EMsgGCInvitationCreated = 4502,
    k_EMsgGCPartyInviteResponse = 4503,
    k_EMsgGCKickFromParty = 4504,
    k_EMsgGCLeaveParty = 4505,
    k_EMsgGCServerAvailable = 4506,
    k_EMsgGCClientConnectToServer = 4507,
    k_EMsgGCGameServerInfo = 4508,
    k_EMsgGCError = 4509,
    k_EMsgGCReplay_UploadedToYouTube = 4510,
    k_EMsgGCLANServerAvailable = 4511
}

/** EGCBaseProtoObjectTypes enum. */
export enum EGCBaseProtoObjectTypes {
    k_EProtoObjectPartyInvite = 1001,
    k_EProtoObjectLobbyInvite = 1002
}

/** GC_BannedWordType enum. */
export enum GC_BannedWordType {
    GC_BANNED_WORD_DISABLE_WORD = 0,
    GC_BANNED_WORD_ENABLE_WORD = 1
}

/** Represents a CGCStorePurchaseInit_LineItem. */
export class CGCStorePurchaseInit_LineItem implements ICGCStorePurchaseInit_LineItem {

    /**
     * Constructs a new CGCStorePurchaseInit_LineItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCStorePurchaseInit_LineItem);

    /** CGCStorePurchaseInit_LineItem itemDefId. */
    public itemDefId: number;

    /** CGCStorePurchaseInit_LineItem quantity. */
    public quantity: number;

    /** CGCStorePurchaseInit_LineItem costInLocalCurrency. */
    public costInLocalCurrency: number;

    /** CGCStorePurchaseInit_LineItem purchaseType. */
    public purchaseType: number;

    /**
     * Creates a new CGCStorePurchaseInit_LineItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCStorePurchaseInit_LineItem instance
     */
    public static create(properties?: ICGCStorePurchaseInit_LineItem): CGCStorePurchaseInit_LineItem;

    /**
     * Encodes the specified CGCStorePurchaseInit_LineItem message. Does not implicitly {@link CGCStorePurchaseInit_LineItem.verify|verify} messages.
     * @param message CGCStorePurchaseInit_LineItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCStorePurchaseInit_LineItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCStorePurchaseInit_LineItem message, length delimited. Does not implicitly {@link CGCStorePurchaseInit_LineItem.verify|verify} messages.
     * @param message CGCStorePurchaseInit_LineItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCStorePurchaseInit_LineItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCStorePurchaseInit_LineItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCStorePurchaseInit_LineItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCStorePurchaseInit_LineItem;

    /**
     * Decodes a CGCStorePurchaseInit_LineItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCStorePurchaseInit_LineItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCStorePurchaseInit_LineItem;

    /**
     * Verifies a CGCStorePurchaseInit_LineItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCStorePurchaseInit_LineItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCStorePurchaseInit_LineItem
     */
    public static fromObject(object: { [k: string]: any }): CGCStorePurchaseInit_LineItem;

    /**
     * Creates a plain object from a CGCStorePurchaseInit_LineItem message. Also converts values to other types if specified.
     * @param message CGCStorePurchaseInit_LineItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCStorePurchaseInit_LineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCStorePurchaseInit_LineItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCStorePurchaseInit_LineItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCStorePurchaseInit. */
export class CMsgGCStorePurchaseInit implements ICMsgGCStorePurchaseInit {

    /**
     * Constructs a new CMsgGCStorePurchaseInit.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCStorePurchaseInit);

    /** CMsgGCStorePurchaseInit country. */
    public country: string;

    /** CMsgGCStorePurchaseInit language. */
    public language: number;

    /** CMsgGCStorePurchaseInit currency. */
    public currency: number;

    /** CMsgGCStorePurchaseInit lineItems. */
    public lineItems: ICGCStorePurchaseInit_LineItem[];

    /**
     * Creates a new CMsgGCStorePurchaseInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCStorePurchaseInit instance
     */
    public static create(properties?: ICMsgGCStorePurchaseInit): CMsgGCStorePurchaseInit;

    /**
     * Encodes the specified CMsgGCStorePurchaseInit message. Does not implicitly {@link CMsgGCStorePurchaseInit.verify|verify} messages.
     * @param message CMsgGCStorePurchaseInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCStorePurchaseInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCStorePurchaseInit message, length delimited. Does not implicitly {@link CMsgGCStorePurchaseInit.verify|verify} messages.
     * @param message CMsgGCStorePurchaseInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCStorePurchaseInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCStorePurchaseInit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCStorePurchaseInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCStorePurchaseInit;

    /**
     * Decodes a CMsgGCStorePurchaseInit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCStorePurchaseInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCStorePurchaseInit;

    /**
     * Verifies a CMsgGCStorePurchaseInit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCStorePurchaseInit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCStorePurchaseInit
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCStorePurchaseInit;

    /**
     * Creates a plain object from a CMsgGCStorePurchaseInit message. Also converts values to other types if specified.
     * @param message CMsgGCStorePurchaseInit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCStorePurchaseInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCStorePurchaseInit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCStorePurchaseInit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCStorePurchaseInitResponse. */
export class CMsgGCStorePurchaseInitResponse implements ICMsgGCStorePurchaseInitResponse {

    /**
     * Constructs a new CMsgGCStorePurchaseInitResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCStorePurchaseInitResponse);

    /** CMsgGCStorePurchaseInitResponse result. */
    public result: number;

    /** CMsgGCStorePurchaseInitResponse txnId. */
    public txnId: (number|Long);

    /** CMsgGCStorePurchaseInitResponse url. */
    public url: string;

    /** CMsgGCStorePurchaseInitResponse itemIds. */
    public itemIds: (number|Long)[];

    /**
     * Creates a new CMsgGCStorePurchaseInitResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCStorePurchaseInitResponse instance
     */
    public static create(properties?: ICMsgGCStorePurchaseInitResponse): CMsgGCStorePurchaseInitResponse;

    /**
     * Encodes the specified CMsgGCStorePurchaseInitResponse message. Does not implicitly {@link CMsgGCStorePurchaseInitResponse.verify|verify} messages.
     * @param message CMsgGCStorePurchaseInitResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCStorePurchaseInitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCStorePurchaseInitResponse message, length delimited. Does not implicitly {@link CMsgGCStorePurchaseInitResponse.verify|verify} messages.
     * @param message CMsgGCStorePurchaseInitResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCStorePurchaseInitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCStorePurchaseInitResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCStorePurchaseInitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCStorePurchaseInitResponse;

    /**
     * Decodes a CMsgGCStorePurchaseInitResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCStorePurchaseInitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCStorePurchaseInitResponse;

    /**
     * Verifies a CMsgGCStorePurchaseInitResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCStorePurchaseInitResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCStorePurchaseInitResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCStorePurchaseInitResponse;

    /**
     * Creates a plain object from a CMsgGCStorePurchaseInitResponse message. Also converts values to other types if specified.
     * @param message CMsgGCStorePurchaseInitResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCStorePurchaseInitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCStorePurchaseInitResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCStorePurchaseInitResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOPartyInvite. */
export class CSOPartyInvite implements ICSOPartyInvite {

    /**
     * Constructs a new CSOPartyInvite.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOPartyInvite);

    /** CSOPartyInvite groupId. */
    public groupId: (number|Long);

    /** CSOPartyInvite senderId. */
    public senderId: (number|Long);

    /** CSOPartyInvite senderName. */
    public senderName: string;

    /**
     * Creates a new CSOPartyInvite instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOPartyInvite instance
     */
    public static create(properties?: ICSOPartyInvite): CSOPartyInvite;

    /**
     * Encodes the specified CSOPartyInvite message. Does not implicitly {@link CSOPartyInvite.verify|verify} messages.
     * @param message CSOPartyInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOPartyInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOPartyInvite message, length delimited. Does not implicitly {@link CSOPartyInvite.verify|verify} messages.
     * @param message CSOPartyInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOPartyInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOPartyInvite message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOPartyInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOPartyInvite;

    /**
     * Decodes a CSOPartyInvite message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOPartyInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOPartyInvite;

    /**
     * Verifies a CSOPartyInvite message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOPartyInvite message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOPartyInvite
     */
    public static fromObject(object: { [k: string]: any }): CSOPartyInvite;

    /**
     * Creates a plain object from a CSOPartyInvite message. Also converts values to other types if specified.
     * @param message CSOPartyInvite
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOPartyInvite, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOPartyInvite to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOPartyInvite
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOLobbyInvite. */
export class CSOLobbyInvite implements ICSOLobbyInvite {

    /**
     * Constructs a new CSOLobbyInvite.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOLobbyInvite);

    /** CSOLobbyInvite groupId. */
    public groupId: (number|Long);

    /** CSOLobbyInvite senderId. */
    public senderId: (number|Long);

    /** CSOLobbyInvite senderName. */
    public senderName: string;

    /**
     * Creates a new CSOLobbyInvite instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOLobbyInvite instance
     */
    public static create(properties?: ICSOLobbyInvite): CSOLobbyInvite;

    /**
     * Encodes the specified CSOLobbyInvite message. Does not implicitly {@link CSOLobbyInvite.verify|verify} messages.
     * @param message CSOLobbyInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOLobbyInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOLobbyInvite message, length delimited. Does not implicitly {@link CSOLobbyInvite.verify|verify} messages.
     * @param message CSOLobbyInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOLobbyInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOLobbyInvite message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOLobbyInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOLobbyInvite;

    /**
     * Decodes a CSOLobbyInvite message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOLobbyInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOLobbyInvite;

    /**
     * Verifies a CSOLobbyInvite message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOLobbyInvite message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOLobbyInvite
     */
    public static fromObject(object: { [k: string]: any }): CSOLobbyInvite;

    /**
     * Creates a plain object from a CSOLobbyInvite message. Also converts values to other types if specified.
     * @param message CSOLobbyInvite
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOLobbyInvite, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOLobbyInvite to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOLobbyInvite
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSystemBroadcast. */
export class CMsgSystemBroadcast implements ICMsgSystemBroadcast {

    /**
     * Constructs a new CMsgSystemBroadcast.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSystemBroadcast);

    /** CMsgSystemBroadcast message. */
    public message: string;

    /**
     * Creates a new CMsgSystemBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSystemBroadcast instance
     */
    public static create(properties?: ICMsgSystemBroadcast): CMsgSystemBroadcast;

    /**
     * Encodes the specified CMsgSystemBroadcast message. Does not implicitly {@link CMsgSystemBroadcast.verify|verify} messages.
     * @param message CMsgSystemBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSystemBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSystemBroadcast message, length delimited. Does not implicitly {@link CMsgSystemBroadcast.verify|verify} messages.
     * @param message CMsgSystemBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSystemBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSystemBroadcast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSystemBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSystemBroadcast;

    /**
     * Decodes a CMsgSystemBroadcast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSystemBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSystemBroadcast;

    /**
     * Verifies a CMsgSystemBroadcast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSystemBroadcast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSystemBroadcast
     */
    public static fromObject(object: { [k: string]: any }): CMsgSystemBroadcast;

    /**
     * Creates a plain object from a CMsgSystemBroadcast message. Also converts values to other types if specified.
     * @param message CMsgSystemBroadcast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSystemBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSystemBroadcast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSystemBroadcast
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgInviteToParty. */
export class CMsgInviteToParty implements ICMsgInviteToParty {

    /**
     * Constructs a new CMsgInviteToParty.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgInviteToParty);

    /** CMsgInviteToParty steamId. */
    public steamId: (number|Long);

    /** CMsgInviteToParty clientVersion. */
    public clientVersion: number;

    /** CMsgInviteToParty teamInvite. */
    public teamInvite: number;

    /**
     * Creates a new CMsgInviteToParty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgInviteToParty instance
     */
    public static create(properties?: ICMsgInviteToParty): CMsgInviteToParty;

    /**
     * Encodes the specified CMsgInviteToParty message. Does not implicitly {@link CMsgInviteToParty.verify|verify} messages.
     * @param message CMsgInviteToParty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgInviteToParty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgInviteToParty message, length delimited. Does not implicitly {@link CMsgInviteToParty.verify|verify} messages.
     * @param message CMsgInviteToParty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgInviteToParty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgInviteToParty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgInviteToParty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgInviteToParty;

    /**
     * Decodes a CMsgInviteToParty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgInviteToParty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgInviteToParty;

    /**
     * Verifies a CMsgInviteToParty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgInviteToParty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgInviteToParty
     */
    public static fromObject(object: { [k: string]: any }): CMsgInviteToParty;

    /**
     * Creates a plain object from a CMsgInviteToParty message. Also converts values to other types if specified.
     * @param message CMsgInviteToParty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgInviteToParty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgInviteToParty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgInviteToParty
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgInvitationCreated. */
export class CMsgInvitationCreated implements ICMsgInvitationCreated {

    /**
     * Constructs a new CMsgInvitationCreated.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgInvitationCreated);

    /** CMsgInvitationCreated groupId. */
    public groupId: (number|Long);

    /** CMsgInvitationCreated steamId. */
    public steamId: (number|Long);

    /**
     * Creates a new CMsgInvitationCreated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgInvitationCreated instance
     */
    public static create(properties?: ICMsgInvitationCreated): CMsgInvitationCreated;

    /**
     * Encodes the specified CMsgInvitationCreated message. Does not implicitly {@link CMsgInvitationCreated.verify|verify} messages.
     * @param message CMsgInvitationCreated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgInvitationCreated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgInvitationCreated message, length delimited. Does not implicitly {@link CMsgInvitationCreated.verify|verify} messages.
     * @param message CMsgInvitationCreated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgInvitationCreated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgInvitationCreated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgInvitationCreated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgInvitationCreated;

    /**
     * Decodes a CMsgInvitationCreated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgInvitationCreated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgInvitationCreated;

    /**
     * Verifies a CMsgInvitationCreated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgInvitationCreated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgInvitationCreated
     */
    public static fromObject(object: { [k: string]: any }): CMsgInvitationCreated;

    /**
     * Creates a plain object from a CMsgInvitationCreated message. Also converts values to other types if specified.
     * @param message CMsgInvitationCreated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgInvitationCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgInvitationCreated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgInvitationCreated
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgPartyInviteResponse. */
export class CMsgPartyInviteResponse implements ICMsgPartyInviteResponse {

    /**
     * Constructs a new CMsgPartyInviteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgPartyInviteResponse);

    /** CMsgPartyInviteResponse partyId. */
    public partyId: (number|Long);

    /** CMsgPartyInviteResponse accept. */
    public accept: boolean;

    /** CMsgPartyInviteResponse clientVersion. */
    public clientVersion: number;

    /** CMsgPartyInviteResponse teamInvite. */
    public teamInvite: number;

    /**
     * Creates a new CMsgPartyInviteResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgPartyInviteResponse instance
     */
    public static create(properties?: ICMsgPartyInviteResponse): CMsgPartyInviteResponse;

    /**
     * Encodes the specified CMsgPartyInviteResponse message. Does not implicitly {@link CMsgPartyInviteResponse.verify|verify} messages.
     * @param message CMsgPartyInviteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgPartyInviteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgPartyInviteResponse message, length delimited. Does not implicitly {@link CMsgPartyInviteResponse.verify|verify} messages.
     * @param message CMsgPartyInviteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgPartyInviteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgPartyInviteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgPartyInviteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgPartyInviteResponse;

    /**
     * Decodes a CMsgPartyInviteResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgPartyInviteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgPartyInviteResponse;

    /**
     * Verifies a CMsgPartyInviteResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgPartyInviteResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgPartyInviteResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgPartyInviteResponse;

    /**
     * Creates a plain object from a CMsgPartyInviteResponse message. Also converts values to other types if specified.
     * @param message CMsgPartyInviteResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgPartyInviteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgPartyInviteResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgPartyInviteResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgKickFromParty. */
export class CMsgKickFromParty implements ICMsgKickFromParty {

    /**
     * Constructs a new CMsgKickFromParty.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgKickFromParty);

    /** CMsgKickFromParty steamId. */
    public steamId: (number|Long);

    /**
     * Creates a new CMsgKickFromParty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgKickFromParty instance
     */
    public static create(properties?: ICMsgKickFromParty): CMsgKickFromParty;

    /**
     * Encodes the specified CMsgKickFromParty message. Does not implicitly {@link CMsgKickFromParty.verify|verify} messages.
     * @param message CMsgKickFromParty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgKickFromParty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgKickFromParty message, length delimited. Does not implicitly {@link CMsgKickFromParty.verify|verify} messages.
     * @param message CMsgKickFromParty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgKickFromParty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgKickFromParty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgKickFromParty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgKickFromParty;

    /**
     * Decodes a CMsgKickFromParty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgKickFromParty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgKickFromParty;

    /**
     * Verifies a CMsgKickFromParty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgKickFromParty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgKickFromParty
     */
    public static fromObject(object: { [k: string]: any }): CMsgKickFromParty;

    /**
     * Creates a plain object from a CMsgKickFromParty message. Also converts values to other types if specified.
     * @param message CMsgKickFromParty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgKickFromParty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgKickFromParty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgKickFromParty
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgLeaveParty. */
export class CMsgLeaveParty implements ICMsgLeaveParty {

    /**
     * Constructs a new CMsgLeaveParty.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgLeaveParty);

    /**
     * Creates a new CMsgLeaveParty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgLeaveParty instance
     */
    public static create(properties?: ICMsgLeaveParty): CMsgLeaveParty;

    /**
     * Encodes the specified CMsgLeaveParty message. Does not implicitly {@link CMsgLeaveParty.verify|verify} messages.
     * @param message CMsgLeaveParty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgLeaveParty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgLeaveParty message, length delimited. Does not implicitly {@link CMsgLeaveParty.verify|verify} messages.
     * @param message CMsgLeaveParty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgLeaveParty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgLeaveParty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgLeaveParty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgLeaveParty;

    /**
     * Decodes a CMsgLeaveParty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgLeaveParty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgLeaveParty;

    /**
     * Verifies a CMsgLeaveParty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgLeaveParty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgLeaveParty
     */
    public static fromObject(object: { [k: string]: any }): CMsgLeaveParty;

    /**
     * Creates a plain object from a CMsgLeaveParty message. Also converts values to other types if specified.
     * @param message CMsgLeaveParty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgLeaveParty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgLeaveParty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgLeaveParty
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgServerAvailable. */
export class CMsgServerAvailable implements ICMsgServerAvailable {

    /**
     * Constructs a new CMsgServerAvailable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgServerAvailable);

    /**
     * Creates a new CMsgServerAvailable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgServerAvailable instance
     */
    public static create(properties?: ICMsgServerAvailable): CMsgServerAvailable;

    /**
     * Encodes the specified CMsgServerAvailable message. Does not implicitly {@link CMsgServerAvailable.verify|verify} messages.
     * @param message CMsgServerAvailable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgServerAvailable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgServerAvailable message, length delimited. Does not implicitly {@link CMsgServerAvailable.verify|verify} messages.
     * @param message CMsgServerAvailable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgServerAvailable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgServerAvailable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgServerAvailable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgServerAvailable;

    /**
     * Decodes a CMsgServerAvailable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgServerAvailable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgServerAvailable;

    /**
     * Verifies a CMsgServerAvailable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgServerAvailable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgServerAvailable
     */
    public static fromObject(object: { [k: string]: any }): CMsgServerAvailable;

    /**
     * Creates a plain object from a CMsgServerAvailable message. Also converts values to other types if specified.
     * @param message CMsgServerAvailable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgServerAvailable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgServerAvailable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgServerAvailable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgLANServerAvailable. */
export class CMsgLANServerAvailable implements ICMsgLANServerAvailable {

    /**
     * Constructs a new CMsgLANServerAvailable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgLANServerAvailable);

    /** CMsgLANServerAvailable lobbyId. */
    public lobbyId: (number|Long);

    /**
     * Creates a new CMsgLANServerAvailable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgLANServerAvailable instance
     */
    public static create(properties?: ICMsgLANServerAvailable): CMsgLANServerAvailable;

    /**
     * Encodes the specified CMsgLANServerAvailable message. Does not implicitly {@link CMsgLANServerAvailable.verify|verify} messages.
     * @param message CMsgLANServerAvailable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgLANServerAvailable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgLANServerAvailable message, length delimited. Does not implicitly {@link CMsgLANServerAvailable.verify|verify} messages.
     * @param message CMsgLANServerAvailable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgLANServerAvailable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgLANServerAvailable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgLANServerAvailable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgLANServerAvailable;

    /**
     * Decodes a CMsgLANServerAvailable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgLANServerAvailable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgLANServerAvailable;

    /**
     * Verifies a CMsgLANServerAvailable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgLANServerAvailable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgLANServerAvailable
     */
    public static fromObject(object: { [k: string]: any }): CMsgLANServerAvailable;

    /**
     * Creates a plain object from a CMsgLANServerAvailable message. Also converts values to other types if specified.
     * @param message CMsgLANServerAvailable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgLANServerAvailable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgLANServerAvailable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgLANServerAvailable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconGameAccountClient. */
export class CSOEconGameAccountClient implements ICSOEconGameAccountClient {

    /**
     * Constructs a new CSOEconGameAccountClient.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconGameAccountClient);

    /** CSOEconGameAccountClient additionalBackpackSlots. */
    public additionalBackpackSlots: number;

    /** CSOEconGameAccountClient bonusXpTimestampRefresh. */
    public bonusXpTimestampRefresh: number;

    /** CSOEconGameAccountClient bonusXpUsedflags. */
    public bonusXpUsedflags: number;

    /** CSOEconGameAccountClient elevatedState. */
    public elevatedState: number;

    /** CSOEconGameAccountClient elevatedTimestamp. */
    public elevatedTimestamp: number;

    /**
     * Creates a new CSOEconGameAccountClient instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconGameAccountClient instance
     */
    public static create(properties?: ICSOEconGameAccountClient): CSOEconGameAccountClient;

    /**
     * Encodes the specified CSOEconGameAccountClient message. Does not implicitly {@link CSOEconGameAccountClient.verify|verify} messages.
     * @param message CSOEconGameAccountClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconGameAccountClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconGameAccountClient message, length delimited. Does not implicitly {@link CSOEconGameAccountClient.verify|verify} messages.
     * @param message CSOEconGameAccountClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconGameAccountClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconGameAccountClient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconGameAccountClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconGameAccountClient;

    /**
     * Decodes a CSOEconGameAccountClient message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconGameAccountClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconGameAccountClient;

    /**
     * Verifies a CSOEconGameAccountClient message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconGameAccountClient message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconGameAccountClient
     */
    public static fromObject(object: { [k: string]: any }): CSOEconGameAccountClient;

    /**
     * Creates a plain object from a CSOEconGameAccountClient message. Also converts values to other types if specified.
     * @param message CSOEconGameAccountClient
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconGameAccountClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconGameAccountClient to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconGameAccountClient
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOItemCriteriaCondition. */
export class CSOItemCriteriaCondition implements ICSOItemCriteriaCondition {

    /**
     * Constructs a new CSOItemCriteriaCondition.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOItemCriteriaCondition);

    /** CSOItemCriteriaCondition op. */
    public op: number;

    /** CSOItemCriteriaCondition field. */
    public field: string;

    /** CSOItemCriteriaCondition required. */
    public required: boolean;

    /** CSOItemCriteriaCondition floatValue. */
    public floatValue: number;

    /** CSOItemCriteriaCondition stringValue. */
    public stringValue: string;

    /**
     * Creates a new CSOItemCriteriaCondition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOItemCriteriaCondition instance
     */
    public static create(properties?: ICSOItemCriteriaCondition): CSOItemCriteriaCondition;

    /**
     * Encodes the specified CSOItemCriteriaCondition message. Does not implicitly {@link CSOItemCriteriaCondition.verify|verify} messages.
     * @param message CSOItemCriteriaCondition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOItemCriteriaCondition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOItemCriteriaCondition message, length delimited. Does not implicitly {@link CSOItemCriteriaCondition.verify|verify} messages.
     * @param message CSOItemCriteriaCondition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOItemCriteriaCondition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOItemCriteriaCondition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOItemCriteriaCondition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOItemCriteriaCondition;

    /**
     * Decodes a CSOItemCriteriaCondition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOItemCriteriaCondition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOItemCriteriaCondition;

    /**
     * Verifies a CSOItemCriteriaCondition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOItemCriteriaCondition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOItemCriteriaCondition
     */
    public static fromObject(object: { [k: string]: any }): CSOItemCriteriaCondition;

    /**
     * Creates a plain object from a CSOItemCriteriaCondition message. Also converts values to other types if specified.
     * @param message CSOItemCriteriaCondition
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOItemCriteriaCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOItemCriteriaCondition to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOItemCriteriaCondition
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOItemCriteria. */
export class CSOItemCriteria implements ICSOItemCriteria {

    /**
     * Constructs a new CSOItemCriteria.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOItemCriteria);

    /** CSOItemCriteria itemLevel. */
    public itemLevel: number;

    /** CSOItemCriteria itemQuality. */
    public itemQuality: number;

    /** CSOItemCriteria itemLevelSet. */
    public itemLevelSet: boolean;

    /** CSOItemCriteria itemQualitySet. */
    public itemQualitySet: boolean;

    /** CSOItemCriteria initialInventory. */
    public initialInventory: number;

    /** CSOItemCriteria initialQuantity. */
    public initialQuantity: number;

    /** CSOItemCriteria ignoreEnabledFlag. */
    public ignoreEnabledFlag: boolean;

    /** CSOItemCriteria conditions. */
    public conditions: ICSOItemCriteriaCondition[];

    /** CSOItemCriteria itemRarity. */
    public itemRarity: number;

    /** CSOItemCriteria itemRaritySet. */
    public itemRaritySet: boolean;

    /** CSOItemCriteria recentOnly. */
    public recentOnly: boolean;

    /**
     * Creates a new CSOItemCriteria instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOItemCriteria instance
     */
    public static create(properties?: ICSOItemCriteria): CSOItemCriteria;

    /**
     * Encodes the specified CSOItemCriteria message. Does not implicitly {@link CSOItemCriteria.verify|verify} messages.
     * @param message CSOItemCriteria message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOItemCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOItemCriteria message, length delimited. Does not implicitly {@link CSOItemCriteria.verify|verify} messages.
     * @param message CSOItemCriteria message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOItemCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOItemCriteria message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOItemCriteria
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOItemCriteria;

    /**
     * Decodes a CSOItemCriteria message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOItemCriteria
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOItemCriteria;

    /**
     * Verifies a CSOItemCriteria message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOItemCriteria message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOItemCriteria
     */
    public static fromObject(object: { [k: string]: any }): CSOItemCriteria;

    /**
     * Creates a plain object from a CSOItemCriteria message. Also converts values to other types if specified.
     * @param message CSOItemCriteria
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOItemCriteria, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOItemCriteria to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOItemCriteria
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOItemRecipe. */
export class CSOItemRecipe implements ICSOItemRecipe {

    /**
     * Constructs a new CSOItemRecipe.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOItemRecipe);

    /** CSOItemRecipe defIndex. */
    public defIndex: number;

    /** CSOItemRecipe name. */
    public name: string;

    /** CSOItemRecipe nA. */
    public nA: string;

    /** CSOItemRecipe descInputs. */
    public descInputs: string;

    /** CSOItemRecipe descOutputs. */
    public descOutputs: string;

    /** CSOItemRecipe diA. */
    public diA: string;

    /** CSOItemRecipe diB. */
    public diB: string;

    /** CSOItemRecipe diC. */
    public diC: string;

    /** CSOItemRecipe doA. */
    public doA: string;

    /** CSOItemRecipe doB. */
    public doB: string;

    /** CSOItemRecipe doC. */
    public doC: string;

    /** CSOItemRecipe requiresAllSameClass. */
    public requiresAllSameClass: boolean;

    /** CSOItemRecipe requiresAllSameSlot. */
    public requiresAllSameSlot: boolean;

    /** CSOItemRecipe classUsageForOutput. */
    public classUsageForOutput: number;

    /** CSOItemRecipe slotUsageForOutput. */
    public slotUsageForOutput: number;

    /** CSOItemRecipe setForOutput. */
    public setForOutput: number;

    /** CSOItemRecipe inputItemsCriteria. */
    public inputItemsCriteria: ICSOItemCriteria[];

    /** CSOItemRecipe outputItemsCriteria. */
    public outputItemsCriteria: ICSOItemCriteria[];

    /** CSOItemRecipe inputItemDupeCounts. */
    public inputItemDupeCounts: number[];

    /**
     * Creates a new CSOItemRecipe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOItemRecipe instance
     */
    public static create(properties?: ICSOItemRecipe): CSOItemRecipe;

    /**
     * Encodes the specified CSOItemRecipe message. Does not implicitly {@link CSOItemRecipe.verify|verify} messages.
     * @param message CSOItemRecipe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOItemRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOItemRecipe message, length delimited. Does not implicitly {@link CSOItemRecipe.verify|verify} messages.
     * @param message CSOItemRecipe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOItemRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOItemRecipe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOItemRecipe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOItemRecipe;

    /**
     * Decodes a CSOItemRecipe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOItemRecipe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOItemRecipe;

    /**
     * Verifies a CSOItemRecipe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOItemRecipe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOItemRecipe
     */
    public static fromObject(object: { [k: string]: any }): CSOItemRecipe;

    /**
     * Creates a plain object from a CSOItemRecipe message. Also converts values to other types if specified.
     * @param message CSOItemRecipe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOItemRecipe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOItemRecipe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOItemRecipe
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgDevNewItemRequest. */
export class CMsgDevNewItemRequest implements ICMsgDevNewItemRequest {

    /**
     * Constructs a new CMsgDevNewItemRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgDevNewItemRequest);

    /** CMsgDevNewItemRequest receiver. */
    public receiver: (number|Long);

    /** CMsgDevNewItemRequest criteria. */
    public criteria?: (ICSOItemCriteria|null);

    /**
     * Creates a new CMsgDevNewItemRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgDevNewItemRequest instance
     */
    public static create(properties?: ICMsgDevNewItemRequest): CMsgDevNewItemRequest;

    /**
     * Encodes the specified CMsgDevNewItemRequest message. Does not implicitly {@link CMsgDevNewItemRequest.verify|verify} messages.
     * @param message CMsgDevNewItemRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgDevNewItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgDevNewItemRequest message, length delimited. Does not implicitly {@link CMsgDevNewItemRequest.verify|verify} messages.
     * @param message CMsgDevNewItemRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgDevNewItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgDevNewItemRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgDevNewItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgDevNewItemRequest;

    /**
     * Decodes a CMsgDevNewItemRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgDevNewItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgDevNewItemRequest;

    /**
     * Verifies a CMsgDevNewItemRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgDevNewItemRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgDevNewItemRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgDevNewItemRequest;

    /**
     * Creates a plain object from a CMsgDevNewItemRequest message. Also converts values to other types if specified.
     * @param message CMsgDevNewItemRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgDevNewItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgDevNewItemRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgDevNewItemRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgIncrementKillCountAttribute. */
export class CMsgIncrementKillCountAttribute implements ICMsgIncrementKillCountAttribute {

    /**
     * Constructs a new CMsgIncrementKillCountAttribute.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgIncrementKillCountAttribute);

    /** CMsgIncrementKillCountAttribute killerAccountId. */
    public killerAccountId: number;

    /** CMsgIncrementKillCountAttribute victimAccountId. */
    public victimAccountId: number;

    /** CMsgIncrementKillCountAttribute itemId. */
    public itemId: (number|Long);

    /** CMsgIncrementKillCountAttribute eventType. */
    public eventType: number;

    /** CMsgIncrementKillCountAttribute amount. */
    public amount: number;

    /**
     * Creates a new CMsgIncrementKillCountAttribute instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgIncrementKillCountAttribute instance
     */
    public static create(properties?: ICMsgIncrementKillCountAttribute): CMsgIncrementKillCountAttribute;

    /**
     * Encodes the specified CMsgIncrementKillCountAttribute message. Does not implicitly {@link CMsgIncrementKillCountAttribute.verify|verify} messages.
     * @param message CMsgIncrementKillCountAttribute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgIncrementKillCountAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgIncrementKillCountAttribute message, length delimited. Does not implicitly {@link CMsgIncrementKillCountAttribute.verify|verify} messages.
     * @param message CMsgIncrementKillCountAttribute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgIncrementKillCountAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgIncrementKillCountAttribute message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgIncrementKillCountAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgIncrementKillCountAttribute;

    /**
     * Decodes a CMsgIncrementKillCountAttribute message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgIncrementKillCountAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgIncrementKillCountAttribute;

    /**
     * Verifies a CMsgIncrementKillCountAttribute message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgIncrementKillCountAttribute message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgIncrementKillCountAttribute
     */
    public static fromObject(object: { [k: string]: any }): CMsgIncrementKillCountAttribute;

    /**
     * Creates a plain object from a CMsgIncrementKillCountAttribute message. Also converts values to other types if specified.
     * @param message CMsgIncrementKillCountAttribute
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgIncrementKillCountAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgIncrementKillCountAttribute to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgIncrementKillCountAttribute
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgApplySticker. */
export class CMsgApplySticker implements ICMsgApplySticker {

    /**
     * Constructs a new CMsgApplySticker.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgApplySticker);

    /** CMsgApplySticker stickerItemId. */
    public stickerItemId: (number|Long);

    /** CMsgApplySticker itemItemId. */
    public itemItemId: (number|Long);

    /** CMsgApplySticker stickerSlot. */
    public stickerSlot: number;

    /** CMsgApplySticker baseitemDefidx. */
    public baseitemDefidx: number;

    /** CMsgApplySticker stickerWear. */
    public stickerWear: number;

    /**
     * Creates a new CMsgApplySticker instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgApplySticker instance
     */
    public static create(properties?: ICMsgApplySticker): CMsgApplySticker;

    /**
     * Encodes the specified CMsgApplySticker message. Does not implicitly {@link CMsgApplySticker.verify|verify} messages.
     * @param message CMsgApplySticker message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgApplySticker, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgApplySticker message, length delimited. Does not implicitly {@link CMsgApplySticker.verify|verify} messages.
     * @param message CMsgApplySticker message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgApplySticker, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgApplySticker message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgApplySticker
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgApplySticker;

    /**
     * Decodes a CMsgApplySticker message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgApplySticker
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgApplySticker;

    /**
     * Verifies a CMsgApplySticker message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgApplySticker message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgApplySticker
     */
    public static fromObject(object: { [k: string]: any }): CMsgApplySticker;

    /**
     * Creates a plain object from a CMsgApplySticker message. Also converts values to other types if specified.
     * @param message CMsgApplySticker
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgApplySticker, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgApplySticker to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgApplySticker
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgModifyItemAttribute. */
export class CMsgModifyItemAttribute implements ICMsgModifyItemAttribute {

    /**
     * Constructs a new CMsgModifyItemAttribute.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgModifyItemAttribute);

    /** CMsgModifyItemAttribute itemId. */
    public itemId: (number|Long);

    /** CMsgModifyItemAttribute attrDefidx. */
    public attrDefidx: number;

    /** CMsgModifyItemAttribute attrValue. */
    public attrValue: number;

    /**
     * Creates a new CMsgModifyItemAttribute instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgModifyItemAttribute instance
     */
    public static create(properties?: ICMsgModifyItemAttribute): CMsgModifyItemAttribute;

    /**
     * Encodes the specified CMsgModifyItemAttribute message. Does not implicitly {@link CMsgModifyItemAttribute.verify|verify} messages.
     * @param message CMsgModifyItemAttribute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgModifyItemAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgModifyItemAttribute message, length delimited. Does not implicitly {@link CMsgModifyItemAttribute.verify|verify} messages.
     * @param message CMsgModifyItemAttribute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgModifyItemAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgModifyItemAttribute message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgModifyItemAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgModifyItemAttribute;

    /**
     * Decodes a CMsgModifyItemAttribute message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgModifyItemAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgModifyItemAttribute;

    /**
     * Verifies a CMsgModifyItemAttribute message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgModifyItemAttribute message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgModifyItemAttribute
     */
    public static fromObject(object: { [k: string]: any }): CMsgModifyItemAttribute;

    /**
     * Creates a plain object from a CMsgModifyItemAttribute message. Also converts values to other types if specified.
     * @param message CMsgModifyItemAttribute
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgModifyItemAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgModifyItemAttribute to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgModifyItemAttribute
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgApplyStatTrakSwap. */
export class CMsgApplyStatTrakSwap implements ICMsgApplyStatTrakSwap {

    /**
     * Constructs a new CMsgApplyStatTrakSwap.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgApplyStatTrakSwap);

    /** CMsgApplyStatTrakSwap toolItemId. */
    public toolItemId: (number|Long);

    /** CMsgApplyStatTrakSwap item_1ItemId. */
    public item_1ItemId: (number|Long);

    /** CMsgApplyStatTrakSwap item_2ItemId. */
    public item_2ItemId: (number|Long);

    /**
     * Creates a new CMsgApplyStatTrakSwap instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgApplyStatTrakSwap instance
     */
    public static create(properties?: ICMsgApplyStatTrakSwap): CMsgApplyStatTrakSwap;

    /**
     * Encodes the specified CMsgApplyStatTrakSwap message. Does not implicitly {@link CMsgApplyStatTrakSwap.verify|verify} messages.
     * @param message CMsgApplyStatTrakSwap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgApplyStatTrakSwap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgApplyStatTrakSwap message, length delimited. Does not implicitly {@link CMsgApplyStatTrakSwap.verify|verify} messages.
     * @param message CMsgApplyStatTrakSwap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgApplyStatTrakSwap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgApplyStatTrakSwap message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgApplyStatTrakSwap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgApplyStatTrakSwap;

    /**
     * Decodes a CMsgApplyStatTrakSwap message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgApplyStatTrakSwap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgApplyStatTrakSwap;

    /**
     * Verifies a CMsgApplyStatTrakSwap message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgApplyStatTrakSwap message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgApplyStatTrakSwap
     */
    public static fromObject(object: { [k: string]: any }): CMsgApplyStatTrakSwap;

    /**
     * Creates a plain object from a CMsgApplyStatTrakSwap message. Also converts values to other types if specified.
     * @param message CMsgApplyStatTrakSwap
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgApplyStatTrakSwap, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgApplyStatTrakSwap to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgApplyStatTrakSwap
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgApplyStrangePart. */
export class CMsgApplyStrangePart implements ICMsgApplyStrangePart {

    /**
     * Constructs a new CMsgApplyStrangePart.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgApplyStrangePart);

    /** CMsgApplyStrangePart strangePartItemId. */
    public strangePartItemId: (number|Long);

    /** CMsgApplyStrangePart itemItemId. */
    public itemItemId: (number|Long);

    /**
     * Creates a new CMsgApplyStrangePart instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgApplyStrangePart instance
     */
    public static create(properties?: ICMsgApplyStrangePart): CMsgApplyStrangePart;

    /**
     * Encodes the specified CMsgApplyStrangePart message. Does not implicitly {@link CMsgApplyStrangePart.verify|verify} messages.
     * @param message CMsgApplyStrangePart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgApplyStrangePart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgApplyStrangePart message, length delimited. Does not implicitly {@link CMsgApplyStrangePart.verify|verify} messages.
     * @param message CMsgApplyStrangePart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgApplyStrangePart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgApplyStrangePart message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgApplyStrangePart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgApplyStrangePart;

    /**
     * Decodes a CMsgApplyStrangePart message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgApplyStrangePart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgApplyStrangePart;

    /**
     * Verifies a CMsgApplyStrangePart message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgApplyStrangePart message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgApplyStrangePart
     */
    public static fromObject(object: { [k: string]: any }): CMsgApplyStrangePart;

    /**
     * Creates a plain object from a CMsgApplyStrangePart message. Also converts values to other types if specified.
     * @param message CMsgApplyStrangePart
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgApplyStrangePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgApplyStrangePart to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgApplyStrangePart
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgApplyPennantUpgrade. */
export class CMsgApplyPennantUpgrade implements ICMsgApplyPennantUpgrade {

    /**
     * Constructs a new CMsgApplyPennantUpgrade.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgApplyPennantUpgrade);

    /** CMsgApplyPennantUpgrade upgradeItemId. */
    public upgradeItemId: (number|Long);

    /** CMsgApplyPennantUpgrade pennantItemId. */
    public pennantItemId: (number|Long);

    /**
     * Creates a new CMsgApplyPennantUpgrade instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgApplyPennantUpgrade instance
     */
    public static create(properties?: ICMsgApplyPennantUpgrade): CMsgApplyPennantUpgrade;

    /**
     * Encodes the specified CMsgApplyPennantUpgrade message. Does not implicitly {@link CMsgApplyPennantUpgrade.verify|verify} messages.
     * @param message CMsgApplyPennantUpgrade message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgApplyPennantUpgrade, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgApplyPennantUpgrade message, length delimited. Does not implicitly {@link CMsgApplyPennantUpgrade.verify|verify} messages.
     * @param message CMsgApplyPennantUpgrade message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgApplyPennantUpgrade, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgApplyPennantUpgrade message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgApplyPennantUpgrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgApplyPennantUpgrade;

    /**
     * Decodes a CMsgApplyPennantUpgrade message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgApplyPennantUpgrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgApplyPennantUpgrade;

    /**
     * Verifies a CMsgApplyPennantUpgrade message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgApplyPennantUpgrade message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgApplyPennantUpgrade
     */
    public static fromObject(object: { [k: string]: any }): CMsgApplyPennantUpgrade;

    /**
     * Creates a plain object from a CMsgApplyPennantUpgrade message. Also converts values to other types if specified.
     * @param message CMsgApplyPennantUpgrade
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgApplyPennantUpgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgApplyPennantUpgrade to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgApplyPennantUpgrade
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgApplyEggEssence. */
export class CMsgApplyEggEssence implements ICMsgApplyEggEssence {

    /**
     * Constructs a new CMsgApplyEggEssence.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgApplyEggEssence);

    /** CMsgApplyEggEssence essenceItemId. */
    public essenceItemId: (number|Long);

    /** CMsgApplyEggEssence eggItemId. */
    public eggItemId: (number|Long);

    /**
     * Creates a new CMsgApplyEggEssence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgApplyEggEssence instance
     */
    public static create(properties?: ICMsgApplyEggEssence): CMsgApplyEggEssence;

    /**
     * Encodes the specified CMsgApplyEggEssence message. Does not implicitly {@link CMsgApplyEggEssence.verify|verify} messages.
     * @param message CMsgApplyEggEssence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgApplyEggEssence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgApplyEggEssence message, length delimited. Does not implicitly {@link CMsgApplyEggEssence.verify|verify} messages.
     * @param message CMsgApplyEggEssence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgApplyEggEssence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgApplyEggEssence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgApplyEggEssence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgApplyEggEssence;

    /**
     * Decodes a CMsgApplyEggEssence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgApplyEggEssence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgApplyEggEssence;

    /**
     * Verifies a CMsgApplyEggEssence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgApplyEggEssence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgApplyEggEssence
     */
    public static fromObject(object: { [k: string]: any }): CMsgApplyEggEssence;

    /**
     * Creates a plain object from a CMsgApplyEggEssence message. Also converts values to other types if specified.
     * @param message CMsgApplyEggEssence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgApplyEggEssence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgApplyEggEssence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgApplyEggEssence
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconItemAttribute. */
export class CSOEconItemAttribute implements ICSOEconItemAttribute {

    /**
     * Constructs a new CSOEconItemAttribute.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconItemAttribute);

    /** CSOEconItemAttribute defIndex. */
    public defIndex: number;

    /** CSOEconItemAttribute value. */
    public value: number;

    /** CSOEconItemAttribute valueBytes. */
    public valueBytes: Uint8Array;

    /**
     * Creates a new CSOEconItemAttribute instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconItemAttribute instance
     */
    public static create(properties?: ICSOEconItemAttribute): CSOEconItemAttribute;

    /**
     * Encodes the specified CSOEconItemAttribute message. Does not implicitly {@link CSOEconItemAttribute.verify|verify} messages.
     * @param message CSOEconItemAttribute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconItemAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconItemAttribute message, length delimited. Does not implicitly {@link CSOEconItemAttribute.verify|verify} messages.
     * @param message CSOEconItemAttribute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconItemAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconItemAttribute message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconItemAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconItemAttribute;

    /**
     * Decodes a CSOEconItemAttribute message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconItemAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconItemAttribute;

    /**
     * Verifies a CSOEconItemAttribute message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconItemAttribute message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconItemAttribute
     */
    public static fromObject(object: { [k: string]: any }): CSOEconItemAttribute;

    /**
     * Creates a plain object from a CSOEconItemAttribute message. Also converts values to other types if specified.
     * @param message CSOEconItemAttribute
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconItemAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconItemAttribute to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconItemAttribute
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconItemEquipped. */
export class CSOEconItemEquipped implements ICSOEconItemEquipped {

    /**
     * Constructs a new CSOEconItemEquipped.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconItemEquipped);

    /** CSOEconItemEquipped newClass. */
    public newClass: number;

    /** CSOEconItemEquipped newSlot. */
    public newSlot: number;

    /**
     * Creates a new CSOEconItemEquipped instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconItemEquipped instance
     */
    public static create(properties?: ICSOEconItemEquipped): CSOEconItemEquipped;

    /**
     * Encodes the specified CSOEconItemEquipped message. Does not implicitly {@link CSOEconItemEquipped.verify|verify} messages.
     * @param message CSOEconItemEquipped message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconItemEquipped, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconItemEquipped message, length delimited. Does not implicitly {@link CSOEconItemEquipped.verify|verify} messages.
     * @param message CSOEconItemEquipped message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconItemEquipped, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconItemEquipped message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconItemEquipped
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconItemEquipped;

    /**
     * Decodes a CSOEconItemEquipped message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconItemEquipped
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconItemEquipped;

    /**
     * Verifies a CSOEconItemEquipped message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconItemEquipped message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconItemEquipped
     */
    public static fromObject(object: { [k: string]: any }): CSOEconItemEquipped;

    /**
     * Creates a plain object from a CSOEconItemEquipped message. Also converts values to other types if specified.
     * @param message CSOEconItemEquipped
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconItemEquipped, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconItemEquipped to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconItemEquipped
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconItem. */
export class CSOEconItem implements ICSOEconItem {

    /**
     * Constructs a new CSOEconItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconItem);

    /** CSOEconItem id. */
    public id: (number|Long);

    /** CSOEconItem accountId. */
    public accountId: number;

    /** CSOEconItem inventory. */
    public inventory: number;

    /** CSOEconItem defIndex. */
    public defIndex: number;

    /** CSOEconItem quantity. */
    public quantity: number;

    /** CSOEconItem level. */
    public level: number;

    /** CSOEconItem quality. */
    public quality: number;

    /** CSOEconItem flags. */
    public flags: number;

    /** CSOEconItem origin. */
    public origin: number;

    /** CSOEconItem customName. */
    public customName: string;

    /** CSOEconItem customDesc. */
    public customDesc: string;

    /** CSOEconItem attribute. */
    public attribute: ICSOEconItemAttribute[];

    /** CSOEconItem interiorItem. */
    public interiorItem?: (ICSOEconItem|null);

    /** CSOEconItem inUse. */
    public inUse: boolean;

    /** CSOEconItem style. */
    public style: number;

    /** CSOEconItem originalId. */
    public originalId: (number|Long);

    /** CSOEconItem equippedState. */
    public equippedState: ICSOEconItemEquipped[];

    /** CSOEconItem rarity. */
    public rarity: number;

    /**
     * Creates a new CSOEconItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconItem instance
     */
    public static create(properties?: ICSOEconItem): CSOEconItem;

    /**
     * Encodes the specified CSOEconItem message. Does not implicitly {@link CSOEconItem.verify|verify} messages.
     * @param message CSOEconItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconItem message, length delimited. Does not implicitly {@link CSOEconItem.verify|verify} messages.
     * @param message CSOEconItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconItem;

    /**
     * Decodes a CSOEconItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconItem;

    /**
     * Verifies a CSOEconItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconItem
     */
    public static fromObject(object: { [k: string]: any }): CSOEconItem;

    /**
     * Creates a plain object from a CSOEconItem message. Also converts values to other types if specified.
     * @param message CSOEconItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAdjustItemEquippedState. */
export class CMsgAdjustItemEquippedState implements ICMsgAdjustItemEquippedState {

    /**
     * Constructs a new CMsgAdjustItemEquippedState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAdjustItemEquippedState);

    /** CMsgAdjustItemEquippedState itemId. */
    public itemId: (number|Long);

    /** CMsgAdjustItemEquippedState newClass. */
    public newClass: number;

    /** CMsgAdjustItemEquippedState newSlot. */
    public newSlot: number;

    /** CMsgAdjustItemEquippedState swap. */
    public swap: boolean;

    /**
     * Creates a new CMsgAdjustItemEquippedState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAdjustItemEquippedState instance
     */
    public static create(properties?: ICMsgAdjustItemEquippedState): CMsgAdjustItemEquippedState;

    /**
     * Encodes the specified CMsgAdjustItemEquippedState message. Does not implicitly {@link CMsgAdjustItemEquippedState.verify|verify} messages.
     * @param message CMsgAdjustItemEquippedState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAdjustItemEquippedState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAdjustItemEquippedState message, length delimited. Does not implicitly {@link CMsgAdjustItemEquippedState.verify|verify} messages.
     * @param message CMsgAdjustItemEquippedState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAdjustItemEquippedState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAdjustItemEquippedState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAdjustItemEquippedState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAdjustItemEquippedState;

    /**
     * Decodes a CMsgAdjustItemEquippedState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAdjustItemEquippedState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAdjustItemEquippedState;

    /**
     * Verifies a CMsgAdjustItemEquippedState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAdjustItemEquippedState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAdjustItemEquippedState
     */
    public static fromObject(object: { [k: string]: any }): CMsgAdjustItemEquippedState;

    /**
     * Creates a plain object from a CMsgAdjustItemEquippedState message. Also converts values to other types if specified.
     * @param message CMsgAdjustItemEquippedState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAdjustItemEquippedState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAdjustItemEquippedState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAdjustItemEquippedState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAdjustItemEquippedStateMulti. */
export class CMsgAdjustItemEquippedStateMulti implements ICMsgAdjustItemEquippedStateMulti {

    /**
     * Constructs a new CMsgAdjustItemEquippedStateMulti.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAdjustItemEquippedStateMulti);

    /** CMsgAdjustItemEquippedStateMulti tEquips. */
    public tEquips: (number|Long)[];

    /** CMsgAdjustItemEquippedStateMulti ctEquips. */
    public ctEquips: (number|Long)[];

    /** CMsgAdjustItemEquippedStateMulti noteamEquips. */
    public noteamEquips: (number|Long)[];

    /**
     * Creates a new CMsgAdjustItemEquippedStateMulti instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAdjustItemEquippedStateMulti instance
     */
    public static create(properties?: ICMsgAdjustItemEquippedStateMulti): CMsgAdjustItemEquippedStateMulti;

    /**
     * Encodes the specified CMsgAdjustItemEquippedStateMulti message. Does not implicitly {@link CMsgAdjustItemEquippedStateMulti.verify|verify} messages.
     * @param message CMsgAdjustItemEquippedStateMulti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAdjustItemEquippedStateMulti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAdjustItemEquippedStateMulti message, length delimited. Does not implicitly {@link CMsgAdjustItemEquippedStateMulti.verify|verify} messages.
     * @param message CMsgAdjustItemEquippedStateMulti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAdjustItemEquippedStateMulti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAdjustItemEquippedStateMulti message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAdjustItemEquippedStateMulti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAdjustItemEquippedStateMulti;

    /**
     * Decodes a CMsgAdjustItemEquippedStateMulti message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAdjustItemEquippedStateMulti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAdjustItemEquippedStateMulti;

    /**
     * Verifies a CMsgAdjustItemEquippedStateMulti message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAdjustItemEquippedStateMulti message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAdjustItemEquippedStateMulti
     */
    public static fromObject(object: { [k: string]: any }): CMsgAdjustItemEquippedStateMulti;

    /**
     * Creates a plain object from a CMsgAdjustItemEquippedStateMulti message. Also converts values to other types if specified.
     * @param message CMsgAdjustItemEquippedStateMulti
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAdjustItemEquippedStateMulti, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAdjustItemEquippedStateMulti to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAdjustItemEquippedStateMulti
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSortItems. */
export class CMsgSortItems implements ICMsgSortItems {

    /**
     * Constructs a new CMsgSortItems.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSortItems);

    /** CMsgSortItems sortType. */
    public sortType: number;

    /**
     * Creates a new CMsgSortItems instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSortItems instance
     */
    public static create(properties?: ICMsgSortItems): CMsgSortItems;

    /**
     * Encodes the specified CMsgSortItems message. Does not implicitly {@link CMsgSortItems.verify|verify} messages.
     * @param message CMsgSortItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSortItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSortItems message, length delimited. Does not implicitly {@link CMsgSortItems.verify|verify} messages.
     * @param message CMsgSortItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSortItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSortItems message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSortItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSortItems;

    /**
     * Decodes a CMsgSortItems message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSortItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSortItems;

    /**
     * Verifies a CMsgSortItems message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSortItems message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSortItems
     */
    public static fromObject(object: { [k: string]: any }): CMsgSortItems;

    /**
     * Creates a plain object from a CMsgSortItems message. Also converts values to other types if specified.
     * @param message CMsgSortItems
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSortItems, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSortItems to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSortItems
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconClaimCode. */
export class CSOEconClaimCode implements ICSOEconClaimCode {

    /**
     * Constructs a new CSOEconClaimCode.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconClaimCode);

    /** CSOEconClaimCode accountId. */
    public accountId: number;

    /** CSOEconClaimCode codeType. */
    public codeType: number;

    /** CSOEconClaimCode timeAcquired. */
    public timeAcquired: number;

    /** CSOEconClaimCode code. */
    public code: string;

    /**
     * Creates a new CSOEconClaimCode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconClaimCode instance
     */
    public static create(properties?: ICSOEconClaimCode): CSOEconClaimCode;

    /**
     * Encodes the specified CSOEconClaimCode message. Does not implicitly {@link CSOEconClaimCode.verify|verify} messages.
     * @param message CSOEconClaimCode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconClaimCode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconClaimCode message, length delimited. Does not implicitly {@link CSOEconClaimCode.verify|verify} messages.
     * @param message CSOEconClaimCode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconClaimCode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconClaimCode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconClaimCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconClaimCode;

    /**
     * Decodes a CSOEconClaimCode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconClaimCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconClaimCode;

    /**
     * Verifies a CSOEconClaimCode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconClaimCode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconClaimCode
     */
    public static fromObject(object: { [k: string]: any }): CSOEconClaimCode;

    /**
     * Creates a plain object from a CSOEconClaimCode message. Also converts values to other types if specified.
     * @param message CSOEconClaimCode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconClaimCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconClaimCode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconClaimCode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgStoreGetUserData. */
export class CMsgStoreGetUserData implements ICMsgStoreGetUserData {

    /**
     * Constructs a new CMsgStoreGetUserData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgStoreGetUserData);

    /** CMsgStoreGetUserData priceSheetVersion. */
    public priceSheetVersion: number;

    /** CMsgStoreGetUserData currency. */
    public currency: number;

    /**
     * Creates a new CMsgStoreGetUserData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgStoreGetUserData instance
     */
    public static create(properties?: ICMsgStoreGetUserData): CMsgStoreGetUserData;

    /**
     * Encodes the specified CMsgStoreGetUserData message. Does not implicitly {@link CMsgStoreGetUserData.verify|verify} messages.
     * @param message CMsgStoreGetUserData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgStoreGetUserData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgStoreGetUserData message, length delimited. Does not implicitly {@link CMsgStoreGetUserData.verify|verify} messages.
     * @param message CMsgStoreGetUserData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgStoreGetUserData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgStoreGetUserData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgStoreGetUserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgStoreGetUserData;

    /**
     * Decodes a CMsgStoreGetUserData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgStoreGetUserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgStoreGetUserData;

    /**
     * Verifies a CMsgStoreGetUserData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgStoreGetUserData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgStoreGetUserData
     */
    public static fromObject(object: { [k: string]: any }): CMsgStoreGetUserData;

    /**
     * Creates a plain object from a CMsgStoreGetUserData message. Also converts values to other types if specified.
     * @param message CMsgStoreGetUserData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgStoreGetUserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgStoreGetUserData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgStoreGetUserData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgStoreGetUserDataResponse. */
export class CMsgStoreGetUserDataResponse implements ICMsgStoreGetUserDataResponse {

    /**
     * Constructs a new CMsgStoreGetUserDataResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgStoreGetUserDataResponse);

    /** CMsgStoreGetUserDataResponse result. */
    public result: number;

    /** CMsgStoreGetUserDataResponse currencyDeprecated. */
    public currencyDeprecated: number;

    /** CMsgStoreGetUserDataResponse countryDeprecated. */
    public countryDeprecated: string;

    /** CMsgStoreGetUserDataResponse priceSheetVersion. */
    public priceSheetVersion: number;

    /** CMsgStoreGetUserDataResponse priceSheet. */
    public priceSheet: Uint8Array;

    /**
     * Creates a new CMsgStoreGetUserDataResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgStoreGetUserDataResponse instance
     */
    public static create(properties?: ICMsgStoreGetUserDataResponse): CMsgStoreGetUserDataResponse;

    /**
     * Encodes the specified CMsgStoreGetUserDataResponse message. Does not implicitly {@link CMsgStoreGetUserDataResponse.verify|verify} messages.
     * @param message CMsgStoreGetUserDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgStoreGetUserDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgStoreGetUserDataResponse message, length delimited. Does not implicitly {@link CMsgStoreGetUserDataResponse.verify|verify} messages.
     * @param message CMsgStoreGetUserDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgStoreGetUserDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgStoreGetUserDataResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgStoreGetUserDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgStoreGetUserDataResponse;

    /**
     * Decodes a CMsgStoreGetUserDataResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgStoreGetUserDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgStoreGetUserDataResponse;

    /**
     * Verifies a CMsgStoreGetUserDataResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgStoreGetUserDataResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgStoreGetUserDataResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgStoreGetUserDataResponse;

    /**
     * Creates a plain object from a CMsgStoreGetUserDataResponse message. Also converts values to other types if specified.
     * @param message CMsgStoreGetUserDataResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgStoreGetUserDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgStoreGetUserDataResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgStoreGetUserDataResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgUpdateItemSchema. */
export class CMsgUpdateItemSchema implements ICMsgUpdateItemSchema {

    /**
     * Constructs a new CMsgUpdateItemSchema.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgUpdateItemSchema);

    /** CMsgUpdateItemSchema itemsGame. */
    public itemsGame: Uint8Array;

    /** CMsgUpdateItemSchema itemSchemaVersion. */
    public itemSchemaVersion: number;

    /** CMsgUpdateItemSchema itemsGameUrl. */
    public itemsGameUrl: string;

    /**
     * Creates a new CMsgUpdateItemSchema instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgUpdateItemSchema instance
     */
    public static create(properties?: ICMsgUpdateItemSchema): CMsgUpdateItemSchema;

    /**
     * Encodes the specified CMsgUpdateItemSchema message. Does not implicitly {@link CMsgUpdateItemSchema.verify|verify} messages.
     * @param message CMsgUpdateItemSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgUpdateItemSchema, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgUpdateItemSchema message, length delimited. Does not implicitly {@link CMsgUpdateItemSchema.verify|verify} messages.
     * @param message CMsgUpdateItemSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgUpdateItemSchema, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgUpdateItemSchema message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgUpdateItemSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgUpdateItemSchema;

    /**
     * Decodes a CMsgUpdateItemSchema message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgUpdateItemSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgUpdateItemSchema;

    /**
     * Verifies a CMsgUpdateItemSchema message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgUpdateItemSchema message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgUpdateItemSchema
     */
    public static fromObject(object: { [k: string]: any }): CMsgUpdateItemSchema;

    /**
     * Creates a plain object from a CMsgUpdateItemSchema message. Also converts values to other types if specified.
     * @param message CMsgUpdateItemSchema
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgUpdateItemSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgUpdateItemSchema to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgUpdateItemSchema
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCError. */
export class CMsgGCError implements ICMsgGCError {

    /**
     * Constructs a new CMsgGCError.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCError);

    /** CMsgGCError errorText. */
    public errorText: string;

    /**
     * Creates a new CMsgGCError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCError instance
     */
    public static create(properties?: ICMsgGCError): CMsgGCError;

    /**
     * Encodes the specified CMsgGCError message. Does not implicitly {@link CMsgGCError.verify|verify} messages.
     * @param message CMsgGCError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCError message, length delimited. Does not implicitly {@link CMsgGCError.verify|verify} messages.
     * @param message CMsgGCError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCError;

    /**
     * Decodes a CMsgGCError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCError;

    /**
     * Verifies a CMsgGCError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCError
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCError;

    /**
     * Creates a plain object from a CMsgGCError message. Also converts values to other types if specified.
     * @param message CMsgGCError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCError
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgRequestInventoryRefresh. */
export class CMsgRequestInventoryRefresh implements ICMsgRequestInventoryRefresh {

    /**
     * Constructs a new CMsgRequestInventoryRefresh.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgRequestInventoryRefresh);

    /**
     * Creates a new CMsgRequestInventoryRefresh instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgRequestInventoryRefresh instance
     */
    public static create(properties?: ICMsgRequestInventoryRefresh): CMsgRequestInventoryRefresh;

    /**
     * Encodes the specified CMsgRequestInventoryRefresh message. Does not implicitly {@link CMsgRequestInventoryRefresh.verify|verify} messages.
     * @param message CMsgRequestInventoryRefresh message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgRequestInventoryRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgRequestInventoryRefresh message, length delimited. Does not implicitly {@link CMsgRequestInventoryRefresh.verify|verify} messages.
     * @param message CMsgRequestInventoryRefresh message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgRequestInventoryRefresh, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgRequestInventoryRefresh message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgRequestInventoryRefresh
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgRequestInventoryRefresh;

    /**
     * Decodes a CMsgRequestInventoryRefresh message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgRequestInventoryRefresh
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgRequestInventoryRefresh;

    /**
     * Verifies a CMsgRequestInventoryRefresh message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgRequestInventoryRefresh message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgRequestInventoryRefresh
     */
    public static fromObject(object: { [k: string]: any }): CMsgRequestInventoryRefresh;

    /**
     * Creates a plain object from a CMsgRequestInventoryRefresh message. Also converts values to other types if specified.
     * @param message CMsgRequestInventoryRefresh
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgRequestInventoryRefresh, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgRequestInventoryRefresh to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgRequestInventoryRefresh
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgConVarValue. */
export class CMsgConVarValue implements ICMsgConVarValue {

    /**
     * Constructs a new CMsgConVarValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgConVarValue);

    /** CMsgConVarValue name. */
    public name: string;

    /** CMsgConVarValue value. */
    public value: string;

    /**
     * Creates a new CMsgConVarValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgConVarValue instance
     */
    public static create(properties?: ICMsgConVarValue): CMsgConVarValue;

    /**
     * Encodes the specified CMsgConVarValue message. Does not implicitly {@link CMsgConVarValue.verify|verify} messages.
     * @param message CMsgConVarValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgConVarValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgConVarValue message, length delimited. Does not implicitly {@link CMsgConVarValue.verify|verify} messages.
     * @param message CMsgConVarValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgConVarValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgConVarValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgConVarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgConVarValue;

    /**
     * Decodes a CMsgConVarValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgConVarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgConVarValue;

    /**
     * Verifies a CMsgConVarValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgConVarValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgConVarValue
     */
    public static fromObject(object: { [k: string]: any }): CMsgConVarValue;

    /**
     * Creates a plain object from a CMsgConVarValue message. Also converts values to other types if specified.
     * @param message CMsgConVarValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgConVarValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgConVarValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgConVarValue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgReplicateConVars. */
export class CMsgReplicateConVars implements ICMsgReplicateConVars {

    /**
     * Constructs a new CMsgReplicateConVars.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgReplicateConVars);

    /** CMsgReplicateConVars convars. */
    public convars: ICMsgConVarValue[];

    /**
     * Creates a new CMsgReplicateConVars instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgReplicateConVars instance
     */
    public static create(properties?: ICMsgReplicateConVars): CMsgReplicateConVars;

    /**
     * Encodes the specified CMsgReplicateConVars message. Does not implicitly {@link CMsgReplicateConVars.verify|verify} messages.
     * @param message CMsgReplicateConVars message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgReplicateConVars, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgReplicateConVars message, length delimited. Does not implicitly {@link CMsgReplicateConVars.verify|verify} messages.
     * @param message CMsgReplicateConVars message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgReplicateConVars, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgReplicateConVars message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgReplicateConVars
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgReplicateConVars;

    /**
     * Decodes a CMsgReplicateConVars message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgReplicateConVars
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgReplicateConVars;

    /**
     * Verifies a CMsgReplicateConVars message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgReplicateConVars message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgReplicateConVars
     */
    public static fromObject(object: { [k: string]: any }): CMsgReplicateConVars;

    /**
     * Creates a plain object from a CMsgReplicateConVars message. Also converts values to other types if specified.
     * @param message CMsgReplicateConVars
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgReplicateConVars, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgReplicateConVars to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgReplicateConVars
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgUseItem. */
export class CMsgUseItem implements ICMsgUseItem {

    /**
     * Constructs a new CMsgUseItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgUseItem);

    /** CMsgUseItem itemId. */
    public itemId: (number|Long);

    /** CMsgUseItem targetSteamId. */
    public targetSteamId: (number|Long);

    /** CMsgUseItem gift_PotentialTargets. */
    public gift_PotentialTargets: number[];

    /** CMsgUseItem duel_ClassLock. */
    public duel_ClassLock: number;

    /** CMsgUseItem initiatorSteamId. */
    public initiatorSteamId: (number|Long);

    /**
     * Creates a new CMsgUseItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgUseItem instance
     */
    public static create(properties?: ICMsgUseItem): CMsgUseItem;

    /**
     * Encodes the specified CMsgUseItem message. Does not implicitly {@link CMsgUseItem.verify|verify} messages.
     * @param message CMsgUseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgUseItem message, length delimited. Does not implicitly {@link CMsgUseItem.verify|verify} messages.
     * @param message CMsgUseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgUseItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgUseItem;

    /**
     * Decodes a CMsgUseItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgUseItem;

    /**
     * Verifies a CMsgUseItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgUseItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgUseItem
     */
    public static fromObject(object: { [k: string]: any }): CMsgUseItem;

    /**
     * Creates a plain object from a CMsgUseItem message. Also converts values to other types if specified.
     * @param message CMsgUseItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgUseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgUseItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgUseItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgReplayUploadedToYouTube. */
export class CMsgReplayUploadedToYouTube implements ICMsgReplayUploadedToYouTube {

    /**
     * Constructs a new CMsgReplayUploadedToYouTube.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgReplayUploadedToYouTube);

    /** CMsgReplayUploadedToYouTube youtubeUrl. */
    public youtubeUrl: string;

    /** CMsgReplayUploadedToYouTube youtubeAccountName. */
    public youtubeAccountName: string;

    /** CMsgReplayUploadedToYouTube sessionId. */
    public sessionId: (number|Long);

    /**
     * Creates a new CMsgReplayUploadedToYouTube instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgReplayUploadedToYouTube instance
     */
    public static create(properties?: ICMsgReplayUploadedToYouTube): CMsgReplayUploadedToYouTube;

    /**
     * Encodes the specified CMsgReplayUploadedToYouTube message. Does not implicitly {@link CMsgReplayUploadedToYouTube.verify|verify} messages.
     * @param message CMsgReplayUploadedToYouTube message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgReplayUploadedToYouTube, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgReplayUploadedToYouTube message, length delimited. Does not implicitly {@link CMsgReplayUploadedToYouTube.verify|verify} messages.
     * @param message CMsgReplayUploadedToYouTube message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgReplayUploadedToYouTube, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgReplayUploadedToYouTube message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgReplayUploadedToYouTube
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgReplayUploadedToYouTube;

    /**
     * Decodes a CMsgReplayUploadedToYouTube message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgReplayUploadedToYouTube
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgReplayUploadedToYouTube;

    /**
     * Verifies a CMsgReplayUploadedToYouTube message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgReplayUploadedToYouTube message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgReplayUploadedToYouTube
     */
    public static fromObject(object: { [k: string]: any }): CMsgReplayUploadedToYouTube;

    /**
     * Creates a plain object from a CMsgReplayUploadedToYouTube message. Also converts values to other types if specified.
     * @param message CMsgReplayUploadedToYouTube
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgReplayUploadedToYouTube, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgReplayUploadedToYouTube to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgReplayUploadedToYouTube
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgConsumableExhausted. */
export class CMsgConsumableExhausted implements ICMsgConsumableExhausted {

    /**
     * Constructs a new CMsgConsumableExhausted.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgConsumableExhausted);

    /** CMsgConsumableExhausted itemDefId. */
    public itemDefId: number;

    /**
     * Creates a new CMsgConsumableExhausted instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgConsumableExhausted instance
     */
    public static create(properties?: ICMsgConsumableExhausted): CMsgConsumableExhausted;

    /**
     * Encodes the specified CMsgConsumableExhausted message. Does not implicitly {@link CMsgConsumableExhausted.verify|verify} messages.
     * @param message CMsgConsumableExhausted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgConsumableExhausted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgConsumableExhausted message, length delimited. Does not implicitly {@link CMsgConsumableExhausted.verify|verify} messages.
     * @param message CMsgConsumableExhausted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgConsumableExhausted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgConsumableExhausted message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgConsumableExhausted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgConsumableExhausted;

    /**
     * Decodes a CMsgConsumableExhausted message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgConsumableExhausted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgConsumableExhausted;

    /**
     * Verifies a CMsgConsumableExhausted message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgConsumableExhausted message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgConsumableExhausted
     */
    public static fromObject(object: { [k: string]: any }): CMsgConsumableExhausted;

    /**
     * Creates a plain object from a CMsgConsumableExhausted message. Also converts values to other types if specified.
     * @param message CMsgConsumableExhausted
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgConsumableExhausted, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgConsumableExhausted to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgConsumableExhausted
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgItemAcknowledged__DEPRECATED. */
export class CMsgItemAcknowledged__DEPRECATED implements ICMsgItemAcknowledged__DEPRECATED {

    /**
     * Constructs a new CMsgItemAcknowledged__DEPRECATED.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgItemAcknowledged__DEPRECATED);

    /** CMsgItemAcknowledged__DEPRECATED accountId. */
    public accountId: number;

    /** CMsgItemAcknowledged__DEPRECATED inventory. */
    public inventory: number;

    /** CMsgItemAcknowledged__DEPRECATED defIndex. */
    public defIndex: number;

    /** CMsgItemAcknowledged__DEPRECATED quality. */
    public quality: number;

    /** CMsgItemAcknowledged__DEPRECATED rarity. */
    public rarity: number;

    /** CMsgItemAcknowledged__DEPRECATED origin. */
    public origin: number;

    /** CMsgItemAcknowledged__DEPRECATED itemId. */
    public itemId: (number|Long);

    /**
     * Creates a new CMsgItemAcknowledged__DEPRECATED instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgItemAcknowledged__DEPRECATED instance
     */
    public static create(properties?: ICMsgItemAcknowledged__DEPRECATED): CMsgItemAcknowledged__DEPRECATED;

    /**
     * Encodes the specified CMsgItemAcknowledged__DEPRECATED message. Does not implicitly {@link CMsgItemAcknowledged__DEPRECATED.verify|verify} messages.
     * @param message CMsgItemAcknowledged__DEPRECATED message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgItemAcknowledged__DEPRECATED, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgItemAcknowledged__DEPRECATED message, length delimited. Does not implicitly {@link CMsgItemAcknowledged__DEPRECATED.verify|verify} messages.
     * @param message CMsgItemAcknowledged__DEPRECATED message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgItemAcknowledged__DEPRECATED, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgItemAcknowledged__DEPRECATED message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgItemAcknowledged__DEPRECATED
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgItemAcknowledged__DEPRECATED;

    /**
     * Decodes a CMsgItemAcknowledged__DEPRECATED message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgItemAcknowledged__DEPRECATED
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgItemAcknowledged__DEPRECATED;

    /**
     * Verifies a CMsgItemAcknowledged__DEPRECATED message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgItemAcknowledged__DEPRECATED message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgItemAcknowledged__DEPRECATED
     */
    public static fromObject(object: { [k: string]: any }): CMsgItemAcknowledged__DEPRECATED;

    /**
     * Creates a plain object from a CMsgItemAcknowledged__DEPRECATED message. Also converts values to other types if specified.
     * @param message CMsgItemAcknowledged__DEPRECATED
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgItemAcknowledged__DEPRECATED, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgItemAcknowledged__DEPRECATED to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgItemAcknowledged__DEPRECATED
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSetItemPositions. */
export class CMsgSetItemPositions implements ICMsgSetItemPositions {

    /**
     * Constructs a new CMsgSetItemPositions.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSetItemPositions);

    /** CMsgSetItemPositions itemPositions. */
    public itemPositions: CMsgSetItemPositions.IItemPosition[];

    /**
     * Creates a new CMsgSetItemPositions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSetItemPositions instance
     */
    public static create(properties?: ICMsgSetItemPositions): CMsgSetItemPositions;

    /**
     * Encodes the specified CMsgSetItemPositions message. Does not implicitly {@link CMsgSetItemPositions.verify|verify} messages.
     * @param message CMsgSetItemPositions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSetItemPositions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSetItemPositions message, length delimited. Does not implicitly {@link CMsgSetItemPositions.verify|verify} messages.
     * @param message CMsgSetItemPositions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSetItemPositions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSetItemPositions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSetItemPositions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSetItemPositions;

    /**
     * Decodes a CMsgSetItemPositions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSetItemPositions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSetItemPositions;

    /**
     * Verifies a CMsgSetItemPositions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSetItemPositions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSetItemPositions
     */
    public static fromObject(object: { [k: string]: any }): CMsgSetItemPositions;

    /**
     * Creates a plain object from a CMsgSetItemPositions message. Also converts values to other types if specified.
     * @param message CMsgSetItemPositions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSetItemPositions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSetItemPositions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSetItemPositions
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSetItemPositions {

    /** Properties of an ItemPosition. */
    interface IItemPosition {

        /** ItemPosition legacyItemId */
        legacyItemId?: (number|null);

        /** ItemPosition position */
        position?: (number|null);

        /** ItemPosition itemId */
        itemId?: (number|Long|null);
    }

    /** Represents an ItemPosition. */
    class ItemPosition implements IItemPosition {

        /**
         * Constructs a new ItemPosition.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSetItemPositions.IItemPosition);

        /** ItemPosition legacyItemId. */
        public legacyItemId: number;

        /** ItemPosition position. */
        public position: number;

        /** ItemPosition itemId. */
        public itemId: (number|Long);

        /**
         * Creates a new ItemPosition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemPosition instance
         */
        public static create(properties?: CMsgSetItemPositions.IItemPosition): CMsgSetItemPositions.ItemPosition;

        /**
         * Encodes the specified ItemPosition message. Does not implicitly {@link CMsgSetItemPositions.ItemPosition.verify|verify} messages.
         * @param message ItemPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSetItemPositions.IItemPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemPosition message, length delimited. Does not implicitly {@link CMsgSetItemPositions.ItemPosition.verify|verify} messages.
         * @param message ItemPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSetItemPositions.IItemPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemPosition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSetItemPositions.ItemPosition;

        /**
         * Decodes an ItemPosition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSetItemPositions.ItemPosition;

        /**
         * Verifies an ItemPosition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemPosition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemPosition
         */
        public static fromObject(object: { [k: string]: any }): CMsgSetItemPositions.ItemPosition;

        /**
         * Creates a plain object from an ItemPosition message. Also converts values to other types if specified.
         * @param message ItemPosition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSetItemPositions.ItemPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemPosition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemPosition
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgGCReportAbuse. */
export class CMsgGCReportAbuse implements ICMsgGCReportAbuse {

    /**
     * Constructs a new CMsgGCReportAbuse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCReportAbuse);

    /** CMsgGCReportAbuse targetSteamId. */
    public targetSteamId: (number|Long);

    /** CMsgGCReportAbuse description. */
    public description: string;

    /** CMsgGCReportAbuse gid. */
    public gid: (number|Long);

    /** CMsgGCReportAbuse abuseType. */
    public abuseType: number;

    /** CMsgGCReportAbuse contentType. */
    public contentType: number;

    /** CMsgGCReportAbuse targetGameServerIp. */
    public targetGameServerIp: number;

    /** CMsgGCReportAbuse targetGameServerPort. */
    public targetGameServerPort: number;

    /**
     * Creates a new CMsgGCReportAbuse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCReportAbuse instance
     */
    public static create(properties?: ICMsgGCReportAbuse): CMsgGCReportAbuse;

    /**
     * Encodes the specified CMsgGCReportAbuse message. Does not implicitly {@link CMsgGCReportAbuse.verify|verify} messages.
     * @param message CMsgGCReportAbuse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCReportAbuse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCReportAbuse message, length delimited. Does not implicitly {@link CMsgGCReportAbuse.verify|verify} messages.
     * @param message CMsgGCReportAbuse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCReportAbuse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCReportAbuse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCReportAbuse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCReportAbuse;

    /**
     * Decodes a CMsgGCReportAbuse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCReportAbuse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCReportAbuse;

    /**
     * Verifies a CMsgGCReportAbuse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCReportAbuse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCReportAbuse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCReportAbuse;

    /**
     * Creates a plain object from a CMsgGCReportAbuse message. Also converts values to other types if specified.
     * @param message CMsgGCReportAbuse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCReportAbuse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCReportAbuse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCReportAbuse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCReportAbuseResponse. */
export class CMsgGCReportAbuseResponse implements ICMsgGCReportAbuseResponse {

    /**
     * Constructs a new CMsgGCReportAbuseResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCReportAbuseResponse);

    /** CMsgGCReportAbuseResponse targetSteamId. */
    public targetSteamId: (number|Long);

    /** CMsgGCReportAbuseResponse result. */
    public result: number;

    /** CMsgGCReportAbuseResponse errorMessage. */
    public errorMessage: string;

    /**
     * Creates a new CMsgGCReportAbuseResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCReportAbuseResponse instance
     */
    public static create(properties?: ICMsgGCReportAbuseResponse): CMsgGCReportAbuseResponse;

    /**
     * Encodes the specified CMsgGCReportAbuseResponse message. Does not implicitly {@link CMsgGCReportAbuseResponse.verify|verify} messages.
     * @param message CMsgGCReportAbuseResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCReportAbuseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCReportAbuseResponse message, length delimited. Does not implicitly {@link CMsgGCReportAbuseResponse.verify|verify} messages.
     * @param message CMsgGCReportAbuseResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCReportAbuseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCReportAbuseResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCReportAbuseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCReportAbuseResponse;

    /**
     * Decodes a CMsgGCReportAbuseResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCReportAbuseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCReportAbuseResponse;

    /**
     * Verifies a CMsgGCReportAbuseResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCReportAbuseResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCReportAbuseResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCReportAbuseResponse;

    /**
     * Creates a plain object from a CMsgGCReportAbuseResponse message. Also converts values to other types if specified.
     * @param message CMsgGCReportAbuseResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCReportAbuseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCReportAbuseResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCReportAbuseResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCNameItemNotification. */
export class CMsgGCNameItemNotification implements ICMsgGCNameItemNotification {

    /**
     * Constructs a new CMsgGCNameItemNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCNameItemNotification);

    /** CMsgGCNameItemNotification playerSteamid. */
    public playerSteamid: (number|Long);

    /** CMsgGCNameItemNotification itemDefIndex. */
    public itemDefIndex: number;

    /** CMsgGCNameItemNotification itemNameCustom. */
    public itemNameCustom: string;

    /**
     * Creates a new CMsgGCNameItemNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCNameItemNotification instance
     */
    public static create(properties?: ICMsgGCNameItemNotification): CMsgGCNameItemNotification;

    /**
     * Encodes the specified CMsgGCNameItemNotification message. Does not implicitly {@link CMsgGCNameItemNotification.verify|verify} messages.
     * @param message CMsgGCNameItemNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCNameItemNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCNameItemNotification message, length delimited. Does not implicitly {@link CMsgGCNameItemNotification.verify|verify} messages.
     * @param message CMsgGCNameItemNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCNameItemNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCNameItemNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCNameItemNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCNameItemNotification;

    /**
     * Decodes a CMsgGCNameItemNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCNameItemNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCNameItemNotification;

    /**
     * Verifies a CMsgGCNameItemNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCNameItemNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCNameItemNotification
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCNameItemNotification;

    /**
     * Creates a plain object from a CMsgGCNameItemNotification message. Also converts values to other types if specified.
     * @param message CMsgGCNameItemNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCNameItemNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCNameItemNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCNameItemNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCClientDisplayNotification. */
export class CMsgGCClientDisplayNotification implements ICMsgGCClientDisplayNotification {

    /**
     * Constructs a new CMsgGCClientDisplayNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCClientDisplayNotification);

    /** CMsgGCClientDisplayNotification notificationTitleLocalizationKey. */
    public notificationTitleLocalizationKey: string;

    /** CMsgGCClientDisplayNotification notificationBodyLocalizationKey. */
    public notificationBodyLocalizationKey: string;

    /** CMsgGCClientDisplayNotification bodySubstringKeys. */
    public bodySubstringKeys: string[];

    /** CMsgGCClientDisplayNotification bodySubstringValues. */
    public bodySubstringValues: string[];

    /**
     * Creates a new CMsgGCClientDisplayNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCClientDisplayNotification instance
     */
    public static create(properties?: ICMsgGCClientDisplayNotification): CMsgGCClientDisplayNotification;

    /**
     * Encodes the specified CMsgGCClientDisplayNotification message. Does not implicitly {@link CMsgGCClientDisplayNotification.verify|verify} messages.
     * @param message CMsgGCClientDisplayNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCClientDisplayNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCClientDisplayNotification message, length delimited. Does not implicitly {@link CMsgGCClientDisplayNotification.verify|verify} messages.
     * @param message CMsgGCClientDisplayNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCClientDisplayNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCClientDisplayNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCClientDisplayNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCClientDisplayNotification;

    /**
     * Decodes a CMsgGCClientDisplayNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCClientDisplayNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCClientDisplayNotification;

    /**
     * Verifies a CMsgGCClientDisplayNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCClientDisplayNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCClientDisplayNotification
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCClientDisplayNotification;

    /**
     * Creates a plain object from a CMsgGCClientDisplayNotification message. Also converts values to other types if specified.
     * @param message CMsgGCClientDisplayNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCClientDisplayNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCClientDisplayNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCClientDisplayNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCShowItemsPickedUp. */
export class CMsgGCShowItemsPickedUp implements ICMsgGCShowItemsPickedUp {

    /**
     * Constructs a new CMsgGCShowItemsPickedUp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCShowItemsPickedUp);

    /** CMsgGCShowItemsPickedUp playerSteamid. */
    public playerSteamid: (number|Long);

    /**
     * Creates a new CMsgGCShowItemsPickedUp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCShowItemsPickedUp instance
     */
    public static create(properties?: ICMsgGCShowItemsPickedUp): CMsgGCShowItemsPickedUp;

    /**
     * Encodes the specified CMsgGCShowItemsPickedUp message. Does not implicitly {@link CMsgGCShowItemsPickedUp.verify|verify} messages.
     * @param message CMsgGCShowItemsPickedUp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCShowItemsPickedUp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCShowItemsPickedUp message, length delimited. Does not implicitly {@link CMsgGCShowItemsPickedUp.verify|verify} messages.
     * @param message CMsgGCShowItemsPickedUp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCShowItemsPickedUp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCShowItemsPickedUp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCShowItemsPickedUp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCShowItemsPickedUp;

    /**
     * Decodes a CMsgGCShowItemsPickedUp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCShowItemsPickedUp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCShowItemsPickedUp;

    /**
     * Verifies a CMsgGCShowItemsPickedUp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCShowItemsPickedUp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCShowItemsPickedUp
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCShowItemsPickedUp;

    /**
     * Creates a plain object from a CMsgGCShowItemsPickedUp message. Also converts values to other types if specified.
     * @param message CMsgGCShowItemsPickedUp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCShowItemsPickedUp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCShowItemsPickedUp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCShowItemsPickedUp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCIncrementKillCountResponse. */
export class CMsgGCIncrementKillCountResponse implements ICMsgGCIncrementKillCountResponse {

    /**
     * Constructs a new CMsgGCIncrementKillCountResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCIncrementKillCountResponse);

    /** CMsgGCIncrementKillCountResponse killerAccountId. */
    public killerAccountId: number;

    /** CMsgGCIncrementKillCountResponse numKills. */
    public numKills: number;

    /** CMsgGCIncrementKillCountResponse itemDef. */
    public itemDef: number;

    /** CMsgGCIncrementKillCountResponse levelType. */
    public levelType: number;

    /**
     * Creates a new CMsgGCIncrementKillCountResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCIncrementKillCountResponse instance
     */
    public static create(properties?: ICMsgGCIncrementKillCountResponse): CMsgGCIncrementKillCountResponse;

    /**
     * Encodes the specified CMsgGCIncrementKillCountResponse message. Does not implicitly {@link CMsgGCIncrementKillCountResponse.verify|verify} messages.
     * @param message CMsgGCIncrementKillCountResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCIncrementKillCountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCIncrementKillCountResponse message, length delimited. Does not implicitly {@link CMsgGCIncrementKillCountResponse.verify|verify} messages.
     * @param message CMsgGCIncrementKillCountResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCIncrementKillCountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCIncrementKillCountResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCIncrementKillCountResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCIncrementKillCountResponse;

    /**
     * Decodes a CMsgGCIncrementKillCountResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCIncrementKillCountResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCIncrementKillCountResponse;

    /**
     * Verifies a CMsgGCIncrementKillCountResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCIncrementKillCountResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCIncrementKillCountResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCIncrementKillCountResponse;

    /**
     * Creates a plain object from a CMsgGCIncrementKillCountResponse message. Also converts values to other types if specified.
     * @param message CMsgGCIncrementKillCountResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCIncrementKillCountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCIncrementKillCountResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCIncrementKillCountResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconItemDropRateBonus. */
export class CSOEconItemDropRateBonus implements ICSOEconItemDropRateBonus {

    /**
     * Constructs a new CSOEconItemDropRateBonus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconItemDropRateBonus);

    /** CSOEconItemDropRateBonus accountId. */
    public accountId: number;

    /** CSOEconItemDropRateBonus expirationDate. */
    public expirationDate: number;

    /** CSOEconItemDropRateBonus bonus. */
    public bonus: number;

    /** CSOEconItemDropRateBonus bonusCount. */
    public bonusCount: number;

    /** CSOEconItemDropRateBonus itemId. */
    public itemId: (number|Long);

    /** CSOEconItemDropRateBonus defIndex. */
    public defIndex: number;

    /**
     * Creates a new CSOEconItemDropRateBonus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconItemDropRateBonus instance
     */
    public static create(properties?: ICSOEconItemDropRateBonus): CSOEconItemDropRateBonus;

    /**
     * Encodes the specified CSOEconItemDropRateBonus message. Does not implicitly {@link CSOEconItemDropRateBonus.verify|verify} messages.
     * @param message CSOEconItemDropRateBonus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconItemDropRateBonus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconItemDropRateBonus message, length delimited. Does not implicitly {@link CSOEconItemDropRateBonus.verify|verify} messages.
     * @param message CSOEconItemDropRateBonus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconItemDropRateBonus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconItemDropRateBonus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconItemDropRateBonus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconItemDropRateBonus;

    /**
     * Decodes a CSOEconItemDropRateBonus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconItemDropRateBonus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconItemDropRateBonus;

    /**
     * Verifies a CSOEconItemDropRateBonus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconItemDropRateBonus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconItemDropRateBonus
     */
    public static fromObject(object: { [k: string]: any }): CSOEconItemDropRateBonus;

    /**
     * Creates a plain object from a CSOEconItemDropRateBonus message. Also converts values to other types if specified.
     * @param message CSOEconItemDropRateBonus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconItemDropRateBonus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconItemDropRateBonus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconItemDropRateBonus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconItemLeagueViewPass. */
export class CSOEconItemLeagueViewPass implements ICSOEconItemLeagueViewPass {

    /**
     * Constructs a new CSOEconItemLeagueViewPass.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconItemLeagueViewPass);

    /** CSOEconItemLeagueViewPass accountId. */
    public accountId: number;

    /** CSOEconItemLeagueViewPass leagueId. */
    public leagueId: number;

    /** CSOEconItemLeagueViewPass admin. */
    public admin: number;

    /** CSOEconItemLeagueViewPass itemindex. */
    public itemindex: number;

    /**
     * Creates a new CSOEconItemLeagueViewPass instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconItemLeagueViewPass instance
     */
    public static create(properties?: ICSOEconItemLeagueViewPass): CSOEconItemLeagueViewPass;

    /**
     * Encodes the specified CSOEconItemLeagueViewPass message. Does not implicitly {@link CSOEconItemLeagueViewPass.verify|verify} messages.
     * @param message CSOEconItemLeagueViewPass message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconItemLeagueViewPass, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconItemLeagueViewPass message, length delimited. Does not implicitly {@link CSOEconItemLeagueViewPass.verify|verify} messages.
     * @param message CSOEconItemLeagueViewPass message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconItemLeagueViewPass, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconItemLeagueViewPass message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconItemLeagueViewPass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconItemLeagueViewPass;

    /**
     * Decodes a CSOEconItemLeagueViewPass message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconItemLeagueViewPass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconItemLeagueViewPass;

    /**
     * Verifies a CSOEconItemLeagueViewPass message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconItemLeagueViewPass message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconItemLeagueViewPass
     */
    public static fromObject(object: { [k: string]: any }): CSOEconItemLeagueViewPass;

    /**
     * Creates a plain object from a CSOEconItemLeagueViewPass message. Also converts values to other types if specified.
     * @param message CSOEconItemLeagueViewPass
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconItemLeagueViewPass, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconItemLeagueViewPass to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconItemLeagueViewPass
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconItemEventTicket. */
export class CSOEconItemEventTicket implements ICSOEconItemEventTicket {

    /**
     * Constructs a new CSOEconItemEventTicket.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconItemEventTicket);

    /** CSOEconItemEventTicket accountId. */
    public accountId: number;

    /** CSOEconItemEventTicket eventId. */
    public eventId: number;

    /** CSOEconItemEventTicket itemId. */
    public itemId: (number|Long);

    /**
     * Creates a new CSOEconItemEventTicket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconItemEventTicket instance
     */
    public static create(properties?: ICSOEconItemEventTicket): CSOEconItemEventTicket;

    /**
     * Encodes the specified CSOEconItemEventTicket message. Does not implicitly {@link CSOEconItemEventTicket.verify|verify} messages.
     * @param message CSOEconItemEventTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconItemEventTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconItemEventTicket message, length delimited. Does not implicitly {@link CSOEconItemEventTicket.verify|verify} messages.
     * @param message CSOEconItemEventTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconItemEventTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconItemEventTicket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconItemEventTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconItemEventTicket;

    /**
     * Decodes a CSOEconItemEventTicket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconItemEventTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconItemEventTicket;

    /**
     * Verifies a CSOEconItemEventTicket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconItemEventTicket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconItemEventTicket
     */
    public static fromObject(object: { [k: string]: any }): CSOEconItemEventTicket;

    /**
     * Creates a plain object from a CSOEconItemEventTicket message. Also converts values to other types if specified.
     * @param message CSOEconItemEventTicket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconItemEventTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconItemEventTicket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconItemEventTicket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCItemPreviewItemBoughtNotification. */
export class CMsgGCItemPreviewItemBoughtNotification implements ICMsgGCItemPreviewItemBoughtNotification {

    /**
     * Constructs a new CMsgGCItemPreviewItemBoughtNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCItemPreviewItemBoughtNotification);

    /** CMsgGCItemPreviewItemBoughtNotification itemDefIndex. */
    public itemDefIndex: number;

    /**
     * Creates a new CMsgGCItemPreviewItemBoughtNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCItemPreviewItemBoughtNotification instance
     */
    public static create(properties?: ICMsgGCItemPreviewItemBoughtNotification): CMsgGCItemPreviewItemBoughtNotification;

    /**
     * Encodes the specified CMsgGCItemPreviewItemBoughtNotification message. Does not implicitly {@link CMsgGCItemPreviewItemBoughtNotification.verify|verify} messages.
     * @param message CMsgGCItemPreviewItemBoughtNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCItemPreviewItemBoughtNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCItemPreviewItemBoughtNotification message, length delimited. Does not implicitly {@link CMsgGCItemPreviewItemBoughtNotification.verify|verify} messages.
     * @param message CMsgGCItemPreviewItemBoughtNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCItemPreviewItemBoughtNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCItemPreviewItemBoughtNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCItemPreviewItemBoughtNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCItemPreviewItemBoughtNotification;

    /**
     * Decodes a CMsgGCItemPreviewItemBoughtNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCItemPreviewItemBoughtNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCItemPreviewItemBoughtNotification;

    /**
     * Verifies a CMsgGCItemPreviewItemBoughtNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCItemPreviewItemBoughtNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCItemPreviewItemBoughtNotification
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCItemPreviewItemBoughtNotification;

    /**
     * Creates a plain object from a CMsgGCItemPreviewItemBoughtNotification message. Also converts values to other types if specified.
     * @param message CMsgGCItemPreviewItemBoughtNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCItemPreviewItemBoughtNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCItemPreviewItemBoughtNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCItemPreviewItemBoughtNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCStorePurchaseCancel. */
export class CMsgGCStorePurchaseCancel implements ICMsgGCStorePurchaseCancel {

    /**
     * Constructs a new CMsgGCStorePurchaseCancel.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCStorePurchaseCancel);

    /** CMsgGCStorePurchaseCancel txnId. */
    public txnId: (number|Long);

    /**
     * Creates a new CMsgGCStorePurchaseCancel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCStorePurchaseCancel instance
     */
    public static create(properties?: ICMsgGCStorePurchaseCancel): CMsgGCStorePurchaseCancel;

    /**
     * Encodes the specified CMsgGCStorePurchaseCancel message. Does not implicitly {@link CMsgGCStorePurchaseCancel.verify|verify} messages.
     * @param message CMsgGCStorePurchaseCancel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCStorePurchaseCancel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCStorePurchaseCancel message, length delimited. Does not implicitly {@link CMsgGCStorePurchaseCancel.verify|verify} messages.
     * @param message CMsgGCStorePurchaseCancel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCStorePurchaseCancel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCStorePurchaseCancel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCStorePurchaseCancel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCStorePurchaseCancel;

    /**
     * Decodes a CMsgGCStorePurchaseCancel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCStorePurchaseCancel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCStorePurchaseCancel;

    /**
     * Verifies a CMsgGCStorePurchaseCancel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCStorePurchaseCancel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCStorePurchaseCancel
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCStorePurchaseCancel;

    /**
     * Creates a plain object from a CMsgGCStorePurchaseCancel message. Also converts values to other types if specified.
     * @param message CMsgGCStorePurchaseCancel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCStorePurchaseCancel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCStorePurchaseCancel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCStorePurchaseCancel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCStorePurchaseCancelResponse. */
export class CMsgGCStorePurchaseCancelResponse implements ICMsgGCStorePurchaseCancelResponse {

    /**
     * Constructs a new CMsgGCStorePurchaseCancelResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCStorePurchaseCancelResponse);

    /** CMsgGCStorePurchaseCancelResponse result. */
    public result: number;

    /**
     * Creates a new CMsgGCStorePurchaseCancelResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCStorePurchaseCancelResponse instance
     */
    public static create(properties?: ICMsgGCStorePurchaseCancelResponse): CMsgGCStorePurchaseCancelResponse;

    /**
     * Encodes the specified CMsgGCStorePurchaseCancelResponse message. Does not implicitly {@link CMsgGCStorePurchaseCancelResponse.verify|verify} messages.
     * @param message CMsgGCStorePurchaseCancelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCStorePurchaseCancelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCStorePurchaseCancelResponse message, length delimited. Does not implicitly {@link CMsgGCStorePurchaseCancelResponse.verify|verify} messages.
     * @param message CMsgGCStorePurchaseCancelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCStorePurchaseCancelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCStorePurchaseCancelResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCStorePurchaseCancelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCStorePurchaseCancelResponse;

    /**
     * Decodes a CMsgGCStorePurchaseCancelResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCStorePurchaseCancelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCStorePurchaseCancelResponse;

    /**
     * Verifies a CMsgGCStorePurchaseCancelResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCStorePurchaseCancelResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCStorePurchaseCancelResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCStorePurchaseCancelResponse;

    /**
     * Creates a plain object from a CMsgGCStorePurchaseCancelResponse message. Also converts values to other types if specified.
     * @param message CMsgGCStorePurchaseCancelResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCStorePurchaseCancelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCStorePurchaseCancelResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCStorePurchaseCancelResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCStorePurchaseFinalize. */
export class CMsgGCStorePurchaseFinalize implements ICMsgGCStorePurchaseFinalize {

    /**
     * Constructs a new CMsgGCStorePurchaseFinalize.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCStorePurchaseFinalize);

    /** CMsgGCStorePurchaseFinalize txnId. */
    public txnId: (number|Long);

    /**
     * Creates a new CMsgGCStorePurchaseFinalize instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCStorePurchaseFinalize instance
     */
    public static create(properties?: ICMsgGCStorePurchaseFinalize): CMsgGCStorePurchaseFinalize;

    /**
     * Encodes the specified CMsgGCStorePurchaseFinalize message. Does not implicitly {@link CMsgGCStorePurchaseFinalize.verify|verify} messages.
     * @param message CMsgGCStorePurchaseFinalize message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCStorePurchaseFinalize, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCStorePurchaseFinalize message, length delimited. Does not implicitly {@link CMsgGCStorePurchaseFinalize.verify|verify} messages.
     * @param message CMsgGCStorePurchaseFinalize message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCStorePurchaseFinalize, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCStorePurchaseFinalize message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCStorePurchaseFinalize
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCStorePurchaseFinalize;

    /**
     * Decodes a CMsgGCStorePurchaseFinalize message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCStorePurchaseFinalize
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCStorePurchaseFinalize;

    /**
     * Verifies a CMsgGCStorePurchaseFinalize message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCStorePurchaseFinalize message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCStorePurchaseFinalize
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCStorePurchaseFinalize;

    /**
     * Creates a plain object from a CMsgGCStorePurchaseFinalize message. Also converts values to other types if specified.
     * @param message CMsgGCStorePurchaseFinalize
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCStorePurchaseFinalize, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCStorePurchaseFinalize to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCStorePurchaseFinalize
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCStorePurchaseFinalizeResponse. */
export class CMsgGCStorePurchaseFinalizeResponse implements ICMsgGCStorePurchaseFinalizeResponse {

    /**
     * Constructs a new CMsgGCStorePurchaseFinalizeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCStorePurchaseFinalizeResponse);

    /** CMsgGCStorePurchaseFinalizeResponse result. */
    public result: number;

    /** CMsgGCStorePurchaseFinalizeResponse itemIds. */
    public itemIds: (number|Long)[];

    /**
     * Creates a new CMsgGCStorePurchaseFinalizeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCStorePurchaseFinalizeResponse instance
     */
    public static create(properties?: ICMsgGCStorePurchaseFinalizeResponse): CMsgGCStorePurchaseFinalizeResponse;

    /**
     * Encodes the specified CMsgGCStorePurchaseFinalizeResponse message. Does not implicitly {@link CMsgGCStorePurchaseFinalizeResponse.verify|verify} messages.
     * @param message CMsgGCStorePurchaseFinalizeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCStorePurchaseFinalizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCStorePurchaseFinalizeResponse message, length delimited. Does not implicitly {@link CMsgGCStorePurchaseFinalizeResponse.verify|verify} messages.
     * @param message CMsgGCStorePurchaseFinalizeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCStorePurchaseFinalizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCStorePurchaseFinalizeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCStorePurchaseFinalizeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCStorePurchaseFinalizeResponse;

    /**
     * Decodes a CMsgGCStorePurchaseFinalizeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCStorePurchaseFinalizeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCStorePurchaseFinalizeResponse;

    /**
     * Verifies a CMsgGCStorePurchaseFinalizeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCStorePurchaseFinalizeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCStorePurchaseFinalizeResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCStorePurchaseFinalizeResponse;

    /**
     * Creates a plain object from a CMsgGCStorePurchaseFinalizeResponse message. Also converts values to other types if specified.
     * @param message CMsgGCStorePurchaseFinalizeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCStorePurchaseFinalizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCStorePurchaseFinalizeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCStorePurchaseFinalizeResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCBannedWordListRequest. */
export class CMsgGCBannedWordListRequest implements ICMsgGCBannedWordListRequest {

    /**
     * Constructs a new CMsgGCBannedWordListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCBannedWordListRequest);

    /** CMsgGCBannedWordListRequest banListGroupId. */
    public banListGroupId: number;

    /** CMsgGCBannedWordListRequest wordId. */
    public wordId: number;

    /**
     * Creates a new CMsgGCBannedWordListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCBannedWordListRequest instance
     */
    public static create(properties?: ICMsgGCBannedWordListRequest): CMsgGCBannedWordListRequest;

    /**
     * Encodes the specified CMsgGCBannedWordListRequest message. Does not implicitly {@link CMsgGCBannedWordListRequest.verify|verify} messages.
     * @param message CMsgGCBannedWordListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCBannedWordListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCBannedWordListRequest message, length delimited. Does not implicitly {@link CMsgGCBannedWordListRequest.verify|verify} messages.
     * @param message CMsgGCBannedWordListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCBannedWordListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCBannedWordListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCBannedWordListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCBannedWordListRequest;

    /**
     * Decodes a CMsgGCBannedWordListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCBannedWordListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCBannedWordListRequest;

    /**
     * Verifies a CMsgGCBannedWordListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCBannedWordListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCBannedWordListRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCBannedWordListRequest;

    /**
     * Creates a plain object from a CMsgGCBannedWordListRequest message. Also converts values to other types if specified.
     * @param message CMsgGCBannedWordListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCBannedWordListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCBannedWordListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCBannedWordListRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCRequestAnnouncements. */
export class CMsgGCRequestAnnouncements implements ICMsgGCRequestAnnouncements {

    /**
     * Constructs a new CMsgGCRequestAnnouncements.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCRequestAnnouncements);

    /**
     * Creates a new CMsgGCRequestAnnouncements instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCRequestAnnouncements instance
     */
    public static create(properties?: ICMsgGCRequestAnnouncements): CMsgGCRequestAnnouncements;

    /**
     * Encodes the specified CMsgGCRequestAnnouncements message. Does not implicitly {@link CMsgGCRequestAnnouncements.verify|verify} messages.
     * @param message CMsgGCRequestAnnouncements message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCRequestAnnouncements, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCRequestAnnouncements message, length delimited. Does not implicitly {@link CMsgGCRequestAnnouncements.verify|verify} messages.
     * @param message CMsgGCRequestAnnouncements message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCRequestAnnouncements, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCRequestAnnouncements message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCRequestAnnouncements
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCRequestAnnouncements;

    /**
     * Decodes a CMsgGCRequestAnnouncements message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCRequestAnnouncements
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCRequestAnnouncements;

    /**
     * Verifies a CMsgGCRequestAnnouncements message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCRequestAnnouncements message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCRequestAnnouncements
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCRequestAnnouncements;

    /**
     * Creates a plain object from a CMsgGCRequestAnnouncements message. Also converts values to other types if specified.
     * @param message CMsgGCRequestAnnouncements
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCRequestAnnouncements, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCRequestAnnouncements to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCRequestAnnouncements
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCRequestAnnouncementsResponse. */
export class CMsgGCRequestAnnouncementsResponse implements ICMsgGCRequestAnnouncementsResponse {

    /**
     * Constructs a new CMsgGCRequestAnnouncementsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCRequestAnnouncementsResponse);

    /** CMsgGCRequestAnnouncementsResponse announcementTitle. */
    public announcementTitle: string;

    /** CMsgGCRequestAnnouncementsResponse announcement. */
    public announcement: string;

    /** CMsgGCRequestAnnouncementsResponse nextmatchTitle. */
    public nextmatchTitle: string;

    /** CMsgGCRequestAnnouncementsResponse nextmatch. */
    public nextmatch: string;

    /**
     * Creates a new CMsgGCRequestAnnouncementsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCRequestAnnouncementsResponse instance
     */
    public static create(properties?: ICMsgGCRequestAnnouncementsResponse): CMsgGCRequestAnnouncementsResponse;

    /**
     * Encodes the specified CMsgGCRequestAnnouncementsResponse message. Does not implicitly {@link CMsgGCRequestAnnouncementsResponse.verify|verify} messages.
     * @param message CMsgGCRequestAnnouncementsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCRequestAnnouncementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCRequestAnnouncementsResponse message, length delimited. Does not implicitly {@link CMsgGCRequestAnnouncementsResponse.verify|verify} messages.
     * @param message CMsgGCRequestAnnouncementsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCRequestAnnouncementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCRequestAnnouncementsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCRequestAnnouncementsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCRequestAnnouncementsResponse;

    /**
     * Decodes a CMsgGCRequestAnnouncementsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCRequestAnnouncementsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCRequestAnnouncementsResponse;

    /**
     * Verifies a CMsgGCRequestAnnouncementsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCRequestAnnouncementsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCRequestAnnouncementsResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCRequestAnnouncementsResponse;

    /**
     * Creates a plain object from a CMsgGCRequestAnnouncementsResponse message. Also converts values to other types if specified.
     * @param message CMsgGCRequestAnnouncementsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCRequestAnnouncementsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCRequestAnnouncementsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCRequestAnnouncementsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCBannedWord. */
export class CMsgGCBannedWord implements ICMsgGCBannedWord {

    /**
     * Constructs a new CMsgGCBannedWord.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCBannedWord);

    /** CMsgGCBannedWord wordId. */
    public wordId: number;

    /** CMsgGCBannedWord wordType. */
    public wordType: GC_BannedWordType;

    /** CMsgGCBannedWord word. */
    public word: string;

    /**
     * Creates a new CMsgGCBannedWord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCBannedWord instance
     */
    public static create(properties?: ICMsgGCBannedWord): CMsgGCBannedWord;

    /**
     * Encodes the specified CMsgGCBannedWord message. Does not implicitly {@link CMsgGCBannedWord.verify|verify} messages.
     * @param message CMsgGCBannedWord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCBannedWord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCBannedWord message, length delimited. Does not implicitly {@link CMsgGCBannedWord.verify|verify} messages.
     * @param message CMsgGCBannedWord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCBannedWord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCBannedWord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCBannedWord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCBannedWord;

    /**
     * Decodes a CMsgGCBannedWord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCBannedWord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCBannedWord;

    /**
     * Verifies a CMsgGCBannedWord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCBannedWord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCBannedWord
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCBannedWord;

    /**
     * Creates a plain object from a CMsgGCBannedWord message. Also converts values to other types if specified.
     * @param message CMsgGCBannedWord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCBannedWord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCBannedWord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCBannedWord
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCBannedWordListResponse. */
export class CMsgGCBannedWordListResponse implements ICMsgGCBannedWordListResponse {

    /**
     * Constructs a new CMsgGCBannedWordListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCBannedWordListResponse);

    /** CMsgGCBannedWordListResponse banListGroupId. */
    public banListGroupId: number;

    /** CMsgGCBannedWordListResponse wordList. */
    public wordList: ICMsgGCBannedWord[];

    /**
     * Creates a new CMsgGCBannedWordListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCBannedWordListResponse instance
     */
    public static create(properties?: ICMsgGCBannedWordListResponse): CMsgGCBannedWordListResponse;

    /**
     * Encodes the specified CMsgGCBannedWordListResponse message. Does not implicitly {@link CMsgGCBannedWordListResponse.verify|verify} messages.
     * @param message CMsgGCBannedWordListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCBannedWordListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCBannedWordListResponse message, length delimited. Does not implicitly {@link CMsgGCBannedWordListResponse.verify|verify} messages.
     * @param message CMsgGCBannedWordListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCBannedWordListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCBannedWordListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCBannedWordListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCBannedWordListResponse;

    /**
     * Decodes a CMsgGCBannedWordListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCBannedWordListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCBannedWordListResponse;

    /**
     * Verifies a CMsgGCBannedWordListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCBannedWordListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCBannedWordListResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCBannedWordListResponse;

    /**
     * Creates a plain object from a CMsgGCBannedWordListResponse message. Also converts values to other types if specified.
     * @param message CMsgGCBannedWordListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCBannedWordListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCBannedWordListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCBannedWordListResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCBannedWordListBroadcast. */
export class CMsgGCToGCBannedWordListBroadcast implements ICMsgGCToGCBannedWordListBroadcast {

    /**
     * Constructs a new CMsgGCToGCBannedWordListBroadcast.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCBannedWordListBroadcast);

    /** CMsgGCToGCBannedWordListBroadcast broadcast. */
    public broadcast?: (ICMsgGCBannedWordListResponse|null);

    /**
     * Creates a new CMsgGCToGCBannedWordListBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCBannedWordListBroadcast instance
     */
    public static create(properties?: ICMsgGCToGCBannedWordListBroadcast): CMsgGCToGCBannedWordListBroadcast;

    /**
     * Encodes the specified CMsgGCToGCBannedWordListBroadcast message. Does not implicitly {@link CMsgGCToGCBannedWordListBroadcast.verify|verify} messages.
     * @param message CMsgGCToGCBannedWordListBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCBannedWordListBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCBannedWordListBroadcast message, length delimited. Does not implicitly {@link CMsgGCToGCBannedWordListBroadcast.verify|verify} messages.
     * @param message CMsgGCToGCBannedWordListBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCBannedWordListBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCBannedWordListBroadcast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCBannedWordListBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCBannedWordListBroadcast;

    /**
     * Decodes a CMsgGCToGCBannedWordListBroadcast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCBannedWordListBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCBannedWordListBroadcast;

    /**
     * Verifies a CMsgGCToGCBannedWordListBroadcast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCBannedWordListBroadcast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCBannedWordListBroadcast
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCBannedWordListBroadcast;

    /**
     * Creates a plain object from a CMsgGCToGCBannedWordListBroadcast message. Also converts values to other types if specified.
     * @param message CMsgGCToGCBannedWordListBroadcast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCBannedWordListBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCBannedWordListBroadcast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCBannedWordListBroadcast
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCBannedWordListUpdated. */
export class CMsgGCToGCBannedWordListUpdated implements ICMsgGCToGCBannedWordListUpdated {

    /**
     * Constructs a new CMsgGCToGCBannedWordListUpdated.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCBannedWordListUpdated);

    /** CMsgGCToGCBannedWordListUpdated groupId. */
    public groupId: number;

    /**
     * Creates a new CMsgGCToGCBannedWordListUpdated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCBannedWordListUpdated instance
     */
    public static create(properties?: ICMsgGCToGCBannedWordListUpdated): CMsgGCToGCBannedWordListUpdated;

    /**
     * Encodes the specified CMsgGCToGCBannedWordListUpdated message. Does not implicitly {@link CMsgGCToGCBannedWordListUpdated.verify|verify} messages.
     * @param message CMsgGCToGCBannedWordListUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCBannedWordListUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCBannedWordListUpdated message, length delimited. Does not implicitly {@link CMsgGCToGCBannedWordListUpdated.verify|verify} messages.
     * @param message CMsgGCToGCBannedWordListUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCBannedWordListUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCBannedWordListUpdated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCBannedWordListUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCBannedWordListUpdated;

    /**
     * Decodes a CMsgGCToGCBannedWordListUpdated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCBannedWordListUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCBannedWordListUpdated;

    /**
     * Verifies a CMsgGCToGCBannedWordListUpdated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCBannedWordListUpdated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCBannedWordListUpdated
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCBannedWordListUpdated;

    /**
     * Creates a plain object from a CMsgGCToGCBannedWordListUpdated message. Also converts values to other types if specified.
     * @param message CMsgGCToGCBannedWordListUpdated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCBannedWordListUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCBannedWordListUpdated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCBannedWordListUpdated
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSOEconDefaultEquippedDefinitionInstanceClient. */
export class CSOEconDefaultEquippedDefinitionInstanceClient implements ICSOEconDefaultEquippedDefinitionInstanceClient {

    /**
     * Constructs a new CSOEconDefaultEquippedDefinitionInstanceClient.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconDefaultEquippedDefinitionInstanceClient);

    /** CSOEconDefaultEquippedDefinitionInstanceClient accountId. */
    public accountId: number;

    /** CSOEconDefaultEquippedDefinitionInstanceClient itemDefinition. */
    public itemDefinition: number;

    /** CSOEconDefaultEquippedDefinitionInstanceClient classId. */
    public classId: number;

    /** CSOEconDefaultEquippedDefinitionInstanceClient slotId. */
    public slotId: number;

    /**
     * Creates a new CSOEconDefaultEquippedDefinitionInstanceClient instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconDefaultEquippedDefinitionInstanceClient instance
     */
    public static create(properties?: ICSOEconDefaultEquippedDefinitionInstanceClient): CSOEconDefaultEquippedDefinitionInstanceClient;

    /**
     * Encodes the specified CSOEconDefaultEquippedDefinitionInstanceClient message. Does not implicitly {@link CSOEconDefaultEquippedDefinitionInstanceClient.verify|verify} messages.
     * @param message CSOEconDefaultEquippedDefinitionInstanceClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconDefaultEquippedDefinitionInstanceClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconDefaultEquippedDefinitionInstanceClient message, length delimited. Does not implicitly {@link CSOEconDefaultEquippedDefinitionInstanceClient.verify|verify} messages.
     * @param message CSOEconDefaultEquippedDefinitionInstanceClient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconDefaultEquippedDefinitionInstanceClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconDefaultEquippedDefinitionInstanceClient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconDefaultEquippedDefinitionInstanceClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconDefaultEquippedDefinitionInstanceClient;

    /**
     * Decodes a CSOEconDefaultEquippedDefinitionInstanceClient message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconDefaultEquippedDefinitionInstanceClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconDefaultEquippedDefinitionInstanceClient;

    /**
     * Verifies a CSOEconDefaultEquippedDefinitionInstanceClient message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconDefaultEquippedDefinitionInstanceClient message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconDefaultEquippedDefinitionInstanceClient
     */
    public static fromObject(object: { [k: string]: any }): CSOEconDefaultEquippedDefinitionInstanceClient;

    /**
     * Creates a plain object from a CSOEconDefaultEquippedDefinitionInstanceClient message. Also converts values to other types if specified.
     * @param message CSOEconDefaultEquippedDefinitionInstanceClient
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconDefaultEquippedDefinitionInstanceClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconDefaultEquippedDefinitionInstanceClient to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconDefaultEquippedDefinitionInstanceClient
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCDirtySDOCache. */
export class CMsgGCToGCDirtySDOCache implements ICMsgGCToGCDirtySDOCache {

    /**
     * Constructs a new CMsgGCToGCDirtySDOCache.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCDirtySDOCache);

    /** CMsgGCToGCDirtySDOCache sdoType. */
    public sdoType: number;

    /** CMsgGCToGCDirtySDOCache keyUint64. */
    public keyUint64: (number|Long);

    /**
     * Creates a new CMsgGCToGCDirtySDOCache instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCDirtySDOCache instance
     */
    public static create(properties?: ICMsgGCToGCDirtySDOCache): CMsgGCToGCDirtySDOCache;

    /**
     * Encodes the specified CMsgGCToGCDirtySDOCache message. Does not implicitly {@link CMsgGCToGCDirtySDOCache.verify|verify} messages.
     * @param message CMsgGCToGCDirtySDOCache message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCDirtySDOCache, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCDirtySDOCache message, length delimited. Does not implicitly {@link CMsgGCToGCDirtySDOCache.verify|verify} messages.
     * @param message CMsgGCToGCDirtySDOCache message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCDirtySDOCache, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCDirtySDOCache message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCDirtySDOCache
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCDirtySDOCache;

    /**
     * Decodes a CMsgGCToGCDirtySDOCache message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCDirtySDOCache
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCDirtySDOCache;

    /**
     * Verifies a CMsgGCToGCDirtySDOCache message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCDirtySDOCache message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCDirtySDOCache
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCDirtySDOCache;

    /**
     * Creates a plain object from a CMsgGCToGCDirtySDOCache message. Also converts values to other types if specified.
     * @param message CMsgGCToGCDirtySDOCache
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCDirtySDOCache, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCDirtySDOCache to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCDirtySDOCache
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCDirtyMultipleSDOCache. */
export class CMsgGCToGCDirtyMultipleSDOCache implements ICMsgGCToGCDirtyMultipleSDOCache {

    /**
     * Constructs a new CMsgGCToGCDirtyMultipleSDOCache.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCDirtyMultipleSDOCache);

    /** CMsgGCToGCDirtyMultipleSDOCache sdoType. */
    public sdoType: number;

    /** CMsgGCToGCDirtyMultipleSDOCache keyUint64. */
    public keyUint64: (number|Long)[];

    /**
     * Creates a new CMsgGCToGCDirtyMultipleSDOCache instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCDirtyMultipleSDOCache instance
     */
    public static create(properties?: ICMsgGCToGCDirtyMultipleSDOCache): CMsgGCToGCDirtyMultipleSDOCache;

    /**
     * Encodes the specified CMsgGCToGCDirtyMultipleSDOCache message. Does not implicitly {@link CMsgGCToGCDirtyMultipleSDOCache.verify|verify} messages.
     * @param message CMsgGCToGCDirtyMultipleSDOCache message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCDirtyMultipleSDOCache, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCDirtyMultipleSDOCache message, length delimited. Does not implicitly {@link CMsgGCToGCDirtyMultipleSDOCache.verify|verify} messages.
     * @param message CMsgGCToGCDirtyMultipleSDOCache message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCDirtyMultipleSDOCache, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCDirtyMultipleSDOCache message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCDirtyMultipleSDOCache
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCDirtyMultipleSDOCache;

    /**
     * Decodes a CMsgGCToGCDirtyMultipleSDOCache message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCDirtyMultipleSDOCache
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCDirtyMultipleSDOCache;

    /**
     * Verifies a CMsgGCToGCDirtyMultipleSDOCache message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCDirtyMultipleSDOCache message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCDirtyMultipleSDOCache
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCDirtyMultipleSDOCache;

    /**
     * Creates a plain object from a CMsgGCToGCDirtyMultipleSDOCache message. Also converts values to other types if specified.
     * @param message CMsgGCToGCDirtyMultipleSDOCache
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCDirtyMultipleSDOCache, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCDirtyMultipleSDOCache to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCDirtyMultipleSDOCache
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCCollectItem. */
export class CMsgGCCollectItem implements ICMsgGCCollectItem {

    /**
     * Constructs a new CMsgGCCollectItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCollectItem);

    /** CMsgGCCollectItem collectionItemId. */
    public collectionItemId: (number|Long);

    /** CMsgGCCollectItem subjectItemId. */
    public subjectItemId: (number|Long);

    /**
     * Creates a new CMsgGCCollectItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCCollectItem instance
     */
    public static create(properties?: ICMsgGCCollectItem): CMsgGCCollectItem;

    /**
     * Encodes the specified CMsgGCCollectItem message. Does not implicitly {@link CMsgGCCollectItem.verify|verify} messages.
     * @param message CMsgGCCollectItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCCollectItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCCollectItem message, length delimited. Does not implicitly {@link CMsgGCCollectItem.verify|verify} messages.
     * @param message CMsgGCCollectItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCCollectItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCCollectItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCollectItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCollectItem;

    /**
     * Decodes a CMsgGCCollectItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCCollectItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCCollectItem;

    /**
     * Verifies a CMsgGCCollectItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCCollectItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCCollectItem
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCCollectItem;

    /**
     * Creates a plain object from a CMsgGCCollectItem message. Also converts values to other types if specified.
     * @param message CMsgGCCollectItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCCollectItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCCollectItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCCollectItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSDONoMemcached. */
export class CMsgSDONoMemcached implements ICMsgSDONoMemcached {

    /**
     * Constructs a new CMsgSDONoMemcached.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSDONoMemcached);

    /**
     * Creates a new CMsgSDONoMemcached instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSDONoMemcached instance
     */
    public static create(properties?: ICMsgSDONoMemcached): CMsgSDONoMemcached;

    /**
     * Encodes the specified CMsgSDONoMemcached message. Does not implicitly {@link CMsgSDONoMemcached.verify|verify} messages.
     * @param message CMsgSDONoMemcached message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSDONoMemcached, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSDONoMemcached message, length delimited. Does not implicitly {@link CMsgSDONoMemcached.verify|verify} messages.
     * @param message CMsgSDONoMemcached message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSDONoMemcached, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSDONoMemcached message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSDONoMemcached
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSDONoMemcached;

    /**
     * Decodes a CMsgSDONoMemcached message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSDONoMemcached
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSDONoMemcached;

    /**
     * Verifies a CMsgSDONoMemcached message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSDONoMemcached message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSDONoMemcached
     */
    public static fromObject(object: { [k: string]: any }): CMsgSDONoMemcached;

    /**
     * Creates a plain object from a CMsgSDONoMemcached message. Also converts values to other types if specified.
     * @param message CMsgSDONoMemcached
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSDONoMemcached, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSDONoMemcached to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSDONoMemcached
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCUpdateSQLKeyValue. */
export class CMsgGCToGCUpdateSQLKeyValue implements ICMsgGCToGCUpdateSQLKeyValue {

    /**
     * Constructs a new CMsgGCToGCUpdateSQLKeyValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCUpdateSQLKeyValue);

    /** CMsgGCToGCUpdateSQLKeyValue keyName. */
    public keyName: string;

    /**
     * Creates a new CMsgGCToGCUpdateSQLKeyValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCUpdateSQLKeyValue instance
     */
    public static create(properties?: ICMsgGCToGCUpdateSQLKeyValue): CMsgGCToGCUpdateSQLKeyValue;

    /**
     * Encodes the specified CMsgGCToGCUpdateSQLKeyValue message. Does not implicitly {@link CMsgGCToGCUpdateSQLKeyValue.verify|verify} messages.
     * @param message CMsgGCToGCUpdateSQLKeyValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCUpdateSQLKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCUpdateSQLKeyValue message, length delimited. Does not implicitly {@link CMsgGCToGCUpdateSQLKeyValue.verify|verify} messages.
     * @param message CMsgGCToGCUpdateSQLKeyValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCUpdateSQLKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCUpdateSQLKeyValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCUpdateSQLKeyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCUpdateSQLKeyValue;

    /**
     * Decodes a CMsgGCToGCUpdateSQLKeyValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCUpdateSQLKeyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCUpdateSQLKeyValue;

    /**
     * Verifies a CMsgGCToGCUpdateSQLKeyValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCUpdateSQLKeyValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCUpdateSQLKeyValue
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCUpdateSQLKeyValue;

    /**
     * Creates a plain object from a CMsgGCToGCUpdateSQLKeyValue message. Also converts values to other types if specified.
     * @param message CMsgGCToGCUpdateSQLKeyValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCUpdateSQLKeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCUpdateSQLKeyValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCUpdateSQLKeyValue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCIsTrustedServer. */
export class CMsgGCToGCIsTrustedServer implements ICMsgGCToGCIsTrustedServer {

    /**
     * Constructs a new CMsgGCToGCIsTrustedServer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCIsTrustedServer);

    /** CMsgGCToGCIsTrustedServer steamId. */
    public steamId: (number|Long);

    /**
     * Creates a new CMsgGCToGCIsTrustedServer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCIsTrustedServer instance
     */
    public static create(properties?: ICMsgGCToGCIsTrustedServer): CMsgGCToGCIsTrustedServer;

    /**
     * Encodes the specified CMsgGCToGCIsTrustedServer message. Does not implicitly {@link CMsgGCToGCIsTrustedServer.verify|verify} messages.
     * @param message CMsgGCToGCIsTrustedServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCIsTrustedServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCIsTrustedServer message, length delimited. Does not implicitly {@link CMsgGCToGCIsTrustedServer.verify|verify} messages.
     * @param message CMsgGCToGCIsTrustedServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCIsTrustedServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCIsTrustedServer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCIsTrustedServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCIsTrustedServer;

    /**
     * Decodes a CMsgGCToGCIsTrustedServer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCIsTrustedServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCIsTrustedServer;

    /**
     * Verifies a CMsgGCToGCIsTrustedServer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCIsTrustedServer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCIsTrustedServer
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCIsTrustedServer;

    /**
     * Creates a plain object from a CMsgGCToGCIsTrustedServer message. Also converts values to other types if specified.
     * @param message CMsgGCToGCIsTrustedServer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCIsTrustedServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCIsTrustedServer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCIsTrustedServer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCIsTrustedServerResponse. */
export class CMsgGCToGCIsTrustedServerResponse implements ICMsgGCToGCIsTrustedServerResponse {

    /**
     * Constructs a new CMsgGCToGCIsTrustedServerResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCIsTrustedServerResponse);

    /** CMsgGCToGCIsTrustedServerResponse isTrusted. */
    public isTrusted: boolean;

    /**
     * Creates a new CMsgGCToGCIsTrustedServerResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCIsTrustedServerResponse instance
     */
    public static create(properties?: ICMsgGCToGCIsTrustedServerResponse): CMsgGCToGCIsTrustedServerResponse;

    /**
     * Encodes the specified CMsgGCToGCIsTrustedServerResponse message. Does not implicitly {@link CMsgGCToGCIsTrustedServerResponse.verify|verify} messages.
     * @param message CMsgGCToGCIsTrustedServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCIsTrustedServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCIsTrustedServerResponse message, length delimited. Does not implicitly {@link CMsgGCToGCIsTrustedServerResponse.verify|verify} messages.
     * @param message CMsgGCToGCIsTrustedServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCIsTrustedServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCIsTrustedServerResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCIsTrustedServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCIsTrustedServerResponse;

    /**
     * Decodes a CMsgGCToGCIsTrustedServerResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCIsTrustedServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCIsTrustedServerResponse;

    /**
     * Verifies a CMsgGCToGCIsTrustedServerResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCIsTrustedServerResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCIsTrustedServerResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCIsTrustedServerResponse;

    /**
     * Creates a plain object from a CMsgGCToGCIsTrustedServerResponse message. Also converts values to other types if specified.
     * @param message CMsgGCToGCIsTrustedServerResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCIsTrustedServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCIsTrustedServerResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCIsTrustedServerResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCBroadcastConsoleCommand. */
export class CMsgGCToGCBroadcastConsoleCommand implements ICMsgGCToGCBroadcastConsoleCommand {

    /**
     * Constructs a new CMsgGCToGCBroadcastConsoleCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCBroadcastConsoleCommand);

    /** CMsgGCToGCBroadcastConsoleCommand conCommand. */
    public conCommand: string;

    /**
     * Creates a new CMsgGCToGCBroadcastConsoleCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCBroadcastConsoleCommand instance
     */
    public static create(properties?: ICMsgGCToGCBroadcastConsoleCommand): CMsgGCToGCBroadcastConsoleCommand;

    /**
     * Encodes the specified CMsgGCToGCBroadcastConsoleCommand message. Does not implicitly {@link CMsgGCToGCBroadcastConsoleCommand.verify|verify} messages.
     * @param message CMsgGCToGCBroadcastConsoleCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCBroadcastConsoleCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCBroadcastConsoleCommand message, length delimited. Does not implicitly {@link CMsgGCToGCBroadcastConsoleCommand.verify|verify} messages.
     * @param message CMsgGCToGCBroadcastConsoleCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCBroadcastConsoleCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCBroadcastConsoleCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCBroadcastConsoleCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCBroadcastConsoleCommand;

    /**
     * Decodes a CMsgGCToGCBroadcastConsoleCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCBroadcastConsoleCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCBroadcastConsoleCommand;

    /**
     * Verifies a CMsgGCToGCBroadcastConsoleCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCBroadcastConsoleCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCBroadcastConsoleCommand
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCBroadcastConsoleCommand;

    /**
     * Creates a plain object from a CMsgGCToGCBroadcastConsoleCommand message. Also converts values to other types if specified.
     * @param message CMsgGCToGCBroadcastConsoleCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCBroadcastConsoleCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCBroadcastConsoleCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCBroadcastConsoleCommand
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCServerVersionUpdated. */
export class CMsgGCServerVersionUpdated implements ICMsgGCServerVersionUpdated {

    /**
     * Constructs a new CMsgGCServerVersionUpdated.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCServerVersionUpdated);

    /** CMsgGCServerVersionUpdated serverVersion. */
    public serverVersion: number;

    /**
     * Creates a new CMsgGCServerVersionUpdated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCServerVersionUpdated instance
     */
    public static create(properties?: ICMsgGCServerVersionUpdated): CMsgGCServerVersionUpdated;

    /**
     * Encodes the specified CMsgGCServerVersionUpdated message. Does not implicitly {@link CMsgGCServerVersionUpdated.verify|verify} messages.
     * @param message CMsgGCServerVersionUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCServerVersionUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCServerVersionUpdated message, length delimited. Does not implicitly {@link CMsgGCServerVersionUpdated.verify|verify} messages.
     * @param message CMsgGCServerVersionUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCServerVersionUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCServerVersionUpdated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCServerVersionUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCServerVersionUpdated;

    /**
     * Decodes a CMsgGCServerVersionUpdated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCServerVersionUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCServerVersionUpdated;

    /**
     * Verifies a CMsgGCServerVersionUpdated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCServerVersionUpdated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCServerVersionUpdated
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCServerVersionUpdated;

    /**
     * Creates a plain object from a CMsgGCServerVersionUpdated message. Also converts values to other types if specified.
     * @param message CMsgGCServerVersionUpdated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCServerVersionUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCServerVersionUpdated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCServerVersionUpdated
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCClientVersionUpdated. */
export class CMsgGCClientVersionUpdated implements ICMsgGCClientVersionUpdated {

    /**
     * Constructs a new CMsgGCClientVersionUpdated.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCClientVersionUpdated);

    /** CMsgGCClientVersionUpdated clientVersion. */
    public clientVersion: number;

    /**
     * Creates a new CMsgGCClientVersionUpdated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCClientVersionUpdated instance
     */
    public static create(properties?: ICMsgGCClientVersionUpdated): CMsgGCClientVersionUpdated;

    /**
     * Encodes the specified CMsgGCClientVersionUpdated message. Does not implicitly {@link CMsgGCClientVersionUpdated.verify|verify} messages.
     * @param message CMsgGCClientVersionUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCClientVersionUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCClientVersionUpdated message, length delimited. Does not implicitly {@link CMsgGCClientVersionUpdated.verify|verify} messages.
     * @param message CMsgGCClientVersionUpdated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCClientVersionUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCClientVersionUpdated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCClientVersionUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCClientVersionUpdated;

    /**
     * Decodes a CMsgGCClientVersionUpdated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCClientVersionUpdated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCClientVersionUpdated;

    /**
     * Verifies a CMsgGCClientVersionUpdated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCClientVersionUpdated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCClientVersionUpdated
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCClientVersionUpdated;

    /**
     * Creates a plain object from a CMsgGCClientVersionUpdated message. Also converts values to other types if specified.
     * @param message CMsgGCClientVersionUpdated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCClientVersionUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCClientVersionUpdated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCClientVersionUpdated
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCWebAPIAccountChanged. */
export class CMsgGCToGCWebAPIAccountChanged implements ICMsgGCToGCWebAPIAccountChanged {

    /**
     * Constructs a new CMsgGCToGCWebAPIAccountChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCWebAPIAccountChanged);

    /**
     * Creates a new CMsgGCToGCWebAPIAccountChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCWebAPIAccountChanged instance
     */
    public static create(properties?: ICMsgGCToGCWebAPIAccountChanged): CMsgGCToGCWebAPIAccountChanged;

    /**
     * Encodes the specified CMsgGCToGCWebAPIAccountChanged message. Does not implicitly {@link CMsgGCToGCWebAPIAccountChanged.verify|verify} messages.
     * @param message CMsgGCToGCWebAPIAccountChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCWebAPIAccountChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCWebAPIAccountChanged message, length delimited. Does not implicitly {@link CMsgGCToGCWebAPIAccountChanged.verify|verify} messages.
     * @param message CMsgGCToGCWebAPIAccountChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCWebAPIAccountChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCWebAPIAccountChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCWebAPIAccountChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCWebAPIAccountChanged;

    /**
     * Decodes a CMsgGCToGCWebAPIAccountChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCWebAPIAccountChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCWebAPIAccountChanged;

    /**
     * Verifies a CMsgGCToGCWebAPIAccountChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCWebAPIAccountChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCWebAPIAccountChanged
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCWebAPIAccountChanged;

    /**
     * Creates a plain object from a CMsgGCToGCWebAPIAccountChanged message. Also converts values to other types if specified.
     * @param message CMsgGCToGCWebAPIAccountChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCWebAPIAccountChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCWebAPIAccountChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCWebAPIAccountChanged
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCToGCRequestPassportItemGrant. */
export class CMsgGCToGCRequestPassportItemGrant implements ICMsgGCToGCRequestPassportItemGrant {

    /**
     * Constructs a new CMsgGCToGCRequestPassportItemGrant.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCRequestPassportItemGrant);

    /** CMsgGCToGCRequestPassportItemGrant steamId. */
    public steamId: (number|Long);

    /** CMsgGCToGCRequestPassportItemGrant leagueId. */
    public leagueId: number;

    /** CMsgGCToGCRequestPassportItemGrant rewardFlag. */
    public rewardFlag: number;

    /**
     * Creates a new CMsgGCToGCRequestPassportItemGrant instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCToGCRequestPassportItemGrant instance
     */
    public static create(properties?: ICMsgGCToGCRequestPassportItemGrant): CMsgGCToGCRequestPassportItemGrant;

    /**
     * Encodes the specified CMsgGCToGCRequestPassportItemGrant message. Does not implicitly {@link CMsgGCToGCRequestPassportItemGrant.verify|verify} messages.
     * @param message CMsgGCToGCRequestPassportItemGrant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCToGCRequestPassportItemGrant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCToGCRequestPassportItemGrant message, length delimited. Does not implicitly {@link CMsgGCToGCRequestPassportItemGrant.verify|verify} messages.
     * @param message CMsgGCToGCRequestPassportItemGrant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCToGCRequestPassportItemGrant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCToGCRequestPassportItemGrant message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCRequestPassportItemGrant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCRequestPassportItemGrant;

    /**
     * Decodes a CMsgGCToGCRequestPassportItemGrant message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCToGCRequestPassportItemGrant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCToGCRequestPassportItemGrant;

    /**
     * Verifies a CMsgGCToGCRequestPassportItemGrant message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCToGCRequestPassportItemGrant message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCToGCRequestPassportItemGrant
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCToGCRequestPassportItemGrant;

    /**
     * Creates a plain object from a CMsgGCToGCRequestPassportItemGrant message. Also converts values to other types if specified.
     * @param message CMsgGCToGCRequestPassportItemGrant
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCToGCRequestPassportItemGrant, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCToGCRequestPassportItemGrant to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCToGCRequestPassportItemGrant
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGameServerInfo. */
export class CMsgGameServerInfo implements ICMsgGameServerInfo {

    /**
     * Constructs a new CMsgGameServerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGameServerInfo);

    /** CMsgGameServerInfo serverPublicIpAddr. */
    public serverPublicIpAddr: number;

    /** CMsgGameServerInfo serverPrivateIpAddr. */
    public serverPrivateIpAddr: number;

    /** CMsgGameServerInfo serverPort. */
    public serverPort: number;

    /** CMsgGameServerInfo serverTvPort. */
    public serverTvPort: number;

    /** CMsgGameServerInfo serverKey. */
    public serverKey: string;

    /** CMsgGameServerInfo serverHibernation. */
    public serverHibernation: boolean;

    /** CMsgGameServerInfo serverType. */
    public serverType: CMsgGameServerInfo.ServerType;

    /** CMsgGameServerInfo serverRegion. */
    public serverRegion: number;

    /** CMsgGameServerInfo serverLoadavg. */
    public serverLoadavg: number;

    /** CMsgGameServerInfo serverTvBroadcastTime. */
    public serverTvBroadcastTime: number;

    /** CMsgGameServerInfo serverGameTime. */
    public serverGameTime: number;

    /** CMsgGameServerInfo serverRelayConnectedSteamId. */
    public serverRelayConnectedSteamId: (number|Long);

    /** CMsgGameServerInfo relaySlotsMax. */
    public relaySlotsMax: number;

    /** CMsgGameServerInfo relaysConnected. */
    public relaysConnected: number;

    /** CMsgGameServerInfo relayClientsConnected. */
    public relayClientsConnected: number;

    /** CMsgGameServerInfo relayedGameServerSteamId. */
    public relayedGameServerSteamId: (number|Long);

    /** CMsgGameServerInfo parentRelayCount. */
    public parentRelayCount: number;

    /** CMsgGameServerInfo tvSecretCode. */
    public tvSecretCode: (number|Long);

    /**
     * Creates a new CMsgGameServerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGameServerInfo instance
     */
    public static create(properties?: ICMsgGameServerInfo): CMsgGameServerInfo;

    /**
     * Encodes the specified CMsgGameServerInfo message. Does not implicitly {@link CMsgGameServerInfo.verify|verify} messages.
     * @param message CMsgGameServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGameServerInfo message, length delimited. Does not implicitly {@link CMsgGameServerInfo.verify|verify} messages.
     * @param message CMsgGameServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGameServerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGameServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGameServerInfo;

    /**
     * Decodes a CMsgGameServerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGameServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGameServerInfo;

    /**
     * Verifies a CMsgGameServerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGameServerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGameServerInfo
     */
    public static fromObject(object: { [k: string]: any }): CMsgGameServerInfo;

    /**
     * Creates a plain object from a CMsgGameServerInfo message. Also converts values to other types if specified.
     * @param message CMsgGameServerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGameServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGameServerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGameServerInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGameServerInfo {

    /** ServerType enum. */
    enum ServerType {
        UNSPECIFIED = 0,
        GAME = 1,
        PROXY = 2
    }
}

/** Represents a CSOEconEquipSlot. */
export class CSOEconEquipSlot implements ICSOEconEquipSlot {

    /**
     * Constructs a new CSOEconEquipSlot.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconEquipSlot);

    /** CSOEconEquipSlot accountId. */
    public accountId: number;

    /** CSOEconEquipSlot classId. */
    public classId: number;

    /** CSOEconEquipSlot slotId. */
    public slotId: number;

    /** CSOEconEquipSlot itemId. */
    public itemId: (number|Long);

    /** CSOEconEquipSlot itemDefinition. */
    public itemDefinition: number;

    /**
     * Creates a new CSOEconEquipSlot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSOEconEquipSlot instance
     */
    public static create(properties?: ICSOEconEquipSlot): CSOEconEquipSlot;

    /**
     * Encodes the specified CSOEconEquipSlot message. Does not implicitly {@link CSOEconEquipSlot.verify|verify} messages.
     * @param message CSOEconEquipSlot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSOEconEquipSlot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSOEconEquipSlot message, length delimited. Does not implicitly {@link CSOEconEquipSlot.verify|verify} messages.
     * @param message CSOEconEquipSlot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSOEconEquipSlot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSOEconEquipSlot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconEquipSlot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconEquipSlot;

    /**
     * Decodes a CSOEconEquipSlot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSOEconEquipSlot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSOEconEquipSlot;

    /**
     * Verifies a CSOEconEquipSlot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSOEconEquipSlot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSOEconEquipSlot
     */
    public static fromObject(object: { [k: string]: any }): CSOEconEquipSlot;

    /**
     * Creates a plain object from a CSOEconEquipSlot message. Also converts values to other types if specified.
     * @param message CSOEconEquipSlot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSOEconEquipSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSOEconEquipSlot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSOEconEquipSlot
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAdjustEquipSlot. */
export class CMsgAdjustEquipSlot implements ICMsgAdjustEquipSlot {

    /**
     * Constructs a new CMsgAdjustEquipSlot.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAdjustEquipSlot);

    /** CMsgAdjustEquipSlot classId. */
    public classId: number;

    /** CMsgAdjustEquipSlot slotId. */
    public slotId: number;

    /** CMsgAdjustEquipSlot itemId. */
    public itemId: (number|Long);

    /**
     * Creates a new CMsgAdjustEquipSlot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAdjustEquipSlot instance
     */
    public static create(properties?: ICMsgAdjustEquipSlot): CMsgAdjustEquipSlot;

    /**
     * Encodes the specified CMsgAdjustEquipSlot message. Does not implicitly {@link CMsgAdjustEquipSlot.verify|verify} messages.
     * @param message CMsgAdjustEquipSlot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAdjustEquipSlot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAdjustEquipSlot message, length delimited. Does not implicitly {@link CMsgAdjustEquipSlot.verify|verify} messages.
     * @param message CMsgAdjustEquipSlot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAdjustEquipSlot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAdjustEquipSlot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAdjustEquipSlot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAdjustEquipSlot;

    /**
     * Decodes a CMsgAdjustEquipSlot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAdjustEquipSlot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAdjustEquipSlot;

    /**
     * Verifies a CMsgAdjustEquipSlot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAdjustEquipSlot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAdjustEquipSlot
     */
    public static fromObject(object: { [k: string]: any }): CMsgAdjustEquipSlot;

    /**
     * Creates a plain object from a CMsgAdjustEquipSlot message. Also converts values to other types if specified.
     * @param message CMsgAdjustEquipSlot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAdjustEquipSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAdjustEquipSlot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAdjustEquipSlot
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAdjustEquipSlots. */
export class CMsgAdjustEquipSlots implements ICMsgAdjustEquipSlots {

    /**
     * Constructs a new CMsgAdjustEquipSlots.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAdjustEquipSlots);

    /** CMsgAdjustEquipSlots slots. */
    public slots: ICMsgAdjustEquipSlot[];

    /**
     * Creates a new CMsgAdjustEquipSlots instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAdjustEquipSlots instance
     */
    public static create(properties?: ICMsgAdjustEquipSlots): CMsgAdjustEquipSlots;

    /**
     * Encodes the specified CMsgAdjustEquipSlots message. Does not implicitly {@link CMsgAdjustEquipSlots.verify|verify} messages.
     * @param message CMsgAdjustEquipSlots message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAdjustEquipSlots, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAdjustEquipSlots message, length delimited. Does not implicitly {@link CMsgAdjustEquipSlots.verify|verify} messages.
     * @param message CMsgAdjustEquipSlots message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAdjustEquipSlots, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAdjustEquipSlots message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAdjustEquipSlots
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAdjustEquipSlots;

    /**
     * Decodes a CMsgAdjustEquipSlots message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAdjustEquipSlots
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAdjustEquipSlots;

    /**
     * Verifies a CMsgAdjustEquipSlots message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAdjustEquipSlots message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAdjustEquipSlots
     */
    public static fromObject(object: { [k: string]: any }): CMsgAdjustEquipSlots;

    /**
     * Creates a plain object from a CMsgAdjustEquipSlots message. Also converts values to other types if specified.
     * @param message CMsgAdjustEquipSlots
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAdjustEquipSlots, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAdjustEquipSlots to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAdjustEquipSlots
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** GCProtoBufMsgSrc enum. */
export enum GCProtoBufMsgSrc {
    GCProtoBufMsgSrc_Unspecified = 0,
    GCProtoBufMsgSrc_FromSystem = 1,
    GCProtoBufMsgSrc_FromSteamID = 2,
    GCProtoBufMsgSrc_FromGC = 3,
    GCProtoBufMsgSrc_ReplySystem = 4
}

/** Represents a CMsgProtoBufHeader. */
export class CMsgProtoBufHeader implements ICMsgProtoBufHeader {

    /**
     * Constructs a new CMsgProtoBufHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgProtoBufHeader);

    /** CMsgProtoBufHeader clientSteamId. */
    public clientSteamId: (number|Long);

    /** CMsgProtoBufHeader clientSessionId. */
    public clientSessionId: number;

    /** CMsgProtoBufHeader sourceAppId. */
    public sourceAppId: number;

    /** CMsgProtoBufHeader jobIdSource. */
    public jobIdSource: (number|Long);

    /** CMsgProtoBufHeader jobIdTarget. */
    public jobIdTarget: (number|Long);

    /** CMsgProtoBufHeader targetJobName. */
    public targetJobName: string;

    /** CMsgProtoBufHeader eresult. */
    public eresult: number;

    /** CMsgProtoBufHeader errorMessage. */
    public errorMessage: string;

    /** CMsgProtoBufHeader ip. */
    public ip: number;

    /** CMsgProtoBufHeader gcMsgSrc. */
    public gcMsgSrc: GCProtoBufMsgSrc;

    /** CMsgProtoBufHeader gcDirIndexSource. */
    public gcDirIndexSource: number;

    /**
     * Creates a new CMsgProtoBufHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgProtoBufHeader instance
     */
    public static create(properties?: ICMsgProtoBufHeader): CMsgProtoBufHeader;

    /**
     * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
     * @param message CMsgProtoBufHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgProtoBufHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
     * @param message CMsgProtoBufHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgProtoBufHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgProtoBufHeader;

    /**
     * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgProtoBufHeader;

    /**
     * Verifies a CMsgProtoBufHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgProtoBufHeader
     */
    public static fromObject(object: { [k: string]: any }): CMsgProtoBufHeader;

    /**
     * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
     * @param message CMsgProtoBufHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgProtoBufHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgProtoBufHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgProtoBufHeader
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgWebAPIKey. */
export class CMsgWebAPIKey implements ICMsgWebAPIKey {

    /**
     * Constructs a new CMsgWebAPIKey.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgWebAPIKey);

    /** CMsgWebAPIKey status. */
    public status: number;

    /** CMsgWebAPIKey accountId. */
    public accountId: number;

    /** CMsgWebAPIKey publisherGroupId. */
    public publisherGroupId: number;

    /** CMsgWebAPIKey keyId. */
    public keyId: number;

    /** CMsgWebAPIKey domain. */
    public domain: string;

    /**
     * Creates a new CMsgWebAPIKey instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgWebAPIKey instance
     */
    public static create(properties?: ICMsgWebAPIKey): CMsgWebAPIKey;

    /**
     * Encodes the specified CMsgWebAPIKey message. Does not implicitly {@link CMsgWebAPIKey.verify|verify} messages.
     * @param message CMsgWebAPIKey message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgWebAPIKey, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgWebAPIKey message, length delimited. Does not implicitly {@link CMsgWebAPIKey.verify|verify} messages.
     * @param message CMsgWebAPIKey message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgWebAPIKey, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgWebAPIKey message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgWebAPIKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgWebAPIKey;

    /**
     * Decodes a CMsgWebAPIKey message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgWebAPIKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgWebAPIKey;

    /**
     * Verifies a CMsgWebAPIKey message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgWebAPIKey message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgWebAPIKey
     */
    public static fromObject(object: { [k: string]: any }): CMsgWebAPIKey;

    /**
     * Creates a plain object from a CMsgWebAPIKey message. Also converts values to other types if specified.
     * @param message CMsgWebAPIKey
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgWebAPIKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgWebAPIKey to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgWebAPIKey
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgHttpRequest. */
export class CMsgHttpRequest implements ICMsgHttpRequest {

    /**
     * Constructs a new CMsgHttpRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgHttpRequest);

    /** CMsgHttpRequest requestMethod. */
    public requestMethod: number;

    /** CMsgHttpRequest hostname. */
    public hostname: string;

    /** CMsgHttpRequest url. */
    public url: string;

    /** CMsgHttpRequest headers. */
    public headers: CMsgHttpRequest.IRequestHeader[];

    /** CMsgHttpRequest getParams. */
    public getParams: CMsgHttpRequest.IQueryParam[];

    /** CMsgHttpRequest postParams. */
    public postParams: CMsgHttpRequest.IQueryParam[];

    /** CMsgHttpRequest body. */
    public body: Uint8Array;

    /** CMsgHttpRequest absoluteTimeout. */
    public absoluteTimeout: number;

    /**
     * Creates a new CMsgHttpRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgHttpRequest instance
     */
    public static create(properties?: ICMsgHttpRequest): CMsgHttpRequest;

    /**
     * Encodes the specified CMsgHttpRequest message. Does not implicitly {@link CMsgHttpRequest.verify|verify} messages.
     * @param message CMsgHttpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgHttpRequest message, length delimited. Does not implicitly {@link CMsgHttpRequest.verify|verify} messages.
     * @param message CMsgHttpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgHttpRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgHttpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpRequest;

    /**
     * Decodes a CMsgHttpRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgHttpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgHttpRequest;

    /**
     * Verifies a CMsgHttpRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgHttpRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgHttpRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgHttpRequest;

    /**
     * Creates a plain object from a CMsgHttpRequest message. Also converts values to other types if specified.
     * @param message CMsgHttpRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgHttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgHttpRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgHttpRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgHttpRequest {

    /** Properties of a RequestHeader. */
    interface IRequestHeader {

        /** RequestHeader name */
        name?: (string|null);

        /** RequestHeader value */
        value?: (string|null);
    }

    /** Represents a RequestHeader. */
    class RequestHeader implements IRequestHeader {

        /**
         * Constructs a new RequestHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgHttpRequest.IRequestHeader);

        /** RequestHeader name. */
        public name: string;

        /** RequestHeader value. */
        public value: string;

        /**
         * Creates a new RequestHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestHeader instance
         */
        public static create(properties?: CMsgHttpRequest.IRequestHeader): CMsgHttpRequest.RequestHeader;

        /**
         * Encodes the specified RequestHeader message. Does not implicitly {@link CMsgHttpRequest.RequestHeader.verify|verify} messages.
         * @param message RequestHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgHttpRequest.IRequestHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestHeader message, length delimited. Does not implicitly {@link CMsgHttpRequest.RequestHeader.verify|verify} messages.
         * @param message RequestHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgHttpRequest.IRequestHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpRequest.RequestHeader;

        /**
         * Decodes a RequestHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgHttpRequest.RequestHeader;

        /**
         * Verifies a RequestHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestHeader
         */
        public static fromObject(object: { [k: string]: any }): CMsgHttpRequest.RequestHeader;

        /**
         * Creates a plain object from a RequestHeader message. Also converts values to other types if specified.
         * @param message RequestHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgHttpRequest.RequestHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestHeader
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QueryParam. */
    interface IQueryParam {

        /** QueryParam name */
        name?: (string|null);

        /** QueryParam value */
        value?: (Uint8Array|null);
    }

    /** Represents a QueryParam. */
    class QueryParam implements IQueryParam {

        /**
         * Constructs a new QueryParam.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgHttpRequest.IQueryParam);

        /** QueryParam name. */
        public name: string;

        /** QueryParam value. */
        public value: Uint8Array;

        /**
         * Creates a new QueryParam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryParam instance
         */
        public static create(properties?: CMsgHttpRequest.IQueryParam): CMsgHttpRequest.QueryParam;

        /**
         * Encodes the specified QueryParam message. Does not implicitly {@link CMsgHttpRequest.QueryParam.verify|verify} messages.
         * @param message QueryParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgHttpRequest.IQueryParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryParam message, length delimited. Does not implicitly {@link CMsgHttpRequest.QueryParam.verify|verify} messages.
         * @param message QueryParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgHttpRequest.IQueryParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryParam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpRequest.QueryParam;

        /**
         * Decodes a QueryParam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgHttpRequest.QueryParam;

        /**
         * Verifies a QueryParam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryParam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryParam
         */
        public static fromObject(object: { [k: string]: any }): CMsgHttpRequest.QueryParam;

        /**
         * Creates a plain object from a QueryParam message. Also converts values to other types if specified.
         * @param message QueryParam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgHttpRequest.QueryParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QueryParam
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgWebAPIRequest. */
export class CMsgWebAPIRequest implements ICMsgWebAPIRequest {

    /**
     * Constructs a new CMsgWebAPIRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgWebAPIRequest);

    /** CMsgWebAPIRequest interfaceName. */
    public interfaceName: string;

    /** CMsgWebAPIRequest methodName. */
    public methodName: string;

    /** CMsgWebAPIRequest version. */
    public version: number;

    /** CMsgWebAPIRequest apiKey. */
    public apiKey?: (ICMsgWebAPIKey|null);

    /** CMsgWebAPIRequest request. */
    public request?: (ICMsgHttpRequest|null);

    /** CMsgWebAPIRequest routingAppId. */
    public routingAppId: number;

    /**
     * Creates a new CMsgWebAPIRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgWebAPIRequest instance
     */
    public static create(properties?: ICMsgWebAPIRequest): CMsgWebAPIRequest;

    /**
     * Encodes the specified CMsgWebAPIRequest message. Does not implicitly {@link CMsgWebAPIRequest.verify|verify} messages.
     * @param message CMsgWebAPIRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgWebAPIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgWebAPIRequest message, length delimited. Does not implicitly {@link CMsgWebAPIRequest.verify|verify} messages.
     * @param message CMsgWebAPIRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgWebAPIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgWebAPIRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgWebAPIRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgWebAPIRequest;

    /**
     * Decodes a CMsgWebAPIRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgWebAPIRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgWebAPIRequest;

    /**
     * Verifies a CMsgWebAPIRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgWebAPIRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgWebAPIRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgWebAPIRequest;

    /**
     * Creates a plain object from a CMsgWebAPIRequest message. Also converts values to other types if specified.
     * @param message CMsgWebAPIRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgWebAPIRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgWebAPIRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgWebAPIRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgHttpResponse. */
export class CMsgHttpResponse implements ICMsgHttpResponse {

    /**
     * Constructs a new CMsgHttpResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgHttpResponse);

    /** CMsgHttpResponse statusCode. */
    public statusCode: number;

    /** CMsgHttpResponse headers. */
    public headers: CMsgHttpResponse.IResponseHeader[];

    /** CMsgHttpResponse body. */
    public body: Uint8Array;

    /**
     * Creates a new CMsgHttpResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgHttpResponse instance
     */
    public static create(properties?: ICMsgHttpResponse): CMsgHttpResponse;

    /**
     * Encodes the specified CMsgHttpResponse message. Does not implicitly {@link CMsgHttpResponse.verify|verify} messages.
     * @param message CMsgHttpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgHttpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgHttpResponse message, length delimited. Does not implicitly {@link CMsgHttpResponse.verify|verify} messages.
     * @param message CMsgHttpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgHttpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgHttpResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgHttpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpResponse;

    /**
     * Decodes a CMsgHttpResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgHttpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgHttpResponse;

    /**
     * Verifies a CMsgHttpResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgHttpResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgHttpResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgHttpResponse;

    /**
     * Creates a plain object from a CMsgHttpResponse message. Also converts values to other types if specified.
     * @param message CMsgHttpResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgHttpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgHttpResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgHttpResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgHttpResponse {

    /** Properties of a ResponseHeader. */
    interface IResponseHeader {

        /** ResponseHeader name */
        name?: (string|null);

        /** ResponseHeader value */
        value?: (string|null);
    }

    /** Represents a ResponseHeader. */
    class ResponseHeader implements IResponseHeader {

        /**
         * Constructs a new ResponseHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgHttpResponse.IResponseHeader);

        /** ResponseHeader name. */
        public name: string;

        /** ResponseHeader value. */
        public value: string;

        /**
         * Creates a new ResponseHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseHeader instance
         */
        public static create(properties?: CMsgHttpResponse.IResponseHeader): CMsgHttpResponse.ResponseHeader;

        /**
         * Encodes the specified ResponseHeader message. Does not implicitly {@link CMsgHttpResponse.ResponseHeader.verify|verify} messages.
         * @param message ResponseHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgHttpResponse.IResponseHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseHeader message, length delimited. Does not implicitly {@link CMsgHttpResponse.ResponseHeader.verify|verify} messages.
         * @param message ResponseHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgHttpResponse.IResponseHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpResponse.ResponseHeader;

        /**
         * Decodes a ResponseHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgHttpResponse.ResponseHeader;

        /**
         * Verifies a ResponseHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseHeader
         */
        public static fromObject(object: { [k: string]: any }): CMsgHttpResponse.ResponseHeader;

        /**
         * Creates a plain object from a ResponseHeader message. Also converts values to other types if specified.
         * @param message ResponseHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgHttpResponse.ResponseHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResponseHeader
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgAMFindAccounts. */
export class CMsgAMFindAccounts implements ICMsgAMFindAccounts {

    /**
     * Constructs a new CMsgAMFindAccounts.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMFindAccounts);

    /** CMsgAMFindAccounts searchType. */
    public searchType: number;

    /** CMsgAMFindAccounts searchString. */
    public searchString: string;

    /**
     * Creates a new CMsgAMFindAccounts instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMFindAccounts instance
     */
    public static create(properties?: ICMsgAMFindAccounts): CMsgAMFindAccounts;

    /**
     * Encodes the specified CMsgAMFindAccounts message. Does not implicitly {@link CMsgAMFindAccounts.verify|verify} messages.
     * @param message CMsgAMFindAccounts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMFindAccounts, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMFindAccounts message, length delimited. Does not implicitly {@link CMsgAMFindAccounts.verify|verify} messages.
     * @param message CMsgAMFindAccounts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMFindAccounts, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMFindAccounts message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMFindAccounts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMFindAccounts;

    /**
     * Decodes a CMsgAMFindAccounts message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMFindAccounts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMFindAccounts;

    /**
     * Verifies a CMsgAMFindAccounts message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMFindAccounts message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMFindAccounts
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMFindAccounts;

    /**
     * Creates a plain object from a CMsgAMFindAccounts message. Also converts values to other types if specified.
     * @param message CMsgAMFindAccounts
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMFindAccounts, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMFindAccounts to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMFindAccounts
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMFindAccountsResponse. */
export class CMsgAMFindAccountsResponse implements ICMsgAMFindAccountsResponse {

    /**
     * Constructs a new CMsgAMFindAccountsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMFindAccountsResponse);

    /** CMsgAMFindAccountsResponse steamId. */
    public steamId: (number|Long)[];

    /**
     * Creates a new CMsgAMFindAccountsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMFindAccountsResponse instance
     */
    public static create(properties?: ICMsgAMFindAccountsResponse): CMsgAMFindAccountsResponse;

    /**
     * Encodes the specified CMsgAMFindAccountsResponse message. Does not implicitly {@link CMsgAMFindAccountsResponse.verify|verify} messages.
     * @param message CMsgAMFindAccountsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMFindAccountsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMFindAccountsResponse message, length delimited. Does not implicitly {@link CMsgAMFindAccountsResponse.verify|verify} messages.
     * @param message CMsgAMFindAccountsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMFindAccountsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMFindAccountsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMFindAccountsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMFindAccountsResponse;

    /**
     * Decodes a CMsgAMFindAccountsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMFindAccountsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMFindAccountsResponse;

    /**
     * Verifies a CMsgAMFindAccountsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMFindAccountsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMFindAccountsResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMFindAccountsResponse;

    /**
     * Creates a plain object from a CMsgAMFindAccountsResponse message. Also converts values to other types if specified.
     * @param message CMsgAMFindAccountsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMFindAccountsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMFindAccountsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMFindAccountsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgNotifyWatchdog. */
export class CMsgNotifyWatchdog implements ICMsgNotifyWatchdog {

    /**
     * Constructs a new CMsgNotifyWatchdog.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgNotifyWatchdog);

    /** CMsgNotifyWatchdog source. */
    public source: number;

    /** CMsgNotifyWatchdog alertType. */
    public alertType: number;

    /** CMsgNotifyWatchdog alertDestination. */
    public alertDestination: number;

    /** CMsgNotifyWatchdog critical. */
    public critical: boolean;

    /** CMsgNotifyWatchdog time. */
    public time: number;

    /** CMsgNotifyWatchdog appid. */
    public appid: number;

    /** CMsgNotifyWatchdog text. */
    public text: string;

    /**
     * Creates a new CMsgNotifyWatchdog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgNotifyWatchdog instance
     */
    public static create(properties?: ICMsgNotifyWatchdog): CMsgNotifyWatchdog;

    /**
     * Encodes the specified CMsgNotifyWatchdog message. Does not implicitly {@link CMsgNotifyWatchdog.verify|verify} messages.
     * @param message CMsgNotifyWatchdog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgNotifyWatchdog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgNotifyWatchdog message, length delimited. Does not implicitly {@link CMsgNotifyWatchdog.verify|verify} messages.
     * @param message CMsgNotifyWatchdog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgNotifyWatchdog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgNotifyWatchdog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgNotifyWatchdog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgNotifyWatchdog;

    /**
     * Decodes a CMsgNotifyWatchdog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgNotifyWatchdog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgNotifyWatchdog;

    /**
     * Verifies a CMsgNotifyWatchdog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgNotifyWatchdog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgNotifyWatchdog
     */
    public static fromObject(object: { [k: string]: any }): CMsgNotifyWatchdog;

    /**
     * Creates a plain object from a CMsgNotifyWatchdog message. Also converts values to other types if specified.
     * @param message CMsgNotifyWatchdog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgNotifyWatchdog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgNotifyWatchdog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgNotifyWatchdog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMGetLicenses. */
export class CMsgAMGetLicenses implements ICMsgAMGetLicenses {

    /**
     * Constructs a new CMsgAMGetLicenses.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetLicenses);

    /** CMsgAMGetLicenses steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CMsgAMGetLicenses instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMGetLicenses instance
     */
    public static create(properties?: ICMsgAMGetLicenses): CMsgAMGetLicenses;

    /**
     * Encodes the specified CMsgAMGetLicenses message. Does not implicitly {@link CMsgAMGetLicenses.verify|verify} messages.
     * @param message CMsgAMGetLicenses message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMGetLicenses, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMGetLicenses message, length delimited. Does not implicitly {@link CMsgAMGetLicenses.verify|verify} messages.
     * @param message CMsgAMGetLicenses message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMGetLicenses, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMGetLicenses message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetLicenses
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetLicenses;

    /**
     * Decodes a CMsgAMGetLicenses message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMGetLicenses
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGetLicenses;

    /**
     * Verifies a CMsgAMGetLicenses message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMGetLicenses message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMGetLicenses
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMGetLicenses;

    /**
     * Creates a plain object from a CMsgAMGetLicenses message. Also converts values to other types if specified.
     * @param message CMsgAMGetLicenses
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMGetLicenses, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMGetLicenses to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMGetLicenses
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgPackageLicense. */
export class CMsgPackageLicense implements ICMsgPackageLicense {

    /**
     * Constructs a new CMsgPackageLicense.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgPackageLicense);

    /** CMsgPackageLicense packageId. */
    public packageId: number;

    /** CMsgPackageLicense timeCreated. */
    public timeCreated: number;

    /** CMsgPackageLicense ownerId. */
    public ownerId: number;

    /**
     * Creates a new CMsgPackageLicense instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgPackageLicense instance
     */
    public static create(properties?: ICMsgPackageLicense): CMsgPackageLicense;

    /**
     * Encodes the specified CMsgPackageLicense message. Does not implicitly {@link CMsgPackageLicense.verify|verify} messages.
     * @param message CMsgPackageLicense message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgPackageLicense, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgPackageLicense message, length delimited. Does not implicitly {@link CMsgPackageLicense.verify|verify} messages.
     * @param message CMsgPackageLicense message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgPackageLicense, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgPackageLicense message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgPackageLicense
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgPackageLicense;

    /**
     * Decodes a CMsgPackageLicense message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgPackageLicense
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgPackageLicense;

    /**
     * Verifies a CMsgPackageLicense message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgPackageLicense message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgPackageLicense
     */
    public static fromObject(object: { [k: string]: any }): CMsgPackageLicense;

    /**
     * Creates a plain object from a CMsgPackageLicense message. Also converts values to other types if specified.
     * @param message CMsgPackageLicense
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgPackageLicense, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgPackageLicense to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgPackageLicense
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMGetLicensesResponse. */
export class CMsgAMGetLicensesResponse implements ICMsgAMGetLicensesResponse {

    /**
     * Constructs a new CMsgAMGetLicensesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetLicensesResponse);

    /** CMsgAMGetLicensesResponse license. */
    public license: ICMsgPackageLicense[];

    /** CMsgAMGetLicensesResponse result. */
    public result: number;

    /**
     * Creates a new CMsgAMGetLicensesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMGetLicensesResponse instance
     */
    public static create(properties?: ICMsgAMGetLicensesResponse): CMsgAMGetLicensesResponse;

    /**
     * Encodes the specified CMsgAMGetLicensesResponse message. Does not implicitly {@link CMsgAMGetLicensesResponse.verify|verify} messages.
     * @param message CMsgAMGetLicensesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMGetLicensesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMGetLicensesResponse message, length delimited. Does not implicitly {@link CMsgAMGetLicensesResponse.verify|verify} messages.
     * @param message CMsgAMGetLicensesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMGetLicensesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMGetLicensesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetLicensesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetLicensesResponse;

    /**
     * Decodes a CMsgAMGetLicensesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMGetLicensesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGetLicensesResponse;

    /**
     * Verifies a CMsgAMGetLicensesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMGetLicensesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMGetLicensesResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMGetLicensesResponse;

    /**
     * Creates a plain object from a CMsgAMGetLicensesResponse message. Also converts values to other types if specified.
     * @param message CMsgAMGetLicensesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMGetLicensesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMGetLicensesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMGetLicensesResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMGetUserGameStats. */
export class CMsgAMGetUserGameStats implements ICMsgAMGetUserGameStats {

    /**
     * Constructs a new CMsgAMGetUserGameStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetUserGameStats);

    /** CMsgAMGetUserGameStats steamId. */
    public steamId: (number|Long);

    /** CMsgAMGetUserGameStats gameId. */
    public gameId: (number|Long);

    /** CMsgAMGetUserGameStats stats. */
    public stats: number[];

    /**
     * Creates a new CMsgAMGetUserGameStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMGetUserGameStats instance
     */
    public static create(properties?: ICMsgAMGetUserGameStats): CMsgAMGetUserGameStats;

    /**
     * Encodes the specified CMsgAMGetUserGameStats message. Does not implicitly {@link CMsgAMGetUserGameStats.verify|verify} messages.
     * @param message CMsgAMGetUserGameStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMGetUserGameStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMGetUserGameStats message, length delimited. Does not implicitly {@link CMsgAMGetUserGameStats.verify|verify} messages.
     * @param message CMsgAMGetUserGameStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMGetUserGameStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMGetUserGameStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetUserGameStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStats;

    /**
     * Decodes a CMsgAMGetUserGameStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMGetUserGameStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGetUserGameStats;

    /**
     * Verifies a CMsgAMGetUserGameStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMGetUserGameStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMGetUserGameStats
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMGetUserGameStats;

    /**
     * Creates a plain object from a CMsgAMGetUserGameStats message. Also converts values to other types if specified.
     * @param message CMsgAMGetUserGameStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMGetUserGameStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMGetUserGameStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMGetUserGameStats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMGetUserGameStatsResponse. */
export class CMsgAMGetUserGameStatsResponse implements ICMsgAMGetUserGameStatsResponse {

    /**
     * Constructs a new CMsgAMGetUserGameStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetUserGameStatsResponse);

    /** CMsgAMGetUserGameStatsResponse steamId. */
    public steamId: (number|Long);

    /** CMsgAMGetUserGameStatsResponse gameId. */
    public gameId: (number|Long);

    /** CMsgAMGetUserGameStatsResponse eresult. */
    public eresult: number;

    /** CMsgAMGetUserGameStatsResponse stats. */
    public stats: CMsgAMGetUserGameStatsResponse.IStats[];

    /** CMsgAMGetUserGameStatsResponse achievementBlocks. */
    public achievementBlocks: CMsgAMGetUserGameStatsResponse.IAchievement_Blocks[];

    /**
     * Creates a new CMsgAMGetUserGameStatsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMGetUserGameStatsResponse instance
     */
    public static create(properties?: ICMsgAMGetUserGameStatsResponse): CMsgAMGetUserGameStatsResponse;

    /**
     * Encodes the specified CMsgAMGetUserGameStatsResponse message. Does not implicitly {@link CMsgAMGetUserGameStatsResponse.verify|verify} messages.
     * @param message CMsgAMGetUserGameStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMGetUserGameStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMGetUserGameStatsResponse message, length delimited. Does not implicitly {@link CMsgAMGetUserGameStatsResponse.verify|verify} messages.
     * @param message CMsgAMGetUserGameStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMGetUserGameStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMGetUserGameStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetUserGameStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStatsResponse;

    /**
     * Decodes a CMsgAMGetUserGameStatsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMGetUserGameStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGetUserGameStatsResponse;

    /**
     * Verifies a CMsgAMGetUserGameStatsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMGetUserGameStatsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMGetUserGameStatsResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMGetUserGameStatsResponse;

    /**
     * Creates a plain object from a CMsgAMGetUserGameStatsResponse message. Also converts values to other types if specified.
     * @param message CMsgAMGetUserGameStatsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMGetUserGameStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMGetUserGameStatsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMGetUserGameStatsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgAMGetUserGameStatsResponse {

    /** Properties of a Stats. */
    interface IStats {

        /** Stats statId */
        statId?: (number|null);

        /** Stats statValue */
        statValue?: (number|null);
    }

    /** Represents a Stats. */
    class Stats implements IStats {

        /**
         * Constructs a new Stats.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMGetUserGameStatsResponse.IStats);

        /** Stats statId. */
        public statId: number;

        /** Stats statValue. */
        public statValue: number;

        /**
         * Creates a new Stats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Stats instance
         */
        public static create(properties?: CMsgAMGetUserGameStatsResponse.IStats): CMsgAMGetUserGameStatsResponse.Stats;

        /**
         * Encodes the specified Stats message. Does not implicitly {@link CMsgAMGetUserGameStatsResponse.Stats.verify|verify} messages.
         * @param message Stats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgAMGetUserGameStatsResponse.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Stats message, length delimited. Does not implicitly {@link CMsgAMGetUserGameStatsResponse.Stats.verify|verify} messages.
         * @param message Stats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgAMGetUserGameStatsResponse.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Stats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStatsResponse.Stats;

        /**
         * Decodes a Stats message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGetUserGameStatsResponse.Stats;

        /**
         * Verifies a Stats message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Stats message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Stats
         */
        public static fromObject(object: { [k: string]: any }): CMsgAMGetUserGameStatsResponse.Stats;

        /**
         * Creates a plain object from a Stats message. Also converts values to other types if specified.
         * @param message Stats
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgAMGetUserGameStatsResponse.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Stats to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Stats
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Achievement_Blocks. */
    interface IAchievement_Blocks {

        /** Achievement_Blocks achievementId */
        achievementId?: (number|null);

        /** Achievement_Blocks achievementBitId */
        achievementBitId?: (number|null);

        /** Achievement_Blocks unlockTime */
        unlockTime?: (number|null);
    }

    /** Represents an Achievement_Blocks. */
    class Achievement_Blocks implements IAchievement_Blocks {

        /**
         * Constructs a new Achievement_Blocks.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMGetUserGameStatsResponse.IAchievement_Blocks);

        /** Achievement_Blocks achievementId. */
        public achievementId: number;

        /** Achievement_Blocks achievementBitId. */
        public achievementBitId: number;

        /** Achievement_Blocks unlockTime. */
        public unlockTime: number;

        /**
         * Creates a new Achievement_Blocks instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Achievement_Blocks instance
         */
        public static create(properties?: CMsgAMGetUserGameStatsResponse.IAchievement_Blocks): CMsgAMGetUserGameStatsResponse.Achievement_Blocks;

        /**
         * Encodes the specified Achievement_Blocks message. Does not implicitly {@link CMsgAMGetUserGameStatsResponse.Achievement_Blocks.verify|verify} messages.
         * @param message Achievement_Blocks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgAMGetUserGameStatsResponse.IAchievement_Blocks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Achievement_Blocks message, length delimited. Does not implicitly {@link CMsgAMGetUserGameStatsResponse.Achievement_Blocks.verify|verify} messages.
         * @param message Achievement_Blocks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgAMGetUserGameStatsResponse.IAchievement_Blocks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Achievement_Blocks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Achievement_Blocks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStatsResponse.Achievement_Blocks;

        /**
         * Decodes an Achievement_Blocks message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Achievement_Blocks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGetUserGameStatsResponse.Achievement_Blocks;

        /**
         * Verifies an Achievement_Blocks message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Achievement_Blocks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Achievement_Blocks
         */
        public static fromObject(object: { [k: string]: any }): CMsgAMGetUserGameStatsResponse.Achievement_Blocks;

        /**
         * Creates a plain object from an Achievement_Blocks message. Also converts values to other types if specified.
         * @param message Achievement_Blocks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgAMGetUserGameStatsResponse.Achievement_Blocks, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Achievement_Blocks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Achievement_Blocks
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgGCGetCommandList. */
export class CMsgGCGetCommandList implements ICMsgGCGetCommandList {

    /**
     * Constructs a new CMsgGCGetCommandList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetCommandList);

    /** CMsgGCGetCommandList appId. */
    public appId: number;

    /** CMsgGCGetCommandList commandPrefix. */
    public commandPrefix: string;

    /**
     * Creates a new CMsgGCGetCommandList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetCommandList instance
     */
    public static create(properties?: ICMsgGCGetCommandList): CMsgGCGetCommandList;

    /**
     * Encodes the specified CMsgGCGetCommandList message. Does not implicitly {@link CMsgGCGetCommandList.verify|verify} messages.
     * @param message CMsgGCGetCommandList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetCommandList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetCommandList message, length delimited. Does not implicitly {@link CMsgGCGetCommandList.verify|verify} messages.
     * @param message CMsgGCGetCommandList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetCommandList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetCommandList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetCommandList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetCommandList;

    /**
     * Decodes a CMsgGCGetCommandList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetCommandList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetCommandList;

    /**
     * Verifies a CMsgGCGetCommandList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetCommandList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetCommandList
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetCommandList;

    /**
     * Creates a plain object from a CMsgGCGetCommandList message. Also converts values to other types if specified.
     * @param message CMsgGCGetCommandList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetCommandList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetCommandList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetCommandList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCGetCommandListResponse. */
export class CMsgGCGetCommandListResponse implements ICMsgGCGetCommandListResponse {

    /**
     * Constructs a new CMsgGCGetCommandListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetCommandListResponse);

    /** CMsgGCGetCommandListResponse commandName. */
    public commandName: string[];

    /**
     * Creates a new CMsgGCGetCommandListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetCommandListResponse instance
     */
    public static create(properties?: ICMsgGCGetCommandListResponse): CMsgGCGetCommandListResponse;

    /**
     * Encodes the specified CMsgGCGetCommandListResponse message. Does not implicitly {@link CMsgGCGetCommandListResponse.verify|verify} messages.
     * @param message CMsgGCGetCommandListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetCommandListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetCommandListResponse message, length delimited. Does not implicitly {@link CMsgGCGetCommandListResponse.verify|verify} messages.
     * @param message CMsgGCGetCommandListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetCommandListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetCommandListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetCommandListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetCommandListResponse;

    /**
     * Decodes a CMsgGCGetCommandListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetCommandListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetCommandListResponse;

    /**
     * Verifies a CMsgGCGetCommandListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetCommandListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetCommandListResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetCommandListResponse;

    /**
     * Creates a plain object from a CMsgGCGetCommandListResponse message. Also converts values to other types if specified.
     * @param message CMsgGCGetCommandListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetCommandListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetCommandListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetCommandListResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgMemCachedGet. */
export class CGCMsgMemCachedGet implements ICGCMsgMemCachedGet {

    /**
     * Constructs a new CGCMsgMemCachedGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedGet);

    /** CGCMsgMemCachedGet keys. */
    public keys: string[];

    /**
     * Creates a new CGCMsgMemCachedGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgMemCachedGet instance
     */
    public static create(properties?: ICGCMsgMemCachedGet): CGCMsgMemCachedGet;

    /**
     * Encodes the specified CGCMsgMemCachedGet message. Does not implicitly {@link CGCMsgMemCachedGet.verify|verify} messages.
     * @param message CGCMsgMemCachedGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgMemCachedGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgMemCachedGet message, length delimited. Does not implicitly {@link CGCMsgMemCachedGet.verify|verify} messages.
     * @param message CGCMsgMemCachedGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgMemCachedGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgMemCachedGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedGet;

    /**
     * Decodes a CGCMsgMemCachedGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgMemCachedGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedGet;

    /**
     * Verifies a CGCMsgMemCachedGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgMemCachedGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgMemCachedGet
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedGet;

    /**
     * Creates a plain object from a CGCMsgMemCachedGet message. Also converts values to other types if specified.
     * @param message CGCMsgMemCachedGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgMemCachedGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgMemCachedGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgMemCachedGet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgMemCachedGetResponse. */
export class CGCMsgMemCachedGetResponse implements ICGCMsgMemCachedGetResponse {

    /**
     * Constructs a new CGCMsgMemCachedGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedGetResponse);

    /** CGCMsgMemCachedGetResponse values. */
    public values: CGCMsgMemCachedGetResponse.IValueTag[];

    /**
     * Creates a new CGCMsgMemCachedGetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgMemCachedGetResponse instance
     */
    public static create(properties?: ICGCMsgMemCachedGetResponse): CGCMsgMemCachedGetResponse;

    /**
     * Encodes the specified CGCMsgMemCachedGetResponse message. Does not implicitly {@link CGCMsgMemCachedGetResponse.verify|verify} messages.
     * @param message CGCMsgMemCachedGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgMemCachedGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgMemCachedGetResponse message, length delimited. Does not implicitly {@link CGCMsgMemCachedGetResponse.verify|verify} messages.
     * @param message CGCMsgMemCachedGetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgMemCachedGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgMemCachedGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedGetResponse;

    /**
     * Decodes a CGCMsgMemCachedGetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgMemCachedGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedGetResponse;

    /**
     * Verifies a CGCMsgMemCachedGetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgMemCachedGetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgMemCachedGetResponse
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedGetResponse;

    /**
     * Creates a plain object from a CGCMsgMemCachedGetResponse message. Also converts values to other types if specified.
     * @param message CGCMsgMemCachedGetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgMemCachedGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgMemCachedGetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgMemCachedGetResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CGCMsgMemCachedGetResponse {

    /** Properties of a ValueTag. */
    interface IValueTag {

        /** ValueTag found */
        found?: (boolean|null);

        /** ValueTag value */
        value?: (Uint8Array|null);
    }

    /** Represents a ValueTag. */
    class ValueTag implements IValueTag {

        /**
         * Constructs a new ValueTag.
         * @param [properties] Properties to set
         */
        constructor(properties?: CGCMsgMemCachedGetResponse.IValueTag);

        /** ValueTag found. */
        public found: boolean;

        /** ValueTag value. */
        public value: Uint8Array;

        /**
         * Creates a new ValueTag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValueTag instance
         */
        public static create(properties?: CGCMsgMemCachedGetResponse.IValueTag): CGCMsgMemCachedGetResponse.ValueTag;

        /**
         * Encodes the specified ValueTag message. Does not implicitly {@link CGCMsgMemCachedGetResponse.ValueTag.verify|verify} messages.
         * @param message ValueTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CGCMsgMemCachedGetResponse.IValueTag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValueTag message, length delimited. Does not implicitly {@link CGCMsgMemCachedGetResponse.ValueTag.verify|verify} messages.
         * @param message ValueTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CGCMsgMemCachedGetResponse.IValueTag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValueTag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValueTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedGetResponse.ValueTag;

        /**
         * Decodes a ValueTag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValueTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedGetResponse.ValueTag;

        /**
         * Verifies a ValueTag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValueTag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValueTag
         */
        public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedGetResponse.ValueTag;

        /**
         * Creates a plain object from a ValueTag message. Also converts values to other types if specified.
         * @param message ValueTag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CGCMsgMemCachedGetResponse.ValueTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValueTag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ValueTag
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CGCMsgMemCachedSet. */
export class CGCMsgMemCachedSet implements ICGCMsgMemCachedSet {

    /**
     * Constructs a new CGCMsgMemCachedSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedSet);

    /** CGCMsgMemCachedSet keys. */
    public keys: CGCMsgMemCachedSet.IKeyPair[];

    /**
     * Creates a new CGCMsgMemCachedSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgMemCachedSet instance
     */
    public static create(properties?: ICGCMsgMemCachedSet): CGCMsgMemCachedSet;

    /**
     * Encodes the specified CGCMsgMemCachedSet message. Does not implicitly {@link CGCMsgMemCachedSet.verify|verify} messages.
     * @param message CGCMsgMemCachedSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgMemCachedSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgMemCachedSet message, length delimited. Does not implicitly {@link CGCMsgMemCachedSet.verify|verify} messages.
     * @param message CGCMsgMemCachedSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgMemCachedSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgMemCachedSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedSet;

    /**
     * Decodes a CGCMsgMemCachedSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgMemCachedSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedSet;

    /**
     * Verifies a CGCMsgMemCachedSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgMemCachedSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgMemCachedSet
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedSet;

    /**
     * Creates a plain object from a CGCMsgMemCachedSet message. Also converts values to other types if specified.
     * @param message CGCMsgMemCachedSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgMemCachedSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgMemCachedSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgMemCachedSet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CGCMsgMemCachedSet {

    /** Properties of a KeyPair. */
    interface IKeyPair {

        /** KeyPair name */
        name?: (string|null);

        /** KeyPair value */
        value?: (Uint8Array|null);
    }

    /** Represents a KeyPair. */
    class KeyPair implements IKeyPair {

        /**
         * Constructs a new KeyPair.
         * @param [properties] Properties to set
         */
        constructor(properties?: CGCMsgMemCachedSet.IKeyPair);

        /** KeyPair name. */
        public name: string;

        /** KeyPair value. */
        public value: Uint8Array;

        /**
         * Creates a new KeyPair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyPair instance
         */
        public static create(properties?: CGCMsgMemCachedSet.IKeyPair): CGCMsgMemCachedSet.KeyPair;

        /**
         * Encodes the specified KeyPair message. Does not implicitly {@link CGCMsgMemCachedSet.KeyPair.verify|verify} messages.
         * @param message KeyPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CGCMsgMemCachedSet.IKeyPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyPair message, length delimited. Does not implicitly {@link CGCMsgMemCachedSet.KeyPair.verify|verify} messages.
         * @param message KeyPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CGCMsgMemCachedSet.IKeyPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyPair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedSet.KeyPair;

        /**
         * Decodes a KeyPair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedSet.KeyPair;

        /**
         * Verifies a KeyPair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyPair message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyPair
         */
        public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedSet.KeyPair;

        /**
         * Creates a plain object from a KeyPair message. Also converts values to other types if specified.
         * @param message KeyPair
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CGCMsgMemCachedSet.KeyPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyPair to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyPair
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CGCMsgMemCachedDelete. */
export class CGCMsgMemCachedDelete implements ICGCMsgMemCachedDelete {

    /**
     * Constructs a new CGCMsgMemCachedDelete.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedDelete);

    /** CGCMsgMemCachedDelete keys. */
    public keys: string[];

    /**
     * Creates a new CGCMsgMemCachedDelete instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgMemCachedDelete instance
     */
    public static create(properties?: ICGCMsgMemCachedDelete): CGCMsgMemCachedDelete;

    /**
     * Encodes the specified CGCMsgMemCachedDelete message. Does not implicitly {@link CGCMsgMemCachedDelete.verify|verify} messages.
     * @param message CGCMsgMemCachedDelete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgMemCachedDelete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgMemCachedDelete message, length delimited. Does not implicitly {@link CGCMsgMemCachedDelete.verify|verify} messages.
     * @param message CGCMsgMemCachedDelete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgMemCachedDelete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgMemCachedDelete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedDelete;

    /**
     * Decodes a CGCMsgMemCachedDelete message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgMemCachedDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedDelete;

    /**
     * Verifies a CGCMsgMemCachedDelete message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgMemCachedDelete message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgMemCachedDelete
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedDelete;

    /**
     * Creates a plain object from a CGCMsgMemCachedDelete message. Also converts values to other types if specified.
     * @param message CGCMsgMemCachedDelete
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgMemCachedDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgMemCachedDelete to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgMemCachedDelete
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgMemCachedStats. */
export class CGCMsgMemCachedStats implements ICGCMsgMemCachedStats {

    /**
     * Constructs a new CGCMsgMemCachedStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedStats);

    /**
     * Creates a new CGCMsgMemCachedStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgMemCachedStats instance
     */
    public static create(properties?: ICGCMsgMemCachedStats): CGCMsgMemCachedStats;

    /**
     * Encodes the specified CGCMsgMemCachedStats message. Does not implicitly {@link CGCMsgMemCachedStats.verify|verify} messages.
     * @param message CGCMsgMemCachedStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgMemCachedStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgMemCachedStats message, length delimited. Does not implicitly {@link CGCMsgMemCachedStats.verify|verify} messages.
     * @param message CGCMsgMemCachedStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgMemCachedStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgMemCachedStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedStats;

    /**
     * Decodes a CGCMsgMemCachedStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgMemCachedStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedStats;

    /**
     * Verifies a CGCMsgMemCachedStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgMemCachedStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgMemCachedStats
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedStats;

    /**
     * Creates a plain object from a CGCMsgMemCachedStats message. Also converts values to other types if specified.
     * @param message CGCMsgMemCachedStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgMemCachedStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgMemCachedStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgMemCachedStats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgMemCachedStatsResponse. */
export class CGCMsgMemCachedStatsResponse implements ICGCMsgMemCachedStatsResponse {

    /**
     * Constructs a new CGCMsgMemCachedStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedStatsResponse);

    /** CGCMsgMemCachedStatsResponse currConnections. */
    public currConnections: (number|Long);

    /** CGCMsgMemCachedStatsResponse cmdGet. */
    public cmdGet: (number|Long);

    /** CGCMsgMemCachedStatsResponse cmdSet. */
    public cmdSet: (number|Long);

    /** CGCMsgMemCachedStatsResponse cmdFlush. */
    public cmdFlush: (number|Long);

    /** CGCMsgMemCachedStatsResponse getHits. */
    public getHits: (number|Long);

    /** CGCMsgMemCachedStatsResponse getMisses. */
    public getMisses: (number|Long);

    /** CGCMsgMemCachedStatsResponse deleteHits. */
    public deleteHits: (number|Long);

    /** CGCMsgMemCachedStatsResponse deleteMisses. */
    public deleteMisses: (number|Long);

    /** CGCMsgMemCachedStatsResponse bytesRead. */
    public bytesRead: (number|Long);

    /** CGCMsgMemCachedStatsResponse bytesWritten. */
    public bytesWritten: (number|Long);

    /** CGCMsgMemCachedStatsResponse limitMaxbytes. */
    public limitMaxbytes: (number|Long);

    /** CGCMsgMemCachedStatsResponse currItems. */
    public currItems: (number|Long);

    /** CGCMsgMemCachedStatsResponse evictions. */
    public evictions: (number|Long);

    /** CGCMsgMemCachedStatsResponse bytes. */
    public bytes: (number|Long);

    /**
     * Creates a new CGCMsgMemCachedStatsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgMemCachedStatsResponse instance
     */
    public static create(properties?: ICGCMsgMemCachedStatsResponse): CGCMsgMemCachedStatsResponse;

    /**
     * Encodes the specified CGCMsgMemCachedStatsResponse message. Does not implicitly {@link CGCMsgMemCachedStatsResponse.verify|verify} messages.
     * @param message CGCMsgMemCachedStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgMemCachedStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgMemCachedStatsResponse message, length delimited. Does not implicitly {@link CGCMsgMemCachedStatsResponse.verify|verify} messages.
     * @param message CGCMsgMemCachedStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgMemCachedStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgMemCachedStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedStatsResponse;

    /**
     * Decodes a CGCMsgMemCachedStatsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgMemCachedStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgMemCachedStatsResponse;

    /**
     * Verifies a CGCMsgMemCachedStatsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgMemCachedStatsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgMemCachedStatsResponse
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgMemCachedStatsResponse;

    /**
     * Creates a plain object from a CGCMsgMemCachedStatsResponse message. Also converts values to other types if specified.
     * @param message CGCMsgMemCachedStatsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgMemCachedStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgMemCachedStatsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgMemCachedStatsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgSQLStats. */
export class CGCMsgSQLStats implements ICGCMsgSQLStats {

    /**
     * Constructs a new CGCMsgSQLStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgSQLStats);

    /** CGCMsgSQLStats schemaCatalog. */
    public schemaCatalog: number;

    /**
     * Creates a new CGCMsgSQLStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgSQLStats instance
     */
    public static create(properties?: ICGCMsgSQLStats): CGCMsgSQLStats;

    /**
     * Encodes the specified CGCMsgSQLStats message. Does not implicitly {@link CGCMsgSQLStats.verify|verify} messages.
     * @param message CGCMsgSQLStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgSQLStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgSQLStats message, length delimited. Does not implicitly {@link CGCMsgSQLStats.verify|verify} messages.
     * @param message CGCMsgSQLStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgSQLStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgSQLStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgSQLStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgSQLStats;

    /**
     * Decodes a CGCMsgSQLStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgSQLStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgSQLStats;

    /**
     * Verifies a CGCMsgSQLStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgSQLStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgSQLStats
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgSQLStats;

    /**
     * Creates a plain object from a CGCMsgSQLStats message. Also converts values to other types if specified.
     * @param message CGCMsgSQLStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgSQLStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgSQLStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgSQLStats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgSQLStatsResponse. */
export class CGCMsgSQLStatsResponse implements ICGCMsgSQLStatsResponse {

    /**
     * Constructs a new CGCMsgSQLStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgSQLStatsResponse);

    /** CGCMsgSQLStatsResponse threads. */
    public threads: number;

    /** CGCMsgSQLStatsResponse threadsConnected. */
    public threadsConnected: number;

    /** CGCMsgSQLStatsResponse threadsActive. */
    public threadsActive: number;

    /** CGCMsgSQLStatsResponse operationsSubmitted. */
    public operationsSubmitted: number;

    /** CGCMsgSQLStatsResponse preparedStatementsExecuted. */
    public preparedStatementsExecuted: number;

    /** CGCMsgSQLStatsResponse nonPreparedStatementsExecuted. */
    public nonPreparedStatementsExecuted: number;

    /** CGCMsgSQLStatsResponse deadlockRetries. */
    public deadlockRetries: number;

    /** CGCMsgSQLStatsResponse operationsTimedOutInQueue. */
    public operationsTimedOutInQueue: number;

    /** CGCMsgSQLStatsResponse errors. */
    public errors: number;

    /**
     * Creates a new CGCMsgSQLStatsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgSQLStatsResponse instance
     */
    public static create(properties?: ICGCMsgSQLStatsResponse): CGCMsgSQLStatsResponse;

    /**
     * Encodes the specified CGCMsgSQLStatsResponse message. Does not implicitly {@link CGCMsgSQLStatsResponse.verify|verify} messages.
     * @param message CGCMsgSQLStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgSQLStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgSQLStatsResponse message, length delimited. Does not implicitly {@link CGCMsgSQLStatsResponse.verify|verify} messages.
     * @param message CGCMsgSQLStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgSQLStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgSQLStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgSQLStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgSQLStatsResponse;

    /**
     * Decodes a CGCMsgSQLStatsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgSQLStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgSQLStatsResponse;

    /**
     * Verifies a CGCMsgSQLStatsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgSQLStatsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgSQLStatsResponse
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgSQLStatsResponse;

    /**
     * Creates a plain object from a CGCMsgSQLStatsResponse message. Also converts values to other types if specified.
     * @param message CGCMsgSQLStatsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgSQLStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgSQLStatsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgSQLStatsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMAddFreeLicense. */
export class CMsgAMAddFreeLicense implements ICMsgAMAddFreeLicense {

    /**
     * Constructs a new CMsgAMAddFreeLicense.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMAddFreeLicense);

    /** CMsgAMAddFreeLicense steamid. */
    public steamid: (number|Long);

    /** CMsgAMAddFreeLicense ipPublic. */
    public ipPublic: number;

    /** CMsgAMAddFreeLicense packageid. */
    public packageid: number;

    /** CMsgAMAddFreeLicense storeCountryCode. */
    public storeCountryCode: string;

    /**
     * Creates a new CMsgAMAddFreeLicense instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMAddFreeLicense instance
     */
    public static create(properties?: ICMsgAMAddFreeLicense): CMsgAMAddFreeLicense;

    /**
     * Encodes the specified CMsgAMAddFreeLicense message. Does not implicitly {@link CMsgAMAddFreeLicense.verify|verify} messages.
     * @param message CMsgAMAddFreeLicense message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMAddFreeLicense, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMAddFreeLicense message, length delimited. Does not implicitly {@link CMsgAMAddFreeLicense.verify|verify} messages.
     * @param message CMsgAMAddFreeLicense message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMAddFreeLicense, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMAddFreeLicense message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMAddFreeLicense
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMAddFreeLicense;

    /**
     * Decodes a CMsgAMAddFreeLicense message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMAddFreeLicense
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMAddFreeLicense;

    /**
     * Verifies a CMsgAMAddFreeLicense message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMAddFreeLicense message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMAddFreeLicense
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMAddFreeLicense;

    /**
     * Creates a plain object from a CMsgAMAddFreeLicense message. Also converts values to other types if specified.
     * @param message CMsgAMAddFreeLicense
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMAddFreeLicense, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMAddFreeLicense to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMAddFreeLicense
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMAddFreeLicenseResponse. */
export class CMsgAMAddFreeLicenseResponse implements ICMsgAMAddFreeLicenseResponse {

    /**
     * Constructs a new CMsgAMAddFreeLicenseResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMAddFreeLicenseResponse);

    /** CMsgAMAddFreeLicenseResponse eresult. */
    public eresult: number;

    /** CMsgAMAddFreeLicenseResponse purchaseResultDetail. */
    public purchaseResultDetail: number;

    /** CMsgAMAddFreeLicenseResponse transid. */
    public transid: (number|Long);

    /**
     * Creates a new CMsgAMAddFreeLicenseResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMAddFreeLicenseResponse instance
     */
    public static create(properties?: ICMsgAMAddFreeLicenseResponse): CMsgAMAddFreeLicenseResponse;

    /**
     * Encodes the specified CMsgAMAddFreeLicenseResponse message. Does not implicitly {@link CMsgAMAddFreeLicenseResponse.verify|verify} messages.
     * @param message CMsgAMAddFreeLicenseResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMAddFreeLicenseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMAddFreeLicenseResponse message, length delimited. Does not implicitly {@link CMsgAMAddFreeLicenseResponse.verify|verify} messages.
     * @param message CMsgAMAddFreeLicenseResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMAddFreeLicenseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMAddFreeLicenseResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMAddFreeLicenseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMAddFreeLicenseResponse;

    /**
     * Decodes a CMsgAMAddFreeLicenseResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMAddFreeLicenseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMAddFreeLicenseResponse;

    /**
     * Verifies a CMsgAMAddFreeLicenseResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMAddFreeLicenseResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMAddFreeLicenseResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMAddFreeLicenseResponse;

    /**
     * Creates a plain object from a CMsgAMAddFreeLicenseResponse message. Also converts values to other types if specified.
     * @param message CMsgAMAddFreeLicenseResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMAddFreeLicenseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMAddFreeLicenseResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMAddFreeLicenseResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgGetIPLocation. */
export class CGCMsgGetIPLocation implements ICGCMsgGetIPLocation {

    /**
     * Constructs a new CGCMsgGetIPLocation.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetIPLocation);

    /** CGCMsgGetIPLocation ips. */
    public ips: number[];

    /**
     * Creates a new CGCMsgGetIPLocation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgGetIPLocation instance
     */
    public static create(properties?: ICGCMsgGetIPLocation): CGCMsgGetIPLocation;

    /**
     * Encodes the specified CGCMsgGetIPLocation message. Does not implicitly {@link CGCMsgGetIPLocation.verify|verify} messages.
     * @param message CGCMsgGetIPLocation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgGetIPLocation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgGetIPLocation message, length delimited. Does not implicitly {@link CGCMsgGetIPLocation.verify|verify} messages.
     * @param message CGCMsgGetIPLocation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgGetIPLocation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgGetIPLocation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetIPLocation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetIPLocation;

    /**
     * Decodes a CGCMsgGetIPLocation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgGetIPLocation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgGetIPLocation;

    /**
     * Verifies a CGCMsgGetIPLocation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgGetIPLocation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgGetIPLocation
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgGetIPLocation;

    /**
     * Creates a plain object from a CGCMsgGetIPLocation message. Also converts values to other types if specified.
     * @param message CGCMsgGetIPLocation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgGetIPLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgGetIPLocation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgGetIPLocation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CIPLocationInfo. */
export class CIPLocationInfo implements ICIPLocationInfo {

    /**
     * Constructs a new CIPLocationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICIPLocationInfo);

    /** CIPLocationInfo ip. */
    public ip: number;

    /** CIPLocationInfo latitude. */
    public latitude: number;

    /** CIPLocationInfo longitude. */
    public longitude: number;

    /** CIPLocationInfo country. */
    public country: string;

    /** CIPLocationInfo state. */
    public state: string;

    /** CIPLocationInfo city. */
    public city: string;

    /**
     * Creates a new CIPLocationInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CIPLocationInfo instance
     */
    public static create(properties?: ICIPLocationInfo): CIPLocationInfo;

    /**
     * Encodes the specified CIPLocationInfo message. Does not implicitly {@link CIPLocationInfo.verify|verify} messages.
     * @param message CIPLocationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICIPLocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CIPLocationInfo message, length delimited. Does not implicitly {@link CIPLocationInfo.verify|verify} messages.
     * @param message CIPLocationInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICIPLocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CIPLocationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CIPLocationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CIPLocationInfo;

    /**
     * Decodes a CIPLocationInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CIPLocationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CIPLocationInfo;

    /**
     * Verifies a CIPLocationInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CIPLocationInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CIPLocationInfo
     */
    public static fromObject(object: { [k: string]: any }): CIPLocationInfo;

    /**
     * Creates a plain object from a CIPLocationInfo message. Also converts values to other types if specified.
     * @param message CIPLocationInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CIPLocationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CIPLocationInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CIPLocationInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgGetIPLocationResponse. */
export class CGCMsgGetIPLocationResponse implements ICGCMsgGetIPLocationResponse {

    /**
     * Constructs a new CGCMsgGetIPLocationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetIPLocationResponse);

    /** CGCMsgGetIPLocationResponse infos. */
    public infos: ICIPLocationInfo[];

    /**
     * Creates a new CGCMsgGetIPLocationResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgGetIPLocationResponse instance
     */
    public static create(properties?: ICGCMsgGetIPLocationResponse): CGCMsgGetIPLocationResponse;

    /**
     * Encodes the specified CGCMsgGetIPLocationResponse message. Does not implicitly {@link CGCMsgGetIPLocationResponse.verify|verify} messages.
     * @param message CGCMsgGetIPLocationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgGetIPLocationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgGetIPLocationResponse message, length delimited. Does not implicitly {@link CGCMsgGetIPLocationResponse.verify|verify} messages.
     * @param message CGCMsgGetIPLocationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgGetIPLocationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgGetIPLocationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetIPLocationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetIPLocationResponse;

    /**
     * Decodes a CGCMsgGetIPLocationResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgGetIPLocationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgGetIPLocationResponse;

    /**
     * Verifies a CGCMsgGetIPLocationResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgGetIPLocationResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgGetIPLocationResponse
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgGetIPLocationResponse;

    /**
     * Creates a plain object from a CGCMsgGetIPLocationResponse message. Also converts values to other types if specified.
     * @param message CGCMsgGetIPLocationResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgGetIPLocationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgGetIPLocationResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgGetIPLocationResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgSystemStatsSchema. */
export class CGCMsgSystemStatsSchema implements ICGCMsgSystemStatsSchema {

    /**
     * Constructs a new CGCMsgSystemStatsSchema.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgSystemStatsSchema);

    /** CGCMsgSystemStatsSchema gcAppId. */
    public gcAppId: number;

    /** CGCMsgSystemStatsSchema schemaKv. */
    public schemaKv: Uint8Array;

    /**
     * Creates a new CGCMsgSystemStatsSchema instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgSystemStatsSchema instance
     */
    public static create(properties?: ICGCMsgSystemStatsSchema): CGCMsgSystemStatsSchema;

    /**
     * Encodes the specified CGCMsgSystemStatsSchema message. Does not implicitly {@link CGCMsgSystemStatsSchema.verify|verify} messages.
     * @param message CGCMsgSystemStatsSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgSystemStatsSchema, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgSystemStatsSchema message, length delimited. Does not implicitly {@link CGCMsgSystemStatsSchema.verify|verify} messages.
     * @param message CGCMsgSystemStatsSchema message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgSystemStatsSchema, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgSystemStatsSchema message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgSystemStatsSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgSystemStatsSchema;

    /**
     * Decodes a CGCMsgSystemStatsSchema message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgSystemStatsSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgSystemStatsSchema;

    /**
     * Verifies a CGCMsgSystemStatsSchema message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgSystemStatsSchema message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgSystemStatsSchema
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgSystemStatsSchema;

    /**
     * Creates a plain object from a CGCMsgSystemStatsSchema message. Also converts values to other types if specified.
     * @param message CGCMsgSystemStatsSchema
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgSystemStatsSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgSystemStatsSchema to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgSystemStatsSchema
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgGetSystemStats. */
export class CGCMsgGetSystemStats implements ICGCMsgGetSystemStats {

    /**
     * Constructs a new CGCMsgGetSystemStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetSystemStats);

    /**
     * Creates a new CGCMsgGetSystemStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgGetSystemStats instance
     */
    public static create(properties?: ICGCMsgGetSystemStats): CGCMsgGetSystemStats;

    /**
     * Encodes the specified CGCMsgGetSystemStats message. Does not implicitly {@link CGCMsgGetSystemStats.verify|verify} messages.
     * @param message CGCMsgGetSystemStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgGetSystemStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgGetSystemStats message, length delimited. Does not implicitly {@link CGCMsgGetSystemStats.verify|verify} messages.
     * @param message CGCMsgGetSystemStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgGetSystemStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgGetSystemStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetSystemStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetSystemStats;

    /**
     * Decodes a CGCMsgGetSystemStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgGetSystemStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgGetSystemStats;

    /**
     * Verifies a CGCMsgGetSystemStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgGetSystemStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgGetSystemStats
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgGetSystemStats;

    /**
     * Creates a plain object from a CGCMsgGetSystemStats message. Also converts values to other types if specified.
     * @param message CGCMsgGetSystemStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgGetSystemStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgGetSystemStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgGetSystemStats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCMsgGetSystemStatsResponse. */
export class CGCMsgGetSystemStatsResponse implements ICGCMsgGetSystemStatsResponse {

    /**
     * Constructs a new CGCMsgGetSystemStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetSystemStatsResponse);

    /** CGCMsgGetSystemStatsResponse gcAppId. */
    public gcAppId: number;

    /** CGCMsgGetSystemStatsResponse statsKv. */
    public statsKv: Uint8Array;

    /** CGCMsgGetSystemStatsResponse activeJobs. */
    public activeJobs: number;

    /** CGCMsgGetSystemStatsResponse yieldingJobs. */
    public yieldingJobs: number;

    /** CGCMsgGetSystemStatsResponse userSessions. */
    public userSessions: number;

    /** CGCMsgGetSystemStatsResponse gameServerSessions. */
    public gameServerSessions: number;

    /** CGCMsgGetSystemStatsResponse socaches. */
    public socaches: number;

    /** CGCMsgGetSystemStatsResponse socachesToUnload. */
    public socachesToUnload: number;

    /** CGCMsgGetSystemStatsResponse socachesLoading. */
    public socachesLoading: number;

    /** CGCMsgGetSystemStatsResponse writebackQueue. */
    public writebackQueue: number;

    /** CGCMsgGetSystemStatsResponse steamidLocks. */
    public steamidLocks: number;

    /** CGCMsgGetSystemStatsResponse logonQueue. */
    public logonQueue: number;

    /** CGCMsgGetSystemStatsResponse logonJobs. */
    public logonJobs: number;

    /**
     * Creates a new CGCMsgGetSystemStatsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCMsgGetSystemStatsResponse instance
     */
    public static create(properties?: ICGCMsgGetSystemStatsResponse): CGCMsgGetSystemStatsResponse;

    /**
     * Encodes the specified CGCMsgGetSystemStatsResponse message. Does not implicitly {@link CGCMsgGetSystemStatsResponse.verify|verify} messages.
     * @param message CGCMsgGetSystemStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCMsgGetSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCMsgGetSystemStatsResponse message, length delimited. Does not implicitly {@link CGCMsgGetSystemStatsResponse.verify|verify} messages.
     * @param message CGCMsgGetSystemStatsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCMsgGetSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCMsgGetSystemStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetSystemStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetSystemStatsResponse;

    /**
     * Decodes a CGCMsgGetSystemStatsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCMsgGetSystemStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCMsgGetSystemStatsResponse;

    /**
     * Verifies a CGCMsgGetSystemStatsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCMsgGetSystemStatsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCMsgGetSystemStatsResponse
     */
    public static fromObject(object: { [k: string]: any }): CGCMsgGetSystemStatsResponse;

    /**
     * Creates a plain object from a CGCMsgGetSystemStatsResponse message. Also converts values to other types if specified.
     * @param message CGCMsgGetSystemStatsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCMsgGetSystemStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCMsgGetSystemStatsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCMsgGetSystemStatsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMSendEmail. */
export class CMsgAMSendEmail implements ICMsgAMSendEmail {

    /**
     * Constructs a new CMsgAMSendEmail.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMSendEmail);

    /** CMsgAMSendEmail steamid. */
    public steamid: (number|Long);

    /** CMsgAMSendEmail emailMsgType. */
    public emailMsgType: number;

    /** CMsgAMSendEmail emailFormat. */
    public emailFormat: number;

    /** CMsgAMSendEmail personaNameTokens. */
    public personaNameTokens: CMsgAMSendEmail.IPersonaNameReplacementToken[];

    /** CMsgAMSendEmail sourceGc. */
    public sourceGc: number;

    /** CMsgAMSendEmail tokens. */
    public tokens: CMsgAMSendEmail.IReplacementToken[];

    /**
     * Creates a new CMsgAMSendEmail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMSendEmail instance
     */
    public static create(properties?: ICMsgAMSendEmail): CMsgAMSendEmail;

    /**
     * Encodes the specified CMsgAMSendEmail message. Does not implicitly {@link CMsgAMSendEmail.verify|verify} messages.
     * @param message CMsgAMSendEmail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMSendEmail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMSendEmail message, length delimited. Does not implicitly {@link CMsgAMSendEmail.verify|verify} messages.
     * @param message CMsgAMSendEmail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMSendEmail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMSendEmail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMSendEmail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmail;

    /**
     * Decodes a CMsgAMSendEmail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMSendEmail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMSendEmail;

    /**
     * Verifies a CMsgAMSendEmail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMSendEmail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMSendEmail
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMSendEmail;

    /**
     * Creates a plain object from a CMsgAMSendEmail message. Also converts values to other types if specified.
     * @param message CMsgAMSendEmail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMSendEmail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMSendEmail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMSendEmail
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgAMSendEmail {

    /** Properties of a ReplacementToken. */
    interface IReplacementToken {

        /** ReplacementToken tokenName */
        tokenName?: (string|null);

        /** ReplacementToken tokenValue */
        tokenValue?: (string|null);
    }

    /** Represents a ReplacementToken. */
    class ReplacementToken implements IReplacementToken {

        /**
         * Constructs a new ReplacementToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMSendEmail.IReplacementToken);

        /** ReplacementToken tokenName. */
        public tokenName: string;

        /** ReplacementToken tokenValue. */
        public tokenValue: string;

        /**
         * Creates a new ReplacementToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplacementToken instance
         */
        public static create(properties?: CMsgAMSendEmail.IReplacementToken): CMsgAMSendEmail.ReplacementToken;

        /**
         * Encodes the specified ReplacementToken message. Does not implicitly {@link CMsgAMSendEmail.ReplacementToken.verify|verify} messages.
         * @param message ReplacementToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgAMSendEmail.IReplacementToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplacementToken message, length delimited. Does not implicitly {@link CMsgAMSendEmail.ReplacementToken.verify|verify} messages.
         * @param message ReplacementToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgAMSendEmail.IReplacementToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplacementToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplacementToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmail.ReplacementToken;

        /**
         * Decodes a ReplacementToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplacementToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMSendEmail.ReplacementToken;

        /**
         * Verifies a ReplacementToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplacementToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplacementToken
         */
        public static fromObject(object: { [k: string]: any }): CMsgAMSendEmail.ReplacementToken;

        /**
         * Creates a plain object from a ReplacementToken message. Also converts values to other types if specified.
         * @param message ReplacementToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgAMSendEmail.ReplacementToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplacementToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplacementToken
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PersonaNameReplacementToken. */
    interface IPersonaNameReplacementToken {

        /** PersonaNameReplacementToken steamid */
        steamid?: (number|Long|null);

        /** PersonaNameReplacementToken tokenName */
        tokenName?: (string|null);
    }

    /** Represents a PersonaNameReplacementToken. */
    class PersonaNameReplacementToken implements IPersonaNameReplacementToken {

        /**
         * Constructs a new PersonaNameReplacementToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMSendEmail.IPersonaNameReplacementToken);

        /** PersonaNameReplacementToken steamid. */
        public steamid: (number|Long);

        /** PersonaNameReplacementToken tokenName. */
        public tokenName: string;

        /**
         * Creates a new PersonaNameReplacementToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PersonaNameReplacementToken instance
         */
        public static create(properties?: CMsgAMSendEmail.IPersonaNameReplacementToken): CMsgAMSendEmail.PersonaNameReplacementToken;

        /**
         * Encodes the specified PersonaNameReplacementToken message. Does not implicitly {@link CMsgAMSendEmail.PersonaNameReplacementToken.verify|verify} messages.
         * @param message PersonaNameReplacementToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgAMSendEmail.IPersonaNameReplacementToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PersonaNameReplacementToken message, length delimited. Does not implicitly {@link CMsgAMSendEmail.PersonaNameReplacementToken.verify|verify} messages.
         * @param message PersonaNameReplacementToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgAMSendEmail.IPersonaNameReplacementToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PersonaNameReplacementToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonaNameReplacementToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmail.PersonaNameReplacementToken;

        /**
         * Decodes a PersonaNameReplacementToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PersonaNameReplacementToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMSendEmail.PersonaNameReplacementToken;

        /**
         * Verifies a PersonaNameReplacementToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PersonaNameReplacementToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PersonaNameReplacementToken
         */
        public static fromObject(object: { [k: string]: any }): CMsgAMSendEmail.PersonaNameReplacementToken;

        /**
         * Creates a plain object from a PersonaNameReplacementToken message. Also converts values to other types if specified.
         * @param message PersonaNameReplacementToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgAMSendEmail.PersonaNameReplacementToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PersonaNameReplacementToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PersonaNameReplacementToken
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgAMSendEmailResponse. */
export class CMsgAMSendEmailResponse implements ICMsgAMSendEmailResponse {

    /**
     * Constructs a new CMsgAMSendEmailResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMSendEmailResponse);

    /** CMsgAMSendEmailResponse eresult. */
    public eresult: number;

    /**
     * Creates a new CMsgAMSendEmailResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMSendEmailResponse instance
     */
    public static create(properties?: ICMsgAMSendEmailResponse): CMsgAMSendEmailResponse;

    /**
     * Encodes the specified CMsgAMSendEmailResponse message. Does not implicitly {@link CMsgAMSendEmailResponse.verify|verify} messages.
     * @param message CMsgAMSendEmailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMSendEmailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMSendEmailResponse message, length delimited. Does not implicitly {@link CMsgAMSendEmailResponse.verify|verify} messages.
     * @param message CMsgAMSendEmailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMSendEmailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMSendEmailResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMSendEmailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmailResponse;

    /**
     * Decodes a CMsgAMSendEmailResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMSendEmailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMSendEmailResponse;

    /**
     * Verifies a CMsgAMSendEmailResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMSendEmailResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMSendEmailResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMSendEmailResponse;

    /**
     * Creates a plain object from a CMsgAMSendEmailResponse message. Also converts values to other types if specified.
     * @param message CMsgAMSendEmailResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMSendEmailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMSendEmailResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMSendEmailResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCGetEmailTemplate. */
export class CMsgGCGetEmailTemplate implements ICMsgGCGetEmailTemplate {

    /**
     * Constructs a new CMsgGCGetEmailTemplate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetEmailTemplate);

    /** CMsgGCGetEmailTemplate appId. */
    public appId: number;

    /** CMsgGCGetEmailTemplate emailMsgType. */
    public emailMsgType: number;

    /** CMsgGCGetEmailTemplate emailLang. */
    public emailLang: number;

    /** CMsgGCGetEmailTemplate emailFormat. */
    public emailFormat: number;

    /**
     * Creates a new CMsgGCGetEmailTemplate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetEmailTemplate instance
     */
    public static create(properties?: ICMsgGCGetEmailTemplate): CMsgGCGetEmailTemplate;

    /**
     * Encodes the specified CMsgGCGetEmailTemplate message. Does not implicitly {@link CMsgGCGetEmailTemplate.verify|verify} messages.
     * @param message CMsgGCGetEmailTemplate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetEmailTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetEmailTemplate message, length delimited. Does not implicitly {@link CMsgGCGetEmailTemplate.verify|verify} messages.
     * @param message CMsgGCGetEmailTemplate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetEmailTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetEmailTemplate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetEmailTemplate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetEmailTemplate;

    /**
     * Decodes a CMsgGCGetEmailTemplate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetEmailTemplate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetEmailTemplate;

    /**
     * Verifies a CMsgGCGetEmailTemplate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetEmailTemplate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetEmailTemplate
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetEmailTemplate;

    /**
     * Creates a plain object from a CMsgGCGetEmailTemplate message. Also converts values to other types if specified.
     * @param message CMsgGCGetEmailTemplate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetEmailTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetEmailTemplate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetEmailTemplate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCGetEmailTemplateResponse. */
export class CMsgGCGetEmailTemplateResponse implements ICMsgGCGetEmailTemplateResponse {

    /**
     * Constructs a new CMsgGCGetEmailTemplateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetEmailTemplateResponse);

    /** CMsgGCGetEmailTemplateResponse eresult. */
    public eresult: number;

    /** CMsgGCGetEmailTemplateResponse templateExists. */
    public templateExists: boolean;

    /** CMsgGCGetEmailTemplateResponse template. */
    public template: string;

    /**
     * Creates a new CMsgGCGetEmailTemplateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetEmailTemplateResponse instance
     */
    public static create(properties?: ICMsgGCGetEmailTemplateResponse): CMsgGCGetEmailTemplateResponse;

    /**
     * Encodes the specified CMsgGCGetEmailTemplateResponse message. Does not implicitly {@link CMsgGCGetEmailTemplateResponse.verify|verify} messages.
     * @param message CMsgGCGetEmailTemplateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetEmailTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetEmailTemplateResponse message, length delimited. Does not implicitly {@link CMsgGCGetEmailTemplateResponse.verify|verify} messages.
     * @param message CMsgGCGetEmailTemplateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetEmailTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetEmailTemplateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetEmailTemplateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetEmailTemplateResponse;

    /**
     * Decodes a CMsgGCGetEmailTemplateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetEmailTemplateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetEmailTemplateResponse;

    /**
     * Verifies a CMsgGCGetEmailTemplateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetEmailTemplateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetEmailTemplateResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetEmailTemplateResponse;

    /**
     * Creates a plain object from a CMsgGCGetEmailTemplateResponse message. Also converts values to other types if specified.
     * @param message CMsgGCGetEmailTemplateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetEmailTemplateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetEmailTemplateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetEmailTemplateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMGrantGuestPasses2. */
export class CMsgAMGrantGuestPasses2 implements ICMsgAMGrantGuestPasses2 {

    /**
     * Constructs a new CMsgAMGrantGuestPasses2.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGrantGuestPasses2);

    /** CMsgAMGrantGuestPasses2 steamId. */
    public steamId: (number|Long);

    /** CMsgAMGrantGuestPasses2 packageId. */
    public packageId: number;

    /** CMsgAMGrantGuestPasses2 passesToGrant. */
    public passesToGrant: number;

    /** CMsgAMGrantGuestPasses2 daysToExpiration. */
    public daysToExpiration: number;

    /** CMsgAMGrantGuestPasses2 action. */
    public action: number;

    /**
     * Creates a new CMsgAMGrantGuestPasses2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMGrantGuestPasses2 instance
     */
    public static create(properties?: ICMsgAMGrantGuestPasses2): CMsgAMGrantGuestPasses2;

    /**
     * Encodes the specified CMsgAMGrantGuestPasses2 message. Does not implicitly {@link CMsgAMGrantGuestPasses2.verify|verify} messages.
     * @param message CMsgAMGrantGuestPasses2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMGrantGuestPasses2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMGrantGuestPasses2 message, length delimited. Does not implicitly {@link CMsgAMGrantGuestPasses2.verify|verify} messages.
     * @param message CMsgAMGrantGuestPasses2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMGrantGuestPasses2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMGrantGuestPasses2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGrantGuestPasses2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGrantGuestPasses2;

    /**
     * Decodes a CMsgAMGrantGuestPasses2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMGrantGuestPasses2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGrantGuestPasses2;

    /**
     * Verifies a CMsgAMGrantGuestPasses2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMGrantGuestPasses2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMGrantGuestPasses2
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMGrantGuestPasses2;

    /**
     * Creates a plain object from a CMsgAMGrantGuestPasses2 message. Also converts values to other types if specified.
     * @param message CMsgAMGrantGuestPasses2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMGrantGuestPasses2, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMGrantGuestPasses2 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMGrantGuestPasses2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAMGrantGuestPasses2Response. */
export class CMsgAMGrantGuestPasses2Response implements ICMsgAMGrantGuestPasses2Response {

    /**
     * Constructs a new CMsgAMGrantGuestPasses2Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGrantGuestPasses2Response);

    /** CMsgAMGrantGuestPasses2Response eresult. */
    public eresult: number;

    /** CMsgAMGrantGuestPasses2Response passesGranted. */
    public passesGranted: number;

    /**
     * Creates a new CMsgAMGrantGuestPasses2Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAMGrantGuestPasses2Response instance
     */
    public static create(properties?: ICMsgAMGrantGuestPasses2Response): CMsgAMGrantGuestPasses2Response;

    /**
     * Encodes the specified CMsgAMGrantGuestPasses2Response message. Does not implicitly {@link CMsgAMGrantGuestPasses2Response.verify|verify} messages.
     * @param message CMsgAMGrantGuestPasses2Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAMGrantGuestPasses2Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAMGrantGuestPasses2Response message, length delimited. Does not implicitly {@link CMsgAMGrantGuestPasses2Response.verify|verify} messages.
     * @param message CMsgAMGrantGuestPasses2Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAMGrantGuestPasses2Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAMGrantGuestPasses2Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGrantGuestPasses2Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGrantGuestPasses2Response;

    /**
     * Decodes a CMsgAMGrantGuestPasses2Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAMGrantGuestPasses2Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAMGrantGuestPasses2Response;

    /**
     * Verifies a CMsgAMGrantGuestPasses2Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAMGrantGuestPasses2Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAMGrantGuestPasses2Response
     */
    public static fromObject(object: { [k: string]: any }): CMsgAMGrantGuestPasses2Response;

    /**
     * Creates a plain object from a CMsgAMGrantGuestPasses2Response message. Also converts values to other types if specified.
     * @param message CMsgAMGrantGuestPasses2Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAMGrantGuestPasses2Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAMGrantGuestPasses2Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAMGrantGuestPasses2Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCSystemMsg_GetAccountDetails. */
export class CGCSystemMsg_GetAccountDetails implements ICGCSystemMsg_GetAccountDetails {

    /**
     * Constructs a new CGCSystemMsg_GetAccountDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetAccountDetails);

    /** CGCSystemMsg_GetAccountDetails steamid. */
    public steamid: (number|Long);

    /** CGCSystemMsg_GetAccountDetails appid. */
    public appid: number;

    /**
     * Creates a new CGCSystemMsg_GetAccountDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCSystemMsg_GetAccountDetails instance
     */
    public static create(properties?: ICGCSystemMsg_GetAccountDetails): CGCSystemMsg_GetAccountDetails;

    /**
     * Encodes the specified CGCSystemMsg_GetAccountDetails message. Does not implicitly {@link CGCSystemMsg_GetAccountDetails.verify|verify} messages.
     * @param message CGCSystemMsg_GetAccountDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCSystemMsg_GetAccountDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCSystemMsg_GetAccountDetails message, length delimited. Does not implicitly {@link CGCSystemMsg_GetAccountDetails.verify|verify} messages.
     * @param message CGCSystemMsg_GetAccountDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCSystemMsg_GetAccountDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCSystemMsg_GetAccountDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetAccountDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetAccountDetails;

    /**
     * Decodes a CGCSystemMsg_GetAccountDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCSystemMsg_GetAccountDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCSystemMsg_GetAccountDetails;

    /**
     * Verifies a CGCSystemMsg_GetAccountDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCSystemMsg_GetAccountDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCSystemMsg_GetAccountDetails
     */
    public static fromObject(object: { [k: string]: any }): CGCSystemMsg_GetAccountDetails;

    /**
     * Creates a plain object from a CGCSystemMsg_GetAccountDetails message. Also converts values to other types if specified.
     * @param message CGCSystemMsg_GetAccountDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCSystemMsg_GetAccountDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCSystemMsg_GetAccountDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCSystemMsg_GetAccountDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCSystemMsg_GetAccountDetails_Response. */
export class CGCSystemMsg_GetAccountDetails_Response implements ICGCSystemMsg_GetAccountDetails_Response {

    /**
     * Constructs a new CGCSystemMsg_GetAccountDetails_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetAccountDetails_Response);

    /** CGCSystemMsg_GetAccountDetails_Response eresultDeprecated. */
    public eresultDeprecated: number;

    /** CGCSystemMsg_GetAccountDetails_Response accountName. */
    public accountName: string;

    /** CGCSystemMsg_GetAccountDetails_Response personaName. */
    public personaName: string;

    /** CGCSystemMsg_GetAccountDetails_Response isProfilePublic. */
    public isProfilePublic: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isInventoryPublic. */
    public isInventoryPublic: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isVacBanned. */
    public isVacBanned: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isCyberCafe. */
    public isCyberCafe: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isSchoolAccount. */
    public isSchoolAccount: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isLimited. */
    public isLimited: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isSubscribed. */
    public isSubscribed: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response package. */
    public package: number;

    /** CGCSystemMsg_GetAccountDetails_Response isFreeTrialAccount. */
    public isFreeTrialAccount: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response freeTrialExpiration. */
    public freeTrialExpiration: number;

    /** CGCSystemMsg_GetAccountDetails_Response isLowViolence. */
    public isLowViolence: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isAccountLockedDown. */
    public isAccountLockedDown: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isCommunityBanned. */
    public isCommunityBanned: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isTradeBanned. */
    public isTradeBanned: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response tradeBanExpiration. */
    public tradeBanExpiration: number;

    /** CGCSystemMsg_GetAccountDetails_Response accountid. */
    public accountid: number;

    /** CGCSystemMsg_GetAccountDetails_Response suspensionEndTime. */
    public suspensionEndTime: number;

    /** CGCSystemMsg_GetAccountDetails_Response currency. */
    public currency: string;

    /** CGCSystemMsg_GetAccountDetails_Response steamLevel. */
    public steamLevel: number;

    /** CGCSystemMsg_GetAccountDetails_Response friendCount. */
    public friendCount: number;

    /** CGCSystemMsg_GetAccountDetails_Response accountCreationTime. */
    public accountCreationTime: number;

    /** CGCSystemMsg_GetAccountDetails_Response isSteamguardEnabled. */
    public isSteamguardEnabled: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isPhoneVerified. */
    public isPhoneVerified: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isTwoFactorAuthEnabled. */
    public isTwoFactorAuthEnabled: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response twoFactorEnabledTime. */
    public twoFactorEnabledTime: number;

    /** CGCSystemMsg_GetAccountDetails_Response phoneVerificationTime. */
    public phoneVerificationTime: number;

    /** CGCSystemMsg_GetAccountDetails_Response phoneId. */
    public phoneId: (number|Long);

    /** CGCSystemMsg_GetAccountDetails_Response isPhoneIdentifying. */
    public isPhoneIdentifying: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response rtIdentityLinked. */
    public rtIdentityLinked: number;

    /** CGCSystemMsg_GetAccountDetails_Response rtBirthDate. */
    public rtBirthDate: number;

    /** CGCSystemMsg_GetAccountDetails_Response txnCountryCode. */
    public txnCountryCode: string;

    /** CGCSystemMsg_GetAccountDetails_Response hasAcceptedChinaSsa. */
    public hasAcceptedChinaSsa: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isBannedSteamChina. */
    public isBannedSteamChina: boolean;

    /**
     * Creates a new CGCSystemMsg_GetAccountDetails_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCSystemMsg_GetAccountDetails_Response instance
     */
    public static create(properties?: ICGCSystemMsg_GetAccountDetails_Response): CGCSystemMsg_GetAccountDetails_Response;

    /**
     * Encodes the specified CGCSystemMsg_GetAccountDetails_Response message. Does not implicitly {@link CGCSystemMsg_GetAccountDetails_Response.verify|verify} messages.
     * @param message CGCSystemMsg_GetAccountDetails_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCSystemMsg_GetAccountDetails_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCSystemMsg_GetAccountDetails_Response message, length delimited. Does not implicitly {@link CGCSystemMsg_GetAccountDetails_Response.verify|verify} messages.
     * @param message CGCSystemMsg_GetAccountDetails_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCSystemMsg_GetAccountDetails_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCSystemMsg_GetAccountDetails_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetAccountDetails_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetAccountDetails_Response;

    /**
     * Decodes a CGCSystemMsg_GetAccountDetails_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCSystemMsg_GetAccountDetails_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCSystemMsg_GetAccountDetails_Response;

    /**
     * Verifies a CGCSystemMsg_GetAccountDetails_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCSystemMsg_GetAccountDetails_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCSystemMsg_GetAccountDetails_Response
     */
    public static fromObject(object: { [k: string]: any }): CGCSystemMsg_GetAccountDetails_Response;

    /**
     * Creates a plain object from a CGCSystemMsg_GetAccountDetails_Response message. Also converts values to other types if specified.
     * @param message CGCSystemMsg_GetAccountDetails_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCSystemMsg_GetAccountDetails_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCSystemMsg_GetAccountDetails_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCSystemMsg_GetAccountDetails_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCGetPersonaNames. */
export class CMsgGCGetPersonaNames implements ICMsgGCGetPersonaNames {

    /**
     * Constructs a new CMsgGCGetPersonaNames.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPersonaNames);

    /** CMsgGCGetPersonaNames steamids. */
    public steamids: (number|Long)[];

    /**
     * Creates a new CMsgGCGetPersonaNames instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetPersonaNames instance
     */
    public static create(properties?: ICMsgGCGetPersonaNames): CMsgGCGetPersonaNames;

    /**
     * Encodes the specified CMsgGCGetPersonaNames message. Does not implicitly {@link CMsgGCGetPersonaNames.verify|verify} messages.
     * @param message CMsgGCGetPersonaNames message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetPersonaNames, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetPersonaNames message, length delimited. Does not implicitly {@link CMsgGCGetPersonaNames.verify|verify} messages.
     * @param message CMsgGCGetPersonaNames message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetPersonaNames, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetPersonaNames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPersonaNames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPersonaNames;

    /**
     * Decodes a CMsgGCGetPersonaNames message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetPersonaNames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetPersonaNames;

    /**
     * Verifies a CMsgGCGetPersonaNames message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetPersonaNames message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetPersonaNames
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetPersonaNames;

    /**
     * Creates a plain object from a CMsgGCGetPersonaNames message. Also converts values to other types if specified.
     * @param message CMsgGCGetPersonaNames
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetPersonaNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetPersonaNames to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetPersonaNames
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCGetPersonaNames_Response. */
export class CMsgGCGetPersonaNames_Response implements ICMsgGCGetPersonaNames_Response {

    /**
     * Constructs a new CMsgGCGetPersonaNames_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPersonaNames_Response);

    /** CMsgGCGetPersonaNames_Response succeededLookups. */
    public succeededLookups: CMsgGCGetPersonaNames_Response.IPersonaName[];

    /** CMsgGCGetPersonaNames_Response failedLookupSteamids. */
    public failedLookupSteamids: (number|Long)[];

    /**
     * Creates a new CMsgGCGetPersonaNames_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetPersonaNames_Response instance
     */
    public static create(properties?: ICMsgGCGetPersonaNames_Response): CMsgGCGetPersonaNames_Response;

    /**
     * Encodes the specified CMsgGCGetPersonaNames_Response message. Does not implicitly {@link CMsgGCGetPersonaNames_Response.verify|verify} messages.
     * @param message CMsgGCGetPersonaNames_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetPersonaNames_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetPersonaNames_Response message, length delimited. Does not implicitly {@link CMsgGCGetPersonaNames_Response.verify|verify} messages.
     * @param message CMsgGCGetPersonaNames_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetPersonaNames_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetPersonaNames_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPersonaNames_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPersonaNames_Response;

    /**
     * Decodes a CMsgGCGetPersonaNames_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetPersonaNames_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetPersonaNames_Response;

    /**
     * Verifies a CMsgGCGetPersonaNames_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetPersonaNames_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetPersonaNames_Response
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetPersonaNames_Response;

    /**
     * Creates a plain object from a CMsgGCGetPersonaNames_Response message. Also converts values to other types if specified.
     * @param message CMsgGCGetPersonaNames_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetPersonaNames_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetPersonaNames_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetPersonaNames_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGCGetPersonaNames_Response {

    /** Properties of a PersonaName. */
    interface IPersonaName {

        /** PersonaName steamid */
        steamid?: (number|Long|null);

        /** PersonaName personaName */
        personaName?: (string|null);
    }

    /** Represents a PersonaName. */
    class PersonaName implements IPersonaName {

        /**
         * Constructs a new PersonaName.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCGetPersonaNames_Response.IPersonaName);

        /** PersonaName steamid. */
        public steamid: (number|Long);

        /** PersonaName personaName. */
        public personaName: string;

        /**
         * Creates a new PersonaName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PersonaName instance
         */
        public static create(properties?: CMsgGCGetPersonaNames_Response.IPersonaName): CMsgGCGetPersonaNames_Response.PersonaName;

        /**
         * Encodes the specified PersonaName message. Does not implicitly {@link CMsgGCGetPersonaNames_Response.PersonaName.verify|verify} messages.
         * @param message PersonaName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgGCGetPersonaNames_Response.IPersonaName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PersonaName message, length delimited. Does not implicitly {@link CMsgGCGetPersonaNames_Response.PersonaName.verify|verify} messages.
         * @param message PersonaName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgGCGetPersonaNames_Response.IPersonaName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PersonaName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonaName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPersonaNames_Response.PersonaName;

        /**
         * Decodes a PersonaName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PersonaName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetPersonaNames_Response.PersonaName;

        /**
         * Verifies a PersonaName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PersonaName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PersonaName
         */
        public static fromObject(object: { [k: string]: any }): CMsgGCGetPersonaNames_Response.PersonaName;

        /**
         * Creates a plain object from a PersonaName message. Also converts values to other types if specified.
         * @param message PersonaName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgGCGetPersonaNames_Response.PersonaName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PersonaName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PersonaName
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgGCCheckFriendship. */
export class CMsgGCCheckFriendship implements ICMsgGCCheckFriendship {

    /**
     * Constructs a new CMsgGCCheckFriendship.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCheckFriendship);

    /** CMsgGCCheckFriendship steamidLeft. */
    public steamidLeft: (number|Long);

    /** CMsgGCCheckFriendship steamidRight. */
    public steamidRight: (number|Long);

    /**
     * Creates a new CMsgGCCheckFriendship instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCCheckFriendship instance
     */
    public static create(properties?: ICMsgGCCheckFriendship): CMsgGCCheckFriendship;

    /**
     * Encodes the specified CMsgGCCheckFriendship message. Does not implicitly {@link CMsgGCCheckFriendship.verify|verify} messages.
     * @param message CMsgGCCheckFriendship message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCCheckFriendship, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCCheckFriendship message, length delimited. Does not implicitly {@link CMsgGCCheckFriendship.verify|verify} messages.
     * @param message CMsgGCCheckFriendship message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCCheckFriendship, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCCheckFriendship message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCheckFriendship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCheckFriendship;

    /**
     * Decodes a CMsgGCCheckFriendship message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCCheckFriendship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCCheckFriendship;

    /**
     * Verifies a CMsgGCCheckFriendship message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCCheckFriendship message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCCheckFriendship
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCCheckFriendship;

    /**
     * Creates a plain object from a CMsgGCCheckFriendship message. Also converts values to other types if specified.
     * @param message CMsgGCCheckFriendship
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCCheckFriendship, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCCheckFriendship to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCCheckFriendship
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCCheckFriendship_Response. */
export class CMsgGCCheckFriendship_Response implements ICMsgGCCheckFriendship_Response {

    /**
     * Constructs a new CMsgGCCheckFriendship_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCheckFriendship_Response);

    /** CMsgGCCheckFriendship_Response success. */
    public success: boolean;

    /** CMsgGCCheckFriendship_Response foundFriendship. */
    public foundFriendship: boolean;

    /**
     * Creates a new CMsgGCCheckFriendship_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCCheckFriendship_Response instance
     */
    public static create(properties?: ICMsgGCCheckFriendship_Response): CMsgGCCheckFriendship_Response;

    /**
     * Encodes the specified CMsgGCCheckFriendship_Response message. Does not implicitly {@link CMsgGCCheckFriendship_Response.verify|verify} messages.
     * @param message CMsgGCCheckFriendship_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCCheckFriendship_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCCheckFriendship_Response message, length delimited. Does not implicitly {@link CMsgGCCheckFriendship_Response.verify|verify} messages.
     * @param message CMsgGCCheckFriendship_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCCheckFriendship_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCCheckFriendship_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCheckFriendship_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCheckFriendship_Response;

    /**
     * Decodes a CMsgGCCheckFriendship_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCCheckFriendship_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCCheckFriendship_Response;

    /**
     * Verifies a CMsgGCCheckFriendship_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCCheckFriendship_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCCheckFriendship_Response
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCCheckFriendship_Response;

    /**
     * Creates a plain object from a CMsgGCCheckFriendship_Response message. Also converts values to other types if specified.
     * @param message CMsgGCCheckFriendship_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCCheckFriendship_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCCheckFriendship_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCCheckFriendship_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCMsgMasterSetDirectory. */
export class CMsgGCMsgMasterSetDirectory implements ICMsgGCMsgMasterSetDirectory {

    /**
     * Constructs a new CMsgGCMsgMasterSetDirectory.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetDirectory);

    /** CMsgGCMsgMasterSetDirectory masterDirIndex. */
    public masterDirIndex: number;

    /** CMsgGCMsgMasterSetDirectory dir. */
    public dir: CMsgGCMsgMasterSetDirectory.ISubGC[];

    /**
     * Creates a new CMsgGCMsgMasterSetDirectory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgMasterSetDirectory instance
     */
    public static create(properties?: ICMsgGCMsgMasterSetDirectory): CMsgGCMsgMasterSetDirectory;

    /**
     * Encodes the specified CMsgGCMsgMasterSetDirectory message. Does not implicitly {@link CMsgGCMsgMasterSetDirectory.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetDirectory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgMasterSetDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgMasterSetDirectory message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetDirectory.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetDirectory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgMasterSetDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgMasterSetDirectory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetDirectory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetDirectory;

    /**
     * Decodes a CMsgGCMsgMasterSetDirectory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgMasterSetDirectory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetDirectory;

    /**
     * Verifies a CMsgGCMsgMasterSetDirectory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgMasterSetDirectory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgMasterSetDirectory
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetDirectory;

    /**
     * Creates a plain object from a CMsgGCMsgMasterSetDirectory message. Also converts values to other types if specified.
     * @param message CMsgGCMsgMasterSetDirectory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgMasterSetDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgMasterSetDirectory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgMasterSetDirectory
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGCMsgMasterSetDirectory {

    /** Properties of a SubGC. */
    interface ISubGC {

        /** SubGC dirIndex */
        dirIndex?: (number|null);

        /** SubGC name */
        name?: (string|null);

        /** SubGC box */
        box?: (string|null);

        /** SubGC commandLine */
        commandLine?: (string|null);

        /** SubGC gcBinary */
        gcBinary?: (string|null);
    }

    /** Represents a SubGC. */
    class SubGC implements ISubGC {

        /**
         * Constructs a new SubGC.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgMasterSetDirectory.ISubGC);

        /** SubGC dirIndex. */
        public dirIndex: number;

        /** SubGC name. */
        public name: string;

        /** SubGC box. */
        public box: string;

        /** SubGC commandLine. */
        public commandLine: string;

        /** SubGC gcBinary. */
        public gcBinary: string;

        /**
         * Creates a new SubGC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubGC instance
         */
        public static create(properties?: CMsgGCMsgMasterSetDirectory.ISubGC): CMsgGCMsgMasterSetDirectory.SubGC;

        /**
         * Encodes the specified SubGC message. Does not implicitly {@link CMsgGCMsgMasterSetDirectory.SubGC.verify|verify} messages.
         * @param message SubGC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgGCMsgMasterSetDirectory.ISubGC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubGC message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetDirectory.SubGC.verify|verify} messages.
         * @param message SubGC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgGCMsgMasterSetDirectory.ISubGC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubGC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubGC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetDirectory.SubGC;

        /**
         * Decodes a SubGC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubGC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetDirectory.SubGC;

        /**
         * Verifies a SubGC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubGC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubGC
         */
        public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetDirectory.SubGC;

        /**
         * Creates a plain object from a SubGC message. Also converts values to other types if specified.
         * @param message SubGC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgGCMsgMasterSetDirectory.SubGC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubGC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubGC
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgGCMsgMasterSetDirectory_Response. */
export class CMsgGCMsgMasterSetDirectory_Response implements ICMsgGCMsgMasterSetDirectory_Response {

    /**
     * Constructs a new CMsgGCMsgMasterSetDirectory_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetDirectory_Response);

    /** CMsgGCMsgMasterSetDirectory_Response eresult. */
    public eresult: number;

    /** CMsgGCMsgMasterSetDirectory_Response message. */
    public message: string;

    /**
     * Creates a new CMsgGCMsgMasterSetDirectory_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgMasterSetDirectory_Response instance
     */
    public static create(properties?: ICMsgGCMsgMasterSetDirectory_Response): CMsgGCMsgMasterSetDirectory_Response;

    /**
     * Encodes the specified CMsgGCMsgMasterSetDirectory_Response message. Does not implicitly {@link CMsgGCMsgMasterSetDirectory_Response.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetDirectory_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgMasterSetDirectory_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgMasterSetDirectory_Response message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetDirectory_Response.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetDirectory_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgMasterSetDirectory_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgMasterSetDirectory_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetDirectory_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetDirectory_Response;

    /**
     * Decodes a CMsgGCMsgMasterSetDirectory_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgMasterSetDirectory_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetDirectory_Response;

    /**
     * Verifies a CMsgGCMsgMasterSetDirectory_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgMasterSetDirectory_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgMasterSetDirectory_Response
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetDirectory_Response;

    /**
     * Creates a plain object from a CMsgGCMsgMasterSetDirectory_Response message. Also converts values to other types if specified.
     * @param message CMsgGCMsgMasterSetDirectory_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgMasterSetDirectory_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgMasterSetDirectory_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgMasterSetDirectory_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCMsgWebAPIJobRequestForwardResponse. */
export class CMsgGCMsgWebAPIJobRequestForwardResponse implements ICMsgGCMsgWebAPIJobRequestForwardResponse {

    /**
     * Constructs a new CMsgGCMsgWebAPIJobRequestForwardResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgWebAPIJobRequestForwardResponse);

    /** CMsgGCMsgWebAPIJobRequestForwardResponse dirIndex. */
    public dirIndex: number;

    /**
     * Creates a new CMsgGCMsgWebAPIJobRequestForwardResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgWebAPIJobRequestForwardResponse instance
     */
    public static create(properties?: ICMsgGCMsgWebAPIJobRequestForwardResponse): CMsgGCMsgWebAPIJobRequestForwardResponse;

    /**
     * Encodes the specified CMsgGCMsgWebAPIJobRequestForwardResponse message. Does not implicitly {@link CMsgGCMsgWebAPIJobRequestForwardResponse.verify|verify} messages.
     * @param message CMsgGCMsgWebAPIJobRequestForwardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgWebAPIJobRequestForwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgWebAPIJobRequestForwardResponse message, length delimited. Does not implicitly {@link CMsgGCMsgWebAPIJobRequestForwardResponse.verify|verify} messages.
     * @param message CMsgGCMsgWebAPIJobRequestForwardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgWebAPIJobRequestForwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgWebAPIJobRequestForwardResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgWebAPIJobRequestForwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgWebAPIJobRequestForwardResponse;

    /**
     * Decodes a CMsgGCMsgWebAPIJobRequestForwardResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgWebAPIJobRequestForwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgWebAPIJobRequestForwardResponse;

    /**
     * Verifies a CMsgGCMsgWebAPIJobRequestForwardResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgWebAPIJobRequestForwardResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgWebAPIJobRequestForwardResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgWebAPIJobRequestForwardResponse;

    /**
     * Creates a plain object from a CMsgGCMsgWebAPIJobRequestForwardResponse message. Also converts values to other types if specified.
     * @param message CMsgGCMsgWebAPIJobRequestForwardResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgWebAPIJobRequestForwardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgWebAPIJobRequestForwardResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgWebAPIJobRequestForwardResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCSystemMsg_GetPurchaseTrust_Request. */
export class CGCSystemMsg_GetPurchaseTrust_Request implements ICGCSystemMsg_GetPurchaseTrust_Request {

    /**
     * Constructs a new CGCSystemMsg_GetPurchaseTrust_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetPurchaseTrust_Request);

    /** CGCSystemMsg_GetPurchaseTrust_Request steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CGCSystemMsg_GetPurchaseTrust_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCSystemMsg_GetPurchaseTrust_Request instance
     */
    public static create(properties?: ICGCSystemMsg_GetPurchaseTrust_Request): CGCSystemMsg_GetPurchaseTrust_Request;

    /**
     * Encodes the specified CGCSystemMsg_GetPurchaseTrust_Request message. Does not implicitly {@link CGCSystemMsg_GetPurchaseTrust_Request.verify|verify} messages.
     * @param message CGCSystemMsg_GetPurchaseTrust_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCSystemMsg_GetPurchaseTrust_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCSystemMsg_GetPurchaseTrust_Request message, length delimited. Does not implicitly {@link CGCSystemMsg_GetPurchaseTrust_Request.verify|verify} messages.
     * @param message CGCSystemMsg_GetPurchaseTrust_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCSystemMsg_GetPurchaseTrust_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCSystemMsg_GetPurchaseTrust_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetPurchaseTrust_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetPurchaseTrust_Request;

    /**
     * Decodes a CGCSystemMsg_GetPurchaseTrust_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCSystemMsg_GetPurchaseTrust_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCSystemMsg_GetPurchaseTrust_Request;

    /**
     * Verifies a CGCSystemMsg_GetPurchaseTrust_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCSystemMsg_GetPurchaseTrust_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCSystemMsg_GetPurchaseTrust_Request
     */
    public static fromObject(object: { [k: string]: any }): CGCSystemMsg_GetPurchaseTrust_Request;

    /**
     * Creates a plain object from a CGCSystemMsg_GetPurchaseTrust_Request message. Also converts values to other types if specified.
     * @param message CGCSystemMsg_GetPurchaseTrust_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCSystemMsg_GetPurchaseTrust_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCSystemMsg_GetPurchaseTrust_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCSystemMsg_GetPurchaseTrust_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CGCSystemMsg_GetPurchaseTrust_Response. */
export class CGCSystemMsg_GetPurchaseTrust_Response implements ICGCSystemMsg_GetPurchaseTrust_Response {

    /**
     * Constructs a new CGCSystemMsg_GetPurchaseTrust_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetPurchaseTrust_Response);

    /** CGCSystemMsg_GetPurchaseTrust_Response hasPriorPurchaseHistory. */
    public hasPriorPurchaseHistory: boolean;

    /** CGCSystemMsg_GetPurchaseTrust_Response hasNoRecentPasswordResets. */
    public hasNoRecentPasswordResets: boolean;

    /** CGCSystemMsg_GetPurchaseTrust_Response isWalletCashTrusted. */
    public isWalletCashTrusted: boolean;

    /** CGCSystemMsg_GetPurchaseTrust_Response timeAllTrusted. */
    public timeAllTrusted: number;

    /**
     * Creates a new CGCSystemMsg_GetPurchaseTrust_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CGCSystemMsg_GetPurchaseTrust_Response instance
     */
    public static create(properties?: ICGCSystemMsg_GetPurchaseTrust_Response): CGCSystemMsg_GetPurchaseTrust_Response;

    /**
     * Encodes the specified CGCSystemMsg_GetPurchaseTrust_Response message. Does not implicitly {@link CGCSystemMsg_GetPurchaseTrust_Response.verify|verify} messages.
     * @param message CGCSystemMsg_GetPurchaseTrust_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICGCSystemMsg_GetPurchaseTrust_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CGCSystemMsg_GetPurchaseTrust_Response message, length delimited. Does not implicitly {@link CGCSystemMsg_GetPurchaseTrust_Response.verify|verify} messages.
     * @param message CGCSystemMsg_GetPurchaseTrust_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICGCSystemMsg_GetPurchaseTrust_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CGCSystemMsg_GetPurchaseTrust_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetPurchaseTrust_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetPurchaseTrust_Response;

    /**
     * Decodes a CGCSystemMsg_GetPurchaseTrust_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CGCSystemMsg_GetPurchaseTrust_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CGCSystemMsg_GetPurchaseTrust_Response;

    /**
     * Verifies a CGCSystemMsg_GetPurchaseTrust_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CGCSystemMsg_GetPurchaseTrust_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CGCSystemMsg_GetPurchaseTrust_Response
     */
    public static fromObject(object: { [k: string]: any }): CGCSystemMsg_GetPurchaseTrust_Response;

    /**
     * Creates a plain object from a CGCSystemMsg_GetPurchaseTrust_Response message. Also converts values to other types if specified.
     * @param message CGCSystemMsg_GetPurchaseTrust_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CGCSystemMsg_GetPurchaseTrust_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CGCSystemMsg_GetPurchaseTrust_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CGCSystemMsg_GetPurchaseTrust_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCHAccountVacStatusChange. */
export class CMsgGCHAccountVacStatusChange implements ICMsgGCHAccountVacStatusChange {

    /**
     * Constructs a new CMsgGCHAccountVacStatusChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHAccountVacStatusChange);

    /** CMsgGCHAccountVacStatusChange steamId. */
    public steamId: (number|Long);

    /** CMsgGCHAccountVacStatusChange appId. */
    public appId: number;

    /** CMsgGCHAccountVacStatusChange rtimeVacbanStarts. */
    public rtimeVacbanStarts: number;

    /** CMsgGCHAccountVacStatusChange isBannedNow. */
    public isBannedNow: boolean;

    /** CMsgGCHAccountVacStatusChange isBannedFuture. */
    public isBannedFuture: boolean;

    /**
     * Creates a new CMsgGCHAccountVacStatusChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCHAccountVacStatusChange instance
     */
    public static create(properties?: ICMsgGCHAccountVacStatusChange): CMsgGCHAccountVacStatusChange;

    /**
     * Encodes the specified CMsgGCHAccountVacStatusChange message. Does not implicitly {@link CMsgGCHAccountVacStatusChange.verify|verify} messages.
     * @param message CMsgGCHAccountVacStatusChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCHAccountVacStatusChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCHAccountVacStatusChange message, length delimited. Does not implicitly {@link CMsgGCHAccountVacStatusChange.verify|verify} messages.
     * @param message CMsgGCHAccountVacStatusChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCHAccountVacStatusChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCHAccountVacStatusChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHAccountVacStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHAccountVacStatusChange;

    /**
     * Decodes a CMsgGCHAccountVacStatusChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCHAccountVacStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCHAccountVacStatusChange;

    /**
     * Verifies a CMsgGCHAccountVacStatusChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCHAccountVacStatusChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCHAccountVacStatusChange
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCHAccountVacStatusChange;

    /**
     * Creates a plain object from a CMsgGCHAccountVacStatusChange message. Also converts values to other types if specified.
     * @param message CMsgGCHAccountVacStatusChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCHAccountVacStatusChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCHAccountVacStatusChange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCHAccountVacStatusChange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCGetPartnerAccountLink. */
export class CMsgGCGetPartnerAccountLink implements ICMsgGCGetPartnerAccountLink {

    /**
     * Constructs a new CMsgGCGetPartnerAccountLink.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPartnerAccountLink);

    /** CMsgGCGetPartnerAccountLink steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CMsgGCGetPartnerAccountLink instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetPartnerAccountLink instance
     */
    public static create(properties?: ICMsgGCGetPartnerAccountLink): CMsgGCGetPartnerAccountLink;

    /**
     * Encodes the specified CMsgGCGetPartnerAccountLink message. Does not implicitly {@link CMsgGCGetPartnerAccountLink.verify|verify} messages.
     * @param message CMsgGCGetPartnerAccountLink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetPartnerAccountLink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetPartnerAccountLink message, length delimited. Does not implicitly {@link CMsgGCGetPartnerAccountLink.verify|verify} messages.
     * @param message CMsgGCGetPartnerAccountLink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetPartnerAccountLink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetPartnerAccountLink message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPartnerAccountLink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPartnerAccountLink;

    /**
     * Decodes a CMsgGCGetPartnerAccountLink message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetPartnerAccountLink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetPartnerAccountLink;

    /**
     * Verifies a CMsgGCGetPartnerAccountLink message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetPartnerAccountLink message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetPartnerAccountLink
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetPartnerAccountLink;

    /**
     * Creates a plain object from a CMsgGCGetPartnerAccountLink message. Also converts values to other types if specified.
     * @param message CMsgGCGetPartnerAccountLink
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetPartnerAccountLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetPartnerAccountLink to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetPartnerAccountLink
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCGetPartnerAccountLink_Response. */
export class CMsgGCGetPartnerAccountLink_Response implements ICMsgGCGetPartnerAccountLink_Response {

    /**
     * Constructs a new CMsgGCGetPartnerAccountLink_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPartnerAccountLink_Response);

    /** CMsgGCGetPartnerAccountLink_Response pwid. */
    public pwid: number;

    /** CMsgGCGetPartnerAccountLink_Response nexonid. */
    public nexonid: number;

    /** CMsgGCGetPartnerAccountLink_Response ageclass. */
    public ageclass: number;

    /** CMsgGCGetPartnerAccountLink_Response idVerified. */
    public idVerified: boolean;

    /** CMsgGCGetPartnerAccountLink_Response isAdult. */
    public isAdult: boolean;

    /**
     * Creates a new CMsgGCGetPartnerAccountLink_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCGetPartnerAccountLink_Response instance
     */
    public static create(properties?: ICMsgGCGetPartnerAccountLink_Response): CMsgGCGetPartnerAccountLink_Response;

    /**
     * Encodes the specified CMsgGCGetPartnerAccountLink_Response message. Does not implicitly {@link CMsgGCGetPartnerAccountLink_Response.verify|verify} messages.
     * @param message CMsgGCGetPartnerAccountLink_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCGetPartnerAccountLink_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCGetPartnerAccountLink_Response message, length delimited. Does not implicitly {@link CMsgGCGetPartnerAccountLink_Response.verify|verify} messages.
     * @param message CMsgGCGetPartnerAccountLink_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCGetPartnerAccountLink_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCGetPartnerAccountLink_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPartnerAccountLink_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPartnerAccountLink_Response;

    /**
     * Decodes a CMsgGCGetPartnerAccountLink_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCGetPartnerAccountLink_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCGetPartnerAccountLink_Response;

    /**
     * Verifies a CMsgGCGetPartnerAccountLink_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCGetPartnerAccountLink_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCGetPartnerAccountLink_Response
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCGetPartnerAccountLink_Response;

    /**
     * Creates a plain object from a CMsgGCGetPartnerAccountLink_Response message. Also converts values to other types if specified.
     * @param message CMsgGCGetPartnerAccountLink_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCGetPartnerAccountLink_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCGetPartnerAccountLink_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCGetPartnerAccountLink_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCRoutingInfo. */
export class CMsgGCRoutingInfo implements ICMsgGCRoutingInfo {

    /**
     * Constructs a new CMsgGCRoutingInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCRoutingInfo);

    /** CMsgGCRoutingInfo dirIndex. */
    public dirIndex: number[];

    /** CMsgGCRoutingInfo method. */
    public method: CMsgGCRoutingInfo.RoutingMethod;

    /** CMsgGCRoutingInfo fallback. */
    public fallback: CMsgGCRoutingInfo.RoutingMethod;

    /** CMsgGCRoutingInfo protobufField. */
    public protobufField: number;

    /** CMsgGCRoutingInfo webapiParam. */
    public webapiParam: string;

    /**
     * Creates a new CMsgGCRoutingInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCRoutingInfo instance
     */
    public static create(properties?: ICMsgGCRoutingInfo): CMsgGCRoutingInfo;

    /**
     * Encodes the specified CMsgGCRoutingInfo message. Does not implicitly {@link CMsgGCRoutingInfo.verify|verify} messages.
     * @param message CMsgGCRoutingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCRoutingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCRoutingInfo message, length delimited. Does not implicitly {@link CMsgGCRoutingInfo.verify|verify} messages.
     * @param message CMsgGCRoutingInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCRoutingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCRoutingInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCRoutingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCRoutingInfo;

    /**
     * Decodes a CMsgGCRoutingInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCRoutingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCRoutingInfo;

    /**
     * Verifies a CMsgGCRoutingInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCRoutingInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCRoutingInfo
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCRoutingInfo;

    /**
     * Creates a plain object from a CMsgGCRoutingInfo message. Also converts values to other types if specified.
     * @param message CMsgGCRoutingInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCRoutingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCRoutingInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCRoutingInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGCRoutingInfo {

    /** RoutingMethod enum. */
    enum RoutingMethod {
        RANDOM = 0,
        DISCARD = 1,
        CLIENT_STEAMID = 2,
        PROTOBUF_FIELD_UINT64 = 3,
        WEBAPI_PARAM_UINT64 = 4
    }
}

/** Represents a CMsgGCMsgMasterSetWebAPIRouting. */
export class CMsgGCMsgMasterSetWebAPIRouting implements ICMsgGCMsgMasterSetWebAPIRouting {

    /**
     * Constructs a new CMsgGCMsgMasterSetWebAPIRouting.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetWebAPIRouting);

    /** CMsgGCMsgMasterSetWebAPIRouting entries. */
    public entries: CMsgGCMsgMasterSetWebAPIRouting.IEntry[];

    /**
     * Creates a new CMsgGCMsgMasterSetWebAPIRouting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgMasterSetWebAPIRouting instance
     */
    public static create(properties?: ICMsgGCMsgMasterSetWebAPIRouting): CMsgGCMsgMasterSetWebAPIRouting;

    /**
     * Encodes the specified CMsgGCMsgMasterSetWebAPIRouting message. Does not implicitly {@link CMsgGCMsgMasterSetWebAPIRouting.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetWebAPIRouting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgMasterSetWebAPIRouting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgMasterSetWebAPIRouting message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetWebAPIRouting.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetWebAPIRouting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgMasterSetWebAPIRouting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgMasterSetWebAPIRouting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetWebAPIRouting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetWebAPIRouting;

    /**
     * Decodes a CMsgGCMsgMasterSetWebAPIRouting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgMasterSetWebAPIRouting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetWebAPIRouting;

    /**
     * Verifies a CMsgGCMsgMasterSetWebAPIRouting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgMasterSetWebAPIRouting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgMasterSetWebAPIRouting
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetWebAPIRouting;

    /**
     * Creates a plain object from a CMsgGCMsgMasterSetWebAPIRouting message. Also converts values to other types if specified.
     * @param message CMsgGCMsgMasterSetWebAPIRouting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgMasterSetWebAPIRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgMasterSetWebAPIRouting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgMasterSetWebAPIRouting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGCMsgMasterSetWebAPIRouting {

    /** Properties of an Entry. */
    interface IEntry {

        /** Entry interfaceName */
        interfaceName?: (string|null);

        /** Entry methodName */
        methodName?: (string|null);

        /** Entry routing */
        routing?: (ICMsgGCRoutingInfo|null);
    }

    /** Represents an Entry. */
    class Entry implements IEntry {

        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgMasterSetWebAPIRouting.IEntry);

        /** Entry interfaceName. */
        public interfaceName: string;

        /** Entry methodName. */
        public methodName: string;

        /** Entry routing. */
        public routing?: (ICMsgGCRoutingInfo|null);

        /**
         * Creates a new Entry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entry instance
         */
        public static create(properties?: CMsgGCMsgMasterSetWebAPIRouting.IEntry): CMsgGCMsgMasterSetWebAPIRouting.Entry;

        /**
         * Encodes the specified Entry message. Does not implicitly {@link CMsgGCMsgMasterSetWebAPIRouting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgGCMsgMasterSetWebAPIRouting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetWebAPIRouting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgGCMsgMasterSetWebAPIRouting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetWebAPIRouting.Entry;

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetWebAPIRouting.Entry;

        /**
         * Verifies an Entry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entry
         */
        public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetWebAPIRouting.Entry;

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @param message Entry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgGCMsgMasterSetWebAPIRouting.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Entry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgGCMsgMasterSetClientMsgRouting. */
export class CMsgGCMsgMasterSetClientMsgRouting implements ICMsgGCMsgMasterSetClientMsgRouting {

    /**
     * Constructs a new CMsgGCMsgMasterSetClientMsgRouting.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetClientMsgRouting);

    /** CMsgGCMsgMasterSetClientMsgRouting entries. */
    public entries: CMsgGCMsgMasterSetClientMsgRouting.IEntry[];

    /**
     * Creates a new CMsgGCMsgMasterSetClientMsgRouting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgMasterSetClientMsgRouting instance
     */
    public static create(properties?: ICMsgGCMsgMasterSetClientMsgRouting): CMsgGCMsgMasterSetClientMsgRouting;

    /**
     * Encodes the specified CMsgGCMsgMasterSetClientMsgRouting message. Does not implicitly {@link CMsgGCMsgMasterSetClientMsgRouting.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetClientMsgRouting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgMasterSetClientMsgRouting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgMasterSetClientMsgRouting message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetClientMsgRouting.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetClientMsgRouting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgMasterSetClientMsgRouting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgMasterSetClientMsgRouting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetClientMsgRouting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetClientMsgRouting;

    /**
     * Decodes a CMsgGCMsgMasterSetClientMsgRouting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgMasterSetClientMsgRouting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetClientMsgRouting;

    /**
     * Verifies a CMsgGCMsgMasterSetClientMsgRouting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgMasterSetClientMsgRouting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgMasterSetClientMsgRouting
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetClientMsgRouting;

    /**
     * Creates a plain object from a CMsgGCMsgMasterSetClientMsgRouting message. Also converts values to other types if specified.
     * @param message CMsgGCMsgMasterSetClientMsgRouting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgMasterSetClientMsgRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgMasterSetClientMsgRouting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgMasterSetClientMsgRouting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGCMsgMasterSetClientMsgRouting {

    /** Properties of an Entry. */
    interface IEntry {

        /** Entry msgType */
        msgType?: (number|null);

        /** Entry routing */
        routing?: (ICMsgGCRoutingInfo|null);
    }

    /** Represents an Entry. */
    class Entry implements IEntry {

        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgMasterSetClientMsgRouting.IEntry);

        /** Entry msgType. */
        public msgType: number;

        /** Entry routing. */
        public routing?: (ICMsgGCRoutingInfo|null);

        /**
         * Creates a new Entry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entry instance
         */
        public static create(properties?: CMsgGCMsgMasterSetClientMsgRouting.IEntry): CMsgGCMsgMasterSetClientMsgRouting.Entry;

        /**
         * Encodes the specified Entry message. Does not implicitly {@link CMsgGCMsgMasterSetClientMsgRouting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgGCMsgMasterSetClientMsgRouting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetClientMsgRouting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgGCMsgMasterSetClientMsgRouting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetClientMsgRouting.Entry;

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetClientMsgRouting.Entry;

        /**
         * Verifies an Entry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entry
         */
        public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetClientMsgRouting.Entry;

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @param message Entry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgGCMsgMasterSetClientMsgRouting.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Entry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgGCMsgMasterSetWebAPIRouting_Response. */
export class CMsgGCMsgMasterSetWebAPIRouting_Response implements ICMsgGCMsgMasterSetWebAPIRouting_Response {

    /**
     * Constructs a new CMsgGCMsgMasterSetWebAPIRouting_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetWebAPIRouting_Response);

    /** CMsgGCMsgMasterSetWebAPIRouting_Response eresult. */
    public eresult: number;

    /**
     * Creates a new CMsgGCMsgMasterSetWebAPIRouting_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgMasterSetWebAPIRouting_Response instance
     */
    public static create(properties?: ICMsgGCMsgMasterSetWebAPIRouting_Response): CMsgGCMsgMasterSetWebAPIRouting_Response;

    /**
     * Encodes the specified CMsgGCMsgMasterSetWebAPIRouting_Response message. Does not implicitly {@link CMsgGCMsgMasterSetWebAPIRouting_Response.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetWebAPIRouting_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgMasterSetWebAPIRouting_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgMasterSetWebAPIRouting_Response message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetWebAPIRouting_Response.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetWebAPIRouting_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgMasterSetWebAPIRouting_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgMasterSetWebAPIRouting_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetWebAPIRouting_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetWebAPIRouting_Response;

    /**
     * Decodes a CMsgGCMsgMasterSetWebAPIRouting_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgMasterSetWebAPIRouting_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetWebAPIRouting_Response;

    /**
     * Verifies a CMsgGCMsgMasterSetWebAPIRouting_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgMasterSetWebAPIRouting_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgMasterSetWebAPIRouting_Response
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetWebAPIRouting_Response;

    /**
     * Creates a plain object from a CMsgGCMsgMasterSetWebAPIRouting_Response message. Also converts values to other types if specified.
     * @param message CMsgGCMsgMasterSetWebAPIRouting_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgMasterSetWebAPIRouting_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgMasterSetWebAPIRouting_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgMasterSetWebAPIRouting_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCMsgMasterSetClientMsgRouting_Response. */
export class CMsgGCMsgMasterSetClientMsgRouting_Response implements ICMsgGCMsgMasterSetClientMsgRouting_Response {

    /**
     * Constructs a new CMsgGCMsgMasterSetClientMsgRouting_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetClientMsgRouting_Response);

    /** CMsgGCMsgMasterSetClientMsgRouting_Response eresult. */
    public eresult: number;

    /**
     * Creates a new CMsgGCMsgMasterSetClientMsgRouting_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgMasterSetClientMsgRouting_Response instance
     */
    public static create(properties?: ICMsgGCMsgMasterSetClientMsgRouting_Response): CMsgGCMsgMasterSetClientMsgRouting_Response;

    /**
     * Encodes the specified CMsgGCMsgMasterSetClientMsgRouting_Response message. Does not implicitly {@link CMsgGCMsgMasterSetClientMsgRouting_Response.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetClientMsgRouting_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgMasterSetClientMsgRouting_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgMasterSetClientMsgRouting_Response message, length delimited. Does not implicitly {@link CMsgGCMsgMasterSetClientMsgRouting_Response.verify|verify} messages.
     * @param message CMsgGCMsgMasterSetClientMsgRouting_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgMasterSetClientMsgRouting_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgMasterSetClientMsgRouting_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetClientMsgRouting_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetClientMsgRouting_Response;

    /**
     * Decodes a CMsgGCMsgMasterSetClientMsgRouting_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgMasterSetClientMsgRouting_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgMasterSetClientMsgRouting_Response;

    /**
     * Verifies a CMsgGCMsgMasterSetClientMsgRouting_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgMasterSetClientMsgRouting_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgMasterSetClientMsgRouting_Response
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgMasterSetClientMsgRouting_Response;

    /**
     * Creates a plain object from a CMsgGCMsgMasterSetClientMsgRouting_Response message. Also converts values to other types if specified.
     * @param message CMsgGCMsgMasterSetClientMsgRouting_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgMasterSetClientMsgRouting_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgMasterSetClientMsgRouting_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgMasterSetClientMsgRouting_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCMsgSetOptions. */
export class CMsgGCMsgSetOptions implements ICMsgGCMsgSetOptions {

    /**
     * Constructs a new CMsgGCMsgSetOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgSetOptions);

    /** CMsgGCMsgSetOptions options. */
    public options: CMsgGCMsgSetOptions.Option[];

    /** CMsgGCMsgSetOptions clientMsgRanges. */
    public clientMsgRanges: CMsgGCMsgSetOptions.IMessageRange[];

    /**
     * Creates a new CMsgGCMsgSetOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCMsgSetOptions instance
     */
    public static create(properties?: ICMsgGCMsgSetOptions): CMsgGCMsgSetOptions;

    /**
     * Encodes the specified CMsgGCMsgSetOptions message. Does not implicitly {@link CMsgGCMsgSetOptions.verify|verify} messages.
     * @param message CMsgGCMsgSetOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCMsgSetOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCMsgSetOptions message, length delimited. Does not implicitly {@link CMsgGCMsgSetOptions.verify|verify} messages.
     * @param message CMsgGCMsgSetOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCMsgSetOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCMsgSetOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgSetOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgSetOptions;

    /**
     * Decodes a CMsgGCMsgSetOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCMsgSetOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgSetOptions;

    /**
     * Verifies a CMsgGCMsgSetOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCMsgSetOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCMsgSetOptions
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCMsgSetOptions;

    /**
     * Creates a plain object from a CMsgGCMsgSetOptions message. Also converts values to other types if specified.
     * @param message CMsgGCMsgSetOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCMsgSetOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCMsgSetOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCMsgSetOptions
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGCMsgSetOptions {

    /** Properties of a MessageRange. */
    interface IMessageRange {

        /** MessageRange low */
        low: number;

        /** MessageRange high */
        high: number;
    }

    /** Represents a MessageRange. */
    class MessageRange implements IMessageRange {

        /**
         * Constructs a new MessageRange.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgSetOptions.IMessageRange);

        /** MessageRange low. */
        public low: number;

        /** MessageRange high. */
        public high: number;

        /**
         * Creates a new MessageRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageRange instance
         */
        public static create(properties?: CMsgGCMsgSetOptions.IMessageRange): CMsgGCMsgSetOptions.MessageRange;

        /**
         * Encodes the specified MessageRange message. Does not implicitly {@link CMsgGCMsgSetOptions.MessageRange.verify|verify} messages.
         * @param message MessageRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgGCMsgSetOptions.IMessageRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageRange message, length delimited. Does not implicitly {@link CMsgGCMsgSetOptions.MessageRange.verify|verify} messages.
         * @param message MessageRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgGCMsgSetOptions.IMessageRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgSetOptions.MessageRange;

        /**
         * Decodes a MessageRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCMsgSetOptions.MessageRange;

        /**
         * Verifies a MessageRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageRange
         */
        public static fromObject(object: { [k: string]: any }): CMsgGCMsgSetOptions.MessageRange;

        /**
         * Creates a plain object from a MessageRange message. Also converts values to other types if specified.
         * @param message MessageRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgGCMsgSetOptions.MessageRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageRange
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Option enum. */
    enum Option {
        NOTIFY_USER_SESSIONS = 0,
        NOTIFY_SERVER_SESSIONS = 1,
        NOTIFY_ACHIEVEMENTS = 2,
        NOTIFY_VAC_ACTION = 3
    }
}

/** Represents a CMsgGCHUpdateSession. */
export class CMsgGCHUpdateSession implements ICMsgGCHUpdateSession {

    /**
     * Constructs a new CMsgGCHUpdateSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHUpdateSession);

    /** CMsgGCHUpdateSession steamId. */
    public steamId: (number|Long);

    /** CMsgGCHUpdateSession appId. */
    public appId: number;

    /** CMsgGCHUpdateSession online. */
    public online: boolean;

    /** CMsgGCHUpdateSession serverSteamId. */
    public serverSteamId: (number|Long);

    /** CMsgGCHUpdateSession serverAddr. */
    public serverAddr: number;

    /** CMsgGCHUpdateSession serverPort. */
    public serverPort: number;

    /** CMsgGCHUpdateSession osType. */
    public osType: number;

    /** CMsgGCHUpdateSession clientAddr. */
    public clientAddr: number;

    /** CMsgGCHUpdateSession extraFields. */
    public extraFields: CMsgGCHUpdateSession.IExtraField[];

    /** CMsgGCHUpdateSession ownerId. */
    public ownerId: (number|Long);

    /** CMsgGCHUpdateSession cmSessionSysid. */
    public cmSessionSysid: number;

    /** CMsgGCHUpdateSession cmSessionIdentifier. */
    public cmSessionIdentifier: number;

    /** CMsgGCHUpdateSession depotIds. */
    public depotIds: number[];

    /**
     * Creates a new CMsgGCHUpdateSession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCHUpdateSession instance
     */
    public static create(properties?: ICMsgGCHUpdateSession): CMsgGCHUpdateSession;

    /**
     * Encodes the specified CMsgGCHUpdateSession message. Does not implicitly {@link CMsgGCHUpdateSession.verify|verify} messages.
     * @param message CMsgGCHUpdateSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCHUpdateSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCHUpdateSession message, length delimited. Does not implicitly {@link CMsgGCHUpdateSession.verify|verify} messages.
     * @param message CMsgGCHUpdateSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCHUpdateSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCHUpdateSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHUpdateSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHUpdateSession;

    /**
     * Decodes a CMsgGCHUpdateSession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCHUpdateSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCHUpdateSession;

    /**
     * Verifies a CMsgGCHUpdateSession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCHUpdateSession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCHUpdateSession
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCHUpdateSession;

    /**
     * Creates a plain object from a CMsgGCHUpdateSession message. Also converts values to other types if specified.
     * @param message CMsgGCHUpdateSession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCHUpdateSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCHUpdateSession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCHUpdateSession
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgGCHUpdateSession {

    /** Properties of an ExtraField. */
    interface IExtraField {

        /** ExtraField name */
        name?: (string|null);

        /** ExtraField value */
        value?: (string|null);
    }

    /** Represents an ExtraField. */
    class ExtraField implements IExtraField {

        /**
         * Constructs a new ExtraField.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCHUpdateSession.IExtraField);

        /** ExtraField name. */
        public name: string;

        /** ExtraField value. */
        public value: string;

        /**
         * Creates a new ExtraField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExtraField instance
         */
        public static create(properties?: CMsgGCHUpdateSession.IExtraField): CMsgGCHUpdateSession.ExtraField;

        /**
         * Encodes the specified ExtraField message. Does not implicitly {@link CMsgGCHUpdateSession.ExtraField.verify|verify} messages.
         * @param message ExtraField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgGCHUpdateSession.IExtraField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExtraField message, length delimited. Does not implicitly {@link CMsgGCHUpdateSession.ExtraField.verify|verify} messages.
         * @param message ExtraField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgGCHUpdateSession.IExtraField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExtraField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtraField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHUpdateSession.ExtraField;

        /**
         * Decodes an ExtraField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExtraField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCHUpdateSession.ExtraField;

        /**
         * Verifies an ExtraField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExtraField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExtraField
         */
        public static fromObject(object: { [k: string]: any }): CMsgGCHUpdateSession.ExtraField;

        /**
         * Creates a plain object from an ExtraField message. Also converts values to other types if specified.
         * @param message ExtraField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgGCHUpdateSession.ExtraField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExtraField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExtraField
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgNotificationOfSuspiciousActivity. */
export class CMsgNotificationOfSuspiciousActivity implements ICMsgNotificationOfSuspiciousActivity {

    /**
     * Constructs a new CMsgNotificationOfSuspiciousActivity.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgNotificationOfSuspiciousActivity);

    /** CMsgNotificationOfSuspiciousActivity steamid. */
    public steamid: (number|Long);

    /** CMsgNotificationOfSuspiciousActivity appid. */
    public appid: number;

    /** CMsgNotificationOfSuspiciousActivity multipleInstances. */
    public multipleInstances?: (CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances|null);

    /**
     * Creates a new CMsgNotificationOfSuspiciousActivity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgNotificationOfSuspiciousActivity instance
     */
    public static create(properties?: ICMsgNotificationOfSuspiciousActivity): CMsgNotificationOfSuspiciousActivity;

    /**
     * Encodes the specified CMsgNotificationOfSuspiciousActivity message. Does not implicitly {@link CMsgNotificationOfSuspiciousActivity.verify|verify} messages.
     * @param message CMsgNotificationOfSuspiciousActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgNotificationOfSuspiciousActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgNotificationOfSuspiciousActivity message, length delimited. Does not implicitly {@link CMsgNotificationOfSuspiciousActivity.verify|verify} messages.
     * @param message CMsgNotificationOfSuspiciousActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgNotificationOfSuspiciousActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgNotificationOfSuspiciousActivity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgNotificationOfSuspiciousActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgNotificationOfSuspiciousActivity;

    /**
     * Decodes a CMsgNotificationOfSuspiciousActivity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgNotificationOfSuspiciousActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgNotificationOfSuspiciousActivity;

    /**
     * Verifies a CMsgNotificationOfSuspiciousActivity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgNotificationOfSuspiciousActivity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgNotificationOfSuspiciousActivity
     */
    public static fromObject(object: { [k: string]: any }): CMsgNotificationOfSuspiciousActivity;

    /**
     * Creates a plain object from a CMsgNotificationOfSuspiciousActivity message. Also converts values to other types if specified.
     * @param message CMsgNotificationOfSuspiciousActivity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgNotificationOfSuspiciousActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgNotificationOfSuspiciousActivity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgNotificationOfSuspiciousActivity
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgNotificationOfSuspiciousActivity {

    /** Properties of a MultipleGameInstances. */
    interface IMultipleGameInstances {

        /** MultipleGameInstances appInstanceCount */
        appInstanceCount?: (number|null);

        /** MultipleGameInstances otherSteamids */
        otherSteamids?: ((number|Long)[]|null);
    }

    /** Represents a MultipleGameInstances. */
    class MultipleGameInstances implements IMultipleGameInstances {

        /**
         * Constructs a new MultipleGameInstances.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances);

        /** MultipleGameInstances appInstanceCount. */
        public appInstanceCount: number;

        /** MultipleGameInstances otherSteamids. */
        public otherSteamids: (number|Long)[];

        /**
         * Creates a new MultipleGameInstances instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultipleGameInstances instance
         */
        public static create(properties?: CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances): CMsgNotificationOfSuspiciousActivity.MultipleGameInstances;

        /**
         * Encodes the specified MultipleGameInstances message. Does not implicitly {@link CMsgNotificationOfSuspiciousActivity.MultipleGameInstances.verify|verify} messages.
         * @param message MultipleGameInstances message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultipleGameInstances message, length delimited. Does not implicitly {@link CMsgNotificationOfSuspiciousActivity.MultipleGameInstances.verify|verify} messages.
         * @param message MultipleGameInstances message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultipleGameInstances message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultipleGameInstances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgNotificationOfSuspiciousActivity.MultipleGameInstances;

        /**
         * Decodes a MultipleGameInstances message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultipleGameInstances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgNotificationOfSuspiciousActivity.MultipleGameInstances;

        /**
         * Verifies a MultipleGameInstances message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultipleGameInstances message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultipleGameInstances
         */
        public static fromObject(object: { [k: string]: any }): CMsgNotificationOfSuspiciousActivity.MultipleGameInstances;

        /**
         * Creates a plain object from a MultipleGameInstances message. Also converts values to other types if specified.
         * @param message MultipleGameInstances
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgNotificationOfSuspiciousActivity.MultipleGameInstances, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultipleGameInstances to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MultipleGameInstances
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgDPPartnerMicroTxns. */
export class CMsgDPPartnerMicroTxns implements ICMsgDPPartnerMicroTxns {

    /**
     * Constructs a new CMsgDPPartnerMicroTxns.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgDPPartnerMicroTxns);

    /** CMsgDPPartnerMicroTxns appid. */
    public appid: number;

    /** CMsgDPPartnerMicroTxns gcName. */
    public gcName: string;

    /** CMsgDPPartnerMicroTxns partner. */
    public partner?: (CMsgDPPartnerMicroTxns.IPartnerInfo|null);

    /** CMsgDPPartnerMicroTxns transactions. */
    public transactions: CMsgDPPartnerMicroTxns.IPartnerMicroTxn[];

    /**
     * Creates a new CMsgDPPartnerMicroTxns instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgDPPartnerMicroTxns instance
     */
    public static create(properties?: ICMsgDPPartnerMicroTxns): CMsgDPPartnerMicroTxns;

    /**
     * Encodes the specified CMsgDPPartnerMicroTxns message. Does not implicitly {@link CMsgDPPartnerMicroTxns.verify|verify} messages.
     * @param message CMsgDPPartnerMicroTxns message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgDPPartnerMicroTxns, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgDPPartnerMicroTxns message, length delimited. Does not implicitly {@link CMsgDPPartnerMicroTxns.verify|verify} messages.
     * @param message CMsgDPPartnerMicroTxns message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgDPPartnerMicroTxns, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgDPPartnerMicroTxns message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgDPPartnerMicroTxns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgDPPartnerMicroTxns;

    /**
     * Decodes a CMsgDPPartnerMicroTxns message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgDPPartnerMicroTxns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgDPPartnerMicroTxns;

    /**
     * Verifies a CMsgDPPartnerMicroTxns message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgDPPartnerMicroTxns message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgDPPartnerMicroTxns
     */
    public static fromObject(object: { [k: string]: any }): CMsgDPPartnerMicroTxns;

    /**
     * Creates a plain object from a CMsgDPPartnerMicroTxns message. Also converts values to other types if specified.
     * @param message CMsgDPPartnerMicroTxns
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgDPPartnerMicroTxns, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgDPPartnerMicroTxns to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgDPPartnerMicroTxns
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgDPPartnerMicroTxns {

    /** Properties of a PartnerMicroTxn. */
    interface IPartnerMicroTxn {

        /** PartnerMicroTxn initTime */
        initTime?: (number|null);

        /** PartnerMicroTxn lastUpdateTime */
        lastUpdateTime?: (number|null);

        /** PartnerMicroTxn txnId */
        txnId?: (number|Long|null);

        /** PartnerMicroTxn accountId */
        accountId?: (number|null);

        /** PartnerMicroTxn lineItem */
        lineItem?: (number|null);

        /** PartnerMicroTxn itemId */
        itemId?: (number|Long|null);

        /** PartnerMicroTxn defIndex */
        defIndex?: (number|null);

        /** PartnerMicroTxn price */
        price?: (number|Long|null);

        /** PartnerMicroTxn tax */
        tax?: (number|Long|null);

        /** PartnerMicroTxn priceUsd */
        priceUsd?: (number|Long|null);

        /** PartnerMicroTxn taxUsd */
        taxUsd?: (number|Long|null);

        /** PartnerMicroTxn purchaseType */
        purchaseType?: (number|null);

        /** PartnerMicroTxn steamTxnType */
        steamTxnType?: (number|null);

        /** PartnerMicroTxn countryCode */
        countryCode?: (string|null);

        /** PartnerMicroTxn regionCode */
        regionCode?: (string|null);

        /** PartnerMicroTxn quantity */
        quantity?: (number|null);

        /** PartnerMicroTxn refTransId */
        refTransId?: (number|Long|null);
    }

    /** Represents a PartnerMicroTxn. */
    class PartnerMicroTxn implements IPartnerMicroTxn {

        /**
         * Constructs a new PartnerMicroTxn.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgDPPartnerMicroTxns.IPartnerMicroTxn);

        /** PartnerMicroTxn initTime. */
        public initTime: number;

        /** PartnerMicroTxn lastUpdateTime. */
        public lastUpdateTime: number;

        /** PartnerMicroTxn txnId. */
        public txnId: (number|Long);

        /** PartnerMicroTxn accountId. */
        public accountId: number;

        /** PartnerMicroTxn lineItem. */
        public lineItem: number;

        /** PartnerMicroTxn itemId. */
        public itemId: (number|Long);

        /** PartnerMicroTxn defIndex. */
        public defIndex: number;

        /** PartnerMicroTxn price. */
        public price: (number|Long);

        /** PartnerMicroTxn tax. */
        public tax: (number|Long);

        /** PartnerMicroTxn priceUsd. */
        public priceUsd: (number|Long);

        /** PartnerMicroTxn taxUsd. */
        public taxUsd: (number|Long);

        /** PartnerMicroTxn purchaseType. */
        public purchaseType: number;

        /** PartnerMicroTxn steamTxnType. */
        public steamTxnType: number;

        /** PartnerMicroTxn countryCode. */
        public countryCode: string;

        /** PartnerMicroTxn regionCode. */
        public regionCode: string;

        /** PartnerMicroTxn quantity. */
        public quantity: number;

        /** PartnerMicroTxn refTransId. */
        public refTransId: (number|Long);

        /**
         * Creates a new PartnerMicroTxn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartnerMicroTxn instance
         */
        public static create(properties?: CMsgDPPartnerMicroTxns.IPartnerMicroTxn): CMsgDPPartnerMicroTxns.PartnerMicroTxn;

        /**
         * Encodes the specified PartnerMicroTxn message. Does not implicitly {@link CMsgDPPartnerMicroTxns.PartnerMicroTxn.verify|verify} messages.
         * @param message PartnerMicroTxn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgDPPartnerMicroTxns.IPartnerMicroTxn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartnerMicroTxn message, length delimited. Does not implicitly {@link CMsgDPPartnerMicroTxns.PartnerMicroTxn.verify|verify} messages.
         * @param message PartnerMicroTxn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgDPPartnerMicroTxns.IPartnerMicroTxn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartnerMicroTxn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartnerMicroTxn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgDPPartnerMicroTxns.PartnerMicroTxn;

        /**
         * Decodes a PartnerMicroTxn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartnerMicroTxn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgDPPartnerMicroTxns.PartnerMicroTxn;

        /**
         * Verifies a PartnerMicroTxn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartnerMicroTxn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartnerMicroTxn
         */
        public static fromObject(object: { [k: string]: any }): CMsgDPPartnerMicroTxns.PartnerMicroTxn;

        /**
         * Creates a plain object from a PartnerMicroTxn message. Also converts values to other types if specified.
         * @param message PartnerMicroTxn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgDPPartnerMicroTxns.PartnerMicroTxn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartnerMicroTxn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PartnerMicroTxn
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PartnerInfo. */
    interface IPartnerInfo {

        /** PartnerInfo partnerId */
        partnerId?: (number|null);

        /** PartnerInfo partnerName */
        partnerName?: (string|null);

        /** PartnerInfo currencyCode */
        currencyCode?: (string|null);

        /** PartnerInfo currencyName */
        currencyName?: (string|null);
    }

    /** Represents a PartnerInfo. */
    class PartnerInfo implements IPartnerInfo {

        /**
         * Constructs a new PartnerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgDPPartnerMicroTxns.IPartnerInfo);

        /** PartnerInfo partnerId. */
        public partnerId: number;

        /** PartnerInfo partnerName. */
        public partnerName: string;

        /** PartnerInfo currencyCode. */
        public currencyCode: string;

        /** PartnerInfo currencyName. */
        public currencyName: string;

        /**
         * Creates a new PartnerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartnerInfo instance
         */
        public static create(properties?: CMsgDPPartnerMicroTxns.IPartnerInfo): CMsgDPPartnerMicroTxns.PartnerInfo;

        /**
         * Encodes the specified PartnerInfo message. Does not implicitly {@link CMsgDPPartnerMicroTxns.PartnerInfo.verify|verify} messages.
         * @param message PartnerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgDPPartnerMicroTxns.IPartnerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartnerInfo message, length delimited. Does not implicitly {@link CMsgDPPartnerMicroTxns.PartnerInfo.verify|verify} messages.
         * @param message PartnerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgDPPartnerMicroTxns.IPartnerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartnerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartnerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgDPPartnerMicroTxns.PartnerInfo;

        /**
         * Decodes a PartnerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartnerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgDPPartnerMicroTxns.PartnerInfo;

        /**
         * Verifies a PartnerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartnerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartnerInfo
         */
        public static fromObject(object: { [k: string]: any }): CMsgDPPartnerMicroTxns.PartnerInfo;

        /**
         * Creates a plain object from a PartnerInfo message. Also converts values to other types if specified.
         * @param message PartnerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgDPPartnerMicroTxns.PartnerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartnerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PartnerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CMsgDPPartnerMicroTxnsResponse. */
export class CMsgDPPartnerMicroTxnsResponse implements ICMsgDPPartnerMicroTxnsResponse {

    /**
     * Constructs a new CMsgDPPartnerMicroTxnsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgDPPartnerMicroTxnsResponse);

    /** CMsgDPPartnerMicroTxnsResponse eresult. */
    public eresult: number;

    /** CMsgDPPartnerMicroTxnsResponse eerrorcode. */
    public eerrorcode: CMsgDPPartnerMicroTxnsResponse.EErrorCode;

    /**
     * Creates a new CMsgDPPartnerMicroTxnsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgDPPartnerMicroTxnsResponse instance
     */
    public static create(properties?: ICMsgDPPartnerMicroTxnsResponse): CMsgDPPartnerMicroTxnsResponse;

    /**
     * Encodes the specified CMsgDPPartnerMicroTxnsResponse message. Does not implicitly {@link CMsgDPPartnerMicroTxnsResponse.verify|verify} messages.
     * @param message CMsgDPPartnerMicroTxnsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgDPPartnerMicroTxnsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgDPPartnerMicroTxnsResponse message, length delimited. Does not implicitly {@link CMsgDPPartnerMicroTxnsResponse.verify|verify} messages.
     * @param message CMsgDPPartnerMicroTxnsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgDPPartnerMicroTxnsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgDPPartnerMicroTxnsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgDPPartnerMicroTxnsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgDPPartnerMicroTxnsResponse;

    /**
     * Decodes a CMsgDPPartnerMicroTxnsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgDPPartnerMicroTxnsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgDPPartnerMicroTxnsResponse;

    /**
     * Verifies a CMsgDPPartnerMicroTxnsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgDPPartnerMicroTxnsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgDPPartnerMicroTxnsResponse
     */
    public static fromObject(object: { [k: string]: any }): CMsgDPPartnerMicroTxnsResponse;

    /**
     * Creates a plain object from a CMsgDPPartnerMicroTxnsResponse message. Also converts values to other types if specified.
     * @param message CMsgDPPartnerMicroTxnsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgDPPartnerMicroTxnsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgDPPartnerMicroTxnsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgDPPartnerMicroTxnsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgDPPartnerMicroTxnsResponse {

    /** EErrorCode enum. */
    enum EErrorCode {
        k_MsgValid = 0,
        k_MsgInvalidAppID = 1,
        k_MsgInvalidPartnerInfo = 2,
        k_MsgNoTransactions = 3,
        k_MsgSQLFailure = 4,
        k_MsgPartnerInfoDiscrepancy = 5,
        k_MsgTransactionInsertFailed = 7,
        k_MsgAlreadyRunning = 8,
        k_MsgInvalidTransactionData = 9
    }
}

/** Represents a CChinaAgreementSessions_StartAgreementSessionInGame_Request. */
export class CChinaAgreementSessions_StartAgreementSessionInGame_Request implements ICChinaAgreementSessions_StartAgreementSessionInGame_Request {

    /**
     * Constructs a new CChinaAgreementSessions_StartAgreementSessionInGame_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICChinaAgreementSessions_StartAgreementSessionInGame_Request);

    /** CChinaAgreementSessions_StartAgreementSessionInGame_Request appid. */
    public appid: number;

    /** CChinaAgreementSessions_StartAgreementSessionInGame_Request steamid. */
    public steamid: (number|Long);

    /** CChinaAgreementSessions_StartAgreementSessionInGame_Request clientIpaddress. */
    public clientIpaddress: string;

    /**
     * Creates a new CChinaAgreementSessions_StartAgreementSessionInGame_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Request instance
     */
    public static create(properties?: ICChinaAgreementSessions_StartAgreementSessionInGame_Request): CChinaAgreementSessions_StartAgreementSessionInGame_Request;

    /**
     * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Request message. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify|verify} messages.
     * @param message CChinaAgreementSessions_StartAgreementSessionInGame_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICChinaAgreementSessions_StartAgreementSessionInGame_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Request message, length delimited. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify|verify} messages.
     * @param message CChinaAgreementSessions_StartAgreementSessionInGame_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICChinaAgreementSessions_StartAgreementSessionInGame_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CChinaAgreementSessions_StartAgreementSessionInGame_Request;

    /**
     * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CChinaAgreementSessions_StartAgreementSessionInGame_Request;

    /**
     * Verifies a CChinaAgreementSessions_StartAgreementSessionInGame_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Request
     */
    public static fromObject(object: { [k: string]: any }): CChinaAgreementSessions_StartAgreementSessionInGame_Request;

    /**
     * Creates a plain object from a CChinaAgreementSessions_StartAgreementSessionInGame_Request message. Also converts values to other types if specified.
     * @param message CChinaAgreementSessions_StartAgreementSessionInGame_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CChinaAgreementSessions_StartAgreementSessionInGame_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CChinaAgreementSessions_StartAgreementSessionInGame_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CChinaAgreementSessions_StartAgreementSessionInGame_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CChinaAgreementSessions_StartAgreementSessionInGame_Response. */
export class CChinaAgreementSessions_StartAgreementSessionInGame_Response implements ICChinaAgreementSessions_StartAgreementSessionInGame_Response {

    /**
     * Constructs a new CChinaAgreementSessions_StartAgreementSessionInGame_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICChinaAgreementSessions_StartAgreementSessionInGame_Response);

    /** CChinaAgreementSessions_StartAgreementSessionInGame_Response agreementUrl. */
    public agreementUrl: string;

    /**
     * Creates a new CChinaAgreementSessions_StartAgreementSessionInGame_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Response instance
     */
    public static create(properties?: ICChinaAgreementSessions_StartAgreementSessionInGame_Response): CChinaAgreementSessions_StartAgreementSessionInGame_Response;

    /**
     * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Response message. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify|verify} messages.
     * @param message CChinaAgreementSessions_StartAgreementSessionInGame_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICChinaAgreementSessions_StartAgreementSessionInGame_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Response message, length delimited. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify|verify} messages.
     * @param message CChinaAgreementSessions_StartAgreementSessionInGame_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICChinaAgreementSessions_StartAgreementSessionInGame_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CChinaAgreementSessions_StartAgreementSessionInGame_Response;

    /**
     * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CChinaAgreementSessions_StartAgreementSessionInGame_Response;

    /**
     * Verifies a CChinaAgreementSessions_StartAgreementSessionInGame_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CChinaAgreementSessions_StartAgreementSessionInGame_Response
     */
    public static fromObject(object: { [k: string]: any }): CChinaAgreementSessions_StartAgreementSessionInGame_Response;

    /**
     * Creates a plain object from a CChinaAgreementSessions_StartAgreementSessionInGame_Response message. Also converts values to other types if specified.
     * @param message CChinaAgreementSessions_StartAgreementSessionInGame_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CChinaAgreementSessions_StartAgreementSessionInGame_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CChinaAgreementSessions_StartAgreementSessionInGame_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CChinaAgreementSessions_StartAgreementSessionInGame_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** MessageOptions .msgpoolSoftLimit */
            ".msgpoolSoftLimit"?: (number|null);

            /** MessageOptions .msgpoolHardLimit */
            ".msgpoolHardLimit"?: (number|null);
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

            /** MessageOptions .msgpoolSoftLimit. */
            public msgpoolSoftLimit: number;

            /** MessageOptions .msgpoolHardLimit. */
            public msgpoolHardLimit: number;

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

            /** FieldOptions .keyField */
            ".keyField"?: (boolean|null);
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

            /** FieldOptions .keyField. */
            public keyField: boolean;

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
