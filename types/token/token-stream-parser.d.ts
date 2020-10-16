/// <reference types="node" />
import { EventEmitter } from 'events';
import StreamParser from './stream-parser';
import Debug from '../debug';
import { InternalConnectionOptions } from '../connection';
import { InfoMessageToken, SSPIToken, ErrorMessageToken, DatabaseEnvChangeToken, LanguageEnvChangeToken, CharsetEnvChangeToken, FedAuthInfoToken, FeatureExtAckToken, LoginAckToken, RoutingEnvChangeToken, PacketSizeEnvChangeToken, BeginTransactionEnvChangeToken, CommitTransactionEnvChangeToken, RollbackTransactionEnvChangeToken, ColMetadataToken, OrderToken, RowToken, NBCRowToken, ReturnStatusToken, ReturnValueToken, DoneInProcToken, DoneProcToken, DoneToken, EndOfMessageToken } from './token';
export declare class Parser extends EventEmitter {
    debug: Debug;
    options: InternalConnectionOptions;
    parser: StreamParser;
    constructor(debug: Debug, options: InternalConnectionOptions);
    on: (((event: 'infoMessage', listener: (token: InfoMessageToken) => void) => this) & ((event: 'errorMessage', listener: (token: ErrorMessageToken) => void) => this) & ((event: 'sspichallenge', listener: (token: SSPIToken) => void) => this) & ((event: 'databaseChange', listener: (token: DatabaseEnvChangeToken) => void) => this) & ((event: 'languageChange', listener: (token: LanguageEnvChangeToken) => void) => this) & ((event: 'charsetChange', listener: (token: CharsetEnvChangeToken) => void) => this) & ((event: 'fedAuthInfo', listener: (token: FedAuthInfoToken) => void) => this) & ((event: 'featureExtAck', listener: (token: FeatureExtAckToken) => void) => this) & ((event: 'loginack', listener: (token: LoginAckToken) => void) => this) & ((event: 'routingChange', listener: (token: RoutingEnvChangeToken) => void) => this) & ((event: 'packetSizeChange', listener: (token: PacketSizeEnvChangeToken) => void) => this) & ((event: 'beginTransaction', listener: (token: BeginTransactionEnvChangeToken) => void) => this) & ((event: 'commitTransaction', listener: (token: CommitTransactionEnvChangeToken) => void) => this) & ((event: 'rollbackTransaction', listener: (token: RollbackTransactionEnvChangeToken) => void) => this) & ((event: 'columnMetadata', listener: (token: ColMetadataToken) => void) => this) & ((event: 'order', listener: (token: OrderToken) => void) => this) & ((event: 'row', listener: (token: RowToken | NBCRowToken) => void) => this) & ((event: 'returnStatus', listener: (token: ReturnStatusToken) => void) => this) & ((event: 'returnValue', listener: (token: ReturnValueToken) => void) => this) & ((event: 'done', listener: (token: DoneToken) => void) => this) & ((event: 'doneInProc', listener: (token: DoneInProcToken) => void) => this) & ((event: 'doneProc', listener: (token: DoneProcToken) => void) => this) & ((event: 'endOfMessage', listener: (token: EndOfMessageToken) => void) => this) & ((event: string | symbol, listener: (...args: any[]) => void) => this));
    addBuffer(buffer: Buffer): boolean;
    addEndOfMessageMarker(): boolean;
    isEnd(): boolean;
    pause(): void;
    resume(): void;
}
//# sourceMappingURL=token-stream-parser.d.ts.map