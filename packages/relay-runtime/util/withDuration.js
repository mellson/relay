/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const isPerformanceNowAvailable =
  global?.performance != null && typeof global.performance.now === 'function';

function currentTimestamp(): number {
  if (isPerformanceNowAvailable) {
    return global.performance.now();
  }
  return Date.now();
}

function withDuration<T>(cb: () => T): [number, T] {
  const startTime = currentTimestamp();
  const result = cb();
  return [currentTimestamp() - startTime, result];
}

module.exports = withDuration;
