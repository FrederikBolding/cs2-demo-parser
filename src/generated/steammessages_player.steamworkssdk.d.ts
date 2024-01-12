import * as $protobuf from "protobufjs";
import Long = require("long");
/** ENotificationSetting enum. */
export enum ENotificationSetting {
    k_ENotificationSettingNotifyUseDefault = 0,
    k_ENotificationSettingAlways = 1,
    k_ENotificationSettingNever = 2
}

/** Represents a CPlayer_GetMutualFriendsForIncomingInvites_Request. */
export class CPlayer_GetMutualFriendsForIncomingInvites_Request implements ICPlayer_GetMutualFriendsForIncomingInvites_Request {

    /**
     * Constructs a new CPlayer_GetMutualFriendsForIncomingInvites_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetMutualFriendsForIncomingInvites_Request);

    /**
     * Creates a new CPlayer_GetMutualFriendsForIncomingInvites_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Request instance
     */
    public static create(properties?: ICPlayer_GetMutualFriendsForIncomingInvites_Request): CPlayer_GetMutualFriendsForIncomingInvites_Request;

    /**
     * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Request message. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Request.verify|verify} messages.
     * @param message CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetMutualFriendsForIncomingInvites_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Request message, length delimited. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Request.verify|verify} messages.
     * @param message CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetMutualFriendsForIncomingInvites_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetMutualFriendsForIncomingInvites_Request;

    /**
     * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetMutualFriendsForIncomingInvites_Request;

    /**
     * Verifies a CPlayer_GetMutualFriendsForIncomingInvites_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetMutualFriendsForIncomingInvites_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetMutualFriendsForIncomingInvites_Request;

    /**
     * Creates a plain object from a CPlayer_GetMutualFriendsForIncomingInvites_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetMutualFriendsForIncomingInvites_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetMutualFriendsForIncomingInvites_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetMutualFriendsForIncomingInvites_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetMutualFriendsForIncomingInvites_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_IncomingInviteMutualFriendList. */
export class CPlayer_IncomingInviteMutualFriendList implements ICPlayer_IncomingInviteMutualFriendList {

    /**
     * Constructs a new CPlayer_IncomingInviteMutualFriendList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_IncomingInviteMutualFriendList);

    /** CPlayer_IncomingInviteMutualFriendList steamid. */
    public steamid: (number|Long);

    /** CPlayer_IncomingInviteMutualFriendList mutualFriendAccountIds. */
    public mutualFriendAccountIds: number[];

    /**
     * Creates a new CPlayer_IncomingInviteMutualFriendList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_IncomingInviteMutualFriendList instance
     */
    public static create(properties?: ICPlayer_IncomingInviteMutualFriendList): CPlayer_IncomingInviteMutualFriendList;

    /**
     * Encodes the specified CPlayer_IncomingInviteMutualFriendList message. Does not implicitly {@link CPlayer_IncomingInviteMutualFriendList.verify|verify} messages.
     * @param message CPlayer_IncomingInviteMutualFriendList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_IncomingInviteMutualFriendList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_IncomingInviteMutualFriendList message, length delimited. Does not implicitly {@link CPlayer_IncomingInviteMutualFriendList.verify|verify} messages.
     * @param message CPlayer_IncomingInviteMutualFriendList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_IncomingInviteMutualFriendList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_IncomingInviteMutualFriendList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_IncomingInviteMutualFriendList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_IncomingInviteMutualFriendList;

    /**
     * Decodes a CPlayer_IncomingInviteMutualFriendList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_IncomingInviteMutualFriendList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_IncomingInviteMutualFriendList;

    /**
     * Verifies a CPlayer_IncomingInviteMutualFriendList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_IncomingInviteMutualFriendList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_IncomingInviteMutualFriendList
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_IncomingInviteMutualFriendList;

    /**
     * Creates a plain object from a CPlayer_IncomingInviteMutualFriendList message. Also converts values to other types if specified.
     * @param message CPlayer_IncomingInviteMutualFriendList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_IncomingInviteMutualFriendList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_IncomingInviteMutualFriendList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_IncomingInviteMutualFriendList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetMutualFriendsForIncomingInvites_Response. */
export class CPlayer_GetMutualFriendsForIncomingInvites_Response implements ICPlayer_GetMutualFriendsForIncomingInvites_Response {

    /**
     * Constructs a new CPlayer_GetMutualFriendsForIncomingInvites_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetMutualFriendsForIncomingInvites_Response);

    /** CPlayer_GetMutualFriendsForIncomingInvites_Response incomingInviteMutualFriendsLists. */
    public incomingInviteMutualFriendsLists: ICPlayer_IncomingInviteMutualFriendList[];

    /**
     * Creates a new CPlayer_GetMutualFriendsForIncomingInvites_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Response instance
     */
    public static create(properties?: ICPlayer_GetMutualFriendsForIncomingInvites_Response): CPlayer_GetMutualFriendsForIncomingInvites_Response;

    /**
     * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Response message. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Response.verify|verify} messages.
     * @param message CPlayer_GetMutualFriendsForIncomingInvites_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetMutualFriendsForIncomingInvites_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Response message, length delimited. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Response.verify|verify} messages.
     * @param message CPlayer_GetMutualFriendsForIncomingInvites_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetMutualFriendsForIncomingInvites_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetMutualFriendsForIncomingInvites_Response;

    /**
     * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetMutualFriendsForIncomingInvites_Response;

    /**
     * Verifies a CPlayer_GetMutualFriendsForIncomingInvites_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetMutualFriendsForIncomingInvites_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetMutualFriendsForIncomingInvites_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetMutualFriendsForIncomingInvites_Response;

    /**
     * Creates a plain object from a CPlayer_GetMutualFriendsForIncomingInvites_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetMutualFriendsForIncomingInvites_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetMutualFriendsForIncomingInvites_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetMutualFriendsForIncomingInvites_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetMutualFriendsForIncomingInvites_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetFriendsGameplayInfo_Request. */
export class CPlayer_GetFriendsGameplayInfo_Request implements ICPlayer_GetFriendsGameplayInfo_Request {

    /**
     * Constructs a new CPlayer_GetFriendsGameplayInfo_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetFriendsGameplayInfo_Request);

    /** CPlayer_GetFriendsGameplayInfo_Request appid. */
    public appid: number;

    /**
     * Creates a new CPlayer_GetFriendsGameplayInfo_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetFriendsGameplayInfo_Request instance
     */
    public static create(properties?: ICPlayer_GetFriendsGameplayInfo_Request): CPlayer_GetFriendsGameplayInfo_Request;

    /**
     * Encodes the specified CPlayer_GetFriendsGameplayInfo_Request message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Request.verify|verify} messages.
     * @param message CPlayer_GetFriendsGameplayInfo_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetFriendsGameplayInfo_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetFriendsGameplayInfo_Request message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Request.verify|verify} messages.
     * @param message CPlayer_GetFriendsGameplayInfo_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetFriendsGameplayInfo_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetFriendsGameplayInfo_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetFriendsGameplayInfo_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetFriendsGameplayInfo_Request;

    /**
     * Decodes a CPlayer_GetFriendsGameplayInfo_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetFriendsGameplayInfo_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetFriendsGameplayInfo_Request;

    /**
     * Verifies a CPlayer_GetFriendsGameplayInfo_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetFriendsGameplayInfo_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetFriendsGameplayInfo_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetFriendsGameplayInfo_Request;

    /**
     * Creates a plain object from a CPlayer_GetFriendsGameplayInfo_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetFriendsGameplayInfo_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetFriendsGameplayInfo_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetFriendsGameplayInfo_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetFriendsGameplayInfo_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetFriendsGameplayInfo_Response. */
export class CPlayer_GetFriendsGameplayInfo_Response implements ICPlayer_GetFriendsGameplayInfo_Response {

    /**
     * Constructs a new CPlayer_GetFriendsGameplayInfo_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetFriendsGameplayInfo_Response);

    /** CPlayer_GetFriendsGameplayInfo_Response yourInfo. */
    public yourInfo?: (CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo|null);

    /** CPlayer_GetFriendsGameplayInfo_Response inGame. */
    public inGame: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo[];

    /** CPlayer_GetFriendsGameplayInfo_Response playedRecently. */
    public playedRecently: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo[];

    /** CPlayer_GetFriendsGameplayInfo_Response playedEver. */
    public playedEver: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo[];

    /** CPlayer_GetFriendsGameplayInfo_Response owns. */
    public owns: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo[];

    /** CPlayer_GetFriendsGameplayInfo_Response inWishlist. */
    public inWishlist: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo[];

    /**
     * Creates a new CPlayer_GetFriendsGameplayInfo_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetFriendsGameplayInfo_Response instance
     */
    public static create(properties?: ICPlayer_GetFriendsGameplayInfo_Response): CPlayer_GetFriendsGameplayInfo_Response;

    /**
     * Encodes the specified CPlayer_GetFriendsGameplayInfo_Response message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.verify|verify} messages.
     * @param message CPlayer_GetFriendsGameplayInfo_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetFriendsGameplayInfo_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetFriendsGameplayInfo_Response message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.verify|verify} messages.
     * @param message CPlayer_GetFriendsGameplayInfo_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetFriendsGameplayInfo_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetFriendsGameplayInfo_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetFriendsGameplayInfo_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetFriendsGameplayInfo_Response;

    /**
     * Decodes a CPlayer_GetFriendsGameplayInfo_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetFriendsGameplayInfo_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetFriendsGameplayInfo_Response;

    /**
     * Verifies a CPlayer_GetFriendsGameplayInfo_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetFriendsGameplayInfo_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetFriendsGameplayInfo_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetFriendsGameplayInfo_Response;

    /**
     * Creates a plain object from a CPlayer_GetFriendsGameplayInfo_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetFriendsGameplayInfo_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetFriendsGameplayInfo_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetFriendsGameplayInfo_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetFriendsGameplayInfo_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CPlayer_GetFriendsGameplayInfo_Response {

    /** Properties of a FriendsGameplayInfo. */
    interface IFriendsGameplayInfo {

        /** FriendsGameplayInfo steamid */
        steamid?: (number|Long|null);

        /** FriendsGameplayInfo minutesPlayed */
        minutesPlayed?: (number|null);

        /** FriendsGameplayInfo minutesPlayedForever */
        minutesPlayedForever?: (number|null);
    }

    /** Represents a FriendsGameplayInfo. */
    class FriendsGameplayInfo implements IFriendsGameplayInfo {

        /**
         * Constructs a new FriendsGameplayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo);

        /** FriendsGameplayInfo steamid. */
        public steamid: (number|Long);

        /** FriendsGameplayInfo minutesPlayed. */
        public minutesPlayed: number;

        /** FriendsGameplayInfo minutesPlayedForever. */
        public minutesPlayedForever: number;

        /**
         * Creates a new FriendsGameplayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendsGameplayInfo instance
         */
        public static create(properties?: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo): CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo;

        /**
         * Encodes the specified FriendsGameplayInfo message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify|verify} messages.
         * @param message FriendsGameplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendsGameplayInfo message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify|verify} messages.
         * @param message FriendsGameplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendsGameplayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendsGameplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo;

        /**
         * Decodes a FriendsGameplayInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendsGameplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo;

        /**
         * Verifies a FriendsGameplayInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendsGameplayInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendsGameplayInfo
         */
        public static fromObject(object: { [k: string]: any }): CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo;

        /**
         * Creates a plain object from a FriendsGameplayInfo message. Also converts values to other types if specified.
         * @param message FriendsGameplayInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendsGameplayInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FriendsGameplayInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OwnGameplayInfo. */
    interface IOwnGameplayInfo {

        /** OwnGameplayInfo steamid */
        steamid?: (number|Long|null);

        /** OwnGameplayInfo minutesPlayed */
        minutesPlayed?: (number|null);

        /** OwnGameplayInfo minutesPlayedForever */
        minutesPlayedForever?: (number|null);

        /** OwnGameplayInfo inWishlist */
        inWishlist?: (boolean|null);

        /** OwnGameplayInfo owned */
        owned?: (boolean|null);
    }

    /** Represents an OwnGameplayInfo. */
    class OwnGameplayInfo implements IOwnGameplayInfo {

        /**
         * Constructs a new OwnGameplayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo);

        /** OwnGameplayInfo steamid. */
        public steamid: (number|Long);

        /** OwnGameplayInfo minutesPlayed. */
        public minutesPlayed: number;

        /** OwnGameplayInfo minutesPlayedForever. */
        public minutesPlayedForever: number;

        /** OwnGameplayInfo inWishlist. */
        public inWishlist: boolean;

        /** OwnGameplayInfo owned. */
        public owned: boolean;

        /**
         * Creates a new OwnGameplayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OwnGameplayInfo instance
         */
        public static create(properties?: CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo): CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo;

        /**
         * Encodes the specified OwnGameplayInfo message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify|verify} messages.
         * @param message OwnGameplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OwnGameplayInfo message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify|verify} messages.
         * @param message OwnGameplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OwnGameplayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OwnGameplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo;

        /**
         * Decodes an OwnGameplayInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OwnGameplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo;

        /**
         * Verifies an OwnGameplayInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OwnGameplayInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OwnGameplayInfo
         */
        public static fromObject(object: { [k: string]: any }): CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo;

        /**
         * Creates a plain object from an OwnGameplayInfo message. Also converts values to other types if specified.
         * @param message OwnGameplayInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OwnGameplayInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OwnGameplayInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CPlayer_GetGameBadgeLevels_Request. */
export class CPlayer_GetGameBadgeLevels_Request implements ICPlayer_GetGameBadgeLevels_Request {

    /**
     * Constructs a new CPlayer_GetGameBadgeLevels_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetGameBadgeLevels_Request);

    /** CPlayer_GetGameBadgeLevels_Request appid. */
    public appid: number;

    /**
     * Creates a new CPlayer_GetGameBadgeLevels_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetGameBadgeLevels_Request instance
     */
    public static create(properties?: ICPlayer_GetGameBadgeLevels_Request): CPlayer_GetGameBadgeLevels_Request;

    /**
     * Encodes the specified CPlayer_GetGameBadgeLevels_Request message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Request.verify|verify} messages.
     * @param message CPlayer_GetGameBadgeLevels_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetGameBadgeLevels_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetGameBadgeLevels_Request message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Request.verify|verify} messages.
     * @param message CPlayer_GetGameBadgeLevels_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetGameBadgeLevels_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetGameBadgeLevels_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetGameBadgeLevels_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetGameBadgeLevels_Request;

    /**
     * Decodes a CPlayer_GetGameBadgeLevels_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetGameBadgeLevels_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetGameBadgeLevels_Request;

    /**
     * Verifies a CPlayer_GetGameBadgeLevels_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetGameBadgeLevels_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetGameBadgeLevels_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetGameBadgeLevels_Request;

    /**
     * Creates a plain object from a CPlayer_GetGameBadgeLevels_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetGameBadgeLevels_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetGameBadgeLevels_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetGameBadgeLevels_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetGameBadgeLevels_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetGameBadgeLevels_Response. */
export class CPlayer_GetGameBadgeLevels_Response implements ICPlayer_GetGameBadgeLevels_Response {

    /**
     * Constructs a new CPlayer_GetGameBadgeLevels_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetGameBadgeLevels_Response);

    /** CPlayer_GetGameBadgeLevels_Response playerLevel. */
    public playerLevel: number;

    /** CPlayer_GetGameBadgeLevels_Response badges. */
    public badges: CPlayer_GetGameBadgeLevels_Response.IBadge[];

    /**
     * Creates a new CPlayer_GetGameBadgeLevels_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetGameBadgeLevels_Response instance
     */
    public static create(properties?: ICPlayer_GetGameBadgeLevels_Response): CPlayer_GetGameBadgeLevels_Response;

    /**
     * Encodes the specified CPlayer_GetGameBadgeLevels_Response message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.verify|verify} messages.
     * @param message CPlayer_GetGameBadgeLevels_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetGameBadgeLevels_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetGameBadgeLevels_Response message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.verify|verify} messages.
     * @param message CPlayer_GetGameBadgeLevels_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetGameBadgeLevels_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetGameBadgeLevels_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetGameBadgeLevels_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetGameBadgeLevels_Response;

    /**
     * Decodes a CPlayer_GetGameBadgeLevels_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetGameBadgeLevels_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetGameBadgeLevels_Response;

    /**
     * Verifies a CPlayer_GetGameBadgeLevels_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetGameBadgeLevels_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetGameBadgeLevels_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetGameBadgeLevels_Response;

    /**
     * Creates a plain object from a CPlayer_GetGameBadgeLevels_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetGameBadgeLevels_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetGameBadgeLevels_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetGameBadgeLevels_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetGameBadgeLevels_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CPlayer_GetGameBadgeLevels_Response {

    /** Properties of a Badge. */
    interface IBadge {

        /** Badge level */
        level?: (number|null);

        /** Badge series */
        series?: (number|null);

        /** Badge borderColor */
        borderColor?: (number|null);
    }

    /** Represents a Badge. */
    class Badge implements IBadge {

        /**
         * Constructs a new Badge.
         * @param [properties] Properties to set
         */
        constructor(properties?: CPlayer_GetGameBadgeLevels_Response.IBadge);

        /** Badge level. */
        public level: number;

        /** Badge series. */
        public series: number;

        /** Badge borderColor. */
        public borderColor: number;

        /**
         * Creates a new Badge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Badge instance
         */
        public static create(properties?: CPlayer_GetGameBadgeLevels_Response.IBadge): CPlayer_GetGameBadgeLevels_Response.Badge;

        /**
         * Encodes the specified Badge message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.Badge.verify|verify} messages.
         * @param message Badge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CPlayer_GetGameBadgeLevels_Response.IBadge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Badge message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.Badge.verify|verify} messages.
         * @param message Badge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CPlayer_GetGameBadgeLevels_Response.IBadge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Badge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Badge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetGameBadgeLevels_Response.Badge;

        /**
         * Decodes a Badge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Badge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetGameBadgeLevels_Response.Badge;

        /**
         * Verifies a Badge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Badge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Badge
         */
        public static fromObject(object: { [k: string]: any }): CPlayer_GetGameBadgeLevels_Response.Badge;

        /**
         * Creates a plain object from a Badge message. Also converts values to other types if specified.
         * @param message Badge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CPlayer_GetGameBadgeLevels_Response.Badge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Badge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Badge
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CPlayer_GetLastPlayedTimes_Request. */
export class CPlayer_GetLastPlayedTimes_Request implements ICPlayer_GetLastPlayedTimes_Request {

    /**
     * Constructs a new CPlayer_GetLastPlayedTimes_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetLastPlayedTimes_Request);

    /** CPlayer_GetLastPlayedTimes_Request minLastPlayed. */
    public minLastPlayed: number;

    /**
     * Creates a new CPlayer_GetLastPlayedTimes_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetLastPlayedTimes_Request instance
     */
    public static create(properties?: ICPlayer_GetLastPlayedTimes_Request): CPlayer_GetLastPlayedTimes_Request;

    /**
     * Encodes the specified CPlayer_GetLastPlayedTimes_Request message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Request.verify|verify} messages.
     * @param message CPlayer_GetLastPlayedTimes_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetLastPlayedTimes_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetLastPlayedTimes_Request message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Request.verify|verify} messages.
     * @param message CPlayer_GetLastPlayedTimes_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetLastPlayedTimes_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetLastPlayedTimes_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetLastPlayedTimes_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetLastPlayedTimes_Request;

    /**
     * Decodes a CPlayer_GetLastPlayedTimes_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetLastPlayedTimes_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetLastPlayedTimes_Request;

    /**
     * Verifies a CPlayer_GetLastPlayedTimes_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetLastPlayedTimes_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetLastPlayedTimes_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetLastPlayedTimes_Request;

    /**
     * Creates a plain object from a CPlayer_GetLastPlayedTimes_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetLastPlayedTimes_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetLastPlayedTimes_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetLastPlayedTimes_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetLastPlayedTimes_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetLastPlayedTimes_Response. */
export class CPlayer_GetLastPlayedTimes_Response implements ICPlayer_GetLastPlayedTimes_Response {

    /**
     * Constructs a new CPlayer_GetLastPlayedTimes_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetLastPlayedTimes_Response);

    /** CPlayer_GetLastPlayedTimes_Response games. */
    public games: CPlayer_GetLastPlayedTimes_Response.IGame[];

    /**
     * Creates a new CPlayer_GetLastPlayedTimes_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetLastPlayedTimes_Response instance
     */
    public static create(properties?: ICPlayer_GetLastPlayedTimes_Response): CPlayer_GetLastPlayedTimes_Response;

    /**
     * Encodes the specified CPlayer_GetLastPlayedTimes_Response message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.verify|verify} messages.
     * @param message CPlayer_GetLastPlayedTimes_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetLastPlayedTimes_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetLastPlayedTimes_Response message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.verify|verify} messages.
     * @param message CPlayer_GetLastPlayedTimes_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetLastPlayedTimes_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetLastPlayedTimes_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetLastPlayedTimes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetLastPlayedTimes_Response;

    /**
     * Decodes a CPlayer_GetLastPlayedTimes_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetLastPlayedTimes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetLastPlayedTimes_Response;

    /**
     * Verifies a CPlayer_GetLastPlayedTimes_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetLastPlayedTimes_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetLastPlayedTimes_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetLastPlayedTimes_Response;

    /**
     * Creates a plain object from a CPlayer_GetLastPlayedTimes_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetLastPlayedTimes_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetLastPlayedTimes_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetLastPlayedTimes_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetLastPlayedTimes_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CPlayer_GetLastPlayedTimes_Response {

    /** Properties of a Game. */
    interface IGame {

        /** Game appid */
        appid?: (number|null);

        /** Game lastPlaytime */
        lastPlaytime?: (number|null);

        /** Game playtime_2weeks */
        playtime_2weeks?: (number|null);

        /** Game playtimeForever */
        playtimeForever?: (number|null);

        /** Game firstPlaytime */
        firstPlaytime?: (number|null);
    }

    /** Represents a Game. */
    class Game implements IGame {

        /**
         * Constructs a new Game.
         * @param [properties] Properties to set
         */
        constructor(properties?: CPlayer_GetLastPlayedTimes_Response.IGame);

        /** Game appid. */
        public appid: number;

        /** Game lastPlaytime. */
        public lastPlaytime: number;

        /** Game playtime_2weeks. */
        public playtime_2weeks: number;

        /** Game playtimeForever. */
        public playtimeForever: number;

        /** Game firstPlaytime. */
        public firstPlaytime: number;

        /**
         * Creates a new Game instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Game instance
         */
        public static create(properties?: CPlayer_GetLastPlayedTimes_Response.IGame): CPlayer_GetLastPlayedTimes_Response.Game;

        /**
         * Encodes the specified Game message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CPlayer_GetLastPlayedTimes_Response.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CPlayer_GetLastPlayedTimes_Response.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetLastPlayedTimes_Response.Game;

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetLastPlayedTimes_Response.Game;

        /**
         * Verifies a Game message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Game
         */
        public static fromObject(object: { [k: string]: any }): CPlayer_GetLastPlayedTimes_Response.Game;

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @param message Game
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CPlayer_GetLastPlayedTimes_Response.Game, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Game to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Game
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CPlayer_AcceptSSA_Request. */
export class CPlayer_AcceptSSA_Request implements ICPlayer_AcceptSSA_Request {

    /**
     * Constructs a new CPlayer_AcceptSSA_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_AcceptSSA_Request);

    /**
     * Creates a new CPlayer_AcceptSSA_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_AcceptSSA_Request instance
     */
    public static create(properties?: ICPlayer_AcceptSSA_Request): CPlayer_AcceptSSA_Request;

    /**
     * Encodes the specified CPlayer_AcceptSSA_Request message. Does not implicitly {@link CPlayer_AcceptSSA_Request.verify|verify} messages.
     * @param message CPlayer_AcceptSSA_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_AcceptSSA_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_AcceptSSA_Request message, length delimited. Does not implicitly {@link CPlayer_AcceptSSA_Request.verify|verify} messages.
     * @param message CPlayer_AcceptSSA_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_AcceptSSA_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_AcceptSSA_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_AcceptSSA_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_AcceptSSA_Request;

    /**
     * Decodes a CPlayer_AcceptSSA_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_AcceptSSA_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_AcceptSSA_Request;

    /**
     * Verifies a CPlayer_AcceptSSA_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_AcceptSSA_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_AcceptSSA_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_AcceptSSA_Request;

    /**
     * Creates a plain object from a CPlayer_AcceptSSA_Request message. Also converts values to other types if specified.
     * @param message CPlayer_AcceptSSA_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_AcceptSSA_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_AcceptSSA_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_AcceptSSA_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_AcceptSSA_Response. */
export class CPlayer_AcceptSSA_Response implements ICPlayer_AcceptSSA_Response {

    /**
     * Constructs a new CPlayer_AcceptSSA_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_AcceptSSA_Response);

    /**
     * Creates a new CPlayer_AcceptSSA_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_AcceptSSA_Response instance
     */
    public static create(properties?: ICPlayer_AcceptSSA_Response): CPlayer_AcceptSSA_Response;

    /**
     * Encodes the specified CPlayer_AcceptSSA_Response message. Does not implicitly {@link CPlayer_AcceptSSA_Response.verify|verify} messages.
     * @param message CPlayer_AcceptSSA_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_AcceptSSA_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_AcceptSSA_Response message, length delimited. Does not implicitly {@link CPlayer_AcceptSSA_Response.verify|verify} messages.
     * @param message CPlayer_AcceptSSA_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_AcceptSSA_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_AcceptSSA_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_AcceptSSA_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_AcceptSSA_Response;

    /**
     * Decodes a CPlayer_AcceptSSA_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_AcceptSSA_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_AcceptSSA_Response;

    /**
     * Verifies a CPlayer_AcceptSSA_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_AcceptSSA_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_AcceptSSA_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_AcceptSSA_Response;

    /**
     * Creates a plain object from a CPlayer_AcceptSSA_Response message. Also converts values to other types if specified.
     * @param message CPlayer_AcceptSSA_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_AcceptSSA_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_AcceptSSA_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_AcceptSSA_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetNicknameList_Request. */
export class CPlayer_GetNicknameList_Request implements ICPlayer_GetNicknameList_Request {

    /**
     * Constructs a new CPlayer_GetNicknameList_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetNicknameList_Request);

    /**
     * Creates a new CPlayer_GetNicknameList_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetNicknameList_Request instance
     */
    public static create(properties?: ICPlayer_GetNicknameList_Request): CPlayer_GetNicknameList_Request;

    /**
     * Encodes the specified CPlayer_GetNicknameList_Request message. Does not implicitly {@link CPlayer_GetNicknameList_Request.verify|verify} messages.
     * @param message CPlayer_GetNicknameList_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetNicknameList_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetNicknameList_Request message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Request.verify|verify} messages.
     * @param message CPlayer_GetNicknameList_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetNicknameList_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetNicknameList_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetNicknameList_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetNicknameList_Request;

    /**
     * Decodes a CPlayer_GetNicknameList_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetNicknameList_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetNicknameList_Request;

    /**
     * Verifies a CPlayer_GetNicknameList_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetNicknameList_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetNicknameList_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetNicknameList_Request;

    /**
     * Creates a plain object from a CPlayer_GetNicknameList_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetNicknameList_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetNicknameList_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetNicknameList_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetNicknameList_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetNicknameList_Response. */
export class CPlayer_GetNicknameList_Response implements ICPlayer_GetNicknameList_Response {

    /**
     * Constructs a new CPlayer_GetNicknameList_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetNicknameList_Response);

    /** CPlayer_GetNicknameList_Response nicknames. */
    public nicknames: CPlayer_GetNicknameList_Response.IPlayerNickname[];

    /**
     * Creates a new CPlayer_GetNicknameList_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetNicknameList_Response instance
     */
    public static create(properties?: ICPlayer_GetNicknameList_Response): CPlayer_GetNicknameList_Response;

    /**
     * Encodes the specified CPlayer_GetNicknameList_Response message. Does not implicitly {@link CPlayer_GetNicknameList_Response.verify|verify} messages.
     * @param message CPlayer_GetNicknameList_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetNicknameList_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetNicknameList_Response message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Response.verify|verify} messages.
     * @param message CPlayer_GetNicknameList_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetNicknameList_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetNicknameList_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetNicknameList_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetNicknameList_Response;

    /**
     * Decodes a CPlayer_GetNicknameList_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetNicknameList_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetNicknameList_Response;

    /**
     * Verifies a CPlayer_GetNicknameList_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetNicknameList_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetNicknameList_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetNicknameList_Response;

    /**
     * Creates a plain object from a CPlayer_GetNicknameList_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetNicknameList_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetNicknameList_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetNicknameList_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetNicknameList_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CPlayer_GetNicknameList_Response {

    /** Properties of a PlayerNickname. */
    interface IPlayerNickname {

        /** PlayerNickname accountid */
        accountid?: (number|null);

        /** PlayerNickname nickname */
        nickname?: (string|null);
    }

    /** Represents a PlayerNickname. */
    class PlayerNickname implements IPlayerNickname {

        /**
         * Constructs a new PlayerNickname.
         * @param [properties] Properties to set
         */
        constructor(properties?: CPlayer_GetNicknameList_Response.IPlayerNickname);

        /** PlayerNickname accountid. */
        public accountid: number;

        /** PlayerNickname nickname. */
        public nickname: string;

        /**
         * Creates a new PlayerNickname instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerNickname instance
         */
        public static create(properties?: CPlayer_GetNicknameList_Response.IPlayerNickname): CPlayer_GetNicknameList_Response.PlayerNickname;

        /**
         * Encodes the specified PlayerNickname message. Does not implicitly {@link CPlayer_GetNicknameList_Response.PlayerNickname.verify|verify} messages.
         * @param message PlayerNickname message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CPlayer_GetNicknameList_Response.IPlayerNickname, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerNickname message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Response.PlayerNickname.verify|verify} messages.
         * @param message PlayerNickname message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CPlayer_GetNicknameList_Response.IPlayerNickname, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerNickname message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerNickname
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetNicknameList_Response.PlayerNickname;

        /**
         * Decodes a PlayerNickname message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerNickname
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetNicknameList_Response.PlayerNickname;

        /**
         * Verifies a PlayerNickname message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerNickname message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerNickname
         */
        public static fromObject(object: { [k: string]: any }): CPlayer_GetNicknameList_Response.PlayerNickname;

        /**
         * Creates a plain object from a PlayerNickname message. Also converts values to other types if specified.
         * @param message PlayerNickname
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CPlayer_GetNicknameList_Response.PlayerNickname, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerNickname to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerNickname
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CPlayer_GetPerFriendPreferences_Request. */
export class CPlayer_GetPerFriendPreferences_Request implements ICPlayer_GetPerFriendPreferences_Request {

    /**
     * Constructs a new CPlayer_GetPerFriendPreferences_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetPerFriendPreferences_Request);

    /**
     * Creates a new CPlayer_GetPerFriendPreferences_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetPerFriendPreferences_Request instance
     */
    public static create(properties?: ICPlayer_GetPerFriendPreferences_Request): CPlayer_GetPerFriendPreferences_Request;

    /**
     * Encodes the specified CPlayer_GetPerFriendPreferences_Request message. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Request.verify|verify} messages.
     * @param message CPlayer_GetPerFriendPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetPerFriendPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetPerFriendPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Request.verify|verify} messages.
     * @param message CPlayer_GetPerFriendPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetPerFriendPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetPerFriendPreferences_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetPerFriendPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetPerFriendPreferences_Request;

    /**
     * Decodes a CPlayer_GetPerFriendPreferences_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetPerFriendPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetPerFriendPreferences_Request;

    /**
     * Verifies a CPlayer_GetPerFriendPreferences_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetPerFriendPreferences_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetPerFriendPreferences_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetPerFriendPreferences_Request;

    /**
     * Creates a plain object from a CPlayer_GetPerFriendPreferences_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetPerFriendPreferences_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetPerFriendPreferences_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetPerFriendPreferences_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetPerFriendPreferences_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PerFriendPreferences. */
export class PerFriendPreferences implements IPerFriendPreferences {

    /**
     * Constructs a new PerFriendPreferences.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPerFriendPreferences);

    /** PerFriendPreferences accountid. */
    public accountid: number;

    /** PerFriendPreferences nickname. */
    public nickname: string;

    /** PerFriendPreferences notificationsShowingame. */
    public notificationsShowingame: ENotificationSetting;

    /** PerFriendPreferences notificationsShowonline. */
    public notificationsShowonline: ENotificationSetting;

    /** PerFriendPreferences notificationsShowmessages. */
    public notificationsShowmessages: ENotificationSetting;

    /** PerFriendPreferences soundsShowingame. */
    public soundsShowingame: ENotificationSetting;

    /** PerFriendPreferences soundsShowonline. */
    public soundsShowonline: ENotificationSetting;

    /** PerFriendPreferences soundsShowmessages. */
    public soundsShowmessages: ENotificationSetting;

    /** PerFriendPreferences notificationsSendmobile. */
    public notificationsSendmobile: ENotificationSetting;

    /**
     * Creates a new PerFriendPreferences instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PerFriendPreferences instance
     */
    public static create(properties?: IPerFriendPreferences): PerFriendPreferences;

    /**
     * Encodes the specified PerFriendPreferences message. Does not implicitly {@link PerFriendPreferences.verify|verify} messages.
     * @param message PerFriendPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPerFriendPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PerFriendPreferences message, length delimited. Does not implicitly {@link PerFriendPreferences.verify|verify} messages.
     * @param message PerFriendPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPerFriendPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PerFriendPreferences message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PerFriendPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PerFriendPreferences;

    /**
     * Decodes a PerFriendPreferences message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PerFriendPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PerFriendPreferences;

    /**
     * Verifies a PerFriendPreferences message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PerFriendPreferences message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PerFriendPreferences
     */
    public static fromObject(object: { [k: string]: any }): PerFriendPreferences;

    /**
     * Creates a plain object from a PerFriendPreferences message. Also converts values to other types if specified.
     * @param message PerFriendPreferences
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PerFriendPreferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PerFriendPreferences to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PerFriendPreferences
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetPerFriendPreferences_Response. */
export class CPlayer_GetPerFriendPreferences_Response implements ICPlayer_GetPerFriendPreferences_Response {

    /**
     * Constructs a new CPlayer_GetPerFriendPreferences_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetPerFriendPreferences_Response);

    /** CPlayer_GetPerFriendPreferences_Response preferences. */
    public preferences: IPerFriendPreferences[];

    /**
     * Creates a new CPlayer_GetPerFriendPreferences_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetPerFriendPreferences_Response instance
     */
    public static create(properties?: ICPlayer_GetPerFriendPreferences_Response): CPlayer_GetPerFriendPreferences_Response;

    /**
     * Encodes the specified CPlayer_GetPerFriendPreferences_Response message. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Response.verify|verify} messages.
     * @param message CPlayer_GetPerFriendPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetPerFriendPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetPerFriendPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Response.verify|verify} messages.
     * @param message CPlayer_GetPerFriendPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetPerFriendPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetPerFriendPreferences_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetPerFriendPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetPerFriendPreferences_Response;

    /**
     * Decodes a CPlayer_GetPerFriendPreferences_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetPerFriendPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetPerFriendPreferences_Response;

    /**
     * Verifies a CPlayer_GetPerFriendPreferences_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetPerFriendPreferences_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetPerFriendPreferences_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetPerFriendPreferences_Response;

    /**
     * Creates a plain object from a CPlayer_GetPerFriendPreferences_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetPerFriendPreferences_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetPerFriendPreferences_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetPerFriendPreferences_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetPerFriendPreferences_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_SetPerFriendPreferences_Request. */
export class CPlayer_SetPerFriendPreferences_Request implements ICPlayer_SetPerFriendPreferences_Request {

    /**
     * Constructs a new CPlayer_SetPerFriendPreferences_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_SetPerFriendPreferences_Request);

    /** CPlayer_SetPerFriendPreferences_Request preferences. */
    public preferences?: (IPerFriendPreferences|null);

    /**
     * Creates a new CPlayer_SetPerFriendPreferences_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_SetPerFriendPreferences_Request instance
     */
    public static create(properties?: ICPlayer_SetPerFriendPreferences_Request): CPlayer_SetPerFriendPreferences_Request;

    /**
     * Encodes the specified CPlayer_SetPerFriendPreferences_Request message. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Request.verify|verify} messages.
     * @param message CPlayer_SetPerFriendPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_SetPerFriendPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_SetPerFriendPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Request.verify|verify} messages.
     * @param message CPlayer_SetPerFriendPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_SetPerFriendPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_SetPerFriendPreferences_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_SetPerFriendPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_SetPerFriendPreferences_Request;

    /**
     * Decodes a CPlayer_SetPerFriendPreferences_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_SetPerFriendPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_SetPerFriendPreferences_Request;

    /**
     * Verifies a CPlayer_SetPerFriendPreferences_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_SetPerFriendPreferences_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_SetPerFriendPreferences_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_SetPerFriendPreferences_Request;

    /**
     * Creates a plain object from a CPlayer_SetPerFriendPreferences_Request message. Also converts values to other types if specified.
     * @param message CPlayer_SetPerFriendPreferences_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_SetPerFriendPreferences_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_SetPerFriendPreferences_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_SetPerFriendPreferences_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_SetPerFriendPreferences_Response. */
export class CPlayer_SetPerFriendPreferences_Response implements ICPlayer_SetPerFriendPreferences_Response {

    /**
     * Constructs a new CPlayer_SetPerFriendPreferences_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_SetPerFriendPreferences_Response);

    /**
     * Creates a new CPlayer_SetPerFriendPreferences_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_SetPerFriendPreferences_Response instance
     */
    public static create(properties?: ICPlayer_SetPerFriendPreferences_Response): CPlayer_SetPerFriendPreferences_Response;

    /**
     * Encodes the specified CPlayer_SetPerFriendPreferences_Response message. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Response.verify|verify} messages.
     * @param message CPlayer_SetPerFriendPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_SetPerFriendPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_SetPerFriendPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Response.verify|verify} messages.
     * @param message CPlayer_SetPerFriendPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_SetPerFriendPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_SetPerFriendPreferences_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_SetPerFriendPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_SetPerFriendPreferences_Response;

    /**
     * Decodes a CPlayer_SetPerFriendPreferences_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_SetPerFriendPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_SetPerFriendPreferences_Response;

    /**
     * Verifies a CPlayer_SetPerFriendPreferences_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_SetPerFriendPreferences_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_SetPerFriendPreferences_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_SetPerFriendPreferences_Response;

    /**
     * Creates a plain object from a CPlayer_SetPerFriendPreferences_Response message. Also converts values to other types if specified.
     * @param message CPlayer_SetPerFriendPreferences_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_SetPerFriendPreferences_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_SetPerFriendPreferences_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_SetPerFriendPreferences_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_AddFriend_Request. */
export class CPlayer_AddFriend_Request implements ICPlayer_AddFriend_Request {

    /**
     * Constructs a new CPlayer_AddFriend_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_AddFriend_Request);

    /** CPlayer_AddFriend_Request steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CPlayer_AddFriend_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_AddFriend_Request instance
     */
    public static create(properties?: ICPlayer_AddFriend_Request): CPlayer_AddFriend_Request;

    /**
     * Encodes the specified CPlayer_AddFriend_Request message. Does not implicitly {@link CPlayer_AddFriend_Request.verify|verify} messages.
     * @param message CPlayer_AddFriend_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_AddFriend_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_AddFriend_Request message, length delimited. Does not implicitly {@link CPlayer_AddFriend_Request.verify|verify} messages.
     * @param message CPlayer_AddFriend_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_AddFriend_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_AddFriend_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_AddFriend_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_AddFriend_Request;

    /**
     * Decodes a CPlayer_AddFriend_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_AddFriend_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_AddFriend_Request;

    /**
     * Verifies a CPlayer_AddFriend_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_AddFriend_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_AddFriend_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_AddFriend_Request;

    /**
     * Creates a plain object from a CPlayer_AddFriend_Request message. Also converts values to other types if specified.
     * @param message CPlayer_AddFriend_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_AddFriend_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_AddFriend_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_AddFriend_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_AddFriend_Response. */
export class CPlayer_AddFriend_Response implements ICPlayer_AddFriend_Response {

    /**
     * Constructs a new CPlayer_AddFriend_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_AddFriend_Response);

    /** CPlayer_AddFriend_Response inviteSent. */
    public inviteSent: boolean;

    /** CPlayer_AddFriend_Response friendRelationship. */
    public friendRelationship: number;

    /**
     * Creates a new CPlayer_AddFriend_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_AddFriend_Response instance
     */
    public static create(properties?: ICPlayer_AddFriend_Response): CPlayer_AddFriend_Response;

    /**
     * Encodes the specified CPlayer_AddFriend_Response message. Does not implicitly {@link CPlayer_AddFriend_Response.verify|verify} messages.
     * @param message CPlayer_AddFriend_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_AddFriend_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_AddFriend_Response message, length delimited. Does not implicitly {@link CPlayer_AddFriend_Response.verify|verify} messages.
     * @param message CPlayer_AddFriend_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_AddFriend_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_AddFriend_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_AddFriend_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_AddFriend_Response;

    /**
     * Decodes a CPlayer_AddFriend_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_AddFriend_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_AddFriend_Response;

    /**
     * Verifies a CPlayer_AddFriend_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_AddFriend_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_AddFriend_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_AddFriend_Response;

    /**
     * Creates a plain object from a CPlayer_AddFriend_Response message. Also converts values to other types if specified.
     * @param message CPlayer_AddFriend_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_AddFriend_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_AddFriend_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_AddFriend_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_RemoveFriend_Request. */
export class CPlayer_RemoveFriend_Request implements ICPlayer_RemoveFriend_Request {

    /**
     * Constructs a new CPlayer_RemoveFriend_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_RemoveFriend_Request);

    /** CPlayer_RemoveFriend_Request steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CPlayer_RemoveFriend_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_RemoveFriend_Request instance
     */
    public static create(properties?: ICPlayer_RemoveFriend_Request): CPlayer_RemoveFriend_Request;

    /**
     * Encodes the specified CPlayer_RemoveFriend_Request message. Does not implicitly {@link CPlayer_RemoveFriend_Request.verify|verify} messages.
     * @param message CPlayer_RemoveFriend_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_RemoveFriend_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_RemoveFriend_Request message, length delimited. Does not implicitly {@link CPlayer_RemoveFriend_Request.verify|verify} messages.
     * @param message CPlayer_RemoveFriend_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_RemoveFriend_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_RemoveFriend_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_RemoveFriend_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_RemoveFriend_Request;

    /**
     * Decodes a CPlayer_RemoveFriend_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_RemoveFriend_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_RemoveFriend_Request;

    /**
     * Verifies a CPlayer_RemoveFriend_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_RemoveFriend_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_RemoveFriend_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_RemoveFriend_Request;

    /**
     * Creates a plain object from a CPlayer_RemoveFriend_Request message. Also converts values to other types if specified.
     * @param message CPlayer_RemoveFriend_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_RemoveFriend_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_RemoveFriend_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_RemoveFriend_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_RemoveFriend_Response. */
export class CPlayer_RemoveFriend_Response implements ICPlayer_RemoveFriend_Response {

    /**
     * Constructs a new CPlayer_RemoveFriend_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_RemoveFriend_Response);

    /** CPlayer_RemoveFriend_Response friendRelationship. */
    public friendRelationship: number;

    /**
     * Creates a new CPlayer_RemoveFriend_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_RemoveFriend_Response instance
     */
    public static create(properties?: ICPlayer_RemoveFriend_Response): CPlayer_RemoveFriend_Response;

    /**
     * Encodes the specified CPlayer_RemoveFriend_Response message. Does not implicitly {@link CPlayer_RemoveFriend_Response.verify|verify} messages.
     * @param message CPlayer_RemoveFriend_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_RemoveFriend_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_RemoveFriend_Response message, length delimited. Does not implicitly {@link CPlayer_RemoveFriend_Response.verify|verify} messages.
     * @param message CPlayer_RemoveFriend_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_RemoveFriend_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_RemoveFriend_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_RemoveFriend_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_RemoveFriend_Response;

    /**
     * Decodes a CPlayer_RemoveFriend_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_RemoveFriend_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_RemoveFriend_Response;

    /**
     * Verifies a CPlayer_RemoveFriend_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_RemoveFriend_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_RemoveFriend_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_RemoveFriend_Response;

    /**
     * Creates a plain object from a CPlayer_RemoveFriend_Response message. Also converts values to other types if specified.
     * @param message CPlayer_RemoveFriend_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_RemoveFriend_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_RemoveFriend_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_RemoveFriend_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_IgnoreFriend_Request. */
export class CPlayer_IgnoreFriend_Request implements ICPlayer_IgnoreFriend_Request {

    /**
     * Constructs a new CPlayer_IgnoreFriend_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_IgnoreFriend_Request);

    /** CPlayer_IgnoreFriend_Request steamid. */
    public steamid: (number|Long);

    /** CPlayer_IgnoreFriend_Request unignore. */
    public unignore: boolean;

    /**
     * Creates a new CPlayer_IgnoreFriend_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_IgnoreFriend_Request instance
     */
    public static create(properties?: ICPlayer_IgnoreFriend_Request): CPlayer_IgnoreFriend_Request;

    /**
     * Encodes the specified CPlayer_IgnoreFriend_Request message. Does not implicitly {@link CPlayer_IgnoreFriend_Request.verify|verify} messages.
     * @param message CPlayer_IgnoreFriend_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_IgnoreFriend_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_IgnoreFriend_Request message, length delimited. Does not implicitly {@link CPlayer_IgnoreFriend_Request.verify|verify} messages.
     * @param message CPlayer_IgnoreFriend_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_IgnoreFriend_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_IgnoreFriend_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_IgnoreFriend_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_IgnoreFriend_Request;

    /**
     * Decodes a CPlayer_IgnoreFriend_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_IgnoreFriend_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_IgnoreFriend_Request;

    /**
     * Verifies a CPlayer_IgnoreFriend_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_IgnoreFriend_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_IgnoreFriend_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_IgnoreFriend_Request;

    /**
     * Creates a plain object from a CPlayer_IgnoreFriend_Request message. Also converts values to other types if specified.
     * @param message CPlayer_IgnoreFriend_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_IgnoreFriend_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_IgnoreFriend_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_IgnoreFriend_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_IgnoreFriend_Response. */
export class CPlayer_IgnoreFriend_Response implements ICPlayer_IgnoreFriend_Response {

    /**
     * Constructs a new CPlayer_IgnoreFriend_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_IgnoreFriend_Response);

    /** CPlayer_IgnoreFriend_Response friendRelationship. */
    public friendRelationship: number;

    /**
     * Creates a new CPlayer_IgnoreFriend_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_IgnoreFriend_Response instance
     */
    public static create(properties?: ICPlayer_IgnoreFriend_Response): CPlayer_IgnoreFriend_Response;

    /**
     * Encodes the specified CPlayer_IgnoreFriend_Response message. Does not implicitly {@link CPlayer_IgnoreFriend_Response.verify|verify} messages.
     * @param message CPlayer_IgnoreFriend_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_IgnoreFriend_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_IgnoreFriend_Response message, length delimited. Does not implicitly {@link CPlayer_IgnoreFriend_Response.verify|verify} messages.
     * @param message CPlayer_IgnoreFriend_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_IgnoreFriend_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_IgnoreFriend_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_IgnoreFriend_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_IgnoreFriend_Response;

    /**
     * Decodes a CPlayer_IgnoreFriend_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_IgnoreFriend_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_IgnoreFriend_Response;

    /**
     * Verifies a CPlayer_IgnoreFriend_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_IgnoreFriend_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_IgnoreFriend_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_IgnoreFriend_Response;

    /**
     * Creates a plain object from a CPlayer_IgnoreFriend_Response message. Also converts values to other types if specified.
     * @param message CPlayer_IgnoreFriend_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_IgnoreFriend_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_IgnoreFriend_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_IgnoreFriend_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetCommunityPreferences_Request. */
export class CPlayer_GetCommunityPreferences_Request implements ICPlayer_GetCommunityPreferences_Request {

    /**
     * Constructs a new CPlayer_GetCommunityPreferences_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetCommunityPreferences_Request);

    /**
     * Creates a new CPlayer_GetCommunityPreferences_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetCommunityPreferences_Request instance
     */
    public static create(properties?: ICPlayer_GetCommunityPreferences_Request): CPlayer_GetCommunityPreferences_Request;

    /**
     * Encodes the specified CPlayer_GetCommunityPreferences_Request message. Does not implicitly {@link CPlayer_GetCommunityPreferences_Request.verify|verify} messages.
     * @param message CPlayer_GetCommunityPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetCommunityPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetCommunityPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_GetCommunityPreferences_Request.verify|verify} messages.
     * @param message CPlayer_GetCommunityPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetCommunityPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetCommunityPreferences_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetCommunityPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetCommunityPreferences_Request;

    /**
     * Decodes a CPlayer_GetCommunityPreferences_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetCommunityPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetCommunityPreferences_Request;

    /**
     * Verifies a CPlayer_GetCommunityPreferences_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetCommunityPreferences_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetCommunityPreferences_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetCommunityPreferences_Request;

    /**
     * Creates a plain object from a CPlayer_GetCommunityPreferences_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetCommunityPreferences_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetCommunityPreferences_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetCommunityPreferences_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetCommunityPreferences_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_CommunityPreferences. */
export class CPlayer_CommunityPreferences implements ICPlayer_CommunityPreferences {

    /**
     * Constructs a new CPlayer_CommunityPreferences.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_CommunityPreferences);

    /** CPlayer_CommunityPreferences hideAdultContentViolence. */
    public hideAdultContentViolence: boolean;

    /** CPlayer_CommunityPreferences hideAdultContentSex. */
    public hideAdultContentSex: boolean;

    /** CPlayer_CommunityPreferences parenthesizeNicknames. */
    public parenthesizeNicknames: boolean;

    /** CPlayer_CommunityPreferences timestampUpdated. */
    public timestampUpdated: number;

    /**
     * Creates a new CPlayer_CommunityPreferences instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_CommunityPreferences instance
     */
    public static create(properties?: ICPlayer_CommunityPreferences): CPlayer_CommunityPreferences;

    /**
     * Encodes the specified CPlayer_CommunityPreferences message. Does not implicitly {@link CPlayer_CommunityPreferences.verify|verify} messages.
     * @param message CPlayer_CommunityPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_CommunityPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_CommunityPreferences message, length delimited. Does not implicitly {@link CPlayer_CommunityPreferences.verify|verify} messages.
     * @param message CPlayer_CommunityPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_CommunityPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_CommunityPreferences message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_CommunityPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_CommunityPreferences;

    /**
     * Decodes a CPlayer_CommunityPreferences message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_CommunityPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_CommunityPreferences;

    /**
     * Verifies a CPlayer_CommunityPreferences message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_CommunityPreferences message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_CommunityPreferences
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_CommunityPreferences;

    /**
     * Creates a plain object from a CPlayer_CommunityPreferences message. Also converts values to other types if specified.
     * @param message CPlayer_CommunityPreferences
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_CommunityPreferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_CommunityPreferences to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_CommunityPreferences
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetCommunityPreferences_Response. */
export class CPlayer_GetCommunityPreferences_Response implements ICPlayer_GetCommunityPreferences_Response {

    /**
     * Constructs a new CPlayer_GetCommunityPreferences_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetCommunityPreferences_Response);

    /** CPlayer_GetCommunityPreferences_Response preferences. */
    public preferences?: (ICPlayer_CommunityPreferences|null);

    /**
     * Creates a new CPlayer_GetCommunityPreferences_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetCommunityPreferences_Response instance
     */
    public static create(properties?: ICPlayer_GetCommunityPreferences_Response): CPlayer_GetCommunityPreferences_Response;

    /**
     * Encodes the specified CPlayer_GetCommunityPreferences_Response message. Does not implicitly {@link CPlayer_GetCommunityPreferences_Response.verify|verify} messages.
     * @param message CPlayer_GetCommunityPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetCommunityPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetCommunityPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_GetCommunityPreferences_Response.verify|verify} messages.
     * @param message CPlayer_GetCommunityPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetCommunityPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetCommunityPreferences_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetCommunityPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetCommunityPreferences_Response;

    /**
     * Decodes a CPlayer_GetCommunityPreferences_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetCommunityPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetCommunityPreferences_Response;

    /**
     * Verifies a CPlayer_GetCommunityPreferences_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetCommunityPreferences_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetCommunityPreferences_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetCommunityPreferences_Response;

    /**
     * Creates a plain object from a CPlayer_GetCommunityPreferences_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetCommunityPreferences_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetCommunityPreferences_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetCommunityPreferences_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetCommunityPreferences_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_SetCommunityPreferences_Request. */
export class CPlayer_SetCommunityPreferences_Request implements ICPlayer_SetCommunityPreferences_Request {

    /**
     * Constructs a new CPlayer_SetCommunityPreferences_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_SetCommunityPreferences_Request);

    /** CPlayer_SetCommunityPreferences_Request preferences. */
    public preferences?: (ICPlayer_CommunityPreferences|null);

    /**
     * Creates a new CPlayer_SetCommunityPreferences_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_SetCommunityPreferences_Request instance
     */
    public static create(properties?: ICPlayer_SetCommunityPreferences_Request): CPlayer_SetCommunityPreferences_Request;

    /**
     * Encodes the specified CPlayer_SetCommunityPreferences_Request message. Does not implicitly {@link CPlayer_SetCommunityPreferences_Request.verify|verify} messages.
     * @param message CPlayer_SetCommunityPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_SetCommunityPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_SetCommunityPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_SetCommunityPreferences_Request.verify|verify} messages.
     * @param message CPlayer_SetCommunityPreferences_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_SetCommunityPreferences_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_SetCommunityPreferences_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_SetCommunityPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_SetCommunityPreferences_Request;

    /**
     * Decodes a CPlayer_SetCommunityPreferences_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_SetCommunityPreferences_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_SetCommunityPreferences_Request;

    /**
     * Verifies a CPlayer_SetCommunityPreferences_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_SetCommunityPreferences_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_SetCommunityPreferences_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_SetCommunityPreferences_Request;

    /**
     * Creates a plain object from a CPlayer_SetCommunityPreferences_Request message. Also converts values to other types if specified.
     * @param message CPlayer_SetCommunityPreferences_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_SetCommunityPreferences_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_SetCommunityPreferences_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_SetCommunityPreferences_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_SetCommunityPreferences_Response. */
export class CPlayer_SetCommunityPreferences_Response implements ICPlayer_SetCommunityPreferences_Response {

    /**
     * Constructs a new CPlayer_SetCommunityPreferences_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_SetCommunityPreferences_Response);

    /**
     * Creates a new CPlayer_SetCommunityPreferences_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_SetCommunityPreferences_Response instance
     */
    public static create(properties?: ICPlayer_SetCommunityPreferences_Response): CPlayer_SetCommunityPreferences_Response;

    /**
     * Encodes the specified CPlayer_SetCommunityPreferences_Response message. Does not implicitly {@link CPlayer_SetCommunityPreferences_Response.verify|verify} messages.
     * @param message CPlayer_SetCommunityPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_SetCommunityPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_SetCommunityPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_SetCommunityPreferences_Response.verify|verify} messages.
     * @param message CPlayer_SetCommunityPreferences_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_SetCommunityPreferences_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_SetCommunityPreferences_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_SetCommunityPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_SetCommunityPreferences_Response;

    /**
     * Decodes a CPlayer_SetCommunityPreferences_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_SetCommunityPreferences_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_SetCommunityPreferences_Response;

    /**
     * Verifies a CPlayer_SetCommunityPreferences_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_SetCommunityPreferences_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_SetCommunityPreferences_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_SetCommunityPreferences_Response;

    /**
     * Creates a plain object from a CPlayer_SetCommunityPreferences_Response message. Also converts values to other types if specified.
     * @param message CPlayer_SetCommunityPreferences_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_SetCommunityPreferences_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_SetCommunityPreferences_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_SetCommunityPreferences_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetNewSteamAnnouncementState_Request. */
export class CPlayer_GetNewSteamAnnouncementState_Request implements ICPlayer_GetNewSteamAnnouncementState_Request {

    /**
     * Constructs a new CPlayer_GetNewSteamAnnouncementState_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetNewSteamAnnouncementState_Request);

    /** CPlayer_GetNewSteamAnnouncementState_Request language. */
    public language: number;

    /**
     * Creates a new CPlayer_GetNewSteamAnnouncementState_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetNewSteamAnnouncementState_Request instance
     */
    public static create(properties?: ICPlayer_GetNewSteamAnnouncementState_Request): CPlayer_GetNewSteamAnnouncementState_Request;

    /**
     * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Request message. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Request.verify|verify} messages.
     * @param message CPlayer_GetNewSteamAnnouncementState_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetNewSteamAnnouncementState_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Request message, length delimited. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Request.verify|verify} messages.
     * @param message CPlayer_GetNewSteamAnnouncementState_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetNewSteamAnnouncementState_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetNewSteamAnnouncementState_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetNewSteamAnnouncementState_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetNewSteamAnnouncementState_Request;

    /**
     * Decodes a CPlayer_GetNewSteamAnnouncementState_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetNewSteamAnnouncementState_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetNewSteamAnnouncementState_Request;

    /**
     * Verifies a CPlayer_GetNewSteamAnnouncementState_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetNewSteamAnnouncementState_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetNewSteamAnnouncementState_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetNewSteamAnnouncementState_Request;

    /**
     * Creates a plain object from a CPlayer_GetNewSteamAnnouncementState_Request message. Also converts values to other types if specified.
     * @param message CPlayer_GetNewSteamAnnouncementState_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetNewSteamAnnouncementState_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetNewSteamAnnouncementState_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetNewSteamAnnouncementState_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_GetNewSteamAnnouncementState_Response. */
export class CPlayer_GetNewSteamAnnouncementState_Response implements ICPlayer_GetNewSteamAnnouncementState_Response {

    /**
     * Constructs a new CPlayer_GetNewSteamAnnouncementState_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_GetNewSteamAnnouncementState_Response);

    /** CPlayer_GetNewSteamAnnouncementState_Response state. */
    public state: number;

    /** CPlayer_GetNewSteamAnnouncementState_Response announcementHeadline. */
    public announcementHeadline: string;

    /** CPlayer_GetNewSteamAnnouncementState_Response announcementUrl. */
    public announcementUrl: string;

    /** CPlayer_GetNewSteamAnnouncementState_Response timePosted. */
    public timePosted: number;

    /** CPlayer_GetNewSteamAnnouncementState_Response announcementGid. */
    public announcementGid: (number|Long);

    /**
     * Creates a new CPlayer_GetNewSteamAnnouncementState_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_GetNewSteamAnnouncementState_Response instance
     */
    public static create(properties?: ICPlayer_GetNewSteamAnnouncementState_Response): CPlayer_GetNewSteamAnnouncementState_Response;

    /**
     * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Response message. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Response.verify|verify} messages.
     * @param message CPlayer_GetNewSteamAnnouncementState_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_GetNewSteamAnnouncementState_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Response message, length delimited. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Response.verify|verify} messages.
     * @param message CPlayer_GetNewSteamAnnouncementState_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_GetNewSteamAnnouncementState_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_GetNewSteamAnnouncementState_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_GetNewSteamAnnouncementState_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_GetNewSteamAnnouncementState_Response;

    /**
     * Decodes a CPlayer_GetNewSteamAnnouncementState_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_GetNewSteamAnnouncementState_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_GetNewSteamAnnouncementState_Response;

    /**
     * Verifies a CPlayer_GetNewSteamAnnouncementState_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_GetNewSteamAnnouncementState_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_GetNewSteamAnnouncementState_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_GetNewSteamAnnouncementState_Response;

    /**
     * Creates a plain object from a CPlayer_GetNewSteamAnnouncementState_Response message. Also converts values to other types if specified.
     * @param message CPlayer_GetNewSteamAnnouncementState_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_GetNewSteamAnnouncementState_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_GetNewSteamAnnouncementState_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_GetNewSteamAnnouncementState_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_UpdateSteamAnnouncementLastRead_Request. */
export class CPlayer_UpdateSteamAnnouncementLastRead_Request implements ICPlayer_UpdateSteamAnnouncementLastRead_Request {

    /**
     * Constructs a new CPlayer_UpdateSteamAnnouncementLastRead_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_UpdateSteamAnnouncementLastRead_Request);

    /** CPlayer_UpdateSteamAnnouncementLastRead_Request announcementGid. */
    public announcementGid: (number|Long);

    /** CPlayer_UpdateSteamAnnouncementLastRead_Request timePosted. */
    public timePosted: number;

    /**
     * Creates a new CPlayer_UpdateSteamAnnouncementLastRead_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Request instance
     */
    public static create(properties?: ICPlayer_UpdateSteamAnnouncementLastRead_Request): CPlayer_UpdateSteamAnnouncementLastRead_Request;

    /**
     * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Request message. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Request.verify|verify} messages.
     * @param message CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_UpdateSteamAnnouncementLastRead_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Request message, length delimited. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Request.verify|verify} messages.
     * @param message CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_UpdateSteamAnnouncementLastRead_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_UpdateSteamAnnouncementLastRead_Request;

    /**
     * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_UpdateSteamAnnouncementLastRead_Request;

    /**
     * Verifies a CPlayer_UpdateSteamAnnouncementLastRead_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_UpdateSteamAnnouncementLastRead_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Request
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_UpdateSteamAnnouncementLastRead_Request;

    /**
     * Creates a plain object from a CPlayer_UpdateSteamAnnouncementLastRead_Request message. Also converts values to other types if specified.
     * @param message CPlayer_UpdateSteamAnnouncementLastRead_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_UpdateSteamAnnouncementLastRead_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_UpdateSteamAnnouncementLastRead_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_UpdateSteamAnnouncementLastRead_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPlayer_UpdateSteamAnnouncementLastRead_Response. */
export class CPlayer_UpdateSteamAnnouncementLastRead_Response implements ICPlayer_UpdateSteamAnnouncementLastRead_Response {

    /**
     * Constructs a new CPlayer_UpdateSteamAnnouncementLastRead_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPlayer_UpdateSteamAnnouncementLastRead_Response);

    /**
     * Creates a new CPlayer_UpdateSteamAnnouncementLastRead_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Response instance
     */
    public static create(properties?: ICPlayer_UpdateSteamAnnouncementLastRead_Response): CPlayer_UpdateSteamAnnouncementLastRead_Response;

    /**
     * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Response message. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Response.verify|verify} messages.
     * @param message CPlayer_UpdateSteamAnnouncementLastRead_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPlayer_UpdateSteamAnnouncementLastRead_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Response message, length delimited. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Response.verify|verify} messages.
     * @param message CPlayer_UpdateSteamAnnouncementLastRead_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPlayer_UpdateSteamAnnouncementLastRead_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPlayer_UpdateSteamAnnouncementLastRead_Response;

    /**
     * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPlayer_UpdateSteamAnnouncementLastRead_Response;

    /**
     * Verifies a CPlayer_UpdateSteamAnnouncementLastRead_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPlayer_UpdateSteamAnnouncementLastRead_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPlayer_UpdateSteamAnnouncementLastRead_Response
     */
    public static fromObject(object: { [k: string]: any }): CPlayer_UpdateSteamAnnouncementLastRead_Response;

    /**
     * Creates a plain object from a CPlayer_UpdateSteamAnnouncementLastRead_Response message. Also converts values to other types if specified.
     * @param message CPlayer_UpdateSteamAnnouncementLastRead_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPlayer_UpdateSteamAnnouncementLastRead_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPlayer_UpdateSteamAnnouncementLastRead_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPlayer_UpdateSteamAnnouncementLastRead_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Player */
export class Player extends $protobuf.rpc.Service {

    /**
     * Constructs a new Player service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Player service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Player;

    /**
     * Calls GetMutualFriendsForIncomingInvites.
     * @param request CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetMutualFriendsForIncomingInvites_Response
     */
    public getMutualFriendsForIncomingInvites(request: ICPlayer_GetMutualFriendsForIncomingInvites_Request, callback: Player.GetMutualFriendsForIncomingInvitesCallback): void;

    /**
     * Calls GetMutualFriendsForIncomingInvites.
     * @param request CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object
     * @returns Promise
     */
    public getMutualFriendsForIncomingInvites(request: ICPlayer_GetMutualFriendsForIncomingInvites_Request): Promise<CPlayer_GetMutualFriendsForIncomingInvites_Response>;

    /**
     * Calls GetFriendsGameplayInfo.
     * @param request CPlayer_GetFriendsGameplayInfo_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetFriendsGameplayInfo_Response
     */
    public getFriendsGameplayInfo(request: ICPlayer_GetFriendsGameplayInfo_Request, callback: Player.GetFriendsGameplayInfoCallback): void;

    /**
     * Calls GetFriendsGameplayInfo.
     * @param request CPlayer_GetFriendsGameplayInfo_Request message or plain object
     * @returns Promise
     */
    public getFriendsGameplayInfo(request: ICPlayer_GetFriendsGameplayInfo_Request): Promise<CPlayer_GetFriendsGameplayInfo_Response>;

    /**
     * Calls GetGameBadgeLevels.
     * @param request CPlayer_GetGameBadgeLevels_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetGameBadgeLevels_Response
     */
    public getGameBadgeLevels(request: ICPlayer_GetGameBadgeLevels_Request, callback: Player.GetGameBadgeLevelsCallback): void;

    /**
     * Calls GetGameBadgeLevels.
     * @param request CPlayer_GetGameBadgeLevels_Request message or plain object
     * @returns Promise
     */
    public getGameBadgeLevels(request: ICPlayer_GetGameBadgeLevels_Request): Promise<CPlayer_GetGameBadgeLevels_Response>;

    /**
     * Calls ClientGetLastPlayedTimes.
     * @param request CPlayer_GetLastPlayedTimes_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetLastPlayedTimes_Response
     */
    public clientGetLastPlayedTimes(request: ICPlayer_GetLastPlayedTimes_Request, callback: Player.ClientGetLastPlayedTimesCallback): void;

    /**
     * Calls ClientGetLastPlayedTimes.
     * @param request CPlayer_GetLastPlayedTimes_Request message or plain object
     * @returns Promise
     */
    public clientGetLastPlayedTimes(request: ICPlayer_GetLastPlayedTimes_Request): Promise<CPlayer_GetLastPlayedTimes_Response>;

    /**
     * Calls AcceptSSA.
     * @param request CPlayer_AcceptSSA_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_AcceptSSA_Response
     */
    public acceptSSA(request: ICPlayer_AcceptSSA_Request, callback: Player.AcceptSSACallback): void;

    /**
     * Calls AcceptSSA.
     * @param request CPlayer_AcceptSSA_Request message or plain object
     * @returns Promise
     */
    public acceptSSA(request: ICPlayer_AcceptSSA_Request): Promise<CPlayer_AcceptSSA_Response>;

    /**
     * Calls GetNicknameList.
     * @param request CPlayer_GetNicknameList_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetNicknameList_Response
     */
    public getNicknameList(request: ICPlayer_GetNicknameList_Request, callback: Player.GetNicknameListCallback): void;

    /**
     * Calls GetNicknameList.
     * @param request CPlayer_GetNicknameList_Request message or plain object
     * @returns Promise
     */
    public getNicknameList(request: ICPlayer_GetNicknameList_Request): Promise<CPlayer_GetNicknameList_Response>;

    /**
     * Calls GetPerFriendPreferences.
     * @param request CPlayer_GetPerFriendPreferences_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetPerFriendPreferences_Response
     */
    public getPerFriendPreferences(request: ICPlayer_GetPerFriendPreferences_Request, callback: Player.GetPerFriendPreferencesCallback): void;

    /**
     * Calls GetPerFriendPreferences.
     * @param request CPlayer_GetPerFriendPreferences_Request message or plain object
     * @returns Promise
     */
    public getPerFriendPreferences(request: ICPlayer_GetPerFriendPreferences_Request): Promise<CPlayer_GetPerFriendPreferences_Response>;

    /**
     * Calls SetPerFriendPreferences.
     * @param request CPlayer_SetPerFriendPreferences_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_SetPerFriendPreferences_Response
     */
    public setPerFriendPreferences(request: ICPlayer_SetPerFriendPreferences_Request, callback: Player.SetPerFriendPreferencesCallback): void;

    /**
     * Calls SetPerFriendPreferences.
     * @param request CPlayer_SetPerFriendPreferences_Request message or plain object
     * @returns Promise
     */
    public setPerFriendPreferences(request: ICPlayer_SetPerFriendPreferences_Request): Promise<CPlayer_SetPerFriendPreferences_Response>;

    /**
     * Calls AddFriend.
     * @param request CPlayer_AddFriend_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_AddFriend_Response
     */
    public addFriend(request: ICPlayer_AddFriend_Request, callback: Player.AddFriendCallback): void;

    /**
     * Calls AddFriend.
     * @param request CPlayer_AddFriend_Request message or plain object
     * @returns Promise
     */
    public addFriend(request: ICPlayer_AddFriend_Request): Promise<CPlayer_AddFriend_Response>;

    /**
     * Calls RemoveFriend.
     * @param request CPlayer_RemoveFriend_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_RemoveFriend_Response
     */
    public removeFriend(request: ICPlayer_RemoveFriend_Request, callback: Player.RemoveFriendCallback): void;

    /**
     * Calls RemoveFriend.
     * @param request CPlayer_RemoveFriend_Request message or plain object
     * @returns Promise
     */
    public removeFriend(request: ICPlayer_RemoveFriend_Request): Promise<CPlayer_RemoveFriend_Response>;

    /**
     * Calls IgnoreFriend.
     * @param request CPlayer_IgnoreFriend_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_IgnoreFriend_Response
     */
    public ignoreFriend(request: ICPlayer_IgnoreFriend_Request, callback: Player.IgnoreFriendCallback): void;

    /**
     * Calls IgnoreFriend.
     * @param request CPlayer_IgnoreFriend_Request message or plain object
     * @returns Promise
     */
    public ignoreFriend(request: ICPlayer_IgnoreFriend_Request): Promise<CPlayer_IgnoreFriend_Response>;

    /**
     * Calls GetCommunityPreferences.
     * @param request CPlayer_GetCommunityPreferences_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetCommunityPreferences_Response
     */
    public getCommunityPreferences(request: ICPlayer_GetCommunityPreferences_Request, callback: Player.GetCommunityPreferencesCallback): void;

    /**
     * Calls GetCommunityPreferences.
     * @param request CPlayer_GetCommunityPreferences_Request message or plain object
     * @returns Promise
     */
    public getCommunityPreferences(request: ICPlayer_GetCommunityPreferences_Request): Promise<CPlayer_GetCommunityPreferences_Response>;

    /**
     * Calls SetCommunityPreferences.
     * @param request CPlayer_SetCommunityPreferences_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_SetCommunityPreferences_Response
     */
    public setCommunityPreferences(request: ICPlayer_SetCommunityPreferences_Request, callback: Player.SetCommunityPreferencesCallback): void;

    /**
     * Calls SetCommunityPreferences.
     * @param request CPlayer_SetCommunityPreferences_Request message or plain object
     * @returns Promise
     */
    public setCommunityPreferences(request: ICPlayer_SetCommunityPreferences_Request): Promise<CPlayer_SetCommunityPreferences_Response>;

    /**
     * Calls GetNewSteamAnnouncementState.
     * @param request CPlayer_GetNewSteamAnnouncementState_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_GetNewSteamAnnouncementState_Response
     */
    public getNewSteamAnnouncementState(request: ICPlayer_GetNewSteamAnnouncementState_Request, callback: Player.GetNewSteamAnnouncementStateCallback): void;

    /**
     * Calls GetNewSteamAnnouncementState.
     * @param request CPlayer_GetNewSteamAnnouncementState_Request message or plain object
     * @returns Promise
     */
    public getNewSteamAnnouncementState(request: ICPlayer_GetNewSteamAnnouncementState_Request): Promise<CPlayer_GetNewSteamAnnouncementState_Response>;

    /**
     * Calls UpdateSteamAnnouncementLastRead.
     * @param request CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPlayer_UpdateSteamAnnouncementLastRead_Response
     */
    public updateSteamAnnouncementLastRead(request: ICPlayer_UpdateSteamAnnouncementLastRead_Request, callback: Player.UpdateSteamAnnouncementLastReadCallback): void;

    /**
     * Calls UpdateSteamAnnouncementLastRead.
     * @param request CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object
     * @returns Promise
     */
    public updateSteamAnnouncementLastRead(request: ICPlayer_UpdateSteamAnnouncementLastRead_Request): Promise<CPlayer_UpdateSteamAnnouncementLastRead_Response>;
}

export namespace Player {

    /**
     * Callback as used by {@link Player#getMutualFriendsForIncomingInvites}.
     * @param error Error, if any
     * @param [response] CPlayer_GetMutualFriendsForIncomingInvites_Response
     */
    type GetMutualFriendsForIncomingInvitesCallback = (error: (Error|null), response?: CPlayer_GetMutualFriendsForIncomingInvites_Response) => void;

    /**
     * Callback as used by {@link Player#getFriendsGameplayInfo}.
     * @param error Error, if any
     * @param [response] CPlayer_GetFriendsGameplayInfo_Response
     */
    type GetFriendsGameplayInfoCallback = (error: (Error|null), response?: CPlayer_GetFriendsGameplayInfo_Response) => void;

    /**
     * Callback as used by {@link Player#getGameBadgeLevels}.
     * @param error Error, if any
     * @param [response] CPlayer_GetGameBadgeLevels_Response
     */
    type GetGameBadgeLevelsCallback = (error: (Error|null), response?: CPlayer_GetGameBadgeLevels_Response) => void;

    /**
     * Callback as used by {@link Player#clientGetLastPlayedTimes}.
     * @param error Error, if any
     * @param [response] CPlayer_GetLastPlayedTimes_Response
     */
    type ClientGetLastPlayedTimesCallback = (error: (Error|null), response?: CPlayer_GetLastPlayedTimes_Response) => void;

    /**
     * Callback as used by {@link Player#acceptSSA}.
     * @param error Error, if any
     * @param [response] CPlayer_AcceptSSA_Response
     */
    type AcceptSSACallback = (error: (Error|null), response?: CPlayer_AcceptSSA_Response) => void;

    /**
     * Callback as used by {@link Player#getNicknameList}.
     * @param error Error, if any
     * @param [response] CPlayer_GetNicknameList_Response
     */
    type GetNicknameListCallback = (error: (Error|null), response?: CPlayer_GetNicknameList_Response) => void;

    /**
     * Callback as used by {@link Player#getPerFriendPreferences}.
     * @param error Error, if any
     * @param [response] CPlayer_GetPerFriendPreferences_Response
     */
    type GetPerFriendPreferencesCallback = (error: (Error|null), response?: CPlayer_GetPerFriendPreferences_Response) => void;

    /**
     * Callback as used by {@link Player#setPerFriendPreferences}.
     * @param error Error, if any
     * @param [response] CPlayer_SetPerFriendPreferences_Response
     */
    type SetPerFriendPreferencesCallback = (error: (Error|null), response?: CPlayer_SetPerFriendPreferences_Response) => void;

    /**
     * Callback as used by {@link Player#addFriend}.
     * @param error Error, if any
     * @param [response] CPlayer_AddFriend_Response
     */
    type AddFriendCallback = (error: (Error|null), response?: CPlayer_AddFriend_Response) => void;

    /**
     * Callback as used by {@link Player#removeFriend}.
     * @param error Error, if any
     * @param [response] CPlayer_RemoveFriend_Response
     */
    type RemoveFriendCallback = (error: (Error|null), response?: CPlayer_RemoveFriend_Response) => void;

    /**
     * Callback as used by {@link Player#ignoreFriend}.
     * @param error Error, if any
     * @param [response] CPlayer_IgnoreFriend_Response
     */
    type IgnoreFriendCallback = (error: (Error|null), response?: CPlayer_IgnoreFriend_Response) => void;

    /**
     * Callback as used by {@link Player#getCommunityPreferences}.
     * @param error Error, if any
     * @param [response] CPlayer_GetCommunityPreferences_Response
     */
    type GetCommunityPreferencesCallback = (error: (Error|null), response?: CPlayer_GetCommunityPreferences_Response) => void;

    /**
     * Callback as used by {@link Player#setCommunityPreferences}.
     * @param error Error, if any
     * @param [response] CPlayer_SetCommunityPreferences_Response
     */
    type SetCommunityPreferencesCallback = (error: (Error|null), response?: CPlayer_SetCommunityPreferences_Response) => void;

    /**
     * Callback as used by {@link Player#getNewSteamAnnouncementState}.
     * @param error Error, if any
     * @param [response] CPlayer_GetNewSteamAnnouncementState_Response
     */
    type GetNewSteamAnnouncementStateCallback = (error: (Error|null), response?: CPlayer_GetNewSteamAnnouncementState_Response) => void;

    /**
     * Callback as used by {@link Player#updateSteamAnnouncementLastRead}.
     * @param error Error, if any
     * @param [response] CPlayer_UpdateSteamAnnouncementLastRead_Response
     */
    type UpdateSteamAnnouncementLastReadCallback = (error: (Error|null), response?: CPlayer_UpdateSteamAnnouncementLastRead_Response) => void;
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
