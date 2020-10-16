import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { DatabaseEnvChangeToken, LanguageEnvChangeToken, CharsetEnvChangeToken, PacketSizeEnvChangeToken, BeginTransactionEnvChangeToken, CommitTransactionEnvChangeToken, RollbackTransactionEnvChangeToken, DatabaseMirroringPartnerEnvChangeToken, ResetConnectionEnvChangeToken, RoutingEnvChangeToken, CollationChangeToken } from './token';
declare type EnvChangeToken = DatabaseEnvChangeToken | LanguageEnvChangeToken | CharsetEnvChangeToken | PacketSizeEnvChangeToken | BeginTransactionEnvChangeToken | CommitTransactionEnvChangeToken | RollbackTransactionEnvChangeToken | DatabaseMirroringPartnerEnvChangeToken | ResetConnectionEnvChangeToken | RoutingEnvChangeToken | CollationChangeToken;
declare function envChangeParser(parser: Parser, _options: InternalConnectionOptions, callback: (token: EnvChangeToken | undefined) => void): void;
export default envChangeParser;
//# sourceMappingURL=env-change-token-parser.d.ts.map