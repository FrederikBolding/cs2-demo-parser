import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a NetMessageSplitscreenUserChanged. */
export interface INetMessageSplitscreenUserChanged {

    /** NetMessageSplitscreenUserChanged slot */
    slot?: (number|null);
}

/** Represents a NetMessageSplitscreenUserChanged. */
export class NetMessageSplitscreenUserChanged implements INetMessageSplitscreenUserChanged {

    /**
     * Constructs a new NetMessageSplitscreenUserChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessageSplitscreenUserChanged);

    /** NetMessageSplitscreenUserChanged slot. */
    public slot: number;

    /**
     * Creates a new NetMessageSplitscreenUserChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessageSplitscreenUserChanged instance
     */
    public static create(properties?: INetMessageSplitscreenUserChanged): NetMessageSplitscreenUserChanged;

    /**
     * Encodes the specified NetMessageSplitscreenUserChanged message. Does not implicitly {@link NetMessageSplitscreenUserChanged.verify|verify} messages.
     * @param message NetMessageSplitscreenUserChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessageSplitscreenUserChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessageSplitscreenUserChanged message, length delimited. Does not implicitly {@link NetMessageSplitscreenUserChanged.verify|verify} messages.
     * @param message NetMessageSplitscreenUserChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessageSplitscreenUserChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessageSplitscreenUserChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessageSplitscreenUserChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessageSplitscreenUserChanged;

    /**
     * Decodes a NetMessageSplitscreenUserChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessageSplitscreenUserChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessageSplitscreenUserChanged;

    /**
     * Verifies a NetMessageSplitscreenUserChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NetMessageSplitscreenUserChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessageSplitscreenUserChanged
     */
    public static fromObject(object: { [k: string]: any }): NetMessageSplitscreenUserChanged;

    /**
     * Creates a plain object from a NetMessageSplitscreenUserChanged message. Also converts values to other types if specified.
     * @param message NetMessageSplitscreenUserChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessageSplitscreenUserChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NetMessageSplitscreenUserChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NetMessageSplitscreenUserChanged
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a NetMessageConnectionClosed. */
export interface INetMessageConnectionClosed {

    /** NetMessageConnectionClosed reason */
    reason?: (number|null);
}

/** Represents a NetMessageConnectionClosed. */
export class NetMessageConnectionClosed implements INetMessageConnectionClosed {

    /**
     * Constructs a new NetMessageConnectionClosed.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessageConnectionClosed);

    /** NetMessageConnectionClosed reason. */
    public reason: number;

    /**
     * Creates a new NetMessageConnectionClosed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessageConnectionClosed instance
     */
    public static create(properties?: INetMessageConnectionClosed): NetMessageConnectionClosed;

    /**
     * Encodes the specified NetMessageConnectionClosed message. Does not implicitly {@link NetMessageConnectionClosed.verify|verify} messages.
     * @param message NetMessageConnectionClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessageConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessageConnectionClosed message, length delimited. Does not implicitly {@link NetMessageConnectionClosed.verify|verify} messages.
     * @param message NetMessageConnectionClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessageConnectionClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessageConnectionClosed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessageConnectionClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessageConnectionClosed;

    /**
     * Decodes a NetMessageConnectionClosed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessageConnectionClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessageConnectionClosed;

    /**
     * Verifies a NetMessageConnectionClosed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NetMessageConnectionClosed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessageConnectionClosed
     */
    public static fromObject(object: { [k: string]: any }): NetMessageConnectionClosed;

    /**
     * Creates a plain object from a NetMessageConnectionClosed message. Also converts values to other types if specified.
     * @param message NetMessageConnectionClosed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessageConnectionClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NetMessageConnectionClosed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NetMessageConnectionClosed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a NetMessageConnectionCrashed. */
export interface INetMessageConnectionCrashed {

    /** NetMessageConnectionCrashed reason */
    reason?: (number|null);
}

/** Represents a NetMessageConnectionCrashed. */
export class NetMessageConnectionCrashed implements INetMessageConnectionCrashed {

    /**
     * Constructs a new NetMessageConnectionCrashed.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessageConnectionCrashed);

    /** NetMessageConnectionCrashed reason. */
    public reason: number;

    /**
     * Creates a new NetMessageConnectionCrashed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessageConnectionCrashed instance
     */
    public static create(properties?: INetMessageConnectionCrashed): NetMessageConnectionCrashed;

    /**
     * Encodes the specified NetMessageConnectionCrashed message. Does not implicitly {@link NetMessageConnectionCrashed.verify|verify} messages.
     * @param message NetMessageConnectionCrashed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessageConnectionCrashed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessageConnectionCrashed message, length delimited. Does not implicitly {@link NetMessageConnectionCrashed.verify|verify} messages.
     * @param message NetMessageConnectionCrashed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessageConnectionCrashed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessageConnectionCrashed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessageConnectionCrashed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessageConnectionCrashed;

    /**
     * Decodes a NetMessageConnectionCrashed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessageConnectionCrashed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessageConnectionCrashed;

    /**
     * Verifies a NetMessageConnectionCrashed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NetMessageConnectionCrashed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessageConnectionCrashed
     */
    public static fromObject(object: { [k: string]: any }): NetMessageConnectionCrashed;

    /**
     * Creates a plain object from a NetMessageConnectionCrashed message. Also converts values to other types if specified.
     * @param message NetMessageConnectionCrashed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessageConnectionCrashed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NetMessageConnectionCrashed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NetMessageConnectionCrashed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a NetMessagePacketStart. */
export interface INetMessagePacketStart {
}

/** Represents a NetMessagePacketStart. */
export class NetMessagePacketStart implements INetMessagePacketStart {

    /**
     * Constructs a new NetMessagePacketStart.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessagePacketStart);

    /**
     * Creates a new NetMessagePacketStart instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessagePacketStart instance
     */
    public static create(properties?: INetMessagePacketStart): NetMessagePacketStart;

    /**
     * Encodes the specified NetMessagePacketStart message. Does not implicitly {@link NetMessagePacketStart.verify|verify} messages.
     * @param message NetMessagePacketStart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessagePacketStart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessagePacketStart message, length delimited. Does not implicitly {@link NetMessagePacketStart.verify|verify} messages.
     * @param message NetMessagePacketStart message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessagePacketStart, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessagePacketStart message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessagePacketStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessagePacketStart;

    /**
     * Decodes a NetMessagePacketStart message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessagePacketStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessagePacketStart;

    /**
     * Verifies a NetMessagePacketStart message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NetMessagePacketStart message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessagePacketStart
     */
    public static fromObject(object: { [k: string]: any }): NetMessagePacketStart;

    /**
     * Creates a plain object from a NetMessagePacketStart message. Also converts values to other types if specified.
     * @param message NetMessagePacketStart
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessagePacketStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NetMessagePacketStart to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NetMessagePacketStart
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a NetMessagePacketEnd. */
export interface INetMessagePacketEnd {
}

/** Represents a NetMessagePacketEnd. */
export class NetMessagePacketEnd implements INetMessagePacketEnd {

    /**
     * Constructs a new NetMessagePacketEnd.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessagePacketEnd);

    /**
     * Creates a new NetMessagePacketEnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessagePacketEnd instance
     */
    public static create(properties?: INetMessagePacketEnd): NetMessagePacketEnd;

    /**
     * Encodes the specified NetMessagePacketEnd message. Does not implicitly {@link NetMessagePacketEnd.verify|verify} messages.
     * @param message NetMessagePacketEnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessagePacketEnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessagePacketEnd message, length delimited. Does not implicitly {@link NetMessagePacketEnd.verify|verify} messages.
     * @param message NetMessagePacketEnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessagePacketEnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessagePacketEnd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessagePacketEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessagePacketEnd;

    /**
     * Decodes a NetMessagePacketEnd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessagePacketEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessagePacketEnd;

    /**
     * Verifies a NetMessagePacketEnd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NetMessagePacketEnd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessagePacketEnd
     */
    public static fromObject(object: { [k: string]: any }): NetMessagePacketEnd;

    /**
     * Creates a plain object from a NetMessagePacketEnd message. Also converts values to other types if specified.
     * @param message NetMessagePacketEnd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessagePacketEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NetMessagePacketEnd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NetMessagePacketEnd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
