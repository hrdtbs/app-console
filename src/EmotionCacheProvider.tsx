import { CacheProvider } from "@emotion/core";
import React, { useState } from "react";
import createCache, { EmotionCache } from "@emotion/cache";

export const EmotionCacheProvider: React.FC = ({ children }) => {
  const [emotionCache, setEmotionCache] = useState<EmotionCache>();

  function setEmotionStyles(ref: HTMLElement | null) {
    if (ref && !emotionCache) {
      const createdEmotionWithRef = createCache({
        container: ref,
      });
      setEmotionCache(createdEmotionWithRef);
    }
  }

  function setShadowRefs(ref: HTMLElement | null) {
    setEmotionStyles(ref);
  }

  return (
    <>
      <span ref={setShadowRefs} />
      {emotionCache && (
        <CacheProvider value={emotionCache}>{children}</CacheProvider>
      )}
    </>
  );
};
