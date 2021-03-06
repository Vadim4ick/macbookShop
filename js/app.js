(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      1296: (e, t, r) => {
        var i = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          u = l || c || Function("return this")(),
          d = Object.prototype.toString,
          p = Math.max,
          h = Math.min,
          f = function () {
            return u.Date.now();
          };
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == d.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var r = s.test(e);
          return r || o.test(e)
            ? a(e.slice(2), r ? 2 : 8)
            : n.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            c = 0,
            u = !1,
            d = !1,
            g = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var r = i,
              s = n;
            return (i = n = void 0), (c = t), (o = e.apply(s, r));
          }
          function y(e) {
            return (c = e), (a = setTimeout(w, t)), u ? b(e) : o;
          }
          function x(e) {
            var r = e - l;
            return void 0 === l || r >= t || r < 0 || (d && e - c >= s);
          }
          function w() {
            var e = f();
            if (x(e)) return S(e);
            a = setTimeout(
              w,
              (function (e) {
                var r = t - (e - l);
                return d ? h(r, s - (e - c)) : r;
              })(e)
            );
          }
          function S(e) {
            return (a = void 0), g && i ? b(e) : ((i = n = void 0), o);
          }
          function E() {
            var e = f(),
              r = x(e);
            if (((i = arguments), (n = this), (l = e), r)) {
              if (void 0 === a) return y(l);
              if (d) return (a = setTimeout(w, t)), b(l);
            }
            return void 0 === a && (a = setTimeout(w, t)), o;
          }
          return (
            (t = m(t) || 0),
            v(r) &&
              ((u = !!r.leading),
              (s = (d = "maxWait" in r) ? p(m(r.maxWait) || 0, t) : s),
              (g = "trailing" in r ? !!r.trailing : g)),
            (E.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (i = l = n = a = void 0);
            }),
            (E.flush = function () {
              return void 0 === a ? o : S(f());
            }),
            E
          );
        };
      },
      773: (e, t, r) => {
        var i = "__lodash_hash_undefined__",
          n = "[object Function]",
          s = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var u,
          d = Array.prototype,
          p = Function.prototype,
          h = Object.prototype,
          f = c["__core-js_shared__"],
          v = (u = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + u
            : "",
          m = p.toString,
          g = h.hasOwnProperty,
          b = h.toString,
          y = RegExp(
            "^" +
              m
                .call(g)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = d.splice,
          w = k(c, "Map"),
          S = k(Object, "create");
        function E(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function T(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function O(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function C(e, t) {
          for (var r, i, n = e.length; n--; )
            if ((r = e[n][0]) === (i = t) || (r != r && i != i)) return n;
          return -1;
        }
        function L(e) {
          if (!M(e) || ((t = e), v && v in t)) return !1;
          var t,
            r =
              (function (e) {
                var t = M(e) ? b.call(e) : "";
                return t == n || t == s;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? y
                : o;
          return r.test(
            (function (e) {
              if (null != e) {
                try {
                  return m.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function A(e, t) {
          var r,
            i,
            n = e.__data__;
          return (
            "string" == (i = typeof (r = t)) ||
            "number" == i ||
            "symbol" == i ||
            "boolean" == i
              ? "__proto__" !== r
              : null === r
          )
            ? n["string" == typeof t ? "string" : "hash"]
            : n.map;
        }
        function k(e, t) {
          var r = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return L(r) ? r : void 0;
        }
        function _(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var r = function () {
            var i = arguments,
              n = t ? t.apply(this, i) : i[0],
              s = r.cache;
            if (s.has(n)) return s.get(n);
            var o = e.apply(this, i);
            return (r.cache = s.set(n, o)), o;
          };
          return (r.cache = new (_.Cache || O)()), r;
        }
        function M(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (E.prototype.clear = function () {
          this.__data__ = S ? S(null) : {};
        }),
          (E.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (E.prototype.get = function (e) {
            var t = this.__data__;
            if (S) {
              var r = t[e];
              return r === i ? void 0 : r;
            }
            return g.call(t, e) ? t[e] : void 0;
          }),
          (E.prototype.has = function (e) {
            var t = this.__data__;
            return S ? void 0 !== t[e] : g.call(t, e);
          }),
          (E.prototype.set = function (e, t) {
            return (this.__data__[e] = S && void 0 === t ? i : t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = [];
          }),
          (T.prototype.delete = function (e) {
            var t = this.__data__,
              r = C(t, e);
            return (
              !(r < 0) && (r == t.length - 1 ? t.pop() : x.call(t, r, 1), !0)
            );
          }),
          (T.prototype.get = function (e) {
            var t = this.__data__,
              r = C(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (T.prototype.has = function (e) {
            return C(this.__data__, e) > -1;
          }),
          (T.prototype.set = function (e, t) {
            var r = this.__data__,
              i = C(r, e);
            return i < 0 ? r.push([e, t]) : (r[i][1] = t), this;
          }),
          (O.prototype.clear = function () {
            this.__data__ = {
              hash: new E(),
              map: new (w || T)(),
              string: new E(),
            };
          }),
          (O.prototype.delete = function (e) {
            return A(this, e).delete(e);
          }),
          (O.prototype.get = function (e) {
            return A(this, e).get(e);
          }),
          (O.prototype.has = function (e) {
            return A(this, e).has(e);
          }),
          (O.prototype.set = function (e, t) {
            return A(this, e).set(e, t), this;
          }),
          (_.Cache = O),
          (e.exports = _);
      },
      3096: (e, t, r) => {
        var i = "Expected a function",
          n = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          u = "object" == typeof self && self && self.Object === Object && self,
          d = c || u || Function("return this")(),
          p = Object.prototype.toString,
          h = Math.max,
          f = Math.min,
          v = function () {
            return d.Date.now();
          };
        function m(e, t, r) {
          var n,
            s,
            o,
            a,
            l,
            c,
            u = 0,
            d = !1,
            p = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(i);
          function y(t) {
            var r = n,
              i = s;
            return (n = s = void 0), (u = t), (a = e.apply(i, r));
          }
          function x(e) {
            return (u = e), (l = setTimeout(S, t)), d ? y(e) : a;
          }
          function w(e) {
            var r = e - c;
            return void 0 === c || r >= t || r < 0 || (p && e - u >= o);
          }
          function S() {
            var e = v();
            if (w(e)) return E(e);
            l = setTimeout(
              S,
              (function (e) {
                var r = t - (e - c);
                return p ? f(r, o - (e - u)) : r;
              })(e)
            );
          }
          function E(e) {
            return (l = void 0), m && n ? y(e) : ((n = s = void 0), a);
          }
          function T() {
            var e = v(),
              r = w(e);
            if (((n = arguments), (s = this), (c = e), r)) {
              if (void 0 === l) return x(c);
              if (p) return (l = setTimeout(S, t)), y(c);
            }
            return void 0 === l && (l = setTimeout(S, t)), a;
          }
          return (
            (t = b(t) || 0),
            g(r) &&
              ((d = !!r.leading),
              (o = (p = "maxWait" in r) ? h(b(r.maxWait) || 0, t) : o),
              (m = "trailing" in r ? !!r.trailing : m)),
            (T.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (u = 0),
                (n = c = s = l = void 0);
            }),
            (T.flush = function () {
              return void 0 === l ? a : E(v());
            }),
            T
          );
        }
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(n, "");
          var r = o.test(e);
          return r || a.test(e)
            ? l(e.slice(2), r ? 2 : 8)
            : s.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, r) {
          var n = !0,
            s = !0;
          if ("function" != typeof e) throw new TypeError(i);
          return (
            g(r) &&
              ((n = "leading" in r ? !!r.leading : n),
              (s = "trailing" in r ? !!r.trailing : s)),
            m(e, t, { leading: n, maxWait: t, trailing: s })
          );
        };
      },
      4211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return r(e) && "function" == typeof e.from;
          }
          function r(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function s(e) {
            e.preventDefault();
          }
          function o(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function a(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var r = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              s = g(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (s.x = 0),
              t ? r.top + s.y - n.clientTop : r.left + s.x - n.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function u(e, t, r) {
            r > 0 &&
              (f(e, t),
              setTimeout(function () {
                v(e, t);
              }, r));
          }
          function d(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function v(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function m(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function g(e) {
            var t = void 0 !== window.pageXOffset,
              r = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : r
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : r
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function y() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function x() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function w(e, t) {
            return 100 / (t - e);
          }
          function S(e, t, r) {
            return (100 * t) / (e[r + 1] - e[r]);
          }
          function E(e, t) {
            return S(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function T(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function O(e, t) {
            for (var r = 1; e >= t[r]; ) r += 1;
            return r;
          }
          function C(e, t, r) {
            if (r >= e.slice(-1)[0]) return 100;
            var i = O(r, e),
              n = e[i - 1],
              s = e[i],
              o = t[i - 1],
              a = t[i];
            return o + E([n, s], r) / w(o, a);
          }
          function L(e, t, r) {
            if (r >= 100) return e.slice(-1)[0];
            var i = O(r, t),
              n = e[i - 1],
              s = e[i],
              o = t[i - 1];
            return T([n, s], (r - o) * w(o, t[i]));
          }
          function A(e, t, r, i) {
            if (100 === i) return i;
            var n = O(i, e),
              s = e[n - 1],
              o = e[n];
            return r
              ? i - s > (o - s) / 2
                ? o
                : s
              : t[n - 1]
              ? e[n - 1] + a(i - e[n - 1], t[n - 1])
              : i;
          }
          var k, _;
          (e.PipsMode = void 0),
            ((_ = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (_.Steps = "steps"),
            (_.Positions = "positions"),
            (_.Count = "count"),
            (_.Values = "values"),
            (e.PipsType = void 0),
            ((k = e.PipsType || (e.PipsType = {}))[(k.None = -1)] = "None"),
            (k[(k.NoValue = 0)] = "NoValue"),
            (k[(k.LargeValue = 1)] = "LargeValue"),
            (k[(k.SmallValue = 2)] = "SmallValue");
          var M = (function () {
              function e(e, t, r) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [r || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([p(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], r = 0; r < this.xNumSteps.length - 1; r++)
                    t[r] = S(this.xVal, e, r);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, r) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  r || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var s = 1,
                    o = t[n],
                    a = 0,
                    l = 0,
                    c = 0,
                    u = 0;
                  for (
                    i = r
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    o > 0;

                  )
                    (a = this.xPct[n + 1 + u] - this.xPct[n + u]),
                      t[n + u] * s + 100 - 100 * i > 100
                        ? ((l = a * i), (s = (o - 100 * i) / t[n + u]), (i = 1))
                        : ((l = ((t[n + u] * a) / 100) * s), (s = 0)),
                      r
                        ? ((c -= l), this.xPct.length + u >= 1 && u--)
                        : ((c += l), this.xPct.length - u >= 1 && u++),
                      (o = t[n + u] * s);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = C(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return L(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = A(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, r) {
                  var i = O(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / r
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = O(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var r;
                  if (
                    !c(
                      (r = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(r), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  r
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        S([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        w(this.xPct[e], this.xPct[e + 1]);
                      var r =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(r.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            P = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            N = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            z = { tooltips: ".__tooltips", aria: ".__aria" };
          function I(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function D(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function $(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function j(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function R(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new M(t, e.snap || !1, e.singleStep);
          }
          function W(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function V(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function B(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function q(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function H(e, t) {
            var r,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (r = 1; r < e.handles; r++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function F(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function G(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function U(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function X(e, t) {
            var r;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  r = 0;
                r < e.spectrum.xNumSteps.length - 1;
                r++
              )
                if (e.padding[0][r] < 0 || e.padding[1][r] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Y(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var r = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              s = t.indexOf("snap") >= 0,
              o = t.indexOf("hover") >= 0,
              a = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0,
              c = t.indexOf("smooth-steps") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              G(e, e.start[1] - e.start[0]);
            }
            if (a && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: r || s,
              drag: i,
              dragAll: l,
              smoothSteps: c,
              fixed: n,
              snap: s,
              hover: o,
              unconstrained: a,
            };
          }
          function J(e, t) {
            if (!1 !== t)
              if (!0 === t || r(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !r(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Z(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function Q(e, t) {
            if (!r(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, r) {
            if (!t(r))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = r;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function re(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (r) {
                  e.cssClasses[r] = e.cssPrefix + t[r];
                }))
              : (e.cssClasses = t);
          }
          function se(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: P,
                format: P,
              },
              r = {
                step: { r: !1, t: I },
                keyboardPageMultiplier: { r: !1, t: D },
                keyboardMultiplier: { r: !1, t: $ },
                keyboardDefaultStep: { r: !1, t: j },
                start: { r: !0, t: W },
                connect: { r: !0, t: H },
                direction: { r: !0, t: Y },
                snap: { r: !1, t: V },
                animate: { r: !1, t: B },
                animationDuration: { r: !1, t: q },
                range: { r: !0, t: R },
                orientation: { r: !1, t: F },
                margin: { r: !1, t: G },
                limit: { r: !1, t: U },
                padding: { r: !1, t: X },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: Q },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: J },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: re },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: Z },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: N,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(r).forEach(function (s) {
                if (n(e[s]) || void 0 !== i[s])
                  r[s].t(t, n(e[s]) ? e[s] : i[s]);
                else if (r[s].r)
                  throw new Error("noUiSlider: '" + s + "' is required.");
              }),
              (t.pips = e.pips);
            var s = document.createElement("div"),
              o = void 0 !== s.style.msTransform,
              a = void 0 !== s.style.transform;
            t.transformRule = a
              ? "transform"
              : o
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function oe(t, r, a) {
            var c,
              h,
              w,
              S,
              E,
              T = b(),
              O = x() && y(),
              C = t,
              L = r.spectrum,
              A = [],
              k = [],
              _ = [],
              M = 0,
              P = {},
              N = t.ownerDocument,
              I = r.documentElement || N.documentElement,
              D = N.body,
              $ = "rtl" === N.dir || 1 === r.ort ? 0 : 100;
            function j(e, t) {
              var r = N.createElement("div");
              return t && f(r, t), e.appendChild(r), r;
            }
            function R(e, t) {
              var i = j(e, r.cssClasses.origin),
                n = j(i, r.cssClasses.handle);
              if (
                (j(n, r.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                r.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return he(e, t);
                  })),
                void 0 !== r.handleAttributes)
              ) {
                var s = r.handleAttributes[t];
                Object.keys(s).forEach(function (e) {
                  n.setAttribute(e, s[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  r.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(n, r.cssClasses.handleLower)
                  : t === r.handles - 1 && f(n, r.cssClasses.handleUpper),
                i
              );
            }
            function W(e, t) {
              return !!t && j(e, r.cssClasses.connect);
            }
            function V(e, t) {
              var i = j(t, r.cssClasses.connects);
              (h = []), (w = []).push(W(i, e[0]));
              for (var n = 0; n < r.handles; n++)
                h.push(R(t, n)), (_[n] = n), w.push(W(i, e[n + 1]));
            }
            function B(e) {
              return (
                f(e, r.cssClasses.target),
                0 === r.dir ? f(e, r.cssClasses.ltr) : f(e, r.cssClasses.rtl),
                0 === r.ort
                  ? f(e, r.cssClasses.horizontal)
                  : f(e, r.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? r.cssClasses.textDirectionRtl
                    : r.cssClasses.textDirectionLtr
                ),
                j(e, r.cssClasses.base)
              );
            }
            function q(e, t) {
              return (
                !(!r.tooltips || !r.tooltips[t]) &&
                j(e.firstChild, r.cssClasses.tooltip)
              );
            }
            function H() {
              return C.hasAttribute("disabled");
            }
            function F(e) {
              return h[e].hasAttribute("disabled");
            }
            function G() {
              E &&
                (ge("update" + z.tooltips),
                E.forEach(function (e) {
                  e && i(e);
                }),
                (E = null));
            }
            function U() {
              G(),
                (E = h.map(q)),
                ve("update" + z.tooltips, function (e, t, i) {
                  if (E && r.tooltips && !1 !== E[t]) {
                    var n = e[t];
                    !0 !== r.tooltips[t] && (n = r.tooltips[t].to(i[t])),
                      (E[t].innerHTML = n);
                  }
                });
            }
            function X() {
              ge("update" + z.aria),
                ve("update" + z.aria, function (e, t, i, n, s) {
                  _.forEach(function (e) {
                    var t = h[e],
                      n = ye(k, e, 0, !0, !0, !0),
                      o = ye(k, e, 100, !0, !0, !0),
                      a = s[e],
                      l = String(r.ariaFormat.to(i[e]));
                    (n = L.fromStepping(n).toFixed(1)),
                      (o = L.fromStepping(o).toFixed(1)),
                      (a = L.fromStepping(a).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", o),
                      t.children[0].setAttribute("aria-valuenow", a),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function Y(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return L.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var r = t.values - 1, i = 100 / r, n = []; r--; )
                  n[r] = r * i;
                return n.push(100), K(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return L.fromStepping(L.getStep(L.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return L.fromStepping(t ? L.getStep(e) : e);
              });
            }
            function J(t) {
              function r(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = Y(t),
                n = {},
                s = L.xVal[0],
                a = L.xVal[L.xVal.length - 1],
                l = !1,
                c = !1,
                u = 0;
              return (
                (i = o(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== s && (i.unshift(s), (l = !0)),
                i[i.length - 1] !== a && (i.push(a), (c = !0)),
                i.forEach(function (s, o) {
                  var a,
                    d,
                    p,
                    h,
                    f,
                    v,
                    m,
                    g,
                    b,
                    y,
                    x = s,
                    w = i[o + 1],
                    S = t.mode === e.PipsMode.Steps;
                  for (
                    S && (a = L.xNumSteps[o]),
                      a || (a = w - x),
                      void 0 === w && (w = x),
                      a = Math.max(a, 1e-7),
                      d = x;
                    d <= w;
                    d = r(d, a)
                  ) {
                    for (
                      g = (f = (h = L.toStepping(d)) - u) / (t.density || 1),
                        y = f / (b = Math.round(g)),
                        p = 1;
                      p <= b;
                      p += 1
                    )
                      n[(v = u + p * y).toFixed(5)] = [L.fromStepping(v), 0];
                    (m =
                      i.indexOf(d) > -1
                        ? e.PipsType.LargeValue
                        : S
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !o && l && d !== w && (m = 0),
                      (d === w && c) || (n[h.toFixed(5)] = [d, m]),
                      (u = h);
                  }
                }),
                n
              );
            }
            function Z(t, i, n) {
              var s,
                o,
                a = N.createElement("div"),
                l =
                  (((s = {})[e.PipsType.None] = ""),
                  (s[e.PipsType.NoValue] = r.cssClasses.valueNormal),
                  (s[e.PipsType.LargeValue] = r.cssClasses.valueLarge),
                  (s[e.PipsType.SmallValue] = r.cssClasses.valueSub),
                  s),
                c =
                  (((o = {})[e.PipsType.None] = ""),
                  (o[e.PipsType.NoValue] = r.cssClasses.markerNormal),
                  (o[e.PipsType.LargeValue] = r.cssClasses.markerLarge),
                  (o[e.PipsType.SmallValue] = r.cssClasses.markerSub),
                  o),
                u = [r.cssClasses.valueHorizontal, r.cssClasses.valueVertical],
                d = [
                  r.cssClasses.markerHorizontal,
                  r.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var i = t === r.cssClasses.value,
                  n = i ? l : c;
                return t + " " + (i ? u : d)[r.ort] + " " + n[e];
              }
              function h(t, s, o) {
                if ((o = i ? i(s, o) : o) !== e.PipsType.None) {
                  var l = j(a, !1);
                  (l.className = p(o, r.cssClasses.marker)),
                    (l.style[r.style] = t + "%"),
                    o > e.PipsType.NoValue &&
                      (((l = j(a, !1)).className = p(o, r.cssClasses.value)),
                      l.setAttribute("data-value", String(s)),
                      (l.style[r.style] = t + "%"),
                      (l.innerHTML = String(n.to(s))));
                }
              }
              return (
                f(a, r.cssClasses.pips),
                f(
                  a,
                  0 === r.ort
                    ? r.cssClasses.pipsHorizontal
                    : r.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                a
              );
            }
            function Q() {
              S && (i(S), (S = null));
            }
            function ee(e) {
              Q();
              var t = J(e),
                r = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (S = C.appendChild(Z(t, r, i)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][r.ort];
              return 0 === r.ort ? e.width || c[t] : e.height || c[t];
            }
            function re(e, t, i, n) {
              var s = function (s) {
                  var o = ie(s, n.pageOffset, n.target || t);
                  return (
                    !!o &&
                    !(H() && !n.doNotReject) &&
                    !(m(C, r.cssClasses.tap) && !n.doNotReject) &&
                    !(e === T.start && void 0 !== o.buttons && o.buttons > 1) &&
                    (!n.hover || !o.buttons) &&
                    (O || o.preventDefault(),
                    (o.calcPoint = o.points[r.ort]),
                    void i(o, n))
                  );
                },
                o = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, s, !!O && { passive: !0 }),
                    o.push([e, s]);
                }),
                o
              );
            }
            function ie(e, t, r) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                s = 0 === e.type.indexOf("pointer"),
                o = 0,
                a = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (s = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var l = function (t) {
                  var i = t.target;
                  return (
                    i === r ||
                    r.contains(i) ||
                    (e.composed && e.composedPath().shift() === r)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (o = c[0].pageX), (a = c[0].pageY);
                } else {
                  var u = Array.prototype.find.call(e.changedTouches, l);
                  if (!u) return !1;
                  (o = u.pageX), (a = u.pageY);
                }
              }
              return (
                (t = t || g(N)),
                (n || s) && ((o = e.clientX + t.x), (a = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [o, a]),
                (e.cursor = n || s),
                e
              );
            }
            function ne(e) {
              var t = (100 * (e - l(c, r.ort))) / te();
              return (t = d(t)), r.dir ? 100 - t : t;
            }
            function oe(e) {
              var t = 100,
                r = !1;
              return (
                h.forEach(function (i, n) {
                  if (!F(n)) {
                    var s = k[n],
                      o = Math.abs(s - e);
                    (o < t || (o <= t && e > s) || (100 === o && 100 === t)) &&
                      ((r = n), (t = o));
                  }
                }),
                r
              );
            }
            function ae(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var i = (r.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              we(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (v(t.handle, r.cssClasses.active), (M -= 1)),
                t.listeners.forEach(function (e) {
                  I.removeEventListener(e[0], e[1]);
                }),
                0 === M &&
                  (v(C, r.cssClasses.drag),
                  Te(),
                  e.cursor &&
                    ((D.style.cursor = ""),
                    D.removeEventListener("selectstart", s))),
                r.events.smoothSteps &&
                  (t.handleNumbers.forEach(function (e) {
                    Oe(e, k[e], !0, !0, !1, !1);
                  }),
                  t.handleNumbers.forEach(function (e) {
                    be("update", e);
                  })),
                t.handleNumbers.forEach(function (e) {
                  be("change", e), be("set", e), be("end", e);
                });
            }
            function ue(e, t) {
              if (!t.handleNumbers.some(F)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = h[t.handleNumbers[0]].children[0]),
                  (M += 1),
                  f(i, r.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  o = re(T.move, I, le, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: k.slice(),
                  }),
                  a = re(T.end, I, ce, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = re("mouseout", I, ae, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, o.concat(a, l)),
                  e.cursor &&
                    ((D.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(C, r.cssClasses.drag),
                    D.addEventListener("selectstart", s, !1)),
                  t.handleNumbers.forEach(function (e) {
                    be("start", e);
                  });
              }
            }
            function de(e) {
              e.stopPropagation();
              var t = ne(e.calcPoint),
                i = oe(t);
              !1 !== i &&
                (r.events.snap || u(C, r.cssClasses.tap, r.animationDuration),
                Oe(i, t, !0, !0),
                Te(),
                be("slide", i, !0),
                be("update", i, !0),
                r.events.snap
                  ? ue(e, { handleNumbers: [i] })
                  : (be("change", i, !0), be("set", i, !0)));
            }
            function pe(e) {
              var t = ne(e.calcPoint),
                r = L.getStep(t),
                i = L.fromStepping(r);
              Object.keys(P).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  P[e].forEach(function (e) {
                    e.call($e, i);
                  });
              });
            }
            function he(e, t) {
              if (H() || F(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                s = ["PageDown", "PageUp"],
                o = ["Home", "End"];
              r.dir && !r.ort
                ? i.reverse()
                : r.ort && !r.dir && (n.reverse(), s.reverse());
              var a,
                l = e.key.replace("Arrow", ""),
                c = l === s[0],
                u = l === s[1],
                d = l === n[0] || l === i[0] || c,
                p = l === n[1] || l === i[1] || u,
                h = l === o[0],
                f = l === o[1];
              if (!(d || p || h || f)) return !0;
              if ((e.preventDefault(), p || d)) {
                var v = d ? 0 : 1,
                  m = Ne(t)[v];
                if (null === m) return !1;
                !1 === m &&
                  (m = L.getDefaultStep(k[t], d, r.keyboardDefaultStep)),
                  (m *=
                    u || c ? r.keyboardPageMultiplier : r.keyboardMultiplier),
                  (m = Math.max(m, 1e-7)),
                  (m *= d ? -1 : 1),
                  (a = A[t] + m);
              } else
                a = f
                  ? r.spectrum.xVal[r.spectrum.xVal.length - 1]
                  : r.spectrum.xVal[0];
              return (
                Oe(t, L.toStepping(a), !0, !0),
                be("slide", t),
                be("update", t),
                be("change", t),
                be("set", t),
                !1
              );
            }
            function fe(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  re(T.start, e.children[0], ue, { handleNumbers: [t] });
                }),
                e.tap && re(T.start, c, de, {}),
                e.hover && re(T.move, c, pe, { hover: !0 }),
                e.drag &&
                  w.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== w.length - 1) {
                      var n = h[i - 1],
                        s = h[i],
                        o = [t],
                        a = [n, s],
                        l = [i - 1, i];
                      f(t, r.cssClasses.draggable),
                        e.fixed &&
                          (o.push(n.children[0]), o.push(s.children[0])),
                        e.dragAll && ((a = h), (l = _)),
                        o.forEach(function (e) {
                          re(T.start, e, ue, {
                            handles: a,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function ve(e, t) {
              (P[e] = P[e] || []),
                P[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    be("update", t);
                  });
            }
            function me(e) {
              return e === z.aria || e === z.tooltips;
            }
            function ge(e) {
              var t = e && e.split(".")[0],
                r = t ? e.substring(t.length) : e;
              Object.keys(P).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (r && r !== n) ||
                  (me(n) && r !== n) ||
                  delete P[e];
              });
            }
            function be(e, t, i) {
              Object.keys(P).forEach(function (n) {
                var s = n.split(".")[0];
                e === s &&
                  P[n].forEach(function (e) {
                    e.call(
                      $e,
                      A.map(r.format.to),
                      t,
                      A.slice(),
                      i || !1,
                      k.slice(),
                      $e
                    );
                  });
              });
            }
            function ye(e, t, i, n, s, o, a) {
              var l;
              return (
                h.length > 1 &&
                  !r.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((l = L.getAbsoluteDistance(e[t - 1], r.margin, !1)),
                    (i = Math.max(i, l))),
                  s &&
                    t < h.length - 1 &&
                    ((l = L.getAbsoluteDistance(e[t + 1], r.margin, !0)),
                    (i = Math.min(i, l)))),
                h.length > 1 &&
                  r.limit &&
                  (n &&
                    t > 0 &&
                    ((l = L.getAbsoluteDistance(e[t - 1], r.limit, !1)),
                    (i = Math.min(i, l))),
                  s &&
                    t < h.length - 1 &&
                    ((l = L.getAbsoluteDistance(e[t + 1], r.limit, !0)),
                    (i = Math.max(i, l)))),
                r.padding &&
                  (0 === t &&
                    ((l = L.getAbsoluteDistance(0, r.padding[0], !1)),
                    (i = Math.max(i, l))),
                  t === h.length - 1 &&
                    ((l = L.getAbsoluteDistance(100, r.padding[1], !0)),
                    (i = Math.min(i, l)))),
                a || (i = L.getStep(i)),
                !((i = d(i)) === e[t] && !o) && i
              );
            }
            function xe(e, t) {
              var i = r.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function we(e, t, i, n, s) {
              var o = i.slice(),
                a = n[0],
                l = r.events.smoothSteps,
                c = [!e, e],
                u = [e, !e];
              (n = n.slice()),
                e && n.reverse(),
                n.length > 1
                  ? n.forEach(function (e, r) {
                      var i = ye(o, e, o[e] + t, c[r], u[r], !1, l);
                      !1 === i ? (t = 0) : ((t = i - o[e]), (o[e] = i));
                    })
                  : (c = u = [!0]);
              var d = !1;
              n.forEach(function (e, r) {
                d = Oe(e, i[e] + t, c[r], u[r], !1, l) || d;
              }),
                d &&
                  (n.forEach(function (e) {
                    be("update", e), be("slide", e);
                  }),
                  null != s && be("drag", a));
            }
            function Se(e, t) {
              return r.dir ? 100 - e - t : e;
            }
            function Ee(e, t) {
              (k[e] = t), (A[e] = L.fromStepping(t));
              var i = "translate(" + xe(Se(t, 0) - $ + "%", "0") + ")";
              (h[e].style[r.transformRule] = i), Ce(e), Ce(e + 1);
            }
            function Te() {
              _.forEach(function (e) {
                var t = k[e] > 50 ? -1 : 1,
                  r = 3 + (h.length + t * e);
                h[e].style.zIndex = String(r);
              });
            }
            function Oe(e, t, r, i, n, s) {
              return (
                n || (t = ye(k, e, t, r, i, !1, s)), !1 !== t && (Ee(e, t), !0)
              );
            }
            function Ce(e) {
              if (w[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = k[e - 1]), e !== w.length - 1 && (i = k[e]);
                var n = i - t,
                  s = "translate(" + xe(Se(t, n) + "%", "0") + ")",
                  o = "scale(" + xe(n / 100, "1") + ")";
                w[e].style[r.transformRule] = s + " " + o;
              }
            }
            function Le(e, t) {
              return null === e || !1 === e || void 0 === e
                ? k[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = r.format.from(e)) && (e = L.toStepping(e)),
                  !1 === e || isNaN(e) ? k[t] : e);
            }
            function Ae(e, t, i) {
              var n = p(e),
                s = void 0 === k[0];
              (t = void 0 === t || t),
                r.animate && !s && u(C, r.cssClasses.tap, r.animationDuration),
                _.forEach(function (e) {
                  Oe(e, Le(n[e], e), !0, !1, i);
                });
              var o = 1 === _.length ? 0 : 1;
              if (s && L.hasNoSize() && ((i = !0), (k[0] = 0), _.length > 1)) {
                var a = 100 / (_.length - 1);
                _.forEach(function (e) {
                  k[e] = e * a;
                });
              }
              for (; o < _.length; ++o)
                _.forEach(function (e) {
                  Oe(e, k[e], !0, !0, i);
                });
              Te(),
                _.forEach(function (e) {
                  be("update", e), null !== n[e] && t && be("set", e);
                });
            }
            function ke(e) {
              Ae(r.start, e);
            }
            function _e(e, t, r, i) {
              if (!((e = Number(e)) >= 0 && e < _.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Oe(e, Le(t, e), !0, !0, i), be("update", e), r && be("set", e);
            }
            function Me(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === A.length ? A[0] : A.slice(0);
              var t = A.map(r.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Pe() {
              for (
                ge(z.aria),
                  ge(z.tooltips),
                  Object.keys(r.cssClasses).forEach(function (e) {
                    v(C, r.cssClasses[e]);
                  });
                C.firstChild;

              )
                C.removeChild(C.firstChild);
              delete C.noUiSlider;
            }
            function Ne(e) {
              var t = k[e],
                i = L.getNearbySteps(t),
                n = A[e],
                s = i.thisStep.step,
                o = null;
              if (r.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== s &&
                n + s > i.stepAfter.startValue &&
                (s = i.stepAfter.startValue - n),
                (o =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (s = null) : 0 === t && (o = null);
              var a = L.countStepDecimals();
              return (
                null !== s && !1 !== s && (s = Number(s.toFixed(a))),
                null !== o && !1 !== o && (o = Number(o.toFixed(a))),
                [o, s]
              );
            }
            function ze() {
              return _.map(Ne);
            }
            function Ie(e, t) {
              var i = Me(),
                s = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              s.forEach(function (t) {
                void 0 !== e[t] && (a[t] = e[t]);
              });
              var o = se(a);
              s.forEach(function (t) {
                void 0 !== e[t] && (r[t] = o[t]);
              }),
                (L = o.spectrum),
                (r.margin = o.margin),
                (r.limit = o.limit),
                (r.padding = o.padding),
                r.pips ? ee(r.pips) : Q(),
                r.tooltips ? U() : G(),
                (k = []),
                Ae(n(e.start) ? e.start : i, t);
            }
            function De() {
              (c = B(C)),
                V(r.connect, c),
                fe(r.events),
                Ae(r.start),
                r.pips && ee(r.pips),
                r.tooltips && U(),
                X();
            }
            De();
            var $e = {
              destroy: Pe,
              steps: ze,
              on: ve,
              off: ge,
              get: Me,
              set: Ae,
              setHandle: _e,
              reset: ke,
              __moveHandles: function (e, t, r) {
                we(e, t, k, r);
              },
              options: a,
              updateOptions: Ie,
              target: C,
              removePips: Q,
              removeTooltips: G,
              getPositions: function () {
                return k.slice();
              },
              getTooltips: function () {
                return E;
              },
              getOrigins: function () {
                return h;
              },
              pips: ee,
            };
            return $e;
          }
          function ae(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var r = oe(e, se(t), t);
            return (e.noUiSlider = r), r;
          }
          var le = { __spectrum: M, cssClasses: N, create: ae };
          (e.create = ae),
            (e.cssClasses = N),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
      5055: (e, t, r) => {
        var i = r(8454),
          n = r(6282),
          s = r(180),
          o = i.TypeError;
        e.exports = function (e) {
          if (n(e)) return e;
          throw o(s(e) + " is not a function");
        };
      },
      2004: (e, t, r) => {
        var i = r(8454),
          n = r(6282),
          s = i.String,
          o = i.TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || n(e)) return e;
          throw o("Can't set " + s(e) + " as a prototype");
        };
      },
      9256: (e, t, r) => {
        var i = r(8149),
          n = r(1525),
          s = r(9168),
          o = i("unscopables"),
          a = Array.prototype;
        null == a[o] && s.f(a, o, { configurable: !0, value: n(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      3615: (e, t, r) => {
        "use strict";
        var i = r(7321).charAt;
        e.exports = function (e, t, r) {
          return t + (r ? i(e, t).length : 1);
        };
      },
      3046: (e, t, r) => {
        var i = r(8454),
          n = r(1786),
          s = i.TypeError;
        e.exports = function (e, t) {
          if (n(t, e)) return e;
          throw s("Incorrect invocation");
        };
      },
      1474: (e, t, r) => {
        var i = r(8454),
          n = r(5896),
          s = i.String,
          o = i.TypeError;
        e.exports = function (e) {
          if (n(e)) return e;
          throw o(s(e) + " is not an object");
        };
      },
      8774: (e, t, r) => {
        var i = r(6183);
        e.exports = i(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      1269: (e, t, r) => {
        "use strict";
        var i = r(528).forEach,
          n = r(1923)("forEach");
        e.exports = n
          ? [].forEach
          : function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      5675: (e, t, r) => {
        var i = r(3206),
          n = r(9623),
          s = r(1829),
          o = function (e) {
            return function (t, r, o) {
              var a,
                l = i(t),
                c = s(l),
                u = n(o, c);
              if (e && r != r) {
                for (; c > u; ) if ((a = l[u++]) != a) return !0;
              } else
                for (; c > u; u++)
                  if ((e || u in l) && l[u] === r) return e || u || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      528: (e, t, r) => {
        var i = r(1098),
          n = r(1768),
          s = r(7530),
          o = r(9473),
          a = r(1829),
          l = r(2768),
          c = n([].push),
          u = function (e) {
            var t = 1 == e,
              r = 2 == e,
              n = 3 == e,
              u = 4 == e,
              d = 6 == e,
              p = 7 == e,
              h = 5 == e || d;
            return function (f, v, m, g) {
              for (
                var b,
                  y,
                  x = o(f),
                  w = s(x),
                  S = i(v, m),
                  E = a(w),
                  T = 0,
                  O = g || l,
                  C = t ? O(f, E) : r || p ? O(f, 0) : void 0;
                E > T;
                T++
              )
                if ((h || T in w) && ((y = S((b = w[T]), T, x)), e))
                  if (t) C[T] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return T;
                      case 2:
                        c(C, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(C, b);
                    }
              return d ? -1 : n || u ? u : C;
            };
          };
        e.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6),
          filterReject: u(7),
        };
      },
      4820: (e, t, r) => {
        var i = r(6183),
          n = r(8149),
          s = r(4324),
          o = n("species");
        e.exports = function (e) {
          return (
            s >= 51 ||
            !i(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      1923: (e, t, r) => {
        "use strict";
        var i = r(6183);
        e.exports = function (e, t) {
          var r = [][e];
          return (
            !!r &&
            i(function () {
              r.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      6589: (e, t, r) => {
        var i = r(8454),
          n = r(5055),
          s = r(9473),
          o = r(7530),
          a = r(1829),
          l = i.TypeError,
          c = function (e) {
            return function (t, r, i, c) {
              n(r);
              var u = s(t),
                d = o(u),
                p = a(u),
                h = e ? p - 1 : 0,
                f = e ? -1 : 1;
              if (i < 2)
                for (;;) {
                  if (h in d) {
                    (c = d[h]), (h += f);
                    break;
                  }
                  if (((h += f), e ? h < 0 : p <= h))
                    throw l("Reduce of empty array with no initial value");
                }
              for (; e ? h >= 0 : p > h; h += f)
                h in d && (c = r(c, d[h], h, u));
              return c;
            };
          };
        e.exports = { left: c(!1), right: c(!0) };
      },
      4072: (e, t, r) => {
        var i = r(8454),
          n = r(9623),
          s = r(1829),
          o = r(2759),
          a = i.Array,
          l = Math.max;
        e.exports = function (e, t, r) {
          for (
            var i = s(e),
              c = n(t, i),
              u = n(void 0 === r ? i : r, i),
              d = a(l(u - c, 0)),
              p = 0;
            c < u;
            c++, p++
          )
            o(d, p, e[c]);
          return (d.length = p), d;
        };
      },
      9882: (e, t, r) => {
        var i = r(8454),
          n = r(7931),
          s = r(2240),
          o = r(5896),
          a = r(8149)("species"),
          l = i.Array;
        e.exports = function (e) {
          var t;
          return (
            n(e) &&
              ((t = e.constructor),
              ((s(t) && (t === l || n(t.prototype))) ||
                (o(t) && null === (t = t[a]))) &&
                (t = void 0)),
            void 0 === t ? l : t
          );
        };
      },
      2768: (e, t, r) => {
        var i = r(9882);
        e.exports = function (e, t) {
          return new (i(e))(0 === t ? 0 : t);
        };
      },
      1751: (e, t, r) => {
        var i = r(8149)("iterator"),
          n = !1;
        try {
          var s = 0,
            o = {
              next: function () {
                return { done: !!s++ };
              },
              return: function () {
                n = !0;
              },
            };
          (o[i] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !n) return !1;
          var r = !1;
          try {
            var s = {};
            (s[i] = function () {
              return {
                next: function () {
                  return { done: (r = !0) };
                },
              };
            }),
              e(s);
          } catch (e) {}
          return r;
        };
      },
      1510: (e, t, r) => {
        var i = r(1768),
          n = i({}.toString),
          s = i("".slice);
        e.exports = function (e) {
          return s(n(e), 8, -1);
        };
      },
      9225: (e, t, r) => {
        var i = r(8454),
          n = r(4823),
          s = r(6282),
          o = r(1510),
          a = r(8149)("toStringTag"),
          l = i.Object,
          c =
            "Arguments" ==
            o(
              (function () {
                return arguments;
              })()
            );
        e.exports = n
          ? o
          : function (e) {
              var t, r, i;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (r = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = l(e)), a))
                ? r
                : c
                ? o(t)
                : "Object" == (i = o(t)) && s(t.callee)
                ? "Arguments"
                : i;
            };
      },
      7790: (e, t, r) => {
        "use strict";
        var i = r(1768),
          n = r(6367),
          s = r(6582).getWeakData,
          o = r(1474),
          a = r(5896),
          l = r(3046),
          c = r(1518),
          u = r(528),
          d = r(8281),
          p = r(1030),
          h = p.set,
          f = p.getterFor,
          v = u.find,
          m = u.findIndex,
          g = i([].splice),
          b = 0,
          y = function (e) {
            return e.frozen || (e.frozen = new x());
          },
          x = function () {
            this.entries = [];
          },
          w = function (e, t) {
            return v(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (x.prototype = {
          get: function (e) {
            var t = w(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!w(this, e);
          },
          set: function (e, t) {
            var r = w(this, e);
            r ? (r[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = m(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && g(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, r, i) {
              var u = e(function (e, n) {
                  l(e, p),
                    h(e, { type: t, id: b++, frozen: void 0 }),
                    null != n && c(n, e[i], { that: e, AS_ENTRIES: r });
                }),
                p = u.prototype,
                v = f(t),
                m = function (e, t, r) {
                  var i = v(e),
                    n = s(o(t), !0);
                  return !0 === n ? y(i).set(t, r) : (n[i.id] = r), e;
                };
              return (
                n(p, {
                  delete: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var r = s(e);
                    return !0 === r
                      ? y(t).delete(e)
                      : r && d(r, t.id) && delete r[t.id];
                  },
                  has: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var r = s(e);
                    return !0 === r ? y(t).has(e) : r && d(r, t.id);
                  },
                }),
                n(
                  p,
                  r
                    ? {
                        get: function (e) {
                          var t = v(this);
                          if (a(e)) {
                            var r = s(e);
                            return !0 === r
                              ? y(t).get(e)
                              : r
                              ? r[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return m(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return m(this, e, !0);
                        },
                      }
                ),
                u
              );
            },
          });
      },
      6645: (e, t, r) => {
        "use strict";
        var i = r(4761),
          n = r(8454),
          s = r(1768),
          o = r(1949),
          a = r(2054),
          l = r(6582),
          c = r(1518),
          u = r(3046),
          d = r(6282),
          p = r(5896),
          h = r(6183),
          f = r(1751),
          v = r(820),
          m = r(7770);
        e.exports = function (e, t, r) {
          var g = -1 !== e.indexOf("Map"),
            b = -1 !== e.indexOf("Weak"),
            y = g ? "set" : "add",
            x = n[e],
            w = x && x.prototype,
            S = x,
            E = {},
            T = function (e) {
              var t = s(w[e]);
              a(
                w,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return b && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, r) {
                      return t(this, 0 === e ? 0 : e, r), this;
                    }
              );
            };
          if (
            o(
              e,
              !d(x) ||
                !(
                  b ||
                  (w.forEach &&
                    !h(function () {
                      new x().entries().next();
                    }))
                )
            )
          )
            (S = r.getConstructor(t, e, g, y)), l.enable();
          else if (o(e, !0)) {
            var O = new S(),
              C = O[y](b ? {} : -0, 1) != O,
              L = h(function () {
                O.has(1);
              }),
              A = f(function (e) {
                new x(e);
              }),
              k =
                !b &&
                h(function () {
                  for (var e = new x(), t = 5; t--; ) e[y](t, t);
                  return !e.has(-0);
                });
            A ||
              (((S = t(function (e, t) {
                u(e, w);
                var r = m(new x(), e, S);
                return null != t && c(t, r[y], { that: r, AS_ENTRIES: g }), r;
              })).prototype = w),
              (w.constructor = S)),
              (L || k) && (T("delete"), T("has"), g && T("get")),
              (k || C) && T(y),
              b && w.clear && delete w.clear;
          }
          return (
            (E[e] = S),
            i({ global: !0, forced: S != x }, E),
            v(S, e),
            b || r.setStrong(S, e, g),
            S
          );
        };
      },
      882: (e, t, r) => {
        var i = r(8281),
          n = r(1441),
          s = r(5663),
          o = r(9168);
        e.exports = function (e, t, r) {
          for (var a = n(t), l = o.f, c = s.f, u = 0; u < a.length; u++) {
            var d = a[u];
            i(e, d) || (r && i(r, d)) || l(e, d, c(t, d));
          }
        };
      },
      7401: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      2538: (e, t, r) => {
        "use strict";
        var i = r(6524).IteratorPrototype,
          n = r(1525),
          s = r(9273),
          o = r(820),
          a = r(6126),
          l = function () {
            return this;
          };
        e.exports = function (e, t, r, c) {
          var u = t + " Iterator";
          return (
            (e.prototype = n(i, { next: s(+!c, r) })),
            o(e, u, !1, !0),
            (a[u] = l),
            e
          );
        };
      },
      1501: (e, t, r) => {
        var i = r(723),
          n = r(9168),
          s = r(9273);
        e.exports = i
          ? function (e, t, r) {
              return n.f(e, t, s(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            };
      },
      9273: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      2759: (e, t, r) => {
        "use strict";
        var i = r(2988),
          n = r(9168),
          s = r(9273);
        e.exports = function (e, t, r) {
          var o = i(t);
          o in e ? n.f(e, o, s(0, r)) : (e[o] = r);
        };
      },
      2054: (e, t, r) => {
        var i = r(8454),
          n = r(6282),
          s = r(1501),
          o = r(5903),
          a = r(7852);
        e.exports = function (e, t, r, l) {
          var c = !!l && !!l.unsafe,
            u = !!l && !!l.enumerable,
            d = !!l && !!l.noTargetGet,
            p = l && void 0 !== l.name ? l.name : t;
          return (
            n(r) && o(r, p, l),
            e === i
              ? (u ? (e[t] = r) : a(t, r), e)
              : (c ? !d && e[t] && (u = !0) : delete e[t],
                u ? (e[t] = r) : s(e, t, r),
                e)
          );
        };
      },
      6367: (e, t, r) => {
        var i = r(2054);
        e.exports = function (e, t, r) {
          for (var n in t) i(e, n, t[n], r);
          return e;
        };
      },
      7583: (e, t, r) => {
        "use strict";
        var i = r(4761),
          n = r(4552),
          s = r(8977),
          o = r(4530),
          a = r(6282),
          l = r(2538),
          c = r(4204),
          u = r(5900),
          d = r(820),
          p = r(1501),
          h = r(2054),
          f = r(8149),
          v = r(6126),
          m = r(6524),
          g = o.PROPER,
          b = o.CONFIGURABLE,
          y = m.IteratorPrototype,
          x = m.BUGGY_SAFARI_ITERATORS,
          w = f("iterator"),
          S = "keys",
          E = "values",
          T = "entries",
          O = function () {
            return this;
          };
        e.exports = function (e, t, r, o, f, m, C) {
          l(r, t, o);
          var L,
            A,
            k,
            _ = function (e) {
              if (e === f && I) return I;
              if (!x && e in N) return N[e];
              switch (e) {
                case S:
                case E:
                case T:
                  return function () {
                    return new r(this, e);
                  };
              }
              return function () {
                return new r(this);
              };
            },
            M = t + " Iterator",
            P = !1,
            N = e.prototype,
            z = N[w] || N["@@iterator"] || (f && N[f]),
            I = (!x && z) || _(f),
            D = ("Array" == t && N.entries) || z;
          if (
            (D &&
              (L = c(D.call(new e()))) !== Object.prototype &&
              L.next &&
              (s || c(L) === y || (u ? u(L, y) : a(L[w]) || h(L, w, O)),
              d(L, M, !0, !0),
              s && (v[M] = O)),
            g &&
              f == E &&
              z &&
              z.name !== E &&
              (!s && b
                ? p(N, "name", E)
                : ((P = !0),
                  (I = function () {
                    return n(z, this);
                  }))),
            f)
          )
            if (((A = { values: _(E), keys: m ? I : _(S), entries: _(T) }), C))
              for (k in A) (x || P || !(k in N)) && h(N, k, A[k]);
            else i({ target: t, proto: !0, forced: x || P }, A);
          return (
            (s && !C) || N[w] === I || h(N, w, I, { name: f }), (v[t] = I), A
          );
        };
      },
      723: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7282: (e, t, r) => {
        var i = r(8454),
          n = r(5896),
          s = i.document,
          o = n(s) && n(s.createElement);
        e.exports = function (e) {
          return o ? s.createElement(e) : {};
        };
      },
      6181: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2387: (e, t, r) => {
        var i = r(7282)("span").classList,
          n = i && i.constructor && i.constructor.prototype;
        e.exports = n === Object.prototype ? void 0 : n;
      },
      7594: (e, t, r) => {
        var i = r(1510),
          n = r(8454);
        e.exports = "process" == i(n.process);
      },
      2543: (e, t, r) => {
        var i = r(4991);
        e.exports = i("navigator", "userAgent") || "";
      },
      4324: (e, t, r) => {
        var i,
          n,
          s = r(8454),
          o = r(2543),
          a = s.process,
          l = s.Deno,
          c = (a && a.versions) || (l && l.version),
          u = c && c.v8;
        u && (n = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
          !n &&
            o &&
            (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
            (i = o.match(/Chrome\/(\d+)/)) &&
            (n = +i[1]),
          (e.exports = n);
      },
      8409: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      4761: (e, t, r) => {
        var i = r(8454),
          n = r(5663).f,
          s = r(1501),
          o = r(2054),
          a = r(7852),
          l = r(882),
          c = r(1949);
        e.exports = function (e, t) {
          var r,
            u,
            d,
            p,
            h,
            f = e.target,
            v = e.global,
            m = e.stat;
          if ((r = v ? i : m ? i[f] || a(f, {}) : (i[f] || {}).prototype))
            for (u in t) {
              if (
                ((p = t[u]),
                (d = e.noTargetGet ? (h = n(r, u)) && h.value : r[u]),
                !c(v ? u : f + (m ? "." : "#") + u, e.forced) && void 0 !== d)
              ) {
                if (typeof p == typeof d) continue;
                l(p, d);
              }
              (e.sham || (d && d.sham)) && s(p, "sham", !0), o(r, u, p, e);
            }
        };
      },
      6183: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      9696: (e, t, r) => {
        "use strict";
        r(9989);
        var i = r(1768),
          n = r(2054),
          s = r(5510),
          o = r(6183),
          a = r(8149),
          l = r(1501),
          c = a("species"),
          u = RegExp.prototype;
        e.exports = function (e, t, r, d) {
          var p = a(e),
            h = !o(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            f =
              h &&
              !o(function () {
                var t = !1,
                  r = /a/;
                return (
                  "split" === e &&
                    (((r = {}).constructor = {}),
                    (r.constructor[c] = function () {
                      return r;
                    }),
                    (r.flags = ""),
                    (r[p] = /./[p])),
                  (r.exec = function () {
                    return (t = !0), null;
                  }),
                  r[p](""),
                  !t
                );
              });
          if (!h || !f || r) {
            var v = i(/./[p]),
              m = t(p, ""[e], function (e, t, r, n, o) {
                var a = i(e),
                  l = t.exec;
                return l === s || l === u.exec
                  ? h && !o
                    ? { done: !0, value: v(t, r, n) }
                    : { done: !0, value: a(r, t, n) }
                  : { done: !1 };
              });
            n(String.prototype, e, m[0]), n(u, p, m[1]);
          }
          d && l(u[p], "sham", !0);
        };
      },
      3116: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      6218: (e, t, r) => {
        var i = r(160),
          n = Function.prototype,
          s = n.apply,
          o = n.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (i
            ? o.bind(s)
            : function () {
                return o.apply(s, arguments);
              });
      },
      1098: (e, t, r) => {
        var i = r(1768),
          n = r(5055),
          s = r(160),
          o = i(i.bind);
        e.exports = function (e, t) {
          return (
            n(e),
            void 0 === t
              ? e
              : s
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      160: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      4552: (e, t, r) => {
        var i = r(160),
          n = Function.prototype.call;
        e.exports = i
          ? n.bind(n)
          : function () {
              return n.apply(n, arguments);
            };
      },
      4530: (e, t, r) => {
        var i = r(723),
          n = r(8281),
          s = Function.prototype,
          o = i && Object.getOwnPropertyDescriptor,
          a = n(s, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!i || (i && o(s, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1768: (e, t, r) => {
        var i = r(160),
          n = Function.prototype,
          s = n.bind,
          o = n.call,
          a = i && s.bind(o, o);
        e.exports = i
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      4991: (e, t, r) => {
        var i = r(8454),
          n = r(6282),
          s = function (e) {
            return n(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? s(i[e]) : i[e] && i[e][t];
        };
      },
      650: (e, t, r) => {
        var i = r(9225),
          n = r(9827),
          s = r(6126),
          o = r(8149)("iterator");
        e.exports = function (e) {
          if (null != e) return n(e, o) || n(e, "@@iterator") || s[i(e)];
        };
      },
      7755: (e, t, r) => {
        var i = r(8454),
          n = r(4552),
          s = r(5055),
          o = r(1474),
          a = r(180),
          l = r(650),
          c = i.TypeError;
        e.exports = function (e, t) {
          var r = arguments.length < 2 ? l(e) : t;
          if (s(r)) return o(n(r, e));
          throw c(a(e) + " is not iterable");
        };
      },
      9827: (e, t, r) => {
        var i = r(5055);
        e.exports = function (e, t) {
          var r = e[t];
          return null == r ? void 0 : i(r);
        };
      },
      4742: (e, t, r) => {
        var i = r(1768),
          n = r(9473),
          s = Math.floor,
          o = i("".charAt),
          a = i("".replace),
          l = i("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          u = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, r, i, d, p) {
          var h = r + e.length,
            f = i.length,
            v = u;
          return (
            void 0 !== d && ((d = n(d)), (v = c)),
            a(p, v, function (n, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, r);
                case "'":
                  return l(t, h);
                case "<":
                  c = d[l(a, 1, -1)];
                  break;
                default:
                  var u = +a;
                  if (0 === u) return n;
                  if (u > f) {
                    var p = s(u / 10);
                    return 0 === p
                      ? n
                      : p <= f
                      ? void 0 === i[p - 1]
                        ? o(a, 1)
                        : i[p - 1] + o(a, 1)
                      : n;
                  }
                  c = i[u - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      8454: (e, t, r) => {
        var i = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          i("object" == typeof globalThis && globalThis) ||
          i("object" == typeof window && window) ||
          i("object" == typeof self && self) ||
          i("object" == typeof r.g && r.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8281: (e, t, r) => {
        var i = r(1768),
          n = r(9473),
          s = i({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return s(n(e), t);
          };
      },
      4377: (e) => {
        e.exports = {};
      },
      7461: (e, t, r) => {
        var i = r(4991);
        e.exports = i("document", "documentElement");
      },
      4985: (e, t, r) => {
        var i = r(723),
          n = r(6183),
          s = r(7282);
        e.exports =
          !i &&
          !n(function () {
            return (
              7 !=
              Object.defineProperty(s("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7530: (e, t, r) => {
        var i = r(8454),
          n = r(1768),
          s = r(6183),
          o = r(1510),
          a = i.Object,
          l = n("".split);
        e.exports = s(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == o(e) ? l(e, "") : a(e);
            }
          : a;
      },
      7770: (e, t, r) => {
        var i = r(6282),
          n = r(5896),
          s = r(5900);
        e.exports = function (e, t, r) {
          var o, a;
          return (
            s &&
              i((o = t.constructor)) &&
              o !== r &&
              n((a = o.prototype)) &&
              a !== r.prototype &&
              s(e, a),
            e
          );
        };
      },
      6901: (e, t, r) => {
        var i = r(1768),
          n = r(6282),
          s = r(2047),
          o = i(Function.toString);
        n(s.inspectSource) ||
          (s.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = s.inspectSource);
      },
      6582: (e, t, r) => {
        var i = r(4761),
          n = r(1768),
          s = r(4377),
          o = r(5896),
          a = r(8281),
          l = r(9168).f,
          c = r(6785),
          u = r(6675),
          d = r(6662),
          p = r(9059),
          h = r(3116),
          f = !1,
          v = p("meta"),
          m = 0,
          g = function (e) {
            l(e, v, { value: { objectID: "O" + m++, weakData: {} } });
          },
          b = (e.exports = {
            enable: function () {
              (b.enable = function () {}), (f = !0);
              var e = c.f,
                t = n([].splice),
                r = {};
              (r[v] = 1),
                e(r).length &&
                  ((c.f = function (r) {
                    for (var i = e(r), n = 0, s = i.length; n < s; n++)
                      if (i[n] === v) {
                        t(i, n, 1);
                        break;
                      }
                    return i;
                  }),
                  i(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: u.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, v)) {
                if (!d(e)) return "F";
                if (!t) return "E";
                g(e);
              }
              return e[v].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, v)) {
                if (!d(e)) return !0;
                if (!t) return !1;
                g(e);
              }
              return e[v].weakData;
            },
            onFreeze: function (e) {
              return h && f && d(e) && !a(e, v) && g(e), e;
            },
          });
        s[v] = !0;
      },
      1030: (e, t, r) => {
        var i,
          n,
          s,
          o = r(4404),
          a = r(8454),
          l = r(1768),
          c = r(5896),
          u = r(1501),
          d = r(8281),
          p = r(2047),
          h = r(8873),
          f = r(4377),
          v = "Object already initialized",
          m = a.TypeError,
          g = a.WeakMap;
        if (o || p.state) {
          var b = p.state || (p.state = new g()),
            y = l(b.get),
            x = l(b.has),
            w = l(b.set);
          (i = function (e, t) {
            if (x(b, e)) throw new m(v);
            return (t.facade = e), w(b, e, t), t;
          }),
            (n = function (e) {
              return y(b, e) || {};
            }),
            (s = function (e) {
              return x(b, e);
            });
        } else {
          var S = h("state");
          (f[S] = !0),
            (i = function (e, t) {
              if (d(e, S)) throw new m(v);
              return (t.facade = e), u(e, S, t), t;
            }),
            (n = function (e) {
              return d(e, S) ? e[S] : {};
            }),
            (s = function (e) {
              return d(e, S);
            });
        }
        e.exports = {
          set: i,
          get: n,
          has: s,
          enforce: function (e) {
            return s(e) ? n(e) : i(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var r;
              if (!c(t) || (r = n(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return r;
            };
          },
        };
      },
      5859: (e, t, r) => {
        var i = r(8149),
          n = r(6126),
          s = i("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (n.Array === e || o[s] === e);
        };
      },
      7931: (e, t, r) => {
        var i = r(1510);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == i(e);
          };
      },
      6282: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      2240: (e, t, r) => {
        var i = r(1768),
          n = r(6183),
          s = r(6282),
          o = r(9225),
          a = r(4991),
          l = r(6901),
          c = function () {},
          u = [],
          d = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          h = i(p.exec),
          f = !p.exec(c),
          v = function (e) {
            if (!s(e)) return !1;
            try {
              return d(c, u, e), !0;
            } catch (e) {
              return !1;
            }
          },
          m = function (e) {
            if (!s(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!h(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (m.sham = !0),
          (e.exports =
            !d ||
            n(function () {
              var e;
              return (
                v(v.call) ||
                !v(Object) ||
                !v(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? m
              : v);
      },
      1949: (e, t, r) => {
        var i = r(6183),
          n = r(6282),
          s = /#|\.prototype\./,
          o = function (e, t) {
            var r = l[a(e)];
            return r == u || (r != c && (n(t) ? i(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(s, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          u = (o.POLYFILL = "P");
        e.exports = o;
      },
      5896: (e, t, r) => {
        var i = r(6282);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : i(e);
        };
      },
      8977: (e) => {
        e.exports = !1;
      },
      1527: (e, t, r) => {
        var i = r(8454),
          n = r(4991),
          s = r(6282),
          o = r(1786),
          a = r(4746),
          l = i.Object;
        e.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = n("Symbol");
              return s(t) && o(t.prototype, l(e));
            };
      },
      1518: (e, t, r) => {
        var i = r(8454),
          n = r(1098),
          s = r(4552),
          o = r(1474),
          a = r(180),
          l = r(5859),
          c = r(1829),
          u = r(1786),
          d = r(7755),
          p = r(650),
          h = r(9193),
          f = i.TypeError,
          v = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          m = v.prototype;
        e.exports = function (e, t, r) {
          var i,
            g,
            b,
            y,
            x,
            w,
            S,
            E = r && r.that,
            T = !(!r || !r.AS_ENTRIES),
            O = !(!r || !r.IS_ITERATOR),
            C = !(!r || !r.INTERRUPTED),
            L = n(t, E),
            A = function (e) {
              return i && h(i, "normal", e), new v(!0, e);
            },
            k = function (e) {
              return T
                ? (o(e), C ? L(e[0], e[1], A) : L(e[0], e[1]))
                : C
                ? L(e, A)
                : L(e);
            };
          if (O) i = e;
          else {
            if (!(g = p(e))) throw f(a(e) + " is not iterable");
            if (l(g)) {
              for (b = 0, y = c(e); y > b; b++)
                if ((x = k(e[b])) && u(m, x)) return x;
              return new v(!1);
            }
            i = d(e, g);
          }
          for (w = i.next; !(S = s(w, i)).done; ) {
            try {
              x = k(S.value);
            } catch (e) {
              h(i, "throw", e);
            }
            if ("object" == typeof x && x && u(m, x)) return x;
          }
          return new v(!1);
        };
      },
      9193: (e, t, r) => {
        var i = r(4552),
          n = r(1474),
          s = r(9827);
        e.exports = function (e, t, r) {
          var o, a;
          n(e);
          try {
            if (!(o = s(e, "return"))) {
              if ("throw" === t) throw r;
              return r;
            }
            o = i(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw r;
          if (a) throw o;
          return n(o), r;
        };
      },
      6524: (e, t, r) => {
        "use strict";
        var i,
          n,
          s,
          o = r(6183),
          a = r(6282),
          l = r(1525),
          c = r(4204),
          u = r(2054),
          d = r(8149),
          p = r(8977),
          h = d("iterator"),
          f = !1;
        [].keys &&
          ("next" in (s = [].keys())
            ? (n = c(c(s))) !== Object.prototype && (i = n)
            : (f = !0)),
          null == i ||
          o(function () {
            var e = {};
            return i[h].call(e) !== e;
          })
            ? (i = {})
            : p && (i = l(i)),
          a(i[h]) ||
            u(i, h, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: f });
      },
      6126: (e) => {
        e.exports = {};
      },
      1829: (e, t, r) => {
        var i = r(3917);
        e.exports = function (e) {
          return i(e.length);
        };
      },
      5903: (e, t, r) => {
        var i = r(6183),
          n = r(6282),
          s = r(8281),
          o = r(9168).f,
          a = r(4530).CONFIGURABLE,
          l = r(6901),
          c = r(1030),
          u = c.enforce,
          d = c.get,
          p = !i(function () {
            return 8 !== o(function () {}, "length", { value: 8 }).length;
          }),
          h = String(String).split("String"),
          f = (e.exports = function (e, t, r) {
            "Symbol(" === String(t).slice(0, 7) &&
              (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              r && r.getter && (t = "get " + t),
              r && r.setter && (t = "set " + t),
              (!s(e, "name") || (a && e.name !== t)) &&
                o(e, "name", { value: t, configurable: !0 }),
              p &&
                r &&
                s(r, "arity") &&
                e.length !== r.arity &&
                o(e, "length", { value: r.arity });
            var i = u(e);
            return (
              s(i, "source") ||
                (i.source = h.join("string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = f(function () {
          return (n(this) && d(this).source) || l(this);
        }, "toString");
      },
      323: (e, t, r) => {
        var i = r(4324),
          n = r(6183);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && i && i < 41)
            );
          });
      },
      4404: (e, t, r) => {
        var i = r(8454),
          n = r(6282),
          s = r(6901),
          o = i.WeakMap;
        e.exports = n(o) && /native code/.test(s(o));
      },
      8513: (e, t, r) => {
        var i = r(8454),
          n = r(6183),
          s = r(1768),
          o = r(7655),
          a = r(9749).trim,
          l = r(8342),
          c = i.parseInt,
          u = i.Symbol,
          d = u && u.iterator,
          p = /^[+-]?0x/i,
          h = s(p.exec),
          f =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (d &&
              !n(function () {
                c(Object(d));
              }));
        e.exports = f
          ? function (e, t) {
              var r = a(o(e));
              return c(r, t >>> 0 || (h(p, r) ? 16 : 10));
            }
          : c;
      },
      4727: (e, t, r) => {
        "use strict";
        var i = r(723),
          n = r(1768),
          s = r(4552),
          o = r(6183),
          a = r(1340),
          l = r(8074),
          c = r(4043),
          u = r(9473),
          d = r(7530),
          p = Object.assign,
          h = Object.defineProperty,
          f = n([].concat);
        e.exports =
          !p ||
          o(function () {
            if (
              i &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    h({}, "a", {
                      enumerable: !0,
                      get: function () {
                        h(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              r = Symbol(),
              n = "abcdefghijklmnopqrst";
            return (
              (e[r] = 7),
              n.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[r] || a(p({}, t)).join("") != n
            );
          })
            ? function (e, t) {
                for (
                  var r = u(e), n = arguments.length, o = 1, p = l.f, h = c.f;
                  n > o;

                )
                  for (
                    var v,
                      m = d(arguments[o++]),
                      g = p ? f(a(m), p(m)) : a(m),
                      b = g.length,
                      y = 0;
                    b > y;

                  )
                    (v = g[y++]), (i && !s(h, m, v)) || (r[v] = m[v]);
                return r;
              }
            : p;
      },
      1525: (e, t, r) => {
        var i,
          n = r(1474),
          s = r(262),
          o = r(8409),
          a = r(4377),
          l = r(7461),
          c = r(7282),
          u = r(8873),
          d = u("IE_PROTO"),
          p = function () {},
          h = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          f = function (e) {
            e.write(h("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          v = function () {
            try {
              i = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v =
              "undefined" != typeof document
                ? document.domain && i
                  ? f(i)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(h("document.F=Object")),
                    e.close(),
                    e.F)
                : f(i);
            for (var r = o.length; r--; ) delete v.prototype[o[r]];
            return v();
          };
        (a[d] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var r;
              return (
                null !== e
                  ? ((p.prototype = n(e)),
                    (r = new p()),
                    (p.prototype = null),
                    (r[d] = e))
                  : (r = v()),
                void 0 === t ? r : s.f(r, t)
              );
            });
      },
      262: (e, t, r) => {
        var i = r(723),
          n = r(8654),
          s = r(9168),
          o = r(1474),
          a = r(3206),
          l = r(1340);
        t.f =
          i && !n
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var r, i = a(t), n = l(t), c = n.length, u = 0; c > u; )
                  s.f(e, (r = n[u++]), i[r]);
                return e;
              };
      },
      9168: (e, t, r) => {
        var i = r(8454),
          n = r(723),
          s = r(4985),
          o = r(8654),
          a = r(1474),
          l = r(2988),
          c = i.TypeError,
          u = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          p = "enumerable",
          h = "configurable",
          f = "writable";
        t.f = n
          ? o
            ? function (e, t, r) {
                if (
                  (a(e),
                  (t = l(t)),
                  a(r),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in r &&
                    f in r &&
                    !r.writable)
                ) {
                  var i = d(e, t);
                  i &&
                    i.writable &&
                    ((e[t] = r.value),
                    (r = {
                      configurable: h in r ? r.configurable : i.configurable,
                      enumerable: p in r ? r.enumerable : i.enumerable,
                      writable: !1,
                    }));
                }
                return u(e, t, r);
              }
            : u
          : function (e, t, r) {
              if ((a(e), (t = l(t)), a(r), s))
                try {
                  return u(e, t, r);
                } catch (e) {}
              if ("get" in r || "set" in r) throw c("Accessors not supported");
              return "value" in r && (e[t] = r.value), e;
            };
      },
      5663: (e, t, r) => {
        var i = r(723),
          n = r(4552),
          s = r(4043),
          o = r(9273),
          a = r(3206),
          l = r(2988),
          c = r(8281),
          u = r(4985),
          d = Object.getOwnPropertyDescriptor;
        t.f = i
          ? d
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), u))
                try {
                  return d(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!n(s.f, e, t), e[t]);
            };
      },
      6675: (e, t, r) => {
        var i = r(1510),
          n = r(3206),
          s = r(6785).f,
          o = r(4072),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == i(e)
            ? (function (e) {
                try {
                  return s(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : s(n(e));
        };
      },
      6785: (e, t, r) => {
        var i = r(5113),
          n = r(8409).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return i(e, n);
          };
      },
      8074: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      4204: (e, t, r) => {
        var i = r(8454),
          n = r(8281),
          s = r(6282),
          o = r(9473),
          a = r(8873),
          l = r(7401),
          c = a("IE_PROTO"),
          u = i.Object,
          d = u.prototype;
        e.exports = l
          ? u.getPrototypeOf
          : function (e) {
              var t = o(e);
              if (n(t, c)) return t[c];
              var r = t.constructor;
              return s(r) && t instanceof r
                ? r.prototype
                : t instanceof u
                ? d
                : null;
            };
      },
      6662: (e, t, r) => {
        var i = r(6183),
          n = r(5896),
          s = r(1510),
          o = r(8774),
          a = Object.isExtensible,
          l = i(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!n(e) && (!o || "ArrayBuffer" != s(e)) && (!a || a(e));
              }
            : a;
      },
      1786: (e, t, r) => {
        var i = r(1768);
        e.exports = i({}.isPrototypeOf);
      },
      5113: (e, t, r) => {
        var i = r(1768),
          n = r(8281),
          s = r(3206),
          o = r(5675).indexOf,
          a = r(4377),
          l = i([].push);
        e.exports = function (e, t) {
          var r,
            i = s(e),
            c = 0,
            u = [];
          for (r in i) !n(a, r) && n(i, r) && l(u, r);
          for (; t.length > c; ) n(i, (r = t[c++])) && (~o(u, r) || l(u, r));
          return u;
        };
      },
      1340: (e, t, r) => {
        var i = r(5113),
          n = r(8409);
        e.exports =
          Object.keys ||
          function (e) {
            return i(e, n);
          };
      },
      4043: (e, t) => {
        "use strict";
        var r = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          n = i && !r.call({ 1: 2 }, 1);
        t.f = n
          ? function (e) {
              var t = i(this, e);
              return !!t && t.enumerable;
            }
          : r;
      },
      5900: (e, t, r) => {
        var i = r(1768),
          n = r(1474),
          s = r(2004);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  r = {};
                try {
                  (e = i(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(r, []),
                    (t = r instanceof Array);
                } catch (e) {}
                return function (r, i) {
                  return n(r), s(i), t ? e(r, i) : (r.__proto__ = i), r;
                };
              })()
            : void 0);
      },
      4117: (e, t, r) => {
        "use strict";
        var i = r(4823),
          n = r(9225);
        e.exports = i
          ? {}.toString
          : function () {
              return "[object " + n(this) + "]";
            };
      },
      6891: (e, t, r) => {
        var i = r(8454),
          n = r(4552),
          s = r(6282),
          o = r(5896),
          a = i.TypeError;
        e.exports = function (e, t) {
          var r, i;
          if ("string" === t && s((r = e.toString)) && !o((i = n(r, e))))
            return i;
          if (s((r = e.valueOf)) && !o((i = n(r, e)))) return i;
          if ("string" !== t && s((r = e.toString)) && !o((i = n(r, e))))
            return i;
          throw a("Can't convert object to primitive value");
        };
      },
      1441: (e, t, r) => {
        var i = r(4991),
          n = r(1768),
          s = r(6785),
          o = r(8074),
          a = r(1474),
          l = n([].concat);
        e.exports =
          i("Reflect", "ownKeys") ||
          function (e) {
            var t = s.f(a(e)),
              r = o.f;
            return r ? l(t, r(e)) : t;
          };
      },
      8734: (e, t, r) => {
        var i = r(8454),
          n = r(4552),
          s = r(1474),
          o = r(6282),
          a = r(1510),
          l = r(5510),
          c = i.TypeError;
        e.exports = function (e, t) {
          var r = e.exec;
          if (o(r)) {
            var i = n(r, e, t);
            return null !== i && s(i), i;
          }
          if ("RegExp" === a(e)) return n(l, e, t);
          throw c("RegExp#exec called on incompatible receiver");
        };
      },
      5510: (e, t, r) => {
        "use strict";
        var i,
          n,
          s = r(4552),
          o = r(1768),
          a = r(7655),
          l = r(8383),
          c = r(6558),
          u = r(1748),
          d = r(1525),
          p = r(1030).get,
          h = r(7672),
          f = r(9729),
          v = u("native-string-replace", String.prototype.replace),
          m = RegExp.prototype.exec,
          g = m,
          b = o("".charAt),
          y = o("".indexOf),
          x = o("".replace),
          w = o("".slice),
          S =
            ((n = /b*/g),
            s(m, (i = /a/), "a"),
            s(m, n, "a"),
            0 !== i.lastIndex || 0 !== n.lastIndex),
          E = c.BROKEN_CARET,
          T = void 0 !== /()??/.exec("")[1];
        (S || T || E || h || f) &&
          (g = function (e) {
            var t,
              r,
              i,
              n,
              o,
              c,
              u,
              h = this,
              f = p(h),
              O = a(e),
              C = f.raw;
            if (C)
              return (
                (C.lastIndex = h.lastIndex),
                (t = s(g, C, O)),
                (h.lastIndex = C.lastIndex),
                t
              );
            var L = f.groups,
              A = E && h.sticky,
              k = s(l, h),
              _ = h.source,
              M = 0,
              P = O;
            if (
              (A &&
                ((k = x(k, "y", "")),
                -1 === y(k, "g") && (k += "g"),
                (P = w(O, h.lastIndex)),
                h.lastIndex > 0 &&
                  (!h.multiline ||
                    (h.multiline && "\n" !== b(O, h.lastIndex - 1))) &&
                  ((_ = "(?: " + _ + ")"), (P = " " + P), M++),
                (r = new RegExp("^(?:" + _ + ")", k))),
              T && (r = new RegExp("^" + _ + "$(?!\\s)", k)),
              S && (i = h.lastIndex),
              (n = s(m, A ? r : h, P)),
              A
                ? n
                  ? ((n.input = w(n.input, M)),
                    (n[0] = w(n[0], M)),
                    (n.index = h.lastIndex),
                    (h.lastIndex += n[0].length))
                  : (h.lastIndex = 0)
                : S &&
                  n &&
                  (h.lastIndex = h.global ? n.index + n[0].length : i),
              T &&
                n &&
                n.length > 1 &&
                s(v, n[0], r, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (n[o] = void 0);
                }),
              n && L)
            )
              for (n.groups = c = d(null), o = 0; o < L.length; o++)
                c[(u = L[o])[0]] = n[u[1]];
            return n;
          }),
          (e.exports = g);
      },
      8383: (e, t, r) => {
        "use strict";
        var i = r(1474);
        e.exports = function () {
          var e = i(this),
            t = "";
          return (
            e.hasIndices && (t += "d"),
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      6558: (e, t, r) => {
        var i = r(6183),
          n = r(8454).RegExp,
          s = i(function () {
            var e = n("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            s ||
            i(function () {
              return !n("a", "y").sticky;
            }),
          a =
            s ||
            i(function () {
              var e = n("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: s };
      },
      7672: (e, t, r) => {
        var i = r(6183),
          n = r(8454).RegExp;
        e.exports = i(function () {
          var e = n(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      9729: (e, t, r) => {
        var i = r(6183),
          n = r(8454).RegExp;
        e.exports = i(function () {
          var e = n("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      7431: (e, t, r) => {
        var i = r(8454).TypeError;
        e.exports = function (e) {
          if (null == e) throw i("Can't call method on " + e);
          return e;
        };
      },
      7852: (e, t, r) => {
        var i = r(8454),
          n = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            n(i, e, { value: t, configurable: !0, writable: !0 });
          } catch (r) {
            i[e] = t;
          }
          return t;
        };
      },
      820: (e, t, r) => {
        var i = r(9168).f,
          n = r(8281),
          s = r(8149)("toStringTag");
        e.exports = function (e, t, r) {
          e && !r && (e = e.prototype),
            e && !n(e, s) && i(e, s, { configurable: !0, value: t });
        };
      },
      8873: (e, t, r) => {
        var i = r(1748),
          n = r(9059),
          s = i("keys");
        e.exports = function (e) {
          return s[e] || (s[e] = n(e));
        };
      },
      2047: (e, t, r) => {
        var i = r(8454),
          n = r(7852),
          s = "__core-js_shared__",
          o = i[s] || n(s, {});
        e.exports = o;
      },
      1748: (e, t, r) => {
        var i = r(8977),
          n = r(2047);
        (e.exports = function (e, t) {
          return n[e] || (n[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.22.4",
          mode: i ? "pure" : "global",
          copyright: "?? 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      7321: (e, t, r) => {
        var i = r(1768),
          n = r(8037),
          s = r(7655),
          o = r(7431),
          a = i("".charAt),
          l = i("".charCodeAt),
          c = i("".slice),
          u = function (e) {
            return function (t, r) {
              var i,
                u,
                d = s(o(t)),
                p = n(r),
                h = d.length;
              return p < 0 || p >= h
                ? e
                  ? ""
                  : void 0
                : (i = l(d, p)) < 55296 ||
                  i > 56319 ||
                  p + 1 === h ||
                  (u = l(d, p + 1)) < 56320 ||
                  u > 57343
                ? e
                  ? a(d, p)
                  : i
                : e
                ? c(d, p, p + 2)
                : u - 56320 + ((i - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: u(!1), charAt: u(!0) };
      },
      9749: (e, t, r) => {
        var i = r(1768),
          n = r(7431),
          s = r(7655),
          o = r(8342),
          a = i("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          u = RegExp(l + l + "*$"),
          d = function (e) {
            return function (t) {
              var r = s(n(t));
              return 1 & e && (r = a(r, c, "")), 2 & e && (r = a(r, u, "")), r;
            };
          };
        e.exports = { start: d(1), end: d(2), trim: d(3) };
      },
      9623: (e, t, r) => {
        var i = r(8037),
          n = Math.max,
          s = Math.min;
        e.exports = function (e, t) {
          var r = i(e);
          return r < 0 ? n(r + t, 0) : s(r, t);
        };
      },
      3206: (e, t, r) => {
        var i = r(7530),
          n = r(7431);
        e.exports = function (e) {
          return i(n(e));
        };
      },
      8037: (e) => {
        var t = Math.ceil,
          r = Math.floor;
        e.exports = function (e) {
          var i = +e;
          return i != i || 0 === i ? 0 : (i > 0 ? r : t)(i);
        };
      },
      3917: (e, t, r) => {
        var i = r(8037),
          n = Math.min;
        e.exports = function (e) {
          return e > 0 ? n(i(e), 9007199254740991) : 0;
        };
      },
      9473: (e, t, r) => {
        var i = r(8454),
          n = r(7431),
          s = i.Object;
        e.exports = function (e) {
          return s(n(e));
        };
      },
      3948: (e, t, r) => {
        var i = r(8454),
          n = r(4552),
          s = r(5896),
          o = r(1527),
          a = r(9827),
          l = r(6891),
          c = r(8149),
          u = i.TypeError,
          d = c("toPrimitive");
        e.exports = function (e, t) {
          if (!s(e) || o(e)) return e;
          var r,
            i = a(e, d);
          if (i) {
            if (
              (void 0 === t && (t = "default"), (r = n(i, e, t)), !s(r) || o(r))
            )
              return r;
            throw u("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), l(e, t);
        };
      },
      2988: (e, t, r) => {
        var i = r(3948),
          n = r(1527);
        e.exports = function (e) {
          var t = i(e, "string");
          return n(t) ? t : t + "";
        };
      },
      4823: (e, t, r) => {
        var i = {};
        (i[r(8149)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(i));
      },
      7655: (e, t, r) => {
        var i = r(8454),
          n = r(9225),
          s = i.String;
        e.exports = function (e) {
          if ("Symbol" === n(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return s(e);
        };
      },
      180: (e, t, r) => {
        var i = r(8454).String;
        e.exports = function (e) {
          try {
            return i(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9059: (e, t, r) => {
        var i = r(1768),
          n = 0,
          s = Math.random(),
          o = i((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++n + s, 36);
        };
      },
      4746: (e, t, r) => {
        var i = r(323);
        e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8654: (e, t, r) => {
        var i = r(723),
          n = r(6183);
        e.exports =
          i &&
          n(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      8149: (e, t, r) => {
        var i = r(8454),
          n = r(1748),
          s = r(8281),
          o = r(9059),
          a = r(323),
          l = r(4746),
          c = n("wks"),
          u = i.Symbol,
          d = u && u.for,
          p = l ? u : (u && u.withoutSetter) || o;
        e.exports = function (e) {
          if (!s(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && s(u, e) ? (c[e] = u[e]) : (c[e] = l && d ? d(t) : p(t));
          }
          return c[e];
        };
      },
      8342: (e) => {
        e.exports = "\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff";
      },
      8165: (e, t, r) => {
        "use strict";
        var i = r(4761),
          n = r(528).filter;
        i(
          { target: "Array", proto: !0, forced: !r(4820)("filter") },
          {
            filter: function (e) {
              return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      9399: (e, t, r) => {
        "use strict";
        var i = r(4761),
          n = r(1269);
        i(
          { target: "Array", proto: !0, forced: [].forEach != n },
          { forEach: n }
        );
      },
      7543: (e, t, r) => {
        "use strict";
        var i = r(3206),
          n = r(9256),
          s = r(6126),
          o = r(1030),
          a = r(9168).f,
          l = r(7583),
          c = r(8977),
          u = r(723),
          d = "Array Iterator",
          p = o.set,
          h = o.getterFor(d);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: d, target: i(e), index: 0, kind: t });
          },
          function () {
            var e = h(this),
              t = e.target,
              r = e.kind,
              i = e.index++;
            return !t || i >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == r
              ? { value: i, done: !1 }
              : "values" == r
              ? { value: t[i], done: !1 }
              : { value: [i, t[i]], done: !1 };
          },
          "values"
        );
        var f = (s.Arguments = s.Array);
        if (
          (n("keys"), n("values"), n("entries"), !c && u && "values" !== f.name)
        )
          try {
            a(f, "name", { value: "values" });
          } catch (e) {}
      },
      7985: (e, t, r) => {
        "use strict";
        var i = r(4761),
          n = r(6589).left,
          s = r(1923),
          o = r(4324),
          a = r(7594);
        i(
          {
            target: "Array",
            proto: !0,
            forced: !s("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return n(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6618: (e, t, r) => {
        var i = r(723),
          n = r(4530).EXISTS,
          s = r(1768),
          o = r(9168).f,
          a = Function.prototype,
          l = s(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          u = s(c.exec);
        i &&
          !n &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return u(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      7692: (e, t, r) => {
        var i = r(4761),
          n = r(4727);
        i(
          { target: "Object", stat: !0, arity: 2, forced: Object.assign !== n },
          { assign: n }
        );
      },
      2352: (e, t, r) => {
        var i = r(4823),
          n = r(2054),
          s = r(4117);
        i || n(Object.prototype, "toString", s, { unsafe: !0 });
      },
      4249: (e, t, r) => {
        var i = r(4761),
          n = r(8513);
        i({ global: !0, forced: parseInt != n }, { parseInt: n });
      },
      9989: (e, t, r) => {
        "use strict";
        var i = r(4761),
          n = r(5510);
        i({ target: "RegExp", proto: !0, forced: /./.exec !== n }, { exec: n });
      },
      3344: (e, t, r) => {
        "use strict";
        var i = r(7321).charAt,
          n = r(7655),
          s = r(1030),
          o = r(7583),
          a = "String Iterator",
          l = s.set,
          c = s.getterFor(a);
        o(
          String,
          "String",
          function (e) {
            l(this, { type: a, string: n(e), index: 0 });
          },
          function () {
            var e,
              t = c(this),
              r = t.string,
              n = t.index;
            return n >= r.length
              ? { value: void 0, done: !0 }
              : ((e = i(r, n)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      8307: (e, t, r) => {
        "use strict";
        var i = r(4552),
          n = r(9696),
          s = r(1474),
          o = r(3917),
          a = r(7655),
          l = r(7431),
          c = r(9827),
          u = r(3615),
          d = r(8734);
        n("match", function (e, t, r) {
          return [
            function (t) {
              var r = l(this),
                n = null == t ? void 0 : c(t, e);
              return n ? i(n, t, r) : new RegExp(t)[e](a(r));
            },
            function (e) {
              var i = s(this),
                n = a(e),
                l = r(t, i, n);
              if (l.done) return l.value;
              if (!i.global) return d(i, n);
              var c = i.unicode;
              i.lastIndex = 0;
              for (var p, h = [], f = 0; null !== (p = d(i, n)); ) {
                var v = a(p[0]);
                (h[f] = v),
                  "" === v && (i.lastIndex = u(n, o(i.lastIndex), c)),
                  f++;
              }
              return 0 === f ? null : h;
            },
          ];
        });
      },
      4390: (e, t, r) => {
        "use strict";
        var i = r(6218),
          n = r(4552),
          s = r(1768),
          o = r(9696),
          a = r(6183),
          l = r(1474),
          c = r(6282),
          u = r(8037),
          d = r(3917),
          p = r(7655),
          h = r(7431),
          f = r(3615),
          v = r(9827),
          m = r(4742),
          g = r(8734),
          b = r(8149)("replace"),
          y = Math.max,
          x = Math.min,
          w = s([].concat),
          S = s([].push),
          E = s("".indexOf),
          T = s("".slice),
          O = "$0" === "a".replace(/./, "$0"),
          C = !!/./[b] && "" === /./[b]("a", "$0");
        o(
          "replace",
          function (e, t, r) {
            var s = C ? "$" : "$0";
            return [
              function (e, r) {
                var i = h(this),
                  s = null == e ? void 0 : v(e, b);
                return s ? n(s, e, i, r) : n(t, p(i), e, r);
              },
              function (e, n) {
                var o = l(this),
                  a = p(e);
                if (
                  "string" == typeof n &&
                  -1 === E(n, s) &&
                  -1 === E(n, "$<")
                ) {
                  var h = r(t, o, a, n);
                  if (h.done) return h.value;
                }
                var v = c(n);
                v || (n = p(n));
                var b = o.global;
                if (b) {
                  var O = o.unicode;
                  o.lastIndex = 0;
                }
                for (var C = []; ; ) {
                  var L = g(o, a);
                  if (null === L) break;
                  if ((S(C, L), !b)) break;
                  "" === p(L[0]) && (o.lastIndex = f(a, d(o.lastIndex), O));
                }
                for (var A, k = "", _ = 0, M = 0; M < C.length; M++) {
                  for (
                    var P = p((L = C[M])[0]),
                      N = y(x(u(L.index), a.length), 0),
                      z = [],
                      I = 1;
                    I < L.length;
                    I++
                  )
                    S(z, void 0 === (A = L[I]) ? A : String(A));
                  var D = L.groups;
                  if (v) {
                    var $ = w([P], z, N, a);
                    void 0 !== D && S($, D);
                    var j = p(i(n, void 0, $));
                  } else j = m(P, a, N, z, D, n);
                  N >= _ && ((k += T(a, _, N) + j), (_ = N + P.length));
                }
                return k + T(a, _);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !O ||
            C
        );
      },
      9703: (e, t, r) => {
        "use strict";
        var i,
          n = r(8454),
          s = r(1768),
          o = r(6367),
          a = r(6582),
          l = r(6645),
          c = r(7790),
          u = r(5896),
          d = r(6662),
          p = r(1030).enforce,
          h = r(4404),
          f = !n.ActiveXObject && "ActiveXObject" in n,
          v = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          m = l("WeakMap", v, c);
        if (h && f) {
          (i = c.getConstructor(v, "WeakMap", !0)), a.enable();
          var g = m.prototype,
            b = s(g.delete),
            y = s(g.has),
            x = s(g.get),
            w = s(g.set);
          o(g, {
            delete: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  b(this, e) || t.frozen.delete(e)
                );
              }
              return b(this, e);
            },
            has: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) || t.frozen.has(e)
                );
              }
              return y(this, e);
            },
            get: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) ? x(this, e) : t.frozen.get(e)
                );
              }
              return x(this, e);
            },
            set: function (e, t) {
              if (u(e) && !d(e)) {
                var r = p(this);
                r.frozen || (r.frozen = new i()),
                  y(this, e) ? w(this, e, t) : r.frozen.set(e, t);
              } else w(this, e, t);
              return this;
            },
          });
        }
      },
      7323: (e, t, r) => {
        r(9703);
      },
      3542: (e, t, r) => {
        var i = r(8454),
          n = r(6181),
          s = r(2387),
          o = r(1269),
          a = r(1501),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in n) n[c] && l(i[c] && i[c].prototype);
        l(s);
      },
      4079: (e, t, r) => {
        var i = r(8454),
          n = r(6181),
          s = r(2387),
          o = r(7543),
          a = r(1501),
          l = r(8149),
          c = l("iterator"),
          u = l("toStringTag"),
          d = o.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== d)
                try {
                  a(e, c, d);
                } catch (t) {
                  e[c] = d;
                }
              if ((e[u] || a(e, u, t), n[t]))
                for (var r in o)
                  if (e[r] !== o[r])
                    try {
                      a(e, r, o[r]);
                    } catch (t) {
                      e[r] = o[r];
                    }
            }
          };
        for (var h in n) p(i[h] && i[h].prototype, h);
        p(s, "DOMTokenList");
      },
    },
    t = {};
  function r(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var s = (t[i] = { exports: {} });
    return e[i].call(s.exports, s, s.exports, r), s.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var i in t)
        r.o(t, i) &&
          !r.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = {};
      let t = !0,
        i = (e = 500) => {
          document.documentElement.classList.contains("lock") ? n(e) : s(e);
        },
        n = (e = 500) => {
          let r = document.querySelector("body");
          if (t) {
            let i = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < i.length; e++) {
                i[e].style.paddingRight = "0px";
              }
              (r.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (t = !1),
              setTimeout(function () {
                t = !0;
              }, e);
          }
        },
        s = (e = 500) => {
          let r = document.querySelector("body");
          if (t) {
            let i = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (r.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (t = !1),
              setTimeout(function () {
                t = !0;
              }, e);
          }
        };
      function o(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function a(e) {
        return e.filter(function (e, t, r) {
          return r.indexOf(e) === t;
        });
      }
      e.popup = new (class {
        constructor(e) {
          let t = {
            logging: !0,
            init: !0,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-youtube",
            youtubePlaceAttribute: "data-youtube-place",
            setAutoplayYoutube: !0,
            classes: {
              popup: "popup",
              popupContent: "popup__content",
              popupActive: "popup_show",
              bodyActive: "popup-show",
            },
            focusCatch: !0,
            closeEsc: !0,
            bodyLock: !0,
            bodyLockDelay: 500,
            hashSettings: { location: !0, goHash: !0 },
            on: {
              beforeOpen: function () {},
              afterOpen: function () {},
              beforeClose: function () {},
              afterClose: function () {},
            },
          };
          (this.isOpen = !1),
            (this.targetOpen = { selector: !1, element: !1 }),
            (this.previousOpen = { selector: !1, element: !1 }),
            (this.lastClosed = { selector: !1, element: !1 }),
            (this._dataValue = !1),
            (this.hash = !1),
            (this._reopen = !1),
            (this._selectorOpen = !1),
            (this.lastFocusEl = !1),
            (this._focusEl = [
              "a[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "button:not([disabled]):not([aria-hidden])",
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "area[href]",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this.options = {
              ...t,
              ...e,
              classes: { ...t.classes, ...e?.classes },
              hashSettings: { ...t.hashSettings, ...e?.hashSettings },
              on: { ...t.on, ...e?.on },
            }),
            this.options.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("??????????????????"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function (e) {
              const t = e.target.closest(
                `[${this.options.attributeOpenButton}]`
              );
              if (t)
                return (
                  e.preventDefault(),
                  (this._dataValue = t.getAttribute(
                    this.options.attributeOpenButton
                  )
                    ? t.getAttribute(this.options.attributeOpenButton)
                    : "error"),
                  "error" !== this._dataValue
                    ? (this.isOpen || (this.lastFocusEl = t),
                      (this.targetOpen.selector = `${this._dataValue}`),
                      (this._selectorOpen = !0),
                      void this.open())
                    : void this.popupLogging(
                        `???? ????, ???? ???????????????? ?????????????? ?? ${t.classList}`
                      )
                );
              return e.target.closest(
                `[${this.options.attributeCloseButton}]`
              ) ||
                (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                  this.isOpen)
                ? (e.preventDefault(), void this.close())
                : void 0;
            }.bind(this)
          ),
            document.addEventListener(
              "keydown",
              function (e) {
                if (
                  this.options.closeEsc &&
                  27 == e.which &&
                  "Escape" === e.code &&
                  this.isOpen
                )
                  return e.preventDefault(), void this.close();
                this.options.focusCatch &&
                  9 == e.which &&
                  this.isOpen &&
                  this._focusCatch(e);
              }.bind(this)
            ),
            this.options.hashSettings.goHash &&
              (window.addEventListener(
                "hashchange",
                function () {
                  window.location.hash
                    ? this._openToHash()
                    : this.close(this.targetOpen.selector);
                }.bind(this)
              ),
              window.addEventListener(
                "load",
                function () {
                  window.location.hash && this._openToHash();
                }.bind(this)
              ));
        }
        open(e) {
          if (
            (e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              )
            ) {
              const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                  this.options.youtubeAttribute
                )}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const r = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t.setAttribute("allow", `${r}; encrypted-media`),
                t.setAttribute("src", e),
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                  this.targetOpen.element
                    .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                    .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.body.classList.add(this.options.classes.bodyActive),
              this._reopen ? (this._reopen = !1) : i(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("???????????? ??????????");
          } else
            this.popupLogging(
              "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
            );
        }
        close(e) {
          e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            (this.previousOpen.selector = e),
            this.isOpen &&
              t &&
              (this.options.on.beforeClose(this),
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              ) &&
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                (this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ).innerHTML = ""),
              this.previousOpen.element.classList.remove(
                this.options.classes.popupActive
              ),
              this.previousOpen.element.setAttribute("aria-hidden", "true"),
              this._reopen ||
                (document.body.classList.remove(
                  this.options.classes.bodyActive
                ),
                i(),
                (this.isOpen = !1)),
              this._removeHash(),
              this._selectorOpen &&
                ((this.lastClosed.selector = this.previousOpen.selector),
                (this.lastClosed.element = this.previousOpen.element)),
              this.options.on.afterClose(this),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.popupLogging("???????????? ??????????"));
        }
        _getHash() {
          this.options.hashSettings.location &&
            (this.hash = this.targetOpen.selector.includes("#")
              ? this.targetOpen.selector
              : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          )
            ? `.${window.location.hash.replace("#", "")}`
            : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e}"]`
          ) &&
            e &&
            this.open(e);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
          const t = this.targetOpen.element.querySelectorAll(this._focusEl),
            r = Array.prototype.slice.call(t),
            i = r.indexOf(document.activeElement);
          e.shiftKey &&
            0 === i &&
            (r[r.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              i !== r.length - 1 ||
              (r[0].focus(), e.preventDefault());
        }
        _focusTrap() {
          const e = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl
            ? this.lastFocusEl.focus()
            : e[0].focus();
        }
        popupLogging(e) {
          this.options.logging && o(`[??????????????]: ${e}`);
        }
      })({});
      var l = r(4211);
      function c(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function u(e = {}, t = {}) {
        Object.keys(t).forEach((r) => {
          void 0 === e[r]
            ? (e[r] = t[r])
            : c(t[r]) &&
              c(e[r]) &&
              Object.keys(t[r]).length > 0 &&
              u(e[r], t[r]);
        });
      }
      !(function () {
        const e = document.querySelectorAll("[data-range]");
        e.length &&
          e.forEach((e) => {
            const t = e.querySelector("[data-range-from]"),
              r = e.querySelector("[data-range-to]"),
              i = e.querySelector("[data-range-item]");
            l.create(i, {
              start: [Number(t.value), Number(r.value)],
              connect: !0,
              tooltips: [!0, !0],
              range: {
                min: [Number(t.dataset.rangeFrom)],
                max: [Number(r.dataset.rangeTo)],
              },
            }),
              i.noUiSlider.on("update", function (e, i) {
                (t.value = e[i]), (r.value = e[i]);
              });
          });
      })();
      const d = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function p() {
        const e = "undefined" != typeof document ? document : {};
        return u(e, d), e;
      }
      const h = {
        document: d,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function f() {
        const e = "undefined" != typeof window ? window : {};
        return u(e, h), e;
      }
      class v extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function m(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...m(e)) : t.push(e);
          }),
          t
        );
      }
      function g(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function b(e, t) {
        const r = f(),
          i = p();
        let n = [];
        if (!t && e instanceof v) return e;
        if (!e) return new v(n);
        if ("string" == typeof e) {
          const r = e.trim();
          if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let e = "div";
            0 === r.indexOf("<li") && (e = "ul"),
              0 === r.indexOf("<tr") && (e = "tbody"),
              (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (e = "tr"),
              0 === r.indexOf("<tbody") && (e = "table"),
              0 === r.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = r;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const r = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) r.push(i[e]);
              return r;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === r || e === i) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof v) return e;
          n = e;
        }
        return new v(
          (function (e) {
            const t = [];
            for (let r = 0; r < e.length; r += 1)
              -1 === t.indexOf(e[r]) && t.push(e[r]);
            return t;
          })(n)
        );
      }
      b.fn = v.prototype;
      const y = "resize scroll".split(" ");
      function x(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              y.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : b(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      x("click"),
        x("blur"),
        x("focus"),
        x("focusin"),
        x("focusout"),
        x("keyup"),
        x("keydown"),
        x("keypress"),
        x("submit"),
        x("change"),
        x("mousedown"),
        x("mousemove"),
        x("mouseup"),
        x("mouseenter"),
        x("mouseleave"),
        x("mouseout"),
        x("mouseover"),
        x("touchstart"),
        x("touchend"),
        x("touchmove"),
        x("resize"),
        x("scroll");
      const w = {
        addClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          return (
            g(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = m(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let r = 0; r < this.length; r += 1)
            if (2 === arguments.length) this[r].setAttribute(e, t);
            else
              for (const t in e)
                (this[r][t] = e[t]), this[r].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, r, i, n] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), b(t).is(r))) i.apply(t, n);
            else {
              const e = b(t).parents();
              for (let t = 0; t < e.length; t += 1)
                b(e[t]).is(r) && i.apply(e[t], n);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, n] = e), (r = void 0)),
            n || (n = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (r)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  t.addEventListener(e, s, n);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                  t.addEventListener(e, o, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, r, i, n] = e;
          "function" == typeof e[1] && (([t, i, n] = e), (r = void 0)),
            n || (n = !1);
          const s = t.split(" ");
          for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let o;
              if (
                (!r && s.dom7Listeners
                  ? (o = s.dom7Listeners[t])
                  : r && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const r = o[e];
                  (i && r.listener === i) ||
                  (i &&
                    r.listener &&
                    r.listener.dom7proxy &&
                    r.listener.dom7proxy === i)
                    ? (s.removeEventListener(t, r.proxyListener, n),
                      o.splice(e, 1))
                    : i ||
                      (s.removeEventListener(t, r.proxyListener, n),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = f(),
            r = e[0].split(" "),
            i = e[1];
          for (let n = 0; n < r.length; n += 1) {
            const s = r[n];
            for (let r = 0; r < this.length; r += 1) {
              const n = this[r];
              if (t.CustomEvent) {
                const r = new t.CustomEvent(s, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(r),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function r(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", r));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = f();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = f(),
              t = p(),
              r = this[0],
              i = r.getBoundingClientRect(),
              n = t.body,
              s = r.clientTop || n.clientTop || 0,
              o = r.clientLeft || n.clientLeft || 0,
              a = r === e ? e.scrollY : r.scrollTop,
              l = r === e ? e.scrollX : r.scrollLeft;
            return { top: i.top + a - s, left: i.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const r = f();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, r) => {
                e.apply(t, [t, r]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = f(),
            r = p(),
            i = this[0];
          let n, s;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (n = b(e), s = 0; s < n.length; s += 1)
              if (n[s] === i) return !0;
            return !1;
          }
          if (e === r) return i === r;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof v) {
            for (n = e.nodeType ? [e] : e, s = 0; s < n.length; s += 1)
              if (n[s] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return b([]);
          if (e < 0) {
            const r = t + e;
            return b(r < 0 ? [] : [this[r]]);
          }
          return b([this[e]]);
        },
        append: function (...e) {
          let t;
          const r = p();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = r.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof v)
                for (let r = 0; r < t.length; r += 1) this[e].appendChild(t[r]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = p();
          let r, i;
          for (r = 0; r < this.length; r += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
                this[r].insertBefore(n.childNodes[i], this[r].childNodes[0]);
            } else if (e instanceof v)
              for (i = 0; i < e.length; i += 1)
                this[r].insertBefore(e[i], this[r].childNodes[0]);
            else this[r].insertBefore(e, this[r].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                b(this[0].nextElementSibling).is(e)
                ? b([this[0].nextElementSibling])
                : b([])
              : this[0].nextElementSibling
              ? b([this[0].nextElementSibling])
              : b([])
            : b([]);
        },
        nextAll: function (e) {
          const t = [];
          let r = this[0];
          if (!r) return b([]);
          for (; r.nextElementSibling; ) {
            const i = r.nextElementSibling;
            e ? b(i).is(e) && t.push(i) : t.push(i), (r = i);
          }
          return b(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && b(t.previousElementSibling).is(e)
                ? b([t.previousElementSibling])
                : b([])
              : t.previousElementSibling
              ? b([t.previousElementSibling])
              : b([]);
          }
          return b([]);
        },
        prevAll: function (e) {
          const t = [];
          let r = this[0];
          if (!r) return b([]);
          for (; r.previousElementSibling; ) {
            const i = r.previousElementSibling;
            e ? b(i).is(e) && t.push(i) : t.push(i), (r = i);
          }
          return b(t);
        },
        parent: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1)
            null !== this[r].parentNode &&
              (e
                ? b(this[r].parentNode).is(e) && t.push(this[r].parentNode)
                : t.push(this[r].parentNode));
          return b(t);
        },
        parents: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            let i = this[r].parentNode;
            for (; i; )
              e ? b(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return b(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? b([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            const i = this[r].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return b(t);
        },
        children: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            const i = this[r].children;
            for (let r = 0; r < i.length; r += 1)
              (e && !b(i[r]).is(e)) || t.push(i[r]);
          }
          return b(t);
        },
        filter: function (e) {
          return b(g(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(w).forEach((e) => {
        Object.defineProperty(b.fn, e, { value: w[e], writable: !0 });
      });
      const S = b;
      function E(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function T() {
        return Date.now();
      }
      function O(e, t) {
        void 0 === t && (t = "x");
        const r = f();
        let i, n, s;
        const o = (function (e) {
          const t = f();
          let r;
          return (
            t.getComputedStyle && (r = t.getComputedStyle(e, null)),
            !r && e.currentStyle && (r = e.currentStyle),
            r || (r = e.style),
            r
          );
        })(e);
        return (
          r.WebKitCSSMatrix
            ? ((n = o.transform || o.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new r.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = s.toString().split(","))),
          "x" === t &&
            (n = r.WebKitCSSMatrix
              ? s.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (n = r.WebKitCSSMatrix
              ? s.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          n || 0
        );
      }
      function C(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function L(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function A() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != i && !L(i)) {
            const r = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, n = r.length; t < n; t += 1) {
              const n = r[t],
                s = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== s &&
                s.enumerable &&
                (C(e[n]) && C(i[n])
                  ? i[n].__swiper__
                    ? (e[n] = i[n])
                    : A(e[n], i[n])
                  : !C(e[n]) && C(i[n])
                  ? ((e[n] = {}),
                    i[n].__swiper__ ? (e[n] = i[n]) : A(e[n], i[n]))
                  : (e[n] = i[n]));
            }
          }
        }
        return e;
      }
      function k(e, t, r) {
        e.style.setProperty(t, r);
      }
      function _(e) {
        let { swiper: t, targetPosition: r, side: i } = e;
        const n = f(),
          s = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > s ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          d = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = s + c * (r - s);
            if ((u(p, r) && (p = r), t.wrapperEl.scrollTo({ [i]: p }), u(p, r)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: p });
                }),
                void n.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = n.requestAnimationFrame(d);
          };
        d();
      }
      let M, P, N;
      function z() {
        return (
          M ||
            (M = (function () {
              const e = f(),
                t = p();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const r = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, r);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          M
        );
      }
      function I(e) {
        return (
          void 0 === e && (e = {}),
          P ||
            (P = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const r = z(),
                i = f(),
                n = i.navigator.platform,
                s = t || i.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = i.screen.width,
                l = i.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = s.match(/(iPad).*OS\s([\d_]+)/);
              const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === n;
              let v = "MacIntel" === n;
              return (
                !u &&
                  v &&
                  r.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((u = s.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (v = !1)),
                c && !h && ((o.os = "android"), (o.android = !0)),
                (u || p || d) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          P
        );
      }
      function D() {
        return (
          N ||
            (N = (function () {
              const e = f();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          N
        );
      }
      const $ = {
        on(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = r ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][n](t);
            }),
            i
          );
        },
        once(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
              s[o] = arguments[o];
            t.apply(i, s);
          }
          return (n.__emitterProxy = t), i.on(e, n, r);
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const i = t ? "unshift" : "push";
          return (
            r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed
            ? r
            : r.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (r.eventsListeners[e] = [])
                  : r.eventsListeners[e] &&
                    r.eventsListeners[e].forEach((i, n) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        r.eventsListeners[e].splice(n, 1);
                    });
              }),
              r)
            : r;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, i;
          for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
            s[o] = arguments[o];
          "string" == typeof s[0] || Array.isArray(s[0])
            ? ((t = s[0]), (r = s.slice(1, s.length)), (i = e))
            : ((t = s[0].events), (r = s[0].data), (i = s[0].context || e)),
            r.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...r]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, r);
                  });
            }),
            e
          );
        },
      };
      const j = {
        updateSize: function () {
          const e = this;
          let t, r;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (r =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === r && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (r =
                r -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(r) && (r = 0),
              Object.assign(e, {
                width: t,
                height: r,
                size: e.isHorizontal() ? t : r,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function r(e, r) {
            return parseFloat(e.getPropertyValue(t(r)) || 0);
          }
          const i = e.params,
            { $wrapperEl: n, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            u = n.children(`.${e.params.slideClass}`),
            d = l ? e.virtual.slides.length : u.length;
          let p = [];
          const h = [],
            f = [];
          let v = i.slidesOffsetBefore;
          "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
          let m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          const g = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = i.spaceBetween,
            x = -v,
            w = 0,
            S = 0;
          if (void 0 === s) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * s),
            (e.virtualSize = -y),
            o
              ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (k(e.wrapperEl, "--swiper-centered-offset-before", ""),
              k(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const E = i.grid && i.grid.rows > 1 && e.grid;
          let T;
          E && e.grid.initSlides(d);
          const O =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < d; n += 1) {
            T = 0;
            const o = u.eq(n);
            if (
              (E && e.grid.updateSlide(n, o, d, t), "none" !== o.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                O && (u[n].style[t("width")] = "");
                const s = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = r(s, "width"),
                    t = r(s, "padding-left"),
                    i = r(s, "padding-right"),
                    n = r(s, "margin-left"),
                    a = r(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + n + a;
                  else {
                    const { clientWidth: r, offsetWidth: s } = o[0];
                    T = e + t + i + n + a + (s - r);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  i.roundLengths && (T = Math.floor(T));
              } else
                (T = (s - (i.slidesPerView - 1) * y) / i.slidesPerView),
                  i.roundLengths && (T = Math.floor(T)),
                  u[n] && (u[n].style[t("width")] = `${T}px`);
              u[n] && (u[n].swiperSlideSize = T),
                f.push(T),
                i.centeredSlides
                  ? ((x = x + T / 2 + w / 2 + y),
                    0 === w && 0 !== n && (x = x - s / 2 - y),
                    0 === n && (x = x - s / 2 - y),
                    Math.abs(x) < 0.001 && (x = 0),
                    i.roundLengths && (x = Math.floor(x)),
                    S % i.slidesPerGroup == 0 && p.push(x),
                    h.push(x))
                  : (i.roundLengths && (x = Math.floor(x)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(x),
                    h.push(x),
                    (x = x + T + y)),
                (e.virtualSize += T + y),
                (w = T),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + m),
            o &&
              a &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(T, p, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < p.length; r += 1) {
              let n = p[r];
              i.roundLengths && (n = Math.floor(n)),
                p[r] <= e.virtualSize - s && t.push(n);
            }
            (p = t),
              Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - s);
          }
          if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
            const r = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            u.filter((e, t) => !i.cssMode || t !== u.length - 1).css({
              [r]: `${y}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - s;
            p = p.map((e) => (e < 0 ? -v : e > t ? t + m : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              p.forEach((e, r) => {
                p[r] = e - t;
              }),
                h.forEach((e, r) => {
                  h[r] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: u,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            k(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              k(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + r));
          }
          if (
            (d !== c && e.emit("slidesLengthChange"),
            p.length !== g &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              r = e.$el.hasClass(t);
            d <= i.maxBackfaceHiddenSlides
              ? r || e.$el.addClass(t)
              : r && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            r = [],
            i = t.virtual && t.params.virtual.enabled;
          let n,
            s = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                r.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                r.push(o(e));
              }
          else r.push(o(t.activeIndex));
          for (n = 0; n < r.length; n += 1)
            if (void 0 !== r[n]) {
              const e = r[n].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset = e.isHorizontal()
              ? t[r].offsetLeft
              : t[r].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            r = t.params,
            { slides: i, rtlTranslate: n, snapGrid: s } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          n && (o = e),
            i.removeClass(r.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const a = i[e];
            let l = a.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (o + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + r.spaceBetween),
              u =
                (o - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + r.spaceBetween),
              d = -(o - l),
              p = d + t.slidesSizesGrid[e];
            ((d >= 0 && d < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(r.slideVisibleClass)),
              (a.progress = n ? -c : c),
              (a.originalProgress = n ? -u : u);
          }
          t.visibleSlides = S(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * r) || 0;
          }
          const r = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === i
            ? ((n = 0), (s = !0), (o = !0))
            : ((n = (e - t.minTranslate()) / i), (s = n <= 0), (o = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: s, isEnd: o }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: r,
              $wrapperEl: i,
              activeIndex: n,
              realIndex: s,
            } = e,
            o = e.virtual && r.virtual.enabled;
          let a;
          t.removeClass(
            `${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${r.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            a.addClass(r.slideActiveClass),
            r.loop &&
              (a.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(r.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${r.slideClass}`)
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(r.slideNextClass));
          let c = a
            .prevAll(`.${r.slideClass}`)
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(r.slidePrevClass)),
            r.loop &&
              (l.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${
                        r.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicateNextClass)
                : i
                    .children(
                      `.${r.slideClass}.${
                        r.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicateNextClass),
              c.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${
                        r.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${r.slideClass}.${
                        r.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: n,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            u = e;
          if (void 0 === u) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (u = e)
                  : r >= i[e] && r < i[e + 1] && (u = e + 1)
                : r >= i[e] && (u = e);
            s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }
          if (n.indexOf(r) >= 0) c = n.indexOf(r);
          else {
            const e = Math.min(s.slidesPerGroupSkip, u);
            c = e + Math.floor((u - e) / s.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), u === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const d = parseInt(
            t.slides.eq(u).attr("data-swiper-slide-index") || u,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: d,
            previousIndex: o,
            activeIndex: u,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            r = t.params,
            i = S(e).closest(`.${r.slideClass}`)[0];
          let n,
            s = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (s = !0), (n = e);
                break;
              }
          if (!i || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  S(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            r.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const R = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: r,
            translate: i,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return r ? -i : i;
          if (t.cssMode) return i;
          let s = O(n[0], e);
          return r && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const r = this,
            {
              rtlTranslate: i,
              params: n,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = r;
          let l,
            c = 0,
            u = 0;
          r.isHorizontal() ? (c = i ? -e : e) : (u = e),
            n.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
            n.cssMode
              ? (o[r.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  r.isHorizontal() ? -c : -u)
              : n.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${u}px, 0px)`),
            (r.previousTranslate = r.translate),
            (r.translate = r.isHorizontal() ? c : u);
          const d = r.maxTranslate() - r.minTranslate();
          (l = 0 === d ? 0 : (e - r.minTranslate()) / d),
            l !== a && r.updateProgress(e),
            r.emit("setTranslate", r.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, r, i, n) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            void 0 === i && (i = !0);
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let u;
          if (
            ((u = i && e > l ? l : i && e < c ? c : e),
            s.updateProgress(u),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!s.support.smoothScroll)
                return (
                  _({
                    swiper: s,
                    targetPosition: -u,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(u),
                r &&
                  (s.emit("beforeTransitionStart", t, n),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(u),
                r &&
                  (s.emit("beforeTransitionStart", t, n),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        r && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function W(e) {
        let { swiper: t, runCallbacks: r, direction: i, step: n } = e;
        const { activeIndex: s, previousIndex: o } = t;
        let a = i;
        if (
          (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
          t.emit(`transition${n}`),
          r && s !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`),
            "next" === a
              ? t.emit(`slideNextTransition${n}`)
              : t.emit(`slidePrevTransition${n}`);
        }
      }
      const V = {
        slideTo: function (e, t, r, i, n) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!f && !i && !n)
          )
            return !1;
          const v = Math.min(s.params.slidesPerGroupSkip, o);
          let m = v + Math.floor((o - v) / s.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (d || a.initialSlide || 0) === (u || 0) &&
              r &&
              s.emit("beforeSlideChangeStart");
          const g = -l[m];
          if ((s.updateProgress(g), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * g),
                r = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= r && t < i - (i - r) / 2
                  ? (o = e)
                  : t >= r && t < i && (o = e + 1)
                : t >= r && (o = e);
            }
          if (s.initialized && o !== d) {
            if (!s.allowSlideNext && g < s.translate && g < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              g > s.translate &&
              g > s.maxTranslate() &&
              (d || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > d ? "next" : o < d ? "prev" : "reset"),
            (p && -g === s.translate) || (!p && g === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(g),
              "reset" !== b && (s.transitionStart(r, b), s.transitionEnd(r, b)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              r = p ? g : -g;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = r),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  _({ swiper: s, targetPosition: r, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(g),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(r, b),
            0 === t
              ? s.transitionEnd(r, b)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(r, b));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, r, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0);
          const n = this;
          let s = e;
          return n.params.loop && (s += n.loopedSlides), n.slideTo(s, t, r, i);
        },
        slideNext: function (e, t, r) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: n, enabled: s, params: o } = i;
          if (!s) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (n && o.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return o.rewind && i.isEnd
            ? i.slideTo(0, e, t, r)
            : i.slideTo(i.activeIndex + l, e, t, r);
        },
        slidePrev: function (e, t, r) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: n,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (n.loop) {
            if (s && n.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const d = u(l ? i.translate : -i.translate),
            p = o.map((e) => u(e));
          let h = o[p.indexOf(d) - 1];
          if (void 0 === h && n.cssMode) {
            let e;
            o.forEach((t, r) => {
              d >= t && (e = r);
            }),
              void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== h &&
              ((f = a.indexOf(h)),
              f < 0 && (f = i.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            n.rewind && i.isBeginning)
          ) {
            const n =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(n, e, t, r);
          }
          return i.slideTo(f, e, t, r);
        },
        slideReset: function (e, t, r) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, r)
          );
        },
        slideToClosest: function (e, t, r, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const n = this;
          let s = n.activeIndex;
          const o = Math.min(n.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[a]) {
            const e = n.snapGrid[a];
            l - e > (n.snapGrid[a + 1] - e) * i &&
              (s += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[a - 1];
            l - e <= (n.snapGrid[a] - e) * i && (s -= n.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, n.slidesGrid.length - 1)),
            n.slideTo(s, e, t, r)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: r } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              S(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - i / 2 ||
                  s > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (s = r
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    E(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - i
                ? (e.loopFix(),
                  (s = r
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  E(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      const B = {
        loopCreate: function () {
          const e = this,
            t = p(),
            { params: r, $wrapperEl: i } = e,
            n = i.children().length > 0 ? S(i.children()[0].parentNode) : i;
          n.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
          let s = n.children(`.${r.slideClass}`);
          if (r.loopFillGroupWithBlank) {
            const e = r.slidesPerGroup - (s.length % r.slidesPerGroup);
            if (e !== r.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = S(t.createElement("div")).addClass(
                  `${r.slideClass} ${r.slideBlankClass}`
                );
                n.append(e);
              }
              s = n.children(`.${r.slideClass}`);
            }
          }
          "auto" !== r.slidesPerView ||
            r.loopedSlides ||
            (r.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(r.loopedSlides || r.slidesPerView, 10)
            )),
            (e.loopedSlides += r.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          const o = [],
            a = [];
          s.each((t, r) => {
            const i = S(t);
            r < e.loopedSlides && a.push(t),
              r < s.length && r >= s.length - e.loopedSlides && o.push(t),
              i.attr("data-swiper-slide-index", r);
          });
          for (let e = 0; e < a.length; e += 1)
            n.append(S(a[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            n.prepend(S(o[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: r,
            loopedSlides: i,
            allowSlidePrev: n,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < i) {
            (l = r.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= r.length - i) {
            (l = -r.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: r } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function q(e) {
        const t = this,
          r = p(),
          i = f(),
          n = t.touchEventsData,
          { params: s, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = S(l.target);
        if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!s.noSwipingClass &&
          "" !== s.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = S(e.path[0]));
        const u = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          d = !(!l.target || !l.target.shadowRoot);
        if (
          s.noSwiping &&
          (d
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(r) {
                    return r && r !== p() && r !== f()
                      ? (r.assignedSlot && (r = r.assignedSlot),
                        r.closest(e) || t(r.getRootNode().host))
                      : null;
                  })(t)
                );
              })(u, l.target)
            : c.closest(u)[0])
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const h = o.currentX,
          v = o.currentY,
          m = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          g = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (m && (h <= g || h >= i.innerWidth - g)) {
          if ("prevent" !== m) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = h),
          (o.startY = v),
          (n.touchStartTime = T()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(n.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
            r.activeElement &&
              S(r.activeElement).is(n.focusableElements) &&
              r.activeElement !== c[0] &&
              r.activeElement.blur();
          const i = e && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function H(e) {
        const t = p(),
          r = this,
          i = r.touchEventsData,
          { params: n, touches: s, rtlTranslate: o, enabled: a } = r;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            r.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          u = "touchmove" === l.type ? c.pageX : l.pageX,
          d = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (s.startX = u), void (s.startY = d);
        if (!r.allowTouchMove)
          return (
            S(l.target).is(i.focusableElements) || (r.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(s, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d,
              }),
              (i.touchStartTime = T()))
            )
          );
        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (r.isVertical()) {
            if (
              (d < s.startY && r.translate <= r.maxTranslate()) ||
              (d > s.startY && r.translate >= r.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (u < s.startX && r.translate <= r.maxTranslate()) ||
            (u > s.startX && r.translate >= r.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          S(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (r.allowClick = !1);
        if (
          (i.allowTouchCallbacks && r.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (s.currentX = u), (s.currentY = d);
        const h = s.currentX - s.startX,
          f = s.currentY - s.startY;
        if (
          r.params.threshold &&
          Math.sqrt(h ** 2 + f ** 2) < r.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (r.isHorizontal() && s.currentY === s.startY) ||
          (r.isVertical() && s.currentX === s.startX)
            ? (i.isScrolling = !1)
            : h * h + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
              (i.isScrolling = r.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (i.isScrolling && r.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (r.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          i.isMoved ||
            (n.loop && !n.cssMode && r.loopFix(),
            (i.startTranslate = r.getTranslate()),
            r.setTransition(0),
            r.animating &&
              r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) ||
              r.setGrabCursor(!0),
            r.emit("sliderFirstMove", l)),
          r.emit("sliderMove", l),
          (i.isMoved = !0);
        let v = r.isHorizontal() ? h : f;
        (s.diff = v),
          (v *= n.touchRatio),
          o && (v = -v),
          (r.swipeDirection = v > 0 ? "prev" : "next"),
          (i.currentTranslate = v + i.startTranslate);
        let m = !0,
          g = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (g = 0),
          v > 0 && i.currentTranslate > r.minTranslate()
            ? ((m = !1),
              n.resistance &&
                (i.currentTranslate =
                  r.minTranslate() -
                  1 +
                  (-r.minTranslate() + i.startTranslate + v) ** g))
            : v < 0 &&
              i.currentTranslate < r.maxTranslate() &&
              ((m = !1),
              n.resistance &&
                (i.currentTranslate =
                  r.maxTranslate() +
                  1 -
                  (r.maxTranslate() - i.startTranslate - v) ** g)),
          m && (l.preventedByNestedSwiper = !0),
          !r.allowSlideNext &&
            "next" === r.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !r.allowSlidePrev &&
            "prev" === r.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          r.allowSlidePrev ||
            r.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(v) > n.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (i.currentTranslate = i.startTranslate),
              void (s.diff = r.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && r.freeMode) ||
            n.watchSlidesProgress) &&
            (r.updateActiveIndex(), r.updateSlidesClasses()),
          r.params.freeMode &&
            n.freeMode.enabled &&
            r.freeMode &&
            r.freeMode.onTouchMove(),
          r.updateProgress(i.currentTranslate),
          r.setTranslate(i.currentTranslate));
      }
      function F(e) {
        const t = this,
          r = t.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: s,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          r.allowTouchCallbacks && t.emit("touchEnd", l),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        )
          return (
            r.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (r.isMoved = !1),
            void (r.startMoving = !1)
          );
        i.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = T(),
          u = c - r.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            u < 300 &&
              c - r.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((r.lastClickTime = T()),
          E(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            r.currentTranslate === r.startTranslate)
        )
          return (
            (r.isTouched = !1), (r.isMoved = !1), void (r.startMoving = !1)
          );
        let d;
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (d = i.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -r.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: d });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? d >= o[e] && d < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
            : d >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        let f = null,
          v = null;
        i.rewind &&
          (t.isBeginning
            ? (v =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (f = 0));
        const m = (d - o[p]) / h,
          g = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? f : p + g)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (m > 1 - i.longSwipesRatio
                ? t.slideTo(p + g)
                : null !== v && m < 0 && Math.abs(m) > i.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(p));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + g)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + g),
              "prev" === t.swipeDirection && t.slideTo(null !== v ? v : p));
        }
      }
      function G() {
        const e = this,
          { params: t, el: r } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: n, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = i),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function U(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function X() {
        const e = this,
          { wrapperEl: t, rtlTranslate: r, enabled: i } = e;
        if (!i) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (n = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          n !== e.progress && e.updateProgress(r ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let Y = !1;
      function K() {}
      const J = (e, t) => {
        const r = p(),
          {
            params: i,
            touchEvents: n,
            el: s,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!i.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[u](n.start, e.onTouchStart, t),
            s[u](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            s[u](n.end, e.onTouchEnd, t),
            n.cancel && s[u](n.cancel, e.onTouchEnd, t);
        } else
          s[u](n.start, e.onTouchStart, !1),
            r[u](n.move, e.onTouchMove, c),
            r[u](n.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          s[u]("click", e.onClick, !0),
          i.cssMode && o[u]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[d](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                G,
                !0
              )
            : e[d]("observerUpdate", G, !0);
      };
      const Z = {
          attachEvents: function () {
            const e = this,
              t = p(),
              { params: r, support: i } = e;
            (e.onTouchStart = q.bind(e)),
              (e.onTouchMove = H.bind(e)),
              (e.onTouchEnd = F.bind(e)),
              r.cssMode && (e.onScroll = X.bind(e)),
              (e.onClick = U.bind(e)),
              i.touch && !Y && (t.addEventListener("touchstart", K), (Y = !0)),
              J(e, "on");
          },
          detachEvents: function () {
            J(this, "off");
          },
        },
        Q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const ee = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: r,
              loopedSlides: i = 0,
              params: n,
              $el: s,
            } = e,
            o = n.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = Q(e, n),
            u = Q(e, l),
            d = n.enabled;
          c && !u
            ? (s.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              u &&
              (s.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                s.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const p = l.direction && l.direction !== n.direction,
            h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
          p && r && e.changeDirection(), A(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            d && !f ? e.disable() : !d && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            h &&
              r &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, r) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !r)))
            return;
          let i = !1;
          const n = f(),
            s = "window" === t ? n.innerHeight : r.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: s, value: a } = o[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
              : a <= r.clientWidth && (i = s);
          }
          return i || "max";
        },
      };
      const te = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: r,
              rtl: i,
              $el: n,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const r = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && r.push(t + i);
                      })
                    : "string" == typeof e && r.push(t + e);
                }),
                r
              );
            })(
              [
                "initialized",
                r.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && r.freeMode.enabled },
                { autoheight: r.autoHeight },
                { rtl: i },
                { grid: r.grid && r.grid.rows > 1 },
                {
                  "grid-column":
                    r.grid && r.grid.rows > 1 && "column" === r.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": r.cssMode },
                { centered: r.cssMode && r.centeredSlides },
                { "watch-progress": r.watchSlidesProgress },
              ],
              r.containerModifierClass
            );
          t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const re = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function ie(e, t) {
        return function (r) {
          void 0 === r && (r = {});
          const i = Object.keys(r)[0],
            n = r[i];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in n
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  A(t, r))
                : A(t, r))
            : A(t, r);
        };
      }
      const ne = {
          eventsEmitter: $,
          update: j,
          translate: R,
          transition: {
            setTransition: function (e, t) {
              const r = this;
              r.params.cssMode || r.$wrapperEl.transition(e),
                r.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const r = this,
                { params: i } = r;
              i.cssMode ||
                (i.autoHeight && r.updateAutoHeight(),
                W({ swiper: r, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const r = this,
                { params: i } = r;
              (r.animating = !1),
                i.cssMode ||
                  (r.setTransition(0),
                  W({ swiper: r, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: V,
          loop: B,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const r =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (r.style.cursor = "move"),
                (r.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Z,
          breakpoints: ee,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: r } = e,
                { slidesOffsetBefore: i } = r;
              if (i) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > r;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: te,
          images: {
            loadImage: function (e, t, r, i, n, s) {
              const o = f();
              let a;
              function l() {
                s && s();
              }
              S(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  r && (a.srcset = r),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let r = 0; r < e.imagesToLoad.length; r += 1) {
                const i = e.imagesToLoad[r];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        se = {};
      class oe {
        constructor() {
          let e, t;
          for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++)
            i[n] = arguments[n];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = A({}, t)),
            e && !t.el && (t.el = e),
            t.el && S(t.el).length > 1)
          ) {
            const e = [];
            return (
              S(t.el).each((r) => {
                const i = A({}, t, { el: r });
                e.push(new oe(i));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = z()),
            (s.device = I({ userAgent: t.userAgent })),
            (s.browser = D()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules);
          const o = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: ie(t, o),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const a = A({}, re, o);
          return (
            (s.params = A({}, a, se, t)),
            (s.originalParams = A({}, s.params)),
            (s.passedParams = A({}, t)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = S),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: e,
              classNames: [],
              slides: S(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: T(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = r.minTranslate(),
            n = (r.maxTranslate() - i) * e + i;
          r.translateTo(n, void 0 === t ? 0 : t),
            r.updateActiveIndex(),
            r.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((r) => {
            const i = e.getSlideClasses(r);
            t.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (r.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let r = a + 1; r < i.length; r += 1)
              i[r] &&
                !e &&
                ((t += i[r].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let r = a - 1; r >= 0; r -= 1)
              i[r] &&
                !e &&
                ((t += i[r].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1) {
              (t ? n[e] + s[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              n[a] - n[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: r } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          r.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || i()),
            r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            i = r.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (r.$el
                .removeClass(`${r.params.containerModifierClass}${i}`)
                .addClass(`${r.params.containerModifierClass}${e}`),
              r.emitContainerClasses(),
              (r.params.direction = e),
              r.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              r.emit("changeDirection"),
              t && r.update()),
            r
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const r = S(e || t.params.el);
          if (!(e = r[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = S(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => r.children(e)), t;
            }
            return r.children(i());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = p().createElement("div");
            (n = S(e)),
              (e.className = t.params.wrapperClass),
              r.append(e),
              r.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: r,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            { params: i, $el: n, $wrapperEl: s, slides: o } = r;
          return (
            void 0 === r.params ||
              r.destroyed ||
              (r.emit("beforeDestroy"),
              (r.initialized = !1),
              r.detachEvents(),
              i.loop && r.loopDestroy(),
              t &&
                (r.removeClasses(),
                n.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              r.emit("destroy"),
              Object.keys(r.eventsListeners).forEach((e) => {
                r.off(e);
              }),
              !1 !== e &&
                ((r.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(r)),
              (r.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          A(se, e);
        }
        static get extendedDefaults() {
          return se;
        }
        static get defaults() {
          return re;
        }
        static installModule(e) {
          oe.prototype.__modules__ || (oe.prototype.__modules__ = []);
          const t = oe.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => oe.installModule(e)), oe)
            : (oe.installModule(e), oe);
        }
      }
      Object.keys(ne).forEach((e) => {
        Object.keys(ne[e]).forEach((t) => {
          oe.prototype[t] = ne[e][t];
        });
      }),
        oe.use([
          function (e) {
            let { swiper: t, on: r, emit: i } = e;
            const n = f();
            let s = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            r("init", () => {
              t.params.resizeObserver && void 0 !== n.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver((e) => {
                    o = n.requestAnimationFrame(() => {
                      const { width: r, height: i } = t;
                      let n = r,
                        s = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: r,
                          contentRect: i,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((n = i ? i.width : (r[0] || r).inlineSize),
                          (s = i ? i.height : (r[0] || r).blockSize));
                      }),
                        (n === r && s === i) || a();
                    });
                  })),
                  s.observe(t.el))
                : (n.addEventListener("resize", a),
                  n.addEventListener("orientationchange", l));
            }),
              r("destroy", () => {
                o && n.cancelAnimationFrame(o),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  n.removeEventListener("resize", a),
                  n.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: r, on: i, emit: n } = e;
            const s = [],
              o = f(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const r = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                      n("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  s.push(r);
              };
            r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      const ae = oe;
      function le() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        !(function () {
          if ((le(), document.querySelector(".swiper-wrapper"))) {
            let e = new ae(".slider-block", {
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              navigation: {
                nextEl: ".about__more .more__item_next",
                prevEl: ".about__more .more__item_prev",
              },
              on: {},
            });
            const t = 5,
              r = document.querySelectorAll(".slider-nav__item"),
              i = document.querySelector(".slider-nav");
            function n() {
              let e = i.children.length;
              e + 1 > t &&
                (document
                  .querySelectorAll(`.slider-nav__item:nth-child(n + ${t + 1})`)
                  .forEach((e) => {
                    e.style.display = "none";
                  }),
                i.insertAdjacentHTML(
                  "beforeend",
                  `\n      <button class="modal-open">?????? ${
                    e - t
                  }</button>\n      `
                ));
            }
            r.forEach((t, r) => {
              t.setAttribute("data-index", r),
                t.addEventListener("click", (t) => {
                  const r = parseInt(t.currentTarget.dataset.index);
                  e.slideTo(r);
                });
            }),
              n();
          }
        })();
      });
      r(9399), r(3542);
      var ce,
        ue = r(1807),
        de = r.n(ue),
        pe =
          (r(8165),
          r(7543),
          r(7692),
          r(2352),
          r(4249),
          r(3344),
          r(7323),
          r(4079),
          r(3096)),
        he = r.n(pe),
        fe = r(1296),
        ve = r.n(fe),
        me = r(773),
        ge = r.n(me),
        be = [],
        ye = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(ce || (ce = {}));
      var xe,
        we = function (e) {
          return Object.freeze(e);
        },
        Se = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), we(this);
        },
        Ee = (function () {
          function e(e, t, r, i) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = r),
              (this.height = i),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              we(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        Te = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        Oe = function (e) {
          if (Te(e)) {
            var t = e.getBBox(),
              r = t.width,
              i = t.height;
            return !r && !i;
          }
          var n = e,
            s = n.offsetWidth,
            o = n.offsetHeight;
          return !(s || o || e.getClientRects().length);
        },
        Ce = function (e) {
          var t, r;
          if (e instanceof Element) return !0;
          var i =
            null ===
              (r =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === r
              ? void 0
              : r.defaultView;
          return !!(i && e instanceof i.Element);
        },
        Le = "undefined" != typeof window ? window : {},
        Ae = new WeakMap(),
        ke = /auto|scroll/,
        _e = /^tb|vertical/,
        Me = /msie|trident/i.test(Le.navigator && Le.navigator.userAgent),
        Pe = function (e) {
          return parseFloat(e || "0");
        },
        Ne = function (e, t, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            new Se((r ? t : e) || 0, (r ? e : t) || 0)
          );
        },
        ze = we({
          devicePixelContentBoxSize: Ne(),
          borderBoxSize: Ne(),
          contentBoxSize: Ne(),
          contentRect: new Ee(0, 0, 0, 0),
        }),
        Ie = function (e, t) {
          if ((void 0 === t && (t = !1), Ae.has(e) && !t)) return Ae.get(e);
          if (Oe(e)) return Ae.set(e, ze), ze;
          var r = getComputedStyle(e),
            i = Te(e) && e.ownerSVGElement && e.getBBox(),
            n = !Me && "border-box" === r.boxSizing,
            s = _e.test(r.writingMode || ""),
            o = !i && ke.test(r.overflowY || ""),
            a = !i && ke.test(r.overflowX || ""),
            l = i ? 0 : Pe(r.paddingTop),
            c = i ? 0 : Pe(r.paddingRight),
            u = i ? 0 : Pe(r.paddingBottom),
            d = i ? 0 : Pe(r.paddingLeft),
            p = i ? 0 : Pe(r.borderTopWidth),
            h = i ? 0 : Pe(r.borderRightWidth),
            f = i ? 0 : Pe(r.borderBottomWidth),
            v = d + c,
            m = l + u,
            g = (i ? 0 : Pe(r.borderLeftWidth)) + h,
            b = p + f,
            y = a ? e.offsetHeight - b - e.clientHeight : 0,
            x = o ? e.offsetWidth - g - e.clientWidth : 0,
            w = n ? v + g : 0,
            S = n ? m + b : 0,
            E = i ? i.width : Pe(r.width) - w - x,
            T = i ? i.height : Pe(r.height) - S - y,
            O = E + v + x + g,
            C = T + m + y + b,
            L = we({
              devicePixelContentBoxSize: Ne(
                Math.round(E * devicePixelRatio),
                Math.round(T * devicePixelRatio),
                s
              ),
              borderBoxSize: Ne(O, C, s),
              contentBoxSize: Ne(E, T, s),
              contentRect: new Ee(d, l, E, T),
            });
          return Ae.set(e, L), L;
        },
        De = function (e, t, r) {
          var i = Ie(e, r),
            n = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
          switch (t) {
            case ce.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case ce.BORDER_BOX:
              return n;
            default:
              return s;
          }
        },
        $e = function (e) {
          var t = Ie(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = we([t.borderBoxSize])),
            (this.contentBoxSize = we([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = we([
              t.devicePixelContentBoxSize,
            ]));
        },
        je = function (e) {
          if (Oe(e)) return 1 / 0;
          for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
          return t;
        },
        Re = function () {
          var e = 1 / 0,
            t = [];
          be.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
              var i = [];
              r.activeTargets.forEach(function (t) {
                var r = new $e(t.target),
                  n = je(t.target);
                i.push(r),
                  (t.lastReportedSize = De(t.target, t.observedBox)),
                  n < e && (e = n);
              }),
                t.push(function () {
                  r.callback.call(r.observer, i, r.observer);
                }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }
          });
          for (var r = 0, i = t; r < i.length; r++) {
            (0, i[r])();
          }
          return e;
        },
        We = function (e) {
          be.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (r) {
                r.isActive() &&
                  (je(r.target) > e
                    ? t.activeTargets.push(r)
                    : t.skippedTargets.push(r));
              });
          });
        },
        Ve = function () {
          var e = 0;
          for (
            We(e);
            be.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = Re()), We(e);
          return (
            be.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: ye }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = ye)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        Be = [],
        qe = function (e) {
          if (!xe) {
            var t = 0,
              r = document.createTextNode("");
            new MutationObserver(function () {
              return Be.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(r, { characterData: !0 }),
              (xe = function () {
                r.textContent = "" + (t ? t-- : t++);
              });
          }
          Be.push(e), xe();
        },
        He = 0,
        Fe = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        Ge = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        Ue = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        Xe = !1,
        Ye = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !Xe)) {
                Xe = !0;
                var r,
                  i = Ue(e);
                (r = function () {
                  var r = !1;
                  try {
                    r = Ve();
                  } finally {
                    if (((Xe = !1), (e = i - Ue()), !He)) return;
                    r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  qe(function () {
                    requestAnimationFrame(r);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, Fe);
                };
              document.body ? t() : Le.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                Ge.forEach(function (t) {
                  return Le.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                Ge.forEach(function (t) {
                  return Le.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        Ke = function (e) {
          !He && e > 0 && Ye.start(), !(He += e) && Ye.stop();
        },
        Je = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || ce.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = De(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                Te(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        Ze = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        Qe = new WeakMap(),
        et = function (e, t) {
          for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
          return -1;
        },
        tt = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var r = new Ze(e, t);
              Qe.set(e, r);
            }),
            (e.observe = function (e, t, r) {
              var i = Qe.get(e),
                n = 0 === i.observationTargets.length;
              et(i.observationTargets, t) < 0 &&
                (n && be.push(i),
                i.observationTargets.push(new Je(t, r && r.box)),
                Ke(1),
                Ye.schedule());
            }),
            (e.unobserve = function (e, t) {
              var r = Qe.get(e),
                i = et(r.observationTargets, t),
                n = 1 === r.observationTargets.length;
              i >= 0 &&
                (n && be.splice(be.indexOf(r), 1),
                r.observationTargets.splice(i, 1),
                Ke(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                r = Qe.get(e);
              r.observationTargets.slice().forEach(function (r) {
                return t.unobserve(e, r.target);
              }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
          );
        })(),
        rt = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            tt.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ce(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              tt.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ce(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              tt.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              tt.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        it =
          (r(7985),
          r(6618),
          r(9989),
          r(8307),
          r(4390),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var r = t.name.match(/data-simplebar-(.+)/);
                if (r) {
                  var i = r[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[i] = !0;
                      break;
                    case "false":
                      e[i] = !1;
                      break;
                    case void 0:
                      e[i] = !0;
                      break;
                    default:
                      e[i] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function nt(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function st(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var ot = null,
        at = null;
      function lt(e) {
        if (null === ot) {
          var t = st(e);
          if (void 0 === t) return (ot = 0);
          var r = t.body,
            i = t.createElement("div");
          i.classList.add("simplebar-hide-scrollbar"), r.appendChild(i);
          var n = i.getBoundingClientRect().right;
          r.removeChild(i), (ot = n);
        }
        return ot;
      }
      de() &&
        window.addEventListener("resize", function () {
          at !== window.devicePixelRatio &&
            ((at = window.devicePixelRatio), (ot = null));
        });
      var ct = (function () {
        function e(t, r) {
          var i = this;
          (this.onScroll = function () {
            var e = nt(i.el);
            i.scrollXTicking ||
              (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
              i.scrollYTicking ||
                (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing &&
                (i.showScrollbar("x"), i.positionScrollbar("x")),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing &&
                (i.showScrollbar("y"), i.positionScrollbar("y")),
                (i.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              i.showScrollbar("x"), i.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                i.isWithinBounds(i.axis.y.track.rect) ||
                  (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.y.isVisible = !1)),
                i.isWithinBounds(i.axis.x.track.rect) ||
                  (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, r;
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (r = i.isWithinBounds(i.axis.y.track.rect)),
                (t || r) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    r &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var r = i.axis[i.draggedAxis].track,
                n = r.rect[i.axis[i.draggedAxis].sizeAttr],
                s = i.axis[i.draggedAxis].scrollbar,
                o = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                a = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === i.draggedAxis ? t.pageY : t.pageX) -
                  r.rect[i.axis[i.draggedAxis].offsetAttr] -
                  i.axis[i.draggedAxis].dragOffset) /
                  (n - s.size)) *
                (o - a);
              "x" === i.draggedAxis &&
                ((l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (n + s.size)
                    : l),
                (l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = st(i.el),
                r = nt(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                i.el.classList.remove(i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = r.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, {}, r)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              {},
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = he()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = he()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = ve()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = ve()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = ge()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var r = t.firstElementChild;
          document.body.appendChild(r);
          var i = r.firstElementChild;
          r.scrollLeft = 0;
          var n = e.getOffset(r),
            s = e.getOffset(i);
          r.scrollLeft = 999;
          var o = e.getOffset(i);
          return {
            isRtlScrollingInverted: n.left !== s.left && s.left - o.left != 0,
            isRtlScrollbarInverted: n.left !== s.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              r = st(e),
              i = nt(e);
            return {
              top: t.top + (i.pageYOffset || r.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || r.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              de() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                r = document.createElement("div");
              t.classList.add(this.classNames.track),
                r.classList.add(this.classNames.scrollbar),
                t.appendChild(r),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = nt(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var r = !1,
              i = t.ResizeObserver || rt;
            (this.resizeObserver = new i(function () {
              r && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                r = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = nt(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              r = this.heightAutoObserverEl.offsetWidth <= 1,
              i = this.contentEl.offsetWidth,
              n = this.contentWrapperEl.offsetWidth,
              s = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = r ? i + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > i),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== s && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > n - d),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - u),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              r = this.contentEl[this.axis[e].scrollSizeAttr],
              i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              n = i / r;
            return (
              (t = Math.max(~~(n * i), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var r = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                s = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (r - n),
                l = ~~((i - s.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (i - s.size)
                  : l),
                (s.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              r = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (r.style.display = "block")
                : (r.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var r = st(this.el),
              i = nt(this.el),
              n = this.axis[t].scrollbar,
              s = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = s - n.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              r.addEventListener("mousemove", this.drag, !0),
              r.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (r.addEventListener("click", this.preventClick, !0),
                  r.addEventListener("dblclick", this.preventClick, !0))
                : (i.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var r = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var i = nt(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var n = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                s = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - n : this.mouseX - n) < 0 ? -1 : 1,
                l = -1 === a ? o - s : o + s;
              !(function e() {
                var n, s;
                -1 === a
                  ? o > l &&
                    ((o -= r.options.clickOnTrackSpeed),
                    r.contentWrapperEl.scrollTo(
                      (((n = {})[r.axis[t].offsetAttr] = o), n)
                    ),
                    i.requestAnimationFrame(e))
                  : o < l &&
                    ((o += r.options.clickOnTrackSpeed),
                    r.contentWrapperEl.scrollTo(
                      (((s = {})[r.axis[t].offsetAttr] = o), s)
                    ),
                    i.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : lt(this.el);
            } catch (e) {
              return lt(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = nt(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var r =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return r.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (ct.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (ct.instances = new WeakMap()),
        (ct.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  ct.instances.has(e) ||
                  new ct(e, it(e.attributes));
              }
            );
        }),
        (ct.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (ct.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(ct.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (ct.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !ct.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new ct(e, it(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !ct.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new ct(e, it(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? ct.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      ct.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          ct.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            ct.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (ct.getOptions = it),
        de() && ct.initHtmlApi();
      e.watcher = new (class {
        constructor(e) {
          (this.config = Object.assign({ logging: !0 }, e)),
            this.observer,
            !document.documentElement.classList.contains("watcher") &&
              this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"),
            this.scrollWatcherConstructor(
              document.querySelectorAll("[data-watch]")
            );
        }
        scrollWatcherConstructor(e) {
          if (e.length) {
            this.scrollWatcherLogging(
              `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
            ),
              a(
                Array.from(e).map(function (e) {
                  return `${
                    e.dataset.watchRoot ? e.dataset.watchRoot : null
                  }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
                })
              ).forEach((t) => {
                let r = t.split("|"),
                  i = { root: r[0], margin: r[1], threshold: r[2] },
                  n = Array.from(e).filter(function (e) {
                    let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                      r = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                      n = e.dataset.watchThreshold
                        ? e.dataset.watchThreshold
                        : 0;
                    if (
                      String(t) === i.root &&
                      String(r) === i.margin &&
                      String(n) === i.threshold
                    )
                      return e;
                  }),
                  s = this.getScrollWatcherConfig(i);
                this.scrollWatcherInit(n, s);
              });
          } else
            this.scrollWatcherLogging(
              "????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz"
            );
        }
        getScrollWatcherConfig(e) {
          let t = {};
          if (
            (document.querySelector(e.root)
              ? (t.root = document.querySelector(e.root))
              : "null" !== e.root &&
                this.scrollWatcherLogging(
                  `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
                ),
            (t.rootMargin = e.margin),
            !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
          ) {
            if ("prx" === e.threshold) {
              e.threshold = [];
              for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
            } else e.threshold = e.threshold.split(",");
            return (t.threshold = e.threshold), t;
          }
          this.scrollWatcherLogging(
            "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
          );
        }
        scrollWatcherCreate(e) {
          this.observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
              this.scrollWatcherCallback(e, t);
            });
          }, e);
        }
        scrollWatcherInit(e, t) {
          this.scrollWatcherCreate(t),
            e.forEach((e) => this.observer.observe(e));
        }
        scrollWatcherIntersecting(e, t) {
          e.isIntersecting
            ? (!t.classList.contains("_watcher-view") &&
                t.classList.add("_watcher-view"),
              this.scrollWatcherLogging(
                `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
              ))
            : (t.classList.contains("_watcher-view") &&
                t.classList.remove("_watcher-view"),
              this.scrollWatcherLogging(
                `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
              ));
        }
        scrollWatcherOff(e, t) {
          t.unobserve(e),
            this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
        }
        scrollWatcherLogging(e) {
          this.config.logging && o(`[??????????????????????]: ${e}`);
        }
        scrollWatcherCallback(e, t) {
          const r = e.target;
          this.scrollWatcherIntersecting(e, r),
            r.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(r, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      })({});
      let ut = !1;
      setTimeout(() => {
        if (ut) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        document.addEventListener("DOMContentLoaded", () => {
          const e = document.querySelectorAll(".product");
          e &&
            e.forEach((e) => {
              const t = e.querySelectorAll(".image-switch__item"),
                r = e.querySelector(".image-pagination");
              t.length > 1 &&
                t.forEach((t, i) => {
                  t.setAttribute("data-index", i),
                    (r.innerHTML += `<li class="image-pagination__item ${
                      0 == i ? "image-pagination__item--active" : ""
                    }" data-index="${i}"></li>`),
                    t.addEventListener("mouseenter", (t) => {
                      e
                        .querySelectorAll(".image-pagination__item")
                        .forEach((e) => {
                          e.classList.remove("image-pagination__item--active");
                        }),
                        e
                          .querySelector(
                            `.image-pagination__item[data-index="${t.currentTarget.dataset.index}"]`
                          )
                          .classList.add("image-pagination__item--active");
                    }),
                    t.addEventListener("mouseleave", (t) => {
                      e
                        .querySelectorAll(".image-pagination__item")
                        .forEach((e) => {
                          e.classList.remove("image-pagination__item--active");
                        }),
                        e
                          .querySelector(
                            '.image-pagination__item[data-index="0"]'
                          )
                          .classList.add("image-pagination__item--active");
                    });
                });
            });
          const t = document.querySelector(".filters-price"),
            r = document.querySelector(".filters"),
            i = document.querySelector(".page__product__container") + 15,
            n = r.offsetTop,
            s = r.offsetWidth;
          window.addEventListener("scroll", function () {
            const e = window.scrollY;
            e > n - 20 && e <= r.offsetHeight + n
              ? ((t.style.left = i + "px"),
                (t.style.width = s + "px"),
                t.classList.add("fixed"),
                t.classList.remove("absolute"))
              : ((t.style.left = "0px"),
                (t.style.width = "100%"),
                t.classList.remove("fixed")),
              e >= n - 20 + r.offsetHeight - t.offsetHeight &&
                (t.classList.add("absolute"),
                (t.style.left = "0px"),
                (t.style.width = "100%"),
                t.classList.remove("fixed"));
          });
          const o = document.querySelectorAll(".product_btn"),
            a = document.querySelector(".cart-contant__list"),
            l = document.querySelector(".cart"),
            c = document.querySelector(".cart__quantity"),
            u = document.querySelector(".fullprice");
          let d = 0,
            p = 0;
          function h(e) {
            return e.replace(/\s/g, "");
          }
          function f(e) {
            return String(e).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
          }
          function v() {
            u.textContent = `${f(d)} ???`;
          }
          function m() {
            let e = a.querySelector(".simplebar-content").children.length;
            (c.textContent = e),
              e > 0 ? l.classList.add("active") : l.classList.remove("active");
          }
          function g(e) {
            let t = e.querySelector(".cart-product").dataset.id;
            (document
              .querySelector(`.product[data-id="${t}"]`)
              .querySelector(".product_btn").disabled = !1),
              (function (e) {
                d -= e;
              })(
                parseInt(h(e.querySelector(".cart-product__price").textContent))
              ),
              v(),
              e.remove(),
              m(),
              E();
          }
          o.forEach((e) => {
            e.closest(".product").setAttribute("data-id", p++),
              e.addEventListener("click", (e) => {
                let t = e.target,
                  r = t.closest(".product"),
                  i = r.dataset.id,
                  n = r
                    .querySelector(".image-switch__item img")
                    .getAttribute("src"),
                  s = r.querySelector(".product__title").textContent,
                  o = parseInt(
                    h(r.querySelector(".product-price__current").textContent)
                  );
                (d += o),
                  v(),
                  a.querySelector(".simplebar-content").insertAdjacentHTML(
                    "afterbegin",
                    (function (e, t, r, i) {
                      return `\n         <li class="cart-contant__item">\n              <article class="cart-contant__product cart-product" data-id="${i}">\n                <img\n                  class="cart-product__img"\n                  src="${e}"\n                  alt=""\n                />\n                <div class="cart-product__text">\n                  <h3 class="cart-product__title">\n                    ${t}\n                  </h3>\n                  <span class="cart-product__price">${f(
                        r
                      )} ???</span>\n                </div>\n                <button\n                  class="cart-product__delete"\n                  aria-label="?????????????? ??????????"\n                ></button>\n              </article>\n            </li>\n  `;
                    })(n, s, o, i)
                  ),
                  E(),
                  m(),
                  (t.disabled = !0);
              });
          }),
            a.addEventListener("click", (e) => {
              e.target.classList.contains("cart-product__delete") &&
                g(e.target.closest(".cart-contant__item"));
            });
          const b = document.querySelector(".order-modal__btn"),
            y = document.querySelector(".order-modal__list"),
            x = document.querySelector(".cart-contant__btn");
          function w(e, t, r, i) {
            return `\n  <li class="order-modal__item">\n  <article class="order-modal__product order-product" data-id="${i}">\n    <img\n      src="${e}"\n      alt=""\n      class="order-product__img"\n    />\n    <div class="order-product__text">\n      <h3 class="order-product__title">\n      ${t}\n      </h3>\n      <span class="order-product__price">${f(
              r
            )} </span>\n    </div>\n    <button class="order-product__delete">??????????????</button>\n  </article>\n  </li>\n  `;
          }
          let S = 0;
          function E() {
            let e = a.querySelector(".simplebar-content").innerHTML;
            (e = e.trim()),
              e.length
                ? localStorage.setItem("products", e)
                : localStorage.removeItem("products");
          }
          b.addEventListener("click", (e) => {
            0 == S
              ? (b.classList.add("open"), (y.style.display = "block"), (S = 1))
              : (b.classList.remove("open"),
                (y.style.display = "none"),
                (S = 0));
          }),
            x.addEventListener("click", (e) => {
              const t = document.querySelector(".fullprice").innerHTML;
              let r = a.querySelector(".simplebar-content").children,
                i = r.length;
              (document.querySelector(
                ".order-modal__quantity span"
              ).innerHTML = `${i} ????`),
                (document.querySelector(
                  ".order-modal__summ span"
                ).innerHTML = `${t}`);
              for (let e of r) {
                let t = e
                    .querySelector(".cart-product__img")
                    .getAttribute("src"),
                  r = e.querySelector(".cart-product__title").innerHTML,
                  i = e.querySelector(".cart-product__price").innerHTML,
                  n = e.querySelector(".cart-product").dataset.id;
                y.insertAdjacentHTML("afterbegin", w(t, r, i, n));
              }
            }),
            null !== localStorage.getItem("products") &&
              ((a.querySelector(".simplebar-content").innerHTML =
                localStorage.getItem("products")),
              m(),
              document.querySelectorAll(".cart-contant__item").forEach((e) => {
                d += parseInt(
                  h(e.querySelector(".cart-product__price").innerHTML)
                );
              }),
              v(),
              document
                .querySelectorAll(".cart-contant__product")
                .forEach((e) => {
                  let t = e.dataset.id;
                  document
                    .querySelector(`.product[data-id="${t}"]`)
                    .querySelector(".product_btn").disabled = !0;
                })),
            document.querySelector(".popup").addEventListener("click", (e) => {
              if (e.target.classList.contains("order-product__delete")) {
                let t = e.target.closest(".order-modal__product").dataset.id;
                g(
                  document
                    .querySelector(`.cart-contant__product[data-id="${t}"]`)
                    .closest(".cart-contant__item")
                ),
                  e.target.closest(".order-modal__product").remove();
              }
            });
        }),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        });
    })();
})();
