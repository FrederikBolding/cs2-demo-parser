import * as $protobuf from "protobufjs";
import Long = require("long");
/** EBaseUserMessages enum. */
export enum EBaseUserMessages {
    UM_AchievementEvent = 101,
    UM_CloseCaption = 102,
    UM_CloseCaptionDirect = 103,
    UM_CurrentTimescale = 104,
    UM_DesiredTimescale = 105,
    UM_Fade = 106,
    UM_GameTitle = 107,
    UM_HudMsg = 110,
    UM_HudText = 111,
    UM_ColoredText = 113,
    UM_RequestState = 114,
    UM_ResetHUD = 115,
    UM_Rumble = 116,
    UM_SayText = 117,
    UM_SayText2 = 118,
    UM_SayTextChannel = 119,
    UM_Shake = 120,
    UM_ShakeDir = 121,
    UM_TextMsg = 124,
    UM_ScreenTilt = 125,
    UM_VoiceMask = 128,
    UM_SendAudio = 130,
    UM_ItemPickup = 131,
    UM_AmmoDenied = 132,
    UM_ShowMenu = 134,
    UM_CreditsMsg = 135,
    UM_CloseCaptionPlaceholder = 142,
    UM_CameraTransition = 143,
    UM_AudioParameter = 144,
    UM_ParticleManager = 145,
    UM_HudError = 146,
    UM_CustomGameEvent = 148,
    UM_AnimGraphUpdate = 149,
    UM_HapticsManagerPulse = 150,
    UM_HapticsManagerEffect = 151,
    UM_CommandQueueState = 152,
    UM_UpdateCssClasses = 153,
    UM_ServerFrameTime = 154,
    UM_LagCompensationError = 155,
    UM_RequestDllStatus = 156,
    UM_RequestUtilAction = 157,
    UM_UtilActionResponse = 158,
    UM_DllStatusResponse = 159,
    UM_RequestInventory = 160,
    UM_InventoryResponse = 161,
    UM_RequestDiagnostic = 162,
    UM_DiagnosticResponse = 163,
    UM_ExtraUserData = 164,
    UM_MAX_BASE = 200
}

/** EBaseEntityMessages enum. */
export enum EBaseEntityMessages {
    EM_PlayJingle = 136,
    EM_ScreenOverlay = 137,
    EM_RemoveAllDecals = 138,
    EM_PropagateForce = 139,
    EM_DoSpark = 140,
    EM_FixAngle = 141
}

/** eRollType enum. */
export enum eRollType {
    ROLL_NONE = -1,
    ROLL_STATS = 0,
    ROLL_CREDITS = 1,
    ROLL_LATE_JOIN_LOGO = 2,
    ROLL_OUTTRO = 3
}

/** PARTICLE_MESSAGE enum. */
export enum PARTICLE_MESSAGE {
    GAME_PARTICLE_MANAGER_EVENT_CREATE = 0,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE = 1,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_FORWARD = 2,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_ORIENTATION = 3,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_FALLBACK = 4,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENT = 5,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_OFFSET = 6,
    GAME_PARTICLE_MANAGER_EVENT_DESTROY = 7,
    GAME_PARTICLE_MANAGER_EVENT_DESTROY_INVOLVING = 8,
    GAME_PARTICLE_MANAGER_EVENT_RELEASE = 9,
    GAME_PARTICLE_MANAGER_EVENT_LATENCY = 10,
    GAME_PARTICLE_MANAGER_EVENT_SHOULD_DRAW = 11,
    GAME_PARTICLE_MANAGER_EVENT_FROZEN = 12,
    GAME_PARTICLE_MANAGER_EVENT_CHANGE_CONTROL_POINT_ATTACHMENT = 13,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENTITY_POSITION = 14,
    GAME_PARTICLE_MANAGER_EVENT_SET_FOW_PROPERTIES = 15,
    GAME_PARTICLE_MANAGER_EVENT_SET_TEXT = 16,
    GAME_PARTICLE_MANAGER_EVENT_SET_SHOULD_CHECK_FOW = 17,
    GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_MODEL = 18,
    GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_SNAPSHOT = 19,
    GAME_PARTICLE_MANAGER_EVENT_SET_TEXTURE_ATTRIBUTE = 20,
    GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_GENERIC_FLAG = 21,
    GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_TINT_AND_DESAT = 22,
    GAME_PARTICLE_MANAGER_EVENT_DESTROY_NAMED = 23,
    GAME_PARTICLE_MANAGER_EVENT_SKIP_TO_TIME = 24,
    GAME_PARTICLE_MANAGER_EVENT_CAN_FREEZE = 25,
    GAME_PARTICLE_MANAGER_EVENT_SET_NAMED_VALUE_CONTEXT = 26,
    GAME_PARTICLE_MANAGER_EVENT_UPDATE_TRANSFORM = 27,
    GAME_PARTICLE_MANAGER_EVENT_FREEZE_TRANSITION_OVERRIDE = 28,
    GAME_PARTICLE_MANAGER_EVENT_FREEZE_INVOLVING = 29
}

/** EHapticPulseType enum. */
export enum EHapticPulseType {
    VR_HAND_HAPTIC_PULSE_LIGHT = 0,
    VR_HAND_HAPTIC_PULSE_MEDIUM = 1,
    VR_HAND_HAPTIC_PULSE_STRONG = 2
}

/** Represents a CUserMessageAchievementEvent. */
export class CUserMessageAchievementEvent implements ICUserMessageAchievementEvent {

    /**
     * Constructs a new CUserMessageAchievementEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageAchievementEvent);

    /** CUserMessageAchievementEvent achievement. */
    public achievement: number;

    /**
     * Creates a new CUserMessageAchievementEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageAchievementEvent instance
     */
    public static create(properties?: ICUserMessageAchievementEvent): CUserMessageAchievementEvent;

    /**
     * Encodes the specified CUserMessageAchievementEvent message. Does not implicitly {@link CUserMessageAchievementEvent.verify|verify} messages.
     * @param message CUserMessageAchievementEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageAchievementEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageAchievementEvent message, length delimited. Does not implicitly {@link CUserMessageAchievementEvent.verify|verify} messages.
     * @param message CUserMessageAchievementEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageAchievementEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageAchievementEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageAchievementEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageAchievementEvent;

    /**
     * Decodes a CUserMessageAchievementEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageAchievementEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageAchievementEvent;

    /**
     * Verifies a CUserMessageAchievementEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageAchievementEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageAchievementEvent
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageAchievementEvent;

    /**
     * Creates a plain object from a CUserMessageAchievementEvent message. Also converts values to other types if specified.
     * @param message CUserMessageAchievementEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageAchievementEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageAchievementEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageAchievementEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageCloseCaption. */
export class CUserMessageCloseCaption implements ICUserMessageCloseCaption {

    /**
     * Constructs a new CUserMessageCloseCaption.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageCloseCaption);

    /** CUserMessageCloseCaption hash. */
    public hash: number;

    /** CUserMessageCloseCaption duration. */
    public duration: number;

    /** CUserMessageCloseCaption fromPlayer. */
    public fromPlayer: boolean;

    /** CUserMessageCloseCaption entIndex. */
    public entIndex: number;

    /**
     * Creates a new CUserMessageCloseCaption instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageCloseCaption instance
     */
    public static create(properties?: ICUserMessageCloseCaption): CUserMessageCloseCaption;

    /**
     * Encodes the specified CUserMessageCloseCaption message. Does not implicitly {@link CUserMessageCloseCaption.verify|verify} messages.
     * @param message CUserMessageCloseCaption message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageCloseCaption, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageCloseCaption message, length delimited. Does not implicitly {@link CUserMessageCloseCaption.verify|verify} messages.
     * @param message CUserMessageCloseCaption message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageCloseCaption, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageCloseCaption message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageCloseCaption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCloseCaption;

    /**
     * Decodes a CUserMessageCloseCaption message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageCloseCaption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCloseCaption;

    /**
     * Verifies a CUserMessageCloseCaption message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageCloseCaption message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageCloseCaption
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageCloseCaption;

    /**
     * Creates a plain object from a CUserMessageCloseCaption message. Also converts values to other types if specified.
     * @param message CUserMessageCloseCaption
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageCloseCaption, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageCloseCaption to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageCloseCaption
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageCloseCaptionDirect. */
export class CUserMessageCloseCaptionDirect implements ICUserMessageCloseCaptionDirect {

    /**
     * Constructs a new CUserMessageCloseCaptionDirect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageCloseCaptionDirect);

    /** CUserMessageCloseCaptionDirect hash. */
    public hash: number;

    /** CUserMessageCloseCaptionDirect duration. */
    public duration: number;

    /** CUserMessageCloseCaptionDirect fromPlayer. */
    public fromPlayer: boolean;

    /** CUserMessageCloseCaptionDirect entIndex. */
    public entIndex: number;

    /**
     * Creates a new CUserMessageCloseCaptionDirect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageCloseCaptionDirect instance
     */
    public static create(properties?: ICUserMessageCloseCaptionDirect): CUserMessageCloseCaptionDirect;

    /**
     * Encodes the specified CUserMessageCloseCaptionDirect message. Does not implicitly {@link CUserMessageCloseCaptionDirect.verify|verify} messages.
     * @param message CUserMessageCloseCaptionDirect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageCloseCaptionDirect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageCloseCaptionDirect message, length delimited. Does not implicitly {@link CUserMessageCloseCaptionDirect.verify|verify} messages.
     * @param message CUserMessageCloseCaptionDirect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageCloseCaptionDirect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageCloseCaptionDirect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageCloseCaptionDirect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCloseCaptionDirect;

    /**
     * Decodes a CUserMessageCloseCaptionDirect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageCloseCaptionDirect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCloseCaptionDirect;

    /**
     * Verifies a CUserMessageCloseCaptionDirect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageCloseCaptionDirect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageCloseCaptionDirect
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageCloseCaptionDirect;

    /**
     * Creates a plain object from a CUserMessageCloseCaptionDirect message. Also converts values to other types if specified.
     * @param message CUserMessageCloseCaptionDirect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageCloseCaptionDirect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageCloseCaptionDirect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageCloseCaptionDirect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageCloseCaptionPlaceholder. */
export class CUserMessageCloseCaptionPlaceholder implements ICUserMessageCloseCaptionPlaceholder {

    /**
     * Constructs a new CUserMessageCloseCaptionPlaceholder.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageCloseCaptionPlaceholder);

    /** CUserMessageCloseCaptionPlaceholder string. */
    public string: string;

    /** CUserMessageCloseCaptionPlaceholder duration. */
    public duration: number;

    /** CUserMessageCloseCaptionPlaceholder fromPlayer. */
    public fromPlayer: boolean;

    /** CUserMessageCloseCaptionPlaceholder entIndex. */
    public entIndex: number;

    /**
     * Creates a new CUserMessageCloseCaptionPlaceholder instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageCloseCaptionPlaceholder instance
     */
    public static create(properties?: ICUserMessageCloseCaptionPlaceholder): CUserMessageCloseCaptionPlaceholder;

    /**
     * Encodes the specified CUserMessageCloseCaptionPlaceholder message. Does not implicitly {@link CUserMessageCloseCaptionPlaceholder.verify|verify} messages.
     * @param message CUserMessageCloseCaptionPlaceholder message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageCloseCaptionPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageCloseCaptionPlaceholder message, length delimited. Does not implicitly {@link CUserMessageCloseCaptionPlaceholder.verify|verify} messages.
     * @param message CUserMessageCloseCaptionPlaceholder message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageCloseCaptionPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageCloseCaptionPlaceholder message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageCloseCaptionPlaceholder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCloseCaptionPlaceholder;

    /**
     * Decodes a CUserMessageCloseCaptionPlaceholder message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageCloseCaptionPlaceholder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCloseCaptionPlaceholder;

    /**
     * Verifies a CUserMessageCloseCaptionPlaceholder message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageCloseCaptionPlaceholder message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageCloseCaptionPlaceholder
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageCloseCaptionPlaceholder;

    /**
     * Creates a plain object from a CUserMessageCloseCaptionPlaceholder message. Also converts values to other types if specified.
     * @param message CUserMessageCloseCaptionPlaceholder
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageCloseCaptionPlaceholder, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageCloseCaptionPlaceholder to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageCloseCaptionPlaceholder
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageCurrentTimescale. */
export class CUserMessageCurrentTimescale implements ICUserMessageCurrentTimescale {

    /**
     * Constructs a new CUserMessageCurrentTimescale.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageCurrentTimescale);

    /** CUserMessageCurrentTimescale current. */
    public current: number;

    /**
     * Creates a new CUserMessageCurrentTimescale instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageCurrentTimescale instance
     */
    public static create(properties?: ICUserMessageCurrentTimescale): CUserMessageCurrentTimescale;

    /**
     * Encodes the specified CUserMessageCurrentTimescale message. Does not implicitly {@link CUserMessageCurrentTimescale.verify|verify} messages.
     * @param message CUserMessageCurrentTimescale message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageCurrentTimescale, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageCurrentTimescale message, length delimited. Does not implicitly {@link CUserMessageCurrentTimescale.verify|verify} messages.
     * @param message CUserMessageCurrentTimescale message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageCurrentTimescale, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageCurrentTimescale message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageCurrentTimescale
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCurrentTimescale;

    /**
     * Decodes a CUserMessageCurrentTimescale message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageCurrentTimescale
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCurrentTimescale;

    /**
     * Verifies a CUserMessageCurrentTimescale message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageCurrentTimescale message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageCurrentTimescale
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageCurrentTimescale;

    /**
     * Creates a plain object from a CUserMessageCurrentTimescale message. Also converts values to other types if specified.
     * @param message CUserMessageCurrentTimescale
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageCurrentTimescale, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageCurrentTimescale to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageCurrentTimescale
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageDesiredTimescale. */
export class CUserMessageDesiredTimescale implements ICUserMessageDesiredTimescale {

    /**
     * Constructs a new CUserMessageDesiredTimescale.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageDesiredTimescale);

    /** CUserMessageDesiredTimescale desired. */
    public desired: number;

    /** CUserMessageDesiredTimescale acceleration. */
    public acceleration: number;

    /** CUserMessageDesiredTimescale minblendrate. */
    public minblendrate: number;

    /** CUserMessageDesiredTimescale blenddeltamultiplier. */
    public blenddeltamultiplier: number;

    /**
     * Creates a new CUserMessageDesiredTimescale instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageDesiredTimescale instance
     */
    public static create(properties?: ICUserMessageDesiredTimescale): CUserMessageDesiredTimescale;

    /**
     * Encodes the specified CUserMessageDesiredTimescale message. Does not implicitly {@link CUserMessageDesiredTimescale.verify|verify} messages.
     * @param message CUserMessageDesiredTimescale message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageDesiredTimescale, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageDesiredTimescale message, length delimited. Does not implicitly {@link CUserMessageDesiredTimescale.verify|verify} messages.
     * @param message CUserMessageDesiredTimescale message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageDesiredTimescale, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageDesiredTimescale message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageDesiredTimescale
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageDesiredTimescale;

    /**
     * Decodes a CUserMessageDesiredTimescale message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageDesiredTimescale
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageDesiredTimescale;

    /**
     * Verifies a CUserMessageDesiredTimescale message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageDesiredTimescale message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageDesiredTimescale
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageDesiredTimescale;

    /**
     * Creates a plain object from a CUserMessageDesiredTimescale message. Also converts values to other types if specified.
     * @param message CUserMessageDesiredTimescale
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageDesiredTimescale, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageDesiredTimescale to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageDesiredTimescale
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageFade. */
export class CUserMessageFade implements ICUserMessageFade {

    /**
     * Constructs a new CUserMessageFade.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageFade);

    /** CUserMessageFade duration. */
    public duration: number;

    /** CUserMessageFade holdTime. */
    public holdTime: number;

    /** CUserMessageFade flags. */
    public flags: number;

    /** CUserMessageFade color. */
    public color: number;

    /**
     * Creates a new CUserMessageFade instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageFade instance
     */
    public static create(properties?: ICUserMessageFade): CUserMessageFade;

    /**
     * Encodes the specified CUserMessageFade message. Does not implicitly {@link CUserMessageFade.verify|verify} messages.
     * @param message CUserMessageFade message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageFade, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageFade message, length delimited. Does not implicitly {@link CUserMessageFade.verify|verify} messages.
     * @param message CUserMessageFade message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageFade, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageFade message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageFade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageFade;

    /**
     * Decodes a CUserMessageFade message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageFade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageFade;

    /**
     * Verifies a CUserMessageFade message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageFade message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageFade
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageFade;

    /**
     * Creates a plain object from a CUserMessageFade message. Also converts values to other types if specified.
     * @param message CUserMessageFade
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageFade, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageFade to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageFade
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageShake. */
export class CUserMessageShake implements ICUserMessageShake {

    /**
     * Constructs a new CUserMessageShake.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageShake);

    /** CUserMessageShake command. */
    public command: number;

    /** CUserMessageShake amplitude. */
    public amplitude: number;

    /** CUserMessageShake frequency. */
    public frequency: number;

    /** CUserMessageShake duration. */
    public duration: number;

    /**
     * Creates a new CUserMessageShake instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageShake instance
     */
    public static create(properties?: ICUserMessageShake): CUserMessageShake;

    /**
     * Encodes the specified CUserMessageShake message. Does not implicitly {@link CUserMessageShake.verify|verify} messages.
     * @param message CUserMessageShake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageShake, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageShake message, length delimited. Does not implicitly {@link CUserMessageShake.verify|verify} messages.
     * @param message CUserMessageShake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageShake, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageShake message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageShake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageShake;

    /**
     * Decodes a CUserMessageShake message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageShake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageShake;

    /**
     * Verifies a CUserMessageShake message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageShake message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageShake
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageShake;

    /**
     * Creates a plain object from a CUserMessageShake message. Also converts values to other types if specified.
     * @param message CUserMessageShake
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageShake, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageShake to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageShake
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageShakeDir. */
export class CUserMessageShakeDir implements ICUserMessageShakeDir {

    /**
     * Constructs a new CUserMessageShakeDir.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageShakeDir);

    /** CUserMessageShakeDir shake. */
    public shake?: (ICUserMessageShake|null);

    /** CUserMessageShakeDir direction. */
    public direction?: (ICMsgVector|null);

    /**
     * Creates a new CUserMessageShakeDir instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageShakeDir instance
     */
    public static create(properties?: ICUserMessageShakeDir): CUserMessageShakeDir;

    /**
     * Encodes the specified CUserMessageShakeDir message. Does not implicitly {@link CUserMessageShakeDir.verify|verify} messages.
     * @param message CUserMessageShakeDir message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageShakeDir, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageShakeDir message, length delimited. Does not implicitly {@link CUserMessageShakeDir.verify|verify} messages.
     * @param message CUserMessageShakeDir message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageShakeDir, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageShakeDir message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageShakeDir
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageShakeDir;

    /**
     * Decodes a CUserMessageShakeDir message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageShakeDir
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageShakeDir;

    /**
     * Verifies a CUserMessageShakeDir message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageShakeDir message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageShakeDir
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageShakeDir;

    /**
     * Creates a plain object from a CUserMessageShakeDir message. Also converts values to other types if specified.
     * @param message CUserMessageShakeDir
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageShakeDir, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageShakeDir to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageShakeDir
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageScreenTilt. */
export class CUserMessageScreenTilt implements ICUserMessageScreenTilt {

    /**
     * Constructs a new CUserMessageScreenTilt.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageScreenTilt);

    /** CUserMessageScreenTilt command. */
    public command: number;

    /** CUserMessageScreenTilt easeInOut. */
    public easeInOut: boolean;

    /** CUserMessageScreenTilt angle. */
    public angle?: (ICMsgVector|null);

    /** CUserMessageScreenTilt duration. */
    public duration: number;

    /** CUserMessageScreenTilt time. */
    public time: number;

    /**
     * Creates a new CUserMessageScreenTilt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageScreenTilt instance
     */
    public static create(properties?: ICUserMessageScreenTilt): CUserMessageScreenTilt;

    /**
     * Encodes the specified CUserMessageScreenTilt message. Does not implicitly {@link CUserMessageScreenTilt.verify|verify} messages.
     * @param message CUserMessageScreenTilt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageScreenTilt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageScreenTilt message, length delimited. Does not implicitly {@link CUserMessageScreenTilt.verify|verify} messages.
     * @param message CUserMessageScreenTilt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageScreenTilt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageScreenTilt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageScreenTilt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageScreenTilt;

    /**
     * Decodes a CUserMessageScreenTilt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageScreenTilt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageScreenTilt;

    /**
     * Verifies a CUserMessageScreenTilt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageScreenTilt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageScreenTilt
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageScreenTilt;

    /**
     * Creates a plain object from a CUserMessageScreenTilt message. Also converts values to other types if specified.
     * @param message CUserMessageScreenTilt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageScreenTilt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageScreenTilt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageScreenTilt
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageSayText. */
export class CUserMessageSayText implements ICUserMessageSayText {

    /**
     * Constructs a new CUserMessageSayText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageSayText);

    /** CUserMessageSayText playerindex. */
    public playerindex: number;

    /** CUserMessageSayText text. */
    public text: string;

    /** CUserMessageSayText chat. */
    public chat: boolean;

    /**
     * Creates a new CUserMessageSayText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageSayText instance
     */
    public static create(properties?: ICUserMessageSayText): CUserMessageSayText;

    /**
     * Encodes the specified CUserMessageSayText message. Does not implicitly {@link CUserMessageSayText.verify|verify} messages.
     * @param message CUserMessageSayText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageSayText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageSayText message, length delimited. Does not implicitly {@link CUserMessageSayText.verify|verify} messages.
     * @param message CUserMessageSayText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageSayText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageSayText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageSayText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageSayText;

    /**
     * Decodes a CUserMessageSayText message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageSayText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageSayText;

    /**
     * Verifies a CUserMessageSayText message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageSayText message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageSayText
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageSayText;

    /**
     * Creates a plain object from a CUserMessageSayText message. Also converts values to other types if specified.
     * @param message CUserMessageSayText
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageSayText, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageSayText to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageSayText
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageSayText2. */
export class CUserMessageSayText2 implements ICUserMessageSayText2 {

    /**
     * Constructs a new CUserMessageSayText2.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageSayText2);

    /** CUserMessageSayText2 entityindex. */
    public entityindex: number;

    /** CUserMessageSayText2 chat. */
    public chat: boolean;

    /** CUserMessageSayText2 messagename. */
    public messagename: string;

    /** CUserMessageSayText2 param1. */
    public param1: string;

    /** CUserMessageSayText2 param2. */
    public param2: string;

    /** CUserMessageSayText2 param3. */
    public param3: string;

    /** CUserMessageSayText2 param4. */
    public param4: string;

    /**
     * Creates a new CUserMessageSayText2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageSayText2 instance
     */
    public static create(properties?: ICUserMessageSayText2): CUserMessageSayText2;

    /**
     * Encodes the specified CUserMessageSayText2 message. Does not implicitly {@link CUserMessageSayText2.verify|verify} messages.
     * @param message CUserMessageSayText2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageSayText2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageSayText2 message, length delimited. Does not implicitly {@link CUserMessageSayText2.verify|verify} messages.
     * @param message CUserMessageSayText2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageSayText2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageSayText2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageSayText2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageSayText2;

    /**
     * Decodes a CUserMessageSayText2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageSayText2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageSayText2;

    /**
     * Verifies a CUserMessageSayText2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageSayText2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageSayText2
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageSayText2;

    /**
     * Creates a plain object from a CUserMessageSayText2 message. Also converts values to other types if specified.
     * @param message CUserMessageSayText2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageSayText2, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageSayText2 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageSayText2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageHudMsg. */
export class CUserMessageHudMsg implements ICUserMessageHudMsg {

    /**
     * Constructs a new CUserMessageHudMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageHudMsg);

    /** CUserMessageHudMsg channel. */
    public channel: number;

    /** CUserMessageHudMsg x. */
    public x: number;

    /** CUserMessageHudMsg y. */
    public y: number;

    /** CUserMessageHudMsg color1. */
    public color1: number;

    /** CUserMessageHudMsg color2. */
    public color2: number;

    /** CUserMessageHudMsg effect. */
    public effect: number;

    /** CUserMessageHudMsg message. */
    public message: string;

    /**
     * Creates a new CUserMessageHudMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageHudMsg instance
     */
    public static create(properties?: ICUserMessageHudMsg): CUserMessageHudMsg;

    /**
     * Encodes the specified CUserMessageHudMsg message. Does not implicitly {@link CUserMessageHudMsg.verify|verify} messages.
     * @param message CUserMessageHudMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageHudMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageHudMsg message, length delimited. Does not implicitly {@link CUserMessageHudMsg.verify|verify} messages.
     * @param message CUserMessageHudMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageHudMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageHudMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageHudMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageHudMsg;

    /**
     * Decodes a CUserMessageHudMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageHudMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageHudMsg;

    /**
     * Verifies a CUserMessageHudMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageHudMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageHudMsg
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageHudMsg;

    /**
     * Creates a plain object from a CUserMessageHudMsg message. Also converts values to other types if specified.
     * @param message CUserMessageHudMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageHudMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageHudMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageHudMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageHudText. */
export class CUserMessageHudText implements ICUserMessageHudText {

    /**
     * Constructs a new CUserMessageHudText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageHudText);

    /** CUserMessageHudText message. */
    public message: string;

    /**
     * Creates a new CUserMessageHudText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageHudText instance
     */
    public static create(properties?: ICUserMessageHudText): CUserMessageHudText;

    /**
     * Encodes the specified CUserMessageHudText message. Does not implicitly {@link CUserMessageHudText.verify|verify} messages.
     * @param message CUserMessageHudText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageHudText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageHudText message, length delimited. Does not implicitly {@link CUserMessageHudText.verify|verify} messages.
     * @param message CUserMessageHudText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageHudText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageHudText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageHudText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageHudText;

    /**
     * Decodes a CUserMessageHudText message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageHudText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageHudText;

    /**
     * Verifies a CUserMessageHudText message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageHudText message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageHudText
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageHudText;

    /**
     * Creates a plain object from a CUserMessageHudText message. Also converts values to other types if specified.
     * @param message CUserMessageHudText
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageHudText, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageHudText to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageHudText
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageTextMsg. */
export class CUserMessageTextMsg implements ICUserMessageTextMsg {

    /**
     * Constructs a new CUserMessageTextMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageTextMsg);

    /** CUserMessageTextMsg dest. */
    public dest: number;

    /** CUserMessageTextMsg param. */
    public param: string[];

    /**
     * Creates a new CUserMessageTextMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageTextMsg instance
     */
    public static create(properties?: ICUserMessageTextMsg): CUserMessageTextMsg;

    /**
     * Encodes the specified CUserMessageTextMsg message. Does not implicitly {@link CUserMessageTextMsg.verify|verify} messages.
     * @param message CUserMessageTextMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageTextMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageTextMsg message, length delimited. Does not implicitly {@link CUserMessageTextMsg.verify|verify} messages.
     * @param message CUserMessageTextMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageTextMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageTextMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageTextMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageTextMsg;

    /**
     * Decodes a CUserMessageTextMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageTextMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageTextMsg;

    /**
     * Verifies a CUserMessageTextMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageTextMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageTextMsg
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageTextMsg;

    /**
     * Creates a plain object from a CUserMessageTextMsg message. Also converts values to other types if specified.
     * @param message CUserMessageTextMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageTextMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageTextMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageTextMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageGameTitle. */
export class CUserMessageGameTitle implements ICUserMessageGameTitle {

    /**
     * Constructs a new CUserMessageGameTitle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageGameTitle);

    /**
     * Creates a new CUserMessageGameTitle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageGameTitle instance
     */
    public static create(properties?: ICUserMessageGameTitle): CUserMessageGameTitle;

    /**
     * Encodes the specified CUserMessageGameTitle message. Does not implicitly {@link CUserMessageGameTitle.verify|verify} messages.
     * @param message CUserMessageGameTitle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageGameTitle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageGameTitle message, length delimited. Does not implicitly {@link CUserMessageGameTitle.verify|verify} messages.
     * @param message CUserMessageGameTitle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageGameTitle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageGameTitle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageGameTitle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageGameTitle;

    /**
     * Decodes a CUserMessageGameTitle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageGameTitle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageGameTitle;

    /**
     * Verifies a CUserMessageGameTitle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageGameTitle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageGameTitle
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageGameTitle;

    /**
     * Creates a plain object from a CUserMessageGameTitle message. Also converts values to other types if specified.
     * @param message CUserMessageGameTitle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageGameTitle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageGameTitle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageGameTitle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageResetHUD. */
export class CUserMessageResetHUD implements ICUserMessageResetHUD {

    /**
     * Constructs a new CUserMessageResetHUD.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageResetHUD);

    /**
     * Creates a new CUserMessageResetHUD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageResetHUD instance
     */
    public static create(properties?: ICUserMessageResetHUD): CUserMessageResetHUD;

    /**
     * Encodes the specified CUserMessageResetHUD message. Does not implicitly {@link CUserMessageResetHUD.verify|verify} messages.
     * @param message CUserMessageResetHUD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageResetHUD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageResetHUD message, length delimited. Does not implicitly {@link CUserMessageResetHUD.verify|verify} messages.
     * @param message CUserMessageResetHUD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageResetHUD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageResetHUD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageResetHUD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageResetHUD;

    /**
     * Decodes a CUserMessageResetHUD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageResetHUD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageResetHUD;

    /**
     * Verifies a CUserMessageResetHUD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageResetHUD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageResetHUD
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageResetHUD;

    /**
     * Creates a plain object from a CUserMessageResetHUD message. Also converts values to other types if specified.
     * @param message CUserMessageResetHUD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageResetHUD, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageResetHUD to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageResetHUD
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageSendAudio. */
export class CUserMessageSendAudio implements ICUserMessageSendAudio {

    /**
     * Constructs a new CUserMessageSendAudio.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageSendAudio);

    /** CUserMessageSendAudio soundname. */
    public soundname: string;

    /** CUserMessageSendAudio stop. */
    public stop: boolean;

    /**
     * Creates a new CUserMessageSendAudio instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageSendAudio instance
     */
    public static create(properties?: ICUserMessageSendAudio): CUserMessageSendAudio;

    /**
     * Encodes the specified CUserMessageSendAudio message. Does not implicitly {@link CUserMessageSendAudio.verify|verify} messages.
     * @param message CUserMessageSendAudio message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageSendAudio, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageSendAudio message, length delimited. Does not implicitly {@link CUserMessageSendAudio.verify|verify} messages.
     * @param message CUserMessageSendAudio message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageSendAudio, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageSendAudio message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageSendAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageSendAudio;

    /**
     * Decodes a CUserMessageSendAudio message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageSendAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageSendAudio;

    /**
     * Verifies a CUserMessageSendAudio message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageSendAudio message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageSendAudio
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageSendAudio;

    /**
     * Creates a plain object from a CUserMessageSendAudio message. Also converts values to other types if specified.
     * @param message CUserMessageSendAudio
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageSendAudio, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageSendAudio to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageSendAudio
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageAudioParameter. */
export class CUserMessageAudioParameter implements ICUserMessageAudioParameter {

    /**
     * Constructs a new CUserMessageAudioParameter.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageAudioParameter);

    /** CUserMessageAudioParameter parameterType. */
    public parameterType: number;

    /** CUserMessageAudioParameter nameHashCode. */
    public nameHashCode: number;

    /** CUserMessageAudioParameter value. */
    public value: number;

    /** CUserMessageAudioParameter intValue. */
    public intValue: number;

    /**
     * Creates a new CUserMessageAudioParameter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageAudioParameter instance
     */
    public static create(properties?: ICUserMessageAudioParameter): CUserMessageAudioParameter;

    /**
     * Encodes the specified CUserMessageAudioParameter message. Does not implicitly {@link CUserMessageAudioParameter.verify|verify} messages.
     * @param message CUserMessageAudioParameter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageAudioParameter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageAudioParameter message, length delimited. Does not implicitly {@link CUserMessageAudioParameter.verify|verify} messages.
     * @param message CUserMessageAudioParameter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageAudioParameter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageAudioParameter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageAudioParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageAudioParameter;

    /**
     * Decodes a CUserMessageAudioParameter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageAudioParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageAudioParameter;

    /**
     * Verifies a CUserMessageAudioParameter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageAudioParameter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageAudioParameter
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageAudioParameter;

    /**
     * Creates a plain object from a CUserMessageAudioParameter message. Also converts values to other types if specified.
     * @param message CUserMessageAudioParameter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageAudioParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageAudioParameter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageAudioParameter
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageVoiceMask. */
export class CUserMessageVoiceMask implements ICUserMessageVoiceMask {

    /**
     * Constructs a new CUserMessageVoiceMask.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageVoiceMask);

    /** CUserMessageVoiceMask gamerulesMasks. */
    public gamerulesMasks: number[];

    /** CUserMessageVoiceMask banMasks. */
    public banMasks: number[];

    /** CUserMessageVoiceMask modEnable. */
    public modEnable: boolean;

    /**
     * Creates a new CUserMessageVoiceMask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageVoiceMask instance
     */
    public static create(properties?: ICUserMessageVoiceMask): CUserMessageVoiceMask;

    /**
     * Encodes the specified CUserMessageVoiceMask message. Does not implicitly {@link CUserMessageVoiceMask.verify|verify} messages.
     * @param message CUserMessageVoiceMask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageVoiceMask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageVoiceMask message, length delimited. Does not implicitly {@link CUserMessageVoiceMask.verify|verify} messages.
     * @param message CUserMessageVoiceMask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageVoiceMask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageVoiceMask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageVoiceMask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageVoiceMask;

    /**
     * Decodes a CUserMessageVoiceMask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageVoiceMask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageVoiceMask;

    /**
     * Verifies a CUserMessageVoiceMask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageVoiceMask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageVoiceMask
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageVoiceMask;

    /**
     * Creates a plain object from a CUserMessageVoiceMask message. Also converts values to other types if specified.
     * @param message CUserMessageVoiceMask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageVoiceMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageVoiceMask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageVoiceMask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageRequestState. */
export class CUserMessageRequestState implements ICUserMessageRequestState {

    /**
     * Constructs a new CUserMessageRequestState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageRequestState);

    /**
     * Creates a new CUserMessageRequestState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageRequestState instance
     */
    public static create(properties?: ICUserMessageRequestState): CUserMessageRequestState;

    /**
     * Encodes the specified CUserMessageRequestState message. Does not implicitly {@link CUserMessageRequestState.verify|verify} messages.
     * @param message CUserMessageRequestState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageRequestState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageRequestState message, length delimited. Does not implicitly {@link CUserMessageRequestState.verify|verify} messages.
     * @param message CUserMessageRequestState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageRequestState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageRequestState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageRequestState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageRequestState;

    /**
     * Decodes a CUserMessageRequestState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageRequestState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageRequestState;

    /**
     * Verifies a CUserMessageRequestState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageRequestState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageRequestState
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageRequestState;

    /**
     * Creates a plain object from a CUserMessageRequestState message. Also converts values to other types if specified.
     * @param message CUserMessageRequestState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageRequestState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageRequestState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageRequestState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageRumble. */
export class CUserMessageRumble implements ICUserMessageRumble {

    /**
     * Constructs a new CUserMessageRumble.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageRumble);

    /** CUserMessageRumble index. */
    public index: number;

    /** CUserMessageRumble data. */
    public data: number;

    /** CUserMessageRumble flags. */
    public flags: number;

    /**
     * Creates a new CUserMessageRumble instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageRumble instance
     */
    public static create(properties?: ICUserMessageRumble): CUserMessageRumble;

    /**
     * Encodes the specified CUserMessageRumble message. Does not implicitly {@link CUserMessageRumble.verify|verify} messages.
     * @param message CUserMessageRumble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageRumble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageRumble message, length delimited. Does not implicitly {@link CUserMessageRumble.verify|verify} messages.
     * @param message CUserMessageRumble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageRumble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageRumble message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageRumble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageRumble;

    /**
     * Decodes a CUserMessageRumble message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageRumble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageRumble;

    /**
     * Verifies a CUserMessageRumble message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageRumble message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageRumble
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageRumble;

    /**
     * Creates a plain object from a CUserMessageRumble message. Also converts values to other types if specified.
     * @param message CUserMessageRumble
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageRumble, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageRumble to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageRumble
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageSayTextChannel. */
export class CUserMessageSayTextChannel implements ICUserMessageSayTextChannel {

    /**
     * Constructs a new CUserMessageSayTextChannel.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageSayTextChannel);

    /** CUserMessageSayTextChannel player. */
    public player: number;

    /** CUserMessageSayTextChannel channel. */
    public channel: number;

    /** CUserMessageSayTextChannel text. */
    public text: string;

    /**
     * Creates a new CUserMessageSayTextChannel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageSayTextChannel instance
     */
    public static create(properties?: ICUserMessageSayTextChannel): CUserMessageSayTextChannel;

    /**
     * Encodes the specified CUserMessageSayTextChannel message. Does not implicitly {@link CUserMessageSayTextChannel.verify|verify} messages.
     * @param message CUserMessageSayTextChannel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageSayTextChannel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageSayTextChannel message, length delimited. Does not implicitly {@link CUserMessageSayTextChannel.verify|verify} messages.
     * @param message CUserMessageSayTextChannel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageSayTextChannel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageSayTextChannel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageSayTextChannel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageSayTextChannel;

    /**
     * Decodes a CUserMessageSayTextChannel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageSayTextChannel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageSayTextChannel;

    /**
     * Verifies a CUserMessageSayTextChannel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageSayTextChannel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageSayTextChannel
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageSayTextChannel;

    /**
     * Creates a plain object from a CUserMessageSayTextChannel message. Also converts values to other types if specified.
     * @param message CUserMessageSayTextChannel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageSayTextChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageSayTextChannel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageSayTextChannel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageColoredText. */
export class CUserMessageColoredText implements ICUserMessageColoredText {

    /**
     * Constructs a new CUserMessageColoredText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageColoredText);

    /** CUserMessageColoredText color. */
    public color: number;

    /** CUserMessageColoredText text. */
    public text: string;

    /** CUserMessageColoredText reset. */
    public reset: boolean;

    /** CUserMessageColoredText contextPlayerSlot. */
    public contextPlayerSlot: number;

    /** CUserMessageColoredText contextValue. */
    public contextValue: number;

    /** CUserMessageColoredText contextTeamId. */
    public contextTeamId: number;

    /**
     * Creates a new CUserMessageColoredText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageColoredText instance
     */
    public static create(properties?: ICUserMessageColoredText): CUserMessageColoredText;

    /**
     * Encodes the specified CUserMessageColoredText message. Does not implicitly {@link CUserMessageColoredText.verify|verify} messages.
     * @param message CUserMessageColoredText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageColoredText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageColoredText message, length delimited. Does not implicitly {@link CUserMessageColoredText.verify|verify} messages.
     * @param message CUserMessageColoredText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageColoredText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageColoredText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageColoredText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageColoredText;

    /**
     * Decodes a CUserMessageColoredText message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageColoredText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageColoredText;

    /**
     * Verifies a CUserMessageColoredText message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageColoredText message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageColoredText
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageColoredText;

    /**
     * Creates a plain object from a CUserMessageColoredText message. Also converts values to other types if specified.
     * @param message CUserMessageColoredText
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageColoredText, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageColoredText to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageColoredText
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageItemPickup. */
export class CUserMessageItemPickup implements ICUserMessageItemPickup {

    /**
     * Constructs a new CUserMessageItemPickup.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageItemPickup);

    /** CUserMessageItemPickup itemname. */
    public itemname: string;

    /**
     * Creates a new CUserMessageItemPickup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageItemPickup instance
     */
    public static create(properties?: ICUserMessageItemPickup): CUserMessageItemPickup;

    /**
     * Encodes the specified CUserMessageItemPickup message. Does not implicitly {@link CUserMessageItemPickup.verify|verify} messages.
     * @param message CUserMessageItemPickup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageItemPickup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageItemPickup message, length delimited. Does not implicitly {@link CUserMessageItemPickup.verify|verify} messages.
     * @param message CUserMessageItemPickup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageItemPickup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageItemPickup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageItemPickup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageItemPickup;

    /**
     * Decodes a CUserMessageItemPickup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageItemPickup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageItemPickup;

    /**
     * Verifies a CUserMessageItemPickup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageItemPickup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageItemPickup
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageItemPickup;

    /**
     * Creates a plain object from a CUserMessageItemPickup message. Also converts values to other types if specified.
     * @param message CUserMessageItemPickup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageItemPickup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageItemPickup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageItemPickup
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageAmmoDenied. */
export class CUserMessageAmmoDenied implements ICUserMessageAmmoDenied {

    /**
     * Constructs a new CUserMessageAmmoDenied.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageAmmoDenied);

    /** CUserMessageAmmoDenied ammoId. */
    public ammoId: number;

    /**
     * Creates a new CUserMessageAmmoDenied instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageAmmoDenied instance
     */
    public static create(properties?: ICUserMessageAmmoDenied): CUserMessageAmmoDenied;

    /**
     * Encodes the specified CUserMessageAmmoDenied message. Does not implicitly {@link CUserMessageAmmoDenied.verify|verify} messages.
     * @param message CUserMessageAmmoDenied message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageAmmoDenied, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageAmmoDenied message, length delimited. Does not implicitly {@link CUserMessageAmmoDenied.verify|verify} messages.
     * @param message CUserMessageAmmoDenied message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageAmmoDenied, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageAmmoDenied message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageAmmoDenied
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageAmmoDenied;

    /**
     * Decodes a CUserMessageAmmoDenied message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageAmmoDenied
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageAmmoDenied;

    /**
     * Verifies a CUserMessageAmmoDenied message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageAmmoDenied message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageAmmoDenied
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageAmmoDenied;

    /**
     * Creates a plain object from a CUserMessageAmmoDenied message. Also converts values to other types if specified.
     * @param message CUserMessageAmmoDenied
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageAmmoDenied, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageAmmoDenied to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageAmmoDenied
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageShowMenu. */
export class CUserMessageShowMenu implements ICUserMessageShowMenu {

    /**
     * Constructs a new CUserMessageShowMenu.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageShowMenu);

    /** CUserMessageShowMenu validslots. */
    public validslots: number;

    /** CUserMessageShowMenu displaytime. */
    public displaytime: number;

    /** CUserMessageShowMenu needmore. */
    public needmore: boolean;

    /** CUserMessageShowMenu menustring. */
    public menustring: string;

    /**
     * Creates a new CUserMessageShowMenu instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageShowMenu instance
     */
    public static create(properties?: ICUserMessageShowMenu): CUserMessageShowMenu;

    /**
     * Encodes the specified CUserMessageShowMenu message. Does not implicitly {@link CUserMessageShowMenu.verify|verify} messages.
     * @param message CUserMessageShowMenu message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageShowMenu, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageShowMenu message, length delimited. Does not implicitly {@link CUserMessageShowMenu.verify|verify} messages.
     * @param message CUserMessageShowMenu message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageShowMenu, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageShowMenu message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageShowMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageShowMenu;

    /**
     * Decodes a CUserMessageShowMenu message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageShowMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageShowMenu;

    /**
     * Verifies a CUserMessageShowMenu message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageShowMenu message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageShowMenu
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageShowMenu;

    /**
     * Creates a plain object from a CUserMessageShowMenu message. Also converts values to other types if specified.
     * @param message CUserMessageShowMenu
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageShowMenu, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageShowMenu to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageShowMenu
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageCreditsMsg. */
export class CUserMessageCreditsMsg implements ICUserMessageCreditsMsg {

    /**
     * Constructs a new CUserMessageCreditsMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageCreditsMsg);

    /** CUserMessageCreditsMsg rolltype. */
    public rolltype: eRollType;

    /** CUserMessageCreditsMsg logoLength. */
    public logoLength: number;

    /**
     * Creates a new CUserMessageCreditsMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageCreditsMsg instance
     */
    public static create(properties?: ICUserMessageCreditsMsg): CUserMessageCreditsMsg;

    /**
     * Encodes the specified CUserMessageCreditsMsg message. Does not implicitly {@link CUserMessageCreditsMsg.verify|verify} messages.
     * @param message CUserMessageCreditsMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageCreditsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageCreditsMsg message, length delimited. Does not implicitly {@link CUserMessageCreditsMsg.verify|verify} messages.
     * @param message CUserMessageCreditsMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageCreditsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageCreditsMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageCreditsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCreditsMsg;

    /**
     * Decodes a CUserMessageCreditsMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageCreditsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCreditsMsg;

    /**
     * Verifies a CUserMessageCreditsMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageCreditsMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageCreditsMsg
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageCreditsMsg;

    /**
     * Creates a plain object from a CUserMessageCreditsMsg message. Also converts values to other types if specified.
     * @param message CUserMessageCreditsMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageCreditsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageCreditsMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageCreditsMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CEntityMessagePlayJingle. */
export class CEntityMessagePlayJingle implements ICEntityMessagePlayJingle {

    /**
     * Constructs a new CEntityMessagePlayJingle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEntityMessagePlayJingle);

    /** CEntityMessagePlayJingle entityMsg. */
    public entityMsg?: (ICEntityMsg|null);

    /**
     * Creates a new CEntityMessagePlayJingle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEntityMessagePlayJingle instance
     */
    public static create(properties?: ICEntityMessagePlayJingle): CEntityMessagePlayJingle;

    /**
     * Encodes the specified CEntityMessagePlayJingle message. Does not implicitly {@link CEntityMessagePlayJingle.verify|verify} messages.
     * @param message CEntityMessagePlayJingle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEntityMessagePlayJingle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEntityMessagePlayJingle message, length delimited. Does not implicitly {@link CEntityMessagePlayJingle.verify|verify} messages.
     * @param message CEntityMessagePlayJingle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEntityMessagePlayJingle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEntityMessagePlayJingle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEntityMessagePlayJingle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEntityMessagePlayJingle;

    /**
     * Decodes a CEntityMessagePlayJingle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEntityMessagePlayJingle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEntityMessagePlayJingle;

    /**
     * Verifies a CEntityMessagePlayJingle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEntityMessagePlayJingle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEntityMessagePlayJingle
     */
    public static fromObject(object: { [k: string]: any }): CEntityMessagePlayJingle;

    /**
     * Creates a plain object from a CEntityMessagePlayJingle message. Also converts values to other types if specified.
     * @param message CEntityMessagePlayJingle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEntityMessagePlayJingle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEntityMessagePlayJingle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEntityMessagePlayJingle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CEntityMessageScreenOverlay. */
export class CEntityMessageScreenOverlay implements ICEntityMessageScreenOverlay {

    /**
     * Constructs a new CEntityMessageScreenOverlay.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEntityMessageScreenOverlay);

    /** CEntityMessageScreenOverlay startEffect. */
    public startEffect: boolean;

    /** CEntityMessageScreenOverlay entityMsg. */
    public entityMsg?: (ICEntityMsg|null);

    /**
     * Creates a new CEntityMessageScreenOverlay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEntityMessageScreenOverlay instance
     */
    public static create(properties?: ICEntityMessageScreenOverlay): CEntityMessageScreenOverlay;

    /**
     * Encodes the specified CEntityMessageScreenOverlay message. Does not implicitly {@link CEntityMessageScreenOverlay.verify|verify} messages.
     * @param message CEntityMessageScreenOverlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEntityMessageScreenOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEntityMessageScreenOverlay message, length delimited. Does not implicitly {@link CEntityMessageScreenOverlay.verify|verify} messages.
     * @param message CEntityMessageScreenOverlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEntityMessageScreenOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEntityMessageScreenOverlay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEntityMessageScreenOverlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEntityMessageScreenOverlay;

    /**
     * Decodes a CEntityMessageScreenOverlay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEntityMessageScreenOverlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEntityMessageScreenOverlay;

    /**
     * Verifies a CEntityMessageScreenOverlay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEntityMessageScreenOverlay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEntityMessageScreenOverlay
     */
    public static fromObject(object: { [k: string]: any }): CEntityMessageScreenOverlay;

    /**
     * Creates a plain object from a CEntityMessageScreenOverlay message. Also converts values to other types if specified.
     * @param message CEntityMessageScreenOverlay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEntityMessageScreenOverlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEntityMessageScreenOverlay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEntityMessageScreenOverlay
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CEntityMessageRemoveAllDecals. */
export class CEntityMessageRemoveAllDecals implements ICEntityMessageRemoveAllDecals {

    /**
     * Constructs a new CEntityMessageRemoveAllDecals.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEntityMessageRemoveAllDecals);

    /** CEntityMessageRemoveAllDecals removeDecals. */
    public removeDecals: boolean;

    /** CEntityMessageRemoveAllDecals entityMsg. */
    public entityMsg?: (ICEntityMsg|null);

    /**
     * Creates a new CEntityMessageRemoveAllDecals instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEntityMessageRemoveAllDecals instance
     */
    public static create(properties?: ICEntityMessageRemoveAllDecals): CEntityMessageRemoveAllDecals;

    /**
     * Encodes the specified CEntityMessageRemoveAllDecals message. Does not implicitly {@link CEntityMessageRemoveAllDecals.verify|verify} messages.
     * @param message CEntityMessageRemoveAllDecals message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEntityMessageRemoveAllDecals, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEntityMessageRemoveAllDecals message, length delimited. Does not implicitly {@link CEntityMessageRemoveAllDecals.verify|verify} messages.
     * @param message CEntityMessageRemoveAllDecals message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEntityMessageRemoveAllDecals, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEntityMessageRemoveAllDecals message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEntityMessageRemoveAllDecals
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEntityMessageRemoveAllDecals;

    /**
     * Decodes a CEntityMessageRemoveAllDecals message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEntityMessageRemoveAllDecals
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEntityMessageRemoveAllDecals;

    /**
     * Verifies a CEntityMessageRemoveAllDecals message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEntityMessageRemoveAllDecals message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEntityMessageRemoveAllDecals
     */
    public static fromObject(object: { [k: string]: any }): CEntityMessageRemoveAllDecals;

    /**
     * Creates a plain object from a CEntityMessageRemoveAllDecals message. Also converts values to other types if specified.
     * @param message CEntityMessageRemoveAllDecals
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEntityMessageRemoveAllDecals, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEntityMessageRemoveAllDecals to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEntityMessageRemoveAllDecals
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CEntityMessagePropagateForce. */
export class CEntityMessagePropagateForce implements ICEntityMessagePropagateForce {

    /**
     * Constructs a new CEntityMessagePropagateForce.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEntityMessagePropagateForce);

    /** CEntityMessagePropagateForce impulse. */
    public impulse?: (ICMsgVector|null);

    /** CEntityMessagePropagateForce entityMsg. */
    public entityMsg?: (ICEntityMsg|null);

    /**
     * Creates a new CEntityMessagePropagateForce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEntityMessagePropagateForce instance
     */
    public static create(properties?: ICEntityMessagePropagateForce): CEntityMessagePropagateForce;

    /**
     * Encodes the specified CEntityMessagePropagateForce message. Does not implicitly {@link CEntityMessagePropagateForce.verify|verify} messages.
     * @param message CEntityMessagePropagateForce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEntityMessagePropagateForce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEntityMessagePropagateForce message, length delimited. Does not implicitly {@link CEntityMessagePropagateForce.verify|verify} messages.
     * @param message CEntityMessagePropagateForce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEntityMessagePropagateForce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEntityMessagePropagateForce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEntityMessagePropagateForce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEntityMessagePropagateForce;

    /**
     * Decodes a CEntityMessagePropagateForce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEntityMessagePropagateForce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEntityMessagePropagateForce;

    /**
     * Verifies a CEntityMessagePropagateForce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEntityMessagePropagateForce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEntityMessagePropagateForce
     */
    public static fromObject(object: { [k: string]: any }): CEntityMessagePropagateForce;

    /**
     * Creates a plain object from a CEntityMessagePropagateForce message. Also converts values to other types if specified.
     * @param message CEntityMessagePropagateForce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEntityMessagePropagateForce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEntityMessagePropagateForce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEntityMessagePropagateForce
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CEntityMessageDoSpark. */
export class CEntityMessageDoSpark implements ICEntityMessageDoSpark {

    /**
     * Constructs a new CEntityMessageDoSpark.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEntityMessageDoSpark);

    /** CEntityMessageDoSpark origin. */
    public origin?: (ICMsgVector|null);

    /** CEntityMessageDoSpark entityindex. */
    public entityindex: number;

    /** CEntityMessageDoSpark radius. */
    public radius: number;

    /** CEntityMessageDoSpark color. */
    public color: number;

    /** CEntityMessageDoSpark beams. */
    public beams: number;

    /** CEntityMessageDoSpark thick. */
    public thick: number;

    /** CEntityMessageDoSpark duration. */
    public duration: number;

    /** CEntityMessageDoSpark entityMsg. */
    public entityMsg?: (ICEntityMsg|null);

    /**
     * Creates a new CEntityMessageDoSpark instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEntityMessageDoSpark instance
     */
    public static create(properties?: ICEntityMessageDoSpark): CEntityMessageDoSpark;

    /**
     * Encodes the specified CEntityMessageDoSpark message. Does not implicitly {@link CEntityMessageDoSpark.verify|verify} messages.
     * @param message CEntityMessageDoSpark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEntityMessageDoSpark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEntityMessageDoSpark message, length delimited. Does not implicitly {@link CEntityMessageDoSpark.verify|verify} messages.
     * @param message CEntityMessageDoSpark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEntityMessageDoSpark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEntityMessageDoSpark message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEntityMessageDoSpark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEntityMessageDoSpark;

    /**
     * Decodes a CEntityMessageDoSpark message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEntityMessageDoSpark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEntityMessageDoSpark;

    /**
     * Verifies a CEntityMessageDoSpark message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEntityMessageDoSpark message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEntityMessageDoSpark
     */
    public static fromObject(object: { [k: string]: any }): CEntityMessageDoSpark;

    /**
     * Creates a plain object from a CEntityMessageDoSpark message. Also converts values to other types if specified.
     * @param message CEntityMessageDoSpark
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEntityMessageDoSpark, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEntityMessageDoSpark to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEntityMessageDoSpark
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CEntityMessageFixAngle. */
export class CEntityMessageFixAngle implements ICEntityMessageFixAngle {

    /**
     * Constructs a new CEntityMessageFixAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEntityMessageFixAngle);

    /** CEntityMessageFixAngle relative. */
    public relative: boolean;

    /** CEntityMessageFixAngle angle. */
    public angle?: (ICMsgQAngle|null);

    /** CEntityMessageFixAngle entityMsg. */
    public entityMsg?: (ICEntityMsg|null);

    /**
     * Creates a new CEntityMessageFixAngle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CEntityMessageFixAngle instance
     */
    public static create(properties?: ICEntityMessageFixAngle): CEntityMessageFixAngle;

    /**
     * Encodes the specified CEntityMessageFixAngle message. Does not implicitly {@link CEntityMessageFixAngle.verify|verify} messages.
     * @param message CEntityMessageFixAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICEntityMessageFixAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CEntityMessageFixAngle message, length delimited. Does not implicitly {@link CEntityMessageFixAngle.verify|verify} messages.
     * @param message CEntityMessageFixAngle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICEntityMessageFixAngle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CEntityMessageFixAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEntityMessageFixAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEntityMessageFixAngle;

    /**
     * Decodes a CEntityMessageFixAngle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CEntityMessageFixAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CEntityMessageFixAngle;

    /**
     * Verifies a CEntityMessageFixAngle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CEntityMessageFixAngle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CEntityMessageFixAngle
     */
    public static fromObject(object: { [k: string]: any }): CEntityMessageFixAngle;

    /**
     * Creates a plain object from a CEntityMessageFixAngle message. Also converts values to other types if specified.
     * @param message CEntityMessageFixAngle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CEntityMessageFixAngle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CEntityMessageFixAngle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CEntityMessageFixAngle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageCameraTransition. */
export class CUserMessageCameraTransition implements ICUserMessageCameraTransition {

    /**
     * Constructs a new CUserMessageCameraTransition.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageCameraTransition);

    /** CUserMessageCameraTransition cameraType. */
    public cameraType: number;

    /** CUserMessageCameraTransition duration. */
    public duration: number;

    /** CUserMessageCameraTransition paramsDataDriven. */
    public paramsDataDriven?: (CUserMessageCameraTransition.ITransition_DataDriven|null);

    /**
     * Creates a new CUserMessageCameraTransition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageCameraTransition instance
     */
    public static create(properties?: ICUserMessageCameraTransition): CUserMessageCameraTransition;

    /**
     * Encodes the specified CUserMessageCameraTransition message. Does not implicitly {@link CUserMessageCameraTransition.verify|verify} messages.
     * @param message CUserMessageCameraTransition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageCameraTransition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageCameraTransition message, length delimited. Does not implicitly {@link CUserMessageCameraTransition.verify|verify} messages.
     * @param message CUserMessageCameraTransition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageCameraTransition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageCameraTransition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageCameraTransition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCameraTransition;

    /**
     * Decodes a CUserMessageCameraTransition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageCameraTransition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCameraTransition;

    /**
     * Verifies a CUserMessageCameraTransition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageCameraTransition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageCameraTransition
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageCameraTransition;

    /**
     * Creates a plain object from a CUserMessageCameraTransition message. Also converts values to other types if specified.
     * @param message CUserMessageCameraTransition
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageCameraTransition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageCameraTransition to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageCameraTransition
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMessageCameraTransition {

    /** Properties of a Transition_DataDriven. */
    interface ITransition_DataDriven {

        /** Transition_DataDriven filename */
        filename?: (string|null);

        /** Transition_DataDriven attachEntIndex */
        attachEntIndex?: (number|null);

        /** Transition_DataDriven duration */
        duration?: (number|null);
    }

    /** Represents a Transition_DataDriven. */
    class Transition_DataDriven implements ITransition_DataDriven {

        /**
         * Constructs a new Transition_DataDriven.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessageCameraTransition.ITransition_DataDriven);

        /** Transition_DataDriven filename. */
        public filename: string;

        /** Transition_DataDriven attachEntIndex. */
        public attachEntIndex: number;

        /** Transition_DataDriven duration. */
        public duration: number;

        /**
         * Creates a new Transition_DataDriven instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transition_DataDriven instance
         */
        public static create(properties?: CUserMessageCameraTransition.ITransition_DataDriven): CUserMessageCameraTransition.Transition_DataDriven;

        /**
         * Encodes the specified Transition_DataDriven message. Does not implicitly {@link CUserMessageCameraTransition.Transition_DataDriven.verify|verify} messages.
         * @param message Transition_DataDriven message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessageCameraTransition.ITransition_DataDriven, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transition_DataDriven message, length delimited. Does not implicitly {@link CUserMessageCameraTransition.Transition_DataDriven.verify|verify} messages.
         * @param message Transition_DataDriven message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessageCameraTransition.ITransition_DataDriven, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transition_DataDriven message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transition_DataDriven
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCameraTransition.Transition_DataDriven;

        /**
         * Decodes a Transition_DataDriven message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transition_DataDriven
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCameraTransition.Transition_DataDriven;

        /**
         * Verifies a Transition_DataDriven message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transition_DataDriven message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transition_DataDriven
         */
        public static fromObject(object: { [k: string]: any }): CUserMessageCameraTransition.Transition_DataDriven;

        /**
         * Creates a plain object from a Transition_DataDriven message. Also converts values to other types if specified.
         * @param message Transition_DataDriven
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessageCameraTransition.Transition_DataDriven, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transition_DataDriven to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Transition_DataDriven
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CUserMsg_ParticleManager. */
export class CUserMsg_ParticleManager implements ICUserMsg_ParticleManager {

    /**
     * Constructs a new CUserMsg_ParticleManager.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMsg_ParticleManager);

    /** CUserMsg_ParticleManager type. */
    public type: PARTICLE_MESSAGE;

    /** CUserMsg_ParticleManager index. */
    public index: number;

    /** CUserMsg_ParticleManager releaseParticleIndex. */
    public releaseParticleIndex?: (CUserMsg_ParticleManager.IReleaseParticleIndex|null);

    /** CUserMsg_ParticleManager createParticle. */
    public createParticle?: (CUserMsg_ParticleManager.ICreateParticle|null);

    /** CUserMsg_ParticleManager destroyParticle. */
    public destroyParticle?: (CUserMsg_ParticleManager.IDestroyParticle|null);

    /** CUserMsg_ParticleManager destroyParticleInvolving. */
    public destroyParticleInvolving?: (CUserMsg_ParticleManager.IDestroyParticleInvolving|null);

    /** CUserMsg_ParticleManager updateParticle. */
    public updateParticle?: (CUserMsg_ParticleManager.IUpdateParticle_OBSOLETE|null);

    /** CUserMsg_ParticleManager updateParticleFwd. */
    public updateParticleFwd?: (CUserMsg_ParticleManager.IUpdateParticleFwd_OBSOLETE|null);

    /** CUserMsg_ParticleManager updateParticleOrient. */
    public updateParticleOrient?: (CUserMsg_ParticleManager.IUpdateParticleOrient_OBSOLETE|null);

    /** CUserMsg_ParticleManager updateParticleFallback. */
    public updateParticleFallback?: (CUserMsg_ParticleManager.IUpdateParticleFallback|null);

    /** CUserMsg_ParticleManager updateParticleOffset. */
    public updateParticleOffset?: (CUserMsg_ParticleManager.IUpdateParticleOffset|null);

    /** CUserMsg_ParticleManager updateParticleEnt. */
    public updateParticleEnt?: (CUserMsg_ParticleManager.IUpdateParticleEnt|null);

    /** CUserMsg_ParticleManager updateParticleShouldDraw. */
    public updateParticleShouldDraw?: (CUserMsg_ParticleManager.IUpdateParticleShouldDraw|null);

    /** CUserMsg_ParticleManager updateParticleSetFrozen. */
    public updateParticleSetFrozen?: (CUserMsg_ParticleManager.IUpdateParticleSetFrozen|null);

    /** CUserMsg_ParticleManager changeControlPointAttachment. */
    public changeControlPointAttachment?: (CUserMsg_ParticleManager.IChangeControlPointAttachment|null);

    /** CUserMsg_ParticleManager updateEntityPosition. */
    public updateEntityPosition?: (CUserMsg_ParticleManager.IUpdateEntityPosition|null);

    /** CUserMsg_ParticleManager setParticleFowProperties. */
    public setParticleFowProperties?: (CUserMsg_ParticleManager.ISetParticleFoWProperties|null);

    /** CUserMsg_ParticleManager setParticleText. */
    public setParticleText?: (CUserMsg_ParticleManager.ISetParticleText|null);

    /** CUserMsg_ParticleManager setParticleShouldCheckFow. */
    public setParticleShouldCheckFow?: (CUserMsg_ParticleManager.ISetParticleShouldCheckFoW|null);

    /** CUserMsg_ParticleManager setControlPointModel. */
    public setControlPointModel?: (CUserMsg_ParticleManager.ISetControlPointModel|null);

    /** CUserMsg_ParticleManager setControlPointSnapshot. */
    public setControlPointSnapshot?: (CUserMsg_ParticleManager.ISetControlPointSnapshot|null);

    /** CUserMsg_ParticleManager setTextureAttribute. */
    public setTextureAttribute?: (CUserMsg_ParticleManager.ISetTextureAttribute|null);

    /** CUserMsg_ParticleManager setSceneObjectGenericFlag. */
    public setSceneObjectGenericFlag?: (CUserMsg_ParticleManager.ISetSceneObjectGenericFlag|null);

    /** CUserMsg_ParticleManager setSceneObjectTintAndDesat. */
    public setSceneObjectTintAndDesat?: (CUserMsg_ParticleManager.ISetSceneObjectTintAndDesat|null);

    /** CUserMsg_ParticleManager destroyParticleNamed. */
    public destroyParticleNamed?: (CUserMsg_ParticleManager.IDestroyParticleNamed|null);

    /** CUserMsg_ParticleManager particleSkipToTime. */
    public particleSkipToTime?: (CUserMsg_ParticleManager.IParticleSkipToTime|null);

    /** CUserMsg_ParticleManager particleCanFreeze. */
    public particleCanFreeze?: (CUserMsg_ParticleManager.IParticleCanFreeze|null);

    /** CUserMsg_ParticleManager setNamedValueContext. */
    public setNamedValueContext?: (CUserMsg_ParticleManager.ISetParticleNamedValueContext|null);

    /** CUserMsg_ParticleManager updateParticleTransform. */
    public updateParticleTransform?: (CUserMsg_ParticleManager.IUpdateParticleTransform|null);

    /** CUserMsg_ParticleManager particleFreezeTransitionOverride. */
    public particleFreezeTransitionOverride?: (CUserMsg_ParticleManager.IParticleFreezeTransitionOverride|null);

    /** CUserMsg_ParticleManager freezeParticleInvolving. */
    public freezeParticleInvolving?: (CUserMsg_ParticleManager.IFreezeParticleInvolving|null);

    /**
     * Creates a new CUserMsg_ParticleManager instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMsg_ParticleManager instance
     */
    public static create(properties?: ICUserMsg_ParticleManager): CUserMsg_ParticleManager;

    /**
     * Encodes the specified CUserMsg_ParticleManager message. Does not implicitly {@link CUserMsg_ParticleManager.verify|verify} messages.
     * @param message CUserMsg_ParticleManager message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMsg_ParticleManager, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMsg_ParticleManager message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.verify|verify} messages.
     * @param message CUserMsg_ParticleManager message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMsg_ParticleManager, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMsg_ParticleManager message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMsg_ParticleManager
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager;

    /**
     * Decodes a CUserMsg_ParticleManager message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMsg_ParticleManager
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager;

    /**
     * Verifies a CUserMsg_ParticleManager message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMsg_ParticleManager message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMsg_ParticleManager
     */
    public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager;

    /**
     * Creates a plain object from a CUserMsg_ParticleManager message. Also converts values to other types if specified.
     * @param message CUserMsg_ParticleManager
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMsg_ParticleManager, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMsg_ParticleManager to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMsg_ParticleManager
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMsg_ParticleManager {

    /** Properties of a ReleaseParticleIndex. */
    interface IReleaseParticleIndex {
    }

    /** Represents a ReleaseParticleIndex. */
    class ReleaseParticleIndex implements IReleaseParticleIndex {

        /**
         * Constructs a new ReleaseParticleIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IReleaseParticleIndex);

        /**
         * Creates a new ReleaseParticleIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReleaseParticleIndex instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IReleaseParticleIndex): CUserMsg_ParticleManager.ReleaseParticleIndex;

        /**
         * Encodes the specified ReleaseParticleIndex message. Does not implicitly {@link CUserMsg_ParticleManager.ReleaseParticleIndex.verify|verify} messages.
         * @param message ReleaseParticleIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IReleaseParticleIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReleaseParticleIndex message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.ReleaseParticleIndex.verify|verify} messages.
         * @param message ReleaseParticleIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IReleaseParticleIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReleaseParticleIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReleaseParticleIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.ReleaseParticleIndex;

        /**
         * Decodes a ReleaseParticleIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReleaseParticleIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.ReleaseParticleIndex;

        /**
         * Verifies a ReleaseParticleIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReleaseParticleIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReleaseParticleIndex
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.ReleaseParticleIndex;

        /**
         * Creates a plain object from a ReleaseParticleIndex message. Also converts values to other types if specified.
         * @param message ReleaseParticleIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.ReleaseParticleIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReleaseParticleIndex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReleaseParticleIndex
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateParticle. */
    interface ICreateParticle {

        /** CreateParticle particleNameIndex */
        particleNameIndex?: (number|Long|null);

        /** CreateParticle attachType */
        attachType?: (number|null);

        /** CreateParticle entityHandle */
        entityHandle?: (number|null);

        /** CreateParticle entityHandleForModifiers */
        entityHandleForModifiers?: (number|null);

        /** CreateParticle applyVoiceBanRules */
        applyVoiceBanRules?: (boolean|null);

        /** CreateParticle teamBehavior */
        teamBehavior?: (number|null);

        /** CreateParticle controlPointConfiguration */
        controlPointConfiguration?: (string|null);
    }

    /** Represents a CreateParticle. */
    class CreateParticle implements ICreateParticle {

        /**
         * Constructs a new CreateParticle.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ICreateParticle);

        /** CreateParticle particleNameIndex. */
        public particleNameIndex: (number|Long);

        /** CreateParticle attachType. */
        public attachType: number;

        /** CreateParticle entityHandle. */
        public entityHandle: number;

        /** CreateParticle entityHandleForModifiers. */
        public entityHandleForModifiers: number;

        /** CreateParticle applyVoiceBanRules. */
        public applyVoiceBanRules: boolean;

        /** CreateParticle teamBehavior. */
        public teamBehavior: number;

        /** CreateParticle controlPointConfiguration. */
        public controlPointConfiguration: string;

        /**
         * Creates a new CreateParticle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateParticle instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ICreateParticle): CUserMsg_ParticleManager.CreateParticle;

        /**
         * Encodes the specified CreateParticle message. Does not implicitly {@link CUserMsg_ParticleManager.CreateParticle.verify|verify} messages.
         * @param message CreateParticle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ICreateParticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateParticle message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.CreateParticle.verify|verify} messages.
         * @param message CreateParticle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ICreateParticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateParticle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateParticle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.CreateParticle;

        /**
         * Decodes a CreateParticle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateParticle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.CreateParticle;

        /**
         * Verifies a CreateParticle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateParticle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateParticle
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.CreateParticle;

        /**
         * Creates a plain object from a CreateParticle message. Also converts values to other types if specified.
         * @param message CreateParticle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.CreateParticle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateParticle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateParticle
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DestroyParticle. */
    interface IDestroyParticle {

        /** DestroyParticle destroyImmediately */
        destroyImmediately?: (boolean|null);
    }

    /** Represents a DestroyParticle. */
    class DestroyParticle implements IDestroyParticle {

        /**
         * Constructs a new DestroyParticle.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IDestroyParticle);

        /** DestroyParticle destroyImmediately. */
        public destroyImmediately: boolean;

        /**
         * Creates a new DestroyParticle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DestroyParticle instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IDestroyParticle): CUserMsg_ParticleManager.DestroyParticle;

        /**
         * Encodes the specified DestroyParticle message. Does not implicitly {@link CUserMsg_ParticleManager.DestroyParticle.verify|verify} messages.
         * @param message DestroyParticle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IDestroyParticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DestroyParticle message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.DestroyParticle.verify|verify} messages.
         * @param message DestroyParticle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IDestroyParticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DestroyParticle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DestroyParticle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.DestroyParticle;

        /**
         * Decodes a DestroyParticle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DestroyParticle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.DestroyParticle;

        /**
         * Verifies a DestroyParticle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DestroyParticle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DestroyParticle
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.DestroyParticle;

        /**
         * Creates a plain object from a DestroyParticle message. Also converts values to other types if specified.
         * @param message DestroyParticle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.DestroyParticle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DestroyParticle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DestroyParticle
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DestroyParticleInvolving. */
    interface IDestroyParticleInvolving {

        /** DestroyParticleInvolving destroyImmediately */
        destroyImmediately?: (boolean|null);

        /** DestroyParticleInvolving entityHandle */
        entityHandle?: (number|null);
    }

    /** Represents a DestroyParticleInvolving. */
    class DestroyParticleInvolving implements IDestroyParticleInvolving {

        /**
         * Constructs a new DestroyParticleInvolving.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IDestroyParticleInvolving);

        /** DestroyParticleInvolving destroyImmediately. */
        public destroyImmediately: boolean;

        /** DestroyParticleInvolving entityHandle. */
        public entityHandle: number;

        /**
         * Creates a new DestroyParticleInvolving instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DestroyParticleInvolving instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IDestroyParticleInvolving): CUserMsg_ParticleManager.DestroyParticleInvolving;

        /**
         * Encodes the specified DestroyParticleInvolving message. Does not implicitly {@link CUserMsg_ParticleManager.DestroyParticleInvolving.verify|verify} messages.
         * @param message DestroyParticleInvolving message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IDestroyParticleInvolving, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DestroyParticleInvolving message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.DestroyParticleInvolving.verify|verify} messages.
         * @param message DestroyParticleInvolving message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IDestroyParticleInvolving, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DestroyParticleInvolving message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DestroyParticleInvolving
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.DestroyParticleInvolving;

        /**
         * Decodes a DestroyParticleInvolving message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DestroyParticleInvolving
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.DestroyParticleInvolving;

        /**
         * Verifies a DestroyParticleInvolving message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DestroyParticleInvolving message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DestroyParticleInvolving
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.DestroyParticleInvolving;

        /**
         * Creates a plain object from a DestroyParticleInvolving message. Also converts values to other types if specified.
         * @param message DestroyParticleInvolving
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.DestroyParticleInvolving, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DestroyParticleInvolving to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DestroyParticleInvolving
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DestroyParticleNamed. */
    interface IDestroyParticleNamed {

        /** DestroyParticleNamed particleNameIndex */
        particleNameIndex?: (number|Long|null);

        /** DestroyParticleNamed entityHandle */
        entityHandle?: (number|null);

        /** DestroyParticleNamed destroyImmediately */
        destroyImmediately?: (boolean|null);

        /** DestroyParticleNamed playEndcap */
        playEndcap?: (boolean|null);
    }

    /** Represents a DestroyParticleNamed. */
    class DestroyParticleNamed implements IDestroyParticleNamed {

        /**
         * Constructs a new DestroyParticleNamed.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IDestroyParticleNamed);

        /** DestroyParticleNamed particleNameIndex. */
        public particleNameIndex: (number|Long);

        /** DestroyParticleNamed entityHandle. */
        public entityHandle: number;

        /** DestroyParticleNamed destroyImmediately. */
        public destroyImmediately: boolean;

        /** DestroyParticleNamed playEndcap. */
        public playEndcap: boolean;

        /**
         * Creates a new DestroyParticleNamed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DestroyParticleNamed instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IDestroyParticleNamed): CUserMsg_ParticleManager.DestroyParticleNamed;

        /**
         * Encodes the specified DestroyParticleNamed message. Does not implicitly {@link CUserMsg_ParticleManager.DestroyParticleNamed.verify|verify} messages.
         * @param message DestroyParticleNamed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IDestroyParticleNamed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DestroyParticleNamed message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.DestroyParticleNamed.verify|verify} messages.
         * @param message DestroyParticleNamed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IDestroyParticleNamed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DestroyParticleNamed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DestroyParticleNamed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.DestroyParticleNamed;

        /**
         * Decodes a DestroyParticleNamed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DestroyParticleNamed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.DestroyParticleNamed;

        /**
         * Verifies a DestroyParticleNamed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DestroyParticleNamed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DestroyParticleNamed
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.DestroyParticleNamed;

        /**
         * Creates a plain object from a DestroyParticleNamed message. Also converts values to other types if specified.
         * @param message DestroyParticleNamed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.DestroyParticleNamed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DestroyParticleNamed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DestroyParticleNamed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticle_OBSOLETE. */
    interface IUpdateParticle_OBSOLETE {

        /** UpdateParticle_OBSOLETE controlPoint */
        controlPoint?: (number|null);

        /** UpdateParticle_OBSOLETE position */
        position?: (ICMsgVector|null);
    }

    /** Represents an UpdateParticle_OBSOLETE. */
    class UpdateParticle_OBSOLETE implements IUpdateParticle_OBSOLETE {

        /**
         * Constructs a new UpdateParticle_OBSOLETE.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticle_OBSOLETE);

        /** UpdateParticle_OBSOLETE controlPoint. */
        public controlPoint: number;

        /** UpdateParticle_OBSOLETE position. */
        public position?: (ICMsgVector|null);

        /**
         * Creates a new UpdateParticle_OBSOLETE instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticle_OBSOLETE instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticle_OBSOLETE): CUserMsg_ParticleManager.UpdateParticle_OBSOLETE;

        /**
         * Encodes the specified UpdateParticle_OBSOLETE message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticle_OBSOLETE.verify|verify} messages.
         * @param message UpdateParticle_OBSOLETE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticle_OBSOLETE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticle_OBSOLETE message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticle_OBSOLETE.verify|verify} messages.
         * @param message UpdateParticle_OBSOLETE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticle_OBSOLETE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticle_OBSOLETE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticle_OBSOLETE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticle_OBSOLETE;

        /**
         * Decodes an UpdateParticle_OBSOLETE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticle_OBSOLETE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticle_OBSOLETE;

        /**
         * Verifies an UpdateParticle_OBSOLETE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticle_OBSOLETE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticle_OBSOLETE
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticle_OBSOLETE;

        /**
         * Creates a plain object from an UpdateParticle_OBSOLETE message. Also converts values to other types if specified.
         * @param message UpdateParticle_OBSOLETE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticle_OBSOLETE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticle_OBSOLETE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticle_OBSOLETE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleFwd_OBSOLETE. */
    interface IUpdateParticleFwd_OBSOLETE {

        /** UpdateParticleFwd_OBSOLETE controlPoint */
        controlPoint?: (number|null);

        /** UpdateParticleFwd_OBSOLETE forward */
        forward?: (ICMsgVector|null);
    }

    /** Represents an UpdateParticleFwd_OBSOLETE. */
    class UpdateParticleFwd_OBSOLETE implements IUpdateParticleFwd_OBSOLETE {

        /**
         * Constructs a new UpdateParticleFwd_OBSOLETE.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleFwd_OBSOLETE);

        /** UpdateParticleFwd_OBSOLETE controlPoint. */
        public controlPoint: number;

        /** UpdateParticleFwd_OBSOLETE forward. */
        public forward?: (ICMsgVector|null);

        /**
         * Creates a new UpdateParticleFwd_OBSOLETE instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleFwd_OBSOLETE instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleFwd_OBSOLETE): CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE;

        /**
         * Encodes the specified UpdateParticleFwd_OBSOLETE message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE.verify|verify} messages.
         * @param message UpdateParticleFwd_OBSOLETE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleFwd_OBSOLETE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleFwd_OBSOLETE message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE.verify|verify} messages.
         * @param message UpdateParticleFwd_OBSOLETE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleFwd_OBSOLETE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleFwd_OBSOLETE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleFwd_OBSOLETE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE;

        /**
         * Decodes an UpdateParticleFwd_OBSOLETE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleFwd_OBSOLETE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE;

        /**
         * Verifies an UpdateParticleFwd_OBSOLETE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleFwd_OBSOLETE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleFwd_OBSOLETE
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE;

        /**
         * Creates a plain object from an UpdateParticleFwd_OBSOLETE message. Also converts values to other types if specified.
         * @param message UpdateParticleFwd_OBSOLETE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleFwd_OBSOLETE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleFwd_OBSOLETE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleOrient_OBSOLETE. */
    interface IUpdateParticleOrient_OBSOLETE {

        /** UpdateParticleOrient_OBSOLETE controlPoint */
        controlPoint?: (number|null);

        /** UpdateParticleOrient_OBSOLETE forward */
        forward?: (ICMsgVector|null);

        /** UpdateParticleOrient_OBSOLETE deprecatedRight */
        deprecatedRight?: (ICMsgVector|null);

        /** UpdateParticleOrient_OBSOLETE up */
        up?: (ICMsgVector|null);

        /** UpdateParticleOrient_OBSOLETE left */
        left?: (ICMsgVector|null);
    }

    /** Represents an UpdateParticleOrient_OBSOLETE. */
    class UpdateParticleOrient_OBSOLETE implements IUpdateParticleOrient_OBSOLETE {

        /**
         * Constructs a new UpdateParticleOrient_OBSOLETE.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleOrient_OBSOLETE);

        /** UpdateParticleOrient_OBSOLETE controlPoint. */
        public controlPoint: number;

        /** UpdateParticleOrient_OBSOLETE forward. */
        public forward?: (ICMsgVector|null);

        /** UpdateParticleOrient_OBSOLETE deprecatedRight. */
        public deprecatedRight?: (ICMsgVector|null);

        /** UpdateParticleOrient_OBSOLETE up. */
        public up?: (ICMsgVector|null);

        /** UpdateParticleOrient_OBSOLETE left. */
        public left?: (ICMsgVector|null);

        /**
         * Creates a new UpdateParticleOrient_OBSOLETE instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleOrient_OBSOLETE instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleOrient_OBSOLETE): CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE;

        /**
         * Encodes the specified UpdateParticleOrient_OBSOLETE message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE.verify|verify} messages.
         * @param message UpdateParticleOrient_OBSOLETE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleOrient_OBSOLETE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleOrient_OBSOLETE message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE.verify|verify} messages.
         * @param message UpdateParticleOrient_OBSOLETE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleOrient_OBSOLETE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleOrient_OBSOLETE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleOrient_OBSOLETE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE;

        /**
         * Decodes an UpdateParticleOrient_OBSOLETE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleOrient_OBSOLETE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE;

        /**
         * Verifies an UpdateParticleOrient_OBSOLETE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleOrient_OBSOLETE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleOrient_OBSOLETE
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE;

        /**
         * Creates a plain object from an UpdateParticleOrient_OBSOLETE message. Also converts values to other types if specified.
         * @param message UpdateParticleOrient_OBSOLETE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleOrient_OBSOLETE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleOrient_OBSOLETE
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleTransform. */
    interface IUpdateParticleTransform {

        /** UpdateParticleTransform controlPoint */
        controlPoint?: (number|null);

        /** UpdateParticleTransform position */
        position?: (ICMsgVector|null);

        /** UpdateParticleTransform orientation */
        orientation?: (ICMsgQuaternion|null);

        /** UpdateParticleTransform interpolationInterval */
        interpolationInterval?: (number|null);
    }

    /** Represents an UpdateParticleTransform. */
    class UpdateParticleTransform implements IUpdateParticleTransform {

        /**
         * Constructs a new UpdateParticleTransform.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleTransform);

        /** UpdateParticleTransform controlPoint. */
        public controlPoint: number;

        /** UpdateParticleTransform position. */
        public position?: (ICMsgVector|null);

        /** UpdateParticleTransform orientation. */
        public orientation?: (ICMsgQuaternion|null);

        /** UpdateParticleTransform interpolationInterval. */
        public interpolationInterval: number;

        /**
         * Creates a new UpdateParticleTransform instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleTransform instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleTransform): CUserMsg_ParticleManager.UpdateParticleTransform;

        /**
         * Encodes the specified UpdateParticleTransform message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleTransform.verify|verify} messages.
         * @param message UpdateParticleTransform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleTransform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleTransform message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleTransform.verify|verify} messages.
         * @param message UpdateParticleTransform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleTransform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleTransform message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleTransform;

        /**
         * Decodes an UpdateParticleTransform message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleTransform;

        /**
         * Verifies an UpdateParticleTransform message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleTransform message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleTransform
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleTransform;

        /**
         * Creates a plain object from an UpdateParticleTransform message. Also converts values to other types if specified.
         * @param message UpdateParticleTransform
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleTransform to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleTransform
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleFallback. */
    interface IUpdateParticleFallback {

        /** UpdateParticleFallback controlPoint */
        controlPoint?: (number|null);

        /** UpdateParticleFallback position */
        position?: (ICMsgVector|null);
    }

    /** Represents an UpdateParticleFallback. */
    class UpdateParticleFallback implements IUpdateParticleFallback {

        /**
         * Constructs a new UpdateParticleFallback.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleFallback);

        /** UpdateParticleFallback controlPoint. */
        public controlPoint: number;

        /** UpdateParticleFallback position. */
        public position?: (ICMsgVector|null);

        /**
         * Creates a new UpdateParticleFallback instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleFallback instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleFallback): CUserMsg_ParticleManager.UpdateParticleFallback;

        /**
         * Encodes the specified UpdateParticleFallback message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleFallback.verify|verify} messages.
         * @param message UpdateParticleFallback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleFallback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleFallback message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleFallback.verify|verify} messages.
         * @param message UpdateParticleFallback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleFallback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleFallback message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleFallback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleFallback;

        /**
         * Decodes an UpdateParticleFallback message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleFallback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleFallback;

        /**
         * Verifies an UpdateParticleFallback message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleFallback message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleFallback
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleFallback;

        /**
         * Creates a plain object from an UpdateParticleFallback message. Also converts values to other types if specified.
         * @param message UpdateParticleFallback
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleFallback, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleFallback to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleFallback
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleOffset. */
    interface IUpdateParticleOffset {

        /** UpdateParticleOffset controlPoint */
        controlPoint?: (number|null);

        /** UpdateParticleOffset originOffset */
        originOffset?: (ICMsgVector|null);

        /** UpdateParticleOffset angleOffset */
        angleOffset?: (ICMsgQAngle|null);
    }

    /** Represents an UpdateParticleOffset. */
    class UpdateParticleOffset implements IUpdateParticleOffset {

        /**
         * Constructs a new UpdateParticleOffset.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleOffset);

        /** UpdateParticleOffset controlPoint. */
        public controlPoint: number;

        /** UpdateParticleOffset originOffset. */
        public originOffset?: (ICMsgVector|null);

        /** UpdateParticleOffset angleOffset. */
        public angleOffset?: (ICMsgQAngle|null);

        /**
         * Creates a new UpdateParticleOffset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleOffset instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleOffset): CUserMsg_ParticleManager.UpdateParticleOffset;

        /**
         * Encodes the specified UpdateParticleOffset message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleOffset.verify|verify} messages.
         * @param message UpdateParticleOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleOffset message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleOffset.verify|verify} messages.
         * @param message UpdateParticleOffset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleOffset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleOffset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleOffset;

        /**
         * Decodes an UpdateParticleOffset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleOffset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleOffset;

        /**
         * Verifies an UpdateParticleOffset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleOffset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleOffset
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleOffset;

        /**
         * Creates a plain object from an UpdateParticleOffset message. Also converts values to other types if specified.
         * @param message UpdateParticleOffset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleOffset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleOffset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleOffset
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleEnt. */
    interface IUpdateParticleEnt {

        /** UpdateParticleEnt controlPoint */
        controlPoint?: (number|null);

        /** UpdateParticleEnt entityHandle */
        entityHandle?: (number|null);

        /** UpdateParticleEnt attachType */
        attachType?: (number|null);

        /** UpdateParticleEnt attachment */
        attachment?: (number|null);

        /** UpdateParticleEnt fallbackPosition */
        fallbackPosition?: (ICMsgVector|null);

        /** UpdateParticleEnt includeWearables */
        includeWearables?: (boolean|null);

        /** UpdateParticleEnt offsetPosition */
        offsetPosition?: (ICMsgVector|null);

        /** UpdateParticleEnt offsetAngles */
        offsetAngles?: (ICMsgQAngle|null);
    }

    /** Represents an UpdateParticleEnt. */
    class UpdateParticleEnt implements IUpdateParticleEnt {

        /**
         * Constructs a new UpdateParticleEnt.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleEnt);

        /** UpdateParticleEnt controlPoint. */
        public controlPoint: number;

        /** UpdateParticleEnt entityHandle. */
        public entityHandle: number;

        /** UpdateParticleEnt attachType. */
        public attachType: number;

        /** UpdateParticleEnt attachment. */
        public attachment: number;

        /** UpdateParticleEnt fallbackPosition. */
        public fallbackPosition?: (ICMsgVector|null);

        /** UpdateParticleEnt includeWearables. */
        public includeWearables: boolean;

        /** UpdateParticleEnt offsetPosition. */
        public offsetPosition?: (ICMsgVector|null);

        /** UpdateParticleEnt offsetAngles. */
        public offsetAngles?: (ICMsgQAngle|null);

        /**
         * Creates a new UpdateParticleEnt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleEnt instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleEnt): CUserMsg_ParticleManager.UpdateParticleEnt;

        /**
         * Encodes the specified UpdateParticleEnt message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleEnt.verify|verify} messages.
         * @param message UpdateParticleEnt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleEnt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleEnt message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleEnt.verify|verify} messages.
         * @param message UpdateParticleEnt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleEnt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleEnt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleEnt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleEnt;

        /**
         * Decodes an UpdateParticleEnt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleEnt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleEnt;

        /**
         * Verifies an UpdateParticleEnt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleEnt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleEnt
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleEnt;

        /**
         * Creates a plain object from an UpdateParticleEnt message. Also converts values to other types if specified.
         * @param message UpdateParticleEnt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleEnt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleEnt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleEnt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleSetFrozen. */
    interface IUpdateParticleSetFrozen {

        /** UpdateParticleSetFrozen setFrozen */
        setFrozen?: (boolean|null);

        /** UpdateParticleSetFrozen transitionDuration */
        transitionDuration?: (number|null);
    }

    /** Represents an UpdateParticleSetFrozen. */
    class UpdateParticleSetFrozen implements IUpdateParticleSetFrozen {

        /**
         * Constructs a new UpdateParticleSetFrozen.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleSetFrozen);

        /** UpdateParticleSetFrozen setFrozen. */
        public setFrozen: boolean;

        /** UpdateParticleSetFrozen transitionDuration. */
        public transitionDuration: number;

        /**
         * Creates a new UpdateParticleSetFrozen instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleSetFrozen instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleSetFrozen): CUserMsg_ParticleManager.UpdateParticleSetFrozen;

        /**
         * Encodes the specified UpdateParticleSetFrozen message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleSetFrozen.verify|verify} messages.
         * @param message UpdateParticleSetFrozen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleSetFrozen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleSetFrozen message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleSetFrozen.verify|verify} messages.
         * @param message UpdateParticleSetFrozen message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleSetFrozen, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleSetFrozen message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleSetFrozen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleSetFrozen;

        /**
         * Decodes an UpdateParticleSetFrozen message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleSetFrozen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleSetFrozen;

        /**
         * Verifies an UpdateParticleSetFrozen message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleSetFrozen message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleSetFrozen
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleSetFrozen;

        /**
         * Creates a plain object from an UpdateParticleSetFrozen message. Also converts values to other types if specified.
         * @param message UpdateParticleSetFrozen
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleSetFrozen, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleSetFrozen to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleSetFrozen
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateParticleShouldDraw. */
    interface IUpdateParticleShouldDraw {

        /** UpdateParticleShouldDraw shouldDraw */
        shouldDraw?: (boolean|null);
    }

    /** Represents an UpdateParticleShouldDraw. */
    class UpdateParticleShouldDraw implements IUpdateParticleShouldDraw {

        /**
         * Constructs a new UpdateParticleShouldDraw.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateParticleShouldDraw);

        /** UpdateParticleShouldDraw shouldDraw. */
        public shouldDraw: boolean;

        /**
         * Creates a new UpdateParticleShouldDraw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateParticleShouldDraw instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateParticleShouldDraw): CUserMsg_ParticleManager.UpdateParticleShouldDraw;

        /**
         * Encodes the specified UpdateParticleShouldDraw message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleShouldDraw.verify|verify} messages.
         * @param message UpdateParticleShouldDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateParticleShouldDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateParticleShouldDraw message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateParticleShouldDraw.verify|verify} messages.
         * @param message UpdateParticleShouldDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateParticleShouldDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateParticleShouldDraw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateParticleShouldDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateParticleShouldDraw;

        /**
         * Decodes an UpdateParticleShouldDraw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateParticleShouldDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateParticleShouldDraw;

        /**
         * Verifies an UpdateParticleShouldDraw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateParticleShouldDraw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateParticleShouldDraw
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateParticleShouldDraw;

        /**
         * Creates a plain object from an UpdateParticleShouldDraw message. Also converts values to other types if specified.
         * @param message UpdateParticleShouldDraw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateParticleShouldDraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateParticleShouldDraw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateParticleShouldDraw
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChangeControlPointAttachment. */
    interface IChangeControlPointAttachment {

        /** ChangeControlPointAttachment attachmentOld */
        attachmentOld?: (number|null);

        /** ChangeControlPointAttachment attachmentNew */
        attachmentNew?: (number|null);

        /** ChangeControlPointAttachment entityHandle */
        entityHandle?: (number|null);
    }

    /** Represents a ChangeControlPointAttachment. */
    class ChangeControlPointAttachment implements IChangeControlPointAttachment {

        /**
         * Constructs a new ChangeControlPointAttachment.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IChangeControlPointAttachment);

        /** ChangeControlPointAttachment attachmentOld. */
        public attachmentOld: number;

        /** ChangeControlPointAttachment attachmentNew. */
        public attachmentNew: number;

        /** ChangeControlPointAttachment entityHandle. */
        public entityHandle: number;

        /**
         * Creates a new ChangeControlPointAttachment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeControlPointAttachment instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IChangeControlPointAttachment): CUserMsg_ParticleManager.ChangeControlPointAttachment;

        /**
         * Encodes the specified ChangeControlPointAttachment message. Does not implicitly {@link CUserMsg_ParticleManager.ChangeControlPointAttachment.verify|verify} messages.
         * @param message ChangeControlPointAttachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IChangeControlPointAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeControlPointAttachment message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.ChangeControlPointAttachment.verify|verify} messages.
         * @param message ChangeControlPointAttachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IChangeControlPointAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeControlPointAttachment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeControlPointAttachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.ChangeControlPointAttachment;

        /**
         * Decodes a ChangeControlPointAttachment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeControlPointAttachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.ChangeControlPointAttachment;

        /**
         * Verifies a ChangeControlPointAttachment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeControlPointAttachment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeControlPointAttachment
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.ChangeControlPointAttachment;

        /**
         * Creates a plain object from a ChangeControlPointAttachment message. Also converts values to other types if specified.
         * @param message ChangeControlPointAttachment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.ChangeControlPointAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeControlPointAttachment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangeControlPointAttachment
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateEntityPosition. */
    interface IUpdateEntityPosition {

        /** UpdateEntityPosition entityHandle */
        entityHandle?: (number|null);

        /** UpdateEntityPosition position */
        position?: (ICMsgVector|null);
    }

    /** Represents an UpdateEntityPosition. */
    class UpdateEntityPosition implements IUpdateEntityPosition {

        /**
         * Constructs a new UpdateEntityPosition.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IUpdateEntityPosition);

        /** UpdateEntityPosition entityHandle. */
        public entityHandle: number;

        /** UpdateEntityPosition position. */
        public position?: (ICMsgVector|null);

        /**
         * Creates a new UpdateEntityPosition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateEntityPosition instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IUpdateEntityPosition): CUserMsg_ParticleManager.UpdateEntityPosition;

        /**
         * Encodes the specified UpdateEntityPosition message. Does not implicitly {@link CUserMsg_ParticleManager.UpdateEntityPosition.verify|verify} messages.
         * @param message UpdateEntityPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IUpdateEntityPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateEntityPosition message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.UpdateEntityPosition.verify|verify} messages.
         * @param message UpdateEntityPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IUpdateEntityPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateEntityPosition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateEntityPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.UpdateEntityPosition;

        /**
         * Decodes an UpdateEntityPosition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateEntityPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.UpdateEntityPosition;

        /**
         * Verifies an UpdateEntityPosition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateEntityPosition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateEntityPosition
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.UpdateEntityPosition;

        /**
         * Creates a plain object from an UpdateEntityPosition message. Also converts values to other types if specified.
         * @param message UpdateEntityPosition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.UpdateEntityPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateEntityPosition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateEntityPosition
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetParticleFoWProperties. */
    interface ISetParticleFoWProperties {

        /** SetParticleFoWProperties fowControlPoint */
        fowControlPoint?: (number|null);

        /** SetParticleFoWProperties fowControlPoint2 */
        fowControlPoint2?: (number|null);

        /** SetParticleFoWProperties fowRadius */
        fowRadius?: (number|null);
    }

    /** Represents a SetParticleFoWProperties. */
    class SetParticleFoWProperties implements ISetParticleFoWProperties {

        /**
         * Constructs a new SetParticleFoWProperties.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetParticleFoWProperties);

        /** SetParticleFoWProperties fowControlPoint. */
        public fowControlPoint: number;

        /** SetParticleFoWProperties fowControlPoint2. */
        public fowControlPoint2: number;

        /** SetParticleFoWProperties fowRadius. */
        public fowRadius: number;

        /**
         * Creates a new SetParticleFoWProperties instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetParticleFoWProperties instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetParticleFoWProperties): CUserMsg_ParticleManager.SetParticleFoWProperties;

        /**
         * Encodes the specified SetParticleFoWProperties message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleFoWProperties.verify|verify} messages.
         * @param message SetParticleFoWProperties message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetParticleFoWProperties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetParticleFoWProperties message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleFoWProperties.verify|verify} messages.
         * @param message SetParticleFoWProperties message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetParticleFoWProperties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetParticleFoWProperties message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetParticleFoWProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleFoWProperties;

        /**
         * Decodes a SetParticleFoWProperties message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetParticleFoWProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleFoWProperties;

        /**
         * Verifies a SetParticleFoWProperties message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetParticleFoWProperties message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetParticleFoWProperties
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleFoWProperties;

        /**
         * Creates a plain object from a SetParticleFoWProperties message. Also converts values to other types if specified.
         * @param message SetParticleFoWProperties
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetParticleFoWProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetParticleFoWProperties to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetParticleFoWProperties
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetParticleShouldCheckFoW. */
    interface ISetParticleShouldCheckFoW {

        /** SetParticleShouldCheckFoW checkFow */
        checkFow?: (boolean|null);
    }

    /** Represents a SetParticleShouldCheckFoW. */
    class SetParticleShouldCheckFoW implements ISetParticleShouldCheckFoW {

        /**
         * Constructs a new SetParticleShouldCheckFoW.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetParticleShouldCheckFoW);

        /** SetParticleShouldCheckFoW checkFow. */
        public checkFow: boolean;

        /**
         * Creates a new SetParticleShouldCheckFoW instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetParticleShouldCheckFoW instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetParticleShouldCheckFoW): CUserMsg_ParticleManager.SetParticleShouldCheckFoW;

        /**
         * Encodes the specified SetParticleShouldCheckFoW message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleShouldCheckFoW.verify|verify} messages.
         * @param message SetParticleShouldCheckFoW message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetParticleShouldCheckFoW, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetParticleShouldCheckFoW message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleShouldCheckFoW.verify|verify} messages.
         * @param message SetParticleShouldCheckFoW message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetParticleShouldCheckFoW, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetParticleShouldCheckFoW message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetParticleShouldCheckFoW
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleShouldCheckFoW;

        /**
         * Decodes a SetParticleShouldCheckFoW message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetParticleShouldCheckFoW
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleShouldCheckFoW;

        /**
         * Verifies a SetParticleShouldCheckFoW message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetParticleShouldCheckFoW message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetParticleShouldCheckFoW
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleShouldCheckFoW;

        /**
         * Creates a plain object from a SetParticleShouldCheckFoW message. Also converts values to other types if specified.
         * @param message SetParticleShouldCheckFoW
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetParticleShouldCheckFoW, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetParticleShouldCheckFoW to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetParticleShouldCheckFoW
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetControlPointModel. */
    interface ISetControlPointModel {

        /** SetControlPointModel controlPoint */
        controlPoint?: (number|null);

        /** SetControlPointModel modelName */
        modelName?: (string|null);
    }

    /** Represents a SetControlPointModel. */
    class SetControlPointModel implements ISetControlPointModel {

        /**
         * Constructs a new SetControlPointModel.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetControlPointModel);

        /** SetControlPointModel controlPoint. */
        public controlPoint: number;

        /** SetControlPointModel modelName. */
        public modelName: string;

        /**
         * Creates a new SetControlPointModel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetControlPointModel instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetControlPointModel): CUserMsg_ParticleManager.SetControlPointModel;

        /**
         * Encodes the specified SetControlPointModel message. Does not implicitly {@link CUserMsg_ParticleManager.SetControlPointModel.verify|verify} messages.
         * @param message SetControlPointModel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetControlPointModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetControlPointModel message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetControlPointModel.verify|verify} messages.
         * @param message SetControlPointModel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetControlPointModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetControlPointModel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetControlPointModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetControlPointModel;

        /**
         * Decodes a SetControlPointModel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetControlPointModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetControlPointModel;

        /**
         * Verifies a SetControlPointModel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetControlPointModel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetControlPointModel
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetControlPointModel;

        /**
         * Creates a plain object from a SetControlPointModel message. Also converts values to other types if specified.
         * @param message SetControlPointModel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetControlPointModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetControlPointModel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetControlPointModel
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetControlPointSnapshot. */
    interface ISetControlPointSnapshot {

        /** SetControlPointSnapshot controlPoint */
        controlPoint?: (number|null);

        /** SetControlPointSnapshot snapshotName */
        snapshotName?: (string|null);
    }

    /** Represents a SetControlPointSnapshot. */
    class SetControlPointSnapshot implements ISetControlPointSnapshot {

        /**
         * Constructs a new SetControlPointSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetControlPointSnapshot);

        /** SetControlPointSnapshot controlPoint. */
        public controlPoint: number;

        /** SetControlPointSnapshot snapshotName. */
        public snapshotName: string;

        /**
         * Creates a new SetControlPointSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetControlPointSnapshot instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetControlPointSnapshot): CUserMsg_ParticleManager.SetControlPointSnapshot;

        /**
         * Encodes the specified SetControlPointSnapshot message. Does not implicitly {@link CUserMsg_ParticleManager.SetControlPointSnapshot.verify|verify} messages.
         * @param message SetControlPointSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetControlPointSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetControlPointSnapshot message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetControlPointSnapshot.verify|verify} messages.
         * @param message SetControlPointSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetControlPointSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetControlPointSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetControlPointSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetControlPointSnapshot;

        /**
         * Decodes a SetControlPointSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetControlPointSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetControlPointSnapshot;

        /**
         * Verifies a SetControlPointSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetControlPointSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetControlPointSnapshot
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetControlPointSnapshot;

        /**
         * Creates a plain object from a SetControlPointSnapshot message. Also converts values to other types if specified.
         * @param message SetControlPointSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetControlPointSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetControlPointSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetControlPointSnapshot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetParticleText. */
    interface ISetParticleText {

        /** SetParticleText text */
        text?: (string|null);
    }

    /** Represents a SetParticleText. */
    class SetParticleText implements ISetParticleText {

        /**
         * Constructs a new SetParticleText.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetParticleText);

        /** SetParticleText text. */
        public text: string;

        /**
         * Creates a new SetParticleText instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetParticleText instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetParticleText): CUserMsg_ParticleManager.SetParticleText;

        /**
         * Encodes the specified SetParticleText message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleText.verify|verify} messages.
         * @param message SetParticleText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetParticleText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetParticleText message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleText.verify|verify} messages.
         * @param message SetParticleText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetParticleText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetParticleText message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetParticleText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleText;

        /**
         * Decodes a SetParticleText message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetParticleText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleText;

        /**
         * Verifies a SetParticleText message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetParticleText message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetParticleText
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleText;

        /**
         * Creates a plain object from a SetParticleText message. Also converts values to other types if specified.
         * @param message SetParticleText
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetParticleText, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetParticleText to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetParticleText
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetTextureAttribute. */
    interface ISetTextureAttribute {

        /** SetTextureAttribute attributeName */
        attributeName?: (string|null);

        /** SetTextureAttribute textureName */
        textureName?: (string|null);
    }

    /** Represents a SetTextureAttribute. */
    class SetTextureAttribute implements ISetTextureAttribute {

        /**
         * Constructs a new SetTextureAttribute.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetTextureAttribute);

        /** SetTextureAttribute attributeName. */
        public attributeName: string;

        /** SetTextureAttribute textureName. */
        public textureName: string;

        /**
         * Creates a new SetTextureAttribute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetTextureAttribute instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetTextureAttribute): CUserMsg_ParticleManager.SetTextureAttribute;

        /**
         * Encodes the specified SetTextureAttribute message. Does not implicitly {@link CUserMsg_ParticleManager.SetTextureAttribute.verify|verify} messages.
         * @param message SetTextureAttribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetTextureAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetTextureAttribute message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetTextureAttribute.verify|verify} messages.
         * @param message SetTextureAttribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetTextureAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetTextureAttribute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetTextureAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetTextureAttribute;

        /**
         * Decodes a SetTextureAttribute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetTextureAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetTextureAttribute;

        /**
         * Verifies a SetTextureAttribute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetTextureAttribute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetTextureAttribute
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetTextureAttribute;

        /**
         * Creates a plain object from a SetTextureAttribute message. Also converts values to other types if specified.
         * @param message SetTextureAttribute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetTextureAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetTextureAttribute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetTextureAttribute
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetSceneObjectGenericFlag. */
    interface ISetSceneObjectGenericFlag {

        /** SetSceneObjectGenericFlag flagValue */
        flagValue?: (boolean|null);
    }

    /** Represents a SetSceneObjectGenericFlag. */
    class SetSceneObjectGenericFlag implements ISetSceneObjectGenericFlag {

        /**
         * Constructs a new SetSceneObjectGenericFlag.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetSceneObjectGenericFlag);

        /** SetSceneObjectGenericFlag flagValue. */
        public flagValue: boolean;

        /**
         * Creates a new SetSceneObjectGenericFlag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetSceneObjectGenericFlag instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetSceneObjectGenericFlag): CUserMsg_ParticleManager.SetSceneObjectGenericFlag;

        /**
         * Encodes the specified SetSceneObjectGenericFlag message. Does not implicitly {@link CUserMsg_ParticleManager.SetSceneObjectGenericFlag.verify|verify} messages.
         * @param message SetSceneObjectGenericFlag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetSceneObjectGenericFlag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetSceneObjectGenericFlag message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetSceneObjectGenericFlag.verify|verify} messages.
         * @param message SetSceneObjectGenericFlag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetSceneObjectGenericFlag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetSceneObjectGenericFlag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetSceneObjectGenericFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetSceneObjectGenericFlag;

        /**
         * Decodes a SetSceneObjectGenericFlag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetSceneObjectGenericFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetSceneObjectGenericFlag;

        /**
         * Verifies a SetSceneObjectGenericFlag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetSceneObjectGenericFlag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetSceneObjectGenericFlag
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetSceneObjectGenericFlag;

        /**
         * Creates a plain object from a SetSceneObjectGenericFlag message. Also converts values to other types if specified.
         * @param message SetSceneObjectGenericFlag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetSceneObjectGenericFlag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetSceneObjectGenericFlag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetSceneObjectGenericFlag
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetSceneObjectTintAndDesat. */
    interface ISetSceneObjectTintAndDesat {

        /** SetSceneObjectTintAndDesat tint */
        tint?: (number|null);

        /** SetSceneObjectTintAndDesat desat */
        desat?: (number|null);
    }

    /** Represents a SetSceneObjectTintAndDesat. */
    class SetSceneObjectTintAndDesat implements ISetSceneObjectTintAndDesat {

        /**
         * Constructs a new SetSceneObjectTintAndDesat.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetSceneObjectTintAndDesat);

        /** SetSceneObjectTintAndDesat tint. */
        public tint: number;

        /** SetSceneObjectTintAndDesat desat. */
        public desat: number;

        /**
         * Creates a new SetSceneObjectTintAndDesat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetSceneObjectTintAndDesat instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetSceneObjectTintAndDesat): CUserMsg_ParticleManager.SetSceneObjectTintAndDesat;

        /**
         * Encodes the specified SetSceneObjectTintAndDesat message. Does not implicitly {@link CUserMsg_ParticleManager.SetSceneObjectTintAndDesat.verify|verify} messages.
         * @param message SetSceneObjectTintAndDesat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetSceneObjectTintAndDesat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetSceneObjectTintAndDesat message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetSceneObjectTintAndDesat.verify|verify} messages.
         * @param message SetSceneObjectTintAndDesat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetSceneObjectTintAndDesat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetSceneObjectTintAndDesat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetSceneObjectTintAndDesat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetSceneObjectTintAndDesat;

        /**
         * Decodes a SetSceneObjectTintAndDesat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetSceneObjectTintAndDesat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetSceneObjectTintAndDesat;

        /**
         * Verifies a SetSceneObjectTintAndDesat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetSceneObjectTintAndDesat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetSceneObjectTintAndDesat
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetSceneObjectTintAndDesat;

        /**
         * Creates a plain object from a SetSceneObjectTintAndDesat message. Also converts values to other types if specified.
         * @param message SetSceneObjectTintAndDesat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetSceneObjectTintAndDesat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetSceneObjectTintAndDesat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetSceneObjectTintAndDesat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ParticleSkipToTime. */
    interface IParticleSkipToTime {

        /** ParticleSkipToTime skipToTime */
        skipToTime?: (number|null);
    }

    /** Represents a ParticleSkipToTime. */
    class ParticleSkipToTime implements IParticleSkipToTime {

        /**
         * Constructs a new ParticleSkipToTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IParticleSkipToTime);

        /** ParticleSkipToTime skipToTime. */
        public skipToTime: number;

        /**
         * Creates a new ParticleSkipToTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParticleSkipToTime instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IParticleSkipToTime): CUserMsg_ParticleManager.ParticleSkipToTime;

        /**
         * Encodes the specified ParticleSkipToTime message. Does not implicitly {@link CUserMsg_ParticleManager.ParticleSkipToTime.verify|verify} messages.
         * @param message ParticleSkipToTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IParticleSkipToTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParticleSkipToTime message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.ParticleSkipToTime.verify|verify} messages.
         * @param message ParticleSkipToTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IParticleSkipToTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParticleSkipToTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParticleSkipToTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.ParticleSkipToTime;

        /**
         * Decodes a ParticleSkipToTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParticleSkipToTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.ParticleSkipToTime;

        /**
         * Verifies a ParticleSkipToTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParticleSkipToTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParticleSkipToTime
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.ParticleSkipToTime;

        /**
         * Creates a plain object from a ParticleSkipToTime message. Also converts values to other types if specified.
         * @param message ParticleSkipToTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.ParticleSkipToTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParticleSkipToTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ParticleSkipToTime
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ParticleCanFreeze. */
    interface IParticleCanFreeze {

        /** ParticleCanFreeze canFreeze */
        canFreeze?: (boolean|null);
    }

    /** Represents a ParticleCanFreeze. */
    class ParticleCanFreeze implements IParticleCanFreeze {

        /**
         * Constructs a new ParticleCanFreeze.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IParticleCanFreeze);

        /** ParticleCanFreeze canFreeze. */
        public canFreeze: boolean;

        /**
         * Creates a new ParticleCanFreeze instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParticleCanFreeze instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IParticleCanFreeze): CUserMsg_ParticleManager.ParticleCanFreeze;

        /**
         * Encodes the specified ParticleCanFreeze message. Does not implicitly {@link CUserMsg_ParticleManager.ParticleCanFreeze.verify|verify} messages.
         * @param message ParticleCanFreeze message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IParticleCanFreeze, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParticleCanFreeze message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.ParticleCanFreeze.verify|verify} messages.
         * @param message ParticleCanFreeze message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IParticleCanFreeze, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParticleCanFreeze message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParticleCanFreeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.ParticleCanFreeze;

        /**
         * Decodes a ParticleCanFreeze message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParticleCanFreeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.ParticleCanFreeze;

        /**
         * Verifies a ParticleCanFreeze message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParticleCanFreeze message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParticleCanFreeze
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.ParticleCanFreeze;

        /**
         * Creates a plain object from a ParticleCanFreeze message. Also converts values to other types if specified.
         * @param message ParticleCanFreeze
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.ParticleCanFreeze, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParticleCanFreeze to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ParticleCanFreeze
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ParticleFreezeTransitionOverride. */
    interface IParticleFreezeTransitionOverride {

        /** ParticleFreezeTransitionOverride freezeTransitionOverride */
        freezeTransitionOverride?: (number|null);
    }

    /** Represents a ParticleFreezeTransitionOverride. */
    class ParticleFreezeTransitionOverride implements IParticleFreezeTransitionOverride {

        /**
         * Constructs a new ParticleFreezeTransitionOverride.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IParticleFreezeTransitionOverride);

        /** ParticleFreezeTransitionOverride freezeTransitionOverride. */
        public freezeTransitionOverride: number;

        /**
         * Creates a new ParticleFreezeTransitionOverride instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParticleFreezeTransitionOverride instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IParticleFreezeTransitionOverride): CUserMsg_ParticleManager.ParticleFreezeTransitionOverride;

        /**
         * Encodes the specified ParticleFreezeTransitionOverride message. Does not implicitly {@link CUserMsg_ParticleManager.ParticleFreezeTransitionOverride.verify|verify} messages.
         * @param message ParticleFreezeTransitionOverride message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IParticleFreezeTransitionOverride, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParticleFreezeTransitionOverride message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.ParticleFreezeTransitionOverride.verify|verify} messages.
         * @param message ParticleFreezeTransitionOverride message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IParticleFreezeTransitionOverride, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParticleFreezeTransitionOverride message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParticleFreezeTransitionOverride
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.ParticleFreezeTransitionOverride;

        /**
         * Decodes a ParticleFreezeTransitionOverride message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParticleFreezeTransitionOverride
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.ParticleFreezeTransitionOverride;

        /**
         * Verifies a ParticleFreezeTransitionOverride message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParticleFreezeTransitionOverride message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParticleFreezeTransitionOverride
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.ParticleFreezeTransitionOverride;

        /**
         * Creates a plain object from a ParticleFreezeTransitionOverride message. Also converts values to other types if specified.
         * @param message ParticleFreezeTransitionOverride
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.ParticleFreezeTransitionOverride, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParticleFreezeTransitionOverride to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ParticleFreezeTransitionOverride
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FreezeParticleInvolving. */
    interface IFreezeParticleInvolving {

        /** FreezeParticleInvolving setFrozen */
        setFrozen?: (boolean|null);

        /** FreezeParticleInvolving transitionDuration */
        transitionDuration?: (number|null);

        /** FreezeParticleInvolving entityHandle */
        entityHandle?: (number|null);
    }

    /** Represents a FreezeParticleInvolving. */
    class FreezeParticleInvolving implements IFreezeParticleInvolving {

        /**
         * Constructs a new FreezeParticleInvolving.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.IFreezeParticleInvolving);

        /** FreezeParticleInvolving setFrozen. */
        public setFrozen: boolean;

        /** FreezeParticleInvolving transitionDuration. */
        public transitionDuration: number;

        /** FreezeParticleInvolving entityHandle. */
        public entityHandle: number;

        /**
         * Creates a new FreezeParticleInvolving instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FreezeParticleInvolving instance
         */
        public static create(properties?: CUserMsg_ParticleManager.IFreezeParticleInvolving): CUserMsg_ParticleManager.FreezeParticleInvolving;

        /**
         * Encodes the specified FreezeParticleInvolving message. Does not implicitly {@link CUserMsg_ParticleManager.FreezeParticleInvolving.verify|verify} messages.
         * @param message FreezeParticleInvolving message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.IFreezeParticleInvolving, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FreezeParticleInvolving message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.FreezeParticleInvolving.verify|verify} messages.
         * @param message FreezeParticleInvolving message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.IFreezeParticleInvolving, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FreezeParticleInvolving message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FreezeParticleInvolving
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.FreezeParticleInvolving;

        /**
         * Decodes a FreezeParticleInvolving message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FreezeParticleInvolving
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.FreezeParticleInvolving;

        /**
         * Verifies a FreezeParticleInvolving message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FreezeParticleInvolving message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FreezeParticleInvolving
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.FreezeParticleInvolving;

        /**
         * Creates a plain object from a FreezeParticleInvolving message. Also converts values to other types if specified.
         * @param message FreezeParticleInvolving
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.FreezeParticleInvolving, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FreezeParticleInvolving to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FreezeParticleInvolving
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetParticleNamedValueContext. */
    interface ISetParticleNamedValueContext {

        /** SetParticleNamedValueContext floatValues */
        floatValues?: (CUserMsg_ParticleManager.SetParticleNamedValueContext.IFloatContextValue[]|null);

        /** SetParticleNamedValueContext vectorValues */
        vectorValues?: (CUserMsg_ParticleManager.SetParticleNamedValueContext.IVectorContextValue[]|null);

        /** SetParticleNamedValueContext transformValues */
        transformValues?: (CUserMsg_ParticleManager.SetParticleNamedValueContext.ITransformContextValue[]|null);

        /** SetParticleNamedValueContext ehandleValues */
        ehandleValues?: (CUserMsg_ParticleManager.SetParticleNamedValueContext.IEHandleContext[]|null);
    }

    /** Represents a SetParticleNamedValueContext. */
    class SetParticleNamedValueContext implements ISetParticleNamedValueContext {

        /**
         * Constructs a new SetParticleNamedValueContext.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMsg_ParticleManager.ISetParticleNamedValueContext);

        /** SetParticleNamedValueContext floatValues. */
        public floatValues: CUserMsg_ParticleManager.SetParticleNamedValueContext.IFloatContextValue[];

        /** SetParticleNamedValueContext vectorValues. */
        public vectorValues: CUserMsg_ParticleManager.SetParticleNamedValueContext.IVectorContextValue[];

        /** SetParticleNamedValueContext transformValues. */
        public transformValues: CUserMsg_ParticleManager.SetParticleNamedValueContext.ITransformContextValue[];

        /** SetParticleNamedValueContext ehandleValues. */
        public ehandleValues: CUserMsg_ParticleManager.SetParticleNamedValueContext.IEHandleContext[];

        /**
         * Creates a new SetParticleNamedValueContext instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetParticleNamedValueContext instance
         */
        public static create(properties?: CUserMsg_ParticleManager.ISetParticleNamedValueContext): CUserMsg_ParticleManager.SetParticleNamedValueContext;

        /**
         * Encodes the specified SetParticleNamedValueContext message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.verify|verify} messages.
         * @param message SetParticleNamedValueContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMsg_ParticleManager.ISetParticleNamedValueContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetParticleNamedValueContext message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.verify|verify} messages.
         * @param message SetParticleNamedValueContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMsg_ParticleManager.ISetParticleNamedValueContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetParticleNamedValueContext message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetParticleNamedValueContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleNamedValueContext;

        /**
         * Decodes a SetParticleNamedValueContext message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetParticleNamedValueContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleNamedValueContext;

        /**
         * Verifies a SetParticleNamedValueContext message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetParticleNamedValueContext message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetParticleNamedValueContext
         */
        public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleNamedValueContext;

        /**
         * Creates a plain object from a SetParticleNamedValueContext message. Also converts values to other types if specified.
         * @param message SetParticleNamedValueContext
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMsg_ParticleManager.SetParticleNamedValueContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetParticleNamedValueContext to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetParticleNamedValueContext
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SetParticleNamedValueContext {

        /** Properties of a FloatContextValue. */
        interface IFloatContextValue {

            /** FloatContextValue valueNameHash */
            valueNameHash?: (number|null);

            /** FloatContextValue value */
            value?: (number|null);
        }

        /** Represents a FloatContextValue. */
        class FloatContextValue implements IFloatContextValue {

            /**
             * Constructs a new FloatContextValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.IFloatContextValue);

            /** FloatContextValue valueNameHash. */
            public valueNameHash: number;

            /** FloatContextValue value. */
            public value: number;

            /**
             * Creates a new FloatContextValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatContextValue instance
             */
            public static create(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.IFloatContextValue): CUserMsg_ParticleManager.SetParticleNamedValueContext.FloatContextValue;

            /**
             * Encodes the specified FloatContextValue message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.FloatContextValue.verify|verify} messages.
             * @param message FloatContextValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.IFloatContextValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatContextValue message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.FloatContextValue.verify|verify} messages.
             * @param message FloatContextValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.IFloatContextValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatContextValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatContextValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleNamedValueContext.FloatContextValue;

            /**
             * Decodes a FloatContextValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatContextValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleNamedValueContext.FloatContextValue;

            /**
             * Verifies a FloatContextValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatContextValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatContextValue
             */
            public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleNamedValueContext.FloatContextValue;

            /**
             * Creates a plain object from a FloatContextValue message. Also converts values to other types if specified.
             * @param message FloatContextValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.FloatContextValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatContextValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatContextValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VectorContextValue. */
        interface IVectorContextValue {

            /** VectorContextValue valueNameHash */
            valueNameHash?: (number|null);

            /** VectorContextValue value */
            value?: (ICMsgVector|null);
        }

        /** Represents a VectorContextValue. */
        class VectorContextValue implements IVectorContextValue {

            /**
             * Constructs a new VectorContextValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.IVectorContextValue);

            /** VectorContextValue valueNameHash. */
            public valueNameHash: number;

            /** VectorContextValue value. */
            public value?: (ICMsgVector|null);

            /**
             * Creates a new VectorContextValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VectorContextValue instance
             */
            public static create(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.IVectorContextValue): CUserMsg_ParticleManager.SetParticleNamedValueContext.VectorContextValue;

            /**
             * Encodes the specified VectorContextValue message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.VectorContextValue.verify|verify} messages.
             * @param message VectorContextValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.IVectorContextValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VectorContextValue message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.VectorContextValue.verify|verify} messages.
             * @param message VectorContextValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.IVectorContextValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VectorContextValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VectorContextValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleNamedValueContext.VectorContextValue;

            /**
             * Decodes a VectorContextValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VectorContextValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleNamedValueContext.VectorContextValue;

            /**
             * Verifies a VectorContextValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VectorContextValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VectorContextValue
             */
            public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleNamedValueContext.VectorContextValue;

            /**
             * Creates a plain object from a VectorContextValue message. Also converts values to other types if specified.
             * @param message VectorContextValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.VectorContextValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VectorContextValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VectorContextValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TransformContextValue. */
        interface ITransformContextValue {

            /** TransformContextValue valueNameHash */
            valueNameHash?: (number|null);

            /** TransformContextValue angles */
            angles?: (ICMsgQAngle|null);

            /** TransformContextValue translation */
            translation?: (ICMsgVector|null);
        }

        /** Represents a TransformContextValue. */
        class TransformContextValue implements ITransformContextValue {

            /**
             * Constructs a new TransformContextValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.ITransformContextValue);

            /** TransformContextValue valueNameHash. */
            public valueNameHash: number;

            /** TransformContextValue angles. */
            public angles?: (ICMsgQAngle|null);

            /** TransformContextValue translation. */
            public translation?: (ICMsgVector|null);

            /**
             * Creates a new TransformContextValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransformContextValue instance
             */
            public static create(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.ITransformContextValue): CUserMsg_ParticleManager.SetParticleNamedValueContext.TransformContextValue;

            /**
             * Encodes the specified TransformContextValue message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.TransformContextValue.verify|verify} messages.
             * @param message TransformContextValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.ITransformContextValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransformContextValue message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.TransformContextValue.verify|verify} messages.
             * @param message TransformContextValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.ITransformContextValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransformContextValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransformContextValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleNamedValueContext.TransformContextValue;

            /**
             * Decodes a TransformContextValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransformContextValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleNamedValueContext.TransformContextValue;

            /**
             * Verifies a TransformContextValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransformContextValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransformContextValue
             */
            public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleNamedValueContext.TransformContextValue;

            /**
             * Creates a plain object from a TransformContextValue message. Also converts values to other types if specified.
             * @param message TransformContextValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.TransformContextValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransformContextValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TransformContextValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a EHandleContext. */
        interface IEHandleContext {

            /** EHandleContext valueNameHash */
            valueNameHash?: (number|null);

            /** EHandleContext entIndex */
            entIndex?: (number|null);
        }

        /** Represents a EHandleContext. */
        class EHandleContext implements IEHandleContext {

            /**
             * Constructs a new EHandleContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.IEHandleContext);

            /** EHandleContext valueNameHash. */
            public valueNameHash: number;

            /** EHandleContext entIndex. */
            public entIndex: number;

            /**
             * Creates a new EHandleContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EHandleContext instance
             */
            public static create(properties?: CUserMsg_ParticleManager.SetParticleNamedValueContext.IEHandleContext): CUserMsg_ParticleManager.SetParticleNamedValueContext.EHandleContext;

            /**
             * Encodes the specified EHandleContext message. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.EHandleContext.verify|verify} messages.
             * @param message EHandleContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.IEHandleContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EHandleContext message, length delimited. Does not implicitly {@link CUserMsg_ParticleManager.SetParticleNamedValueContext.EHandleContext.verify|verify} messages.
             * @param message EHandleContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.IEHandleContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a EHandleContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EHandleContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_ParticleManager.SetParticleNamedValueContext.EHandleContext;

            /**
             * Decodes a EHandleContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EHandleContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_ParticleManager.SetParticleNamedValueContext.EHandleContext;

            /**
             * Verifies a EHandleContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a EHandleContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EHandleContext
             */
            public static fromObject(object: { [k: string]: any }): CUserMsg_ParticleManager.SetParticleNamedValueContext.EHandleContext;

            /**
             * Creates a plain object from a EHandleContext message. Also converts values to other types if specified.
             * @param message EHandleContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CUserMsg_ParticleManager.SetParticleNamedValueContext.EHandleContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EHandleContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EHandleContext
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Represents a CUserMsg_HudError. */
export class CUserMsg_HudError implements ICUserMsg_HudError {

    /**
     * Constructs a new CUserMsg_HudError.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMsg_HudError);

    /** CUserMsg_HudError orderId. */
    public orderId: number;

    /**
     * Creates a new CUserMsg_HudError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMsg_HudError instance
     */
    public static create(properties?: ICUserMsg_HudError): CUserMsg_HudError;

    /**
     * Encodes the specified CUserMsg_HudError message. Does not implicitly {@link CUserMsg_HudError.verify|verify} messages.
     * @param message CUserMsg_HudError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMsg_HudError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMsg_HudError message, length delimited. Does not implicitly {@link CUserMsg_HudError.verify|verify} messages.
     * @param message CUserMsg_HudError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMsg_HudError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMsg_HudError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMsg_HudError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_HudError;

    /**
     * Decodes a CUserMsg_HudError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMsg_HudError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_HudError;

    /**
     * Verifies a CUserMsg_HudError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMsg_HudError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMsg_HudError
     */
    public static fromObject(object: { [k: string]: any }): CUserMsg_HudError;

    /**
     * Creates a plain object from a CUserMsg_HudError message. Also converts values to other types if specified.
     * @param message CUserMsg_HudError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMsg_HudError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMsg_HudError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMsg_HudError
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMsg_CustomGameEvent. */
export class CUserMsg_CustomGameEvent implements ICUserMsg_CustomGameEvent {

    /**
     * Constructs a new CUserMsg_CustomGameEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMsg_CustomGameEvent);

    /** CUserMsg_CustomGameEvent eventName. */
    public eventName: string;

    /** CUserMsg_CustomGameEvent data. */
    public data: Uint8Array;

    /**
     * Creates a new CUserMsg_CustomGameEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMsg_CustomGameEvent instance
     */
    public static create(properties?: ICUserMsg_CustomGameEvent): CUserMsg_CustomGameEvent;

    /**
     * Encodes the specified CUserMsg_CustomGameEvent message. Does not implicitly {@link CUserMsg_CustomGameEvent.verify|verify} messages.
     * @param message CUserMsg_CustomGameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMsg_CustomGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMsg_CustomGameEvent message, length delimited. Does not implicitly {@link CUserMsg_CustomGameEvent.verify|verify} messages.
     * @param message CUserMsg_CustomGameEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMsg_CustomGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMsg_CustomGameEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMsg_CustomGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMsg_CustomGameEvent;

    /**
     * Decodes a CUserMsg_CustomGameEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMsg_CustomGameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMsg_CustomGameEvent;

    /**
     * Verifies a CUserMsg_CustomGameEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMsg_CustomGameEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMsg_CustomGameEvent
     */
    public static fromObject(object: { [k: string]: any }): CUserMsg_CustomGameEvent;

    /**
     * Creates a plain object from a CUserMsg_CustomGameEvent message. Also converts values to other types if specified.
     * @param message CUserMsg_CustomGameEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMsg_CustomGameEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMsg_CustomGameEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMsg_CustomGameEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageHapticsManagerPulse. */
export class CUserMessageHapticsManagerPulse implements ICUserMessageHapticsManagerPulse {

    /**
     * Constructs a new CUserMessageHapticsManagerPulse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageHapticsManagerPulse);

    /** CUserMessageHapticsManagerPulse handId. */
    public handId: number;

    /** CUserMessageHapticsManagerPulse effectAmplitude. */
    public effectAmplitude: number;

    /** CUserMessageHapticsManagerPulse effectFrequency. */
    public effectFrequency: number;

    /** CUserMessageHapticsManagerPulse effectDuration. */
    public effectDuration: number;

    /**
     * Creates a new CUserMessageHapticsManagerPulse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageHapticsManagerPulse instance
     */
    public static create(properties?: ICUserMessageHapticsManagerPulse): CUserMessageHapticsManagerPulse;

    /**
     * Encodes the specified CUserMessageHapticsManagerPulse message. Does not implicitly {@link CUserMessageHapticsManagerPulse.verify|verify} messages.
     * @param message CUserMessageHapticsManagerPulse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageHapticsManagerPulse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageHapticsManagerPulse message, length delimited. Does not implicitly {@link CUserMessageHapticsManagerPulse.verify|verify} messages.
     * @param message CUserMessageHapticsManagerPulse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageHapticsManagerPulse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageHapticsManagerPulse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageHapticsManagerPulse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageHapticsManagerPulse;

    /**
     * Decodes a CUserMessageHapticsManagerPulse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageHapticsManagerPulse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageHapticsManagerPulse;

    /**
     * Verifies a CUserMessageHapticsManagerPulse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageHapticsManagerPulse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageHapticsManagerPulse
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageHapticsManagerPulse;

    /**
     * Creates a plain object from a CUserMessageHapticsManagerPulse message. Also converts values to other types if specified.
     * @param message CUserMessageHapticsManagerPulse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageHapticsManagerPulse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageHapticsManagerPulse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageHapticsManagerPulse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageHapticsManagerEffect. */
export class CUserMessageHapticsManagerEffect implements ICUserMessageHapticsManagerEffect {

    /**
     * Constructs a new CUserMessageHapticsManagerEffect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageHapticsManagerEffect);

    /** CUserMessageHapticsManagerEffect handId. */
    public handId: number;

    /** CUserMessageHapticsManagerEffect effectNameHashCode. */
    public effectNameHashCode: number;

    /** CUserMessageHapticsManagerEffect effectScale. */
    public effectScale: number;

    /**
     * Creates a new CUserMessageHapticsManagerEffect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageHapticsManagerEffect instance
     */
    public static create(properties?: ICUserMessageHapticsManagerEffect): CUserMessageHapticsManagerEffect;

    /**
     * Encodes the specified CUserMessageHapticsManagerEffect message. Does not implicitly {@link CUserMessageHapticsManagerEffect.verify|verify} messages.
     * @param message CUserMessageHapticsManagerEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageHapticsManagerEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageHapticsManagerEffect message, length delimited. Does not implicitly {@link CUserMessageHapticsManagerEffect.verify|verify} messages.
     * @param message CUserMessageHapticsManagerEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageHapticsManagerEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageHapticsManagerEffect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageHapticsManagerEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageHapticsManagerEffect;

    /**
     * Decodes a CUserMessageHapticsManagerEffect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageHapticsManagerEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageHapticsManagerEffect;

    /**
     * Verifies a CUserMessageHapticsManagerEffect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageHapticsManagerEffect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageHapticsManagerEffect
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageHapticsManagerEffect;

    /**
     * Creates a plain object from a CUserMessageHapticsManagerEffect message. Also converts values to other types if specified.
     * @param message CUserMessageHapticsManagerEffect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageHapticsManagerEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageHapticsManagerEffect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageHapticsManagerEffect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageAnimStateGraphState. */
export class CUserMessageAnimStateGraphState implements ICUserMessageAnimStateGraphState {

    /**
     * Constructs a new CUserMessageAnimStateGraphState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageAnimStateGraphState);

    /** CUserMessageAnimStateGraphState entityIndex. */
    public entityIndex: number;

    /** CUserMessageAnimStateGraphState data. */
    public data: Uint8Array;

    /**
     * Creates a new CUserMessageAnimStateGraphState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageAnimStateGraphState instance
     */
    public static create(properties?: ICUserMessageAnimStateGraphState): CUserMessageAnimStateGraphState;

    /**
     * Encodes the specified CUserMessageAnimStateGraphState message. Does not implicitly {@link CUserMessageAnimStateGraphState.verify|verify} messages.
     * @param message CUserMessageAnimStateGraphState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageAnimStateGraphState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageAnimStateGraphState message, length delimited. Does not implicitly {@link CUserMessageAnimStateGraphState.verify|verify} messages.
     * @param message CUserMessageAnimStateGraphState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageAnimStateGraphState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageAnimStateGraphState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageAnimStateGraphState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageAnimStateGraphState;

    /**
     * Decodes a CUserMessageAnimStateGraphState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageAnimStateGraphState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageAnimStateGraphState;

    /**
     * Verifies a CUserMessageAnimStateGraphState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageAnimStateGraphState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageAnimStateGraphState
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageAnimStateGraphState;

    /**
     * Creates a plain object from a CUserMessageAnimStateGraphState message. Also converts values to other types if specified.
     * @param message CUserMessageAnimStateGraphState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageAnimStateGraphState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageAnimStateGraphState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageAnimStateGraphState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageCommandQueueState. */
export class CUserMessageCommandQueueState implements ICUserMessageCommandQueueState {

    /**
     * Constructs a new CUserMessageCommandQueueState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageCommandQueueState);

    /** CUserMessageCommandQueueState playerSlot. */
    public playerSlot: number;

    /** CUserMessageCommandQueueState commandQueueInfo. */
    public commandQueueInfo?: (CUserMessageCommandQueueState.Icommand_queue_info_t|null);

    /**
     * Creates a new CUserMessageCommandQueueState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageCommandQueueState instance
     */
    public static create(properties?: ICUserMessageCommandQueueState): CUserMessageCommandQueueState;

    /**
     * Encodes the specified CUserMessageCommandQueueState message. Does not implicitly {@link CUserMessageCommandQueueState.verify|verify} messages.
     * @param message CUserMessageCommandQueueState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageCommandQueueState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageCommandQueueState message, length delimited. Does not implicitly {@link CUserMessageCommandQueueState.verify|verify} messages.
     * @param message CUserMessageCommandQueueState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageCommandQueueState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageCommandQueueState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageCommandQueueState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCommandQueueState;

    /**
     * Decodes a CUserMessageCommandQueueState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageCommandQueueState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCommandQueueState;

    /**
     * Verifies a CUserMessageCommandQueueState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageCommandQueueState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageCommandQueueState
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageCommandQueueState;

    /**
     * Creates a plain object from a CUserMessageCommandQueueState message. Also converts values to other types if specified.
     * @param message CUserMessageCommandQueueState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageCommandQueueState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageCommandQueueState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageCommandQueueState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMessageCommandQueueState {

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
    }

    /** Represents a command_queue_info_t. */
    class command_queue_info_t implements Icommand_queue_info_t {

        /**
         * Constructs a new command_queue_info_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessageCommandQueueState.Icommand_queue_info_t);

        /** command_queue_info_t commandsQueued. */
        public commandsQueued: number;

        /** command_queue_info_t commandQueueDesiredSize. */
        public commandQueueDesiredSize: number;

        /** command_queue_info_t starvedCommandTicks. */
        public starvedCommandTicks: number;

        /** command_queue_info_t timeDilationPercent. */
        public timeDilationPercent: number;

        /**
         * Creates a new command_queue_info_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns command_queue_info_t instance
         */
        public static create(properties?: CUserMessageCommandQueueState.Icommand_queue_info_t): CUserMessageCommandQueueState.command_queue_info_t;

        /**
         * Encodes the specified command_queue_info_t message. Does not implicitly {@link CUserMessageCommandQueueState.command_queue_info_t.verify|verify} messages.
         * @param message command_queue_info_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessageCommandQueueState.Icommand_queue_info_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified command_queue_info_t message, length delimited. Does not implicitly {@link CUserMessageCommandQueueState.command_queue_info_t.verify|verify} messages.
         * @param message command_queue_info_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessageCommandQueueState.Icommand_queue_info_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a command_queue_info_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns command_queue_info_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageCommandQueueState.command_queue_info_t;

        /**
         * Decodes a command_queue_info_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns command_queue_info_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageCommandQueueState.command_queue_info_t;

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
        public static fromObject(object: { [k: string]: any }): CUserMessageCommandQueueState.command_queue_info_t;

        /**
         * Creates a plain object from a command_queue_info_t message. Also converts values to other types if specified.
         * @param message command_queue_info_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessageCommandQueueState.command_queue_info_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
}

/** Represents a CUserMessageUpdateCssClasses. */
export class CUserMessageUpdateCssClasses implements ICUserMessageUpdateCssClasses {

    /**
     * Constructs a new CUserMessageUpdateCssClasses.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageUpdateCssClasses);

    /** CUserMessageUpdateCssClasses targetWorldPanel. */
    public targetWorldPanel: number;

    /** CUserMessageUpdateCssClasses cssClasses. */
    public cssClasses: string;

    /** CUserMessageUpdateCssClasses isAdd. */
    public isAdd: boolean;

    /**
     * Creates a new CUserMessageUpdateCssClasses instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageUpdateCssClasses instance
     */
    public static create(properties?: ICUserMessageUpdateCssClasses): CUserMessageUpdateCssClasses;

    /**
     * Encodes the specified CUserMessageUpdateCssClasses message. Does not implicitly {@link CUserMessageUpdateCssClasses.verify|verify} messages.
     * @param message CUserMessageUpdateCssClasses message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageUpdateCssClasses, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageUpdateCssClasses message, length delimited. Does not implicitly {@link CUserMessageUpdateCssClasses.verify|verify} messages.
     * @param message CUserMessageUpdateCssClasses message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageUpdateCssClasses, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageUpdateCssClasses message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageUpdateCssClasses
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageUpdateCssClasses;

    /**
     * Decodes a CUserMessageUpdateCssClasses message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageUpdateCssClasses
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageUpdateCssClasses;

    /**
     * Verifies a CUserMessageUpdateCssClasses message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageUpdateCssClasses message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageUpdateCssClasses
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageUpdateCssClasses;

    /**
     * Creates a plain object from a CUserMessageUpdateCssClasses message. Also converts values to other types if specified.
     * @param message CUserMessageUpdateCssClasses
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageUpdateCssClasses, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageUpdateCssClasses to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageUpdateCssClasses
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageServerFrameTime. */
export class CUserMessageServerFrameTime implements ICUserMessageServerFrameTime {

    /**
     * Constructs a new CUserMessageServerFrameTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageServerFrameTime);

    /** CUserMessageServerFrameTime frameTime. */
    public frameTime: number;

    /**
     * Creates a new CUserMessageServerFrameTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageServerFrameTime instance
     */
    public static create(properties?: ICUserMessageServerFrameTime): CUserMessageServerFrameTime;

    /**
     * Encodes the specified CUserMessageServerFrameTime message. Does not implicitly {@link CUserMessageServerFrameTime.verify|verify} messages.
     * @param message CUserMessageServerFrameTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageServerFrameTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageServerFrameTime message, length delimited. Does not implicitly {@link CUserMessageServerFrameTime.verify|verify} messages.
     * @param message CUserMessageServerFrameTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageServerFrameTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageServerFrameTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageServerFrameTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageServerFrameTime;

    /**
     * Decodes a CUserMessageServerFrameTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageServerFrameTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageServerFrameTime;

    /**
     * Verifies a CUserMessageServerFrameTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageServerFrameTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageServerFrameTime
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageServerFrameTime;

    /**
     * Creates a plain object from a CUserMessageServerFrameTime message. Also converts values to other types if specified.
     * @param message CUserMessageServerFrameTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageServerFrameTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageServerFrameTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageServerFrameTime
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageLagCompensationError. */
export class CUserMessageLagCompensationError implements ICUserMessageLagCompensationError {

    /**
     * Constructs a new CUserMessageLagCompensationError.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageLagCompensationError);

    /** CUserMessageLagCompensationError distance. */
    public distance: number;

    /**
     * Creates a new CUserMessageLagCompensationError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageLagCompensationError instance
     */
    public static create(properties?: ICUserMessageLagCompensationError): CUserMessageLagCompensationError;

    /**
     * Encodes the specified CUserMessageLagCompensationError message. Does not implicitly {@link CUserMessageLagCompensationError.verify|verify} messages.
     * @param message CUserMessageLagCompensationError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageLagCompensationError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageLagCompensationError message, length delimited. Does not implicitly {@link CUserMessageLagCompensationError.verify|verify} messages.
     * @param message CUserMessageLagCompensationError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageLagCompensationError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageLagCompensationError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageLagCompensationError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageLagCompensationError;

    /**
     * Decodes a CUserMessageLagCompensationError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageLagCompensationError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageLagCompensationError;

    /**
     * Verifies a CUserMessageLagCompensationError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageLagCompensationError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageLagCompensationError
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageLagCompensationError;

    /**
     * Creates a plain object from a CUserMessageLagCompensationError message. Also converts values to other types if specified.
     * @param message CUserMessageLagCompensationError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageLagCompensationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageLagCompensationError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageLagCompensationError
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageRequestDllStatus. */
export class CUserMessageRequestDllStatus implements ICUserMessageRequestDllStatus {

    /**
     * Constructs a new CUserMessageRequestDllStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageRequestDllStatus);

    /** CUserMessageRequestDllStatus dllAction. */
    public dllAction: string;

    /** CUserMessageRequestDllStatus fullReport. */
    public fullReport: boolean;

    /**
     * Creates a new CUserMessageRequestDllStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageRequestDllStatus instance
     */
    public static create(properties?: ICUserMessageRequestDllStatus): CUserMessageRequestDllStatus;

    /**
     * Encodes the specified CUserMessageRequestDllStatus message. Does not implicitly {@link CUserMessageRequestDllStatus.verify|verify} messages.
     * @param message CUserMessageRequestDllStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageRequestDllStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageRequestDllStatus message, length delimited. Does not implicitly {@link CUserMessageRequestDllStatus.verify|verify} messages.
     * @param message CUserMessageRequestDllStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageRequestDllStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageRequestDllStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageRequestDllStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageRequestDllStatus;

    /**
     * Decodes a CUserMessageRequestDllStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageRequestDllStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageRequestDllStatus;

    /**
     * Verifies a CUserMessageRequestDllStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageRequestDllStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageRequestDllStatus
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageRequestDllStatus;

    /**
     * Creates a plain object from a CUserMessageRequestDllStatus message. Also converts values to other types if specified.
     * @param message CUserMessageRequestDllStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageRequestDllStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageRequestDllStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageRequestDllStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessageRequestUtilAction. */
export class CUserMessageRequestUtilAction implements ICUserMessageRequestUtilAction {

    /**
     * Constructs a new CUserMessageRequestUtilAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageRequestUtilAction);

    /** CUserMessageRequestUtilAction util1. */
    public util1: number;

    /** CUserMessageRequestUtilAction util2. */
    public util2: number;

    /** CUserMessageRequestUtilAction util3. */
    public util3: number;

    /** CUserMessageRequestUtilAction util4. */
    public util4: number;

    /** CUserMessageRequestUtilAction util5. */
    public util5: number;

    /**
     * Creates a new CUserMessageRequestUtilAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageRequestUtilAction instance
     */
    public static create(properties?: ICUserMessageRequestUtilAction): CUserMessageRequestUtilAction;

    /**
     * Encodes the specified CUserMessageRequestUtilAction message. Does not implicitly {@link CUserMessageRequestUtilAction.verify|verify} messages.
     * @param message CUserMessageRequestUtilAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageRequestUtilAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageRequestUtilAction message, length delimited. Does not implicitly {@link CUserMessageRequestUtilAction.verify|verify} messages.
     * @param message CUserMessageRequestUtilAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageRequestUtilAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageRequestUtilAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageRequestUtilAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageRequestUtilAction;

    /**
     * Decodes a CUserMessageRequestUtilAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageRequestUtilAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageRequestUtilAction;

    /**
     * Verifies a CUserMessageRequestUtilAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageRequestUtilAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageRequestUtilAction
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageRequestUtilAction;

    /**
     * Creates a plain object from a CUserMessageRequestUtilAction message. Also converts values to other types if specified.
     * @param message CUserMessageRequestUtilAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageRequestUtilAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageRequestUtilAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageRequestUtilAction
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessage_UtilMsg_Response. */
export class CUserMessage_UtilMsg_Response implements ICUserMessage_UtilMsg_Response {

    /**
     * Constructs a new CUserMessage_UtilMsg_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessage_UtilMsg_Response);

    /** CUserMessage_UtilMsg_Response crc. */
    public crc: number;

    /** CUserMessage_UtilMsg_Response itemCount. */
    public itemCount: number;

    /** CUserMessage_UtilMsg_Response crc2. */
    public crc2: number;

    /** CUserMessage_UtilMsg_Response itemCount2. */
    public itemCount2: number;

    /** CUserMessage_UtilMsg_Response crcPart. */
    public crcPart: number[];

    /** CUserMessage_UtilMsg_Response crcPart2. */
    public crcPart2: number[];

    /** CUserMessage_UtilMsg_Response clientTimestamp. */
    public clientTimestamp: number;

    /** CUserMessage_UtilMsg_Response platform. */
    public platform: number;

    /** CUserMessage_UtilMsg_Response itemdetails. */
    public itemdetails: CUserMessage_UtilMsg_Response.IItemDetail[];

    /** CUserMessage_UtilMsg_Response itemgroup. */
    public itemgroup: number;

    /** CUserMessage_UtilMsg_Response totalCount. */
    public totalCount: number;

    /** CUserMessage_UtilMsg_Response totalCount2. */
    public totalCount2: number;

    /**
     * Creates a new CUserMessage_UtilMsg_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessage_UtilMsg_Response instance
     */
    public static create(properties?: ICUserMessage_UtilMsg_Response): CUserMessage_UtilMsg_Response;

    /**
     * Encodes the specified CUserMessage_UtilMsg_Response message. Does not implicitly {@link CUserMessage_UtilMsg_Response.verify|verify} messages.
     * @param message CUserMessage_UtilMsg_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessage_UtilMsg_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessage_UtilMsg_Response message, length delimited. Does not implicitly {@link CUserMessage_UtilMsg_Response.verify|verify} messages.
     * @param message CUserMessage_UtilMsg_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessage_UtilMsg_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessage_UtilMsg_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessage_UtilMsg_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_UtilMsg_Response;

    /**
     * Decodes a CUserMessage_UtilMsg_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessage_UtilMsg_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_UtilMsg_Response;

    /**
     * Verifies a CUserMessage_UtilMsg_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessage_UtilMsg_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessage_UtilMsg_Response
     */
    public static fromObject(object: { [k: string]: any }): CUserMessage_UtilMsg_Response;

    /**
     * Creates a plain object from a CUserMessage_UtilMsg_Response message. Also converts values to other types if specified.
     * @param message CUserMessage_UtilMsg_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessage_UtilMsg_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessage_UtilMsg_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessage_UtilMsg_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMessage_UtilMsg_Response {

    /** Properties of an ItemDetail. */
    interface IItemDetail {

        /** ItemDetail index */
        index?: (number|null);

        /** ItemDetail hash */
        hash?: (number|null);

        /** ItemDetail crc */
        crc?: (number|null);

        /** ItemDetail name */
        name?: (string|null);
    }

    /** Represents an ItemDetail. */
    class ItemDetail implements IItemDetail {

        /**
         * Constructs a new ItemDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessage_UtilMsg_Response.IItemDetail);

        /** ItemDetail index. */
        public index: number;

        /** ItemDetail hash. */
        public hash: number;

        /** ItemDetail crc. */
        public crc: number;

        /** ItemDetail name. */
        public name: string;

        /**
         * Creates a new ItemDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemDetail instance
         */
        public static create(properties?: CUserMessage_UtilMsg_Response.IItemDetail): CUserMessage_UtilMsg_Response.ItemDetail;

        /**
         * Encodes the specified ItemDetail message. Does not implicitly {@link CUserMessage_UtilMsg_Response.ItemDetail.verify|verify} messages.
         * @param message ItemDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessage_UtilMsg_Response.IItemDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemDetail message, length delimited. Does not implicitly {@link CUserMessage_UtilMsg_Response.ItemDetail.verify|verify} messages.
         * @param message ItemDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessage_UtilMsg_Response.IItemDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_UtilMsg_Response.ItemDetail;

        /**
         * Decodes an ItemDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_UtilMsg_Response.ItemDetail;

        /**
         * Verifies an ItemDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemDetail
         */
        public static fromObject(object: { [k: string]: any }): CUserMessage_UtilMsg_Response.ItemDetail;

        /**
         * Creates a plain object from an ItemDetail message. Also converts values to other types if specified.
         * @param message ItemDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessage_UtilMsg_Response.ItemDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemDetail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CUserMessage_DllStatus. */
export class CUserMessage_DllStatus implements ICUserMessage_DllStatus {

    /**
     * Constructs a new CUserMessage_DllStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessage_DllStatus);

    /** CUserMessage_DllStatus fileReport. */
    public fileReport: string;

    /** CUserMessage_DllStatus commandLine. */
    public commandLine: string;

    /** CUserMessage_DllStatus totalFiles. */
    public totalFiles: number;

    /** CUserMessage_DllStatus processId. */
    public processId: number;

    /** CUserMessage_DllStatus osversion. */
    public osversion: number;

    /** CUserMessage_DllStatus clientTime. */
    public clientTime: (number|Long);

    /** CUserMessage_DllStatus diagnostics. */
    public diagnostics: CUserMessage_DllStatus.ICVDiagnostic[];

    /** CUserMessage_DllStatus modules. */
    public modules: CUserMessage_DllStatus.ICModule[];

    /**
     * Creates a new CUserMessage_DllStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessage_DllStatus instance
     */
    public static create(properties?: ICUserMessage_DllStatus): CUserMessage_DllStatus;

    /**
     * Encodes the specified CUserMessage_DllStatus message. Does not implicitly {@link CUserMessage_DllStatus.verify|verify} messages.
     * @param message CUserMessage_DllStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessage_DllStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessage_DllStatus message, length delimited. Does not implicitly {@link CUserMessage_DllStatus.verify|verify} messages.
     * @param message CUserMessage_DllStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessage_DllStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessage_DllStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessage_DllStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_DllStatus;

    /**
     * Decodes a CUserMessage_DllStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessage_DllStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_DllStatus;

    /**
     * Verifies a CUserMessage_DllStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessage_DllStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessage_DllStatus
     */
    public static fromObject(object: { [k: string]: any }): CUserMessage_DllStatus;

    /**
     * Creates a plain object from a CUserMessage_DllStatus message. Also converts values to other types if specified.
     * @param message CUserMessage_DllStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessage_DllStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessage_DllStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessage_DllStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMessage_DllStatus {

    /** Properties of a CVDiagnostic. */
    interface ICVDiagnostic {

        /** CVDiagnostic id */
        id?: (number|null);

        /** CVDiagnostic extended */
        extended?: (number|null);

        /** CVDiagnostic value */
        value?: (number|Long|null);

        /** CVDiagnostic stringValue */
        stringValue?: (string|null);
    }

    /** Represents a CVDiagnostic. */
    class CVDiagnostic implements ICVDiagnostic {

        /**
         * Constructs a new CVDiagnostic.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessage_DllStatus.ICVDiagnostic);

        /** CVDiagnostic id. */
        public id: number;

        /** CVDiagnostic extended. */
        public extended: number;

        /** CVDiagnostic value. */
        public value: (number|Long);

        /** CVDiagnostic stringValue. */
        public stringValue: string;

        /**
         * Creates a new CVDiagnostic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CVDiagnostic instance
         */
        public static create(properties?: CUserMessage_DllStatus.ICVDiagnostic): CUserMessage_DllStatus.CVDiagnostic;

        /**
         * Encodes the specified CVDiagnostic message. Does not implicitly {@link CUserMessage_DllStatus.CVDiagnostic.verify|verify} messages.
         * @param message CVDiagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessage_DllStatus.ICVDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CVDiagnostic message, length delimited. Does not implicitly {@link CUserMessage_DllStatus.CVDiagnostic.verify|verify} messages.
         * @param message CVDiagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessage_DllStatus.ICVDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CVDiagnostic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CVDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_DllStatus.CVDiagnostic;

        /**
         * Decodes a CVDiagnostic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CVDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_DllStatus.CVDiagnostic;

        /**
         * Verifies a CVDiagnostic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CVDiagnostic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CVDiagnostic
         */
        public static fromObject(object: { [k: string]: any }): CUserMessage_DllStatus.CVDiagnostic;

        /**
         * Creates a plain object from a CVDiagnostic message. Also converts values to other types if specified.
         * @param message CVDiagnostic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessage_DllStatus.CVDiagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CVDiagnostic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CVDiagnostic
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CModule. */
    interface ICModule {

        /** CModule baseAddr */
        baseAddr?: (number|Long|null);

        /** CModule name */
        name?: (string|null);

        /** CModule size */
        size?: (number|null);

        /** CModule timestamp */
        timestamp?: (number|null);
    }

    /** Represents a CModule. */
    class CModule implements ICModule {

        /**
         * Constructs a new CModule.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessage_DllStatus.ICModule);

        /** CModule baseAddr. */
        public baseAddr: (number|Long);

        /** CModule name. */
        public name: string;

        /** CModule size. */
        public size: number;

        /** CModule timestamp. */
        public timestamp: number;

        /**
         * Creates a new CModule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CModule instance
         */
        public static create(properties?: CUserMessage_DllStatus.ICModule): CUserMessage_DllStatus.CModule;

        /**
         * Encodes the specified CModule message. Does not implicitly {@link CUserMessage_DllStatus.CModule.verify|verify} messages.
         * @param message CModule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessage_DllStatus.ICModule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CModule message, length delimited. Does not implicitly {@link CUserMessage_DllStatus.CModule.verify|verify} messages.
         * @param message CModule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessage_DllStatus.ICModule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CModule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CModule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_DllStatus.CModule;

        /**
         * Decodes a CModule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CModule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_DllStatus.CModule;

        /**
         * Verifies a CModule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CModule message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CModule
         */
        public static fromObject(object: { [k: string]: any }): CUserMessage_DllStatus.CModule;

        /**
         * Creates a plain object from a CModule message. Also converts values to other types if specified.
         * @param message CModule
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessage_DllStatus.CModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CModule to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CModule
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CUserMessageRequestInventory. */
export class CUserMessageRequestInventory implements ICUserMessageRequestInventory {

    /**
     * Constructs a new CUserMessageRequestInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageRequestInventory);

    /** CUserMessageRequestInventory inventory. */
    public inventory: number;

    /** CUserMessageRequestInventory offset. */
    public offset: number;

    /** CUserMessageRequestInventory options. */
    public options: number;

    /**
     * Creates a new CUserMessageRequestInventory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageRequestInventory instance
     */
    public static create(properties?: ICUserMessageRequestInventory): CUserMessageRequestInventory;

    /**
     * Encodes the specified CUserMessageRequestInventory message. Does not implicitly {@link CUserMessageRequestInventory.verify|verify} messages.
     * @param message CUserMessageRequestInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageRequestInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageRequestInventory message, length delimited. Does not implicitly {@link CUserMessageRequestInventory.verify|verify} messages.
     * @param message CUserMessageRequestInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageRequestInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageRequestInventory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageRequestInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageRequestInventory;

    /**
     * Decodes a CUserMessageRequestInventory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageRequestInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageRequestInventory;

    /**
     * Verifies a CUserMessageRequestInventory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageRequestInventory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageRequestInventory
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageRequestInventory;

    /**
     * Creates a plain object from a CUserMessageRequestInventory message. Also converts values to other types if specified.
     * @param message CUserMessageRequestInventory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageRequestInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageRequestInventory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageRequestInventory
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserMessage_Inventory_Response. */
export class CUserMessage_Inventory_Response implements ICUserMessage_Inventory_Response {

    /**
     * Constructs a new CUserMessage_Inventory_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessage_Inventory_Response);

    /** CUserMessage_Inventory_Response crc. */
    public crc: number;

    /** CUserMessage_Inventory_Response itemCount. */
    public itemCount: number;

    /** CUserMessage_Inventory_Response osversion. */
    public osversion: number;

    /** CUserMessage_Inventory_Response perfTime. */
    public perfTime: number;

    /** CUserMessage_Inventory_Response clientTimestamp. */
    public clientTimestamp: number;

    /** CUserMessage_Inventory_Response platform. */
    public platform: number;

    /** CUserMessage_Inventory_Response inventories. */
    public inventories: CUserMessage_Inventory_Response.IInventoryDetail[];

    /** CUserMessage_Inventory_Response inventories2. */
    public inventories2: CUserMessage_Inventory_Response.IInventoryDetail[];

    /** CUserMessage_Inventory_Response inventories3. */
    public inventories3: CUserMessage_Inventory_Response.IInventoryDetail[];

    /** CUserMessage_Inventory_Response invType. */
    public invType: number;

    /** CUserMessage_Inventory_Response buildVersion. */
    public buildVersion: number;

    /** CUserMessage_Inventory_Response instance. */
    public instance: number;

    /** CUserMessage_Inventory_Response startTime. */
    public startTime: (number|Long);

    /**
     * Creates a new CUserMessage_Inventory_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessage_Inventory_Response instance
     */
    public static create(properties?: ICUserMessage_Inventory_Response): CUserMessage_Inventory_Response;

    /**
     * Encodes the specified CUserMessage_Inventory_Response message. Does not implicitly {@link CUserMessage_Inventory_Response.verify|verify} messages.
     * @param message CUserMessage_Inventory_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessage_Inventory_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessage_Inventory_Response message, length delimited. Does not implicitly {@link CUserMessage_Inventory_Response.verify|verify} messages.
     * @param message CUserMessage_Inventory_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessage_Inventory_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessage_Inventory_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessage_Inventory_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_Inventory_Response;

    /**
     * Decodes a CUserMessage_Inventory_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessage_Inventory_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_Inventory_Response;

    /**
     * Verifies a CUserMessage_Inventory_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessage_Inventory_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessage_Inventory_Response
     */
    public static fromObject(object: { [k: string]: any }): CUserMessage_Inventory_Response;

    /**
     * Creates a plain object from a CUserMessage_Inventory_Response message. Also converts values to other types if specified.
     * @param message CUserMessage_Inventory_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessage_Inventory_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessage_Inventory_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessage_Inventory_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMessage_Inventory_Response {

    /** Properties of an InventoryDetail. */
    interface IInventoryDetail {

        /** InventoryDetail index */
        index?: (number|null);

        /** InventoryDetail primary */
        primary?: (number|Long|null);

        /** InventoryDetail offset */
        offset?: (number|Long|null);

        /** InventoryDetail first */
        first?: (number|Long|null);

        /** InventoryDetail base */
        base?: (number|Long|null);

        /** InventoryDetail name */
        name?: (string|null);

        /** InventoryDetail baseName */
        baseName?: (string|null);

        /** InventoryDetail baseDetail */
        baseDetail?: (number|null);

        /** InventoryDetail baseTime */
        baseTime?: (number|null);

        /** InventoryDetail baseHash */
        baseHash?: (number|null);
    }

    /** Represents an InventoryDetail. */
    class InventoryDetail implements IInventoryDetail {

        /**
         * Constructs a new InventoryDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessage_Inventory_Response.IInventoryDetail);

        /** InventoryDetail index. */
        public index: number;

        /** InventoryDetail primary. */
        public primary: (number|Long);

        /** InventoryDetail offset. */
        public offset: (number|Long);

        /** InventoryDetail first. */
        public first: (number|Long);

        /** InventoryDetail base. */
        public base: (number|Long);

        /** InventoryDetail name. */
        public name: string;

        /** InventoryDetail baseName. */
        public baseName: string;

        /** InventoryDetail baseDetail. */
        public baseDetail: number;

        /** InventoryDetail baseTime. */
        public baseTime: number;

        /** InventoryDetail baseHash. */
        public baseHash: number;

        /**
         * Creates a new InventoryDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InventoryDetail instance
         */
        public static create(properties?: CUserMessage_Inventory_Response.IInventoryDetail): CUserMessage_Inventory_Response.InventoryDetail;

        /**
         * Encodes the specified InventoryDetail message. Does not implicitly {@link CUserMessage_Inventory_Response.InventoryDetail.verify|verify} messages.
         * @param message InventoryDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessage_Inventory_Response.IInventoryDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InventoryDetail message, length delimited. Does not implicitly {@link CUserMessage_Inventory_Response.InventoryDetail.verify|verify} messages.
         * @param message InventoryDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessage_Inventory_Response.IInventoryDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InventoryDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InventoryDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_Inventory_Response.InventoryDetail;

        /**
         * Decodes an InventoryDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InventoryDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_Inventory_Response.InventoryDetail;

        /**
         * Verifies an InventoryDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InventoryDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InventoryDetail
         */
        public static fromObject(object: { [k: string]: any }): CUserMessage_Inventory_Response.InventoryDetail;

        /**
         * Creates a plain object from an InventoryDetail message. Also converts values to other types if specified.
         * @param message InventoryDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessage_Inventory_Response.InventoryDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InventoryDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InventoryDetail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CUserMessageRequestDiagnostic. */
export class CUserMessageRequestDiagnostic implements ICUserMessageRequestDiagnostic {

    /**
     * Constructs a new CUserMessageRequestDiagnostic.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessageRequestDiagnostic);

    /** CUserMessageRequestDiagnostic diagnostics. */
    public diagnostics: CUserMessageRequestDiagnostic.IDiagnostic[];

    /**
     * Creates a new CUserMessageRequestDiagnostic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessageRequestDiagnostic instance
     */
    public static create(properties?: ICUserMessageRequestDiagnostic): CUserMessageRequestDiagnostic;

    /**
     * Encodes the specified CUserMessageRequestDiagnostic message. Does not implicitly {@link CUserMessageRequestDiagnostic.verify|verify} messages.
     * @param message CUserMessageRequestDiagnostic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessageRequestDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessageRequestDiagnostic message, length delimited. Does not implicitly {@link CUserMessageRequestDiagnostic.verify|verify} messages.
     * @param message CUserMessageRequestDiagnostic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessageRequestDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessageRequestDiagnostic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessageRequestDiagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageRequestDiagnostic;

    /**
     * Decodes a CUserMessageRequestDiagnostic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessageRequestDiagnostic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageRequestDiagnostic;

    /**
     * Verifies a CUserMessageRequestDiagnostic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessageRequestDiagnostic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessageRequestDiagnostic
     */
    public static fromObject(object: { [k: string]: any }): CUserMessageRequestDiagnostic;

    /**
     * Creates a plain object from a CUserMessageRequestDiagnostic message. Also converts values to other types if specified.
     * @param message CUserMessageRequestDiagnostic
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessageRequestDiagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessageRequestDiagnostic to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessageRequestDiagnostic
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMessageRequestDiagnostic {

    /** Properties of a Diagnostic. */
    interface IDiagnostic {

        /** Diagnostic index */
        index?: (number|null);

        /** Diagnostic offset */
        offset?: (number|Long|null);

        /** Diagnostic param */
        param?: (number|null);

        /** Diagnostic length */
        length?: (number|null);

        /** Diagnostic type */
        type?: (number|null);

        /** Diagnostic base */
        base?: (number|Long|null);

        /** Diagnostic range */
        range?: (number|Long|null);

        /** Diagnostic extent */
        extent?: (number|Long|null);

        /** Diagnostic detail */
        detail?: (number|Long|null);

        /** Diagnostic name */
        name?: (string|null);

        /** Diagnostic alias */
        alias?: (string|null);

        /** Diagnostic vardetail */
        vardetail?: (Uint8Array|null);

        /** Diagnostic context */
        context?: (number|null);
    }

    /** Represents a Diagnostic. */
    class Diagnostic implements IDiagnostic {

        /**
         * Constructs a new Diagnostic.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessageRequestDiagnostic.IDiagnostic);

        /** Diagnostic index. */
        public index: number;

        /** Diagnostic offset. */
        public offset: (number|Long);

        /** Diagnostic param. */
        public param: number;

        /** Diagnostic length. */
        public length: number;

        /** Diagnostic type. */
        public type: number;

        /** Diagnostic base. */
        public base: (number|Long);

        /** Diagnostic range. */
        public range: (number|Long);

        /** Diagnostic extent. */
        public extent: (number|Long);

        /** Diagnostic detail. */
        public detail: (number|Long);

        /** Diagnostic name. */
        public name: string;

        /** Diagnostic alias. */
        public alias: string;

        /** Diagnostic vardetail. */
        public vardetail: Uint8Array;

        /** Diagnostic context. */
        public context: number;

        /**
         * Creates a new Diagnostic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Diagnostic instance
         */
        public static create(properties?: CUserMessageRequestDiagnostic.IDiagnostic): CUserMessageRequestDiagnostic.Diagnostic;

        /**
         * Encodes the specified Diagnostic message. Does not implicitly {@link CUserMessageRequestDiagnostic.Diagnostic.verify|verify} messages.
         * @param message Diagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessageRequestDiagnostic.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Diagnostic message, length delimited. Does not implicitly {@link CUserMessageRequestDiagnostic.Diagnostic.verify|verify} messages.
         * @param message Diagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessageRequestDiagnostic.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Diagnostic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessageRequestDiagnostic.Diagnostic;

        /**
         * Decodes a Diagnostic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessageRequestDiagnostic.Diagnostic;

        /**
         * Verifies a Diagnostic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Diagnostic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Diagnostic
         */
        public static fromObject(object: { [k: string]: any }): CUserMessageRequestDiagnostic.Diagnostic;

        /**
         * Creates a plain object from a Diagnostic message. Also converts values to other types if specified.
         * @param message Diagnostic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessageRequestDiagnostic.Diagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Diagnostic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Diagnostic
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CUserMessage_Diagnostic_Response. */
export class CUserMessage_Diagnostic_Response implements ICUserMessage_Diagnostic_Response {

    /**
     * Constructs a new CUserMessage_Diagnostic_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessage_Diagnostic_Response);

    /** CUserMessage_Diagnostic_Response diagnostics. */
    public diagnostics: CUserMessage_Diagnostic_Response.IDiagnostic[];

    /** CUserMessage_Diagnostic_Response buildVersion. */
    public buildVersion: number;

    /** CUserMessage_Diagnostic_Response instance. */
    public instance: number;

    /** CUserMessage_Diagnostic_Response startTime. */
    public startTime: (number|Long);

    /** CUserMessage_Diagnostic_Response osversion. */
    public osversion: number;

    /** CUserMessage_Diagnostic_Response platform. */
    public platform: number;

    /**
     * Creates a new CUserMessage_Diagnostic_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessage_Diagnostic_Response instance
     */
    public static create(properties?: ICUserMessage_Diagnostic_Response): CUserMessage_Diagnostic_Response;

    /**
     * Encodes the specified CUserMessage_Diagnostic_Response message. Does not implicitly {@link CUserMessage_Diagnostic_Response.verify|verify} messages.
     * @param message CUserMessage_Diagnostic_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessage_Diagnostic_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessage_Diagnostic_Response message, length delimited. Does not implicitly {@link CUserMessage_Diagnostic_Response.verify|verify} messages.
     * @param message CUserMessage_Diagnostic_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessage_Diagnostic_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessage_Diagnostic_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessage_Diagnostic_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_Diagnostic_Response;

    /**
     * Decodes a CUserMessage_Diagnostic_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessage_Diagnostic_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_Diagnostic_Response;

    /**
     * Verifies a CUserMessage_Diagnostic_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessage_Diagnostic_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessage_Diagnostic_Response
     */
    public static fromObject(object: { [k: string]: any }): CUserMessage_Diagnostic_Response;

    /**
     * Creates a plain object from a CUserMessage_Diagnostic_Response message. Also converts values to other types if specified.
     * @param message CUserMessage_Diagnostic_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessage_Diagnostic_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessage_Diagnostic_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessage_Diagnostic_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUserMessage_Diagnostic_Response {

    /** Properties of a Diagnostic. */
    interface IDiagnostic {

        /** Diagnostic index */
        index?: (number|null);

        /** Diagnostic offset */
        offset?: (number|Long|null);

        /** Diagnostic param */
        param?: (number|null);

        /** Diagnostic length */
        length?: (number|null);

        /** Diagnostic detail */
        detail?: (Uint8Array|null);

        /** Diagnostic base */
        base?: (number|Long|null);

        /** Diagnostic range */
        range?: (number|Long|null);

        /** Diagnostic type */
        type?: (number|null);

        /** Diagnostic name */
        name?: (string|null);

        /** Diagnostic alias */
        alias?: (string|null);

        /** Diagnostic backup */
        backup?: (Uint8Array|null);

        /** Diagnostic context */
        context?: (number|null);

        /** Diagnostic control */
        control?: (number|Long|null);

        /** Diagnostic augment */
        augment?: (number|Long|null);

        /** Diagnostic placebo */
        placebo?: (number|Long|null);
    }

    /** Represents a Diagnostic. */
    class Diagnostic implements IDiagnostic {

        /**
         * Constructs a new Diagnostic.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUserMessage_Diagnostic_Response.IDiagnostic);

        /** Diagnostic index. */
        public index: number;

        /** Diagnostic offset. */
        public offset: (number|Long);

        /** Diagnostic param. */
        public param: number;

        /** Diagnostic length. */
        public length: number;

        /** Diagnostic detail. */
        public detail: Uint8Array;

        /** Diagnostic base. */
        public base: (number|Long);

        /** Diagnostic range. */
        public range: (number|Long);

        /** Diagnostic type. */
        public type: number;

        /** Diagnostic name. */
        public name: string;

        /** Diagnostic alias. */
        public alias: string;

        /** Diagnostic backup. */
        public backup: Uint8Array;

        /** Diagnostic context. */
        public context: number;

        /** Diagnostic control. */
        public control: (number|Long);

        /** Diagnostic augment. */
        public augment: (number|Long);

        /** Diagnostic placebo. */
        public placebo: (number|Long);

        /**
         * Creates a new Diagnostic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Diagnostic instance
         */
        public static create(properties?: CUserMessage_Diagnostic_Response.IDiagnostic): CUserMessage_Diagnostic_Response.Diagnostic;

        /**
         * Encodes the specified Diagnostic message. Does not implicitly {@link CUserMessage_Diagnostic_Response.Diagnostic.verify|verify} messages.
         * @param message Diagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUserMessage_Diagnostic_Response.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Diagnostic message, length delimited. Does not implicitly {@link CUserMessage_Diagnostic_Response.Diagnostic.verify|verify} messages.
         * @param message Diagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUserMessage_Diagnostic_Response.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Diagnostic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_Diagnostic_Response.Diagnostic;

        /**
         * Decodes a Diagnostic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_Diagnostic_Response.Diagnostic;

        /**
         * Verifies a Diagnostic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Diagnostic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Diagnostic
         */
        public static fromObject(object: { [k: string]: any }): CUserMessage_Diagnostic_Response.Diagnostic;

        /**
         * Creates a plain object from a Diagnostic message. Also converts values to other types if specified.
         * @param message Diagnostic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUserMessage_Diagnostic_Response.Diagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Diagnostic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Diagnostic
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CUserMessage_ExtraUserData. */
export class CUserMessage_ExtraUserData implements ICUserMessage_ExtraUserData {

    /**
     * Constructs a new CUserMessage_ExtraUserData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserMessage_ExtraUserData);

    /** CUserMessage_ExtraUserData item. */
    public item: number;

    /** CUserMessage_ExtraUserData value1. */
    public value1: (number|Long);

    /** CUserMessage_ExtraUserData value2. */
    public value2: (number|Long);

    /** CUserMessage_ExtraUserData detail1. */
    public detail1: Uint8Array[];

    /** CUserMessage_ExtraUserData detail2. */
    public detail2: Uint8Array[];

    /**
     * Creates a new CUserMessage_ExtraUserData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserMessage_ExtraUserData instance
     */
    public static create(properties?: ICUserMessage_ExtraUserData): CUserMessage_ExtraUserData;

    /**
     * Encodes the specified CUserMessage_ExtraUserData message. Does not implicitly {@link CUserMessage_ExtraUserData.verify|verify} messages.
     * @param message CUserMessage_ExtraUserData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserMessage_ExtraUserData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserMessage_ExtraUserData message, length delimited. Does not implicitly {@link CUserMessage_ExtraUserData.verify|verify} messages.
     * @param message CUserMessage_ExtraUserData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserMessage_ExtraUserData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserMessage_ExtraUserData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserMessage_ExtraUserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserMessage_ExtraUserData;

    /**
     * Decodes a CUserMessage_ExtraUserData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserMessage_ExtraUserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserMessage_ExtraUserData;

    /**
     * Verifies a CUserMessage_ExtraUserData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserMessage_ExtraUserData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserMessage_ExtraUserData
     */
    public static fromObject(object: { [k: string]: any }): CUserMessage_ExtraUserData;

    /**
     * Creates a plain object from a CUserMessage_ExtraUserData message. Also converts values to other types if specified.
     * @param message CUserMessage_ExtraUserData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserMessage_ExtraUserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserMessage_ExtraUserData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserMessage_ExtraUserData
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
