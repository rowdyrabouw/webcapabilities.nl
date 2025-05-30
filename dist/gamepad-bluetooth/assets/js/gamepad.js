!(function (t, e) {
  "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.gamepad = e()) : (t.gamepad = e());
})(this, () =>
  (() => {
    var t = {
        944: function (t) {
          var e;
          (e = () =>
            (() => {
              "use strict";
              var t = {
                  d: (e, n) => {
                    for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
                  },
                  o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                },
                e = {};
              function n(t) {
                return (
                  (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        }),
                  n(t)
                );
              }
              function r(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!n) {
                  if (Array.isArray(t) || (n = i(t)) || (e && t && "number" == typeof t.length)) {
                    n && (t = n);
                    var r = 0,
                      o = function () {};
                    return {
                      s: o,
                      n: function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                      },
                      e: function (t) {
                        throw t;
                      },
                      f: o,
                    };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a,
                  u = !0,
                  s = !1;
                return {
                  s: function () {
                    n = n.call(t);
                  },
                  n: function () {
                    var t = n.next();
                    return (u = t.done), t;
                  },
                  e: function (t) {
                    (s = !0), (a = t);
                  },
                  f: function () {
                    try {
                      u || null == n.return || n.return();
                    } finally {
                      if (s) throw a;
                    }
                  },
                };
              }
              function o(t, e) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                    if (null != n) {
                      var r,
                        o,
                        i,
                        a,
                        u = [],
                        s = !0,
                        l = !1;
                      try {
                        if (((i = (n = n.call(t)).next), 0 === e)) {
                          if (Object(n) !== n) return;
                          s = !1;
                        } else for (; !(s = (r = i.call(n)).done) && (u.push(r.value), u.length !== e); s = !0);
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (!s && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return u;
                    }
                  })(t, e) ||
                  i(t, e) ||
                  (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  })()
                );
              }
              function i(t, e) {
                if (t) {
                  if ("string" == typeof t) return a(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
                }
              }
              function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
              }
              function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              }
              t.d(e, { default: () => s });
              var s = (function () {
                function t() {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                  u(this, t), (this.strict = e), (this.defaults = new Map()), (this.validators = new Map()), (this.types = new Map()), (this.optional = new Set()), (this.required = new Set());
                }
                var e, i;
                return (
                  (e = t),
                  (i = [
                    {
                      key: "allowExtra",
                      value: function () {
                        return (this.strict = !1), this;
                      },
                    },
                    {
                      key: "setDefaults",
                      value: function (t) {
                        var e = this;
                        return (
                          Object.entries(t).forEach(function (t) {
                            var n = o(t, 2),
                              r = n[0],
                              i = n[1];
                            return e.defaults.set(r, i);
                          }),
                          this
                        );
                      },
                    },
                    {
                      key: "setValidators",
                      value: function (t) {
                        var e = this;
                        return (
                          Object.entries(t).forEach(function (t) {
                            var n = o(t, 2),
                              r = n[0],
                              i = n[1];
                            return e.validators.set(r, i);
                          }),
                          this
                        );
                      },
                    },
                    {
                      key: "setTypes",
                      value: function (t) {
                        var e = this;
                        return (
                          Object.entries(t).forEach(function (t) {
                            var n = o(t, 2),
                              r = n[0],
                              i = n[1];
                            return e.types.set(r, i);
                          }),
                          this
                        );
                      },
                    },
                    {
                      key: "setOptional",
                      value: function (t) {
                        var e = this;
                        return (
                          t.forEach(function (t) {
                            return e.optional.add(t);
                          }),
                          this
                        );
                      },
                    },
                    {
                      key: "setRequired",
                      value: function (t) {
                        var e = this;
                        return (
                          t.forEach(function (t) {
                            return e.required.add(t);
                          }),
                          this
                        );
                      },
                    },
                    {
                      key: "resolve",
                      value: function (t) {
                        return this.validate(Object.assign(this.getDefaults(), t));
                      },
                    },
                    {
                      key: "getDefaults",
                      value: function () {
                        var t,
                          e = {},
                          n = r(this.defaults);
                        try {
                          for (n.s(); !(t = n.n()).done; ) {
                            var i = o(t.value, 2),
                              a = i[0],
                              u = i[1];
                            e[a] = u;
                          }
                        } catch (t) {
                          n.e(t);
                        } finally {
                          n.f();
                        }
                        return e;
                      },
                    },
                    {
                      key: "validate",
                      value: function (t) {
                        for (var e in t) this.validators.has(e) && (t[e] = this.validators.get(e)(t[e]));
                        for (var n in t) {
                          if (!this.optionExists(n)) throw new Error('Unkown option "'.concat(n, '".'));
                          this.checkType(n, t[n]);
                        }
                        var o,
                          i = r(this.required.values());
                        try {
                          for (i.s(); !(o = i.n()).done; ) {
                            var a = o.value;
                            if (void 0 === t[a]) throw new Error('Option "'.concat(a, '" is required.'));
                          }
                        } catch (t) {
                          i.e(t);
                        } finally {
                          i.f();
                        }
                        return t;
                      },
                    },
                    {
                      key: "checkType",
                      value: function (t, e) {
                        if (this.types.has(t)) {
                          var r = this.types.get(t),
                            o = n(e);
                          if (o !== r) throw new Error('Wrong value for option "'.concat(t, '": expected type "').concat(r, '", got "').concat(o, '".'));
                        }
                      },
                    },
                    {
                      key: "optionExists",
                      value: function (t) {
                        return !this.strict || this.defaults.has(t) || this.validators.has(t) || this.optional.has(t) || this.required.has(t) || this.types.has(t);
                      },
                    },
                  ]) &&
                    (function (t, e) {
                      for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        (o.enumerable = o.enumerable || !1),
                          (o.configurable = !0),
                          "value" in o && (o.writable = !0),
                          Object.defineProperty(
                            t,
                            ((i = (function (t, e) {
                              if ("object" !== n(t) || null === t) return t;
                              var r = t[Symbol.toPrimitive];
                              if (void 0 !== r) {
                                var o = r.call(t, "string");
                                if ("object" !== n(o)) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                              }
                              return String(t);
                            })(o.key)),
                            "symbol" === n(i) ? i : String(i)),
                            o
                          );
                      }
                      var i;
                    })(e.prototype, i),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t
                );
              })();
              return e.default;
            })()),
            (t.exports = e());
        },
        162: function (t) {
          t.exports = (() => {
            "use strict";
            var t = {
                d: (e, n) => {
                  for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
                },
                o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
              },
              e = {};
            t.d(e, { default: () => n });
            var n = (function () {
              function t() {
                !(function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._events = {}),
                  (this.on = this.addEventListener),
                  (this.off = this.removeEventListener);
              }
              var e;
              return (
                (e = [
                  {
                    key: "emit",
                    value: function (t, e) {
                      if (Object.prototype.hasOwnProperty.call(this._events, t)) for (var n = this._events[t], r = { type: t, detail: e }, o = n.length, i = 0; i < o; i++) this.handle(n[i], r);
                    },
                  },
                  {
                    key: "handle",
                    value: function (t, e) {
                      t(e);
                    },
                  },
                  {
                    key: "addEventListener",
                    value: function (t, e) {
                      Object.prototype.hasOwnProperty.call(this._events, t) || (this._events[t] = []), this._events[t].indexOf(e) < 0 && this._events[t].push(e);
                    },
                  },
                  {
                    key: "removeEventListener",
                    value: function (t, e) {
                      if (Object.prototype.hasOwnProperty.call(this._events, t)) {
                        var n = this._events[t],
                          r = n.indexOf(e);
                        r >= 0 && n.splice(r, 1), 0 === n.length && delete this._events[t];
                      }
                    },
                  },
                ]) &&
                  (function (t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                  })(t.prototype, e),
                t
              );
            })();
            return e.default;
          })();
        },
      },
      e = {};
    function n(r) {
      var o = e[r];
      if (void 0 !== o) return o.exports;
      var i = (e[r] = { exports: {} });
      return t[r].call(i.exports, i, i.exports, n), i.exports;
    }
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
      (n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      }),
      (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (n.r = (t) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var r = {};
    return (
      (() => {
        "use strict";
        n.r(r), n.d(r, { GamepadHandler: () => h, GamepadListener: () => A });
        var t = n(162),
          e = n.n(t),
          o = n(944),
          i = n.n(o);
        function a(t) {
          return (
            (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
            a(t)
          );
        }
        function u(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function s(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, p(r.key), r);
          }
        }
        function l(t, e) {
          return (
            (l = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            l(t, e)
          );
        }
        function c(t, e) {
          if (e && ("object" === a(e) || "function" == typeof e)) return e;
          if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
          return (function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
          })(t);
        }
        function f(t) {
          return (
            (f = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            f(t)
          );
        }
        function p(t) {
          var e = (function (t, e) {
            if ("object" !== a(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" !== a(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(t);
          return "symbol" === a(e) ? e : String(e);
        }
        var d,
          y,
          v,
          h = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
              (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && l(t, e);
            })(p, t);
            var e,
              n,
              r,
              o,
              i,
              a =
                ((o = p),
                (i = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                  } catch (t) {
                    return !1;
                  }
                })()),
                function () {
                  var t,
                    e = f(o);
                  if (i) {
                    var n = f(this).constructor;
                    t = Reflect.construct(e, arguments, n);
                  } else t = e.apply(this, arguments);
                  return c(this, t);
                });
            function p(t, e) {
              var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return (
                u(this, p),
                ((n = a.call(this)).index = t),
                (n.gamepad = e),
                (n.options = n.constructor.resolveOptions(r)),
                (n.axes = new Array(e.axes.length).fill(null)),
                (n.buttons = new Array(e.buttons.length).fill(null)),
                n.initAxes(),
                n.initButtons(),
                n
              );
            }
            return (
              (e = p),
              (r = [
                {
                  key: "resolveOptions",
                  value: function (t) {
                    var e,
                      n,
                      r,
                      o,
                      i = t.axis,
                      a = t.button;
                    return {
                      axis: this.optionResolver.resolve(null !== (e = null !== (n = null != i ? i : a) && void 0 !== n ? n : t) && void 0 !== e ? e : {}),
                      button: this.optionResolver.resolve(null !== (r = null !== (o = null != a ? a : i) && void 0 !== o ? o : t) && void 0 !== r ? r : {}),
                    };
                  },
                },
              ]),
              (n = [
                {
                  key: "initAxes",
                  value: function () {
                    for (var t = this.axes.length, e = 0; e < t; e++) this.axes[e] = this.resolveAxisValue(e);
                  },
                },
                {
                  key: "initButtons",
                  value: function () {
                    for (var t = this.buttons.length, e = 0; e < t; e++) this.buttons[e] = this.resolveButtonValue(e);
                  },
                },
                {
                  key: "update",
                  value: function (t) {
                    (this.gamepad = t), this.updateAxis(), this.updateButtons();
                  },
                },
                {
                  key: "updateAxis",
                  value: function () {
                    for (var t = this.axes.length, e = 0; e < t; e++) this.setAxisValue(e, this.resolveAxisValue(e));
                  },
                },
                {
                  key: "updateButtons",
                  value: function () {
                    for (var t = this.buttons.length, e = 0; e < t; e++) this.setButtonValue(e, this.resolveButtonValue(e));
                  },
                },
                {
                  key: "setAxisValue",
                  value: function (t, e) {
                    this.axes[t] !== e && ((this.axes[t] = e), this.emit("axis", { gamepad: this.gamepad, index: this.index, axis: t, value: e }));
                  },
                },
                {
                  key: "setButtonValue",
                  value: function (t, e) {
                    this.buttons[t] !== e && ((this.buttons[t] = e), this.emit("button", { gamepad: this.gamepad, index: this.index, button: t, pressed: this.gamepad.buttons[t].pressed, value: e }));
                  },
                },
                {
                  key: "resolveAxisValue",
                  value: function (t) {
                    var e = this.options.axis,
                      n = e.deadZone,
                      r = e.analog,
                      o = e.precision,
                      i = this.gamepad.axes[t];
                    return n && i < n && i > -n ? 0 : r ? (o ? Math.round(i * o) / o : i) : i > 0 ? 1 : i < 0 ? -1 : 0;
                  },
                },
                {
                  key: "resolveButtonValue",
                  value: function (t) {
                    var e = this.options.button,
                      n = e.deadZone,
                      r = e.analog,
                      o = e.precision,
                      i = this.gamepad.buttons[t].value;
                    return n > 0 && i < n && i > -n ? 0 : r ? (o ? Math.round(i * o) / o : i) : 0 === i ? 0 : 1;
                  },
                },
              ]) && s(e.prototype, n),
              r && s(e, r),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              p
            );
          })(e());
        function b(t) {
          return (
            (b =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
            b(t)
          );
        }
        function m(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r);
          }
        }
        function g(t) {
          var e = (function (t, e) {
            if ("object" !== b(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" !== b(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(t);
          return "symbol" === b(e) ? e : String(e);
        }
        (d = h),
          (y = "optionResolver"),
          (v = new (i())()
            .setDefaults({ analog: !0, deadZone: 0, precision: 0 })
            .setTypes({ analog: "boolean", deadZone: "number", precision: "number" })
            .setValidators({
              deadZone: function (t) {
                return Math.max(Math.min(t, 1), 0);
              },
              precision: function (t) {
                return t > 0 ? Math.pow(10, t) : 0;
              },
            })),
          (y = p(y)) in d ? Object.defineProperty(d, y, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : (d[y] = v);
        var w = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.callback = e),
              (this.frame = null),
              (this.update = this.update.bind(this));
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "setCallback",
                value: function (t) {
                  this.callback = t;
                },
              },
              {
                key: "start",
                value: function () {
                  this.frame || (this.frame = window.requestAnimationFrame(this.update));
                },
              },
              {
                key: "stop",
                value: function () {
                  this.frame && (window.cancelAnimationFrame(this.frame), (this.frame = null));
                },
              },
              {
                key: "update",
                value: function () {
                  (this.frame = window.requestAnimationFrame(this.update)), this.callback();
                },
              },
            ]) && m(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function x(t) {
          return (
            (x =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
            x(t)
          );
        }
        function O(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function j(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, k(r.key), r);
          }
        }
        function k(t) {
          var e = (function (t, e) {
            if ("object" !== x(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" !== x(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(t);
          return "symbol" === x(e) ? e : String(e);
        }
        function S(t, e) {
          return (
            (S = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            S(t, e)
          );
        }
        function P(t, e) {
          if (e && ("object" === x(e) || "function" == typeof e)) return e;
          if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
          return E(t);
        }
        function E(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function _(t) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            _(t)
          );
        }
        var A = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && S(t, e);
          })(a, t);
          var e,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = _(r);
                if (o) {
                  var n = _(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return P(this, t);
              });
          function a() {
            var t,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ((O(this, a), (t = i.call(this)), "function" != typeof navigator.getGamepads)) throw new Error("This browser does not support gamepad API.");
            return (
              (t.options = e),
              (t.onAxis = t.onAxis.bind(E(t))),
              (t.update = t.update.bind(E(t))),
              (t.start = t.start.bind(E(t))),
              (t.stop = t.stop.bind(E(t))),
              (t.discover = t.discover.bind(E(t))),
              (t.onButton = t.onButton.bind(E(t))),
              (t.handlers = new Array(4).fill(null)),
              (t.loop = new w(t.update)),
              window.addEventListener("error", t.stop),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "start",
                value: function () {
                  this.loop.start();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.loop.stop();
                },
              },
              {
                key: "update",
                value: function () {
                  var t = navigator.getGamepads();
                  this.discover(t[0], 0), this.discover(t[1], 1), this.discover(t[2], 2), this.discover(t[3], 3);
                },
              },
              {
                key: "discover",
                value: function (t, e) {
                  t ? (null === this.handlers[e] && this.registerHandler(e, t), this.handlers[e].update(t)) : this.handlers[e] && this.removeGamepad(e);
                },
              },
              {
                key: "registerHandler",
                value: function (t, e) {
                  var n = new h(t, e, this.options);
                  (this.handlers[t] = n),
                    n.addEventListener("axis", this.onAxis),
                    n.addEventListener("button", this.onButton),
                    this.emit("gamepad:connected", { index: t, gamepad: e }),
                    this.emit("gamepad:".concat(t, ":connected"), { index: t, gamepad: e });
                },
              },
              {
                key: "removeGamepad",
                value: function (t) {
                  var e = this.handlers[t];
                  e.removeEventListener("axis", this.onAxis), e.removeEventListener("button", this.onButton), (this.handlers[t] = null), this.emit("gamepad:disconnected", { index: t }), this.emit("gamepad:".concat(t, ":disconnected"), { index: t });
                },
              },
              {
                key: "onAxis",
                value: function (t) {
                  var e = t.detail.index;
                  this.emit("gamepad:axis", t.detail), this.emit("gamepad:".concat(e, ":axis"), t.detail), this.emit("gamepad:".concat(e, ":axis:").concat(t.detail.axis), t.detail);
                },
              },
              {
                key: "onButton",
                value: function (t) {
                  var e = t.detail.index;
                  this.emit("gamepad:button", t.detail), this.emit("gamepad:".concat(e, ":button"), t.detail), this.emit("gamepad:".concat(e, ":button:").concat(t.detail.button), t.detail);
                },
              },
            ]) && j(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(e());
      })(),
      r
    );
  })()
);
