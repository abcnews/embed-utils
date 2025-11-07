/**
 * Emits a message to the parent window to resize the iframe
 * @param height
 * @returns void
 */
export const emitResize = (height: number) => {
  if (!window.parent) {
    return;
  }

  const payload = {
    type: "embed-size",
    height,
  };

  window.parent.postMessage(payload, "*");
};
