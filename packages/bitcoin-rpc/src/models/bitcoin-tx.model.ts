import BigNumber from 'bignumber.js';
import { Transform } from 'class-transformer';

export class BitcoinTx {
    txid: string;
    vout: number;

    @Transform(value => new BigNumber(value), { toClassOnly: true })
    value: BigNumber;
    address: string;
    path: string;
}
