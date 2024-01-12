import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CUIFontFilePB. */
export interface ICUIFontFilePB {

    /** CUIFontFilePB fontFileName */
    fontFileName?: (string|null);

    /** CUIFontFilePB opentypeFontData */
    opentypeFontData?: (Uint8Array|null);
}

/** Represents a CUIFontFilePB. */
export class CUIFontFilePB implements ICUIFontFilePB {

    /**
     * Constructs a new CUIFontFilePB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUIFontFilePB);

    /** CUIFontFilePB fontFileName. */
    public fontFileName: string;

    /** CUIFontFilePB opentypeFontData. */
    public opentypeFontData: Uint8Array;

    /**
     * Creates a new CUIFontFilePB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUIFontFilePB instance
     */
    public static create(properties?: ICUIFontFilePB): CUIFontFilePB;

    /**
     * Encodes the specified CUIFontFilePB message. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
     * @param message CUIFontFilePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUIFontFilePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUIFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
     * @param message CUIFontFilePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUIFontFilePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUIFontFilePB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUIFontFilePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUIFontFilePB;

    /**
     * Decodes a CUIFontFilePB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUIFontFilePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUIFontFilePB;

    /**
     * Verifies a CUIFontFilePB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUIFontFilePB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUIFontFilePB
     */
    public static fromObject(object: { [k: string]: any }): CUIFontFilePB;

    /**
     * Creates a plain object from a CUIFontFilePB message. Also converts values to other types if specified.
     * @param message CUIFontFilePB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUIFontFilePB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUIFontFilePB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUIFontFilePB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CUIFontFilePackagePB. */
export interface ICUIFontFilePackagePB {

    /** CUIFontFilePackagePB packageVersion */
    packageVersion: number;

    /** CUIFontFilePackagePB encryptedFontFiles */
    encryptedFontFiles?: (CUIFontFilePackagePB.ICUIEncryptedFontFilePB[]|null);
}

/** Represents a CUIFontFilePackagePB. */
export class CUIFontFilePackagePB implements ICUIFontFilePackagePB {

    /**
     * Constructs a new CUIFontFilePackagePB.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICUIFontFilePackagePB);

    /** CUIFontFilePackagePB packageVersion. */
    public packageVersion: number;

    /** CUIFontFilePackagePB encryptedFontFiles. */
    public encryptedFontFiles: CUIFontFilePackagePB.ICUIEncryptedFontFilePB[];

    /**
     * Creates a new CUIFontFilePackagePB instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CUIFontFilePackagePB instance
     */
    public static create(properties?: ICUIFontFilePackagePB): CUIFontFilePackagePB;

    /**
     * Encodes the specified CUIFontFilePackagePB message. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
     * @param message CUIFontFilePackagePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICUIFontFilePackagePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CUIFontFilePackagePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
     * @param message CUIFontFilePackagePB message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICUIFontFilePackagePB, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CUIFontFilePackagePB message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CUIFontFilePackagePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUIFontFilePackagePB;

    /**
     * Decodes a CUIFontFilePackagePB message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CUIFontFilePackagePB
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUIFontFilePackagePB;

    /**
     * Verifies a CUIFontFilePackagePB message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CUIFontFilePackagePB message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CUIFontFilePackagePB
     */
    public static fromObject(object: { [k: string]: any }): CUIFontFilePackagePB;

    /**
     * Creates a plain object from a CUIFontFilePackagePB message. Also converts values to other types if specified.
     * @param message CUIFontFilePackagePB
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CUIFontFilePackagePB, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CUIFontFilePackagePB to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CUIFontFilePackagePB
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CUIFontFilePackagePB {

    /** Properties of a CUIEncryptedFontFilePB. */
    interface ICUIEncryptedFontFilePB {

        /** CUIEncryptedFontFilePB encryptedContents */
        encryptedContents?: (Uint8Array|null);
    }

    /** Represents a CUIEncryptedFontFilePB. */
    class CUIEncryptedFontFilePB implements ICUIEncryptedFontFilePB {

        /**
         * Constructs a new CUIEncryptedFontFilePB.
         * @param [properties] Properties to set
         */
        constructor(properties?: CUIFontFilePackagePB.ICUIEncryptedFontFilePB);

        /** CUIEncryptedFontFilePB encryptedContents. */
        public encryptedContents: Uint8Array;

        /**
         * Creates a new CUIEncryptedFontFilePB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CUIEncryptedFontFilePB instance
         */
        public static create(properties?: CUIFontFilePackagePB.ICUIEncryptedFontFilePB): CUIFontFilePackagePB.CUIEncryptedFontFilePB;

        /**
         * Encodes the specified CUIEncryptedFontFilePB message. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
         * @param message CUIEncryptedFontFilePB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CUIFontFilePackagePB.ICUIEncryptedFontFilePB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CUIEncryptedFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
         * @param message CUIEncryptedFontFilePB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CUIFontFilePackagePB.ICUIEncryptedFontFilePB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CUIEncryptedFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CUIFontFilePackagePB.CUIEncryptedFontFilePB;

        /**
         * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CUIEncryptedFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CUIFontFilePackagePB.CUIEncryptedFontFilePB;

        /**
         * Verifies a CUIEncryptedFontFilePB message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CUIEncryptedFontFilePB message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CUIEncryptedFontFilePB
         */
        public static fromObject(object: { [k: string]: any }): CUIFontFilePackagePB.CUIEncryptedFontFilePB;

        /**
         * Creates a plain object from a CUIEncryptedFontFilePB message. Also converts values to other types if specified.
         * @param message CUIEncryptedFontFilePB
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CUIFontFilePackagePB.CUIEncryptedFontFilePB, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CUIEncryptedFontFilePB to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CUIEncryptedFontFilePB
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
