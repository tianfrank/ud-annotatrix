'use strict';

/**
 * Custom ERROR objects
 *
 * throwing custom error objects instead of relying on native JavaScript ones
 * allows us to do a few things:
 *  - we know explicitly whether this error arose in a predictable way (i.e. we
 *    have seen it before, we know why it's happening, etc.)
 *  - errors that are not (instanceof AnnotatrixError) will therefore be all
 *    "unforeseen" JavaScript errors, and we should prioritize fixing those
 *  - custom handling (e.g., log it to the console even if we catch it later on)
 *
 */




/**
 * AnnotatrixError
 *
 * underspecified common ancestor of all custom errors, so it will be on the prototype
 * chain (all will be an "instanceof" AnnotatrixError)
 */
class AnnotatrixError extends Error {
  constructor(...args) {
    super(...args);

    // maintains proper stack trace for where our error was thrown (i.e. doesn't
    //   include the constructor, but only available on V8)
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, AnnotatrixError);

    // override prototype name
    this.name = 'AnnotatrixError';
  }
}




/**
 * NotImplementedError
 *
 * throw this if we get somewhere that we know has not been implemented
 */
class NotImplementedError extends AnnotatrixError {
  constructor(...args) {

    super(...args);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);

    this.name = 'NotImplementedError';
  }
}

/**
 * AssertionError
 *
 * throw this if Tester.assert() fails
 */
class AssertionError extends AnnotatrixError {
  constructor(...args) {

    super(...args);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, AssertionError);

    this.name = 'AssertionError';
  }
}

/**
 * GUIError
 */
class GUIError extends AnnotatrixError {
  constructor(...args) {

    super(...args);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, GUIError);

    this.name = 'GUIError';
  }
}

/**
 * ParseError
 */
class ParseError extends AnnotatrixError {
  constructor(...args) {

    super(...args);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ParseError);

    this.name = 'ParseError';
  }
}


/**
 *
 */
class DeserializationError extends AnnotatrixError {
  constructor(...args) {

    super(...args);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, DeserializationError);

    this.name = 'DeserializationError';
  }
}

module.exports = {
  AnnotatrixError,
  NotImplementedError,
  // AssertionError,
  GUIError,
  ParseError,
  DeserializationError
};