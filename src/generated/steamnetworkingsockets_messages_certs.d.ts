import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CMsgSteamNetworkingIdentityLegacyBinary. */
export interface ICMsgSteamNetworkingIdentityLegacyBinary {

    /** CMsgSteamNetworkingIdentityLegacyBinary steamId */
    steamId?: (number|Long|null);

    /** CMsgSteamNetworkingIdentityLegacyBinary xboxPairwiseId */
    xboxPairwiseId?: (string|null);

    /** CMsgSteamNetworkingIdentityLegacyBinary genericBytes */
    genericBytes?: (Uint8Array|null);

    /** CMsgSteamNetworkingIdentityLegacyBinary genericString */
    genericString?: (string|null);

    /** CMsgSteamNetworkingIdentityLegacyBinary ipv6AndPort */
    ipv6AndPort?: (Uint8Array|null);
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

/** Properties of a CMsgSteamDatagramCertificate. */
export interface ICMsgSteamDatagramCertificate {

    /** CMsgSteamDatagramCertificate keyType */
    keyType?: (CMsgSteamDatagramCertificate.EKeyType|null);

    /** CMsgSteamDatagramCertificate keyData */
    keyData?: (Uint8Array|null);

    /** CMsgSteamDatagramCertificate legacySteamId */
    legacySteamId?: (number|Long|null);

    /** CMsgSteamDatagramCertificate legacyIdentityBinary */
    legacyIdentityBinary?: (ICMsgSteamNetworkingIdentityLegacyBinary|null);

    /** CMsgSteamDatagramCertificate identityString */
    identityString?: (string|null);

    /** CMsgSteamDatagramCertificate gameserverDatacenterIds */
    gameserverDatacenterIds?: (number[]|null);

    /** CMsgSteamDatagramCertificate timeCreated */
    timeCreated?: (number|null);

    /** CMsgSteamDatagramCertificate timeExpiry */
    timeExpiry?: (number|null);

    /** CMsgSteamDatagramCertificate appIds */
    appIds?: (number[]|null);

    /** CMsgSteamDatagramCertificate ipAddresses */
    ipAddresses?: (string[]|null);
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

/** Properties of a CMsgSteamDatagramCertificateSigned. */
export interface ICMsgSteamDatagramCertificateSigned {

    /** CMsgSteamDatagramCertificateSigned cert */
    cert?: (Uint8Array|null);

    /** CMsgSteamDatagramCertificateSigned caKeyId */
    caKeyId?: (number|Long|null);

    /** CMsgSteamDatagramCertificateSigned caSignature */
    caSignature?: (Uint8Array|null);

    /** CMsgSteamDatagramCertificateSigned privateKeyData */
    privateKeyData?: (Uint8Array|null);
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

/** Properties of a CMsgSteamDatagramCertificateRequest. */
export interface ICMsgSteamDatagramCertificateRequest {

    /** CMsgSteamDatagramCertificateRequest cert */
    cert?: (ICMsgSteamDatagramCertificate|null);
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
