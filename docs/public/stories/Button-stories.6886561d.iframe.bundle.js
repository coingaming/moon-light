"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [303],
  {
    "./app/stories/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Button: () => Button_stories_Button,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
        });
      var jsx_runtime = __webpack_require__(
          "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js",
        );
      const utils_getDivBorder = (size) => {
          switch (size) {
            case "2xs":
            case "xs":
            case "sm":
              return "border-2";
            default:
              return "border-4";
          }
        },
        utils_getSize = (size) => {
          switch (size) {
            case "2xs":
              return "w-4 h-4";
            case "xs":
              return "w-6 h-6";
            case "sm":
              return "w-8 h-8";
            case "lg":
              return "w-12 h-12";
            default:
              return "w-10 h-10";
          }
        };
      var mergeClassnames = __webpack_require__(
        "../packages/core/lib/es/mergeClassnames/mergeClassnames.js",
      );
      const commonStyles =
          "absolute w-full h-full rounded-full animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-x-transparent border-b-transparent",
        Loader = ({
          color = "border-hit",
          size = "md",
          ariaLabel = "Loading",
        }) =>
          react.createElement(
            "div",
            {
              "aria-label": ariaLabel,
              role: "alert",
              "aria-busy": "true",
              className: (0, mergeClassnames.A)(
                utils_getSize(size),
                "relative rounded-full rtl:-scale-x-100",
              ),
            },
            react.createElement("div", {
              className: (0, mergeClassnames.A)(
                utils_getDivBorder(size),
                color,
                commonStyles,
              ),
              style: { animationDelay: "-0.45s" },
              role: "presentation",
            }),
            react.createElement("div", {
              className: (0, mergeClassnames.A)(
                utils_getDivBorder(size),
                color,
                commonStyles,
              ),
              style: { animationDelay: "-0.3s" },
              role: "presentation",
            }),
            react.createElement("div", {
              className: (0, mergeClassnames.A)(
                utils_getDivBorder(size),
                color,
                commonStyles,
              ),
              style: { animationDelay: "-0.15s" },
              role: "presentation",
            }),
            react.createElement("div", {
              className: (0, mergeClassnames.A)(
                utils_getDivBorder(size),
                color,
                commonStyles,
              ),
              role: "presentation",
            }),
          ),
        loader_Loader = Loader;
      Loader.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Loader",
        props: {
          color: {
            defaultValue: { value: '"border-hit"', computed: !1 },
            required: !1,
          },
          size: { defaultValue: { value: '"md"', computed: !1 }, required: !1 },
          ariaLabel: {
            defaultValue: { value: '"Loading"', computed: !1 },
            required: !1,
          },
        },
      };
      const GenericCheckAlternative = (props) =>
          react.createElement(
            "svg",
            Object.assign(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              props,
            ),
            react.createElement("path", {
              d: "M7 14.9412L13.6667 22L25 10",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ),
        icons_GenericCheckAlternative = GenericCheckAlternative;
      GenericCheckAlternative.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "GenericCheckAlternative",
      };
      const buttonSizes_getIconSize = (size) =>
          "xs" === size ? "text-moon-16" : "text-moon-24",
        buttonStyles_getIconHorizontalPosition = ({
          iconRight,
          iconLeft,
          size,
        }) => {
          if (iconRight)
            switch (size) {
              case "xs":
              case "sm":
                return "end-1";
              case "lg":
                return "end-3";
              case "xl":
                return "end-4";
              default:
                return "end-2";
            }
          if (iconLeft)
            switch (size) {
              case "xs":
              case "sm":
                return "start-1";
              case "lg":
                return "start-3";
              case "xl":
                return "start-4";
              default:
                return "start-2";
            }
          return "";
        },
        IconLeft = ({ fullWidth, iconLeft, size }) =>
          react.createElement(
            "span",
            {
              "aria-hidden": "true",
              className: (0, mergeClassnames.A)(
                buttonSizes_getIconSize(size),
                fullWidth &&
                  `absolute block top-1/2 translate-y-[-50%] ${buttonStyles_getIconHorizontalPosition({ iconLeft, size })}`,
              ),
            },
            iconLeft,
          ),
        styles_IconLeft = IconLeft;
      IconLeft.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "IconLeft",
      };
      const IconRight = ({ fullWidth, iconRight, size }) =>
          react.createElement(
            "span",
            {
              "aria-hidden": "true",
              className: (0, mergeClassnames.A)(
                buttonSizes_getIconSize(size),
                fullWidth &&
                  `absolute block top-1/2 translate-y-[-50%] ${buttonStyles_getIconHorizontalPosition({ iconRight, size })}`,
              ),
            },
            iconRight,
          ),
        styles_IconRight = IconRight;
      IconRight.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "IconRight",
      };
      const buttonSizes_getLoaderSize = (size) =>
          "xs" === size ? "2xs" : "xs",
        buttonStyles_getLoaderColor = (variant) => {
          switch (variant) {
            case "secondary":
            case "outline":
              return "border-bulma";
            case "ghost":
              return "border-trunks";
            default:
              return "border-goten";
          }
        },
        AnimationContent = ({
          children,
          iconLeft,
          iconRight,
          iconOnly,
          animation,
          size,
          fullWidth,
          variant,
        }) =>
          react.createElement(
            "span",
            { className: "block h-full pointer-events-none" },
            react.createElement(
              "span",
              {
                className: (0, mergeClassnames.A)(
                  "flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 content-center",
                  "justify-center",
                ),
              },
              "progress" === animation &&
                react.createElement(loader_Loader, {
                  size: buttonSizes_getLoaderSize(size),
                  color: buttonStyles_getLoaderColor(variant),
                }),
              "success" === animation &&
                react.createElement(icons_GenericCheckAlternative, {
                  "aria-label": "Success",
                  className: buttonSizes_getIconSize(size),
                }),
            ),
            react.createElement(
              "span",
              { className: "flex gap-2 items-center opacity-0" },
              iconLeft &&
                react.createElement(styles_IconLeft, {
                  fullWidth,
                  iconLeft,
                  size,
                }),
              children,
              iconRight &&
                react.createElement(styles_IconRight, {
                  fullWidth,
                  iconRight,
                  size,
                }),
              iconOnly,
            ),
          ),
        buttonAnimations_AnimationContent = AnimationContent;
      AnimationContent.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "AnimationContent",
      };
      const buttonAnimations_getAnimation = (animation) => {
          switch (animation) {
            case "error":
              return "anim-error animate-[error_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_1_both]";
            case "pulse":
              return "anim-pulse animate-[pulse2_1.5s_infinite]";
            default:
              return "";
          }
        },
        buttonSizes_getLgPadding = ({
          icon,
          iconLeft,
          iconRight,
          iconOnly,
          fullWidth,
        }) =>
          fullWidth
            ? "px-4"
            : "left" === icon || iconLeft
              ? "ps-3 pe-4"
              : "right" === icon || iconRight
                ? "ps-4 pe-3"
                : "only" === icon || iconOnly
                  ? "px-3"
                  : "px-4",
        buttonSizes_getMdPadding = ({
          icon,
          iconLeft,
          iconRight,
          iconOnly,
          fullWidth,
        }) =>
          fullWidth
            ? "px-4"
            : "left" === icon || iconLeft
              ? "ps-2 pe-4"
              : "right" === icon || iconRight
                ? "ps-4 pe-2"
                : "only" === icon || iconOnly
                  ? "px-2"
                  : "px-4",
        buttonSizes_getSmPadding = ({
          icon,
          iconLeft,
          iconRight,
          iconOnly,
          fullWidth,
        }) =>
          fullWidth
            ? "px-3"
            : "left" === icon || iconLeft
              ? "ps-1 pe-3"
              : "right" === icon || iconRight
                ? "ps-3 pe-1"
                : "only" === icon || iconOnly
                  ? "px-1"
                  : "px-3",
        buttonSizes_getXlPadding = ({
          icon,
          iconLeft,
          iconRight,
          iconOnly,
          fullWidth,
        }) =>
          fullWidth
            ? "px-6"
            : "left" === icon || iconLeft
              ? "ps-4 pe-6"
              : "right" === icon || iconRight
                ? "ps-6 pe-4"
                : "only" === icon || iconOnly
                  ? "px-4"
                  : "px-6",
        buttonSizes_getXsPadding = ({
          icon,
          iconLeft,
          iconRight,
          iconOnly,
          fullWidth,
        }) =>
          fullWidth
            ? "px-2"
            : "left" === icon || iconLeft
              ? "ps-1 pe-2"
              : "right" === icon || iconRight
                ? "ps-2 pe-1"
                : "only" === icon || iconOnly
                  ? "px-1"
                  : "px-2",
        buttonSizes_getButtonSize = ({
          size,
          icon,
          iconLeft,
          iconRight,
          iconOnly,
          fullWidth,
        }) =>
          "xs" === size
            ? (0, mergeClassnames.A)(
                buttonSizes_getXsPadding({
                  icon,
                  iconLeft,
                  iconRight,
                  iconOnly,
                  fullWidth,
                }),
                "h-6 py-1 gap-1 text-moon-12 rounded-moon-i-xs",
              )
            : "sm" === size
              ? (0, mergeClassnames.A)(
                  buttonSizes_getSmPadding({
                    icon,
                    iconLeft,
                    iconRight,
                    iconOnly,
                    fullWidth,
                  }),
                  "h-8 py-1 gap-1 text-moon-14 rounded-moon-i-sm",
                )
              : "lg" === size
                ? (0, mergeClassnames.A)(
                    buttonSizes_getLgPadding({
                      icon,
                      iconLeft,
                      iconRight,
                      iconOnly,
                      fullWidth,
                    }),
                    "h-12 py-3 gap-2 text-moon-16 rounded-moon-i-sm",
                  )
                : "xl" === size
                  ? (0, mergeClassnames.A)(
                      buttonSizes_getXlPadding({
                        icon,
                        iconLeft,
                        iconRight,
                        iconOnly,
                        fullWidth,
                      }),
                      "h-14 py-4 gap-2 text-moon-16 rounded-moon-i-md",
                    )
                  : (0, mergeClassnames.A)(
                      buttonSizes_getMdPadding({
                        icon,
                        iconLeft,
                        iconRight,
                        iconOnly,
                        fullWidth,
                      }),
                      "h-10 py-2 gap-2 text-moon-14 rounded-moon-i-sm",
                    ),
        buttonStyles_getButtonCommonStyles = ({ disabled }) =>
          (0, mergeClassnames.A)(
            "relative z-0 flex justify-center items-center font-medium no-underline overflow-hidden",
            "whitespace-nowrap select-none transition duration-200",
            disabled ? "opacity-60 cursor-not-allowed" : "active:scale-90",
          ),
        buttonStyles_getButtonVariants = ({ variant, disabled, animation }) =>
          "secondary" === variant || "outline" === variant
            ? "error" === animation
              ? (0, mergeClassnames.A)(
                  "text-chichi bg-transparent ring-inset ring-1 ring-chichi",
                  !disabled && "hover-supported:hover:bg-chichi-10",
                )
              : (0, mergeClassnames.A)(
                  "text-bulma bg-transparent ring-inset ring-1 ring-trunks",
                  !disabled &&
                    "hover-supported:hover:ring-bulma hover-supported:[&>.hover]:hover:bg-heles",
                )
            : "tertiary" === variant
              ? "error" === animation
                ? "text-goten bg-chichi"
                : "text-goten bg-hit"
              : "ghost" === variant
                ? "error" === animation
                  ? (0, mergeClassnames.A)(
                      "text-chichi bg-transparent",
                      !disabled && "hover-supported:hover:bg-chichi-10",
                    )
                  : (0, mergeClassnames.A)(
                      "text-trunks bg-transparent",
                      !disabled &&
                        "hover-supported:hover:text-bulma hover-supported:[&>.hover]:hover:bg-jiren",
                    )
                : "error" === animation
                  ? "text-goten bg-chichi"
                  : "text-goten bg-piccolo hover-supported:[&>.hover]:hover:bg-heles";
      var __rest = function (s, e) {
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
      const ButtonComponent = (_a) => {
          var {
              variant,
              size,
              icon,
              iconLeft,
              iconRight,
              iconOnly,
              fullWidth,
              disabled,
              animation,
              as,
              className,
            } = _a,
            rest = __rest(_a, [
              "variant",
              "size",
              "icon",
              "iconLeft",
              "iconRight",
              "iconOnly",
              "fullWidth",
              "disabled",
              "animation",
              "as",
              "className",
            ]);
          const Component = as || "button";
          return react.createElement(
            Component,
            Object.assign(
              {
                className: (0, mergeClassnames.A)(
                  buttonSizes_getButtonSize({
                    size,
                    icon,
                    iconLeft,
                    iconRight,
                    iconOnly,
                    fullWidth,
                  }),
                  buttonStyles_getButtonCommonStyles({ disabled }),
                  buttonStyles_getButtonVariants({
                    variant,
                    disabled,
                    animation,
                  }),
                  "pulse" === animation &&
                    ("fill" === variant || "primary" === variant) &&
                    buttonAnimations_getAnimation("pulse"),
                  "error" === animation &&
                    buttonAnimations_getAnimation("error"),
                  fullWidth && !iconOnly && "w-full",
                  className,
                ),
              },
              (!as || "button" === as) && { type: "button" },
              disabled && { disabled },
              rest,
            ),
          );
        },
        styles_ButtonComponent = ButtonComponent;
      ButtonComponent.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "ButtonComponent",
      };
      const Hover = () =>
          react.createElement("span", {
            className:
              "hover z-[-1] block absolute inset-0 pointer-events-none transition-colors",
          }),
        styles_Hover = Hover;
      Hover.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Hover",
      };
      var Button_rest = function (s, e) {
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
      const Button = (_a) => {
          var {
              children,
              variant = "fill",
              size = "md",
              icon,
              iconLeft,
              iconRight,
              iconOnly,
              fullWidth,
              disabled,
              animation,
              as,
              className,
            } = _a,
            rest = Button_rest(_a, [
              "children",
              "variant",
              "size",
              "icon",
              "iconLeft",
              "iconRight",
              "iconOnly",
              "fullWidth",
              "disabled",
              "animation",
              "as",
              "className",
            ]);
          const hasAnimationContent =
            "progress" === animation || "success" === animation;
          return react.createElement(
            styles_ButtonComponent,
            Object.assign(
              {
                size,
                variant,
                icon,
                iconLeft,
                iconRight,
                iconOnly,
                fullWidth,
                disabled,
                animation,
                as,
                className,
              },
              rest,
            ),
            hasAnimationContent
              ? react.createElement(buttonAnimations_AnimationContent, {
                  iconLeft,
                  children,
                  iconRight,
                  iconOnly,
                  animation,
                  size,
                  fullWidth,
                  variant,
                })
              : react.createElement(
                  react.Fragment,
                  null,
                  iconLeft &&
                    react.createElement(styles_IconLeft, {
                      fullWidth,
                      iconLeft,
                      size,
                    }),
                  children,
                  iconRight &&
                    react.createElement(styles_IconRight, {
                      fullWidth,
                      iconRight,
                      size,
                    }),
                  iconOnly,
                ),
            react.createElement(styles_Hover, null),
          );
        },
        button_Button = Button;
      Button.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Button",
      };
      const Button_stories = { component: button_Button },
        Button_stories_Button = {
          args: {
            children: (0, jsx_runtime.jsx)("span", { children: "Click me" }),
            variant: "primary",
            size: "xl",
            disabled: !1,
            fullWidth: !1,
            animation: "pulse",
          },
        },
        __namedExportsOrder = ["Button"];
      Button_stories_Button.parameters = {
        ...Button_stories_Button.parameters,
        docs: {
          ...Button_stories_Button.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: <span>Click me</span>,\n    variant: "primary",\n    size: "xl",\n    disabled: false,\n    fullWidth: false,\n    animation: "pulse"\n  }\n}',
            ...Button_stories_Button.parameters?.docs?.source,
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
    "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        var f = __webpack_require__(
            "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js",
          ),
          k = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          m = Object.prototype.hasOwnProperty,
          n =
            f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          p = { key: !0, ref: !0, __self: !0, __source: !0 };
        function q(c, a, g) {
          var b,
            d = {},
            e = null,
            h = null;
          for (b in (void 0 !== g && (e = "" + g),
          void 0 !== a.key && (e = "" + a.key),
          void 0 !== a.ref && (h = a.ref),
          a))
            m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
          if (c && c.defaultProps)
            for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
          return {
            $$typeof: k,
            type: c,
            key: e,
            ref: h,
            props: d,
            _owner: n.current,
          };
        }
        (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
      },
    "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__(
          "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js",
        );
      },
  },
]);
