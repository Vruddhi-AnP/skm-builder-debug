import assert from "node:assert/strict";
import test from "node:test";

import {
  getBuilderData,
  saveBuilderStep,
} from "../src/hooks/useLocalBuilder.ts";

import {
  clearFounderSessionPreservingBuilderDrafts,
} from "../src/lib/founder-session.ts";

class MemoryStorage {
  constructor() {
    this.values = new Map();
  }

  get length() {
    return this.values.size;
  }

  clear() {
    this.values.clear();
  }

  getItem(key) {
    return this.values.has(key)
      ? this.values.get(key)
      : null;
  }

  key(index) {
    return Array.from(this.values.keys())[index] ?? null;
  }

  removeItem(key) {
    this.values.delete(key);
  }

  setItem(key, value) {
    this.values.set(String(key), String(value));
  }
}

function installBrowserStorage() {
  const storage = new MemoryStorage();
  const session = new MemoryStorage();

  const previousWindow =
    Object.getOwnPropertyDescriptor(globalThis, "window");

  const previousLocalStorage =
    Object.getOwnPropertyDescriptor(globalThis, "localStorage");

  const previousSessionStorage =
    Object.getOwnPropertyDescriptor(globalThis, "sessionStorage");

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    writable: true,
    value: {},
  });

  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    writable: true,
    value: storage,
  });

  Object.defineProperty(globalThis, "sessionStorage", {
    configurable: true,
    writable: true,
    value: session,
  });

  return {
    storage,
    session,

    restore() {
      if (previousWindow) {
        Object.defineProperty(
          globalThis,
          "window",
          previousWindow,
        );
      } else {
        delete globalThis.window;
      }

      if (previousLocalStorage) {
        Object.defineProperty(
          globalThis,
          "localStorage",
          previousLocalStorage,
        );
      } else {
        delete globalThis.localStorage;
      }

      if (previousSessionStorage) {
        Object.defineProperty(
          globalThis,
          "sessionStorage",
          previousSessionStorage,
        );
      } else {
        delete globalThis.sessionStorage;
      }
    },
  };
}

test(
  "preserves a user-only Builder draft when Startup scope becomes available and after logout/login",
  () => {
    const browser = installBrowserStorage();

    try {
      const userId = "founder-regression-1";
      const startupId = "startup-regression-1";

      const userOnlyKey =
        `skmBuilderData:${userId}`;

      const startupScopedKey =
        `skmBuilderData:${userId}:${startupId}`;

      browser.storage.setItem(
        "user",
        JSON.stringify({ id: userId }),
      );

      saveBuilderStep("ideaDefinition", {
        idea: "Draft created before Startup exists",
      });

      assert.notEqual(
        browser.storage.getItem(userOnlyKey),
        null,
      );

      assert.equal(
        browser.storage.getItem(startupScopedKey),
        null,
      );

      // Simulate Startup creation becoming available
      // in the authenticated browser session.
      browser.storage.setItem(
        "startupId",
        startupId,
      );

      const migrated = getBuilderData();

      assert.equal(
        migrated.ideaDefinition?.idea,
        "Draft created before Startup exists",
      );

      assert.equal(
        browser.storage.getItem(userOnlyKey),
        null,
      );

      assert.notEqual(
        browser.storage.getItem(startupScopedKey),
        null,
      );

      // Exercise the same logout path used by the Founder UI.
      browser.storage.setItem("accessToken", "test-access-token");
      browser.storage.setItem("founderOnboarding", "temporary-state");
      browser.storage.setItem("skmBuilderData", "unsafe-legacy-draft");
      browser.storage.setItem(
        "skmBuilderData:another-founder:another-startup",
        "other-founder-draft",
      );
      browser.session.setItem("transient", "session-value");

      clearFounderSessionPreservingBuilderDrafts();

      assert.equal(
        browser.storage.getItem("accessToken"),
        null,
      );

      assert.equal(
        browser.storage.getItem("user"),
        null,
      );

      assert.equal(
        browser.storage.getItem("startupId"),
        null,
      );

      assert.equal(
        browser.storage.getItem("founderOnboarding"),
        null,
      );

      assert.equal(
        browser.storage.getItem("skmBuilderData"),
        null,
      );

      assert.equal(
        browser.storage.getItem(
          "skmBuilderData:another-founder:another-startup",
        ),
        null,
      );

      assert.notEqual(
        browser.storage.getItem(startupScopedKey),
        null,
      );

      assert.equal(
        browser.session.length,
        0,
      );

      assert.deepEqual(
        getBuilderData(),
        {},
      );

      // Simulate login and Startup resolution again.
      browser.storage.setItem(
        "user",
        JSON.stringify({ id: userId }),
      );

      browser.storage.setItem(
        "startupId",
        startupId,
      );

      const resumed = getBuilderData();

      assert.equal(
        resumed.ideaDefinition?.idea,
        "Draft created before Startup exists",
      );
    } finally {
      browser.restore();
    }
  },
);

test(
  "merges user-only and Startup-scoped drafts deterministically with Startup-scoped values taking precedence",
  () => {
    const browser = installBrowserStorage();

    try {
      const userId = "founder-regression-2";
      const startupId = "startup-regression-2";

      browser.storage.setItem(
        "user",
        JSON.stringify({ id: userId }),
      );

      browser.storage.setItem(
        "startupId",
        startupId,
      );

      browser.storage.setItem(
        `skmBuilderData:${userId}`,
        JSON.stringify({
          ideaDefinition: {
            idea: "older user-only idea",
            audience: "SMBs",
          },
          problemDefinition: {
            problem: "user-only problem",
          },
        }),
      );

      browser.storage.setItem(
        `skmBuilderData:${userId}:${startupId}`,
        JSON.stringify({
          ideaDefinition: {
            idea: "newer startup-scoped idea",
          },
        }),
      );

      const migrated = getBuilderData();

      assert.deepEqual(
        migrated.ideaDefinition,
        {
          idea: "newer startup-scoped idea",
          audience: "SMBs",
        },
      );

      assert.deepEqual(
        migrated.problemDefinition,
        {
          problem: "user-only problem",
        },
      );

      assert.equal(
        browser.storage.getItem(
          `skmBuilderData:${userId}`,
        ),
        null,
      );
    } finally {
      browser.restore();
    }
  },
);
