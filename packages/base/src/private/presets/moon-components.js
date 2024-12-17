module.exports = {
  ".moon-avatar": {
    display: "flex",
    width: ["100%", "var(--dimension-space-40)"],
    height: ["100%", "var(--dimension-space-40)"],
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textAlign: "center",
    backgroundColor: "var(--semantic-background-primary)",
    borderWidth: "var(--dimension-border-1)",
    borderColor: "var(--semantic-border-primary)",
    color: "var(--semantic-text-primary)",
    font: "var(--text-body-300-font-weight) var(--text-body-300-font-size) /\n    var(--text-body-300-line-height) var(--text-body-300-font-family)",
    borderRadius: "var(--dimension-space-8)",
  },
  ".moon-avatar p,\n  .moon-avatar span": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  ".moon-avatar svg": {
    color: "var(--semantic-icon-primary)",
    width: "var(--dimension-space-20)",
    height: "var(--dimension-space-20)",
  },
  ".moon-avatar:not(:has(svg, img))": { padding: "0 var(--dimension-space-4)" },
  ".moon-avatar-xs": {
    font: "var(--text-body-100-font-weight) var(--text-body-100-font-size) /\n    var(--text-body-100-line-height) var(--text-body-100-font-family)",
    width: "var(--dimension-space-24)",
    height: "var(--dimension-space-24)",
    borderRadius: "var(--dimension-space-4)",
  },
  ".moon-avatar-xs svg": {
    width: "var(--dimension-space-16)",
    height: "var(--dimension-space-16)",
  },
  ".moon-avatar-xs:not(:has(svg, img))": {
    padding: "0 var(--dimension-space-2)",
  },
  ".moon-avatar-sm": {
    font: "var(--text-body-200-font-weight) var(--text-body-200-font-size) /\n    var(--text-body-200-line-height) var(--text-body-200-font-family)",
    width: "var(--dimension-space-32)",
    height: "var(--dimension-space-32)",
    borderRadius: "var(--dimension-space-8)",
  },
  ".moon-avatar-sm svg": {
    width: "var(--dimension-space-20)",
    height: "var(--dimension-space-20)",
  },
  ".moon-avatar-sm:not(:has(svg, img))": {
    padding: "0 var(--dimension-space-2)",
  },
  ".moon-avatar-md": {
    font: "var(--text-body-300-font-weight) var(--text-body-300-font-size) /\n    var(--text-body-300-line-height) var(--text-body-300-font-family)",
    width: "var(--dimension-space-40)",
    height: "var(--dimension-space-40)",
    borderRadius: "var(--dimension-space-8)",
  },
  ".moon-avatar-md svg": {
    width: "var(--dimension-space-20)",
    height: "var(--dimension-space-20)",
  },
  ".moon-avatar-md:not(:has(svg, img))": {
    padding: "0 var(--dimension-space-4)",
  },
  ".moon-avatar-lg": {
    font: "var(--text-body-400-font-weight) var(--text-body-400-font-size) /\n    var(--text-body-400-line-height) var(--text-body-400-font-family)",
    width: "var(--dimension-space-48)",
    height: "var(--dimension-space-48)",
    borderRadius: "var(--dimension-space-8)",
  },
  ".moon-avatar-lg svg": {
    width: "var(--dimension-space-20)",
    height: "var(--dimension-space-20)",
  },
  ".moon-avatar-lg:not(:has(svg, img))": {
    padding: "0 var(--dimension-space-4)",
  },
  ".moon-avatar-xl": {
    font: "var(--text-body-400-font-weight) var(--text-body-400-font-size) /\n    var(--text-body-400-line-height) var(--text-body-400-font-family)",
    width: "var(--dimension-space-56)",
    height: "var(--dimension-space-56)",
    borderRadius: "var(--dimension-space-8)",
  },
  ".moon-avatar-xl svg": {
    width: "var(--dimension-space-20)",
    height: "var(--dimension-space-20)",
  },
  ".moon-avatar-xl:not(:has(svg, img))": {
    padding: "0 var(--dimension-space-4)",
  },
  ".moon-avatar-2xl": {
    font: "var(--text-body-400-font-weight) var(--text-body-400-font-size) /\n    var(--text-body-400-line-height) var(--text-body-400-font-family)",
    width: "var(--dimension-space-64)",
    height: "var(--dimension-space-64)",
    borderRadius: "var(--dimension-space-12)",
  },
  ".moon-avatar-2xl svg": {
    width: "var(--dimension-space-24)",
    height: "var(--dimension-space-24)",
  },
  ".moon-avatar-2xl:not(:has(svg, img))": {
    padding: "0 var(--dimension-space-4)",
  },
  ".moon-badge-wrapper": { position: "relative" },
  ".moon-badge-wrapper > .moon-badge": {
    position: "absolute",
    bottom: "calc(100% - var(--dimension-space-2))",
    insetInlineStart: "calc(100% - var(--dimension-space-2))",
  },
  'html[dir="ltr"] .moon-badge-wrapper > .moon-badge': {
    left: "calc(100% - var(--dimension-space-2))",
  },
  'html[dir="rtl"] .moon-badge-wrapper > .moon-badge': {
    right: "calc(100% - var(--dimension-space-2))",
  },
  ".moon-badge": {
    display: "inline-block",
    width: ["-moz-fit-content", "fit-content"],
    minWidth: "var(--dimension-space-8)",
    minHeight: "var(--dimension-space-8)",
    padding: "0 var(--dimension-space-4)",
    borderRadius: "var(--dimension-rounded-full)",
    backgroundColor: "var(--semantic-background-positive)",
    color: "var(--semantic-text-forcelight)",
    font: "var(--text-body-200-font-weight) var(--text-body-200-font-size) /\n    var(--text-body-200-line-height) var(--text-body-200-font-family)",
  },
  ".moon-textarea": {
    display: "block",
    width: "100%",
    resize: "none",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    transitionProperty: "box-shadow",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    padding: "var(--dimension-space-16)",
    borderRadius: "var(--dimension-space-8)",
    font: "var(--text-body-400-font-weight) var(--text-body-400-font-size) /\n    var(--text-body-400-line-height) var(--text-body-400-font-family)",
    boxShadow: "0 0 0 var(--dimension-space-1) var(--semantic-border-primary)",
    color: "var(--semantic-text-primary)",
  },
  ".moon-textarea::-moz-placeholder": {
    color: "var(--semantic-text-secondary)",
  },
  ".moon-textarea::placeholder": { color: "var(--semantic-text-secondary)" },
  ".moon-textarea:not(:-moz-read-only, :disabled):hover": {
    boxShadow: "0 0 0 var(--dimension-space-2) var(--semantic-border-primary)",
  },
  ".moon-textarea:not(:read-only, :disabled):hover": {
    boxShadow: "0 0 0 var(--dimension-space-2) var(--semantic-border-primary)",
  },
  ".moon-textarea:not(:-moz-read-only, :disabled):focus": {
    boxShadow: "0 0 0 var(--dimension-space-2) var(--semantic-border-brand)",
  },
  ".moon-textarea:not(:read-only, :disabled):focus": {
    boxShadow: "0 0 0 var(--dimension-space-2) var(--semantic-border-brand)",
  },
  ".moon-textarea:-moz-read-only": { cursor: "not-allowed" },
  ".moon-textarea:read-only,\n  .moon-textarea:disabled": {
    cursor: "not-allowed",
  },
  ".moon-textarea:disabled": { opacity: "var(--effect-opacity-40)" },
  ".moon-form-group": {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "var(--dimension-space-8)",
    opacity: "var(--effect-opacity-100)",
  },
  ".moon-form-group:has(:disabled) label,\n  .moon-form-group:has(:disabled) .moon-form-hint":
    { opacity: "var(--effect-opacity-40)" },
  ".moon-form-group:has(:required) label::after": {
    content: '"*"',
    color: "var(--semantic-text-negative)",
  },
  ".moon-form-group label": {
    font: "var(--text-body-300-font-weight) var(--text-body-300-font-size) /\n      var(--text-body-300-line-height) var(--text-body-300-font-family)",
    color: "var(--semantic-text-primary)",
  },
  ".moon-form-group-error .moon-form-hint": {
    color: "var(--semantic-text-negative)",
  },
  ".moon-form-group-error .moon-textarea": {
    boxShadow: "0 0 0 var(--dimension-space-2) var(--semantic-border-negative)",
  },
  ".moon-form-group-error .moon-textarea:hover,\n    .moon-form-group-error .moon-textarea:focus":
    {
      boxShadow:
        "0 0 0 var(--dimension-space-2) var(--semantic-border-negative)",
    },
  ".moon-form-hint": {
    font: "var(--text-body-200-font-weight) var(--text-body-200-font-size) /\n    var(--text-body-200-line-height) var(--text-body-200-font-family)",
    color: "var(--semantic-text-secondary)",
  },
};
