import { describe, expect, it } from "vitest";
import { wwcConnect } from "@/content/wwc-connect";

describe("WWC Connect requirements", () => {
  it("starts on 19 October 2026", () => expect(wwcConnect.requirements.startsOn).toBe("2026-10-19"));
  it("allows 7 days for workers", () => expect(wwcConnect.requirements.workerDays).toBe(7));
  it("allows 21 days for volunteers", () => expect(wwcConnect.requirements.volunteerDays).toBe(21));
  it("requires at least 7 years of record retention", () => expect(wwcConnect.requirements.retentionYears).toBe(7));
  it("allows approximately 45 minutes for training", () => expect(wwcConnect.requirements.trainingMinutes).toBe(45));
});