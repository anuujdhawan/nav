'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ChatBot = dynamic(() => Promise.resolve(require('./ChatBot').default), {
  ssr: false,
});

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function DeferredChatBot() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const typedWindow = window as WindowWithIdleCallback;
    const interactionEvents: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'scroll'];
    let timeoutId: number | null = null;
    let idleHandle: number | null = null;

    const cleanupInteractions = () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, enableChat);
      });
    };

    const enableChat = () => {
      cleanupInteractions();
      if (idleHandle !== null) {
        typedWindow.cancelIdleCallback?.(idleHandle);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      setShouldRender(true);
    };

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, enableChat, { once: true, passive: true });
    });

    if (typedWindow.requestIdleCallback) {
      idleHandle = typedWindow.requestIdleCallback(() => {
        cleanupInteractions();
        enableChat();
      }, { timeout: 2500 });

      return () => {
        cleanupInteractions();
        if (idleHandle !== null) {
          typedWindow.cancelIdleCallback?.(idleHandle);
        }
      };
    }

    timeoutId = window.setTimeout(() => {
      cleanupInteractions();
      enableChat();
    }, 5000);

    return () => {
      cleanupInteractions();
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return <ChatBot />;
}
