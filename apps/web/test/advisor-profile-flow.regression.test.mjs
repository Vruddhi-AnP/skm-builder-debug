import assert from "node:assert/strict";
import test from "node:test";

import {
  saveAdvisorProfile,
} from "../src/services/advisor-profile-flow.ts";

function axiosError(status) {
  return {
    isAxiosError: true,
    response: status
      ? { status }
      : undefined,
  };
}

test(
  "creates a profile for first-time Advisor onboarding after GET returns 404",
  async () => {
    const calls = [];

    const client = {
      async getProfile() {
        calls.push("get");
        throw axiosError(404);
      },

      async createProfile(payload) {
        calls.push("create");

        assert.equal(
          payload.currentRole,
          "Founder Coach",
        );
      },

      async updateProfile() {
        calls.push("update");
      },
    };

    const result = await saveAdvisorProfile(
      client,
      {
        currentRole: "Founder Coach",
      },
    );

    assert.equal(result, "created");

    assert.deepEqual(
      calls,
      ["get", "create"],
    );
  },
);

test(
  "updates an existing Advisor profile without using failed create as the normal path",
  async () => {
    const calls = [];

    const client = {
      async getProfile() {
        calls.push("get");

        return {
          id: "advisor-profile-1",
        };
      },

      async createProfile() {
        calls.push("create");
      },

      async updateProfile(payload) {
        calls.push("update");

        assert.equal(
          payload.currentRole,
          "Product Advisor",
        );
      },
    };

    const result = await saveAdvisorProfile(
      client,
      {
        currentRole: "Product Advisor",
      },
    );

    assert.equal(result, "updated");

    assert.deepEqual(
      calls,
      ["get", "update"],
    );
  },
);

test(
  "does not treat non-404 Advisor lookup failures as first-time onboarding",
  async () => {
    const calls = [];

    const client = {
      async getProfile() {
        calls.push("get");

        throw axiosError(500);
      },

      async createProfile() {
        calls.push("create");
      },

      async updateProfile() {
        calls.push("update");
      },
    };

    await assert.rejects(
      () =>
        saveAdvisorProfile(
          client,
          {
            currentRole: "Product Advisor",
          },
        ),
    );

    assert.deepEqual(
      calls,
      ["get"],
    );
  },
);
