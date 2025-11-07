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
