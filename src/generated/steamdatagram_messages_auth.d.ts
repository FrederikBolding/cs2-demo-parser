import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CMsgSteamDatagramRelayAuthTicket. */
export interface ICMsgSteamDatagramRelayAuthTicket {

    /** CMsgSteamDatagramRelayAuthTicket timeExpiry */
    timeExpiry?: (number|null);

    /** CMsgSteamDatagramRelayAuthTicket authorizedClientIdentityString */
    authorizedClientIdentityString?: (string|null);

    /** CMsgSteamDatagramRelayAuthTicket gameserverIdentityString */
    gameserverIdentityString?: (string|null);

    /** CMsgSteamDatagramRelayAuthTicket authorizedPublicIp */
    authorizedPublicIp?: (number|null);

    /** CMsgSteamDatagramRelayAuthTicket gameserverAddress */
    gameserverAddress?: (Uint8Array|null);

    /** CMsgSteamDatagramRelayAuthTicket appId */
    appId?: (number|null);

    /** CMsgSteamDatagramRelayAuthTicket virtualPort */
    virtualPort?: (number|null);

    /** CMsgSteamDatagramRelayAuthTicket extraFields */
    extraFields?: (CMsgSteamDatagramRelayAuthTicket.IExtraField[]|null);

    /** CMsgSteamDatagramRelayAuthTicket legacyAuthorizedSteamId */
    legacyAuthorizedSteamId?: (number|Long|null);

    /** CMsgSteamDatagramRelayAuthTicket legacyGameserverSteamId */
    legacyGameserverSteamId?: (number|Long|null);

    /** CMsgSteamDatagramRelayAuthTicket legacyGameserverPopId */
    legacyGameserverPopId?: (number|null);

    /** CMsgSteamDatagramRelayAuthTicket legacyAuthorizedClientIdentityBinary */
    legacyAuthorizedClientIdentityBinary?: (Uint8Array|null);

    /** CMsgSteamDatagramRelayAuthTicket legacyGameserverIdentityBinary */
    legacyGameserverIdentityBinary?: (Uint8Array|null);
}

/** Represents a CMsgSteamDatagramRelayAuthTicket. */
export class CMsgSteamDatagramRelayAuthTicket implements ICMsgSteamDatagramRelayAuthTicket {

    /**
     * Constructs a new CMsgSteamDatagramRelayAuthTicket.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramRelayAuthTicket);

    /** CMsgSteamDatagramRelayAuthTicket timeExpiry. */
    public timeExpiry: number;

    /** CMsgSteamDatagramRelayAuthTicket authorizedClientIdentityString. */
    public authorizedClientIdentityString: string;

    /** CMsgSteamDatagramRelayAuthTicket gameserverIdentityString. */
    public gameserverIdentityString: string;

    /** CMsgSteamDatagramRelayAuthTicket authorizedPublicIp. */
    public authorizedPublicIp: number;

    /** CMsgSteamDatagramRelayAuthTicket gameserverAddress. */
    public gameserverAddress: Uint8Array;

    /** CMsgSteamDatagramRelayAuthTicket appId. */
    public appId: number;

    /** CMsgSteamDatagramRelayAuthTicket virtualPort. */
    public virtualPort: number;

    /** CMsgSteamDatagramRelayAuthTicket extraFields. */
    public extraFields: CMsgSteamDatagramRelayAuthTicket.IExtraField[];

    /** CMsgSteamDatagramRelayAuthTicket legacyAuthorizedSteamId. */
    public legacyAuthorizedSteamId: (number|Long);

    /** CMsgSteamDatagramRelayAuthTicket legacyGameserverSteamId. */
    public legacyGameserverSteamId: (number|Long);

    /** CMsgSteamDatagramRelayAuthTicket legacyGameserverPopId. */
    public legacyGameserverPopId: number;

    /** CMsgSteamDatagramRelayAuthTicket legacyAuthorizedClientIdentityBinary. */
    public legacyAuthorizedClientIdentityBinary: Uint8Array;

    /** CMsgSteamDatagramRelayAuthTicket legacyGameserverIdentityBinary. */
    public legacyGameserverIdentityBinary: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramRelayAuthTicket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramRelayAuthTicket instance
     */
    public static create(properties?: ICMsgSteamDatagramRelayAuthTicket): CMsgSteamDatagramRelayAuthTicket;

    /**
     * Encodes the specified CMsgSteamDatagramRelayAuthTicket message. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.verify|verify} messages.
     * @param message CMsgSteamDatagramRelayAuthTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramRelayAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramRelayAuthTicket message, length delimited. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.verify|verify} messages.
     * @param message CMsgSteamDatagramRelayAuthTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramRelayAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramRelayAuthTicket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramRelayAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramRelayAuthTicket;

    /**
     * Decodes a CMsgSteamDatagramRelayAuthTicket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramRelayAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramRelayAuthTicket;

    /**
     * Verifies a CMsgSteamDatagramRelayAuthTicket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramRelayAuthTicket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramRelayAuthTicket
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramRelayAuthTicket;

    /**
     * Creates a plain object from a CMsgSteamDatagramRelayAuthTicket message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramRelayAuthTicket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramRelayAuthTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramRelayAuthTicket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramRelayAuthTicket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgSteamDatagramRelayAuthTicket {

    /** Properties of an ExtraField. */
    interface IExtraField {

        /** ExtraField name */
        name?: (string|null);

        /** ExtraField stringValue */
        stringValue?: (string|null);

        /** ExtraField int64Value */
        int64Value?: (number|Long|null);

        /** ExtraField fixed64Value */
        fixed64Value?: (number|Long|null);
    }

    /** Represents an ExtraField. */
    class ExtraField implements IExtraField {

        /**
         * Constructs a new ExtraField.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgSteamDatagramRelayAuthTicket.IExtraField);

        /** ExtraField name. */
        public name: string;

        /** ExtraField stringValue. */
        public stringValue: string;

        /** ExtraField int64Value. */
        public int64Value: (number|Long);

        /** ExtraField fixed64Value. */
        public fixed64Value: (number|Long);

        /**
         * Creates a new ExtraField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExtraField instance
         */
        public static create(properties?: CMsgSteamDatagramRelayAuthTicket.IExtraField): CMsgSteamDatagramRelayAuthTicket.ExtraField;

        /**
         * Encodes the specified ExtraField message. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.ExtraField.verify|verify} messages.
         * @param message ExtraField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CMsgSteamDatagramRelayAuthTicket.IExtraField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExtraField message, length delimited. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.ExtraField.verify|verify} messages.
         * @param message ExtraField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CMsgSteamDatagramRelayAuthTicket.IExtraField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExtraField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtraField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramRelayAuthTicket.ExtraField;

        /**
         * Decodes an ExtraField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExtraField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramRelayAuthTicket.ExtraField;

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
        public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramRelayAuthTicket.ExtraField;

        /**
         * Creates a plain object from an ExtraField message. Also converts values to other types if specified.
         * @param message ExtraField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CMsgSteamDatagramRelayAuthTicket.ExtraField, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Properties of a CMsgSteamDatagramSignedRelayAuthTicket. */
export interface ICMsgSteamDatagramSignedRelayAuthTicket {

    /** CMsgSteamDatagramSignedRelayAuthTicket reservedDoNotUse */
    reservedDoNotUse?: (number|Long|null);

    /** CMsgSteamDatagramSignedRelayAuthTicket ticket */
    ticket?: (Uint8Array|null);

    /** CMsgSteamDatagramSignedRelayAuthTicket signature */
    signature?: (Uint8Array|null);

    /** CMsgSteamDatagramSignedRelayAuthTicket keyId */
    keyId?: (number|Long|null);

    /** CMsgSteamDatagramSignedRelayAuthTicket certs */
    certs?: (ICMsgSteamDatagramCertificateSigned[]|null);
}

/** Represents a CMsgSteamDatagramSignedRelayAuthTicket. */
export class CMsgSteamDatagramSignedRelayAuthTicket implements ICMsgSteamDatagramSignedRelayAuthTicket {

    /**
     * Constructs a new CMsgSteamDatagramSignedRelayAuthTicket.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramSignedRelayAuthTicket);

    /** CMsgSteamDatagramSignedRelayAuthTicket reservedDoNotUse. */
    public reservedDoNotUse: (number|Long);

    /** CMsgSteamDatagramSignedRelayAuthTicket ticket. */
    public ticket: Uint8Array;

    /** CMsgSteamDatagramSignedRelayAuthTicket signature. */
    public signature: Uint8Array;

    /** CMsgSteamDatagramSignedRelayAuthTicket keyId. */
    public keyId: (number|Long);

    /** CMsgSteamDatagramSignedRelayAuthTicket certs. */
    public certs: ICMsgSteamDatagramCertificateSigned[];

    /**
     * Creates a new CMsgSteamDatagramSignedRelayAuthTicket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramSignedRelayAuthTicket instance
     */
    public static create(properties?: ICMsgSteamDatagramSignedRelayAuthTicket): CMsgSteamDatagramSignedRelayAuthTicket;

    /**
     * Encodes the specified CMsgSteamDatagramSignedRelayAuthTicket message. Does not implicitly {@link CMsgSteamDatagramSignedRelayAuthTicket.verify|verify} messages.
     * @param message CMsgSteamDatagramSignedRelayAuthTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramSignedRelayAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramSignedRelayAuthTicket message, length delimited. Does not implicitly {@link CMsgSteamDatagramSignedRelayAuthTicket.verify|verify} messages.
     * @param message CMsgSteamDatagramSignedRelayAuthTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramSignedRelayAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramSignedRelayAuthTicket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramSignedRelayAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramSignedRelayAuthTicket;

    /**
     * Decodes a CMsgSteamDatagramSignedRelayAuthTicket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramSignedRelayAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramSignedRelayAuthTicket;

    /**
     * Verifies a CMsgSteamDatagramSignedRelayAuthTicket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramSignedRelayAuthTicket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramSignedRelayAuthTicket
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramSignedRelayAuthTicket;

    /**
     * Creates a plain object from a CMsgSteamDatagramSignedRelayAuthTicket message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramSignedRelayAuthTicket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramSignedRelayAuthTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramSignedRelayAuthTicket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramSignedRelayAuthTicket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CMsgSteamDatagramCachedCredentialsForApp. */
export interface ICMsgSteamDatagramCachedCredentialsForApp {

    /** CMsgSteamDatagramCachedCredentialsForApp privateKey */
    privateKey?: (Uint8Array|null);

    /** CMsgSteamDatagramCachedCredentialsForApp cert */
    cert?: (Uint8Array|null);

    /** CMsgSteamDatagramCachedCredentialsForApp relayTickets */
    relayTickets?: (Uint8Array[]|null);
}

/** Represents a CMsgSteamDatagramCachedCredentialsForApp. */
export class CMsgSteamDatagramCachedCredentialsForApp implements ICMsgSteamDatagramCachedCredentialsForApp {

    /**
     * Constructs a new CMsgSteamDatagramCachedCredentialsForApp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramCachedCredentialsForApp);

    /** CMsgSteamDatagramCachedCredentialsForApp privateKey. */
    public privateKey: Uint8Array;

    /** CMsgSteamDatagramCachedCredentialsForApp cert. */
    public cert: Uint8Array;

    /** CMsgSteamDatagramCachedCredentialsForApp relayTickets. */
    public relayTickets: Uint8Array[];

    /**
     * Creates a new CMsgSteamDatagramCachedCredentialsForApp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramCachedCredentialsForApp instance
     */
    public static create(properties?: ICMsgSteamDatagramCachedCredentialsForApp): CMsgSteamDatagramCachedCredentialsForApp;

    /**
     * Encodes the specified CMsgSteamDatagramCachedCredentialsForApp message. Does not implicitly {@link CMsgSteamDatagramCachedCredentialsForApp.verify|verify} messages.
     * @param message CMsgSteamDatagramCachedCredentialsForApp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramCachedCredentialsForApp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramCachedCredentialsForApp message, length delimited. Does not implicitly {@link CMsgSteamDatagramCachedCredentialsForApp.verify|verify} messages.
     * @param message CMsgSteamDatagramCachedCredentialsForApp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramCachedCredentialsForApp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramCachedCredentialsForApp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramCachedCredentialsForApp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramCachedCredentialsForApp;

    /**
     * Decodes a CMsgSteamDatagramCachedCredentialsForApp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramCachedCredentialsForApp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramCachedCredentialsForApp;

    /**
     * Verifies a CMsgSteamDatagramCachedCredentialsForApp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramCachedCredentialsForApp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramCachedCredentialsForApp
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramCachedCredentialsForApp;

    /**
     * Creates a plain object from a CMsgSteamDatagramCachedCredentialsForApp message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramCachedCredentialsForApp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramCachedCredentialsForApp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramCachedCredentialsForApp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramCachedCredentialsForApp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CMsgSteamDatagramGameCoordinatorServerLogin. */
export interface ICMsgSteamDatagramGameCoordinatorServerLogin {

    /** CMsgSteamDatagramGameCoordinatorServerLogin timeGenerated */
    timeGenerated?: (number|null);

    /** CMsgSteamDatagramGameCoordinatorServerLogin appid */
    appid?: (number|null);

    /** CMsgSteamDatagramGameCoordinatorServerLogin routing */
    routing?: (Uint8Array|null);

    /** CMsgSteamDatagramGameCoordinatorServerLogin appdata */
    appdata?: (Uint8Array|null);

    /** CMsgSteamDatagramGameCoordinatorServerLogin legacyIdentityBinary */
    legacyIdentityBinary?: (Uint8Array|null);

    /** CMsgSteamDatagramGameCoordinatorServerLogin identityString */
    identityString?: (string|null);

    /** CMsgSteamDatagramGameCoordinatorServerLogin dummySteamId */
    dummySteamId?: (number|Long|null);
}

/** Represents a CMsgSteamDatagramGameCoordinatorServerLogin. */
export class CMsgSteamDatagramGameCoordinatorServerLogin implements ICMsgSteamDatagramGameCoordinatorServerLogin {

    /**
     * Constructs a new CMsgSteamDatagramGameCoordinatorServerLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramGameCoordinatorServerLogin);

    /** CMsgSteamDatagramGameCoordinatorServerLogin timeGenerated. */
    public timeGenerated: number;

    /** CMsgSteamDatagramGameCoordinatorServerLogin appid. */
    public appid: number;

    /** CMsgSteamDatagramGameCoordinatorServerLogin routing. */
    public routing: Uint8Array;

    /** CMsgSteamDatagramGameCoordinatorServerLogin appdata. */
    public appdata: Uint8Array;

    /** CMsgSteamDatagramGameCoordinatorServerLogin legacyIdentityBinary. */
    public legacyIdentityBinary: Uint8Array;

    /** CMsgSteamDatagramGameCoordinatorServerLogin identityString. */
    public identityString: string;

    /** CMsgSteamDatagramGameCoordinatorServerLogin dummySteamId. */
    public dummySteamId: (number|Long);

    /**
     * Creates a new CMsgSteamDatagramGameCoordinatorServerLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramGameCoordinatorServerLogin instance
     */
    public static create(properties?: ICMsgSteamDatagramGameCoordinatorServerLogin): CMsgSteamDatagramGameCoordinatorServerLogin;

    /**
     * Encodes the specified CMsgSteamDatagramGameCoordinatorServerLogin message. Does not implicitly {@link CMsgSteamDatagramGameCoordinatorServerLogin.verify|verify} messages.
     * @param message CMsgSteamDatagramGameCoordinatorServerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramGameCoordinatorServerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramGameCoordinatorServerLogin message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameCoordinatorServerLogin.verify|verify} messages.
     * @param message CMsgSteamDatagramGameCoordinatorServerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramGameCoordinatorServerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramGameCoordinatorServerLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramGameCoordinatorServerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramGameCoordinatorServerLogin;

    /**
     * Decodes a CMsgSteamDatagramGameCoordinatorServerLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramGameCoordinatorServerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramGameCoordinatorServerLogin;

    /**
     * Verifies a CMsgSteamDatagramGameCoordinatorServerLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramGameCoordinatorServerLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramGameCoordinatorServerLogin
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramGameCoordinatorServerLogin;

    /**
     * Creates a plain object from a CMsgSteamDatagramGameCoordinatorServerLogin message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramGameCoordinatorServerLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramGameCoordinatorServerLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramGameCoordinatorServerLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramGameCoordinatorServerLogin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CMsgSteamDatagramSignedGameCoordinatorServerLogin. */
export interface ICMsgSteamDatagramSignedGameCoordinatorServerLogin {

    /** CMsgSteamDatagramSignedGameCoordinatorServerLogin cert */
    cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamDatagramSignedGameCoordinatorServerLogin login */
    login?: (Uint8Array|null);

    /** CMsgSteamDatagramSignedGameCoordinatorServerLogin signature */
    signature?: (Uint8Array|null);
}

/** Represents a CMsgSteamDatagramSignedGameCoordinatorServerLogin. */
export class CMsgSteamDatagramSignedGameCoordinatorServerLogin implements ICMsgSteamDatagramSignedGameCoordinatorServerLogin {

    /**
     * Constructs a new CMsgSteamDatagramSignedGameCoordinatorServerLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramSignedGameCoordinatorServerLogin);

    /** CMsgSteamDatagramSignedGameCoordinatorServerLogin cert. */
    public cert?: (ICMsgSteamDatagramCertificateSigned|null);

    /** CMsgSteamDatagramSignedGameCoordinatorServerLogin login. */
    public login: Uint8Array;

    /** CMsgSteamDatagramSignedGameCoordinatorServerLogin signature. */
    public signature: Uint8Array;

    /**
     * Creates a new CMsgSteamDatagramSignedGameCoordinatorServerLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramSignedGameCoordinatorServerLogin instance
     */
    public static create(properties?: ICMsgSteamDatagramSignedGameCoordinatorServerLogin): CMsgSteamDatagramSignedGameCoordinatorServerLogin;

    /**
     * Encodes the specified CMsgSteamDatagramSignedGameCoordinatorServerLogin message. Does not implicitly {@link CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify|verify} messages.
     * @param message CMsgSteamDatagramSignedGameCoordinatorServerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramSignedGameCoordinatorServerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramSignedGameCoordinatorServerLogin message, length delimited. Does not implicitly {@link CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify|verify} messages.
     * @param message CMsgSteamDatagramSignedGameCoordinatorServerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramSignedGameCoordinatorServerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramSignedGameCoordinatorServerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramSignedGameCoordinatorServerLogin;

    /**
     * Decodes a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramSignedGameCoordinatorServerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramSignedGameCoordinatorServerLogin;

    /**
     * Verifies a CMsgSteamDatagramSignedGameCoordinatorServerLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramSignedGameCoordinatorServerLogin
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramSignedGameCoordinatorServerLogin;

    /**
     * Creates a plain object from a CMsgSteamDatagramSignedGameCoordinatorServerLogin message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramSignedGameCoordinatorServerLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramSignedGameCoordinatorServerLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramSignedGameCoordinatorServerLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramSignedGameCoordinatorServerLogin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CMsgSteamDatagramHostedServerAddressPlaintext. */
export interface ICMsgSteamDatagramHostedServerAddressPlaintext {

    /** CMsgSteamDatagramHostedServerAddressPlaintext ipv4 */
    ipv4?: (number|null);

    /** CMsgSteamDatagramHostedServerAddressPlaintext ipv6 */
    ipv6?: (Uint8Array|null);

    /** CMsgSteamDatagramHostedServerAddressPlaintext port */
    port?: (number|null);

    /** CMsgSteamDatagramHostedServerAddressPlaintext routingSecret */
    routingSecret?: (number|Long|null);

    /** CMsgSteamDatagramHostedServerAddressPlaintext protocolVersion */
    protocolVersion?: (number|null);
}

/** Represents a CMsgSteamDatagramHostedServerAddressPlaintext. */
export class CMsgSteamDatagramHostedServerAddressPlaintext implements ICMsgSteamDatagramHostedServerAddressPlaintext {

    /**
     * Constructs a new CMsgSteamDatagramHostedServerAddressPlaintext.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgSteamDatagramHostedServerAddressPlaintext);

    /** CMsgSteamDatagramHostedServerAddressPlaintext ipv4. */
    public ipv4: number;

    /** CMsgSteamDatagramHostedServerAddressPlaintext ipv6. */
    public ipv6: Uint8Array;

    /** CMsgSteamDatagramHostedServerAddressPlaintext port. */
    public port: number;

    /** CMsgSteamDatagramHostedServerAddressPlaintext routingSecret. */
    public routingSecret: (number|Long);

    /** CMsgSteamDatagramHostedServerAddressPlaintext protocolVersion. */
    public protocolVersion: number;

    /**
     * Creates a new CMsgSteamDatagramHostedServerAddressPlaintext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgSteamDatagramHostedServerAddressPlaintext instance
     */
    public static create(properties?: ICMsgSteamDatagramHostedServerAddressPlaintext): CMsgSteamDatagramHostedServerAddressPlaintext;

    /**
     * Encodes the specified CMsgSteamDatagramHostedServerAddressPlaintext message. Does not implicitly {@link CMsgSteamDatagramHostedServerAddressPlaintext.verify|verify} messages.
     * @param message CMsgSteamDatagramHostedServerAddressPlaintext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgSteamDatagramHostedServerAddressPlaintext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgSteamDatagramHostedServerAddressPlaintext message, length delimited. Does not implicitly {@link CMsgSteamDatagramHostedServerAddressPlaintext.verify|verify} messages.
     * @param message CMsgSteamDatagramHostedServerAddressPlaintext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgSteamDatagramHostedServerAddressPlaintext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgSteamDatagramHostedServerAddressPlaintext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgSteamDatagramHostedServerAddressPlaintext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgSteamDatagramHostedServerAddressPlaintext;

    /**
     * Decodes a CMsgSteamDatagramHostedServerAddressPlaintext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgSteamDatagramHostedServerAddressPlaintext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgSteamDatagramHostedServerAddressPlaintext;

    /**
     * Verifies a CMsgSteamDatagramHostedServerAddressPlaintext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgSteamDatagramHostedServerAddressPlaintext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgSteamDatagramHostedServerAddressPlaintext
     */
    public static fromObject(object: { [k: string]: any }): CMsgSteamDatagramHostedServerAddressPlaintext;

    /**
     * Creates a plain object from a CMsgSteamDatagramHostedServerAddressPlaintext message. Also converts values to other types if specified.
     * @param message CMsgSteamDatagramHostedServerAddressPlaintext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgSteamDatagramHostedServerAddressPlaintext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgSteamDatagramHostedServerAddressPlaintext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgSteamDatagramHostedServerAddressPlaintext
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

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
