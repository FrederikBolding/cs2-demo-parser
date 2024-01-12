import * as $protobuf from "protobufjs";
import Long = require("long");
/** EGCSystemMsg enum. */
export enum EGCSystemMsg {
    k_EGCMsgInvalid = 0,
    k_EGCMsgMulti = 1,
    k_EGCMsgGenericReply = 10,
    k_EGCMsgSystemBase = 50,
    k_EGCMsgAchievementAwarded = 51,
    k_EGCMsgConCommand = 52,
    k_EGCMsgStartPlaying = 53,
    k_EGCMsgStopPlaying = 54,
    k_EGCMsgStartGameserver = 55,
    k_EGCMsgStopGameserver = 56,
    k_EGCMsgWGRequest = 57,
    k_EGCMsgWGResponse = 58,
    k_EGCMsgGetUserGameStatsSchema = 59,
    k_EGCMsgGetUserGameStatsSchemaResponse = 60,
    k_EGCMsgGetUserStatsDEPRECATED = 61,
    k_EGCMsgGetUserStatsResponse = 62,
    k_EGCMsgAppInfoUpdated = 63,
    k_EGCMsgValidateSession = 64,
    k_EGCMsgValidateSessionResponse = 65,
    k_EGCMsgLookupAccountFromInput = 66,
    k_EGCMsgSendHTTPRequest = 67,
    k_EGCMsgSendHTTPRequestResponse = 68,
    k_EGCMsgPreTestSetup = 69,
    k_EGCMsgRecordSupportAction = 70,
    k_EGCMsgGetAccountDetails_DEPRECATED = 71,
    k_EGCMsgReceiveInterAppMessage = 73,
    k_EGCMsgFindAccounts = 74,
    k_EGCMsgPostAlert = 75,
    k_EGCMsgGetLicenses = 76,
    k_EGCMsgGetUserStats = 77,
    k_EGCMsgGetCommands = 78,
    k_EGCMsgGetCommandsResponse = 79,
    k_EGCMsgAddFreeLicense = 80,
    k_EGCMsgAddFreeLicenseResponse = 81,
    k_EGCMsgGetIPLocation = 82,
    k_EGCMsgGetIPLocationResponse = 83,
    k_EGCMsgSystemStatsSchema = 84,
    k_EGCMsgGetSystemStats = 85,
    k_EGCMsgGetSystemStatsResponse = 86,
    k_EGCMsgSendEmail = 87,
    k_EGCMsgSendEmailResponse = 88,
    k_EGCMsgGetEmailTemplate = 89,
    k_EGCMsgGetEmailTemplateResponse = 90,
    k_EGCMsgGrantGuestPass = 91,
    k_EGCMsgGrantGuestPassResponse = 92,
    k_EGCMsgGetAccountDetails = 93,
    k_EGCMsgGetAccountDetailsResponse = 94,
    k_EGCMsgGetPersonaNames = 95,
    k_EGCMsgGetPersonaNamesResponse = 96,
    k_EGCMsgMultiplexMsg = 97,
    k_EGCMsgMultiplexMsgResponse = 98,
    k_EGCMsgWebAPIRegisterInterfaces = 101,
    k_EGCMsgWebAPIJobRequest = 102,
    k_EGCMsgWebAPIJobRequestHttpResponse = 104,
    k_EGCMsgWebAPIJobRequestForwardResponse = 105,
    k_EGCMsgMemCachedGet = 200,
    k_EGCMsgMemCachedGetResponse = 201,
    k_EGCMsgMemCachedSet = 202,
    k_EGCMsgMemCachedDelete = 203,
    k_EGCMsgMemCachedStats = 204,
    k_EGCMsgMemCachedStatsResponse = 205,
    k_EGCMsgMasterSetDirectory = 220,
    k_EGCMsgMasterSetDirectoryResponse = 221,
    k_EGCMsgMasterSetWebAPIRouting = 222,
    k_EGCMsgMasterSetWebAPIRoutingResponse = 223,
    k_EGCMsgMasterSetClientMsgRouting = 224,
    k_EGCMsgMasterSetClientMsgRoutingResponse = 225,
    k_EGCMsgSetOptions = 226,
    k_EGCMsgSetOptionsResponse = 227,
    k_EGCMsgSystemBase2 = 500,
    k_EGCMsgGetPurchaseTrustStatus = 501,
    k_EGCMsgGetPurchaseTrustStatusResponse = 502,
    k_EGCMsgUpdateSession = 503,
    k_EGCMsgGCAccountVacStatusChange = 504,
    k_EGCMsgCheckFriendship = 505,
    k_EGCMsgCheckFriendshipResponse = 506,
    k_EGCMsgGetPartnerAccountLink = 507,
    k_EGCMsgGetPartnerAccountLinkResponse = 508,
    k_EGCMsgDPPartnerMicroTxns = 512,
    k_EGCMsgDPPartnerMicroTxnsResponse = 513,
    k_EGCMsgVacVerificationChange = 518,
    k_EGCMsgAccountPhoneNumberChange = 519,
    k_EGCMsgInviteUserToLobby = 523,
    k_EGCMsgGetGamePersonalDataCategoriesRequest = 524,
    k_EGCMsgGetGamePersonalDataCategoriesResponse = 525,
    k_EGCMsgGetGamePersonalDataEntriesRequest = 526,
    k_EGCMsgGetGamePersonalDataEntriesResponse = 527,
    k_EGCMsgTerminateGamePersonalDataEntriesRequest = 528,
    k_EGCMsgTerminateGamePersonalDataEntriesResponse = 529,
    k_EGCMsgRecurringSubscriptionStatusChange = 530,
    k_EGCMsgDirectServiceMethod = 531,
    k_EGCMsgDirectServiceMethodResponse = 532
}

/** ESOMsg enum. */
export enum ESOMsg {
    k_ESOMsg_Create = 21,
    k_ESOMsg_Update = 22,
    k_ESOMsg_Destroy = 23,
    k_ESOMsg_CacheSubscribed = 24,
    k_ESOMsg_CacheUnsubscribed = 25,
    k_ESOMsg_UpdateMultiple = 26,
    k_ESOMsg_CacheSubscriptionCheck = 27,
    k_ESOMsg_CacheSubscriptionRefresh = 28
}

/** EGCBaseClientMsg enum. */
export enum EGCBaseClientMsg {
    k_EMsgGCClientWelcome = 4004,
    k_EMsgGCServerWelcome = 4005,
    k_EMsgGCClientHello = 4006,
    k_EMsgGCServerHello = 4007,
    k_EMsgGCClientConnectionStatus = 4009,
    k_EMsgGCServerConnectionStatus = 4010,
    k_EMsgGCClientHelloPartner = 4011,
    k_EMsgGCClientHelloPW = 4012,
    k_EMsgGCClientHelloR2 = 4013,
    k_EMsgGCClientHelloR3 = 4014,
    k_EMsgGCClientHelloR4 = 4015
}

/** EGCToGCMsg enum. */
export enum EGCToGCMsg {
    k_EGCToGCMsgMasterAck = 150,
    k_EGCToGCMsgMasterAckResponse = 151,
    k_EGCToGCMsgRouted = 152,
    k_EGCToGCMsgRoutedReply = 153,
    k_EMsgUpdateSessionIP = 154,
    k_EMsgRequestSessionIP = 155,
    k_EMsgRequestSessionIPResponse = 156,
    k_EGCToGCMsgMasterStartupComplete = 157
}

/** ECommunityItemClass enum. */
export enum ECommunityItemClass {
    k_ECommunityItemClass_Invalid = 0,
    k_ECommunityItemClass_Badge = 1,
    k_ECommunityItemClass_GameCard = 2,
    k_ECommunityItemClass_ProfileBackground = 3,
    k_ECommunityItemClass_Emoticon = 4,
    k_ECommunityItemClass_BoosterPack = 5,
    k_ECommunityItemClass_Consumable = 6,
    k_ECommunityItemClass_GameGoo = 7,
    k_ECommunityItemClass_ProfileModifier = 8,
    k_ECommunityItemClass_Scene = 9,
    k_ECommunityItemClass_SalienItem = 10
}

/** ECommunityItemAttribute enum. */
export enum ECommunityItemAttribute {
    k_ECommunityItemAttribute_Invalid = 0,
    k_ECommunityItemAttribute_CardBorder = 1,
    k_ECommunityItemAttribute_Level = 2,
    k_ECommunityItemAttribute_IssueNumber = 3,
    k_ECommunityItemAttribute_TradableTime = 4,
    k_ECommunityItemAttribute_StorePackageID = 5,
    k_ECommunityItemAttribute_CommunityItemAppID = 6,
    k_ECommunityItemAttribute_CommunityItemType = 7,
    k_ECommunityItemAttribute_ProfileModiferEnabled = 8,
    k_ECommunityItemAttribute_ExpiryTime = 9
}

/** Represents a CMsgGCHVacVerificationChange. */
export class CMsgGCHVacVerificationChange implements ICMsgGCHVacVerificationChange {

    /**
     * Constructs a new CMsgGCHVacVerificationChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHVacVerificationChange);

    /** CMsgGCHVacVerificationChange steamid. */
    public steamid: (number|Long);

    /** CMsgGCHVacVerificationChange appid. */
    public appid: number;

    /** CMsgGCHVacVerificationChange isVerified. */
    public isVerified: boolean;

    /**
     * Creates a new CMsgGCHVacVerificationChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCHVacVerificationChange instance
     */
    public static create(properties?: ICMsgGCHVacVerificationChange): CMsgGCHVacVerificationChange;

    /**
     * Encodes the specified CMsgGCHVacVerificationChange message. Does not implicitly {@link CMsgGCHVacVerificationChange.verify|verify} messages.
     * @param message CMsgGCHVacVerificationChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCHVacVerificationChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCHVacVerificationChange message, length delimited. Does not implicitly {@link CMsgGCHVacVerificationChange.verify|verify} messages.
     * @param message CMsgGCHVacVerificationChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCHVacVerificationChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCHVacVerificationChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHVacVerificationChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHVacVerificationChange;

    /**
     * Decodes a CMsgGCHVacVerificationChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCHVacVerificationChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCHVacVerificationChange;

    /**
     * Verifies a CMsgGCHVacVerificationChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCHVacVerificationChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCHVacVerificationChange
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCHVacVerificationChange;

    /**
     * Creates a plain object from a CMsgGCHVacVerificationChange message. Also converts values to other types if specified.
     * @param message CMsgGCHVacVerificationChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCHVacVerificationChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCHVacVerificationChange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCHVacVerificationChange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCHAccountPhoneNumberChange. */
export class CMsgGCHAccountPhoneNumberChange implements ICMsgGCHAccountPhoneNumberChange {

    /**
     * Constructs a new CMsgGCHAccountPhoneNumberChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHAccountPhoneNumberChange);

    /** CMsgGCHAccountPhoneNumberChange steamid. */
    public steamid: (number|Long);

    /** CMsgGCHAccountPhoneNumberChange appid. */
    public appid: number;

    /** CMsgGCHAccountPhoneNumberChange phoneId. */
    public phoneId: (number|Long);

    /** CMsgGCHAccountPhoneNumberChange isVerified. */
    public isVerified: boolean;

    /** CMsgGCHAccountPhoneNumberChange isIdentifying. */
    public isIdentifying: boolean;

    /**
     * Creates a new CMsgGCHAccountPhoneNumberChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCHAccountPhoneNumberChange instance
     */
    public static create(properties?: ICMsgGCHAccountPhoneNumberChange): CMsgGCHAccountPhoneNumberChange;

    /**
     * Encodes the specified CMsgGCHAccountPhoneNumberChange message. Does not implicitly {@link CMsgGCHAccountPhoneNumberChange.verify|verify} messages.
     * @param message CMsgGCHAccountPhoneNumberChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCHAccountPhoneNumberChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCHAccountPhoneNumberChange message, length delimited. Does not implicitly {@link CMsgGCHAccountPhoneNumberChange.verify|verify} messages.
     * @param message CMsgGCHAccountPhoneNumberChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCHAccountPhoneNumberChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCHAccountPhoneNumberChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHAccountPhoneNumberChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHAccountPhoneNumberChange;

    /**
     * Decodes a CMsgGCHAccountPhoneNumberChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCHAccountPhoneNumberChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCHAccountPhoneNumberChange;

    /**
     * Verifies a CMsgGCHAccountPhoneNumberChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCHAccountPhoneNumberChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCHAccountPhoneNumberChange
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCHAccountPhoneNumberChange;

    /**
     * Creates a plain object from a CMsgGCHAccountPhoneNumberChange message. Also converts values to other types if specified.
     * @param message CMsgGCHAccountPhoneNumberChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCHAccountPhoneNumberChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCHAccountPhoneNumberChange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCHAccountPhoneNumberChange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCHInviteUserToLobby. */
export class CMsgGCHInviteUserToLobby implements ICMsgGCHInviteUserToLobby {

    /**
     * Constructs a new CMsgGCHInviteUserToLobby.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHInviteUserToLobby);

    /** CMsgGCHInviteUserToLobby steamid. */
    public steamid: (number|Long);

    /** CMsgGCHInviteUserToLobby appid. */
    public appid: number;

    /** CMsgGCHInviteUserToLobby steamidInvited. */
    public steamidInvited: (number|Long);

    /** CMsgGCHInviteUserToLobby steamidLobby. */
    public steamidLobby: (number|Long);

    /**
     * Creates a new CMsgGCHInviteUserToLobby instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCHInviteUserToLobby instance
     */
    public static create(properties?: ICMsgGCHInviteUserToLobby): CMsgGCHInviteUserToLobby;

    /**
     * Encodes the specified CMsgGCHInviteUserToLobby message. Does not implicitly {@link CMsgGCHInviteUserToLobby.verify|verify} messages.
     * @param message CMsgGCHInviteUserToLobby message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCHInviteUserToLobby, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCHInviteUserToLobby message, length delimited. Does not implicitly {@link CMsgGCHInviteUserToLobby.verify|verify} messages.
     * @param message CMsgGCHInviteUserToLobby message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCHInviteUserToLobby, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCHInviteUserToLobby message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHInviteUserToLobby
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHInviteUserToLobby;

    /**
     * Decodes a CMsgGCHInviteUserToLobby message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCHInviteUserToLobby
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCHInviteUserToLobby;

    /**
     * Verifies a CMsgGCHInviteUserToLobby message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCHInviteUserToLobby message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCHInviteUserToLobby
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCHInviteUserToLobby;

    /**
     * Creates a plain object from a CMsgGCHInviteUserToLobby message. Also converts values to other types if specified.
     * @param message CMsgGCHInviteUserToLobby
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCHInviteUserToLobby, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCHInviteUserToLobby to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCHInviteUserToLobby
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCHRecurringSubscriptionStatusChange. */
export class CMsgGCHRecurringSubscriptionStatusChange implements ICMsgGCHRecurringSubscriptionStatusChange {

    /**
     * Constructs a new CMsgGCHRecurringSubscriptionStatusChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHRecurringSubscriptionStatusChange);

    /** CMsgGCHRecurringSubscriptionStatusChange steamid. */
    public steamid: (number|Long);

    /** CMsgGCHRecurringSubscriptionStatusChange appid. */
    public appid: number;

    /** CMsgGCHRecurringSubscriptionStatusChange agreementid. */
    public agreementid: (number|Long);

    /** CMsgGCHRecurringSubscriptionStatusChange active. */
    public active: boolean;

    /**
     * Creates a new CMsgGCHRecurringSubscriptionStatusChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCHRecurringSubscriptionStatusChange instance
     */
    public static create(properties?: ICMsgGCHRecurringSubscriptionStatusChange): CMsgGCHRecurringSubscriptionStatusChange;

    /**
     * Encodes the specified CMsgGCHRecurringSubscriptionStatusChange message. Does not implicitly {@link CMsgGCHRecurringSubscriptionStatusChange.verify|verify} messages.
     * @param message CMsgGCHRecurringSubscriptionStatusChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCHRecurringSubscriptionStatusChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCHRecurringSubscriptionStatusChange message, length delimited. Does not implicitly {@link CMsgGCHRecurringSubscriptionStatusChange.verify|verify} messages.
     * @param message CMsgGCHRecurringSubscriptionStatusChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCHRecurringSubscriptionStatusChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCHRecurringSubscriptionStatusChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHRecurringSubscriptionStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHRecurringSubscriptionStatusChange;

    /**
     * Decodes a CMsgGCHRecurringSubscriptionStatusChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCHRecurringSubscriptionStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCHRecurringSubscriptionStatusChange;

    /**
     * Verifies a CMsgGCHRecurringSubscriptionStatusChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCHRecurringSubscriptionStatusChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCHRecurringSubscriptionStatusChange
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCHRecurringSubscriptionStatusChange;

    /**
     * Creates a plain object from a CMsgGCHRecurringSubscriptionStatusChange message. Also converts values to other types if specified.
     * @param message CMsgGCHRecurringSubscriptionStatusChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCHRecurringSubscriptionStatusChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCHRecurringSubscriptionStatusChange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCHRecurringSubscriptionStatusChange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CQuest_PublisherAddCommunityItemsToPlayer_Request. */
export class CQuest_PublisherAddCommunityItemsToPlayer_Request implements ICQuest_PublisherAddCommunityItemsToPlayer_Request {

    /**
     * Constructs a new CQuest_PublisherAddCommunityItemsToPlayer_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICQuest_PublisherAddCommunityItemsToPlayer_Request);

    /** CQuest_PublisherAddCommunityItemsToPlayer_Request steamid. */
    public steamid: (number|Long);

    /** CQuest_PublisherAddCommunityItemsToPlayer_Request appid. */
    public appid: number;

    /** CQuest_PublisherAddCommunityItemsToPlayer_Request matchItemType. */
    public matchItemType: number;

    /** CQuest_PublisherAddCommunityItemsToPlayer_Request matchItemClass. */
    public matchItemClass: number;

    /** CQuest_PublisherAddCommunityItemsToPlayer_Request prefixItemName. */
    public prefixItemName: string;

    /** CQuest_PublisherAddCommunityItemsToPlayer_Request attributes. */
    public attributes: CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute[];

    /** CQuest_PublisherAddCommunityItemsToPlayer_Request note. */
    public note: string;

    /**
     * Creates a new CQuest_PublisherAddCommunityItemsToPlayer_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Request instance
     */
    public static create(properties?: ICQuest_PublisherAddCommunityItemsToPlayer_Request): CQuest_PublisherAddCommunityItemsToPlayer_Request;

    /**
     * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Request message. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.verify|verify} messages.
     * @param message CQuest_PublisherAddCommunityItemsToPlayer_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICQuest_PublisherAddCommunityItemsToPlayer_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Request message, length delimited. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.verify|verify} messages.
     * @param message CQuest_PublisherAddCommunityItemsToPlayer_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICQuest_PublisherAddCommunityItemsToPlayer_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CQuest_PublisherAddCommunityItemsToPlayer_Request;

    /**
     * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CQuest_PublisherAddCommunityItemsToPlayer_Request;

    /**
     * Verifies a CQuest_PublisherAddCommunityItemsToPlayer_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CQuest_PublisherAddCommunityItemsToPlayer_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Request
     */
    public static fromObject(object: { [k: string]: any }): CQuest_PublisherAddCommunityItemsToPlayer_Request;

    /**
     * Creates a plain object from a CQuest_PublisherAddCommunityItemsToPlayer_Request message. Also converts values to other types if specified.
     * @param message CQuest_PublisherAddCommunityItemsToPlayer_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CQuest_PublisherAddCommunityItemsToPlayer_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CQuest_PublisherAddCommunityItemsToPlayer_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CQuest_PublisherAddCommunityItemsToPlayer_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CQuest_PublisherAddCommunityItemsToPlayer_Request {

    /** Properties of an Attribute. */
    interface IAttribute {

        /** Attribute attribute */
        attribute?: (number|null);

        /** Attribute value */
        value?: (number|Long|null);
    }

    /** Represents an Attribute. */
    class Attribute implements IAttribute {

        /**
         * Constructs a new Attribute.
         * @param [properties] Properties to set
         */
        constructor(properties?: CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute);

        /** Attribute attribute. */
        public attribute: number;

        /** Attribute value. */
        public value: (number|Long);

        /**
         * Creates a new Attribute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attribute instance
         */
        public static create(properties?: CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute): CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute;

        /**
         * Encodes the specified Attribute message. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.verify|verify} messages.
         * @param message Attribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attribute message, length delimited. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.verify|verify} messages.
         * @param message Attribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attribute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute;

        /**
         * Decodes an Attribute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute;

        /**
         * Verifies an Attribute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attribute
         */
        public static fromObject(object: { [k: string]: any }): CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute;

        /**
         * Creates a plain object from an Attribute message. Also converts values to other types if specified.
         * @param message Attribute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attribute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Attribute
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CQuest_PublisherAddCommunityItemsToPlayer_Response. */
export class CQuest_PublisherAddCommunityItemsToPlayer_Response implements ICQuest_PublisherAddCommunityItemsToPlayer_Response {

    /**
     * Constructs a new CQuest_PublisherAddCommunityItemsToPlayer_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICQuest_PublisherAddCommunityItemsToPlayer_Response);

    /** CQuest_PublisherAddCommunityItemsToPlayer_Response itemsMatched. */
    public itemsMatched: number;

    /** CQuest_PublisherAddCommunityItemsToPlayer_Response itemsGranted. */
    public itemsGranted: number;

    /**
     * Creates a new CQuest_PublisherAddCommunityItemsToPlayer_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Response instance
     */
    public static create(properties?: ICQuest_PublisherAddCommunityItemsToPlayer_Response): CQuest_PublisherAddCommunityItemsToPlayer_Response;

    /**
     * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Response message. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Response.verify|verify} messages.
     * @param message CQuest_PublisherAddCommunityItemsToPlayer_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICQuest_PublisherAddCommunityItemsToPlayer_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Response message, length delimited. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Response.verify|verify} messages.
     * @param message CQuest_PublisherAddCommunityItemsToPlayer_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICQuest_PublisherAddCommunityItemsToPlayer_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CQuest_PublisherAddCommunityItemsToPlayer_Response;

    /**
     * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CQuest_PublisherAddCommunityItemsToPlayer_Response;

    /**
     * Verifies a CQuest_PublisherAddCommunityItemsToPlayer_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CQuest_PublisherAddCommunityItemsToPlayer_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CQuest_PublisherAddCommunityItemsToPlayer_Response
     */
    public static fromObject(object: { [k: string]: any }): CQuest_PublisherAddCommunityItemsToPlayer_Response;

    /**
     * Creates a plain object from a CQuest_PublisherAddCommunityItemsToPlayer_Response message. Also converts values to other types if specified.
     * @param message CQuest_PublisherAddCommunityItemsToPlayer_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CQuest_PublisherAddCommunityItemsToPlayer_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CQuest_PublisherAddCommunityItemsToPlayer_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CQuest_PublisherAddCommunityItemsToPlayer_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_GamePersonalDataCategoryInfo. */
export class CCommunity_GamePersonalDataCategoryInfo implements ICCommunity_GamePersonalDataCategoryInfo {

    /**
     * Constructs a new CCommunity_GamePersonalDataCategoryInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_GamePersonalDataCategoryInfo);

    /** CCommunity_GamePersonalDataCategoryInfo type. */
    public type: string;

    /** CCommunity_GamePersonalDataCategoryInfo localizationToken. */
    public localizationToken: string;

    /** CCommunity_GamePersonalDataCategoryInfo templateFile. */
    public templateFile: string;

    /**
     * Creates a new CCommunity_GamePersonalDataCategoryInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_GamePersonalDataCategoryInfo instance
     */
    public static create(properties?: ICCommunity_GamePersonalDataCategoryInfo): CCommunity_GamePersonalDataCategoryInfo;

    /**
     * Encodes the specified CCommunity_GamePersonalDataCategoryInfo message. Does not implicitly {@link CCommunity_GamePersonalDataCategoryInfo.verify|verify} messages.
     * @param message CCommunity_GamePersonalDataCategoryInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_GamePersonalDataCategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_GamePersonalDataCategoryInfo message, length delimited. Does not implicitly {@link CCommunity_GamePersonalDataCategoryInfo.verify|verify} messages.
     * @param message CCommunity_GamePersonalDataCategoryInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_GamePersonalDataCategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_GamePersonalDataCategoryInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_GamePersonalDataCategoryInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_GamePersonalDataCategoryInfo;

    /**
     * Decodes a CCommunity_GamePersonalDataCategoryInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_GamePersonalDataCategoryInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_GamePersonalDataCategoryInfo;

    /**
     * Verifies a CCommunity_GamePersonalDataCategoryInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_GamePersonalDataCategoryInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_GamePersonalDataCategoryInfo
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_GamePersonalDataCategoryInfo;

    /**
     * Creates a plain object from a CCommunity_GamePersonalDataCategoryInfo message. Also converts values to other types if specified.
     * @param message CCommunity_GamePersonalDataCategoryInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_GamePersonalDataCategoryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_GamePersonalDataCategoryInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_GamePersonalDataCategoryInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_GetGamePersonalDataCategories_Request. */
export class CCommunity_GetGamePersonalDataCategories_Request implements ICCommunity_GetGamePersonalDataCategories_Request {

    /**
     * Constructs a new CCommunity_GetGamePersonalDataCategories_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_GetGamePersonalDataCategories_Request);

    /** CCommunity_GetGamePersonalDataCategories_Request appid. */
    public appid: number;

    /**
     * Creates a new CCommunity_GetGamePersonalDataCategories_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_GetGamePersonalDataCategories_Request instance
     */
    public static create(properties?: ICCommunity_GetGamePersonalDataCategories_Request): CCommunity_GetGamePersonalDataCategories_Request;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataCategories_Request message. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Request.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataCategories_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_GetGamePersonalDataCategories_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataCategories_Request message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Request.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataCategories_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_GetGamePersonalDataCategories_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_GetGamePersonalDataCategories_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_GetGamePersonalDataCategories_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_GetGamePersonalDataCategories_Request;

    /**
     * Decodes a CCommunity_GetGamePersonalDataCategories_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_GetGamePersonalDataCategories_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_GetGamePersonalDataCategories_Request;

    /**
     * Verifies a CCommunity_GetGamePersonalDataCategories_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_GetGamePersonalDataCategories_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_GetGamePersonalDataCategories_Request
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_GetGamePersonalDataCategories_Request;

    /**
     * Creates a plain object from a CCommunity_GetGamePersonalDataCategories_Request message. Also converts values to other types if specified.
     * @param message CCommunity_GetGamePersonalDataCategories_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_GetGamePersonalDataCategories_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_GetGamePersonalDataCategories_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_GetGamePersonalDataCategories_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_GetGamePersonalDataCategories_Response. */
export class CCommunity_GetGamePersonalDataCategories_Response implements ICCommunity_GetGamePersonalDataCategories_Response {

    /**
     * Constructs a new CCommunity_GetGamePersonalDataCategories_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_GetGamePersonalDataCategories_Response);

    /** CCommunity_GetGamePersonalDataCategories_Response categories. */
    public categories: ICCommunity_GamePersonalDataCategoryInfo[];

    /** CCommunity_GetGamePersonalDataCategories_Response appAssetsBasename. */
    public appAssetsBasename: string;

    /**
     * Creates a new CCommunity_GetGamePersonalDataCategories_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_GetGamePersonalDataCategories_Response instance
     */
    public static create(properties?: ICCommunity_GetGamePersonalDataCategories_Response): CCommunity_GetGamePersonalDataCategories_Response;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataCategories_Response message. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Response.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataCategories_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_GetGamePersonalDataCategories_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataCategories_Response message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Response.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataCategories_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_GetGamePersonalDataCategories_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_GetGamePersonalDataCategories_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_GetGamePersonalDataCategories_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_GetGamePersonalDataCategories_Response;

    /**
     * Decodes a CCommunity_GetGamePersonalDataCategories_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_GetGamePersonalDataCategories_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_GetGamePersonalDataCategories_Response;

    /**
     * Verifies a CCommunity_GetGamePersonalDataCategories_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_GetGamePersonalDataCategories_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_GetGamePersonalDataCategories_Response
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_GetGamePersonalDataCategories_Response;

    /**
     * Creates a plain object from a CCommunity_GetGamePersonalDataCategories_Response message. Also converts values to other types if specified.
     * @param message CCommunity_GetGamePersonalDataCategories_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_GetGamePersonalDataCategories_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_GetGamePersonalDataCategories_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_GetGamePersonalDataCategories_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_GetGamePersonalDataEntries_Request. */
export class CCommunity_GetGamePersonalDataEntries_Request implements ICCommunity_GetGamePersonalDataEntries_Request {

    /**
     * Constructs a new CCommunity_GetGamePersonalDataEntries_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_GetGamePersonalDataEntries_Request);

    /** CCommunity_GetGamePersonalDataEntries_Request appid. */
    public appid: number;

    /** CCommunity_GetGamePersonalDataEntries_Request steamid. */
    public steamid: (number|Long);

    /** CCommunity_GetGamePersonalDataEntries_Request type. */
    public type: string;

    /** CCommunity_GetGamePersonalDataEntries_Request continueToken. */
    public continueToken: string;

    /**
     * Creates a new CCommunity_GetGamePersonalDataEntries_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_GetGamePersonalDataEntries_Request instance
     */
    public static create(properties?: ICCommunity_GetGamePersonalDataEntries_Request): CCommunity_GetGamePersonalDataEntries_Request;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataEntries_Request message. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Request.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataEntries_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_GetGamePersonalDataEntries_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataEntries_Request message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Request.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataEntries_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_GetGamePersonalDataEntries_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_GetGamePersonalDataEntries_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_GetGamePersonalDataEntries_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_GetGamePersonalDataEntries_Request;

    /**
     * Decodes a CCommunity_GetGamePersonalDataEntries_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_GetGamePersonalDataEntries_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_GetGamePersonalDataEntries_Request;

    /**
     * Verifies a CCommunity_GetGamePersonalDataEntries_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_GetGamePersonalDataEntries_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_GetGamePersonalDataEntries_Request
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_GetGamePersonalDataEntries_Request;

    /**
     * Creates a plain object from a CCommunity_GetGamePersonalDataEntries_Request message. Also converts values to other types if specified.
     * @param message CCommunity_GetGamePersonalDataEntries_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_GetGamePersonalDataEntries_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_GetGamePersonalDataEntries_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_GetGamePersonalDataEntries_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_GetGamePersonalDataEntries_Response. */
export class CCommunity_GetGamePersonalDataEntries_Response implements ICCommunity_GetGamePersonalDataEntries_Response {

    /**
     * Constructs a new CCommunity_GetGamePersonalDataEntries_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_GetGamePersonalDataEntries_Response);

    /** CCommunity_GetGamePersonalDataEntries_Response gceresult. */
    public gceresult: number;

    /** CCommunity_GetGamePersonalDataEntries_Response entries. */
    public entries: string[];

    /** CCommunity_GetGamePersonalDataEntries_Response continueToken. */
    public continueToken: string;

    /**
     * Creates a new CCommunity_GetGamePersonalDataEntries_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_GetGamePersonalDataEntries_Response instance
     */
    public static create(properties?: ICCommunity_GetGamePersonalDataEntries_Response): CCommunity_GetGamePersonalDataEntries_Response;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataEntries_Response message. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Response.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataEntries_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_GetGamePersonalDataEntries_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_GetGamePersonalDataEntries_Response message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Response.verify|verify} messages.
     * @param message CCommunity_GetGamePersonalDataEntries_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_GetGamePersonalDataEntries_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_GetGamePersonalDataEntries_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_GetGamePersonalDataEntries_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_GetGamePersonalDataEntries_Response;

    /**
     * Decodes a CCommunity_GetGamePersonalDataEntries_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_GetGamePersonalDataEntries_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_GetGamePersonalDataEntries_Response;

    /**
     * Verifies a CCommunity_GetGamePersonalDataEntries_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_GetGamePersonalDataEntries_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_GetGamePersonalDataEntries_Response
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_GetGamePersonalDataEntries_Response;

    /**
     * Creates a plain object from a CCommunity_GetGamePersonalDataEntries_Response message. Also converts values to other types if specified.
     * @param message CCommunity_GetGamePersonalDataEntries_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_GetGamePersonalDataEntries_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_GetGamePersonalDataEntries_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_GetGamePersonalDataEntries_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_TerminateGamePersonalDataEntries_Request. */
export class CCommunity_TerminateGamePersonalDataEntries_Request implements ICCommunity_TerminateGamePersonalDataEntries_Request {

    /**
     * Constructs a new CCommunity_TerminateGamePersonalDataEntries_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_TerminateGamePersonalDataEntries_Request);

    /** CCommunity_TerminateGamePersonalDataEntries_Request appid. */
    public appid: number;

    /** CCommunity_TerminateGamePersonalDataEntries_Request steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CCommunity_TerminateGamePersonalDataEntries_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_TerminateGamePersonalDataEntries_Request instance
     */
    public static create(properties?: ICCommunity_TerminateGamePersonalDataEntries_Request): CCommunity_TerminateGamePersonalDataEntries_Request;

    /**
     * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Request message. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Request.verify|verify} messages.
     * @param message CCommunity_TerminateGamePersonalDataEntries_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_TerminateGamePersonalDataEntries_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Request message, length delimited. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Request.verify|verify} messages.
     * @param message CCommunity_TerminateGamePersonalDataEntries_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_TerminateGamePersonalDataEntries_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_TerminateGamePersonalDataEntries_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_TerminateGamePersonalDataEntries_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_TerminateGamePersonalDataEntries_Request;

    /**
     * Decodes a CCommunity_TerminateGamePersonalDataEntries_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_TerminateGamePersonalDataEntries_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_TerminateGamePersonalDataEntries_Request;

    /**
     * Verifies a CCommunity_TerminateGamePersonalDataEntries_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_TerminateGamePersonalDataEntries_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_TerminateGamePersonalDataEntries_Request
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_TerminateGamePersonalDataEntries_Request;

    /**
     * Creates a plain object from a CCommunity_TerminateGamePersonalDataEntries_Request message. Also converts values to other types if specified.
     * @param message CCommunity_TerminateGamePersonalDataEntries_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_TerminateGamePersonalDataEntries_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_TerminateGamePersonalDataEntries_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_TerminateGamePersonalDataEntries_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_TerminateGamePersonalDataEntries_Response. */
export class CCommunity_TerminateGamePersonalDataEntries_Response implements ICCommunity_TerminateGamePersonalDataEntries_Response {

    /**
     * Constructs a new CCommunity_TerminateGamePersonalDataEntries_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_TerminateGamePersonalDataEntries_Response);

    /** CCommunity_TerminateGamePersonalDataEntries_Response gceresult. */
    public gceresult: number;

    /**
     * Creates a new CCommunity_TerminateGamePersonalDataEntries_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_TerminateGamePersonalDataEntries_Response instance
     */
    public static create(properties?: ICCommunity_TerminateGamePersonalDataEntries_Response): CCommunity_TerminateGamePersonalDataEntries_Response;

    /**
     * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Response message. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Response.verify|verify} messages.
     * @param message CCommunity_TerminateGamePersonalDataEntries_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_TerminateGamePersonalDataEntries_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Response message, length delimited. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Response.verify|verify} messages.
     * @param message CCommunity_TerminateGamePersonalDataEntries_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_TerminateGamePersonalDataEntries_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_TerminateGamePersonalDataEntries_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_TerminateGamePersonalDataEntries_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_TerminateGamePersonalDataEntries_Response;

    /**
     * Decodes a CCommunity_TerminateGamePersonalDataEntries_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_TerminateGamePersonalDataEntries_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_TerminateGamePersonalDataEntries_Response;

    /**
     * Verifies a CCommunity_TerminateGamePersonalDataEntries_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_TerminateGamePersonalDataEntries_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_TerminateGamePersonalDataEntries_Response
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_TerminateGamePersonalDataEntries_Response;

    /**
     * Creates a plain object from a CCommunity_TerminateGamePersonalDataEntries_Response message. Also converts values to other types if specified.
     * @param message CCommunity_TerminateGamePersonalDataEntries_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_TerminateGamePersonalDataEntries_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_TerminateGamePersonalDataEntries_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_TerminateGamePersonalDataEntries_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
