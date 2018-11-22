'use strict'

import { test } from 'tape';
import { Sum } from './sum';

test('sum', t => {
  const sum = new Sum();
  const numList: number[] = [5, 7, 9];

  let actual = sum.sum(numList);
  let expected = 21;

  t.equal(actual, expected);
  t.end();
});

test('sum', t => {
  const sum = new Sum();
  const numList: number[] = [];

  let actual = sum.sum(numList);
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('sum', t => {
  const sum = new Sum();
  const numList: number[] = [5];

  let actual = sum.sum(numList);
  let expected = 5;

  t.equal(actual, expected);
  t.end();
});

test('sum', t => {
  const sum = new Sum();
  const stringList: any[] = ['nananaaaa'];

  let actual = sum.sum(stringList);
  let expected = 'nananaaaa';

  t.notEqual(actual, expected);
  t.end();
});

test('sum', t => {
  const sum = new Sum();
  const numList: number[] = [null];

  let actual = sum.sum(numList);
  let expected = null;

  t.notEqual(actual, expected);
  t.end();
});


