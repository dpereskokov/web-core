import BigNumber from 'bignumber.js';
import { Transform, Type } from 'class-transformer';

class Backend {
    @Transform(value => new BigNumber(value), { toClassOnly: true })
    blocks: BigNumber;
}

export class BitcoinChainInfo {
    @Type(() => Backend)
    backend: Backend;
}
