const COMPONENTS = {
  accordion: {
    title: "Accordion",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "OpenByDefault",
      "SingleOpen",
      "Disabled",
      "HeaderContent",
      "Sizes",
      "Customization",
      "ControlOutside",
    ],
  },
  alert: {
    title: "Alert",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithTitle",
      "WithIcon",
      "WithClose",
      "Customization",
    ],
  },
  authCode: {
    title: "AuthCode",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithManualSubmit",
      "WithAutoSubmit",
      "AllowedCharacters",
      "CustomLength",
      "ErrorState",
      "HintMessage",
      "Placeholder",
      "Password",
      "DifferentGaps",
    ],
  },
  avatar: {
    title: "Avatar",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Variants",
      "Sizes",
      "ActiveStatus",
      "StatusOrigin",
      "Customization",
    ],
  },
  badge: {
    title: "Badge",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Label", "AnchorElement", "Customization"],
  },
  bottomSheet: {
    title: "BottomSheet",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Sizes",
      "WithDraghandle",
      "WithTitle",
      "Customization",
      "RootPortal",
    ],
  },
  breadcrumb: {
    title: "Breadcrumb",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Collapsed",
      "FourItems",
      "TwoItems",
      "OneItem",
      "CustomDivider",
    ],
  },
  button: {
    title: "Button",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Sizes",
      "Disabled",
      "Animations",
      "ButtonAsLinkHTML",
      "DefaultWithClick",
      "FullWidth",
      "Icons",
      "Multiline",
      "Variants",
    ],
  },
  carousel: {
    title: "Carousel",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA"],
    examples: [
      "Default",
      "CustomizedArrows",
      "Indicators",
      "Spaces",
      "VisibleIndices",
      "SelectIndex",
      "AutoSlide",
      "RTLSupport",
      "SwipeDragDisabled",
    ],
  },
  checkbox: {
    title: "Checkbox",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithLabel",
      "Checked",
      "Disabled",
      "ReadOnly",
      "PartiallySelected",
      "Customization",
    ],
  },
  chip: {
    title: "Chip",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: undefined,
  },
  circularProgress: {
    title: "CircularProgress",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Size", "Value", "Customization"],
  },
  combobox: {
    title: "Combobox",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Select",
      "SelectStates",
      "SelectInsetInput",
      "SelectInsetInputStates",
      "MultiSelect",
      "MultiSelectWithAll",
      "MultiSelectInsetInput",
      "VisualMultiSelect",
      "AlignmentControlsOptions",
    ],
  },
  drawer: {
    title: "Drawer",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Positions", "WithBackdrop", "WithClose"],
  },
  dropdown: {
    title: "Dropdown",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "TriggerElements",
      "OptionsVariants",
      "Select",
      "SelectStates",
      "HiddenInput",
      "InsetSelect",
      "InsetSelectStates",
      "MultiSelect",
      "InsetMultiSelect",
      "CustomMenuWidth",
    ],
  },
  form: {
    title: "Form",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Size", "WithInsetItems"],
  },
  group: {
    title: "Group",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Direction", "Options", "Size", "States"],
  },
  iconButton: {
    title: "IconButton",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: undefined,
  },
  icons: {
    title: "Icons",
    packageName: "@heathmont/moon-icons-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Customization"],
  },
  input: {
    title: "Input",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithLabelAndHint",
      "Sizes",
      "DifferentStates",
      "TextInputTypes",
      "ControllingAnInput",
      "Customization",
    ],
  },
  insetInput: {
    title: "InsetInput",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "DifferentStates", "TextInputTypes", "Customization"],
  },
  insetNativeSelect: {
    title: "InsetNativeSelect",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "DifferentStates", "CustomStyles"],
  },
  loader: {
    title: "Loader",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Sizes", "Colors"],
  },
  menuItem: {
    title: "MenuItem",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "AsLink",
      "WithIcon",
      "WithMeta",
      "Checkbox",
      "Radio",
      "MultiTitle",
      "MultiLineItems",
      "ExpandCollapse",
    ],
  },
  modal: {
    title: "Modal",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "WithBigContent", "WithStyledContent", "WithSelect"],
  },
  nativeSelect: {
    title: "NativeSelect",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Sizes", "DifferentStates", "CustomStyles"],
  },
  pagination: {
    title: "Pagination",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "WithButton", "WithArrayOfPageHREFs"],
  },
  popover: {
    title: "Popover",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Position",
      "TriggerElements",
      "WithCloseButton",
      "TooltipViewExample",
      "TooltipViewExampleWithAlwaysOpenState",
      "DisableFlipOnComponent",
    ],
  },
  progress: {
    title: "Progress",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Size",
      "Value",
      "Pin",
      "WithLabels",
      "Customization",
    ],
  },
  radio: {
    title: "Radio",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Uncontrolled",
      "Disabled",
      "AsFormItem",
      "Customization",
    ],
  },
  search: {
    title: "Search",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "WithTransition"],
  },
  searchCmdk: {
    title: "SearchCmdk",
    packageName: "@heathmont/moon-cmdk-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default"],
  },
  snackbar: {
    title: "Snackbar",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Positions",
      "Options",
      "SemanticTypes",
      "AutoClose",
      "Customization",
      "SnackbarQueue",
    ],
  },
  switch: {
    title: "Switch",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Sizes",
      "Disabled",
      "WithIcons",
      "Customization",
      "WithHTMLForms",
      "UsingTooltip",
    ],
  },
  table: {
    title: "Table",
    packageName: "@heathmont/moon-table-v8-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "RowGaps",
      "RowSizes",
      "Borders",
      "Clickable",
      "ExpandableWithPreset",
      "SelectableWithPreset",
      "CheckboxesWithPreset",
      "ExpandableCheckboxes",
      "Minimap",
      "WithSorting",
      "Resize",
      "LongData",
      "ExtraLongData",
      "ColumnVisibility",
    ],
  },
  tabs: {
    title: "Tabs",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Sizes",
      "Pill",
      "SegmentControlView",
      "SelectedIndex",
      "SelectedIndexSegment",
      "TabsOnlyView",
      "WithCustomStyle",
      "WithHandler",
    ],
  },
  tag: {
    title: "Tag",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Size", "WithIcons", "Casing", "Customization"],
  },
  tagsInput: {
    title: "TagsInput",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "DifferentSizes", "States", "UppercaseLowercase"],
  },
  textarea: {
    title: "Textarea",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "States", "WithButton", "Customization"],
  },
  tooltip: {
    title: "Tooltip",
    packageName: "@heathmont/moon-core-tw",
    tags: ["ARIA", "RTL"],
    examples: undefined,
  },
};

export default COMPONENTS;
