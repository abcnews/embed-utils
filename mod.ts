export function emitResize(height: number) {
  if (!window.parent) {
    return;
  }
  const payload = {
    type: "embed-size",
    height,
  };

  window.parent.postMessage(payload, "*");
}
