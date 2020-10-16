import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { LoginAckToken } from './token';
declare function loginAckParser(parser: Parser, _options: InternalConnectionOptions, callback: (token: LoginAckToken) => void): void;
export default loginAckParser;
//# sourceMappingURL=loginack-token-parser.d.ts.map