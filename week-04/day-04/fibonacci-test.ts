'use strict'

import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('fibonacci', t => {

  let actual = fibonacci(9);
  let expected = 21;

  t.equal(actual, expected);
  t.end();
});

test('fibonacci', t => {

  let actual = fibonacci(-9);
  let expected = undefined;

  t.equal(actual, expected);
  t.end();
});
