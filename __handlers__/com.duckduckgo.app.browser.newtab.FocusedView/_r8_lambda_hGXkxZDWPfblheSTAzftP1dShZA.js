/*
 * Auto-generated by Frida. Please modify to match the signature of FocusedView.$r8$lambda$hGXkxZDWPfblheSTAzftP1dShZA.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

defineHandler({
  /**
   * Called synchronously when about to call FocusedView.$r8$lambda$hGXkxZDWPfblheSTAzftP1dShZA.
   *
   * @this {object} - The Java class or instance.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Java method arguments.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onEnter(log, args, state) {
    log(`FocusedView.$r8$lambda$hGXkxZDWPfblheSTAzftP1dShZA(${args.map(JSON.stringify).join(', ')})`);
  },

  /**
   * Called synchronously when about to return from FocusedView.$r8$lambda$hGXkxZDWPfblheSTAzftP1dShZA.
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