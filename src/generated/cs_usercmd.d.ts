import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CSGOInterpolationInfoPB. */
export interface ICSGOInterpolationInfoPB {

    /** CSGOInterpolationInfoPB srcTick */
    srcTick?: (number|null);

    /** CSGOInterpolationInfoPB dstTick */
    dstTick?: (number|null);

    /** CSGOInterpolationInfoPB frac */
    frac?: (number|null);
}

/** Represents a CSGOInterpolationInfoPB. */
export class CSGOInterpolationInfoPB implements ICSGOInterpolationInfoPB {

    /**
     * Constructs a new CSGOInterpolationInfoPB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSGOInterpolationInfoPB);

    /** CSGOInterpolationInfoPB srcTick. */
    public srcTick: number;

    /** CSGOInterpolationInfoPB dstTick. */
    public dstTick: number;

    /** CSGOInterpolationInfoPB frac. */
    public frac: number;

    /**
     * Creates a new CSGOInterpolationInfoPB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSGOInterpolationInfoPB instance
     */
    public static create(properties?: ICSGOInterpolationInfoPB): CSGOInterpolationInfoPB;

    /**
     * Encodes the specified CSGOInterpolationInfoPB message. Does not implicitly {@link CSGOInterpolationInfoPB.verify|verify} messages.
     * @param message CSGOInterpolationInfoPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSGOInterpolationInfoPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSGOInterpolationInfoPB message, length delimited. Does not implicitly {@link CSGOInterpolationInfoPB.verify|verify} messages.
     * @param message CSGOInterpolationInfoPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSGOInterpolationInfoPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSGOInterpolationInfoPB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSGOInterpolationInfoPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSGOInterpolationInfoPB;

    /**
     * Decodes a CSGOInterpolationInfoPB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSGOInterpolationInfoPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSGOInterpolationInfoPB;

    /**
     * Verifies a CSGOInterpolationInfoPB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSGOInterpolationInfoPB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSGOInterpolationInfoPB
     */
    public static fromObject(object: { [k: string]: any }): CSGOInterpolationInfoPB;

    /**
     * Creates a plain object from a CSGOInterpolationInfoPB message. Also converts values to other types if specified.
     * @param message CSGOInterpolationInfoPB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSGOInterpolationInfoPB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSGOInterpolationInfoPB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSGOInterpolationInfoPB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CSGOInputHistoryEntryPB. */
export interface ICSGOInputHistoryEntryPB {

    /** CSGOInputHistoryEntryPB viewAngles */
    viewAngles?: (ICMsgQAngle|null);

    /** CSGOInputHistoryEntryPB renderTickCount */
    renderTickCount?: (number|null);

    /** CSGOInputHistoryEntryPB renderTickFraction */
    renderTickFraction?: (number|null);

    /** CSGOInputHistoryEntryPB playerTickCount */
    playerTickCount?: (number|null);

    /** CSGOInputHistoryEntryPB playerTickFraction */
    playerTickFraction?: (number|null);

    /** CSGOInputHistoryEntryPB clInterp */
    clInterp?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB svInterp0 */
    svInterp0?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB svInterp1 */
    svInterp1?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB playerInterp */
    playerInterp?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB frameNumber */
    frameNumber?: (number|null);

    /** CSGOInputHistoryEntryPB targetEntIndex */
    targetEntIndex?: (number|null);

    /** CSGOInputHistoryEntryPB shootPosition */
    shootPosition?: (ICMsgVector|null);

    /** CSGOInputHistoryEntryPB targetHeadPosCheck */
    targetHeadPosCheck?: (ICMsgVector|null);

    /** CSGOInputHistoryEntryPB targetAbsPosCheck */
    targetAbsPosCheck?: (ICMsgVector|null);

    /** CSGOInputHistoryEntryPB targetAbsAngCheck */
    targetAbsAngCheck?: (ICMsgQAngle|null);
}

/** Represents a CSGOInputHistoryEntryPB. */
export class CSGOInputHistoryEntryPB implements ICSGOInputHistoryEntryPB {

    /**
     * Constructs a new CSGOInputHistoryEntryPB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSGOInputHistoryEntryPB);

    /** CSGOInputHistoryEntryPB viewAngles. */
    public viewAngles?: (ICMsgQAngle|null);

    /** CSGOInputHistoryEntryPB renderTickCount. */
    public renderTickCount: number;

    /** CSGOInputHistoryEntryPB renderTickFraction. */
    public renderTickFraction: number;

    /** CSGOInputHistoryEntryPB playerTickCount. */
    public playerTickCount: number;

    /** CSGOInputHistoryEntryPB playerTickFraction. */
    public playerTickFraction: number;

    /** CSGOInputHistoryEntryPB clInterp. */
    public clInterp?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB svInterp0. */
    public svInterp0?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB svInterp1. */
    public svInterp1?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB playerInterp. */
    public playerInterp?: (ICSGOInterpolationInfoPB|null);

    /** CSGOInputHistoryEntryPB frameNumber. */
    public frameNumber: number;

    /** CSGOInputHistoryEntryPB targetEntIndex. */
    public targetEntIndex: number;

    /** CSGOInputHistoryEntryPB shootPosition. */
    public shootPosition?: (ICMsgVector|null);

    /** CSGOInputHistoryEntryPB targetHeadPosCheck. */
    public targetHeadPosCheck?: (ICMsgVector|null);

    /** CSGOInputHistoryEntryPB targetAbsPosCheck. */
    public targetAbsPosCheck?: (ICMsgVector|null);

    /** CSGOInputHistoryEntryPB targetAbsAngCheck. */
    public targetAbsAngCheck?: (ICMsgQAngle|null);

    /**
     * Creates a new CSGOInputHistoryEntryPB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSGOInputHistoryEntryPB instance
     */
    public static create(properties?: ICSGOInputHistoryEntryPB): CSGOInputHistoryEntryPB;

    /**
     * Encodes the specified CSGOInputHistoryEntryPB message. Does not implicitly {@link CSGOInputHistoryEntryPB.verify|verify} messages.
     * @param message CSGOInputHistoryEntryPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSGOInputHistoryEntryPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSGOInputHistoryEntryPB message, length delimited. Does not implicitly {@link CSGOInputHistoryEntryPB.verify|verify} messages.
     * @param message CSGOInputHistoryEntryPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSGOInputHistoryEntryPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSGOInputHistoryEntryPB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSGOInputHistoryEntryPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSGOInputHistoryEntryPB;

    /**
     * Decodes a CSGOInputHistoryEntryPB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSGOInputHistoryEntryPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSGOInputHistoryEntryPB;

    /**
     * Verifies a CSGOInputHistoryEntryPB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSGOInputHistoryEntryPB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSGOInputHistoryEntryPB
     */
    public static fromObject(object: { [k: string]: any }): CSGOInputHistoryEntryPB;

    /**
     * Creates a plain object from a CSGOInputHistoryEntryPB message. Also converts values to other types if specified.
     * @param message CSGOInputHistoryEntryPB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSGOInputHistoryEntryPB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSGOInputHistoryEntryPB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSGOInputHistoryEntryPB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CSGOUserCmdPB. */
export interface ICSGOUserCmdPB {

    /** CSGOUserCmdPB base */
    base?: (ICBaseUserCmdPB|null);

    /** CSGOUserCmdPB inputHistory */
    inputHistory?: (ICSGOInputHistoryEntryPB[]|null);

    /** CSGOUserCmdPB attack1StartHistoryIndex */
    attack1StartHistoryIndex?: (number|null);

    /** CSGOUserCmdPB attack2StartHistoryIndex */
    attack2StartHistoryIndex?: (number|null);

    /** CSGOUserCmdPB attack3StartHistoryIndex */
    attack3StartHistoryIndex?: (number|null);

    /** CSGOUserCmdPB weaponDecision */
    weaponDecision?: (CSGOUserCmdPB.EWeaponDecision|null);

    /** CSGOUserCmdPB weaponDecisionWeapon */
    weaponDecisionWeapon?: (number|null);

    /** CSGOUserCmdPB targetGrenadeStrength */
    targetGrenadeStrength?: (CSGOUserCmdPB.EGrenadeStrength|null);
}

/** Represents a CSGOUserCmdPB. */
export class CSGOUserCmdPB implements ICSGOUserCmdPB {

    /**
     * Constructs a new CSGOUserCmdPB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSGOUserCmdPB);

    /** CSGOUserCmdPB base. */
    public base?: (ICBaseUserCmdPB|null);

    /** CSGOUserCmdPB inputHistory. */
    public inputHistory: ICSGOInputHistoryEntryPB[];

    /** CSGOUserCmdPB attack1StartHistoryIndex. */
    public attack1StartHistoryIndex: number;

    /** CSGOUserCmdPB attack2StartHistoryIndex. */
    public attack2StartHistoryIndex: number;

    /** CSGOUserCmdPB attack3StartHistoryIndex. */
    public attack3StartHistoryIndex: number;

    /** CSGOUserCmdPB weaponDecision. */
    public weaponDecision: CSGOUserCmdPB.EWeaponDecision;

    /** CSGOUserCmdPB weaponDecisionWeapon. */
    public weaponDecisionWeapon: number;

    /** CSGOUserCmdPB targetGrenadeStrength. */
    public targetGrenadeStrength: CSGOUserCmdPB.EGrenadeStrength;

    /**
     * Creates a new CSGOUserCmdPB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSGOUserCmdPB instance
     */
    public static create(properties?: ICSGOUserCmdPB): CSGOUserCmdPB;

    /**
     * Encodes the specified CSGOUserCmdPB message. Does not implicitly {@link CSGOUserCmdPB.verify|verify} messages.
     * @param message CSGOUserCmdPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSGOUserCmdPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSGOUserCmdPB message, length delimited. Does not implicitly {@link CSGOUserCmdPB.verify|verify} messages.
     * @param message CSGOUserCmdPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSGOUserCmdPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSGOUserCmdPB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSGOUserCmdPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSGOUserCmdPB;

    /**
     * Decodes a CSGOUserCmdPB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSGOUserCmdPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSGOUserCmdPB;

    /**
     * Verifies a CSGOUserCmdPB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSGOUserCmdPB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSGOUserCmdPB
     */
    public static fromObject(object: { [k: string]: any }): CSGOUserCmdPB;

    /**
     * Creates a plain object from a CSGOUserCmdPB message. Also converts values to other types if specified.
     * @param message CSGOUserCmdPB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSGOUserCmdPB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSGOUserCmdPB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSGOUserCmdPB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSGOUserCmdPB {

    /** EWeaponDecision enum. */
    enum EWeaponDecision {
        k_eNone = 0,
        k_ePrimaryAttack = 1,
        k_eSecondaryAttack = 2,
        k_eZoom = 3,
        k_eReload = 4,
        k_eGrenadeThrow = 5,
        k_eGrenadeHold = 6,
        k_eGrenadeHoldThenThrow = 7
    }

    /** EGrenadeStrength enum. */
    enum EGrenadeStrength {
        k_eLow = 0,
        k_eMid = 1,
        k_eHigh = 2
    }
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

/** Represents a CInButtonStatePB. */
export class CInButtonStatePB implements ICInButtonStatePB {

    /**
     * Constructs a new CInButtonStatePB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICInButtonStatePB);

    /** CInButtonStatePB buttonstate1. */
    public buttonstate1: (number|Long);

    /** CInButtonStatePB buttonstate2. */
    public buttonstate2: (number|Long);

    /** CInButtonStatePB buttonstate3. */
    public buttonstate3: (number|Long);

    /**
     * Creates a new CInButtonStatePB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CInButtonStatePB instance
     */
    public static create(properties?: ICInButtonStatePB): CInButtonStatePB;

    /**
     * Encodes the specified CInButtonStatePB message. Does not implicitly {@link CInButtonStatePB.verify|verify} messages.
     * @param message CInButtonStatePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICInButtonStatePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CInButtonStatePB message, length delimited. Does not implicitly {@link CInButtonStatePB.verify|verify} messages.
     * @param message CInButtonStatePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICInButtonStatePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CInButtonStatePB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CInButtonStatePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CInButtonStatePB;

    /**
     * Decodes a CInButtonStatePB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CInButtonStatePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CInButtonStatePB;

    /**
     * Verifies a CInButtonStatePB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CInButtonStatePB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CInButtonStatePB
     */
    public static fromObject(object: { [k: string]: any }): CInButtonStatePB;

    /**
     * Creates a plain object from a CInButtonStatePB message. Also converts values to other types if specified.
     * @param message CInButtonStatePB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CInButtonStatePB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CInButtonStatePB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CInButtonStatePB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSubtickMoveStep. */
export class CSubtickMoveStep implements ICSubtickMoveStep {

    /**
     * Constructs a new CSubtickMoveStep.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSubtickMoveStep);

    /** CSubtickMoveStep button. */
    public button: (number|Long);

    /** CSubtickMoveStep pressed. */
    public pressed: boolean;

    /** CSubtickMoveStep when. */
    public when: number;

    /**
     * Creates a new CSubtickMoveStep instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSubtickMoveStep instance
     */
    public static create(properties?: ICSubtickMoveStep): CSubtickMoveStep;

    /**
     * Encodes the specified CSubtickMoveStep message. Does not implicitly {@link CSubtickMoveStep.verify|verify} messages.
     * @param message CSubtickMoveStep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSubtickMoveStep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSubtickMoveStep message, length delimited. Does not implicitly {@link CSubtickMoveStep.verify|verify} messages.
     * @param message CSubtickMoveStep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSubtickMoveStep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSubtickMoveStep message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSubtickMoveStep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSubtickMoveStep;

    /**
     * Decodes a CSubtickMoveStep message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSubtickMoveStep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSubtickMoveStep;

    /**
     * Verifies a CSubtickMoveStep message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSubtickMoveStep message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSubtickMoveStep
     */
    public static fromObject(object: { [k: string]: any }): CSubtickMoveStep;

    /**
     * Creates a plain object from a CSubtickMoveStep message. Also converts values to other types if specified.
     * @param message CSubtickMoveStep
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSubtickMoveStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSubtickMoveStep to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSubtickMoveStep
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CBaseUserCmdPB. */
export class CBaseUserCmdPB implements ICBaseUserCmdPB {

    /**
     * Constructs a new CBaseUserCmdPB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICBaseUserCmdPB);

    /** CBaseUserCmdPB commandNumber. */
    public commandNumber: number;

    /** CBaseUserCmdPB tickCount. */
    public tickCount: number;

    /** CBaseUserCmdPB buttonsPb. */
    public buttonsPb?: (ICInButtonStatePB|null);

    /** CBaseUserCmdPB viewangles. */
    public viewangles?: (ICMsgQAngle|null);

    /** CBaseUserCmdPB forwardmove. */
    public forwardmove: number;

    /** CBaseUserCmdPB leftmove. */
    public leftmove: number;

    /** CBaseUserCmdPB upmove. */
    public upmove: number;

    /** CBaseUserCmdPB impulse. */
    public impulse: number;

    /** CBaseUserCmdPB weaponselect. */
    public weaponselect: number;

    /** CBaseUserCmdPB randomSeed. */
    public randomSeed: number;

    /** CBaseUserCmdPB mousedx. */
    public mousedx: number;

    /** CBaseUserCmdPB mousedy. */
    public mousedy: number;

    /** CBaseUserCmdPB pawnEntityHandle. */
    public pawnEntityHandle: number;

    /** CBaseUserCmdPB subtickMoves. */
    public subtickMoves: ICSubtickMoveStep[];

    /** CBaseUserCmdPB moveCrc. */
    public moveCrc: Uint8Array;

    /** CBaseUserCmdPB consumedServerAngleChanges. */
    public consumedServerAngleChanges: number;

    /** CBaseUserCmdPB cmdFlags. */
    public cmdFlags: number;

    /**
     * Creates a new CBaseUserCmdPB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CBaseUserCmdPB instance
     */
    public static create(properties?: ICBaseUserCmdPB): CBaseUserCmdPB;

    /**
     * Encodes the specified CBaseUserCmdPB message. Does not implicitly {@link CBaseUserCmdPB.verify|verify} messages.
     * @param message CBaseUserCmdPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICBaseUserCmdPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CBaseUserCmdPB message, length delimited. Does not implicitly {@link CBaseUserCmdPB.verify|verify} messages.
     * @param message CBaseUserCmdPB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICBaseUserCmdPB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CBaseUserCmdPB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CBaseUserCmdPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CBaseUserCmdPB;

    /**
     * Decodes a CBaseUserCmdPB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CBaseUserCmdPB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CBaseUserCmdPB;

    /**
     * Verifies a CBaseUserCmdPB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CBaseUserCmdPB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CBaseUserCmdPB
     */
    public static fromObject(object: { [k: string]: any }): CBaseUserCmdPB;

    /**
     * Creates a plain object from a CBaseUserCmdPB message. Also converts values to other types if specified.
     * @param message CBaseUserCmdPB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CBaseUserCmdPB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CBaseUserCmdPB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CBaseUserCmdPB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CUserCmdBasePB. */
export class CUserCmdBasePB implements ICUserCmdBasePB {

    /**
     * Constructs a new CUserCmdBasePB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUserCmdBasePB);

    /** CUserCmdBasePB base. */
    public base?: (ICBaseUserCmdPB|null);

    /**
     * Creates a new CUserCmdBasePB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUserCmdBasePB instance
     */
    public static create(properties?: ICUserCmdBasePB): CUserCmdBasePB;

    /**
     * Encodes the specified CUserCmdBasePB message. Does not implicitly {@link CUserCmdBasePB.verify|verify} messages.
     * @param message CUserCmdBasePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUserCmdBasePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUserCmdBasePB message, length delimited. Does not implicitly {@link CUserCmdBasePB.verify|verify} messages.
     * @param message CUserCmdBasePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUserCmdBasePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUserCmdBasePB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUserCmdBasePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUserCmdBasePB;

    /**
     * Decodes a CUserCmdBasePB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUserCmdBasePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUserCmdBasePB;

    /**
     * Verifies a CUserCmdBasePB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUserCmdBasePB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUserCmdBasePB
     */
    public static fromObject(object: { [k: string]: any }): CUserCmdBasePB;

    /**
     * Creates a plain object from a CUserCmdBasePB message. Also converts values to other types if specified.
     * @param message CUserCmdBasePB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUserCmdBasePB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUserCmdBasePB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUserCmdBasePB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
