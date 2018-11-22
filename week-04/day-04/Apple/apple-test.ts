'use strict'

import { test } from 'tape';
import { Apple } from './apple';

test('apples', t => {
  const apple = new Apple();

  let actual = apple.getApple();
  let expected = 'apple';

  t.equal(actual, expected);
  t.end();
});