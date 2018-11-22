'use strict'

import { test } from 'tape';
import { anagram } from './anagram';

test('anagram', t => {

  let actual = anagram('dog', 'god');
  let expected = true;

  t.equal(actual, expected);
  t.end();
});
