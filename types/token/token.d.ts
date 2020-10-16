/// <reference types="node" />
import { Metadata } from '../metadata-parser';
import { ColumnMetadata } from './colmetadata-token-parser';
export declare const TYPE: {
    ALTMETADATA: number;
    ALTROW: number;
    COLMETADATA: number;
    COLINFO: number;
    DONE: number;
    DONEPROC: number;
    DONEINPROC: number;
    ENVCHANGE: number;
    ERROR: number;
    FEATUREEXTACK: number;
    FEDAUTHINFO: number;
    INFO: number;
    LOGINACK: number;
    NBCROW: number;
    OFFSET: number;
    ORDER: number;
    RETURNSTATUS: number;
    RETURNVALUE: number;
    ROW: number;
    SSPI: number;
    TABNAME: number;
};
export declare abstract class Token {
    name: string;
    event: string;
    constructor(name: string, event: string);
}
export declare class ColMetadataToken extends Token {
    name: 'COLMETADATA';
    event: 'columnMetadata';
    columns: ColumnMetadata[];
    constructor(columns: ColumnMetadata[]);
}
export declare class DoneToken extends Token {
    name: 'DONE';
    event: 'done';
    more: boolean;
    sqlError: boolean;
    attention: boolean;
    serverError: boolean;
    rowCount: number | undefined;
    curCmd: number;
    constructor({ more, sqlError, attention, serverError, rowCount, curCmd }: {
        more: boolean;
        sqlError: boolean;
        attention: boolean;
        serverError: boolean;
        rowCount: number | undefined;
        curCmd: number;
    });
}
export declare class DoneInProcToken extends Token {
    name: 'DONEINPROC';
    event: 'doneInProc';
    more: boolean;
    sqlError: boolean;
    attention: boolean;
    serverError: boolean;
    rowCount: number | undefined;
    curCmd: number;
    constructor({ more, sqlError, attention, serverError, rowCount, curCmd }: {
        more: boolean;
        sqlError: boolean;
        attention: boolean;
        serverError: boolean;
        rowCount: number | undefined;
        curCmd: number;
    });
}
export declare class DoneProcToken extends Token {
    name: 'DONEPROC';
    event: 'doneProc';
    more: boolean;
    sqlError: boolean;
    attention: boolean;
    serverError: boolean;
    rowCount: number | undefined;
    curCmd: number;
    constructor({ more, sqlError, attention, serverError, rowCount, curCmd }: {
        more: boolean;
        sqlError: boolean;
        attention: boolean;
        serverError: boolean;
        rowCount: number | undefined;
        curCmd: number;
    });
}
export declare class DatabaseEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'databaseChange';
    type: 'DATABASE';
    newValue: string;
    oldValue: string;
    constructor(newValue: string, oldValue: string);
}
export declare class LanguageEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'languageChange';
    type: 'LANGUAGE';
    newValue: string;
    oldValue: string;
    constructor(newValue: string, oldValue: string);
}
export declare class CharsetEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'charsetChange';
    type: 'CHARSET';
    newValue: string;
    oldValue: string;
    constructor(newValue: string, oldValue: string);
}
export declare class PacketSizeEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'packetSizeChange';
    type: 'PACKET_SIZE';
    newValue: number;
    oldValue: number;
    constructor(newValue: number, oldValue: number);
}
export declare class BeginTransactionEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'beginTransaction';
    type: 'BEGIN_TXN';
    newValue: Buffer;
    oldValue: Buffer;
    constructor(newValue: Buffer, oldValue: Buffer);
}
export declare class CommitTransactionEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'commitTransaction';
    type: 'COMMIT_TXN';
    newValue: Buffer;
    oldValue: Buffer;
    constructor(newValue: Buffer, oldValue: Buffer);
}
export declare class RollbackTransactionEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'rollbackTransaction';
    type: 'ROLLBACK_TXN';
    oldValue: Buffer;
    newValue: Buffer;
    constructor(newValue: Buffer, oldValue: Buffer);
}
export declare class DatabaseMirroringPartnerEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'partnerNode';
    type: 'DATABASE_MIRRORING_PARTNER';
    oldValue: string;
    newValue: string;
    constructor(newValue: string, oldValue: string);
}
export declare class ResetConnectionEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'resetConnection';
    type: 'RESET_CONNECTION';
    oldValue: Buffer;
    newValue: Buffer;
    constructor(newValue: Buffer, oldValue: Buffer);
}
export declare class CollationChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'sqlCollationChange';
    type: 'SQL_COLLATION';
    oldValue: Buffer;
    newValue: Buffer;
    constructor(newValue: Buffer, oldValue: Buffer);
}
export declare class RoutingEnvChangeToken extends Token {
    name: 'ENVCHANGE';
    event: 'routingChange';
    type: 'ROUTING_CHANGE';
    newValue: {
        protocol: number;
        port: number;
        server: string;
    };
    oldValue: Buffer;
    constructor(newValue: {
        protocol: number;
        port: number;
        server: string;
    }, oldValue: Buffer);
}
export declare class FeatureExtAckToken extends Token {
    name: 'FEATUREEXTACK';
    event: 'featureExtAck';
    fedAuth: Buffer | undefined;
    constructor(fedAuth: Buffer | undefined);
}
export declare class FedAuthInfoToken extends Token {
    name: 'FEDAUTHINFO';
    event: 'fedAuthInfo';
    spn: string | undefined;
    stsurl: string | undefined;
    constructor(spn: string | undefined, stsurl: string | undefined);
}
export declare class InfoMessageToken extends Token {
    name: 'INFO';
    event: 'infoMessage';
    number: number;
    state: number;
    class: number;
    message: string;
    serverName: string;
    procName: string;
    lineNumber: number;
    constructor({ number, state, class: clazz, message, serverName, procName, lineNumber }: {
        number: number;
        state: number;
        class: number;
        message: string;
        serverName: string;
        procName: string;
        lineNumber: number;
    });
}
export declare class ErrorMessageToken extends Token {
    name: 'ERROR';
    event: 'errorMessage';
    number: number;
    state: number;
    class: number;
    message: string;
    serverName: string;
    procName: string;
    lineNumber: number;
    constructor({ number, state, class: clazz, message, serverName, procName, lineNumber }: {
        number: number;
        state: number;
        class: number;
        message: string;
        serverName: string;
        procName: string;
        lineNumber: number;
    });
}
export declare class LoginAckToken extends Token {
    name: 'LOGINACK';
    event: 'loginack';
    interface: string;
    tdsVersion: string;
    progName: string;
    progVersion: {
        major: number;
        minor: number;
        buildNumHi: number;
        buildNumLow: number;
    };
    constructor({ interface: interfaze, tdsVersion, progName, progVersion }: {
        interface: LoginAckToken['interface'];
        tdsVersion: LoginAckToken['tdsVersion'];
        progName: LoginAckToken['progName'];
        progVersion: LoginAckToken['progVersion'];
    });
}
export declare class NBCRowToken extends Token {
    name: 'NBCROW';
    event: 'row';
    columns: any;
    constructor(columns: any);
}
export declare class OrderToken extends Token {
    name: 'ORDER';
    event: 'order';
    orderColumns: number[];
    constructor(orderColumns: number[]);
}
export declare class ReturnStatusToken extends Token {
    name: 'RETURNSTATUS';
    event: 'returnStatus';
    value: number;
    constructor(value: number);
}
export declare class ReturnValueToken extends Token {
    name: 'RETURNVALUE';
    event: 'returnValue';
    paramOrdinal: number;
    paramName: string;
    metadata: Metadata;
    value: unknown;
    constructor({ paramOrdinal, paramName, metadata, value }: {
        paramOrdinal: number;
        paramName: string;
        metadata: Metadata;
        value: unknown;
    });
}
export declare class RowToken extends Token {
    name: 'ROW';
    event: 'row';
    columns: any;
    constructor(columns: any);
}
export declare class SSPIToken extends Token {
    name: 'SSPICHALLENGE';
    event: 'sspichallenge';
    ntlmpacket: any;
    ntlmpacketBuffer: Buffer;
    constructor(ntlmpacket: any, ntlmpacketBuffer: Buffer);
}
export declare class EndOfMessageToken extends Token {
    name: 'EOM';
    event: 'endOfMessage';
    constructor();
}
//# sourceMappingURL=token.d.ts.map