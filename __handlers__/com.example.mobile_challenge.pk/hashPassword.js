/*
 * Auto-generated by Frida. Please modify to match the signature of pk.hashPassword.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

defineHandler({
  /**
   * Called synchronously when about to call pk.hashPassword.
   *
   * @this {object} - The Java class or instance.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Java method arguments.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onEnter(log, args, state) {
    log(`pk.hashPassword(${args.map(JSON.stringify).join(', ')})`);
  },

  /**
   * Called synchronously when about to return from pk.hashPassword.
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
    var retnew = "f71fa237d00da5eadd8edb15d8abb8f7c83c492e26ce43266facb552630b2e16";
    log("f71fa237d00da5eadd8edb15d8abb8f7c83c492e26ce43266facb552630b2e16");
    return retnew;
  }
});