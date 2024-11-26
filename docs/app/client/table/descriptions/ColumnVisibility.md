---
title: Column Visibility
---

A table can configure the visibility of its columns.
<br/>
At table's `state` prop set up the `columnVisibility` property which should be a custom state itself. This will automatically be handled over to the internal table's configuration.
You can control the columns visibility by updating your custom columns visibility state using your `setCustomState` function and assigning it to `onColumnVisibilityChange` prop. You can follow an example below.
The `state.columnVisibility` prop has a shape of:

`{
  columnId1: true/false,
  columnId2: true/false,
  columnId3: true/false,
  ...
}`

<br />
<em>Note: Every column is visible by default. Either not present (`undefined`) in `state.columnVisibility` prop or a `true` value makes the column visible. Only a value of `false` hides the column. </em>
