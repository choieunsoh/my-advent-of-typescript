// Day 1: Christmas Cookies
// https://typehero.dev/challenge/day-1

import { Expect, Equal } from 'type-testing';

type SantasFavoriteCookies = 'ginger-bread' | 'chocolate-chip';

type test_0_actual = SantasFavoriteCookies;
type test_0_expected = 'ginger-bread' | 'chocolate-chip';
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;

var result: test_0 = true;
console.log(result);
