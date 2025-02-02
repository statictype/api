// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Float } from '../native/Float';

/**
 * @name f64
 * @description
 * A 64-bit float
 */
export class f64 extends Float.with(64) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __FloatType = 'f64';
}
