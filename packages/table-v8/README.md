# 📦 Moon React Table component package

A Table component designed to provide flexibility and reusability for building dynamic tables in React applications.

## 🚀 Features

- 🏗 Modular components for building tables
- 📜 Scrollable cell support (`CellScroller`)
- 📏 Responsive table wrapper (`TableWrapper`)
- 🔄 Separate components for table structure (`THead`, `TBody`, `TFoot`, etc.)
- 📌 TypeScript support included (`types`)

## 📦 Installation

Install via npm:

```bash
npm install @heathmont/moon-table-v8-tw
```

Or using pnpm:

```bash
pnpm install @heathmont/moon-table-v8-tw
```

Or yarn:

```bash
yarn @heathmont/moon-table-v8-tw
```

## 🎯 Usage

Basic Table Example

```code
import { Table, THead, TBody, TR, TH, TD } from "@heathmont/moon-table-tw/lib";

const MyTable = () => (
  <Table>
    <THead>
      <TR>
        <TH>Name</TH>
        <TH>Age</TH>
      </TR>
    </THead>
    <TBody>
      <TR>
        <TD>John Doe</TD>
        <TD>28</TD>
      </TR>
      <TR>
        <TD>Jane Smith</TD>
        <TD>32</TD>
      </TR>
    </TBody>
  </Table>
);

export default MyTable;
```

## 📚 Components

| Component    | Description                                   |
| ------------ | --------------------------------------------- |
| Table        | The main table wrapper                        |
| TableWrapper | A responsive wrapper for table layouts        |
| THead        | Table header section                          |
| TBody        | Table body section                            |
| TFoot        | Table footer section                          |
| TR           | Table row                                     |
| TH           | Table header cell                             |
| TD           | Table data cell                               |
| CellScroller | Provides scroll functionality for table cells |

## 🧭 Explore more

[Themes package](https://github.com/coingaming/moon-light/tree/main/packages/themes)

[SearchCmdk package](https://github.com/coingaming/moon-light/tree/main/packages/cmdk)

[Base package](https://github.com/coingaming/moon-light/tree/main/packages/base)

[Core package](https://github.com/coingaming/moon-light/tree/main/packages/core)

## 🛠️ Contributing

If you're interested in contributing to Moon Design System, please read our [contributing docs](https://github.com/coingaming/moon-light/blob/main/CONTRIBUTING.md) before submitting a pull request.
