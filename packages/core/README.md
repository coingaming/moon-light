# 📦 Moon React Core components library

A comprehensive collection of UI components for React, designed to streamline development and ensure consistency across applications.

## 🚀 Features

- 🏗 Rich set of ready-to-use UI components
- 🎨 Customizable and theme-friendly
- 🔄 Fully typed with TypeScript support
- 📦 Lightweight and optimized for performance

## 📦 Installation

Install via npm:

```bash
npm install @heathmont/moon-core-tw
```

Or using pnpm:

```bash
pnpm install @heathmont/moon-core-tw
```

Or yarn:

```bash
yarn @heathmont/moon-core-tw
```

## 🎯 Usage

Example: Basic UI Elements

```code
import { Button, Input, Modal } from "@heathmont/moon-core-tw/lib";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Input placeholder="Enter text..." />
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <p>This is a modal!</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
```

## 📚 Available Components

| Component        | Description                                  |
| ---------------- | -------------------------------------------- |
| Accordion        | Expandable sections for content organization |
| Alert            | Notification messages                        |
| AuthCode         | Input field for authentication codes         |
| Avatar           | User profile image display                   |
| Backdrop         | Overlay background for modals                |
| BottomSheet      | Slide-up modal panel                         |
| Breadcrumb       | Navigation path display                      |
| Button           | Clickable action button                      |
| Carousel         | Image/content slider                         |
| Checkbox         | Toggle option selection                      |
| Chip             | Small tag-like UI elements                   |
| CircularProgress | Loading indicator                            |
| Combobox         | Selectable input with search                 |
| Drawer           | Sidebar navigation or content panel          |
| Dropdown         | Menu-based selection component               |
| Form             | Wrapper for form elements                    |
| Group            | UI grouping element                          |
| Hint             | Tooltip-like helper text                     |
| IconButton       | Button with an icon                          |
| Input            | Text input field                             |
| InsetInput       | Input with embedded icon or text             |
| Label            | Label for form elements                      |
| Loader           | General loading indicator                    |
| MenuItem         | List item for menus                          |
| MergeClassnames  | Utility for handling CSS class merging       |
| Modal            | Popup dialog box                             |
| Pagination       | Page navigation controls                     |
| Popover          | Small contextual pop-up                      |
| Progress         | Progress bar                                 |
| Radio            | Radio button selection                       |
| Search           | Search input field                           |
| Select           | Dropdown selection                           |
| Snackbar         | Temporary notification                       |
| Switch           | Toggle switch                                |
| Tabs             | Tab-based navigation                         |
| Tag              | Label-style element                          |
| TextInput        | Standard text input field                    |
| Textarea         | Multi-line text input                        |
| Tooltip          | Hover-triggered information display          |
| FileInput        | File upload field                            |
| Badge            | Small status indicator                       |

## 🧭 Explore more

[Themes package](https://github.com/coingaming/moon-light/tree/main/packages/themes)

[Table package](https://github.com/coingaming/moon-light/tree/main/packages/table-v8)

[Base package](https://github.com/coingaming/moon-light/tree/main/packages/base)

[SearchCMDK package](https://github.com/coingaming/moon-light/tree/main/packages/cmdk)

## 🛠️ Contributing

If you're interested in contributing to Moon Design System, please read our [contributing docs](https://github.com/coingaming/moon-light/blob/main/CONTRIBUTING.md) before submitting a pull request.
