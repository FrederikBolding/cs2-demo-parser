import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CPublishedFile_Subscribe_Request. */
export interface ICPublishedFile_Subscribe_Request {

    /** CPublishedFile_Subscribe_Request publishedfileid */
    publishedfileid?: (number|Long|null);

    /** CPublishedFile_Subscribe_Request listType */
    listType?: (number|null);

    /** CPublishedFile_Subscribe_Request appid */
    appid?: (number|null);

    /** CPublishedFile_Subscribe_Request notifyClient */
    notifyClient?: (boolean|null);
}

/** Represents a CPublishedFile_Subscribe_Request. */
export class CPublishedFile_Subscribe_Request implements ICPublishedFile_Subscribe_Request {

    /**
     * Constructs a new CPublishedFile_Subscribe_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Subscribe_Request);

    /** CPublishedFile_Subscribe_Request publishedfileid. */
    public publishedfileid: (number|Long);

    /** CPublishedFile_Subscribe_Request listType. */
    public listType: number;

    /** CPublishedFile_Subscribe_Request appid. */
    public appid: number;

    /** CPublishedFile_Subscribe_Request notifyClient. */
    public notifyClient: boolean;

    /**
     * Creates a new CPublishedFile_Subscribe_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Subscribe_Request instance
     */
    public static create(properties?: ICPublishedFile_Subscribe_Request): CPublishedFile_Subscribe_Request;

    /**
     * Encodes the specified CPublishedFile_Subscribe_Request message. Does not implicitly {@link CPublishedFile_Subscribe_Request.verify|verify} messages.
     * @param message CPublishedFile_Subscribe_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Subscribe_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Subscribe_Request message, length delimited. Does not implicitly {@link CPublishedFile_Subscribe_Request.verify|verify} messages.
     * @param message CPublishedFile_Subscribe_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Subscribe_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Subscribe_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Subscribe_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Subscribe_Request;

    /**
     * Decodes a CPublishedFile_Subscribe_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Subscribe_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Subscribe_Request;

    /**
     * Verifies a CPublishedFile_Subscribe_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Subscribe_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Subscribe_Request
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Subscribe_Request;

    /**
     * Creates a plain object from a CPublishedFile_Subscribe_Request message. Also converts values to other types if specified.
     * @param message CPublishedFile_Subscribe_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Subscribe_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Subscribe_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Subscribe_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_Subscribe_Response. */
export interface ICPublishedFile_Subscribe_Response {
}

/** Represents a CPublishedFile_Subscribe_Response. */
export class CPublishedFile_Subscribe_Response implements ICPublishedFile_Subscribe_Response {

    /**
     * Constructs a new CPublishedFile_Subscribe_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Subscribe_Response);

    /**
     * Creates a new CPublishedFile_Subscribe_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Subscribe_Response instance
     */
    public static create(properties?: ICPublishedFile_Subscribe_Response): CPublishedFile_Subscribe_Response;

    /**
     * Encodes the specified CPublishedFile_Subscribe_Response message. Does not implicitly {@link CPublishedFile_Subscribe_Response.verify|verify} messages.
     * @param message CPublishedFile_Subscribe_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Subscribe_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Subscribe_Response message, length delimited. Does not implicitly {@link CPublishedFile_Subscribe_Response.verify|verify} messages.
     * @param message CPublishedFile_Subscribe_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Subscribe_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Subscribe_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Subscribe_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Subscribe_Response;

    /**
     * Decodes a CPublishedFile_Subscribe_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Subscribe_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Subscribe_Response;

    /**
     * Verifies a CPublishedFile_Subscribe_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Subscribe_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Subscribe_Response
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Subscribe_Response;

    /**
     * Creates a plain object from a CPublishedFile_Subscribe_Response message. Also converts values to other types if specified.
     * @param message CPublishedFile_Subscribe_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Subscribe_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Subscribe_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Subscribe_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_Unsubscribe_Request. */
export interface ICPublishedFile_Unsubscribe_Request {

    /** CPublishedFile_Unsubscribe_Request publishedfileid */
    publishedfileid?: (number|Long|null);

    /** CPublishedFile_Unsubscribe_Request listType */
    listType?: (number|null);

    /** CPublishedFile_Unsubscribe_Request appid */
    appid?: (number|null);

    /** CPublishedFile_Unsubscribe_Request notifyClient */
    notifyClient?: (boolean|null);
}

/** Represents a CPublishedFile_Unsubscribe_Request. */
export class CPublishedFile_Unsubscribe_Request implements ICPublishedFile_Unsubscribe_Request {

    /**
     * Constructs a new CPublishedFile_Unsubscribe_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Unsubscribe_Request);

    /** CPublishedFile_Unsubscribe_Request publishedfileid. */
    public publishedfileid: (number|Long);

    /** CPublishedFile_Unsubscribe_Request listType. */
    public listType: number;

    /** CPublishedFile_Unsubscribe_Request appid. */
    public appid: number;

    /** CPublishedFile_Unsubscribe_Request notifyClient. */
    public notifyClient: boolean;

    /**
     * Creates a new CPublishedFile_Unsubscribe_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Unsubscribe_Request instance
     */
    public static create(properties?: ICPublishedFile_Unsubscribe_Request): CPublishedFile_Unsubscribe_Request;

    /**
     * Encodes the specified CPublishedFile_Unsubscribe_Request message. Does not implicitly {@link CPublishedFile_Unsubscribe_Request.verify|verify} messages.
     * @param message CPublishedFile_Unsubscribe_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Unsubscribe_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Unsubscribe_Request message, length delimited. Does not implicitly {@link CPublishedFile_Unsubscribe_Request.verify|verify} messages.
     * @param message CPublishedFile_Unsubscribe_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Unsubscribe_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Unsubscribe_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Unsubscribe_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Unsubscribe_Request;

    /**
     * Decodes a CPublishedFile_Unsubscribe_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Unsubscribe_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Unsubscribe_Request;

    /**
     * Verifies a CPublishedFile_Unsubscribe_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Unsubscribe_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Unsubscribe_Request
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Unsubscribe_Request;

    /**
     * Creates a plain object from a CPublishedFile_Unsubscribe_Request message. Also converts values to other types if specified.
     * @param message CPublishedFile_Unsubscribe_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Unsubscribe_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Unsubscribe_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Unsubscribe_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_Unsubscribe_Response. */
export interface ICPublishedFile_Unsubscribe_Response {
}

/** Represents a CPublishedFile_Unsubscribe_Response. */
export class CPublishedFile_Unsubscribe_Response implements ICPublishedFile_Unsubscribe_Response {

    /**
     * Constructs a new CPublishedFile_Unsubscribe_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Unsubscribe_Response);

    /**
     * Creates a new CPublishedFile_Unsubscribe_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Unsubscribe_Response instance
     */
    public static create(properties?: ICPublishedFile_Unsubscribe_Response): CPublishedFile_Unsubscribe_Response;

    /**
     * Encodes the specified CPublishedFile_Unsubscribe_Response message. Does not implicitly {@link CPublishedFile_Unsubscribe_Response.verify|verify} messages.
     * @param message CPublishedFile_Unsubscribe_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Unsubscribe_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Unsubscribe_Response message, length delimited. Does not implicitly {@link CPublishedFile_Unsubscribe_Response.verify|verify} messages.
     * @param message CPublishedFile_Unsubscribe_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Unsubscribe_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Unsubscribe_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Unsubscribe_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Unsubscribe_Response;

    /**
     * Decodes a CPublishedFile_Unsubscribe_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Unsubscribe_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Unsubscribe_Response;

    /**
     * Verifies a CPublishedFile_Unsubscribe_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Unsubscribe_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Unsubscribe_Response
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Unsubscribe_Response;

    /**
     * Creates a plain object from a CPublishedFile_Unsubscribe_Response message. Also converts values to other types if specified.
     * @param message CPublishedFile_Unsubscribe_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Unsubscribe_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Unsubscribe_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Unsubscribe_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_Publish_Request. */
export interface ICPublishedFile_Publish_Request {

    /** CPublishedFile_Publish_Request appid */
    appid?: (number|null);

    /** CPublishedFile_Publish_Request consumerAppid */
    consumerAppid?: (number|null);

    /** CPublishedFile_Publish_Request cloudfilename */
    cloudfilename?: (string|null);

    /** CPublishedFile_Publish_Request previewCloudfilename */
    previewCloudfilename?: (string|null);

    /** CPublishedFile_Publish_Request title */
    title?: (string|null);

    /** CPublishedFile_Publish_Request fileDescription */
    fileDescription?: (string|null);

    /** CPublishedFile_Publish_Request fileType */
    fileType?: (number|null);

    /** CPublishedFile_Publish_Request consumerShortcutName */
    consumerShortcutName?: (string|null);

    /** CPublishedFile_Publish_Request youtubeUsername */
    youtubeUsername?: (string|null);

    /** CPublishedFile_Publish_Request youtubeVideoid */
    youtubeVideoid?: (string|null);

    /** CPublishedFile_Publish_Request visibility */
    visibility?: (number|null);

    /** CPublishedFile_Publish_Request redirectUri */
    redirectUri?: (string|null);

    /** CPublishedFile_Publish_Request tags */
    tags?: (string[]|null);

    /** CPublishedFile_Publish_Request collectionType */
    collectionType?: (string|null);

    /** CPublishedFile_Publish_Request gameType */
    gameType?: (string|null);

    /** CPublishedFile_Publish_Request url */
    url?: (string|null);
}

/** Represents a CPublishedFile_Publish_Request. */
export class CPublishedFile_Publish_Request implements ICPublishedFile_Publish_Request {

    /**
     * Constructs a new CPublishedFile_Publish_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Publish_Request);

    /** CPublishedFile_Publish_Request appid. */
    public appid: number;

    /** CPublishedFile_Publish_Request consumerAppid. */
    public consumerAppid: number;

    /** CPublishedFile_Publish_Request cloudfilename. */
    public cloudfilename: string;

    /** CPublishedFile_Publish_Request previewCloudfilename. */
    public previewCloudfilename: string;

    /** CPublishedFile_Publish_Request title. */
    public title: string;

    /** CPublishedFile_Publish_Request fileDescription. */
    public fileDescription: string;

    /** CPublishedFile_Publish_Request fileType. */
    public fileType: number;

    /** CPublishedFile_Publish_Request consumerShortcutName. */
    public consumerShortcutName: string;

    /** CPublishedFile_Publish_Request youtubeUsername. */
    public youtubeUsername: string;

    /** CPublishedFile_Publish_Request youtubeVideoid. */
    public youtubeVideoid: string;

    /** CPublishedFile_Publish_Request visibility. */
    public visibility: number;

    /** CPublishedFile_Publish_Request redirectUri. */
    public redirectUri: string;

    /** CPublishedFile_Publish_Request tags. */
    public tags: string[];

    /** CPublishedFile_Publish_Request collectionType. */
    public collectionType: string;

    /** CPublishedFile_Publish_Request gameType. */
    public gameType: string;

    /** CPublishedFile_Publish_Request url. */
    public url: string;

    /**
     * Creates a new CPublishedFile_Publish_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Publish_Request instance
     */
    public static create(properties?: ICPublishedFile_Publish_Request): CPublishedFile_Publish_Request;

    /**
     * Encodes the specified CPublishedFile_Publish_Request message. Does not implicitly {@link CPublishedFile_Publish_Request.verify|verify} messages.
     * @param message CPublishedFile_Publish_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Publish_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Publish_Request message, length delimited. Does not implicitly {@link CPublishedFile_Publish_Request.verify|verify} messages.
     * @param message CPublishedFile_Publish_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Publish_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Publish_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Publish_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Publish_Request;

    /**
     * Decodes a CPublishedFile_Publish_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Publish_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Publish_Request;

    /**
     * Verifies a CPublishedFile_Publish_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Publish_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Publish_Request
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Publish_Request;

    /**
     * Creates a plain object from a CPublishedFile_Publish_Request message. Also converts values to other types if specified.
     * @param message CPublishedFile_Publish_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Publish_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Publish_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Publish_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_Publish_Response. */
export interface ICPublishedFile_Publish_Response {

    /** CPublishedFile_Publish_Response publishedfileid */
    publishedfileid?: (number|Long|null);

    /** CPublishedFile_Publish_Response redirectUri */
    redirectUri?: (string|null);
}

/** Represents a CPublishedFile_Publish_Response. */
export class CPublishedFile_Publish_Response implements ICPublishedFile_Publish_Response {

    /**
     * Constructs a new CPublishedFile_Publish_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Publish_Response);

    /** CPublishedFile_Publish_Response publishedfileid. */
    public publishedfileid: (number|Long);

    /** CPublishedFile_Publish_Response redirectUri. */
    public redirectUri: string;

    /**
     * Creates a new CPublishedFile_Publish_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Publish_Response instance
     */
    public static create(properties?: ICPublishedFile_Publish_Response): CPublishedFile_Publish_Response;

    /**
     * Encodes the specified CPublishedFile_Publish_Response message. Does not implicitly {@link CPublishedFile_Publish_Response.verify|verify} messages.
     * @param message CPublishedFile_Publish_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Publish_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Publish_Response message, length delimited. Does not implicitly {@link CPublishedFile_Publish_Response.verify|verify} messages.
     * @param message CPublishedFile_Publish_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Publish_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Publish_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Publish_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Publish_Response;

    /**
     * Decodes a CPublishedFile_Publish_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Publish_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Publish_Response;

    /**
     * Verifies a CPublishedFile_Publish_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Publish_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Publish_Response
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Publish_Response;

    /**
     * Creates a plain object from a CPublishedFile_Publish_Response message. Also converts values to other types if specified.
     * @param message CPublishedFile_Publish_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Publish_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Publish_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Publish_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_GetDetails_Request. */
export interface ICPublishedFile_GetDetails_Request {

    /** CPublishedFile_GetDetails_Request publishedfileids */
    publishedfileids?: ((number|Long)[]|null);

    /** CPublishedFile_GetDetails_Request includetags */
    includetags?: (boolean|null);

    /** CPublishedFile_GetDetails_Request includeadditionalpreviews */
    includeadditionalpreviews?: (boolean|null);

    /** CPublishedFile_GetDetails_Request includechildren */
    includechildren?: (boolean|null);

    /** CPublishedFile_GetDetails_Request includekvtags */
    includekvtags?: (boolean|null);

    /** CPublishedFile_GetDetails_Request includevotes */
    includevotes?: (boolean|null);

    /** CPublishedFile_GetDetails_Request shortDescription */
    shortDescription?: (boolean|null);
}

/** Represents a CPublishedFile_GetDetails_Request. */
export class CPublishedFile_GetDetails_Request implements ICPublishedFile_GetDetails_Request {

    /**
     * Constructs a new CPublishedFile_GetDetails_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_GetDetails_Request);

    /** CPublishedFile_GetDetails_Request publishedfileids. */
    public publishedfileids: (number|Long)[];

    /** CPublishedFile_GetDetails_Request includetags. */
    public includetags: boolean;

    /** CPublishedFile_GetDetails_Request includeadditionalpreviews. */
    public includeadditionalpreviews: boolean;

    /** CPublishedFile_GetDetails_Request includechildren. */
    public includechildren: boolean;

    /** CPublishedFile_GetDetails_Request includekvtags. */
    public includekvtags: boolean;

    /** CPublishedFile_GetDetails_Request includevotes. */
    public includevotes: boolean;

    /** CPublishedFile_GetDetails_Request shortDescription. */
    public shortDescription: boolean;

    /**
     * Creates a new CPublishedFile_GetDetails_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_GetDetails_Request instance
     */
    public static create(properties?: ICPublishedFile_GetDetails_Request): CPublishedFile_GetDetails_Request;

    /**
     * Encodes the specified CPublishedFile_GetDetails_Request message. Does not implicitly {@link CPublishedFile_GetDetails_Request.verify|verify} messages.
     * @param message CPublishedFile_GetDetails_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_GetDetails_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_GetDetails_Request message, length delimited. Does not implicitly {@link CPublishedFile_GetDetails_Request.verify|verify} messages.
     * @param message CPublishedFile_GetDetails_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_GetDetails_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_GetDetails_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_GetDetails_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_GetDetails_Request;

    /**
     * Decodes a CPublishedFile_GetDetails_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_GetDetails_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_GetDetails_Request;

    /**
     * Verifies a CPublishedFile_GetDetails_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_GetDetails_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_GetDetails_Request
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_GetDetails_Request;

    /**
     * Creates a plain object from a CPublishedFile_GetDetails_Request message. Also converts values to other types if specified.
     * @param message CPublishedFile_GetDetails_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_GetDetails_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_GetDetails_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_GetDetails_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublishedFileDetails. */
export interface IPublishedFileDetails {

    /** PublishedFileDetails result */
    result?: (number|null);

    /** PublishedFileDetails publishedfileid */
    publishedfileid?: (number|Long|null);

    /** PublishedFileDetails creator */
    creator?: (number|Long|null);

    /** PublishedFileDetails creatorAppid */
    creatorAppid?: (number|null);

    /** PublishedFileDetails consumerAppid */
    consumerAppid?: (number|null);

    /** PublishedFileDetails consumerShortcutid */
    consumerShortcutid?: (number|null);

    /** PublishedFileDetails filename */
    filename?: (string|null);

    /** PublishedFileDetails fileSize */
    fileSize?: (number|Long|null);

    /** PublishedFileDetails previewFileSize */
    previewFileSize?: (number|Long|null);

    /** PublishedFileDetails fileUrl */
    fileUrl?: (string|null);

    /** PublishedFileDetails previewUrl */
    previewUrl?: (string|null);

    /** PublishedFileDetails youtubevideoid */
    youtubevideoid?: (string|null);

    /** PublishedFileDetails url */
    url?: (string|null);

    /** PublishedFileDetails hcontentFile */
    hcontentFile?: (number|Long|null);

    /** PublishedFileDetails hcontentPreview */
    hcontentPreview?: (number|Long|null);

    /** PublishedFileDetails title */
    title?: (string|null);

    /** PublishedFileDetails fileDescription */
    fileDescription?: (string|null);

    /** PublishedFileDetails shortDescription */
    shortDescription?: (string|null);

    /** PublishedFileDetails timeCreated */
    timeCreated?: (number|null);

    /** PublishedFileDetails timeUpdated */
    timeUpdated?: (number|null);

    /** PublishedFileDetails visibility */
    visibility?: (number|null);

    /** PublishedFileDetails flags */
    flags?: (number|null);

    /** PublishedFileDetails workshopFile */
    workshopFile?: (boolean|null);

    /** PublishedFileDetails workshopAccepted */
    workshopAccepted?: (boolean|null);

    /** PublishedFileDetails showSubscribeAll */
    showSubscribeAll?: (boolean|null);

    /** PublishedFileDetails numCommentsDeveloper */
    numCommentsDeveloper?: (number|null);

    /** PublishedFileDetails numCommentsPublic */
    numCommentsPublic?: (number|null);

    /** PublishedFileDetails banned */
    banned?: (boolean|null);

    /** PublishedFileDetails banReason */
    banReason?: (string|null);

    /** PublishedFileDetails banner */
    banner?: (number|Long|null);

    /** PublishedFileDetails canBeDeleted */
    canBeDeleted?: (boolean|null);

    /** PublishedFileDetails incompatible */
    incompatible?: (boolean|null);

    /** PublishedFileDetails appName */
    appName?: (string|null);

    /** PublishedFileDetails fileType */
    fileType?: (number|null);

    /** PublishedFileDetails canSubscribe */
    canSubscribe?: (boolean|null);

    /** PublishedFileDetails subscriptions */
    subscriptions?: (number|null);

    /** PublishedFileDetails favorited */
    favorited?: (number|null);

    /** PublishedFileDetails followers */
    followers?: (number|null);

    /** PublishedFileDetails lifetimeSubscriptions */
    lifetimeSubscriptions?: (number|null);

    /** PublishedFileDetails lifetimeFavorited */
    lifetimeFavorited?: (number|null);

    /** PublishedFileDetails lifetimeFollowers */
    lifetimeFollowers?: (number|null);

    /** PublishedFileDetails views */
    views?: (number|null);

    /** PublishedFileDetails imageWidth */
    imageWidth?: (number|null);

    /** PublishedFileDetails imageHeight */
    imageHeight?: (number|null);

    /** PublishedFileDetails imageUrl */
    imageUrl?: (string|null);

    /** PublishedFileDetails spoilerTag */
    spoilerTag?: (boolean|null);

    /** PublishedFileDetails shortcutid */
    shortcutid?: (number|null);

    /** PublishedFileDetails shortcutname */
    shortcutname?: (string|null);

    /** PublishedFileDetails numChildren */
    numChildren?: (number|null);

    /** PublishedFileDetails numReports */
    numReports?: (number|null);

    /** PublishedFileDetails previews */
    previews?: (PublishedFileDetails.IPreview[]|null);

    /** PublishedFileDetails tags */
    tags?: (PublishedFileDetails.ITag[]|null);

    /** PublishedFileDetails children */
    children?: (PublishedFileDetails.IChild[]|null);

    /** PublishedFileDetails kvtags */
    kvtags?: (PublishedFileDetails.IKVTag[]|null);

    /** PublishedFileDetails voteData */
    voteData?: (PublishedFileDetails.IVoteData|null);

    /** PublishedFileDetails timeSubscribed */
    timeSubscribed?: (number|null);
}

/** Represents a PublishedFileDetails. */
export class PublishedFileDetails implements IPublishedFileDetails {

    /**
     * Constructs a new PublishedFileDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPublishedFileDetails);

    /** PublishedFileDetails result. */
    public result: number;

    /** PublishedFileDetails publishedfileid. */
    public publishedfileid: (number|Long);

    /** PublishedFileDetails creator. */
    public creator: (number|Long);

    /** PublishedFileDetails creatorAppid. */
    public creatorAppid: number;

    /** PublishedFileDetails consumerAppid. */
    public consumerAppid: number;

    /** PublishedFileDetails consumerShortcutid. */
    public consumerShortcutid: number;

    /** PublishedFileDetails filename. */
    public filename: string;

    /** PublishedFileDetails fileSize. */
    public fileSize: (number|Long);

    /** PublishedFileDetails previewFileSize. */
    public previewFileSize: (number|Long);

    /** PublishedFileDetails fileUrl. */
    public fileUrl: string;

    /** PublishedFileDetails previewUrl. */
    public previewUrl: string;

    /** PublishedFileDetails youtubevideoid. */
    public youtubevideoid: string;

    /** PublishedFileDetails url. */
    public url: string;

    /** PublishedFileDetails hcontentFile. */
    public hcontentFile: (number|Long);

    /** PublishedFileDetails hcontentPreview. */
    public hcontentPreview: (number|Long);

    /** PublishedFileDetails title. */
    public title: string;

    /** PublishedFileDetails fileDescription. */
    public fileDescription: string;

    /** PublishedFileDetails shortDescription. */
    public shortDescription: string;

    /** PublishedFileDetails timeCreated. */
    public timeCreated: number;

    /** PublishedFileDetails timeUpdated. */
    public timeUpdated: number;

    /** PublishedFileDetails visibility. */
    public visibility: number;

    /** PublishedFileDetails flags. */
    public flags: number;

    /** PublishedFileDetails workshopFile. */
    public workshopFile: boolean;

    /** PublishedFileDetails workshopAccepted. */
    public workshopAccepted: boolean;

    /** PublishedFileDetails showSubscribeAll. */
    public showSubscribeAll: boolean;

    /** PublishedFileDetails numCommentsDeveloper. */
    public numCommentsDeveloper: number;

    /** PublishedFileDetails numCommentsPublic. */
    public numCommentsPublic: number;

    /** PublishedFileDetails banned. */
    public banned: boolean;

    /** PublishedFileDetails banReason. */
    public banReason: string;

    /** PublishedFileDetails banner. */
    public banner: (number|Long);

    /** PublishedFileDetails canBeDeleted. */
    public canBeDeleted: boolean;

    /** PublishedFileDetails incompatible. */
    public incompatible: boolean;

    /** PublishedFileDetails appName. */
    public appName: string;

    /** PublishedFileDetails fileType. */
    public fileType: number;

    /** PublishedFileDetails canSubscribe. */
    public canSubscribe: boolean;

    /** PublishedFileDetails subscriptions. */
    public subscriptions: number;

    /** PublishedFileDetails favorited. */
    public favorited: number;

    /** PublishedFileDetails followers. */
    public followers: number;

    /** PublishedFileDetails lifetimeSubscriptions. */
    public lifetimeSubscriptions: number;

    /** PublishedFileDetails lifetimeFavorited. */
    public lifetimeFavorited: number;

    /** PublishedFileDetails lifetimeFollowers. */
    public lifetimeFollowers: number;

    /** PublishedFileDetails views. */
    public views: number;

    /** PublishedFileDetails imageWidth. */
    public imageWidth: number;

    /** PublishedFileDetails imageHeight. */
    public imageHeight: number;

    /** PublishedFileDetails imageUrl. */
    public imageUrl: string;

    /** PublishedFileDetails spoilerTag. */
    public spoilerTag: boolean;

    /** PublishedFileDetails shortcutid. */
    public shortcutid: number;

    /** PublishedFileDetails shortcutname. */
    public shortcutname: string;

    /** PublishedFileDetails numChildren. */
    public numChildren: number;

    /** PublishedFileDetails numReports. */
    public numReports: number;

    /** PublishedFileDetails previews. */
    public previews: PublishedFileDetails.IPreview[];

    /** PublishedFileDetails tags. */
    public tags: PublishedFileDetails.ITag[];

    /** PublishedFileDetails children. */
    public children: PublishedFileDetails.IChild[];

    /** PublishedFileDetails kvtags. */
    public kvtags: PublishedFileDetails.IKVTag[];

    /** PublishedFileDetails voteData. */
    public voteData?: (PublishedFileDetails.IVoteData|null);

    /** PublishedFileDetails timeSubscribed. */
    public timeSubscribed: number;

    /**
     * Creates a new PublishedFileDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PublishedFileDetails instance
     */
    public static create(properties?: IPublishedFileDetails): PublishedFileDetails;

    /**
     * Encodes the specified PublishedFileDetails message. Does not implicitly {@link PublishedFileDetails.verify|verify} messages.
     * @param message PublishedFileDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPublishedFileDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PublishedFileDetails message, length delimited. Does not implicitly {@link PublishedFileDetails.verify|verify} messages.
     * @param message PublishedFileDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPublishedFileDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublishedFileDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PublishedFileDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublishedFileDetails;

    /**
     * Decodes a PublishedFileDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PublishedFileDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublishedFileDetails;

    /**
     * Verifies a PublishedFileDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PublishedFileDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PublishedFileDetails
     */
    public static fromObject(object: { [k: string]: any }): PublishedFileDetails;

    /**
     * Creates a plain object from a PublishedFileDetails message. Also converts values to other types if specified.
     * @param message PublishedFileDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PublishedFileDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PublishedFileDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PublishedFileDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PublishedFileDetails {

    /** Properties of a Tag. */
    interface ITag {

        /** Tag tag */
        tag?: (string|null);

        /** Tag adminonly */
        adminonly?: (boolean|null);
    }

    /** Represents a Tag. */
    class Tag implements ITag {

        /**
         * Constructs a new Tag.
         * @param [properties] Properties to set
         */
        constructor(properties?: PublishedFileDetails.ITag);

        /** Tag tag. */
        public tag: string;

        /** Tag adminonly. */
        public adminonly: boolean;

        /**
         * Creates a new Tag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tag instance
         */
        public static create(properties?: PublishedFileDetails.ITag): PublishedFileDetails.Tag;

        /**
         * Encodes the specified Tag message. Does not implicitly {@link PublishedFileDetails.Tag.verify|verify} messages.
         * @param message Tag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PublishedFileDetails.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Tag message, length delimited. Does not implicitly {@link PublishedFileDetails.Tag.verify|verify} messages.
         * @param message Tag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PublishedFileDetails.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublishedFileDetails.Tag;

        /**
         * Decodes a Tag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublishedFileDetails.Tag;

        /**
         * Verifies a Tag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Tag
         */
        public static fromObject(object: { [k: string]: any }): PublishedFileDetails.Tag;

        /**
         * Creates a plain object from a Tag message. Also converts values to other types if specified.
         * @param message Tag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PublishedFileDetails.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Tag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Tag
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Preview. */
    interface IPreview {

        /** Preview previewid */
        previewid?: (number|Long|null);

        /** Preview sortorder */
        sortorder?: (number|null);

        /** Preview url */
        url?: (string|null);

        /** Preview size */
        size?: (number|null);

        /** Preview filename */
        filename?: (string|null);

        /** Preview youtubevideoid */
        youtubevideoid?: (string|null);
    }

    /** Represents a Preview. */
    class Preview implements IPreview {

        /**
         * Constructs a new Preview.
         * @param [properties] Properties to set
         */
        constructor(properties?: PublishedFileDetails.IPreview);

        /** Preview previewid. */
        public previewid: (number|Long);

        /** Preview sortorder. */
        public sortorder: number;

        /** Preview url. */
        public url: string;

        /** Preview size. */
        public size: number;

        /** Preview filename. */
        public filename: string;

        /** Preview youtubevideoid. */
        public youtubevideoid: string;

        /**
         * Creates a new Preview instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Preview instance
         */
        public static create(properties?: PublishedFileDetails.IPreview): PublishedFileDetails.Preview;

        /**
         * Encodes the specified Preview message. Does not implicitly {@link PublishedFileDetails.Preview.verify|verify} messages.
         * @param message Preview message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PublishedFileDetails.IPreview, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Preview message, length delimited. Does not implicitly {@link PublishedFileDetails.Preview.verify|verify} messages.
         * @param message Preview message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PublishedFileDetails.IPreview, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Preview message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Preview
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublishedFileDetails.Preview;

        /**
         * Decodes a Preview message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Preview
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublishedFileDetails.Preview;

        /**
         * Verifies a Preview message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Preview message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Preview
         */
        public static fromObject(object: { [k: string]: any }): PublishedFileDetails.Preview;

        /**
         * Creates a plain object from a Preview message. Also converts values to other types if specified.
         * @param message Preview
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PublishedFileDetails.Preview, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Preview to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Preview
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Child. */
    interface IChild {

        /** Child publishedfileid */
        publishedfileid?: (number|Long|null);

        /** Child sortorder */
        sortorder?: (number|null);

        /** Child fileType */
        fileType?: (number|null);
    }

    /** Represents a Child. */
    class Child implements IChild {

        /**
         * Constructs a new Child.
         * @param [properties] Properties to set
         */
        constructor(properties?: PublishedFileDetails.IChild);

        /** Child publishedfileid. */
        public publishedfileid: (number|Long);

        /** Child sortorder. */
        public sortorder: number;

        /** Child fileType. */
        public fileType: number;

        /**
         * Creates a new Child instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Child instance
         */
        public static create(properties?: PublishedFileDetails.IChild): PublishedFileDetails.Child;

        /**
         * Encodes the specified Child message. Does not implicitly {@link PublishedFileDetails.Child.verify|verify} messages.
         * @param message Child message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PublishedFileDetails.IChild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Child message, length delimited. Does not implicitly {@link PublishedFileDetails.Child.verify|verify} messages.
         * @param message Child message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PublishedFileDetails.IChild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Child message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Child
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublishedFileDetails.Child;

        /**
         * Decodes a Child message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Child
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublishedFileDetails.Child;

        /**
         * Verifies a Child message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Child message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Child
         */
        public static fromObject(object: { [k: string]: any }): PublishedFileDetails.Child;

        /**
         * Creates a plain object from a Child message. Also converts values to other types if specified.
         * @param message Child
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PublishedFileDetails.Child, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Child to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Child
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KVTag. */
    interface IKVTag {

        /** KVTag key */
        key?: (string|null);

        /** KVTag value */
        value?: (string|null);
    }

    /** Represents a KVTag. */
    class KVTag implements IKVTag {

        /**
         * Constructs a new KVTag.
         * @param [properties] Properties to set
         */
        constructor(properties?: PublishedFileDetails.IKVTag);

        /** KVTag key. */
        public key: string;

        /** KVTag value. */
        public value: string;

        /**
         * Creates a new KVTag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KVTag instance
         */
        public static create(properties?: PublishedFileDetails.IKVTag): PublishedFileDetails.KVTag;

        /**
         * Encodes the specified KVTag message. Does not implicitly {@link PublishedFileDetails.KVTag.verify|verify} messages.
         * @param message KVTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PublishedFileDetails.IKVTag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KVTag message, length delimited. Does not implicitly {@link PublishedFileDetails.KVTag.verify|verify} messages.
         * @param message KVTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PublishedFileDetails.IKVTag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KVTag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KVTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublishedFileDetails.KVTag;

        /**
         * Decodes a KVTag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KVTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublishedFileDetails.KVTag;

        /**
         * Verifies a KVTag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KVTag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KVTag
         */
        public static fromObject(object: { [k: string]: any }): PublishedFileDetails.KVTag;

        /**
         * Creates a plain object from a KVTag message. Also converts values to other types if specified.
         * @param message KVTag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PublishedFileDetails.KVTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KVTag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KVTag
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VoteData. */
    interface IVoteData {

        /** VoteData score */
        score?: (number|null);

        /** VoteData votesUp */
        votesUp?: (number|null);

        /** VoteData votesDown */
        votesDown?: (number|null);
    }

    /** Represents a VoteData. */
    class VoteData implements IVoteData {

        /**
         * Constructs a new VoteData.
         * @param [properties] Properties to set
         */
        constructor(properties?: PublishedFileDetails.IVoteData);

        /** VoteData score. */
        public score: number;

        /** VoteData votesUp. */
        public votesUp: number;

        /** VoteData votesDown. */
        public votesDown: number;

        /**
         * Creates a new VoteData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteData instance
         */
        public static create(properties?: PublishedFileDetails.IVoteData): PublishedFileDetails.VoteData;

        /**
         * Encodes the specified VoteData message. Does not implicitly {@link PublishedFileDetails.VoteData.verify|verify} messages.
         * @param message VoteData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PublishedFileDetails.IVoteData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteData message, length delimited. Does not implicitly {@link PublishedFileDetails.VoteData.verify|verify} messages.
         * @param message VoteData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PublishedFileDetails.IVoteData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VoteData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PublishedFileDetails.VoteData;

        /**
         * Decodes a VoteData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VoteData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PublishedFileDetails.VoteData;

        /**
         * Verifies a VoteData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteData
         */
        public static fromObject(object: { [k: string]: any }): PublishedFileDetails.VoteData;

        /**
         * Creates a plain object from a VoteData message. Also converts values to other types if specified.
         * @param message VoteData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PublishedFileDetails.VoteData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VoteData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a CPublishedFile_GetDetails_Response. */
export interface ICPublishedFile_GetDetails_Response {

    /** CPublishedFile_GetDetails_Response publishedfiledetails */
    publishedfiledetails?: (IPublishedFileDetails[]|null);
}

/** Represents a CPublishedFile_GetDetails_Response. */
export class CPublishedFile_GetDetails_Response implements ICPublishedFile_GetDetails_Response {

    /**
     * Constructs a new CPublishedFile_GetDetails_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_GetDetails_Response);

    /** CPublishedFile_GetDetails_Response publishedfiledetails. */
    public publishedfiledetails: IPublishedFileDetails[];

    /**
     * Creates a new CPublishedFile_GetDetails_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_GetDetails_Response instance
     */
    public static create(properties?: ICPublishedFile_GetDetails_Response): CPublishedFile_GetDetails_Response;

    /**
     * Encodes the specified CPublishedFile_GetDetails_Response message. Does not implicitly {@link CPublishedFile_GetDetails_Response.verify|verify} messages.
     * @param message CPublishedFile_GetDetails_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_GetDetails_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_GetDetails_Response message, length delimited. Does not implicitly {@link CPublishedFile_GetDetails_Response.verify|verify} messages.
     * @param message CPublishedFile_GetDetails_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_GetDetails_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_GetDetails_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_GetDetails_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_GetDetails_Response;

    /**
     * Decodes a CPublishedFile_GetDetails_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_GetDetails_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_GetDetails_Response;

    /**
     * Verifies a CPublishedFile_GetDetails_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_GetDetails_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_GetDetails_Response
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_GetDetails_Response;

    /**
     * Creates a plain object from a CPublishedFile_GetDetails_Response message. Also converts values to other types if specified.
     * @param message CPublishedFile_GetDetails_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_GetDetails_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_GetDetails_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_GetDetails_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_GetUserFiles_Request. */
export interface ICPublishedFile_GetUserFiles_Request {

    /** CPublishedFile_GetUserFiles_Request appid */
    appid?: (number|null);

    /** CPublishedFile_GetUserFiles_Request page */
    page?: (number|null);

    /** CPublishedFile_GetUserFiles_Request numperpage */
    numperpage?: (number|null);

    /** CPublishedFile_GetUserFiles_Request sortmethod */
    sortmethod?: (string|null);

    /** CPublishedFile_GetUserFiles_Request totalonly */
    totalonly?: (boolean|null);

    /** CPublishedFile_GetUserFiles_Request privacy */
    privacy?: (number|null);

    /** CPublishedFile_GetUserFiles_Request idsOnly */
    idsOnly?: (boolean|null);

    /** CPublishedFile_GetUserFiles_Request requiredtags */
    requiredtags?: (string[]|null);

    /** CPublishedFile_GetUserFiles_Request excludedtags */
    excludedtags?: (string[]|null);
}

/** Represents a CPublishedFile_GetUserFiles_Request. */
export class CPublishedFile_GetUserFiles_Request implements ICPublishedFile_GetUserFiles_Request {

    /**
     * Constructs a new CPublishedFile_GetUserFiles_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_GetUserFiles_Request);

    /** CPublishedFile_GetUserFiles_Request appid. */
    public appid: number;

    /** CPublishedFile_GetUserFiles_Request page. */
    public page: number;

    /** CPublishedFile_GetUserFiles_Request numperpage. */
    public numperpage: number;

    /** CPublishedFile_GetUserFiles_Request sortmethod. */
    public sortmethod: string;

    /** CPublishedFile_GetUserFiles_Request totalonly. */
    public totalonly: boolean;

    /** CPublishedFile_GetUserFiles_Request privacy. */
    public privacy: number;

    /** CPublishedFile_GetUserFiles_Request idsOnly. */
    public idsOnly: boolean;

    /** CPublishedFile_GetUserFiles_Request requiredtags. */
    public requiredtags: string[];

    /** CPublishedFile_GetUserFiles_Request excludedtags. */
    public excludedtags: string[];

    /**
     * Creates a new CPublishedFile_GetUserFiles_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_GetUserFiles_Request instance
     */
    public static create(properties?: ICPublishedFile_GetUserFiles_Request): CPublishedFile_GetUserFiles_Request;

    /**
     * Encodes the specified CPublishedFile_GetUserFiles_Request message. Does not implicitly {@link CPublishedFile_GetUserFiles_Request.verify|verify} messages.
     * @param message CPublishedFile_GetUserFiles_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_GetUserFiles_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_GetUserFiles_Request message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Request.verify|verify} messages.
     * @param message CPublishedFile_GetUserFiles_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_GetUserFiles_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_GetUserFiles_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_GetUserFiles_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_GetUserFiles_Request;

    /**
     * Decodes a CPublishedFile_GetUserFiles_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_GetUserFiles_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_GetUserFiles_Request;

    /**
     * Verifies a CPublishedFile_GetUserFiles_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_GetUserFiles_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_GetUserFiles_Request
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_GetUserFiles_Request;

    /**
     * Creates a plain object from a CPublishedFile_GetUserFiles_Request message. Also converts values to other types if specified.
     * @param message CPublishedFile_GetUserFiles_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_GetUserFiles_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_GetUserFiles_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_GetUserFiles_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_GetUserFiles_Response. */
export interface ICPublishedFile_GetUserFiles_Response {

    /** CPublishedFile_GetUserFiles_Response total */
    total?: (number|null);

    /** CPublishedFile_GetUserFiles_Response startindex */
    startindex?: (number|null);

    /** CPublishedFile_GetUserFiles_Response publishedfiledetails */
    publishedfiledetails?: (IPublishedFileDetails[]|null);

    /** CPublishedFile_GetUserFiles_Response apps */
    apps?: (CPublishedFile_GetUserFiles_Response.IApp[]|null);
}

/** Represents a CPublishedFile_GetUserFiles_Response. */
export class CPublishedFile_GetUserFiles_Response implements ICPublishedFile_GetUserFiles_Response {

    /**
     * Constructs a new CPublishedFile_GetUserFiles_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_GetUserFiles_Response);

    /** CPublishedFile_GetUserFiles_Response total. */
    public total: number;

    /** CPublishedFile_GetUserFiles_Response startindex. */
    public startindex: number;

    /** CPublishedFile_GetUserFiles_Response publishedfiledetails. */
    public publishedfiledetails: IPublishedFileDetails[];

    /** CPublishedFile_GetUserFiles_Response apps. */
    public apps: CPublishedFile_GetUserFiles_Response.IApp[];

    /**
     * Creates a new CPublishedFile_GetUserFiles_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_GetUserFiles_Response instance
     */
    public static create(properties?: ICPublishedFile_GetUserFiles_Response): CPublishedFile_GetUserFiles_Response;

    /**
     * Encodes the specified CPublishedFile_GetUserFiles_Response message. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.verify|verify} messages.
     * @param message CPublishedFile_GetUserFiles_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_GetUserFiles_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_GetUserFiles_Response message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.verify|verify} messages.
     * @param message CPublishedFile_GetUserFiles_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_GetUserFiles_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_GetUserFiles_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_GetUserFiles_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_GetUserFiles_Response;

    /**
     * Decodes a CPublishedFile_GetUserFiles_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_GetUserFiles_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_GetUserFiles_Response;

    /**
     * Verifies a CPublishedFile_GetUserFiles_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_GetUserFiles_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_GetUserFiles_Response
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_GetUserFiles_Response;

    /**
     * Creates a plain object from a CPublishedFile_GetUserFiles_Response message. Also converts values to other types if specified.
     * @param message CPublishedFile_GetUserFiles_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_GetUserFiles_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_GetUserFiles_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_GetUserFiles_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CPublishedFile_GetUserFiles_Response {

    /** Properties of an App. */
    interface IApp {

        /** App appid */
        appid?: (number|null);

        /** App name */
        name?: (string|null);

        /** App shortcutid */
        shortcutid?: (number|null);

        /** App private */
        "private"?: (boolean|null);
    }

    /** Represents an App. */
    class App implements IApp {

        /**
         * Constructs a new App.
         * @param [properties] Properties to set
         */
        constructor(properties?: CPublishedFile_GetUserFiles_Response.IApp);

        /** App appid. */
        public appid: number;

        /** App name. */
        public name: string;

        /** App shortcutid. */
        public shortcutid: number;

        /** App private. */
        public private: boolean;

        /**
         * Creates a new App instance using the specified properties.
         * @param [properties] Properties to set
         * @returns App instance
         */
        public static create(properties?: CPublishedFile_GetUserFiles_Response.IApp): CPublishedFile_GetUserFiles_Response.App;

        /**
         * Encodes the specified App message. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.App.verify|verify} messages.
         * @param message App message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CPublishedFile_GetUserFiles_Response.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified App message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.App.verify|verify} messages.
         * @param message App message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CPublishedFile_GetUserFiles_Response.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an App message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_GetUserFiles_Response.App;

        /**
         * Decodes an App message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_GetUserFiles_Response.App;

        /**
         * Verifies an App message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an App message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns App
         */
        public static fromObject(object: { [k: string]: any }): CPublishedFile_GetUserFiles_Response.App;

        /**
         * Creates a plain object from an App message. Also converts values to other types if specified.
         * @param message App
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CPublishedFile_GetUserFiles_Response.App, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this App to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for App
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a CPublishedFile_Update_Request. */
export interface ICPublishedFile_Update_Request {

    /** CPublishedFile_Update_Request appid */
    appid?: (number|null);

    /** CPublishedFile_Update_Request publishedfileid */
    publishedfileid?: (number|Long|null);

    /** CPublishedFile_Update_Request title */
    title?: (string|null);

    /** CPublishedFile_Update_Request fileDescription */
    fileDescription?: (string|null);

    /** CPublishedFile_Update_Request visibility */
    visibility?: (number|null);

    /** CPublishedFile_Update_Request tags */
    tags?: (string[]|null);

    /** CPublishedFile_Update_Request filename */
    filename?: (string|null);

    /** CPublishedFile_Update_Request previewFilename */
    previewFilename?: (string|null);
}

/** Represents a CPublishedFile_Update_Request. */
export class CPublishedFile_Update_Request implements ICPublishedFile_Update_Request {

    /**
     * Constructs a new CPublishedFile_Update_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Update_Request);

    /** CPublishedFile_Update_Request appid. */
    public appid: number;

    /** CPublishedFile_Update_Request publishedfileid. */
    public publishedfileid: (number|Long);

    /** CPublishedFile_Update_Request title. */
    public title: string;

    /** CPublishedFile_Update_Request fileDescription. */
    public fileDescription: string;

    /** CPublishedFile_Update_Request visibility. */
    public visibility: number;

    /** CPublishedFile_Update_Request tags. */
    public tags: string[];

    /** CPublishedFile_Update_Request filename. */
    public filename: string;

    /** CPublishedFile_Update_Request previewFilename. */
    public previewFilename: string;

    /**
     * Creates a new CPublishedFile_Update_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Update_Request instance
     */
    public static create(properties?: ICPublishedFile_Update_Request): CPublishedFile_Update_Request;

    /**
     * Encodes the specified CPublishedFile_Update_Request message. Does not implicitly {@link CPublishedFile_Update_Request.verify|verify} messages.
     * @param message CPublishedFile_Update_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Update_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Update_Request message, length delimited. Does not implicitly {@link CPublishedFile_Update_Request.verify|verify} messages.
     * @param message CPublishedFile_Update_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Update_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Update_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Update_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Update_Request;

    /**
     * Decodes a CPublishedFile_Update_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Update_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Update_Request;

    /**
     * Verifies a CPublishedFile_Update_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Update_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Update_Request
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Update_Request;

    /**
     * Creates a plain object from a CPublishedFile_Update_Request message. Also converts values to other types if specified.
     * @param message CPublishedFile_Update_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Update_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Update_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Update_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_Update_Response. */
export interface ICPublishedFile_Update_Response {
}

/** Represents a CPublishedFile_Update_Response. */
export class CPublishedFile_Update_Response implements ICPublishedFile_Update_Response {

    /**
     * Constructs a new CPublishedFile_Update_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_Update_Response);

    /**
     * Creates a new CPublishedFile_Update_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_Update_Response instance
     */
    public static create(properties?: ICPublishedFile_Update_Response): CPublishedFile_Update_Response;

    /**
     * Encodes the specified CPublishedFile_Update_Response message. Does not implicitly {@link CPublishedFile_Update_Response.verify|verify} messages.
     * @param message CPublishedFile_Update_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_Update_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_Update_Response message, length delimited. Does not implicitly {@link CPublishedFile_Update_Response.verify|verify} messages.
     * @param message CPublishedFile_Update_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_Update_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_Update_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_Update_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_Update_Response;

    /**
     * Decodes a CPublishedFile_Update_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_Update_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_Update_Response;

    /**
     * Verifies a CPublishedFile_Update_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_Update_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_Update_Response
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_Update_Response;

    /**
     * Creates a plain object from a CPublishedFile_Update_Response message. Also converts values to other types if specified.
     * @param message CPublishedFile_Update_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_Update_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_Update_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_Update_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_RefreshVotingQueue_Request. */
export interface ICPublishedFile_RefreshVotingQueue_Request {

    /** CPublishedFile_RefreshVotingQueue_Request appid */
    appid?: (number|null);

    /** CPublishedFile_RefreshVotingQueue_Request matchingFileType */
    matchingFileType?: (number|null);

    /** CPublishedFile_RefreshVotingQueue_Request tags */
    tags?: (string[]|null);

    /** CPublishedFile_RefreshVotingQueue_Request matchAllTags */
    matchAllTags?: (boolean|null);

    /** CPublishedFile_RefreshVotingQueue_Request excludedTags */
    excludedTags?: (string[]|null);

    /** CPublishedFile_RefreshVotingQueue_Request desiredQueueSize */
    desiredQueueSize?: (number|null);
}

/** Represents a CPublishedFile_RefreshVotingQueue_Request. */
export class CPublishedFile_RefreshVotingQueue_Request implements ICPublishedFile_RefreshVotingQueue_Request {

    /**
     * Constructs a new CPublishedFile_RefreshVotingQueue_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_RefreshVotingQueue_Request);

    /** CPublishedFile_RefreshVotingQueue_Request appid. */
    public appid: number;

    /** CPublishedFile_RefreshVotingQueue_Request matchingFileType. */
    public matchingFileType: number;

    /** CPublishedFile_RefreshVotingQueue_Request tags. */
    public tags: string[];

    /** CPublishedFile_RefreshVotingQueue_Request matchAllTags. */
    public matchAllTags: boolean;

    /** CPublishedFile_RefreshVotingQueue_Request excludedTags. */
    public excludedTags: string[];

    /** CPublishedFile_RefreshVotingQueue_Request desiredQueueSize. */
    public desiredQueueSize: number;

    /**
     * Creates a new CPublishedFile_RefreshVotingQueue_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_RefreshVotingQueue_Request instance
     */
    public static create(properties?: ICPublishedFile_RefreshVotingQueue_Request): CPublishedFile_RefreshVotingQueue_Request;

    /**
     * Encodes the specified CPublishedFile_RefreshVotingQueue_Request message. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Request.verify|verify} messages.
     * @param message CPublishedFile_RefreshVotingQueue_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_RefreshVotingQueue_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_RefreshVotingQueue_Request message, length delimited. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Request.verify|verify} messages.
     * @param message CPublishedFile_RefreshVotingQueue_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_RefreshVotingQueue_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_RefreshVotingQueue_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_RefreshVotingQueue_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_RefreshVotingQueue_Request;

    /**
     * Decodes a CPublishedFile_RefreshVotingQueue_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_RefreshVotingQueue_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_RefreshVotingQueue_Request;

    /**
     * Verifies a CPublishedFile_RefreshVotingQueue_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_RefreshVotingQueue_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_RefreshVotingQueue_Request
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_RefreshVotingQueue_Request;

    /**
     * Creates a plain object from a CPublishedFile_RefreshVotingQueue_Request message. Also converts values to other types if specified.
     * @param message CPublishedFile_RefreshVotingQueue_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_RefreshVotingQueue_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_RefreshVotingQueue_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_RefreshVotingQueue_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPublishedFile_RefreshVotingQueue_Response. */
export interface ICPublishedFile_RefreshVotingQueue_Response {
}

/** Represents a CPublishedFile_RefreshVotingQueue_Response. */
export class CPublishedFile_RefreshVotingQueue_Response implements ICPublishedFile_RefreshVotingQueue_Response {

    /**
     * Constructs a new CPublishedFile_RefreshVotingQueue_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPublishedFile_RefreshVotingQueue_Response);

    /**
     * Creates a new CPublishedFile_RefreshVotingQueue_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPublishedFile_RefreshVotingQueue_Response instance
     */
    public static create(properties?: ICPublishedFile_RefreshVotingQueue_Response): CPublishedFile_RefreshVotingQueue_Response;

    /**
     * Encodes the specified CPublishedFile_RefreshVotingQueue_Response message. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Response.verify|verify} messages.
     * @param message CPublishedFile_RefreshVotingQueue_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPublishedFile_RefreshVotingQueue_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPublishedFile_RefreshVotingQueue_Response message, length delimited. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Response.verify|verify} messages.
     * @param message CPublishedFile_RefreshVotingQueue_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPublishedFile_RefreshVotingQueue_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPublishedFile_RefreshVotingQueue_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPublishedFile_RefreshVotingQueue_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPublishedFile_RefreshVotingQueue_Response;

    /**
     * Decodes a CPublishedFile_RefreshVotingQueue_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPublishedFile_RefreshVotingQueue_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPublishedFile_RefreshVotingQueue_Response;

    /**
     * Verifies a CPublishedFile_RefreshVotingQueue_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPublishedFile_RefreshVotingQueue_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPublishedFile_RefreshVotingQueue_Response
     */
    public static fromObject(object: { [k: string]: any }): CPublishedFile_RefreshVotingQueue_Response;

    /**
     * Creates a plain object from a CPublishedFile_RefreshVotingQueue_Response message. Also converts values to other types if specified.
     * @param message CPublishedFile_RefreshVotingQueue_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPublishedFile_RefreshVotingQueue_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPublishedFile_RefreshVotingQueue_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPublishedFile_RefreshVotingQueue_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PublishedFile */
export class PublishedFile extends $protobuf.rpc.Service {

    /**
     * Constructs a new PublishedFile service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new PublishedFile service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PublishedFile;

    /**
     * Calls Subscribe.
     * @param request CPublishedFile_Subscribe_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPublishedFile_Subscribe_Response
     */
    public subscribe(request: ICPublishedFile_Subscribe_Request, callback: PublishedFile.SubscribeCallback): void;

    /**
     * Calls Subscribe.
     * @param request CPublishedFile_Subscribe_Request message or plain object
     * @returns Promise
     */
    public subscribe(request: ICPublishedFile_Subscribe_Request): Promise<CPublishedFile_Subscribe_Response>;

    /**
     * Calls Unsubscribe.
     * @param request CPublishedFile_Unsubscribe_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPublishedFile_Unsubscribe_Response
     */
    public unsubscribe(request: ICPublishedFile_Unsubscribe_Request, callback: PublishedFile.UnsubscribeCallback): void;

    /**
     * Calls Unsubscribe.
     * @param request CPublishedFile_Unsubscribe_Request message or plain object
     * @returns Promise
     */
    public unsubscribe(request: ICPublishedFile_Unsubscribe_Request): Promise<CPublishedFile_Unsubscribe_Response>;

    /**
     * Calls Publish.
     * @param request CPublishedFile_Publish_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPublishedFile_Publish_Response
     */
    public publish(request: ICPublishedFile_Publish_Request, callback: PublishedFile.PublishCallback): void;

    /**
     * Calls Publish.
     * @param request CPublishedFile_Publish_Request message or plain object
     * @returns Promise
     */
    public publish(request: ICPublishedFile_Publish_Request): Promise<CPublishedFile_Publish_Response>;

    /**
     * Calls GetDetails.
     * @param request CPublishedFile_GetDetails_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPublishedFile_GetDetails_Response
     */
    public getDetails(request: ICPublishedFile_GetDetails_Request, callback: PublishedFile.GetDetailsCallback): void;

    /**
     * Calls GetDetails.
     * @param request CPublishedFile_GetDetails_Request message or plain object
     * @returns Promise
     */
    public getDetails(request: ICPublishedFile_GetDetails_Request): Promise<CPublishedFile_GetDetails_Response>;

    /**
     * Calls GetUserFiles.
     * @param request CPublishedFile_GetUserFiles_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPublishedFile_GetUserFiles_Response
     */
    public getUserFiles(request: ICPublishedFile_GetUserFiles_Request, callback: PublishedFile.GetUserFilesCallback): void;

    /**
     * Calls GetUserFiles.
     * @param request CPublishedFile_GetUserFiles_Request message or plain object
     * @returns Promise
     */
    public getUserFiles(request: ICPublishedFile_GetUserFiles_Request): Promise<CPublishedFile_GetUserFiles_Response>;

    /**
     * Calls Update.
     * @param request CPublishedFile_Update_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPublishedFile_Update_Response
     */
    public update(request: ICPublishedFile_Update_Request, callback: PublishedFile.UpdateCallback): void;

    /**
     * Calls Update.
     * @param request CPublishedFile_Update_Request message or plain object
     * @returns Promise
     */
    public update(request: ICPublishedFile_Update_Request): Promise<CPublishedFile_Update_Response>;

    /**
     * Calls RefreshVotingQueue.
     * @param request CPublishedFile_RefreshVotingQueue_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPublishedFile_RefreshVotingQueue_Response
     */
    public refreshVotingQueue(request: ICPublishedFile_RefreshVotingQueue_Request, callback: PublishedFile.RefreshVotingQueueCallback): void;

    /**
     * Calls RefreshVotingQueue.
     * @param request CPublishedFile_RefreshVotingQueue_Request message or plain object
     * @returns Promise
     */
    public refreshVotingQueue(request: ICPublishedFile_RefreshVotingQueue_Request): Promise<CPublishedFile_RefreshVotingQueue_Response>;
}

export namespace PublishedFile {

    /**
     * Callback as used by {@link PublishedFile#subscribe}.
     * @param error Error, if any
     * @param [response] CPublishedFile_Subscribe_Response
     */
    type SubscribeCallback = (error: (Error|null), response?: CPublishedFile_Subscribe_Response) => void;

    /**
     * Callback as used by {@link PublishedFile#unsubscribe}.
     * @param error Error, if any
     * @param [response] CPublishedFile_Unsubscribe_Response
     */
    type UnsubscribeCallback = (error: (Error|null), response?: CPublishedFile_Unsubscribe_Response) => void;

    /**
     * Callback as used by {@link PublishedFile#publish}.
     * @param error Error, if any
     * @param [response] CPublishedFile_Publish_Response
     */
    type PublishCallback = (error: (Error|null), response?: CPublishedFile_Publish_Response) => void;

    /**
     * Callback as used by {@link PublishedFile#getDetails}.
     * @param error Error, if any
     * @param [response] CPublishedFile_GetDetails_Response
     */
    type GetDetailsCallback = (error: (Error|null), response?: CPublishedFile_GetDetails_Response) => void;

    /**
     * Callback as used by {@link PublishedFile#getUserFiles}.
     * @param error Error, if any
     * @param [response] CPublishedFile_GetUserFiles_Response
     */
    type GetUserFilesCallback = (error: (Error|null), response?: CPublishedFile_GetUserFiles_Response) => void;

    /**
     * Callback as used by {@link PublishedFile#update}.
     * @param error Error, if any
     * @param [response] CPublishedFile_Update_Response
     */
    type UpdateCallback = (error: (Error|null), response?: CPublishedFile_Update_Response) => void;

    /**
     * Callback as used by {@link PublishedFile#refreshVotingQueue}.
     * @param error Error, if any
     * @param [response] CPublishedFile_RefreshVotingQueue_Response
     */
    type RefreshVotingQueueCallback = (error: (Error|null), response?: CPublishedFile_RefreshVotingQueue_Response) => void;
}

/** EProtoExecutionSite enum. */
export enum EProtoExecutionSite {
    k_EProtoExecutionSiteUnknown = 0,
    k_EProtoExecutionSiteSteamClient = 3
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

            /** FieldOptions .description */
            ".description"?: (string|null);
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

            /** FieldOptions .description. */
            public description: string;

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

            /** EnumOptions .enumDescription */
            ".enumDescription"?: (string|null);
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

            /** EnumOptions .enumDescription. */
            public enumDescription: string;

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

            /** EnumValueOptions .enumValueDescription */
            ".enumValueDescription"?: (string|null);
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

            /** EnumValueOptions .enumValueDescription. */
            public enumValueDescription: string;

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

            /** ServiceOptions .serviceDescription */
            ".serviceDescription"?: (string|null);

            /** ServiceOptions .serviceExecutionSite */
            ".serviceExecutionSite"?: (EProtoExecutionSite|null);
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

            /** ServiceOptions .serviceDescription. */
            public serviceDescription: string;

            /** ServiceOptions .serviceExecutionSite. */
            public serviceExecutionSite: EProtoExecutionSite;

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

            /** MethodOptions .methodDescription */
            ".methodDescription"?: (string|null);
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

            /** MethodOptions .methodDescription. */
            public methodDescription: string;

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
