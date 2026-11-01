// My Band App design system tokens.
// Source of truth: https://claude.ai/artifact/P8U4QGW7TF1XYeedpvrtqy
// Single dark theme — no light mode yet.

// Ramps, copied from the design system's tokens.json.
export const fog = {
  fog0: "#f1f0f3",
  fog100: "#e3e0e6",
  fog200: "#d6d3da",
  fog300: "#c0bdc5",
  fog400: "#a09da5",
  fog500: "#7f7c84",
  fog600: "#5d5a62",
  fog700: "#4a474f",
  fog800: "#3b3840",
  fog900: "#29272c",
  fog1000: "#1c1b1e",
} as const;

export const lavender = {
  lavender100: "#f3edff",
  lavender200: "#dcc6fb",
  lavender300: "#c4a3f7",
  lavender400: "#af85eb",
  lavender500: "#9969d8",
  lavender600: "#8251be",
  lavender700: "#6a3d9e",
  lavender800: "#552f80",
  lavender900: "#341e4e",
} as const;

// One per bandmate. They mark that person only — never the UI.
export const memberColors = {
  peach: "#ffb38a",
  butter: "#ffe17a",
  lime: "#c8ee6e",
  mint: "#8fe3b0",
  aqua: "#7fe0e6",
  sky: "#8cc4ff",
  orchid: "#e9a8f2",
  rose: "#ffa3c4",
} as const;

export type MemberColor = keyof typeof memberColors;

// The app's dark theme: which ramp step each part uses. Components read
// these, never the ramps directly.
export const colors = {
  ink: fog.fog1000, // background; label on filled
  inkRaised: fog.fog900, // pressed outline fill
  chalk: fog.fog0, // lines and primary text
  fill: fog.fog200, // filled button / selected chip
  fillPressed: fog.fog300,
  mist: fog.fog300, // secondary text
  smoke: fog.fog400, // placeholder, disabled text
  ash: fog.fog600, // disabled outline
  lavender: lavender.lavender300,
  lavenderLight: lavender.lavender200,
} as const;

// Lavender is the only accent and is reserved for links and headings.
export const aliases = {
  link: colors.lavender,
  heading: colors.lavender,
} as const;

export const strokeWidth = 3;
export const iconStroke = 2; // 2.5 only for marks 48px and up

export const radius = {
  input: 14,
  cell: 12,
  pill: 999,
} as const;

export const space = {
  space1: 4,
  space2: 8,
  space3: 12,
  space4: 16,
  space5: 20,
  space6: 24,
  space8: 32,
  space10: 40,
} as const;

export const size = {
  controlInput: 52,
  controlButton: 56,
  touchMin: 44,
  cellMonth: 80,
  bandMark: 26,
  memberBar: 12,
} as const;

export const opacity = {
  past: 0.4,
  stacked: 0.35,
} as const;

// Typography uses the platform system font until a real font is chosen
// (the design system's placeholder is system rounded).
export const type = {
  screenHeading: { fontSize: 32, lineHeight: 36, fontWeight: "700" },
  sheetHeading: { fontSize: 24, lineHeight: 30, fontWeight: "700" },
  cardHeading: { fontSize: 20, lineHeight: 26, fontWeight: "700" },
  button: { fontSize: 17, lineHeight: 24, fontWeight: "700" },
  body: { fontSize: 16, lineHeight: 22, fontWeight: "400" },
  label: { fontSize: 14, lineHeight: 20, fontWeight: "600" },
  fieldMessage: { fontSize: 14, lineHeight: 20, fontWeight: "600" },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: "500" },
} as const;
