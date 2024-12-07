/*
 * Auto-generated by Frida. Please modify to match the signature of ApkSignatureVerifier.verifyV4Signature.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

defineHandler({
  /**
   * Called synchronously when about to call ApkSignatureVerifier.verifyV4Signature.
   *
   * @this {object} - The Java class or instance.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Java method arguments.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onEnter(log, args, state) {
    log(`ApkSignatureVerifier.verifyV4Signature(${args.map(JSON.stringify).join(', ')})`);
  },

  /**
   * Called synchronously when about to return from ApkSignatureVerifier.verifyV4Signature.
   *
   * See onEnter for details.
   *
   * @this {object} - The Java class or instance.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {NativePointer} retval - Return value.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onLeave(log, retval, state) {
    if (retval !== undefined) {
      log(`<= ${JSON.stringify(retval)}`);
    }
  }
});
