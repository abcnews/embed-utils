/**
 * Emits a message to the parent window to resize the iframe
 * @param height
 * @returns void
 */
export const emitResize = (height: number) => {
  if (!globalThis.parent) {
    return;
  }

  const payload = {
    type: "embed-size",
    height,
  };

  globalThis.parent.postMessage(payload, "*");
};
