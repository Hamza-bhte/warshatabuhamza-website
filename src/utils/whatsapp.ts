import React from 'react';
import { WORKSHOP_CONFIG } from '../data/workshopData';

export const WHATSAPP_BASE_URL = WORKSHOP_CONFIG.whatsappUrl; // https://wa.me/966582769542

export const DEFAULT_WHATSAPP_MESSAGE =
  'هل يمكنني الحصول على مزيد من المعلومات حول هذا؟';

export const WHATSAPP_ERROR_MESSAGE_AR =
  'تعذر فتح رابط واتساب. يرجى المحاولة باستخدام تطبيق واتساب المثبت على هاتفك.';

export const WHATSAPP_ERROR_EVENT = 'warshat-whatsapp-error';

/**
 * Builds a standard wa.me click-to-chat URL compatible with both
 * WhatsApp Messenger and WhatsApp Business on Android, iOS, and Desktop.
 * Always pre-fills the Arabic greeting message in the chat input box
 * without sending it automatically.
 */
export function buildWhatsAppChatUrl(message?: string): string {
  const trimmed = message?.trim();
  const finalMessage = trimmed || DEFAULT_WHATSAPP_MESSAGE;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(finalMessage)}`;
}

/**
 * Returns anchor target/rel attributes:
 * - Inside an embedded iframe (e.g. Preview), opens in a new tab to avoid X-Frame-Options blocks.
 * - On top-level mobile browsers (Android / iOS), omits target="_blank" so Universal Links / App Links
 *   can launch the installed WhatsApp Messenger or WhatsApp Business app directly.
 * - On top-level desktop browsers, opens in a new tab so users stay on the workshop page.
 */
export function getWhatsAppLinkAttributes(): {
  target?: '_blank';
  rel?: 'noopener noreferrer';
} {
  if (typeof window === 'undefined') {
    return { target: '_blank', rel: 'noopener noreferrer' };
  }

  let inIframe = false;
  try {
    inIframe = window.self !== window.top;
  } catch {
    inIframe = true;
  }

  if (inIframe) {
    return { target: '_blank', rel: 'noopener noreferrer' };
  }

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    return {};
  }

  return { target: '_blank', rel: 'noopener noreferrer' };
}

export function notifyWhatsAppError(message: string = WHATSAPP_ERROR_MESSAGE_AR): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(WHATSAPP_ERROR_EVENT, { detail: message }));
}

/**
 * Click handler for WhatsApp anchors:
 * - Validates the wa.me URL format before navigation.
 * - On standalone mobile browsers (same-tab app handoff), monitors whether the
 *   OS switched to the WhatsApp app; if blocked by a restricted browser/WebView,
 *   displays the Arabic fallback guidance message.
 */
export function handleWhatsAppClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string
): void {
  const expectedPrefix = `${WHATSAPP_BASE_URL}`;
  if (!url.startsWith(expectedPrefix)) {
    e.preventDefault();
    notifyWhatsAppError(WHATSAPP_ERROR_MESSAGE_AR);
    return;
  }

  const { target } = getWhatsAppLinkAttributes();
  if (target === '_blank' || typeof window === 'undefined') {
    return;
  }

  let didHandOff = false;
  const markHandled = () => {
    didHandOff = true;
    cleanup();
  };

  const cleanup = () => {
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pagehide', markHandled);
    window.removeEventListener('blur', markHandled);
  };

  const onVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      markHandled();
    }
  };

  document.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('pagehide', markHandled, { once: true });
  window.addEventListener('blur', markHandled, { once: true });

  window.setTimeout(() => {
    cleanup();
    if (!didHandOff && document.visibilityState === 'visible' && document.hasFocus()) {
      notifyWhatsAppError(WHATSAPP_ERROR_MESSAGE_AR);
    }
  }, 2500);
}
