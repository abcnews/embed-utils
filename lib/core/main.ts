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

/**
 * Listens for resize messages from embedded iframes
 * @param callback Function to call with the new height
 * @param origin Optional origin to validate messages from (recommended for security)
 * @returns Cleanup function to remove the listener
 *
 * @example
 * // In parent window
 * const cleanup = onEmbedResize((height) => {
 *   iframe.style.height = `${height}px`;
 * });
 *
 * // Later, cleanup when done
 * cleanup();
 */
export const onEmbedResize = (
  callback: (height: number) => void,
  origin?: string,
) => {
  const listener = (event: MessageEvent) => {
    // Validate origin for security (if provided)
    if (origin && event.origin !== origin) {
      return;
    }

    // Check if this is our resize message
    if (
      event.data?.type === "embed-size" && typeof event.data.height === "number"
    ) {
      callback(event.data.height);
    }
  };

  window.addEventListener("message", listener);

  // Return cleanup function
  return () => {
    window.removeEventListener("message", listener);
  };
};
