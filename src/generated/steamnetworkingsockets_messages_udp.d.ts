import * as $protobuf from "protobufjs";
import Long = require("long");
/** ESteamNetworkingUDPMsgID enum. */
export enum ESteamNetworkingUDPMsgID {
    k_ESteamNetworkingUDPMsg_ChallengeRequest = 32,
    k_ESteamNetworkingUDPMsg_ChallengeReply = 33,
    k_ESteamNetworkingUDPMsg_ConnectRequest = 34,
    k_ESteamNetworkingUDPMsg_ConnectOK = 35,
    k_ESteamNetworkingUDPMsg_ConnectionClosed = 36,
    k_ESteamNetworkingUDPMsg_NoConnection = 37
}

/** Represents a CMsgSteamSockets_UDP_ChallengeRequest. */
export class CMsgSteamSockets_UDP_ChallengeRequest implements ICMsgSteamSockets_UDP_ChallengeRequest {

    /**
     * Constructs a new CMsgSteamSockets_UDP_ChallengeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamSockets_UDP_ChallengeRequest);

    /** CMsgSteamSockets_UDP_ChallengeRequest connectionId. */
    public connectionId: number;

    /** CMsgSteamSockets_UDP_ChallengeRequest myTimestamp. */
    public myTimestamp: (number|Long);

    /** CMsgSteamSockets_UDP_ChallengeRequest protocolVersion. */
    public protocolVersion: number;

    /**
     * Creates a new CMsgSteamSockets_UDP_ChallengeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamSockets_UDP_ChallengeRequest instance
     */
    public static create(properties?: ICMsgSteamSockets_UDP_ChallengeRequest): CMsgSteamSockets_UDP_ChallengeRequest;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ChallengeRequest message. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeRequest.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ChallengeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamSockets_UDP_ChallengeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ChallengeRequest message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeRequest.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ChallengeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamSockets_UDP_ChallengeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamSockets_UDP_ChallengeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamSockets_UDP_ChallengeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamSockets_UDP_ChallengeRequest;

    /**
     * Decodes a CMsgSteamSockets_UDP_ChallengeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamSockets_UDP_ChallengeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamSockets_UDP_ChallengeRequest;

    /**
     * Verifies a CMsgSteamSockets_UDP_ChallengeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamSockets_UDP_ChallengeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamSockets_UDP_ChallengeRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamSockets_UDP_ChallengeRequest;

    /**
     * Creates a plain object from a CMsgSteamSockets_UDP_ChallengeRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamSockets_UDP_ChallengeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamSockets_UDP_ChallengeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamSockets_UDP_ChallengeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamSockets_UDP_ChallengeRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamSockets_UDP_ChallengeReply. */
export class CMsgSteamSockets_UDP_ChallengeReply implements ICMsgSteamSockets_UDP_ChallengeReply {

    /**
     * Constructs a new CMsgSteamSockets_UDP_ChallengeReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamSockets_UDP_ChallengeReply);

    /** CMsgSteamSockets_UDP_ChallengeReply connectionId. */
    public connectionId: number;

    /** CMsgSteamSockets_UDP_ChallengeReply challenge. */
    public challenge: (number|Long);

    /** CMsgSteamSockets_UDP_ChallengeReply yourTimestamp. */
    public yourTimestamp: (number|Long);

    /** CMsgSteamSockets_UDP_ChallengeReply protocolVersion. */
    public protocolVersion: number;

    /**
     * Creates a new CMsgSteamSockets_UDP_ChallengeReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamSockets_UDP_ChallengeReply instance
     */
    public static create(properties?: ICMsgSteamSockets_UDP_ChallengeReply): CMsgSteamSockets_UDP_ChallengeReply;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ChallengeReply message. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeReply.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ChallengeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamSockets_UDP_ChallengeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ChallengeReply message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeReply.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ChallengeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamSockets_UDP_ChallengeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamSockets_UDP_ChallengeReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamSockets_UDP_ChallengeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamSockets_UDP_ChallengeReply;

    /**
     * Decodes a CMsgSteamSockets_UDP_ChallengeReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamSockets_UDP_ChallengeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamSockets_UDP_ChallengeReply;

    /**
     * Verifies a CMsgSteamSockets_UDP_ChallengeReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamSockets_UDP_ChallengeReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamSockets_UDP_ChallengeReply
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamSockets_UDP_ChallengeReply;

    /**
     * Creates a plain object from a CMsgSteamSockets_UDP_ChallengeReply message. Also converts values to other types if specified.
     * @param message CMsgSteamSockets_UDP_ChallengeReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamSockets_UDP_ChallengeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamSockets_UDP_ChallengeReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamSockets_UDP_ChallengeReply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamSockets_UDP_ConnectRequest. */
export class CMsgSteamSockets_UDP_ConnectRequest implements ICMsgSteamSockets_UDP_ConnectRequest {

    /**
     * Constructs a new CMsgSteamSockets_UDP_ConnectRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamSockets_UDP_ConnectRequest);

    /** CMsgSteamSockets_UDP_ConnectRequest clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamSockets_UDP_ConnectRequest challenge. */
    public challenge: (number|Long);

    /** CMsgSteamSockets_UDP_ConnectRequest myTimestamp. */
    public myTimestamp: (number|Long);

    /** CMsgSteamSockets_UDP_ConnectRequest pingEstMs. */
    public pingEstMs: number;

    /** CMsgSteamSockets_UDP_ConnectRequest crypt. */
    public crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

    /** CMsgSteamSockets_UDP_ConnectRequest cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamSockets_UDP_ConnectRequest legacyProtocolVersion. */
    public legacyProtocolVersion: number;

    /** CMsgSteamSockets_UDP_ConnectRequest identityString. */
    public identityString: string;

    /** CMsgSteamSockets_UDP_ConnectRequest legacyClientSteamId. */
    public legacyClientSteamId: (number|Long);

    /** CMsgSteamSockets_UDP_ConnectRequest legacyIdentityBinary. */
    public legacyIdentityBinary?: (ICMsgSteamNetworkingIdentityLegacyBinary|null);

    /**
     * Creates a new CMsgSteamSockets_UDP_ConnectRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamSockets_UDP_ConnectRequest instance
     */
    public static create(properties?: ICMsgSteamSockets_UDP_ConnectRequest): CMsgSteamSockets_UDP_ConnectRequest;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ConnectRequest message. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectRequest.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ConnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamSockets_UDP_ConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ConnectRequest message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectRequest.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ConnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamSockets_UDP_ConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamSockets_UDP_ConnectRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamSockets_UDP_ConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamSockets_UDP_ConnectRequest;

    /**
     * Decodes a CMsgSteamSockets_UDP_ConnectRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamSockets_UDP_ConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamSockets_UDP_ConnectRequest;

    /**
     * Verifies a CMsgSteamSockets_UDP_ConnectRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamSockets_UDP_ConnectRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamSockets_UDP_ConnectRequest
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamSockets_UDP_ConnectRequest;

    /**
     * Creates a plain object from a CMsgSteamSockets_UDP_ConnectRequest message. Also converts values to other types if specified.
     * @param message CMsgSteamSockets_UDP_ConnectRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamSockets_UDP_ConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamSockets_UDP_ConnectRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamSockets_UDP_ConnectRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamSockets_UDP_ConnectOK. */
export class CMsgSteamSockets_UDP_ConnectOK implements ICMsgSteamSockets_UDP_ConnectOK {

    /**
     * Constructs a new CMsgSteamSockets_UDP_ConnectOK.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamSockets_UDP_ConnectOK);

    /** CMsgSteamSockets_UDP_ConnectOK clientConnectionId. */
    public clientConnectionId: number;

    /** CMsgSteamSockets_UDP_ConnectOK serverConnectionId. */
    public serverConnectionId: number;

    /** CMsgSteamSockets_UDP_ConnectOK yourTimestamp. */
    public yourTimestamp: (number|Long);

    /** CMsgSteamSockets_UDP_ConnectOK delayTimeUsec. */
    public delayTimeUsec: number;

    /** CMsgSteamSockets_UDP_ConnectOK crypt. */
    public crypt?: (ICMsgSteamDatagramSessionCryptInfoSigned|null);

    /** CMsgSteamSockets_UDP_ConnectOK cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamSockets_UDP_ConnectOK identityString. */
    public identityString: string;

    /** CMsgSteamSockets_UDP_ConnectOK legacyServerSteamId. */
    public legacyServerSteamId: (number|Long);

    /** CMsgSteamSockets_UDP_ConnectOK legacyIdentityBinary. */
    public legacyIdentityBinary?: (ICMsgSteamNetworkingIdentityLegacyBinary|null);

    /**
     * Creates a new CMsgSteamSockets_UDP_ConnectOK instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamSockets_UDP_ConnectOK instance
     */
    public static create(properties?: ICMsgSteamSockets_UDP_ConnectOK): CMsgSteamSockets_UDP_ConnectOK;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ConnectOK message. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectOK.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ConnectOK message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamSockets_UDP_ConnectOK, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ConnectOK message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectOK.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ConnectOK message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamSockets_UDP_ConnectOK, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamSockets_UDP_ConnectOK message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamSockets_UDP_ConnectOK
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamSockets_UDP_ConnectOK;

    /**
     * Decodes a CMsgSteamSockets_UDP_ConnectOK message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamSockets_UDP_ConnectOK
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamSockets_UDP_ConnectOK;

    /**
     * Verifies a CMsgSteamSockets_UDP_ConnectOK message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamSockets_UDP_ConnectOK message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamSockets_UDP_ConnectOK
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamSockets_UDP_ConnectOK;

    /**
     * Creates a plain object from a CMsgSteamSockets_UDP_ConnectOK message. Also converts values to other types if specified.
     * @param message CMsgSteamSockets_UDP_ConnectOK
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamSockets_UDP_ConnectOK, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamSockets_UDP_ConnectOK to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamSockets_UDP_ConnectOK
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamSockets_UDP_ConnectionClosed. */
export class CMsgSteamSockets_UDP_ConnectionClosed implements ICMsgSteamSockets_UDP_ConnectionClosed {

    /**
     * Constructs a new CMsgSteamSockets_UDP_ConnectionClosed.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamSockets_UDP_ConnectionClosed);

    /** CMsgSteamSockets_UDP_ConnectionClosed toConnectionId. */
    public toConnectionId: number;

    /** CMsgSteamSockets_UDP_ConnectionClosed fromConnectionId. */
    public fromConnectionId: number;

    /** CMsgSteamSockets_UDP_ConnectionClosed debug. */
    public debug: string;

    /** CMsgSteamSockets_UDP_ConnectionClosed reasonCode. */
    public reasonCode: number;

    /**
     * Creates a new CMsgSteamSockets_UDP_ConnectionClosed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamSockets_UDP_ConnectionClosed instance
     */
    public static create(properties?: ICMsgSteamSockets_UDP_ConnectionClosed): CMsgSteamSockets_UDP_ConnectionClosed;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ConnectionClosed message. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectionClosed.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ConnectionClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamSockets_UDP_ConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_ConnectionClosed message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectionClosed.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_ConnectionClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamSockets_UDP_ConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamSockets_UDP_ConnectionClosed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamSockets_UDP_ConnectionClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamSockets_UDP_ConnectionClosed;

    /**
     * Decodes a CMsgSteamSockets_UDP_ConnectionClosed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamSockets_UDP_ConnectionClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamSockets_UDP_ConnectionClosed;

    /**
     * Verifies a CMsgSteamSockets_UDP_ConnectionClosed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamSockets_UDP_ConnectionClosed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamSockets_UDP_ConnectionClosed
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamSockets_UDP_ConnectionClosed;

    /**
     * Creates a plain object from a CMsgSteamSockets_UDP_ConnectionClosed message. Also converts values to other types if specified.
     * @param message CMsgSteamSockets_UDP_ConnectionClosed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamSockets_UDP_ConnectionClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamSockets_UDP_ConnectionClosed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamSockets_UDP_ConnectionClosed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamSockets_UDP_NoConnection. */
export class CMsgSteamSockets_UDP_NoConnection implements ICMsgSteamSockets_UDP_NoConnection {

    /**
     * Constructs a new CMsgSteamSockets_UDP_NoConnection.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamSockets_UDP_NoConnection);

    /** CMsgSteamSockets_UDP_NoConnection fromConnectionId. */
    public fromConnectionId: number;

    /** CMsgSteamSockets_UDP_NoConnection toConnectionId. */
    public toConnectionId: number;

    /**
     * Creates a new CMsgSteamSockets_UDP_NoConnection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamSockets_UDP_NoConnection instance
     */
    public static create(properties?: ICMsgSteamSockets_UDP_NoConnection): CMsgSteamSockets_UDP_NoConnection;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_NoConnection message. Does not implicitly {@link CMsgSteamSockets_UDP_NoConnection.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_NoConnection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamSockets_UDP_NoConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_NoConnection message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_NoConnection.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_NoConnection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamSockets_UDP_NoConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamSockets_UDP_NoConnection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamSockets_UDP_NoConnection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamSockets_UDP_NoConnection;

    /**
     * Decodes a CMsgSteamSockets_UDP_NoConnection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamSockets_UDP_NoConnection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamSockets_UDP_NoConnection;

    /**
     * Verifies a CMsgSteamSockets_UDP_NoConnection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamSockets_UDP_NoConnection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamSockets_UDP_NoConnection
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamSockets_UDP_NoConnection;

    /**
     * Creates a plain object from a CMsgSteamSockets_UDP_NoConnection message. Also converts values to other types if specified.
     * @param message CMsgSteamSockets_UDP_NoConnection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamSockets_UDP_NoConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamSockets_UDP_NoConnection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamSockets_UDP_NoConnection
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgSteamSockets_UDP_Stats. */
export class CMsgSteamSockets_UDP_Stats implements ICMsgSteamSockets_UDP_Stats {

    /**
     * Constructs a new CMsgSteamSockets_UDP_Stats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamSockets_UDP_Stats);

    /** CMsgSteamSockets_UDP_Stats stats. */
    public stats?: (ICMsgSteamDatagramConnectionQuality|null);

    /** CMsgSteamSockets_UDP_Stats flags. */
    public flags: number;

    /**
     * Creates a new CMsgSteamSockets_UDP_Stats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamSockets_UDP_Stats instance
     */
    public static create(properties?: ICMsgSteamSockets_UDP_Stats): CMsgSteamSockets_UDP_Stats;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_Stats message. Does not implicitly {@link CMsgSteamSockets_UDP_Stats.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_Stats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamSockets_UDP_Stats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamSockets_UDP_Stats message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_Stats.verify|verify} messages.
     * @param message CMsgSteamSockets_UDP_Stats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamSockets_UDP_Stats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamSockets_UDP_Stats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamSockets_UDP_Stats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamSockets_UDP_Stats;

    /**
     * Decodes a CMsgSteamSockets_UDP_Stats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamSockets_UDP_Stats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamSockets_UDP_Stats;

    /**
     * Verifies a CMsgSteamSockets_UDP_Stats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamSockets_UDP_Stats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamSockets_UDP_Stats
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamSockets_UDP_Stats;

    /**
     * Creates a plain object from a CMsgSteamSockets_UDP_Stats message. Also converts values to other types if specified.
     * @param message CMsgSteamSockets_UDP_Stats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamSockets_UDP_Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamSockets_UDP_Stats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamSockets_UDP_Stats
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamSockets_UDP_Stats {

    /** Flags enum. */
    enum Flags {
        ACK_REQUEST_E2E = 2,
        ACK_REQUEST_IMMEDIATE = 4,
        NOT_PRIMARY_TRANSPORT_E2E = 16
    }
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
