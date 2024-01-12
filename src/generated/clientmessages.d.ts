import * as $protobuf from "protobufjs";
import Long = require("long");
/** EBaseClientMessages enum. */
export enum EBaseClientMessages {
    CM_CustomGameEvent = 280,
    CM_CustomGameEventBounce = 281,
    CM_ClientUIEvent = 282,
    CM_DevPaletteVisibilityChanged = 283,
    CM_WorldUIControllerHasPanelChanged = 284,
    CM_RotateAnchor = 285,
    CM_MAX_BASE = 300
}

/** EClientUIEvent enum. */
export enum EClientUIEvent {
    EClientUIEvent_Invalid = 0,
    EClientUIEvent_DialogFinished = 1,
    EClientUIEvent_FireOutput = 2
}

/** Represents a CClientMsg_CustomGameEvent. */
export class CClientMsg_CustomGameEvent implements ICClientMsg_CustomGameEvent {

    /**
     * Constructs a new CClientMsg_CustomGameEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClientMsg_CustomGameEvent);

    /** CClientMsg_CustomGameEvent eventName. */
    public eventName: string;

    /** CClientMsg_CustomGameEvent data. */
    public data: Uint8Array;

    /**
     * Creates a new CClientMsg_CustomGameEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClientMsg_CustomGameEvent instance
     */
    public static create(properties?: ICClientMsg_CustomGameEvent): CClientMsg_CustomGameEvent;

    /**
     * Encodes the specified CClientMsg_CustomGameEvent message. Does not implicitly {@link CClientMsg_CustomGameEvent.verify|verify} messages.
     * @param message CClientMsg_CustomGameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClientMsg_CustomGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClientMsg_CustomGameEvent message, length delimited. Does not implicitly {@link CClientMsg_CustomGameEvent.verify|verify} messages.
     * @param message CClientMsg_CustomGameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClientMsg_CustomGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClientMsg_CustomGameEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClientMsg_CustomGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClientMsg_CustomGameEvent;

    /**
     * Decodes a CClientMsg_CustomGameEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClientMsg_CustomGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClientMsg_CustomGameEvent;

    /**
     * Verifies a CClientMsg_CustomGameEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClientMsg_CustomGameEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClientMsg_CustomGameEvent
     */
    public static fromObject(object: { [k: string]: any }): CClientMsg_CustomGameEvent;

    /**
     * Creates a plain object from a CClientMsg_CustomGameEvent message. Also converts values to other types if specified.
     * @param message CClientMsg_CustomGameEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClientMsg_CustomGameEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClientMsg_CustomGameEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClientMsg_CustomGameEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClientMsg_CustomGameEventBounce. */
export class CClientMsg_CustomGameEventBounce implements ICClientMsg_CustomGameEventBounce {

    /**
     * Constructs a new CClientMsg_CustomGameEventBounce.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClientMsg_CustomGameEventBounce);

    /** CClientMsg_CustomGameEventBounce eventName. */
    public eventName: string;

    /** CClientMsg_CustomGameEventBounce data. */
    public data: Uint8Array;

    /** CClientMsg_CustomGameEventBounce playerSlot. */
    public playerSlot: number;

    /**
     * Creates a new CClientMsg_CustomGameEventBounce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClientMsg_CustomGameEventBounce instance
     */
    public static create(properties?: ICClientMsg_CustomGameEventBounce): CClientMsg_CustomGameEventBounce;

    /**
     * Encodes the specified CClientMsg_CustomGameEventBounce message. Does not implicitly {@link CClientMsg_CustomGameEventBounce.verify|verify} messages.
     * @param message CClientMsg_CustomGameEventBounce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClientMsg_CustomGameEventBounce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClientMsg_CustomGameEventBounce message, length delimited. Does not implicitly {@link CClientMsg_CustomGameEventBounce.verify|verify} messages.
     * @param message CClientMsg_CustomGameEventBounce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClientMsg_CustomGameEventBounce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClientMsg_CustomGameEventBounce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClientMsg_CustomGameEventBounce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClientMsg_CustomGameEventBounce;

    /**
     * Decodes a CClientMsg_CustomGameEventBounce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClientMsg_CustomGameEventBounce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClientMsg_CustomGameEventBounce;

    /**
     * Verifies a CClientMsg_CustomGameEventBounce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClientMsg_CustomGameEventBounce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClientMsg_CustomGameEventBounce
     */
    public static fromObject(object: { [k: string]: any }): CClientMsg_CustomGameEventBounce;

    /**
     * Creates a plain object from a CClientMsg_CustomGameEventBounce message. Also converts values to other types if specified.
     * @param message CClientMsg_CustomGameEventBounce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClientMsg_CustomGameEventBounce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClientMsg_CustomGameEventBounce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClientMsg_CustomGameEventBounce
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClientMsg_ClientUIEvent. */
export class CClientMsg_ClientUIEvent implements ICClientMsg_ClientUIEvent {

    /**
     * Constructs a new CClientMsg_ClientUIEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClientMsg_ClientUIEvent);

    /** CClientMsg_ClientUIEvent event. */
    public event: EClientUIEvent;

    /** CClientMsg_ClientUIEvent entEhandle. */
    public entEhandle: number;

    /** CClientMsg_ClientUIEvent clientEhandle. */
    public clientEhandle: number;

    /** CClientMsg_ClientUIEvent data1. */
    public data1: string;

    /** CClientMsg_ClientUIEvent data2. */
    public data2: string;

    /**
     * Creates a new CClientMsg_ClientUIEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClientMsg_ClientUIEvent instance
     */
    public static create(properties?: ICClientMsg_ClientUIEvent): CClientMsg_ClientUIEvent;

    /**
     * Encodes the specified CClientMsg_ClientUIEvent message. Does not implicitly {@link CClientMsg_ClientUIEvent.verify|verify} messages.
     * @param message CClientMsg_ClientUIEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClientMsg_ClientUIEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClientMsg_ClientUIEvent message, length delimited. Does not implicitly {@link CClientMsg_ClientUIEvent.verify|verify} messages.
     * @param message CClientMsg_ClientUIEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClientMsg_ClientUIEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClientMsg_ClientUIEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClientMsg_ClientUIEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClientMsg_ClientUIEvent;

    /**
     * Decodes a CClientMsg_ClientUIEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClientMsg_ClientUIEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClientMsg_ClientUIEvent;

    /**
     * Verifies a CClientMsg_ClientUIEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClientMsg_ClientUIEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClientMsg_ClientUIEvent
     */
    public static fromObject(object: { [k: string]: any }): CClientMsg_ClientUIEvent;

    /**
     * Creates a plain object from a CClientMsg_ClientUIEvent message. Also converts values to other types if specified.
     * @param message CClientMsg_ClientUIEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClientMsg_ClientUIEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClientMsg_ClientUIEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClientMsg_ClientUIEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClientMsg_DevPaletteVisibilityChangedEvent. */
export class CClientMsg_DevPaletteVisibilityChangedEvent implements ICClientMsg_DevPaletteVisibilityChangedEvent {

    /**
     * Constructs a new CClientMsg_DevPaletteVisibilityChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClientMsg_DevPaletteVisibilityChangedEvent);

    /** CClientMsg_DevPaletteVisibilityChangedEvent visible. */
    public visible: boolean;

    /**
     * Creates a new CClientMsg_DevPaletteVisibilityChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClientMsg_DevPaletteVisibilityChangedEvent instance
     */
    public static create(properties?: ICClientMsg_DevPaletteVisibilityChangedEvent): CClientMsg_DevPaletteVisibilityChangedEvent;

    /**
     * Encodes the specified CClientMsg_DevPaletteVisibilityChangedEvent message. Does not implicitly {@link CClientMsg_DevPaletteVisibilityChangedEvent.verify|verify} messages.
     * @param message CClientMsg_DevPaletteVisibilityChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClientMsg_DevPaletteVisibilityChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClientMsg_DevPaletteVisibilityChangedEvent message, length delimited. Does not implicitly {@link CClientMsg_DevPaletteVisibilityChangedEvent.verify|verify} messages.
     * @param message CClientMsg_DevPaletteVisibilityChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClientMsg_DevPaletteVisibilityChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClientMsg_DevPaletteVisibilityChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClientMsg_DevPaletteVisibilityChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClientMsg_DevPaletteVisibilityChangedEvent;

    /**
     * Decodes a CClientMsg_DevPaletteVisibilityChangedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClientMsg_DevPaletteVisibilityChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClientMsg_DevPaletteVisibilityChangedEvent;

    /**
     * Verifies a CClientMsg_DevPaletteVisibilityChangedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClientMsg_DevPaletteVisibilityChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClientMsg_DevPaletteVisibilityChangedEvent
     */
    public static fromObject(object: { [k: string]: any }): CClientMsg_DevPaletteVisibilityChangedEvent;

    /**
     * Creates a plain object from a CClientMsg_DevPaletteVisibilityChangedEvent message. Also converts values to other types if specified.
     * @param message CClientMsg_DevPaletteVisibilityChangedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClientMsg_DevPaletteVisibilityChangedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClientMsg_DevPaletteVisibilityChangedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClientMsg_DevPaletteVisibilityChangedEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClientMsg_WorldUIControllerHasPanelChangedEvent. */
export class CClientMsg_WorldUIControllerHasPanelChangedEvent implements ICClientMsg_WorldUIControllerHasPanelChangedEvent {

    /**
     * Constructs a new CClientMsg_WorldUIControllerHasPanelChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClientMsg_WorldUIControllerHasPanelChangedEvent);

    /** CClientMsg_WorldUIControllerHasPanelChangedEvent hasPanel. */
    public hasPanel: boolean;

    /** CClientMsg_WorldUIControllerHasPanelChangedEvent clientEhandle. */
    public clientEhandle: number;

    /** CClientMsg_WorldUIControllerHasPanelChangedEvent literalHandType. */
    public literalHandType: number;

    /**
     * Creates a new CClientMsg_WorldUIControllerHasPanelChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClientMsg_WorldUIControllerHasPanelChangedEvent instance
     */
    public static create(properties?: ICClientMsg_WorldUIControllerHasPanelChangedEvent): CClientMsg_WorldUIControllerHasPanelChangedEvent;

    /**
     * Encodes the specified CClientMsg_WorldUIControllerHasPanelChangedEvent message. Does not implicitly {@link CClientMsg_WorldUIControllerHasPanelChangedEvent.verify|verify} messages.
     * @param message CClientMsg_WorldUIControllerHasPanelChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClientMsg_WorldUIControllerHasPanelChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClientMsg_WorldUIControllerHasPanelChangedEvent message, length delimited. Does not implicitly {@link CClientMsg_WorldUIControllerHasPanelChangedEvent.verify|verify} messages.
     * @param message CClientMsg_WorldUIControllerHasPanelChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClientMsg_WorldUIControllerHasPanelChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClientMsg_WorldUIControllerHasPanelChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClientMsg_WorldUIControllerHasPanelChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClientMsg_WorldUIControllerHasPanelChangedEvent;

    /**
     * Decodes a CClientMsg_WorldUIControllerHasPanelChangedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClientMsg_WorldUIControllerHasPanelChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClientMsg_WorldUIControllerHasPanelChangedEvent;

    /**
     * Verifies a CClientMsg_WorldUIControllerHasPanelChangedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClientMsg_WorldUIControllerHasPanelChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClientMsg_WorldUIControllerHasPanelChangedEvent
     */
    public static fromObject(object: { [k: string]: any }): CClientMsg_WorldUIControllerHasPanelChangedEvent;

    /**
     * Creates a plain object from a CClientMsg_WorldUIControllerHasPanelChangedEvent message. Also converts values to other types if specified.
     * @param message CClientMsg_WorldUIControllerHasPanelChangedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClientMsg_WorldUIControllerHasPanelChangedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClientMsg_WorldUIControllerHasPanelChangedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClientMsg_WorldUIControllerHasPanelChangedEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClientMsg_RotateAnchor. */
export class CClientMsg_RotateAnchor implements ICClientMsg_RotateAnchor {

    /**
     * Constructs a new CClientMsg_RotateAnchor.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClientMsg_RotateAnchor);

    /** CClientMsg_RotateAnchor angle. */
    public angle: number;

    /**
     * Creates a new CClientMsg_RotateAnchor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClientMsg_RotateAnchor instance
     */
    public static create(properties?: ICClientMsg_RotateAnchor): CClientMsg_RotateAnchor;

    /**
     * Encodes the specified CClientMsg_RotateAnchor message. Does not implicitly {@link CClientMsg_RotateAnchor.verify|verify} messages.
     * @param message CClientMsg_RotateAnchor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClientMsg_RotateAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClientMsg_RotateAnchor message, length delimited. Does not implicitly {@link CClientMsg_RotateAnchor.verify|verify} messages.
     * @param message CClientMsg_RotateAnchor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClientMsg_RotateAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClientMsg_RotateAnchor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClientMsg_RotateAnchor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClientMsg_RotateAnchor;

    /**
     * Decodes a CClientMsg_RotateAnchor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClientMsg_RotateAnchor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClientMsg_RotateAnchor;

    /**
     * Verifies a CClientMsg_RotateAnchor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClientMsg_RotateAnchor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClientMsg_RotateAnchor
     */
    public static fromObject(object: { [k: string]: any }): CClientMsg_RotateAnchor;

    /**
     * Creates a plain object from a CClientMsg_RotateAnchor message. Also converts values to other types if specified.
     * @param message CClientMsg_RotateAnchor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClientMsg_RotateAnchor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClientMsg_RotateAnchor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClientMsg_RotateAnchor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
