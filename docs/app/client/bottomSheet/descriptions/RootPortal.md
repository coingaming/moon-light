---
title: Custom root element
---

By default, BottomSheet content is inserted as a portal directly into the document.body. If it's necessary to insert a component into a custom DOM node, follow these steps:
<br/>

1. Add the following HTML code in the location where the component should be rendered:<br/>
   `<div id="headlessui-portal-root"><div /></div>`
2. Set a prop **rootId** to the `<BottomSheet>` component with the id of the root element. Example:<br/>
   `<BottomSheet rootId="__next">...</BottomSheet>`<br/>
   By doing this, the "inert" attribute that was added to an ancestor will be removed automatically, and the BottomSheet will become interactive.
