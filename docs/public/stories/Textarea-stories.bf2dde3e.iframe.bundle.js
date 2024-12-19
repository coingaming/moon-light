"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [437],
  {
    "./app/stories/Textarea.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Textarea: () => Textarea_stories_Textarea,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Textarea_stories,
        });
      var react = __webpack_require__(
        "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js",
      );
      const ItemContext = (0, react.createContext)({});
      ItemContext.displayName = "ItemContext";
      const utils_ItemContext = ItemContext,
        utils_useFormItemContext = (component) => {
          const context = (0, react.useContext)(utils_ItemContext);
          if (null === context) {
            throw new Error(
              `<${component}> is missing root <Form.Item /> component.`,
            );
          }
          return context;
        };
      var mergeClassnames = __webpack_require__(
          "../packages/core/lib/es/mergeClassnames/mergeClassnames.js",
        ),
        __rest = function (s, e) {
          var t = {};
          for (var p in s)
            Object.prototype.hasOwnProperty.call(s, p) &&
              e.indexOf(p) < 0 &&
              (t[p] = s[p]);
          if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
              e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
                (t[p[i]] = s[p[i]]);
          }
          return t;
        };
      const Textarea = (0, react.forwardRef)((_a, ref) => {
          var { className, error: textareaError } = _a,
            rest = __rest(_a, ["className", "error"]);
          const { disabled: formItemDisabled, error: formItemError } =
              utils_useFormItemContext("Textarea"),
            error = textareaError || formItemError,
            ariaLabelValue = rest.placeholder
              ? void 0
              : rest["aria-label"]
                ? rest["aria-label"]
                : rest.name
                  ? rest.name
                  : "Textarea";
          return react.createElement(
            "textarea",
            Object.assign(
              {
                ref,
                disabled: rest.disabled || formItemDisabled,
                className: (0, mergeClassnames.A)(
                  "block appearance-none resize-none w-full p-4 text-moon-16 text-bulma bg-goku",
                  "rounded-moon-s-sm placeholder:text-trunks transition-shadow shadow-textarea",
                  "hover:shadow-textarea-hov focus:shadow-textarea-focus focus:outline-none",
                  "read-only:outline-0 read-only:border-none read-only:cursor-not-allowed",
                  "read-only:hover:shadow-textarea read-only:focus:shadow-textarea",
                  "read-only:focus-visible:shadow-textarea",
                  error &&
                    "shadow-textarea-err hover:shadow-textarea-err focus:shadow-textarea-err",
                  rest.disabled && "opacity-60 cursor-not-allowed",
                  className,
                ),
                "aria-label": ariaLabelValue,
              },
              rest,
            ),
          );
        }),
        textarea_Textarea = Textarea;
      Textarea.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Textarea",
      };
      const Textarea_stories = { component: textarea_Textarea },
        Textarea_stories_Textarea = { args: { error: !1 } },
        __namedExportsOrder = ["Textarea"];
      Textarea_stories_Textarea.parameters = {
        ...Textarea_stories_Textarea.parameters,
        docs: {
          ...Textarea_stories_Textarea.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    error: false\n  }\n}",
            ...Textarea_stories_Textarea.parameters?.docs?.source,
          },
        },
      };
    },
    "../packages/core/lib/es/mergeClassnames/mergeClassnames.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      const __WEBPACK_DEFAULT_EXPORT__ = (0,
      __webpack_require__(
        "../node_modules/.pnpm/tailwind-merge@1.14.0/node_modules/tailwind-merge/dist/lib/extend-tailwind-merge.mjs",
      ).z)({
        cacheSize: 0,
        classGroups: {
          borderRadius: [
            {
              rounded: [
                "none",
                "full",
                {
                  moon: [
                    "i-xs",
                    "i-sm",
                    "i-md",
                    "s-xs",
                    "s-sm",
                    "s-md",
                    "s-lg",
                  ],
                },
              ],
            },
          ],
          fontSize: [
            {
              text: [
                {
                  moon: [
                    "9",
                    "9-caption",
                    "10",
                    "10-caption",
                    "12",
                    "14",
                    "16",
                    "18",
                    "20",
                    "24",
                    "32",
                    "40",
                    "48",
                    "56",
                    "64",
                    "72",
                  ],
                },
              ],
            },
          ],
          color: [
            {
              text: [
                {
                  moon: [
                    "piccolo",
                    "hit",
                    "beerus",
                    "goku",
                    "gohan",
                    "bulma",
                    "trunks",
                    "goten",
                    "popo",
                    "jiren",
                    "heles",
                    "zeno",
                    { krillin: ["100", "60", "10"] },
                    { chichi: ["100", "60", "10"] },
                    { roshi: ["100", "60", "10"] },
                    { dodoria: ["100", "60", "10"] },
                    { cell: ["100", "60", "10"] },
                    { raditz: ["100", "60", "10"] },
                    { whis: ["100", "60", "10"] },
                    { frieza: ["100", "60", "10"] },
                    { nappa: ["100", "60", "10"] },
                  ],
                },
              ],
            },
          ],
          boxShadow: [{ shadow: [{ moon: ["xs", "sm", "md", "lg", "xl"] }] }],
        },
      });
    },
  },
]);
