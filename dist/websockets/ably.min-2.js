/*@license Copyright 2015-2022 Ably Real-time Ltd (ably.com)

Ably JavaScript Library v2.7.0
https://github.com/ably/ably-js

Released under the Apache Licence v2.0*/ (function (g, f) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = f();
  } else if ("function" == typeof define && define.amd) {
    define([], f);
  } else if ("object" == typeof exports) {
    exports["Ably"] = f();
  } else {
    g["Ably"] = f();
  }
})(this, () => {
  var exports = {};
  var module = { exports };
  ("use strict");
  var dt = Object.defineProperty,
    Br = Object.defineProperties,
    Lr = Object.getOwnPropertyDescriptor,
    _r = Object.getOwnPropertyDescriptors,
    Nr = Object.getOwnPropertyNames,
    ht = Object.getOwnPropertySymbols;
  var Wt = Object.prototype.hasOwnProperty,
    Rs = Object.prototype.propertyIsEnumerable;
  var ys = (s, n, e) =>
      n in s
        ? dt(s, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
        : (s[n] = e),
    O = (s, n) => {
      for (var e in n || (n = {})) Wt.call(n, e) && ys(s, e, n[e]);
      if (ht) for (var e of ht(n)) Rs.call(n, e) && ys(s, e, n[e]);
      return s;
    },
    D = (s, n) => Br(s, _r(n));
  var Ps = (s, n) => {
    var e = {};
    for (var t in s) Wt.call(s, t) && n.indexOf(t) < 0 && (e[t] = s[t]);
    if (s != null && ht)
      for (var t of ht(s)) n.indexOf(t) < 0 && Rs.call(s, t) && (e[t] = s[t]);
    return e;
  };
  var bs = (s, n) => {
      for (var e in n) dt(s, e, { get: n[e], enumerable: !0 });
    },
    qr = (s, n, e, t) => {
      if ((n && typeof n == "object") || typeof n == "function")
        for (let r of Nr(n))
          !Wt.call(s, r) &&
            r !== e &&
            dt(s, r, {
              get: () => n[r],
              enumerable: !(t = Lr(n, r)) || t.enumerable,
            });
      return s;
    };
  var Dr = (s) => qr(dt({}, "__esModule", { value: !0 }), s);
  var yi = {};
  bs(yi, {
    ErrorInfo: () => h,
    Realtime: () => We,
    Rest: () => Fe,
    default: () => mi,
    msgpack: () => Ft,
    protocolMessageFromDeserialized: () => or,
  });
  module.exports = Dr(yi);
  var p = class {};
  var jt =
    typeof global != "undefined"
      ? global
      : typeof window != "undefined"
      ? window
      : self;
  function pt(s, n) {
    return `${s}`.padStart(n ? 3 : 2, "0");
  }
  function Hr(s) {
    return p.Config.logTimestamps
      ? function (n) {
          let e = new Date();
          s(
            pt(e.getHours()) +
              ":" +
              pt(e.getMinutes()) +
              ":" +
              pt(e.getSeconds()) +
              "." +
              pt(e.getMilliseconds(), 1) +
              " " +
              n
          );
        }
      : function (n) {
          s(n);
        };
  }
  var Gr = () => {
      var e;
      let s, n;
      return (
        typeof ((e = jt == null ? void 0 : jt.console) == null
          ? void 0
          : e.log) == "function"
          ? ((s = function (...t) {
              console.log.apply(console, t);
            }),
            (n = console.warn
              ? function (...t) {
                  console.warn.apply(console, t);
                }
              : s))
          : (s = n = function () {}),
        [s, n].map(Hr)
      );
    },
    z = class z {
      constructor() {
        this.deprecated = (n, e) => {
          this.deprecationWarning(
            `${n} is deprecated and will be removed in a future version. ${e}`
          );
        };
        this.shouldLog = (n) => n <= this.logLevel;
        this.setLog = (n, e) => {
          n !== void 0 && (this.logLevel = n),
            e !== void 0 && (this.logHandler = this.logErrorHandler = e);
        };
        (this.logLevel = z.defaultLogLevel),
          (this.logHandler = z.defaultLogHandler),
          (this.logErrorHandler = z.defaultLogErrorHandler);
      }
      static initLogHandlers() {
        let [n, e] = Gr();
        (this.defaultLogHandler = n),
          (this.defaultLogErrorHandler = e),
          (this.defaultLogger = new z());
      }
      static logActionNoStrip(n, e, t, r) {
        n.logAction(e, t, r);
      }
      logAction(n, e, t) {
        this.shouldLog(n) &&
          (n === 1 ? this.logErrorHandler : this.logHandler)(
            "Ably: " + e + ": " + t,
            n
          );
      }
      renamedClientOption(n, e) {
        this.deprecationWarning(
          `The \`${n}\` client option has been renamed to \`${e}\`. Please update your code to use \`${e}\` instead. \`${n}\` will be removed in a future version.`
        );
      }
      renamedMethod(n, e, t) {
        this.deprecationWarning(
          `\`${n}\`\u2019s \`${e}\` method has been renamed to \`${t}\`. Please update your code to use \`${t}\` instead. \`${e}\` will be removed in a future version.`
        );
      }
      deprecationWarning(n) {
        this.shouldLog(1) &&
          this.logErrorHandler(`Ably: Deprecation warning - ${n}`, 1);
      }
    };
  (z.defaultLogLevel = 1),
    (z.LOG_NONE = 0),
    (z.LOG_ERROR = 1),
    (z.LOG_MAJOR = 2),
    (z.LOG_MINOR = 3),
    (z.LOG_MICRO = 4),
    (z.logAction = (n, e, t, r) => {
      z.logActionNoStrip(n, e, t, r);
    });
  var Vt = z,
    i = Vt;
  var k = {};
  bs(k, {
    Format: () => Z,
    allSame: () => Xt,
    allToLowerCase: () => Je,
    allToUpperCase: () => tn,
    arrChooseN: () => en,
    arrDeleteValue: () => ws,
    arrEquals: () => rn,
    arrIntersect: () => Ts,
    arrIntersectOb: () => Is,
    arrPopRandomElement: () => ft,
    arrSubtract: () => Kr,
    arrWithoutValue: () => Jr,
    cheapRandStr: () => Te,
    containsValue: () => zr,
    copy: () => oe,
    createMissingPluginError: () => $e,
    dataSizeBytes: () => Yt,
    decodeBody: () => B,
    encodeBody: () => H,
    ensureArray: () => zt,
    forInOwnNonNullProperties: () => Qt,
    getBackoffCoefficient: () => ks,
    getGlobalObject: () => Xe,
    getJitterCoefficient: () => Ms,
    getRetryTime: () => Qe,
    inherits: () => Vr,
    inspectBody: () => $t,
    inspectError: () => w,
    intersect: () => Kt,
    isEmpty: () => Wr,
    isErrorInfoOrPartialErrorInfo: () => Ke,
    isNil: () => j,
    isObject: () => ie,
    keysArray: () => pe,
    matchDerivedChannel: () => sn,
    mixin: () => b,
    parseQueryString: () => Ae,
    prototypicalClone: () => As,
    randomString: () => Zt,
    shallowClone: () => jr,
    shallowEquals: () => nn,
    throwMissingPluginError: () => L,
    toBase64: () => Oe,
    toQueryString: () => le,
    valuesArray: () => Jt,
    whenPromiseSettles: () => N,
    withTimeoutAsync: () => on,
  });
  function Cs(s) {
    let n = "[" + s.constructor.name;
    return (
      s.message && (n += ": " + s.message),
      s.statusCode && (n += "; statusCode=" + s.statusCode),
      s.code && (n += "; code=" + s.code),
      s.cause && (n += "; cause=" + w(s.cause)),
      s.href &&
        !(s.message && s.message.indexOf("help.ably.io") > -1) &&
        (n += "; see " + s.href + " "),
      (n += "]"),
      n
    );
  }
  var h = class s extends Error {
      constructor(e, t, r, o) {
        super(e);
        typeof Object.setPrototypeOf != "undefined" &&
          Object.setPrototypeOf(this, s.prototype),
          (this.code = t),
          (this.statusCode = r),
          (this.cause = o);
      }
      toString() {
        return Cs(this);
      }
      static fromValues(e) {
        let { message: t, code: r, statusCode: o } = e;
        if (
          typeof t != "string" ||
          typeof r != "number" ||
          typeof o != "number"
        )
          throw new Error(
            "ErrorInfo.fromValues(): invalid values: " + p.Config.inspect(e)
          );
        let a = Object.assign(new s(t, r, o), e);
        return (
          a.code &&
            !a.href &&
            (a.href = "https://help.ably.io/error/" + a.code),
          a
        );
      }
    },
    S = class s extends Error {
      constructor(e, t, r, o) {
        super(e);
        typeof Object.setPrototypeOf != "undefined" &&
          Object.setPrototypeOf(this, s.prototype),
          (this.code = t),
          (this.statusCode = r),
          (this.cause = o);
      }
      toString() {
        return Cs(this);
      }
      static fromValues(e) {
        let { message: t, code: r, statusCode: o } = e;
        if (
          typeof t != "string" ||
          (!j(r) && typeof r != "number") ||
          (!j(o) && typeof o != "number")
        )
          throw new Error(
            "PartialErrorInfo.fromValues(): invalid values: " +
              p.Config.inspect(e)
          );
        let a = Object.assign(new s(t, r, o), e);
        return (
          a.code &&
            !a.href &&
            (a.href = "https://help.ably.io/error/" + a.code),
          a
        );
      }
    };
  function Fr(s) {
    return Math.floor(Math.random() * s.length);
  }
  function b(s, ...n) {
    for (let e = 0; e < n.length; e++) {
      let t = n[e];
      if (!t) break;
      for (let r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r]);
    }
    return s;
  }
  function oe(s) {
    return b({}, s);
  }
  function zt(s) {
    return j(s) ? [] : Array.isArray(s) ? s : [s];
  }
  function ie(s) {
    return Object.prototype.toString.call(s) == "[object Object]";
  }
  function Wr(s) {
    for (let n in s) return !1;
    return !0;
  }
  function j(s) {
    return s == null;
  }
  function jr(s) {
    let n = new Object();
    for (let e in s) n[e] = s[e];
    return n;
  }
  function As(s, n) {
    class e {}
    e.prototype = s;
    let t = new e();
    return n && b(t, n), t;
  }
  var Vr = function (s, n) {
    if (p.Config.inherits) {
      p.Config.inherits(s, n);
      return;
    }
    (s.super_ = n), (s.prototype = As(n.prototype, { constructor: s }));
  };
  function zr(s, n) {
    for (let e in s) if (s[e] == n) return !0;
    return !1;
  }
  function Kt(s, n) {
    return Array.isArray(n) ? Ts(s, n) : Is(s, n);
  }
  function Ts(s, n) {
    let e = [];
    for (let t = 0; t < s.length; t++) {
      let r = s[t];
      n.indexOf(r) != -1 && e.push(r);
    }
    return e;
  }
  function Is(s, n) {
    let e = [];
    for (let t = 0; t < s.length; t++) {
      let r = s[t];
      r in n && e.push(r);
    }
    return e;
  }
  function Kr(s, n) {
    let e = [];
    for (let t = 0; t < s.length; t++) {
      let r = s[t];
      n.indexOf(r) == -1 && e.push(r);
    }
    return e;
  }
  function ws(s, n) {
    let e = s.indexOf(n),
      t = e != -1;
    return t && s.splice(e, 1), t;
  }
  function Jr(s, n) {
    let e = s.slice();
    return ws(e, n), e;
  }
  function pe(s, n) {
    let e = [];
    for (let t in s)
      (n && !Object.prototype.hasOwnProperty.call(s, t)) || e.push(t);
    return e;
  }
  function Jt(s, n) {
    let e = [];
    for (let t in s)
      (n && !Object.prototype.hasOwnProperty.call(s, t)) || e.push(s[t]);
    return e;
  }
  function Qt(s, n) {
    for (let e in s) Object.prototype.hasOwnProperty.call(s, e) && s[e] && n(e);
  }
  function Xt(s, n) {
    if (s.length === 0) return !0;
    let e = s[0][n];
    return s.every(function (t) {
      return t[n] === e;
    });
  }
  var Z = ((e) => ((e.msgpack = "msgpack"), (e.json = "json"), e))(Z || {});
  function ft(s) {
    return s.splice(Fr(s), 1)[0];
  }
  function le(s) {
    let n = [];
    if (s)
      for (let e in s)
        n.push(encodeURIComponent(e) + "=" + encodeURIComponent(s[e]));
    return n.length ? "?" + n.join("&") : "";
  }
  function Ae(s) {
    let n,
      e = /([^?&=]+)=?([^&]*)/g,
      t = {};
    for (; (n = e.exec(s)); )
      t[decodeURIComponent(n[1])] = decodeURIComponent(n[2]);
    return t;
  }
  function Ke(s) {
    return (
      typeof s == "object" && s !== null && (s instanceof h || s instanceof S)
    );
  }
  function w(s) {
    var n, e;
    return s instanceof Error ||
      ((n = s == null ? void 0 : s.constructor) == null ? void 0 : n.name) ===
        "ErrorInfo" ||
      ((e = s == null ? void 0 : s.constructor) == null ? void 0 : e.name) ===
        "PartialErrorInfo"
      ? s.toString()
      : p.Config.inspect(s);
  }
  function $t(s) {
    return p.BufferUtils.isBuffer(s)
      ? s.toString()
      : typeof s == "string"
      ? s
      : p.Config.inspect(s);
  }
  function Yt(s) {
    if (p.BufferUtils.isBuffer(s)) return p.BufferUtils.byteLength(s);
    if (typeof s == "string") return p.Config.stringByteSize(s);
    throw new Error(
      "Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " +
        typeof s
    );
  }
  function Te() {
    return String(Math.random()).substr(2);
  }
  var Zt = async (s) => {
    let n = await p.Config.getRandomArrayBuffer(s);
    return p.BufferUtils.base64Encode(n);
  };
  function en(s, n) {
    let e = Math.min(n, s.length),
      t = s.slice(),
      r = [];
    for (let o = 0; o < e; o++) r.push(ft(t));
    return r;
  }
  function N(s, n) {
    s.then((e) => {
      n == null || n(null, e);
    }).catch((e) => {
      n == null || n(e);
    });
  }
  function B(s, n, e) {
    return e == "msgpack"
      ? (n || L("MsgPack"), n.decode(s))
      : JSON.parse(String(s));
  }
  function H(s, n, e) {
    return e == "msgpack"
      ? (n || L("MsgPack"), n.encode(s, !0))
      : JSON.stringify(s);
  }
  function Je(s) {
    return s.map(function (n) {
      return n && n.toLowerCase();
    });
  }
  function tn(s) {
    return s.map(function (n) {
      return n && n.toUpperCase();
    });
  }
  function ks(s) {
    return Math.min((s + 2) / 3, 2);
  }
  function Ms() {
    return 1 - Math.random() * 0.2;
  }
  function Qe(s, n) {
    return s * ks(n) * Ms();
  }
  function Xe() {
    return typeof global != "undefined"
      ? global
      : typeof window != "undefined"
      ? window
      : self;
  }
  function nn(s, n) {
    return (
      Object.keys(s).every((e) => s[e] === n[e]) &&
      Object.keys(n).every((e) => n[e] === s[e])
    );
  }
  function sn(s) {
    let n = /^(\[([^?]*)(?:(.*))\])?(.+)$/,
      e = s.match(n);
    if (!e || !e.length || e.length < 5)
      throw new h("regex match failed", 400, 40010);
    if (e[2])
      throw new h(
        `cannot use a derived option with a ${e[2]} channel`,
        400,
        40010
      );
    return { qualifierParam: e[3] || "", channelName: e[4] };
  }
  function Oe(s) {
    let n = p.BufferUtils,
      e = n.utf8Encode(s);
    return n.base64Encode(e);
  }
  function rn(s, n) {
    return (
      s.length === n.length &&
      s.every(function (e, t) {
        return e === n[t];
      })
    );
  }
  function $e(s) {
    return new h(`${s} plugin not provided`, 40019, 400);
  }
  function L(s) {
    throw $e(s);
  }
  async function on(s, n = 5e3, e = "Timeout expired") {
    let t = new h(e, 5e4, 500);
    return Promise.race([s, new Promise((r, o) => setTimeout(() => o(t), n))]);
  }
  var an = "2.7.0";
  var Xr = "ably-js/" + an,
    W = {
      ENVIRONMENT: "",
      REST_HOST: "rest.ably.io",
      REALTIME_HOST: "realtime.ably.io",
      FALLBACK_HOSTS: [
        "A.ably-realtime.com",
        "B.ably-realtime.com",
        "C.ably-realtime.com",
        "D.ably-realtime.com",
        "E.ably-realtime.com",
      ],
      PORT: 80,
      TLS_PORT: 443,
      TIMEOUTS: {
        disconnectedRetryTimeout: 15e3,
        suspendedRetryTimeout: 3e4,
        httpRequestTimeout: 1e4,
        httpMaxRetryDuration: 15e3,
        channelRetryTimeout: 15e3,
        fallbackRetryTimeout: 6e5,
        connectionStateTtl: 12e4,
        realtimeRequestTimeout: 1e4,
        recvTimeout: 9e4,
        webSocketConnectTimeout: 1e4,
        webSocketSlowTimeout: 4e3,
      },
      httpMaxRetryCount: 3,
      maxMessageSize: 65536,
      version: an,
      protocolVersion: 3,
      agent: Xr,
      getHost: Os,
      getPort: $r,
      getHttpScheme: Yr,
      environmentFallbackHosts: vs,
      getFallbackHosts: Ss,
      getHosts: Zr,
      checkHost: Es,
      objectifyOptions: no,
      normaliseOptions: so,
      defaultGetHeaders: ro,
      defaultPostHeaders: oo,
    };
  function Os(s, n, e) {
    return (
      e
        ? (n = (n == s.restHost && s.realtimeHost) || n || s.realtimeHost)
        : (n = n || s.restHost),
      n
    );
  }
  function $r(s, n) {
    return n || s.tls ? s.tlsPort : s.port;
  }
  function Yr(s) {
    return s.tls ? "https://" : "http://";
  }
  function vs(s) {
    return [
      s + "-a-fallback.ably-realtime.com",
      s + "-b-fallback.ably-realtime.com",
      s + "-c-fallback.ably-realtime.com",
      s + "-d-fallback.ably-realtime.com",
      s + "-e-fallback.ably-realtime.com",
    ];
  }
  function Ss(s) {
    let n = s.fallbackHosts,
      e =
        typeof s.httpMaxRetryCount != "undefined"
          ? s.httpMaxRetryCount
          : W.httpMaxRetryCount;
    return n ? en(n, e) : [];
  }
  function Zr(s, n) {
    let e = [s.restHost].concat(Ss(s));
    return n ? e.map((t) => Os(s, t, !0)) : e;
  }
  function Es(s) {
    if (typeof s != "string")
      throw new h("host must be a string; was a " + typeof s, 4e4, 400);
    if (!s.length) throw new h("host must not be zero-length", 4e4, 400);
  }
  function eo(s, n, e, t) {
    return s.realtimeHost
      ? s.realtimeHost
      : s.restHost
      ? (i.logAction(
          t,
          i.LOG_MINOR,
          "Defaults.normaliseOptions",
          'restHost is set to "' +
            s.restHost +
            '" but realtimeHost is not set, so setting realtimeHost to "' +
            s.restHost +
            '" too. If this is not what you want, please set realtimeHost explicitly.'
        ),
        s.restHost)
      : n
      ? W.REALTIME_HOST
      : e + "-" + W.REALTIME_HOST;
  }
  function to(s) {
    let n = {};
    for (let e in W.TIMEOUTS) n[e] = s[e] || W.TIMEOUTS[e];
    return n;
  }
  function mt(s) {
    let n = W.agent;
    if (s.agents) for (var e in s.agents) n += " " + e + "/" + s.agents[e];
    return n;
  }
  function no(s, n, e, t, r) {
    if (s === void 0) {
      let a = n
        ? `${e} must be initialized with either a client options object, an Ably API key, or an Ably Token`
        : `${e} must be initialized with a client options object`;
      throw (i.logAction(t, i.LOG_ERROR, `${e}()`, a), new Error(a));
    }
    let o;
    if (typeof s == "string")
      if (s.indexOf(":") == -1) {
        if (!n) {
          let a = `${e} cannot be initialized with just an Ably Token; you must provide a client options object with a \`plugins\` property. (Set this Ably Token as the object\u2019s \`token\` property.)`;
          throw (i.logAction(t, i.LOG_ERROR, `${e}()`, a), new Error(a));
        }
        o = { token: s };
      } else {
        if (!n) {
          let a = `${e} cannot be initialized with just an Ably API key; you must provide a client options object with a \`plugins\` property. (Set this Ably API key as the object\u2019s \`key\` property.)`;
          throw (i.logAction(t, i.LOG_ERROR, `${e}()`, a), new Error(a));
        }
        o = { key: s };
      }
    else o = s;
    return r && (o = D(O({}, o), { plugins: O(O({}, r), o.plugins) })), o;
  }
  function so(s, n, e) {
    let t = e != null ? e : i.defaultLogger;
    typeof s.recover == "function" &&
      s.closeOnUnload === !0 &&
      (i.logAction(
        t,
        i.LOG_ERROR,
        "Defaults.normaliseOptions",
        "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"
      ),
      (s.recover = void 0)),
      "closeOnUnload" in s || (s.closeOnUnload = !s.recover),
      "queueMessages" in s || (s.queueMessages = !0);
    let r =
        (s.environment && String(s.environment).toLowerCase()) || W.ENVIRONMENT,
      o = !r || r === "production";
    !s.fallbackHosts &&
      !s.restHost &&
      !s.realtimeHost &&
      !s.port &&
      !s.tlsPort &&
      (s.fallbackHosts = o ? W.FALLBACK_HOSTS : vs(r));
    let a = s.restHost || (o ? W.REST_HOST : r + "-" + W.REST_HOST),
      c = eo(s, o, r, t);
    (s.fallbackHosts || []).concat(a, c).forEach(Es),
      (s.port = s.port || W.PORT),
      (s.tlsPort = s.tlsPort || W.TLS_PORT),
      "tls" in s || (s.tls = !0);
    let l = to(s);
    n
      ? "useBinaryProtocol" in s
        ? (s.useBinaryProtocol = p.Config.supportsBinary && s.useBinaryProtocol)
        : (s.useBinaryProtocol = p.Config.preferBinary)
      : (s.useBinaryProtocol = !1);
    let u = {};
    s.clientId &&
      (u["X-Ably-ClientId"] = p.BufferUtils.base64Encode(
        p.BufferUtils.utf8Encode(s.clientId)
      )),
      "idempotentRestPublishing" in s || (s.idempotentRestPublishing = !0);
    let f = null,
      d = s.connectivityCheckUrl;
    if (s.connectivityCheckUrl) {
      let [m, y] = s.connectivityCheckUrl.split("?");
      (f = y ? Ae(y) : {}),
        m.indexOf("://") === -1 && (m = "https://" + m),
        (d = m);
    }
    let g = s.wsConnectivityCheckUrl;
    return (
      g && g.indexOf("://") === -1 && (g = "wss://" + g),
      D(O({}, s), {
        realtimeHost: c,
        restHost: a,
        maxMessageSize: s.maxMessageSize || W.maxMessageSize,
        timeouts: l,
        connectivityCheckParams: f,
        connectivityCheckUrl: d,
        wsConnectivityCheckUrl: g,
        headers: u,
      })
    );
  }
  function ve(s, n, e) {
    let t = e || {};
    if (t.cipher) {
      s || L("Crypto");
      let r = s.getCipher(t.cipher, n);
      (t.cipher = r.cipherParams), (t.channelCipher = r.cipher);
    } else "cipher" in t && ((t.cipher = void 0), (t.channelCipher = null));
    return t;
  }
  var xs = {
      json: "application/json",
      xml: "application/xml",
      html: "text/html",
      msgpack: "application/x-msgpack",
      text: "text/plain",
    },
    gt = { format: "json", protocolVersion: W.protocolVersion };
  function ro(
    s,
    { format: n = gt.format, protocolVersion: e = gt.protocolVersion } = {}
  ) {
    return {
      accept: xs[n],
      "X-Ably-Version": e.toString(),
      "Ably-Agent": mt(s),
    };
  }
  function oo(
    s,
    { format: n = gt.format, protocolVersion: e = gt.protocolVersion } = {}
  ) {
    let t;
    return {
      accept: (t = xs[n]),
      "content-type": t,
      "X-Ably-Version": e.toString(),
      "Ably-Agent": mt(s),
    };
  }
  var R = W;
  function Us(s) {
    return Object.assign(W, s);
  }
  var cn = class s {
      constructor(n, e) {
        this.logger = n;
        this.members = e || [];
      }
      call(n, e) {
        for (let t of this.members)
          if (t)
            try {
              t(n, e);
            } catch (r) {
              i.logAction(
                this.logger,
                i.LOG_ERROR,
                "Multicaster multiple callback handler",
                "Unexpected exception: " + r + "; stack = " + r.stack
              );
            }
      }
      push(...n) {
        this.members.push(...n);
      }
      createPromise() {
        return new Promise((n, e) => {
          this.push((t, r) => {
            t ? e(t) : n(r);
          });
        });
      }
      resolveAll(n) {
        this.call(null, n);
      }
      rejectAll(n) {
        this.call(n);
      }
      static create(n, e) {
        let t = new s(n, e);
        return Object.assign((r, o) => t.call(r, o), {
          push: (r) => t.push(r),
          createPromise: () => t.createPromise(),
          resolveAll: (r) => t.resolveAll(r),
          rejectAll: (r) => t.rejectAll(r),
        });
      }
    },
    Se = cn;
  var Bs = ((o) => (
      (o.Get = "get"),
      (o.Delete = "delete"),
      (o.Post = "post"),
      (o.Put = "put"),
      (o.Patch = "patch"),
      o
    ))(Bs || {}),
    x = Bs;
  var Ls = ((c) => (
    (c[(c.Success = 200)] = "Success"),
    (c[(c.NoContent = 204)] = "NoContent"),
    (c[(c.BadRequest = 400)] = "BadRequest"),
    (c[(c.Unauthorized = 401)] = "Unauthorized"),
    (c[(c.Forbidden = 403)] = "Forbidden"),
    (c[(c.RequestTimeout = 408)] = "RequestTimeout"),
    (c[(c.InternalServerError = 500)] = "InternalServerError"),
    c
  ))(Ls || {});
  function _s(s) {
    return s >= 200 && s < 400;
  }
  var fe = Ls;
  var ln = Math.pow(2, 17);
  function io() {
    return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
  }
  function ao(s) {
    return !!s.connection;
  }
  function Ns(s) {
    return Ke(s)
      ? (s.code ||
          (s.statusCode === 403
            ? (s.code = 40300)
            : ((s.code = 40170), (s.statusCode = 401))),
        s)
      : new h(w(s), s.code || 40170, s.statusCode || 401);
  }
  var co = (s, n) => {
    let e = p.BufferUtils,
      t = e.utf8Encode(s),
      r = e.utf8Encode(n),
      o = e.hmacSha256(t, r);
    return e.base64Encode(o);
  };
  function qs(s) {
    if (!s) return "";
    typeof s == "string" && (s = JSON.parse(s));
    let n = Object.create(null),
      e = pe(s, !0);
    if (!e) return "";
    e.sort();
    for (let t = 0; t < e.length; t++) n[e[t]] = s[e[t]].sort();
    return JSON.stringify(n);
  }
  function Ds(s, n) {
    if (s.authCallback)
      i.logAction(
        n,
        i.LOG_MINOR,
        "Auth()",
        "using token auth with authCallback"
      );
    else if (s.authUrl)
      i.logAction(n, i.LOG_MINOR, "Auth()", "using token auth with authUrl");
    else if (s.key)
      i.logAction(
        n,
        i.LOG_MINOR,
        "Auth()",
        "using token auth with client-side signing"
      );
    else if (s.tokenDetails)
      i.logAction(
        n,
        i.LOG_MINOR,
        "Auth()",
        "using token auth with supplied token only"
      );
    else {
      let e = "authOptions must include valid authentication parameters";
      throw (i.logAction(n, i.LOG_ERROR, "Auth()", e), new Error(e));
    }
  }
  function lo(s) {
    return "useTokenAuth" in s && !s.useTokenAuth;
  }
  function hn(s) {
    return (
      s.useTokenAuth ||
      (!lo(s) && (s.authCallback || s.authUrl || s.token || s.tokenDetails))
    );
  }
  function uo(s) {
    return !s.key && !s.authCallback && !s.authUrl;
  }
  var ho = 0;
  function po() {
    return ho++;
  }
  var un = class {
      constructor(n, e) {
        this.authOptions = {};
        if (
          ((this.client = n),
          (this.tokenParams = e.defaultTokenParams || {}),
          (this.currentTokenRequestId = null),
          (this.waitingForTokenRequest = null),
          hn(e))
        )
          uo(e) &&
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "Auth()",
              "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"
            ),
            this._saveTokenOptions(e.defaultTokenParams, e),
            Ds(this.authOptions, this.logger);
        else {
          if (!e.key) {
            let t =
              "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
            throw (
              (i.logAction(this.logger, i.LOG_ERROR, "Auth()", t),
              new h(t, 40160, 401))
            );
          }
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "Auth()",
            "anonymous, using basic auth"
          ),
            this._saveBasicOptions(e);
        }
      }
      get logger() {
        return this.client.logger;
      }
      async authorize(n, e) {
        if (e && e.key && this.authOptions.key !== e.key)
          throw new h(
            "Unable to update auth options with incompatible key",
            40102,
            401
          );
        try {
          let t = await this._forceNewToken(
            n != null ? n : null,
            e != null ? e : null
          );
          return ao(this.client)
            ? new Promise((r, o) => {
                this.client.connection.connectionManager.onAuthUpdated(
                  t,
                  (a, c) => (a ? o(a) : r(c))
                );
              })
            : t;
        } catch (t) {
          throw (
            (this.client.connection &&
              t.statusCode === fe.Forbidden &&
              this.client.connection.connectionManager.actOnErrorFromAuthorize(
                t
              ),
            t)
          );
        }
      }
      async _forceNewToken(n, e) {
        (this.tokenDetails = null),
          this._saveTokenOptions(n, e),
          Ds(this.authOptions, this.logger);
        try {
          return this._ensureValidAuthCredentials(!0);
        } finally {
          delete this.tokenParams.timestamp, delete this.authOptions.queryTime;
        }
      }
      async requestToken(n, e) {
        let t = e || this.authOptions,
          r = n || oe(this.tokenParams),
          o,
          a = this.client;
        if (t.authCallback)
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "Auth.requestToken()",
            "using token auth with authCallback"
          ),
            (o = t.authCallback);
        else if (t.authUrl)
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "Auth.requestToken()",
            "using token auth with authUrl"
          ),
            (o = (l, u) => {
              let f = b(
                  { accept: "application/json, text/plain" },
                  t.authHeaders
                ),
                d = t.authMethod && t.authMethod.toLowerCase() === "post",
                g,
                m = t.authUrl.indexOf("?");
              m > -1 &&
                ((g = Ae(t.authUrl.slice(m))),
                (t.authUrl = t.authUrl.slice(0, m)),
                d || (t.authParams = b(g, t.authParams)));
              let y = b({}, t.authParams || {}, l),
                P = (A) => {
                  var I, $;
                  let T = (I = A.body) != null ? I : null,
                    M = null;
                  if (A.error)
                    i.logAction(
                      this.logger,
                      i.LOG_MICRO,
                      "Auth.requestToken().tokenRequestCallback",
                      "Received Error: " + w(A.error)
                    );
                  else {
                    let F = ($ = A.headers["content-type"]) != null ? $ : null;
                    Array.isArray(F) ? (M = F.join(", ")) : (M = F),
                      i.logAction(
                        this.logger,
                        i.LOG_MICRO,
                        "Auth.requestToken().tokenRequestCallback",
                        "Received; content-type: " + M + "; body: " + $t(T)
                      );
                  }
                  if (A.error) {
                    u(A.error, null);
                    return;
                  }
                  if (A.unpacked) {
                    u(null, T);
                    return;
                  }
                  if ((p.BufferUtils.isBuffer(T) && (T = T.toString()), !M)) {
                    u(
                      new h(
                        "authUrl response is missing a content-type header",
                        40170,
                        401
                      ),
                      null
                    );
                    return;
                  }
                  let U = M.indexOf("application/json") > -1,
                    Me =
                      M.indexOf("text/plain") > -1 ||
                      M.indexOf("application/jwt") > -1;
                  if (!U && !Me) {
                    u(
                      new h(
                        "authUrl responded with unacceptable content-type " +
                          M +
                          ", should be either text/plain, application/jwt or application/json",
                        40170,
                        401
                      ),
                      null
                    );
                    return;
                  }
                  if (U) {
                    if (T.length > ln) {
                      u(
                        new h(
                          "authUrl response exceeded max permitted length",
                          40170,
                          401
                        ),
                        null
                      );
                      return;
                    }
                    try {
                      T = JSON.parse(T);
                    } catch (F) {
                      u(
                        new h(
                          "Unexpected error processing authURL response; err = " +
                            F.message,
                          40170,
                          401
                        ),
                        null
                      );
                      return;
                    }
                  }
                  u(null, T, M);
                };
              if (
                (i.logAction(
                  this.logger,
                  i.LOG_MICRO,
                  "Auth.requestToken().tokenRequestCallback",
                  "Requesting token from " +
                    t.authUrl +
                    "; Params: " +
                    JSON.stringify(y) +
                    "; method: " +
                    (d ? "POST" : "GET")
                ),
                d)
              ) {
                let A = f || {};
                A["content-type"] = "application/x-www-form-urlencoded";
                let T = le(y).slice(1);
                N(this.client.http.doUri(x.Post, t.authUrl, A, T, g), (M, U) =>
                  P(M || U)
                );
              } else
                N(
                  this.client.http.doUri(x.Get, t.authUrl, f || {}, null, y),
                  (A, T) => P(A || T)
                );
            });
        else if (t.key)
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "Auth.requestToken()",
            "using token auth with client-side signing"
          ),
            (o = (l, u) => {
              N(this.createTokenRequest(l, t), (f, d) =>
                u(f, d != null ? d : null)
              );
            });
        else {
          let l =
            "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
          throw (
            (i.logAction(
              this.logger,
              i.LOG_ERROR,
              "Auth()",
              "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"
            ),
            new h(l, 40171, 403))
          );
        }
        "capability" in r && (r.capability = qs(r.capability));
        let c = (l, u) => {
          let f = l.keyName,
            d = "/keys/" + f + "/requestToken",
            g = function (y) {
              return a.baseUri(y) + d;
            },
            m = R.defaultPostHeaders(this.client.options);
          t.requestHeaders && b(m, t.requestHeaders),
            i.logAction(
              this.logger,
              i.LOG_MICRO,
              "Auth.requestToken().requestToken",
              "Sending POST to " + d + "; Token params: " + JSON.stringify(l)
            ),
            N(
              this.client.http.do(x.Post, g, m, JSON.stringify(l), null),
              (y, P) => (y ? u(y) : u(P.error, P.body, P.unpacked))
            );
        };
        return new Promise((l, u) => {
          let f = !1,
            d = this.client.options.timeouts.realtimeRequestTimeout,
            g = setTimeout(() => {
              f = !0;
              let m =
                "Token request callback timed out after " +
                d / 1e3 +
                " seconds";
              i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", m),
                u(new h(m, 40170, 401));
            }, d);
          o(r, (m, y, P) => {
            if (f) return;
            if ((clearTimeout(g), m)) {
              i.logAction(
                this.logger,
                i.LOG_ERROR,
                "Auth.requestToken()",
                "token request signing call returned error; err = " + w(m)
              ),
                u(Ns(m));
              return;
            }
            if (typeof y == "string") {
              y.length === 0
                ? u(new h("Token string is empty", 40170, 401))
                : y.length > ln
                ? u(
                    new h(
                      "Token string exceeded max permitted length (was " +
                        y.length +
                        " bytes)",
                      40170,
                      401
                    )
                  )
                : y === "undefined" || y === "null"
                ? u(
                    new h("Token string was literal null/undefined", 40170, 401)
                  )
                : y[0] === "{" && !(P && P.indexOf("application/jwt") > -1)
                ? u(
                    new h(
                      "Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details",
                      40170,
                      401
                    )
                  )
                : l({ token: y });
              return;
            }
            if (typeof y != "object" || y === null) {
              let T =
                "Expected token request callback to call back with a token string or token request/details object, but got a " +
                typeof y;
              i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", T),
                u(new h(T, 40170, 401));
              return;
            }
            let A = JSON.stringify(y).length;
            if (A > ln && !t.suppressMaxLengthCheck) {
              u(
                new h(
                  "Token request/details object exceeded max permitted stringified size (was " +
                    A +
                    " bytes)",
                  40170,
                  401
                )
              );
              return;
            }
            if ("issued" in y) {
              l(y);
              return;
            }
            if (!("keyName" in y)) {
              let T =
                "Expected token request callback to call back with a token string, token request object, or token details object";
              i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", T),
                u(new h(T, 40170, 401));
              return;
            }
            c(y, (T, M, U) => {
              if (T) {
                i.logAction(
                  this.logger,
                  i.LOG_ERROR,
                  "Auth.requestToken()",
                  "token request API call returned error; err = " + w(T)
                ),
                  u(Ns(T));
                return;
              }
              U || (M = JSON.parse(M)),
                i.logAction(
                  this.logger,
                  i.LOG_MINOR,
                  "Auth.getToken()",
                  "token received"
                ),
                l(M);
            });
          });
        });
      }
      async createTokenRequest(n, e) {
        (e = e || this.authOptions), (n = n || oe(this.tokenParams));
        let t = e.key;
        if (!t) throw new h("No key specified", 40101, 403);
        let r = t.split(":"),
          o = r[0],
          a = r[1];
        if (!a) throw new h("Invalid key specified", 40101, 403);
        if (n.clientId === "")
          throw new h("clientId can\u2019t be an empty string", 40012, 400);
        "capability" in n && (n.capability = qs(n.capability));
        let c = b({ keyName: o }, n),
          l = n.clientId || "",
          u = n.ttl || "",
          f = n.capability || "";
        c.timestamp ||
          (c.timestamp = await this.getTimestamp(e && e.queryTime));
        let d = c.nonce || (c.nonce = io()),
          g = c.timestamp,
          m =
            c.keyName +
            `
` +
            u +
            `
` +
            f +
            `
` +
            l +
            `
` +
            g +
            `
` +
            d +
            `
`;
        return (
          (c.mac = c.mac || co(m, a)),
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "Auth.getTokenRequest()",
            "generated signed request"
          ),
          c
        );
      }
      async getAuthParams() {
        if (this.method == "basic") return { key: this.key };
        {
          let n = await this._ensureValidAuthCredentials(!1);
          if (!n)
            throw new Error(
              "Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails"
            );
          return { access_token: n.token };
        }
      }
      async getAuthHeaders() {
        if (this.method == "basic")
          return { authorization: "Basic " + this.basicKey };
        {
          let n = await this._ensureValidAuthCredentials(!1);
          if (!n)
            throw new Error(
              "Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails"
            );
          return { authorization: "Bearer " + Oe(n.token) };
        }
      }
      async getTimestamp(n) {
        return !this.isTimeOffsetSet() && (n || this.authOptions.queryTime)
          ? this.client.time()
          : this.getTimestampUsingOffset();
      }
      getTimestampUsingOffset() {
        return Date.now() + (this.client.serverTimeOffset || 0);
      }
      isTimeOffsetSet() {
        return this.client.serverTimeOffset !== null;
      }
      _saveBasicOptions(n) {
        (this.method = "basic"),
          (this.key = n.key),
          (this.basicKey = Oe(n.key)),
          (this.authOptions = n || {}),
          "clientId" in n && this._userSetClientId(n.clientId);
      }
      _saveTokenOptions(n, e) {
        (this.method = "token"),
          n && (this.tokenParams = n),
          e &&
            (e.token &&
              (e.tokenDetails =
                typeof e.token == "string" ? { token: e.token } : e.token),
            e.tokenDetails && (this.tokenDetails = e.tokenDetails),
            "clientId" in e && this._userSetClientId(e.clientId),
            (this.authOptions = e));
      }
      async _ensureValidAuthCredentials(n) {
        let e = this.tokenDetails;
        if (e) {
          if (this._tokenClientIdMismatch(e.clientId))
            throw new h(
              "Mismatch between clientId in token (" +
                e.clientId +
                ") and current clientId (" +
                this.clientId +
                ")",
              40102,
              403
            );
          if (
            !this.isTimeOffsetSet() ||
            !e.expires ||
            e.expires >= this.getTimestampUsingOffset()
          )
            return (
              i.logAction(
                this.logger,
                i.LOG_MINOR,
                "Auth.getToken()",
                "using cached token; expires = " + e.expires
              ),
              e
            );
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "Auth.getToken()",
            "deleting expired token"
          ),
            (this.tokenDetails = null);
        }
        let t = (
          this.waitingForTokenRequest ||
          (this.waitingForTokenRequest = Se.create(this.logger))
        ).createPromise();
        if (this.currentTokenRequestId !== null && !n) return t;
        let r = (this.currentTokenRequestId = po()),
          o,
          a = null;
        try {
          o = await this.requestToken(this.tokenParams, this.authOptions);
        } catch (l) {
          a = l;
        }
        if (this.currentTokenRequestId > r)
          return (
            i.logAction(
              this.logger,
              i.LOG_MINOR,
              "Auth._ensureValidAuthCredentials()",
              "Discarding token request response; overtaken by newer one"
            ),
            t
          );
        this.currentTokenRequestId = null;
        let c = this.waitingForTokenRequest;
        return (
          (this.waitingForTokenRequest = null),
          a
            ? (c == null || c.rejectAll(a), t)
            : (c == null || c.resolveAll((this.tokenDetails = o)), t)
        );
      }
      _userSetClientId(n) {
        if (typeof n == "string" || n === null) {
          if (n === "*")
            throw new h(
              'Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)',
              40012,
              400
            );
          {
            let e = this._uncheckedSetClientId(n);
            if (e) throw e;
          }
        } else
          throw new h("clientId must be either a string or null", 40012, 400);
      }
      _uncheckedSetClientId(n) {
        if (this._tokenClientIdMismatch(n)) {
          let e =
              "Unexpected clientId mismatch: client has " +
              this.clientId +
              ", requested " +
              n,
            t = new h(e, 40102, 401);
          return (
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "Auth._uncheckedSetClientId()",
              e
            ),
            t
          );
        } else return (this.clientId = this.tokenParams.clientId = n), null;
      }
      _tokenClientIdMismatch(n) {
        return !!(
          this.clientId &&
          this.clientId !== "*" &&
          n &&
          n !== "*" &&
          this.clientId !== n
        );
      }
      static isTokenErr(n) {
        return n.code && n.code >= 40140 && n.code < 40150;
      }
      revokeTokens(n, e) {
        return this.client.rest.revokeTokens(n, e);
      }
    },
    X = un;
  function yt(s) {
    let n = [];
    if (s) for (let e in s) n.push(e + "=" + s[e]);
    return n.join("&");
  }
  function Ie(s, n) {
    return s + (n ? "?" : "") + yt(n);
  }
  function fo(s, n, e, t, r) {
    s.error
      ? i.logActionNoStrip(
          r,
          i.LOG_MICRO,
          "Http." + n + "()",
          "Received Error; " + Ie(e, t) + "; Error: " + w(s.error)
        )
      : i.logActionNoStrip(
          r,
          i.LOG_MICRO,
          "Http." + n + "()",
          "Received; " +
            Ie(e, t) +
            "; Headers: " +
            yt(s.headers) +
            "; StatusCode: " +
            s.statusCode +
            "; Body" +
            (p.BufferUtils.isBuffer(s.body)
              ? " (Base64): " + p.BufferUtils.base64Encode(s.body)
              : ": " + s.body)
        );
  }
  function go(s, n, e, t, r) {
    r.shouldLog(i.LOG_MICRO) &&
      i.logActionNoStrip(
        r,
        i.LOG_MICRO,
        "Http." + s + "()",
        "Sending; " +
          Ie(n, t) +
          "; Body" +
          (p.BufferUtils.isBuffer(e)
            ? " (Base64): " + p.BufferUtils.base64Encode(e)
            : ": " + e)
      );
  }
  var ge = class {
    constructor(n) {
      this.client = n;
      (this.platformHttp = new p.Http(n)),
        (this.checkConnectivity = this.platformHttp.checkConnectivity
          ? () => this.platformHttp.checkConnectivity()
          : void 0);
    }
    get logger() {
      var n, e;
      return (e = (n = this.client) == null ? void 0 : n.logger) != null
        ? e
        : i.defaultLogger;
    }
    get supportsAuthHeaders() {
      return this.platformHttp.supportsAuthHeaders;
    }
    get supportsLinkHeaders() {
      return this.platformHttp.supportsLinkHeaders;
    }
    _getHosts(n) {
      let e = n.connection,
        t = e && e.connectionManager.host;
      return t
        ? [t].concat(R.getFallbackHosts(n.options))
        : R.getHosts(n.options);
    }
    async do(n, e, t, r, o) {
      try {
        let a = this.client;
        if (!a)
          return { error: new h("http.do called without client", 5e4, 500) };
        let c =
            typeof e == "function"
              ? e
              : function (g) {
                  return a.baseUri(g) + e;
                },
          l = a._currentFallback;
        if (l)
          if (l.validUntil > Date.now()) {
            let g = await this.doUri(n, c(l.host), t, r, o);
            return g.error && this.platformHttp.shouldFallback(g.error)
              ? ((a._currentFallback = null), this.do(n, e, t, r, o))
              : g;
          } else a._currentFallback = null;
        let u = this._getHosts(a);
        if (u.length === 1) return this.doUri(n, c(u[0]), t, r, o);
        let f = null,
          d = async (g, m) => {
            let y = g.shift();
            f = f != null ? f : new Date();
            let P = await this.doUri(n, c(y), t, r, o);
            return P.error &&
              this.platformHttp.shouldFallback(P.error) &&
              g.length
              ? Date.now() - f.getTime() >
                a.options.timeouts.httpMaxRetryDuration
                ? {
                    error: new h(
                      `Timeout for trying fallback hosts retries. Total elapsed time exceeded the ${a.options.timeouts.httpMaxRetryDuration}ms limit`,
                      50003,
                      500
                    ),
                  }
                : d(g, !0)
              : (m &&
                  (a._currentFallback = {
                    host: y,
                    validUntil:
                      Date.now() + a.options.timeouts.fallbackRetryTimeout,
                  }),
                P);
          };
        return d(u);
      } catch (a) {
        return {
          error: new h(`Unexpected error in Http.do: ${w(a)}`, 500, 5e4),
        };
      }
    }
    async doUri(n, e, t, r, o) {
      try {
        go(n, e, r, o, this.logger);
        let a = await this.platformHttp.doUri(n, e, t, r, o);
        return (
          this.logger.shouldLog(i.LOG_MICRO) && fo(a, n, e, o, this.logger), a
        );
      } catch (a) {
        return {
          error: new h(`Unexpected error in Http.doUri: ${w(a)}`, 500, 5e4),
        };
      }
    }
  };
  var Rt = class {
    constructor(n) {
      this.Platform = p;
      this.ErrorInfo = h;
      this.Logger = i;
      this.Defaults = R;
      this.Utils = k;
      var t, r, o, a, c, l, u, f, d, g;
      (this._additionalHTTPRequestImplementations =
        (t = n.plugins) != null ? t : null),
        (this.logger = new i()),
        this.logger.setLog(n.logLevel, n.logHandler),
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "BaseClient()",
          "initialized with clientOptions " + p.Config.inspect(n)
        ),
        (this._MsgPack =
          (o = (r = n.plugins) == null ? void 0 : r.MsgPack) != null
            ? o
            : null);
      let e = (this.options = R.normaliseOptions(
        n,
        this._MsgPack,
        this.logger
      ));
      if (e.key) {
        let m = e.key.match(/^([^:\s]+):([^:.\s]+)$/);
        if (!m) {
          let y = "invalid key parameter";
          throw (
            (i.logAction(this.logger, i.LOG_ERROR, "BaseClient()", y),
            new h(y, 40400, 404))
          );
        }
        (e.keyName = m[1]), (e.keySecret = m[2]);
      }
      if ("clientId" in e)
        if (typeof e.clientId == "string" || e.clientId === null) {
          if (e.clientId === "*")
            throw new h(
              'Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})',
              40012,
              400
            );
        } else
          throw new h("clientId must be either a string or null", 40012, 400);
      i.logAction(
        this.logger,
        i.LOG_MINOR,
        "BaseClient()",
        "started; version = " + R.version
      ),
        (this._currentFallback = null),
        (this.serverTimeOffset = null),
        (this.http = new ge(this)),
        (this.auth = new X(this, e)),
        (this._rest =
          (a = n.plugins) != null && a.Rest ? new n.plugins.Rest(this) : null),
        (this._Crypto =
          (l = (c = n.plugins) == null ? void 0 : c.Crypto) != null ? l : null),
        (this.__FilteredSubscriptions =
          (f = (u = n.plugins) == null ? void 0 : u.MessageInteractions) != null
            ? f
            : null),
        (this._Annotations =
          (g = (d = n.plugins) == null ? void 0 : d.Annotations) != null
            ? g
            : null);
    }
    get rest() {
      return this._rest || L("Rest"), this._rest;
    }
    get _FilteredSubscriptions() {
      return (
        this.__FilteredSubscriptions || L("MessageInteractions"),
        this.__FilteredSubscriptions
      );
    }
    get channels() {
      return this.rest.channels;
    }
    get push() {
      return this.rest.push;
    }
    get device() {
      var n;
      return (
        (!((n = this.options.plugins) != null && n.Push) ||
          !this.push.LocalDevice) &&
          L("Push"),
        this._device || (this._device = this.push.LocalDevice.load(this)),
        this._device
      );
    }
    baseUri(n) {
      return (
        R.getHttpScheme(this.options) + n + ":" + R.getPort(this.options, !1)
      );
    }
    async stats(n) {
      return this.rest.stats(n);
    }
    async time(n) {
      return this.rest.time(n);
    }
    async request(n, e, t, r, o, a) {
      return this.rest.request(n, e, t, r, o, a);
    }
    batchPublish(n) {
      return this.rest.batchPublish(n);
    }
    batchPresence(n) {
      return this.rest.batchPresence(n);
    }
    setLog(n) {
      this.logger.setLog(n.level, n.handler);
    }
  };
  Rt.Platform = p;
  var Pt = Rt;
  var dn = class s {
      toJSON() {
        var n, e, t;
        return {
          id: this.id,
          deviceSecret: this.deviceSecret,
          platform: this.platform,
          formFactor: this.formFactor,
          clientId: this.clientId,
          metadata: this.metadata,
          deviceIdentityToken: this.deviceIdentityToken,
          push: {
            recipient: (n = this.push) == null ? void 0 : n.recipient,
            state: (e = this.push) == null ? void 0 : e.state,
            error: (t = this.push) == null ? void 0 : t.error,
          },
        };
      }
      toString() {
        var e, t, r, o;
        let n = "[DeviceDetails";
        return (
          this.id && (n += "; id=" + this.id),
          this.platform && (n += "; platform=" + this.platform),
          this.formFactor && (n += "; formFactor=" + this.formFactor),
          this.clientId && (n += "; clientId=" + this.clientId),
          this.metadata && (n += "; metadata=" + this.metadata),
          this.deviceIdentityToken &&
            (n +=
              "; deviceIdentityToken=" +
              JSON.stringify(this.deviceIdentityToken)),
          (e = this.push) != null &&
            e.recipient &&
            (n += "; push.recipient=" + JSON.stringify(this.push.recipient)),
          (t = this.push) != null &&
            t.state &&
            (n += "; push.state=" + this.push.state),
          (r = this.push) != null &&
            r.error &&
            (n += "; push.error=" + JSON.stringify(this.push.error)),
          (o = this.push) != null &&
            o.metadata &&
            (n += "; push.metadata=" + this.push.metadata),
          (n += "]"),
          n
        );
      }
      static toRequestBody(n, e, t) {
        return H(n, e, t);
      }
      static fromResponseBody(n, e, t) {
        return (
          t && (n = B(n, e, t)),
          Array.isArray(n) ? s.fromValuesArray(n) : s.fromValues(n)
        );
      }
      static fromValues(n) {
        return (
          (n.error = n.error && h.fromValues(n.error)),
          Object.assign(new s(), n)
        );
      }
      static fromLocalDevice(n) {
        return Object.assign(new s(), n);
      }
      static fromValuesArray(n) {
        let e = n.length,
          t = new Array(e);
        for (let r = 0; r < e; r++) t[r] = s.fromValues(n[r]);
        return t;
      }
    },
    me = dn;
  async function Hs(s, n, e, t) {
    if (s.http.supportsAuthHeaders) {
      let r = await s.auth.getAuthHeaders();
      return t(b(r, n), e);
    } else {
      let r = await s.auth.getAuthParams();
      return t(n, b(r, e));
    }
  }
  function mo(s, n, e) {
    if (s.err && !s.body) return { err: s.err };
    if (s.statusCode === fe.NoContent)
      return D(O({}, s), { body: [], unpacked: !0 });
    let t = s.body;
    if (!s.unpacked)
      try {
        t = B(t, n, e);
      } catch (c) {
        return Ke(c) ? { err: c } : { err: new S(w(c), null) };
      }
    if (!t)
      return { err: new S("unenvelope(): Response body is missing", null) };
    let { statusCode: r, response: o, headers: a } = t;
    if (r === void 0) return D(O({}, s), { body: t, unpacked: !0 });
    if (r < 200 || r >= 300) {
      let c = (o && o.error) || s.err;
      return (
        c ||
          ((c = new Error("Error in unenveloping " + t)), (c.statusCode = r)),
        { err: c, body: o, headers: a, unpacked: !0, statusCode: r }
      );
    }
    return { err: s.err, body: o, headers: a, unpacked: !0, statusCode: r };
  }
  function yo(s, n, e, t, r) {
    s.err
      ? i.logAction(
          r,
          i.LOG_MICRO,
          "Resource." + n + "()",
          "Received Error; " + Ie(e, t) + "; Error: " + w(s.err)
        )
      : i.logAction(
          r,
          i.LOG_MICRO,
          "Resource." + n + "()",
          "Received; " +
            Ie(e, t) +
            "; Headers: " +
            yt(s.headers) +
            "; StatusCode: " +
            s.statusCode +
            "; Body: " +
            (p.BufferUtils.isBuffer(s.body)
              ? " (Base64): " + p.BufferUtils.base64Encode(s.body)
              : ": " + p.Config.inspect(s.body))
        );
  }
  var pn = class s {
      static async get(n, e, t, r, o, a) {
        return s.do(x.Get, n, e, null, t, r, o, a != null ? a : !1);
      }
      static async delete(n, e, t, r, o, a) {
        return s.do(x.Delete, n, e, null, t, r, o, a);
      }
      static async post(n, e, t, r, o, a, c) {
        return s.do(x.Post, n, e, t, r, o, a, c);
      }
      static async patch(n, e, t, r, o, a, c) {
        return s.do(x.Patch, n, e, t, r, o, a, c);
      }
      static async put(n, e, t, r, o, a, c) {
        return s.do(x.Put, n, e, t, r, o, a, c);
      }
      static async do(n, e, t, r, o, a, c, l) {
        c && ((a = a || {}).envelope = c);
        let u = e.logger;
        async function f(g, m) {
          var P;
          if (u.shouldLog(i.LOG_MICRO)) {
            let A = r;
            if (
              ((P = g["content-type"]) == null
                ? void 0
                : P.indexOf("msgpack")) > 0
            )
              try {
                e._MsgPack || L("MsgPack"), (A = e._MsgPack.decode(r));
              } catch (T) {
                i.logAction(
                  u,
                  i.LOG_MICRO,
                  "Resource." + n + "()",
                  "Sending MsgPack Decoding Error: " + w(T)
                );
              }
            i.logAction(
              u,
              i.LOG_MICRO,
              "Resource." + n + "()",
              "Sending; " + Ie(t, m) + "; Body: " + A
            );
          }
          let y = await e.http.do(n, t, g, r, m);
          return y.error && X.isTokenErr(y.error)
            ? (await e.auth.authorize(null, null), Hs(e, g, m, f))
            : {
                err: y.error,
                body: y.body,
                headers: y.headers,
                unpacked: y.unpacked,
                statusCode: y.statusCode,
              };
        }
        let d = await Hs(e, o, a, f);
        if (
          (c && (d = mo(d, e._MsgPack, c)),
          u.shouldLog(i.LOG_MICRO) && yo(d, n, t, a, u),
          l)
        ) {
          if (d.err) throw d.err;
          {
            let g = O({}, d);
            return delete g.err, g;
          }
        }
        return d;
      }
    },
    E = pn;
  function Ro(s) {
    let n = s.match(/^\.\/(\w+)\?(.*)$/);
    return n && n[2] && Ae(n[2]);
  }
  function Po(s) {
    typeof s == "string" && (s = s.split(","));
    let n = {};
    for (let e = 0; e < s.length; e++) {
      let t = s[e].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
      if (t) {
        let r = Ro(t[1]);
        r && (n[t[2]] = r);
      }
    }
    return n;
  }
  function bo(s, n, e) {
    return !(e && (n || typeof s.code == "number"));
  }
  var fn = class {
      constructor(n, e, t, r, o, a) {
        (this.client = n),
          (this.path = e),
          (this.headers = t),
          (this.envelope = r != null ? r : null),
          (this.bodyHandler = o),
          (this.useHttpPaginatedResponse = a || !1);
      }
      get logger() {
        return this.client.logger;
      }
      async get(n) {
        let e = await E.get(
          this.client,
          this.path,
          this.headers,
          n,
          this.envelope,
          !1
        );
        return this.handlePage(e);
      }
      async delete(n) {
        let e = await E.delete(
          this.client,
          this.path,
          this.headers,
          n,
          this.envelope,
          !1
        );
        return this.handlePage(e);
      }
      async post(n, e) {
        let t = await E.post(
          this.client,
          this.path,
          e,
          this.headers,
          n,
          this.envelope,
          !1
        );
        return this.handlePage(t);
      }
      async put(n, e) {
        let t = await E.put(
          this.client,
          this.path,
          e,
          this.headers,
          n,
          this.envelope,
          !1
        );
        return this.handlePage(t);
      }
      async patch(n, e) {
        let t = await E.patch(
          this.client,
          this.path,
          e,
          this.headers,
          n,
          this.envelope,
          !1
        );
        return this.handlePage(t);
      }
      async handlePage(n) {
        if (n.err && bo(n.err, n.body, this.useHttpPaginatedResponse))
          throw (
            (i.logAction(
              this.logger,
              i.LOG_ERROR,
              "PaginatedResource.handlePage()",
              "Unexpected error getting resource: err = " + w(n.err)
            ),
            n.err)
          );
        let e, t, r;
        try {
          e =
            n.statusCode == fe.NoContent
              ? []
              : await this.bodyHandler(n.body, n.headers || {}, n.unpacked);
        } catch (o) {
          throw n.err || o;
        }
        return (
          n.headers && (t = n.headers.Link || n.headers.link) && (r = Po(t)),
          this.useHttpPaginatedResponse
            ? new gn(this, e, n.headers || {}, n.statusCode, r, n.err)
            : new bt(this, e, r)
        );
      }
    },
    bt = class {
      constructor(n, e, t) {
        (this.resource = n), (this.items = e);
        let r = this;
        t &&
          ("first" in t &&
            (this.first = async function () {
              return r.get(t.first);
            }),
          "current" in t &&
            (this.current = async function () {
              return r.get(t.current);
            }),
          (this.next = async function () {
            return "next" in t ? r.get(t.next) : null;
          }),
          (this.hasNext = function () {
            return "next" in t;
          }),
          (this.isLast = () => {
            var o;
            return !((o = this.hasNext) != null && o.call(this));
          }));
      }
      async get(n) {
        let e = this.resource,
          t = await E.get(e.client, e.path, e.headers, n, e.envelope, !1);
        return e.handlePage(t);
      }
    },
    gn = class extends bt {
      constructor(e, t, r, o, a, c) {
        super(e, t, a);
        (this.statusCode = o),
          (this.success = o < 300 && o >= 200),
          (this.headers = r),
          (this.errorCode = c && c.code),
          (this.errorMessage = c && c.message);
      }
      toJSON() {
        return {
          items: this.items,
          statusCode: this.statusCode,
          success: this.success,
          headers: this.headers,
          errorCode: this.errorCode,
          errorMessage: this.errorMessage,
        };
      }
    },
    V = fn;
  var we = class we {
    toJSON() {
      return {
        channel: this.channel,
        deviceId: this.deviceId,
        clientId: this.clientId,
      };
    }
    toString() {
      let n = "[PushChannelSubscription";
      return (
        this.channel && (n += "; channel=" + this.channel),
        this.deviceId && (n += "; deviceId=" + this.deviceId),
        this.clientId && (n += "; clientId=" + this.clientId),
        (n += "]"),
        n
      );
    }
    static fromResponseBody(n, e, t) {
      return (
        t && (n = B(n, e, t)),
        Array.isArray(n) ? we.fromValuesArray(n) : we.fromValues(n)
      );
    }
    static fromValues(n) {
      return Object.assign(new we(), n);
    }
    static fromValuesArray(n) {
      let e = n.length,
        t = new Array(e);
      for (let r = 0; r < e; r++) t[r] = we.fromValues(n[r]);
      return t;
    }
  };
  we.toRequestBody = H;
  var mn = we,
    Ct = mn;
  var yn = class {
      constructor(n) {
        var e;
        (this.client = n),
          (this.admin = new Rn(n)),
          p.Config.push &&
            (e = n.options.plugins) != null &&
            e.Push &&
            ((this.stateMachine =
              new n.options.plugins.Push.ActivationStateMachine(n)),
            (this.LocalDevice = n.options.plugins.Push.localDeviceFactory(me)));
      }
      async activate(n, e) {
        await new Promise((t, r) => {
          var o;
          if (!((o = this.client.options.plugins) != null && o.Push)) {
            r($e("Push"));
            return;
          }
          if (!this.stateMachine) {
            r(
              new h(
                "This platform is not supported as a target of push notifications",
                4e4,
                400
              )
            );
            return;
          }
          if (this.stateMachine.activatedCallback) {
            r(new h("Activation already in progress", 4e4, 400));
            return;
          }
          (this.stateMachine.activatedCallback = (a) => {
            if (a) {
              r(a);
              return;
            }
            t();
          }),
            (this.stateMachine.updateFailedCallback = e),
            this.stateMachine.handleEvent(
              new this.client.options.plugins.Push.CalledActivate(
                this.stateMachine,
                n
              )
            );
        });
      }
      async deactivate(n) {
        await new Promise((e, t) => {
          var r;
          if (!((r = this.client.options.plugins) != null && r.Push)) {
            t($e("Push"));
            return;
          }
          if (!this.stateMachine) {
            t(
              new h(
                "This platform is not supported as a target of push notifications",
                4e4,
                400
              )
            );
            return;
          }
          if (this.stateMachine.deactivatedCallback) {
            t(new h("Deactivation already in progress", 4e4, 400));
            return;
          }
          (this.stateMachine.deactivatedCallback = (o) => {
            if (o) {
              t(o);
              return;
            }
            e();
          }),
            this.stateMachine.handleEvent(
              new this.client.options.plugins.Push.CalledDeactivate(
                this.stateMachine,
                n
              )
            );
        });
      }
    },
    Rn = class {
      constructor(n) {
        (this.client = n),
          (this.deviceRegistrations = new Pn(n)),
          (this.channelSubscriptions = new bn(n));
      }
      async publish(n, e) {
        let t = this.client,
          r = t.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(t.options, { format: r }),
          a = {},
          c = b({ recipient: n }, e);
        b(o, t.options.headers),
          t.options.pushFullWait && b(a, { fullWait: "true" });
        let l = H(c, t._MsgPack, r);
        await E.post(t, "/push/publish", l, o, a, null, !0);
      }
    },
    Pn = class {
      constructor(n) {
        this.client = n;
      }
      async save(n) {
        let e = this.client,
          t = me.fromValues(n),
          r = e.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(e.options, { format: r }),
          a = {};
        b(o, e.options.headers),
          e.options.pushFullWait && b(a, { fullWait: "true" });
        let c = H(t, e._MsgPack, r),
          l = await E.put(
            e,
            "/push/deviceRegistrations/" + encodeURIComponent(n.id),
            c,
            o,
            a,
            null,
            !0
          );
        return me.fromResponseBody(l.body, e._MsgPack, l.unpacked ? void 0 : r);
      }
      async get(n) {
        let e = this.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: t }),
          o = n.id || n;
        if (typeof o != "string" || !o.length)
          throw new h(
            "First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails",
            4e4,
            400
          );
        b(r, e.options.headers);
        let a = await E.get(
          e,
          "/push/deviceRegistrations/" + encodeURIComponent(o),
          r,
          {},
          null,
          !0
        );
        return me.fromResponseBody(a.body, e._MsgPack, a.unpacked ? void 0 : t);
      }
      async list(n) {
        let e = this.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : t,
          o = R.defaultGetHeaders(e.options, { format: t });
        return (
          b(o, e.options.headers),
          new V(e, "/push/deviceRegistrations", o, r, async function (a, c, l) {
            return me.fromResponseBody(a, e._MsgPack, l ? void 0 : t);
          }).get(n)
        );
      }
      async remove(n) {
        let e = this.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: t }),
          o = {},
          a = n.id || n;
        if (typeof a != "string" || !a.length)
          throw new h(
            "First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails",
            4e4,
            400
          );
        b(r, e.options.headers),
          e.options.pushFullWait && b(o, { fullWait: "true" }),
          await E.delete(
            e,
            "/push/deviceRegistrations/" + encodeURIComponent(a),
            r,
            o,
            null,
            !0
          );
      }
      async removeWhere(n) {
        let e = this.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: t });
        b(r, e.options.headers),
          e.options.pushFullWait && b(n, { fullWait: "true" }),
          await E.delete(e, "/push/deviceRegistrations", r, n, null, !0);
      }
    },
    bn = class s {
      constructor(n) {
        this.remove = s.prototype.removeWhere;
        this.client = n;
      }
      async save(n) {
        let e = this.client,
          t = Ct.fromValues(n),
          r = e.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(e.options, { format: r }),
          a = {};
        b(o, e.options.headers),
          e.options.pushFullWait && b(a, { fullWait: "true" });
        let c = H(t, e._MsgPack, r),
          l = await E.post(e, "/push/channelSubscriptions", c, o, a, null, !0);
        return Ct.fromResponseBody(l.body, e._MsgPack, l.unpacked ? void 0 : r);
      }
      async list(n) {
        let e = this.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : t,
          o = R.defaultGetHeaders(e.options, { format: t });
        return (
          b(o, e.options.headers),
          new V(e, "/push/channelSubscriptions", o, r, async function (
            a,
            c,
            l
          ) {
            return Ct.fromResponseBody(a, e._MsgPack, l ? void 0 : t);
          }).get(n)
        );
      }
      async removeWhere(n) {
        let e = this.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: t });
        b(r, e.options.headers),
          e.options.pushFullWait && b(n, { fullWait: "true" }),
          await E.delete(e, "/push/channelSubscriptions", r, n, null, !0);
      }
      async listChannels(n) {
        let e = this.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : t,
          o = R.defaultGetHeaders(e.options, { format: t });
        return (
          b(o, e.options.headers),
          e.options.pushFullWait && b(n, { fullWait: "true" }),
          new V(e, "/push/channels", o, r, async function (a, c, l) {
            let u = !l && t ? B(a, e._MsgPack, t) : a;
            for (let f = 0; f < u.length; f++) u[f] = String(u[f]);
            return u;
          }).get(n)
        );
      }
    },
    Gs = yn;
  var C = {
      HEARTBEAT: 0,
      ACK: 1,
      NACK: 2,
      CONNECT: 3,
      CONNECTED: 4,
      DISCONNECT: 5,
      DISCONNECTED: 6,
      CLOSE: 7,
      CLOSED: 8,
      ERROR: 9,
      ATTACH: 10,
      ATTACHED: 11,
      DETACH: 12,
      DETACHED: 13,
      PRESENCE: 14,
      MESSAGE: 15,
      SYNC: 16,
      AUTH: 17,
      ACTIVATE: 18,
      STATE: 19,
      STATE_SYNC: 20,
      ANNOTATION: 21,
    },
    Cn = [];
  Object.keys(C).forEach(function (s) {
    Cn[C[s]] = s;
  });
  var K = {
      HAS_PRESENCE: 1,
      HAS_BACKLOG: 2,
      RESUMED: 4,
      TRANSIENT: 16,
      ATTACH_RESUME: 32,
      PRESENCE: 65536,
      PUBLISH: 1 << 17,
      SUBSCRIBE: 1 << 18,
      PRESENCE_SUBSCRIBE: 1 << 19,
      ANNOTATION_PUBLISH: 1 << 21,
      ANNOTATION_SUBSCRIBE: 1 << 22,
    },
    Fs = Object.keys(K);
  K.MODE_ALL =
    K.PRESENCE |
    K.PUBLISH |
    K.SUBSCRIBE |
    K.PRESENCE_SUBSCRIBE |
    K.ANNOTATION_PUBLISH |
    K.ANNOTATION_SUBSCRIBE;
  var At = [
    "PRESENCE",
    "PUBLISH",
    "SUBSCRIBE",
    "PRESENCE_SUBSCRIBE",
    "ANNOTATION_PUBLISH",
    "ANNOTATION_SUBSCRIBE",
  ];
  function Co(s) {
    return !s || !s.channelOptions
      ? { channelOptions: s, plugins: {}, baseEncodedPreviousPayload: void 0 }
      : s;
  }
  function Tt(s, n, e) {
    if (e && e.cipher) {
      s || L("Crypto");
      let t = s.getCipher(e.cipher, n);
      return { cipher: t.cipherParams, channelCipher: t.cipher };
    }
    return e != null ? e : {};
  }
  async function Ao(s, n) {
    let e = s.data,
      t = s.encoding,
      r = n.channelCipher;
    (t = t ? t + "/" : ""),
      p.BufferUtils.isBuffer(e) ||
        ((e = p.BufferUtils.utf8Encode(String(e))), (t = t + "utf-8/"));
    let o = await r.encrypt(e);
    return (s.data = o), (s.encoding = t + "cipher+" + r.algorithm), s;
  }
  async function Ee(s, n) {
    let e = s.data;
    if (
      !(
        typeof e == "string" ||
        p.BufferUtils.isBuffer(e) ||
        e === null ||
        e === void 0
      )
    )
      if (ie(e) || Array.isArray(e))
        (s.data = JSON.stringify(e)),
          (s.encoding = s.encoding ? s.encoding + "/json" : "json");
      else throw new h("Data type is unsupported", 40013, 400);
    return n != null && n.cipher ? Ao(s, n) : s;
  }
  async function xe(s, n) {
    let e = Co(n),
      t = s.data,
      r = s.encoding;
    if (r) {
      let o = r.split("/"),
        a,
        c = o.length,
        l = s.data,
        u = "";
      try {
        for (; (a = c) > 0; ) {
          let f = o[--c].match(/([-\w]+)(\+([\w-]+))?/);
          if (!f) break;
          switch (((u = f[1]), u)) {
            case "base64":
              (l = p.BufferUtils.base64Decode(String(l))),
                a == o.length && (t = l);
              continue;
            case "utf-8":
              l = p.BufferUtils.utf8Decode(l);
              continue;
            case "json":
              l = JSON.parse(l);
              continue;
            case "cipher":
              if (
                e.channelOptions != null &&
                e.channelOptions.cipher &&
                e.channelOptions.channelCipher
              ) {
                let d = f[3],
                  g = e.channelOptions.channelCipher;
                if (d != g.algorithm)
                  throw new Error(
                    "Unable to decrypt message with given cipher; incompatible cipher params"
                  );
                l = await g.decrypt(l);
                continue;
              } else
                throw new Error(
                  "Unable to decrypt message; not an encrypted channel"
                );
            case "vcdiff":
              if (!e.plugins || !e.plugins.vcdiff)
                throw new h(
                  "Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)",
                  40019,
                  400
                );
              if (typeof Uint8Array == "undefined")
                throw new h(
                  "Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)",
                  40020,
                  400
                );
              try {
                let d = e.baseEncodedPreviousPayload;
                typeof d == "string" && (d = p.BufferUtils.utf8Encode(d));
                let g = p.BufferUtils.toBuffer(d);
                (l = p.BufferUtils.toBuffer(l)),
                  (l = p.BufferUtils.arrayBufferViewToBuffer(
                    e.plugins.vcdiff.decode(l, g)
                  )),
                  (t = l);
              } catch (d) {
                throw new h("Vcdiff delta decode failed with " + d, 40018, 400);
              }
              continue;
            default:
              throw new Error("Unknown encoding");
          }
        }
      } catch (f) {
        let d = f;
        throw new h(
          "Error processing the " +
            u +
            " encoding, decoder returned \u2018" +
            d.message +
            "\u2019",
          d.code || 40013,
          400
        );
      } finally {
        (s.encoding = a <= 0 ? null : o.slice(0, a).join("/")), (s.data = l);
      }
    }
    e.baseEncodedPreviousPayload = t;
  }
  function Ue(...s) {
    let n = this.encoding,
      e = this.data;
    return (
      e &&
        p.BufferUtils.isBuffer(e) &&
        (s.length > 0
          ? ((n = n ? n + "/base64" : "base64"),
            (e = p.BufferUtils.base64Encode(e)))
          : (e = p.BufferUtils.toBuffer(e))),
      Object.assign({}, this, { encoding: n, data: e })
    );
  }
  function It(s) {
    let { id: n, connectionId: e, timestamp: t } = s,
      r;
    switch (s.action) {
      case C.MESSAGE: {
        r = s.messages;
        break;
      }
      case C.PRESENCE:
      case C.SYNC:
        r = s.presence;
        break;
      case C.ANNOTATION:
        r = s.annotations;
        break;
      default:
        throw new h("Unexpected action " + s.action, 4e4, 400);
    }
    for (let o = 0; o < r.length; o++) {
      let a = r[o];
      a.connectionId || (a.connectionId = e),
        a.timestamp || (a.timestamp = t),
        n && !a.id && (a.id = n + ":" + o);
    }
  }
  function ue(s, n) {
    let e = "[" + n;
    for (let t in s)
      t === "data"
        ? typeof s.data == "string"
          ? (e += "; data=" + s.data)
          : p.BufferUtils.isBuffer(s.data)
          ? (e += "; data (buffer)=" + p.BufferUtils.base64Encode(s.data))
          : (e += "; data (json)=" + JSON.stringify(s.data))
        : t && (t === "extras" || t === "operation")
        ? (e += "; " + t + "=" + JSON.stringify(s[t]))
        : s[t] !== void 0 && (e += "; " + t + "=" + s[t]);
    return (e += "]"), e;
  }
  var ee = class {};
  var Ws = ["absent", "present", "enter", "leave", "update"];
  async function An(s, n, e, t) {
    let r = Tt(n, s, t != null ? t : null);
    return he.fromValues(e).decode(r, s);
  }
  async function js(s, n, e, t) {
    return Promise.all(
      e.map(function (r) {
        return An(s, n, r, t);
      })
    );
  }
  async function To(s, n) {
    return he.fromValues(s).decode(n.channelOptions, n.logger);
  }
  async function kt(s, n) {
    return Promise.all(
      s.map(function (e) {
        return To(e, n);
      })
    );
  }
  var wt = class s extends ee {
      isSynthesized() {
        return !this.id || !this.connectionId
          ? !0
          : this.id.substring(this.connectionId.length, 0) !==
              this.connectionId;
      }
      parseId() {
        if (!this.id)
          throw new Error("parseId(): Presence message does not contain an id");
        let e = this.id.split(":");
        return {
          connectionId: e[0],
          msgSerial: parseInt(e[1], 10),
          index: parseInt(e[2], 10),
        };
      }
      async encode(e) {
        let t = Object.assign(new he(), this, {
          action: Ws.indexOf(this.action || "present"),
        });
        return Ee(t, e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((t) => s.fromValues(t));
      }
      static fromData(e) {
        return e instanceof s ? e : s.fromValues({ data: e });
      }
      toString() {
        return ue(this, "PresenceMessage");
      }
    },
    he = class s extends ee {
      toJSON(...e) {
        return Ue.call(this, ...e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((t) => s.fromValues(t));
      }
      async decode(e, t) {
        let r = Object.assign(
          new wt(),
          D(O({}, this), { action: Ws[this.action] })
        );
        try {
          await xe(r, e);
        } catch (o) {
          i.logAction(t, i.LOG_ERROR, "WirePresenceMessage.decode()", w(o));
        }
        return r;
      }
      toString() {
        return ue(this, "WirePresenceMessage");
      }
    },
    J = wt;
  var Tn = class {
      constructor(n) {
        this.channel = n;
      }
      get logger() {
        return this.channel.logger;
      }
      async get(n) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RestPresence.get()",
          "channel = " + this.channel.name
        );
        let e = this.channel.client,
          t = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.channel.client.http.supportsLinkHeaders ? void 0 : t,
          o = R.defaultGetHeaders(e.options, { format: t });
        return (
          b(o, e.options.headers),
          new V(
            e,
            this.channel.client.rest.presenceMixin.basePath(this),
            o,
            r,
            async (a, c, l) => {
              let u = l ? a : B(a, e._MsgPack, t);
              return kt(u, this.channel);
            }
          ).get(n)
        );
      }
      async history(n) {
        return (
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "RestPresence.history()",
            "channel = " + this.channel.name
          ),
          this.channel.client.rest.presenceMixin.history(this, n)
        );
      }
    },
    Vs = Tn;
  var zs = [
    "message.create",
    "message.update",
    "message.delete",
    "meta",
    "message.summary",
  ];
  function Io(s) {
    return zs[s || 0] || "unknown";
  }
  function wo(s) {
    let n = 0;
    return (
      s.name && (n += s.name.length),
      s.clientId && (n += s.clientId.length),
      s.extras && (n += JSON.stringify(s.extras).length),
      s.data && (n += Yt(s.data)),
      n
    );
  }
  async function In(s, n, e, t) {
    let r = Tt(n, s, t != null ? t : null);
    return ye.fromValues(e).decode(r, s);
  }
  async function Ks(s, n, e, t) {
    return Promise.all(
      e.map(function (r) {
        return In(s, n, r, t);
      })
    );
  }
  async function ko(s, n) {
    return ye.fromValues(s).decode(n.channelOptions, n.logger);
  }
  async function Js(s, n) {
    return Promise.all(
      s.map(function (e) {
        return ko(e, n);
      })
    );
  }
  async function Ot(s, n) {
    return Promise.all(s.map((e) => e.encode(n)));
  }
  var Qs = H;
  function Be(s) {
    let n,
      e = 0;
    for (let t = 0; t < s.length; t++)
      (n = s[t]), (e += n.size || (n.size = wo(n)));
    return e;
  }
  var Mt = class s extends ee {
      expandFields() {
        this.action === "message.create" &&
          (this.version && !this.serial && (this.serial = this.version),
          this.timestamp &&
            !this.createdAt &&
            (this.createdAt = this.timestamp));
      }
      async encode(e) {
        let t = Object.assign(new ye(), this, {
          action: zs.indexOf(this.action || "message.create"),
        });
        return Ee(t, e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((t) => s.fromValues(t));
      }
      toString() {
        return ue(this, "Message");
      }
    },
    ye = class s extends ee {
      toJSON(...e) {
        return Ue.call(this, ...e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((t) => s.fromValues(t));
      }
      async decodeWithErr(e, t) {
        let r = Object.assign(
            new Mt(),
            D(O({}, this), { action: Io(this.action) })
          ),
          o;
        try {
          await xe(r, e);
        } catch (a) {
          i.logAction(t, i.LOG_ERROR, "WireMessage.decode()", w(a)), (o = a);
        }
        return r.expandFields(), { decoded: r, err: o };
      }
      async decode(e, t) {
        let { decoded: r } = await this.decodeWithErr(e, t);
        return r;
      }
      toString() {
        return ue(this, "WireMessage");
      }
    },
    te = Mt;
  var Mo = 9;
  function Oo(s) {
    return s.every(function (n) {
      return !n.id;
    });
  }
  var wn = class {
      constructor(n, e, t) {
        this._annotations = null;
        var r, o;
        i.logAction(
          n.logger,
          i.LOG_MINOR,
          "RestChannel()",
          "started; name = " + e
        ),
          (this.name = e),
          (this.client = n),
          (this.presence = new Vs(this)),
          (this.channelOptions = ve(
            (r = n._Crypto) != null ? r : null,
            this.logger,
            t
          )),
          (o = n.options.plugins) != null &&
            o.Push &&
            (this._push = new n.options.plugins.Push.PushChannel(this)),
          n._Annotations &&
            (this._annotations = new n._Annotations.RestAnnotations(this));
      }
      get annotations() {
        return this._annotations || L("Annotations"), this._annotations;
      }
      get push() {
        return this._push || L("Push"), this._push;
      }
      get logger() {
        return this.client.logger;
      }
      setOptions(n) {
        var e;
        this.channelOptions = ve(
          (e = this.client._Crypto) != null ? e : null,
          this.logger,
          n
        );
      }
      async history(n) {
        return (
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "RestChannel.history()",
            "channel = " + this.name
          ),
          this.client.rest.channelMixin.history(this, n)
        );
      }
      async publish(...n) {
        let e = n[0],
          t = n[1],
          r,
          o;
        if (typeof e == "string" || e === null)
          (r = [te.fromValues({ name: e, data: t })]), (o = n[2]);
        else if (ie(e)) (r = [te.fromValues(e)]), (o = n[1]);
        else if (Array.isArray(e)) (r = te.fromValuesArray(e)), (o = n[1]);
        else
          throw new h(
            "The single-argument form of publish() expects a message object or an array of message objects",
            40013,
            400
          );
        o || (o = {});
        let a = this.client,
          c = a.options,
          l = c.useBinaryProtocol ? "msgpack" : "json",
          u = a.options.idempotentRestPublishing,
          f = R.defaultPostHeaders(a.options, { format: l });
        if ((b(f, c.headers), u && Oo(r))) {
          let y = await Zt(Mo);
          r.forEach(function (P, A) {
            P.id = y + ":" + A.toString();
          });
        }
        let d = await Ot(r, this.channelOptions),
          g = Be(d),
          m = c.maxMessageSize;
        if (g > m)
          throw new h(
            "Maximum size of messages that can be published at once exceeded ( was " +
              g +
              " bytes; limit is " +
              m +
              " bytes)",
            40009,
            400
          );
        await this._publish(Qs(d, a._MsgPack, l), f, o);
      }
      async _publish(n, e, t) {
        await E.post(
          this.client,
          this.client.rest.channelMixin.basePath(this) + "/messages",
          n,
          e,
          t,
          null,
          !0
        );
      }
      async status() {
        return this.client.rest.channelMixin.status(this);
      }
    },
    Xs = wn;
  var kn = class s {
      constructor(n) {
        (this.entries = (n && n.entries) || void 0),
          (this.schema = (n && n.schema) || void 0),
          (this.appId = (n && n.appId) || void 0),
          (this.inProgress = (n && n.inProgress) || void 0),
          (this.unit = (n && n.unit) || void 0),
          (this.intervalId = (n && n.intervalId) || void 0);
      }
      static fromValues(n) {
        return new s(n);
      }
    },
    $s = kn;
  var Le = class {
    static basePath(n) {
      return "/channels/" + encodeURIComponent(n.name);
    }
    static history(n, e) {
      let t = n.client,
        r = t.options.useBinaryProtocol ? "msgpack" : "json",
        o = n.client.http.supportsLinkHeaders ? void 0 : r,
        a = R.defaultGetHeaders(t.options, { format: r });
      return (
        b(a, t.options.headers),
        new V(t, this.basePath(n) + "/messages", a, o, async function (
          c,
          l,
          u
        ) {
          let f = u ? c : B(c, t._MsgPack, r);
          return Js(f, n);
        }).get(e)
      );
    }
    static async status(n) {
      let e = n.client.options.useBinaryProtocol ? "msgpack" : "json",
        t = R.defaultPostHeaders(n.client.options, { format: e });
      return (await E.get(n.client, this.basePath(n), t, {}, e, !0)).body;
    }
  };
  var vt = class {
    static basePath(n) {
      return Le.basePath(n.channel) + "/presence";
    }
    static async history(n, e) {
      let t = n.channel.client,
        r = t.options.useBinaryProtocol ? "msgpack" : "json",
        o = n.channel.client.http.supportsLinkHeaders ? void 0 : r,
        a = R.defaultGetHeaders(t.options, { format: r });
      return (
        b(a, t.options.headers),
        new V(t, this.basePath(n) + "/history", a, o, async (c, l, u) => {
          let f = u ? c : B(c, t._MsgPack, r);
          return kt(f, n.channel);
        }).get(e)
      );
    }
  };
  var _e = class {
      constructor(n) {
        this.channelMixin = Le;
        this.presenceMixin = vt;
        this.Resource = E;
        this.DeviceDetails = me;
        (this.client = n),
          (this.channels = new Mn(this.client)),
          (this.push = new Gs(this.client));
      }
      async stats(n) {
        let e = R.defaultGetHeaders(this.client.options),
          t = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : t;
        return (
          b(e, this.client.options.headers),
          new V(this.client, "/stats", e, r, function (o, a, c) {
            let l = c ? o : JSON.parse(o);
            for (let u = 0; u < l.length; u++) l[u] = $s.fromValues(l[u]);
            return l;
          }).get(n)
        );
      }
      async time(n) {
        let e = R.defaultGetHeaders(this.client.options);
        this.client.options.headers && b(e, this.client.options.headers);
        let t = (l) => this.client.baseUri(l) + "/time",
          {
            error: r,
            body: o,
            unpacked: a,
          } = await this.client.http.do(x.Get, t, e, null, n);
        if (r) throw r;
        a || (o = JSON.parse(o));
        let c = o[0];
        if (!c)
          throw new h(
            "Internal error (unexpected result type from GET /time)",
            5e4,
            500
          );
        return (this.client.serverTimeOffset = c - Date.now()), c;
      }
      async request(n, e, t, r, o, a) {
        var y;
        let [c, l, u] = (() =>
            this.client.options.useBinaryProtocol
              ? (this.client._MsgPack || L("MsgPack"),
                [
                  this.client._MsgPack.encode,
                  this.client._MsgPack.decode,
                  "msgpack",
                ])
              : [JSON.stringify, JSON.parse, "json"])(),
          f = this.client.http.supportsLinkHeaders ? void 0 : u;
        r = r || {};
        let d = n.toLowerCase(),
          g =
            d == "get"
              ? R.defaultGetHeaders(this.client.options, {
                  format: u,
                  protocolVersion: t,
                })
              : R.defaultPostHeaders(this.client.options, {
                  format: u,
                  protocolVersion: t,
                });
        typeof o != "string" && (o = (y = c(o)) != null ? y : null),
          b(g, this.client.options.headers),
          a && b(g, a);
        let m = new V(
          this.client,
          e,
          g,
          f,
          async function (P, A, T) {
            return zt(T ? P : l(P));
          },
          !0
        );
        if (!p.Http.methods.includes(d))
          throw new h("Unsupported method " + d, 40500, 405);
        return p.Http.methodsWithBody.includes(d) ? m[d](r, o) : m[d](r);
      }
      async batchPublish(n) {
        let e, t;
        Array.isArray(n) ? ((e = n), (t = !1)) : ((e = [n]), (t = !0));
        let r = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(this.client.options, { format: r });
        this.client.options.headers && b(o, this.client.options.headers);
        let a = H(e, this.client._MsgPack, r),
          c = await E.post(this.client, "/messages", a, o, {}, null, !0),
          l = c.unpacked ? c.body : B(c.body, this.client._MsgPack, r);
        return t ? l[0] : l;
      }
      async batchPresence(n) {
        let e = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          t = R.defaultPostHeaders(this.client.options, { format: e });
        this.client.options.headers && b(t, this.client.options.headers);
        let r = n.join(","),
          o = await E.get(
            this.client,
            "/presence",
            t,
            { channels: r },
            null,
            !0
          );
        return o.unpacked ? o.body : B(o.body, this.client._MsgPack, e);
      }
      async revokeTokens(n, e) {
        if (hn(this.client.options))
          throw new h("Cannot revoke tokens when using token auth", 40162, 401);
        let t = this.client.options.keyName,
          r = e != null ? e : {},
          o = O({ targets: n.map((f) => `${f.type}:${f.value}`) }, r),
          a = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          c = R.defaultPostHeaders(this.client.options, { format: a });
        this.client.options.headers && b(c, this.client.options.headers);
        let l = H(o, this.client._MsgPack, a),
          u = await E.post(
            this.client,
            `/keys/${t}/revokeTokens`,
            l,
            c,
            {},
            null,
            !0
          );
        return u.unpacked ? u.body : B(u.body, this.client._MsgPack, a);
      }
    },
    Mn = class {
      constructor(n) {
        (this.client = n), (this.all = Object.create(null));
      }
      get(n, e) {
        n = String(n);
        let t = this.all[n];
        return (
          t
            ? e && t.setOptions(e)
            : (this.all[n] = t = new Xs(this.client, n, e)),
          t
        );
      }
      release(n) {
        delete this.all[String(n)];
      }
    };
  var St = class extends Pt {
    constructor(n) {
      super(
        R.objectifyOptions(n, !1, "BaseRest", i.defaultLogger, { Rest: _e })
      );
    }
  };
  var Et = { Rest: _e };
  var Ne = class extends te {
    static async fromEncoded(n, e) {
      return In(i.defaultLogger, p.Crypto, n, e);
    }
    static async fromEncodedArray(n, e) {
      return Ks(i.defaultLogger, p.Crypto, n, e);
    }
    static fromValues(n) {
      return te.fromValues(n);
    }
  };
  var qe = class extends J {
    static async fromEncoded(n, e) {
      return An(i.defaultLogger, p.Crypto, n, e);
    }
    static async fromEncodedArray(n, e) {
      return js(i.defaultLogger, p.Crypto, n, e);
    }
    static fromValues(n) {
      return J.fromValues(n);
    }
  };
  var Ys = ["annotation.create", "annotation.delete"];
  async function On(s, n, e) {
    return ne.fromValues(n).decode(e || {}, s);
  }
  async function Zs(s, n, e) {
    return Promise.all(
      n.map(function (t) {
        return On(s, t, e);
      })
    );
  }
  async function vo(s, n) {
    return ne.fromValues(s).decode(n.channelOptions, n.logger);
  }
  async function er(s, n) {
    return Promise.all(
      s.map(function (e) {
        return vo(e, n);
      })
    );
  }
  var xt = class s extends ee {
      async encode() {
        let e = Object.assign(new ne(), this, {
          action: Ys.indexOf(this.action || "annotation.create"),
        });
        return Ee(e, {});
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((t) => s.fromValues(t));
      }
      toString() {
        return ue(this, "Annotation");
      }
    },
    ne = class s extends ee {
      toJSON(...e) {
        return Ue.call(this, ...e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((t) => s.fromValues(t));
      }
      async decode(e, t) {
        let r = Object.assign(
          new xt(),
          D(O({}, this), { action: Ys[this.action] })
        );
        try {
          await xe(r, e);
        } catch (o) {
          i.logAction(t, i.LOG_ERROR, "WireAnnotation.decode()", w(o));
        }
        return r;
      }
      toString() {
        return ue(this, "WireAnnotation");
      }
    },
    se = xt;
  var De = class extends se {
    static async fromEncoded(n, e) {
      return On(i.defaultLogger, n, e);
    }
    static async fromEncodedArray(n, e) {
      return Zs(i.defaultLogger, n, e);
    }
    static fromValues(n) {
      return se.fromValues(n);
    }
  };
  function So(s, n, e, t) {
    try {
      e.apply(n, t);
    } catch (r) {
      i.logAction(
        s,
        i.LOG_ERROR,
        "EventEmitter.emit()",
        "Unexpected listener exception: " + r + "; stack = " + (r && r.stack)
      );
    }
  }
  function vn(s, n, e) {
    let t, r, o;
    for (let a = 0; a < s.length; a++)
      if (((t = s[a]), e && (t = t[e]), Array.isArray(t))) {
        for (; (r = t.indexOf(n)) !== -1; ) t.splice(r, 1);
        e && t.length === 0 && delete s[a][e];
      } else if (ie(t))
        for (o in t)
          Object.prototype.hasOwnProperty.call(t, o) &&
            Array.isArray(t[o]) &&
            vn([t], n, o);
  }
  var Sn = class {
      constructor(n) {
        this.logger = n;
        (this.any = []),
          (this.events = Object.create(null)),
          (this.anyOnce = []),
          (this.eventsOnce = Object.create(null));
      }
      on(...n) {
        if (n.length === 1) {
          let e = n[0];
          if (typeof e == "function") this.any.push(e);
          else
            throw new Error(
              "EventListener.on(): Invalid arguments: " + p.Config.inspect(n)
            );
        }
        if (n.length === 2) {
          let [e, t] = n;
          if (typeof t != "function")
            throw new Error(
              "EventListener.on(): Invalid arguments: " + p.Config.inspect(n)
            );
          if (j(e)) this.any.push(t);
          else if (Array.isArray(e))
            e.forEach((r) => {
              this.on(r, t);
            });
          else {
            if (typeof e != "string")
              throw new Error(
                "EventListener.on(): Invalid arguments: " + p.Config.inspect(n)
              );
            (this.events[e] || (this.events[e] = [])).push(t);
          }
        }
      }
      off(...n) {
        if (n.length == 0 || (j(n[0]) && j(n[1]))) {
          (this.any = []),
            (this.events = Object.create(null)),
            (this.anyOnce = []),
            (this.eventsOnce = Object.create(null));
          return;
        }
        let [e, t] = n,
          r = null,
          o = null;
        if (n.length === 1 || !t) typeof e == "function" ? (r = e) : (o = e);
        else {
          if (typeof t != "function")
            throw new Error(
              "EventEmitter.off(): invalid arguments:" + p.Config.inspect(n)
            );
          [o, r] = [e, t];
        }
        if (r && j(o)) {
          vn([this.any, this.events, this.anyOnce, this.eventsOnce], r);
          return;
        }
        if (Array.isArray(o)) {
          o.forEach((a) => {
            this.off(a, r);
          });
          return;
        }
        if (typeof o != "string")
          throw new Error(
            "EventEmitter.off(): invalid arguments:" + p.Config.inspect(n)
          );
        r
          ? vn([this.events, this.eventsOnce], r, o)
          : (delete this.events[o], delete this.eventsOnce[o]);
      }
      listeners(n) {
        if (n) {
          let e = this.events[n] || [];
          return (
            this.eventsOnce[n] &&
              Array.prototype.push.apply(e, this.eventsOnce[n]),
            e.length ? e : null
          );
        }
        return this.any.length ? this.any : null;
      }
      emit(n, ...e) {
        let t = { event: n },
          r = [];
        this.anyOnce.length &&
          (Array.prototype.push.apply(r, this.anyOnce), (this.anyOnce = [])),
          this.any.length && Array.prototype.push.apply(r, this.any);
        let o = this.eventsOnce[n];
        o && (Array.prototype.push.apply(r, o), delete this.eventsOnce[n]);
        let a = this.events[n];
        a && Array.prototype.push.apply(r, a),
          r.forEach((c) => {
            So(this.logger, t, c, e);
          });
      }
      once(...n) {
        let e = n.length;
        if (e === 0 || (e === 1 && typeof n[0] != "function")) {
          let o = n[0];
          return new Promise((a) => {
            this.once(o, a);
          });
        }
        let [t, r] = n;
        if (n.length === 1 && typeof t == "function") this.anyOnce.push(t);
        else if (j(t)) {
          if (typeof r != "function")
            throw new Error(
              "EventEmitter.once(): Invalid arguments:" + p.Config.inspect(n)
            );
          this.anyOnce.push(r);
        } else if (Array.isArray(t)) {
          let o = this,
            a = function () {
              let c = Array.prototype.slice.call(arguments);
              if (
                (t.forEach(function (l) {
                  o.off(l, a);
                }),
                typeof r != "function")
              )
                throw new Error(
                  "EventEmitter.once(): Invalid arguments:" +
                    p.Config.inspect(n)
                );
              r.apply(this, c);
            };
          t.forEach(function (c) {
            o.on(c, a);
          });
        } else {
          if (typeof t != "string")
            throw new Error(
              "EventEmitter.once(): Invalid arguments:" + p.Config.inspect(n)
            );
          let o = this.eventsOnce[t] || (this.eventsOnce[t] = []);
          if (r) {
            if (typeof r != "function")
              throw new Error(
                "EventEmitter.once(): Invalid arguments:" + p.Config.inspect(n)
              );
            o.push(r);
          }
        }
      }
      async whenState(n, e) {
        if (typeof n != "string" || typeof e != "string")
          throw new Error("whenState requires a valid state String argument");
        return n === e ? null : this.once(n);
      }
    },
    v = Sn;
  function nr(s) {
    let n;
    switch (typeof s) {
      case "string":
        n = s;
        break;
      case "object":
        n = s.serial;
        break;
    }
    if (!n || typeof n != "string")
      throw new h(
        "First argument of annotations.publish() must be either a Message (or at least an object with a string `serial` property) or a message serial (string)",
        40003,
        400
      );
    return n;
  }
  function xn(s, n) {
    let e = nr(s);
    if (!n || typeof n != "object")
      throw new h(
        "Second argument of annotations.publish() must be an object (the intended annotation to publish)",
        40003,
        400
      );
    let t = se.fromValues(n);
    return (
      (t.messageSerial = e), t.action || (t.action = "annotation.create"), t
    );
  }
  function tr(s, n) {
    return (
      s.client.rest.channelMixin.basePath(s) +
      "/messages/" +
      encodeURIComponent(n) +
      "/annotations"
    );
  }
  var En = class {
      constructor(n) {
        this.channel = n;
      }
      async publish(n, e) {
        let t = xn(n, e),
          r = await t.encode(),
          o = this.channel.client,
          a = o.options,
          c = a.useBinaryProtocol ? "msgpack" : "json",
          l = R.defaultPostHeaders(o.options, { format: c }),
          u = {};
        b(l, o.options.headers);
        let f = H([r], o._MsgPack, c);
        await E.post(o, tr(this.channel, t.messageSerial), f, l, u, null, !0);
      }
      async delete(n, e) {
        return (e.action = "annotation.delete"), this.publish(n, e);
      }
      async get(n, e) {
        let t = this.channel.client,
          r = nr(n),
          o = t.options.useBinaryProtocol ? "msgpack" : "json",
          a = t.http.supportsLinkHeaders ? void 0 : o,
          c = R.defaultGetHeaders(t.options, { format: o });
        return (
          b(c, t.options.headers),
          new V(t, tr(this.channel, r), c, a, async (l, u, f) => {
            let d = f ? l : B(l, t._MsgPack, o);
            return er(d, this.channel);
          }).get(e)
        );
      }
    },
    Re = En;
  var sr = H;
  function Un(s) {
    let n = [];
    if (s) for (let e = 0; e < s.length; e++) n.push(s[e].toString());
    return "[ " + n.join(", ") + " ]";
  }
  function rr(s, n, e, t, r) {
    let o = B(s, n, r);
    return Ut(o, e, t);
  }
  function Ut(s, n, e) {
    let t;
    s.error && (t = h.fromValues(s.error));
    let r;
    s.messages && (r = ye.fromValuesArray(s.messages));
    let o;
    n && s.presence && (o = n.WirePresenceMessage.fromValuesArray(s.presence));
    let a;
    return (
      e &&
        s.annotations &&
        (a = e.WireAnnotation.fromValuesArray(s.annotations)),
      Object.assign(
        new Ye(),
        D(O({}, s), { presence: o, messages: r, annotations: a, error: t })
      )
    );
  }
  function or(s) {
    return Ut(
      s,
      { PresenceMessage: J, WirePresenceMessage: he },
      {
        Annotation: se,
        WireAnnotation: ne,
        RealtimeAnnotations: Ge,
        RestAnnotations: Re,
      }
    );
  }
  function G(s) {
    return Object.assign(new Ye(), s);
  }
  function He(s, n, e) {
    let t = "[ProtocolMessage";
    s.action !== void 0 && (t += "; action=" + Cn[s.action] || s.action);
    let r = [
        "id",
        "channel",
        "channelSerial",
        "connectionId",
        "count",
        "msgSerial",
        "timestamp",
      ],
      o;
    for (let a = 0; a < r.length; a++)
      (o = r[a]), s[o] !== void 0 && (t += "; " + o + "=" + s[o]);
    if (
      (s.messages && (t += "; messages=" + Un(ye.fromValuesArray(s.messages))),
      s.presence &&
        n &&
        (t +=
          "; presence=" +
          Un(n.WirePresenceMessage.fromValuesArray(s.presence))),
      s.annotations &&
        e &&
        (t +=
          "; annotations=" +
          Un(e.WireAnnotation.fromValuesArray(s.annotations))),
      s.error && (t += "; error=" + h.fromValues(s.error).toString()),
      s.auth && s.auth.accessToken && (t += "; token=" + s.auth.accessToken),
      s.flags && (t += "; flags=" + Fs.filter(s.hasFlag).join(",")),
      s.params)
    ) {
      let a = "";
      Qt(s.params, function (c) {
        a.length > 0 && (a += "; "), (a += c + "=" + s.params[c]);
      }),
        a.length > 0 && (t += "; params=[" + a + "]");
    }
    return (t += "]"), t;
  }
  var Ye = class {
      constructor() {
        this.hasFlag = (n) => (this.flags & K[n]) > 0;
      }
      setFlag(n) {
        return (this.flags = this.flags | K[n]);
      }
      getMode() {
        return (this.flags || 0) & K.MODE_ALL;
      }
      encodeModesToFlags(n) {
        n.forEach((e) => this.setFlag(e));
      }
      decodeModesFromFlags() {
        let n = [];
        return (
          At.forEach((e) => {
            this.hasFlag(e) && n.push(e);
          }),
          n.length > 0 ? n : void 0
        );
      }
    },
    ir = Ye;
  var Bn = class {
      constructor(n, e, t, r, o) {
        (this.previous = n),
          (this.current = e),
          e === "attached" && ((this.resumed = t), (this.hasBacklog = r)),
          o && (this.reason = o);
      }
    },
    Ze = Bn;
  var ar = function () {};
  function Eo(s) {
    if (s && "params" in s && !ie(s.params))
      return new h("options.params must be an object", 4e4, 400);
    if (s && "modes" in s) {
      if (!Array.isArray(s.modes))
        return new h("options.modes must be an array", 4e4, 400);
      for (let n = 0; n < s.modes.length; n++) {
        let e = s.modes[n];
        if (
          !e ||
          typeof e != "string" ||
          !At.includes(String.prototype.toUpperCase.call(e))
        )
          return new h("Invalid channel mode: " + e, 4e4, 400);
      }
    }
  }
  var Ln = class s extends v {
    constructor(e, t, r) {
      var o, a;
      super(e.logger);
      this._annotations = null;
      this._mode = 0;
      this.retryCount = 0;
      this.history = async function (e) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RealtimeChannel.history()",
          "channel = " + this.name
        );
        let t = this.client.rest.channelMixin;
        if (e && e.untilAttach) {
          if (this.state !== "attached")
            throw new h(
              "option untilAttach requires the channel to be attached",
              4e4,
              400
            );
          if (!this.properties.attachSerial)
            throw new h(
              "untilAttach was specified and channel is attached, but attachSerial is not defined",
              4e4,
              400
            );
          delete e.untilAttach, (e.from_serial = this.properties.attachSerial);
        }
        return t.history(this, e);
      };
      this.whenState = (e) => v.prototype.whenState.call(this, e, this.state);
      i.logAction(
        this.logger,
        i.LOG_MINOR,
        "RealtimeChannel()",
        "started; name = " + t
      ),
        (this.name = t),
        (this.channelOptions = ve(
          (o = e._Crypto) != null ? o : null,
          this.logger,
          r
        )),
        (this.client = e),
        (this._presence = e._RealtimePresence
          ? new e._RealtimePresence.RealtimePresence(this)
          : null),
        e._Annotations &&
          (this._annotations = new e._Annotations.RealtimeAnnotations(this)),
        (this.connectionManager = e.connection.connectionManager),
        (this.state = "initialized"),
        (this.subscriptions = new v(this.logger)),
        (this.syncChannelSerial = void 0),
        (this.properties = { attachSerial: void 0, channelSerial: void 0 }),
        this.setOptions(r),
        (this.errorReason = null),
        (this._attachResume = !1),
        (this._decodingContext = {
          channelOptions: this.channelOptions,
          plugins: e.options.plugins || {},
          baseEncodedPreviousPayload: void 0,
        }),
        (this._lastPayload = {
          messageId: null,
          protocolMessageChannelSerial: null,
          decodeFailureRecoveryInProgress: null,
        }),
        (this._allChannelChanges = new v(this.logger)),
        (a = e.options.plugins) != null &&
          a.Push &&
          (this._push = new e.options.plugins.Push.PushChannel(this));
    }
    get presence() {
      return this._presence || L("RealtimePresence"), this._presence;
    }
    get annotations() {
      return this._annotations || L("Annotations"), this._annotations;
    }
    get push() {
      return this._push || L("Push"), this._push;
    }
    invalidStateError() {
      return new h(
        "Channel operation failed as channel state is " + this.state,
        90001,
        400,
        this.errorReason || void 0
      );
    }
    static processListenerArgs(e) {
      return (
        (e = Array.prototype.slice.call(e)),
        typeof e[0] == "function" && e.unshift(null),
        e
      );
    }
    async setOptions(e) {
      var o;
      let t = this.channelOptions,
        r = Eo(e);
      if (r) throw r;
      if (
        ((this.channelOptions = ve(
          (o = this.client._Crypto) != null ? o : null,
          this.logger,
          e
        )),
        this._decodingContext &&
          (this._decodingContext.channelOptions = this.channelOptions),
        this._shouldReattachToSetOptions(e, t))
      )
        return (
          this.attachImpl(),
          new Promise((a, c) => {
            this._allChannelChanges.once(
              ["attached", "update", "detached", "failed"],
              function (l) {
                switch (this.event) {
                  case "update":
                  case "attached":
                    a();
                    break;
                  default:
                    c(l.reason);
                }
              }
            );
          })
        );
    }
    _shouldReattachToSetOptions(e, t) {
      if (!(this.state === "attached" || this.state === "attaching")) return !1;
      if (e != null && e.params) {
        let r = cr(e.params),
          o = cr(t.params);
        if (Object.keys(r).length !== Object.keys(o).length || !nn(o, r))
          return !0;
      }
      return !!(e != null && e.modes && (!t.modes || !rn(e.modes, t.modes)));
    }
    async publish(...e) {
      let t;
      if (e.length == 1)
        if (ie(e[0])) t = [te.fromValues(e[0])];
        else if (Array.isArray(e[0])) t = te.fromValuesArray(e[0]);
        else
          throw new h(
            "The single-argument form of publish() expects a message object or an array of message objects",
            40013,
            400
          );
      else t = [te.fromValues({ name: e[0], data: e[1] })];
      let o = this.client.options.maxMessageSize,
        a = await Ot(t, this.channelOptions),
        c = Be(a);
      if (c > o)
        throw new h(
          "Maximum size of messages that can be published at once exceeded ( was " +
            c +
            " bytes; limit is " +
            o +
            " bytes)",
          40009,
          400
        );
      this._throwIfUnpublishableState(),
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RealtimeChannel.publish()",
          "sending message; channel state is " +
            this.state +
            ", message count = " +
            a.length
        );
      let l = G({ action: C.MESSAGE, channel: this.name, messages: a });
      return this.sendMessage(l);
    }
    _throwIfUnpublishableState() {
      if (!this.connectionManager.activeState())
        throw this.connectionManager.getError();
      if (this.state === "failed" || this.state === "suspended")
        throw this.invalidStateError();
    }
    onEvent(e) {
      i.logAction(
        this.logger,
        i.LOG_MICRO,
        "RealtimeChannel.onEvent()",
        "received message"
      );
      let t = this.subscriptions;
      for (let r = 0; r < e.length; r++) {
        let o = e[r];
        t.emit(o.name, o);
      }
    }
    async attach() {
      return this.state === "attached"
        ? null
        : new Promise((e, t) => {
            this._attach(!1, null, (r, o) => (r ? t(r) : e(o)));
          });
    }
    _attach(e, t, r) {
      r ||
        (r = (a) => {
          a &&
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "RealtimeChannel._attach()",
              "Channel attach failed: " + a.toString()
            );
        });
      let o = this.connectionManager;
      if (!o.activeState()) {
        r(o.getError());
        return;
      }
      (this.state !== "attaching" || e) && this.requestState("attaching", t),
        this.once(function (a) {
          switch (this.event) {
            case "attached":
              r == null || r(null, a);
              break;
            case "detached":
            case "suspended":
            case "failed":
              r == null ||
                r(
                  a.reason ||
                    o.getError() ||
                    new h(
                      "Unable to attach; reason unknown; state = " + this.event,
                      9e4,
                      500
                    )
                );
              break;
            case "detaching":
              r == null ||
                r(
                  new h(
                    "Attach request superseded by a subsequent detach request",
                    9e4,
                    409
                  )
                );
              break;
          }
        });
    }
    attachImpl() {
      i.logAction(
        this.logger,
        i.LOG_MICRO,
        "RealtimeChannel.attachImpl()",
        "sending ATTACH message"
      );
      let e = G({
        action: C.ATTACH,
        channel: this.name,
        params: this.channelOptions.params,
        channelSerial: this.properties.channelSerial,
      });
      this.channelOptions.modes &&
        e.encodeModesToFlags(tn(this.channelOptions.modes)),
        this._attachResume && e.setFlag("ATTACH_RESUME"),
        this._lastPayload.decodeFailureRecoveryInProgress &&
          (e.channelSerial = this._lastPayload.protocolMessageChannelSerial),
        this.sendMessage(e).catch(ar);
    }
    async detach() {
      let e = this.connectionManager;
      if (!e.activeState()) throw e.getError();
      switch (this.state) {
        case "suspended":
          this.notifyState("detached");
          return;
        case "detached":
          return;
        case "failed":
          throw new h("Unable to detach; channel state = failed", 90001, 400);
        default:
          this.requestState("detaching");
        case "detaching":
          return new Promise((t, r) => {
            this.once(function (o) {
              switch (this.event) {
                case "detached":
                  t();
                  break;
                case "attached":
                case "suspended":
                case "failed":
                  r(
                    o.reason ||
                      e.getError() ||
                      new h(
                        "Unable to detach; reason unknown; state = " +
                          this.event,
                        9e4,
                        500
                      )
                  );
                  break;
                case "attaching":
                  r(
                    new h(
                      "Detach request superseded by a subsequent attach request",
                      9e4,
                      409
                    )
                  );
                  break;
              }
            });
          });
      }
    }
    detachImpl() {
      i.logAction(
        this.logger,
        i.LOG_MICRO,
        "RealtimeChannel.detach()",
        "sending DETACH message"
      );
      let e = G({ action: C.DETACH, channel: this.name });
      this.sendMessage(e).catch(ar);
    }
    async subscribe(...e) {
      let [t, r] = s.processListenerArgs(e);
      if (this.state === "failed") throw h.fromValues(this.invalidStateError());
      return (
        t && typeof t == "object" && !Array.isArray(t)
          ? this.client._FilteredSubscriptions.subscribeFilter(this, t, r)
          : this.subscriptions.on(t, r),
        this.channelOptions.attachOnSubscribe !== !1 ? this.attach() : null
      );
    }
    unsubscribe(...e) {
      var o;
      let [t, r] = s.processListenerArgs(e);
      if (
        (typeof t == "object" && !r) ||
        ((o = this.filteredSubscriptions) != null && o.has(r))
      ) {
        this.client._FilteredSubscriptions
          .getAndDeleteFilteredSubscriptions(this, t, r)
          .forEach((a) => this.subscriptions.off(a));
        return;
      }
      this.subscriptions.off(t, r);
    }
    sync() {
      switch (this.state) {
        case "initialized":
        case "detaching":
        case "detached":
          throw new S("Unable to sync to channel; not attached", 4e4);
        default:
      }
      let e = this.connectionManager;
      if (!e.activeState()) throw e.getError();
      let t = G({ action: C.SYNC, channel: this.name });
      this.syncChannelSerial && (t.channelSerial = this.syncChannelSerial),
        e.send(t);
    }
    async sendMessage(e) {
      return new Promise((t, r) => {
        this.connectionManager.send(
          e,
          this.client.options.queueMessages,
          (o) => {
            o ? r(o) : t();
          }
        );
      });
    }
    async sendPresence(e) {
      let t = G({ action: C.PRESENCE, channel: this.name, presence: e });
      return this.sendMessage(t);
    }
    async processMessage(e) {
      (e.action === C.ATTACHED ||
        e.action === C.MESSAGE ||
        e.action === C.PRESENCE ||
        e.action === C.ANNOTATION) &&
        this.setChannelSerial(e.channelSerial);
      let t,
        r = !1;
      switch (e.action) {
        case C.ATTACHED: {
          (this.properties.attachSerial = e.channelSerial),
            (this._mode = e.getMode()),
            (this.params = e.params || {});
          let o = e.decodeModesFromFlags();
          this.modes = (o && Je(o)) || void 0;
          let a = e.hasFlag("RESUMED"),
            c = e.hasFlag("HAS_PRESENCE"),
            l = e.hasFlag("HAS_BACKLOG");
          if (this.state === "attached") {
            a || (this._presence && this._presence.onAttached(c));
            let u = new Ze(this.state, this.state, a, l, e.error);
            this._allChannelChanges.emit("update", u),
              (!a || this.channelOptions.updateOnAttached) &&
                this.emit("update", u);
          } else
            this.state === "detaching"
              ? this.checkPendingState()
              : this.notifyState("attached", e.error, a, c, l);
          break;
        }
        case C.DETACHED: {
          let o = e.error
            ? h.fromValues(e.error)
            : new h("Channel detached", 90001, 404);
          this.state === "detaching"
            ? this.notifyState("detached", o)
            : this.state === "attaching"
            ? this.notifyState("suspended", o)
            : (this.state === "attached" || this.state === "suspended") &&
              this.requestState("attaching", o);
          break;
        }
        case C.SYNC:
          if (
            ((r = !0),
            (t = this.syncChannelSerial = e.channelSerial),
            !e.presence)
          )
            break;
        case C.PRESENCE: {
          if (!e.presence) break;
          It(e);
          let o = this.channelOptions;
          if (this._presence) {
            let a = await Promise.all(
              e.presence.map((c) => c.decode(o, this.logger))
            );
            this._presence.setPresence(a, r, t);
          }
          break;
        }
        case C.MESSAGE: {
          if (this.state !== "attached") {
            i.logAction(
              this.logger,
              i.LOG_MAJOR,
              "RealtimeChannel.processMessage()",
              'Message "' +
                e.id +
                '" skipped as this channel "' +
                this.name +
                '" state is not "attached" (state is "' +
                this.state +
                '").'
            );
            return;
          }
          It(e);
          let o = e.messages,
            a = o[0],
            c = o[o.length - 1];
          if (
            a.extras &&
            a.extras.delta &&
            a.extras.delta.from !== this._lastPayload.messageId
          ) {
            let u =
              'Delta message decode failure - previous message not available for message "' +
              e.id +
              '" on this channel "' +
              this.name +
              '".';
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "RealtimeChannel.processMessage()",
              u
            ),
              this._startDecodeFailureRecovery(new h(u, 40018, 400));
            break;
          }
          let l = [];
          for (let u = 0; u < o.length; u++) {
            let { decoded: f, err: d } = await o[u].decodeWithErr(
              this._decodingContext,
              this.logger
            );
            if (((l[u] = f), d))
              switch (d.code) {
                case 40018:
                  this._startDecodeFailureRecovery(d);
                  return;
                case 40019:
                case 40021:
                  this.notifyState("failed", d);
                  return;
                default:
              }
          }
          (this._lastPayload.messageId = c.id),
            (this._lastPayload.protocolMessageChannelSerial = e.channelSerial),
            this.onEvent(l);
          break;
        }
        case C.ANNOTATION: {
          It(e);
          let o = this.channelOptions;
          if (this._annotations) {
            let a = await Promise.all(
              (e.annotations || []).map((c) => c.decode(o, this.logger))
            );
            this._annotations._processIncoming(a);
          }
          break;
        }
        case C.ERROR: {
          let o = e.error;
          o && o.code == 80016
            ? this.checkPendingState()
            : this.notifyState("failed", h.fromValues(o));
          break;
        }
        default:
          i.logAction(
            this.logger,
            i.LOG_MAJOR,
            "RealtimeChannel.processMessage()",
            "Protocol error: unrecognised message action (" + e.action + ")"
          );
      }
    }
    _startDecodeFailureRecovery(e) {
      this._lastPayload.decodeFailureRecoveryInProgress ||
        (i.logAction(
          this.logger,
          i.LOG_MAJOR,
          "RealtimeChannel.processMessage()",
          "Starting decode failure recovery process."
        ),
        (this._lastPayload.decodeFailureRecoveryInProgress = !0),
        this._attach(!0, e, () => {
          this._lastPayload.decodeFailureRecoveryInProgress = !1;
        }));
    }
    onAttached() {
      i.logAction(
        this.logger,
        i.LOG_MINOR,
        "RealtimeChannel.onAttached",
        "activating channel; name = " + this.name
      );
    }
    notifyState(e, t, r, o, a) {
      if (
        (i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RealtimeChannel.notifyState",
          "name = " +
            this.name +
            ", current state = " +
            this.state +
            ", notifying state " +
            e
        ),
        this.clearStateTimer(),
        ["detached", "suspended", "failed"].includes(e) &&
          (this.properties.channelSerial = null),
        e === this.state)
      )
        return;
      this._presence && this._presence.actOnChannelState(e, o, t),
        e === "suspended" && this.connectionManager.state.sendEvents
          ? this.startRetryTimer()
          : this.cancelRetryTimer(),
        t && (this.errorReason = t);
      let c = new Ze(this.state, e, r, a, t),
        l = 'Channel state for channel "' + this.name + '"',
        u = e + (t ? "; reason: " + t : "");
      e === "failed"
        ? i.logAction(this.logger, i.LOG_ERROR, l, u)
        : i.logAction(this.logger, i.LOG_MAJOR, l, u),
        e !== "attaching" && e !== "suspended" && (this.retryCount = 0),
        e === "attached" && this.onAttached(),
        e === "attached"
          ? (this._attachResume = !0)
          : (e === "detaching" || e === "failed") && (this._attachResume = !1),
        (this.state = e),
        this._allChannelChanges.emit(e, c),
        this.emit(e, c);
    }
    requestState(e, t) {
      i.logAction(
        this.logger,
        i.LOG_MINOR,
        "RealtimeChannel.requestState",
        "name = " + this.name + ", state = " + e
      ),
        this.notifyState(e, t),
        this.checkPendingState();
    }
    checkPendingState() {
      if (!this.connectionManager.state.sendEvents) {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "RealtimeChannel.checkPendingState",
          "sendEvents is false; state is " + this.connectionManager.state.state
        );
        return;
      }
      switch (
        (i.logAction(
          this.logger,
          i.LOG_MINOR,
          "RealtimeChannel.checkPendingState",
          "name = " + this.name + ", state = " + this.state
        ),
        this.state)
      ) {
        case "attaching":
          this.startStateTimerIfNotRunning(), this.attachImpl();
          break;
        case "detaching":
          this.startStateTimerIfNotRunning(), this.detachImpl();
          break;
        case "attached":
          this.sync();
          break;
        default:
          break;
      }
    }
    timeoutPendingState() {
      switch (this.state) {
        case "attaching": {
          let e = new h("Channel attach timed out", 90007, 408);
          this.notifyState("suspended", e);
          break;
        }
        case "detaching": {
          let e = new h("Channel detach timed out", 90007, 408);
          this.notifyState("attached", e);
          break;
        }
        default:
          this.checkPendingState();
          break;
      }
    }
    startStateTimerIfNotRunning() {
      this.stateTimer ||
        (this.stateTimer = setTimeout(() => {
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "RealtimeChannel.startStateTimerIfNotRunning",
            "timer expired"
          ),
            (this.stateTimer = null),
            this.timeoutPendingState();
        }, this.client.options.timeouts.realtimeRequestTimeout));
    }
    clearStateTimer() {
      let e = this.stateTimer;
      e && (clearTimeout(e), (this.stateTimer = null));
    }
    startRetryTimer() {
      if (this.retryTimer) return;
      this.retryCount++;
      let e = Qe(
        this.client.options.timeouts.channelRetryTimeout,
        this.retryCount
      );
      this.retryTimer = setTimeout(() => {
        this.state === "suspended" &&
          this.connectionManager.state.sendEvents &&
          ((this.retryTimer = null),
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "RealtimeChannel retry timer expired",
            "attempting a new attach"
          ),
          this.requestState("attaching"));
      }, e);
    }
    cancelRetryTimer() {
      this.retryTimer &&
        (clearTimeout(this.retryTimer), (this.retryTimer = null));
    }
    getReleaseErr() {
      let e = this.state;
      return e === "initialized" || e === "detached" || e === "failed"
        ? null
        : new h(
            "Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " +
              e,
            90001,
            400
          );
    }
    setChannelSerial(e) {
      i.logAction(
        this.logger,
        i.LOG_MICRO,
        "RealtimeChannel.setChannelSerial()",
        "Updating channel serial; serial = " +
          e +
          "; previous = " +
          this.properties.channelSerial
      ),
        e && (this.properties.channelSerial = e);
    }
    async status() {
      return this.client.rest.channelMixin.status(this);
    }
  };
  function cr(s) {
    let t = s || {},
      { agent: n } = t;
    return Ps(t, ["agent"]);
  }
  var Pe = Ln;
  var _n = class {
      constructor(n) {
        (this.channel = n),
          (this.logger = n.logger),
          (this.subscriptions = new v(this.logger));
      }
      async publish(n, e) {
        let t = this.channel.name,
          r = xn(n, e),
          o = await r.encode();
        this.channel._throwIfUnpublishableState(),
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "RealtimeAnnotations.publish()",
            "channelName = " +
              t +
              ", sending annotation with messageSerial = " +
              r.messageSerial +
              ", type = " +
              r.type
          );
        let a = G({ action: C.ANNOTATION, channel: t, annotations: [o] });
        return this.channel.sendMessage(a);
      }
      async delete(n, e) {
        return (e.action = "annotation.delete"), this.publish(n, e);
      }
      async subscribe(...n) {
        let e = Pe.processListenerArgs(n),
          t = e[0],
          r = e[1],
          o = this.channel;
        if (o.state === "failed") throw h.fromValues(o.invalidStateError());
        if (
          (this.subscriptions.on(t, r),
          this.channel.channelOptions.attachOnSubscribe !== !1 &&
            (await o.attach()),
          (this.channel.state === "attached" &&
            this.channel._mode & K.ANNOTATION_SUBSCRIBE) === 0)
        )
          throw new h(
            "You are trying to add an annotation listener, but you haven't requested the annotation_subscribe channel mode in ChannelOptions, so this won't do anything (we only deliver annotations to clients who have explicitly requested them)",
            93001,
            400
          );
      }
      unsubscribe(...n) {
        let e = Pe.processListenerArgs(n),
          t = e[0],
          r = e[1];
        this.subscriptions.off(t, r);
      }
      _processIncoming(n) {
        for (let e of n) this.subscriptions.emit(e.type || "", e);
      }
      async get(n, e) {
        return Re.prototype.get.call(this, n, e);
      }
    },
    Ge = _n;
  var re = class re extends St {
    constructor(n) {
      var t, r;
      if (!re._MsgPack)
        throw new Error("Expected DefaultRest._MsgPack to have been set");
      super(
        R.objectifyOptions(
          n,
          !0,
          "Rest",
          i.defaultLogger,
          D(O({}, Et), {
            Crypto: (t = re.Crypto) != null ? t : void 0,
            MsgPack: (r = re._MsgPack) != null ? r : void 0,
            Annotations: {
              Annotation: se,
              WireAnnotation: ne,
              RealtimeAnnotations: Ge,
              RestAnnotations: Re,
            },
          })
        )
      );
    }
    static get Crypto() {
      if (this._Crypto === null)
        throw new Error(
          "Encryption not enabled; use ably.encryption.js instead"
        );
      return this._Crypto;
    }
    static set Crypto(n) {
      this._Crypto = n;
    }
  };
  (re._Crypto = null),
    (re.Message = Ne),
    (re.PresenceMessage = qe),
    (re.Annotation = De),
    (re._MsgPack = null),
    (re._Http = ge);
  var Fe = re;
  var Nn = class extends v {
      constructor(e) {
        super(e);
        this.messages = [];
      }
      count() {
        return this.messages.length;
      }
      push(e) {
        this.messages.push(e);
      }
      shift() {
        return this.messages.shift();
      }
      last() {
        return this.messages[this.messages.length - 1];
      }
      copyAll() {
        return this.messages.slice();
      }
      append(e) {
        this.messages.push.apply(this.messages, e);
      }
      prepend(e) {
        this.messages.unshift.apply(this.messages, e);
      }
      completeMessages(e, t, r) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "MessageQueue.completeMessages()",
          "serial = " + e + "; count = " + t
        ),
          (r = r || null);
        let o = this.messages;
        if (o.length === 0)
          throw new Error(
            "MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue"
          );
        let a = o[0];
        if (a) {
          let c = a.message.msgSerial,
            l = e + t;
          if (l > c) {
            let u = o.splice(0, l - c);
            for (let f of u) f.callback(r);
          }
          o.length == 0 && this.emit("idle");
        }
      }
      completeAllMessages(e) {
        this.completeMessages(
          0,
          Number.MAX_SAFE_INTEGER || Number.MAX_VALUE,
          e
        );
      }
      resetSendAttempted() {
        for (let e of this.messages) e.sendAttempted = !1;
      }
      clear() {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "MessageQueue.clear()",
          "clearing " + this.messages.length + " messages"
        ),
          (this.messages = []),
          this.emit("idle");
      }
    },
    Bt = Nn;
  var et = class {
      constructor(n, e) {
        (this.message = n), (this.callback = e), (this.merged = !1);
        let t = n.action;
        (this.sendAttempted = !1),
          (this.ackRequired =
            t == C.MESSAGE || t == C.PRESENCE || t == C.ANNOTATION);
      }
    },
    qn = class extends v {
      constructor(e) {
        super(e.logger);
        (this.transport = e),
          (this.messageQueue = new Bt(this.logger)),
          e.on("ack", (t, r) => {
            this.onAck(t, r);
          }),
          e.on("nack", (t, r, o) => {
            this.onNack(t, r, o);
          });
      }
      onAck(e, t) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "Protocol.onAck()",
          "serial = " + e + "; count = " + t
        ),
          this.messageQueue.completeMessages(e, t);
      }
      onNack(e, t, r) {
        i.logAction(
          this.logger,
          i.LOG_ERROR,
          "Protocol.onNack()",
          "serial = " + e + "; count = " + t + "; err = " + w(r)
        ),
          r ||
            (r = new h(
              "Unable to send message; channel not responding",
              50001,
              500
            )),
          this.messageQueue.completeMessages(e, t, r);
      }
      onceIdle(e) {
        let t = this.messageQueue;
        if (t.count() === 0) {
          e();
          return;
        }
        t.once("idle", e);
      }
      send(e) {
        e.ackRequired && this.messageQueue.push(e),
          this.logger.shouldLog(i.LOG_MICRO) &&
            i.logActionNoStrip(
              this.logger,
              i.LOG_MICRO,
              "Protocol.send()",
              "sending msg; " +
                He(
                  e.message,
                  this.transport.connectionManager.realtime._RealtimePresence,
                  this.transport.connectionManager.realtime._Annotations
                )
            ),
          (e.sendAttempted = !0),
          this.transport.send(e.message);
      }
      getTransport() {
        return this.transport;
      }
      getPendingMessages() {
        return this.messageQueue.copyAll();
      }
      clearPendingMessages() {
        return this.messageQueue.clear();
      }
      finish() {
        let e = this.transport;
        this.onceIdle(function () {
          e.disconnect();
        });
      }
    },
    lr = qn;
  var Dn = class {
      constructor(n, e, t, r) {
        (this.previous = n),
          (this.current = e),
          t && (this.retryIn = t),
          r && (this.reason = r);
      }
    },
    tt = Dn;
  var be = {
      DISCONNECTED: 80003,
      SUSPENDED: 80002,
      FAILED: 8e4,
      CLOSING: 80017,
      CLOSED: 80017,
      UNKNOWN_CONNECTION_ERR: 50002,
      UNKNOWN_CHANNEL_ERR: 50001,
    },
    xo = {
      disconnected: () =>
        h.fromValues({
          statusCode: 400,
          code: be.DISCONNECTED,
          message: "Connection to server temporarily unavailable",
        }),
      suspended: () =>
        h.fromValues({
          statusCode: 400,
          code: be.SUSPENDED,
          message: "Connection to server unavailable",
        }),
      failed: () =>
        h.fromValues({
          statusCode: 400,
          code: be.FAILED,
          message: "Connection failed or disconnected by server",
        }),
      closing: () =>
        h.fromValues({
          statusCode: 400,
          code: be.CLOSING,
          message: "Connection closing",
        }),
      closed: () =>
        h.fromValues({
          statusCode: 400,
          code: be.CLOSED,
          message: "Connection closed",
        }),
      unknownConnectionErr: () =>
        h.fromValues({
          statusCode: 500,
          code: be.UNKNOWN_CONNECTION_ERR,
          message: "Internal connection error",
        }),
      unknownChannelErr: () =>
        h.fromValues({
          statusCode: 500,
          code: be.UNKNOWN_CONNECTION_ERR,
          message: "Internal channel error",
        }),
    };
  function ur(s) {
    return !s.statusCode || !s.code || s.statusCode >= 500
      ? !0
      : Object.values(be).includes(s.code);
  }
  var ae = xo;
  var Uo = G({ action: C.CLOSE }),
    Bo = G({ action: C.DISCONNECT }),
    Hn = class extends v {
      constructor(e, t, r, o) {
        super(e.logger);
        o && ((r.format = void 0), (r.heartbeats = !0)),
          (this.connectionManager = e),
          (this.auth = t),
          (this.params = r),
          (this.timeouts = r.options.timeouts),
          (this.format = r.format),
          (this.isConnected = !1),
          (this.isFinished = !1),
          (this.isDisposed = !1),
          (this.maxIdleInterval = null),
          (this.idleTimer = null),
          (this.lastActivity = null);
      }
      connect() {}
      close() {
        this.isConnected && this.requestClose(),
          this.finish("closed", ae.closed());
      }
      disconnect(e) {
        this.isConnected && this.requestDisconnect(),
          this.finish("disconnected", e || ae.disconnected());
      }
      fail(e) {
        this.isConnected && this.requestDisconnect(),
          this.finish("failed", e || ae.failed());
      }
      finish(e, t) {
        var r;
        this.isFinished ||
          ((this.isFinished = !0),
          (this.isConnected = !1),
          (this.maxIdleInterval = null),
          clearTimeout((r = this.idleTimer) != null ? r : void 0),
          (this.idleTimer = null),
          this.emit(e, t),
          this.dispose());
      }
      onProtocolMessage(e) {
        switch (
          (this.logger.shouldLog(i.LOG_MICRO) &&
            i.logActionNoStrip(
              this.logger,
              i.LOG_MICRO,
              "Transport.onProtocolMessage()",
              "received on " +
                this.shortName +
                ": " +
                He(
                  e,
                  this.connectionManager.realtime._RealtimePresence,
                  this.connectionManager.realtime._Annotations
                ) +
                "; connectionId = " +
                this.connectionManager.connectionId
            ),
          this.onActivity(),
          e.action)
        ) {
          case C.HEARTBEAT:
            i.logActionNoStrip(
              this.logger,
              i.LOG_MICRO,
              "Transport.onProtocolMessage()",
              this.shortName +
                " heartbeat; connectionId = " +
                this.connectionManager.connectionId
            ),
              this.emit("heartbeat", e.id);
            break;
          case C.CONNECTED:
            this.onConnect(e),
              this.emit(
                "connected",
                e.error,
                e.connectionId,
                e.connectionDetails,
                e
              );
            break;
          case C.CLOSED:
            this.onClose(e);
            break;
          case C.DISCONNECTED:
            this.onDisconnect(e);
            break;
          case C.ACK:
            this.emit("ack", e.msgSerial, e.count);
            break;
          case C.NACK:
            this.emit("nack", e.msgSerial, e.count, e.error);
            break;
          case C.SYNC:
            this.connectionManager.onChannelMessage(e, this);
            break;
          case C.ACTIVATE:
            break;
          case C.AUTH:
            N(this.auth.authorize(), (t) => {
              t &&
                i.logAction(
                  this.logger,
                  i.LOG_ERROR,
                  "Transport.onProtocolMessage()",
                  "Ably requested re-authentication, but unable to obtain a new token: " +
                    w(t)
                );
            });
            break;
          case C.ERROR:
            if (
              (i.logAction(
                this.logger,
                i.LOG_MINOR,
                "Transport.onProtocolMessage()",
                "received error action; connectionId = " +
                  this.connectionManager.connectionId +
                  "; err = " +
                  p.Config.inspect(e.error) +
                  (e.channel ? ", channel: " + e.channel : "")
              ),
              e.channel === void 0)
            ) {
              this.onFatalError(e);
              break;
            }
            this.connectionManager.onChannelMessage(e, this);
            break;
          default:
            this.connectionManager.onChannelMessage(e, this);
        }
      }
      onConnect(e) {
        if (((this.isConnected = !0), !e.connectionDetails))
          throw new Error(
            "Transport.onConnect(): Connect message recieved without connectionDetails"
          );
        let t = e.connectionDetails.maxIdleInterval;
        t &&
          ((this.maxIdleInterval = t + this.timeouts.realtimeRequestTimeout),
          this.onActivity());
      }
      onDisconnect(e) {
        let t = e && e.error;
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "Transport.onDisconnect()",
          "err = " + w(t)
        ),
          this.finish("disconnected", t);
      }
      onFatalError(e) {
        let t = e && e.error;
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "Transport.onFatalError()",
          "err = " + w(t)
        ),
          this.finish("failed", t);
      }
      onClose(e) {
        let t = e && e.error;
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "Transport.onClose()",
          "err = " + w(t)
        ),
          this.finish("closed", t);
      }
      requestClose() {
        i.logAction(this.logger, i.LOG_MINOR, "Transport.requestClose()", ""),
          this.send(Uo);
      }
      requestDisconnect() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "Transport.requestDisconnect()",
          ""
        ),
          this.send(Bo);
      }
      ping(e) {
        let t = { action: C.HEARTBEAT };
        e && (t.id = e), this.send(G(t));
      }
      dispose() {
        i.logAction(this.logger, i.LOG_MINOR, "Transport.dispose()", ""),
          (this.isDisposed = !0),
          this.off();
      }
      onActivity() {
        this.maxIdleInterval &&
          ((this.lastActivity = this.connectionManager.lastActivity =
            Date.now()),
          this.setIdleTimer(this.maxIdleInterval + 100));
      }
      setIdleTimer(e) {
        this.idleTimer ||
          (this.idleTimer = setTimeout(() => {
            this.onIdleTimerExpire();
          }, e));
      }
      onIdleTimerExpire() {
        if (!this.lastActivity || !this.maxIdleInterval)
          throw new Error(
            "Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set"
          );
        this.idleTimer = null;
        let e = Date.now() - this.lastActivity,
          t = this.maxIdleInterval - e;
        if (t <= 0) {
          let r =
            "No activity seen from realtime in " +
            e +
            "ms; assuming connection has dropped";
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "Transport.onIdleTimerExpire()",
            r
          ),
            this.disconnect(new h(r, 80003, 408));
        } else this.setIdleTimer(t + 100);
      }
      static tryConnect(e, t, r, o, a) {
        let c = new e(t, r, o),
          l,
          u = function (d) {
            clearTimeout(l), a({ event: this.event, error: d });
          },
          f = t.options.timeouts.realtimeRequestTimeout;
        return (
          (l = setTimeout(() => {
            c.off(["preconnect", "disconnected", "failed"]),
              c.dispose(),
              u.call(
                { event: "disconnected" },
                new h(
                  "Timeout waiting for transport to indicate itself viable",
                  5e4,
                  500
                )
              );
          }, f)),
          c.on(["failed", "disconnected"], u),
          c.on("preconnect", function () {
            i.logAction(
              t.logger,
              i.LOG_MINOR,
              "Transport.tryConnect()",
              "viable transport " + c
            ),
              clearTimeout(l),
              c.off(["failed", "disconnected"], u),
              a(null, c);
          }),
          c.connect(),
          c
        );
      }
      static isAvailable() {
        throw new h("isAvailable not implemented for transport", 5e4, 500);
      }
    },
    de = Hn;
  var q;
  ((t) => (
    (t.WebSocket = "web_socket"),
    (t.Comet = "comet"),
    (t.XhrPolling = "xhr_polling")
  ))(q || (q = {}));
  var Lo =
      typeof global != "undefined"
        ? global
        : typeof window != "undefined"
        ? window
        : self,
    Gn = () => {
      var s;
      return (
        typeof p.WebStorage != "undefined" &&
        ((s = p.WebStorage) == null ? void 0 : s.localSupported)
      );
    },
    nt = () => {
      var s;
      return (
        typeof p.WebStorage != "undefined" &&
        ((s = p.WebStorage) == null ? void 0 : s.sessionSupported)
      );
    },
    hr = function () {},
    Fn = "ably-transport-preference";
  function _o(s, n, e) {
    let t;
    if (
      s.channel !== n.channel ||
      ((t = s.action) !== C.PRESENCE && t !== C.MESSAGE) ||
      t !== n.action
    )
      return !1;
    let r = t === C.PRESENCE ? "presence" : "messages",
      o = s[r].concat(n[r]);
    return Be(o) > e ||
      !Xt(o, "clientId") ||
      !o.every(function (c) {
        return !c.id;
      })
      ? !1
      : ((s[r] = o), !0);
  }
  function Wn(s) {
    try {
      return JSON.parse(s);
    } catch (n) {
      return null;
    }
  }
  var jn = class {
      constructor(n, e, t, r) {
        (this.options = n),
          (this.host = e),
          (this.mode = t),
          (this.connectionKey = r),
          (this.format = n.useBinaryProtocol ? "msgpack" : "json");
      }
      getConnectParams(n) {
        let e = n ? oe(n) : {},
          t = this.options;
        switch (this.mode) {
          case "resume":
            e.resume = this.connectionKey;
            break;
          case "recover": {
            let r = Wn(t.recover);
            r && (e.recover = r.connectionKey);
            break;
          }
          default:
        }
        return (
          t.clientId !== void 0 && (e.clientId = t.clientId),
          t.echoMessages === !1 && (e.echo = "false"),
          this.format !== void 0 && (e.format = this.format),
          this.stream !== void 0 && (e.stream = this.stream),
          this.heartbeats !== void 0 && (e.heartbeats = this.heartbeats),
          (e.v = R.protocolVersion),
          (e.agent = mt(this.options)),
          t.transportParams !== void 0 && b(e, t.transportParams),
          e
        );
      }
      toString() {
        let n = "[mode=" + this.mode;
        return (
          this.host && (n += ",host=" + this.host),
          this.connectionKey && (n += ",connectionKey=" + this.connectionKey),
          this.format && (n += ",format=" + this.format),
          (n += "]"),
          n
        );
      }
    },
    Vn = class s extends v {
      constructor(e, t) {
        super(e.logger);
        this.supportedTransports = {};
        this.disconnectedRetryCount = 0;
        this.pendingChannelMessagesState = { isProcessing: !1, queue: [] };
        (this.realtime = e), this.initTransports(), (this.options = t);
        let r = t.timeouts,
          o = r.webSocketConnectTimeout + r.realtimeRequestTimeout;
        if (
          ((this.states = {
            initialized: {
              state: "initialized",
              terminal: !1,
              queueEvents: !0,
              sendEvents: !1,
              failState: "disconnected",
            },
            connecting: {
              state: "connecting",
              terminal: !1,
              queueEvents: !0,
              sendEvents: !1,
              retryDelay: o,
              failState: "disconnected",
            },
            connected: {
              state: "connected",
              terminal: !1,
              queueEvents: !1,
              sendEvents: !0,
              failState: "disconnected",
            },
            disconnected: {
              state: "disconnected",
              terminal: !1,
              queueEvents: !0,
              sendEvents: !1,
              retryDelay: r.disconnectedRetryTimeout,
              failState: "disconnected",
            },
            suspended: {
              state: "suspended",
              terminal: !1,
              queueEvents: !1,
              sendEvents: !1,
              retryDelay: r.suspendedRetryTimeout,
              failState: "suspended",
            },
            closing: {
              state: "closing",
              terminal: !1,
              queueEvents: !1,
              sendEvents: !1,
              retryDelay: r.realtimeRequestTimeout,
              failState: "closed",
            },
            closed: {
              state: "closed",
              terminal: !0,
              queueEvents: !1,
              sendEvents: !1,
              failState: "closed",
            },
            failed: {
              state: "failed",
              terminal: !0,
              queueEvents: !1,
              sendEvents: !1,
              failState: "failed",
            },
          }),
          (this.state = this.states.initialized),
          (this.errorReason = null),
          (this.queuedMessages = new Bt(this.logger)),
          (this.msgSerial = 0),
          (this.connectionDetails = void 0),
          (this.connectionId = void 0),
          (this.connectionKey = void 0),
          (this.connectionStateTtl = r.connectionStateTtl),
          (this.maxIdleInterval = null),
          (this.transports = Kt(
            t.transports || R.defaultTransports,
            this.supportedTransports
          )),
          (this.transportPreference = null),
          this.transports.includes(q.WebSocket) &&
            (this.webSocketTransportAvailable = !0),
          this.transports.includes(q.XhrPolling)
            ? (this.baseTransport = q.XhrPolling)
            : this.transports.includes(q.Comet) &&
              (this.baseTransport = q.Comet),
          (this.httpHosts = R.getHosts(t)),
          (this.wsHosts = R.getHosts(t, !0)),
          (this.activeProtocol = null),
          (this.host = null),
          (this.lastAutoReconnectAttempt = null),
          (this.lastActivity = null),
          (this.forceFallbackHost = !1),
          (this.connectCounter = 0),
          (this.wsCheckResult = null),
          (this.webSocketSlowTimer = null),
          (this.webSocketGiveUpTimer = null),
          (this.abandonedWebSocket = !1),
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "Realtime.ConnectionManager()",
            "started"
          ),
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "Realtime.ConnectionManager()",
            "requested transports = [" +
              (t.transports || R.defaultTransports) +
              "]"
          ),
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "Realtime.ConnectionManager()",
            "available transports = [" + this.transports + "]"
          ),
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "Realtime.ConnectionManager()",
            "http hosts = [" + this.httpHosts + "]"
          ),
          !this.transports.length)
        ) {
          let c = "no requested transports available";
          throw (
            (i.logAction(
              this.logger,
              i.LOG_ERROR,
              "realtime.ConnectionManager()",
              c
            ),
            new Error(c))
          );
        }
        let a = p.Config.addEventListener;
        a &&
          (nt() &&
            typeof t.recover == "function" &&
            a("beforeunload", this.persistConnection.bind(this)),
          t.closeOnUnload === !0 &&
            a("beforeunload", () => {
              i.logAction(
                this.logger,
                i.LOG_MAJOR,
                "Realtime.ConnectionManager()",
                "beforeunload event has triggered the connection to close as closeOnUnload is true"
              ),
                this.requestState({ state: "closing" });
            }),
          a("online", () => {
            var c;
            this.state == this.states.disconnected ||
            this.state == this.states.suspended
              ? (i.logAction(
                  this.logger,
                  i.LOG_MINOR,
                  "ConnectionManager caught browser \u2018online\u2019 event",
                  "reattempting connection"
                ),
                this.requestState({ state: "connecting" }))
              : this.state == this.states.connecting &&
                ((c = this.pendingTransport) == null || c.off(),
                this.disconnectAllTransports(),
                this.startConnect());
          }),
          a("offline", () => {
            this.state == this.states.connected &&
              (i.logAction(
                this.logger,
                i.LOG_MINOR,
                "ConnectionManager caught browser \u2018offline\u2019 event",
                "disconnecting active transport"
              ),
              this.disconnectAllTransports());
          }));
      }
      static supportedTransports(e) {
        let t = { supportedTransports: {} };
        return this.initTransports(e, t), t.supportedTransports;
      }
      static initTransports(e, t) {
        let r = O(O({}, p.Transports.bundledImplementations), e);
        [q.WebSocket, ...p.Transports.order].forEach((o) => {
          let a = r[o];
          a && a.isAvailable() && (t.supportedTransports[o] = a);
        });
      }
      initTransports() {
        s.initTransports(
          this.realtime._additionalTransportImplementations,
          this
        );
      }
      createTransportParams(e, t) {
        return new jn(this.options, e, t, this.connectionKey);
      }
      getTransportParams(e) {
        ((r) => {
          if (this.connectionKey) {
            r("resume");
            return;
          }
          if (typeof this.options.recover == "string") {
            r("recover");
            return;
          }
          let o = this.options.recover,
            a = this.getSessionRecoverData(),
            c = this.sessionRecoveryName();
          if (a && typeof o == "function") {
            i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager.getTransportParams()",
              "Calling clientOptions-provided recover function with last session data (recovery scope: " +
                c +
                ")"
            ),
              o(a, (l) => {
                l
                  ? ((this.options.recover = a.recoveryKey), r("recover"))
                  : r("clean");
              });
            return;
          }
          r("clean");
        })((r) => {
          let o = this.createTransportParams(null, r);
          if (r === "recover") {
            i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager.getTransportParams()",
              "Transport recovery mode = recover; recoveryKey = " +
                this.options.recover
            );
            let a = Wn(this.options.recover);
            a && (this.msgSerial = a.msgSerial);
          } else
            i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager.getTransportParams()",
              "Transport params = " + o.toString()
            );
          e(o);
        });
      }
      tryATransport(e, t, r) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "ConnectionManager.tryATransport()",
          "trying " + t
        ),
          (this.proposedTransport = de.tryConnect(
            this.supportedTransports[t],
            this,
            this.realtime.auth,
            e,
            (o, a) => {
              let c = this.state;
              if (
                c == this.states.closing ||
                c == this.states.closed ||
                c == this.states.failed
              ) {
                a &&
                  (i.logAction(
                    this.logger,
                    i.LOG_MINOR,
                    "ConnectionManager.tryATransport()",
                    "connection " +
                      c.state +
                      " while we were attempting the transport; closing " +
                      a
                  ),
                  a.close()),
                  r(!0);
                return;
              }
              if (o) {
                i.logAction(
                  this.logger,
                  i.LOG_MINOR,
                  "ConnectionManager.tryATransport()",
                  "transport " +
                    t +
                    " " +
                    o.event +
                    ", err: " +
                    o.error.toString()
                ),
                  X.isTokenErr(o.error) &&
                  !(this.errorReason && X.isTokenErr(this.errorReason))
                    ? ((this.errorReason = o.error),
                      N(this.realtime.auth._forceNewToken(null, null), (l) => {
                        if (l) {
                          this.actOnErrorFromAuthorize(l);
                          return;
                        }
                        this.tryATransport(e, t, r);
                      }))
                    : o.event === "failed"
                    ? (this.notifyState({ state: "failed", error: o.error }),
                      r(!0))
                    : o.event === "disconnected" &&
                      (ur(o.error)
                        ? r(!1)
                        : (this.notifyState({
                            state: this.states.connecting.failState,
                            error: o.error,
                          }),
                          r(!0)));
                return;
              }
              i.logAction(
                this.logger,
                i.LOG_MICRO,
                "ConnectionManager.tryATransport()",
                "viable transport " + t + "; setting pending"
              ),
                this.setTransportPending(a, e),
                r(null, a);
            }
          ));
      }
      setTransportPending(e, t) {
        let r = t.mode;
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "ConnectionManager.setTransportPending()",
          "transport = " + e + "; mode = " + r
        ),
          (this.pendingTransport = e),
          this.cancelWebSocketSlowTimer(),
          this.cancelWebSocketGiveUpTimer(),
          e.once("connected", (a, c, l) => {
            this.activateTransport(a, e, c, l),
              r === "recover" &&
                this.options.recover &&
                (delete this.options.recover, this.unpersistConnection());
          });
        let o = this;
        e.on(["disconnected", "closed", "failed"], function (a) {
          o.deactivateTransport(e, this.event, a);
        }),
          this.emit("transport.pending", e);
      }
      activateTransport(e, t, r, o) {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "ConnectionManager.activateTransport()",
          "transport = " + t
        ),
          e &&
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "ConnectionManager.activateTransport()",
              "error = " + e
            ),
          r &&
            i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.activateTransport()",
              "connectionId =  " + r
            ),
          o &&
            i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.activateTransport()",
              "connectionDetails =  " + JSON.stringify(o)
            ),
          this.persistTransportPreference(t);
        let a = this.state,
          c = this.states.connected.state;
        if (
          (i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.activateTransport()",
            "current state = " + a.state
          ),
          a.state == this.states.closing.state ||
            a.state == this.states.closed.state ||
            a.state == this.states.failed.state)
        )
          return (
            i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager.activateTransport()",
              "Disconnecting transport and abandoning"
            ),
            t.disconnect(),
            !1
          );
        if ((delete this.pendingTransport, !t.isConnected))
          return (
            i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager.activateTransport()",
              "Declining to activate transport " +
                t +
                " since it appears to no longer be connected"
            ),
            !1
          );
        let l = this.activeProtocol;
        (this.activeProtocol = new lr(t)), (this.host = t.params.host);
        let u = o.connectionKey;
        if (
          (u && this.connectionKey != u && this.setConnection(r, o, !!e),
          this.onConnectionDetailsUpdate(o, t),
          p.Config.nextTick(() => {
            t.on("connected", (f, d, g) => {
              this.onConnectionDetailsUpdate(g, t),
                this.emit("update", new tt(c, c, null, f));
            });
          }),
          a.state === this.states.connected.state
            ? e &&
              ((this.errorReason = this.realtime.connection.errorReason = e),
              this.emit("update", new tt(c, c, null, e)))
            : (this.notifyState({ state: "connected", error: e }),
              (this.errorReason = this.realtime.connection.errorReason =
                e || null)),
          this.emit("transport.active", t),
          l)
        )
          if (
            (l.messageQueue.count() > 0 &&
              i.logAction(
                this.logger,
                i.LOG_ERROR,
                "ConnectionManager.activateTransport()",
                "Previous active protocol (for transport " +
                  l.transport.shortName +
                  ", new one is " +
                  t.shortName +
                  ") finishing with " +
                  l.messageQueue.count() +
                  " messages still pending"
              ),
            l.transport === t)
          ) {
            let f =
              "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " +
              t.shortName +
              "; stack = " +
              new Error().stack;
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "ConnectionManager.activateTransport()",
              f
            );
          } else l.finish();
        return !0;
      }
      deactivateTransport(e, t, r) {
        let o = this.activeProtocol,
          a = o && o.getTransport() === e,
          c = e === this.pendingTransport,
          l = this.noTransportsScheduledForActivation();
        if (
          (i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.deactivateTransport()",
            "transport = " + e
          ),
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.deactivateTransport()",
            "state = " +
              t +
              (a ? "; was active" : c ? "; was pending" : "") +
              (l ? "" : "; another transport is scheduled for activation")
          ),
          r &&
            r.message &&
            i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.deactivateTransport()",
              "reason =  " + r.message
            ),
          a &&
            (i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.deactivateTransport()",
              "Getting, clearing, and requeuing " +
                this.activeProtocol.messageQueue.count() +
                " pending messages"
            ),
            this.queuePendingMessages(o.getPendingMessages()),
            o.clearPendingMessages(),
            (this.activeProtocol = this.host = null)),
          this.emit("transport.inactive", e),
          (a && l) ||
            (a && t === "failed") ||
            t === "closed" ||
            (o === null && c))
        ) {
          if (
            t === "disconnected" &&
            r &&
            r.statusCode > 500 &&
            this.httpHosts.length > 1
          ) {
            this.unpersistTransportPreference(),
              (this.forceFallbackHost = !0),
              this.notifyState({ state: t, error: r, retryImmediately: !0 });
            return;
          }
          let u = t === "failed" && X.isTokenErr(r) ? "disconnected" : t;
          this.notifyState({ state: u, error: r });
          return;
        }
      }
      noTransportsScheduledForActivation() {
        return !this.pendingTransport || !this.pendingTransport.isConnected;
      }
      setConnection(e, t, r) {
        let o = this.connectionId;
        ((o && o !== e) || (!o && r)) &&
          (i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.setConnection()",
            "Resetting msgSerial"
          ),
          (this.msgSerial = 0),
          this.queuedMessages.resetSendAttempted()),
          this.connectionId !== e &&
            i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager.setConnection()",
              "New connectionId; reattaching any attached channels"
            ),
          (this.realtime.connection.id = this.connectionId = e),
          (this.realtime.connection.key = this.connectionKey = t.connectionKey);
      }
      clearConnection() {
        (this.realtime.connection.id = this.connectionId = void 0),
          (this.realtime.connection.key = this.connectionKey = void 0),
          (this.msgSerial = 0),
          this.unpersistConnection();
      }
      createRecoveryKey() {
        return this.connectionKey
          ? JSON.stringify({
              connectionKey: this.connectionKey,
              msgSerial: this.msgSerial,
              channelSerials: this.realtime.channels.channelSerials(),
            })
          : null;
      }
      checkConnectionStateFreshness() {
        if (!this.lastActivity || !this.connectionId) return;
        let e = Date.now() - this.lastActivity;
        e > this.connectionStateTtl + this.maxIdleInterval &&
          (i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.checkConnectionStateFreshness()",
            "Last known activity from realtime was " +
              e +
              "ms ago; discarding connection state"
          ),
          this.clearConnection(),
          (this.states.connecting.failState = "suspended"));
      }
      persistConnection() {
        if (nt()) {
          let e = this.createRecoveryKey();
          e &&
            this.setSessionRecoverData({
              recoveryKey: e,
              disconnectedAt: Date.now(),
              location: Lo.location,
              clientId: this.realtime.auth.clientId,
            });
        }
      }
      unpersistConnection() {
        this.clearSessionRecoverData();
      }
      getError() {
        if (this.errorReason) {
          let e = S.fromValues(this.errorReason);
          return (e.cause = this.errorReason), e;
        }
        return this.getStateError();
      }
      getStateError() {
        var e, t;
        return (t = (e = ae)[this.state.state]) == null ? void 0 : t.call(e);
      }
      activeState() {
        return this.state.queueEvents || this.state.sendEvents;
      }
      enactStateChange(e) {
        let t = "Connection state",
          r = e.current + (e.reason ? "; reason: " + e.reason : "");
        e.current === "failed"
          ? i.logAction(this.logger, i.LOG_ERROR, t, r)
          : i.logAction(this.logger, i.LOG_MAJOR, t, r),
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.enactStateChange",
            "setting new state: " +
              e.current +
              "; reason = " +
              (e.reason && e.reason.message)
          );
        let o = (this.state = this.states[e.current]);
        e.reason &&
          ((this.errorReason = e.reason),
          (this.realtime.connection.errorReason = e.reason)),
          (o.terminal || o.state === "suspended") && this.clearConnection(),
          this.emit("connectionstate", e);
      }
      startTransitionTimer(e) {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "ConnectionManager.startTransitionTimer()",
          "transitionState: " + e.state
        ),
          this.transitionTimer &&
            (i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager.startTransitionTimer()",
              "clearing already-running timer"
            ),
            clearTimeout(this.transitionTimer)),
          (this.transitionTimer = setTimeout(() => {
            this.transitionTimer &&
              ((this.transitionTimer = null),
              i.logAction(
                this.logger,
                i.LOG_MINOR,
                "ConnectionManager " + e.state + " timer expired",
                "requesting new state: " + e.failState
              ),
              this.notifyState({ state: e.failState }));
          }, e.retryDelay));
      }
      cancelTransitionTimer() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "ConnectionManager.cancelTransitionTimer()",
          ""
        ),
          this.transitionTimer &&
            (clearTimeout(this.transitionTimer), (this.transitionTimer = null));
      }
      startSuspendTimer() {
        this.suspendTimer ||
          (this.suspendTimer = setTimeout(() => {
            this.suspendTimer &&
              ((this.suspendTimer = null),
              i.logAction(
                this.logger,
                i.LOG_MINOR,
                "ConnectionManager suspend timer expired",
                "requesting new state: suspended"
              ),
              (this.states.connecting.failState = "suspended"),
              this.notifyState({ state: "suspended" }));
          }, this.connectionStateTtl));
      }
      checkSuspendTimer(e) {
        e !== "disconnected" &&
          e !== "suspended" &&
          e !== "connecting" &&
          this.cancelSuspendTimer();
      }
      cancelSuspendTimer() {
        (this.states.connecting.failState = "disconnected"),
          this.suspendTimer &&
            (clearTimeout(this.suspendTimer), (this.suspendTimer = null));
      }
      startRetryTimer(e) {
        this.retryTimer = setTimeout(() => {
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager retry timer expired",
            "retrying"
          ),
            (this.retryTimer = null),
            this.requestState({ state: "connecting" });
        }, e);
      }
      cancelRetryTimer() {
        this.retryTimer &&
          (clearTimeout(this.retryTimer), (this.retryTimer = null));
      }
      startWebSocketSlowTimer() {
        this.webSocketSlowTimer = setTimeout(() => {
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager WebSocket slow timer",
            "checking connectivity"
          ),
            this.checkWsConnectivity()
              .then(() => {
                i.logAction(
                  this.logger,
                  i.LOG_MINOR,
                  "ConnectionManager WebSocket slow timer",
                  "ws connectivity check succeeded"
                ),
                  (this.wsCheckResult = !0);
              })
              .catch(() => {
                i.logAction(
                  this.logger,
                  i.LOG_MAJOR,
                  "ConnectionManager WebSocket slow timer",
                  "ws connectivity check failed"
                ),
                  (this.wsCheckResult = !1);
              }),
            this.realtime.http.checkConnectivity &&
              N(this.realtime.http.checkConnectivity(), (e, t) => {
                e || !t
                  ? (i.logAction(
                      this.logger,
                      i.LOG_MAJOR,
                      "ConnectionManager WebSocket slow timer",
                      "http connectivity check failed"
                    ),
                    this.cancelWebSocketGiveUpTimer(),
                    this.notifyState({
                      state: "disconnected",
                      error: new h(
                        "Unable to connect (network unreachable)",
                        80003,
                        404
                      ),
                    }))
                  : i.logAction(
                      this.logger,
                      i.LOG_MINOR,
                      "ConnectionManager WebSocket slow timer",
                      "http connectivity check succeeded"
                    );
              });
        }, this.options.timeouts.webSocketSlowTimeout);
      }
      cancelWebSocketSlowTimer() {
        this.webSocketSlowTimer &&
          (clearTimeout(this.webSocketSlowTimer),
          (this.webSocketSlowTimer = null));
      }
      startWebSocketGiveUpTimer(e) {
        this.webSocketGiveUpTimer = setTimeout(() => {
          var t, r;
          this.wsCheckResult ||
            (i.logAction(
              this.logger,
              i.LOG_MINOR,
              "ConnectionManager WebSocket give up timer",
              "websocket connection took more than 10s; " +
                (this.baseTransport ? "trying base transport" : "")
            ),
            this.baseTransport
              ? ((this.abandonedWebSocket = !0),
                (t = this.proposedTransport) == null || t.dispose(),
                (r = this.pendingTransport) == null || r.dispose(),
                this.connectBase(e, ++this.connectCounter))
              : i.logAction(
                  this.logger,
                  i.LOG_MAJOR,
                  "ConnectionManager WebSocket give up timer",
                  "websocket connectivity appears to be unavailable but no other transports to try"
                ));
        }, this.options.timeouts.webSocketConnectTimeout);
      }
      cancelWebSocketGiveUpTimer() {
        this.webSocketGiveUpTimer &&
          (clearTimeout(this.webSocketGiveUpTimer),
          (this.webSocketGiveUpTimer = null));
      }
      notifyState(e) {
        var l, u;
        let t = e.state,
          r =
            t === "disconnected" &&
            (this.state === this.states.connected ||
              e.retryImmediately ||
              (this.state === this.states.connecting &&
                e.error &&
                X.isTokenErr(e.error) &&
                !(this.errorReason && X.isTokenErr(this.errorReason))));
        if (
          (i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.notifyState()",
            "new state: " + t + (r ? "; will retry connection immediately" : "")
          ),
          t == this.state.state ||
            (this.cancelTransitionTimer(),
            this.cancelRetryTimer(),
            this.cancelWebSocketSlowTimer(),
            this.cancelWebSocketGiveUpTimer(),
            this.checkSuspendTimer(e.state),
            (t === "suspended" || t === "connected") &&
              (this.disconnectedRetryCount = 0),
            this.state.terminal))
        )
          return;
        let o = this.states[e.state],
          a = o.retryDelay;
        o.state === "disconnected" &&
          (this.disconnectedRetryCount++,
          (a = Qe(o.retryDelay, this.disconnectedRetryCount)));
        let c = new tt(
          this.state.state,
          o.state,
          a,
          e.error || ((u = (l = ae)[o.state]) == null ? void 0 : u.call(l))
        );
        if (r) {
          let f = () => {
              this.state === this.states.disconnected &&
                ((this.lastAutoReconnectAttempt = Date.now()),
                this.requestState({ state: "connecting" }));
            },
            d =
              this.lastAutoReconnectAttempt &&
              Date.now() - this.lastAutoReconnectAttempt + 1;
          d && d < 1e3
            ? (i.logAction(
                this.logger,
                i.LOG_MICRO,
                "ConnectionManager.notifyState()",
                "Last reconnect attempt was only " +
                  d +
                  "ms ago, waiting another " +
                  (1e3 - d) +
                  "ms before trying again"
              ),
              setTimeout(f, 1e3 - d))
            : p.Config.nextTick(f);
        } else
          (t === "disconnected" || t === "suspended") &&
            this.startRetryTimer(a);
        ((t === "disconnected" && !r) || t === "suspended" || o.terminal) &&
          p.Config.nextTick(() => {
            this.disconnectAllTransports();
          }),
          t == "connected" &&
            !this.activeProtocol &&
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "ConnectionManager.notifyState()",
              "Broken invariant: attempted to go into connected state, but there is no active protocol"
            ),
          this.enactStateChange(c),
          this.state.sendEvents
            ? this.sendQueuedMessages()
            : this.state.queueEvents ||
              (this.realtime.channels.propogateConnectionInterruption(
                t,
                c.reason
              ),
              this.failQueuedMessages(c.reason));
      }
      requestState(e) {
        var a, c;
        let t = e.state;
        if (
          (i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.requestState()",
            "requested state: " + t + "; current state: " + this.state.state
          ),
          t == this.state.state ||
            (this.cancelWebSocketSlowTimer(),
            this.cancelWebSocketGiveUpTimer(),
            this.cancelTransitionTimer(),
            this.cancelRetryTimer(),
            this.checkSuspendTimer(t),
            t == "connecting" && this.state.state == "connected") ||
            (t == "closing" && this.state.state == "closed"))
        )
          return;
        let r = this.states[t],
          o = new tt(
            this.state.state,
            r.state,
            null,
            e.error || ((c = (a = ae)[r.state]) == null ? void 0 : c.call(a))
          );
        this.enactStateChange(o),
          t == "connecting" &&
            p.Config.nextTick(() => {
              this.startConnect();
            }),
          t == "closing" && this.closeImpl();
      }
      startConnect() {
        if (this.state !== this.states.connecting) {
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.startConnect()",
            "Must be in connecting state to connect, but was " +
              this.state.state
          );
          return;
        }
        let e = this.realtime.auth,
          t = ++this.connectCounter,
          r = () => {
            this.checkConnectionStateFreshness(),
              this.getTransportParams((o) => {
                if (o.mode === "recover" && o.options.recover) {
                  let a = Wn(o.options.recover);
                  a && this.realtime.channels.recoverChannels(a.channelSerials);
                }
                t === this.connectCounter && this.connectImpl(o, t);
              });
          };
        if (
          (i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.startConnect()",
            "starting connection"
          ),
          this.startSuspendTimer(),
          this.startTransitionTimer(this.states.connecting),
          e.method === "basic")
        )
          r();
        else {
          let o = (a) => {
            t === this.connectCounter &&
              (a ? this.actOnErrorFromAuthorize(a) : r());
          };
          this.errorReason && X.isTokenErr(this.errorReason)
            ? N(e._forceNewToken(null, null), o)
            : N(e._ensureValidAuthCredentials(!1), o);
        }
      }
      connectImpl(e, t) {
        let r = this.state.state;
        if (r !== this.states.connecting.state) {
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.connectImpl()",
            "Must be in connecting state to connect, but was " + r
          );
          return;
        }
        let o = this.getTransportPreference();
        o &&
          o === this.baseTransport &&
          this.webSocketTransportAvailable &&
          this.checkWsConnectivity()
            .then(() => {
              this.unpersistTransportPreference(),
                this.state === this.states.connecting &&
                  (i.logAction(
                    this.logger,
                    i.LOG_MINOR,
                    "ConnectionManager.connectImpl():",
                    "web socket connectivity available, cancelling connection attempt with " +
                      this.baseTransport
                  ),
                  this.disconnectAllTransports(),
                  this.connectWs(e, ++this.connectCounter));
            })
            .catch(hr),
          (o && o === this.baseTransport) ||
          (this.baseTransport && !this.webSocketTransportAvailable)
            ? this.connectBase(e, t)
            : this.connectWs(e, t);
      }
      connectWs(e, t) {
        i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.connectWs()"),
          (this.wsCheckResult = null),
          (this.abandonedWebSocket = !1),
          this.startWebSocketSlowTimer(),
          this.startWebSocketGiveUpTimer(e),
          this.tryTransportWithFallbacks(
            "web_socket",
            e,
            !0,
            t,
            () => this.wsCheckResult !== !1 && !this.abandonedWebSocket
          );
      }
      connectBase(e, t) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "ConnectionManager.connectBase()"
        ),
          this.baseTransport
            ? this.tryTransportWithFallbacks(
                this.baseTransport,
                e,
                !1,
                t,
                () => !0
              )
            : this.notifyState({
                state: "disconnected",
                error: new h("No transports left to try", 8e4, 404),
              });
      }
      tryTransportWithFallbacks(e, t, r, o, a) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "ConnectionManager.tryTransportWithFallbacks()",
          e
        );
        let c = (g) => {
            this.notifyState({
              state: this.states.connecting.failState,
              error: g,
            });
          },
          l = r ? this.wsHosts.slice() : this.httpHosts.slice(),
          u = (g, m) => {
            if (o === this.connectCounter) {
              if (!a()) {
                m && m.dispose();
                return;
              }
              !m && !g && d();
            }
          },
          f = l.shift();
        if (!f) {
          c(new h("Unable to connect (no available host)", 80003, 404));
          return;
        }
        t.host = f;
        let d = () => {
          if (!l.length) {
            c(
              new h(
                "Unable to connect (and no more fallback hosts to try)",
                80003,
                404
              )
            );
            return;
          }
          if (!this.realtime.http.checkConnectivity) {
            c(
              new S("Internal error: Http.checkConnectivity not set", null, 500)
            );
            return;
          }
          N(this.realtime.http.checkConnectivity(), (g, m) => {
            if (o === this.connectCounter && a()) {
              if (g) {
                c(g);
                return;
              }
              if (!m) {
                c(new h("Unable to connect (network unreachable)", 80003, 404));
                return;
              }
              (t.host = ft(l)), this.tryATransport(t, e, u);
            }
          });
        };
        if (this.forceFallbackHost && l.length) {
          (this.forceFallbackHost = !1), d();
          return;
        }
        this.tryATransport(t, e, u);
      }
      closeImpl() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "ConnectionManager.closeImpl()",
          "closing connection"
        ),
          this.cancelSuspendTimer(),
          this.startTransitionTimer(this.states.closing),
          this.pendingTransport &&
            (i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.closeImpl()",
              "Closing pending transport: " + this.pendingTransport
            ),
            this.pendingTransport.close()),
          this.activeProtocol &&
            (i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.closeImpl()",
              "Closing active transport: " + this.activeProtocol.getTransport()
            ),
            this.activeProtocol.getTransport().close()),
          this.notifyState({ state: "closed" });
      }
      onAuthUpdated(e, t) {
        var r;
        switch (this.state.state) {
          case "connected": {
            i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.onAuthUpdated()",
              "Sending AUTH message on active transport"
            );
            let o =
              (r = this.activeProtocol) == null ? void 0 : r.getTransport();
            o && o.onAuthUpdated && o.onAuthUpdated(e);
            let a = G({ action: C.AUTH, auth: { accessToken: e.token } });
            this.send(a);
            let c = () => {
                this.off(l), t(null, e);
              },
              l = (u) => {
                u.current === "failed" &&
                  (this.off(c),
                  this.off(l),
                  t(u.reason || this.getStateError()));
              };
            this.once("connectiondetails", c), this.on("connectionstate", l);
            break;
          }
          case "connecting":
            i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.onAuthUpdated()",
              "Aborting current connection attempts in order to start again with the new auth details"
            ),
              this.disconnectAllTransports();
          default: {
            i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.onAuthUpdated()",
              "Connection state is " +
                this.state.state +
                "; waiting until either connected or failed"
            );
            let o = (a) => {
              switch (a.current) {
                case "connected":
                  this.off(o), t(null, e);
                  break;
                case "failed":
                case "closed":
                case "suspended":
                  this.off(o), t(a.reason || this.getStateError());
                  break;
                default:
                  break;
              }
            };
            this.on("connectionstate", o),
              this.state.state === "connecting"
                ? this.startConnect()
                : this.requestState({ state: "connecting" });
          }
        }
      }
      disconnectAllTransports() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "ConnectionManager.disconnectAllTransports()",
          "Disconnecting all transports"
        ),
          this.connectCounter++,
          this.pendingTransport &&
            (i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.disconnectAllTransports()",
              "Disconnecting pending transport: " + this.pendingTransport
            ),
            this.pendingTransport.disconnect()),
          delete this.pendingTransport,
          this.proposedTransport &&
            (i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.disconnectAllTransports()",
              "Disconnecting proposed transport: " + this.pendingTransport
            ),
            this.proposedTransport.disconnect()),
          delete this.pendingTransport,
          this.activeProtocol &&
            (i.logAction(
              this.logger,
              i.LOG_MICRO,
              "ConnectionManager.disconnectAllTransports()",
              "Disconnecting active transport: " +
                this.activeProtocol.getTransport()
            ),
            this.activeProtocol.getTransport().disconnect());
      }
      send(e, t, r) {
        r = r || hr;
        let o = this.state;
        if (o.sendEvents) {
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "ConnectionManager.send()",
            "sending event"
          ),
            this.sendImpl(new et(e, r));
          return;
        }
        if (!(t && o.queueEvents)) {
          let c =
            "rejecting event, queueEvent was " + t + ", state was " + o.state;
          i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.send()", c),
            r(this.errorReason || new h(c, 9e4, 400));
          return;
        }
        this.logger.shouldLog(i.LOG_MICRO) &&
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "ConnectionManager.send()",
            "queueing msg; " +
              He(e, this.realtime._RealtimePresence, this.realtime._Annotations)
          ),
          this.queue(e, r);
      }
      sendImpl(e) {
        let t = e.message;
        e.ackRequired && !e.sendAttempted && (t.msgSerial = this.msgSerial++);
        try {
          this.activeProtocol.send(e);
        } catch (r) {
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "ConnectionManager.sendImpl()",
            "Unexpected exception in transport.send(): " + r.stack
          );
        }
      }
      queue(e, t) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "ConnectionManager.queue()",
          "queueing event"
        );
        let r = this.queuedMessages.last(),
          o = this.options.maxMessageSize;
        r && !r.sendAttempted && _o(r.message, e, o)
          ? (r.merged ||
              ((r.callback = Se.create(this.logger, [r.callback])),
              (r.merged = !0)),
            r.callback.push(t))
          : this.queuedMessages.push(new et(e, t));
      }
      sendQueuedMessages() {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "ConnectionManager.sendQueuedMessages()",
          "sending " + this.queuedMessages.count() + " queued messages"
        );
        let e;
        for (; (e = this.queuedMessages.shift()); ) this.sendImpl(e);
      }
      queuePendingMessages(e) {
        e &&
          e.length &&
          (i.logAction(
            this.logger,
            i.LOG_MICRO,
            "ConnectionManager.queuePendingMessages()",
            "queueing " + e.length + " pending messages"
          ),
          this.queuedMessages.prepend(e));
      }
      failQueuedMessages(e) {
        let t = this.queuedMessages.count();
        t > 0 &&
          (i.logAction(
            this.logger,
            i.LOG_ERROR,
            "ConnectionManager.failQueuedMessages()",
            "failing " + t + " queued messages, err = " + w(e)
          ),
          this.queuedMessages.completeAllMessages(e));
      }
      onChannelMessage(e, t) {
        this.pendingChannelMessagesState.queue.push({
          message: e,
          transport: t,
        }),
          this.pendingChannelMessagesState.isProcessing ||
            this.processNextPendingChannelMessage();
      }
      processNextPendingChannelMessage() {
        if (this.pendingChannelMessagesState.queue.length > 0) {
          this.pendingChannelMessagesState.isProcessing = !0;
          let e = this.pendingChannelMessagesState.queue.shift();
          this.processChannelMessage(e.message)
            .catch((t) => {
              i.logAction(
                this.logger,
                i.LOG_ERROR,
                "ConnectionManager.processNextPendingChannelMessage() received error ",
                t
              );
            })
            .finally(() => {
              (this.pendingChannelMessagesState.isProcessing = !1),
                this.processNextPendingChannelMessage();
            });
        }
      }
      async processChannelMessage(e) {
        await this.realtime.channels.processChannelMessage(e);
      }
      async ping() {
        var o;
        if (this.state.state !== "connected")
          throw new h("Unable to ping service; not connected", 4e4, 400);
        let e = (o = this.activeProtocol) == null ? void 0 : o.getTransport();
        if (!e) throw this.getStateError();
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "ConnectionManager.ping()",
          "transport = " + e
        );
        let t = Date.now(),
          r = Te();
        return on(
          new Promise((a) => {
            let c = (l) => {
              l === r && (e.off("heartbeat", c), a(Date.now() - t));
            };
            e.on("heartbeat", c), e.ping(r);
          }),
          this.options.timeouts.realtimeRequestTimeout,
          "Timeout waiting for heartbeat response"
        );
      }
      abort(e) {
        this.activeProtocol.getTransport().fail(e);
      }
      getTransportPreference() {
        var e, t;
        return (
          this.transportPreference ||
          (Gn() &&
            ((t = (e = p.WebStorage) == null ? void 0 : e.get) == null
              ? void 0
              : t.call(e, Fn)))
        );
      }
      persistTransportPreference(e) {
        var t, r;
        (this.transportPreference = e.shortName),
          Gn() &&
            ((r = (t = p.WebStorage) == null ? void 0 : t.set) == null ||
              r.call(t, Fn, e.shortName));
      }
      unpersistTransportPreference() {
        var e, t;
        (this.transportPreference = null),
          Gn() &&
            ((t = (e = p.WebStorage) == null ? void 0 : e.remove) == null ||
              t.call(e, Fn));
      }
      actOnErrorFromAuthorize(e) {
        if (e.code === 40171) this.notifyState({ state: "failed", error: e });
        else if (e.code === 40102)
          this.notifyState({ state: "failed", error: e });
        else if (e.statusCode === fe.Forbidden) {
          let t =
            "Client configured authentication provider returned 403; failing the connection";
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "ConnectionManager.actOnErrorFromAuthorize()",
            t
          ),
            this.notifyState({
              state: "failed",
              error: new h(t, 80019, 403, e),
            });
        } else {
          let t = "Client configured authentication provider request failed";
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "ConnectionManager.actOnErrorFromAuthorize",
            t
          ),
            this.notifyState({
              state: this.state.failState,
              error: new h(t, 80019, 401, e),
            });
        }
      }
      onConnectionDetailsUpdate(e, t) {
        if (!e) return;
        (this.connectionDetails = e),
          e.maxMessageSize && (this.options.maxMessageSize = e.maxMessageSize);
        let r = e.clientId;
        if (r) {
          let a = this.realtime.auth._uncheckedSetClientId(r);
          if (a) {
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "ConnectionManager.onConnectionDetailsUpdate()",
              a.message
            ),
              t.fail(a);
            return;
          }
        }
        let o = e.connectionStateTtl;
        o && (this.connectionStateTtl = o),
          (this.maxIdleInterval = e.maxIdleInterval),
          this.emit("connectiondetails", e);
      }
      checkWsConnectivity() {
        let e = this.options.wsConnectivityCheckUrl || R.wsConnectivityCheckUrl,
          t = new p.Config.WebSocket(e);
        return new Promise((r, o) => {
          let a = !1;
          (t.onopen = () => {
            a || ((a = !0), r(), t.close());
          }),
            (t.onclose = t.onerror =
              () => {
                a || ((a = !0), o());
              });
        });
      }
      sessionRecoveryName() {
        return (
          this.options.recoveryKeyStorageName || "ably-connection-recovery"
        );
      }
      getSessionRecoverData() {
        var e, t;
        return (
          nt() &&
          ((t = (e = p.WebStorage) == null ? void 0 : e.getSession) == null
            ? void 0
            : t.call(e, this.sessionRecoveryName()))
        );
      }
      setSessionRecoverData(e) {
        var t, r;
        return (
          nt() &&
          ((r = (t = p.WebStorage) == null ? void 0 : t.setSession) == null
            ? void 0
            : r.call(t, this.sessionRecoveryName(), e))
        );
      }
      clearSessionRecoverData() {
        var e, t;
        return (
          nt() &&
          ((t = (e = p.WebStorage) == null ? void 0 : e.removeSession) == null
            ? void 0
            : t.call(e, this.sessionRecoveryName()))
        );
      }
    },
    Lt = Vn;
  var zn = class extends v {
      constructor(e, t) {
        super(e.logger);
        this.whenState = (e) => v.prototype.whenState.call(this, e, this.state);
        (this.ably = e),
          (this.connectionManager = new Lt(e, t)),
          (this.state = this.connectionManager.state.state),
          (this.key = void 0),
          (this.id = void 0),
          (this.errorReason = null),
          this.connectionManager.on("connectionstate", (r) => {
            let o = (this.state = r.current);
            p.Config.nextTick(() => {
              this.emit(o, r);
            });
          }),
          this.connectionManager.on("update", (r) => {
            p.Config.nextTick(() => {
              this.emit("update", r);
            });
          });
      }
      connect() {
        i.logAction(this.logger, i.LOG_MINOR, "Connection.connect()", ""),
          this.connectionManager.requestState({ state: "connecting" });
      }
      async ping() {
        return (
          i.logAction(this.logger, i.LOG_MINOR, "Connection.ping()", ""),
          this.connectionManager.ping()
        );
      }
      close() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "Connection.close()",
          "connectionKey = " + this.key
        ),
          this.connectionManager.requestState({ state: "closing" });
      }
      get recoveryKey() {
        return (
          this.logger.deprecationWarning(
            "The `Connection.recoveryKey` attribute has been replaced by the `Connection.createRecoveryKey()` method. Replace your usage of `recoveryKey` with the return value of `createRecoveryKey()`. `recoveryKey` will be removed in a future version."
          ),
          this.createRecoveryKey()
        );
      }
      createRecoveryKey() {
        return this.connectionManager.createRecoveryKey();
      }
    },
    dr = zn;
  var _t = class _t extends Pt {
    constructor(e) {
      var t, r;
      super(R.objectifyOptions(e, !1, "BaseRealtime", i.defaultLogger));
      if (
        (i.logAction(this.logger, i.LOG_MINOR, "Realtime()", ""),
        typeof EdgeRuntime == "string")
      )
        throw new h(
          `Ably.Realtime instance cannot be used in Vercel Edge runtime. If you are running Vercel Edge functions, please replace your "new Ably.Realtime()" with "new Ably.Rest()" and use Ably Rest API instead of the Realtime API. If you are server-rendering your application in the Vercel Edge runtime, please use the condition "if (typeof EdgeRuntime === 'string')" to prevent instantiating Ably.Realtime instance during SSR in the Vercel Edge runtime.`,
          4e4,
          400
        );
      (this._additionalTransportImplementations =
        _t.transportImplementationsFromPlugins(this.options.plugins)),
        (this._RealtimePresence =
          (r =
            (t = this.options.plugins) == null ? void 0 : t.RealtimePresence) !=
          null
            ? r
            : null),
        (this.connection = new dr(this, this.options)),
        (this._channels = new Jn(this)),
        this.options.autoConnect !== !1 && this.connect();
    }
    static transportImplementationsFromPlugins(e) {
      let t = {};
      return (
        e != null &&
          e.WebSocketTransport &&
          (t[q.WebSocket] = e.WebSocketTransport),
        e != null && e.XHRPolling && (t[q.XhrPolling] = e.XHRPolling),
        t
      );
    }
    get channels() {
      return this._channels;
    }
    connect() {
      i.logAction(this.logger, i.LOG_MINOR, "Realtime.connect()", ""),
        this.connection.connect();
    }
    close() {
      i.logAction(this.logger, i.LOG_MINOR, "Realtime.close()", ""),
        this.connection.close();
    }
  };
  _t.EventEmitter = v;
  var Kn = _t,
    Jn = class extends v {
      constructor(e) {
        super(e.logger);
        (this.realtime = e),
          (this.all = Object.create(null)),
          e.connection.connectionManager.on("transport.active", () => {
            this.onTransportActive();
          });
      }
      channelSerials() {
        let e = {};
        for (let t of pe(this.all, !0)) {
          let r = this.all[t];
          r.properties.channelSerial && (e[t] = r.properties.channelSerial);
        }
        return e;
      }
      recoverChannels(e) {
        for (let t of pe(e, !0)) {
          let r = this.get(t);
          r.properties.channelSerial = e[t];
        }
      }
      async processChannelMessage(e) {
        let t = e.channel;
        if (t === void 0) {
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "Channels.processChannelMessage()",
            "received event unspecified channel, action = " + e.action
          );
          return;
        }
        let r = this.all[t];
        if (!r) {
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "Channels.processChannelMessage()",
            "received event for non-existent channel: " + t
          );
          return;
        }
        await r.processMessage(e);
      }
      onTransportActive() {
        for (let e in this.all) {
          let t = this.all[e];
          t.state === "attaching" || t.state === "detaching"
            ? t.checkPendingState()
            : t.state === "suspended"
            ? t._attach(!1, null)
            : t.state === "attached" && t.requestState("attaching");
        }
      }
      propogateConnectionInterruption(e, t) {
        let r = {
            closing: "detached",
            closed: "detached",
            failed: "failed",
            suspended: "suspended",
          },
          o = ["attaching", "attached", "detaching", "suspended"],
          a = r[e];
        for (let c in this.all) {
          let l = this.all[c];
          o.includes(l.state) && l.notifyState(a, t);
        }
      }
      get(e, t) {
        e = String(e);
        let r = this.all[e];
        if (!r) r = this.all[e] = new Pe(this.realtime, e, t);
        else if (t) {
          if (r._shouldReattachToSetOptions(t, r.channelOptions))
            throw new h(
              "Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.",
              4e4,
              400
            );
          r.setOptions(t);
        }
        return r;
      }
      getDerived(e, t, r) {
        if (t.filter) {
          let o = Oe(t.filter),
            a = sn(e);
          e = `[filter=${o}${a.qualifierParam}]${a.channelName}`;
        }
        return this.get(e, r);
      }
      release(e) {
        e = String(e);
        let t = this.all[e];
        if (!t) return;
        let r = t.getReleaseErr();
        if (r) throw r;
        delete this.all[e];
      }
    },
    pr = Kn;
  function No(s, n) {
    if (s.isSynthesized() || n.isSynthesized())
      return s.timestamp >= n.timestamp;
    let e = s.parseId(),
      t = n.parseId();
    return e.msgSerial === t.msgSerial
      ? e.index > t.index
      : e.msgSerial > t.msgSerial;
  }
  var ke = class extends v {
    constructor(e, t, r = No) {
      super(e.logger);
      (this.presence = e),
        (this.map = Object.create(null)),
        (this.syncInProgress = !1),
        (this.residualMembers = null),
        (this.memberKey = t),
        (this.newerThan = r);
    }
    get(e) {
      return this.map[e];
    }
    getClient(e) {
      let t = this.map,
        r = [];
      for (let o in t) {
        let a = t[o];
        a.clientId == e && a.action != "absent" && r.push(a);
      }
      return r;
    }
    list(e) {
      let t = this.map,
        r = e && e.clientId,
        o = e && e.connectionId,
        a = [];
      for (let c in t) {
        let l = t[c];
        l.action !== "absent" &&
          ((r && r != l.clientId) || (o && o != l.connectionId) || a.push(l));
      }
      return a;
    }
    put(e) {
      (e.action === "enter" || e.action === "update") &&
        ((e = J.fromValues(e)), (e.action = "present"));
      let t = this.map,
        r = this.memberKey(e);
      this.residualMembers && delete this.residualMembers[r];
      let o = t[r];
      return o && !this.newerThan(e, o) ? !1 : ((t[r] = e), !0);
    }
    values() {
      let e = this.map,
        t = [];
      for (let r in e) {
        let o = e[r];
        o.action != "absent" && t.push(o);
      }
      return t;
    }
    remove(e) {
      let t = this.map,
        r = this.memberKey(e),
        o = t[r];
      return o && !this.newerThan(e, o)
        ? !1
        : (this.syncInProgress
            ? ((e = J.fromValues(e)), (e.action = "absent"), (t[r] = e))
            : delete t[r],
          !!o);
    }
    startSync() {
      let e = this.map,
        t = this.syncInProgress;
      i.logAction(
        this.logger,
        i.LOG_MINOR,
        "PresenceMap.startSync()",
        "channel = " + this.presence.channel.name + "; syncInProgress = " + t
      ),
        this.syncInProgress ||
          ((this.residualMembers = oe(e)), this.setInProgress(!0));
    }
    endSync() {
      let e = this.map,
        t = this.syncInProgress;
      if (
        (i.logAction(
          this.logger,
          i.LOG_MINOR,
          "PresenceMap.endSync()",
          "channel = " + this.presence.channel.name + "; syncInProgress = " + t
        ),
        t)
      ) {
        for (let r in e) e[r].action === "absent" && delete e[r];
        this.presence._synthesizeLeaves(Jt(this.residualMembers));
        for (let r in this.residualMembers) delete e[r];
        (this.residualMembers = null), this.setInProgress(!1);
      }
      this.emit("sync");
    }
    waitSync(e) {
      let t = this.syncInProgress;
      if (
        (i.logAction(
          this.logger,
          i.LOG_MINOR,
          "PresenceMap.waitSync()",
          "channel = " + this.presence.channel.name + "; syncInProgress = " + t
        ),
        !t)
      ) {
        e();
        return;
      }
      this.once("sync", e);
    }
    clear() {
      (this.map = {}), this.setInProgress(!1), (this.residualMembers = null);
    }
    setInProgress(e) {
      i.logAction(
        this.logger,
        i.LOG_MICRO,
        "PresenceMap.setInProgress()",
        "inProgress = " + e
      ),
        (this.syncInProgress = e),
        (this.presence.syncComplete = !e);
    }
  };
  function qo(s) {
    return s.channel.client.auth.clientId;
  }
  function Qn(s) {
    let n = s.channel.client,
      e = n.auth.clientId;
    return (!e || e === "*") && n.connection.state === "connected";
  }
  function Do(s, n, e) {
    switch (s.state) {
      case "attached":
      case "suspended":
        e();
        break;
      case "initialized":
      case "detached":
      case "detaching":
      case "attaching":
        N(s.attach(), function (t) {
          t ? n(t) : e();
        });
        break;
      default:
        n(h.fromValues(s.invalidStateError()));
    }
  }
  var Xn = class extends v {
      constructor(e) {
        super(e.logger);
        (this.channel = e),
          (this.syncComplete = !1),
          (this.members = new ke(
            this,
            (t) => t.clientId + ":" + t.connectionId
          )),
          (this._myMembers = new ke(this, (t) => t.clientId)),
          (this.subscriptions = new v(this.logger)),
          (this.pendingPresence = []);
      }
      async enter(e) {
        if (Qn(this))
          throw new h(
            "clientId must be specified to enter a presence channel",
            40012,
            400
          );
        return this._enterOrUpdateClient(void 0, void 0, e, "enter");
      }
      async update(e) {
        if (Qn(this))
          throw new h(
            "clientId must be specified to update presence data",
            40012,
            400
          );
        return this._enterOrUpdateClient(void 0, void 0, e, "update");
      }
      async enterClient(e, t) {
        return this._enterOrUpdateClient(void 0, e, t, "enter");
      }
      async updateClient(e, t) {
        return this._enterOrUpdateClient(void 0, e, t, "update");
      }
      async _enterOrUpdateClient(e, t, r, o) {
        let a = this.channel;
        if (!a.connectionManager.activeState())
          throw a.connectionManager.getError();
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RealtimePresence." + o + "Client()",
          "channel = " +
            a.name +
            ", id = " +
            e +
            ", client = " +
            (t || "(implicit) " + qo(this))
        );
        let c = J.fromData(r);
        (c.action = o), e && (c.id = e), t && (c.clientId = t);
        let l = await c.encode(a.channelOptions);
        switch (a.state) {
          case "attached":
            return a.sendPresence([l]);
          case "initialized":
          case "detached":
            a.attach();
          case "attaching":
            return new Promise((u, f) => {
              this.pendingPresence.push({
                presence: l,
                callback: (d) => (d ? f(d) : u()),
              });
            });
          default: {
            let u = new S(
              "Unable to " +
                o +
                " presence channel while in " +
                a.state +
                " state",
              90001
            );
            throw ((u.code = 90001), u);
          }
        }
      }
      async leave(e) {
        if (Qn(this))
          throw new h(
            "clientId must have been specified to enter or leave a presence channel",
            40012,
            400
          );
        return this.leaveClient(void 0, e);
      }
      async leaveClient(e, t) {
        let r = this.channel;
        if (!r.connectionManager.activeState())
          throw r.connectionManager.getError();
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RealtimePresence.leaveClient()",
          "leaving; channel = " + this.channel.name + ", client = " + e
        );
        let o = J.fromData(t);
        (o.action = "leave"), e && (o.clientId = e);
        let a = await o.encode(r.channelOptions);
        switch (r.state) {
          case "attached":
            return r.sendPresence([a]);
          case "attaching":
            return new Promise((c, l) => {
              this.pendingPresence.push({
                presence: a,
                callback: (u) => (u ? l(u) : c()),
              });
            });
          case "initialized":
          case "failed":
            throw new S(
              "Unable to leave presence channel (incompatible state)",
              90001
            );
          default:
            throw r.invalidStateError();
        }
      }
      async get(e) {
        let t = !e || ("waitForSync" in e ? e.waitForSync : !0);
        return new Promise((r, o) => {
          function a(c) {
            r(e ? c.list(e) : c.values());
          }
          if (this.channel.state === "suspended") {
            t
              ? o(
                  h.fromValues({
                    statusCode: 400,
                    code: 91005,
                    message:
                      "Presence state is out of sync due to channel being in the SUSPENDED state",
                  })
                )
              : a(this.members);
            return;
          }
          Do(
            this.channel,
            (c) => o(c),
            () => {
              let c = this.members;
              t
                ? c.waitSync(function () {
                    a(c);
                  })
                : a(c);
            }
          );
        });
      }
      async history(e) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RealtimePresence.history()",
          "channel = " + this.name
        );
        let t = this.channel.client.rest.presenceMixin;
        if (e && e.untilAttach)
          if (this.channel.state === "attached")
            delete e.untilAttach,
              (e.from_serial = this.channel.properties.attachSerial);
          else
            throw new h(
              "option untilAttach requires the channel to be attached, was: " +
                this.channel.state,
              4e4,
              400
            );
        return t.history(this, e);
      }
      setPresence(e, t, r) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "RealtimePresence.setPresence()",
          "received presence for " +
            e.length +
            " participants; syncChannelSerial = " +
            r
        );
        let o,
          a,
          c = this.members,
          l = this._myMembers,
          u = [],
          f = this.channel.connectionManager.connectionId;
        t &&
          (this.members.startSync(),
          r && (a = r.match(/^[\w-]+:(.*)$/)) && (o = a[1]));
        for (let d of e)
          switch (d.action) {
            case "leave":
              c.remove(d) && u.push(d),
                d.connectionId === f && !d.isSynthesized() && l.remove(d);
              break;
            case "enter":
            case "present":
            case "update":
              c.put(d) && u.push(d), d.connectionId === f && l.put(d);
              break;
          }
        t && !o && (c.endSync(), (this.channel.syncChannelSerial = null));
        for (let d = 0; d < u.length; d++) {
          let g = u[d];
          this.subscriptions.emit(g.action, g);
        }
      }
      onAttached(e) {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "RealtimePresence.onAttached()",
          "channel = " + this.channel.name + ", hasPresence = " + e
        ),
          e
            ? this.members.startSync()
            : (this._synthesizeLeaves(this.members.values()),
              this.members.clear()),
          this._ensureMyMembersPresent();
        let t = this.pendingPresence,
          r = t.length;
        if (r) {
          this.pendingPresence = [];
          let o = [],
            a = Se.create(this.logger);
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "RealtimePresence.onAttached",
            "sending " + r + " queued presence messages"
          );
          for (let c = 0; c < r; c++) {
            let l = t[c];
            o.push(l.presence), a.push(l.callback);
          }
          this.channel
            .sendPresence(o)
            .then(() => a())
            .catch((c) => a(c));
        }
      }
      actOnChannelState(e, t, r) {
        switch (e) {
          case "attached":
            this.onAttached(t);
            break;
          case "detached":
          case "failed":
            this._clearMyMembers(), this.members.clear();
          case "suspended":
            this.failPendingPresence(r);
            break;
        }
      }
      failPendingPresence(e) {
        if (this.pendingPresence.length) {
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "RealtimeChannel.failPendingPresence",
            "channel; name = " + this.channel.name + ", err = " + w(e)
          );
          for (let t = 0; t < this.pendingPresence.length; t++)
            try {
              this.pendingPresence[t].callback(e);
            } catch (r) {}
          this.pendingPresence = [];
        }
      }
      _clearMyMembers() {
        this._myMembers.clear();
      }
      _ensureMyMembersPresent() {
        let e = this._myMembers,
          t = this.channel.connectionManager.connectionId;
        for (let r in e.map) {
          let o = e.map[r];
          i.logAction(
            this.logger,
            i.LOG_MICRO,
            "RealtimePresence._ensureMyMembersPresent()",
            'Auto-reentering clientId "' +
              o.clientId +
              '" into the presence set'
          );
          let a = o.connectionId === t ? o.id : void 0;
          this._enterOrUpdateClient(a, o.clientId, o.data, "enter").catch(
            (c) => {
              let l = new h("Presence auto re-enter failed", 91004, 400, c);
              i.logAction(
                this.logger,
                i.LOG_ERROR,
                "RealtimePresence._ensureMyMembersPresent()",
                "Presence auto re-enter failed; reason = " + w(c)
              );
              let u = new Ze(this.channel.state, this.channel.state, !0, !1, l);
              this.channel.emit("update", u);
            }
          );
        }
      }
      _synthesizeLeaves(e) {
        let t = this.subscriptions;
        e.forEach(function (r) {
          let o = J.fromValues({
            action: "leave",
            connectionId: r.connectionId,
            clientId: r.clientId,
            data: r.data,
            encoding: r.encoding,
            timestamp: Date.now(),
          });
          t.emit("leave", o);
        });
      }
      async subscribe(...e) {
        let t = Pe.processListenerArgs(e),
          r = t[0],
          o = t[1],
          a = this.channel;
        if (a.state === "failed") throw h.fromValues(a.invalidStateError());
        this.subscriptions.on(r, o),
          a.channelOptions.attachOnSubscribe !== !1 && (await a.attach());
      }
      unsubscribe(...e) {
        let t = Pe.processListenerArgs(e),
          r = t[0],
          o = t[1];
        this.subscriptions.off(r, o);
      }
    },
    fr = Xn;
  var Ho = q.WebSocket;
  function Go(s) {
    return !!s.on;
  }
  var $n = class extends de {
      constructor(e, t, r) {
        super(e, t, r);
        this.shortName = Ho;
        (r.heartbeats = p.Config.useProtocolHeartbeats), (this.wsHost = r.host);
      }
      static isAvailable() {
        return !!p.Config.WebSocket;
      }
      createWebSocket(e, t) {
        return (this.uri = e + le(t)), new p.Config.WebSocket(this.uri);
      }
      toString() {
        return "WebSocketTransport; uri=" + this.uri;
      }
      connect() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "WebSocketTransport.connect()",
          "starting"
        ),
          de.prototype.connect.call(this);
        let e = this,
          t = this.params,
          r = t.options,
          a =
            (r.tls ? "wss://" : "ws://") +
            this.wsHost +
            ":" +
            R.getPort(r) +
            "/";
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "WebSocketTransport.connect()",
          "uri: " + a
        ),
          N(this.auth.getAuthParams(), function (c, l) {
            if (e.isDisposed) return;
            let u = "";
            for (let d in l) u += " " + d + ": " + l[d] + ";";
            if (
              (i.logAction(
                e.logger,
                i.LOG_MINOR,
                "WebSocketTransport.connect()",
                "authParams:" + u + " err: " + c
              ),
              c)
            ) {
              e.disconnect(c);
              return;
            }
            let f = t.getConnectParams(l);
            try {
              let d = (e.wsConnection = e.createWebSocket(a, f));
              (d.binaryType = p.Config.binaryType),
                (d.onopen = function () {
                  e.onWsOpen();
                }),
                (d.onclose = function (g) {
                  e.onWsClose(g);
                }),
                (d.onmessage = function (g) {
                  e.onWsData(g.data);
                }),
                (d.onerror = function (g) {
                  e.onWsError(g);
                }),
                Go(d) &&
                  d.on("ping", function () {
                    e.onActivity();
                  });
            } catch (d) {
              i.logAction(
                e.logger,
                i.LOG_ERROR,
                "WebSocketTransport.connect()",
                "Unexpected exception creating websocket: err = " +
                  (d.stack || d.message)
              ),
                e.disconnect(d);
            }
          });
      }
      send(e) {
        let t = this.wsConnection;
        if (!t) {
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "WebSocketTransport.send()",
            "No socket connection"
          );
          return;
        }
        try {
          t.send(
            sr(e, this.connectionManager.realtime._MsgPack, this.params.format)
          );
        } catch (r) {
          let o = "Exception from ws connection when trying to send: " + w(r);
          i.logAction(this.logger, i.LOG_ERROR, "WebSocketTransport.send()", o),
            this.finish("disconnected", new h(o, 5e4, 500));
        }
      }
      onWsData(e) {
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "WebSocketTransport.onWsData()",
          "data received; length = " + e.length + "; type = " + typeof e
        );
        try {
          this.onProtocolMessage(
            rr(
              e,
              this.connectionManager.realtime._MsgPack,
              this.connectionManager.realtime._RealtimePresence,
              this.connectionManager.realtime._Annotations,
              this.format
            )
          );
        } catch (t) {
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "WebSocketTransport.onWsData()",
            "Unexpected exception handing channel message: " + t.stack
          );
        }
      }
      onWsOpen() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "WebSocketTransport.onWsOpen()",
          "opened WebSocket"
        ),
          this.emit("preconnect");
      }
      onWsClose(e) {
        let t, r;
        if (
          (typeof e == "object"
            ? ((r = e.code), (t = e.wasClean || r === 1e3))
            : ((r = e), (t = r == 1e3)),
          delete this.wsConnection,
          t)
        ) {
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "WebSocketTransport.onWsClose()",
            "Cleanly closed WebSocket"
          );
          let o = new h("Websocket closed", 80003, 400);
          this.finish("disconnected", o);
        } else {
          let o = "Unclean disconnection of WebSocket ; code = " + r,
            a = new h(o, 80003, 400);
          i.logAction(
            this.logger,
            i.LOG_MINOR,
            "WebSocketTransport.onWsClose()",
            o
          ),
            this.finish("disconnected", a);
        }
        this.emit("disposed");
      }
      onWsError(e) {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "WebSocketTransport.onError()",
          "Error from WebSocket: " + e.message
        ),
          p.Config.nextTick(() => {
            this.disconnect(Error(e.message));
          });
      }
      dispose() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "WebSocketTransport.dispose()",
          ""
        ),
          (this.isDisposed = !0);
        let e = this.wsConnection;
        e &&
          ((e.onmessage = function () {}),
          delete this.wsConnection,
          p.Config.nextTick(() => {
            if (
              (i.logAction(
                this.logger,
                i.LOG_MICRO,
                "WebSocketTransport.dispose()",
                "closing websocket"
              ),
              !e)
            )
              throw new Error(
                "WebSocketTransport.dispose(): wsConnection is not defined"
              );
            e.close();
          }));
      }
    },
    Nt = $n;
  var qt = class {
    static subscribeFilter(n, e, t) {
      let r = (o) => {
        var c, l, u, f, d, g;
        let a = {
          name: o.name,
          refTimeserial:
            (l = (c = o.extras) == null ? void 0 : c.ref) == null
              ? void 0
              : l.timeserial,
          refType:
            (f = (u = o.extras) == null ? void 0 : u.ref) == null
              ? void 0
              : f.type,
          isRef: !!(
            (g = (d = o.extras) == null ? void 0 : d.ref) != null &&
            g.timeserial
          ),
          clientId: o.clientId,
        };
        Object.entries(e).find(([m, y]) => (y !== void 0 ? a[m] !== y : !1)) ||
          t(o);
      };
      this.addFilteredSubscription(n, e, t, r), n.subscriptions.on(r);
    }
    static addFilteredSubscription(n, e, t, r) {
      var o;
      if (
        (n.filteredSubscriptions || (n.filteredSubscriptions = new Map()),
        n.filteredSubscriptions.has(t))
      ) {
        let a = n.filteredSubscriptions.get(t);
        a.set(
          e,
          ((o = a == null ? void 0 : a.get(e)) == null
            ? void 0
            : o.concat(r)) || [r]
        );
      } else n.filteredSubscriptions.set(t, new Map([[e, [r]]]));
    }
    static getAndDeleteFilteredSubscriptions(n, e, t) {
      if (!n.filteredSubscriptions) return [];
      if (!t && e)
        return Array.from(n.filteredSubscriptions.entries())
          .map(([a, c]) => {
            var u;
            let l = c.get(e);
            return (
              c.delete(e),
              c.size === 0 &&
                ((u = n.filteredSubscriptions) == null || u.delete(a)),
              l
            );
          })
          .reduce((a, c) => (c ? a.concat(...c) : a), []);
      if (!t || !n.filteredSubscriptions.has(t)) return [];
      let r = n.filteredSubscriptions.get(t);
      if (!e) {
        let a = Array.from(r.values()).reduce((c, l) => c.concat(...l), []);
        return n.filteredSubscriptions.delete(t), a;
      }
      let o = r.get(e);
      return r.delete(e), o || [];
    }
  };
  var Q = class Q extends pr {
    constructor(n) {
      var t;
      let e = Q._MsgPack;
      if (!e)
        throw new Error("Expected DefaultRealtime._MsgPack to have been set");
      super(
        R.objectifyOptions(
          n,
          !0,
          "Realtime",
          i.defaultLogger,
          D(O({}, Et), {
            Crypto: (t = Q.Crypto) != null ? t : void 0,
            MsgPack: e,
            RealtimePresence: {
              RealtimePresence: fr,
              PresenceMessage: J,
              WirePresenceMessage: he,
            },
            Annotations: {
              Annotation: se,
              WireAnnotation: ne,
              RealtimeAnnotations: Ge,
              RestAnnotations: Re,
            },
            WebSocketTransport: Nt,
            MessageInteractions: qt,
          })
        )
      );
    }
    static get Crypto() {
      if (this._Crypto === null)
        throw new Error(
          "Encryption not enabled; use ably.encryption.js instead"
        );
      return this._Crypto;
    }
    static set Crypto(n) {
      this._Crypto = n;
    }
  };
  (Q.Utils = k),
    (Q.ConnectionManager = Lt),
    (Q.ProtocolMessage = ir),
    (Q._Crypto = null),
    (Q.Message = Ne),
    (Q.PresenceMessage = qe),
    (Q.Annotation = De),
    (Q._MsgPack = null),
    (Q._Http = ge),
    (Q._PresenceMap = ke);
  var We = Q;
  var ts = Uint8Array,
    it = Uint32Array,
    ns = Math.pow,
    mr = new it(8),
    yr = [],
    st = new it(64);
  function gr(s) {
    return ((s - (s | 0)) * ns(2, 32)) | 0;
  }
  var rt = 2,
    ot = 0;
  for (; ot < 64; ) {
    for (Yn = !0, Dt = 2; Dt <= rt / 2; Dt++) rt % Dt === 0 && (Yn = !1);
    Yn &&
      (ot < 8 && (mr[ot] = gr(ns(rt, 1 / 2))),
      (yr[ot] = gr(ns(rt, 1 / 3))),
      ot++),
      rt++;
  }
  var Yn,
    Dt,
    Fo = !!new ts(new it([1]).buffer)[0];
  function Zn(s) {
    return Fo
      ? (s >>> 24) | (((s >>> 16) & 255) << 8) | ((s & 65280) << 8) | (s << 24)
      : s;
  }
  function ce(s, n) {
    return (s >>> n) | (s << (32 - n));
  }
  function es(s) {
    var n = mr.slice(),
      e = s.length,
      t = e * 8,
      r = 512 - ((t + 64) % 512) - 1 + t + 65,
      o = new ts(r / 8),
      a = new it(o.buffer);
    o.set(s, 0), (o[e] = 128), (a[a.length - 1] = Zn(t));
    for (var c, l = 0; l < r / 32; l += 16) {
      var u = n.slice();
      for (c = 0; c < 64; c++) {
        var f;
        if (c < 16) f = Zn(a[l + c]);
        else {
          var d = st[c - 15],
            g = st[c - 2];
          f =
            st[c - 7] +
            st[c - 16] +
            (ce(d, 7) ^ ce(d, 18) ^ (d >>> 3)) +
            (ce(g, 17) ^ ce(g, 19) ^ (g >>> 10));
        }
        st[c] = f |= 0;
        for (
          var m =
              (ce(u[4], 6) ^ ce(u[4], 11) ^ ce(u[4], 25)) +
              ((u[4] & u[5]) ^ (~u[4] & u[6])) +
              u[7] +
              f +
              yr[c],
            y =
              (ce(u[0], 2) ^ ce(u[0], 13) ^ ce(u[0], 22)) +
              ((u[0] & u[1]) ^ (u[2] & (u[0] ^ u[1]))),
            P = 7;
          P > 0;
          P--
        )
          u[P] = u[P - 1];
        (u[0] = (m + y) | 0), (u[4] = (u[4] + m) | 0);
      }
      for (c = 0; c < 8; c++) n[c] = (n[c] + u[c]) | 0;
    }
    return new ts(
      new it(
        n.map(function (A) {
          return Zn(A);
        })
      ).buffer
    );
  }
  function Rr(s, n) {
    if ((s.length > 64 && (s = es(s)), s.length < 64)) {
      let c = new Uint8Array(64);
      c.set(s, 0), (s = c);
    }
    for (var e = new Uint8Array(64), t = new Uint8Array(64), r = 0; r < 64; r++)
      (e[r] = 54 ^ s[r]), (t[r] = 92 ^ s[r]);
    var o = new Uint8Array(n.length + 64);
    o.set(e, 0), o.set(n, 64);
    var a = new Uint8Array(64 + 32);
    return a.set(t, 0), a.set(es(o), 64), es(a);
  }
  var ss = class {
      constructor() {
        this.base64CharSet =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        this.hexCharSet = "0123456789abcdef";
      }
      uint8ViewToBase64(n) {
        let e = "",
          t = this.base64CharSet,
          r = n.byteLength,
          o = r % 3,
          a = r - o,
          c,
          l,
          u,
          f,
          d;
        for (let g = 0; g < a; g = g + 3)
          (d = (n[g] << 16) | (n[g + 1] << 8) | n[g + 2]),
            (c = (d & 16515072) >> 18),
            (l = (d & 258048) >> 12),
            (u = (d & 4032) >> 6),
            (f = d & 63),
            (e += t[c] + t[l] + t[u] + t[f]);
        return (
          o == 1
            ? ((d = n[a]),
              (c = (d & 252) >> 2),
              (l = (d & 3) << 4),
              (e += t[c] + t[l] + "=="))
            : o == 2 &&
              ((d = (n[a] << 8) | n[a + 1]),
              (c = (d & 64512) >> 10),
              (l = (d & 1008) >> 4),
              (u = (d & 15) << 2),
              (e += t[c] + t[l] + t[u] + "=")),
          e
        );
      }
      base64ToArrayBuffer(n) {
        let e = atob == null ? void 0 : atob(n),
          t = e.length,
          r = new Uint8Array(t);
        for (let o = 0; o < t; o++) {
          let a = e.charCodeAt(o);
          r[o] = a;
        }
        return this.toArrayBuffer(r);
      }
      isBuffer(n) {
        return n instanceof ArrayBuffer || ArrayBuffer.isView(n);
      }
      toBuffer(n) {
        if (!ArrayBuffer)
          throw new Error(
            "Can't convert to Buffer: browser does not support the necessary types"
          );
        if (n instanceof ArrayBuffer) return new Uint8Array(n);
        if (ArrayBuffer.isView(n)) return new Uint8Array(this.toArrayBuffer(n));
        throw new Error(
          "BufferUtils.toBuffer expected an ArrayBuffer or a view onto one"
        );
      }
      toArrayBuffer(n) {
        if (!ArrayBuffer)
          throw new Error(
            "Can't convert to ArrayBuffer: browser does not support the necessary types"
          );
        if (n instanceof ArrayBuffer) return n;
        if (ArrayBuffer.isView(n))
          return n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength);
        throw new Error(
          "BufferUtils.toArrayBuffer expected an ArrayBuffer or a view onto one"
        );
      }
      base64Encode(n) {
        return this.uint8ViewToBase64(this.toBuffer(n));
      }
      base64Decode(n) {
        if (ArrayBuffer && p.Config.atob) return this.base64ToArrayBuffer(n);
        throw new Error(
          "Expected ArrayBuffer to exist and Platform.Config.atob to be configured"
        );
      }
      hexEncode(n) {
        return this.toBuffer(n).reduce(
          (t, r) => t + r.toString(16).padStart(2, "0"),
          ""
        );
      }
      hexDecode(n) {
        if (n.length % 2 !== 0)
          throw new Error(
            "Can't create a byte array from a hex string of odd length"
          );
        let e = new Uint8Array(n.length / 2);
        for (let t = 0; t < e.length; t++)
          e[t] = parseInt(n.slice(2 * t, 2 * (t + 1)), 16);
        return this.toArrayBuffer(e);
      }
      utf8Encode(n) {
        if (p.Config.TextEncoder) {
          let e = new p.Config.TextEncoder().encode(n);
          return this.toArrayBuffer(e);
        } else throw new Error("Expected TextEncoder to be configured");
      }
      utf8Decode(n) {
        if (!this.isBuffer(n))
          throw new Error(
            "Expected input of utf8decode to be an arraybuffer or typed array"
          );
        if (TextDecoder) return new TextDecoder().decode(n);
        throw new Error("Expected TextDecoder to be configured");
      }
      areBuffersEqual(n, e) {
        if (!n || !e) return !1;
        let t = this.toArrayBuffer(n),
          r = this.toArrayBuffer(e);
        if (t.byteLength != r.byteLength) return !1;
        let o = new Uint8Array(t),
          a = new Uint8Array(r);
        for (var c = 0; c < o.length; c++) if (o[c] != a[c]) return !1;
        return !0;
      }
      byteLength(n) {
        return n instanceof ArrayBuffer || ArrayBuffer.isView(n)
          ? n.byteLength
          : -1;
      }
      arrayBufferViewToBuffer(n) {
        return this.toArrayBuffer(n);
      }
      hmacSha256(n, e) {
        let t = Rr(this.toBuffer(e), this.toBuffer(n));
        return this.toArrayBuffer(t);
      }
    },
    rs = new ss();
  var Pr = function (s, n) {
    var e = "aes",
      t = 256,
      r = "cbc",
      o = 16;
    function a(g) {
      if (g.algorithm === "aes" && g.mode === "cbc") {
        if (g.keyLength === 128 || g.keyLength === 256) return;
        throw new Error(
          "Unsupported key length " +
            g.keyLength +
            " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)"
        );
      }
    }
    function c(g) {
      return g.replace("_", "/").replace("-", "+");
    }
    function l(g) {
      return g instanceof u;
    }
    class u {
      constructor(m, y, P, A) {
        (this.algorithm = m),
          (this.keyLength = y),
          (this.mode = P),
          (this.key = A);
      }
    }
    class f {
      static getDefaultParams(m) {
        var y;
        if (!m.key)
          throw new Error("Crypto.getDefaultParams: a key is required");
        typeof m.key == "string"
          ? (y = n.toArrayBuffer(n.base64Decode(c(m.key))))
          : m.key instanceof ArrayBuffer
          ? (y = m.key)
          : (y = n.toArrayBuffer(m.key));
        var P = m.algorithm || e,
          A = y.byteLength * 8,
          T = m.mode || r,
          M = new u(P, A, T, y);
        if (m.keyLength && m.keyLength !== M.keyLength)
          throw new Error(
            "Crypto.getDefaultParams: a keyLength of " +
              m.keyLength +
              " was specified, but the key actually has length " +
              M.keyLength
          );
        return a(M), M;
      }
      static async generateRandomKey(m) {
        try {
          return s.getRandomArrayBuffer((m || t) / 8);
        } catch (y) {
          throw new h(
            "Failed to generate random key: " + y.message,
            400,
            5e4,
            y
          );
        }
      }
      static getCipher(m, y) {
        var A;
        var P = l(m) ? m : this.getDefaultParams(m);
        return {
          cipherParams: P,
          cipher: new d(P, (A = m.iv) != null ? A : null, y),
        };
      }
    }
    f.CipherParams = u;
    class d {
      constructor(m, y, P) {
        this.logger = P;
        if (!crypto.subtle)
          throw isSecureContext
            ? new Error(
                "Crypto operations are not possible since the browser\u2019s SubtleCrypto class is unavailable (reason unknown)."
              )
            : new Error(
                "Crypto operations are is not possible since the current environment is a non-secure context and hence the browser\u2019s SubtleCrypto class is not available."
              );
        (this.algorithm =
          m.algorithm + "-" + String(m.keyLength) + "-" + m.mode),
          (this.webCryptoAlgorithm = m.algorithm + "-" + m.mode),
          (this.key = n.toArrayBuffer(m.key)),
          (this.iv = y ? n.toArrayBuffer(y) : null);
      }
      concat(m, y) {
        let P = new ArrayBuffer(m.byteLength + y.byteLength),
          A = new DataView(P),
          T = new DataView(n.toArrayBuffer(m));
        for (let U = 0; U < T.byteLength; U++) A.setInt8(U, T.getInt8(U));
        let M = new DataView(n.toArrayBuffer(y));
        for (let U = 0; U < M.byteLength; U++)
          A.setInt8(T.byteLength + U, M.getInt8(U));
        return P;
      }
      async encrypt(m) {
        i.logAction(this.logger, i.LOG_MICRO, "CBCCipher.encrypt()", "");
        let y = await this.getIv(),
          P = await crypto.subtle.importKey(
            "raw",
            this.key,
            this.webCryptoAlgorithm,
            !1,
            ["encrypt"]
          ),
          A = await crypto.subtle.encrypt(
            { name: this.webCryptoAlgorithm, iv: y },
            P,
            m
          );
        return this.concat(y, A);
      }
      async decrypt(m) {
        i.logAction(this.logger, i.LOG_MICRO, "CBCCipher.decrypt()", "");
        let y = n.toArrayBuffer(m),
          P = y.slice(0, o),
          A = y.slice(o),
          T = await crypto.subtle.importKey(
            "raw",
            this.key,
            this.webCryptoAlgorithm,
            !1,
            ["decrypt"]
          );
        return crypto.subtle.decrypt(
          { name: this.webCryptoAlgorithm, iv: P },
          T,
          A
        );
      }
      async getIv() {
        if (this.iv) {
          var m = this.iv;
          return (this.iv = null), m;
        }
        let y = await s.getRandomArrayBuffer(o);
        return n.toArrayBuffer(y);
      }
    }
    return f;
  };
  var br = ((r) => (
      (r[(r.REQ_SEND = 0)] = "REQ_SEND"),
      (r[(r.REQ_RECV = 1)] = "REQ_RECV"),
      (r[(r.REQ_RECV_POLL = 2)] = "REQ_RECV_POLL"),
      (r[(r.REQ_RECV_STREAM = 3)] = "REQ_RECV_STREAM"),
      r
    ))(br || {}),
    Y = br;
  function Cr() {
    return new h(
      "No HTTP request plugin provided. Provide at least one of the FetchRequest or XHRRequest plugins.",
      400,
      4e4
    );
  }
  var at,
    Ar =
      ((at = class {
        constructor(s) {
          this.checksInProgress = null;
          this.checkConnectivity = void 0;
          this.supportsAuthHeaders = !1;
          this.supportsLinkHeaders = !1;
          var l;
          this.client = s != null ? s : null;
          let n =
              (s == null ? void 0 : s.options.connectivityCheckUrl) ||
              R.connectivityCheckUrl,
            e =
              (l = s == null ? void 0 : s.options.connectivityCheckParams) !=
              null
                ? l
                : null,
            t = !(s != null && s.options.connectivityCheckUrl),
            r = O(
              O({}, Ar.bundledRequestImplementations),
              s == null ? void 0 : s._additionalHTTPRequestImplementations
            ),
            o = r.XHRRequest,
            a = r.FetchRequest,
            c = !!(o || a);
          if (!c) throw Cr();
          p.Config.xhrSupported && o
            ? ((this.supportsAuthHeaders = !0),
              (this.Request = async function (u, f, d, g, m) {
                return new Promise((y) => {
                  var A;
                  let P = o.createRequest(
                    f,
                    d,
                    g,
                    m,
                    Y.REQ_SEND,
                    (A = s && s.options.timeouts) != null ? A : null,
                    this.logger,
                    u
                  );
                  P.once("complete", (T, M, U, Me, I) =>
                    y({
                      error: T,
                      body: M,
                      headers: U,
                      unpacked: Me,
                      statusCode: I,
                    })
                  ),
                    P.exec();
                });
              }),
              s != null && s.options.disableConnectivityCheck
                ? (this.checkConnectivity = async function () {
                    return !0;
                  })
                : (this.checkConnectivity = async function () {
                    var d;
                    i.logAction(
                      this.logger,
                      i.LOG_MICRO,
                      "(XHRRequest)Http.checkConnectivity()",
                      "Sending; " + n
                    );
                    let u = await this.doUri(x.Get, n, null, null, e),
                      f = !1;
                    return (
                      t
                        ? (f =
                            !u.error &&
                            ((d = u.body) == null
                              ? void 0
                              : d.replace(/\n/, "")) == "yes")
                        : (f = !u.error && _s(u.statusCode)),
                      i.logAction(
                        this.logger,
                        i.LOG_MICRO,
                        "(XHRRequest)Http.checkConnectivity()",
                        "Result: " + f
                      ),
                      f
                    );
                  }))
            : p.Config.fetchSupported && a
            ? ((this.supportsAuthHeaders = !0),
              (this.Request = async (u, f, d, g, m) =>
                a(u, s != null ? s : null, f, d, g, m)),
              s != null && s.options.disableConnectivityCheck
                ? (this.checkConnectivity = async function () {
                    return !0;
                  })
                : (this.checkConnectivity = async function () {
                    var d;
                    i.logAction(
                      this.logger,
                      i.LOG_MICRO,
                      "(Fetch)Http.checkConnectivity()",
                      "Sending; " + n
                    );
                    let u = await this.doUri(x.Get, n, null, null, null),
                      f =
                        !u.error &&
                        ((d = u.body) == null ? void 0 : d.replace(/\n/, "")) ==
                          "yes";
                    return (
                      i.logAction(
                        this.logger,
                        i.LOG_MICRO,
                        "(Fetch)Http.checkConnectivity()",
                        "Result: " + f
                      ),
                      f
                    );
                  }))
            : (this.Request = async () => ({
                error: c
                  ? new S("no supported HTTP transports available", null, 400)
                  : Cr(),
              }));
        }
        get logger() {
          var s, n;
          return (n = (s = this.client) == null ? void 0 : s.logger) != null
            ? n
            : i.defaultLogger;
        }
        async doUri(s, n, e, t, r) {
          return this.Request
            ? this.Request(s, n, e, r, t)
            : { error: new S("Request invoked before assigned to", null, 500) };
        }
        shouldFallback(s) {
          let n = s.statusCode;
          return (
            (n === 408 && !s.code) ||
            (n === 400 && !s.code) ||
            (n >= 500 && n <= 504)
          );
        }
      }),
      (at.methods = [x.Get, x.Delete, x.Post, x.Put, x.Patch]),
      (at.methodsWithoutBody = [x.Get, x.Delete]),
      (at.methodsWithBody = [x.Post, x.Put, x.Patch]),
      at),
    os = Ar;
  var je = "ablyjs-storage-test",
    Ve =
      typeof global != "undefined"
        ? global
        : typeof window != "undefined"
        ? window
        : self,
    is = class {
      constructor() {
        try {
          Ve.sessionStorage.setItem(je, je),
            Ve.sessionStorage.removeItem(je),
            (this.sessionSupported = !0);
        } catch (n) {
          this.sessionSupported = !1;
        }
        try {
          Ve.localStorage.setItem(je, je),
            Ve.localStorage.removeItem(je),
            (this.localSupported = !0);
        } catch (n) {
          this.localSupported = !1;
        }
      }
      get(n) {
        return this._get(n, !1);
      }
      getSession(n) {
        return this._get(n, !0);
      }
      remove(n) {
        return this._remove(n, !1);
      }
      removeSession(n) {
        return this._remove(n, !0);
      }
      set(n, e, t) {
        return this._set(n, e, t, !1);
      }
      setSession(n, e, t) {
        return this._set(n, e, t, !0);
      }
      _set(n, e, t, r) {
        let o = { value: e };
        return (
          t && (o.expires = Date.now() + t),
          this.storageInterface(r).setItem(n, JSON.stringify(o))
        );
      }
      _get(n, e) {
        if (e && !this.sessionSupported)
          throw new Error("Session Storage not supported");
        if (!e && !this.localSupported)
          throw new Error("Local Storage not supported");
        let t = this.storageInterface(e).getItem(n);
        if (!t) return null;
        let r = JSON.parse(t);
        return r.expires && r.expires < Date.now()
          ? (this.storageInterface(e).removeItem(n), null)
          : r.value;
      }
      _remove(n, e) {
        return this.storageInterface(e).removeItem(n);
      }
      storageInterface(n) {
        return n ? Ve.sessionStorage : Ve.localStorage;
      }
    },
    Ht = new is();
  var _ = Xe(),
    Wo = typeof EdgeRuntime == "string";
  typeof Window == "undefined" &&
    typeof WorkerGlobalScope == "undefined" &&
    !Wo &&
    console.log(
      "Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm"
    );
  function jo() {
    let s = _.location;
    return !_.WebSocket || !s || !s.origin || s.origin.indexOf("http") > -1;
  }
  function Vo() {
    return (
      typeof WorkerGlobalScope != "undefined" &&
      self instanceof WorkerGlobalScope
    );
  }
  var zo = _.navigator && _.navigator.userAgent.toString(),
    Ko = _.location && _.location.href,
    Jo = {
      agent: "browser",
      logTimestamps: !0,
      userAgent: zo,
      currentUrl: Ko,
      binaryType: "arraybuffer",
      WebSocket: _.WebSocket,
      fetchSupported: !!_.fetch,
      xhrSupported:
        _.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
      allowComet: jo(),
      useProtocolHeartbeats: !0,
      supportsBinary: !!_.TextDecoder,
      preferBinary: !1,
      ArrayBuffer: _.ArrayBuffer,
      atob: _.atob,
      nextTick:
        typeof _.setImmediate != "undefined"
          ? _.setImmediate.bind(_)
          : function (s) {
              setTimeout(s, 0);
            },
      addEventListener: _.addEventListener,
      inspect: JSON.stringify,
      stringByteSize: function (s) {
        return (
          (_.TextDecoder && new _.TextEncoder().encode(s).length) || s.length
        );
      },
      TextEncoder: _.TextEncoder,
      TextDecoder: _.TextDecoder,
      getRandomArrayBuffer: async function (s) {
        let n = new Uint8Array(s);
        return _.crypto.getRandomValues(n), n.buffer;
      },
      isWebworker: Vo(),
      push: { platform: "browser", formFactor: "desktop", storage: Ht },
    },
    as = Jo;
  function Qo(s) {
    let n = [80015, 80017, 80030];
    return s.code
      ? X.isTokenErr(s)
        ? !1
        : n.includes(s.code)
        ? !0
        : s.code >= 4e4 && s.code < 5e4
      : !1;
  }
  function cs(s) {
    return Qo(s)
      ? [G({ action: C.ERROR, error: s })]
      : [G({ action: C.DISCONNECTED, error: s })];
  }
  var ls = class extends de {
      constructor(e, t, r) {
        super(e, t, r, !0);
        this.onAuthUpdated = (e) => {
          this.authParams = { access_token: e.token };
        };
        (this.stream = "stream" in r ? r.stream : !0),
          (this.sendRequest = null),
          (this.recvRequest = null),
          (this.pendingCallback = null),
          (this.pendingItems = null);
      }
      connect() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "CometTransport.connect()",
          "starting"
        ),
          de.prototype.connect.call(this);
        let e = this.params,
          t = e.options,
          r = R.getHost(t, e.host),
          o = R.getPort(t),
          a = t.tls ? "https://" : "http://";
        this.baseUri = a + r + ":" + o + "/comet/";
        let c = this.baseUri + "connect";
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "CometTransport.connect()",
          "uri: " + c
        ),
          N(this.auth.getAuthParams(), (l, u) => {
            if (l) {
              this.disconnect(l);
              return;
            }
            if (this.isDisposed) return;
            this.authParams = u;
            let f = this.params.getConnectParams(u);
            "stream" in f && (this.stream = f.stream),
              i.logAction(
                this.logger,
                i.LOG_MINOR,
                "CometTransport.connect()",
                "connectParams:" + le(f)
              );
            let d = !1,
              g = (this.recvRequest = this.createRequest(
                c,
                null,
                f,
                null,
                this.stream ? Y.REQ_RECV_STREAM : Y.REQ_RECV
              ));
            g.on("data", (m) => {
              this.recvRequest &&
                (d || ((d = !0), this.emit("preconnect")), this.onData(m));
            }),
              g.on("complete", (m) => {
                if (
                  (this.recvRequest ||
                    (m = m || new h("Request cancelled", 80003, 400)),
                  (this.recvRequest = null),
                  !d && !m && ((d = !0), this.emit("preconnect")),
                  this.onActivity(),
                  m)
                ) {
                  m.code ? this.onData(cs(m)) : this.disconnect(m);
                  return;
                }
                p.Config.nextTick(() => {
                  this.recv();
                });
              }),
              g.exec();
          });
      }
      requestClose() {
        i.logAction(this.logger, i.LOG_MINOR, "CometTransport.requestClose()"),
          this._requestCloseOrDisconnect(!0);
      }
      requestDisconnect() {
        i.logAction(
          this.logger,
          i.LOG_MINOR,
          "CometTransport.requestDisconnect()"
        ),
          this._requestCloseOrDisconnect(!1);
      }
      _requestCloseOrDisconnect(e) {
        let t = e ? this.closeUri : this.disconnectUri;
        if (t) {
          let r = this.createRequest(
            t,
            null,
            this.authParams,
            null,
            Y.REQ_SEND
          );
          r.on("complete", (o) => {
            o &&
              (i.logAction(
                this.logger,
                i.LOG_ERROR,
                "CometTransport.request" + (e ? "Close()" : "Disconnect()"),
                "request returned err = " + w(o)
              ),
              this.finish("disconnected", o));
          }),
            r.exec();
        }
      }
      dispose() {
        i.logAction(this.logger, i.LOG_MINOR, "CometTransport.dispose()", ""),
          this.isDisposed ||
            ((this.isDisposed = !0),
            this.recvRequest &&
              (i.logAction(
                this.logger,
                i.LOG_MINOR,
                "CometTransport.dispose()",
                "aborting recv request"
              ),
              this.recvRequest.abort(),
              (this.recvRequest = null)),
            this.finish("disconnected", ae.disconnected()),
            p.Config.nextTick(() => {
              this.emit("disposed");
            }));
      }
      onConnect(e) {
        var o;
        if (this.isDisposed) return;
        let t = (o = e.connectionDetails) == null ? void 0 : o.connectionKey;
        de.prototype.onConnect.call(this, e);
        let r = this.baseUri + t;
        i.logAction(
          this.logger,
          i.LOG_MICRO,
          "CometTransport.onConnect()",
          "baseUri = " + r
        ),
          (this.sendUri = r + "/send"),
          (this.recvUri = r + "/recv"),
          (this.closeUri = r + "/close"),
          (this.disconnectUri = r + "/disconnect");
      }
      send(e) {
        if (this.sendRequest) {
          (this.pendingItems = this.pendingItems || []),
            this.pendingItems.push(e);
          return;
        }
        let t = this.pendingItems || [];
        t.push(e), (this.pendingItems = null), this.sendItems(t);
      }
      sendAnyPending() {
        let e = this.pendingItems;
        e && ((this.pendingItems = null), this.sendItems(e));
      }
      sendItems(e) {
        let t = (this.sendRequest = this.createRequest(
          this.sendUri,
          null,
          this.authParams,
          this.encodeRequest(e),
          Y.REQ_SEND
        ));
        t.on("complete", (r, o) => {
          if (
            (r &&
              i.logAction(
                this.logger,
                i.LOG_ERROR,
                "CometTransport.sendItems()",
                "on complete: err = " + w(r)
              ),
            (this.sendRequest = null),
            r)
          ) {
            r.code ? this.onData(cs(r)) : this.disconnect(r);
            return;
          }
          o && this.onData(o),
            this.pendingItems &&
              p.Config.nextTick(() => {
                this.sendRequest || this.sendAnyPending();
              });
        }),
          t.exec();
      }
      recv() {
        if (this.recvRequest || !this.isConnected) return;
        let e = (this.recvRequest = this.createRequest(
          this.recvUri,
          null,
          this.authParams,
          null,
          this.stream ? Y.REQ_RECV_STREAM : Y.REQ_RECV_POLL
        ));
        e.on("data", (t) => {
          this.onData(t);
        }),
          e.on("complete", (t) => {
            if (((this.recvRequest = null), this.onActivity(), t)) {
              t.code ? this.onData(cs(t)) : this.disconnect(t);
              return;
            }
            p.Config.nextTick(() => {
              this.recv();
            });
          }),
          e.exec();
      }
      onData(e) {
        try {
          let t = this.decodeResponse(e);
          if (t && t.length)
            for (let r = 0; r < t.length; r++)
              this.onProtocolMessage(
                Ut(
                  t[r],
                  this.connectionManager.realtime._RealtimePresence,
                  this.connectionManager.realtime._Annotations
                )
              );
        } catch (t) {
          i.logAction(
            this.logger,
            i.LOG_ERROR,
            "CometTransport.onData()",
            "Unexpected exception handing channel event: " + t.stack
          );
        }
      }
      encodeRequest(e) {
        return JSON.stringify(e);
      }
      decodeResponse(e) {
        return typeof e == "string" ? JSON.parse(e) : e;
      }
    },
    Tr = ls;
  function Xo(s, n) {
    return Je(pe(n)).includes("x-ably-errorcode");
  }
  function $o(s, n) {
    if (Xo(s, n)) return s.error && h.fromValues(s.error);
  }
  var Yo = function () {},
    Zo = 0,
    Ir = {};
  function ei(s, n) {
    return s.getResponseHeader && s.getResponseHeader(n);
  }
  function ti(s) {
    return (
      s.getResponseHeader &&
      (s.getResponseHeader("transfer-encoding") ||
        !s.getResponseHeader("content-length"))
    );
  }
  function ni(s) {
    let n = s.getAllResponseHeaders().trim().split(`\r
`),
      e = {};
    for (let t = 0; t < n.length; t++) {
      let r = n[t].split(":").map((o) => o.trim());
      e[r[0].toLowerCase()] = r[1];
    }
    return e;
  }
  var us = class s extends v {
      constructor(e, t, r, o, a, c, l, u) {
        super(l);
        (r = r || {}),
          (r.rnd = Te()),
          (this.uri = e + le(r)),
          (this.headers = t || {}),
          (this.body = o),
          (this.method = u ? u.toUpperCase() : j(o) ? "GET" : "POST"),
          (this.requestMode = a),
          (this.timeouts = c),
          (this.timedOut = !1),
          (this.requestComplete = !1),
          (this.id = String(++Zo)),
          (Ir[this.id] = this);
      }
      static createRequest(e, t, r, o, a, c, l, u) {
        let f = c || R.TIMEOUTS;
        return new s(e, t, oe(r), o, a, f, l, u);
      }
      complete(e, t, r, o, a) {
        this.requestComplete ||
          ((this.requestComplete = !0),
          !e && t && this.emit("data", t),
          this.emit("complete", e, t, r, o, a),
          this.dispose());
      }
      abort() {
        this.dispose();
      }
      exec() {
        let e = this.headers,
          t =
            this.requestMode == Y.REQ_SEND
              ? this.timeouts.httpRequestTimeout
              : this.timeouts.recvTimeout,
          r = (this.timer = setTimeout(() => {
            (this.timedOut = !0), a.abort();
          }, t)),
          o = this.method,
          a = (this.xhr = new XMLHttpRequest()),
          c = e.accept,
          l = this.body,
          u = "text";
        c
          ? c.indexOf("application/x-msgpack") === 0 && (u = "arraybuffer")
          : (e.accept = "application/json"),
          l &&
            (
              e["content-type"] || (e["content-type"] = "application/json")
            ).indexOf("application/json") > -1 &&
            typeof l != "string" &&
            (l = JSON.stringify(l)),
          a.open(o, this.uri, !0),
          (a.responseType = u),
          "authorization" in e && (a.withCredentials = !0);
        for (let I in e) a.setRequestHeader(I, e[I]);
        let f = (I, $, F, ze) => {
          var ms;
          let Ce = $ + " (event type: " + I.type + ")";
          (ms = this == null ? void 0 : this.xhr) != null &&
            ms.statusText &&
            (Ce += ", current statusText is " + this.xhr.statusText),
            i.logAction(
              this.logger,
              i.LOG_ERROR,
              "Request.on" + I.type + "()",
              Ce
            ),
            this.complete(new S(Ce, F, ze));
        };
        (a.onerror = function (I) {
          f(I, "XHR error occurred", null, 400);
        }),
          (a.onabort = (I) => {
            this.timedOut
              ? f(
                  I,
                  "Request aborted due to request timeout expiring",
                  null,
                  408
                )
              : f(I, "Request cancelled", null, 400);
          }),
          (a.ontimeout = function (I) {
            f(I, "Request timed out", null, 408);
          });
        let d,
          g,
          m,
          y = 0,
          P = !1,
          A = () => {
            if ((clearTimeout(r), (m = g < 400), g == 204)) {
              this.complete(null, null, null, null, g);
              return;
            }
            d = this.requestMode == Y.REQ_RECV_STREAM && m && ti(a);
          },
          T = () => {
            let I;
            try {
              let F = ei(a, "content-type");
              if (
                F
                  ? F.indexOf("application/json") >= 0
                  : a.responseType == "text"
              ) {
                let Ce =
                  a.responseType === "arraybuffer"
                    ? p.BufferUtils.utf8Decode(a.response)
                    : String(a.responseText);
                Ce.length ? (I = JSON.parse(Ce)) : (I = Ce), (P = !0);
              } else I = a.response;
              I.response !== void 0
                ? ((g = I.statusCode),
                  (m = g < 400),
                  (e = I.headers),
                  (I = I.response))
                : (e = ni(a));
            } catch (F) {
              this.complete(
                new S(
                  "Malformed response body from server: " + F.message,
                  null,
                  400
                )
              );
              return;
            }
            if (m || Array.isArray(I)) {
              this.complete(null, I, e, P, g);
              return;
            }
            let $ = $o(I, e);
            $ ||
              ($ = new S(
                "Error response received from server: " +
                  g +
                  " body was: " +
                  p.Config.inspect(I),
                null,
                g
              )),
              this.complete($, I, e, P, g);
          };
        function M() {
          let I = a.responseText,
            $ = I.length - 1,
            F,
            ze;
          for (
            ;
            y < $ &&
            (F = I.indexOf(
              `
`,
              y
            )) > -1;

          )
            (ze = I.slice(y, F)), (y = F + 1), U(ze);
        }
        let U = (I) => {
            try {
              I = JSON.parse(I);
            } catch ($) {
              this.complete(
                new S(
                  "Malformed response body from server: " + $.message,
                  null,
                  400
                )
              );
              return;
            }
            this.emit("data", I);
          },
          Me = () => {
            M(),
              (this.streamComplete = !0),
              p.Config.nextTick(() => {
                this.complete();
              });
          };
        (a.onreadystatechange = function () {
          let I = a.readyState;
          I < 3 ||
            (a.status !== 0 &&
              (g === void 0 && ((g = a.status), A()),
              I == 3 && d ? M() : I == 4 && (d ? Me() : T())));
        }),
          a.send(l);
      }
      dispose() {
        let e = this.xhr;
        if (e) {
          (e.onreadystatechange = e.onerror = e.onabort = e.ontimeout = Yo),
            (this.xhr = null);
          let t = this.timer;
          t && (clearTimeout(t), (this.timer = null)),
            this.requestComplete || e.abort();
        }
        delete Ir[this.id];
      }
    },
    Gt = us;
  var wr = q.XhrPolling,
    hs = class extends Tr {
      constructor(e, t, r) {
        super(e, t, r);
        this.shortName = wr;
        (r.stream = !1), (this.shortName = wr);
      }
      static isAvailable() {
        return !!(p.Config.xhrSupported && p.Config.allowComet);
      }
      toString() {
        return (
          "XHRPollingTransport; uri=" +
          this.baseUri +
          "; isConnected=" +
          this.isConnected
        );
      }
      createRequest(e, t, r, o, a) {
        return Gt.createRequest(e, t, r, o, a, this.timeouts, this.logger);
      }
    },
    kr = hs;
  var si = ["xhr_polling"],
    ri = {
      order: si,
      bundledImplementations: { web_socket: Nt, xhr_polling: kr },
    },
    Mr = ri;
  var oi = {
      connectivityCheckUrl:
        "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
      wsConnectivityCheckUrl: "wss://ws-up.ably-realtime.com",
      defaultTransports: [q.XhrPolling, q.WebSocket],
    },
    Or = oi;
  function ii(s) {
    if (s === void 0) return "undefined";
    let n, e;
    if (
      (s instanceof ArrayBuffer
        ? ((e = "ArrayBuffer"), (n = new DataView(s)))
        : s instanceof DataView && ((e = "DataView"), (n = s)),
      !n)
    )
      return JSON.stringify(s);
    let t = [];
    for (let r = 0; r < s.byteLength; r++) {
      if (r > 20) {
        t.push("...");
        break;
      }
      let o = n.getUint8(r).toString(16);
      o.length === 1 && (o = "0" + o), t.push(o);
    }
    return "<" + e + " " + t.join(" ") + ">";
  }
  function ct(s, n, e) {
    for (let t = 0, r = e.length; t < r; t++) {
      let o = e.charCodeAt(t);
      if (o < 128) {
        s.setUint8(n++, ((o >>> 0) & 127) | 0);
        continue;
      }
      if (o < 2048) {
        s.setUint8(n++, ((o >>> 6) & 31) | 192),
          s.setUint8(n++, ((o >>> 0) & 63) | 128);
        continue;
      }
      if (o < 65536) {
        s.setUint8(n++, ((o >>> 12) & 15) | 224),
          s.setUint8(n++, ((o >>> 6) & 63) | 128),
          s.setUint8(n++, ((o >>> 0) & 63) | 128);
        continue;
      }
      if (o < 1114112) {
        s.setUint8(n++, ((o >>> 18) & 7) | 240),
          s.setUint8(n++, ((o >>> 12) & 63) | 128),
          s.setUint8(n++, ((o >>> 6) & 63) | 128),
          s.setUint8(n++, ((o >>> 0) & 63) | 128);
        continue;
      }
      throw new Error("bad codepoint " + o);
    }
  }
  function vr(s, n, e) {
    let t = "";
    for (let r = n, o = n + e; r < o; r++) {
      let a = s.getUint8(r);
      if (!(a & 128)) {
        t += String.fromCharCode(a);
        continue;
      }
      if ((a & 224) === 192) {
        t += String.fromCharCode(((a & 15) << 6) | (s.getUint8(++r) & 63));
        continue;
      }
      if ((a & 240) === 224) {
        t += String.fromCharCode(
          ((a & 15) << 12) |
            ((s.getUint8(++r) & 63) << 6) |
            ((s.getUint8(++r) & 63) << 0)
        );
        continue;
      }
      if ((a & 248) === 240) {
        t += String.fromCharCode(
          ((a & 7) << 18) |
            ((s.getUint8(++r) & 63) << 12) |
            ((s.getUint8(++r) & 63) << 6) |
            ((s.getUint8(++r) & 63) << 0)
        );
        continue;
      }
      throw new Error("Invalid byte " + a.toString(16));
    }
    return t;
  }
  function ps(s) {
    let n = 0;
    for (let e = 0, t = s.length; e < t; e++) {
      let r = s.charCodeAt(e);
      if (r < 128) {
        n += 1;
        continue;
      }
      if (r < 2048) {
        n += 2;
        continue;
      }
      if (r < 65536) {
        n += 3;
        continue;
      }
      if (r < 1114112) {
        n += 4;
        continue;
      }
      throw new Error("bad codepoint " + r);
    }
    return n;
  }
  function ai(s, n) {
    let e = ut(s, n);
    if (e === 0) return;
    let t = new ArrayBuffer(e),
      r = new DataView(t);
    return lt(s, r, 0, n), t;
  }
  var fs = 65536 * 65536,
    Sr = 1 / fs;
  function ci(s, n) {
    return (n = n || 0), s.getInt32(n) * fs + s.getUint32(n + 4);
  }
  function li(s, n) {
    return (n = n || 0), s.getUint32(n) * fs + s.getUint32(n + 4);
  }
  function ui(s, n, e) {
    e < 9223372036854776e3
      ? (s.setInt32(n, Math.floor(e * Sr)), s.setInt32(n + 4, e & -1))
      : (s.setUint32(n, 2147483647), s.setUint32(n + 4, 2147483647));
  }
  function hi(s, n, e) {
    e < 18446744073709552e3
      ? (s.setUint32(n, Math.floor(e * Sr)), s.setInt32(n + 4, e & -1))
      : (s.setUint32(n, 4294967295), s.setUint32(n + 4, 4294967295));
  }
  var ds = class {
    constructor(n, e) {
      this.map = (n) => {
        let e = {};
        for (let t = 0; t < n; t++) {
          let r = this.parse();
          e[r] = this.parse();
        }
        return e;
      };
      this.bin = (n) => {
        let e = new ArrayBuffer(n);
        return (
          new Uint8Array(e).set(
            new Uint8Array(this.view.buffer, this.offset, n),
            0
          ),
          (this.offset += n),
          e
        );
      };
      this.buf = this.bin;
      this.str = (n) => {
        let e = vr(this.view, this.offset, n);
        return (this.offset += n), e;
      };
      this.array = (n) => {
        let e = new Array(n);
        for (let t = 0; t < n; t++) e[t] = this.parse();
        return e;
      };
      this.ext = (n) => (
        (this.offset += n),
        { type: this.view.getInt8(this.offset), data: this.buf(n) }
      );
      this.parse = () => {
        let n = this.view.getUint8(this.offset),
          e,
          t;
        if (!(n & 128)) return this.offset++, n;
        if ((n & 240) === 128) return (t = n & 15), this.offset++, this.map(t);
        if ((n & 240) === 144)
          return (t = n & 15), this.offset++, this.array(t);
        if ((n & 224) === 160) return (t = n & 31), this.offset++, this.str(t);
        if ((n & 224) === 224)
          return (e = this.view.getInt8(this.offset)), this.offset++, e;
        switch (n) {
          case 192:
            return this.offset++, null;
          case 193:
            this.offset++;
            return;
          case 194:
            return this.offset++, !1;
          case 195:
            return this.offset++, !0;
          case 196:
            return (
              (t = this.view.getUint8(this.offset + 1)),
              (this.offset += 2),
              this.bin(t)
            );
          case 197:
            return (
              (t = this.view.getUint16(this.offset + 1)),
              (this.offset += 3),
              this.bin(t)
            );
          case 198:
            return (
              (t = this.view.getUint32(this.offset + 1)),
              (this.offset += 5),
              this.bin(t)
            );
          case 199:
            return (
              (t = this.view.getUint8(this.offset + 1)),
              (this.offset += 2),
              this.ext(t)
            );
          case 200:
            return (
              (t = this.view.getUint16(this.offset + 1)),
              (this.offset += 3),
              this.ext(t)
            );
          case 201:
            return (
              (t = this.view.getUint32(this.offset + 1)),
              (this.offset += 5),
              this.ext(t)
            );
          case 202:
            return (
              (e = this.view.getFloat32(this.offset + 1)), (this.offset += 5), e
            );
          case 203:
            return (
              (e = this.view.getFloat64(this.offset + 1)), (this.offset += 9), e
            );
          case 204:
            return (
              (e = this.view.getUint8(this.offset + 1)), (this.offset += 2), e
            );
          case 205:
            return (
              (e = this.view.getUint16(this.offset + 1)), (this.offset += 3), e
            );
          case 206:
            return (
              (e = this.view.getUint32(this.offset + 1)), (this.offset += 5), e
            );
          case 207:
            return (e = li(this.view, this.offset + 1)), (this.offset += 9), e;
          case 208:
            return (
              (e = this.view.getInt8(this.offset + 1)), (this.offset += 2), e
            );
          case 209:
            return (
              (e = this.view.getInt16(this.offset + 1)), (this.offset += 3), e
            );
          case 210:
            return (
              (e = this.view.getInt32(this.offset + 1)), (this.offset += 5), e
            );
          case 211:
            return (e = ci(this.view, this.offset + 1)), (this.offset += 9), e;
          case 212:
            return (t = 1), this.offset++, this.ext(t);
          case 213:
            return (t = 2), this.offset++, this.ext(t);
          case 214:
            return (t = 4), this.offset++, this.ext(t);
          case 215:
            return (t = 8), this.offset++, this.ext(t);
          case 216:
            return (t = 16), this.offset++, this.ext(t);
          case 217:
            return (
              (t = this.view.getUint8(this.offset + 1)),
              (this.offset += 2),
              this.str(t)
            );
          case 218:
            return (
              (t = this.view.getUint16(this.offset + 1)),
              (this.offset += 3),
              this.str(t)
            );
          case 219:
            return (
              (t = this.view.getUint32(this.offset + 1)),
              (this.offset += 5),
              this.str(t)
            );
          case 220:
            return (
              (t = this.view.getUint16(this.offset + 1)),
              (this.offset += 3),
              this.array(t)
            );
          case 221:
            return (
              (t = this.view.getUint32(this.offset + 1)),
              (this.offset += 5),
              this.array(t)
            );
          case 222:
            return (
              (t = this.view.getUint16(this.offset + 1)),
              (this.offset += 3),
              this.map(t)
            );
          case 223:
            return (
              (t = this.view.getUint32(this.offset + 1)),
              (this.offset += 5),
              this.map(t)
            );
        }
        throw new Error("Unknown type 0x" + n.toString(16));
      };
      (this.offset = e || 0), (this.view = n);
    }
  };
  function di(s) {
    let n = new DataView(s),
      e = new ds(n),
      t = e.parse();
    if (e.offset !== s.byteLength)
      throw new Error(s.byteLength - e.offset + " trailing bytes");
    return t;
  }
  function Er(s, n) {
    return Object.keys(s).filter(function (e) {
      let t = s[e],
        r = typeof t;
      return (!n || t != null) && (r !== "function" || !!t.toJSON);
    });
  }
  function lt(s, n, e, t) {
    let r = typeof s;
    if (typeof s == "string") {
      let o = ps(s);
      if (o < 32) return n.setUint8(e, o | 160), ct(n, e + 1, s), 1 + o;
      if (o < 256)
        return n.setUint8(e, 217), n.setUint8(e + 1, o), ct(n, e + 2, s), 2 + o;
      if (o < 65536)
        return (
          n.setUint8(e, 218), n.setUint16(e + 1, o), ct(n, e + 3, s), 3 + o
        );
      if (o < 4294967296)
        return (
          n.setUint8(e, 219), n.setUint32(e + 1, o), ct(n, e + 5, s), 5 + o
        );
    }
    if (
      (ArrayBuffer.isView && ArrayBuffer.isView(s) && (s = s.buffer),
      s instanceof ArrayBuffer)
    ) {
      let o = s.byteLength;
      if (o < 256)
        return (
          n.setUint8(e, 196),
          n.setUint8(e + 1, o),
          new Uint8Array(n.buffer).set(new Uint8Array(s), e + 2),
          2 + o
        );
      if (o < 65536)
        return (
          n.setUint8(e, 197),
          n.setUint16(e + 1, o),
          new Uint8Array(n.buffer).set(new Uint8Array(s), e + 3),
          3 + o
        );
      if (o < 4294967296)
        return (
          n.setUint8(e, 198),
          n.setUint32(e + 1, o),
          new Uint8Array(n.buffer).set(new Uint8Array(s), e + 5),
          5 + o
        );
    }
    if (typeof s == "number") {
      if (Math.floor(s) !== s)
        return n.setUint8(e, 203), n.setFloat64(e + 1, s), 9;
      if (s >= 0) {
        if (s < 128) return n.setUint8(e, s), 1;
        if (s < 256) return n.setUint8(e, 204), n.setUint8(e + 1, s), 2;
        if (s < 65536) return n.setUint8(e, 205), n.setUint16(e + 1, s), 3;
        if (s < 4294967296) return n.setUint8(e, 206), n.setUint32(e + 1, s), 5;
        if (s < 18446744073709552e3)
          return n.setUint8(e, 207), hi(n, e + 1, s), 9;
        throw new Error("Number too big 0x" + s.toString(16));
      }
      if (s >= -32) return n.setInt8(e, s), 1;
      if (s >= -128) return n.setUint8(e, 208), n.setInt8(e + 1, s), 2;
      if (s >= -32768) return n.setUint8(e, 209), n.setInt16(e + 1, s), 3;
      if (s >= -2147483648) return n.setUint8(e, 210), n.setInt32(e + 1, s), 5;
      if (s >= -9223372036854776e3)
        return n.setUint8(e, 211), ui(n, e + 1, s), 9;
      throw new Error("Number too small -0x" + (-s).toString(16).substr(1));
    }
    if (r === "undefined")
      return t
        ? 0
        : (n.setUint8(e, 212), n.setUint8(e + 1, 0), n.setUint8(e + 2, 0), 3);
    if (s === null) return t ? 0 : (n.setUint8(e, 192), 1);
    if (r === "boolean") return n.setUint8(e, s ? 195 : 194), 1;
    if (typeof s.toJSON == "function") return lt(s.toJSON(), n, e, t);
    if (r === "object") {
      let o,
        a = 0,
        c,
        l = Array.isArray(s);
      if (
        (l ? (o = s.length) : ((c = Er(s, t)), (o = c.length)),
        o < 16
          ? (n.setUint8(e, o | (l ? 144 : 128)), (a = 1))
          : o < 65536
          ? (n.setUint8(e, l ? 220 : 222), n.setUint16(e + 1, o), (a = 3))
          : o < 4294967296 &&
            (n.setUint8(e, l ? 221 : 223), n.setUint32(e + 1, o), (a = 5)),
        l)
      )
        for (let u = 0; u < o; u++) a += lt(s[u], n, e + a, t);
      else if (c)
        for (let u = 0; u < o; u++) {
          let f = c[u];
          (a += lt(f, n, e + a)), (a += lt(s[f], n, e + a, t));
        }
      return a;
    }
    if (r === "function") return 0;
    throw new Error("Unknown type " + r);
  }
  function ut(s, n) {
    let e = typeof s;
    if (e === "string") {
      let t = ps(s);
      if (t < 32) return 1 + t;
      if (t < 256) return 2 + t;
      if (t < 65536) return 3 + t;
      if (t < 4294967296) return 5 + t;
    }
    if (
      (ArrayBuffer.isView && ArrayBuffer.isView(s) && (s = s.buffer),
      s instanceof ArrayBuffer)
    ) {
      let t = s.byteLength;
      if (t < 256) return 2 + t;
      if (t < 65536) return 3 + t;
      if (t < 4294967296) return 5 + t;
    }
    if (typeof s == "number") {
      if (Math.floor(s) !== s) return 9;
      if (s >= 0) {
        if (s < 128) return 1;
        if (s < 256) return 2;
        if (s < 65536) return 3;
        if (s < 4294967296) return 5;
        if (s < 18446744073709552e3) return 9;
        throw new Error("Number too big 0x" + s.toString(16));
      }
      if (s >= -32) return 1;
      if (s >= -128) return 2;
      if (s >= -32768) return 3;
      if (s >= -2147483648) return 5;
      if (s >= -9223372036854776e3) return 9;
      throw new Error("Number too small -0x" + s.toString(16).substr(1));
    }
    if (e === "boolean") return 1;
    if (s === null) return n ? 0 : 1;
    if (s === void 0) return n ? 0 : 3;
    if (typeof s.toJSON == "function") return ut(s.toJSON(), n);
    if (e === "object") {
      let t,
        r = 0;
      if (Array.isArray(s)) {
        t = s.length;
        for (let o = 0; o < t; o++) r += ut(s[o], n);
      } else {
        let o = Er(s, n);
        t = o.length;
        for (let a = 0; a < t; a++) {
          let c = o[a];
          r += ut(c) + ut(s[c], n);
        }
      }
      if (t < 16) return 1 + r;
      if (t < 65536) return 3 + r;
      if (t < 4294967296) return 5 + r;
      throw new Error("Array or object too long 0x" + t.toString(16));
    }
    if (e === "function") return 0;
    throw new Error("Unknown type " + e);
  }
  var Ft = {
    encode: ai,
    decode: di,
    inspect: ii,
    utf8Write: ct,
    utf8Read: vr,
    utf8ByteCount: ps,
  };
  function pi(s, n) {
    return !!n.get("x-ably-errorcode");
  }
  function fi(s, n) {
    if (pi(s, n)) return s.error && h.fromValues(s.error);
  }
  function gi(s) {
    let n = {};
    return (
      s.forEach((e, t) => {
        n[t] = e;
      }),
      n
    );
  }
  async function gs(s, n, e, t, r, o) {
    let a = new Headers(t || {}),
      c = s ? s.toUpperCase() : j(o) ? "GET" : "POST",
      l = new AbortController(),
      u,
      f = new Promise((m) => {
        u = setTimeout(
          () => {
            l.abort(), m({ error: new S("Request timed out", null, 408) });
          },
          n
            ? n.options.timeouts.httpRequestTimeout
            : R.TIMEOUTS.httpRequestTimeout
        );
      }),
      d = { method: c, headers: a, body: o, signal: l.signal };
    p.Config.isWebworker ||
      (d.credentials = a.has("authorization") ? "include" : "same-origin");
    let g = (async () => {
      try {
        let m = new URLSearchParams(r || {});
        m.set("rnd", Te());
        let y = e + "?" + m,
          P = await Xe().fetch(y, d);
        if ((clearTimeout(u), P.status == 204))
          return { error: null, statusCode: P.status };
        let A = P.headers.get("Content-Type"),
          T;
        A && A.indexOf("application/x-msgpack") > -1
          ? (T = await P.arrayBuffer())
          : A && A.indexOf("application/json") > -1
          ? (T = await P.json())
          : (T = await P.text());
        let M = !!A && A.indexOf("application/x-msgpack") === -1,
          U = gi(P.headers);
        return P.ok
          ? {
              error: null,
              body: T,
              headers: U,
              unpacked: M,
              statusCode: P.status,
            }
          : {
              error:
                fi(T, P.headers) ||
                new S(
                  "Error response received from server: " +
                    P.status +
                    " body was: " +
                    p.Config.inspect(T),
                  null,
                  P.status
                ),
              body: T,
              headers: U,
              unpacked: M,
              statusCode: P.status,
            };
      } catch (m) {
        return clearTimeout(u), { error: m };
      }
    })();
    return Promise.race([f, g]);
  }
  var xr = { XHRRequest: Gt, FetchRequest: gs };
  var Ur = Pr(as, rs);
  p.Crypto = Ur;
  p.BufferUtils = rs;
  p.Http = os;
  p.Config = as;
  p.Transports = Mr;
  p.WebStorage = Ht;
  for (let s of [Fe, We]) (s.Crypto = Ur), (s._MsgPack = Ft);
  os.bundledRequestImplementations = xr;
  i.initLogHandlers();
  p.Defaults = Us(Or);
  p.Config.agent && (p.Defaults.agent += " " + p.Config.agent);
  var mi = { ErrorInfo: h, Rest: Fe, Realtime: We, msgpack: Ft };
  if (typeof module.exports == "object" && typeof exports == "object") {
    var __cp = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of Object.getOwnPropertyNames(from)) {
          if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
            Object.defineProperty(to, key, {
              get: () => from[key],
              enumerable:
                !(desc = Object.getOwnPropertyDescriptor(from, key)) ||
                desc.enumerable,
            });
        }
      }
      return to;
    };
    module.exports = __cp(module.exports, exports);
  }
  return module.exports;
});
