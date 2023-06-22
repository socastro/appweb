"use strict";

var _App = _interopRequireDefault(require("./App"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _react2 = require("@testing-library/react");
var _client = require("react-dom/client");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('renders learn react link', () => {
  (0, _react2.render)(<_App.default />);
  const linkElement = _react2.screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders without crashing', () => {
  const div = document.createElement('div');
  //  const root = ReactDOM.createRoot(document.getElementById('root'));

  //createRoot(div).
  (0, _react2.render)(<_App.default />, div);
});