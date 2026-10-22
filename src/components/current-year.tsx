"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Renders the current year on the client so the value never has to be
 * computed while prerendering (which `cacheComponents` disallows).
 */
export default function CurrentYear() {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => null,
  );

  return <>{year ?? ""}</>;
}

