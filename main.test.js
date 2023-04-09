//👉 Write your tests below here:

import { test, expect } from "@jest/globals";
import { squatGains } from "./main.js";

test("less than 50 should return 'Not exercise'", () => {
    expect(squatGains(30, 60, 80)).toBe("Not exercise");
  });
  
  test("less than 75 should return 'Fat burn'", () => {
    expect(squatGains(30, 60, 140)).toBe("Fat burn");
  });
  
  test("less than 85 should return 'Aerobic endurance'", () => {
    expect(squatGains(30, 60, 160)).toBe("Aerobic endurance");
  });
  
  test("above 85 should return 'Anaerobic threshold'", () => {
    expect(squatGains(30, 60, 180)).toBe("Anaerobic threshold");
  });
  
  