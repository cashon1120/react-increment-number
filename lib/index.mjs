import we, { useState as ur, useRef as sr, useEffect as fr } from "react";
var Q = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function cr() {
  if (Se)
    return N;
  Se = 1;
  var v = we, _ = Symbol.for("react.element"), j = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, w = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(R, d, C) {
    var s, f = {}, p = null, b = null;
    C !== void 0 && (p = "" + C), d.key !== void 0 && (p = "" + d.key), d.ref !== void 0 && (b = d.ref);
    for (s in d)
      E.call(d, s) && !P.hasOwnProperty(s) && (f[s] = d[s]);
    if (R && R.defaultProps)
      for (s in d = R.defaultProps, d)
        f[s] === void 0 && (f[s] = d[s]);
    return { $$typeof: _, type: R, key: p, ref: b, props: f, _owner: w.current };
  }
  return N.Fragment = j, N.jsx = y, N.jsxs = y, N;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function lr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var v = we, _ = Symbol.for("react.element"), j = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), R = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), D = Symbol.iterator, q = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[q];
      return typeof r == "function" ? r : null;
    }
    var T = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, je = !1, ke = !1, Fe = !1, De = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === P || De || e === w || e === C || e === s || Fe || e === b || xe || je || ke || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === y || e.$$typeof === R || e.$$typeof === d || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case j:
          return "Portal";
        case P:
          return "Profiler";
        case w:
          return "StrictMode";
        case C:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return re(r) + ".Consumer";
          case y:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return Ie(e, e.render, "ForwardRef");
          case f:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case p: {
            var i = e, u = i._payload, o = i._init;
            try {
              return S(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, A = 0, te, ne, ae, oe, ie, ue, se;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ne() {
      {
        if (A === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function $e() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: te
            }),
            info: x({}, e, {
              value: ne
            }),
            warn: x({}, e, {
              value: ae
            }),
            error: x({}, e, {
              value: oe
            }),
            group: x({}, e, {
              value: ie
            }),
            groupCollapsed: x({}, e, {
              value: ue
            }),
            groupEnd: x({}, e, {
              value: se
            })
          });
        }
        A < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = T.ReactCurrentDispatcher, J;
    function W(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, Y;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Me();
    }
    function ce(e, r) {
      if (!e || G)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = B.current, B.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, l = h.length - 1; c >= 1 && l >= 0 && a[c] !== h[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (a[c] !== h[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || a[c] !== h[l]) {
                    var g = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, g), g;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        G = !1, B.current = u, $e(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", Te = F ? W(F) : "";
      return typeof e == "function" && Y.set(e, Te), Te;
    }
    function We(e, r, t) {
      return ce(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ye(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case C:
          return W("Suspense");
        case s:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return We(e.render);
          case f:
            return L(e.type, r, t);
          case p: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, le = {}, de = T.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Le(e, r, t, n, i) {
      {
        var u = Function.call.bind(V);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (U(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, U(i), m("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ve = Array.isArray;
    function z(e) {
      return Ve(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), ve(e);
    }
    var I = T.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, he, K;
    K = {};
    function Je(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = S(I.current.type);
        K[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(I.current.type), e.ref), K[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          me || (me = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, u, o) {
      var a = {
        $$typeof: _,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, i) {
      {
        var u, o = {}, a = null, h = null;
        t !== void 0 && (pe(t), a = "" + t), Ge(r) && (pe(r.key), a = "" + r.key), Je(r) && (h = r.ref, ze(r, i));
        for (u in r)
          V.call(r, u) && !Be.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || h) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, l), h && He(o, l);
        }
        return Xe(e, a, h, i, n, I.current, o);
      }
    }
    var H = T.ReactCurrentOwner, be = T.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function ge() {
      {
        if (H.current) {
          var e = S(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function er(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + S(e._owner.type) + "."), k(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && ye(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = M(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && ye(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === f))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Le(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = S(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Re(e, r, t, n, i, u) {
      {
        var o = Ae(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = Qe(i);
          h ? a += h : a += ge();
          var c;
          e === null ? c = "null" : z(e) ? c = "array" : e !== void 0 && e.$$typeof === _ ? (c = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var l = Ze(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (z(g)) {
                for (var F = 0; F < g.length; F++)
                  _e(g[F], e);
                Object.freeze && Object.freeze(g);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(g, e);
        }
        return e === E ? tr(l) : rr(l), l;
      }
    }
    function nr(e, r, t) {
      return Re(e, r, t, !0);
    }
    function ar(e, r, t) {
      return Re(e, r, t, !1);
    }
    var or = ar, ir = nr;
    $.Fragment = E, $.jsx = or, $.jsxs = ir;
  }()), $;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = cr() : v.exports = lr();
})(Q);
const dr = Q.exports.Fragment, vr = Q.exports.jsx, Ce = (v, _) => {
  if (typeof v == "number")
    return v;
  if (isNaN(Number(v)))
    throw new Error(`the value of props [${_}] must be a number, or typeof Number(to) === 'number'`);
  return Number(v);
}, mr = (v) => {
  const {
    to: _,
    callback: j
  } = v, [E, w] = ur(0), P = sr(0);
  let y = null;
  const R = (s) => {
    const f = Ce(v.speed, "speed"), p = f ? 12 - Math.max(1, Math.min(10, f)) : 5;
    return Math.floor((s - E) / (p * 10));
  }, d = (s, f, p) => {
    let b = Number((P.current + f + Number(Math.random().toFixed(p))).toFixed(p));
    if (P.current = b, f !== 0) {
      if (w(f > 0 ? Math.min(b, s) : Math.max(b, s)), f > 0 && b >= s || f < 0 && b <= s) {
        w(s), j && j(E), cancelAnimationFrame(y);
        return;
      }
      y = requestAnimationFrame(() => d(s, f, p));
    }
  }, C = () => {
    var M, T;
    cancelAnimationFrame(y);
    const s = Ce(v.to, "to"), f = R(s), p = ((M = s.toString().split(".")[1]) == null ? void 0 : M.length) || 0, b = ((T = E.toString().split(".")[1]) == null ? void 0 : T.length) || 0, D = Math.min(2, Math.max(p, b)), q = Number(s.toFixed(D));
    y = requestAnimationFrame(() => d(q, f, D));
  };
  return fr(() => {
    C();
  }, [_]), /* @__PURE__ */ vr(dr, {
    children: E
  });
};
export {
  mr as default
};
