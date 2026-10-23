import assert from "node:assert/strict";
import test from "node:test";

import {
  loadAdvisorProfile,
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
  "loads an existing Advisor profile for returning onboarding",
  async () => {
    const profile = await loadAdvisorProfile({
      async getProfile() {
        return {
          data: {
            phoneNumber: "9898985454",
            currentRole: "Product Advisor",
            organization: "RC Advisory",
            linkedinUrl: "https://linkedin.com/in/rc-advisor",
            experienceLevel: "YEARS_1_TO_3",
          },
        };
      },
    });

    assert.deepEqual(profile, {
      phoneNumber: "9898985454",
      currentRole: "Product Advisor",
      organization: "RC Advisory",
      linkedinUrl: "https://linkedin.com/in/rc-advisor",
      experienceLevel: "YEARS_1_TO_3",
    });
  },
);

test(
  "treats Advisor profile GET 404 as first-time onboarding",
  async () => {
    const profile = await loadAdvisorProfile({
      async getProfile() {
        throw axiosError(404);
      },
    });

    assert.equal(profile, null);
  },
);

test(
  "does not hide non-404 Advisor profile load failures",
  async () => {
    await assert.rejects(
      () =>
        loadAdvisorProfile({
          async getProfile() {
            throw axiosError(500);
          },
        }),
    );
  },
);

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
