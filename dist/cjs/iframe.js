"use strict"
var __assign =
	(this && this.__assign) ||
	function() {
		__assign =
			Object.assign ||
			function(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i]
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
				}
				return t
			}
		return __assign.apply(this, arguments)
	}
var __importStar =
	(this && this.__importStar) ||
	function(mod) {
		if (mod && mod.__esModule) return mod
		var result = {}
		if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
		result["default"] = mod
		return result
	}
var __importDefault =
	(this && this.__importDefault) ||
	function(mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
exports.__esModule = true
var react_1 = __importStar(require("react"))
// @ts-ignore
var object_assign_1 = __importDefault(require("object-assign"))
var Iframe = function(_a) {
	var url = _a.url,
		allowFullScreen = _a.allowFullScreen,
		position = _a.position,
		display = _a.display,
		height = _a.height,
		width = _a.width,
		overflow = _a.overflow,
		styles = _a.styles,
		onLoad = _a.onLoad,
		onMouseOver = _a.onMouseOver,
		onMouseOut = _a.onMouseOut,
		scrolling = _a.scrolling,
		id = _a.id,
		frameBorder = _a.frameBorder,
		ariaHidden = _a.ariaHidden,
		sandbox = _a.sandbox,
		allow = _a.allow,
		className = _a.className,
		title = _a.title,
		ariaLabel = _a.ariaLabel,
		ariaLabelledby = _a.ariaLabelledby,
		name = _a.name,
		target = _a.target
	var iFrameRef = react_1.createRef()
	var defaultProps = object_assign_1["default"]({
		ref: iFrameRef,
		src: url,
		target: target || "_parent",
		allowFullScreen: allowFullScreen || false,
		style: {
			position: position || "absolute",
			display: display || "block",
			height: height || "100%",
			width: width || "100%",
			overflow: overflow || "hidden"
		},
		scrolling: scrolling || "no",
		frameBorder: frameBorder || 0,
		height: height || "100%",
		sandbox: sandbox || null,
		name: name || null,
		className: className || null,
		title: title || null,
		allow: allow || null,
		id: id || null,
		"aria-labelledby": ariaLabelledby || null,
		"aria-hidden": ariaHidden || null,
		width: width || "100%",
		onLoad: onLoad || null,
		onMouseOver: onMouseOver || null,
		onMouseOut: onMouseOut || null
	})
	var props = Object.create(null)
	for (var _i = 0, _b = Object.keys(defaultProps); _i < _b.length; _i++) {
		var prop = _b[_i]
		if (defaultProps[prop] != null) {
			props[prop] = defaultProps[prop]
		}
	}
	return react_1["default"].createElement("iframe", __assign({}, props))
}
exports["default"] = Iframe
//# sourceMappingURL=iframe.js.map