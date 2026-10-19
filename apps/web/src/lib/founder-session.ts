interface StoredUser {
  id?: string | null;
}

const BUILDER_DRAFT_PREFIX = "skmBuilderData";

function getCurrentFounderId(): string | null {
  try {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return null;
    }

    const user = JSON.parse(storedUser) as StoredUser;
    const userId =
      typeof user.id === "string"
        ? user.id.trim()
        : "";

    return userId || null;
  } catch {
    return null;
  }
}

export function clearFounderSessionPreservingBuilderDrafts(): void {
  if (typeof window === "undefined") {
    return;
  }

  const founderId = getCurrentFounderId();
  const builderDrafts: Array<[string, string]> = [];

  if (founderId) {
    const founderDraftKey =
      `${BUILDER_DRAFT_PREFIX}:${founderId}`;

    const founderStartupDraftPrefix =
      `${founderDraftKey}:`;

    for (
      let index = 0;
      index < localStorage.length;
      index += 1
    ) {
      const key = localStorage.key(index);

      if (
        !key ||
        (
          key !== founderDraftKey &&
          !key.startsWith(founderStartupDraftPrefix)
        )
      ) {
        continue;
      }

      const value = localStorage.getItem(key);

      if (value !== null) {
        builderDrafts.push([key, value]);
      }
    }
  }

  /*
   * Clear authentication and other browser-local application state.
   * Restore only Builder drafts owned by the Founder who is signing out.
   * Drafts belonging to other accounts and the unsafe legacy global key
   * are not retained.
   */
  localStorage.clear();

  for (const [key, value] of builderDrafts) {
    localStorage.setItem(key, value);
  }

  sessionStorage.clear();
}
