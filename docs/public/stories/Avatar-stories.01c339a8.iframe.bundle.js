"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [844],
  {
    "./app/stories/Avatar.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Avatar: () => Avatar_stories_Avatar,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Avatar_stories,
        });
      var react = __webpack_require__(
        "../node_modules/.pnpm/next@14.0.3_@babel+core@7.26.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js",
      );
      const utils_getIconSize = (size) =>
          "xs" === size
            ? "text-moon-16"
            : "2xl" === size
              ? "text-moon-32"
              : "text-moon-24",
        utils_getStatusSize = (size) =>
          "xs" === size
            ? "[&_.status]:w-2 [&_.status]:h-2 [&_.status]:border"
            : "sm" === size || "md" === size
              ? "[&_.status]:w-3 [&_.status]:h-3 [&_.status]:border-2"
              : "[&_.status]:w-4 [&_.status]:h-4 [&_.status]:border-2";
      var mergeClassnames = __webpack_require__(
        "../packages/core/lib/es/mergeClassnames/mergeClassnames.js",
      );
      const utils_getStatusDeprecatedSize = (size) =>
          "xs" === size
            ? "w-2 h-2 border"
            : "sm" === size || "md" === size
              ? "w-3 h-3 border-2"
              : "w-4 h-4 border-2",
        StatusDeprecated = ({ size, statusOrigin }) =>
          react.createElement("div", {
            className: (0, mergeClassnames.A)(
              "absolute border-solid border-gohan rounded-full bg-roshi",
              statusOrigin && "top" === statusOrigin.vertical && "top-0",
              statusOrigin && "bottom" === statusOrigin.vertical && "bottom-0",
              statusOrigin && "left" === statusOrigin.horizontal && "start-0",
              statusOrigin && "right" === statusOrigin.horizontal && "end-0",
              utils_getStatusDeprecatedSize(size),
            ),
          }),
        styles_StatusDeprecated = StatusDeprecated;
      StatusDeprecated.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "StatusDeprecated",
      };
      const getBorderRadius = (size, isRounded) =>
          isRounded
            ? "rounded-full"
            : "xs" === size
              ? "rounded-moon-i-xs"
              : "2xl" === size
                ? "rounded-moon-i-md"
                : "rounded-moon-i-sm",
        utils_getWrapperSize = (size) =>
          "xs" === size
            ? "h-6 w-6 text-moon-10-caption"
            : "sm" === size
              ? "h-8 w-8 text-moon-12"
              : "md" === size
                ? "h-10 w-10 text-moon-14"
                : "lg" === size
                  ? "h-12 w-12 text-moon-16"
                  : "xl" === size
                    ? "h-14 w-14 text-moon-16"
                    : "h-16 w-16 text-moon-20",
        Wrapper = ({
          children,
          size,
          imageUrl,
          color,
          bgColor,
          isRounded,
          className,
        }) =>
          react.createElement(
            "div",
            {
              className: (0, mergeClassnames.A)(
                "relative overflow-hidden uppercase font-medium flex items-center justify-center bg-cover",
                "text-bulma bg-goku",
                color,
                bgColor,
                utils_getWrapperSize(size),
                getBorderRadius(size, isRounded),
                className,
              ),
              style: { backgroundImage: imageUrl && `url('${imageUrl}')` },
            },
            children,
          ),
        styles_Wrapper = Wrapper;
      Wrapper.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Wrapper",
      };
      const GenericUser = (props) =>
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
              d: "M20.3839 10.8846C20.3839 13.3062 18.4208 15.2692 15.9992 15.2692C13.5777 15.2692 11.6146 13.3062 11.6146 10.8846C11.6146 8.46306 13.5777 6.5 15.9992 6.5C18.4208 6.5 20.3839 8.46306 20.3839 10.8846Z",
              stroke: "currentColor",
            }),
            react.createElement("path", {
              d: "M15.9992 25.5C20.3425 25.5 22.8449 24.3797 24.0057 23.6586C24.5489 23.3212 24.8166 22.6999 24.7614 22.0563C24.6859 21.1773 24.3788 20.2994 24.0661 19.6031C23.6555 18.6888 22.7051 18.1923 21.7029 18.1923H10.2956C9.29337 18.1923 8.34296 18.6888 7.93239 19.6031C7.61969 20.2994 7.31257 21.1773 7.23713 22.0563C7.18189 22.6999 7.44961 23.3212 7.99278 23.6586C9.15358 24.3797 11.6559 25.5 15.9992 25.5Z",
              stroke: "currentColor",
            }),
          ),
        icons_GenericUser = GenericUser;
      GenericUser.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "GenericUser",
      };
      const AvatarRoot = ({
          name,
          imageUrl,
          color,
          bgColor,
          size = "md",
          statusOrigin = { vertical: "bottom", horizontal: "right" },
          isStatusActive,
          isRounded,
          className,
          children,
        }) =>
          react.createElement(
            styles_Wrapper,
            {
              size,
              imageUrl,
              color,
              bgColor,
              isRounded,
              className: (0, mergeClassnames.A)(
                utils_getStatusSize(size),
                className,
              ),
            },
            !imageUrl &&
              !name &&
              !children &&
              react.createElement(icons_GenericUser, {
                className: (0, mergeClassnames.A)(
                  utils_getIconSize(size),
                  color && color,
                ),
              }),
            name && name,
            " ",
            children && children,
            statusOrigin &&
              isStatusActive &&
              react.createElement(styles_StatusDeprecated, {
                size,
                statusOrigin,
              }),
            " ",
          ),
        avatar_Avatar = Object.assign(AvatarRoot, {
          Status: ({
            position = { vertical: "bottom", horizontal: "right" },
            className,
          }) =>
            react.createElement("div", {
              className: (0, mergeClassnames.A)(
                "status",
                "absolute border-solid border-gohan rounded-full bg-roshi",
                position && "top" === position.vertical && "top-0",
                position && "bottom" === position.vertical && "bottom-0",
                position && "left" === position.horizontal && "start-0",
                position && "right" === position.horizontal && "end-0",
                className,
              ),
            }),
        });
      AvatarRoot.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "AvatarRoot",
        props: {
          size: { defaultValue: { value: '"md"', computed: !1 }, required: !1 },
          statusOrigin: {
            defaultValue: {
              value: '{ vertical: "bottom", horizontal: "right" }',
              computed: !1,
            },
            required: !1,
          },
        },
      };
      const Avatar_stories = { component: avatar_Avatar },
        Avatar_stories_Avatar = { args: { size: "sm" } },
        __namedExportsOrder = ["Avatar"];
      Avatar_stories_Avatar.parameters = {
        ...Avatar_stories_Avatar.parameters,
        docs: {
          ...Avatar_stories_Avatar.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    size: "sm"\n    // children: <span>Alexander</span>,\n  }\n}',
            ...Avatar_stories_Avatar.parameters?.docs?.source,
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
