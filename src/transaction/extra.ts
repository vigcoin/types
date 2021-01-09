import { usize } from '../basic';
import { IPublicKey } from '../key';

export const TX_EXTRA_PADDING_MAX_COUNT = 255;
export const TX_EXTRA_NONCE_MAX_COUNT = 255;

export enum ITransactionExtraTag {
  PADDING = 0x00,
  PUBKEY = 0x01,
  NONCE = 0x02,
}

export interface ITransactionExtraPadding {
  size: usize;
}

export interface ITransactionExtraPublicKey {
  key: IPublicKey;
}

export interface ITransactionExtraNonce {
  nonce: Buffer;
}

export interface ITransactionExtra {
  tag: ITransactionExtraTag;
  data:
    | ITransactionExtraNonce
    | ITransactionExtraPublicKey
    | ITransactionExtraPadding;
}
