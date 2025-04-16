const componentDescriptions = {
  accordion:
    "An accordion is a vertical stack of interactive headings used to toggle the display of further information; each item can be 'collapsed' with just a short label visible or 'expanded' to show the full content.\n\nBased on [Radix UI](https://www.radix-ui.com/).",
  alert:
    "Alert is a way of informing a user of important changes in a prominent way.",
  authCode:
    "A one-time password (OTP) is an automatically generated numeric or alphanumeric string of characters that authenticates a user for a single transaction or login session.\n\nAuthcode component is designed for entering OTP codes;it is usually positioned through your UI in places like:\n\n- Login\n- OTP check",
  avatar:
    "The Avatar component is typically used to display images, icons, or initials representing people or other entities.",
  badge:
    "The Badge component is typically used to display statuses (i.e. online, idle, offline) or numbers representing the count of items in a given list (i.e. List of notifications or unread messages).",
  bottomSheet:
    "The bottom sheet component is a modified dialog that slides from the bottom of the screen, common pattern in mobile apps.\n\nBottom sheets can contain any anything so let your imagination fly.\nBased on [Headless UI](https://headlessui.com/).",
  breadcrumb:
    "A list of links showing the location of the current page in the navigational hierarchy.",
  button:
    "Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:\n\n- Modal windows\n- Forms\n- Cards\n- Toolbars",
  carousel:
    "This is an effective way of displaying multiple images or content in a single space.\n\nNot only does it conserve screen real estate, but it also guides visitors to concentrate on crucial website content, significantly enhancing the overall visual appeal.\n\nTo support Arabic languages this component requires setting up the `isRtl` prop directly.",
  checkbox:
    "The checkbox is shown as a square box that is ticked (checked) when activated.\n\nCheckboxes are used to let a user select one or more options of a limited number of choices.",
  chip: "Chip component is typically used to filter or trigger actions in clickable format.\n\nFor example, in a UI, you might use a `<Chip />` component for:\n\n- Represent a selected filter category among a list\n- Tag associated with an item\n\nThe characteristics of a `<Chip />` component are its small size, simplicity and ability to perform actions on a click",
  circularProgress:
    "A progress indicator (Circular and Linear) is a visual representation of a user’s progress through a set of steps, guiding toward the completion of a specified process.",
  combobox:
    "An input that behaves similarly to a select, with the addition of a free text input to filter options.\n\nBased on [Headless U](https://headlessui.com/).",
  drawer:
    "The Drawer component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.\n\nBased on [Headless UI](https://headlessui.com/).",
  dropdown:
    "An option that's been selected can represent a corresponding value in forms or be used to filter/sort content.\n\nBased on [Headless UI](https://headlessui.com/).",
  form: "Form component is a grouping of input controls that allow a user to submit information to a server.\nYou can set the size prop for Form and this size will be applied to all children's components.\nYou can set disabled and error props prop for Form.Item and this props will be applied to all children's.",
  group:
    "Combine different types of inputs into groups to save vertical space on your designs and also simplify form filling.",
  iconButton:
    "Buttons allow users to take actions, and make choices, with a single tap.\n\nButtons communicate actions that users can take. They are typically placed throughout your UI, in places like:\n\n- Modal windows\n- Forms\n- Cards\n- Toolbars",
  icons:
    "Moon Design System provides a set of commonly used interface `icons` you can use in your project. To use the icons, install the npm package: `@heathmont/moon-icons-tw`.",
  input:
    "Text input fields allow users to enter text and can be used to collect user feedback or enter information in data entry forms.\n\nThese types of input fields are used on their own, or in combination with other inputs such as number entry, date picker, etc.",
  insetInput:
    "Text input fields allow users to enter text and can be used to collect user feedback or enter information in data entry forms.\n\nThese types of input fields are used on their own, or in combination with other inputs such as number entry, date picker, etc.",
  insetNativeSelect:
    "A form input utilized to select a value: when collapsed, it displays the presently chosen option, and when expanded, it reveals a scrollable list using native select of browser for the user to make a selection.\n\nWhen in a collapsed state, it displays the presently selected option, and upon expansion, it presents a scrollable list of predefined choices for the user to select from. Moon.io offers two types of selects: one that opens the browser's native styling option list and a [Dropdown](https://moon.io/core/dropdown).",
  loader:
    "Loaders provide a visual cue that an action is processing awaiting a course of change or a result.",
  menuItem:
    "Menu items are used in such vertical menu and containers as Popovers, Sidebars, Drawers, Dialogs etc.\n\nMenu item row heights can vary based on the amount of content in each row. The content in each row is flexible. By default, each menu item row height is Medium(md) 40px for one line of content.",
  modal:
    "A modal is an interface element that appears over other content. It requires an interaction from the user before they can return to whatever is underneath.\n\nBased on [Headless UI](https://headlessui.com/).",
  nativeSelect:
    "A form input designed for value selection: in its collapsed state, it reveals the presently chosen option, and upon expansion, it presents a scrollable list of predetermined choices for the user's selection.\n\nIn a collapsed state, it reveals the currently selected option, and upon expansion, it displays a scrollable list of predefined choices for the user's selection.\n\nMoon.io supports two types of selects: one that opens the browser's native styling option list and a [Dropdown](https://moon.io/components/dropdown).",
  pagination:
    "Pagination is the process of splitting information over multiple pages instead of showing it all on a single page.\n\nAlso the name for the interface component used for navigating between these pages.",
  popover:
    "Popovers are perfect for floating panels with arbitrary content like navigation menus, mobile menus and flyout menus.\n\nBased on [Headless UI](https://headlessui.com/).",
  progress:
    "A progress indicator (Circular and Linear) is a visual representation of a user’s progress through a set of steps, guiding toward the completion of a specified process.",
  radio:
    "Radio buttons are used to represent a group of choices whereby users can only select one option.\n\nThe main difference between the radio button and the checkbox is, users are allowed to select single options whereas in the checkbox you can have multiple options.\n\nBased on [Headless UI](https://headlessui.com/).",
  search:
    "Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation.",
  searchCmdk:
    "Command menu search can be used as an accessible combobox. You can render items, and it will automatically filter and sort them.",
  snackbar:
    "The snackbar component is a non-disruptive message that appears on the interface to provide quick, at-a-glance feedback on the outcome of an action.\n\nBased on [Radix](https://www.radix-ui.com/).",
  switch:
    "Switch is a control that is used to quickly switch between two possible states.\n\nSwitches are only used for these binary actions that occur immediately after the user “flips” the switch.\n\nThey are commonly used for “on/off” switches.\n\nBased on [Headless UI](https://headlessui.com/).",
  table:
    "A component for displaying large amounts of data in rows and columns. Based on [TanStack Table v8](https://github.com/TanStack/table).",
  tabs: "Tabs to allow users to navigate easily between views within the same context.\n\nEach tab should contain content that is distinct from other tabs in a set for example, tabs can present different sections of news, different genres of music, or different themes of documents.\n\nBased on [Headless UI](https://headlessui.com).",
  tag: "Tags represent a set of interactive keywords that help organize and categorize objects. Tags can be added or removed from an object.",
  tagsInput:
    'TagsInput is an extension of the text input fields. This component allows users to both enter text and capture input results and display them as well.\n\nThese selected text entries are being displayed as tags. Tags represent a set of interactive keywords that help organize and categorize objects.\n\nTags can be added by pressing the <kbd className="inline-block whitespace-nowrap rounded px-1.5 font-medium tracking-wide text-body-300 border border-primary text-secondary ms-auto">Enter ⏎</kbd> key or removed by the mouse click from the input element.',
  textarea: "A form control for editing multi-line text.",
  tooltip:
    "A method of presenting a text or supplementary description regarding an element, typically upon hovering, yet alternatively upon click or tap.\n\nBased on [Radix](https://www.radix-ui.com/).",
};
export default componentDescriptions;
