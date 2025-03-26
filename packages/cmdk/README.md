# 📦 Moon React SearchCmdk component package

`SearchCmdk` is a command palette component designed to provide a quick and efficient way to search and navigate within an application.

## 🚀 Features

- 🏎 Fast and responsive search experience
- 🔍 Supports keyboard navigation
- 🎨 Customizable appearance and behavior
- 🔄 Fully typed with TypeScript support

## 📦 Installation

Install via npm:

```bash
npm install @heathmont/moon-cmdk-tw
```

Or using pnpm:

```bash
pnpm install @heathmont/moon-cmdk-tw
```

Or yarn:

```bash
yarn @heathmont/moon-cmdk-tw
```

## 🎯 Usage

Basic Example

```code
import { SearchCmdk } from "@heathmont/moon-cmdk-tw/lib";

const commands = [
  { label: "Open Settings", action: () => console.log("Settings opened") },
  { label: "Go to Dashboard", action: () => console.log("Navigating to Dashboard") },
];

const App = () => {
  return <SearchCmdk commands={commands} placeholder="Type a command..." />;
};

export default App;
```

## ⚙️ Props

| Prop        | Type                                         | Description                               |
| ----------- | -------------------------------------------- | ----------------------------------------- |
| commands    | Array<{ label: string; action: () => void }> | List of commands available in the palette |
| placeholder | string                                       | Placeholder text for the input field      |
| onClose     | () => void                                   | Callback when the search is closed        |

## 🎨 Customization

You can style the component using CSS variables or override styles with TailwindCSS.

## 🧭 Explore more

[Themes package](https://github.com/coingaming/moon-light/tree/main/packages/themes)

[Table package](https://github.com/coingaming/moon-light/tree/main/packages/table-v8)

[Base package](https://github.com/coingaming/moon-light/tree/main/packages/base)

[Core package](https://github.com/coingaming/moon-light/tree/main/packages/core)

## 🛠️ Contributing

If you're interested in contributing to Moon Design System, please read our [contributing docs](https://github.com/coingaming/moon-light/blob/main/CONTRIBUTING.md) before submitting a pull request.
