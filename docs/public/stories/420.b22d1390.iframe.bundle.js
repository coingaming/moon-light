"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [420],
  {
    "../node_modules/.pnpm/tailwind-merge@1.14.0/node_modules/tailwind-merge/dist/lib/extend-tailwind-merge.mjs":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          z: () => extendTailwindMerge,
        });
        var CLASS_PART_SEPARATOR = "-";
        function createClassUtils(config) {
          var classMap = (function createClassMap(config) {
              var theme = config.theme,
                prefix = config.prefix,
                classMap = { nextPart: new Map(), validators: [] },
                prefixedClassGroupEntries =
                  (function getPrefixedClassGroupEntries(
                    classGroupEntries,
                    prefix,
                  ) {
                    if (!prefix) return classGroupEntries;
                    return classGroupEntries.map(function (_ref4) {
                      return [
                        _ref4[0],
                        _ref4[1].map(function (classDefinition) {
                          return "string" == typeof classDefinition
                            ? prefix + classDefinition
                            : "object" == typeof classDefinition
                              ? Object.fromEntries(
                                  Object.entries(classDefinition).map(
                                    function (_ref5) {
                                      var key = _ref5[0],
                                        value = _ref5[1];
                                      return [prefix + key, value];
                                    },
                                  ),
                                )
                              : classDefinition;
                        }),
                      ];
                    });
                  })(Object.entries(config.classGroups), prefix);
              return (
                prefixedClassGroupEntries.forEach(function (_ref2) {
                  var classGroupId = _ref2[0];
                  processClassesRecursively(
                    _ref2[1],
                    classMap,
                    classGroupId,
                    theme,
                  );
                }),
                classMap
              );
            })(config),
            conflictingClassGroups = config.conflictingClassGroups,
            _config$conflictingCl = config.conflictingClassGroupModifiers,
            conflictingClassGroupModifiers =
              void 0 === _config$conflictingCl ? {} : _config$conflictingCl;
          return {
            getClassGroupId: function getClassGroupId(className) {
              var classParts = className.split(CLASS_PART_SEPARATOR);
              return (
                "" === classParts[0] &&
                  1 !== classParts.length &&
                  classParts.shift(),
                getGroupRecursive(classParts, classMap) ||
                  (function getGroupIdForArbitraryProperty(className) {
                    if (arbitraryPropertyRegex.test(className)) {
                      var arbitraryPropertyClassName =
                          arbitraryPropertyRegex.exec(className)[1],
                        property = arbitraryPropertyClassName?.substring(
                          0,
                          arbitraryPropertyClassName.indexOf(":"),
                        );
                      if (property) return "arbitrary.." + property;
                    }
                  })(className)
              );
            },
            getConflictingClassGroupIds: function getConflictingClassGroupIds(
              classGroupId,
              hasPostfixModifier,
            ) {
              var conflicts = conflictingClassGroups[classGroupId] || [];
              return hasPostfixModifier &&
                conflictingClassGroupModifiers[classGroupId]
                ? [].concat(
                    conflicts,
                    conflictingClassGroupModifiers[classGroupId],
                  )
                : conflicts;
            },
          };
        }
        function getGroupRecursive(classParts, classPartObject) {
          if (0 === classParts.length) return classPartObject.classGroupId;
          var currentClassPart = classParts[0],
            nextClassPartObject =
              classPartObject.nextPart.get(currentClassPart),
            classGroupFromNextClassPart = nextClassPartObject
              ? getGroupRecursive(classParts.slice(1), nextClassPartObject)
              : void 0;
          if (classGroupFromNextClassPart) return classGroupFromNextClassPart;
          if (0 !== classPartObject.validators.length) {
            var classRest = classParts.join(CLASS_PART_SEPARATOR);
            return classPartObject.validators.find(function (_ref) {
              return (0, _ref.validator)(classRest);
            })?.classGroupId;
          }
        }
        var arbitraryPropertyRegex = /^\[(.+)\]$/;
        function processClassesRecursively(
          classGroup,
          classPartObject,
          classGroupId,
          theme,
        ) {
          classGroup.forEach(function (classDefinition) {
            if ("string" != typeof classDefinition) {
              if ("function" == typeof classDefinition)
                return (function isThemeGetter(func) {
                  return func.isThemeGetter;
                })(classDefinition)
                  ? void processClassesRecursively(
                      classDefinition(theme),
                      classPartObject,
                      classGroupId,
                      theme,
                    )
                  : void classPartObject.validators.push({
                      validator: classDefinition,
                      classGroupId,
                    });
              Object.entries(classDefinition).forEach(function (_ref3) {
                var key = _ref3[0];
                processClassesRecursively(
                  _ref3[1],
                  getPart(classPartObject, key),
                  classGroupId,
                  theme,
                );
              });
            } else {
              ("" === classDefinition
                ? classPartObject
                : getPart(classPartObject, classDefinition)
              ).classGroupId = classGroupId;
            }
          });
        }
        function getPart(classPartObject, path) {
          var currentClassPartObject = classPartObject;
          return (
            path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
              currentClassPartObject.nextPart.has(pathPart) ||
                currentClassPartObject.nextPart.set(pathPart, {
                  nextPart: new Map(),
                  validators: [],
                }),
                (currentClassPartObject =
                  currentClassPartObject.nextPart.get(pathPart));
            }),
            currentClassPartObject
          );
        }
        function createLruCache(maxCacheSize) {
          if (maxCacheSize < 1)
            return { get: function get() {}, set: function set() {} };
          var cacheSize = 0,
            cache = new Map(),
            previousCache = new Map();
          function update(key, value) {
            cache.set(key, value),
              ++cacheSize > maxCacheSize &&
                ((cacheSize = 0), (previousCache = cache), (cache = new Map()));
          }
          return {
            get: function get(key) {
              var value = cache.get(key);
              return void 0 !== value
                ? value
                : void 0 !== (value = previousCache.get(key))
                  ? (update(key, value), value)
                  : void 0;
            },
            set: function set(key, value) {
              cache.has(key) ? cache.set(key, value) : update(key, value);
            },
          };
        }
        var IMPORTANT_MODIFIER = "!";
        function createSplitModifiers(config) {
          var separator = config.separator || ":",
            isSeparatorSingleCharacter = 1 === separator.length,
            firstSeparatorCharacter = separator[0],
            separatorLength = separator.length;
          return function splitModifiers(className) {
            for (
              var postfixModifierPosition,
                modifiers = [],
                bracketDepth = 0,
                modifierStart = 0,
                index = 0;
              index < className.length;
              index++
            ) {
              var currentCharacter = className[index];
              if (0 === bracketDepth) {
                if (
                  currentCharacter === firstSeparatorCharacter &&
                  (isSeparatorSingleCharacter ||
                    className.slice(index, index + separatorLength) ===
                      separator)
                ) {
                  modifiers.push(className.slice(modifierStart, index)),
                    (modifierStart = index + separatorLength);
                  continue;
                }
                if ("/" === currentCharacter) {
                  postfixModifierPosition = index;
                  continue;
                }
              }
              "[" === currentCharacter
                ? bracketDepth++
                : "]" === currentCharacter && bracketDepth--;
            }
            var baseClassNameWithImportantModifier =
                0 === modifiers.length
                  ? className
                  : className.substring(modifierStart),
              hasImportantModifier =
                baseClassNameWithImportantModifier.startsWith(
                  IMPORTANT_MODIFIER,
                );
            return {
              modifiers,
              hasImportantModifier,
              baseClassName: hasImportantModifier
                ? baseClassNameWithImportantModifier.substring(1)
                : baseClassNameWithImportantModifier,
              maybePostfixModifierPosition:
                postfixModifierPosition &&
                postfixModifierPosition > modifierStart
                  ? postfixModifierPosition - modifierStart
                  : void 0,
            };
          };
        }
        var SPLIT_CLASSES_REGEX = /\s+/;
        function twJoin() {
          for (
            var argument, resolvedValue, index = 0, string = "";
            index < arguments.length;

          )
            (argument = arguments[index++]) &&
              (resolvedValue = toValue(argument)) &&
              (string && (string += " "), (string += resolvedValue));
          return string;
        }
        function toValue(mix) {
          if ("string" == typeof mix) return mix;
          for (var resolvedValue, string = "", k = 0; k < mix.length; k++)
            mix[k] &&
              (resolvedValue = toValue(mix[k])) &&
              (string && (string += " "), (string += resolvedValue));
          return string;
        }
        function createTailwindMerge() {
          for (
            var _len = arguments.length,
              createConfig = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            createConfig[_key] = arguments[_key];
          var configUtils,
            cacheGet,
            cacheSet,
            functionToCall = function initTailwindMerge(classList) {
              var firstCreateConfig = createConfig[0],
                config = createConfig.slice(1).reduce(function (
                  previousConfig,
                  createConfigCurrent,
                ) {
                  return createConfigCurrent(previousConfig);
                }, firstCreateConfig());
              return (
                (configUtils = (function createConfigUtils(config) {
                  return {
                    cache: createLruCache(config.cacheSize),
                    splitModifiers: createSplitModifiers(config),
                    ...createClassUtils(config),
                  };
                })(config)),
                (cacheGet = configUtils.cache.get),
                (cacheSet = configUtils.cache.set),
                (functionToCall = tailwindMerge),
                tailwindMerge(classList)
              );
            };
          function tailwindMerge(classList) {
            var cachedResult = cacheGet(classList);
            if (cachedResult) return cachedResult;
            var result = (function mergeClassList(classList, configUtils) {
              var splitModifiers = configUtils.splitModifiers,
                getClassGroupId = configUtils.getClassGroupId,
                getConflictingClassGroupIds =
                  configUtils.getConflictingClassGroupIds,
                classGroupsInConflict = new Set();
              return classList
                .trim()
                .split(SPLIT_CLASSES_REGEX)
                .map(function (originalClassName) {
                  var _splitModifiers = splitModifiers(originalClassName),
                    modifiers = _splitModifiers.modifiers,
                    hasImportantModifier = _splitModifiers.hasImportantModifier,
                    baseClassName = _splitModifiers.baseClassName,
                    maybePostfixModifierPosition =
                      _splitModifiers.maybePostfixModifierPosition,
                    classGroupId = getClassGroupId(
                      maybePostfixModifierPosition
                        ? baseClassName.substring(
                            0,
                            maybePostfixModifierPosition,
                          )
                        : baseClassName,
                    ),
                    hasPostfixModifier = Boolean(maybePostfixModifierPosition);
                  if (!classGroupId) {
                    if (!maybePostfixModifierPosition)
                      return { isTailwindClass: !1, originalClassName };
                    if (!(classGroupId = getClassGroupId(baseClassName)))
                      return { isTailwindClass: !1, originalClassName };
                    hasPostfixModifier = !1;
                  }
                  var variantModifier = (function sortModifiers(modifiers) {
                    if (modifiers.length <= 1) return modifiers;
                    var sortedModifiers = [],
                      unsortedModifiers = [];
                    return (
                      modifiers.forEach(function (modifier) {
                        "[" === modifier[0]
                          ? (sortedModifiers.push.apply(
                              sortedModifiers,
                              unsortedModifiers.sort().concat([modifier]),
                            ),
                            (unsortedModifiers = []))
                          : unsortedModifiers.push(modifier);
                      }),
                      sortedModifiers.push.apply(
                        sortedModifiers,
                        unsortedModifiers.sort(),
                      ),
                      sortedModifiers
                    );
                  })(modifiers).join(":");
                  return {
                    isTailwindClass: !0,
                    modifierId: hasImportantModifier
                      ? variantModifier + IMPORTANT_MODIFIER
                      : variantModifier,
                    classGroupId,
                    originalClassName,
                    hasPostfixModifier,
                  };
                })
                .reverse()
                .filter(function (parsed) {
                  if (!parsed.isTailwindClass) return !0;
                  var modifierId = parsed.modifierId,
                    classGroupId = parsed.classGroupId,
                    hasPostfixModifier = parsed.hasPostfixModifier,
                    classId = modifierId + classGroupId;
                  return (
                    !classGroupsInConflict.has(classId) &&
                    (classGroupsInConflict.add(classId),
                    getConflictingClassGroupIds(
                      classGroupId,
                      hasPostfixModifier,
                    ).forEach(function (group) {
                      return classGroupsInConflict.add(modifierId + group);
                    }),
                    !0)
                  );
                })
                .reverse()
                .map(function (parsed) {
                  return parsed.originalClassName;
                })
                .join(" ");
            })(classList, configUtils);
            return cacheSet(classList, result), result;
          }
          return function callTailwindMerge() {
            return functionToCall(twJoin.apply(null, arguments));
          };
        }
        function fromTheme(key) {
          var themeGetter = function themeGetter(theme) {
            return theme[key] || [];
          };
          return (themeGetter.isThemeGetter = !0), themeGetter;
        }
        var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i,
          fractionRegex = /^\d+\/\d+$/,
          stringLengths = new Set(["px", "full", "screen"]),
          tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          lengthUnitRegex =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          shadowRegex =
            /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
        function isLength(value) {
          return (
            isNumber(value) ||
            stringLengths.has(value) ||
            fractionRegex.test(value) ||
            isArbitraryLength(value)
          );
        }
        function isArbitraryLength(value) {
          return getIsArbitraryValue(value, "length", isLengthOnly);
        }
        function isArbitrarySize(value) {
          return getIsArbitraryValue(value, "size", isNever);
        }
        function isArbitraryPosition(value) {
          return getIsArbitraryValue(value, "position", isNever);
        }
        function isArbitraryUrl(value) {
          return getIsArbitraryValue(value, "url", isUrl);
        }
        function isArbitraryNumber(value) {
          return getIsArbitraryValue(value, "number", isNumber);
        }
        function isNumber(value) {
          return !Number.isNaN(Number(value));
        }
        function isPercent(value) {
          return value.endsWith("%") && isNumber(value.slice(0, -1));
        }
        function isInteger(value) {
          return (
            isIntegerOnly(value) ||
            getIsArbitraryValue(value, "number", isIntegerOnly)
          );
        }
        function isArbitraryValue(value) {
          return arbitraryValueRegex.test(value);
        }
        function isAny() {
          return !0;
        }
        function isTshirtSize(value) {
          return tshirtUnitRegex.test(value);
        }
        function isArbitraryShadow(value) {
          return getIsArbitraryValue(value, "", isShadow);
        }
        function getIsArbitraryValue(value, label, testValue) {
          var result = arbitraryValueRegex.exec(value);
          return (
            !!result && (result[1] ? result[1] === label : testValue(result[2]))
          );
        }
        function isLengthOnly(value) {
          return lengthUnitRegex.test(value);
        }
        function isNever() {
          return !1;
        }
        function isUrl(value) {
          return value.startsWith("url(");
        }
        function isIntegerOnly(value) {
          return Number.isInteger(Number(value));
        }
        function isShadow(value) {
          return shadowRegex.test(value);
        }
        function getDefaultConfig() {
          var colors = fromTheme("colors"),
            spacing = fromTheme("spacing"),
            blur = fromTheme("blur"),
            brightness = fromTheme("brightness"),
            borderColor = fromTheme("borderColor"),
            borderRadius = fromTheme("borderRadius"),
            borderSpacing = fromTheme("borderSpacing"),
            borderWidth = fromTheme("borderWidth"),
            contrast = fromTheme("contrast"),
            grayscale = fromTheme("grayscale"),
            hueRotate = fromTheme("hueRotate"),
            invert = fromTheme("invert"),
            gap = fromTheme("gap"),
            gradientColorStops = fromTheme("gradientColorStops"),
            gradientColorStopPositions = fromTheme(
              "gradientColorStopPositions",
            ),
            inset = fromTheme("inset"),
            margin = fromTheme("margin"),
            opacity = fromTheme("opacity"),
            padding = fromTheme("padding"),
            saturate = fromTheme("saturate"),
            scale = fromTheme("scale"),
            sepia = fromTheme("sepia"),
            skew = fromTheme("skew"),
            space = fromTheme("space"),
            translate = fromTheme("translate"),
            getSpacingWithAutoAndArbitrary =
              function getSpacingWithAutoAndArbitrary() {
                return ["auto", isArbitraryValue, spacing];
              },
            getSpacingWithArbitrary = function getSpacingWithArbitrary() {
              return [isArbitraryValue, spacing];
            },
            getLengthWithEmpty = function getLengthWithEmpty() {
              return ["", isLength];
            },
            getNumberWithAutoAndArbitrary =
              function getNumberWithAutoAndArbitrary() {
                return ["auto", isNumber, isArbitraryValue];
              },
            getZeroAndEmpty = function getZeroAndEmpty() {
              return ["", "0", isArbitraryValue];
            },
            getNumber = function getNumber() {
              return [isNumber, isArbitraryNumber];
            },
            getNumberAndArbitrary = function getNumberAndArbitrary() {
              return [isNumber, isArbitraryValue];
            };
          return {
            cacheSize: 500,
            theme: {
              colors: [isAny],
              spacing: [isLength],
              blur: ["none", "", isTshirtSize, isArbitraryValue],
              brightness: getNumber(),
              borderColor: [colors],
              borderRadius: [
                "none",
                "",
                "full",
                isTshirtSize,
                isArbitraryValue,
              ],
              borderSpacing: getSpacingWithArbitrary(),
              borderWidth: getLengthWithEmpty(),
              contrast: getNumber(),
              grayscale: getZeroAndEmpty(),
              hueRotate: getNumberAndArbitrary(),
              invert: getZeroAndEmpty(),
              gap: getSpacingWithArbitrary(),
              gradientColorStops: [colors],
              gradientColorStopPositions: [isPercent, isArbitraryLength],
              inset: getSpacingWithAutoAndArbitrary(),
              margin: getSpacingWithAutoAndArbitrary(),
              opacity: getNumber(),
              padding: getSpacingWithArbitrary(),
              saturate: getNumber(),
              scale: getNumber(),
              sepia: getZeroAndEmpty(),
              skew: getNumberAndArbitrary(),
              space: getSpacingWithArbitrary(),
              translate: getSpacingWithArbitrary(),
            },
            classGroups: {
              aspect: [
                { aspect: ["auto", "square", "video", isArbitraryValue] },
              ],
              container: ["container"],
              columns: [{ columns: [isTshirtSize] }],
              "break-after": [
                {
                  "break-after": [
                    "auto",
                    "avoid",
                    "all",
                    "avoid-page",
                    "page",
                    "left",
                    "right",
                    "column",
                  ],
                },
              ],
              "break-before": [
                {
                  "break-before": [
                    "auto",
                    "avoid",
                    "all",
                    "avoid-page",
                    "page",
                    "left",
                    "right",
                    "column",
                  ],
                },
              ],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none"] }],
              clear: [{ clear: ["left", "right", "both", "none"] }],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [
                {
                  object: [].concat(
                    [
                      "bottom",
                      "center",
                      "left",
                      "left-bottom",
                      "left-top",
                      "right",
                      "right-bottom",
                      "right-top",
                      "top",
                    ],
                    [isArbitraryValue],
                  ),
                },
              ],
              overflow: [
                { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
              ],
              "overflow-x": [
                {
                  "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"],
                },
              ],
              "overflow-y": [
                {
                  "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"],
                },
              ],
              overscroll: [{ overscroll: ["auto", "contain", "none"] }],
              "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
              "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [inset] }],
              "inset-x": [{ "inset-x": [inset] }],
              "inset-y": [{ "inset-y": [inset] }],
              start: [{ start: [inset] }],
              end: [{ end: [inset] }],
              top: [{ top: [inset] }],
              right: [{ right: [inset] }],
              bottom: [{ bottom: [inset] }],
              left: [{ left: [inset] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", isInteger] }],
              basis: [{ basis: getSpacingWithAutoAndArbitrary() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [
                { flex: ["1", "auto", "initial", "none", isArbitraryValue] },
              ],
              grow: [{ grow: getZeroAndEmpty() }],
              shrink: [{ shrink: getZeroAndEmpty() }],
              order: [{ order: ["first", "last", "none", isInteger] }],
              "grid-cols": [{ "grid-cols": [isAny] }],
              "col-start-end": [
                {
                  col: [
                    "auto",
                    { span: ["full", isInteger] },
                    isArbitraryValue,
                  ],
                },
              ],
              "col-start": [{ "col-start": getNumberWithAutoAndArbitrary() }],
              "col-end": [{ "col-end": getNumberWithAutoAndArbitrary() }],
              "grid-rows": [{ "grid-rows": [isAny] }],
              "row-start-end": [
                { row: ["auto", { span: [isInteger] }, isArbitraryValue] },
              ],
              "row-start": [{ "row-start": getNumberWithAutoAndArbitrary() }],
              "row-end": [{ "row-end": getNumberWithAutoAndArbitrary() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [
                { "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue] },
              ],
              "auto-rows": [
                { "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue] },
              ],
              gap: [{ gap: [gap] }],
              "gap-x": [{ "gap-x": [gap] }],
              "gap-y": [{ "gap-y": [gap] }],
              "justify-content": [
                {
                  justify: ["normal"].concat([
                    "start",
                    "end",
                    "center",
                    "between",
                    "around",
                    "evenly",
                    "stretch",
                  ]),
                },
              ],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [
                {
                  content: ["normal"].concat(
                    [
                      "start",
                      "end",
                      "center",
                      "between",
                      "around",
                      "evenly",
                      "stretch",
                    ],
                    ["baseline"],
                  ),
                },
              ],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [
                {
                  "place-content": [].concat(
                    [
                      "start",
                      "end",
                      "center",
                      "between",
                      "around",
                      "evenly",
                      "stretch",
                    ],
                    ["baseline"],
                  ),
                },
              ],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [padding] }],
              px: [{ px: [padding] }],
              py: [{ py: [padding] }],
              ps: [{ ps: [padding] }],
              pe: [{ pe: [padding] }],
              pt: [{ pt: [padding] }],
              pr: [{ pr: [padding] }],
              pb: [{ pb: [padding] }],
              pl: [{ pl: [padding] }],
              m: [{ m: [margin] }],
              mx: [{ mx: [margin] }],
              my: [{ my: [margin] }],
              ms: [{ ms: [margin] }],
              me: [{ me: [margin] }],
              mt: [{ mt: [margin] }],
              mr: [{ mr: [margin] }],
              mb: [{ mb: [margin] }],
              ml: [{ ml: [margin] }],
              "space-x": [{ "space-x": [space] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [space] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [
                { w: ["auto", "min", "max", "fit", isArbitraryValue, spacing] },
              ],
              "min-w": [
                { "min-w": ["min", "max", "fit", isArbitraryValue, isLength] },
              ],
              "max-w": [
                {
                  "max-w": [
                    "0",
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [isTshirtSize] },
                    isTshirtSize,
                    isArbitraryValue,
                  ],
                },
              ],
              h: [
                { h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"] },
              ],
              "min-h": [
                { "min-h": ["min", "max", "fit", isArbitraryValue, isLength] },
              ],
              "max-h": [
                { "max-h": [isArbitraryValue, spacing, "min", "max", "fit"] },
              ],
              "font-size": [
                { text: ["base", isTshirtSize, isArbitraryLength] },
              ],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    isArbitraryNumber,
                  ],
                },
              ],
              "font-family": [{ font: [isAny] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    isArbitraryValue,
                  ],
                },
              ],
              "line-clamp": [
                { "line-clamp": ["none", isNumber, isArbitraryNumber] },
              ],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    isArbitraryValue,
                    isLength,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", isArbitraryValue] }],
              "list-style-type": [
                { list: ["none", "disc", "decimal", isArbitraryValue] },
              ],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [colors] }],
              "placeholder-opacity": [{ "placeholder-opacity": [opacity] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [colors] }],
              "text-opacity": [{ "text-opacity": [opacity] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [
                {
                  decoration: [].concat(
                    ["solid", "dashed", "dotted", "double", "none"],
                    ["wavy"],
                  ),
                },
              ],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", isLength] },
              ],
              "underline-offset": [
                { "underline-offset": ["auto", isArbitraryValue, isLength] },
              ],
              "text-decoration-color": [{ decoration: [colors] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              indent: [{ indent: getSpacingWithArbitrary() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    isArbitraryValue,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", isArbitraryValue] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [opacity] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [
                {
                  bg: [].concat(
                    [
                      "bottom",
                      "center",
                      "left",
                      "left-bottom",
                      "left-top",
                      "right",
                      "right-bottom",
                      "right-top",
                      "top",
                    ],
                    [isArbitraryPosition],
                  ),
                },
              ],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [
                { bg: ["auto", "cover", "contain", isArbitrarySize] },
              ],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    isArbitraryUrl,
                  ],
                },
              ],
              "bg-color": [{ bg: [colors] }],
              "gradient-from-pos": [{ from: [gradientColorStopPositions] }],
              "gradient-via-pos": [{ via: [gradientColorStopPositions] }],
              "gradient-to-pos": [{ to: [gradientColorStopPositions] }],
              "gradient-from": [{ from: [gradientColorStops] }],
              "gradient-via": [{ via: [gradientColorStops] }],
              "gradient-to": [{ to: [gradientColorStops] }],
              rounded: [{ rounded: [borderRadius] }],
              "rounded-s": [{ "rounded-s": [borderRadius] }],
              "rounded-e": [{ "rounded-e": [borderRadius] }],
              "rounded-t": [{ "rounded-t": [borderRadius] }],
              "rounded-r": [{ "rounded-r": [borderRadius] }],
              "rounded-b": [{ "rounded-b": [borderRadius] }],
              "rounded-l": [{ "rounded-l": [borderRadius] }],
              "rounded-ss": [{ "rounded-ss": [borderRadius] }],
              "rounded-se": [{ "rounded-se": [borderRadius] }],
              "rounded-ee": [{ "rounded-ee": [borderRadius] }],
              "rounded-es": [{ "rounded-es": [borderRadius] }],
              "rounded-tl": [{ "rounded-tl": [borderRadius] }],
              "rounded-tr": [{ "rounded-tr": [borderRadius] }],
              "rounded-br": [{ "rounded-br": [borderRadius] }],
              "rounded-bl": [{ "rounded-bl": [borderRadius] }],
              "border-w": [{ border: [borderWidth] }],
              "border-w-x": [{ "border-x": [borderWidth] }],
              "border-w-y": [{ "border-y": [borderWidth] }],
              "border-w-s": [{ "border-s": [borderWidth] }],
              "border-w-e": [{ "border-e": [borderWidth] }],
              "border-w-t": [{ "border-t": [borderWidth] }],
              "border-w-r": [{ "border-r": [borderWidth] }],
              "border-w-b": [{ "border-b": [borderWidth] }],
              "border-w-l": [{ "border-l": [borderWidth] }],
              "border-opacity": [{ "border-opacity": [opacity] }],
              "border-style": [
                {
                  border: [].concat(
                    ["solid", "dashed", "dotted", "double", "none"],
                    ["hidden"],
                  ),
                },
              ],
              "divide-x": [{ "divide-x": [borderWidth] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [borderWidth] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [opacity] }],
              "divide-style": [
                { divide: ["solid", "dashed", "dotted", "double", "none"] },
              ],
              "border-color": [{ border: [borderColor] }],
              "border-color-x": [{ "border-x": [borderColor] }],
              "border-color-y": [{ "border-y": [borderColor] }],
              "border-color-t": [{ "border-t": [borderColor] }],
              "border-color-r": [{ "border-r": [borderColor] }],
              "border-color-b": [{ "border-b": [borderColor] }],
              "border-color-l": [{ "border-l": [borderColor] }],
              "divide-color": [{ divide: [borderColor] }],
              "outline-style": [
                {
                  outline: [""].concat([
                    "solid",
                    "dashed",
                    "dotted",
                    "double",
                    "none",
                  ]),
                },
              ],
              "outline-offset": [
                { "outline-offset": [isArbitraryValue, isLength] },
              ],
              "outline-w": [{ outline: [isLength] }],
              "outline-color": [{ outline: [colors] }],
              "ring-w": [{ ring: getLengthWithEmpty() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [colors] }],
              "ring-opacity": [{ "ring-opacity": [opacity] }],
              "ring-offset-w": [{ "ring-offset": [isLength] }],
              "ring-offset-color": [{ "ring-offset": [colors] }],
              shadow: [
                {
                  shadow: [
                    "",
                    "inner",
                    "none",
                    isTshirtSize,
                    isArbitraryShadow,
                  ],
                },
              ],
              "shadow-color": [{ shadow: [isAny] }],
              opacity: [{ opacity: [opacity] }],
              "mix-blend": [
                {
                  "mix-blend": [
                    "normal",
                    "multiply",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "hue",
                    "saturation",
                    "color",
                    "luminosity",
                    "plus-lighter",
                  ],
                },
              ],
              "bg-blend": [
                {
                  "bg-blend": [
                    "normal",
                    "multiply",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "hue",
                    "saturation",
                    "color",
                    "luminosity",
                    "plus-lighter",
                  ],
                },
              ],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [blur] }],
              brightness: [{ brightness: [brightness] }],
              contrast: [{ contrast: [contrast] }],
              "drop-shadow": [
                { "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue] },
              ],
              grayscale: [{ grayscale: [grayscale] }],
              "hue-rotate": [{ "hue-rotate": [hueRotate] }],
              invert: [{ invert: [invert] }],
              saturate: [{ saturate: [saturate] }],
              sepia: [{ sepia: [sepia] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [blur] }],
              "backdrop-brightness": [{ "backdrop-brightness": [brightness] }],
              "backdrop-contrast": [{ "backdrop-contrast": [contrast] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [grayscale] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [hueRotate] }],
              "backdrop-invert": [{ "backdrop-invert": [invert] }],
              "backdrop-opacity": [{ "backdrop-opacity": [opacity] }],
              "backdrop-saturate": [{ "backdrop-saturate": [saturate] }],
              "backdrop-sepia": [{ "backdrop-sepia": [sepia] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [borderSpacing] }],
              "border-spacing-x": [{ "border-spacing-x": [borderSpacing] }],
              "border-spacing-y": [{ "border-spacing-y": [borderSpacing] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    isArbitraryValue,
                  ],
                },
              ],
              duration: [{ duration: getNumberAndArbitrary() }],
              ease: [
                { ease: ["linear", "in", "out", "in-out", isArbitraryValue] },
              ],
              delay: [{ delay: getNumberAndArbitrary() }],
              animate: [
                {
                  animate: [
                    "none",
                    "spin",
                    "ping",
                    "pulse",
                    "bounce",
                    isArbitraryValue,
                  ],
                },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [scale] }],
              "scale-x": [{ "scale-x": [scale] }],
              "scale-y": [{ "scale-y": [scale] }],
              rotate: [{ rotate: [isInteger, isArbitraryValue] }],
              "translate-x": [{ "translate-x": [translate] }],
              "translate-y": [{ "translate-y": [translate] }],
              "skew-x": [{ "skew-x": [skew] }],
              "skew-y": [{ "skew-y": [skew] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    isArbitraryValue,
                  ],
                },
              ],
              accent: [{ accent: ["auto", colors] }],
              appearance: ["appearance-none"],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    isArbitraryValue,
                  ],
                },
              ],
              "caret-color": [{ caret: [colors] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": getSpacingWithArbitrary() }],
              "scroll-mx": [{ "scroll-mx": getSpacingWithArbitrary() }],
              "scroll-my": [{ "scroll-my": getSpacingWithArbitrary() }],
              "scroll-ms": [{ "scroll-ms": getSpacingWithArbitrary() }],
              "scroll-me": [{ "scroll-me": getSpacingWithArbitrary() }],
              "scroll-mt": [{ "scroll-mt": getSpacingWithArbitrary() }],
              "scroll-mr": [{ "scroll-mr": getSpacingWithArbitrary() }],
              "scroll-mb": [{ "scroll-mb": getSpacingWithArbitrary() }],
              "scroll-ml": [{ "scroll-ml": getSpacingWithArbitrary() }],
              "scroll-p": [{ "scroll-p": getSpacingWithArbitrary() }],
              "scroll-px": [{ "scroll-px": getSpacingWithArbitrary() }],
              "scroll-py": [{ "scroll-py": getSpacingWithArbitrary() }],
              "scroll-ps": [{ "scroll-ps": getSpacingWithArbitrary() }],
              "scroll-pe": [{ "scroll-pe": getSpacingWithArbitrary() }],
              "scroll-pt": [{ "scroll-pt": getSpacingWithArbitrary() }],
              "scroll-pr": [{ "scroll-pr": getSpacingWithArbitrary() }],
              "scroll-pb": [{ "scroll-pb": getSpacingWithArbitrary() }],
              "scroll-pl": [{ "scroll-pl": getSpacingWithArbitrary() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [
                {
                  touch: [
                    "auto",
                    "none",
                    "pinch-zoom",
                    "manipulation",
                    { pan: ["x", "left", "right", "y", "up", "down"] },
                  ],
                },
              ],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": [
                    "auto",
                    "scroll",
                    "contents",
                    "transform",
                    isArbitraryValue,
                  ],
                },
              ],
              fill: [{ fill: [colors, "none"] }],
              "stroke-w": [{ stroke: [isLength, isArbitraryNumber] }],
              stroke: [{ stroke: [colors, "none"] }],
              sr: ["sr-only", "not-sr-only"],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        }
        var merge_configs_hasOwnProperty = Object.prototype.hasOwnProperty,
          overrideTypes = new Set(["string", "number", "boolean"]);
        function mergePropertyRecursively(baseObject, mergeKey, mergeValue) {
          if (
            merge_configs_hasOwnProperty.call(baseObject, mergeKey) &&
            !overrideTypes.has(typeof mergeValue) &&
            null !== mergeValue
          ) {
            if (
              Array.isArray(mergeValue) &&
              Array.isArray(baseObject[mergeKey])
            )
              baseObject[mergeKey] = baseObject[mergeKey].concat(mergeValue);
            else if (
              "object" == typeof mergeValue &&
              "object" == typeof baseObject[mergeKey]
            ) {
              if (null === baseObject[mergeKey])
                return void (baseObject[mergeKey] = mergeValue);
              for (var nextKey in mergeValue)
                mergePropertyRecursively(
                  baseObject[mergeKey],
                  nextKey,
                  mergeValue[nextKey],
                );
            }
          } else baseObject[mergeKey] = mergeValue;
        }
        function extendTailwindMerge(configExtension) {
          for (
            var _len = arguments.length,
              createConfig = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          )
            createConfig[_key - 1] = arguments[_key];
          return "function" == typeof configExtension
            ? createTailwindMerge.apply(
                void 0,
                [getDefaultConfig, configExtension].concat(createConfig),
              )
            : createTailwindMerge.apply(
                void 0,
                [
                  function () {
                    return (function mergeConfigs(baseConfig, configExtension) {
                      for (var key in configExtension)
                        mergePropertyRecursively(
                          baseConfig,
                          key,
                          configExtension[key],
                        );
                      return baseConfig;
                    })(getDefaultConfig(), configExtension);
                  },
                ].concat(createConfig),
              );
        }
      },
  },
]);
