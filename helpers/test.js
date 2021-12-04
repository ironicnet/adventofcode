
const assertEqual = (expected, value) => {
  if (expected !== value) {
    throw new Error(`Expected ${expected}. Found ${value}.`);
  }
};
const assertNotEqual = (expected, value) => {
  if (expected === value) {
    throw new Error(`Expected ${expected} to be different from ${value}.`);
  }
};
const assertNotUndefined = (value) => {
  if (typeof value === "undefined") {
    throw new Error(`Expected value to not be undefined.`);
  }
};
const assertCanFind = (expected, values) => {
  const result = values.find(expected);
  if (!result) {
    throw new Error(`Expected to find ${expected}. Array contains ${values}.`);
  }
};
const assertIncludes = (expected, values) => {
  const result = values.find(value => value === expected);
  if (!result) {
    throw new Error(`Expected to find ${expected}. Array contains ${values}.`);
  }
};
const assertAllEqual = (expected, value) => {
  if (expected.length !== value.length) {
    throw new Error(`Expected length ${expected.length}. Found ${value.length}.`);
  }
  for (let index = 0; index < expected.length; index++) {
    const expectedValue = expected[index];
    if (expectedValue !== value[index]) {
      throw new Error(`Expected ${expected}. Found ${value}. index: ${index}`);
    }
  }
};
const it = (title, predicate) => {
  try {
    predicate();
    console.info(`%c\x1b[32m ☑ ${title} \x1b[0m`, 'color: #00FF00')
  } catch (e) {
    console.error(`${title}: ${e}`);
    console.info(`%c\x1b[31m ☒ ${title} \x1b[0m`, 'color: #00FF00')
  }
};
module.exports = {
  it,
  assertAllEqual,
  assertCanFind,
  assertEqual,
  assertIncludes,
  assertNotEqual,
  assertNotUndefined,
}