'use strict';

require('jest');

const reader = require('../lib/reader.js');

describe('reader.js', () => {

  describe('testing txt array placement',() => {
    test('new array should contain txt files in the order given', () => {
      return reader.guide([`${__dirname}/../assets/dog.txt`, `${__dirname}/../assets/cat.txt`, `${__dirname}/../assets/bacon.txt`], (err, data) => {
        if (err) console.error(err);
        expect(data).toBe(['dog ipsum', 'cat ipsum', 'bacon ipsum']);
      });
    });
  });

  describe('testing file paths',() => {
    test('return null for invalid file paths', () => {
      return reader.guide([`${__dirname}/../assets/dog.txt`, `${__dirname}/../assets/cat.txt`, `${__dirname}/../assets/baconnn.txt`], (err) => {
        expect(err).toBeNull();
      });
    });
  });

  describe('testing empty arrays',() => {
    test('return null for empty arrays', () => {
      expect(reader.guide([])).toBeNull();
    });
  });
});
