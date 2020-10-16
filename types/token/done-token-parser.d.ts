import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { DoneToken, DoneInProcToken, DoneProcToken } from './token';
export declare function doneParser(parser: Parser, options: InternalConnectionOptions, callback: (token: DoneToken) => void): void;
export declare function doneInProcParser(parser: Parser, options: InternalConnectionOptions, callback: (token: DoneInProcToken) => void): void;
export declare function doneProcParser(parser: Parser, options: InternalConnectionOptions, callback: (token: DoneProcToken) => void): void;
//# sourceMappingURL=done-token-parser.d.ts.map