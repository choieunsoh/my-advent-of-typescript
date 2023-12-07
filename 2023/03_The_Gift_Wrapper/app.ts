// Day 3: The Gift Wrapper
// https://typehero.dev/challenge/day-3

import { Expect, Equal } from 'type-testing';

type GiftWrapper<Present, From, To> = {
  present: Present;
  from: From;
  to: To;
};

type test_SantaToTrash_actual = GiftWrapper<'Car', 'Santa', 'Trash'>;
type test_SantaToTrash_expected = { present: 'Car'; from: 'Santa'; to: 'Trash' };
type test_SantaToTrash = Expect<Equal<test_SantaToTrash_actual, test_SantaToTrash_expected>>;
var result: test_SantaToTrash = true;
console.log(result);

type test_TrashToPrime_actual = GiftWrapper<'vscode', 'Trash', 'Prime'>;
type test_TrashToPrime_expected = { present: 'vscode'; from: 'Trash'; to: 'Prime' };
type test_TrashToPrime = Expect<Equal<test_TrashToPrime_actual, test_TrashToPrime_expected>>;
var result: test_TrashToPrime = true;
console.log(result);

type test_DanToEvan_actual = GiftWrapper<'javascript', 'Dan', 'Evan'>;
type test_DanToEvan_expected = { present: 'javascript'; from: 'Dan'; to: 'Evan' };
type test_DanToEvan = Expect<Equal<test_DanToEvan_actual, test_DanToEvan_expected>>;
var result: test_DanToEvan = true;
console.log(result);
