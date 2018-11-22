'use strict'

import { test } from 'tape';
import { dictionary } from './count-letters';

test('dictionary', t => {

  let actual = dictionary('kjcbasjkgvjsg')['k'];
  let expected = 2;

  t.equal(actual, expected);
  t.end();
});