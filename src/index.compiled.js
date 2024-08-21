(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AddThoughtForm = AddThoughtForm;
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _utilities = require("./utilities");
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    function AddThoughtForm(props) {
      var _useState = (0, _react.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          text = _useState2[0],
          setText = _useState2[1];
    
      var handleTextChange = function handleTextChange(_ref) {
        var target = _ref.target;
        var value = target.value;
        setText(value);
      };
    
      var handleSubmit = function handleSubmit(event) {
        event.preventDefault();
    
        if (text.length) {
          setTimeout(function () {
            var thought = {
              id: (0, _utilities.generateId)(),
              text: text,
              expiresAt: (0, _utilities.getNewExpirationTime)()
            };
            props.addThought(thought);
            setText('');
          }, 500);
        }
      };
    
      return /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: handleSubmit,
        className: "AddThoughtForm"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        role: "input",
        "aria-label": "What's on your mind?",
        placeholder: "What's on your mind?",
        value: text,
        onChange: handleTextChange
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "submit",
        role: "submit",
        value: "Add"
      }));
    }
    
    },{"./utilities":5,"react":undefined}],2:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.App = App;
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _AddThoughtForm = require("./AddThoughtForm");
    
    var _Thought = require("./Thought");
    
    var _utilities = require("./utilities");
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    function App() {
      var _useState = (0, _react.useState)([{
        id: (0, _utilities.generateId)(),
        text: 'This is a place for your passing thoughts.',
        expiresAt: (0, _utilities.getNewExpirationTime)()
      }, {
        id: (0, _utilities.generateId)(),
        text: "They'll be removed after 15 seconds.",
        expiresAt: (0, _utilities.getNewExpirationTime)()
      }]),
          _useState2 = _slicedToArray(_useState, 2),
          thoughts = _useState2[0],
          setThoughts = _useState2[1];
    
      var addThought = function addThought(thought) {
        setThoughts(function (thoughts) {
          return [thought].concat(_toConsumableArray(thoughts));
        });
      };
    
      var removeThought = function removeThought(thoughtIdToRemove) {
        setThoughts(function (thoughts) {
          return thoughts.filter(function (thought) {
            return thought.id !== thoughtIdToRemove;
          });
        });
      };
    
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "App"
      }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Passing Thoughts")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_AddThoughtForm.AddThoughtForm, {
        addThought: addThought
      }), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "thoughts"
      }, thoughts.map(function (thought) {
        return /*#__PURE__*/_react["default"].createElement(_Thought.Thought, {
          removeThought: removeThought,
          key: thought.id,
          thought: thought
        });
      }))));
    }
    
    },{"./AddThoughtForm":1,"./Thought":3,"./utilities":5,"react":undefined}],3:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Thought = Thought;
    
    var _react = _interopRequireWildcard(require("react"));
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function Thought(props) {
      var thought = props.thought,
          removeThought = props.removeThought;
    
      var handleRemoveClick = function handleRemoveClick() {
        removeThought(thought.id);
      };
    
      (0, _react.useEffect)(function () {
        var timesUp = setTimeout(function () {
          removeThought(thought.id);
        }, thought.expiresAt - Date.now());
        return function () {
          clearTimeout(timesUp);
        };
      }, [thought]);
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: "Thought"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": "Remove thought",
        className: "remove-button",
        onClick: handleRemoveClick
      }, "\xD7"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text"
      }, thought.text));
    }
    
    },{"react":undefined}],4:[function(require,module,exports){
    "use strict";
    
    var _App = require("./App.js");
    
    var _react = _interopRequireDefault(require("react"));
    
    var _reactDom = _interopRequireDefault(require("react-dom"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    _reactDom["default"].createRoot(document.querySelector("#app")).render( /*#__PURE__*/_react["default"].createElement(_App.App, null));
    
    },{"./App.js":2,"react":undefined,"react-dom":undefined}],5:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generateId = generateId;
    exports.getNewExpirationTime = getNewExpirationTime;
    
    function getNewExpirationTime() {
      return Date.now() + 15 * 1000;
    }
    
    var nextId = 0;
    
    function generateId() {
      var result = nextId;
      nextId += 1;
      return result;
    }
    
    },{}]},{},[4]);
    